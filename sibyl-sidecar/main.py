import json
import os
import sqlite3
from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

DB_PATH = os.environ.get("SIDECAR_DB") or str(
    Path(__file__).resolve().parent / "memory.db"
)

SCHEMA = """
CREATE TABLE IF NOT EXISTS memory (
  tenant_id TEXT NOT NULL,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  body TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (tenant_id, category, name)
)
"""

app = FastAPI()


def _connect():
    conn = sqlite3.connect(DB_PATH)
    conn.execute(SCHEMA)
    return conn


def _now_iso_millis_z():
    return (
        datetime.now(timezone.utc)
        .isoformat(timespec="milliseconds")
        .replace("+00:00", "Z")
    )


def _missing_field(payload, fields):
    for field in fields:
        value = payload.get(field)
        if value is None:
            return field
        if isinstance(value, str) and not value.strip():
            return field
    return None


@app.post("/recall")
async def recall(request: Request):
    try:
        payload = await request.json()
    except Exception:
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_JSON", "message": "body must be JSON"},
        )
    if not isinstance(payload, dict):
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_JSON", "message": "body must be a JSON object"},
        )
    missing = _missing_field(payload, ["tenant_id", "category", "name"])
    if missing:
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "MISSING_FIELD", "message": "missing required field: " + missing},
        )
    tenant_id = payload["tenant_id"]
    category = payload["category"]
    name = payload["name"]

    conn = _connect()
    try:
        row = conn.execute(
            "SELECT body, updated_at FROM memory WHERE tenant_id = ? AND category = ? AND name = ?",
            (tenant_id, category, name),
        ).fetchone()
    finally:
        conn.close()

    if row is None:
        return JSONResponse(
            status_code=200,
            content={"ok": False, "code": "NOT_FOUND", "category": category, "name": name},
        )
    return {
        "ok": True,
        "entity": {
            "tenant_id": tenant_id,
            "category": category,
            "name": name,
            "body": json.loads(row[0]),
            "updated_at": row[1],
        },
    }


@app.post("/remember")
async def remember(request: Request):
    try:
        payload = await request.json()
    except Exception:
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_JSON", "message": "body must be JSON"},
        )
    if not isinstance(payload, dict):
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_JSON", "message": "body must be a JSON object"},
        )
    missing = _missing_field(payload, ["tenant_id", "category", "name", "body"])
    if missing:
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "MISSING_FIELD", "message": "missing required field: " + missing},
        )
    if not isinstance(payload["body"], dict):
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_BODY", "message": "body must be a JSON object"},
        )
    tenant_id = payload["tenant_id"]
    category = payload["category"]
    name = payload["name"]
    body = payload["body"]
    updated_at = _now_iso_millis_z()

    conn = _connect()
    try:
        conn.execute(
            "INSERT OR REPLACE INTO memory (tenant_id, category, name, body, updated_at) VALUES (?, ?, ?, ?, ?)",
            (tenant_id, category, name, json.dumps(body), updated_at),
        )
        conn.commit()
    finally:
        conn.close()

    return {"ok": True, "category": category, "name": name}

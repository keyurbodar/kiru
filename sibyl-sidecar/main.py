import json
import os
import re
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
);
CREATE TABLE IF NOT EXISTS journal (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id TEXT UNIQUE,
  tenant_id TEXT NOT NULL,
  kind TEXT NOT NULL,
  category TEXT,
  name TEXT,
  body TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE VIRTUAL TABLE IF NOT EXISTS search_fts USING fts5(
  doc_key UNINDEXED,
  tenant_id UNINDEXED,
  tier UNINDEXED,
  category UNINDEXED,
  name UNINDEXED,
  text
);
"""

TIERS = ("entity", "state", "reference", "journal")

app = FastAPI()


def _connect():
    conn = sqlite3.connect(DB_PATH)
    conn.executescript(SCHEMA)
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


def _bad_tenant(tenant):
    if not isinstance(tenant, str) or not re.fullmatch(r"\+[0-9]{7,15}", tenant):
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_TENANT", "message": "unknown tenant shape"},
        )
    return None

def _tier(category):
    return "state" if category == "state" else "reference" if category == "reference" else "entity"


def _text(category, name, kind, body_json):
    return " ".join([category or "", name or "", kind or "", body_json])


def _mem_key(tenant, category, name):
    return "m:%s:%s:%s" % (tenant, category, name)


def _put_doc(conn, key, tenant, tier, category, name, text):
    conn.execute(
        "INSERT INTO search_fts (doc_key, tenant_id, tier, category, name, text) VALUES (?, ?, ?, ?, ?, ?)",
        (key, tenant, tier, category, name, text),
    )


def _backfill(conn):
    for tenant, category, name, body in conn.execute(
        "SELECT tenant_id, category, name, body FROM memory"
    ):
        key = _mem_key(tenant, category, name)
        if conn.execute("SELECT 1 FROM search_fts WHERE doc_key = ?", (key,)).fetchone() is None:
            _put_doc(conn, key, tenant, _tier(category), category, name, _text(category, name, "", body))
    for event_id, tenant, kind, category, name, body in conn.execute(
        "SELECT event_id, tenant_id, kind, category, name, body FROM journal"
    ):
        key = "j:" + event_id
        if conn.execute("SELECT 1 FROM search_fts WHERE doc_key = ?", (key,)).fetchone() is None:
            _put_doc(conn, key, tenant, "journal", category or "", name or "", _text(category, name, kind, body))
    conn.commit()


def _zero_hits(conn, tenant, query):
    has = conn.execute("SELECT 1 FROM search_fts WHERE tenant_id = ? LIMIT 1", (tenant,)).fetchone()
    if has:
        return {"ok": True, "query": query, "count": 0, "results": [], "verdict": {"cause": "no_match", "recovery": "try different query terms"}}
    return {"ok": True, "query": query, "count": 0, "results": [], "verdict": {"cause": "empty_store", "recovery": "remember or record data for this tenant first"}}


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
    bad = _bad_tenant(tenant_id)
    if bad:
        return bad
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
    bad = _bad_tenant(tenant_id)
    if bad:
        return bad
    updated_at = _now_iso_millis_z()

    conn = _connect()
    try:
        conn.execute(
            "INSERT OR REPLACE INTO memory (tenant_id, category, name, body, updated_at) VALUES (?, ?, ?, ?, ?)",
            (tenant_id, category, name, json.dumps(body), updated_at),
        )
        key = _mem_key(tenant_id, category, name)
        conn.execute("DELETE FROM search_fts WHERE doc_key = ?", (key,))
        _put_doc(conn, key, tenant_id, _tier(category), category, name, _text(category, name, "", json.dumps(body)))
        conn.commit()
    finally:
        conn.close()

    return {"ok": True, "category": category, "name": name}


@app.post("/search")
async def search(request: Request):
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
    missing = _missing_field(payload, ["tenant_id", "query"])
    if missing:
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "MISSING_FIELD", "message": "missing required field: " + missing},
        )
    tenant = payload["tenant_id"]
    query = payload["query"]
    if not isinstance(tenant, str) or not re.fullmatch(r"\+[0-9]{7,15}", tenant):
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_TENANT", "message": "unknown tenant shape"},
        )
    if not isinstance(query, str) or not query.strip():
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "MISSING_FIELD", "message": "missing required field: query"},
        )
    limit = payload.get("limit", 10)
    if isinstance(limit, bool) or not isinstance(limit, int) or not 1 <= limit <= 50:
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_LIMIT", "message": "limit must be an int from 1 to 50"},
        )
    tiers = None
    if payload.get("tiers") is not None:
        raw = payload["tiers"]
        if not isinstance(raw, str):
            return JSONResponse(
                status_code=400,
                content={"ok": False, "code": "INVALID_TIERS", "message": "tiers must be a comma-separated subset of entity,state,reference,journal"},
            )
        tiers = [part.strip() for part in raw.split(",")]
        if not tiers or any(part not in TIERS for part in tiers):
            return JSONResponse(
                status_code=400,
                content={"ok": False, "code": "INVALID_TIERS", "message": "tiers must be a comma-separated subset of entity,state,reference,journal"},
            )
    # Quote each token so FTS5 parses it as a phrase atom.
    tokens = re.findall(r"[A-Za-z0-9]+", query)
    conn = _connect()
    try:
        _backfill(conn)
        if not tokens:
            return _zero_hits(conn, tenant, query)
        match = " OR ".join('"%s"' % token for token in tokens)
        try:
            if tiers:
                holes = ",".join("?" for _ in tiers)
                rows = conn.execute(
                    "SELECT doc_key, tier, category, name FROM search_fts WHERE search_fts MATCH ? AND tenant_id = ? AND tier IN (%s) ORDER BY bm25(search_fts) LIMIT ?" % holes,
                    (match, tenant, *tiers, limit),
                ).fetchall()
            else:
                rows = conn.execute(
                    "SELECT doc_key, tier, category, name FROM search_fts WHERE search_fts MATCH ? AND tenant_id = ? ORDER BY bm25(search_fts) LIMIT ?",
                    (match, tenant, limit),
                ).fetchall()
        except sqlite3.OperationalError:
            return _zero_hits(conn, tenant, query)
        results = []
        for key, tier, category, name in rows:
            if key.startswith("j:"):
                jrow = conn.execute(
                    "SELECT event_id, kind, category, name, body FROM journal WHERE event_id = ? AND tenant_id = ?",
                    (key[2:], tenant),
                ).fetchone()
                if jrow is None:
                    continue
                results.append({"tier": "journal", "category": jrow[2] or "", "name": jrow[3] or "", "body": json.loads(jrow[4]), "kind": jrow[1], "event_id": jrow[0]})
            else:
                mrow = conn.execute(
                    "SELECT body FROM memory WHERE tenant_id = ? AND category = ? AND name = ?",
                    (tenant, category, name),
                ).fetchone()
                if mrow is None:
                    continue
                results.append({"tier": tier, "category": category, "name": name, "body": json.loads(mrow[0])})
        if not results:
            return _zero_hits(conn, tenant, query)
        return {"ok": True, "query": query, "count": len(results), "results": results}
    finally:
        conn.close()


@app.post("/record")
async def record(request: Request):
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
    missing = _missing_field(payload, ["tenant_id", "kind", "body"])
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
    tenant = payload["tenant_id"]
    kind = payload["kind"]
    body = payload["body"]
    category = payload.get("category", "")
    name = payload.get("name", "")
    if not isinstance(tenant, str) or not re.fullmatch(r"\+[0-9]{7,15}", tenant):
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_TENANT", "message": "unknown tenant shape"},
        )
    if not isinstance(kind, str) or not kind.strip():
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "MISSING_FIELD", "message": "missing required field: kind"},
        )
    if (category is not None and category != "" and not isinstance(category, str)) or (
        name is not None and name != "" and not isinstance(name, str)
    ):
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "INVALID_FIELD", "message": "category and name must be strings when present"},
        )
    raw = json.dumps(body)
    if len(raw.encode("utf-8")) > 65536:
        return JSONResponse(
            status_code=400,
            content={"ok": False, "code": "BODY_TOO_LARGE", "message": "body JSON exceeds 65536 bytes"},
        )
    category = category or ""
    name = name or ""
    conn = _connect()
    try:
        nxt = (conn.execute("SELECT MAX(id) FROM journal").fetchone()[0] or 0) + 1
        event_id = "evt_%02d" % nxt
        conn.execute(
            "INSERT INTO journal (event_id, tenant_id, kind, category, name, body, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
            (event_id, tenant, kind, category, name, raw, _now_iso_millis_z()),
        )
        _put_doc(conn, "j:" + event_id, tenant, "journal", category, name, _text(category, name, kind, raw))
        conn.commit()
    finally:
        conn.close()
    return {"ok": True, "event_id": event_id, "kind": kind}

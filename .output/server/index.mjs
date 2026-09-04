globalThis.__nitro_main__ = import.meta.url;
import { fileURLToPath as __eveFileURLToPath } from "node:url";
import { dirname as __eveDirname } from "node:path";
__eveDirname(__eveFileURLToPath(import.meta.url));
import { a as NodeResponse, i as toEventHandler, n as HTTPError, o as serve, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { Au as installBundledCompiledArtifacts, Ft as applyLocalWorkflowWorldDeliveryTimeoutDefaults, It as xi, Jt as defineTool, Mt as sandboxShutdownPlugin, Nt as validateWorkflowWorld, Pt as resolveLocalWorkflowWorldDataDirectory, Qt as us, Ut as installEveWorkflowQueueNamespace, Wt as dispatchChannelRequest, Xt as _i, Yt as loadFrameworkProgrammaticModule, Zt as gi, ju as memoizeModuleNamespaceFactories } from "./_libs/eve+zod.mjs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
//#region #nitro/virtual/eve-channel/GET /eve/v1/health
const config$25 = { "kind": "production" };
var health_default$1 = (event) => dispatchChannelRequest(event, "GET /eve/v1/health", config$25);
//#endregion
//#region #nitro/virtual/eve-channel/HEAD /eve/v1/health
const config$24 = { "kind": "production" };
var health_default = (event) => dispatchChannelRequest(event, "HEAD /eve/v1/health", config$24);
//#endregion
//#region #nitro/virtual/eve-channel/GET /eve/v1/info
const config$23 = { "kind": "production" };
var info_default = (event) => dispatchChannelRequest(event, "GET /eve/v1/info", config$23);
//#endregion
//#region #nitro/virtual/eve-channel/GET /eve/v1/connections/:name/callback/:attemptId/:token
const config$22 = { "kind": "production" };
var _token_default$11 = (event) => dispatchChannelRequest(event, "GET /eve/v1/connections/:name/callback/:attemptId/:token", config$22);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/connections/:name/callback/:attemptId/:token
const config$21 = { "kind": "production" };
var _token_default$10 = (event) => dispatchChannelRequest(event, "POST /eve/v1/connections/:name/callback/:attemptId/:token", config$21);
//#endregion
//#region #nitro/virtual/eve-channel/GET /eve/v1/connections/:name/callback/:token
const config$20 = { "kind": "production" };
var _token_default$9 = (event) => dispatchChannelRequest(event, "GET /eve/v1/connections/:name/callback/:token", config$20);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/connections/:name/callback/:token
const config$19 = { "kind": "production" };
var _token_default$8 = (event) => dispatchChannelRequest(event, "POST /eve/v1/connections/:name/callback/:token", config$19);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/activity/:token
const config$18 = { "kind": "production" };
var _token_default$7 = (event) => dispatchChannelRequest(event, "POST /eve/v1/activity/:token", config$18);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/callback/:token
const config$17 = { "kind": "production" };
var _token_default$6 = (event) => dispatchChannelRequest(event, "POST /eve/v1/callback/:token", config$17);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/task-input/:token
const config$16 = { "kind": "production" };
var _token_default$5 = (event) => dispatchChannelRequest(event, "POST /eve/v1/task-input/:token", config$16);
//#endregion
//#region #nitro/virtual/eve-channel/GET /.well-known/workflow/v1/webhook/:token
const config$15 = { "kind": "production" };
var _token_default$4 = (event) => dispatchChannelRequest(event, "GET /.well-known/workflow/v1/webhook/:token", config$15);
//#endregion
//#region #nitro/virtual/eve-channel/POST /.well-known/workflow/v1/webhook/:token
const config$14 = { "kind": "production" };
var _token_default$3 = (event) => dispatchChannelRequest(event, "POST /.well-known/workflow/v1/webhook/:token", config$14);
//#endregion
//#region #nitro/virtual/eve-channel/PUT /.well-known/workflow/v1/webhook/:token
const config$13 = { "kind": "production" };
var _token_default$2 = (event) => dispatchChannelRequest(event, "PUT /.well-known/workflow/v1/webhook/:token", config$13);
//#endregion
//#region #nitro/virtual/eve-channel/PATCH /.well-known/workflow/v1/webhook/:token
const config$12 = { "kind": "production" };
var _token_default$1 = (event) => dispatchChannelRequest(event, "PATCH /.well-known/workflow/v1/webhook/:token", config$12);
//#endregion
//#region #nitro/virtual/eve-channel/DELETE /.well-known/workflow/v1/webhook/:token
const config$11 = { "kind": "production" };
var _token_default = (event) => dispatchChannelRequest(event, "DELETE /.well-known/workflow/v1/webhook/:token", config$11);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/session
const config$10 = { "kind": "production" };
var session_default = (event) => dispatchChannelRequest(event, "POST /eve/v1/session", config$10);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/session/:sessionId
const config$9 = { "kind": "production" };
var _sessionId_default = (event) => dispatchChannelRequest(event, "POST /eve/v1/session/:sessionId", config$9);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/session/:sessionId/cancel
const config$8 = { "kind": "production" };
var cancel_default = (event) => dispatchChannelRequest(event, "POST /eve/v1/session/:sessionId/cancel", config$8);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/session/:sessionId/compact
const config$7 = { "kind": "production" };
var compact_default = (event) => dispatchChannelRequest(event, "POST /eve/v1/session/:sessionId/compact", config$7);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/session/:sessionId/clear
const config$6 = { "kind": "production" };
var clear_default = (event) => dispatchChannelRequest(event, "POST /eve/v1/session/:sessionId/clear", config$6);
//#endregion
//#region #nitro/virtual/eve-channel/POST /eve/v1/session/:sessionId/reset
const config$5 = { "kind": "production" };
var reset_default = (event) => dispatchChannelRequest(event, "POST /eve/v1/session/:sessionId/reset", config$5);
//#endregion
//#region #nitro/virtual/eve-channel/GET /eve/v1/session/:sessionId/stream
const config$4 = { "kind": "production" };
var stream_default$1 = (event) => dispatchChannelRequest(event, "GET /eve/v1/session/:sessionId/stream", config$4);
//#endregion
//#region #nitro/virtual/eve-channel/GET /eve/v1/session/:parentSessionId/subagents/:callId/:childSessionId/stream
const config$3 = { "kind": "production" };
var stream_default = (event) => dispatchChannelRequest(event, "GET /eve/v1/session/:parentSessionId/subagents/:callId/:childSessionId/stream", config$3);
//#endregion
//#region #nitro/virtual/eve-channel/GET /
const config$2 = { "kind": "production" };
var GET__default = (event) => dispatchChannelRequest(event, "GET /", config$2);
//#endregion
//#region #nitro/virtual/eve-channel/HEAD /
const config$1 = { "kind": "production" };
var HEAD__default = (event) => dispatchChannelRequest(event, "HEAD /", config$1);
//#endregion
//#region .eve/builds/mtmvs4nd-4e318e93-4738-496b-802c-142bfc4c97e8/host/compiled-artifacts-module-map.mjs
const __filename = fileURLToPath(import.meta.url);
dirname(__filename);
createRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function getEnumValues(entries) {
	const numericValues = Object.values(entries).filter((v) => typeof v === "number");
	return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function joinValues(array, separator = "|") {
	return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
function cached(getter) {
	return { get value() {
		{
			const value = getter();
			Object.defineProperty(this, "value", { value });
			return value;
		}
	} };
}
function nullish(input) {
	return input === null || input === void 0;
}
function cleanRegex(source) {
	const start = source.startsWith("^") ? 1 : 0;
	const end = source.endsWith("$") ? source.length - 1 : source.length;
	return source.slice(start, end);
}
function assignProp(target, prop, value) {
	Object.defineProperty(target, prop, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
function mergeDefs(...defs) {
	const mergedDescriptors = {};
	for (const def of defs) {
		const descriptors = Object.getOwnPropertyDescriptors(def);
		Object.assign(mergedDescriptors, descriptors);
	}
	return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
	return JSON.stringify(str);
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
	return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = cached(() => {
	if (globalConfig.jitless) return false;
	if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
	try {
		new Function("");
		return true;
	} catch (_) {
		return false;
	}
});
function isPlainObject(o) {
	if (isObject(o) === false) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== "function") return true;
	const prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
	return true;
}
function shallowClone(o) {
	if (isPlainObject(o)) return { ...o };
	if (Array.isArray(o)) return [...o];
	if (o instanceof Map) return new Map(o);
	if (o instanceof Set) return new Set(o);
	return o;
}
const propertyKeyTypes = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
	const cl = new inst._zod.constr(def ?? inst._zod.def);
	if (!def || params?.parent) cl._zod.parent = inst;
	return cl;
}
function normalizeParams(_params) {
	const params = _params;
	if (!params) return {};
	if (typeof params === "string") return { error: () => params };
	if (params?.message !== void 0) {
		if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		params.error = params.message;
	}
	delete params.message;
	if (typeof params.error === "string") return {
		...params,
		error: () => params.error
	};
	return params;
}
function stringifyPrimitive(value) {
	if (typeof value === "bigint") return value.toString() + "n";
	if (typeof value === "string") return `"${value}"`;
	return `${value}`;
}
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin !== void 0 && shape[k]._zod.optout === "optional";
	});
}
function pick(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = {};
			for (const key of Reflect.ownKeys(mask)) {
				if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) throw new Error(`Unrecognized key: "${String(key)}"`);
				if (!mask[key]) continue;
				assignProp(newShape, key, currDef.shape[key]);
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function omit(schema, mask) {
	const currDef = schema._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const newShape = { ...schema._zod.def.shape };
			for (const key of Reflect.ownKeys(mask)) {
				if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) throw new Error(`Unrecognized key: "${String(key)}"`);
				if (!mask[key]) continue;
				delete newShape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function extend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = schema._zod.def.shape;
		for (const key of Reflect.ownKeys(shape)) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function safeExtend(schema, shape) {
	if (!isPlainObject(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const _shape = {
			...schema._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function merge(a, b) {
	if (!b?._zod?.def) throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return clone(a, mergeDefs(a._zod.def, {
		get shape() {
			const _shape = {
				...a._zod.def.shape,
				...b._zod.def.shape
			};
			assignProp(this, "shape", _shape);
			return _shape;
		},
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: b._zod.def.checks ?? []
	}));
}
function partial(Class, schema, mask, name = "partial") {
	const checks = schema._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
	return clone(schema, mergeDefs(schema._zod.def, {
		get shape() {
			const oldShape = schema._zod.def.shape;
			const shape = { ...oldShape };
			if (mask) for (const key of Reflect.ownKeys(mask)) {
				if (!Object.prototype.hasOwnProperty.call(oldShape, key)) throw new Error(`Unrecognized key: "${String(key)}"`);
				if (!mask[key]) continue;
				shape[key] = Class ? new Class({
					type: "optional",
					innerType: oldShape[key]
				}) : oldShape[key];
			}
			else for (const key of Reflect.ownKeys(oldShape)) shape[key] = Class ? new Class({
				type: "optional",
				innerType: oldShape[key]
			}) : oldShape[key];
			assignProp(this, "shape", shape);
			return shape;
		},
		checks: []
	}));
}
function required(Class, schema, mask) {
	return clone(schema, mergeDefs(schema._zod.def, { get shape() {
		const oldShape = schema._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key of Reflect.ownKeys(mask)) {
			if (!Object.prototype.hasOwnProperty.call(shape, key)) throw new Error(`Unrecognized key: "${String(key)}"`);
			if (!mask[key]) continue;
			shape[key] = new Class({
				type: "nonoptional",
				innerType: oldShape[key]
			});
		}
		else for (const key of Reflect.ownKeys(oldShape)) shape[key] = new Class({
			type: "nonoptional",
			innerType: oldShape[key]
		});
		assignProp(this, "shape", shape);
		return shape;
	} }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
	return false;
}
function explicitlyAborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
	return false;
}
function prefixIssues(path, issues) {
	return issues.map((iss) => {
		var _a;
		(_a = iss).path ?? (_a.path = []);
		iss.path.unshift(path);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
function attachSchema(issues, start, inst) {
	var _a;
	for (let i = start; i < issues.length; i++) (_a = issues[i]).schema ?? (_a.schema = inst);
}
function finalizeIssue(iss, ctx, config) {
	var _a;
	const traits = iss.inst?._zod?.traits;
	if (traits?.has("$ZodType")) {
		if (traits.has("$ZodCheck")) (_a = iss).schema ?? (_a.schema = iss.inst);
		else iss.schema = iss.inst;
	}
	const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : void 0;
	const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
	const { inst: _inst, schema: _schema, continue: _continue, input: _input, ...rest } = iss;
	rest.path ?? (rest.path = []);
	rest.message = message;
	if (ctx?.reportInput) rest.input = _input;
	return rest;
}
const highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
	const units = str.length;
	if (!highSurrogate.test(str)) return units;
	let count = units;
	for (let i = 0; i < units - 1; i++) if ((str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
		count--;
		i++;
	}
	return count;
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
}
function parsedType(data) {
	const t = typeof data;
	switch (t) {
		case "number": return Number.isNaN(data) ? "nan" : "number";
		case "object": {
			if (data === null) return "null";
			if (Array.isArray(data)) return "array";
			const obj = data;
			if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) return obj.constructor.name;
		}
	}
	return t;
}
function issue(...args) {
	const [iss, input, inst] = args;
	if (typeof iss === "string") return {
		message: iss,
		code: "custom",
		input,
		inst
	};
	return { ...iss };
}
function members(proto, table) {
	for (const key in table) {
		const desc = Object.getOwnPropertyDescriptor(table, key);
		if (desc.get) Object.defineProperty(proto, key, {
			...desc,
			enumerable: false
		});
		else defineBound(proto, key, desc.value);
	}
}
function own(inst, key, value, enumerable = true) {
	Object.defineProperty(inst, key, {
		configurable: true,
		writable: true,
		enumerable,
		value
	});
	return value;
}
function hide(inst, key, value) {
	return own(inst, key, value, false);
}
function defineBound(proto, key, fn) {
	Object.defineProperty(proto, key, {
		configurable: true,
		get() {
			return this == null ? fn : own(this, key, fn.bind(this));
		},
		set(value) {
			own(this, key, value);
		}
	});
}
function claim(inst, sentinel) {
	const proto = Object.getPrototypeOf(inst);
	return sentinel in proto ? void 0 : proto;
}
let installing;
let broke = false;
const breaker = {
	configurable: true,
	get() {
		broke = true;
	}
};
function defineLazyInternal(inst, key, compute) {
	const proto = Object.getPrototypeOf(inst._zod);
	if (key in proto && installing !== inst._zod) {
		installing = void 0;
		return;
	}
	installing = inst._zod;
	Object.defineProperty(proto, key, {
		configurable: true,
		get() {
			Object.defineProperty(this, key, breaker);
			const outer = broke;
			broke = false;
			try {
				const value = compute(this);
				if (broke) delete this[key];
				else Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					value
				});
				broke = broke || outer;
				return value;
			} catch (err) {
				delete this[key];
				broke = broke || outer;
				throw err;
			}
		},
		set(value) {
			Object.defineProperty(this, key, {
				configurable: true,
				writable: true,
				value
			});
		}
	});
}
function installLazyProp(inst, key, make, enumerable) {
	const proto = claim(inst, key);
	if (!proto) return;
	Object.defineProperty(proto, key, {
		configurable: true,
		get() {
			const desc = {
				configurable: true,
				writable: true,
				enumerable,
				value: void 0
			};
			Object.defineProperty(this, key, desc);
			desc.value = make(this);
			Object.defineProperty(this, key, desc);
			return desc.value;
		},
		set(value) {
			Object.defineProperty(this, key, {
				configurable: true,
				writable: true,
				enumerable,
				value
			});
		}
	});
}
const CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
	const fn = () => value;
	fn[CONSTANT_CATCH] = true;
	return fn;
}
var _a$1;
const _zodDesc$1 = {
	value: void 0,
	enumerable: false
};
let _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
	const E = _E;
	if (E) {
		const saved = E.stackTraceLimit;
		if (typeof saved === "number") {
			try {
				E.stackTraceLimit = 0;
			} catch {
				_E = null;
				return new Definition();
			}
			try {
				return new Definition();
			} finally {
				E.stackTraceLimit = saved;
			}
		}
	}
	return new Definition();
}
function $constructor(name, initializer, proto, params) {
	const zodProto = {};
	function Internals(def) {
		this.def = def;
		this.constr = _;
		this.traits = /* @__PURE__ */ new Set();
	}
	Internals.prototype = zodProto;
	const protoMembers = proto;
	const initialized = protoMembers && /* @__PURE__ */ new WeakSet();
	function init(inst, def) {
		if (!inst._zod) {
			_zodDesc$1.value = new Internals(def);
			try {
				Object.defineProperty(inst, "_zod", _zodDesc$1);
			} finally {
				_zodDesc$1.value = void 0;
			}
		}
		if (inst._zod.traits.has(name)) return;
		inst._zod.traits.add(name);
		initializer(inst, def);
		if (initialized) {
			const own = Object.getPrototypeOf(inst);
			const ctorProto = inst._zod.constr.prototype;
			let up = own;
			while (up && up !== ctorProto) up = Object.getPrototypeOf(up);
			const target = up ?? own;
			if (!initialized.has(target)) {
				initialized.add(target);
				members(target, protoMembers);
			}
		}
		const proto = _.prototype;
		for (const k in proto) {
			if (!Object.prototype.hasOwnProperty.call(proto, k)) continue;
			if (!(k in inst)) inst[k] = proto[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name });
	function _(def) {
		const inst = params?.Parent ? newError(Definition) : this;
		init(inst, def);
		const deferred = inst._zod.deferred;
		if (deferred) {
			for (const fn of deferred) fn();
			inst._zod.deferred = void 0;
		}
		const pp = globalThis.__zod_globalConfig?.postProcessor;
		if (pp) pp(inst);
		return inst;
	}
	Object.defineProperty(_, "init", { value: init });
	Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
		if (params?.Parent && inst instanceof params.Parent) return true;
		return inst?._zod?.traits?.has(name);
	} });
	Object.defineProperty(_, "name", { value: name });
	return _;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
	}
};
var $ZodEncodeError = class extends Error {
	constructor(name) {
		super(`Encountered unidirectional transform during encode: ${name}`);
		this.name = "ZodEncodeError";
	}
};
(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}
function _getMessage() {
	const internals = this._zod;
	internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
	return internals.message;
}
function _setMessage(value) {
	this._zod.message = value;
}
const _messageDesc = {
	get: _getMessage,
	set: _setMessage,
	enumerable: true,
	configurable: true
};
const _zodDesc = {
	value: void 0,
	enumerable: false
};
const _issuesDesc = {
	value: void 0,
	enumerable: false
};
const _installedToString = new WeakSet([Object.prototype, Error.prototype]);
const initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	_zodDesc.value = inst._zod;
	Object.defineProperty(inst, "_zod", _zodDesc);
	_issuesDesc.value = def;
	Object.defineProperty(inst, "issues", _issuesDesc);
	_zodDesc.value = void 0;
	_issuesDesc.value = void 0;
	Object.defineProperty(inst, "message", _messageDesc);
	const proto = Object.getPrototypeOf(inst);
	if (!_installedToString.has(proto)) {
		_installedToString.add(proto);
		Object.defineProperty(proto, "toString", {
			configurable: true,
			enumerable: false,
			get() {
				const value = () => this.message;
				Object.defineProperty(this, "toString", {
					value,
					configurable: true,
					writable: true
				});
				return value;
			},
			set(value) {
				Object.defineProperty(this, "toString", {
					value,
					configurable: true,
					writable: true
				});
			}
		});
	}
};
const $ZodError = $constructor("$ZodError", initializer$1);
const $ZodRealError = $constructor("$ZodError", initializer$1, void 0, { Parent: Error });
function node(obj, key, make) {
	if (!Object.prototype.hasOwnProperty.call(obj, key)) {
		if (key === "__proto__") Object.defineProperty(obj, key, {
			value: make(),
			writable: true,
			enumerable: true,
			configurable: true
		});
		else obj[key] = make();
	}
	return obj[key];
}
function flattenError(error, mapper = (issue) => issue.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error.issues) if (sub.path.length > 0) node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
	else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error, mapper = (issue) => issue.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error, path = []) => {
		for (const issue of error.issues) if (issue.code === "invalid_union" && issue.errors.length) issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
		else if (issue.code === "invalid_key") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else if (issue.code === "invalid_element") processError({ issues: issue.issues }, [...path, ...issue.path]);
		else {
			const fullpath = [...path, ...issue.path];
			if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < fullpath.length) {
					const el = fullpath[i];
					const terminal = i === fullpath.length - 1;
					if (el === "_errors") {
						if (terminal) curr._errors.push(mapper(issue));
						i++;
						continue;
					}
					if (!Object.prototype.hasOwnProperty.call(curr, el)) Object.defineProperty(curr, el, {
						value: { _errors: [] },
						enumerable: true,
						writable: true,
						configurable: true
					});
					const node = curr[el];
					if (terminal) node._errors.push(mapper(issue));
					curr = node;
					i++;
				}
			}
		}
	};
	processError(error);
	return fieldErrors;
}
function finalizeParams(callee, params) {
	return {
		callee: params?.callee ?? callee,
		Err: params?.Err
	};
}
const _parse = (_Err) => {
	const fn = (schema, value, _ctx, _params) => {
		const ctx = _ctx ? {
			..._ctx,
			async: false
		} : { async: false };
		const result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) throw new $ZodAsyncError();
		if (result.issues.length) {
			const e = new ((_params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
			captureStackTrace(e, _params?.callee ?? fn);
			throw e;
		}
		return result.value;
	};
	return fn;
};
const _parseAsync = (_Err) => {
	const fn = async (schema, value, _ctx, params) => {
		const ctx = _ctx ? {
			..._ctx,
			async: true
		} : { async: true };
		let result = schema._zod.run({
			value,
			issues: []
		}, ctx);
		if (result instanceof Promise) result = await result;
		if (result.issues.length) {
			const e = new ((params?.Err) ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
			captureStackTrace(e, params?.callee ?? fn);
			throw e;
		}
		return result.value;
	};
	return fn;
};
const _safeParse = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? {
		success: false,
		error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
const safeParse$1 = _safeParse($ZodRealError);
const _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? {
		success: false,
		error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
const safeParseAsync$1 = _safeParseAsync($ZodRealError);
const _encode = (_Err) => {
	const parse = _parse(_Err);
	const fn = (schema, value, _ctx, _params) => {
		const ctx = _ctx ? {
			..._ctx,
			direction: "backward"
		} : { direction: "backward" };
		return parse(schema, value, ctx, finalizeParams(fn, _params));
	};
	return fn;
};
const _decode = (_Err) => {
	const parse = _parse(_Err);
	const fn = (schema, value, _ctx, _params) => {
		return parse(schema, value, _ctx, finalizeParams(fn, _params));
	};
	return fn;
};
const _encodeAsync = (_Err) => {
	const parseAsync = _parseAsync(_Err);
	const fn = async (schema, value, _ctx, _params) => {
		const ctx = _ctx ? {
			..._ctx,
			direction: "backward"
		} : { direction: "backward" };
		return await parseAsync(schema, value, ctx, finalizeParams(fn, _params));
	};
	return fn;
};
const _decodeAsync = (_Err) => {
	const parseAsync = _parseAsync(_Err);
	const fn = async (schema, value, _ctx, _params) => {
		return await parseAsync(schema, value, _ctx, finalizeParams(fn, _params));
	};
	return fn;
};
const _safeEncode = (_Err) => (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParse(_Err)(schema, value, ctx);
};
const _safeDecode = (_Err) => (schema, value, _ctx) => {
	return _safeParse(_Err)(schema, value, _ctx);
};
const _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParseAsync(_Err)(schema, value, ctx);
};
const _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
	return _safeParseAsync(_Err)(schema, value, _ctx);
};
const $ZodCheck = $constructor("$ZodCheck", (inst, def) => {
	var _a;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a = inst._zod).onattach ?? (_a.onattach = []);
});
const _whenHasLength = (payload) => {
	const val = payload.value;
	return !nullish(val) && val.length !== void 0;
};
const $ZodCheckMaxLength = $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		if ((typeof input === "string" && units > def.maximum ? codePointLength(input) : units) <= def.maximum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMinLength = $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
	inst._zod.onattach.push((inst) => {
		const curr = inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		if ((typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units) >= def.minimum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckLengthEquals = $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a;
	$ZodCheck.init(inst, def);
	(_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
	inst._zod.onattach.push((inst) => {
		const bag = inst._zod.bag;
		bag.minimum = def.length;
		bag.maximum = def.length;
		bag.length = def.length;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const units = input.length;
		const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
		if (length === def.length) return;
		const origin = getLengthableOrigin(input);
		const tooBig = length > def.length;
		payload.issues.push({
			origin,
			...tooBig ? {
				code: "too_big",
				maximum: def.length
			} : {
				code: "too_small",
				minimum: def.length
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckOverwrite = $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});
var Doc = class {
	constructor(args = [], closed = {}) {
		this.content = [];
		this.indent = 0;
		this.args = args;
		this.closed = closed;
	}
	indented(fn) {
		this.indent += 1;
		fn(this);
		this.indent -= 1;
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line of dedented) this.content.push(line);
	}
	compile() {
		const F = Function;
		const content = this?.content ?? [``];
		return new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${content.join("\n")}\n};`)(...Object.values(this.closed));
	}
};
const version = {
	major: 4,
	minor: 5,
	patch: 4
};
const $ZodType = $constructor("$ZodType", (inst, def) => {
	var _a;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const defChecks = inst._zod.def.checks;
	const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks, ctx) => {
			if (payload.memo) return payload;
			let isAborted = aborted(payload);
			let asyncResult;
			for (const ch of checks) {
				if (ch._zod.def.when) {
					if (explicitlyAborted(payload)) continue;
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					attachSchema(payload.issues, currLen, inst);
					if (!isAborted) isAborted = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					attachSchema(payload.issues, currLen, inst);
					if (!isAborted) isAborted = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		const handleCanaryResult = (canary, payload, ctx) => {
			if (aborted(canary)) {
				canary.aborted = true;
				return canary;
			}
			const checkResult = runChecks(payload, checks, ctx);
			if (checkResult instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
			}
			return inst._zod.parse(checkResult, ctx);
		};
		inst._zod.run = (payload, ctx) => {
			if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
			if (ctx.direction === "backward") {
				const canary = inst._zod.parse({
					value: payload.value,
					issues: []
				}, {
					...ctx,
					skipChecks: true
				});
				if (canary instanceof Promise) return canary.then((canary) => {
					return handleCanaryResult(canary, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result) => runChecks(result, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
}, {
	get "~standard"() {
		return hide(this, "~standard", standardProps(this));
	},
	set "~standard"(value) {
		own(this, "~standard", value);
	}
});
const toStandardResult = (r) => r.success ? { value: r.data } : { issues: r.error?.issues };
function standardProps(inst) {
	return {
		validate: (value) => {
			try {
				return toStandardResult(safeParse$1(inst, value));
			} catch (_) {
				return safeParseAsync$1(inst, value).then(toStandardResult);
			}
		},
		vendor: "zod",
		version: 1
	};
}
const $ZodUnknown = $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
const $ZodNever = $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
function handleArrayResult(result, final, index) {
	if (result.issues.length) final.issues.push(...prefixIssues(index, result.issues));
	final.value[index] = result.value;
}
const $ZodArray = $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	const memo = globalConfig.memoizer;
	memo?.attach(inst);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				expected: "array",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = memo ? memo.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
		const proms = [];
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result) => handleArrayResult(result, payload, i)));
			else handleArrayResult(result, payload, i);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handlePropertyResult(result, final, key, input, optin, optout) {
	const isPresent = key in input;
	const isOptionalOut = optout === "optional";
	if (!isPresent && isOptionalOut && optin === "optional") return;
	if (result.issues.length) {
		if (optin !== void 0 && isOptionalOut && !isPresent) return;
		final.issues.push(...prefixIssues(key, result.issues));
	}
	if (!isPresent && optin === void 0) {
		if (!result.issues.length) final.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [key]
		});
		return;
	}
	if (result.value === void 0) {
		if (isPresent) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
const NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	const ownSymbols = Object.getOwnPropertySymbols(def.shape);
	const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
	const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
	for (const k of allKeys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		allKeys,
		symbolKeys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const optin = _catchall.optin;
	const optout = _catchall.optout;
	for (const key in input) {
		if (keySet.has(key)) continue;
		if (key === "__proto__") {
			if (t === "never") unrecognized.push(key);
			continue;
		}
		if (t === "never") {
			unrecognized.push(key);
			continue;
		}
		const r = _catchall.run({
			value: input[key],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
		else handlePropertyResult(r, payload, key, input, optin, optout);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst,
		continue: true
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
const propShapes = /* @__PURE__ */ new WeakMap();
const $ZodObject = $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
		const sh = def.shape;
		propShapes.set(def, sh);
		Object.defineProperty(def, "shape", { get: () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			propShapes.set(def, newSh);
			return newSh;
		} });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazyInternal(inst, "propValues", (zod) => {
		const shape = zod.def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				if (!Object.prototype.hasOwnProperty.call(propValues, key)) assignProp(propValues, key, /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
				if (field.optin !== void 0) propValues[key].add(void 0);
			}
		}
		return propValues;
	});
	const isObject$1 = isObject;
	const catchall = def.catchall;
	let value;
	const memo = globalConfig.memoizer;
	memo?.attach(inst);
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
		const proms = [];
		const shape = value.shape;
		for (const key of value.allKeys) {
			if (key === "__proto__") continue;
			const el = shape[key];
			const optin = el._zod.optin;
			const optout = el._zod.optout;
			const r = el._zod.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
			else handlePropertyResult(r, payload, key, input, optin, optout);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
	};
});
const $ZodObjectJIT = $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const memo = globalConfig.memoizer;
	const generateFastpass = (shape) => {
		const normalized = _normalized.value;
		const syms = normalized.symbolKeys;
		const doc = new Doc(["payload", "ctx"], {
			shape,
			inst,
			memo,
			syms
		});
		const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		const prefixStr = (id, k) => `
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
          }`;
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.allKeys) ids[key] = `key_${counter++}`;
		doc.write(memo ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
		for (const key of normalized.allKeys) {
			if (key === "__proto__") continue;
			const id = ids[key];
			const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key);
			const isPresent = `${k} in input`;
			const schema = shape[key];
			const optin = schema?._zod?.optin;
			const isOptionalIn = optin !== void 0;
			const isOptionalOut = schema?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(k)};`);
			if (isOptionalIn && isOptionalOut) {
				const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
				doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
			} else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
			else doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        
        if (${id}.value === undefined) {
          if (${isPresent}) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }

      `);
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		return doc.compile();
	};
	let fastpass;
	const isObject$2 = isObject;
	const jit = !globalConfig.jitless;
	const fastEnabled = jit && allowsEval.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$2(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst);
		}
		return superParse(payload, ctx);
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	const nonaborted = results.filter((r) => !aborted(r));
	if (nonaborted.length === 1) {
		final.value = nonaborted[0].value;
		return nonaborted[0];
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
const $ZodUnion = $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0);
	defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazyInternal(inst, "values", (zod) => {
		if (zod.def.options.every((o) => o._zod.values)) return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazyInternal(inst, "pattern", (zod) => {
		if (zod.def.options.every((o) => o._zod.pattern)) {
			const patterns = zod.def.options.map((o) => o._zod.pattern);
			return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const first = def.options.length === 1 ? def.options[0]._zod.run : null;
	inst._zod.parse = (payload, ctx) => {
		if (first) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else {
				if (result.issues.length === 0) return result;
				results.push(result);
			}
		}
		if (!async) return handleUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results) => {
			return handleUnionResults(results, payload, inst, ctx);
		});
	};
});
const $ZodIntersection = $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left, right]) => {
			return handleIntersectionResults(payload, left, right);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject(a) && isPlainObject(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		if (Object.prototype.hasOwnProperty.call(newObj, "__proto__")) delete newObj.__proto__;
		for (const key of sharedKeys) {
			if (key === "__proto__") continue;
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
			};
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index = 0; index < a.length; index++) {
			const itemA = a[index];
			const itemB = b[index];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
			};
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	}
	return {
		valid: false,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(result, left, right) {
	const unrecKeys = /* @__PURE__ */ new Map();
	let unrecIssue;
	const keyIssues = /* @__PURE__ */ new Map();
	const collect = (iss, side) => {
		let keys;
		if (iss.code === "unrecognized_keys" && !iss.path?.length) {
			unrecIssue ?? (unrecIssue = iss);
			keys = iss.keys;
		} else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
			const k = String(iss.path[0]);
			if (!keyIssues.has(k)) keyIssues.set(k, iss);
			keys = [k];
		} else return false;
		for (const k of keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k)[side] = true;
		}
		return true;
	};
	for (const iss of left.issues) if (!collect(iss, "l")) result.issues.push(iss);
	for (const iss of right.issues) if (!collect(iss, "r")) result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length) {
		const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
		if (aggregated.length) result.issues.push({
			...unrecIssue,
			keys: aggregated
		});
		for (const k of bothKeys) if (!aggregated.includes(k) && keyIssues.has(k)) result.issues.push(keyIssues.get(k));
	}
	const merged = mergeValues(left.value, right.value);
	if (!merged.valid) {
		if (aborted(result)) return result;
		throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	}
	result.value = merged.data;
	return result;
}
const $ZodEnum = $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	const patternValues = values.filter((k) => propertyKeyTypes.has(typeof k));
	inst._zod.pattern = new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (valuesSet.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
const $ZodTransform = $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	globalConfig.memoizer?.guard(inst);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		const _out = def.transform(payload.value, payload);
		if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		return payload;
	};
});
function handleOptionalResult(payload, result) {
	payload.value = result.issues.length ? void 0 : result.value;
	return payload;
}
const $ZodOptional = $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
	inst._zod.optout = "optional";
	defineLazyInternal(inst, "values", (zod) => {
		const values = zod.def.innerType._zod.values;
		return values ? /* @__PURE__ */ new Set([...values, void 0]) : void 0;
	});
	defineLazyInternal(inst, "pattern", (zod) => {
		const pattern = zod.def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === void 0) {
			if (def.innerType._zod.optin !== "defaulted") return payload;
			const result = def.innerType._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) return result.then((result) => handleOptionalResult(payload, result));
			return handleOptionalResult(payload, result);
		}
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodExactOptional = $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodNullable = $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
	defineLazyInternal(inst, "pattern", (zod) => {
		const pattern = zod.def.innerType._zod.pattern;
		return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazyInternal(inst, "values", (zod) => {
		return zod.def.innerType._zod.values ? /* @__PURE__ */ new Set([...zod.def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodDefault = $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "defaulted";
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleDefaultResult(result, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
const $ZodPrefault = $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "defaulted";
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodNonOptional = $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => {
		const v = zod.def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result) => handleNonOptionalResult(result, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
function handleCatchResult(payload, result, def, ctx) {
	if (!result.issues.length) {
		payload.value = result.value;
		if (result.memo) payload.memo = true;
		return payload;
	}
	payload.value = def.catchValue({
		...result,
		value: payload.value,
		error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
		input: payload.value
	});
	return payload;
}
const $ZodCatch = $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run({
			value: payload.value,
			issues: []
		}, ctx);
		if (result instanceof Promise) return result.then((result) => handleCatchResult(payload, result, def, ctx));
		return handleCatchResult(payload, result, def, ctx);
	};
});
const $ZodPipe = $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
	defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
	defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right) => handlePipeResult(right, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left) => handlePipeResult(left, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next, ctx) {
	if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
		left.aborted = true;
		return left;
	}
	return next._zod.run({
		value: left.value,
		issues: left.issues
	}, ctx);
}
const $ZodReadonly = $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
	defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
	defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
	defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	if (!payload.memo) payload.value = Object.freeze(payload.value);
	return payload;
}
const $ZodCustom = $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r) => handleRefineResult(r, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}
var $ZodCyclicError = class extends Error {
	constructor() {
		super(`Cannot parse a reference cycle that closes through a transform`);
		this.name = "ZodCyclicError";
	}
};
const STATE = "~memo";
const NO_ISSUES = [];
function cloneIssues(issues) {
	return issues.map((iss) => iss.path ? {
		...iss,
		path: iss.path.slice()
	} : { ...iss });
}
const recursive = /* @__PURE__ */ new WeakMap();
function isRecursive(inst, stack) {
	const cached = recursive.get(inst);
	if (cached !== void 0) return cached;
	if (stack.has(inst)) return true;
	stack.add(inst);
	let result = false;
	const check = (child) => {
		if (!result && child?._zod && isRecursive(child, stack)) result = true;
	};
	const def = inst._zod.def;
	switch (def.type) {
		case "object":
			for (const key of Reflect.ownKeys(def.shape)) check(def.shape[key]);
			check(def.catchall);
			break;
		case "array":
			check(def.element);
			break;
		case "tuple":
			for (const el of def.items) check(el);
			check(def.rest);
			break;
		case "record":
		case "map":
			check(def.keyType);
			check(def.valueType);
			break;
		case "set":
			check(def.valueType);
			break;
		case "union":
			for (const el of def.options) check(el);
			break;
		case "intersection":
			check(def.left);
			check(def.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			check(def.innerType);
			break;
		case "pipe":
			check(def.in);
			check(def.out);
			break;
		case "function":
			check(def.input);
			check(def.output);
			break;
		case "lazy":
			check(inst._zod.innerType);
			break;
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (const key in def) {
			const desc = Object.getOwnPropertyDescriptor(def, key);
			if (!desc || desc.get) continue;
			const value = desc.value;
			if (!value || typeof value !== "object") continue;
			if (value._zod) check(value);
			else if (Array.isArray(value)) for (const el of value) check(el);
		}
	}
	stack.delete(inst);
	recursive.set(inst, result);
	return result;
}
function bucketFor(state, inst) {
	let bucket = state.buckets.get(inst);
	if (!bucket) {
		bucket = /* @__PURE__ */ new Map();
		state.buckets.set(inst, bucket);
	}
	return bucket;
}
let handoff;
const open = [];
const memo = {
	alloc(_inst, payload, empty) {
		const bucket = handoff;
		if (!bucket) return empty;
		handoff = void 0;
		const entry = {
			value: empty,
			issues: null
		};
		bucket.set(payload.value, entry);
		open.push(entry);
		return empty;
	},
	guard(inst) {
		var _a;
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred.push(() => {
			const base = inst._zod.parse;
			const wrapped = (payload, ctx) => {
				if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value)) throw new $ZodCyclicError();
				return base(payload, ctx);
			};
			inst._zod.parse = wrapped;
			if (inst._zod.run === base) inst._zod.run = wrapped;
		});
	},
	attach(inst) {
		var _a;
		let isRecursiveInst;
		let lastCtx;
		let lastBucket;
		(_a = inst._zod).deferred ?? (_a.deferred = []);
		inst._zod.deferred.push(() => {
			const base = inst._zod.parse;
			const wrapped = (payload, ctx) => {
				if (isRecursiveInst === void 0) {
					isRecursiveInst = isRecursive(inst, /* @__PURE__ */ new Set());
					if (!isRecursiveInst) {
						inst._zod.parse = base;
						if (inst._zod.run === wrapped) inst._zod.run = base;
						return base(payload, ctx);
					}
				}
				const input = payload.value;
				if (input === null || typeof input !== "object") return base(payload, ctx);
				let state = ctx[STATE];
				if (!state) {
					state = {
						buckets: /* @__PURE__ */ new Map(),
						backEdges: void 0
					};
					ctx[STATE] = state;
				}
				let bucket;
				if (lastCtx === ctx) bucket = lastBucket;
				else {
					bucket = bucketFor(state, inst);
					lastCtx = ctx;
					lastBucket = bucket;
				}
				const hit = bucket.get(input);
				if (hit) {
					payload.value = hit.value;
					if (hit.issues) {
						if (hit.issues.length) payload.issues.push(...cloneIssues(hit.issues));
					} else {
						payload.memo = true;
						state.backEdges ?? (state.backEdges = /* @__PURE__ */ new Set());
						state.backEdges.add(hit.value);
					}
					return payload;
				}
				handoff = bucket;
				const depth = open.length;
				const result = base(payload, ctx);
				handoff = void 0;
				const entry = open.length > depth ? open.pop() : void 0;
				if (result instanceof Promise) return result.then((r) => {
					if (entry) entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
					return r;
				});
				if (entry) entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
				return result;
			};
			inst._zod.parse = wrapped;
			if (inst._zod.run === base) inst._zod.run = wrapped;
		});
	}
};
function memoizer() {
	return memo;
}
function isBackEdge(ctx, value) {
	const backEdges = ctx[STATE]?.backEdges;
	return backEdges !== void 0 && value !== null && typeof value === "object" && backEdges.has(value);
}
const error = () => {
	const Sizable = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function getSizing(origin) {
		return Sizable[origin] ?? null;
	}
	const FormatDictionary = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		credit_card: "credit card number",
		jwt: "JWT",
		template_literal: "input"
	};
	const TypeDictionary = { nan: "NaN" };
	function getTypeName(type, input) {
		if (type === "number" && typeof input === "number" && !Number.isFinite(input)) return String(input);
		return TypeDictionary[type] ?? type;
	}
	return (issue) => {
		switch (issue.code) {
			case "invalid_type": return `Invalid input: expected ${getTypeName(issue.expected)}, received ${getTypeName(parsedType(issue.input), issue.input)}`;
			case "invalid_value":
				if (issue.values.length === 1) return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
				return `Invalid option: expected one of ${joinValues(issue.values, "|")}`;
			case "too_big": {
				const adj = issue.exact ? "exactly " : issue.inclusive ? "<=" : "<";
				const sizing = getSizing(issue.origin);
				if (sizing) return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
				return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
			}
			case "too_small": {
				const adj = issue.exact ? "exactly " : issue.inclusive ? ">=" : ">";
				const sizing = getSizing(issue.origin);
				if (sizing) return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
				return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
			}
			case "invalid_format": {
				const _issue = issue;
				if (_issue.format === "starts_with") return `Invalid string: must start with "${_issue.prefix}"`;
				if (_issue.format === "ends_with") return `Invalid string: must end with "${_issue.suffix}"`;
				if (_issue.format === "includes") return `Invalid string: must include "${_issue.includes}"`;
				if (_issue.format === "regex") return `Invalid string: must match pattern ${_issue.pattern}`;
				return `Invalid ${FormatDictionary[_issue.format] ?? issue.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${issue.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${issue.origin}`;
			case "invalid_union":
				if (issue.options && Array.isArray(issue.options) && issue.options.length > 0) return `Invalid discriminator value. Expected ${issue.options.map((o) => `'${o}'`).join(" | ")}`;
				if (issue.inclusive === false) return "Invalid input: more than one option matched";
				return "Invalid input";
			case "invalid_element": return `Invalid value in ${issue.origin}`;
			default: return `Invalid input`;
		}
	};
};
function en_default() {
	return { localeError: error() };
}
var _a;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema, ..._meta) {
		const meta = _meta[0];
		this._map.set(schema, meta);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.set(meta.id, schema);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema) {
		const meta = this._map.get(schema);
		if (meta && typeof meta === "object" && "id" in meta) this._idmap.delete(meta.id);
		this._map.delete(schema);
		return this;
	}
	get(schema) {
		const p = schema._zod.parent;
		if (p) {
			const pm = { ...this.get(p) ?? {} };
			delete pm.id;
			const f = {
				...pm,
				...this._map.get(schema)
			};
			return Object.keys(f).length ? f : void 0;
		}
		return this._map.get(schema);
	}
	has(schema) {
		return this._map.has(schema);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
function _superRefine(fn, params) {
	const ch = _check((payload) => {
		payload.addIssue = (issue$2) => {
			if (typeof issue$2 === "string") payload.issues.push(issue(issue$2, payload.value, ch._zod.def));
			else {
				const _issue = issue$2;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				if (!("input" in _issue)) _issue.input = payload.value;
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	}, params);
	return ch;
}
function _check(fn, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn;
	return ch;
}
function assignProps(target, ...sources) {
	for (const source of sources) for (const key of Reflect.ownKeys(source)) if (Object.prototype.propertyIsEnumerable.call(source, key)) assignProp(target, key, source[key]);
	return target;
}
function initializeContext(params) {
	let target = params?.target ?? "draft-2020-12";
	if (target === "draft-4") target = "draft-04";
	if (target === "draft-7") target = "draft-07";
	return {
		processors: params.processors ?? {},
		metadataRegistry: params?.metadata ?? globalRegistry,
		target,
		unrepresentable: params?.unrepresentable ?? "throw",
		override: params?.override ?? (() => {}),
		io: params?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: params?.external ?? void 0
	};
}
function handleUnrepresentable(schema, ctx, json, params, message) {
	const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({
		zodSchema: schema,
		path: params.path,
		message
	}) : ctx.unrepresentable;
	if (result === "any") return false;
	if (result === void 0 || result === "throw") throw new Error(message);
	Object.assign(json, result);
	return true;
}
function process$1(schema, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a;
	const def = schema._zod.def;
	const seen = ctx.seen.get(schema);
	if (seen) {
		seen.count++;
		if (_params.schemaPath.includes(schema)) seen.cycle = _params.path;
		return seen.schema;
	}
	const result = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: _params.path
	};
	ctx.seen.set(schema, result);
	ctx.sharedDefsExtractedFor = void 0;
	ctx.sharedEmitDoneFor = void 0;
	const overrideSchema = schema._zod.toJSONSchema?.();
	if (overrideSchema) result.schema = overrideSchema;
	else {
		const params = {
			..._params,
			schemaPath: [..._params.schemaPath, schema],
			path: _params.path
		};
		if (schema._zod.processJSONSchema) schema._zod.processJSONSchema(ctx, result.schema, params);
		else {
			const _json = result.schema;
			const processor = ctx.processors[def.type];
			if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
			processor(schema, ctx, _json, params);
		}
		const parent = schema._zod.parent;
		if (parent) {
			if (!result.ref) result.ref = parent;
			process$1(parent, ctx, params);
			ctx.seen.get(parent).isParent = true;
		}
	}
	const meta = ctx.metadataRegistry.get(schema);
	if (meta) assignProps(result.schema, meta);
	if (ctx.io === "input" && isTransforming(schema)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema).schema;
}
function encodeJSONPointerSegment(segment) {
	return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external) return;
	const idToSchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.entries()) {
		const id = ctx.metadataRegistry.get(entry[0])?.id;
		if (id) {
			const existing = idToSchema.get(id);
			if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			idToSchema.set(id, entry[0]);
		}
	}
	const makeURI = (entry) => {
		const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
		if (ctx.external) {
			const externalId = ctx.external.registry.get(entry[0])?.id;
			const uriGenerator = ctx.external.uri ?? ((id) => id);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}`
			};
		}
		const uriPrefix = `#`;
		const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
		if (entry[1] === root && !entry[1].schema.id) return { ref: uriPrefix };
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + encodeJSONPointerSegment(defId)
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema = seen.schema;
		for (const key in schema) delete schema[key];
		schema.$ref = ref;
	};
	if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (schema === entry[0]) {
			extractToDef(entry);
			continue;
		}
		if (ctx.external) {
			const ext = ctx.external.registry.get(entry[0])?.id;
			if (schema !== entry[0] && ext) {
				extractToDef(entry);
				continue;
			}
		}
		if (ctx.metadataRegistry.get(entry[0])?.id) {
			extractToDef(entry);
			continue;
		}
		if (seen.cycle) {
			extractToDef(entry);
			continue;
		}
		if (seen.count > 1) {
			if (ctx.reused === "ref") {
				extractToDef(entry);
				continue;
			}
		}
	}
	if (ctx.external) ctx.sharedDefsExtractedFor = ctx.external;
}
function compactTypeUnion(schema) {
	const options = schema.anyOf;
	if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0) return;
	const types = [];
	for (const option of options) {
		if (!option || typeof option !== "object") return;
		compactTypeUnion(option);
		const keys = Object.keys(option);
		if (keys.length !== 1 || keys[0] !== "type") return;
		const type = option.type;
		for (const member of Array.isArray(type) ? type : [type]) {
			if (typeof member !== "string") return;
			if (!types.includes(member)) types.push(member);
		}
	}
	delete schema.anyOf;
	schema.type = types.length === 1 ? types[0] : types;
}
const FOLDABLE_KEYS = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]);
const UNION_KEYS = ["oneOf", "anyOf"];
function undeclaredConstraint(member) {
	const extra = member.additionalProperties;
	if (extra === void 0 || extra === false || typeof extra !== "object" || extra === null) return null;
	return Object.keys(extra).length ? extra : null;
}
function foldObjects(members) {
	const objects = [];
	for (const member of members) {
		if (typeof member !== "object" || member.type !== "object") return null;
		for (const key in member) if (!FOLDABLE_KEYS.has(key)) return null;
		objects.push(member);
	}
	const properties = {};
	const required = /* @__PURE__ */ new Set();
	for (const object of objects) {
		for (const key in object.properties) {
			if (Object.prototype.hasOwnProperty.call(properties, key)) continue;
			const parts = [];
			for (const other of objects) {
				const part = other.properties?.[key] ?? undeclaredConstraint(other);
				if (part === null || part === void 0) continue;
				if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part))) parts.push(part);
			}
			assignProp(properties, key, parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts });
		}
		for (const key of object.required ?? []) required.add(key);
	}
	const folded = {
		type: "object",
		properties
	};
	if (required.size) folded.required = [...required];
	if (objects.every((object) => object.additionalProperties === false)) folded.additionalProperties = false;
	else {
		const constraints = [];
		for (const object of objects) {
			const constraint = undeclaredConstraint(object);
			if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint))) constraints.push(constraint);
		}
		if (constraints.length === 1) folded.additionalProperties = constraints[0];
		else if (constraints.length > 1) folded.additionalProperties = { allOf: constraints };
	}
	return folded;
}
function foldIntersection(json) {
	const allOf = json.allOf;
	if (!Array.isArray(allOf) || allOf.length < 2) return;
	for (const key of FOLDABLE_KEYS) if (key in json) return;
	const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
	let folded = null;
	if (!unions.length) folded = foldObjects(allOf);
	else {
		const union = unions[0];
		const keyword = UNION_KEYS.find((k) => Array.isArray(union[k]));
		if (Object.keys(union).length !== 1) return;
		const rest = allOf.filter((m) => m !== union);
		const branches = union[keyword].map((branch) => foldObjects([...rest, branch]));
		if (branches.some((b) => !b)) return;
		folded = { [keyword]: branches };
	}
	if (!folded) return;
	delete json.allOf;
	assignProps(json, folded);
}
function finalize(ctx, schema) {
	const root = ctx.seen.get(schema);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema = seen.def ?? seen.schema;
		const _cached = { ...schema };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema.allOf = schema.allOf ?? [];
				schema.allOf.push(refSchema);
			} else assignProps(schema, refSchema);
			assignProps(schema, _cached);
			if (zodSchema._zod.parent === ref) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (!(key in _cached)) delete schema[key];
			}
			if (refSchema.$ref && refSeen.def) for (const key in schema) {
				if (key === "$ref" || key === "allOf") continue;
				if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) delete schema[key];
			}
		}
		const parent = zodSchema._zod.parent;
		if (parent && parent !== ref) {
			flattenRef(parent);
			const parentSeen = ctx.seen.get(parent);
			if (parentSeen?.schema.$ref) {
				schema.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key in schema) {
					if (key === "$ref" || key === "allOf") continue;
					if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) delete schema[key];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema,
			path: seen.path ?? []
		});
	};
	if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
		for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
		if (ctx.target !== "openapi-3.0") for (const entry of ctx.seen.entries()) compactTypeUnion(entry[1].def ?? entry[1].schema);
		for (const rewrite of ctx.deferred) rewrite();
		if (ctx.intersections.length) {
			const carriers = /* @__PURE__ */ new Map();
			for (const seen of ctx.seen.values()) for (const json of [seen.schema, seen.def]) {
				const allOf = json?.allOf;
				if (!Array.isArray(allOf)) continue;
				const existing = carriers.get(allOf);
				if (existing) existing.push(json);
				else carriers.set(allOf, [json]);
			}
			for (const allOf of ctx.intersections) for (const json of carriers.get(allOf) ?? []) foldIntersection(json);
		}
	}
	const result = {};
	if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
	else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
	else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
	else if (ctx.target === "openapi-3.0") {}
	if (ctx.external?.uri) {
		const id = ctx.external.registry.get(schema)?.id;
		if (!id) throw new Error("Schema is missing an `id` property");
		result.$id = ctx.external.uri(id);
	}
	assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
	const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
	if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
	const defs = ctx.external?.defs ?? {};
	if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) {
			if (seen.def.id === seen.defId) delete seen.def.id;
			assignProp(defs, seen.defId, seen.def);
		}
	}
	if (ctx.external) ctx.sharedEmitDoneFor = ctx.external;
	if (ctx.external) {} else if (Object.keys(defs).length > 0) {
		if (ctx.target === "draft-2020-12") result.$defs = defs;
		else result.definitions = defs;
	}
	try {
		const finalized = JSON.parse(JSON.stringify(result));
		Object.defineProperty(finalized, "~standard", {
			value: {
				...schema["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
					output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
				}
			},
			enumerable: false,
			writable: false
		});
		return finalized;
	} catch (_err) {
		throw new Error("Error converting schema to JSON.");
	}
}
function isTransforming(_schema, _ctx) {
	const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
	if (ctx.seen.has(_schema)) return false;
	ctx.seen.add(_schema);
	const def = _schema._zod.def;
	if (def.type === "transform") return true;
	if (def.type === "array") return isTransforming(def.element, ctx);
	if (def.type === "set") return isTransforming(def.valueType, ctx);
	if (def.type === "lazy") return isTransforming(def.getter(), ctx);
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") {
		if (_schema._zod.traits.has("$ZodCodec")) return true;
		return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
	}
	if (def.type === "object") {
		for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
		return false;
	}
	if (def.type === "union") {
		for (const option of def.options) if (isTransforming(option, ctx)) return true;
		return false;
	}
	if (def.type === "tuple") {
		for (const item of def.items) if (isTransforming(item, ctx)) return true;
		if (def.rest && isTransforming(def.rest, ctx)) return true;
		return false;
	}
	return false;
}
const createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	process$1(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
const createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	process$1(schema, ctx);
	extractDefs(ctx, schema);
	return finalize(ctx, schema);
};
const neverProcessor = (_schema, _ctx, json, _params) => {
	json.not = {};
};
const enumProcessor = (schema, _ctx, json, _params) => {
	const def = schema._zod.def;
	const values = getEnumValues(def.entries);
	if (values.length === 0) {
		json.not = {};
		return;
	}
	if (values.every((v) => typeof v === "number")) json.type = "number";
	if (values.every((v) => typeof v === "string")) json.type = "string";
	json.enum = values;
};
const customProcessor = (schema, ctx, json, params) => {
	handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
const transformProcessor = (schema, ctx, json, params) => {
	handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
const arrayProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const { minimum, maximum } = schema._zod.bag;
	if (typeof minimum === "number") json.minItems = minimum;
	if (typeof maximum === "number") json.maxItems = maximum;
	json.type = "array";
	json.items = process$1(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
function inputOptin(schema) {
	const def = schema._zod.def;
	if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) return inputOptin(def.out);
	if (def.type === "catch") return inputOptin(def.innerType);
	return schema._zod.optin;
}
const objectProcessor = (schema, ctx, _json, params) => {
	const json = _json;
	const def = schema._zod.def;
	const shape = def.shape;
	if (Object.getOwnPropertySymbols(shape).length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) return;
	json.type = "object";
	json.properties = {};
	for (const key in shape) assignProp(json.properties, key, process$1(shape[key], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key
		]
	}));
	const allKeys = new Set(Object.keys(shape));
	const requiredKeys = new Set([...allKeys].filter((key) => {
		const field = def.shape[key];
		if (ctx.io === "input") return inputOptin(field) === void 0;
		else return field._zod.optout === void 0;
	}));
	if (requiredKeys.size > 0) json.required = Array.from(requiredKeys);
	if (def.catchall?._zod.def.type === "never") json.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json.additionalProperties = false;
	} else if (def.catchall) json.additionalProperties = process$1(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
const unionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i) => process$1(x, ctx, {
		...params,
		path: [
			...params.path,
			isExclusive ? "oneOf" : "anyOf",
			i
		]
	}));
	if (isExclusive) json.oneOf = options;
	else json.anyOf = options;
};
const intersectionProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const a = process$1(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = process$1(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
	const allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
	json.allOf = allOf;
	ctx.intersections.push(allOf);
};
const nullableProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	const inner = process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json.nullable = true;
	} else json.anyOf = [inner, { type: "null" }];
};
const nonoptionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
const UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
	let unrepresentable = false;
	const serialized = JSON.stringify(value, (_, val) => {
		if (typeof val !== "bigint") return val;
		unrepresentable = true;
		return null;
	});
	if (!unrepresentable) return JSON.parse(serialized);
	handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
	return UNREPRESENTABLE_DEFAULT;
}
const defaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
	if (value !== UNREPRESENTABLE_DEFAULT) json.default = value;
};
const prefaultProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	if (ctx.io !== "input") return;
	const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
	if (value !== UNREPRESENTABLE_DEFAULT) json._prefault = value;
};
const catchProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	json.default = catchValue;
};
const pipeProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	const inIsTransform = def.in._zod.traits.has("$ZodTransform");
	const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
	process$1(innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = innerType;
};
const readonlyProcessor = (schema, ctx, json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
	json.readOnly = true;
};
const optionalProcessor = (schema, ctx, _json, params) => {
	const def = schema._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema);
	seen.ref = def.innerType;
};
const _installedErrorProtos = new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key, make) {
	Object.defineProperty(proto, key, {
		configurable: true,
		enumerable: false,
		get() {
			const value = make(this);
			Object.defineProperty(this, key, {
				value,
				configurable: true,
				writable: true
			});
			return value;
		},
		set(value) {
			Object.defineProperty(this, key, {
				value,
				configurable: true,
				writable: true
			});
		}
	});
}
const initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	const proto = Object.getPrototypeOf(inst);
	if (_installedErrorProtos.has(proto)) return;
	_installedErrorProtos.add(proto);
	_lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper));
	_lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper));
	_lazyMethod(proto, "addIssue", (self) => (issue) => {
		self.issues.push(issue);
		self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
	});
	_lazyMethod(proto, "addIssues", (self) => (issues) => {
		self.issues.push(...issues);
		self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
	});
	Object.defineProperty(proto, "isEmpty", {
		configurable: true,
		enumerable: false,
		get() {
			return this.issues.length === 0;
		}
	});
};
const ZodRealError = $constructor("ZodError", initializer, void 0, { Parent: Error });
const parse = _parse(ZodRealError);
const parseAsync = _parseAsync(ZodRealError);
const safeParse = _safeParse(ZodRealError);
const safeParseAsync = _safeParseAsync(ZodRealError);
const encode = _encode(ZodRealError);
const decode = _decode(ZodRealError);
const encodeAsync = _encodeAsync(ZodRealError);
const decodeAsync = _decodeAsync(ZodRealError);
const safeEncode = _safeEncode(ZodRealError);
const safeDecode = _safeDecode(ZodRealError);
const safeEncodeAsync = _safeEncodeAsync(ZodRealError);
const safeDecodeAsync = _safeDecodeAsync(ZodRealError);
function _ensureDefaultLocale() {
	if (!globalConfig.localeError) config(en_default());
}
function _ensureDefaultMemoizer() {
	if (!globalConfig.memoizer) config({ memoizer: memoizer() });
}
const ZodType = $constructor("ZodType", (inst, def) => {
	_ensureDefaultLocale();
	$ZodType.init(inst, def);
	inst.def = def;
	inst.type = def.type;
	return inst;
}, {
	check(...chks) {
		const def = this.def;
		return this.clone(mergeDefs(def, { checks: [...def.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
			check: ch,
			def: { check: "custom" },
			onattach: []
		} } : ch)] }), { parent: true });
	},
	with(...chks) {
		return this.check(...chks);
	},
	clone(def, params) {
		return clone(this, def, params);
	},
	brand() {
		return this;
	},
	register(reg, meta) {
		reg.add(this, meta);
		return this;
	},
	refine(check, params) {
		return this.check(refine(check, params));
	},
	superRefine(refinement, params) {
		return this.check(superRefine(refinement, params));
	},
	overwrite(fn) {
		return this.check(_overwrite(fn));
	},
	optional() {
		return optional(this);
	},
	exactOptional() {
		return exactOptional(this);
	},
	nullable() {
		return nullable(this);
	},
	nullish() {
		return optional(nullable(this));
	},
	nonoptional(params) {
		return nonoptional(this, params);
	},
	array() {
		return array(this);
	},
	or(arg) {
		return union([this, arg]);
	},
	and(arg) {
		return intersection(this, arg);
	},
	transform(tx) {
		return pipe(this, transform(tx));
	},
	default(d) {
		return _default(this, d);
	},
	prefault(d) {
		return prefault(this, d);
	},
	catch(params) {
		return _catch(this, params);
	},
	pipe(target) {
		return pipe(this, target);
	},
	readonly() {
		return readonly(this);
	},
	describe(description) {
		const cl = this.clone();
		globalRegistry.add(cl, { description });
		return cl;
	},
	meta(...args) {
		if (args.length === 0) return globalRegistry.get(this);
		const cl = this.clone();
		globalRegistry.add(cl, args[0]);
		return cl;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(fn, ...args) {
		return args.length === 0 ? fn(this) : fn(this, ...args);
	},
	get "~standard"() {
		return hide(this, "~standard", {
			...standardProps(this),
			jsonSchema: {
				input: createStandardJSONSchemaMethod(this, "input"),
				output: createStandardJSONSchemaMethod(this, "output")
			}
		});
	},
	set "~standard"(value) {
		own(this, "~standard", value);
	},
	parse: function _parse(data, params) {
		return parse(this, data, params, { callee: _parse });
	},
	parseAsync: async function _parseAsync(data, params) {
		return await parseAsync(this, data, params, { callee: _parseAsync });
	},
	safeParse(data, params) {
		return safeParse(this, data, params);
	},
	async safeParseAsync(data, params) {
		return safeParseAsync(this, data, params);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(value) {
		own(this, "spa", value);
	},
	encode: function _encode(data, params) {
		return encode(this, data, params, { callee: _encode });
	},
	decode: function _decode(data, params) {
		return decode(this, data, params, { callee: _decode });
	},
	encodeAsync: async function _encodeAsync(data, params) {
		return await encodeAsync(this, data, params, { callee: _encodeAsync });
	},
	decodeAsync: async function _decodeAsync(data, params) {
		return await decodeAsync(this, data, params, { callee: _decodeAsync });
	},
	safeEncode(data, params) {
		return safeEncode(this, data, params);
	},
	safeDecode(data, params) {
		return safeDecode(this, data, params);
	},
	async safeEncodeAsync(data, params) {
		return safeEncodeAsync(this, data, params);
	},
	async safeDecodeAsync(data, params) {
		return safeDecodeAsync(this, data, params);
	},
	toJSONSchema(params) {
		return createToJSONSchemaMethod(this, {})(params);
	},
	get description() {
		return globalRegistry.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
});
const ZodUnknown = $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => void 0;
});
function unknown() {
	return _unknown(ZodUnknown);
}
const ZodNever = $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
	return _never(ZodNever, params);
}
const ZodArray = $constructor("ZodArray", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodArray.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
	inst.element = def.element;
}, {
	min(n, params) {
		return this.check(_minLength(n, params));
	},
	nonempty(params) {
		return this.check(_minLength(1, params));
	},
	max(n, params) {
		return this.check(_maxLength(n, params));
	},
	length(n, params) {
		return this.check(_length(n, params));
	},
	unwrap() {
		return this.element;
	}
});
function array(element, params) {
	return _array(ZodArray, element, params);
}
const ZodObject = $constructor("ZodObject", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodObjectJIT.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
	installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
}, {
	keyof() {
		return _enum(Object.keys(this._zod.def.shape));
	},
	catchall(catchall) {
		return this.clone({
			...this._zod.def,
			catchall
		});
	},
	passthrough() {
		return this.clone({
			...this._zod.def,
			catchall: unknown()
		});
	},
	loose() {
		return this.clone({
			...this._zod.def,
			catchall: unknown()
		});
	},
	strict() {
		return this.clone({
			...this._zod.def,
			catchall: never()
		});
	},
	strip() {
		return this.clone({
			...this._zod.def,
			catchall: void 0
		});
	},
	extend(incoming) {
		return extend(this, incoming);
	},
	safeExtend(incoming) {
		return safeExtend(this, incoming);
	},
	merge(other) {
		return merge(this, other);
	},
	pick(mask) {
		return pick(this, mask);
	},
	omit(mask) {
		return omit(this, mask);
	},
	partial(...args) {
		return partial(ZodOptional, this, args[0]);
	},
	exactPartial(...args) {
		return partial(ZodExactOptional, this, args[0], "exactPartial");
	},
	required(...args) {
		return required(ZodNonOptional, this, args[0]);
	}
});
function object(shape, params) {
	const def = {
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	};
	return new ZodObject(def);
}
const ZodUnion = $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
	inst.options = def.options;
});
function union(options, params) {
	return new ZodUnion({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
const ZodIntersection = $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
	return new ZodIntersection({
		type: "intersection",
		left,
		right
	});
}
const ZodEnum = $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
	inst.enum = def.entries;
	inst.options = Object.values(def.entries);
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum(values, params) {
	const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
	return new ZodEnum({
		type: "enum",
		entries,
		...normalizeParams(params)
	});
}
const ZodTransform = $constructor("ZodTransform", (inst, def) => {
	_ensureDefaultMemoizer();
	$ZodTransform.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
	inst._zod.parse = (payload, _ctx) => {
		if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				if (!("input" in _issue)) _issue.input = payload.value;
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output) => {
			payload.value = output;
			return payload;
		});
		payload.value = output;
		return payload;
	};
});
function transform(fn) {
	return new ZodTransform({
		type: "transform",
		transform: fn
	});
}
const ZodOptional = $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
	return new ZodOptional({
		type: "optional",
		innerType
	});
}
const ZodExactOptional = $constructor("ZodExactOptional", (inst, def) => {
	$ZodExactOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
	return new ZodExactOptional({
		type: "optional",
		innerType
	});
}
const ZodNullable = $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable({
		type: "nullable",
		innerType
	});
}
const ZodDefault = $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
const ZodPrefault = $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
const ZodNonOptional = $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
const ZodCatch = $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : constantCatch(catchValue)
	});
}
const ZodPipe = $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
	inst.in = def.in;
	inst.out = def.out;
});
function pipe(in_, out) {
	return new ZodPipe({
		type: "pipe",
		in: in_,
		out
	});
}
const ZodReadonly = $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
	return new ZodReadonly({
		type: "readonly",
		innerType
	});
}
const ZodCustom = $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
	return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
	return _superRefine(fn, params);
}
var stub_ping_exports = __exportAll({ default: () => stub_ping_default });
var __eveDurableCallbackSym = Symbol.for("eve:durable-dynamic-callback");
function __eveStampDynamicCallback(callback, impl, closure) {
	Object.defineProperty(callback, __eveDurableCallbackSym, {
		configurable: true,
		value: {
			callback: impl,
			closure
		}
	});
	return callback;
}
var stub_ping_default = defineTool({
	description: "Ping stub proving the Eve tool path compiles.",
	inputSchema: object({}),
	execute: __eveStampDynamicCallback(async (...__args) => await __eve_dynamic_exec_0({}, ...__args), __eve_dynamic_exec_0, {})
});
async function __eve_dynamic_exec_0(__vars) {
	return { ok: true };
}
const module_0 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "sandbox.ts",
	"registryId": "eve:defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46",
	"semanticRevision": "eve:default-sandbox:v1"
}, Object.freeze({}));
const module_1 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "tools/bash.ts",
	"registryId": "eve:defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_2 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "tools/connection_search.ts",
	"registryId": "eve:defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_3 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "tools/load_skill.ts",
	"registryId": "eve:defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_4 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "tools/read_file.ts",
	"registryId": "eve:defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_5 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "tools/todo.ts",
	"registryId": "eve:defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_6 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "tools/web_fetch.ts",
	"registryId": "eve:defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_7 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "tools/write_file.ts",
	"registryId": "eve:defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_8 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "channels/eve.ts",
	"registryId": "eve:root-defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_9 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "channels/home.ts",
	"registryId": "eve:root-defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_10 = await loadFrameworkProgrammaticModule({
	"kind": "programmatic",
	"moduleId": "tools/agent.ts",
	"registryId": "eve:root-defaults",
	"revision": "eve@0.51.1:compiled-manifest-v46"
}, Object.freeze({}));
const module_11 = memoizeModuleNamespaceFactories(stub_ping_exports);
const moduleMap = Object.freeze({ "nodes": Object.freeze({ "__root__": Object.freeze({ "modules": Object.freeze({
	"eve:defaults:sandbox.ts": module_0,
	"eve:defaults:tools/bash.ts": module_1,
	"eve:defaults:tools/connection_search.ts": module_2,
	"eve:defaults:tools/load_skill.ts": module_3,
	"eve:defaults:tools/read_file.ts": module_4,
	"eve:defaults:tools/todo.ts": module_5,
	"eve:defaults:tools/web_fetch.ts": module_6,
	"eve:defaults:tools/write_file.ts": module_7,
	"eve:root-defaults:channels/eve.ts": module_8,
	"eve:root-defaults:channels/home.ts": module_9,
	"eve:root-defaults:tools/agent.ts": module_10,
	"tools/stub_ping.ts": module_11
}) }) }) });
//#endregion
//#region .eve/builds/mtmvs4nd-4e318e93-4738-496b-802c-142bfc4c97e8/host/compiled-artifacts-bootstrap.mjs
installEveWorkflowQueueNamespace("kiru");
const metadata = {
	"compile": {
		"manifest": {
			"path": ".output/.eve/compile/compiled-agent-manifest.json",
			"sha256": "cd7e2c0e947a99ff1e2adc0f89ba86e3c80dd3606405a6573ca8752b6a0b9aab"
		},
		"moduleMap": {
			"path": ".output/.eve/compile/module-map.mjs",
			"sha256": "8c6851dec16dd6e3adb8a8fe7c50675c161897a70af590b3cc7179ee08eae584"
		}
	},
	"discovery": {
		"diagnostics": {
			"path": ".output/.eve/discovery/diagnostics.json",
			"sha256": "da80f36540dff5b2499b18a9654a385d8f841e02cc44f44063e8bf0fa4d51ffb"
		},
		"manifest": {
			"path": ".output/.eve/discovery/agent-discovery-manifest.json",
			"sha256": "4ad61643c23cb0a69ea836ee103e8e6bbe1be8dedc6a330e7cea2814a84dc5f1"
		},
		"sourceGraphHash": "63bc5de14373c5e78aefebf9aaff9d1d839ed154933d6148eca85a1686855a3b",
		"summary": {
			"errors": 0,
			"warnings": 0
		}
	},
	"generator": {
		"name": "eve",
		"version": "0.51.1"
	},
	"kind": "eve-compile-metadata",
	"status": "ready",
	"version": 6
};
const manifest = {
	"agentRoot": "/Users/keyur/Documents/kiru/agent",
	"appRoot": "/Users/keyur/Documents/kiru",
	"bindings": {
		"eve:defaults:sandbox.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "sandbox.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46",
				"semanticRevision": "eve:default-sandbox:v1"
			},
			"logicalPath": "sandbox.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:defaults:tools/bash.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/bash.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/bash.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:defaults:tools/read_file.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/read_file.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/read_file.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:defaults:tools/write_file.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/write_file.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/write_file.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:defaults:tools/todo.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/todo.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/todo.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:defaults:tools/web_fetch.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/web_fetch.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/web_fetch.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:defaults:tools/load_skill.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/load_skill.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/load_skill.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:defaults:tools/connection_search.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/connection_search.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/connection_search.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:defaults:tools/ask_question.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/ask_question.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/ask_question.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": false
			}
		},
		"eve:defaults:tools/task_update.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/task_update.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/task_update.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": false
			}
		},
		"eve:defaults:tools/task_cancel.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/task_cancel.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/task_cancel.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": false
			}
		},
		"eve:defaults:tools/web_search.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/web_search.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/web_search.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": false
			}
		},
		"eve:root-defaults:tools/agent.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "tools/agent.ts",
				"registryId": "eve:root-defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "tools/agent.ts",
			"owner": {
				"feature": "eve:root-defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:root-defaults:channels/eve.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "channels/eve.ts",
				"registryId": "eve:root-defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "channels/eve.ts",
			"owner": {
				"feature": "eve:root-defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"eve:root-defaults:channels/home.ts": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "channels/home.ts",
				"registryId": "eve:root-defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"logicalPath": "channels/home.ts",
			"owner": {
				"feature": "eve:root-defaults",
				"kind": "framework"
			},
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		},
		"agent.ts": {
			"backing": {
				"externalDependencies": [],
				"kind": "filesystem",
				"sourcePath": "/Users/keyur/Documents/kiru/agent/agent.ts"
			},
			"logicalPath": "agent.ts",
			"owner": { "kind": "application" },
			"usage": {
				"compile": true,
				"runtimeEntry": false
			}
		},
		"tools/stub_ping.ts": {
			"backing": {
				"externalDependencies": [],
				"kind": "filesystem",
				"sourcePath": "/Users/keyur/Documents/kiru/agent/tools/stub_ping.ts"
			},
			"logicalPath": "tools/stub_ping.ts",
			"owner": { "kind": "application" },
			"usage": {
				"compile": true,
				"runtimeEntry": true
			}
		}
	},
	"channelRoutes": {
		"effective": [
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "GET",
				"urlPath": "/eve/v1/health",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "HEAD",
				"urlPath": "/eve/v1/health",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "GET",
				"urlPath": "/eve/v1/info",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "GET",
				"urlPath": "/eve/v1/connections/:name/callback/:attemptId/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/connections/:name/callback/:attemptId/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "GET",
				"urlPath": "/eve/v1/connections/:name/callback/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/connections/:name/callback/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/activity/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/callback/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/task-input/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "GET",
				"urlPath": "/.well-known/workflow/v1/webhook/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/.well-known/workflow/v1/webhook/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "PUT",
				"urlPath": "/.well-known/workflow/v1/webhook/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "PATCH",
				"urlPath": "/.well-known/workflow/v1/webhook/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "DELETE",
				"urlPath": "/.well-known/workflow/v1/webhook/:token",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/session",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/session/:sessionId",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/session/:sessionId/cancel",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/session/:sessionId/compact",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/session/:sessionId/clear",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "POST",
				"urlPath": "/eve/v1/session/:sessionId/reset",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "GET",
				"urlPath": "/eve/v1/session/:sessionId/stream",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "eve",
				"logicalPath": "channels/eve.ts",
				"method": "GET",
				"urlPath": "/eve/v1/session/:parentSessionId/subagents/:callId/:childSessionId/stream",
				"sourceId": "eve:root-defaults:channels/eve.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "home",
				"logicalPath": "channels/home.ts",
				"method": "GET",
				"urlPath": "/",
				"sourceId": "eve:root-defaults:channels/home.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			},
			{
				"kind": "channel",
				"name": "home",
				"logicalPath": "channels/home.ts",
				"method": "HEAD",
				"urlPath": "/",
				"sourceId": "eve:root-defaults:channels/home.ts",
				"sourceKind": "module",
				"adapterKind": "http"
			}
		],
		"preflight": [],
		"shadowed": []
	},
	"connections": [],
	"dynamicConnections": [],
	"diagnosticsSummary": {
		"errors": 0,
		"warnings": 0
	},
	"sourceComposition": { "entries": [{
		"kind": "shadowed",
		"source": {
			"backing": {
				"kind": "programmatic",
				"moduleId": "agent.ts",
				"registryId": "eve:defaults",
				"revision": "eve@0.51.1:compiled-manifest-v46"
			},
			"form": "direct",
			"layer": "framework-default",
			"logicalPath": "agent.ts",
			"owner": {
				"feature": "eve:defaults",
				"kind": "framework"
			},
			"sourceId": "eve:defaults:agent.ts"
		},
		"winnerSourceId": "agent.ts"
	}] },
	"dynamicInstructions": [],
	"dynamicSkills": [],
	"dynamicTools": [{
		"eventNames": ["step.started"],
		"logicalPath": "tools/connection_search.ts",
		"slug": "connection_search",
		"sourceId": "eve:defaults:tools/connection_search.ts",
		"sourceKind": "module"
	}],
	"extensionMounts": [],
	"hooks": [],
	"memories": [],
	"instructions": [{
		"name": "instructions",
		"logicalPath": "instructions.md",
		"owner": { "kind": "application" },
		"content": "# Kiru instructions\n\nKiru is an iMessage tokenized-stocks agent on Base (chain 8453).\n\n- Answer chat about tokenized stocks. The venue quote is the price.\n- Every write returns an approvalUrl; the user taps approve in chat.\n  Never treat an unsigned quote as a fill.\n- The user keeps custody in their own Base Account; the agent never holds keys.\n- Fail closed: no quote, restricted region, or missing approval means\n  refuse in chat, never guess.\n\n## Contracts\n\n- Money tool shapes: [lib/contracts.ts](lib/contracts.ts)\n- Memory HTTP routes: [../sibyl-sidecar/contract.md](../sibyl-sidecar/contract.md)\n",
		"role": "system",
		"sourceId": "instructions.md",
		"sourceKind": "markdown"
	}],
	"remoteAgents": [],
	"sandbox": {
		"logicalPath": "sandbox.ts",
		"sourceHash": "eae6a7d7d54bba9fc9e3011a004c70aaf6d359a89858f02e218573f29a588af1",
		"sourceId": "eve:defaults:sandbox.ts",
		"sourceKind": "module"
	},
	"sandboxWorkspaces": [],
	"schedules": [],
	"skills": [],
	"tools": [
		{
			"description": "Execute a shell command in the shared workspace environment.",
			"hasExecute": true,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": { "command": {
					"type": "string",
					"description": "The shell command to execute."
				} },
				"required": ["command"],
				"additionalProperties": false
			},
			"logicalPath": "tools/bash.ts",
			"name": "bash",
			"outputSchema": {
				"type": "object",
				"properties": {
					"exitCode": { "type": "number" },
					"stderr": { "type": "string" },
					"stdout": { "type": "string" },
					"truncated": { "type": "boolean" }
				},
				"required": [
					"exitCode",
					"stderr",
					"stdout",
					"truncated"
				],
				"additionalProperties": false
			},
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/bash.ts",
			"sourceKind": "module"
		},
		{
			"description": "Read a file from the local filesystem. If the path does not exist, an error is returned.\n\nUsage:\n- The filePath parameter should be an absolute path or begin with $HOME/.\n- By default, this tool returns up to 2000 lines from the start of the file.\n- The offset parameter is the line number to start from (1-indexed).\n- To read later sections, call this tool again with a larger offset.\n- Contents are returned with each line prefixed by its line number as `<line>: <content>`. For example, if a file has contents \"foo\\n\", you will receive \"1: foo\\n\".\n- Any line longer than 2000 characters is truncated.\n- Call this tool in parallel when you know there are multiple files you want to read.\n- Avoid tiny repeated slices (30 line chunks). If you need more context, read a larger window.",
			"hasExecute": true,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": {
					"filePath": {
						"type": "string",
						"description": "The absolute path to the file to read. A leading $HOME is supported."
					},
					"limit": {
						"type": "integer",
						"minimum": 1,
						"maximum": 9007199254740991,
						"description": "Maximum number of lines to return. Defaults to 2000."
					},
					"offset": {
						"type": "integer",
						"minimum": 1,
						"maximum": 9007199254740991,
						"description": "1-based line number to start from. Defaults to 1."
					}
				},
				"required": ["filePath"],
				"additionalProperties": false
			},
			"logicalPath": "tools/read_file.ts",
			"name": "read_file",
			"outputSchema": {
				"type": "object",
				"properties": {
					"content": { "type": "string" },
					"nextOffset": {
						"type": "integer",
						"minimum": 1,
						"maximum": 9007199254740991
					},
					"path": { "type": "string" },
					"totalLines": {
						"type": "integer",
						"minimum": 0,
						"maximum": 9007199254740991
					},
					"truncated": { "type": "boolean" }
				},
				"required": [
					"content",
					"path",
					"totalLines",
					"truncated"
				],
				"additionalProperties": false
			},
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/read_file.ts",
			"sourceKind": "module"
		},
		{
			"description": "Writes a file to the local filesystem.\n\nUsage:\n- This tool will overwrite the existing file if there is one at the provided path.\n- If this is an existing file, you MUST use the read_file tool first to read the file's contents. This tool will fail if you did not read the file first.\n- ALWAYS prefer editing existing files in the codebase. NEVER write new files unless explicitly required.\n- NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.\n- Only use emojis if the user explicitly requests it. Avoid writing emojis to files unless asked.",
			"hasExecute": true,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": {
					"content": {
						"type": "string",
						"description": "Complete replacement file contents."
					},
					"filePath": {
						"type": "string",
						"description": "The absolute path to the file to write. A leading $HOME is supported."
					}
				},
				"required": ["content", "filePath"],
				"additionalProperties": false
			},
			"logicalPath": "tools/write_file.ts",
			"name": "write_file",
			"outputSchema": {
				"type": "object",
				"properties": {
					"existed": { "type": "boolean" },
					"path": { "type": "string" }
				},
				"required": ["existed", "path"],
				"additionalProperties": false
			},
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/write_file.ts",
			"sourceKind": "module"
		},
		{
			"description": "Use this tool to create and manage a structured task list for the current session.\nThis helps you track progress, organize complex tasks, and demonstrate thoroughness.\n\nWhen to use:\n- Complex multistep tasks requiring 3 or more distinct steps\n- When the user provides multiple tasks or a numbered list\n- After receiving new instructions, to capture requirements\n- After completing a task, to mark it complete and add follow-ups\n\nWhen NOT to use:\n- Single, straightforward tasks that need no tracking\n- Purely conversational or informational requests\n\nUsage:\n- Call with `todos` to replace the entire list (full replacement write)\n- Call without `todos` to read the current list\n- Both return the full current list with status counts\n- Mark tasks in_progress when you start, completed when done\n- Only have ONE task in_progress at a time",
			"hasExecute": true,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": { "todos": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"content": {
								"type": "string",
								"description": "Brief description of the task."
							},
							"priority": {
								"type": "string",
								"enum": [
									"high",
									"medium",
									"low"
								],
								"description": "Priority level of the task."
							},
							"status": {
								"type": "string",
								"enum": [
									"pending",
									"in_progress",
									"completed",
									"cancelled"
								],
								"description": "Current status of the task."
							}
						},
						"required": [
							"content",
							"priority",
							"status"
						],
						"additionalProperties": false
					},
					"description": "The updated todo list. Omit to read the current list without modifying it."
				} },
				"additionalProperties": false
			},
			"logicalPath": "tools/todo.ts",
			"name": "todo",
			"outputSchema": {
				"type": "object",
				"properties": {
					"counts": {
						"type": "object",
						"properties": {
							"cancelled": {
								"type": "integer",
								"minimum": 0,
								"maximum": 9007199254740991
							},
							"completed": {
								"type": "integer",
								"minimum": 0,
								"maximum": 9007199254740991
							},
							"in_progress": {
								"type": "integer",
								"minimum": 0,
								"maximum": 9007199254740991
							},
							"pending": {
								"type": "integer",
								"minimum": 0,
								"maximum": 9007199254740991
							},
							"total": {
								"type": "integer",
								"minimum": 0,
								"maximum": 9007199254740991
							}
						},
						"required": [
							"cancelled",
							"completed",
							"in_progress",
							"pending",
							"total"
						],
						"additionalProperties": false
					},
					"todos": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"content": {
									"type": "string",
									"description": "Brief description of the task."
								},
								"priority": {
									"type": "string",
									"enum": [
										"high",
										"medium",
										"low"
									],
									"description": "Priority level of the task."
								},
								"status": {
									"type": "string",
									"enum": [
										"pending",
										"in_progress",
										"completed",
										"cancelled"
									],
									"description": "Current status of the task."
								}
							},
							"required": [
								"content",
								"priority",
								"status"
							],
							"additionalProperties": false
						}
					}
				},
				"required": ["counts", "todos"],
				"additionalProperties": false
			},
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/todo.ts",
			"sourceKind": "module"
		},
		{
			"description": "Fetch a webpage and return its content in the requested format. Use this to retrieve and analyze content from URLs.\n\nUsage notes:\n- The URL must be a fully-formed valid URL starting with https://\n- HTML responses are automatically converted to markdown or plain text based on the requested format\n- Format options: \"markdown\" (default), \"text\", or \"html\"\n- Default timeout is 30 seconds (max 120 seconds)\n- Maximum response size is 5 MB; content is further capped at the shared tool-output budget (50 KB / 2000 lines)\n- This tool is read-only and does not modify any files",
			"hasExecute": true,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": {
					"format": {
						"type": "string",
						"enum": [
							"markdown",
							"text",
							"html"
						],
						"description": "The format to return the content in (text, markdown, or html). HTML responses are automatically converted to the requested format. Defaults to \"markdown\"."
					},
					"timeout": {
						"type": "number",
						"description": "Optional timeout in seconds. Defaults to 30, max 120."
					},
					"url": {
						"type": "string",
						"description": "The fully-formed URL to fetch content from. Must start with https://."
					}
				},
				"required": ["url"],
				"additionalProperties": false
			},
			"logicalPath": "tools/web_fetch.ts",
			"name": "web_fetch",
			"outputSchema": {
				"type": "object",
				"properties": {
					"content": { "type": "string" },
					"contentType": { "type": "string" },
					"truncated": { "type": "boolean" },
					"url": { "type": "string" }
				},
				"required": [
					"content",
					"contentType",
					"truncated",
					"url"
				],
				"additionalProperties": false
			},
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/web_fetch.ts",
			"sourceKind": "module"
		},
		{
			"behavior": {
				"availability": [],
				"presentation": "load-skill"
			},
			"description": "Load the full instructions for one available skill by name or id. Use this tool when the request clearly matches a listed skill description or when the user explicitly asks for that skill. Loading adds the skill instructions to the current turn. Choose the \"skill\" value from the Available skills block.",
			"hasExecute": true,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": { "skill": {
					"type": "string",
					"description": "Available skill name or id."
				} },
				"required": ["skill"],
				"additionalProperties": false
			},
			"logicalPath": "tools/load_skill.ts",
			"name": "load_skill",
			"outputSchema": { "type": "string" },
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/load_skill.ts",
			"sourceKind": "module"
		},
		{
			"behavior": {
				"availability": ["requires-request-input"],
				"handling": {
					"kind": "request-input",
					"request": "question"
				}
			},
			"description": "Ask the user a question and wait for their response before continuing. Use this when you need clarification or a choice from the user.",
			"hasExecute": false,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": {
					"allowFreeform": {
						"type": "boolean",
						"description": "Whether the user may answer with freeform text instead of selecting one of the provided options."
					},
					"options": {
						"type": "array",
						"items": {
							"type": "object",
							"properties": {
								"description": {
									"type": "string",
									"description": "Optional additional context for this option."
								},
								"id": {
									"type": "string",
									"description": "Stable identifier for the option."
								},
								"label": {
									"type": "string",
									"description": "User-facing label for the option."
								},
								"style": {
									"type": "string",
									"enum": [
										"primary",
										"danger",
										"default"
									],
									"description": "Visual treatment hint for the option."
								}
							},
							"required": ["id", "label"],
							"additionalProperties": false
						},
						"description": "Selectable answer options to present to the user."
					},
					"prompt": {
						"type": "string",
						"description": "The prompt to present to the user."
					}
				},
				"required": ["prompt"],
				"additionalProperties": false
			},
			"logicalPath": "tools/ask_question.ts",
			"name": "ask_question",
			"outputSchema": {
				"type": "object",
				"properties": {
					"optionId": { "type": "string" },
					"status": {
						"type": "string",
						"enum": ["answered", "ignored"]
					},
					"text": { "type": "string" }
				},
				"required": ["status"],
				"additionalProperties": false
			},
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/ask_question.ts",
			"sourceKind": "module"
		},
		{
			"behavior": {
				"availability": ["delegated-task-child"],
				"handling": {
					"action": "task-update",
					"kind": "dispatch"
				}
			},
			"description": "Briefly tell the parent agent what this background task is currently doing. Report activity, not preliminary findings or results.",
			"hasExecute": false,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": { "message": {
					"type": "string",
					"minLength": 1,
					"description": "Brief description of what this task is currently doing."
				} },
				"required": ["message"],
				"additionalProperties": false
			},
			"logicalPath": "tools/task_update.ts",
			"name": "task_update",
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/task_update.ts",
			"sourceKind": "module"
		},
		{
			"behavior": {
				"availability": ["root-session"],
				"handling": {
					"action": "task-cancel",
					"kind": "dispatch"
				}
			},
			"description": "Request cooperative cancellation of one or more background tasks. Cancellation is final: a task that finishes after you cancel it stays cancelled. Cancelling an already-finished task changes nothing.",
			"hasExecute": false,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": { "taskIds": {
					"minItems": 1,
					"type": "array",
					"items": {
						"type": "string",
						"minLength": 1
					},
					"description": "Task ids from earlier subagent task receipts."
				} },
				"required": ["taskIds"],
				"additionalProperties": false
			},
			"logicalPath": "tools/task_cancel.ts",
			"name": "task_cancel",
			"outputSchema": {
				"type": "object",
				"properties": { "tasks": {
					"type": "array",
					"items": {
						"type": "object",
						"properties": {
							"inputRequests": {
								"type": "array",
								"items": {}
							},
							"lastOutput": {
								"type": "object",
								"properties": {
									"data": {},
									"type": {
										"type": "string",
										"enum": ["result", "error"]
									}
								},
								"required": ["data", "type"],
								"additionalProperties": false
							},
							"metadata": {
								"type": "object",
								"properties": {
									"agentId": { "type": "string" },
									"kind": { "type": "string" },
									"mode": {
										"type": "string",
										"enum": ["local", "remote"]
									},
									"name": { "type": "string" }
								},
								"required": ["kind", "name"],
								"additionalProperties": false
							},
							"status": {
								"type": "string",
								"enum": [
									"working",
									"input_required",
									"completed",
									"failed",
									"cancelled"
								]
							},
							"taskId": { "type": "string" }
						},
						"required": [
							"metadata",
							"status",
							"taskId"
						],
						"additionalProperties": false
					}
				} },
				"required": ["tasks"],
				"additionalProperties": false
			},
			"requiresApproval": false,
			"sourceId": "eve:defaults:tools/task_cancel.ts",
			"sourceKind": "module"
		},
		{
			"behavior": {
				"availability": [],
				"handling": {
					"kind": "provider-tool",
					"provider": "exa"
				}
			},
			"description": "Search the web for real-time information. Use this to find up-to-date information about current events, recent developments, or topics that may have changed since the knowledge cutoff.",
			"hasExecute": false,
			"hasModelOutputProjection": false,
			"inputSchema": null,
			"logicalPath": "tools/web_search.ts",
			"name": "web_search",
			"sourceId": "eve:defaults:tools/web_search.ts",
			"sourceKind": "module",
			"requiresApproval": false
		},
		{
			"behavior": {
				"availability": ["root-session"],
				"handling": {
					"action": "self-agent",
					"kind": "dispatch"
				}
			},
			"description": "Delegate a focused subtask to a copy of yourself, or continue a previous delegation with `agentId`. Use it to isolate complex work or split a large task into independent pieces. Issue multiple `agent` calls in one response to run a small fixed set in parallel. A new child has fresh history and state but shares your tools and sandbox, so include essential context in `message` and give parallel writers non-overlapping scopes. This call starts a background task and returns a task receipt immediately.",
			"execution": "background",
			"hasExecute": true,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": {
					"agentId": {
						"description": "Only pass this to continue a previous delegation: the id of an agent from the <agents> list. To start a new agent — the common case — omit this field entirely (or pass null or an empty string).",
						"type": ["string", "null"]
					},
					"message": {
						"type": "string",
						"description": "The message to send to the subagent. Provide all context the subagent needs to complete the task; the subagent does not see the parent's history."
					},
					"outputSchema": {
						"type": "object",
						"properties": {},
						"additionalProperties": {},
						"description": "Only provide a non-empty JSON Schema when the caller explicitly requests structured output; otherwise omit this field. The subagent must match a provided schema, and that structured output becomes the tool result."
					}
				},
				"required": ["message"],
				"additionalProperties": false
			},
			"logicalPath": "tools/agent.ts",
			"name": "agent",
			"outputSchema": {
				"type": "object",
				"properties": {
					"agentId": { "type": "string" },
					"status": {
						"type": "string",
						"const": "working"
					},
					"taskId": { "type": "string" }
				},
				"required": [
					"agentId",
					"status",
					"taskId"
				],
				"additionalProperties": false
			},
			"requiresApproval": false,
			"sourceId": "eve:root-defaults:tools/agent.ts",
			"sourceKind": "module"
		},
		{
			"description": "Ping stub proving the Eve tool path compiles.",
			"hasExecute": true,
			"hasModelOutputProjection": false,
			"inputSchema": {
				"type": "object",
				"properties": {}
			},
			"logicalPath": "tools/stub_ping.ts",
			"name": "stub_ping",
			"requiresApproval": false,
			"sourceId": "tools/stub_ping.ts",
			"sourceKind": "module"
		}
	],
	"workspaceResourceRoot": {
		"logicalPath": "workspace-resources/__root__",
		"rootEntries": []
	},
	"config": {
		"compaction": {},
		"name": "kiru",
		"source": {
			"logicalPath": "agent.ts",
			"sourceId": "agent.ts",
			"sourceKind": "module"
		},
		"model": {
			"id": "google/gemini-2.5-flash",
			"routing": {
				"kind": "gateway",
				"target": "google"
			},
			"contextWindowTokens": 1e6,
			"maxOutputTokens": 64e3
		}
	},
	"kind": "eve-agent-compiled-manifest",
	"subagents": [],
	"version": 48
};
function installCompiledArtifactsBootstrap() {
	installBundledCompiledArtifacts({
		manifest,
		metadata,
		moduleMap
	});
}
installCompiledArtifactsBootstrap();
function installCompiledArtifactsPlugin() {}
//#endregion
//#region .eve/builds/mtmvs4nd-4e318e93-4738-496b-802c-142bfc4c97e8/workflow/workflows.mjs
const workflowCode = Buffer.from([
	"Z2xvYmFsVGhpcy5fX3ByaXZhdGVfd29ya2Zsb3dzID0gbmV3IE1hcCgpOwooZnVuY3Rpb24gKCkgewovLyNyZWdpb24gZGlzdC9zcmMvaW50ZXJuYWwvd29ya2Zsb3ctYnVuZGxlL3dvcmtmbG93LWNvcmUtc2hpbS5qcwpjb25zdCBXT1JLRkxPV19DT05URVhUX1NZTUJPTCA9IFN5bWJvbC5mb3IoYFdPUktGTE9XX0NPTlRFWFRgKTsKY29uc3QgV09SS0ZMT1dfQ1JFQVRFX0hPT0sgPSBTeW1ib2wuZm9yKGBXT1JLRkxPV19DUkVBVEVfSE9PS2ApOwpjb25zdCBXT1JLRkxPV19HRVRfU1RSRUFNX0lEID0gU3ltYm9sLmZvcihgV09SS0ZMT1dfR0VUX1NUUkVBTV9JRGApOwpjb25zdCBXT1JLRkxPV19TTEVFUCA9IFN5bWJvbC5mb3IoYFdPUktGTE9XX1NMRUVQYCk7CmNvbnN0IFNUUkVBTV9OQU1FX1NZTUJPTCA9IFN5bWJvbC5mb3IoYFdPUktGTE9XX1NUUkVBTV9OQU1FYCk7CmNvbnN0IHdvcmtmbG93R2xvYmFsID0gZ2xvYmFsVGhpczsKZnVuY3Rpb24gY3JlYXRlSG9vayhlKSB7CglsZXQgbiA9IHdvcmtmbG93R2xvYmFsW1dPUktGTE9XX0NSRUFURV9IT09LXTsKCWlmIChuID09PSB2b2lkIDApIHRocm93IEVycm9yKCJgY3JlYXRlSG9vaygpYCBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIGEgd29ya2Zsb3cgZnVuY3Rpb24iKTsKCXJldHVybiBuKGUpOwp9CmZ1bmN0aW9uIGdldFdvcmtmbG93TWV0YWRhdGEoKSB7CglsZXQgdCA9IHdvcmtmbG93R2xvYmFsW1dPUktGTE9XX0NPTlRFWFRfU1lNQk9MXTsKCWlmICh0ID09PSB2b2lkIDApIHRocm93IEVycm9yKCJgZ2V0V29ya2Zsb3dNZXRhZGF0YSgpYCBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIGEgd29ya2Zsb3cgb3Igc3RlcCBmdW5jdGlvbiIpOwoJcmV0dXJuIHQ7Cn0KZnVuY3Rpb24gZ2V0V3JpdGFibGUoZSA9IHt9KSB7CglsZXQgdCA9IHdvcmtmbG93R2xvYmFsW1dPUktGTE9XX0dFVF9TVFJFQU1fSURdOwoJaWYgKHQgPT09IHZvaWQgMCkgdGhyb3cgRXJyb3IoImBnZXRXcml0YWJsZSgpYCBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIGEgd29ya2Zsb3cgZnVuY3Rpb24iKTsKCWxldCByID0gdChlLm5hbWVzcGFjZSk7CglyZXR1cm4gT2JqZWN0LmNyZWF0ZShnbG9iYWxUaGlzLldyaXRhYmxlU3RyZWFtLnByb3RvdHlwZSwgeyBbU1RSRUFNX05BTUVfU1lNQk9MXTogewoJCXZhbHVlOiByLAoJCXdyaXRhYmxlOiAhMQoJfSB9KTsKfQpmdW5jdGlvbiBkZWZpbmVIb29rKCkgewoJcmV0dXJuIHsKCQljcmVhdGU6IGNyZWF0ZUhvb2ssCgkJcmVzdW1lKCkgewoJCQl0aHJvdyBFcnJvcigiYGRlZmluZUhvb2soKS5yZXN1bWUoKWAgY2FuIG9ubHkgYmUgY2FsbGVkIGZyb20gZXh0ZXJuYWwgY29udGV4dHMuIik7CgkJfQoJfTsKfQpmdW5jdGlvbiBzbGVlcChlKSB7CglsZXQgdCA9IHdvcmtmbG93R2xvYmFsW1dPUktGTE9XX1NMRUVQXTsKCWlmICh0ID09PSB2b2lkIDApIHRocm93IEVycm9yKCJgc2xlZXAoKWAgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBhIHdvcmtmbG93IGZ1bmN0aW9uIik7CglyZXR1cm4gdChlKTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9ob29rLW93bmVyc2hpcC5qcwphc3luYyBmdW5jdGlvbiBjbGFpbUhvb2tPd25lcnNoaXAoZSkgewoJbGV0IHQ7Cgl0cnkgewoJCXQgPSBhd2FpdCBlLmdldENvbmZsaWN0KCk7Cgl9IGNhdGNoICh0KSB7CgkJcmV0dXJuIGF3YWl0IGRpc3Bvc2VBbmRUaHJvdyhlLCBub3JtYWxpemVIb29rQ2xhaW1FcnJvcih0LCBlLnRva2VuKSk7Cgl9CglpZiAodCAhPT0gbnVsbCkgcmV0dXJuIGF3YWl0IGRpc3Bvc2VBbmRUaHJvdyhlLCBjcmVhdGVIb29rQ29uZmxpY3RFcnJvcihlLnRva2VuLCB0LnJ1bklkKSk7Cn0KYXN5bmMgZnVuY3Rpb24gY2xvc2VIb29rSXRlcmF0b3IoZSkgewoJdHlwZW9mIGUucmV0dXJuID09IGBmdW5jdGlvbmAgJiYgYXdhaXQgZS5yZXR1cm4odm9pZCAwKTsKfQphc3luYyBmdW5jdGlvbiBkaXNwb3NlSG9vayhlKSB7CglsZXQgdCA9IGUuZGlzcG9zZTsKCWlmICh0eXBlb2YgdCA9PSBgZnVuY3Rpb25gKSB7CgkJYXdhaXQgdC5jYWxsKGUpOwoJCXJldHVybjsKCX0KCWxldCBuID0gZVtTeW1ib2wuZGlzcG9zZV07Cgl0eXBlb2YgbiA9PSBgZnVuY3Rpb25gICYmIGF3YWl0IG4uY2FsbChlKTsKfQphc3luYyBmdW5jdGlvbiBkaXNwb3NlQW5kVGhyb3coZSwgdCkgewoJdHJ5IHsKCQlhd2FpdCBkaXNwb3NlSG9vayhlKTsKCX0gY2F0Y2gge30KCXRocm93IHQ7Cn0KZnVuY3Rpb24gbm9ybWFsaXplSG9va0NsYWltRXJyb3IoZSwgdCkgewoJcmV0dXJuIGlzSG9va0NvbmZsaWN0RXJyb3IoZSkgPyBjcmVhdGVIb29rQ29uZmxpY3RFcnJvcih0eXBlb2YgZS50b2tlbiA9PSBgc3RyaW5nYCA/IGUudG9rZW4gOiB0LCB0eXBlb2YgZS5jb25mbGljdGluZ1J1bklkID09IGBzdHJpbmdgID8gZS5jb25mbGljdGluZ1J1bklkIDogdm9pZCAwKSA6IGU7Cn0KZnVuY3Rpb24gaXNIb29rQ29uZmxpY3RFcnJvcihlKSB7CglyZXR1cm4gdHlwZW9mIGUgPT0gYG9iamVjdGAgJiYgISFlICYmIGBuYW1lYCBpbiBlICYmIGUubmFtZSA9PT0gYEhvb2tDb25mbGljdEVycm9yYDsKfQpmdW5jdGlvbiBjcmVhdGVIb29rQ29uZmxpY3RFcnJvcihlLCB0KSB7CglsZXQgbiA9IHQgPT09IHZvaWQgMCA/IGBgIDogYCAocnVuICIke3R9IilgOwoJcmV0dXJuIE9iamVjdC5hc3NpZ24oRXJyb3IoYEhvb2sgdG9rZW4gIiR7ZX0iIGlzIGFscmVhZHkgaW4gdXNlJHtufWApLCB7CgkJY29uZmxpY3RpbmdSdW5JZDogdCwKCQluYW1lOiBgSG9va0NvbmZsaWN0RXJyb3JgLAoJCXRva2VuOiBlCgl9KTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9hY3Rpdml0eS10ZXh0LmpzCmZ1bmN0aW9uIG5vcm1hbGl6ZUFjdGl2aXR5VGV4dChlKSB7CglyZXR1cm4gZS5yZXBsYWNlKC9ccHtDY30vZ3UsIGAgYCkucmVwbGFjZSgvXHMrL2csIGAgYCkudHJpbSgpLnNsaWNlKDAsIDUwMCk7Cn0KZnVuY3Rpb24gY3JlYXRlQWN0aXZpdHlTbmFwc2hvdCgpIHsKCXJldHVybiB7CgkJYWN0aW9uczoge30sCgkJYmxvY2tlcnM6IHt9LAoJCXBlbmRpbmdTZXR0bGVtZW50czoge30sCgkJcmV2aXNpb246IDAsCgkJc2VlbkV2ZW50SWRzOiBbXSwKCQl2ZXJzaW9uOiAxLAoJCXdvcms6IHt9Cgl9Owp9CmZ1bmN0aW9uIHJlZHVjZUFjdGl2aXR5QmF0Y2goZSwgbikgewoJbGV0IHIgPSBlLCBpID0gZS5zZWVuRXZlbnRJZHMsIGEgPSAhMSwgbyA9ICExOwoJZm9yIChsZXQgZSBvZiBuLmV2ZW50cykgewoJCWlmIChpLmluY2x1ZGVzKGUuZXZlbnRJZCkpIGNvbnRpbnVlOwoJCWxldCBuID0gcmVkdWNlRXZlbnQociwgZSk7CgkJbiAhPT0gciAmJiAobyA9ICEwLCBpID0gYXBwZW5kQm91bmRlZChpLCBlLmV2ZW50SWQsIDFlMyksIGEgfHw9IHByZXNlbnRhdGlvbkRpZmZlcnMociwgbiksIHIgPSBuKTsKCX0KCXJldHVybiBvID8gYSA/IHsKCQkuLi5yLAoJCXJldmlzaW9uOiBlLnJldmlzaW9uICsgMSwKCQlzZWVuRXZlbnRJZHM6IGkKCX0gOiB7CgkJLi4uciwKCQlyZXZpc2lvbjogZS5yZXZpc2lvbiwKCQlzZWVuRXZlbnRJZHM6IGkKCX0gOiBlOwp9CmZ1bmN0aW9uIHByZXNlbnRhdGlvbkRpZmZlcnMoZSwgdCkgewoJcmV0dXJuIGUuYWN0aW9ucyAhPT0gdC5hY3Rpb25zIHx8IGUuYmxvY2tlcnMgIT09IHQuYmxvY2tlcnMgfHwgZS53b3JrICE9PSB0Lndvcms7Cn0KZnVuY3Rpb24gcmVkdWNlRXZlbnQoZSwgdCkgewoJc3dpdGNoICh0LmtpbmQpIHsKCQljYXNlIGB3b3JrLnN0YXJ0ZWRgOiByZXR1cm4gc3RhcnRXb3JrKGUsIHQpOwoJCWNhc2UgYHdvcmsuc2V0dGxlZGA6IHJldHVybiBzZXR0bGVXb3JrKGUsIHQpOwoJCWNhc2UgYGFjdGlvbi5zdGFydGVkYDogcmV0dXJuIHN0YXJ0QWN0aW9uKGUsIHQpOwoJCWNhc2UgYGFjdGlvbi5zZXR0bGVkYDogcmV0dXJuIHNldHRsZUFjdGlvbihlLCB0KTsKCQljYXNlIGBibG9ja2VyLnN0YXJ0ZWRgOiByZXR1cm4gc3RhcnRCbG9ja2VyKGUsIHQpOwoJCWNhc2UgYGJsb2NrZXIuc2V0dGxlZGA6IHJldHVybiBzZXR0bGVCbG9ja2VyKGUsIHQpOwoJfQp9CmZ1bmN0aW9uIHN0YXJ0V29yayh0LCBuKSB7CglpZiAodC53b3JrW24ud29yay5pZF0gIT09IHZvaWQgMCkgcmV0dXJuIHQ7CglsZXQgciA9IHBlbmRpbmdGb3IodCwgYHdvcmtgLCBuLndvcmsuaWQpLCBpID0gbi53b3JrLnBhcmVudElkID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0Lndvcmtbbi53b3JrLnBhcmVudElkXSwgYSA9IHI/Lm91dGNvbWUgPz8gKCFpc0JhY2tncm91bmRXb3JrQm91bmRhcnkodCwgbi53b3JrKSAmJiBpICE9PSB2b2lkIDAgJiYgaS5waGFzZSAhPT0gYHJ1bm5pbmdgID8gYGNhbmNlbGxlZGAgOiBgcnVubmluZ2ApLCBvID0gewoJCS4uLm4ud29yaywKCQluYW1lOiBuLndvcmsubmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9ybWFsaXplQWN0aXZpdHlUZXh0KG4ud29yay5uYW1lKSwKCQlwaGFzZTogYSwKCQlzZXR0bGVkQXQ6IHI/LnNldHRsZWRBdCA/PyAoYSA9PT0gYGNhbmNlbGxlZGAgPyBpPy5zZXR0bGVkQXQgOiB2b2lkIDApLAoJCXN0YXJ0ZWRBdDogbi5zdGFydGVkQXQKCX0sIHMgPSB7CgkJLi4udCwKCQlwZW5kaW5nU2V0dGxlbWVudHM6IHJlbW92ZUtleSh0LnBlbmRpbmdTZXR0bGVtZW50cywgcGVuZGluZ0tleShgd29ya2AsIG8uaWQpKSwKCQl3b3JrOiByZXBsYWNlQm91bmRlZCh0LndvcmssIG8uaWQsIG8pCgl9OwoJcmV0dXJuIG8ucGhhc2UgPT09IGBydW5uaW5nYCA/IHMgOiBzZXR0bGVXb3JrVHJlZShzLCB7CgkJb3V0Y29tZTogby5waGFzZSwKCQlzZXR0bGVkQXQ6IG8uc2V0dGxlZEF0ID8/IG4uc3RhcnRlZEF0LAoJCXdvcmtJZDogby5pZAoJfSk7Cn0KZnVuY3Rpb24gc2V0dGxlV29yayhlLCB0KSB7CglsZXQgbiA9IGUud29ya1t0LndvcmtJZF07CglyZXR1cm4gbiA9PT0gdm9pZCAwID8gcmV0YWluUGVuZGluZyhlLCBgd29ya2AsIHQud29ya0lkLCB0KSA6IG4ucGhhc2UgPT09IGBydW5uaW5nYCA/IHNldHRsZVdvcmtUcmVlKGUsIHsKCQlvdXRjb21lOiB0Lm91dGNvbWUsCgkJc2V0dGxlZEF0OiB0LnNldHRsZWRBdCwKCQl3b3JrSWQ6IHQud29ya0lkCgl9KSA6IGU7Cn0KZnVuY3Rpb24gc3RhcnRBY3Rpb24odCwgbikgewoJaWYgKHQuYWN0aW9uc1tuLmFjdGlvbi5pZF0gIT09IHZvaWQgMCkgcmV0dXJuIHQ7CglsZXQgciA9IHBlbmRpbmdGb3IodCwgYGFjdGlvbmAsIG4uYWN0aW9uLmlkKSwgaSA9IHQud29ya1tuLmFjdGlvbi5wYXJlbnRXb3JrSWRdLCBhID0gcj8ub3V0Y29tZSA/PyAoaSAhPT0gdm9pZCAwICYmIGkucGhhc2UgIT09IGBydW5uaW5nYCA/IGBjYW5jZWxsZWRgIDogYHJ1bm5pbmdgKTsKCXJldHVybiB7CgkJLi4udCwKCQlhY3Rpb25zOiByZXBsYWNlQm91bmRlZCh0LmFjdGlvbnMsIG4uYWN0aW9uLmlkLCB7CgkJCS4uLm4uYWN0aW9uLAoJCQluYW1lOiBub3JtYWxpemVBY3Rpdml0eVRleHQobi5hY3Rpb24ubmFtZSksCgkJCXBoYXNlOiBhLAoJCQlzZXR0bGVkQXQ6IHI/LnNldHRsZWRBdCA/PyAoYSA9PT0gYGNhbmNlbGxlZGAgPyBpPy5zZXR0bGVkQXQgOiB2b2lkIDApLAoJCQlzdGFydGVkQXQ6IG4uc3RhcnRlZEF0CgkJfSksCgkJcGVuZGluZ1NldHRsZW1lbnRzOiByZW1vdmVLZXkodC5wZW5kaW5nU2V0dGxlbWVudHMsIHBlbmRpbmdLZXkoYGFjdGlvbmAsIG4uYWN0aW9uLmlkKSkKCX07Cn0KZnVuY3Rpb24gc2V0dGxlQWN0aW9uKGUsIHQpIHsKCWxldCBuID0gZS5hY3Rpb25zW3QuYWN0aW9uSWRdOwoJcmV0dXJuIG4gPT09IHZvaWQgMCA/IHJldGFpblBlbmRpbmcoZSwgYGFjdGlvbmAsIHQuYWN0aW9uSWQsIHQpIDogbi5waGFzZSA9PT0gYHJ1bm5pbmdgID8gewoJCS4uLmUsCgkJYWN0aW9uczogcmVwbGFjZUJvdW5kZWQoZS5hY3Rpb25zLCB0LmFjdGlvbklkLCB7CgkJCS4uLm4sCgkJCXBoYXNlOiB0Lm91dGNvbWUsCgkJCXNldHRsZWRBdDogdC5zZXR0bGVkQXQKCQl9KQoJfSA6IGU7Cn0KZnVuY3Rpb24gc3RhcnRCbG9ja2VyKHQsIG4pIHsKCWlmICh0LmJsb2NrZXJzW24uYmxvY2tlci5pZF0gIT09IHZvaWQgMCkgcmV0dXJuIHQ7CglsZXQgciA9IHBlbmRpbmdGb3IodCwgYGJsb2NrZXJgLCBuLmJsb2NrZXIuaWQpLCBpID0gdC53b3JrW24uYmxvY2tlci5wYXJlbnRXb3JrSWRdLCBhID0gcj8ub3V0Y29tZSA/PyAoaSAhPT0gdm9pZCAwICYmIGkucGhhc2UgIT09IGBydW5uaW5nYCA/IGBjYW5jZWxsZWRgIDogYGJsb2NrZWRgKTsKCXJldHVybiB7CgkJLi4udCwKCQlibG9ja2VyczogcmVwbGFjZUJvdW5kZWQodC5ibG9ja2Vycywgbi5ibG9ja2VyLmlkLCB7CgkJCS4uLm4uYmxvY2tlciwKCQkJbGFiZWw6IG4uYmxvY2tlci5sYWJlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbm9ybWFsaXplQWN0aXZpdHlUZXh0KG4uYmxvY2tlci5sYWJlbCksCgkJCXBoYXNlOiBhLAoJCQlzZXR0bGVkQXQ6IHI/LnNldHRsZWRBdCA/PyAoYSA9PT0gYGNhbmNlbGxlZGAgPyBpPy5zZXR0bGVkQXQgOiB2b2lkIDApLAoJCQlzdGFydGVkQXQ6IG4uc3RhcnRlZEF0CgkJfSksCgkJcGVuZGluZ1NldHRsZW1lbnRzOiByZW1vdmVLZXkodC5wZW5kaW5nU2V0dGxlbWVudHMsIHBlbmRpbmdLZXkoYGJsb2NrZXJgLCBuLmJsb2NrZXIuaWQpKQoJfTsKfQpmdW5jdGlvbiBzZXR0bGVCbG9ja2VyKGUsIHQpIHsKCWxldCBuID0gZS5ibG9ja2Vyc1t0LmJsb2NrZXJJZF07CglyZXR1cm4gbiA9PT0gdm9pZCAwID8gcmV0YWluUGVuZGluZyhlLCBgYmxvY2tlcmAsIHQuYmxvY2tlcklkLCB0KSA6IG4ucGhhc2UgPT09IGBibG9ja2VkYCA/IHsKCQkuLi5lLAoJCWJsb2NrZXJzOiByZXBsYWNlQm91bmRlZChlLmJsb2NrZXJzLCB0LmJsb2NrZXJJZCwgewoJCQkuLi5uLAoJCQlwaGFzZTogdC5vdXRjb21lLAoJCQlzZXR0bGVkQXQ6IHQuc2V0dGxlZEF0CgkJfSkKCX0gOiBlOwp9CmZ1bmN0aW9uIHJldGFpblBlbmRpbmcoZSwgdCwgbiwgcikgewoJbGV0IGkgPSBwZW5kaW5nS2V5KHQsIG4pOwoJcmV0dXJuIGUucGVuZGluZ1NldHRsZW1lbnRzW2ldID09PSB2b2lkIDAgPyB7CgkJLi4uZSwKCQlwZW5kaW5nU2V0dGxlbWVudHM6IHJlcGxhY2VCb3VuZGVkKGUucGVuZGluZ1NldHRsZW1lbnRzLCBpLCB7CgkJCWVudGl0eUtpbmQ6IHQsCgkJCWV2ZW50SWQ6IHIuZXZlbnRJZCwKCQkJb3V0Y29tZTogci5vdXRjb21lLAoJCQlzZXR0bGVkQXQ6IHIuc2V0dGxlZEF0CgkJfSwgNTAwKQoJfSA6IGU7Cn0KZnVuY3Rpb24gcGVuZGluZ0ZvcihlLCB0LCBuKSB7CglyZXR1cm4gZS5wZW5kaW5nU2V0dGxlbWVudHNbcGVuZGluZ0tleSh0LCBuKV07Cn0KZnVuY3Rpb24gcGVuZGluZ0tleShlLCB0KSB7CglyZXR1cm4gYCR7ZX06JHt0fWA7Cn0KZnVuY3Rpb24gc2V0dGxlV29ya1RyZWUoZSwgdCkgewoJbGV0IG4gPSBuZXcgU2V0KFt0LndvcmtJZF0pLCByID0gITA7Cglmb3IgKDsgcjspIHsKCQlyID0gITE7CgkJZm9yIChsZXQgdCBvZiBPYmplY3QudmFsdWVzKGUud29yaykpIHQucGFyZW50SWQgPT09IHZvaWQgMCB8fCAhbi5oYXModC5wYXJlbnRJZCkgfHwgbi5oYXModC5pZCkgfHwgaXNCYWNrZ3JvdW5kV29ya0JvdW5kYXJ5KGUsIHQpIHx8IChuLmFkZCh0LmlkKSwgciA9ICEwKTsKCX0KCXJldHVybiB7CgkJLi4uZSwKCQlhY3Rpb25zOiBtYXBBY3Rpdml0eVN0YXRlcyhlLmFjdGlvbnMsIChlKSA9PiBuLmhhcyhlLnBhcmVudFdvcmtJZCkgJiYgZS5waGFzZSA9PT0gYHJ1bm5pbmdgID8gewoJCQkuLi5lLAoJCQlwaGFzZTogYGNhbmNlbGxlZGAsCgkJCXNldHRsZWRBdDogdC5zZXR0bGVkQXQKCQl9IDogZSksCgkJYmxvY2tlcnM6IG1hcEFjdGl2aXR5U3RhdGVzKGUuYmxvY2tlcnMsIChlKSA9PiBuLmhhcyhlLnBhcmVudFdvcmtJZCkgJiYgZS5waGFzZSA9PT0gYGJsb2NrZWRgID8gewoJCQkuLi5lLAoJCQlwaGFzZTogYGNhbmNlbGxlZGAsCgkJCXNldHRsZWRBdDogdC5zZXR0bGVkQXQKCQl9IDogZSksCgkJd29yazogbWFwQWN0aXZpdHlTdGF0ZXMoZS53b3JrLCAoZSkgPT4gZS5pZCA9PT0gdC53b3JrSWQgPyB7CgkJCS4uLmUsCgkJCXBoYXNlOiB0Lm91dGNvbWUsCgkJCXNldHRsZWRBdDogdC5zZXR0bGVkQXQKCQl9IDogbi5oYXMoZS5pZCkgJiYgZS5waGFzZSA9PT0gYHJ1bm5pbmdgID8gewoJCQkuLi5lLAoJCQlwaGFzZTogYGNhbmNlbGxlZGAsCgkJCXNldHRsZWRBdDogdC5zZXR0bGVkQXQKCQl9IDogZSkKCX07Cn0KZnVuY3Rpb24gaXNCYWNrZ3JvdW5kV29ya0JvdW5kYXJ5KGUsIHQpIHsKCXJldHVybiB0LmtpbmQgPT09IGB0YXNrYCA/ICEwIDogdC5jYWxsSWQgPT09IHZvaWQgMCB8fCB0LnBhcmVudElkID09PSB2b2lkIDAgPyAhMSA6IGUuYWN0aW9uc1tgYWN0aW9uOiR7dC5wYXJlbnRJZH06JHt0LmNhbGxJZH1gXSAhPT0gdm9pZCAwOwp9CmZ1bmN0aW9uIG1hcEFjdGl2aXR5U3RhdGVzKGUsIHQpIHsKCWxldCBuID0gZTsKCWZvciAobGV0IFtyLCBpXSBvZiBPYmplY3QuZW50cmllcyhlKSkgewoJCWxldCBhID0gdChpKTsKCQlhICE9PSBpICYmIChuID09PSBlICYmIChuID0geyAuLi5lIH0pLCBuW3JdID0gYSk7Cgl9CglyZXR1cm4gbjsKfQpmdW5jdGlvbiByZXBsYWNlQm91bmRlZChlLCB0LCBuLCByID0gNTAwKSB7CglsZXQgaSA9IHsKCQkuLi5lLAoJCVt0XTogbgoJfSwgYSA9IE9iamVjdC5rZXlzKGkpLmxlbmd0aCAtIHI7Cglmb3IgKGxldCBlIG9mIE9iamVjdC5rZXlzKGkpLnNsaWNlKDAsIE1hdGgubWF4KDAsIGEpKSkgZGVsZXRlIGlbZV07CglyZXR1cm4gaTsKfQpmdW5jdGlvbiByZW1vdmVLZXkoZSwgdCkgewoJaWYgKGVbdF0gPT09IHZvaWQgMCkgcmV0dXJuIGU7CglsZXQgbiA9IHsgLi4uZSB9OwoJcmV0dXJuIGRlbGV0ZSBuW3RdLCBuOwp9CmZ1bmN0aW9uIGFwcGVuZEJvdW5kZWQoZSwgdCwgbikgewoJcmV0dXJuIFsuLi5lLCB0XS5zbGljZSgtbik7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vc2Vzc2lvbi1hY3Rpdml0eS1yZW5kZXJlci1zdGVwLmpzCnZhciByZW5kZXJTZXNzaW9uQWN0aXZpdHlTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vcmVuZGVyU2Vzc2lvbkFjdGl2aXR5U3RlcCIpOwp2YXIgZGlzcG9zZVNlc3Npb25BY3Rpdml0eVN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9kaXNwb3NlU2Vzc2lvbkFjdGl2aXR5U3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9hY3Rpdml0eS1jb2xsZWN0b3IuanMKYXN5bmMgZnVuY3Rpb24gYWN0aXZpdHlDb2xsZWN0b3JXb3JrZmxvdyhpKSB7CglsZXQgYSA9IGNyZWF0ZUhvb2soeyB0b2tlbjogaS50b2tlbiB9KSwgbyA9IGFbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCksIHMgPSAhMSwgYywgbCA9IHNsZWVwKG5ldyBEYXRlKGkuZXhwaXJlc0F0KSkudGhlbigoKSA9PiAoeyBraW5kOiBgZXhwaXJlZGAgfSkpLCB1ID0gY3JlYXRlQWN0aXZpdHlTbmFwc2hvdCgpLCBkID0ge307Cgl0cnkgewoJCXRyeSB7CgkJCWF3YWl0IGNsYWltSG9va093bmVyc2hpcChhKSwgcyA9ICEwOwoJCX0gY2F0Y2ggKGUpIHsKCQkJaWYgKGlzSG9va0NvbmZsaWN0RXJyb3IoZSkpIHJldHVybjsKCQkJdGhyb3cgZTsKCQl9CgkJZm9yICg7OykgewoJCQljID8/PSBvLm5leHQoKTsKCQkJbGV0IGUgPSBhd2FpdCBQcm9taXNlLnJhY2UoW2MudGhlbigoZSkgPT4gKHsKCQkJCWtpbmQ6IGBiYXRjaGAsCgkJCQl2YWx1ZTogZQoJCQl9KSksIGxdKTsKCQkJaWYgKGUua2luZCA9PT0gYGV4cGlyZWRgIHx8IGUudmFsdWUuZG9uZSA9PT0gITApIGJyZWFrOwoJCQljID0gdm9pZCAwOwoJCQlsZXQgbiA9IHJlZHVjZUNvbGxlY3RvckFjdGl2aXR5KHUsIGUudmFsdWUudmFsdWUpOwoJCQlpZiAodSA9IG4uc25hcHNob3QsICFuLnByZXNlbnRhdGlvbkNoYW5nZWQpIGNvbnRpbnVlOwoJCQlsZXQgciA9IHNsZWVwKDM1MCkudGhlbigoKSA9PiAoeyBraW5kOiBgcmVuZGVyYCB9KSk7CgkJCWZvciAoOzspIHsKCQkJCWMgPz89IG8ubmV4dCgpOwoJCQkJbGV0IGUgPSBhd2FpdCBQcm9taXNlLnJhY2UoWwoJCQkJCWMudGhlbigoZSkgPT4gKHsKCQkJCQkJa2luZDogYGJhdGNoYCwKCQkJCQkJdmFsdWU6IGUKCQkJCQl9KSksCgkJCQkJciwKCQkJCQlsCgkJCQldKTsKCQkJCWlmIChlLmtpbmQgPT09IGBleHBpcmVkYCkgcmV0dXJuOwoJCQkJaWYgKGUua2luZCA9PT0gYHJlbmRlcmApIGJyZWFrOwoJCQkJaWYgKGUudmFsdWUuZG9uZSA9PT0gITApIHJldHVybjsKCQkJCWMgPSB2b2lkIDAsIHUgPSByZWR1Y2VBY3Rpdml0eUJhdGNoKHUsIGUudmFsdWUudmFsdWUpOwoJCQl9CgkJCWQgPSAoYXdhaXQgcmVuZGVyU2Vzc2lvbkFjdGl2aXR5U3RlcCh7CgkJCQlyZW5kZXJlclN0YXRlczogZCwKCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiBpLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJc25hcHNob3Q6IHUKCQkJfSkpLnJlbmRlcmVyU3RhdGVzOwoJCX0KCX0gZmluYWxseSB7CgkJcyAmJiAoYXdhaXQgY2xvc2VIb29rSXRlcmF0b3IobykuY2F0Y2goKCkgPT4ge30pLCBhd2FpdCBkaXNwb3NlSG9vayhhKS5jYXRjaCgoKSA9PiB7fSksIGF3YWl0IGRpc3Bvc2VTZXNzaW9uQWN0aXZpdHlTdGVwKHsKCQkJcmVuZGVyZXJTdGF0ZXM6IGQsCgkJCXNlcmlhbGl6ZWRDb250ZXh0OiBpLnNlcmlhbGl6ZWRDb250ZXh0CgkJfSkuY2F0Y2goKCkgPT4ge30pKTsKCX0KfQpmdW5jdGlvbiByZWR1Y2VDb2xsZWN0b3JBY3Rpdml0eShlLCB0KSB7CglsZXQgbiA9IGUucmV2aXNpb24sIHIgPSByZWR1Y2VBY3Rpdml0eUJhdGNoKGUsIHQpOwoJcmV0dXJuIHsKCQlwcmVzZW50YXRpb25DaGFuZ2VkOiByLnJldmlzaW9uICE9PSBuLAoJCXNuYXBzaG90OiByCgl9Owp9CmFjdGl2aXR5Q29sbGVjdG9yV29ya2Zsb3cud29ya2Zsb3dJZCA9IGB3b3JrZmxvdy8vZXZlLy9hY3Rpdml0eUNvbGxlY3RvcldvcmtmbG93YDsKYWN0aXZpdHlDb2xsZWN0b3JXb3JrZmxvdy53b3JrZmxvd0lkID0gIndvcmtmbG93Ly9ldmUvL2FjdGl2aXR5Q29sbGVjdG9yV29ya2Zsb3ciOwpnbG9iYWxUaGlzLl9fcHJpdmF0ZV93b3JrZmxvd3Muc2V0KCJ3b3JrZmxvdy8vZXZlLy9hY3Rpdml0eUNvbGxlY3RvcldvcmtmbG93IiwgYWN0aXZpdHlDb2xsZWN0b3JXb3JrZmxvdyk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3Nlc3Npb24tdGltZW91dC1zdGVwcy5qcwp2YXIgc3RhcnRTZXNzaW9uVGltZW91dFN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9zdGFydFNlc3Npb25UaW1lb3V0U3RlcCIpOwp2YXIgc2lnbmFsU2Vzc2lvblRpbWVvdXRTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vc2lnbmFsU2Vzc2lvblRpbWVvdXRTdGVwIik7CnZhciBjYW5jZWxTZXNzaW9uVGltZW91dFN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9jYW5jZWxTZXNzaW9uVGltZW91dFN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vc2Vzc2lvbi10aW1lb3V0LXdvcmtmbG93LmpzCmFzeW5jIGZ1bmN0aW9uIHNlc3Npb25UaW1lb3V0V29ya2Zsb3coZSkgewoJYXdhaXQgc2xlZXAoZS5kZWFkbGluZSksIGF3YWl0IHNpZ25hbFNlc3Npb25UaW1lb3V0U3RlcCh7IHRva2VuOiBlLnRva2VuIH0pOwp9CnNlc3Npb25UaW1lb3V0V29ya2Zsb3cud29ya2Zsb3dJZCA9IGB3b3JrZmxvdy8vZXZlLy9zZXNzaW9uVGltZW91dFdvcmtmbG93YDsKc2Vzc2lvblRpbWVvdXRXb3JrZmxvdy53b3JrZmxvd0lkID0gIndvcmtmbG93Ly9ldmUvL3Nlc3Npb25UaW1lb3V0V29ya2Zsb3ciOwpnbG9iYWxUaGlzLl9fcHJpdmF0ZV93b3JrZmxvd3Muc2V0KCJ3b3JrZmxvdy8vZXZlLy9zZXNzaW9uVGltZW91dFdvcmtmbG93Iiwgc2Vzc2lvblRpbWVvdXRXb3JrZmxvdyk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvc2hhcmVkL2pzb24uanMKZnVuY3Rpb24ganNvblZhbHVlc0VxdWFsKGUsIHQpIHsKCWlmIChlID09PSB0KSByZXR1cm4gITA7CglpZiAoQXJyYXkuaXNBcnJheShlKSB8fCBBcnJheS5pc0FycmF5KHQpKSByZXR1cm4gQXJyYXkuaXNBcnJheShlKSAmJiBBcnJheS5pc0FycmF5KHQpICYmIGUubGVuZ3RoID09PSB0Lmxlbmd0aCAmJiBlLmV2ZXJ5KChlLCBuKSA9PiBqc29uVmFsdWVz",
	"RXF1YWwoZSwgdFtuXSkpOwoJaWYgKGUgPT09IG51bGwgfHwgdCA9PT0gbnVsbCB8fCB0eXBlb2YgZSAhPSBgb2JqZWN0YCB8fCB0eXBlb2YgdCAhPSBgb2JqZWN0YCkgcmV0dXJuICExOwoJbGV0IG4gPSBPYmplY3QuZW50cmllcyhlKSwgciA9IHQ7CglyZXR1cm4gbi5sZW5ndGggPT09IE9iamVjdC5rZXlzKHIpLmxlbmd0aCAmJiBuLmV2ZXJ5KChbZSwgdF0pID0+IE9iamVjdC5oYXNPd24ociwgZSkgJiYganNvblZhbHVlc0VxdWFsKHQsIHJbZV0pKTsKfQpjb25zdCBJTlZBTElEX0pTT05fVkFMVUVfQ0FORElEQVRFID0gU3ltYm9sKGBpbnZhbGlkLWpzb24tdmFsdWUtY2FuZGlkYXRlYCk7CmZ1bmN0aW9uIHBhcnNlSnNvblZhbHVlKHQpIHsKCWxldCBuID0gbm9ybWFsaXplSnNvblZhbHVlQ2FuZGlkYXRlKHQpOwoJaWYgKG4gPT09IElOVkFMSURfSlNPTl9WQUxVRV9DQU5ESURBVEUpIHRocm93IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBKU09OLXNlcmlhbGl6YWJsZSB2YWx1ZS5gKTsKCXJldHVybiBuOwp9CmZ1bmN0aW9uIG5vcm1hbGl6ZUpzb25WYWx1ZUNhbmRpZGF0ZSh0LCBuID0gbmV3IFdlYWtTZXQoKSkgewoJaWYgKHQgPT09IG51bGwgfHwgdHlwZW9mIHQgPT0gYGJvb2xlYW5gIHx8IHR5cGVvZiB0ID09IGBzdHJpbmdgKSByZXR1cm4gdDsKCWlmICh0eXBlb2YgdCA9PSBgbnVtYmVyYCkgcmV0dXJuIE51bWJlci5pc0Zpbml0ZSh0KSA/IHQgOiBJTlZBTElEX0pTT05fVkFMVUVfQ0FORElEQVRFOwoJaWYgKEFycmF5LmlzQXJyYXkodCkpIHsKCQlsZXQgciA9IFtdOwoJCWZvciAobGV0IGkgb2YgdCkgewoJCQlsZXQgdCA9IG5vcm1hbGl6ZUpzb25WYWx1ZUNhbmRpZGF0ZShpLCBuKTsKCQkJaWYgKHQgPT09IElOVkFMSURfSlNPTl9WQUxVRV9DQU5ESURBVEUpIHJldHVybiBJTlZBTElEX0pTT05fVkFMVUVfQ0FORElEQVRFOwoJCQlyLnB1c2godCk7CgkJfQoJCXJldHVybiByOwoJfQoJaWYgKHR5cGVvZiB0ICE9IGBvYmplY3RgIHx8IHQgPT09IHZvaWQgMCB8fCAhaXNQbGFpbk9iamVjdCh0KSB8fCBuLmhhcyh0KSkgcmV0dXJuIElOVkFMSURfSlNPTl9WQUxVRV9DQU5ESURBVEU7CgluLmFkZCh0KTsKCWxldCByID0ge307Cglmb3IgKGxldCBbaSwgYV0gb2YgT2JqZWN0LmVudHJpZXModCkpIHsKCQlpZiAoYSA9PT0gdm9pZCAwKSBjb250aW51ZTsKCQlsZXQgdCA9IG5vcm1hbGl6ZUpzb25WYWx1ZUNhbmRpZGF0ZShhLCBuKTsKCQlpZiAodCA9PT0gSU5WQUxJRF9KU09OX1ZBTFVFX0NBTkRJREFURSkgcmV0dXJuIElOVkFMSURfSlNPTl9WQUxVRV9DQU5ESURBVEU7CgkJcltpXSA9IHQ7Cgl9CglyZXR1cm4gbi5kZWxldGUodCksIHI7Cn0KZnVuY3Rpb24gaXNQbGFpbk9iamVjdChlKSB7CglsZXQgdCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihlKTsKCXJldHVybiB0ID09PSBudWxsIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSA9PT0gbnVsbDsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL3Rhc2tzL3R5cGVzLmpzCmZ1bmN0aW9uIHJlYWRUYXNrSW5wdXRSZXF1ZXN0SWQoZSkgewoJaWYgKHR5cGVvZiBlICE9IGBvYmplY3RgIHx8ICFlIHx8IEFycmF5LmlzQXJyYXkoZSkpIHJldHVybjsKCWxldCB0ID0gUmVmbGVjdC5nZXQoZSwgYHJlcXVlc3RJZGApOwoJcmV0dXJuIHR5cGVvZiB0ID09IGBzdHJpbmdgID8gdCA6IHZvaWQgMDsKfQpmdW5jdGlvbiBpc1Rlcm1pbmFsVGFza1N0YXR1cyhlKSB7CglyZXR1cm4gZSA9PT0gYGNvbXBsZXRlZGAgfHwgZSA9PT0gYGZhaWxlZGAgfHwgZSA9PT0gYGNhbmNlbGxlZGA7Cn0KZnVuY3Rpb24gaXNSZWFkeVRhc2tTdGF0dXMoZSkgewoJcmV0dXJuIGUgPT09IGBpbnB1dF9yZXF1aXJlZGAgfHwgaXNUZXJtaW5hbFRhc2tTdGF0dXMoZSk7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdGFza3MvY2hpbGQvc3RlcHMuanMKdmFyIGFwcGVuZFRhc2tWaWV3U3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL2FwcGVuZFRhc2tWaWV3U3RlcCIpOwp2YXIgd2FrZVRhc2tQYXJlbnRTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vd2FrZVRhc2tQYXJlbnRTdGVwIik7CnZhciB3YWtlVGFza1VwZGF0ZVBhcmVudFN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy93YWtlVGFza1VwZGF0ZVBhcmVudFN0ZXAiKTsKdmFyIHdha2VUYXNrQWdlbnRSZXF1ZXN0UGFyZW50U3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL3dha2VUYXNrQWdlbnRSZXF1ZXN0UGFyZW50U3RlcCIpOwp2YXIgd2FrZVRhc2tBdXRob3JpemF0aW9uUGFyZW50U3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL3dha2VUYXNrQXV0aG9yaXphdGlvblBhcmVudFN0ZXAiKTsKdmFyIHdha2VXb3JrZmxvd1Rhc2tJbnB1dFJlcXVlc3RQYXJlbnRTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vd2FrZVdvcmtmbG93VGFza0lucHV0UmVxdWVzdFBhcmVudFN0ZXAiKTsKdmFyIGRlbGl2ZXJUYXNrSW5wdXRSZXNwb25zZXNTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vZGVsaXZlclRhc2tJbnB1dFJlc3BvbnNlc1N0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdG9vbHMvd29ya2Zsb3cvbWVzc2FnZXMuanMKY29uc3Qgd29ya2Zsb3dUb29sUnVuUmVwb3J0SG9vayA9IGRlZmluZUhvb2soKTsKY29uc3Qgd29ya2Zsb3dUb29sUnVuUmVxdWVzdEhvb2sgPSBkZWZpbmVIb29rKCk7CmNvbnN0IHdvcmtmbG93VG9vbFJ1bk91dGNvbWVIb29rID0gZGVmaW5lSG9vaygpOwpmdW5jdGlvbiBkZXJpdmVXb3JrZmxvd1Rvb2xSdW5Pd25lcihlKSB7CglyZXR1cm4gewoJCWFkbWlzc2lvbjogYCR7ZX06YWRtaXNzaW9uYCwKCQlvdXRjb21lOiBgJHtlfTpvdXRjb21lYCwKCQlyZXBvcnQ6IGAke2V9OnJlcG9ydGAsCgkJcmVxdWVzdDogYCR7ZX06cmVxdWVzdGAKCX07Cn0KZnVuY3Rpb24gaXNXb3JrZmxvd1Rvb2xSdW5Db250cm9sTWVzc2FnZShlKSB7CglpZiAodHlwZW9mIGUgIT0gYG9iamVjdGAgfHwgIWUpIHJldHVybiAhMTsKCWxldCB7IGtpbmQ6IHQsIHJlYXNvbjogbiB9ID0gZTsKCXJldHVybiB0ID09PSBgY2FuY2VsYCAmJiB0eXBlb2YgbiA9PSBgc3RyaW5nYDsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2hhcm5lc3Mvd29ya2Zsb3ctdG9vbC1ydW5zLmpzCmNvbnN0IFdPUktGTE9XX1RPT0xfUlVOU19TVEFURV9LRVkgPSBgZXZlLnJ1bnRpbWUud29ya2Zsb3dUb29sUnVuc2A7CmZ1bmN0aW9uIGdldFdvcmtmbG93VG9vbFJ1bnModCkgewoJbGV0IG4gPSB0Py5bV09SS0ZMT1dfVE9PTF9SVU5TX1NUQVRFX0tFWV07CglyZXR1cm4gQXJyYXkuaXNBcnJheShuKSA/IG4gOiBbXTsKfQpmdW5jdGlvbiBmaW5kV29ya2Zsb3dUb29sUnVuKGUsIHQpIHsKCXJldHVybiBnZXRXb3JrZmxvd1Rvb2xSdW5zKGUpLmZpbmQoKGUpID0+IGUuY2FsbElkID09PSB0KTsKfQpmdW5jdGlvbiBpc0luYm94VG9vbFJlc3VsdEZyb21SZWNvcmRlZFdvcmtmbG93VG9vbFJ1bihlLCB0KSB7CglsZXQgbiA9IGZpbmRXb3JrZmxvd1Rvb2xSdW4oZSwgdC5jYWxsSWQpOwoJcmV0dXJuIG4gIT09IHZvaWQgMCAmJiBuLnJlc3VsdEtpbmQgIT09IGBzdWJhZ2VudGAgJiYgbi50b29sTmFtZSA9PT0gdC50b29sTmFtZTsKfQpmdW5jdGlvbiBpc0luYm94U3ViYWdlbnRSZXN1bHRGcm9tUmVjb3JkZWRXb3JrZmxvd1Rvb2xSdW4oZSwgdCkgewoJbGV0IG4gPSBmaW5kV29ya2Zsb3dUb29sUnVuKGUsIHQuY2FsbElkKTsKCXJldHVybiBuPy5yZXN1bHRLaW5kID09PSBgc3ViYWdlbnRgICYmIG4udG9vbE5hbWUgPT09IHQuc3ViYWdlbnROYW1lOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3Rvb2xzL3dvcmtmbG93L3Jlc3VtZS1ob29rLXN0ZXAuanMKdmFyIHJlc3VtZUhvb2tTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vcmVzdW1lSG9va1N0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdG9vbHMvd29ya2Zsb3cvYXNrLmpzCmNvbnN0IFdPUktGTE9XX1RPT0xfUlVOX0NPTlRFWFQgPSBTeW1ib2wuZm9yKGBldmUud29ya2Zsb3ctdG9vbC1ydW4uY29udGV4dGApOwpmdW5jdGlvbiBhdHRhY2hXb3JrZmxvd1Rvb2xSdW5Db250ZXh0KGUsIHQpIHsKCU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBXT1JLRkxPV19UT09MX1JVTl9DT05URVhULCB7CgkJZW51bWVyYWJsZTogITEsCgkJdmFsdWU6IHsKCQkJLi4udCwKCQkJYW5zd2VyU2VxOiAwCgkJfQoJfSk7Cn0KZnVuY3Rpb24gcmVhZFdvcmtmbG93VG9vbFJ1bkNvbnRleHQoZSkgewoJbGV0IHQgPSBlW1dPUktGTE9XX1RPT0xfUlVOX0NPTlRFWFRdOwoJaWYgKHQgPT09IHZvaWQgMCkgdGhyb3cgRXJyb3IoYFRoaXMgZnVuY3Rpb24gbXVzdCBiZSBjYWxsZWQgd2l0aCB0aGUgY29udGV4dCBvZiBhIHdvcmtmbG93IHRvb2wgYm9keSAoInVzZSB3b3JrZmxvdyIpLmApOwoJcmV0dXJuIHQ7Cn0KZnVuY3Rpb24gcmVhZFdvcmtmbG93VG9vbFJ1blJlZihlKSB7CglyZXR1cm4gcmVhZFdvcmtmbG93VG9vbFJ1bkNvbnRleHQoZSkuZnJvbTsKfQpmdW5jdGlvbiByZWFkV29ya2Zsb3dUb29sUnVuT3duZXIoZSkgewoJcmV0dXJuIHJlYWRXb3JrZmxvd1Rvb2xSdW5Db250ZXh0KGUpLm93bmVyOwp9CmZ1bmN0aW9uIHJlYWRXb3JrZmxvd1Rvb2xSdW5BZG1pc3Npb24oZSkgewoJcmV0dXJuIHJlYWRXb3JrZmxvd1Rvb2xSdW5Db250ZXh0KGUpLmFkbWlzc2lvbjsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi93b3JrZmxvdy1lcnJvcnMuanMKZnVuY3Rpb24gbm9ybWFsaXplU2VyaWFsaXphYmxlRXJyb3IoZSkgewoJcmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciA/IHsKCQkuLi5PYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoZSkpLAoJCWNhdXNlOiBlLmNhdXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBub3JtYWxpemVTZXJpYWxpemFibGVFcnJvcihlLmNhdXNlKSwKCQltZXNzYWdlOiBlLm1lc3NhZ2UsCgkJbmFtZTogZS5uYW1lLAoJCXN0YWNrOiBlLnN0YWNrCgl9IDogZTsKfQpmdW5jdGlvbiByZWJ1aWxkU2VyaWFsaXphYmxlRXJyb3IoZSkgewoJaWYgKCFpc1JlY29yZChlKSkgcmV0dXJuIEVycm9yKFN0cmluZyhlKSk7CglsZXQgdCA9IHR5cGVvZiBlLm1lc3NhZ2UgPT0gYHN0cmluZ2AgPyBlLm1lc3NhZ2UgOiBTdHJpbmcoZSksIG4gPSBFcnJvcih0KTsKCXR5cGVvZiBlLm5hbWUgPT0gYHN0cmluZ2AgJiYgKG4ubmFtZSA9IGUubmFtZSksIHR5cGVvZiBlLnN0YWNrID09IGBzdHJpbmdgICYmIChuLnN0YWNrID0gZS5zdGFjayksIGBjYXVzZWAgaW4gZSAmJiAobi5jYXVzZSA9IGlzUmVjb3JkKGUuY2F1c2UpID8gcmVidWlsZFNlcmlhbGl6YWJsZUVycm9yKGUuY2F1c2UpIDogZS5jYXVzZSk7CglsZXQgciA9IG47Cglmb3IgKGxldCBbdCwgbl0gb2YgT2JqZWN0LmVudHJpZXMoZSkpIHQgPT09IGBtZXNzYWdlYCB8fCB0ID09PSBgbmFtZWAgfHwgdCA9PT0gYHN0YWNrYCB8fCB0ID09PSBgY2F1c2VgIHx8IChyW3RdID0gbik7CglyZXR1cm4gbjsKfQpmdW5jdGlvbiBpc1JlY29yZChlKSB7CglyZXR1cm4gdHlwZW9mIGUgPT0gYG9iamVjdGAgJiYgISFlOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3dvcmtmbG93LXJlZ2lzdHJ5LmpzCmNvbnN0IFdPUktGTE9XX1JFR0lTVFJZX0dMT0JBTCA9IGBfX3ByaXZhdGVfd29ya2Zsb3dzYDsKZnVuY3Rpb24gcmVhZFJlZ2lzdGVyZWRXb3JrZmxvdyhlKSB7CglyZXR1cm4gZ2xvYmFsVGhpc1tXT1JLRkxPV19SRUdJU1RSWV9HTE9CQUxdPy5nZXQoZSk7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdG9vbHMvd29ya2Zsb3cvYm9keS5qcwphc3luYyBmdW5jdGlvbiBleGVjdXRlV29ya2Zsb3dCb2R5KGUsIGkpIHsKCWxldCBhID0gY3JlYXRlV29ya2Zsb3dCb2R5UmVmKGUpLCBvID0gY3JlYXRlV29ya2Zsb3dCb2R5Q29udGV4dChlLCBpKTsKCWF0dGFjaFdvcmtmbG93VG9vbFJ1bkNvbnRleHQobywgewoJCWZyb206IGEsCgkJb3duZXI6IGUub3duZXIKCX0pOwoJdHJ5IHsKCQlsZXQgdCA9IHJlc29sdmVXb3JrZmxvd1Rvb2xFeGVjdXRlKGUpKGUuZXhlY3V0ZUlucHV0ID8/IGUuaW5wdXQsIG8pLCByOwoJCWlmICghaXNBc3luY0l0ZXJhYmxlKHQpKSByID0gYXdhaXQgdDsKCQllbHNlIHsKCQkJbGV0IGkgPSB0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpLCBvLCBzID0gYXdhaXQgaS5uZXh0KCk7CgkJCWZvciAoOyBzLmRvbmUgIT09ICEwOykgewoJCQkJbyA9IHMudmFsdWU7CgkJCQlsZXQgdCA9IHsKCQkJCQlmcm9tOiBhLAoJCQkJCXVwZGF0ZTogcy52YWx1ZQoJCQkJfTsKCQkJCWF3YWl0IHJlc3VtZUhvb2tTdGVwKGUub3duZXIucmVwb3J0LCB0KSwgcyA9IGF3YWl0IGkubmV4dCgpOwoJCQl9CgkJCXIgPSBzLnZhbHVlID8/IG8gPz8gbnVsbDsKCQl9CgkJcmV0dXJuIHsKCQkJb3V0cHV0OiByLAoJCQlzdGF0dXM6IGBjb21wbGV0ZWRgCgkJfTsKCX0gY2F0Y2ggKGUpIHsKCQlyZXR1cm4gaS5hYm9ydGVkID8gewoJCQlyZWFzb246IGkucmVhc29uIGluc3RhbmNlb2YgRXJyb3IgPyBpLnJlYXNvbi5tZXNzYWdlIDogU3RyaW5nKGkucmVhc29uID8/IGBgKSwKCQkJc3RhdHVzOiBgY2FuY2VsbGVkYAoJCX0gOiB7CgkJCWVycm9yOiBub3JtYWxpemVTZXJpYWxpemFibGVFcnJvcihlKSwKCQkJc3RhdHVzOiBgZmFpbGVkYAoJCX07Cgl9Cn0KZnVuY3Rpb24gY3JlYXRlV29ya2Zsb3dCb2R5UmVmKHQpIHsKCXJldHVybiB7CgkJY2FsbElkOiB0LmNhbGxJZCwKCQlleGVjdXRpb246IHQuZXhlY3V0aW9uLAoJCWlucHV0OiB0LmlucHV0LAoJCXJlc3VsdEtpbmQ6IHQucmVzdWx0S2luZCwKCQlydW5JZDogdC5ydW5JZCA/PyBnZXRXb3JrZmxvd01ldGFkYXRhKCkud29ya2Zsb3dSdW5JZCwKCQlzZXF1ZW5jZTogdC5zZXNzaW9uLnR1cm4uc2VxdWVuY2UsCgkJc3RlcEluZGV4OiB0LnN0ZXBJbmRleCwKCQl0b29sTmFtZTogdC50b29sTmFtZSwKCQl0dXJuSWQ6IHQuc2Vzc2lvbi50dXJuLmlkCgl9Owp9CmZ1bmN0aW9uIHJlc29sdmVXb3JrZmxvd1Rvb2xFeGVjdXRlKGUpIHsKCWxldCB0ID0gcmVhZFJlZ2lzdGVyZWRXb3JrZmxvdyhlLndvcmtmbG93SWQpOwoJaWYgKHR5cGVvZiB0ICE9IGBmdW5jdGlvbmApIHRocm93IEVycm9yKGBUb29sICIke2UudG9vbE5hbWV9IiBpcyBub3QgcmVnaXN0ZXJlZCBhcyBhIHdvcmtmbG93IGluIHRoaXMgZGVwbG95bWVudCAoJHtlLndvcmtmbG93SWR9KS4gVGhlIHRvb2wgd2FzIHJlbmFtZWQgb3IgcmVtb3ZlZCBhZnRlciB0aGlzIHJ1biBzdGFydGVkLmApOwoJcmV0dXJuIHQ7Cn0KZnVuY3Rpb24gY3JlYXRlV29ya2Zsb3dCb2R5Q29udGV4dChlLCB0KSB7CglsZXQgdW5hdmFpbGFibGUgPSAodCwgbikgPT4gewoJCXRocm93IEVycm9yKGBjdHguJHt0fSBpcyBub3QgYXZhaWxhYmxlIGluc2lkZSBhIHdvcmtmbG93IHRvb2w7ICR7bn0uIFRvb2wgIiR7ZS50b29sTmFtZX0iIHJ1bnMgYXMgYSBkdXJhYmxlIHdvcmtmbG93IGJvZHksIHdoaWNoIG9ubHkgcmVwbGF5cyBkZXRlcm1pbmlzdGljIGNvZGUuYCk7Cgl9OwoJcmV0dXJuIHsKCQlhYm9ydFNpZ25hbDogdCwKCQljYWxsSWQ6IGUuY2FsbElkLAoJCWdldFNhbmRib3g6ICgpID0+IHVuYXZhaWxhYmxlKGBnZXRTYW5kYm94KClgLCBgdGhlIHNlc3Npb24gc2FuZGJveCBiZWxvbmdzIHRvIHRoZSB0dXJuYCksCgkJZ2V0U2tpbGw6ICgpID0+IHVuYXZhaWxhYmxlKGBnZXRTa2lsbCgpYCwgYHNraWxscyBhcmUgcmVhZCB0aHJvdWdoIHRoZSBzZXNzaW9uIHNhbmRib3hgKSwKCQlnZXRUb2tlbjogKCkgPT4gdW5hdmFpbGFibGUoYGdldFRva2VuKClgLCBgcmVhZCBjcmVkZW50aWFscyBmcm9tIHRoZSBlbnZpcm9ubWVudCBpbnNpZGUgYSAidXNlIHN0ZXAiIGhlbHBlcmApLAoJCXJlcXVpcmVBdXRoOiAoKSA9PiB1bmF2YWlsYWJsZShgcmVxdWlyZUF1dGgoKWAsIGBhIHdvcmtmbG93IGJvZHkgY2Fubm90IHBhcmsgb24gYXV0aG9yaXphdGlvbmApLAoJCXNlc3Npb246IGUuc2Vzc2lvbiwKCQl0b29sTmFtZTogZS50b29sTmFtZQoJfTsKfQpmdW5jdGlvbiBpc0FzeW5jSXRlcmFibGUoZSkgewoJcmV0dXJuIHR5cGVvZiBlID09IGBvYmplY3RgICYmICEhZSAmJiB0eXBlb2YgZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPT0gYGZ1bmN0aW9uYDsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90b29scy93b3JrZmxvdy9vd25lci1jaGFubmVscy5qcwpmdW5jdGlvbiBjcmVhdGVDaGFubmVsUmVhZGVyKGUsIHQpIHsKCXJldHVybiB7CgkJY2hhbm5lbDogZSwKCQlpdGVyYXRvcjogdFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSwKCQlsYW5kZWQ6IFtdCgl9Owp9CmFzeW5jIGZ1bmN0aW9uIHJhY2VDaGFubmVsUmVhZHMoZSwgdCkgewoJZm9yICg7OykgewoJCWZvciAobGV0IHQgb2YgZSkgewoJCQlpZiAodC5mYWlsdXJlICE9PSB2b2lkIDApIHRocm93IHQuZmFpbHVyZS5lcnJvcjsKCQkJbGV0IGUgPSB0LmxhbmRlZC5zaGlmdCgpOwoJCQlpZiAoZSAhPT0gdm9pZCAwKSByZXR1cm4gewoJCQkJY2hhbm5lbDogdC5jaGFubmVsLAoJCQkJbmV4dDogZQoJCQl9OwoJCX0KCQlsZXQgbiA9IFtdOwoJCWZvciAobGV0IHQgb2YgZSkgdC5wZW5kaW5nID8/PSB0Lml0ZXJhdG9yLm5leHQoKS50aGVuKChlKSA9PiB7CgkJCXQubGFuZGVkLnB1c2goZSksIHQucGVuZGluZyA9IHZvaWQgMDsKCQl9LCAoZSkgPT4gewoJCQl0LmZhaWx1cmUgPSB7IGVycm9yOiBlIH0sIHQucGVuZGluZyA9IHZvaWQgMDsKCQl9KSwgbi5wdXNoKHQucGVuZGluZyk7CgkJaWYgKHQgIT09IHZvaWQgMCAmJiBuLnB1c2godCksIGF3YWl0IFByb21pc2UucmFjZShuKSA9PT0gYGNhbmNlbGApIHJldHVybiBgY2FuY2VsYDsKCX0KfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90b29scy93b3JrZmxvdy9vd25lci5qcwpmdW5jdGlvbiBvcGVuV29ya2Zsb3dUb29sUnVuT3duZXJDaGFubmVscyhlKSB7CglsZXQgdCA9IGRlcml2ZVdvcmtmbG93VG9vbFJ1bk93bmVyKGUpLCBuID0gd29ya2Zsb3dUb29sUnVuUmVwb3J0SG9vay5jcmVhdGUoeyB0b2tlbjogdC5yZXBvcnQgfSksIHIgPSB3b3JrZmxvd1Rvb2xSdW5SZXF1ZXN0SG9vay5jcmVhdGUoeyB0b2tlbjogdC5yZXF1ZXN0IH0pLCBpID0gd29ya2Zsb3dUb29sUnVuT3V0Y29tZUhvb2suY3JlYXRlKHsgdG9rZW46IHQub3V0Y29tZSB9KTsKCXJldHVybiB7CgkJcmVhZGVyczogWwoJCQljcmVhdGVDaGFubmVsUmVhZGVyKGByZXBvcnRgLCBuKSwKCQkJY3JlYXRlQ2hhbm5lbFJlYWRlcihgcmVxdWVzdGAsIHIpLAoJCQljcmVhdGVDaGFubmVsUmVhZGVyKGBvdXRjb21lYCwgaSkKCQldLAoJCWFzeW5jIGRpc3Bvc2UoKSB7CgkJCWF3YWl0IGRpc3Bvc2VIb29rKG4pLCBhd2FpdCBkaXNwb3NlSG9vayhyKSwgYXdhaXQgZGlzcG9zZUhvb2soaSk7CgkJfQoJfTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL3N1YmFnZW50cy9hZ2VudC1oYW5kbGUtZXJyb3JzLmpzCmNvbnN0IFNVQkFHRU5UX0VYRUNVVElPTl9GQUlMRUQgPSBgU1VCQUdFTlRfRVhFQ1VUSU9OX0ZBSUxFRGA7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3Rvb2xzL3dvcmtmbG93L293bmVyLWluYm94LmpzCmZ1bmN0aW9uIHdvcmtmbG93VG9vbFJ1bk91dGNvbWVUb1Rvb2xSZXN1bHQoZSkgewoJbGV0IHsgZnJvbTogdCwgcmVzdWx0OiBuIH0gPSBlOwoJcmV0dXJuIG4uc3RhdHVzID09PSBgY29tcGxldGVkYCA/IHsKCQljYWxsSWQ6IHQuY2FsbElkLAoJCWtpbmQ6IGB0b29sLXJlc3VsdGAsCgkJb3V0cHV0OiBuLm91dHB1dCwKCQl0b29sTmFtZTogdC50b29sTmFtZQoJfSA6IHsKCQljYWxsSWQ6IHQuY2FsbElkLAoJCWlzRXJyb3I6ICEwLAoJCWtpbmQ6IGB0b29sLXJlc3VsdGAsCgkJb3V0cHV0OiBuLnN0YXR1cyA9PT0gYGZhaWxlZGAgPyBlcnJvck1lc3NhZ2Uobi5lcnJvcikgOiBuLnJlYXNvbiA/PyBgVGhlIHdvcmtmbG93IHRvb2wgcnVuIHdhcyBjYW5jZWxsZWQuYCwKCQl0b29sTmFtZTogdC50b29sTmFtZQoJfTsKfQpmdW5jdGlvbiB3b3JrZmxvd1Rvb2xSdW5PdXRjb21lVG9TdWJhZ2VudFJlc3VsdChlKSB7CglpZiAoZS5yZXN1bHQuc3RhdHVzID09PSBgY29tcGxldGVkYCAmJiBpc1J1bnRpbWVTdWJhZ2VudFJlc3VsdChlLnJlc3VsdC5vdXRwdXQpKSByZXR1cm4gZS5yZXN1bHQub3V0cHV0OwoJbGV0IHQgPSBlLnJlc3VsdC5zdGF0dXMgPT09IGBmYWlsZWRgID8gZXJyb3JNZXNzYWdlKGUucmVzdWx0LmVycm9yKSA6IGUucmVzdWx0LnN0YXR1cyA9PT0gYGNhbmNlbGxlZGAgPyBlLnJlc3VsdC5yZWFzb24gPz8gYFRoZSBhZ2VudCBpbnZvY2F0aW9uIHdhcyBjYW5jZWxsZWQuYCA6IGBUaGUgYWdlbnQgaW52b2NhdGlvbiByZXR1cm5lZCBhbiBpbnZhbGlkIHJlc3VsdC5gOwoJcmV0dXJuIHsKCQljYWxsSWQ6IGUuZnJvbS5jYWxsSWQsCgkJaXNFcnJvcjogITAsCgkJa2luZDogYHN1YmFnZW50LXJlc3VsdGAsCgkJb3JpZ2luOiBgZGlzcGF0Y2hgLAoJCW91dHB1dDogdCwKCQlzdWJhZ2VudE5hbWU6IGUuZnJvbS50b29sTmFtZQoJfTsKfQpmdW5jdGlvbiB3b3JrZmxvd1Rvb2xSdW5PdXRjb21lVG9UYXNrQ29tbWFuZChlKSB7CglyZXR1cm4gZS5yZXN1bHQuc3RhdHVzID09PSBgY29tcGxldGVkYCA/IHsKCQlkYXRhOiBlLnJlc3VsdC5vdXRwdXQsCgkJa2luZDogYGNvbXBsZXRlYAoJfSA6IGUucmVzdWx0LnN0YXR1cyA9PT0gYGZhaWxlZGAgPyB7CgkJZGF0YTogZS5mcm9tLnJlc3VsdEtpbmQgPT09IGBzdWJhZ2VudGAgPyBzdWJhZ2VudEZhaWx1cmVPdXRwdXQoZS5yZXN1bHQuZXJyb3IpIDogZXJyb3JNZXNzYWdlKGUucmVzdWx0LmVycm9yKSwKCQlraW5kOiBgZmFpbGAKCX0gOiB7IGtpbmQ6IGBjYW5jZWxgIH07Cn0KZnVuY3Rpb24gc3ViYWdlbnRGYWlsdXJlT3V0cHV0KGUpIHsKCWxldCBuID0gcGFyc2VKc29uVmFsdWVPclVuZGVmaW5lZChlKTsKCXJldHVybiBuICE9PSB2b2lkIDAgJiYgdHlwZW9mIG4gPT0gYG9iamVjdGAgJiYgbiAmJiAhQXJyYXkuaXNBcnJheShuKSAmJiB0eXBlb2YgUmVmbGVjdC5nZXQobiwgYGNvZGVgKSA9PSBgc3RyaW5nYCA/IG4gOiB7CgkJY29kZTogU1VCQUdFTlRfRVhFQ1VUSU9OX0ZBSUxFRCwKCQltZXNzYWdlOiBlcnJvck1lc3NhZ2UoZSkKCX07Cn0KZnVuY3Rpb24gd29ya2Zsb3dUb29sUnVuUmVwb3J0VG9UYXNrVXBkYXRlKGUsIHQsIG4pIHsKCXJldHVybiB7CgkJY2FsbElkOiBlLmZyb20uY2FsbElkLAoJCWtpbmQ6IGB0YXNrLXVwZGF0ZWAsCgkJbWVzc2FnZTogdHlwZW9mIGUudXBkYXRlID09IGBzdHJpbmdgID8gZS51cGRhdGUgOiBKU09OLnN0cmluZ2lmeShlLnVwZGF0ZSksCgkJdXBkYXRlRXBvY2g6IHQsCgkJdXBkYXRlSW5kZXg6IG4KCX07Cn0KZnVuY3Rpb24gaXNSdW50aW1lU3ViYWdlbnRSZXN1bHQoZSkgewoJaWYgKHR5cGVvZiBlICE9IGBvYmplY3RgIHx8ICFlKSByZXR1cm4gITE7CglsZXQgdCA9IFJlZmxlY3QuZ2V0KGUsIGBvcmlnaW5gKTsKCXJldHVybiBSZWZsZWN0LmdldChlLCBga2luZGApID09PSBgc3ViYWdlbnQtcmVzdWx0YCAmJiAodCA9PT0gYGNoaWxkYCB8fCB0ID09PSBgZGlzcGF0Y2hgKTsKfQpmdW5jdGlvbiBlcnJvck1lc3NhZ2UoZSkgewoJaWYgKHR5cGVvZiBlID09IGBvYmplY3RgICYmIGUgJiYgYG1lc3NhZ2VgIGluIGUpIHsKCQlsZXQgdCA9IGUubWVzc2FnZTsKCQlpZiAodHlwZW9mIHQgPT0gYHN0cmluZ2ApIHJldHVybiB0OwoJfQoJcmV0dXJuIFN0cmluZyhlKTsKfQpmdW5jdGlvbiBwYXJzZUpzb25WYWx1ZU9yVW5kZWZpbmVkKHQpIHsKCXRyeSB7CgkJcmV0dXJuIHBhcnNlSnNvblZhbHVlKHQpOwoJfSBjYXRjaCB7CgkJcmV0dXJuOwoJfQp9CmZ1bmN0",
	"aW9uIHdvcmtmbG93VG9vbFJ1blJlcXVlc3RUb0lucHV0UmVxdWVzdFBheWxvYWQoZSkgewoJbGV0IHsgZnJvbTogdCwgcmVwbHlUbzogbiwgcmVxdWVzdDogciwgcmVxdWVzdENvb3JkaW5hdGVzOiBpIH0gPSBlOwoJcmV0dXJuIHsKCQljYWxsSWQ6IHQuY2FsbElkLAoJCWNoaWxkQ29udGludWF0aW9uVG9rZW46IG4sCgkJY2hpbGRTZXNzaW9uSWQ6IHQucnVuSWQsCgkJZXZlbnQ6IHsKCQkJcmVxdWVzdHM6IHIua2luZCA9PT0gYGlucHV0LWJhdGNoYCA/IHIucmVxdWVzdHMgOiBbbm9ybWFsaXplSW5wdXRSZXF1ZXN0KHIsIHQsIG4pXSwKCQkJc2VxdWVuY2U6IGk/LnNlcXVlbmNlID8/IHQuc2VxdWVuY2UsCgkJCXN0ZXBJbmRleDogaT8uc3RlcEluZGV4ID8/IHQuc3RlcEluZGV4LAoJCQl0dXJuSWQ6IGk/LnR1cm5JZCA/PyB0LnR1cm5JZAoJCX0sCgkJa2luZDogYHN1YmFnZW50LWlucHV0LXJlcXVlc3RgLAoJCXN1YmFnZW50TmFtZTogdC50b29sTmFtZQoJfTsKfQpmdW5jdGlvbiB3b3JrZmxvd1Rvb2xSdW5SZXF1ZXN0VG9UYXNrSW5wdXRSZXF1ZXN0KGUpIHsKCWxldCB7IGZyb206IHQsIHJlcGx5VG86IG4sIHJlcXVlc3Q6IHIsIHJlcXVlc3RDb29yZGluYXRlczogaSB9ID0gZSwgYSA9IHsKCQlraW5kOiBgdGFzay1pbnB1dC1yZXF1ZXN0YCwKCQlyZXBseVRvOiBuLAoJCXNlcXVlbmNlOiBpPy5zZXF1ZW5jZSA/PyB0LnNlcXVlbmNlLAoJCXN0ZXBJbmRleDogaT8uc3RlcEluZGV4ID8/IHQuc3RlcEluZGV4LAoJCXR1cm5JZDogaT8udHVybklkID8/IHQudHVybklkCgl9OwoJcmV0dXJuIHIua2luZCA9PT0gYGlucHV0LWJhdGNoYCA/IHsKCQkuLi5hLAoJCXJlcXVlc3RzOiByLnJlcXVlc3RzCgl9IDogewoJCS4uLmEsCgkJcmVxdWVzdDogbm9ybWFsaXplSW5wdXRSZXF1ZXN0KHIsIHQsIG4pCgl9Owp9CmZ1bmN0aW9uIG5vcm1hbGl6ZUlucHV0UmVxdWVzdChlLCB0LCBuKSB7Cglzd2l0Y2ggKGUua2luZCkgewoJCWNhc2UgYGFnZW50LWludm9rZWA6CgkJY2FzZSBgYWdlbnQtc2V0dGxlZGA6IHRocm93IFR5cGVFcnJvcihgQSB3b3JrZmxvdyBhZ2VudCByZXF1ZXN0IGNhbm5vdCBiZSBub3JtYWxpemVkIGFzIGh1bWFuIGlucHV0LmApOwoJCWNhc2UgYGF1dGhvcml6YXRpb24tcmVxdWVzdGA6IHRocm93IFR5cGVFcnJvcihgQSB3b3JrZmxvdyBhdXRob3JpemF0aW9uIGV2ZW50IGNhbm5vdCBiZSBub3JtYWxpemVkIGFzIGh1bWFuIGlucHV0LmApOwoJCWNhc2UgYGFza2A6IHJldHVybiBub3JtYWxpemVBc2tSZXF1ZXN0KGUucmVxdWVzdCwgdCwgbik7CgkJZGVmYXVsdDogcmV0dXJuIGU7Cgl9Cn0KZnVuY3Rpb24gbm9ybWFsaXplQXNrUmVxdWVzdChlLCB0LCBuKSB7CglpZiAodHlwZW9mIGUucHJvbXB0ICE9IGBzdHJpbmdgIHx8IGUucHJvbXB0Lmxlbmd0aCA9PT0gMCkgdGhyb3cgVHlwZUVycm9yKCJBIHdvcmtmbG93IHRvb2wgcnVuIHJlcXVlc3QgbmVlZHMgYSBub24tZW1wdHkgYHByb21wdGAuIik7CglsZXQgciA9IHsKCQlhY3Rpb246IHsKCQkJY2FsbElkOiB0LmNhbGxJZCwKCQkJaW5wdXQ6IHQuaW5wdXQsCgkJCWtpbmQ6IGB0b29sLWNhbGxgLAoJCQl0b29sTmFtZTogdC50b29sTmFtZQoJCX0sCgkJa2luZDogYHF1ZXN0aW9uYCwKCQlwcm9tcHQ6IGUucHJvbXB0LAoJCXJlcXVlc3RJZDogbgoJfTsKCXJldHVybiBlLmFsbG93RnJlZWZvcm0gIT09IHZvaWQgMCAmJiAoci5hbGxvd0ZyZWVmb3JtID0gZS5hbGxvd0ZyZWVmb3JtKSwgZS5kaXNwbGF5ICE9PSB2b2lkIDAgJiYgKHIuZGlzcGxheSA9IGUuZGlzcGxheSksIGUub3B0aW9ucyAhPT0gdm9pZCAwICYmIChyLm9wdGlvbnMgPSBbLi4uZS5vcHRpb25zXSksIHI7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy90YXNrcy90cmFuc2l0aW9ucy5qcwpmdW5jdGlvbiB0ZXJtaW5hbFZpZXcoZSwgdCwgbikgewoJbGV0IHIgPSBgdXNhZ2VgIGluIHQgPyB0LnVzYWdlIDogdm9pZCAwLCBpID0gewoJCWV4ZWN1dG9yOiBlLmV4ZWN1dG9yLAoJCW1ldGFkYXRhOiBlLm1ldGFkYXRhLAoJCXRhc2tJZDogZS50YXNrSWQKCX07Cglzd2l0Y2ggKHIgIT09IHZvaWQgMCAmJiAoaS51c2FnZSA9IHIpLCBuLnN0YXR1cykgewoJCWNhc2UgYGNvbXBsZXRlZGA6IHJldHVybiB7CgkJCS4uLmksCgkJCWxhc3RPdXRwdXQ6IG4ubGFzdE91dHB1dCwKCQkJc3RhdHVzOiBgY29tcGxldGVkYAoJCX07CgkJY2FzZSBgZmFpbGVkYDogcmV0dXJuIHsKCQkJLi4uaSwKCQkJbGFzdE91dHB1dDogbi5sYXN0T3V0cHV0LAoJCQlzdGF0dXM6IGBmYWlsZWRgCgkJfTsKCQljYXNlIGBjYW5jZWxsZWRgOiByZXR1cm4gewoJCQkuLi5pLAoJCQlzdGF0dXM6IGBjYW5jZWxsZWRgCgkJfTsKCX0KfQpmdW5jdGlvbiBhcHBseVRhc2tUcmFuc2l0aW9uKHIsIGkpIHsKCWlmIChpLmtpbmQgPT09IGBiaW5kYCkgewoJCWxldCB0ID0gci5leGVjdXRvcj8uYmluZGluZzsKCQlyZXR1cm4gdCAhPT0gdm9pZCAwICYmIHQua2luZCA9PT0gaS5leGVjdXRvci5raW5kICYmIGpzb25WYWx1ZXNFcXVhbCh0LmRhdGEsIGkuZXhlY3V0b3IuZGF0YSkgPyB7CgkJCWFjdGlvbjogYG5vb3BgLAoJCQl2aWV3OiByCgkJfSA6IHQgPT09IHZvaWQgMCA/IHsKCQkJYWN0aW9uOiBgYWNjZXB0ZWRgLAoJCQl2aWV3OiB7CgkJCQkuLi5yLAoJCQkJZXhlY3V0b3I6IHsKCQkJCQkuLi5yLmV4ZWN1dG9yLAoJCQkJCWJpbmRpbmc6IGkuZXhlY3V0b3IKCQkJCX0KCQkJfQoJCX0gOiB7CgkJCWFjdGlvbjogYHJlamVjdGVkYCwKCQkJcmVhc29uOiBgVGFzayAiJHtyLnRhc2tJZH0iIGFscmVhZHkgaGFzIGFuIGV4ZWN1dG9yIGJpbmRpbmcuYCwKCQkJdmlldzogcgoJCX07Cgl9CglpZiAoaXNUZXJtaW5hbFRhc2tTdGF0dXMoci5zdGF0dXMpKSByZXR1cm4gaS5raW5kID09PSBgY2FuY2VsYCAmJiByLnN0YXR1cyA9PT0gYGNhbmNlbGxlZGAgPyB7CgkJYWN0aW9uOiBgbm9vcGAsCgkJdmlldzogcgoJfSA6IHsKCQlhY3Rpb246IGByZWplY3RlZGAsCgkJcmVhc29uOiBgVGFzayAiJHtyLnRhc2tJZH0iIGlzIGFscmVhZHkgJHtyLnN0YXR1c307ICIke2kua2luZH0iIGNhbm5vdCBjaGFuZ2UgYSB0ZXJtaW5hbCB0YXNrLmAsCgkJdmlldzogcgoJfTsKCXN3aXRjaCAoaS5raW5kKSB7CgkJY2FzZSBgY29tcGxldGVgOiByZXR1cm4gewoJCQlhY3Rpb246IGBhY2NlcHRlZGAsCgkJCXZpZXc6IHRlcm1pbmFsVmlldyhyLCBpLCB7CgkJCQlsYXN0T3V0cHV0OiB7CgkJCQkJZGF0YTogaS5kYXRhLAoJCQkJCXR5cGU6IGByZXN1bHRgCgkJCQl9LAoJCQkJc3RhdHVzOiBgY29tcGxldGVkYAoJCQl9KQoJCX07CgkJY2FzZSBgZmFpbGA6CgkJY2FzZSBgcmVqZWN0LWRpc3BhdGNoYDogcmV0dXJuIHsKCQkJYWN0aW9uOiBgYWNjZXB0ZWRgLAoJCQl2aWV3OiB0ZXJtaW5hbFZpZXcociwgaSwgewoJCQkJbGFzdE91dHB1dDogewoJCQkJCWRhdGE6IGkuZGF0YSwKCQkJCQl0eXBlOiBgZXJyb3JgCgkJCQl9LAoJCQkJc3RhdHVzOiBgZmFpbGVkYAoJCQl9KQoJCX07CgkJY2FzZSBgY2FuY2VsYDogcmV0dXJuIHsKCQkJYWN0aW9uOiBgYWNjZXB0ZWRgLAoJCQl2aWV3OiB0ZXJtaW5hbFZpZXcociwgaSwgeyBzdGF0dXM6IGBjYW5jZWxsZWRgIH0pCgkJfTsKCQljYXNlIGByZXF1aXJlLWlucHV0YDogcmV0dXJuIGlzVmFsaWRJbnB1dFJlcXVlc3RCYXRjaChpLmlucHV0UmVxdWVzdHMpID8gewoJCQlhY3Rpb246IGBhY2NlcHRlZGAsCgkJCXZpZXc6IHsKCQkJCWlucHV0UmVxdWVzdHM6IGkuaW5wdXRSZXF1ZXN0cywKCQkJCWV4ZWN1dG9yOiByLmV4ZWN1dG9yLAoJCQkJbWV0YWRhdGE6IHIubWV0YWRhdGEsCgkJCQlzdGF0dXM6IGBpbnB1dF9yZXF1aXJlZGAsCgkJCQl0YXNrSWQ6IHIudGFza0lkCgkJCX0KCQl9IDogewoJCQlhY3Rpb246IGByZWplY3RlZGAsCgkJCXJlYXNvbjogYFRhc2sgIiR7ci50YXNrSWR9IiByZWNlaXZlZCBhbiBpbnZhbGlkIGlucHV0IHJlcXVlc3QgYmF0Y2guYCwKCQkJdmlldzogcgoJCX07CgkJY2FzZSBgcmVhZHlgOiByZXR1cm4gewoJCQlhY3Rpb246IGBhY2NlcHRlZGAsCgkJCXZpZXc6IHIKCQl9OwoJCWNhc2UgYGFuc3dlcmVkYDogewoJCQlpZiAoci5zdGF0dXMgIT09IGBpbnB1dF9yZXF1aXJlZGApIHJldHVybiB7CgkJCQlhY3Rpb246IGBub29wYCwKCQkJCXZpZXc6IHIKCQkJfTsKCQkJbGV0IGUgPSBuZXcgU2V0KGkucmVxdWVzdElkcyksIHQgPSByLmlucHV0UmVxdWVzdHMuZmlsdGVyKCh0KSA9PiB7CgkJCQlsZXQgciA9IHJlYWRUYXNrSW5wdXRSZXF1ZXN0SWQodCk7CgkJCQlyZXR1cm4gciA9PT0gdm9pZCAwIHx8ICFlLmhhcyhyKTsKCQkJfSk7CgkJCXJldHVybiB0Lmxlbmd0aCA9PT0gci5pbnB1dFJlcXVlc3RzLmxlbmd0aCA/IHsKCQkJCWFjdGlvbjogYG5vb3BgLAoJCQkJdmlldzogcgoJCQl9IDogdC5sZW5ndGggPiAwID8gewoJCQkJYWN0aW9uOiBgYWNjZXB0ZWRgLAoJCQkJdmlldzogewoJCQkJCS4uLnIsCgkJCQkJaW5wdXRSZXF1ZXN0czogdAoJCQkJfQoJCQl9IDogewoJCQkJYWN0aW9uOiBgYWNjZXB0ZWRgLAoJCQkJdmlldzogewoJCQkJCWV4ZWN1dG9yOiByLmV4ZWN1dG9yLAoJCQkJCW1ldGFkYXRhOiByLm1ldGFkYXRhLAoJCQkJCXN0YXR1czogYHdvcmtpbmdgLAoJCQkJCXRhc2tJZDogci50YXNrSWQKCQkJCX0KCQkJfTsKCQl9Cgl9Cn0KZnVuY3Rpb24gaXNWYWxpZElucHV0UmVxdWVzdEJhdGNoKGUpIHsKCWlmIChlLmxlbmd0aCA9PT0gMCkgcmV0dXJuICExOwoJbGV0IHQgPSBlLm1hcChyZWFkVGFza0lucHV0UmVxdWVzdElkKTsKCXJldHVybiB0LmV2ZXJ5KChlKSA9PiBlICE9PSB2b2lkIDAgJiYgZS5sZW5ndGggPiAwKSAmJiBuZXcgU2V0KHQpLnNpemUgPT09IHQubGVuZ3RoOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3Rhc2tzL2NoaWxkL3dvcmtmbG93LmpzCmFzeW5jIGZ1bmN0aW9uIHRhc2tSdW5Xb3JrZmxvdyhhKSB7CglsZXQgbyA9IGNyZWF0ZUhvb2soeyB0b2tlbjogYS50YXNrSW5ib3hUb2tlbiB9KSwgYyA9IG9wZW5Xb3JrZmxvd1Rvb2xSdW5Pd25lckNoYW5uZWxzKGEudGFza0luYm94VG9rZW4pLCBsID0gWy4uLmMucmVhZGVycywgY3JlYXRlQ2hhbm5lbFJlYWRlcihgY29tbWFuZHNgLCBvKV0sIHUgPSAhMSwgZCA9IGEuaW5pdGlhbFZpZXcsIGYgPSAhMSwgcCA9ICExLCBtLCBoID0gW10sIGcgPSAwLCBfID0geyBvd25lclJlcXVlc3RzOiBbXSB9LCB2ID0gbmV3IE1hcCgpLCB5ID0gbmV3IEFib3J0Q29udHJvbGxlcigpLCBiLCB4ID0gYS53b3JrZmxvdyA9PT0gdm9pZCAwOwoJdHJ5IHsKCQl0cnkgewoJCQlhd2FpdCBjbGFpbUhvb2tPd25lcnNoaXAobyksIHUgPSAhMDsKCQl9IGNhdGNoIChlKSB7CgkJCWlmIChpc0hvb2tDb25mbGljdEVycm9yKGUpKSByZXR1cm47CgkJCXRocm93IGU7CgkJfQoJCWZvciAoYXdhaXQgYXBwZW5kVGFza1ZpZXdTdGVwKHsKCQkJYWN0aXZpdHlPYnNlcnZlcjogYS5hY3Rpdml0eU9ic2VydmVyLAoJCQl2aWV3OiBkCgkJfSk7ICFpc0ZpbmlzaGVkKCk7KSB7CgkJCWxldCBlID0gYXdhaXQgcmFjZUNoYW5uZWxSZWFkcyhiID09PSB2b2lkIDAgPyBsIDogWy4uLmwsIGJdKTsKCQkJaWYgKGUuY2hhbm5lbCA9PT0gYGJvZHlgKSB7CgkJCQlpZiAoeCA9ICEwLCBiID0gdm9pZCAwLCBlLm5leHQuZG9uZSkgY29udGludWU7CgkJCQlhd2FpdCBhcHBseVBheWxvYWQoewoJCQkJCWNvbW1hbmQ6IHdvcmtmbG93VG9vbFJ1bk91dGNvbWVUb1Rhc2tDb21tYW5kKHsKCQkJCQkJZnJvbTogY3JlYXRlV29ya2Zsb3dCb2R5UmVmKHsKCQkJCQkJCS4uLmEud29ya2Zsb3csCgkJCQkJCQlleGVjdXRpb246IGBiYWNrZ3JvdW5kYAoJCQkJCQl9KSwKCQkJCQkJcmVzdWx0OiBlLm5leHQudmFsdWUKCQkJCQl9KSwKCQkJCQlraW5kOiBgdGFzay1jb21tYW5kYAoJCQkJfSksIGQuc3RhdHVzID09PSBgY2FuY2VsbGVkYCAmJiBmICYmICFwICYmIGF3YWl0IHdha2VUYXNrUGFyZW50U3RlcCh7CgkJCQkJdG9rZW46IGEucGFyZW50Q29udGludWF0aW9uVG9rZW4sCgkJCQkJdmlldzogZAoJCQkJfSk7CgkJCQljb250aW51ZTsKCQkJfQoJCQlpZiAoZS5uZXh0LmRvbmUpIHJldHVybjsKCQkJaWYgKGUuY2hhbm5lbCA9PT0gYHJlcG9ydGApIHsKCQkJCWF3YWl0IGFwcGx5UGF5bG9hZCh3b3JrZmxvd1Rvb2xSdW5SZXBvcnRUb1Rhc2tVcGRhdGUoZS5uZXh0LnZhbHVlLCBkLnRhc2tJZCwgZysrKSk7CgkJCQljb250aW51ZTsKCQkJfQoJCQlpZiAoZS5jaGFubmVsID09PSBgb3V0Y29tZWApIHsKCQkJCWF3YWl0IGFwcGx5UGF5bG9hZCh7CgkJCQkJY29tbWFuZDogd29ya2Zsb3dUb29sUnVuT3V0Y29tZVRvVGFza0NvbW1hbmQoZS5uZXh0LnZhbHVlKSwKCQkJCQlraW5kOiBgdGFzay1jb21tYW5kYAoJCQkJfSk7CgkJCQljb250aW51ZTsKCQkJfQoJCQlpZiAoZS5jaGFubmVsID09PSBgcmVxdWVzdGApIHsKCQkJCWxldCB0ID0gZS5uZXh0LnZhbHVlLCBuID0gdC5yZXF1ZXN0LmtpbmQ7CgkJCQlpZiAobiA9PT0gYGFnZW50LWludm9rZWAgfHwgbiA9PT0gYGFnZW50LXNldHRsZWRgIHx8IG4gPT09IGBhdXRob3JpemF0aW9uLXJlcXVlc3RgKSB7CgkJCQkJYXdhaXQgaGFuZGxlT3duZXJSZXF1ZXN0KHQpOwoJCQkJCWNvbnRpbnVlOwoJCQkJfQoJCQkJdC5yZXF1ZXN0Q29vcmRpbmF0ZXMgPT09IHZvaWQgMCAmJiB2LnNldCh0LnJlcGx5VG8sIHsgcnVuSWQ6IHQuZnJvbS5ydW5JZCB9KSwgYXdhaXQgYXBwbHlQYXlsb2FkKHdvcmtmbG93VG9vbFJ1blJlcXVlc3RUb1Rhc2tJbnB1dFJlcXVlc3QodCkpOwoJCQkJY29udGludWU7CgkJCX0KCQkJYXdhaXQgYXBwbHlQYXlsb2FkKGUubmV4dC52YWx1ZSk7CgkJfQoJfSBmaW5hbGx5IHsKCQl1ICYmIChhd2FpdCBjLmRpc3Bvc2UoKSwgYXdhaXQgZGlzcG9zZUhvb2sobykpOwoJfQoJZnVuY3Rpb24gaXNGaW5pc2hlZCgpIHsKCQlyZXR1cm4gaXNUZXJtaW5hbFRhc2tTdGF0dXMoZC5zdGF0dXMpICYmIGYgJiYgeDsKCX0KCWFzeW5jIGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShlKSB7CgkJZiAmJiAhaXNUZXJtaW5hbFRhc2tTdGF0dXMoZC5zdGF0dXMpID8gYXdhaXQgd2FrZVRhc2tVcGRhdGVQYXJlbnRTdGVwKHsKCQkJdG9rZW46IGEucGFyZW50Q29udGludWF0aW9uVG9rZW4sCgkJCXVwZGF0ZTogZSwKCQkJdmlldzogZAoJCX0pIDogaC5wdXNoKGUpOwoJfQoJYXN5bmMgZnVuY3Rpb24gYXBwbHlQYXlsb2FkKGUpIHsKCQlsZXQgdCA9IGUua2luZCA9PT0gYHRhc2stY29tbWFuZGAgJiYgZS5jb21tYW5kLmtpbmQgPT09IGByZWFkeWAsIG4gPSBlLmtpbmQgPT09IGB0YXNrLWNvbW1hbmRgICYmIGUuY29tbWFuZC5raW5kID09PSBgcmVqZWN0LWRpc3BhdGNoYDsKCQlpZiAoKHQgfHwgbikgJiYgKGYgPSAhMCksIG4gJiYgKHAgPSAhMCksICh0IHx8IG4pICYmIChuIHx8IGlzVGVybWluYWxUYXNrU3RhdHVzKGQuc3RhdHVzKSA/IHggPSAhMCA6IGEud29ya2Zsb3cgIT09IHZvaWQgMCAmJiBiID09PSB2b2lkIDAgJiYgIXggJiYgKGIgPSBjcmVhdGVDaGFubmVsUmVhZGVyKGBib2R5YCwgYXdhaXRCb2R5UmVzdWx0KGV4ZWN1dGVXb3JrZmxvd0JvZHkoewoJCQkuLi5hLndvcmtmbG93LAoJCQlleGVjdXRpb246IGBiYWNrZ3JvdW5kYCwKCQkJb3duZXI6IGRlcml2ZVdvcmtmbG93VG9vbFJ1bk93bmVyKGEudGFza0luYm94VG9rZW4pCgkJfSwgeS5zaWduYWwpKSkpLCBhd2FpdCBmbHVzaFBlbmRpbmdUcmFmZmljKCkpLCBlLmtpbmQgPT09IGB0YXNrLWlucHV0LXJlcXVlc3RgICYmIChtID0gZSksIGUua2luZCA9PT0gYHRhc2stdXBkYXRlYCkgewoJCQlhd2FpdCBoYW5kbGVVcGRhdGUoZSk7CgkJCXJldHVybjsKCQl9CgkJbGV0IHI7CgkJaWYgKGUua2luZCA9PT0gYGlucHV0LXJlc3BvbnNlYCkgciA9IGQuc3RhdHVzID09PSBgaW5wdXRfcmVxdWlyZWRgID8gYXdhaXQgcmVzb2x2ZUFuc3dlcmVkQ29tbWFuZChkLCBlLCB2LmdldChlLmNoaWxkQ29udGludWF0aW9uVG9rZW4pKSA6IHZvaWQgMDsKCQllbHNlIGlmIChlLmtpbmQgPT09IGB0YXNrLWlucHV0LXJlcXVlc3RgKSByID0gewoJCQlpbnB1dFJlcXVlc3RzOiBlLnJlcXVlc3RzID8/IFtlLnJlcXVlc3RdLAoJCQlraW5kOiBgcmVxdWlyZS1pbnB1dGAKCQl9OwoJCWVsc2UgaWYgKGUua2luZCA9PT0gYHRhc2stY29tbWFuZGApIHIgPSBlLmNvbW1hbmQ7CgkJZWxzZSByZXR1cm47CgkJaWYgKHIgPT09IHZvaWQgMCkgcmV0dXJuOwoJCWlmICh0ICYmIGlzVGVybWluYWxUYXNrU3RhdHVzKGQuc3RhdHVzKSkgewoJCQlhd2FpdCBmbHVzaFVwZGF0ZXMoITApLCBhd2FpdCB3YWtlVGFza1BhcmVudFN0ZXAoewoJCQkJdG9rZW46IGEucGFyZW50Q29udGludWF0aW9uVG9rZW4sCgkJCQl2aWV3OiBkCgkJCX0pOwoJCQlyZXR1cm47CgkJfQoJCWxldCBvID0gZCwgcyA9IGFwcGx5VGFza1RyYW5zaXRpb24oZCwgcik7CgkJcy5hY3Rpb24gPT09IGBhY2NlcHRlZGAgJiYgKGQgPSBzLnZpZXcsIGF3YWl0IGFwcGVuZFRhc2tWaWV3U3RlcCh7CgkJCWFjdGl2aXR5T2JzZXJ2ZXI6IGEuYWN0aXZpdHlPYnNlcnZlciwKCQkJdmlldzogZAoJCX0pLCByLmtpbmQgPT09IGBjYW5jZWxgICYmICh5LmFib3J0KEVycm9yKGBUYXNrICR7ZC50YXNrSWR9IHdhcyBjYW5jZWxsZWQuYCkpLCBiID09PSB2b2lkIDAgJiYgKHggPSAhMCkpLCBpc1Rlcm1pbmFsVGFza1N0YXR1cyhkLnN0YXR1cykgfHwgYXdhaXQgZmx1c2hVcGRhdGVzKCksIG0gIT09IHZvaWQgMCAmJiBmICYmIGQuc3RhdHVzID09PSBgaW5wdXRfcmVxdWlyZWRgID8gKGF3YWl0IHdha2VXb3JrZmxvd1Rhc2tJbnB1dFJlcXVlc3RQYXJlbnRTdGVwKHsKCQkJcmVxdWVzdDogbSwKCQkJdGFza0lkOiBkLnRhc2tJZCwKCQkJdG9rZW46IGEucGFyZW50Q29udGludWF0aW9uVG9rZW4KCQl9KSwgbSA9IHZvaWQgMCkgOiAhcCAmJiBmICYmIChyLmtpbmQgIT09IGBjYW5jZWxgIHx8IHgpICYmICghaXNUZXJtaW5hbFRhc2tTdGF0dXMoby5zdGF0dXMpICYmIGlzVGVybWluYWxUYXNrU3RhdHVzKGQuc3RhdHVzKSB8fCAhaXNSZWFkeVRhc2tTdGF0dXMoby5zdGF0dXMpICYmIGlzUmVhZHlUYXNrU3RhdHVzKGQuc3RhdHVzKSAmJiBtID09PSB2b2lkIDApICYmIGF3YWl0IHdha2VUYXNrUGFyZW50U3RlcCh7CgkJCXRva2VuOiBhLnBhcmVudENvbnRpbnVhdGlvblRva2VuLAoJCQl2aWV3OiBkCgkJfSksIGQuc3RhdHVzICE9PSBgaW5wdXRfcmVxdWlyZWRgICYmIChtID0gdm9pZCAwKSk7Cgl9Cglhc3luYyBmdW5jdGlvbiBmbHVzaFVwZGF0ZXMoZSA9ICExKSB7CgkJaWYgKCEoIWYgfHwgaXNUZXJtaW5hbFRhc2tTdGF0dXMoZC5zdGF0dXMpICYmICFlKSkgewoJCQlmb3IgKGxldCBlIG9mIGgpIGF3YWl0IHdha2VUYXNrVXBkYXRlUGFyZW50U3RlcCh7CgkJCQl0b2tlbjogYS5wYXJlbnRDb250aW51YXRpb25Ub2tlbiwKCQkJCXVwZGF0ZTogZSwKCQkJCXZpZXc6IGQKCQkJfSk7CgkJCWggPSBbXTsKCQl9Cgl9Cglhc3luYyBmdW5jdGlvbiBoYW5kbGVPd25lclJlcXVlc3QoZSkgewoJCWlmICghKHAgfHwgaXNUZXJtaW5hbFRhc2tTdGF0dXMoZC5zdGF0dXMpKSkgewoJCQlpZiAoIWYpIHsKCQkJCV8ub3duZXJSZXF1ZXN0cy5wdXNoKGUpOwoJCQkJcmV0dXJuOwoJCQl9CgkJCWF3YWl0IHdha2VUYXNrT3duZXJSZXF1ZXN0UGFyZW50KGUpOwoJCX0KCX0KCWFzeW5jIGZ1bmN0aW9uIGZsdXNoUGVuZGluZ1RyYWZmaWMoKSB7CgkJaWYgKCFwKSBmb3IgKGxldCBlIG9mIF8ub3duZXJSZXF1ZXN0cykgYXdhaXQgd2FrZVRhc2tPd25lclJlcXVlc3RQYXJlbnQoZSk7CgkJXy5vd25lclJlcXVlc3RzLmxlbmd0aCA9IDA7Cgl9Cglhc3luYyBmdW5jdGlvbiB3YWtlVGFza093bmVyUmVxdWVzdFBhcmVudChlKSB7CgkJaWYgKGUucmVxdWVzdC5raW5kID09PSBgYXV0aG9yaXphdGlvbi1yZXF1ZXN0YCkgewoJCQlhd2FpdCB3YWtlVGFza0F1dGhvcml6YXRpb25QYXJlbnRTdGVwKHsKCQkJCXJlcXVlc3Q6IGUucmVxdWVzdCwKCQkJCXRhc2tJZDogZC50YXNrSWQsCgkJCQl0b2tlbjogYS5wYXJlbnRDb250aW51YXRpb25Ub2tlbgoJCQl9KTsKCQkJcmV0dXJuOwoJCX0KCQlhd2FpdCB3YWtlVGFza0FnZW50UmVxdWVzdFBhcmVudFN0ZXAoewoJCQlyZXF1ZXN0OiBlLAoJCQl0YXNrSWQ6IGQudGFza0lkLAoJCQl0b2tlbjogYS5wYXJlbnRDb250aW51YXRpb25Ub2tlbgoJCX0pOwoJfQp9CmFzeW5jIGZ1bmN0aW9uKiBhd2FpdEJvZHlSZXN1bHQoZSkgewoJeWllbGQgYXdhaXQgZTsKfQphc3luYyBmdW5jdGlvbiByZXNvbHZlQW5zd2VyZWRDb21tYW5kKGUsIHQsIG4pIHsKCWlmICh0LnRhc2tJZCAhPT0gZS50YXNrSWQpIHJldHVybjsKCWxldCByID0gbmV3IFNldChlLmlucHV0UmVxdWVzdHMuZmxhdE1hcCgoZSkgPT4gewoJCWxldCB0ID0gcmVhZFRhc2tJbnB1dFJlcXVlc3RJZChlKTsKCQlyZXR1cm4gdCA9PT0gdm9pZCAwID8gW10gOiBbdF07Cgl9KSksIGkgPSB0LmlucHV0UmVzcG9uc2VzLm1hcCgoZSkgPT4gZS5yZXF1ZXN0SWQpLmZpbHRlcigoZSkgPT4gci5oYXMoZSkpOwoJaWYgKGkubGVuZ3RoICE9PSAwKSByZXR1cm4gYXdhaXQgZGVsaXZlclRhc2tJbnB1dFJlc3BvbnNlc1N0ZXAoewoJCWFuc3dlcjogdCwKCQlhbnN3ZXJIb29rOiBuLAoJCXJlcXVlc3RJZHM6IGkKCX0pID09PSBgZGVsaXZlcmVkYCA/IHsKCQlraW5kOiBgYW5zd2VyZWRgLAoJCXJlcXVlc3RJZHM6IGkKCX0gOiB2b2lkIDA7Cn0KdGFza1J1bldvcmtmbG93LndvcmtmbG93SWQgPSBgd29ya2Zsb3cvL2V2ZS8vdGFza1J1bldvcmtmbG93YDsKdGFza1J1bldvcmtmbG93LndvcmtmbG93SWQgPSAid29ya2Zsb3cvL2V2ZS8vdGFza1J1bldvcmtmbG93IjsKZ2xvYmFsVGhpcy5fX3ByaXZhdGVfd29ya2Zsb3dzLnNldCgid29ya2Zsb3cvL2V2ZS8vdGFza1J1bldvcmtmbG93IiwgdGFza1J1bldvcmtmbG93KTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdG9vbHMvc2xlZXAtd29ya2Zsb3cuanMKYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVNsZWVwVG9vbChlKSB7CglyZXR1cm4gYXdhaXQgc2xlZXAoTWF0aC5jZWlsKGUuc2Vjb25kcyAqIDFlMykpLCB7IHdhaXRlZFNlY29uZHM6IGUuc2Vjb25kcyB9Owp9CmV4ZWN1dGVTbGVlcFRvb2wud29ya2Zsb3dJZCA9IGB3b3JrZmxvdy8vZXZlQDAuNTEuMS8vZXhlY3V0ZVNsZWVwVG9vbGA7CmV4ZWN1dGVTbGVlcFRvb2wud29ya2Zsb3dJZCA9ICJ3b3JrZmxvdy8vZXZlQDAuNTEuMS8vZXhlY3V0ZVNsZWVwVG9vbCI7Cmdsb2JhbFRoaXMuX19wcml2YXRlX3dvcmtmbG93cy5zZXQoIndvcmtmbG93Ly9ldmVAMC41MS4xLy9leGVjdXRlU2xlZXBUb29sIiwgZXhlY3V0ZVNsZWVwVG9vbCk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3Rvb2xzL3dvcmtmbG93L3J1bi1jb250cm9sLmpzCmZ1bmN0aW9uIG9wZW5Xb3JrZmxvd1Rvb2xSdW5Db250cm9sSW5ib3godCkgewoJbGV0IG4gPSBjcmVhdGVIb29rKHsgdG9rZW46IHQgfSksIHIgPSBuW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpLCBpID0gbmV3IEFib3J0Q29udHJvbGxlcigpLCBhLCBvID0gY29uc3VtZUNhbmNlbChyLCAoZSkgPT4gewoJCWEgPSBlLCBpLmFib3J0KG5ldyBXb3JrZmxvd1Rvb2xSdW5DYW5jZWxsZWRFcnJvcihlKSk7Cgl9KTsKCXJldHVybiBvLmNhdGNoKCgpID0+IHt9KSwgewoJCWNhbmNlbGxlZDogbywKCQlob29rOiBuLAoJCXJlYXNvbjogKCkgPT4gYSwKCQlzaWduYWw6IGkuc2lnbmFsCgl9Owp9CmFzeW5jIGZ1bmN0aW9uIGNvbnN1bWVDYW5jZWwoZSwgbikgewoJZm9yICg7OykgewoJCWxldCByOwoJCXRyeSB7CgkJCXIgPSBhd2FpdCBlLm5leHQoKTsKCQl9IGNhdGNoIHsKCQkJcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKCgpID0+IHt9KTsKCQl9CgkJaWYgKHIuZG9uZSA9PT0gITApIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgoKSA9PiB7fSk7CgkJaWYgKGlzV29ya2Zsb3dUb29sUnVuQ29udHJvbE1lc3NhZ2Uoci52YWx1ZSkpIHRocm93IG4oci52YWx1ZS5yZWFzb24pLCBuZXcgV29ya2Zsb3dUb29sUnVuQ2FuY2VsbGVkRXJyb3Ioci52YWx1ZS5yZWFzb24pOwoJfQp9CnZhciBXb3JrZmxvd1Rvb2xSdW5DYW5jZWxsZWRFcnJvciA9IGNsYXNzIGV4dGVuZHMgRXJyb3IgewoJY29uc3RydWN0b3IoZSkgewoJCXN1cGVyKGUpLCB0aGlzLm5hbWUgPSBgV29ya2Zsb3dUb29sUnVuQ2FuY2VsbGVkRXJyb3JgOwoJfQp9OwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90b29scy93b3JrZmxvdy93b3JrZmxvdy5qcwphc3luYyBmdW5jdGlvbiB3b3Jr",
	"Zmxvd1Rvb2xSdW5Xb3JrZmxvdyhpKSB7CglsZXQgYSA9IG9wZW5Xb3JrZmxvd1Rvb2xSdW5Db250cm9sSW5ib3goaS5ob29rVG9rZW4pLCBvID0gITE7Cgl0cnkgewoJCXRyeSB7CgkJCWF3YWl0IGNsYWltSG9va093bmVyc2hpcChhLmhvb2spLCBvID0gITA7CgkJfSBjYXRjaCAoZSkgewoJCQlpZiAoaXNIb29rQ29uZmxpY3RFcnJvcihlKSkgcmV0dXJuOwoJCQl0aHJvdyBlOwoJCX0KCQlsZXQgbiA9IHsKCQkJLi4uaSwKCQkJZXhlY3V0aW9uOiBpLmV4ZWN1dGlvbiA/PyBgYmxvY2tpbmdgCgkJfSwgciA9IGNyZWF0ZVdvcmtmbG93Qm9keVJlZihuKSwgcyA9IGV4ZWN1dGVXb3JrZmxvd0JvZHkobiwgYS5zaWduYWwpLnRoZW4oKGUpID0+IHsKCQkJaWYgKGUuc3RhdHVzID09PSBgY29tcGxldGVkYCkgcmV0dXJuIGUub3V0cHV0OwoJCQl0aHJvdyBlLnN0YXR1cyA9PT0gYGZhaWxlZGAgPyBlLmVycm9yIDogYS5zaWduYWwucmVhc29uID8/IEVycm9yKGUucmVhc29uID8/IGBXb3JrZmxvdyB0b29sIHJ1biBjYW5jZWxsZWQuYCk7CgkJfSksIGMgPSBzLmNhdGNoKCgpID0+IHt9KSwgbDsKCQl0cnkgewoJCQlsID0gewoJCQkJb3V0cHV0OiBhd2FpdCBQcm9taXNlLnJhY2UoW3MsIGEuY2FuY2VsbGVkXSksCgkJCQlzdGF0dXM6IGBjb21wbGV0ZWRgCgkJCX07CgkJfSBjYXRjaCAodCkgewoJCQlhLnNpZ25hbC5hYm9ydGVkID8gKGF3YWl0IFByb21pc2UucmFjZShbYywgc2xlZXAoYDMwc2ApXSksIGwgPSB7CgkJCQlyZWFzb246IGEucmVhc29uKCksCgkJCQlzdGF0dXM6IGBjYW5jZWxsZWRgCgkJCX0pIDogbCA9IHsKCQkJCWVycm9yOiBub3JtYWxpemVTZXJpYWxpemFibGVFcnJvcih0KSwKCQkJCXN0YXR1czogYGZhaWxlZGAKCQkJfTsKCQl9CgkJbGV0IHUgPSB7CgkJCWZyb206IHIsCgkJCXJlc3VsdDogbAoJCX07CgkJYXdhaXQgcmVzdW1lSG9va1N0ZXAoaS5vd25lci5vdXRjb21lLCB1LCB7IGlmUHJlc2VudDogbC5zdGF0dXMgPT09IGBjYW5jZWxsZWRgIH0pOwoJfSBmaW5hbGx5IHsKCQlvICYmIGF3YWl0IGRpc3Bvc2VIb29rKGEuaG9vayk7Cgl9Cn0Kd29ya2Zsb3dUb29sUnVuV29ya2Zsb3cud29ya2Zsb3dJZCA9IGB3b3JrZmxvdy8vZXZlLy93b3JrZmxvd1Rvb2xSdW5Xb3JrZmxvd2A7CndvcmtmbG93VG9vbFJ1bldvcmtmbG93LndvcmtmbG93SWQgPSAid29ya2Zsb3cvL2V2ZS8vd29ya2Zsb3dUb29sUnVuV29ya2Zsb3ciOwpnbG9iYWxUaGlzLl9fcHJpdmF0ZV93b3JrZmxvd3Muc2V0KCJ3b3JrZmxvdy8vZXZlLy93b3JrZmxvd1Rvb2xSdW5Xb3JrZmxvdyIsIHdvcmtmbG93VG9vbFJ1bldvcmtmbG93KTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9oYXJuZXNzL2FjdGl2ZS10dXJuLWlkLmpzCmZ1bmN0aW9uIGFjdGl2ZVR1cm5JZChlKSB7CglyZXR1cm4gZS50dXJuSWQgPT09IGBgID8gYHR1cm5fJHtlLnNlcXVlbmNlfWAgOiBlLnR1cm5JZDsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9kdXJhYmxlLXNlc3Npb24tbWlncmF0aW9ucy9jaGFpbi5qcwpmdW5jdGlvbiBydW5NaWdyYXRpb25DaGFpbihlKSB7CglpZiAodHlwZW9mIGUudmFsdWUgIT0gYG9iamVjdGAgfHwgZS52YWx1ZSA9PT0gbnVsbCkgdGhyb3cgRXJyb3IoYCR7ZS5sYWJlbH06IHZhbHVlIGhhcyBubyBudW1lcmljICJ2ZXJzaW9uIiBmaWVsZC5gKTsKCWxldCB0ID0gZS52YWx1ZS52ZXJzaW9uLCBuOwoJaWYgKHR5cGVvZiB0ID09IGBudW1iZXJgKSBuID0gZS52YWx1ZTsKCWVsc2UgaWYgKCEoYHZlcnNpb25gIGluIGUudmFsdWUpICYmIGUuaW5pdGlhbFZlcnNpb24gIT09IHZvaWQgMCkgbiA9IHsKCQkuLi5lLnZhbHVlLAoJCXZlcnNpb246IGUuaW5pdGlhbFZlcnNpb24KCX07CgllbHNlIHRocm93IEVycm9yKGAke2UubGFiZWx9OiB2YWx1ZSBoYXMgbm8gbnVtZXJpYyAidmVyc2lvbiIgZmllbGQuYCk7CglsZXQgciA9IGUuaW5pdGlhbFZlcnNpb24gPz8gMTsKCWlmICghTnVtYmVyLmlzSW50ZWdlcihuLnZlcnNpb24pIHx8IG4udmVyc2lvbiA8IHIpIHRocm93IEVycm9yKGAke2UubGFiZWx9OiB2ZXJzaW9uICR7bi52ZXJzaW9ufSBpcyBub3QgYSBwb3NpdGl2ZSBpbnRlZ2VyLmApOwoJaWYgKG4udmVyc2lvbiA+IGUudGFyZ2V0VmVyc2lvbikgdGhyb3cgRXJyb3IoYCR7ZS5sYWJlbH06IGVuY291bnRlcmVkIHZlcnNpb24gJHtuLnZlcnNpb259LCB3aGljaCBpcyBuZXdlciB0aGFuIHRoZSBzdXBwb3J0ZWQgdmVyc2lvbiAke2UudGFyZ2V0VmVyc2lvbn0uIFRoaXMgdXN1YWxseSBpbmRpY2F0ZXMgdGhlIHdpcmUgd2FzIHdyaXR0ZW4gYnkgYSBuZXdlciBldmUgZGVwbG95bWVudCB0aGFuIHRoZSBvbmUgcmVhZGluZyBpdC5gKTsKCWZvciAoOyBuLnZlcnNpb24gPCBlLnRhcmdldFZlcnNpb247KSB7CgkJbGV0IHQgPSBlLm1pZ3JhdGlvbnMuZmluZCgoZSkgPT4gZS5mcm9tID09PSBuLnZlcnNpb24pOwoJCWlmICghdCkgdGhyb3cgRXJyb3IoYCR7ZS5sYWJlbH06IG5vIG1pZ3JhdGlvbiByZWdpc3RlcmVkIGZvciB2ZXJzaW9uICR7bi52ZXJzaW9ufSDihpIgJHtuLnZlcnNpb24gKyAxfS5gKTsKCQlpZiAodC50byAhPT0gdC5mcm9tICsgMSkgdGhyb3cgRXJyb3IoYCR7ZS5sYWJlbH06IG1pZ3JhdGlvbiAke3QuZnJvbX0g4oaSICR7dC50b30gbXVzdCBzdGVwIGV4YWN0bHkgb25lIHZlcnNpb24gYXQgYSB0aW1lLmApOwoJCWxldCByID0gdC5taWdyYXRlKG4pOwoJCWlmIChyLnZlcnNpb24gIT09IHQudG8pIHRocm93IEVycm9yKGAke2UubGFiZWx9OiBtaWdyYXRpb24gJHt0LmZyb219IOKGkiAke3QudG99IHByb2R1Y2VkIGEgdmFsdWUgd2l0aCB2ZXJzaW9uICR7ci52ZXJzaW9ufS5gKTsKCQluID0gcjsKCX0KCXJldHVybiBuOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL2R1cmFibGUtc2Vzc2lvbi1taWdyYXRpb25zL3R1cm4td29ya2Zsb3ctdjAtdG8tdjEuanMKY29uc3QgdHVybldvcmtmbG93SW5wdXRWMFRvVjEgPSB7Cglmcm9tOiAwLAoJbWlncmF0ZShlKSB7CgkJaWYgKCFpc1ByZVZlcnNpb25UdXJuV29ya2Zsb3dJbnB1dChlKSkgdGhyb3cgRXJyb3IoYHR1cm4gd29ya2Zsb3cgaW5wdXQ6IHZlcnNpb24gMCB2YWx1ZSBpcyBub3QgYSByZWNvZ25pemVkIHByZS12ZXJzaW9uIHNoYXBlLmApOwoJCXJldHVybiB7CgkJCWNhcGFiaWxpdGllczogZS5jYXBhYmlsaXRpZXMsCgkJCWNvbXBsZXRpb25Ub2tlbjogZS5jb21wbGV0aW9uVG9rZW4sCgkJCW1vZGU6IGUubW9kZSwKCQkJc3RlcElucHV0OiB7CgkJCQlpbnB1dDogZS5kZWxpdmVyeSwKCQkJCXBhcmVudFdyaXRhYmxlOiBlLnBhcmVudFdyaXRhYmxlLAoJCQkJc2VyaWFsaXplZENvbnRleHQ6IGUuc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IGUuc2Vzc2lvblN0YXRlCgkJCX0sCgkJCXZlcnNpb246IDEKCQl9OwoJfSwKCXRvOiAxCn07CmZ1bmN0aW9uIGlzUHJlVmVyc2lvblR1cm5Xb3JrZmxvd0lucHV0KGUpIHsKCXJldHVybiB0eXBlb2YgZSA9PSBgb2JqZWN0YCAmJiAhIWUgJiYgYGRlbGl2ZXJ5YCBpbiBlOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL2R1cmFibGUtc2Vzc2lvbi1taWdyYXRpb25zL3R1cm4td29ya2Zsb3cuanMKY29uc3QgdHVybldvcmtmbG93SW5wdXRNaWdyYXRpb25zID0gW3R1cm5Xb3JrZmxvd0lucHV0VjBUb1YxLCB7Cglmcm9tOiAxLAoJbWlncmF0ZShlKSB7CgkJcmV0dXJuIHsKCQkJLi4uZSwKCQkJdmVyc2lvbjogMgoJCX07Cgl9LAoJdG86IDIKfV07CmZ1bmN0aW9uIG1pZ3JhdGVUdXJuV29ya2Zsb3dJbnB1dCh0KSB7CglyZXR1cm4gcnVuTWlncmF0aW9uQ2hhaW4oewoJCWluaXRpYWxWZXJzaW9uOiAwLAoJCWxhYmVsOiBgdHVybiB3b3JrZmxvdyBpbnB1dGAsCgkJbWlncmF0aW9uczogdHVybldvcmtmbG93SW5wdXRNaWdyYXRpb25zLAoJCXRhcmdldFZlcnNpb246IDIsCgkJdmFsdWU6IHQKCX0pOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL2NhbmNlbC1pbmRleGVkLXNlc3Npb24tdGFza3Mtc3RlcC5qcwp2YXIgY2FuY2VsQWxsSW5kZXhlZFNlc3Npb25UYXNrc1N0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9jYW5jZWxBbGxJbmRleGVkU2Vzc2lvblRhc2tzU3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi93b3JrZmxvdy1zdGVwcy5qcwp2YXIgdHVyblN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy90dXJuU3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2ludGVybmFsL2NsaWVudC1jb250ZXh0LmpzCmNvbnN0IGNsaWVudENvbnRleHRLZXkgPSBgX19ldmVDbGllbnRDb250ZXh0YDsKZnVuY3Rpb24gYXR0YWNoQ2xpZW50Q29udGV4dChlLCB0KSB7CglyZXR1cm4gdCAhPT0gdm9pZCAwICYmIChlW2NsaWVudENvbnRleHRLZXldID0gdCksIGU7Cn0KZnVuY3Rpb24gcmVhZENsaWVudENvbnRleHQoZSkgewoJcmV0dXJuIGU/LltjbGllbnRDb250ZXh0S2V5XTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2hhcm5lc3MvbWVzc2FnZXMuanMKZnVuY3Rpb24gY29hbGVzY2VUdXJuSW5wdXRzKG4sIHIpIHsKCWxldCBpID0gY29hbGVzY2VJbnB1dFJlc3BvbnNlcyh7CgkJYTogbi5pbnB1dFJlc3BvbnNlcywKCQliOiByLmlucHV0UmVzcG9uc2VzCgl9KSwgYSA9IGNvYWxlc2NlTWVzc2FnZSh7CgkJYTogbi5tZXNzYWdlLAoJCWI6IHIubWVzc2FnZQoJfSksIG8gPSBjb2FsZXNjZUNvbnRleHQoewoJCWE6IG4uY29udGV4dCwKCQliOiByLmNvbnRleHQKCX0pLCBzID0gY29hbGVzY2VDb250ZXh0KHsKCQlhOiByZWFkQ2xpZW50Q29udGV4dChuKSwKCQliOiByZWFkQ2xpZW50Q29udGV4dChyKQoJfSksIGMgPSByLm91dHB1dFNjaGVtYSA/PyBuLm91dHB1dFNjaGVtYSwgbCA9IHt9OwoJcmV0dXJuIGkgIT09IHZvaWQgMCAmJiAobC5pbnB1dFJlc3BvbnNlcyA9IGkpLCBhICE9PSB2b2lkIDAgJiYgKGwubWVzc2FnZSA9IGEpLCBvICE9PSB2b2lkIDAgJiYgKGwuY29udGV4dCA9IG8pLCBjICE9PSB2b2lkIDAgJiYgKGwub3V0cHV0U2NoZW1hID0gYyksIGF0dGFjaENsaWVudENvbnRleHQobCwgcyk7Cn0KZnVuY3Rpb24gbm9ybWFsaXplVXNlckNvbnRlbnQoZSkgewoJaWYgKGUgPT09IHZvaWQgMCkgcmV0dXJuOwoJaWYgKHR5cGVvZiBlID09IGBzdHJpbmdgKSByZXR1cm4gZS50cmltKCkubGVuZ3RoID4gMCA/IGUgOiB2b2lkIDA7CglsZXQgdCA9IGUuZmlsdGVyKChlKSA9PiBlLnR5cGUgIT09IGB0ZXh0YCB8fCBlLnRleHQudHJpbSgpLmxlbmd0aCA+IDApOwoJaWYgKHQubGVuZ3RoICE9PSAwKSByZXR1cm4gdC5sZW5ndGggPT09IGUubGVuZ3RoID8gZSA6IHQ7Cn0KZnVuY3Rpb24gY29hbGVzY2VJbnB1dFJlc3BvbnNlcyhlKSB7CglsZXQgdCA9IGUuYSA/PyBbXSwgbiA9IGUuYiA/PyBbXTsKCWlmICghKHQubGVuZ3RoID09PSAwICYmIG4ubGVuZ3RoID09PSAwKSkgcmV0dXJuIFsuLi50LCAuLi5uXTsKfQpmdW5jdGlvbiBjb2FsZXNjZUNvbnRleHQoZSkgewoJbGV0IHQgPSBlLmEgPz8gW10sIG4gPSBlLmIgPz8gW107CglpZiAoISh0Lmxlbmd0aCA9PT0gMCAmJiBuLmxlbmd0aCA9PT0gMCkpIHJldHVybiBbLi4udCwgLi4ubl07Cn0KZnVuY3Rpb24gY29hbGVzY2VNZXNzYWdlKGUpIHsKCWxldCB0ID0gbm9ybWFsaXplVXNlckNvbnRlbnQoZS5hKSwgbiA9IG5vcm1hbGl6ZVVzZXJDb250ZW50KGUuYik7CglyZXR1cm4gdCA9PT0gdm9pZCAwID8gbiA6IG4gPT09IHZvaWQgMCA/IHQgOiBhcHBlbmRVc2VyQ29udGVudCh7CgkJYXBwZW5kZWQ6IG4sCgkJZXhpc3Rpbmc6IHQKCX0pOwp9CmZ1bmN0aW9uIGFwcGVuZFVzZXJDb250ZW50KGUpIHsKCXJldHVybiB0eXBlb2YgZS5leGlzdGluZyA9PSBgc3RyaW5nYCAmJiB0eXBlb2YgZS5hcHBlbmRlZCA9PSBgc3RyaW5nYCA/IGAke2UuZXhpc3Rpbmd9XG5cbiR7ZS5hcHBlbmRlZH1gIDogWy4uLnRvVXNlckNvbnRlbnRBcnJheShlLmV4aXN0aW5nKSwgLi4udG9Vc2VyQ29udGVudEFycmF5KGUuYXBwZW5kZWQpXTsKfQpmdW5jdGlvbiB0b1VzZXJDb250ZW50QXJyYXkoZSkgewoJcmV0dXJuIHR5cGVvZiBlID09IGBzdHJpbmdgID8gZS5sZW5ndGggPiAwID8gW3sKCQl0eXBlOiBgdGV4dGAsCgkJdGV4dDogZQoJfV0gOiBbXSA6IEFycmF5LmlzQXJyYXkoZSkgPyBbLi4uZV0gOiBbXTsKfQpmdW5jdGlvbiBjb2FsZXNjZURlbGl2ZXJpZXMoZSkgewoJbGV0IFt0LCAuLi5uXSA9IGU7CglpZiAodCA9PT0gdm9pZCAwKSB0aHJvdyBFcnJvcihgQ2Fubm90IGNvYWxlc2NlIGFuIGVtcHR5IGRlbGl2ZXJ5IGJhdGNoLmApOwoJbGV0IHIgPSB0LmF1dGgsIGkgPSB0LmNhbGxlciwgYSA9IFsuLi50LnBheWxvYWRzXSwgbyA9IFsuLi50LmRlbGl2ZXJ5TWV0YWRhdGEgPz8gW11dOwoJZm9yIChsZXQgZSBvZiBuKSB7CgkJbGV0IHQgPSBhLmxlbmd0aDsKCQlpZiAoZS5hdXRoICE9PSB2b2lkIDAgJiYgKHIgPSBlLmF1dGgpLCBlLmNhbGxlciAhPT0gdm9pZCAwKSB7CgkJCWlmIChpICE9PSB2b2lkIDApIHRocm93IEVycm9yKGBDYW5ub3QgY29hbGVzY2UgZGVsaXZlcmllcyBmcm9tIGRpZmZlcmVudCB0dXJucy5gKTsKCQkJaSA9IGUuY2FsbGVyOwoJCX0KCQlhLnB1c2goLi4uZS5wYXlsb2FkcyksIG8ucHVzaCguLi4oZS5kZWxpdmVyeU1ldGFkYXRhID8/IFtdKS5tYXAoKGUpID0+ICh7CgkJCS4uLmUsCgkJCXBheWxvYWRJbmRleDogZS5wYXlsb2FkSW5kZXggKyB0CgkJfSkpKTsKCX0KCXJldHVybiB7CgkJLi4udCwKCQlhdXRoOiByLAoJCWNhbGxlcjogaSwKCQlkZWxpdmVyeU1ldGFkYXRhOiBvLmxlbmd0aCA9PT0gMCA/IHZvaWQgMCA6IG8sCgkJcGF5bG9hZHM6IGEKCX07Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vZGVsaXZlci1wYXlsb2Fkcy5qcwpjb25zdCBDT0FMRVNDRURfREVMSVZFUl9GSUVMRFMgPSBbCglgY29udGV4dGAsCglgaW5wdXRSZXNwb25zZXNgLAoJYG1lc3NhZ2VgLAoJYG91dHB1dFNjaGVtYWAsCglgdGFza2AKXTsKZnVuY3Rpb24gY29hbGVzY2VEZWxpdmVyUGF5bG9hZHMobikgewoJaWYgKG4ubGVuZ3RoID09PSAwKSByZXR1cm4ge307CglpZiAobi5sZW5ndGggPT09IDEpIHJldHVybiBuWzBdID8/IHt9OwoJbGV0IHIgPSB7fSwgaSA9IFtdLCBhID0gW10sIG8gPSBbXSwgcyA9IFtdLCBjID0ge307Cglmb3IgKGxldCB0IG9mIG4pIHsKCQlpLnB1c2goLi4udC50YXNrPy5pbnB1dFJlcXVlc3RzID8/IFtdKSwgYS5wdXNoKC4uLnQudGFzaz8uYWdlbnRSZXF1ZXN0cyA/PyBbXSksIG8ucHVzaCguLi50LnRhc2s/LmF1dGhvcml6YXRpb25FdmVudHMgPz8gW10pLCBzLnB1c2goLi4udC50YXNrPy52aWV3cyA/PyBbXSk7CgkJZm9yIChsZXQgW2UsIG5dIG9mIE9iamVjdC5lbnRyaWVzKHQpKSBuICE9PSB2b2lkIDAgJiYgKHJbZV0gPSBuKTsKCQljID0gY29hbGVzY2VUdXJuSW5wdXRzKGMsIHQpOwoJfQoJZm9yIChsZXQgZSBvZiBDT0FMRVNDRURfREVMSVZFUl9GSUVMRFMpIGRlbGV0ZSByW2VdOwoJbGV0IGwgPSB7fTsKCXJldHVybiBpLmxlbmd0aCA+IDAgJiYgKGwuaW5wdXRSZXF1ZXN0cyA9IGkpLCBhLmxlbmd0aCA+IDAgJiYgKGwuYWdlbnRSZXF1ZXN0cyA9IGEpLCBvLmxlbmd0aCA+IDAgJiYgKGwuYXV0aG9yaXphdGlvbkV2ZW50cyA9IG8pLCBzLmxlbmd0aCA+IDAgJiYgKGwudmlld3MgPSBzKSwgT2JqZWN0LmtleXMobCkubGVuZ3RoID4gMCAmJiAoci50YXNrID0gbCksIE9iamVjdC5hc3NpZ24ociwgYyk7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vcHJveGllZC1kZWxpdmVyLXN0ZXAuanMKdmFyIHJvdXRlUHJveGllZERlbGl2ZXJTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vcm91dGVQcm94aWVkRGVsaXZlclN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9zdWJhZ2VudHMvZXZlbnQtcHJveHktc3RlcC5qcwp2YXIgcnVuUHJveHlTdWJhZ2VudEV2ZW50U3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL3J1blByb3h5U3ViYWdlbnRFdmVudFN0ZXAiKTsKdmFyIGVtaXRSZWNvcmRlZFRhc2tJbnB1dFJlcXVlc3RTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vZW1pdFJlY29yZGVkVGFza0lucHV0UmVxdWVzdFN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdGFza3MvcGFyZW50L2hpdGwtcHJveHktc3RlcHMuanMKdmFyIHJlY29yZFRhc2tJbnB1dFJlcXVlc3RTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vcmVjb3JkVGFza0lucHV0UmVxdWVzdFN0ZXAiKTsKdmFyIHJlY29yZFRlcm1pbmFsVGFza1ZpZXdzU3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL3JlY29yZFRlcm1pbmFsVGFza1ZpZXdzU3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90b29scy9zdWJhZ2VudC9hY2NlcHQtZXZlbnQtc3RlcC5qcwp2YXIgYWNjZXB0VGFza0F1dGhvcml6YXRpb25FdmVudFN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9hY2NlcHRUYXNrQXV0aG9yaXphdGlvbkV2ZW50U3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90b29scy9zdWJhZ2VudC9lbWl0LWNhbGxlZC1zdGVwLmpzCnZhciBlbWl0VGFza1N1YmFnZW50Q2FsbGVkU3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL2VtaXRUYXNrU3ViYWdlbnRDYWxsZWRTdGVwIik7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3Rvb2xzL3N1YmFnZW50L2ludm9rZS1zdGVwLmpzCnZhciBkaXNwYXRjaFRhc2tBZ2VudEludm9jYXRpb25TdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vZGlzcGF0Y2hUYXNrQWdlbnRJbnZvY2F0aW9uU3RlcCIpOwp2YXIgc2V0dGxlVGFza0FnZW50SW52b2NhdGlvblN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9zZXR0bGVUYXNrQWdlbnRJbnZvY2F0aW9uU3RlcCIpOwp2YXIgcmVsZWFzZUFnZW50SW52b2NhdGlvbk93bmVyU3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL3JlbGVhc2VBZ2VudEludm9jYXRpb25Pd25lclN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdG9vbHMvc3ViYWdlbnQvdGFzay1hZ2VudC1yZXF1ZXN0cy5qcwphc3luYyBmdW5jdGlvbiBhcHBseVRhc2tBZ2VudFJlcXVlc3QobiwgcikgewoJbGV0IHsgcmVxdWVzdDogaSB9ID0gbjsKCXN3aXRjaCAoaS5raW5kKSB7CgkJY2FzZSBgYWdlbnQtc2V0dGxlZGA6IHsKCQkJbGV0IGUgPSBhd2FpdCBzZXR0bGVUYXNrQWdlbnRJbnZvY2F0aW9uU3RlcCh7CgkJCQlhY2N1bXVsYXRlVXNhZ2U6IG4uYWNjdW11bGF0ZVVzYWdlLAoJCQkJb3duZXJJZDogbi5vd25lcklkLAoJCQkJcmVzdWx0OiBpLnJlc3VsdCwKCQkJCXNlc3Npb25TdGF0ZTogci5zZXNzaW9uU3RhdGUsCgkJCQl0YXNrSWQ6IG4udGFza0lkCgkJCX0pOwoJCQlyZXR1cm4gewoJCQkJc2VyaWFsaXplZENvbnRleHQ6IHIuc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IGUuc2Vzc2lvblN0YXRlCgkJCX07CgkJfQoJCWNhc2UgYGFnZW50LWludm9rZWA6IHsKCQkJbGV0IHQgPSBhd2FpdCBkaXNwYXRjaFRhc2tBZ2VudEludm9jYXRpb25TdGVwKHsKCQkJCW93bmVySWQ6IG4ub3duZXJJZCwKCQkJCXJlcGx5VG86IG4ucmVwbHlUbywKCQkJCXJlcXVlc3Q6IGksCgkJCQlzZXJpYWxpemVkQ29udGV4dDogci5zZXJpYWxpemVkQ29udGV4dCwKCQkJCXNlc3Npb25TdGF0ZTogci5zZXNzaW9uU3RhdGUsCgkJCQl0YXNrSWQ6IG4udGFza0lkCgkJCX0pOwoJCQlzd2l0Y2ggKHQua2luZCkgewoJCQkJY2FzZSBgZGlzcGF0Y2hlZGA6IHJldHVybiB7CgkJCQkJc2VyaWFsaXplZENvbnRleHQ6IChhd2FpdCBlbWl0VGFza1N1YmFnZW50Q2FsbGVkU3RlcCh7CgkJCQkJCWV2ZW50OiB0LmV2ZW50LAoJCQkJCQlwYXJlbnRXcml0YWJsZTogci5wYXJlbnRXcml0YWJsZSwKCQkJCQkJc2VyaWFsaXplZENvbnRleHQ6IHIuc2VyaWFsaXplZENvbnRleHQKCQkJCQl9KSkuc2VyaWFsaXplZENvbnRleHQsCgkJCQkJc2Vzc2lvblN0YXRlOiB0LnNlc3Npb25TdGF0ZQoJCQkJfTsKCQkJCWNhc2UgYGZhaWxlZGA6IHJldHVybiBhd2FpdCByZXN1bWVIb29rU3RlcChuLnJlcGx5VG8sIHsKCQkJCQlraW5kOiBgcnVudGltZS1hY3Rpb24tcmVzdWx0YCwKCQkJCQlyZXN1bHRzOiBbdC5yZXN1bHRdCgkJCQl9KSwgewoJCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiByLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJCXNlc3Npb25TdGF0ZTogdC5zZXNzaW9uU3RhdGUKCQkJCX07CgkJCQljYXNlIGBub3QtYWRtaXR0ZWRgOiByZXR1cm4gewoJCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiByLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJCXNlc3Npb25TdGF0ZTogdC5zZXNzaW9uU3RhdGUKCQkJCX07CgkJCX0KCQl9Cgl9Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vcm91dGUtY2hpbGQtZGVsaXZlcnkuanMKYXN5bmMgZnVuY3Rpb24gcm91dGVEZWxpdmVyVG9DaGlsZHJlbihpKSB7CglsZXQgYSA9IGNvYWxlc2NlRGVsaXZlclBheWxvYWRzKGkuZGVsaXZlcnkucGF5bG9hZHMpLCBvID0gaS5zZXJpYWxpemVkQ29udGV4dCwgcyA9IGkuc2Vzc2lvblN0YXRlOwoJZm9yIChsZXQgZSBvZiBhLnRhc2s/LmlucHV0UmVxdWVzdHMgPz8gW10pIHsKCQlsZXQgdCA9IGF3YWl0IHJlY29yZFRhc2tJbnB1dFJlcXVlc3RTdGVwKHsKCQkJcmVxdWVzdDogZSwKCQkJc2Vzc2lvblN0YXRlOiBzCgkJfSk7CgkJaWYgKHMgPSB0LnNlc3Npb25TdGF0ZSwgIXQuYWNjZXB0ZWQpIGNvbnRpbnVlOwoJCWxldCByID0gYXdhaXQgZW1pdFJlY29yZGVkVGFza0lucHV0UmVxdWVzdFN0ZXAoewoJCQlwYXJlbnRXcml0YWJsZTogaS5wYXJlbnRXcml0YWJsZSwKCQkJcmVxdWVzdDogdC5yZXF1ZXN0LAoJCQlzZXJpYWxpemVkQ29udGV4dDogbywKCQkJc2Vzc2lvblN0YXRlOiBzCgkJfSk7CgkJbyA9IHIuc2VyaWFsaXplZENvbnRleHQsIHMgPSByLnNlc3Npb25TdGF0ZTsKCX0KCWZvciAobGV0IGUgb2YgYS50YXNrPy5hZ2VudFJlcXVlc3RzID8/IFtdKSB7CgkJbGV0IHQgPSBhd2FpdCBhcHBseVRhc2tBZ2VudFJlcXVlc3QoewoJCQkuLi5lLAoJCQlvd25lcklkOiBlLnRhc2tJZAoJCX0sIHsKCQkJcGFyZW50V3JpdGFibGU6IGkucGFyZW50V3JpdGFibGUsCgkJCXNlcmlhbGl6ZWRDb250ZXh0OiBvLAoJCQlzZXNzaW9uU3RhdGU6IHMKCQl9KTsKCQlvID0gdC5zZXJpYWxpemVkQ29udGV4dCwgcyA9IHQuc2Vzc2lvblN0YXRlOwoJfQoJZm9yIChsZXQgZSBvZiBhLnRhc2s/LmF1dGhvcml6YXRpb25FdmVudHMgPz8gW10pIHsKCQlpZiAoIWF3YWl0IGFjY2VwdFRhc2tBdXRob3JpemF0aW9uRXZlbnRTdGVwKHsKCQkJZGVsaXZlcnk6IGUsCgkJCXNlc3Npb25TdGF0ZTogcwoJCX0pKSBjb250aW51ZTsKCQlsZXQgdCA9IGF3YWl0IHJ1blByb3h5U3ViYWdlbnRFdmVudFN0ZXAoewoJCQlob29rUGF5bG9hZDogZS5ob29rUGF5bG9hZCwKCQkJcGFyZW50V3JpdGFibGU6IGkucGFyZW50V3JpdGFibGUsCgkJCXNlcmlhbGl6ZWRDb250ZXh0OiBvLAoJCQlzZXNzaW9uU3RhdGU6IHMKCQl9KTsKCQlvID0gdC5zZXJpYWxpemVkQ29udGV4dCwgcyA9IHQuc2Vzc2lvblN0YXRlOwoJfQoJKGEudGFzaz8udmlld3M/Lmxlbmd0aCA/PyAwKSA+IDAgJiYgKHMgPSBhd2FpdCByZWNvcmRUZXJtaW5hbFRh",
	"c2tWaWV3c1N0ZXAoewoJCXNlc3Npb25TdGF0ZTogcywKCQl2aWV3czogYS50YXNrPy52aWV3cyA/PyBbXQoJfSkpOwoJbGV0IGMgPSBbXSwgbCA9IFtdOwoJZm9yIChsZXQgW2UsIHRdIG9mIGkuZGVsaXZlcnkucGF5bG9hZHMuZW50cmllcygpKSB7CgkJbGV0IG4gPSB7IC4uLnQgfTsKCQlpZiAoZGVsZXRlIG4udGFzaywgT2JqZWN0LmtleXMobikubGVuZ3RoID09PSAwKSBjb250aW51ZTsKCQlsZXQgciA9IGMubGVuZ3RoOwoJCWMucHVzaChuKTsKCQlmb3IgKGxldCB0IG9mIGkuZGVsaXZlcnkuZGVsaXZlcnlNZXRhZGF0YSA/PyBbXSkgdC5wYXlsb2FkSW5kZXggPT09IGUgJiYgbC5wdXNoKHsKCQkJLi4udCwKCQkJcGF5bG9hZEluZGV4OiByCgkJfSk7Cgl9CglsZXQgdSA9IGMubGVuZ3RoID09PSAwID8gdm9pZCAwIDogewoJCS4uLmkuZGVsaXZlcnksCgkJZGVsaXZlcnlNZXRhZGF0YTogbC5sZW5ndGggPT09IDAgPyB2b2lkIDAgOiBsLAoJCXBheWxvYWRzOiBjCgl9OwoJcmV0dXJuIHUgPT09IHZvaWQgMCA/IHsKCQlraW5kOiBgY29udGludWVgLAoJCXJlbWFpbmRlcjogdm9pZCAwLAoJCXNlcmlhbGl6ZWRDb250ZXh0OiBvLAoJCXNlc3Npb25TdGF0ZTogcwoJfSA6IHMuaGFzUHJveHlJbnB1dFJlcXVlc3RzID8gYXdhaXQgcm91dGVQcm94aWVkRGVsaXZlclN0ZXAoewoJCWRlbGl2ZXJ5OiB1LAoJCXBhcmVudFdyaXRhYmxlOiBpLnBhcmVudFdyaXRhYmxlLAoJCXNlcmlhbGl6ZWRDb250ZXh0OiBvLAoJCXNlc3Npb25TdGF0ZTogcwoJfSkgOiB7CgkJa2luZDogYGNvbnRpbnVlYCwKCQlyZW1haW5kZXI6IHUsCgkJc2VyaWFsaXplZENvbnRleHQ6IG8sCgkJc2Vzc2lvblN0YXRlOiBzCgl9Owp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvc2hhcmVkL3B1YmxpYy1yb3V0ZS1wcmVmaXguanMKY29uc3QgRVZFX1BVQkxJQ19ST1VURV9QUkVGSVhfRU5WID0gYEVWRV9QVUJMSUNfUk9VVEVfUFJFRklYYDsKZnVuY3Rpb24gbm9ybWFsaXplUHVibGljUm91dGVQcmVmaXgoZSkgewoJbGV0IHQgPSBlPy50cmltKCk7CglpZiAodCA9PT0gdm9pZCAwIHx8IHQubGVuZ3RoID09PSAwKSByZXR1cm47CglsZXQgbiA9ICh0LnN0YXJ0c1dpdGgoYC9gKSA/IHQgOiBgLyR7dH1gKS5yZXBsYWNlKC9cLyskLywgYGApOwoJcmV0dXJuIG4ubGVuZ3RoID09PSAwID8gdm9pZCAwIDogbjsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi93b3JrZmxvdy1jYWxsYmFjay11cmwuanMKZnVuY3Rpb24gcmVzb2x2ZVZlcmNlbFByb2R1Y3Rpb25DYWxsYmFja0Jhc2VVcmwoKSB7CglyZXR1cm4gcHJvY2Vzcy5lbnYuVkVSQ0VMX0VOViA9PT0gYHByb2R1Y3Rpb25gICYmIHByb2Nlc3MuZW52LlZFUkNFTF9QUk9KRUNUX1BST0RVQ1RJT05fVVJMID8gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfUFJPSkVDVF9QUk9EVUNUSU9OX1VSTH1gIDogbnVsbDsKfQpmdW5jdGlvbiByZXNvbHZlV29ya2Zsb3dDYWxsYmFja0Jhc2VVcmwobikgewoJbGV0IHIgPSBwcm9jZXNzLmVudi5XT1JLRkxPV19MT0NBTF9CQVNFX1VSTD8udHJpbSgpIHx8IHZvaWQgMCwgaSA9IChyZXNvbHZlVmVyY2VsUHJvZHVjdGlvbkNhbGxiYWNrQmFzZVVybCgpID8/IHIgPz8gbikucmVwbGFjZSgvXC8kLywgYGApLCBhID0gbm9ybWFsaXplUHVibGljUm91dGVQcmVmaXgocHJvY2Vzcy5lbnZbRVZFX1BVQkxJQ19ST1VURV9QUkVGSVhfRU5WXSk7CglyZXR1cm4gYSA9PT0gdm9pZCAwID8gaSA6IGAke2l9JHthfWA7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdGFza3MvcGFyZW50L2RlbGVnYXRlLmpzCnZhciBhY2tub3dsZWRnZURlbGVnYXRlZFRhc2tzU3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL2Fja25vd2xlZGdlRGVsZWdhdGVkVGFza3NTdGVwIik7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3R1cm4tY29udHJvbC1wcm90b2NvbC5qcwp2YXIgc2VuZFR1cm5Db250cm9sU3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL3NlbmRUdXJuQ29udHJvbFN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9zdWJhZ2VudHMvaGFuZGxlcy9zdGF0ZS1rZXkuanMKY29uc3QgQUdFTlRfSEFORExFU19TVEFURV9LRVkgPSBgZXZlLmFnZW50LmhhbmRsZXNgOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL3N1YmFnZW50cy9oYW5kbGVzL3F1ZXJ5LmpzCmZ1bmN0aW9uIHJlYWRBZ2VudEhhbmRsZXModCkgewoJbGV0IG4gPSB0Py5bQUdFTlRfSEFORExFU19TVEFURV9LRVldOwoJaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuIFtdOwoJbGV0IHIgPSBuLmhhbmRsZXM7CglyZXR1cm4gQXJyYXkuaXNBcnJheShyKSA/IHIgOiBbXTsKfQpmdW5jdGlvbiBtZXJnZVRhc2tPd25lZEFnZW50SGFuZGxlc0ludG9UdXJuU3RhdGUodCkgewoJbGV0IG4gPSBuZXcgTWFwKHJlYWRBZ2VudEhhbmRsZXModC5iYXNlU3RhdGUpLm1hcCgoZSkgPT4gW2UuaWRlbnRpdHkuaWQsIGVdKSksIHIgPSBuZXcgTWFwKHJlYWRBZ2VudEhhbmRsZXModC5kcml2ZXJTdGF0ZSkubWFwKChlKSA9PiBbZS5pZGVudGl0eS5pZCwgZV0pKSwgaSA9IG5ldyBTZXQoWy4uLm4ua2V5cygpLCAuLi5yLmtleXMoKV0pOwoJZm9yIChsZXQgZSBvZiBpKSBoYW5kbGVzRXF1YWwobi5nZXQoZSksIHIuZ2V0KGUpKSAmJiBpLmRlbGV0ZShlKTsKCWlmIChpLnNpemUgPT09IDApIHJldHVybiB0LnR1cm5TdGF0ZTsKCWxldCBhID0gW107Cglmb3IgKGxldCBlIG9mIHJlYWRBZ2VudEhhbmRsZXModC50dXJuU3RhdGUpKSB7CgkJaWYgKCFpLmhhcyhlLmlkZW50aXR5LmlkKSkgewoJCQlhLnB1c2goZSk7CgkJCWNvbnRpbnVlOwoJCX0KCQlsZXQgdCA9IHIuZ2V0KGUuaWRlbnRpdHkuaWQpOwoJCWlmICghaGFuZGxlc0VxdWFsKGUsIG4uZ2V0KGUuaWRlbnRpdHkuaWQpKSAmJiAhaGFuZGxlc0VxdWFsKGUsIHQpKSB0aHJvdyBFcnJvcihgQWdlbnQgaGFuZGxlICIke2UuaWRlbnRpdHkuaWR9IiBjaGFuZ2VkIG93bmVyc2hpcCB3aGlsZSBpdHMgdHVybiB3YXMgcnVubmluZy5gKTsKCQl0ICE9PSB2b2lkIDAgJiYgYS5wdXNoKHQpLCBpLmRlbGV0ZShlLmlkZW50aXR5LmlkKTsKCX0KCWZvciAobGV0IGUgb2YgaSkgewoJCWxldCB0ID0gci5nZXQoZSk7CgkJdCAhPT0gdm9pZCAwICYmIGEucHVzaCh0KTsKCX0KCXJldHVybiB7CgkJLi4udC50dXJuU3RhdGUsCgkJW0FHRU5UX0hBTkRMRVNfU1RBVEVfS0VZXTogeyBoYW5kbGVzOiBhIH0KCX07Cn0KZnVuY3Rpb24gaGFuZGxlc0VxdWFsKGUsIHQpIHsKCWlmIChlID09PSB0KSByZXR1cm4gITA7CglpZiAoZSA9PT0gdm9pZCAwIHx8IHQgPT09IHZvaWQgMCkgcmV0dXJuICExOwoJbGV0IG4gPSBPYmplY3Qua2V5cyhlKSwgciA9IE9iamVjdC5rZXlzKHQpOwoJcmV0dXJuIG4ubGVuZ3RoID09PSByLmxlbmd0aCAmJiBuLmV2ZXJ5KChuKSA9PiB2YWx1ZXNFcXVhbChSZWZsZWN0LmdldChlLCBuKSwgUmVmbGVjdC5nZXQodCwgbikpKTsKfQpmdW5jdGlvbiB2YWx1ZXNFcXVhbChlLCB0KSB7CglpZiAoZSA9PT0gdCkgcmV0dXJuICEwOwoJaWYgKHR5cGVvZiBlICE9IGBvYmplY3RgIHx8ICFlIHx8IHR5cGVvZiB0ICE9IGBvYmplY3RgIHx8ICF0KSByZXR1cm4gITE7CglsZXQgbiA9IE9iamVjdC5rZXlzKGUpLCByID0gT2JqZWN0LmtleXModCk7CglyZXR1cm4gbi5sZW5ndGggPT09IHIubGVuZ3RoICYmIG4uZXZlcnkoKG4pID0+IHZhbHVlc0VxdWFsKFJlZmxlY3QuZ2V0KGUsIG4pLCBSZWZsZWN0LmdldCh0LCBuKSkpOwp9CmZ1bmN0aW9uIGZpbmRSdW5uaW5nQWdlbnRIYW5kbGUoZSwgdCkgewoJcmV0dXJuIHJlYWRBZ2VudEhhbmRsZXMoZSkuZmluZCgoZSkgPT4gZS5waGFzZSA9PT0gYHJ1bm5pbmdgICYmIGUub3BlcmF0aW9uLmNhbGxJZCA9PT0gdC5jYWxsSWQpOwp9CmZ1bmN0aW9uIGlzSW5ib3hTdWJhZ2VudFJlc3VsdEZyb21SdW5uaW5nSGFuZGxlKGUsIHQpIHsKCXJldHVybiBmaW5kUnVubmluZ0FnZW50SGFuZGxlKGUsIHsgY2FsbElkOiB0LmNhbGxJZCB9KSAhPT0gdm9pZCAwOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvY29udGV4dC9rZXkuanMKY29uc3QgS0VZX1JFR0lTVFJZX0dMT0JBTF9LRVkgPSBTeW1ib2wuZm9yKGBldmUuY29udGV4dC1rZXktcmVnaXN0cnlgKTsKY29uc3QgZ2xvYmFsS2V5UmVnaXN0cnlDb250YWluZXIgPSBnbG9iYWxUaGlzOwpnbG9iYWxLZXlSZWdpc3RyeUNvbnRhaW5lcltLRVlfUkVHSVNUUllfR0xPQkFMX0tFWV0gPT09IHZvaWQgMCAmJiAoZ2xvYmFsS2V5UmVnaXN0cnlDb250YWluZXJbS0VZX1JFR0lTVFJZX0dMT0JBTF9LRVldID0gbmV3IE1hcCgpKTsKY29uc3Qga2V5UmVnaXN0cnkgPSBnbG9iYWxLZXlSZWdpc3RyeUNvbnRhaW5lcltLRVlfUkVHSVNUUllfR0xPQkFMX0tFWV07CnZhciBDb250ZXh0S2V5ID0gY2xhc3MgewoJbmFtZTsKCWNvZGVjOwoJY29uc3RydWN0b3IoZSwgdCA9IHt9KSB7CgkJdGhpcy5uYW1lID0gZSwgdGhpcy5jb2RlYyA9IHQuY29kZWM7CgkJbGV0IG4gPSBrZXlSZWdpc3RyeS5nZXQoZSk7CgkJaWYgKG4gIT09IHZvaWQgMCAmJiBuLmNvZGVjID09PSB2b2lkIDAgIT0gKHRoaXMuY29kZWMgPT09IHZvaWQgMCkpIHRocm93IEVycm9yKGBDb250ZXh0S2V5IG5hbWUgY29sbGlzaW9uOiAiJHtlfSIgaXMgYWxyZWFkeSByZWdpc3RlcmVkICR7bi5jb2RlYyA/IGB3aXRoYCA6IGB3aXRob3V0YH0gYSBjb2RlYywgYnV0IGEga2V5ICR7dGhpcy5jb2RlYyA/IGB3aXRoYCA6IGB3aXRob3V0YH0gYSBjb2RlYyBpcyBiZWluZyByZWdpc3RlcmVkIHVuZGVyIHRoZSBzYW1lIG5hbWUuIFRoaXMgc2lsZW50bHkgYnJlYWtzIGNvbnRleHQgc2VyaWFsaXphdGlvbiDigJQgdXNlIGEgZGlzdGluY3QgbmFtZS5gKTsKCQlrZXlSZWdpc3RyeS5zZXQoZSwgdGhpcyk7Cgl9Cn07Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvY29udGV4dC9rZXktbmFtZXMuanMKY29uc3QgQ0hBTk5FTF9DT05URVhUX0tFWV9OQU1FID0gYGV2ZS5jaGFubmVsYDsKY29uc3QgU0VTU0lPTl9DQUxMQkFDS19DT05URVhUX0tFWV9OQU1FID0gYGV2ZS5zZXNzaW9uQ2FsbGJhY2tgOwpuZXcgQ29udGV4dEtleShgZXZlLmF1dGhgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5pbml0aWF0b3JBdXRoYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUuc2Vzc2lvbklkYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUuY29udGludWF0aW9uVG9rZW5gKTsKY29uc3QgQ2hhbm5lbFJlcXVlc3RJZEtleSA9IG5ldyBDb250ZXh0S2V5KGBldmUuY2hhbm5lbFJlcXVlc3RJZGApOwpuZXcgQ29udGV4dEtleShgZXZlLmludGVybmFsLmxvY2FsRGV2UmVxdWVzdGApOwpuZXcgQ29udGV4dEtleShgZXZlLnNjaGVkdWxlSWRgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5jaGFubmVsRGVsaXZlcnlgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS50dXJuVGFza0RlbGl2ZXJ5YCk7Cm5ldyBDb250ZXh0S2V5KGBldmUudHVyblRhc2tTdGF0ZWApOwpuZXcgQ29udGV4dEtleShgZXZlLmFjdGl2ZUNoYW5uZWxEZWxpdmVyaWVzYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUuY2hhbm5lbEluc3RydW1lbnRhdGlvbmApOwpuZXcgQ29udGV4dEtleShgZXZlLm1vZGVgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5wYXJlbnRTZXNzaW9uYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUucGFyZW50VHJhY2VDb250ZXh0YCk7Cm5ldyBDb250ZXh0S2V5KGBldmUuc2Vzc2lvblRyYWNlU2VlZGApOwpuZXcgQ29udGV4dEtleShgZXZlLm90ZWxUcmFjZUVuYWJsZWRgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5jYXBhYmlsaXRpZXNgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5hY3Rpdml0eU9ic2VydmVyYCk7Cm5ldyBDb250ZXh0S2V5KFNFU1NJT05fQ0FMTEJBQ0tfQ09OVEVYVF9LRVlfTkFNRSk7Cm5ldyBDb250ZXh0S2V5KGBldmUuc2Vzc2lvbmApOwpuZXcgQ29udGV4dEtleShgZXZlLnNhbmRib3hgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5pbnRlcm5hbC5oYW5kbGVFdmVudGApOwpjb25zdCBTZXNzaW9uRHluYW1pY01vZGVsUmVmZXJlbmNlS2V5ID0gbmV3IENvbnRleHRLZXkoYGV2ZS5zZXNzaW9uRHluYW1pY01vZGVsUmVmZXJlbmNlYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUudHVybkR5bmFtaWNNb2RlbFJlZmVyZW5jZWApOwpuZXcgQ29udGV4dEtleShgZXZlLnJ1bnRpbWVNb2RlbE1ldGFkYXRhQ2FjaGVgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5saXZlU3RlcER5bmFtaWNNb2RlbFNlbGVjdGlvbmApOwpuZXcgQ29udGV4dEtleShgZXZlLnNlc3Npb25EeW5hbWljVG9vbE1ldGFkYXRhYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUuc2Vzc2lvbkR5bmFtaWNUb29sUnVudGltZVJldmlzaW9uYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUudHVybkR5bmFtaWNUb29sTWV0YWRhdGFgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5tZW1vcnkudHVybkxvY2tzYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUubWVtb3J5LnByZXBhcmVkUHJlYW1ibGVgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5tZW1vcnkucGVuZGluZ0NvbW1pdGApOwpuZXcgQ29udGV4dEtleShgZXZlLm1lbW9yeS5wcmVwYXJlZENvbXBhY3Rpb25gKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5zdGVwRHluYW1pY1Rvb2xNZXRhZGF0YWApOwpuZXcgQ29udGV4dEtleShgZXZlLnNlc3Npb25EeW5hbWljU3ViYWdlbnRTZWxlY3Rpb25zYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUudHVybkR5bmFtaWNTdWJhZ2VudFNlbGVjdGlvbnNgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5zZXNzaW9uRHluYW1pY1N1YmFnZW50UnVudGltZVJldmlzaW9uYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUuZHluYW1pY1N1YmFnZW50QWdlbnRDb25maWdgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5keW5hbWljU2tpbGxNYW5pZmVzdGApOwpuZXcgQ29udGV4dEtleShgZXZlLnNlc3Npb25EeW5hbWljSW5zdHJ1Y3Rpb25zYCk7Cm5ldyBDb250ZXh0S2V5KGBldmUudHVybkR5bmFtaWNJbnN0cnVjdGlvbnNgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5keW5hbWljSW5zdHJ1Y3Rpb25SZXNvbHZlTWVzc2FnZXNgKTsKbmV3IENvbnRleHRLZXkoYGV2ZS5wZW5kaW5nRHluYW1pY0luc3RydWN0aW9uVXNlck1lc3NhZ2VzYCk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvY29udGV4dC9zZXJpYWxpemVkLWR5bmFtaWMtbW9kZWwtc2VsZWN0aW9uLmpzCmZ1bmN0aW9uIHByZXNlcnZlU2VyaWFsaXplZFNlc3Npb25EeW5hbWljTW9kZWxTZWxlY3Rpb24oZSwgdCkgewoJbGV0IG4gPSB0W1Nlc3Npb25EeW5hbWljTW9kZWxSZWZlcmVuY2VLZXkubmFtZV07CglyZXR1cm4gbiA9PT0gdm9pZCAwID8gZSA6IHsKCQkuLi5lLAoJCVtTZXNzaW9uRHluYW1pY01vZGVsUmVmZXJlbmNlS2V5Lm5hbWVdOiBuCgl9Owp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL2NhbmNlbC1kZXNjZW5kYW50LXR1cm5zLXN0ZXAuanMKdmFyIGNhbmNlbERlc2NlbmRhbnRUdXJuc1N0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9jYW5jZWxEZXNjZW5kYW50VHVybnNTdGVwIik7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL2Nvb3JkaW5hdGlvbi1kaXNwYXRjaC1zdGVwLmpzCnZhciBkaXNwYXRjaENvb3JkaW5hdGlvblN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9kaXNwYXRjaENvb3JkaW5hdGlvblN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdG9vbHMvd29ya2Zsb3cvZW1pdC13b3JrZmxvdy10b29sLXJ1bi1yZXBvcnQtc3RlcC5qcwp2YXIgZW1pdFdvcmtmbG93VG9vbFJ1blJlcG9ydFN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9lbWl0V29ya2Zsb3dUb29sUnVuUmVwb3J0U3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2hhcm5lc3MvdHVybi1jYW5jZWxsYXRpb24uanMKY29uc3QgVFVSTl9DQU5DRUxMRURfRVJST1JfTkFNRSA9IGBUdXJuQ2FuY2VsbGVkRXJyb3JgOwp2YXIgVHVybkNhbmNlbGxlZEVycm9yID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7Cgljb25zdHJ1Y3Rvcih0ID0gYFRoZSB0dXJuIHdhcyBjYW5jZWxsZWQuYCkgewoJCXN1cGVyKHQpLCB0aGlzLm5hbWUgPSBUVVJOX0NBTkNFTExFRF9FUlJPUl9OQU1FOwoJfQp9OwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90dXJuLWNhbmNlbGxhdGlvbi10b2tlbi5qcwpmdW5jdGlvbiB0dXJuQ2FuY2VsbGF0aW9uSG9va1Rva2VuKGUpIHsKCXJldHVybiBgJHtlfTpjYW5jZWxgOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3R1cm4tY2FuY2VsbGF0aW9uLWNvbnRyb2wuanMKYXN5bmMgZnVuY3Rpb24gY3JlYXRlVHVybkNhbmNlbGxhdGlvbkNvbnRyb2woaSkgewoJbGV0IGEgPSBjcmVhdGVIb29rKHsgdG9rZW46IHR1cm5DYW5jZWxsYXRpb25Ib29rVG9rZW4oaS5jb250cm9sVG9rZW4pIH0pLCBvID0gYVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTsKCXRyeSB7CgkJYXdhaXQgY2xhaW1Ib29rT3duZXJzaGlwKGEpOwoJfSBjYXRjaCAoZSkgewoJCWlmIChpc0hvb2tDb25mbGljdEVycm9yKGUpKSByZXR1cm47CgkJdGhyb3cgZTsKCX0KCWxldCBzID0gbmV3IEFib3J0Q29udHJvbGxlcigpLCBhYm9ydCA9ICgpID0+IHMuYWJvcnQobmV3IFR1cm5DYW5jZWxsZWRFcnJvcigpKSwgYyA9IGkuaW5pdGlhbFBheWxvYWQgIT09IHZvaWQgMCAmJiBtYXRjaGVzQWN0aXZlVHVybihpLmluaXRpYWxQYXlsb2FkLCBpLmV4cGVjdGVkVHVybklkKTsKCWMgJiYgYWJvcnQoKTsKCWxldCBsID0gYyA/IFByb21pc2UucmVzb2x2ZShpLmluaXRpYWxQYXlsb2FkKSA6IGNvbnN1bWVNYXRjaGluZ0NhbmNlbChvLCBpLmV4cGVjdGVkVHVybklkLCBhYm9ydCksIHUgPSAhMTsKCXJldHVybiB7CgkJcGF5bG9hZDogbCwKCQlzaWduYWw6IHMuc2lnbmFsLAoJCXJlcXVlc3RlZDogbC50aGVuKCgpID0+IGBjYW5jZWxgKSwKCQlhc3luYyBkaXNwb3NlKCkgewoJCQl1IHx8ICh1ID0gITAsIGF3YWl0IGRpc3Bvc2VIb29rKGEpKTsKCQl9Cgl9Owp9CmFzeW5jIGZ1bmN0aW9uIGNvbnN1bWVNYXRjaGluZ0NhbmNlbChlLCB0LCBuKSB7Cglmb3IgKDs7KSB7CgkJbGV0IHIgPSBhd2FpdCBlLm5leHQoKTsKCQlpZiAoci5kb25lKSByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoKCkgPT4ge30pOwoJCWlmIChtYXRjaGVzQWN0aXZlVHVybihyLnZhbHVlLCB0KSkgcmV0dXJuIG4oKSwgci52YWx1ZTsKCX0KfQpmdW5jdGlvbiBtYXRjaGVzQWN0aXZlVHVybihlLCB0KSB7CglpZiAodHlwZW9mIGUgIT0gYG9iamVjdGAgfHwgIWUpIHJldHVybiAhMDsKCWxldCBuID0gZS50dXJuSWQ7CglyZXR1cm4gbiA9PT0gdm9pZCAwIHx8IG4gPT09IHQ7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vc2Vzc2lvbi1zdGF0ZS1jdXJzb3IuanMKdmFyIFNlc3Npb25TdGF0ZUN1cnNvciA9IGNsYXNzIHsKCWN1cnJlbnRTZXJpYWxpemVkQ29udGV4dDsKCWN1cnJlbnRTZXNzaW9uU3RhdGU7Cgljb25zdHJ1Y3RvcihlKSB7CgkJdGhpcy5jdXJyZW50U2VyaWFsaXplZENvbnRleHQgPSBlLnNlcmlhbGl6ZWRDb250ZXh0LCB0aGlzLmN1cnJlbnRTZXNzaW9uU3RhdGUgPSBlLnNlc3Npb25TdGF0ZTsKCX0KCWdldCBzZXJpYWxpemVkQ29udGV4dCgpIHsKCQlyZXR1cm4gdGhpcy5jdXJyZW50U2VyaWFsaXplZENvbnRleHQ7Cgl9CglnZXQgc2Vzc2lvblN0YXRlKCkgewoJCXJldHVybiB0aGlzLmN1cnJlbnRTZXNzaW9uU3RhdGU7Cgl9CglhZG9wdFN0YXRlKGUpIHsKCQl0aGlzLmN1cnJlbnRTZXJpYWxpemVkQ29udGV4dCA9IGUuc2VyaWFsaXplZENvbnRleHQgPz8gdGhpcy5jdXJyZW50U2VyaWFsaXplZENvbnRleHQsIHRoaXMuY3VycmVudFNlc3Npb25TdGF0ZSA9IGUuc2Vzc2lvblN0YXRlID8/IHRoaXMuY3VycmVudFNlc3Npb25TdGF0ZTsKCX0KfTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdHVybi1leGVjdXRpb24tY3Vyc29yLmpzCnZhciBUdXJuRXhlY3V0aW9uQ3Vyc29yID0gY2xhc3MgZXh0ZW5kcyBTZXNzaW9uU3RhdGVDdXJzb3IgewoJY29udHJvbFRva2VuOwoJcGFyZW50V3JpdGFibGU7CglsYXN0UmVwb3J0ZWRDb250aW51YXRpb25Ub2tlbjsKCWNvbnN0cnVjdG9yKGUpIHsKCQlzdXBlcih7CgkJCXNlcmlhbGl6ZWRDb250ZXh0OiBlLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQlzZXNzaW9uU3RhdGU6IGUuc2Vzc2lvblN0YXRlCgkJfSksIHRoaXMuY29udHJvbFRva2VuID0gZS5jb250cm9sVG9rZW4sIHRoaXMubGFzdFJlcG9ydGVkQ29udGludWF0aW9uVG9rZW4gPSBlLnNlc3Npb25TdGF0ZS5jb250aW51YXRpb25Ub2tlbiwgdGhpcy5wYXJlbnRXcml0YWJsZSA9IGUucGFyZW50V3JpdGFibGU7Cgl9Cglhc3luYyBhZG9wdChlKSB7CgkJdGhpcy5hZG9wdFN0YXRlKGUpOwoJCWxldCB0ID0gZS5zZXNzaW9uU3RhdGUuY29udGludWF0aW9uVG9rZW47CgkJdCA9PT0gYGAgfHwgdCA9PT0gdGhpcy5sYXN0UmVwb3J0ZWRDb250aW51YXRpb25Ub2tlbiB8fCAodGhpcy5sYXN0UmVwb3J0ZWRDb250aW51YXRpb25Ub2tlbiA9IHQsIGF3YWl0IHRoaXMuc2VuZCh7CgkJCWNvbnRpbnVhdGlvblRva2VuOiB0LAoJCQlraW5kOiBgdHVybi1jb250aW51YXRpb24tdG9rZW5gCgkJfSkpOwoJfQoJY3JlYXRlU3RlcElucHV0KGUsIHQpIHsKCQlyZXR1cm4gewoJCQlhYm9ydFNpZ25hbDogdCwKCQkJaW5wdXQ6IGUsCgkJCXBhcmVudFdyaXRhYmxlOiB0aGlzLnBhcmVudFdyaXRhYmxlLAoJCQlzZXJpYWxpemVkQ29udGV4dDogdGhpcy5zZXJpYWxpemVkQ29udGV4dCwKCQkJc2Vzc2lvblN0YXRlOiB0aGlzLnNlc3Npb25TdGF0ZQoJCX07Cgl9Cglhc3luYyBmaW5pc2goZSwgdCwgbikgewoJCXRoaXMuYWRvcHRTdGF0ZShlKSwgYXdhaXQgdGhpcy5zZW5kKHsKCQkJYWN0aW9uOiB7CgkJCQkuLi50LAoJCQkJc2VyaWFsaXplZENvbnRleHQ6IHRoaXMuc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IHRoaXMuc2Vzc2lvblN0YXRlCgkJCX0sCgkJCWJ1ZmZlcmVkRGVsaXZlcmllczogbi5sZW5ndGggPT09IDAgPyB2b2lkIDAgOiBbLi4ubl0sCgkJCWtpbmQ6IGB0dXJuLXJlc3VsdGAKCQl9KTsKCX0KCWFzeW5jIHNlbmQoZSkgewoJCWF3YWl0IHNlbmRUdXJuQ29udHJvbFN0ZXAoewoJCQljb250cm9sVG9rZW46IHRoaXMuY29udHJvbFRva2VuLAoJCQlwYXlsb2FkOiBlCgkJfSk7Cgl9Cn07Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvcnVudGltZS9hY3Rpb25zL3Jlc3VsdHMuanMKZnVuY3Rpb24gcmVzb2x2ZVJ1bnRpbWVBY3Rpb25SZXN1bHRzRm9yQ2FsbElkcyhlKSB7CglsZXQgdCA9IG5ldyBTZXQoZS5wZW5kaW5nQ2FsbElkcyksIG4gPSBuZXcgTWFwKCk7Cglmb3IgKGxldCByIG9mIGUucmVzdWx0cykgdC5oYXMoci5jYWxsSWQpICYmIG4uc2V0KHIuY2FsbElkLCByKTsKCWxldCByID0gW107Cglmb3IgKGxldCB0IG9mIGUucGVuZGluZ0NhbGxJZHMpIHsKCQlsZXQgZSA9IG4uZ2V0KHQpOwoJCWlmIChlID09PSB2b2lkIDApIHJldHVybjsKCQlyLnB1c2goZSk7Cgl9CglyZXR1cm4gcjsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90b29scy9zdWJhZ2VudC90YXNrLWNhbmNlbC5qcwp2YXIgY2FuY2VsQWdlbnRJbnZvY2F0aW9uT3duZXJTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vY2FuY2VsQWdlbnRJbnZvY2F0aW9uT3duZXJTdGVwIik7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3R1cm4td29ya2Zsb3ctdG9vbC1ydW4uanMKYXN5bmMgZnVuY3Rpb24gaGFuZGxlV29ya2Zsb3dUb29sUnVuT3V0Y29tZShpKSB7CglsZXQgeyBjdXJzb3I6IGEsIG1lc3NhZ2U6IG8gfSA9IGksIHMgPSBmaW5kV29ya2Zsb3dUb29sUnVuKGEuc2Vzc2lvblN0YXRlLnNuYXBzaG90Py5zZXNzaW9uLnN0YXRlLCBvLmZyb20uY2Fs",
	"bElkKTsKCWlmIChzPy5ydW5JZCAhPT0gby5mcm9tLnJ1bklkKSByZXR1cm47CglsZXQgYyA9IHMucmVzdWx0S2luZCA9PT0gYHN1YmFnZW50YCA/IGF3YWl0IHNldHRsZVN1YmFnZW50T3V0Y29tZShpKSA6IHdvcmtmbG93VG9vbFJ1bk91dGNvbWVUb1Rvb2xSZXN1bHQobyk7Cglhd2FpdCBjYW5jZWxBZ2VudEludm9jYXRpb25Pd25lclN0ZXAoewoJCW93bmVySWQ6IG8uZnJvbS5ydW5JZCwKCQlzZXJpYWxpemVkQ29udGV4dDogYS5zZXJpYWxpemVkQ29udGV4dCwKCQlzZXNzaW9uU3RhdGU6IGEuc2Vzc2lvblN0YXRlCgl9KTsKCWxldCBsID0gYXdhaXQgcmVsZWFzZUFnZW50SW52b2NhdGlvbk93bmVyU3RlcCh7CgkJY2FuY2VsbGVkOiBvLnJlc3VsdC5zdGF0dXMgPT09IGBjYW5jZWxsZWRgLAoJCW93bmVySWQ6IG8uZnJvbS5ydW5JZCwKCQlzZXNzaW9uU3RhdGU6IGEuc2Vzc2lvblN0YXRlCgl9KTsKCWF3YWl0IGEuYWRvcHQoewoJCXNlcmlhbGl6ZWRDb250ZXh0OiBhLnNlcmlhbGl6ZWRDb250ZXh0LAoJCXNlc3Npb25TdGF0ZTogbC5zZXNzaW9uU3RhdGUKCX0pOwoJbGV0IHUgPSBhLnNlc3Npb25TdGF0ZS5zbmFwc2hvdD8uc2Vzc2lvbi5zdGF0ZTsKCXJldHVybiAoYy5raW5kID09PSBgc3ViYWdlbnQtcmVzdWx0YCA/IGMuY2FsbElkID09PSBvLmZyb20uY2FsbElkICYmIGlzSW5ib3hTdWJhZ2VudFJlc3VsdEZyb21SZWNvcmRlZFdvcmtmbG93VG9vbFJ1bih1LCBjKSA6IGlzSW5ib3hUb29sUmVzdWx0RnJvbVJlY29yZGVkV29ya2Zsb3dUb29sUnVuKHUsIGMpKSA/IGMgOiB2b2lkIDA7Cn0KYXN5bmMgZnVuY3Rpb24gc2V0dGxlU3ViYWdlbnRPdXRjb21lKGUpIHsKCWxldCB7IGN1cnNvcjogdCwgbWVzc2FnZTogbiB9ID0gZSwgciA9IHdvcmtmbG93VG9vbFJ1bk91dGNvbWVUb1N1YmFnZW50UmVzdWx0KG4pOwoJcmV0dXJuIHIub3JpZ2luID09PSBgY2hpbGRgICYmIGF3YWl0IHQuYWRvcHQoYXdhaXQgYXBwbHlUYXNrQWdlbnRSZXF1ZXN0KHsKCQlhY2N1bXVsYXRlVXNhZ2U6ICExLAoJCW93bmVySWQ6IG4uZnJvbS5ydW5JZCwKCQlyZXBseVRvOiBuLmZyb20ucnVuSWQsCgkJcmVxdWVzdDogewoJCQlraW5kOiBgYWdlbnQtc2V0dGxlZGAsCgkJCXJlc3VsdDogcgoJCX0KCX0sIHJlcXVlc3RDb250ZXh0KGUpKSksIHI7Cn0KYXN5bmMgZnVuY3Rpb24gaGFuZGxlV29ya2Zsb3dUb29sUnVuUmVxdWVzdCh0KSB7CglsZXQgeyBjdXJzb3I6IG4sIG1lc3NhZ2U6IHIgfSA9IHQ7CglpZiAoci5yZXF1ZXN0LmtpbmQgPT09IGBhZ2VudC1pbnZva2VgIHx8IHIucmVxdWVzdC5raW5kID09PSBgYWdlbnQtc2V0dGxlZGApIHsKCQlpZiAoZmluZFdvcmtmbG93VG9vbFJ1bihuLnNlc3Npb25TdGF0ZS5zbmFwc2hvdD8uc2Vzc2lvbi5zdGF0ZSwgci5mcm9tLmNhbGxJZCk/LnJ1bklkICE9PSByLmZyb20ucnVuSWQpIHsKCQkJci5yZXF1ZXN0LmtpbmQgPT09IGBhZ2VudC1pbnZva2VgICYmIGF3YWl0IHJlc3VtZUhvb2tTdGVwKHIucmVwbHlUbywgewoJCQkJa2luZDogYHJ1bnRpbWUtYWN0aW9uLXJlc3VsdGAsCgkJCQlyZXN1bHRzOiBbewoJCQkJCWNhbGxJZDogci5yZXF1ZXN0Lmludm9jYXRpb25JZCwKCQkJCQlpc0Vycm9yOiAhMCwKCQkJCQlraW5kOiBgc3ViYWdlbnQtcmVzdWx0YCwKCQkJCQlvcmlnaW46IGBkaXNwYXRjaGAsCgkJCQkJb3V0cHV0OiB7CgkJCQkJCWNvZGU6IGBBR0VOVF9JTlZPQ0FUSU9OX05PVF9BRE1JVFRFRGAsCgkJCQkJCW1lc3NhZ2U6IGBUaGUgd29ya2Zsb3cgdG9vbCBydW4gbm8gbG9uZ2VyIG93bnMgdGhpcyBhZ2VudCBpbnZvY2F0aW9uLmAKCQkJCQl9LAoJCQkJCXN1YmFnZW50TmFtZTogci5yZXF1ZXN0LmlucHV0LnRhcmdldAoJCQkJfV0KCQkJfSk7CgkJCXJldHVybjsKCQl9CgkJYXdhaXQgbi5hZG9wdChhd2FpdCBhcHBseVRhc2tBZ2VudFJlcXVlc3QoewoJCQlhY2N1bXVsYXRlVXNhZ2U6IHIuZnJvbS5yZXN1bHRLaW5kICE9PSBgc3ViYWdlbnRgLAoJCQlvd25lcklkOiByLmZyb20ucnVuSWQsCgkJCXJlcGx5VG86IHIucmVwbHlUbywKCQkJcmVxdWVzdDogci5yZXF1ZXN0CgkJfSwgcmVxdWVzdENvbnRleHQodCkpKTsKCQlyZXR1cm47Cgl9CglpZiAoci5yZXF1ZXN0LmtpbmQgPT09IGBhdXRob3JpemF0aW9uLXJlcXVlc3RgKSB7CgkJYXdhaXQgbi5hZG9wdChhd2FpdCBydW5Qcm94eVN1YmFnZW50RXZlbnRTdGVwKHsKCQkJaG9va1BheWxvYWQ6IHIucmVxdWVzdC5ldmVudCwKCQkJcGFyZW50V3JpdGFibGU6IG4ucGFyZW50V3JpdGFibGUsCgkJCXNlcmlhbGl6ZWRDb250ZXh0OiBuLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQlzZXNzaW9uU3RhdGU6IG4uc2Vzc2lvblN0YXRlCgkJfSkpOwoJCXJldHVybjsKCX0KCWF3YWl0IG4uYWRvcHQoYXdhaXQgcnVuUHJveHlTdWJhZ2VudEV2ZW50U3RlcCh7CgkJLi4uci5yZXF1ZXN0Q29vcmRpbmF0ZXMgPT09IHZvaWQgMCA/IHsgYW5zd2VySG9vazogeyBydW5JZDogci5mcm9tLnJ1bklkIH0gfSA6IHt9LAoJCWhvb2tQYXlsb2FkOiB3b3JrZmxvd1Rvb2xSdW5SZXF1ZXN0VG9JbnB1dFJlcXVlc3RQYXlsb2FkKHIpLAoJCXBhcmVudFdyaXRhYmxlOiBuLnBhcmVudFdyaXRhYmxlLAoJCXNlcmlhbGl6ZWRDb250ZXh0OiBuLnNlcmlhbGl6ZWRDb250ZXh0LAoJCXNlc3Npb25TdGF0ZTogbi5zZXNzaW9uU3RhdGUKCX0pKTsKfQpmdW5jdGlvbiByZXF1ZXN0Q29udGV4dChlKSB7CglyZXR1cm4gewoJCWNhbGxiYWNrQmFzZVVybDogcmVzb2x2ZVdvcmtmbG93Q2FsbGJhY2tCYXNlVXJsKGUuY2FsbGJhY2tNZXRhZGF0YVVybCksCgkJcGFyZW50V3JpdGFibGU6IGUuY3Vyc29yLnBhcmVudFdyaXRhYmxlLAoJCXNlcmlhbGl6ZWRDb250ZXh0OiBlLmN1cnNvci5zZXJpYWxpemVkQ29udGV4dCwKCQlzZXNzaW9uU3RhdGU6IGUuY3Vyc29yLnNlc3Npb25TdGF0ZQoJfTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90dXJuLXdvcmtmbG93LmpzCmNvbnN0IFRBU0tfTU9ERV9XQUlUX0VSUk9SX01FU1NBR0UgPSAiVGFzayBtb2RlIGNhbm5vdCB3YWl0IGZvciBmb2xsb3ctdXAgaW5wdXQgKGBuZXh0OiBudWxsYCkuIjsKYXN5bmMgZnVuY3Rpb24gdHVybldvcmtmbG93KGUpIHsKCWxldCB0ID0gbWlncmF0ZVR1cm5Xb3JrZmxvd0lucHV0KGUpOwoJcmV0dXJuIHQuZHJpdmVyQ2FwYWJpbGl0aWVzPy50dXJuSW5ib3ggPT09ICEwID8gcnVuVHVybk93bmVkV29ya2Zsb3codCkgOiBydW5MZWdhY3lUdXJuV29ya2Zsb3codCk7Cn0KYXN5bmMgZnVuY3Rpb24gcnVuVHVybk93bmVkV29ya2Zsb3coYSkgewoJbGV0IG8gPSBjcmVhdGVIb29rKHsgdG9rZW46IGAke2EuY29tcGxldGlvblRva2VufTppbmJveGAgfSksIGMgPSBjcmVhdGVDaGFubmVsUmVhZGVyKGBpbmJveGAsIG8pLCBsID0gYS5pbml0aWFsU3RlcCwgdSA9IG5ldyBUdXJuRXhlY3V0aW9uQ3Vyc29yKHsKCQljb250cm9sVG9rZW46IGEuY29tcGxldGlvblRva2VuLAoJCXBhcmVudFdyaXRhYmxlOiBhLnN0ZXBJbnB1dC5wYXJlbnRXcml0YWJsZSwKCQlzZXJpYWxpemVkQ29udGV4dDogbD8uYmVmb3JlU3RlcC5zZXJpYWxpemVkQ29udGV4dCA/PyBhLnN0ZXBJbnB1dC5zZXJpYWxpemVkQ29udGV4dCwKCQlzZXNzaW9uU3RhdGU6IGw/LmJlZm9yZVN0ZXAuc2Vzc2lvblN0YXRlID8/IGEuc3RlcElucHV0LnNlc3Npb25TdGF0ZQoJfSksIGQgPSAwLCBuZXh0RGVsaXZlcnlSZXF1ZXN0SWQgPSAoKSA9PiBgJHtvLnRva2VufTpkZWxpdmVyeToke1N0cmluZyhkKyspfWAsIGYgPSBbXSwgcCA9IGEuc3RlcElucHV0LmlucHV0LCBtID0gITEsIGgsIGc7Cgl0cnkgewoJCXRyeSB7CgkJCWF3YWl0IGNsYWltSG9va093bmVyc2hpcChvKSwgbSA9ICEwOwoJCX0gY2F0Y2ggKGUpIHsKCQkJaWYgKGlzSG9va0NvbmZsaWN0RXJyb3IoZSkpIHJldHVybjsKCQkJdGhyb3cgZTsKCQl9CgkJaCA9IG9wZW5Xb3JrZmxvd1Rvb2xSdW5Pd25lckNoYW5uZWxzKG8udG9rZW4pOwoJCWxldCBlID0gWy4uLmgucmVhZGVycywgY107CgkJZm9yIChhLmRyaXZlckNhcGFiaWxpdGllcz8uY2FuY2VsbGVkVHVyblNldHRsZSA9PT0gITAgJiYgKGcgPSBhd2FpdCBjcmVhdGVUdXJuQ2FuY2VsbGF0aW9uQ29udHJvbCh7CgkJCWNvbnRyb2xUb2tlbjogYS5jb21wbGV0aW9uVG9rZW4sCgkJCWV4cGVjdGVkVHVybklkOiBhY3RpdmVUdXJuSWQodS5zZXNzaW9uU3RhdGUuZW1pc3Npb25TdGF0ZSksCgkJCWluaXRpYWxQYXlsb2FkOiBhLmluaXRpYWxDYW5jZWxsYXRpb24KCQl9KSk7OykgewoJCQlsZXQgbiA9IGw/LmJlZm9yZVN0ZXAgPz8gewoJCQkJc2VyaWFsaXplZENvbnRleHQ6IHUuc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IHUuc2Vzc2lvblN0YXRlCgkJCX0sIHIgPSBsPy5yZXN1bHQgPz8gYXdhaXQgdHVyblN0ZXAodS5jcmVhdGVTdGVwSW5wdXQocCwgZz8uc2lnbmFsKSk7CgkJCWwgPSB2b2lkIDA7CgkJCWxldCBpID0gci5hY3Rpb24gPT09IGBkaXNwYXRjaC13b3JrZmxvdy10YXNrc2AgPyByLnBlbmRpbmdUYXNrQ2FsbElkcyA6IHIuYWN0aW9uID09PSBgcGFya2AgPyByLnBlbmRpbmdDb29yZGluYXRpb25DYWxsSWRzIDogdm9pZCAwLCBzID0gKHIuYmFja2dyb3VuZFRhc2tzPy5sZW5ndGggPz8gMCkgPiAwOwoJCQlpZiAocykgewoJCQkJaWYgKHIuYmFja2dyb3VuZFRhc2tTdGF0ZSA9PT0gdm9pZCAwKSB0aHJvdyBFcnJvcihgQmFja2dyb3VuZCB0YXNrcyB3ZXJlIHJldHVybmVkIHdpdGhvdXQgdGhlaXIgY29tbWl0dGVkIHNlc3Npb24gc3RhdGUuYCk7CgkJCQlhd2FpdCB1LmFkb3B0KHsKCQkJCQlzZXJpYWxpemVkQ29udGV4dDogbi5zZXJpYWxpemVkQ29udGV4dCwKCQkJCQlzZXNzaW9uU3RhdGU6IHIuYmFja2dyb3VuZFRhc2tTdGF0ZQoJCQkJfSksIGF3YWl0IGFja25vd2xlZGdlRGVsZWdhdGVkVGFza3NTdGVwKHsgdGFza3M6IHIuYmFja2dyb3VuZFRhc2tzID8/IFtdIH0pOwoJCQl9CgkJCWlmIChyLmFjdGlvbiA9PT0gYGNhbmNlbGxlZGApIHsKCQkJCWF3YWl0IHUuYWRvcHQoewoJCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiByLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJCXNlc3Npb25TdGF0ZTogci5iYWNrZ3JvdW5kVGFza1N0YXRlID8/IHIuc2Vzc2lvblN0YXRlCgkJCQl9KSwgYXdhaXQgZmluaXNoQ2FuY2VsbGVkVHVybih7CgkJCQkJYnVmZmVyZWREZWxpdmVyaWVzOiBmLAoJCQkJCWNhbmNlbGxhdGlvbjogZywKCQkJCQljdXJzb3I6IHUKCQkJCX0pOwoJCQkJcmV0dXJuOwoJCQl9CgkJCWlmIChnPy5zaWduYWwuYWJvcnRlZCA9PT0gITAgJiYgKGkgPT09IHZvaWQgMCB8fCBzKSkgewoJCQkJYXdhaXQgdS5hZG9wdCh7CgkJCQkJc2VyaWFsaXplZENvbnRleHQ6IHByZXNlcnZlU2VyaWFsaXplZFNlc3Npb25EeW5hbWljTW9kZWxTZWxlY3Rpb24obi5zZXJpYWxpemVkQ29udGV4dCwgci5zZXJpYWxpemVkQ29udGV4dCksCgkJCQkJc2Vzc2lvblN0YXRlOiB1LnNlc3Npb25TdGF0ZQoJCQkJfSksIGF3YWl0IGZpbmlzaENhbmNlbGxlZFR1cm4oewoJCQkJCWJ1ZmZlcmVkRGVsaXZlcmllczogZiwKCQkJCQljYW5jZWxsYXRpb246IGcsCgkJCQkJY3Vyc29yOiB1CgkJCQl9KTsKCQkJCXJldHVybjsKCQkJfQoJCQlpZiAoci5hY3Rpb24gPT09IGBkb25lYCkgewoJCQkJYXdhaXQgZz8uZGlzcG9zZSgpLCBhd2FpdCB1LmZpbmlzaChyLCB7CgkJCQkJa2luZDogYGRvbmVgLAoJCQkJCW91dHB1dDogci5vdXRwdXQgPz8gYGAsCgkJCQkJaXNFcnJvcjogci5pc0Vycm9yLAoJCQkJCXVzYWdlOiByLnVzYWdlLAoJCQkJCXVzYWdlRGVsdGE6IHIudXNhZ2VEZWx0YQoJCQkJfSwgZik7CgkJCQlyZXR1cm47CgkJCX0KCQkJaWYgKGkgIT09IHZvaWQgMCAmJiAoci5hY3Rpb24gPT09IGBwYXJrYCB8fCByLmFjdGlvbiA9PT0gYGRpc3BhdGNoLXdvcmtmbG93LXRhc2tzYCkpIHsKCQkJCWF3YWl0IHUuYWRvcHQocik7CgkJCQlsZXQgbiA9IGF3YWl0IGRpc3BhdGNoQ29vcmRpbmF0aW9uU3RlcCh7CgkJCQkJYWN0aW9uOiByLmFjdGlvbiwKCQkJCQljYWxsYmFja0Jhc2VVcmw6IHJlc29sdmVXb3JrZmxvd0NhbGxiYWNrQmFzZVVybChnZXRXb3JrZmxvd01ldGFkYXRhKCkudXJsKSwKCQkJCQlwYXJlbnRDb250aW51YXRpb25Ub2tlbjogby50b2tlbiwKCQkJCQlwYXJlbnRXcml0YWJsZTogdS5wYXJlbnRXcml0YWJsZSwKCQkJCQlzZXJpYWxpemVkQ29udGV4dDogdS5zZXJpYWxpemVkQ29udGV4dCwKCQkJCQlzZXNzaW9uU3RhdGU6IHUuc2Vzc2lvblN0YXRlCgkJCQl9KSwgYSA9IG4ucmVzdWx0cy5sZW5ndGggPT09IDAgPyB2b2lkIDAgOiBEYXRlLm5vdygpOwoJCQkJYXdhaXQgdS5hZG9wdChuKSwgYXdhaXQgYWNrbm93bGVkZ2VEZWxlZ2F0ZWRUYXNrc1N0ZXAoeyB0YXNrczogbi5wZW5kaW5nVGFza3MgfSk7CgkJCQlsZXQgcyA9IGF3YWl0IHdhaXRGb3JSdW50aW1lQWN0aW9uUmVzdWx0cyh7CgkJCQkJYnVmZmVyZWREZWxpdmVyaWVzOiBmLAoJCQkJCWNhbmNlbGxhdGlvbjogZywKCQkJCQljdXJzb3I6IHUsCgkJCQkJaW5ib3hUb2tlbjogby50b2tlbiwKCQkJCQlpbml0aWFsQWNjZXB0ZWRBdE1zOiBhLAoJCQkJCWluaXRpYWxSZXN1bHRzOiBuLnJlc3VsdHMsCgkJCQkJbmV4dERlbGl2ZXJ5UmVxdWVzdElkLAoJCQkJCXJlYWRlcnM6IGUsCgkJCQkJcGVuZGluZ0NhbGxJZHM6IGkKCQkJCX0pOwoJCQkJaWYgKHMgPT09IGBjYW5jZWxsZWRgKSB7CgkJCQkJcCA9IHZvaWQgMDsKCQkJCQljb250aW51ZTsKCQkJCX0KCQkJCWlmIChzID09PSBgY2FuY2VsLXR1cm5gKSB7CgkJCQkJYXdhaXQgZmluaXNoQ2FuY2VsbGVkVHVybih7CgkJCQkJCWJ1ZmZlcmVkRGVsaXZlcmllczogZiwKCQkJCQkJY2FuY2VsbGF0aW9uOiBnLAoJCQkJCQljdXJzb3I6IHUKCQkJCQl9KTsKCQkJCQlyZXR1cm47CgkJCQl9CgkJCQlwID0gewoJCQkJCWtpbmQ6IGBydW50aW1lLWFjdGlvbi1yZXN1bHRgLAoJCQkJCS4uLnMKCQkJCX07CgkJCQljb250aW51ZTsKCQkJfQoJCQlpZiAoci5hY3Rpb24gPT09IGBwYXJrYCkgewoJCQkJaWYgKCEoci5oYXNQZW5kaW5nQXV0aG9yaXphdGlvbiB8fCByLmhhc1BlbmRpbmdJbnB1dEJhdGNoICYmIGEuY2FwYWJpbGl0aWVzPy5yZXF1ZXN0SW5wdXQgPT09ICEwIHx8IGEubW9kZSA9PT0gYGNvbnZlcnNhdGlvbmApKSB0aHJvdyBFcnJvcihUQVNLX01PREVfV0FJVF9FUlJPUl9NRVNTQUdFKTsKCQkJCWF3YWl0IGc/LmRpc3Bvc2UoKSwgYXdhaXQgdS5maW5pc2gociwgewoJCQkJCWF1dGhvcml6YXRpb25BdHRlbXB0SWRzOiByLmF1dGhvcml6YXRpb25BdHRlbXB0SWRzLAoJCQkJCWF1dGhvcml6YXRpb25OYW1lczogci5hdXRob3JpemF0aW9uTmFtZXMsCgkJCQkJa2luZDogYHBhcmtgLAoJCQkJCXNldHRsZWQ6IHIuc2V0dGxlZAoJCQkJfSwgZik7CgkJCQlyZXR1cm47CgkJCX0KCQkJYXdhaXQgdS5hZG9wdChyKSwgcCA9IHZvaWQgMDsKCQl9Cgl9IGNhdGNoIChlKSB7CgkJdGhyb3cgYXdhaXQgdS5zZW5kKHsKCQkJZXJyb3I6IG5vcm1hbGl6ZVNlcmlhbGl6YWJsZUVycm9yKGUpLAoJCQlraW5kOiBgdHVybi1lcnJvcmAKCQl9KSwgZTsKCX0gZmluYWxseSB7CgkJZyAhPT0gdm9pZCAwICYmIGF3YWl0IGcuZGlzcG9zZSgpLCBoICE9PSB2b2lkIDAgJiYgYXdhaXQgaC5kaXNwb3NlKCksIG0gJiYgYXdhaXQgZGlzcG9zZUhvb2sobyk7Cgl9Cn0KYXN5bmMgZnVuY3Rpb24gZmluaXNoQ2FuY2VsbGVkVHVybihlKSB7CgkoZS5jYW5jZWxsYXRpb24/LnNpZ25hbC5hYm9ydGVkID09PSAhMCA/IGF3YWl0IGUuY2FuY2VsbGF0aW9uLnBheWxvYWQgOiB2b2lkIDApPy50YXNrcyA9PT0gITAgJiYgYXdhaXQgY2FuY2VsQWxsSW5kZXhlZFNlc3Npb25UYXNrc1N0ZXAoewoJCXNlcmlhbGl6ZWRDb250ZXh0OiBlLmN1cnNvci5zZXJpYWxpemVkQ29udGV4dCwKCQlzZXNzaW9uU3RhdGU6IGUuY3Vyc29yLnNlc3Npb25TdGF0ZQoJfSksIGF3YWl0IGNhbmNlbERlc2NlbmRhbnRUdXJuc1N0ZXAoewoJCXNlcmlhbGl6ZWRDb250ZXh0OiBlLmN1cnNvci5zZXJpYWxpemVkQ29udGV4dCwKCQlzZXNzaW9uU3RhdGU6IGUuY3Vyc29yLnNlc3Npb25TdGF0ZQoJfSksIGF3YWl0IGUuY2FuY2VsbGF0aW9uPy5kaXNwb3NlKCksIGF3YWl0IGUuY3Vyc29yLmZpbmlzaCh7IHNlc3Npb25TdGF0ZTogZS5jdXJzb3Iuc2Vzc2lvblN0YXRlIH0sIHsKCQljYW5jZWxsZWQ6ICEwLAoJCWtpbmQ6IGBwYXJrYAoJfSwgZS5idWZmZXJlZERlbGl2ZXJpZXMpOwp9CmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JSdW50aW1lQWN0aW9uUmVzdWx0cyhlKSB7CglsZXQgbiwgciA9IFsuLi5lLmluaXRpYWxSZXN1bHRzXSwgaSA9IG5ldyBNYXAoKTsKCWlmIChlLmluaXRpYWxBY2NlcHRlZEF0TXMgIT09IHZvaWQgMCkgZm9yIChsZXQgdCBvZiBlLmluaXRpYWxSZXN1bHRzKSBpLnNldCh0LmNhbGxJZCwgZS5pbml0aWFsQWNjZXB0ZWRBdE1zKTsKCWZvciAoOzspIHsKCQlsZXQgcyA9IHJlc29sdmVSdW50aW1lQWN0aW9uUmVzdWx0c0ZvckNhbGxJZHMoewoJCQlwZW5kaW5nQ2FsbElkczogZS5wZW5kaW5nQ2FsbElkcywKCQkJcmVzdWx0czogcgoJCX0pOwoJCWlmIChzICE9PSB2b2lkIDApIHJldHVybiBuICE9PSB2b2lkIDAgJiYgYXdhaXQgZS5jdXJzb3Iuc2VuZCh7CgkJCWtpbmQ6IGB0dXJuLWRlbGl2ZXJ5LWNhbmNlbGxlZGAsCgkJCXJlcXVlc3RJZDogbgoJCX0pLCB7CgkJCWFjY2VwdGVkQXRNc0J5Q2FsbElkOiBPYmplY3QuZnJvbUVudHJpZXMocy5tYXAoKGUpID0+IFtlLmNhbGxJZCwgaS5nZXQoZS5jYWxsSWQpXSkpLAoJCQlyZXN1bHRzOiBzCgkJfTsKCQllLmN1cnNvci5zZXNzaW9uU3RhdGUuaGFzUHJveHlJbnB1dFJlcXVlc3RzICYmIG4gPT09IHZvaWQgMCAmJiAobiA9IGUubmV4dERlbGl2ZXJ5UmVxdWVzdElkKCksIGF3YWl0IGUuY3Vyc29yLnNlbmQoewoJCQljb250aW51YXRpb25Ub2tlbjogZS5jdXJzb3Iuc2Vzc2lvblN0YXRlLmNvbnRpbnVhdGlvblRva2VuLAoJCQlpbmJveFRva2VuOiBlLmluYm94VG9rZW4sCgkJCWtpbmQ6IGB0dXJuLWRlbGl2ZXJ5LXJlcXVlc3RgLAoJCQlyZXF1ZXN0SWQ6IG4KCQl9KSk7CgkJbGV0IGMgPSBhd2FpdCByYWNlQ2hhbm5lbFJlYWRzKGUucmVhZGVycywgZS5jYW5jZWxsYXRpb24/LnJlcXVlc3RlZCk7CgkJaWYgKGMgPT09IGBjYW5jZWxgKSByZXR1cm4gbiAhPT0gdm9pZCAwICYmIGF3YWl0IGUuY3Vyc29yLnNlbmQoewoJCQlraW5kOiBgdHVybi1kZWxpdmVyeS1jYW5jZWxsZWRgLAoJCQlyZXF1ZXN0SWQ6IG4KCQl9KSwgYGNhbmNlbGxlZGA7CgkJaWYgKGMubmV4dC5kb25lKSB0aHJvdyBFcnJvcihgVHVybiBpbmJveCBjbG9zZWQgYmVmb3JlIHJ1bnRpbWUgYWN0aW9ucyBjb21wbGV0ZWQuYCk7CgkJaWYgKGMuY2hhbm5lbCA9PT0gYG91dGNvbWVgKSB7CgkJCWxldCBuID0gYXdhaXQgaGFuZGxlV29ya2Zsb3dUb29sUnVuT3V0Y29tZSh7CgkJCQljYWxsYmFja01ldGFkYXRhVXJsOiBnZXRXb3JrZmxvd01ldGFkYXRhKCkudXJsLAoJCQkJY3Vyc29yOiBlLmN1cnNvciwKCQkJCW1lc3NhZ2U6IGMubmV4dC52YWx1ZQoJCQl9KTsKCQkJbiAhPT0gdm9pZCAwICYmIChyLnB1c2gobiksIGkuc2V0KG4uY2FsbElkLCBEYXRlLm5vdygpKSk7CgkJCWNvbnRpbnVlOwoJCX0KCQlpZiAoYy5jaGFubmVsID09PSBgcmVxdWVzdGApIHsKCQkJYXdhaXQgaGFuZGxlV29ya2Zsb3dUb29sUnVuUmVxdWVzdCh7CgkJCQljYWxsYmFja01ldGFkYXRhVXJsOiBnZXRXb3JrZmxvd01ldGFkYXRhKCkudXJsLAoJCQkJY3Vyc29yOiBlLmN1cnNvciwKCQkJCW1lc3NhZ2U6IGMubmV4dC52YWx1ZQoJCQl9KTsKCQkJY29udGludWU7CgkJfQoJCWlmIChjLmNoYW5uZWwgPT09IGByZXBvcnRgKSB7CgkJCWF3YWl0IGVtaXRXb3JrZmxvd1Rvb2xSdW5SZXBvcnRTdGVwKHsKCQkJCWZyb206IGMubmV4dC52YWx1ZS5mcm9tLAoJCQkJcGFyZW50V3JpdGFibGU6IGUuY3Vyc29yLnBhcmVudFdyaXRhYmxlLAoJCQkJdXBkYXRlOiBjLm5leHQudmFsdWUudXBkYXRlCgkJCX0pOwoJCQljb250aW51ZTsKCQl9CgkJbGV0IGwgPSBjLm5leHQudmFsdWU7CgkJaWYgKGwua2luZCA9PT0gYHJ1bnRpbWUtYWN0aW9uLXJlc3VsdGApIHsKCQkJbGV0IHQgPSBlLmN1cnNvci5zZXNzaW9uU3RhdGUuc25hcHNob3Q/LnNlc3Npb24uc3RhdGUsIG4gPSBsLnJlc3VsdHMuZmlsdGVyKChlKSA9PiBlLmtpbmQgPT09IGB0b29sLXJlc3VsdGAgPyBpc0luYm94VG9vbFJlc3VsdEZyb21SZWNvcmRlZFdvcmtmbG93VG9vbFJ1bih0LCBlKSA6IGUub3JpZ2luID09PSBgY2hpbGRgICYmIGlzSW5ib3hTdWJhZ2VudFJlc3VsdEZyb21SdW5uaW5nSGFuZGxlKHQsIGUpIHx8IGlzSW5ib3hTdWJhZ2VudFJlc3VsdEZyb21SZWNvcmRlZFdvcmtmbG93VG9vbFJ1bih0LCBlKSk7CgkJCWlmIChuLmxlbmd0aCA+IDApIHsKCQkJCWxldCBlID0gRGF0ZS5ub3coKTsKCQkJCXIucHVzaCguLi5uKTsKCQkJCWZvciAobGV0IHQgb2YgbikgaS5zZXQodC5jYWxsSWQsIGUpOwoJCQl9CgkJCWNvbnRpbnVlOwoJCX0KCQlpZiAobC5raW5kID09PSBgc3ViYWdlbnQtaW5wdXQtcmVxdWVzdGAgfHwgbC5raW5kID09PSBgc3ViYWdlbnQtYXV0aG9yaXphdGlvbi1ldmVudGApIHsKCQkJbGV0IHQgPSBmaW5kUnVubmluZ0FnZW50SGFuZGxlKGUuY3Vyc29yLnNlc3Npb25TdGF0ZS5zbmFwc2hvdD8uc2Vzc2lvbi5zdGF0ZSwgeyBjYWxsSWQ6IGwuY2FsbElkIH0pOwoJCQlpZiAodD8uaWRlbnRpdHkubmFtZSAhPT0gbC5zdWJhZ2VudE5hbWUgfHwgdC5hZGRyZXNzLnNlc3Npb25JZCAhPT0gbC5jaGlsZFNlc3Npb25JZCkgY29udGludWU7CgkJCWxldCBuID0gYXdhaXQgcnVuUHJveHlTdWJhZ2VudEV2ZW50U3RlcCh7CgkJCQlob29rUGF5bG9hZDogbCwKCQkJCXBhcmVudFdyaXRhYmxlOiBlLmN1cnNvci5wYXJlbnRXcml0YWJsZSwKCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiBlLmN1cnNvci5zZXJpYWxpemVkQ29udGV4dCwKCQkJCXNlc3Npb25TdGF0ZTogZS5jdXJzb3Iuc2Vzc2lvblN0YXRlCgkJCX0pOwoJCQlhd2FpdCBlLmN1cnNvci5hZG9wdChuKTsKCQkJY29udGludWU7CgkJfQoJCWlmIChsLmtpbmQgPT09IGBkcml2ZXItZGVsaXZlcnlgICYmIGwucmVxdWVzdElkID09PSBuKSB7CgkJCWF3YWl0IGUuY3Vyc29yLnNlbmQoewoJCQkJa2luZDogYHR1cm4tZGVsaXZlcnktYWNjZXB0ZWRgLAoJCQkJcmVxdWVzdElkOiBsLnJlcXVlc3RJZAoJCQl9KSwgbiA9IHZvaWQgMDsKCQkJbGV0IHQgPSBhd2FpdCByb3V0ZURlbGl2ZXJUb0NoaWxkcmVuKHsKCQkJCWRlbGl2ZXJ5OiBsLmRlbGl2ZXJ5LAoJCQkJcGFyZW50V3JpdGFibGU6IGUuY3Vyc29yLnBhcmVudFdyaXRhYmxlLAoJCQkJc2VyaWFsaXplZENvbnRleHQ6IGUuY3Vyc29yLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJc2Vzc2lvblN0YXRlOiBlLmN1cnNvci5zZXNzaW9uU3RhdGUKCQkJfSk7CgkJCWlmIChhd2FpdCBlLmN1cnNvci5hZG9wdCh7CgkJCQlzZXJpYWxpemVkQ29udGV4dDogdC5zZXJpYWxpemVkQ29udGV4dCA/PyBlLmN1cnNvci5zZXJpYWxpemVkQ29udGV4dCwKCQkJCXNlc3Npb25TdGF0ZTogdC5zZXNzaW9uU3RhdGUgPz8gZS5jdXJzb3Iuc2Vzc2lvblN0YXRlCgkJCX0pLCB0LmtpbmQgPT09IGBjYW5jZWwtdHVybmApIHJldHVybiB0LmtpbmQ7CgkJCXQucmVtYWluZGVyICE9PSB2b2lkIDAgJiYgZS5idWZmZXJlZERlbGl2ZXJpZXMucHVzaCh0LnJlbWFpbmRlcik7CgkJfQoJfQp9CmFzeW5jIGZ1bmN0aW9uIHJ1bkxlZ2FjeVR1cm5Xb3JrZmxvdyhlKSB7CglsZXQgdCA9IGUuc3RlcElucHV0OwoJdHJ5IHsKCQlmb3IgKDs7KSB7CgkJCWxldCBuID0gYXdhaXQgdHVyblN0ZXAodCk7CgkJCWlmIChuLmFjdGlvbiA9PT0gYGRvbmVgKSB7CgkJCQlhd2FpdCBzZW5kVHVybkNvbnRyb2xTdGVwKHsKCQkJCQljb250cm9sVG9rZW46IGUuY29tcGxldGlvblRva2VuLAoJCQkJCXBheWxvYWQ6IHsKCQkJCQkJYWN0aW9uOiB7CgkJCQkJCQlraW5kOiBgZG9uZWAsCgkJCQkJCQlvdXRwdXQ6IG4ub3V0cHV0ID8/IGBgLAoJCQkJCQkJaXNFcnJvcjogbi5pc0Vycm9yLAoJCQkJCQkJc2VyaWFsaXplZENvbnRleHQ6IG4uc2VyaWFsaXplZENvbnRleHQsCgkJCQkJCQlzZXNzaW9uU3RhdGU6IG4uc2Vzc2lvblN0YXRlLAoJCQkJCQkJdXNhZ2U6IG4udXNhZ2UsCgkJCQkJCQl1c2FnZURlbHRhOiBuLnVzYWdlRGVsdGEKCQkJCQkJfSwKCQkJCQkJa2luZDogYHR1cm4tcmVzdWx0YAoJCQkJCX0KCQkJCX0pOwoJCQkJcmV0dXJuOwoJCQl9CgkJCWlmIChuLmFjdGlvbiA9PT0gYGRpc3BhdGNoLXdvcmtmbG93LXRhc2tzYCkg",
	"ewoJCQkJYXdhaXQgc2VuZFR1cm5Db250cm9sU3RlcCh7CgkJCQkJY29udHJvbFRva2VuOiBlLmNvbXBsZXRpb25Ub2tlbiwKCQkJCQlwYXlsb2FkOiB7CgkJCQkJCWFjdGlvbjogewoJCQkJCQkJa2luZDogYGRpc3BhdGNoLXdvcmtmbG93LXRhc2tzYCwKCQkJCQkJCXBlbmRpbmdDYWxsSWRzOiBuLnBlbmRpbmdUYXNrQ2FsbElkcywKCQkJCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiBuLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJCQkJc2Vzc2lvblN0YXRlOiBuLnNlc3Npb25TdGF0ZQoJCQkJCQl9LAoJCQkJCQlraW5kOiBgdHVybi1yZXN1bHRgCgkJCQkJfQoJCQkJfSk7CgkJCQlyZXR1cm47CgkJCX0KCQkJaWYgKG4uYWN0aW9uID09PSBgcGFya2ApIHsKCQkJCWxldCB0ID0gbi5wZW5kaW5nQ29vcmRpbmF0aW9uQ2FsbElkczsKCQkJCWlmICghKHQgIT09IHZvaWQgMCB8fCBuLmhhc1BlbmRpbmdBdXRob3JpemF0aW9uIHx8IG4uaGFzUGVuZGluZ0lucHV0QmF0Y2ggJiYgZS5jYXBhYmlsaXRpZXM/LnJlcXVlc3RJbnB1dCA9PT0gITAgfHwgZS5tb2RlID09PSBgY29udmVyc2F0aW9uYCkpIHRocm93IEVycm9yKFRBU0tfTU9ERV9XQUlUX0VSUk9SX01FU1NBR0UpOwoJCQkJbGV0IHIgPSB0ID09PSB2b2lkIDAgPyB7CgkJCQkJa2luZDogYHBhcmtgLAoJCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiBuLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJCXNlc3Npb25TdGF0ZTogbi5zZXNzaW9uU3RhdGUsCgkJCQkJYXV0aG9yaXphdGlvbkF0dGVtcHRJZHM6IG4uYXV0aG9yaXphdGlvbkF0dGVtcHRJZHMsCgkJCQkJYXV0aG9yaXphdGlvbk5hbWVzOiBuLmF1dGhvcml6YXRpb25OYW1lcywKCQkJCQlzZXR0bGVkOiBuLnNldHRsZWQKCQkJCX0gOiB7CgkJCQkJa2luZDogYGRpc3BhdGNoLWNvb3JkaW5hdGlvbmAsCgkJCQkJcGVuZGluZ0NhbGxJZHM6IHQsCgkJCQkJc2VyaWFsaXplZENvbnRleHQ6IG4uc2VyaWFsaXplZENvbnRleHQsCgkJCQkJc2Vzc2lvblN0YXRlOiBuLnNlc3Npb25TdGF0ZQoJCQkJfTsKCQkJCWF3YWl0IHNlbmRUdXJuQ29udHJvbFN0ZXAoewoJCQkJCWNvbnRyb2xUb2tlbjogZS5jb21wbGV0aW9uVG9rZW4sCgkJCQkJcGF5bG9hZDogewoJCQkJCQlhY3Rpb246IHIsCgkJCQkJCWtpbmQ6IGB0dXJuLXJlc3VsdGAKCQkJCQl9CgkJCQl9KTsKCQkJCXJldHVybjsKCQkJfQoJCQl0ID0gewoJCQkJaW5wdXQ6IHZvaWQgMCwKCQkJCXBhcmVudFdyaXRhYmxlOiB0LnBhcmVudFdyaXRhYmxlLAoJCQkJc2VyaWFsaXplZENvbnRleHQ6IG4uc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IG4uc2Vzc2lvblN0YXRlCgkJCX07CgkJfQoJfSBjYXRjaCAodCkgewoJCXRocm93IGF3YWl0IHNlbmRUdXJuQ29udHJvbFN0ZXAoewoJCQljb250cm9sVG9rZW46IGUuY29tcGxldGlvblRva2VuLAoJCQlwYXlsb2FkOiB7CgkJCQllcnJvcjogbm9ybWFsaXplU2VyaWFsaXphYmxlRXJyb3IodCksCgkJCQlraW5kOiBgdHVybi1lcnJvcmAKCQkJfQoJCX0pLCB0OwoJfQp9CnR1cm5Xb3JrZmxvdy53b3JrZmxvd0lkID0gYHdvcmtmbG93Ly9ldmUvL3R1cm5Xb3JrZmxvd2A7CnR1cm5Xb3JrZmxvdy53b3JrZmxvd0lkID0gIndvcmtmbG93Ly9ldmUvL3R1cm5Xb3JrZmxvdyI7Cmdsb2JhbFRoaXMuX19wcml2YXRlX3dvcmtmbG93cy5zZXQoIndvcmtmbG93Ly9ldmUvL3R1cm5Xb3JrZmxvdyIsIHR1cm5Xb3JrZmxvdyk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3Nlc3Npb24tY29tbWFuZC10b2tlbi5qcwpjb25zdCBTRVNTSU9OX0NPTU1BTkRfTkFNRVNQQUNFID0gYGV2ZTpzZXNzaW9uYDsKZnVuY3Rpb24gc2Vzc2lvbkNvbW1hbmRIb29rVG9rZW4oZSkgewoJcmV0dXJuIGAke1NFU1NJT05fQ09NTUFORF9OQU1FU1BBQ0V9OiR7ZX06aW5ib3hgOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvc2hhcmVkL2d1YXJkcy5qcwpmdW5jdGlvbiBpc09iamVjdChlKSB7CglyZXR1cm4gdHlwZW9mIGUgPT0gYG9iamVjdGAgJiYgISFlICYmICFBcnJheS5pc0FycmF5KGUpOwp9CmZ1bmN0aW9uIGlzTm9uRW1wdHlTdHJpbmcoZSkgewoJcmV0dXJuIHR5cGVvZiBlID09IGBzdHJpbmdgICYmIGUubGVuZ3RoID4gMDsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9ldmUtd29ya2Zsb3ctYXR0cmlidXRlcy5qcwpmdW5jdGlvbiByZWFkUGFyZW50TGluZWFnZShlKSB7CglsZXQgdCA9IGVbYGV2ZS5wYXJlbnRTZXNzaW9uYF0sIG4gPSB0Py5jYWxsSWQsIHIgPSB0Py5yb290U2Vzc2lvbklkLCBpID0gdD8uc2Vzc2lvbklkLCBhID0gdD8udHVybj8uaWQ7CglyZXR1cm4gewoJCWNhbGxJZDogaXNOb25FbXB0eVN0cmluZyhuKSA/IG4gOiB2b2lkIDAsCgkJcm9vdFNlc3Npb25JZDogaXNOb25FbXB0eVN0cmluZyhyKSA/IHIgOiB2b2lkIDAsCgkJc2Vzc2lvbklkOiBpc05vbkVtcHR5U3RyaW5nKGkpID8gaSA6IHZvaWQgMCwKCQl0dXJuSWQ6IGlzTm9uRW1wdHlTdHJpbmcoYSkgPyBhIDogdm9pZCAwCgl9Owp9CmZ1bmN0aW9uIHJlYWRSb290U2Vzc2lvbklkKGUpIHsKCXJldHVybiByZWFkUGFyZW50TGluZWFnZShlKS5yb290U2Vzc2lvbklkOwp9CmZ1bmN0aW9uIHJlYWRDaGFubmVsUmVxdWVzdElkKGUpIHsKCWxldCBuID0gZVtDaGFubmVsUmVxdWVzdElkS2V5Lm5hbWVdOwoJcmV0dXJuIGlzTm9uRW1wdHlTdHJpbmcobikgPyBuIDogdm9pZCAwOwp9Cmdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL2ZpcmVUYXNrRXZlbnRDYWxsYmFja1N0ZXAiKTsKZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vZmlyZVRhc2tVcGRhdGVDYWxsYmFja1N0ZXAiKTsKdmFyIGZpcmVTZXNzaW9uQ2FsbGJhY2tTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vZmlyZVNlc3Npb25DYWxsYmFja1N0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9zdWJhZ2VudHMvcGFyZW50LW5vdGlmaWNhdGlvbi5qcwp2YXIgbm90aWZ5RGVsZWdhdGVkUGFyZW50U3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL25vdGlmeURlbGVnYXRlZFBhcmVudFN0ZXAiKTsKdmFyIG5vdGlmeVR1cm5DYWxsZXJTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vbm90aWZ5VHVybkNhbGxlclN0ZXAiKTsKdmFyIG5vdGlmeUNhbmNlbGxlZFRhc2tDYWxsZXJTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vbm90aWZ5Q2FuY2VsbGVkVGFza0NhbGxlclN0ZXAiKTsKdmFyIHJlc29sdmVJbml0aWFsVHVybkNhbGxlclN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9yZXNvbHZlSW5pdGlhbFR1cm5DYWxsZXJTdGVwIik7CnZhciBiaW5kVHVybkNhbGxlckNvbnRleHRTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vYmluZFR1cm5DYWxsZXJDb250ZXh0U3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL3NoYXJlZC9lcnJvcnMuanMKZnVuY3Rpb24gdG9FcnJvck1lc3NhZ2UodCkgewoJcmV0dXJuIHQgaW5zdGFuY2VvZiBFcnJvciA/IHQubWVzc2FnZSA6IHR5cGVvZiB0ID09IGBzdHJpbmdgID8gdCA6IHQgPT0gbnVsbCA/IFN0cmluZyh0KSA6IGlzT2JqZWN0KHQpID8gdHlwZW9mIHQubWVzc2FnZSA9PSBgc3RyaW5nYCAmJiB0Lm1lc3NhZ2UubGVuZ3RoID4gMCA/IHQubWVzc2FnZSA6IHNhZmVKc29uU3RyaW5naWZ5KHQpIDogU3RyaW5nKHQpOwp9CmZ1bmN0aW9uIHNhZmVKc29uU3RyaW5naWZ5KGUpIHsKCXRyeSB7CgkJcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpID8/IFN0cmluZyhlKTsKCX0gY2F0Y2ggewoJCXJldHVybiBTdHJpbmcoZSk7Cgl9Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9zdWJhZ2VudHMvYWRhcHRlci1zdGF0ZS5qcwpjb25zdCBTVUJBR0VOVF9BREFQVEVSX0tJTkQgPSBgc3ViYWdlbnRgOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL3N1YmFnZW50cy9wYXJlbnQtcmVzdWx0LmpzCmNvbnN0IFpFUk9fVE9LRU5fVVNBR0UgPSB7CgljYWNoZVJlYWRUb2tlbnM6IDAsCgljYWNoZVdyaXRlVG9rZW5zOiAwLAoJaW5wdXRUb2tlbnM6IDAsCglvdXRwdXRUb2tlbnM6IDAKfTsKZnVuY3Rpb24gY3JlYXRlRGVsZWdhdGVkU3ViYWdlbnRTdWNjZXNzUmVzdWx0KGUsIG4pIHsKCWxldCBpID0gZVtDSEFOTkVMX0NPTlRFWFRfS0VZX05BTUVdOwoJaWYgKGk/LmtpbmQgPT09IFNVQkFHRU5UX0FEQVBURVJfS0lORCkgcmV0dXJuIHsKCQljYWxsSWQ6IFN0cmluZyhpLnN0YXRlPy5jYWxsSWQgPz8gYGApLAoJCWtpbmQ6IGBzdWJhZ2VudC1yZXN1bHRgLAoJCW9yaWdpbjogYGNoaWxkYCwKCQlvdXRjb21lOiB7CgkJCWtpbmQ6IGB0ZXJtaW5hbGAsCgkJCXJlc3VsdDogewoJCQkJa2luZDogYHN1Y2NlZWRlZGAsCgkJCQlvdXRwdXQ6IG4KCQkJfSwKCQkJdXNhZ2VEZWx0YTogWkVST19UT0tFTl9VU0FHRQoJCX0sCgkJb3V0cHV0OiBuLAoJCXN1YmFnZW50TmFtZTogU3RyaW5nKGkuc3RhdGU/LnN1YmFnZW50TmFtZSA/PyBgYCkKCX07Cn0KZnVuY3Rpb24gY3JlYXRlRGVsZWdhdGVkU3ViYWdlbnRFcnJvclJlc3VsdCh0LCByKSB7CglsZXQgaSA9IGNyZWF0ZURlbGVnYXRlZFN1YmFnZW50U3VjY2Vzc1Jlc3VsdCh0LCBgYCk7CglpZiAoaSA9PT0gdm9pZCAwKSByZXR1cm47CglsZXQgYSA9IHsKCQljb2RlOiBTVUJBR0VOVF9FWEVDVVRJT05fRkFJTEVELAoJCW1lc3NhZ2U6IHRvRXJyb3JNZXNzYWdlKHIpCgl9OwoJcmV0dXJuIHsKCQkuLi5pLAoJCWlzRXJyb3I6ICEwLAoJCW91dGNvbWU6IHsKCQkJa2luZDogYHRlcm1pbmFsYCwKCQkJcmVzdWx0OiB7CgkJCQllcnJvcjogYSwKCQkJCWtpbmQ6IGBmYWlsZWRgCgkJCX0sCgkJCXVzYWdlRGVsdGE6IFpFUk9fVE9LRU5fVVNBR0UKCQl9LAoJCW91dHB1dDogYQoJfTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90ZXJtaW5hdGUtY2hpbGQtc2Vzc2lvbnMtc3RlcC5qcwp2YXIgdGVybWluYXRlQ2hpbGRTZXNzaW9uc1N0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy90ZXJtaW5hdGVDaGlsZFNlc3Npb25zU3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9yZXBvcnQtZHJvcHBlZC13aXJlLXBheWxvYWQtc3RlcC5qcwp2YXIgcmVwb3J0RHJvcHBlZFdpcmVQYXlsb2FkU3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL3JlcG9ydERyb3BwZWRXaXJlUGF5bG9hZFN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vd2lyZS9zZXNzaW9uLWluYm94LWNvbnRyYWN0LmpzCmNvbnN0IFNFU1NJT05fSU5CT1hfV0lSRV9WRVJTSU9OUyA9IFsKCTEsCgkyLAoJMywKCTQsCgk1LAoJNgpdOwpjb25zdCBTRVNTSU9OX0lOQk9YX1dJUkVfVkVSU0lPTiA9IFNFU1NJT05fSU5CT1hfV0lSRV9WRVJTSU9OU1tTRVNTSU9OX0lOQk9YX1dJUkVfVkVSU0lPTlMubGVuZ3RoIC0gMV07CmNvbnN0IFNFU1NJT05fSU5CT1hfV0lSRV9WRVJTSU9OX01FVEFEQVRBX0tFWSA9IGBzZXNzaW9uSW5ib3hXaXJlVmVyc2lvbmA7CnZhciBTZXNzaW9uSW5ib3hXaXJlRXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHsKCWNvbnN0cnVjdG9yKGUpIHsKCQlzdXBlcihlKSwgdGhpcy5uYW1lID0gYFNlc3Npb25JbmJveFdpcmVFcnJvcmA7Cgl9Cn07Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3dpcmUvc2Vzc2lvbi1pbmJveC13aXJlLnYwLmpzCmZ1bmN0aW9uIG1pZ3JhdGVTZXNzaW9uSW5ib3hXaXJlVjAodCkgewoJbGV0IG4gPSB0OwoJaWYgKG4ua2luZCA9PT0gYHNlbmRgKSByZXR1cm4gbWlncmF0ZUxlZ2FjeVNlbmQobik7CglpZiAobi5raW5kID09PSBgZGVsaXZlcmAgJiYgIShBcnJheS5pc0FycmF5KG4ucGF5bG9hZHMpICYmIG4ucGF5bG9hZHMuZXZlcnkoaXNPYmplY3QpKSkgdGhyb3cgRXJyb3IoYGxlZ2FjeSBkZWxpdmVyIHBheWxvYWQgaGFzIG5vIG9iamVjdC1hcnJheSBwYXlsb2FkcyBmaWVsZC5gKTsKCXJldHVybiB7CgkJLi4ubiwKCQl2ZXJzaW9uOiAxCgl9Owp9CmZ1bmN0aW9uIG1pZ3JhdGVMZWdhY3lTZW5kKHQpIHsKCWlmICghaXNPYmplY3QodC5wYXlsb2FkKSkgdGhyb3cgRXJyb3IoYGxlZ2FjeSBzZW5kIGNvbW1hbmQgaGFzIG5vIG9iamVjdCBwYXlsb2FkIGZpZWxkLmApOwoJaWYgKHQuZGVsaXZlcnkgIT09IHZvaWQgMCAmJiAhaXNPYmplY3QodC5kZWxpdmVyeSkpIHRocm93IEVycm9yKGBsZWdhY3kgc2VuZCBjb21tYW5kIGhhcyBhIG5vbi1vYmplY3QgZGVsaXZlcnkgZmllbGQuYCk7CglyZXR1cm4gewoJCWF1dGg6IHQuYXV0aCwKCQljYWxsZXI6IHQuY2FsbGVyLAoJCWRlbGl2ZXJ5TWV0YWRhdGE6IHQuZGVsaXZlcnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IFt7CgkJCS4uLnQuZGVsaXZlcnksCgkJCXBheWxvYWRJbmRleDogMAoJCX1dLAoJCWtpbmQ6IGBkZWxpdmVyYCwKCQlwYXlsb2FkOiB0LnBheWxvYWQsCgkJcGF5bG9hZHM6IFt0LnBheWxvYWRdLAoJCXJlcXVlc3RJZDogdC5yZXF1ZXN0SWQsCgkJdGFza0RlbGl2ZXJ5SWQ6IHQudGFza0RlbGl2ZXJ5SWQsCgkJdHVyblBvbGljeTogdC50dXJuUG9saWN5LAoJCXZlcnNpb246IDEKCX07Cn0KY29uc3Qgc2Vzc2lvbkluYm94V2lyZVYwTWlncmF0aW9uID0gewoJZnJvbTogMCwKCW1pZ3JhdGU6IG1pZ3JhdGVTZXNzaW9uSW5ib3hXaXJlVjAsCgl0bzogMQp9OwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi93aXJlL3Nlc3Npb24taW5ib3gtd2lyZS52Mi1taWdyYXRpb24uanMKZnVuY3Rpb24gbm9ybWFsaXplU2Vzc2lvbkluYm94V2lyZVYyKGUsIHQgPSAhMSkgewoJcmV0dXJuIGUgPT09IHZvaWQgMCA/IHQgPyBudWxsIDogdm9pZCAwIDogQXJyYXkuaXNBcnJheShlKSA/IGUubWFwKChlKSA9PiBub3JtYWxpemVTZXNzaW9uSW5ib3hXaXJlVjIoZSwgITApKSA6IGlzUGxhaW5SZWNvcmQkMShlKSA/IE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhlKS5maWx0ZXIoKGUpID0+IGVbMV0gIT09IHZvaWQgMCkubWFwKChbZSwgdF0pID0+IFtlLCBub3JtYWxpemVTZXNzaW9uSW5ib3hXaXJlVjIodCldKSkgOiBlOwp9CmZ1bmN0aW9uIGlzUGxhaW5SZWNvcmQkMSh0KSB7CglpZiAoIWlzT2JqZWN0KHQpKSByZXR1cm4gITE7CglsZXQgbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KTsKCXJldHVybiBuID09PSBudWxsIHx8IG4gPT09IE9iamVjdC5wcm90b3R5cGUgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pID09PSBudWxsOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3dpcmUvc2Vzc2lvbi1pbmJveC13aXJlLnYyLm1pZ3JhdGlvbi5qcwpjb25zdCBzZXNzaW9uSW5ib3hXaXJlVjFNaWdyYXRpb24gPSB7Cglmcm9tOiAxLAoJbWlncmF0ZShlKSB7CgkJbGV0IHQgPSBlLCBuID0gewoJCQkuLi50LAoJCQl2ZXJzaW9uOiAyCgkJfTsKCQlyZXR1cm4gdC5raW5kID09PSBgZGVsaXZlcmAgJiYgIShgcGF5bG9hZGAgaW4gdCkgJiYgKG4ucGF5bG9hZCA9IHt9KSwgbjsKCX0sCgl0bzogMgp9OwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi93aXJlL3Nlc3Npb24taW5ib3gtd2lyZS52My5taWdyYXRpb24uanMKY29uc3Qgc2Vzc2lvbkluYm94V2lyZVYyTWlncmF0aW9uID0gewoJZnJvbTogMiwKCW1pZ3JhdGUoZSkgewoJCXJldHVybiB7CgkJCS4uLmUsCgkJCXZlcnNpb246IDMKCQl9OwoJfSwKCXRvOiAzCn07Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3dpcmUvc2Vzc2lvbi1pbmJveC13aXJlLnY0Lm1pZ3JhdGlvbi5qcwpjb25zdCBzZXNzaW9uSW5ib3hXaXJlVjNNaWdyYXRpb24gPSB7Cglmcm9tOiAzLAoJbWlncmF0ZSh0KSB7CgkJaWYgKCFpc09iamVjdCh0KSkgdGhyb3cgRXJyb3IoYHNlc3Npb24gaW5ib3ggd2lyZSB2MyB2YWx1ZSBpcyBub3QgYW4gb2JqZWN0LmApOwoJCXJldHVybiB0LmtpbmQgPT09IGBkZWxpdmVyYCA/IHsKCQkJLi4udCwKCQkJcGF5bG9hZDogbWlncmF0ZVBheWxvYWQodC5wYXlsb2FkKSwKCQkJcGF5bG9hZHM6IEFycmF5LmlzQXJyYXkodC5wYXlsb2FkcykgPyB0LnBheWxvYWRzLm1hcChtaWdyYXRlUGF5bG9hZCkgOiB0LnBheWxvYWRzLAoJCQl2ZXJzaW9uOiA0CgkJfSA6IHsKCQkJLi4udCwKCQkJdmVyc2lvbjogNAoJCX07Cgl9LAoJdG86IDQKfTsKZnVuY3Rpb24gbWlncmF0ZVBheWxvYWQodCkgewoJaWYgKCFpc09iamVjdCh0KSB8fCAhaXNPYmplY3QodC50YXNrKSkgcmV0dXJuIHQ7CglsZXQgbiA9IHQudGFzazsKCXJldHVybiB7CgkJLi4udCwKCQl0YXNrOiB7CgkJCWFnZW50UmVxdWVzdHM6IG4uYWdlbnRSZXF1ZXN0cywKCQkJYXV0aG9yaXphdGlvbkV2ZW50czogbi5hdXRob3JpemF0aW9uRXZlbnRzLAoJCQlpbnB1dFJlcXVlc3RzOiBtaWdyYXRlSW5wdXRSZXF1ZXN0cyhuLmlucHV0UmVxdWVzdHMpLAoJCQl2aWV3czogQXJyYXkuaXNBcnJheShuLnZpZXdzKSA/IG4udmlld3MubWFwKG1pZ3JhdGVUYXNrVmlldykgOiBuLnZpZXdzCgkJfQoJfTsKfQpmdW5jdGlvbiBtaWdyYXRlSW5wdXRSZXF1ZXN0cyh0KSB7CglpZiAoQXJyYXkuaXNBcnJheSh0KSkgcmV0dXJuIHQuZmxhdE1hcCgodCkgPT4gewoJCWlmICghaXNPYmplY3QodCkpIHJldHVybiBbXTsKCQlpZiAoYHJlcXVlc3RgIGluIHQgfHwgYHJlcXVlc3RzYCBpbiB0KSByZXR1cm4gW3RdOwoJCWlmICghaXNPYmplY3QodC5ob29rUGF5bG9hZCkgfHwgdHlwZW9mIHQudGFza0lkICE9IGBzdHJpbmdgKSByZXR1cm4gW107CgkJbGV0IG4gPSB0Lmhvb2tQYXlsb2FkLCByID0gbi5ldmVudDsKCQlyZXR1cm4gdHlwZW9mIG4uY2hpbGRDb250aW51YXRpb25Ub2tlbiAhPSBgc3RyaW5nYCB8fCAhaXNPYmplY3QocikgfHwgIUFycmF5LmlzQXJyYXkoci5yZXF1ZXN0cykgfHwgdHlwZW9mIHIuc2VxdWVuY2UgIT0gYG51bWJlcmAgfHwgdHlwZW9mIHIuc3RlcEluZGV4ICE9IGBudW1iZXJgIHx8IHR5cGVvZiByLnR1cm5JZCAhPSBgc3RyaW5nYCA/IFtdIDogci5yZXF1ZXN0cy5tYXAoKGUpID0+ICh7CgkJCS4uLnQsCgkJCXJlcGx5VG86IG4uY2hpbGRDb250aW51YXRpb25Ub2tlbiwKCQkJcmVxdWVzdDogZSwKCQkJc2VxdWVuY2U6IHIuc2VxdWVuY2UsCgkJCXN0ZXBJbmRleDogci5zdGVwSW5kZXgsCgkJCXRhc2tJZDogdC50YXNrSWQsCgkJCXR1cm5JZDogci50dXJuSWQKCQl9KSk7Cgl9KTsKfQpmdW5jdGlvbiBtaWdyYXRlVGFza1ZpZXcodCkgewoJcmV0dXJuICFpc09iamVjdCh0KSB8fCAhaXNPYmplY3QodC5leGVjdXRvcikgPyB0IDogewoJCS4uLnQsCgkJZXhlY3V0b3I6IHQuZXhlY3V0b3IuYmluZGluZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogeyBiaW5kaW5nOiB0LmV4ZWN1dG9yLmJpbmRpbmcgfQoJfTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi93aXJlL3Nlc3Npb24taW5ib3gtd2lyZS52NS5taWdyYXRpb24uanMKY29uc3Qgc2Vzc2lvbkluYm94V2lyZVY0TWlncmF0aW9uID0gewoJZnJvbTogNCwKCW1pZ3JhdGUoZSkgewoJCWlmICghaXNPYmplY3QoZSkpIHRocm93IEVycm9yKGBzZXNzaW9uIGluYm94IHdpcmUgdjQgdmFsdWUgaXMgbm90IGFuIG9iamVjdC5gKTsKCQlyZXR1cm4gewoJCQkuLi5lLAoJCQl2ZXJzaW9uOiA1CgkJfTsKCX0sCgl0bzogNQp9OwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi93aXJlL3Nlc3Npb24taW5ib3gtd2lyZS5qcwpjb25zdCBXSVJFX0xBQkVMID0gYHNlc3Npb24gaW5ib3ggcGF5bG9hZGA7CmNvbnN0IHNlc3Npb25JbmJveE1pZ3JhdGlvbnMgPSBbCglzZXNzaW9uSW5ib3hXaXJlVjBNaWdyYXRpb24sCglzZXNzaW9uSW5ib3hXaXJlVjFNaWdyYXRpb24sCglzZXNzaW9uSW5ib3hXaXJlVjJNaWdyYXRpb24sCglzZXNzaW9uSW5ib3hXaXJlVjNNaWdyYXRpb24sCglzZXNzaW9uSW5ib3hXaXJlVjRNaWdyYXRpb24sCgl7CgkJZnJvbTogNSwKCQltaWdyYXRlKHQpIHsKCQkJaWYgKCFpc09iamVjdCh0KSkgdGhyb3cgRXJyb3IoYHNlc3Npb24gaW5ib3ggd2lyZSB2NSB2YWx1ZSBpcyBub3QgYW4gb2JqZWN0LmApOwoJCQlyZXR1cm4gewoJCQkJLi4udCwKCQkJCXZlcnNpb246IDYKCQkJfTsKCQl9LAoJCXRvOiA2Cgl9Cl07CmZ1bmN0aW9uIGRlY29kZShlKSB7CglsZXQgbiA9IHR5cGVvZiBlID09IGBvYmplY3RgICYmIGUgJiYgYHZlcnNpb25gIGluIGUgPyBlLnZlcnNpb24gOiB2b2lkIDA7CglpZiAodHlwZW9mIGUgPT0gYG9iamVjdGAgJiYgZSAmJiBgdmVyc2lvbmAgaW4gZSAmJiB0eXBlb2YgbiAhPSBgbnVtYmVyYCkgdGhyb3cgbmV3IFNlc3Npb25JbmJveFdpcmVFcnJvcihgJHtXSVJFX0xBQkVMfTogdmFsdWUgaGFzIG5vIG51bWVyaWMgInZlcnNpb24iIGZpZWxkLmApOwoJbGV0IHIgPSBub3JtYWxpemVTZXNzaW9uSW5ib3hXaXJlVjIoZSk7CglpZiAoKG4gPT09IDEgfHwgbiA9PT0gMiB8fCBuID09PSAzKSAmJiBjb250YWluc0N1cnJlbnRUYXNrTWVzc2FnZXMocikpIHRocm93IG5ldyBTZXNzaW9uSW5ib3hXaXJlRXJyb3IoYCR7V0lSRV9MQUJFTH0gZG9lcyBub3QgbWF0Y2ggd2lyZSB2ZXJzaW9uICR7bn0uYCk7CglsZXQgaTsKCXRyeSB7CgkJaSA9IHJ1bk1pZ3JhdGlvbkNoYWluKHsKCQkJaW5pdGlhbFZlcnNpb246IDAsCgkJCWxhYmVsOiBXSVJFX0xBQkVMLAoJCQltaWdyYXRpb25zOiBzZXNzaW9uSW5ib3hNaWdyYXRpb25zLAoJCQl0YXJnZXRWZXJzaW9uOiBTRVNTSU9OX0lOQk9YX1dJUkVfVkVSU0lPTiwKCQkJdmFsdWU6IHIKCQl9KTsKCX0gY2F0Y2ggKGUpIHsKCQl0aHJvdyBuZXcgU2Vzc2lvbkluYm94V2lyZUVycm9yKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IFN0cmluZyhlKSk7Cgl9CglsZXQgYSA9IG5vcm1hbGl6ZVNlc3Npb25JbmJveFdpcmVWMihpKTsKCWlmIChhLnZlcnNpb24gIT09IFNFU1NJT05fSU5CT1hfV0lSRV9WRVJTSU9OKSB0aHJvdyBuZXcgU2Vzc2lvbkluYm94V2lyZUVycm9yKGAke1dJUkVfTEFCRUx9IGRlY2xhcmVzIHZlcnNpb24gJHtKU09OLnN0cmluZ2lmeShhLnZlcnNpb24pfSwgZXhwZWN0ZWQgJHtTRVNTSU9OX0lOQk9YX1dJUkVfVkVSU0lPTn0uYCk7CglpZiAodHlwZW9mIG4gPT0gYG51bWJlcmAgJiYgbiA+PSAyICYmIGEua2luZCA9PT0gYGRlbGl2ZXJgICYmICEoYHBheWxvYWRgIGluIGEpKSB0aHJvdyBuZXcgU2Vzc2lvbkluYm94V2lyZUVycm9yKGAke1dJUkVfTEFCRUx9IGRvZXMgbm90IG1hdGNoIHdpcmUgdmVyc2lvbiAke259LmApOwoJcmV0dXJuIG5vcm1hbGl6ZVdpcmUoYSk7Cn0KY29uc3Qgc2Vzc2lvbkluYm94V2lyZSA9IHsgZGVjb2RlIH07CmZ1bmN0aW9uIGNvbnRhaW5zQ3VycmVudFRhc2tNZXNzYWdlcyh0KSB7CglyZXR1cm4gIWlzT2JqZWN0KHQpIHx8IHQua2luZCAhPT0gYGRlbGl2ZXJgID8gITEgOiAoQXJyYXkuaXNBcnJheSh0LnBheWxvYWRzKSA/IHQucGF5bG9hZHMgOiBbXSkuc29tZSgodCkgPT4gewoJCWlmICghaXNPYmplY3QodCkgfHwgIWlzT2JqZWN0KHQudGFzaykpIHJldHVybiAhMTsKCQlpZiAoT2JqZWN0Lmhhc093bih0LnRhc2ssIGBhZ2VudFJlcXVlc3RzYCkpIHJldHVybiAhMDsKCQlsZXQgbiA9IHQudGFzay5pbnB1dFJlcXVlc3RzOwoJCXJldHVybiBBcnJheS5pc0FycmF5KG4pICYmIG4uc29tZSgodCkgPT4gaXNPYmplY3QodCkgJiYgKGByZXF1ZXN0YCBpbiB0IHx8IGByZXF1ZXN0c2AgaW4gdCkpOwoJfSk7Cn0KZnVuY3Rpb24gbm9ybWFsaXplV2lyZShlKSB7Cglzd2l0Y2ggKGUua2luZCkgewoJCWNhc2UgYGRlbGl2ZXJgOiByZXR1cm4gewoJCQlhdXRoOiBlLmF1dGgsCgkJCWNhbGxlcjogZS5jYWxsZXIsCgkJCWRlbGl2ZXJ5TWV0YWRhdGE6IGUu",
	"ZGVsaXZlcnlNZXRhZGF0YSwKCQkJa2luZDogYGRlbGl2ZXJgLAoJCQlwYXlsb2FkczogZS5wYXlsb2FkcywKCQkJcmVxdWVzdElkOiBlLnJlcXVlc3RJZCwKCQkJdGFza0RlbGl2ZXJ5SWQ6IGUudGFza0RlbGl2ZXJ5SWQsCgkJCXR1cm5Qb2xpY3k6IGUudHVyblBvbGljeQoJCX07CgkJY2FzZSBgc2Vzc2lvbi10aW1lb3V0YDogcmV0dXJuIHsga2luZDogYHNlc3Npb24tdGltZW91dGAgfTsKCQljYXNlIGBjbGVhcmA6IHJldHVybiB7IGtpbmQ6IGBjbGVhcmAgfTsKCQljYXNlIGBjb21wYWN0YDogcmV0dXJuIHsga2luZDogYGNvbXBhY3RgIH07CgkJY2FzZSBgcmVzZXRgOiByZXR1cm4gewoJCQlraW5kOiBgcmVzZXRgLAoJCQlyZWFzb246IGUucmVhc29uCgkJfTsKCQljYXNlIGBjYW5jZWxgOiByZXR1cm4gewoJCQlraW5kOiBgY2FuY2VsYCwKCQkJdGFza0lkOiBlLnRhc2tJZCwKCQkJdGFza3M6IGUudGFza3MsCgkJCXR1cm5JZDogZS50dXJuSWQKCQl9OwoJCWRlZmF1bHQ6IHRocm93IG5ldyBTZXNzaW9uSW5ib3hXaXJlRXJyb3IoYCR7V0lSRV9MQUJFTH0gaGFzIGFuIHVucmVjb2duaXplZCBraW5kICR7SlNPTi5zdHJpbmdpZnkoZS5raW5kKX0uYCk7Cgl9Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vcGFya2VkLWRlbGl2ZXJ5LXdhaXQuanMKYXN5bmMgZnVuY3Rpb24gbmV4dFR1cm5EZWxpdmVyeShlKSB7CglpZiAoZS5hd2FpdEF1dGhvcml6YXRpb25DYWxsYmFja3MgIT09ICEwKSByZXR1cm4gYXdhaXQgYXdhaXROZXh0VHVybkRlbGl2ZXJ5KGUpOwoJZS5jb21tYW5kSW5ib3guc2V0QXV0aG9yaXphdGlvbldpbmRvdyghMCk7Cgl0cnkgewoJCXJldHVybiBhd2FpdCBhd2FpdE5leHRUdXJuRGVsaXZlcnkoZSk7Cgl9IGZpbmFsbHkgewoJCWUuY29tbWFuZEluYm94LnNldEF1dGhvcml6YXRpb25XaW5kb3coITEpOwoJfQp9CmFzeW5jIGZ1bmN0aW9uIGF3YWl0TmV4dFR1cm5EZWxpdmVyeShlKSB7CglsZXQgdCA9IGUuY2FuY2VsbGVkVGFza0lkcyA/PyBuZXcgU2V0KCksIG4gPSBlLnNlZW5UYXNrRGVsaXZlcmllcyA/PyBuZXcgU2V0KCk7Cglmb3IgKDs7KSB7CgkJbGV0IHIgPSBhd2FpdCB3YWl0Rm9yTmV4dFNlc3Npb25BY3Rpb24oewoJCQlidWZmZXJlZERlbGl2ZXJpZXM6IGUuYnVmZmVyZWREZWxpdmVyaWVzLAoJCQlidWZmZXJlZFNlc3Npb25Db250cm9sczogZS5idWZmZXJlZFNlc3Npb25Db250cm9scywKCQkJY2FuY2VsbGVkVGFza0lkczogdCwKCQkJY29tbWFuZEluYm94OiBlLmNvbW1hbmRJbmJveCwKCQkJZGVmZXJEZWxpdmVyaWVzOiBlLmRlZmVyRGVsaXZlcmllcywKCQkJc2VlblRhc2tEZWxpdmVyaWVzOiBuLAoJCQlzdGF0ZUN1cnNvcjogZS5zdGF0ZUN1cnNvcgoJCX0pOwoJCWlmIChyLmtpbmQgPT09IGBhdXRob3JpemF0aW9uYCkgcmV0dXJuIHI7CgkJaWYgKHIua2luZCAhPT0gYGRlbGl2ZXJ5YCkgcmV0dXJuIHsga2luZDogci5raW5kIH07CgkJbGV0IGkgPSByLmRlbGl2ZXJ5OwoJCWlmIChpID09PSBudWxsKSByZXR1cm4geyBraW5kOiBgY2xvc2VkYCB9OwoJCWxldCBvID0gYXdhaXQgcm91dGVEZWxpdmVyVG9DaGlsZHJlbih7CgkJCWRlbGl2ZXJ5OiBpLAoJCQlwYXJlbnRXcml0YWJsZTogZS5kcml2ZXJXcml0YWJsZSwKCQkJc2VyaWFsaXplZENvbnRleHQ6IGUuc3RhdGVDdXJzb3Iuc2VyaWFsaXplZENvbnRleHQsCgkJCXNlc3Npb25TdGF0ZTogZS5zdGF0ZUN1cnNvci5zZXNzaW9uU3RhdGUKCQl9KTsKCQlpZiAoZS5zdGF0ZUN1cnNvci5hZG9wdFN0YXRlKG8pLCBvLmtpbmQgPT09IGBjYW5jZWwtdHVybmApIHJldHVybiB7IGtpbmQ6IGBjYW5jZWwtdHVybmAgfTsKCQlpZiAoby5yZW1haW5kZXIgIT09IHZvaWQgMCkgcmV0dXJuIHsKCQkJZGVsaXZlcnk6IG8ucmVtYWluZGVyLAoJCQlraW5kOiBgdHVybmAKCQl9OwoJfQp9CmFzeW5jIGZ1bmN0aW9uIHdhaXRGb3JOZXh0U2Vzc2lvbkFjdGlvbihlKSB7CglsZXQgYSA9IGUuYnVmZmVyZWRTZXNzaW9uQ29udHJvbHMuc2hpZnQoKTsKCWlmIChhICE9PSB2b2lkIDApIHJldHVybiB7IGtpbmQ6IGEgfTsKCWZvciAoOyBlLmJ1ZmZlcmVkRGVsaXZlcmllc1swXSAhPT0gdm9pZCAwICYmIGlzQ2FuY2VsbGVkVGFza0RlbGl2ZXJ5KGUuYnVmZmVyZWREZWxpdmVyaWVzWzBdLCBlLmNhbmNlbGxlZFRhc2tJZHMpOykgZS5idWZmZXJlZERlbGl2ZXJpZXMuc2hpZnQoKTsKCWlmIChlLmRlZmVyRGVsaXZlcmllcyAhPT0gITAgJiYgIWUuY29tbWFuZEluYm94Lmhhc1JlYWR5QXV0aG9yaXphdGlvbigpICYmIGUuYnVmZmVyZWREZWxpdmVyaWVzLmxlbmd0aCA+IDApIHJldHVybiB7CgkJZGVsaXZlcnk6IHRha2VCdWZmZXJlZFR1cm5EZWxpdmVyeShlLmJ1ZmZlcmVkRGVsaXZlcmllcyksCgkJa2luZDogYGRlbGl2ZXJ5YAoJfTsKCWZvciAoOzspIHsKCQlsZXQgeyByZXN1bHQ6IGEsIHNvdXJjZTogbyB9ID0gYXdhaXQgZS5jb21tYW5kSW5ib3gubmV4dFdpdGhTb3VyY2UoKTsKCQlpZiAoZS5jb21tYW5kSW5ib3guY29uc3VtZU5leHQoKSwgbyA9PT0gYGF1dGhvcml6YXRpb25gKSByZXR1cm4gYS5kb25lID8gewoJCQljbG9zZWQ6ICEwLAoJCQlraW5kOiBgYXV0aG9yaXphdGlvbmAsCgkJCXBheWxvYWRzOiBbXQoJCX0gOiB7CgkJCWNsb3NlZDogITEsCgkJCWtpbmQ6IGBhdXRob3JpemF0aW9uYCwKCQkJcGF5bG9hZHM6IGEudmFsdWUua2luZCA9PT0gYGRlbGl2ZXJgID8gYS52YWx1ZS5wYXlsb2FkcyA6IFtdCgkJfTsKCQlpZiAoYS5kb25lKSByZXR1cm4gewoJCQlkZWxpdmVyeTogbnVsbCwKCQkJa2luZDogYGRlbGl2ZXJ5YAoJCX07CgkJaWYgKGEudmFsdWUua2luZCA9PT0gYHJ1bnRpbWUtYWN0aW9uLXJlc3VsdGApIGNvbnRpbnVlOwoJCWxldCBzOwoJCXRyeSB7CgkJCXMgPSBzZXNzaW9uSW5ib3hXaXJlLmRlY29kZShhLnZhbHVlKTsKCQl9IGNhdGNoIChlKSB7CgkJCWlmICghKGUgaW5zdGFuY2VvZiBTZXNzaW9uSW5ib3hXaXJlRXJyb3IpKSB0aHJvdyBlOwoJCQlhd2FpdCByZXBvcnREcm9wcGVkV2lyZVBheWxvYWRTdGVwKHsKCQkJCWRldGFpbDogZS5tZXNzYWdlLAoJCQkJZmFtaWx5OiBgc2Vzc2lvbi1pbmJveGAKCQkJfSk7CgkJCWNvbnRpbnVlOwoJCX0KCQlpZiAocy5raW5kID09PSBgc2Vzc2lvbi10aW1lb3V0YCkgcmV0dXJuIHsga2luZDogYGV4cGlyZWRgIH07CgkJaWYgKHMua2luZCA9PT0gYGNsZWFyYCB8fCBzLmtpbmQgPT09IGBjb21wYWN0YCB8fCBzLmtpbmQgPT09IGByZXNldGApIHJldHVybiB7IGtpbmQ6IHMua2luZCB9OwoJCWlmIChzLmtpbmQgPT09IGBjYW5jZWxgKSB7CgkJCWlmIChgdGFza3NgIGluIHMgJiYgcy50YXNrcyA9PT0gITAgJiYgYXdhaXQgY2FuY2VsQWxsSW5kZXhlZFNlc3Npb25UYXNrc1N0ZXAoewoJCQkJc2VyaWFsaXplZENvbnRleHQ6IGUuc3RhdGVDdXJzb3Iuc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IGUuc3RhdGVDdXJzb3Iuc2Vzc2lvblN0YXRlCgkJCX0pLCBzLnRhc2tJZCAhPT0gdm9pZCAwKSB7CgkJCQllLmNhbmNlbGxlZFRhc2tJZHMuYWRkKHMudGFza0lkKTsKCQkJCWxldCB0ID0gZS5idWZmZXJlZERlbGl2ZXJpZXMuZmlsdGVyKCh0KSA9PiAhaXNDYW5jZWxsZWRUYXNrRGVsaXZlcnkodCwgZS5jYW5jZWxsZWRUYXNrSWRzKSk7CgkJCQllLmJ1ZmZlcmVkRGVsaXZlcmllcy5zcGxpY2UoMCwgZS5idWZmZXJlZERlbGl2ZXJpZXMubGVuZ3RoLCAuLi50KTsKCQkJfQoJCQljb250aW51ZTsKCQl9CgkJbGV0IGMgPSBzLnRhc2tEZWxpdmVyeUlkID8/IHMuY2FsbGVyPy50YXNrSWQ7CgkJaWYgKCEoYyAhPT0gdm9pZCAwICYmIGlzQ2FuY2VsbGVkVGFza0RlbGl2ZXJ5SWQoYywgZS5jYW5jZWxsZWRUYXNrSWRzKSkpIHsKCQkJaWYgKGMgIT09IHZvaWQgMCkgewoJCQkJaWYgKGUuc2VlblRhc2tEZWxpdmVyaWVzLmhhcyhjKSkgY29udGludWU7CgkJCQllLnNlZW5UYXNrRGVsaXZlcmllcy5hZGQoYyk7CgkJCX0KCQkJaWYgKGUuZGVmZXJEZWxpdmVyaWVzID09PSAhMCkgewoJCQkJZS5idWZmZXJlZERlbGl2ZXJpZXMucHVzaChzKTsKCQkJCWNvbnRpbnVlOwoJCQl9CgkJCXJldHVybiB7CgkJCQlkZWxpdmVyeTogcywKCQkJCWtpbmQ6IGBkZWxpdmVyeWAKCQkJfTsKCQl9Cgl9Cn0KZnVuY3Rpb24gaXNDYW5jZWxsZWRUYXNrRGVsaXZlcnkoZSwgdCkgewoJbGV0IG4gPSBlLnRhc2tEZWxpdmVyeUlkID8/IGUuY2FsbGVyPy50YXNrSWQ7CglyZXR1cm4gbiAhPT0gdm9pZCAwICYmIGlzQ2FuY2VsbGVkVGFza0RlbGl2ZXJ5SWQobiwgdCk7Cn0KZnVuY3Rpb24gaXNDYW5jZWxsZWRUYXNrRGVsaXZlcnlJZChlLCB0KSB7CglyZXR1cm4gWy4uLnRdLnNvbWUoKHQpID0+IGUgPT09IHQgfHwgZS5zdGFydHNXaXRoKGAke3R9OmApKTsKfQpmdW5jdGlvbiB0YWtlQnVmZmVyZWRUdXJuRGVsaXZlcnkodCkgewoJbGV0IG4gPSB0LnNoaWZ0KCk7CglpZiAobiA9PT0gdm9pZCAwKSB0aHJvdyBFcnJvcihgQ2Fubm90IHRha2UgYSB0dXJuIGRlbGl2ZXJ5IGZyb20gYW4gZW1wdHkgYnVmZmVyLmApOwoJbGV0IHIgPSBbbl0sIGkgPSBuLmNhbGxlcjsKCWZvciAoOyB0Lmxlbmd0aCA+IDA7KSB7CgkJbGV0IGUgPSB0WzBdOwoJCWlmIChlID09PSB2b2lkIDAgfHwgbi50YXNrRGVsaXZlcnlJZCAhPT0gdm9pZCAwIHx8IGUudGFza0RlbGl2ZXJ5SWQgIT09IHZvaWQgMCB8fCBpICE9PSB2b2lkIDAgJiYgZS5jYWxsZXIgIT09IHZvaWQgMCkgYnJlYWs7CgkJbGV0IGEgPSB0LnNoaWZ0KCk7CgkJaWYgKGEgPT09IHZvaWQgMCkgdGhyb3cgRXJyb3IoYEJ1ZmZlcmVkIHR1cm4gZGVsaXZlcnkgZGlzYXBwZWFyZWQgd2hpbGUgcGFydGl0aW9uaW5nLmApOwoJCXIucHVzaChhKSwgaSA/Pz0gYS5jYWxsZXI7Cgl9CglyZXR1cm4gY29hbGVzY2VEZWxpdmVyaWVzKHIpOwp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvc3ViYWdlbnRzL2hhbmRsZXMvcmViYXNlLmpzCmZ1bmN0aW9uIHJlYmFzZVRhc2tBZ2VudEhhbmRsZU11dGF0aW9ucyhlLCB0LCBuKSB7CglsZXQgciA9IGUuc2Vzc2lvblN0YXRlLnNuYXBzaG90OwoJaWYgKHIgPT09IHZvaWQgMCkgdGhyb3cgRXJyb3IoYENhbm5vdCBtZXJnZSB0YXNrLW93bmVkIGFnZW50IGhhbmRsZXMgaW50byBhIHNlc3Npb24gc3RhdGUgd2l0aG91dCBhIHNuYXBzaG90LmApOwoJcmV0dXJuIHsKCQkuLi5lLAoJCXNlc3Npb25TdGF0ZTogewoJCQkuLi5lLnNlc3Npb25TdGF0ZSwKCQkJc25hcHNob3Q6IHsKCQkJCS4uLnIsCgkJCQlzZXNzaW9uOiB7CgkJCQkJLi4uci5zZXNzaW9uLAoJCQkJCXN0YXRlOiBtZXJnZVRhc2tPd25lZEFnZW50SGFuZGxlc0ludG9UdXJuU3RhdGUoewoJCQkJCQliYXNlU3RhdGU6IG4uc25hcHNob3Q/LnNlc3Npb24uc3RhdGUsCgkJCQkJCWRyaXZlclN0YXRlOiB0LnNuYXBzaG90Py5zZXNzaW9uLnN0YXRlLAoJCQkJCQl0dXJuU3RhdGU6IHIuc2Vzc2lvbi5zdGF0ZQoJCQkJCX0pCgkJCQl9CgkJCX0KCQl9Cgl9Owp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL2Rpc3BhdGNoLXR1cm4tc3RlcC5qcwp2YXIgZGlzcGF0Y2hUdXJuU3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL2Rpc3BhdGNoVHVyblN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vZm9yd2FyZC10dXJuLWNhbmNlbGxhdGlvbi1zdGVwLmpzCnZhciBmb3J3YXJkVHVybkNhbmNlbGxhdGlvblN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9mb3J3YXJkVHVybkNhbmNlbGxhdGlvblN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vZm9yd2FyZC10dXJuLWRlbGl2ZXJ5LXN0ZXAuanMKdmFyIGZvcndhcmRUdXJuRGVsaXZlcnlTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vZm9yd2FyZFR1cm5EZWxpdmVyeVN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdHVybi1jb250cm9sLXJlY2VpdmVyLmpzCnZhciBUdXJuQ29udHJvbFJlY2VpdmVyID0gY2xhc3MgewoJYnVmZmVyZWREZWxpdmVyaWVzOwoJYnVmZmVyZWRTZXNzaW9uQ29udHJvbHM7Cgljb21tYW5kSW5ib3g7Cgljb250cm9sOwoJY29udHJvbEl0ZXJhdG9yOwoJZXhwZWN0ZWRUdXJuSWQ7CgljYW5jZWxsZWRUYXNrSWRzOwoJc2VlblRhc2tEZWxpdmVyaWVzOwoJc3RhdGVDdXJzb3I7CglwZW5kaW5nQ29udHJvbCA9IG51bGw7Cgljb25zdHJ1Y3Rvcih0KSB7CgkJdGhpcy5idWZmZXJlZERlbGl2ZXJpZXMgPSB0LmJ1ZmZlcmVkRGVsaXZlcmllcywgdGhpcy5idWZmZXJlZFNlc3Npb25Db250cm9scyA9IHQuYnVmZmVyZWRTZXNzaW9uQ29udHJvbHMsIHRoaXMuY2FuY2VsbGVkVGFza0lkcyA9IHQuY2FuY2VsbGVkVGFza0lkcyA/PyBuZXcgU2V0KCksIHRoaXMuY29tbWFuZEluYm94ID0gdC5jb21tYW5kSW5ib3gsIHRoaXMuc2VlblRhc2tEZWxpdmVyaWVzID0gdC5zZWVuVGFza0RlbGl2ZXJpZXMgPz8gbmV3IFNldCgpLCB0aGlzLnN0YXRlQ3Vyc29yID0gdC5zdGF0ZUN1cnNvciwgdGhpcy5jb250cm9sID0gY3JlYXRlSG9vayh7IHRva2VuOiB0LnRva2VuIH0pLCB0aGlzLmNvbnRyb2xJdGVyYXRvciA9IHRoaXMuY29udHJvbFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSwgdGhpcy5leHBlY3RlZFR1cm5JZCA9IHQuZXhwZWN0ZWRUdXJuSWQ7Cgl9CglnZXQgdG9rZW4oKSB7CgkJcmV0dXJuIHRoaXMuY29udHJvbC50b2tlbjsKCX0KCWFzeW5jIGRpc3Bvc2UoKSB7CgkJYXdhaXQgY2xvc2VIb29rSXRlcmF0b3IodGhpcy5jb250cm9sSXRlcmF0b3IpLCBhd2FpdCBkaXNwb3NlSG9vayh0aGlzLmNvbnRyb2wpOwoJfQoJYXN5bmMgd2FpdEZvckFjdGlvbigpIHsKCQlmb3IgKDs7KSB7CgkJCWxldCBlID0gYXdhaXQgdGhpcy5uZXh0Q29udHJvbE9yQ29tbWFuZCgpOwoJCQlpZiAoZS5raW5kID09PSBgY29tbWFuZGApIHsKCQkJCWxldCB0ID0gYXdhaXQgdGhpcy5oYW5kbGVTZXNzaW9uQ29tbWFuZChlLmNvbW1hbmQpOwoJCQkJaWYgKHQgIT09IHZvaWQgMCkgcmV0dXJuIHQ7CgkJCQljb250aW51ZTsKCQkJfQoJCQlsZXQgdCA9IGUucGF5bG9hZCwgbiA9IHRoaXMucmVhZFRlcm1pbmFsQ29udHJvbCh0KTsKCQkJaWYgKG4gIT09IHZvaWQgMCkgcmV0dXJuIG47CgkJCWlmICh0LmtpbmQgPT09IGB0dXJuLWRlbGl2ZXJ5LXJlcXVlc3RgKSB7CgkJCQlsZXQgZSA9IGF3YWl0IHRoaXMuc2VydmljZURlbGl2ZXJ5UmVxdWVzdCh0KTsKCQkJCWlmIChlICE9PSB2b2lkIDApIHJldHVybiBlOwoJCQl9CgkJfQoJfQoJYXN5bmMgaGFuZGxlU2Vzc2lvbkNvbW1hbmQoZSkgewoJCWlmIChlLmtpbmQgPT09IGBkZWxpdmVyYCkgewoJCQlpZiAoIXRoaXMuYWNjZXB0VGFza0RlbGl2ZXJ5KGUpKSByZXR1cm47CgkJCWF3YWl0IHRoaXMuYnVmZmVyRGVsaXZlcnkoZSk7CgkJCXJldHVybjsKCQl9CgkJaWYgKGUua2luZCA9PT0gYGNsZWFyYCB8fCBlLmtpbmQgPT09IGBjb21wYWN0YCkgewoJCQl0aGlzLmJ1ZmZlcmVkU2Vzc2lvbkNvbnRyb2xzLnB1c2goZS5raW5kKTsKCQkJcmV0dXJuOwoJCX0KCQlpZiAoZS5raW5kID09PSBgc2Vzc2lvbi10aW1lb3V0YCkgewoJCQl0aGlzLmJ1ZmZlcmVkU2Vzc2lvbkNvbnRyb2xzLnB1c2goYGV4cGlyZWRgKTsKCQkJcmV0dXJuOwoJCX0KCQlpZiAoZS5raW5kID09PSBgY2FuY2VsYCkgewoJCQlgdGFza3NgIGluIGUgJiYgZS50YXNrcyA9PT0gITAgJiYgYXdhaXQgY2FuY2VsQWxsSW5kZXhlZFNlc3Npb25UYXNrc1N0ZXAoewoJCQkJc2VyaWFsaXplZENvbnRleHQ6IHRoaXMuc3RhdGVDdXJzb3Iuc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IHRoaXMuc3RhdGVDdXJzb3Iuc2Vzc2lvblN0YXRlCgkJCX0pLCBlLnRhc2tJZCAhPT0gdm9pZCAwICYmIHRoaXMuZGlzY2FyZFRhc2tEZWxpdmVyaWVzKGUudGFza0lkKTsKCQkJbGV0IHQgPSBlLnRhc2tJZCAhPT0gdm9pZCAwICYmIGUudHVybklkICE9PSB2b2lkIDAgJiYgZS50dXJuSWQgIT09IHRoaXMuZXhwZWN0ZWRUdXJuSWQgPyB2b2lkIDAgOiBlLnR1cm5JZCwgbiA9IHsgdGFza3M6IGUudGFza3MgfTsKCQkJdCAhPT0gdm9pZCAwICYmIChuLnR1cm5JZCA9IHQpLCBhd2FpdCBmb3J3YXJkVHVybkNhbmNlbGxhdGlvblN0ZXAoewoJCQkJcGF5bG9hZDogbiwKCQkJCXRva2VuOiB0dXJuQ2FuY2VsbGF0aW9uSG9va1Rva2VuKHRoaXMuY29udHJvbC50b2tlbikKCQkJfSk7CgkJCXJldHVybjsKCQl9CgkJaWYgKGUua2luZCA9PT0gYHJlc2V0YCkgewoJCQlhd2FpdCBmb3J3YXJkVHVybkNhbmNlbGxhdGlvblN0ZXAoewoJCQkJcGF5bG9hZDoge30sCgkJCQl0b2tlbjogdHVybkNhbmNlbGxhdGlvbkhvb2tUb2tlbih0aGlzLmNvbnRyb2wudG9rZW4pCgkJCX0pLCB0aGlzLmJ1ZmZlcmVkU2Vzc2lvbkNvbnRyb2xzLnB1c2goYHJlc2V0YCk7CgkJCXJldHVybjsKCQl9CgkJcmV0dXJuIHVuc3VwcG9ydGVkU2Vzc2lvbkNvbW1hbmQoZSk7Cgl9Cglhc3luYyBidWZmZXJEZWxpdmVyeShlKSB7CgkJdGhpcy5idWZmZXJlZERlbGl2ZXJpZXMucHVzaChlKSwgZS50dXJuUG9saWN5ID09PSBgc3RlZXJgICYmIGRlbGl2ZXJ5SGFzTWVzc2FnZSQxKGUpICYmIGF3YWl0IGZvcndhcmRUdXJuQ2FuY2VsbGF0aW9uU3RlcCh7CgkJCXBheWxvYWQ6IHt9LAoJCQl0b2tlbjogdHVybkNhbmNlbGxhdGlvbkhvb2tUb2tlbih0aGlzLmNvbnRyb2wudG9rZW4pCgkJfSk7Cgl9CglidWZmZXJUdXJuRGVsaXZlcmllcyhlKSB7CgkJZS5idWZmZXJlZERlbGl2ZXJpZXMgIT09IHZvaWQgMCAmJiB0aGlzLmJ1ZmZlcmVkRGVsaXZlcmllcy51bnNoaWZ0KC4uLmUuYnVmZmVyZWREZWxpdmVyaWVzLmZpbHRlcigoZSkgPT4gIXRoaXMuc2hvdWxkRGlzY2FyZChlKSkpOwoJfQoJY29uc3VtZUNvbnRyb2woKSB7CgkJdGhpcy5wZW5kaW5nQ29udHJvbCA9IG51bGw7Cgl9CglnZXRDb250cm9sUHJvbWlzZSgpIHsKCQlyZXR1cm4gdGhpcy5wZW5kaW5nQ29udHJvbCA/Pz0gdGhpcy5jb250cm9sSXRlcmF0b3IubmV4dCgpLCB0aGlzLnBlbmRpbmdDb250cm9sOwoJfQoJYXN5bmMgbmV4dENvbnRyb2xPckNvbW1hbmQoKSB7CgkJbGV0IGUgPSBhd2FpdCBQcm9taXNlLnJhY2UoW3RoaXMuZ2V0Q29udHJvbFByb21pc2UoKS50aGVuKChlKSA9PiAoewoJCQlraW5kOiBgY29udHJvbGAsCgkJCXZhbHVlOiBlCgkJfSkpLCB0aGlzLmNvbW1hbmRJbmJveC5uZXh0KCkudGhlbigoZSkgPT4gKHsKCQkJa2luZDogYGNvbW1hbmRgLAoJCQl2YWx1ZTogZQoJCX0pKV0pOwoJCWlmIChlLmtpbmQgPT09IGBjb21tYW5kYCkgewoJCQlpZiAoZS52YWx1ZS5kb25lKSB0aHJvdyBFcnJvcihgU2Vzc2lvbiBjb21tYW5kIGluYm94IGNsb3NlZCBiZWZvcmUgdGhlIGFjdGl2ZSB0dXJuIHNldHRsZWQuYCk7CgkJCWlmICh0aGlzLmNvbW1hbmRJbmJveC5jb25zdW1lTmV4dCgpLCBlLnZhbHVlLnZhbHVlLmtpbmQgPT09IGBydW50aW1lLWFjdGlvbi1yZXN1bHRgKSByZXR1cm4gYXdhaXQgdGhpcy5uZXh0Q29udHJvbE9yQ29tbWFuZCgpOwoJCQl0cnkgewoJCQkJcmV0dXJuIHsKCQkJCQljb21tYW5kOiBzZXNzaW9uSW5ib3hXaXJlLmRlY29kZShlLnZhbHVlLnZhbHVlKSwKCQkJCQlraW5kOiBgY29tbWFuZGAKCQkJCX07CgkJCX0gY2F0Y2ggKGUpIHsKCQkJCWlmICghKGUgaW5zdGFuY2VvZiBTZXNzaW9uSW5ib3hXaXJlRXJyb3IpKSB0aHJvdyBlOwoJCQkJcmV0dXJuIGF3YWl0IHJlcG9ydERyb3BwZWRXaXJlUGF5bG9hZFN0ZXAoewoJCQkJCWRldGFpbDogZS5tZXNzYWdlLAoJCQkJCWZhbWlseTogYHNlc3Npb24taW5ib3hgCgkJCQl9KSwgYXdhaXQgdGhpcy5uZXh0Q29udHJvbE9yQ29tbWFuZCgpOwoJCQl9CgkJfQoJCWlmICh0aGlzLmNvbnN1bWVDb250cm9sKCksIGUudmFsdWUuZG9uZSkgdGhyb3cgRXJyb3IoYFR1cm4gY29udHJvbCBob29rIGNsb3NlZCBiZWZvcmUgZGVsaXZlcmluZyBhIHJlc3VsdC5gKTsKCQlsZXQgdCA9IGUudmFsdWUudmFsdWU7CgkJaWYgKHQua2luZCA9PT0gYHR1cm4tZXJyb3JgKSB0aHJvdyByZWJ1aWxkU2VyaWFsaXphYmxlRXJyb3IodC5lcnJvcik7CgkJcmV0dXJuIHQua2luZCA9PT0gYHR1cm4tY29udGludWF0aW9uLXRva2VuYCA/IChhd2FpdCB0aGlzLmNvbW1hbmRJbmJveC5yZWtleUNvbnRpbnVhdGlvbih0LmNvbnRpbnVhdGlvblRva2VuKSwgYXdhaXQgdGhpcy5uZXh0Q29udHJvbE9yQ29tbWFuZCgpKSA6IHsKCQkJa2luZDogYGNvbnRyb2xgLAoJCQlwYXlsb2FkOiB0CgkJfTsKCX0KCXJlYWRUZXJtaW5hbENvbnRyb2woZSkgewoJCWlmIChlLmtpbmQgPT09IGB0dXJuLWVycm9yYCkgdGhyb3cgcmVidWlsZFNlcmlhbGl6YWJsZUVycm9yKGUuZXJyb3IpOwoJCWlmIChlLmtpbmQgPT09IGB0dXJuLXJlc3VsdGApIHJldHVybiB0aGlzLmJ1ZmZlclR1cm5EZWxpdmVyaWVzKGUpLCBlLmFjdGlvbjsKCX0KCWFzeW5jIHNlcnZpY2VEZWxpdmVyeVJlcXVlc3QoZSkgewoJCWF3YWl0IHRoaXMuY29tbWFuZEluYm94LnJla2V5Q29udGludWF0aW9uKGUuY29udGludWF0aW9uVG9rZW4pOwoJCWxldCB0ID0gdGhpcy50YWtlSW5wdXRSZXNwb25zZURlbGl2ZXJ5KCk7CgkJZm9yICg7IHQgPT09IHZvaWQgMDspIHsKCQkJbGV0IG4gPSBhd2FpdCBQcm9taXNlLnJhY2UoW3RoaXMuZ2V0Q29udHJvbFByb21pc2UoKS50aGVuKChlKSA9PiAoewoJCQkJa2luZDogYGNvbnRyb2xgLAoJCQkJdmFsdWU6IGUKCQkJfSkpLCB0aGlzLmNvbW1hbmRJbmJveC5uZXh0KCkudGhlbigoZSkgPT4gKHsKCQkJCWtpbmQ6IGBjb21tYW5kYCwKCQkJCXZhbHVlOiBlCgkJCX0pKV0pOwoJCQlpZiAobi5raW5kID09PSBgY29udHJvbGApIHsKCQkJCWlmICh0aGlzLmNvbnN1bWVDb250cm9sKCksIG4udmFsdWUuZG9uZSkgdGhyb3cgRXJyb3IoYFR1cm4gY29udHJvbCBob29rIGNsb3NlZCBkdXJpbmcgYSBkZWxpdmVyeSByZXF1ZXN0LmApOwoJCQkJaWYgKG4udmFsdWUudmFsdWUua2luZCA9PT0gYHR1cm4tY29udGludWF0aW9uLXRva2VuYCkgewoJCQkJCWF3YWl0IHRoaXMuY29tbWFuZEluYm94LnJla2V5Q29udGludWF0aW9uKG4udmFsdWUudmFsdWUuY29udGludWF0aW9uVG9rZW4pOwoJCQkJCWNvbnRpbnVlOwoJCQkJfQoJCQkJbGV0IHQgPSB0aGlzLnJlYWRUZXJtaW5hbENvbnRyb2wobi52YWx1ZS52YWx1ZSk7CgkJCQlpZiAodCAhPT0gdm9pZCAwKSByZXR1cm4gdDsKCQkJCWlmIChuLnZhbHVlLnZhbHVlLmtpbmQgPT09IGB0dXJuLWRlbGl2ZXJ5LWNhbmNlbGxlZGAgJiYgbi52YWx1ZS52YWx1ZS5yZXF1ZXN0SWQgPT09IGUucmVxdWVzdElkKSByZXR1cm47CgkJCQljb250aW51ZTsKCQkJfQoJCQlpZiAobi52YWx1ZS5kb25lKSB0aHJvdyBFcnJvcihgU2Vzc2lvbiBjb21tYW5kIGluYm94IGNsb3NlZCBkdXJpbmcgYSB0dXJuIGRlbGl2ZXJ5IHJlcXVlc3QuYCk7CgkJCWlmICh0aGlzLmNvbW1hbmRJbmJveC5jb25zdW1lTmV4dCgpLCBuLnZhbHVlLnZhbHVlLmtpbmQgPT09IGBydW50aW1lLWFjdGlvbi1yZXN1bHRgKSBjb250aW51ZTsKCQkJbGV0IHI7CgkJCXRyeSB7CgkJCQlyID0gc2Vzc2lvbkluYm94V2lyZS5kZWNvZGUobi52YWx1ZS52YWx1ZSk7CgkJCX0gY2F0Y2ggKGUpIHsKCQkJCWlmICghKGUgaW5zdGFuY2VvZiBTZXNzaW9uSW5ib3hXaXJlRXJyb3IpKSB0aHJvdyBlOwoJCQkJYXdhaXQgcmVwb3J0RHJvcHBlZFdpcmVQYXlsb2FkU3RlcCh7CgkJCQkJZGV0YWlsOiBlLm1lc3NhZ2UsCgkJCQkJZmFtaWx5OiBgc2Vzc2lvbi1pbmJveGAKCQkJCX0pOwoJCQkJY29udGludWU7CgkJCX0KCQkJaWYgKHIua2luZCA9PT0gYGRlbGl2ZXJgKSB7CgkJCQlpZiAoIXRoaXMuYWNjZXB0VGFza0RlbGl2ZXJ5KHIpKSBjb250aW51ZTsKCQkJCWRlbGl2ZXJ5SGFzTWVzc2FnZSQxKHIpID8gYXdhaXQgdGhpcy5idWZmZXJEZWxpdmVyeShyKSA6IHQgPSByOwoJCQkJY29udGludWU7CgkJCX0KCQkJbGV0IGEgPSBhd2FpdCB0aGlzLmhhbmRsZVNlc3Npb25Db21tYW5kKHIpOwoJCQlpZiAoYSAhPT0gdm9pZCAwKSByZXR1cm4gYTsKCQl9CgkJdHJ5IHsKCQkJYXdhaXQgZm9yd2FyZFR1cm5EZWxpdmVyeVN0ZXAoewoJCQkJaW5ib3hUb2tlbjogZS5pbmJveFRva2VuLAoJCQkJcGF5bG9hZDogewoJCQkJCWRlbGl2ZXJ5OiB0LAoJCQkJCWtpbmQ6IGBkcml2ZXItZGVsaXZlcnlgLAoJCQkJCXJlcXVl",
	"c3RJZDogZS5yZXF1ZXN0SWQKCQkJCX0KCQkJfSk7CgkJfSBjYXRjaCAoZSkgewoJCQlpZiAoIShlIGluc3RhbmNlb2YgRXJyb3IgJiYgZS5uYW1lID09PSBgSG9va05vdEZvdW5kRXJyb3JgKSkgdGhyb3cgZTsKCQl9CgkJcmV0dXJuIGF3YWl0IHRoaXMuYXdhaXRGb3J3YXJkZWREZWxpdmVyeShlLnJlcXVlc3RJZCwgdCk7Cgl9Cgl0YWtlSW5wdXRSZXNwb25zZURlbGl2ZXJ5KCkgewoJCWxldCBlID0gdGhpcy5idWZmZXJlZERlbGl2ZXJpZXMuZmluZEluZGV4KChlKSA9PiAhZGVsaXZlcnlIYXNNZXNzYWdlJDEoZSkpOwoJCWlmIChlICE9PSAtMSkgcmV0dXJuIHRoaXMuYnVmZmVyZWREZWxpdmVyaWVzLnNwbGljZShlLCAxKVswXTsKCX0KCWFzeW5jIGF3YWl0Rm9yd2FyZGVkRGVsaXZlcnkoZSwgdCkgewoJCWZvciAoOzspIHsKCQkJbGV0IG4gPSBhd2FpdCB0aGlzLm5leHRDb250cm9sT3JDb21tYW5kKCk7CgkJCWlmIChuLmtpbmQgPT09IGBjb21tYW5kYCkgewoJCQkJbGV0IGUgPSBhd2FpdCB0aGlzLmhhbmRsZVNlc3Npb25Db21tYW5kKG4uY29tbWFuZCk7CgkJCQlpZiAoZSAhPT0gdm9pZCAwKSByZXR1cm4gdGhpcy5zaG91bGREaXNjYXJkKHQpIHx8IHRoaXMuYnVmZmVyZWREZWxpdmVyaWVzLnVuc2hpZnQodCksIGU7CgkJCQljb250aW51ZTsKCQkJfQoJCQlsZXQgciA9IG4ucGF5bG9hZDsKCQkJaWYgKHIua2luZCA9PT0gYHR1cm4tZGVsaXZlcnktYWNjZXB0ZWRgKSB7CgkJCQlpZiAoci5yZXF1ZXN0SWQgPT09IGUpIHJldHVybjsKCQkJCWNvbnRpbnVlOwoJCQl9CgkJCWlmIChyLmtpbmQgPT09IGB0dXJuLWRlbGl2ZXJ5LWNhbmNlbGxlZGAgJiYgci5yZXF1ZXN0SWQgPT09IGUpIHsKCQkJCXRoaXMuc2hvdWxkRGlzY2FyZCh0KSB8fCB0aGlzLmJ1ZmZlcmVkRGVsaXZlcmllcy51bnNoaWZ0KHQpOwoJCQkJcmV0dXJuOwoJCQl9CgkJCXIua2luZCA9PT0gYHR1cm4tcmVzdWx0YCAmJiAodGhpcy5zaG91bGREaXNjYXJkKHQpIHx8IHRoaXMuYnVmZmVyZWREZWxpdmVyaWVzLnVuc2hpZnQodCkpOwoJCQlsZXQgaSA9IHRoaXMucmVhZFRlcm1pbmFsQ29udHJvbChyKTsKCQkJaWYgKGkgIT09IHZvaWQgMCkgcmV0dXJuIGk7CgkJfQoJfQoJYWNjZXB0VGFza0RlbGl2ZXJ5KGUpIHsKCQlsZXQgdCA9IGUudGFza0RlbGl2ZXJ5SWQgPz8gZS5jYWxsZXI/LnRhc2tJZDsKCQlyZXR1cm4gdCA9PT0gdm9pZCAwID8gITAgOiB0aGlzLm9yaWdpbmF0ZXNGcm9tQ2FuY2VsbGVkVGFzayh0KSB8fCB0aGlzLnNlZW5UYXNrRGVsaXZlcmllcy5oYXModCkgPyAhMSA6ICh0aGlzLnNlZW5UYXNrRGVsaXZlcmllcy5hZGQodCksICEwKTsKCX0KCWRpc2NhcmRUYXNrRGVsaXZlcmllcyhlKSB7CgkJdGhpcy5jYW5jZWxsZWRUYXNrSWRzLmFkZChlKTsKCQlsZXQgdCA9IHRoaXMuYnVmZmVyZWREZWxpdmVyaWVzLmZpbHRlcigoZSkgPT4gIXRoaXMuc2hvdWxkRGlzY2FyZChlKSk7CgkJdGhpcy5idWZmZXJlZERlbGl2ZXJpZXMuc3BsaWNlKDAsIHRoaXMuYnVmZmVyZWREZWxpdmVyaWVzLmxlbmd0aCwgLi4udCk7Cgl9CglvcmlnaW5hdGVzRnJvbUNhbmNlbGxlZFRhc2soZSkgewoJCXJldHVybiBbLi4udGhpcy5jYW5jZWxsZWRUYXNrSWRzXS5zb21lKCh0KSA9PiBkZWxpdmVyeU9yaWdpbmF0ZXNGcm9tVGFzayhlLCB0KSk7Cgl9CglzaG91bGREaXNjYXJkKGUpIHsKCQlsZXQgdCA9IGUudGFza0RlbGl2ZXJ5SWQgPz8gZS5jYWxsZXI/LnRhc2tJZDsKCQlyZXR1cm4gdCAhPT0gdm9pZCAwICYmIHRoaXMub3JpZ2luYXRlc0Zyb21DYW5jZWxsZWRUYXNrKHQpOwoJfQp9OwpmdW5jdGlvbiBkZWxpdmVyeU9yaWdpbmF0ZXNGcm9tVGFzayhlLCB0KSB7CglyZXR1cm4gZSA9PT0gdCB8fCBlLnN0YXJ0c1dpdGgoYCR7dH06YCk7Cn0KZnVuY3Rpb24gZGVsaXZlcnlIYXNNZXNzYWdlJDEoZSkgewoJcmV0dXJuIGUucGF5bG9hZHMuc29tZSgoZSkgPT4gZS5tZXNzYWdlICE9PSB2b2lkIDApOwp9CmZ1bmN0aW9uIHVuc3VwcG9ydGVkU2Vzc2lvbkNvbW1hbmQoZSkgewoJdGhyb3cgRXJyb3IoYFVuc3VwcG9ydGVkIHNlc3Npb24gY29tbWFuZDogJHtKU09OLnN0cmluZ2lmeShlKX1gKTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9hY2NlcHRlZC1kZWxpdmVyeS1kZXBsb3ltZW50LmpzCmZ1bmN0aW9uIHJlYWRBY2NlcHRlZERlcGxveW1lbnRJZChlKSB7CglpZiAoZS5raW5kICE9PSBgZGVsaXZlcmAgfHwgZS5kZWxpdmVyeU1ldGFkYXRhPy5sZW5ndGggPT09IDApIHJldHVybjsKCWxldCB0ID0gZS5kZWxpdmVyeU1ldGFkYXRhPy5bMF0/LmFjY2VwdGVkRGVwbG95bWVudElkOwoJaWYgKCEodCA9PT0gdm9pZCAwIHx8IHQubGVuZ3RoID09PSAwKSkgcmV0dXJuIGUuZGVsaXZlcnlNZXRhZGF0YT8uZXZlcnkoKGUpID0+IGUuYWNjZXB0ZWREZXBsb3ltZW50SWQgPT09IHQpID8gdCA6IHZvaWQgMDsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9pbmxpbmUtdHVybi5qcwphc3luYyBmdW5jdGlvbiBydW5JbmxpbmVUdXJuKG4pIHsKCWxldCByID0gcmVhZEFjY2VwdGVkRGVwbG95bWVudElkKG4uZGVsaXZlcnkpOwoJaWYgKHIgPT09IHZvaWQgMCkgcmV0dXJuIHsga2luZDogYGNoaWxkYCB9OwoJbGV0IGEgPSBuLnN0YXRlQ3Vyc29yID8/IG5ldyBTZXNzaW9uU3RhdGVDdXJzb3IoewoJCXNlcmlhbGl6ZWRDb250ZXh0OiBuLnNlcmlhbGl6ZWRDb250ZXh0LAoJCXNlc3Npb25TdGF0ZTogbi5zZXNzaW9uU3RhdGUKCX0pLCBvID0gbmV3IElubGluZVR1cm5Db250cm9sKHsKCQlidWZmZXJlZERlbGl2ZXJpZXM6IG4uYnVmZmVyZWREZWxpdmVyaWVzLAoJCWJ1ZmZlcmVkU2Vzc2lvbkNvbnRyb2xzOiBuLmJ1ZmZlcmVkU2Vzc2lvbkNvbnRyb2xzLAoJCWNhbmNlbGxlZFRhc2tJZHM6IG4uY2FuY2VsbGVkVGFza0lkcywKCQljb21tYW5kSW5ib3g6IG4uY29tbWFuZEluYm94LAoJCWV4cGVjdGVkVHVybklkOiBhY3RpdmVUdXJuSWQobi5zZXNzaW9uU3RhdGUuZW1pc3Npb25TdGF0ZSksCgkJc2VlblRhc2tEZWxpdmVyaWVzOiBuLnNlZW5UYXNrRGVsaXZlcmllcywKCQlzdGF0ZUN1cnNvcjogYQoJfSksIHMgPSBuLmRlbGl2ZXJ5OwoJZm9yICg7OykgewoJCWxldCBlID0gewoJCQlzZXJpYWxpemVkQ29udGV4dDogYS5zZXJpYWxpemVkQ29udGV4dCwKCQkJc2Vzc2lvblN0YXRlOiBhLnNlc3Npb25TdGF0ZQoJCX0sIHQgPSBhd2FpdCBvLndhaXRGb3JTdGVwKHR1cm5TdGVwKHsKCQkJYWJvcnRTaWduYWw6IG8uc2lnbmFsLAoJCQlhY2NlcHRlZERlcGxveW1lbnRJZDogciwKCQkJaW5wdXQ6IHMsCgkJCXBhcmVudFdyaXRhYmxlOiBuLnBhcmVudFdyaXRhYmxlLAoJCQlzZXJpYWxpemVkQ29udGV4dDogYS5zZXJpYWxpemVkQ29udGV4dCwKCQkJc2Vzc2lvblN0YXRlOiBhLnNlc3Npb25TdGF0ZQoJCX0pKTsKCQlpZiAodC5yZXF1aXJlc0NoaWxkRGlzcGF0Y2ggPT09ICEwKSByZXR1cm4gY2hpbGRPdXRjb21lKG8pOwoJCWxldCBpID0gewoJCQliZWZvcmVTdGVwOiBlLAoJCQlyZXN1bHQ6IHQKCQl9OwoJCWlmIChvLmluaXRpYWxDYW5jZWxsYXRpb24gIT09IHZvaWQgMCB8fCB0LmFjdGlvbiA9PT0gYGNhbmNlbGxlZGAgfHwgKHQuYmFja2dyb3VuZFRhc2tzPy5sZW5ndGggPz8gMCkgPiAwKSByZXR1cm4gY2hpbGRPdXRjb21lKG8sIGkpOwoJCWlmICh0LmFjdGlvbiA9PT0gYGRvbmVgKSByZXR1cm4gewoJCQlhY3Rpb246IHsKCQkJCWlzRXJyb3I6IHQuaXNFcnJvciwKCQkJCWtpbmQ6IGBkb25lYCwKCQkJCW91dHB1dDogdC5vdXRwdXQgPz8gYGAsCgkJCQlzZXJpYWxpemVkQ29udGV4dDogdC5zZXJpYWxpemVkQ29udGV4dCwKCQkJCXNlc3Npb25TdGF0ZTogdC5zZXNzaW9uU3RhdGUsCgkJCQl1c2FnZTogdC51c2FnZSwKCQkJCXVzYWdlRGVsdGE6IHQudXNhZ2VEZWx0YQoJCQl9LAoJCQlraW5kOiBgcmVzdWx0YAoJCX07CgkJaWYgKHQuYWN0aW9uID09PSBgZGlzcGF0Y2gtd29ya2Zsb3ctdGFza3NgIHx8IHQuYWN0aW9uID09PSBgcGFya2AgJiYgdC5wZW5kaW5nQ29vcmRpbmF0aW9uQ2FsbElkcyAhPT0gdm9pZCAwKSByZXR1cm4gY2hpbGRPdXRjb21lKG8sIGkpOwoJCWlmICh0LmFjdGlvbiA9PT0gYHBhcmtgKSByZXR1cm4gdC5oYXNQZW5kaW5nQXV0aG9yaXphdGlvbiB8fCB0Lmhhc1BlbmRpbmdJbnB1dEJhdGNoICYmIG4uY2FwYWJpbGl0aWVzPy5yZXF1ZXN0SW5wdXQgPT09ICEwIHx8IG4ubW9kZSA9PT0gYGNvbnZlcnNhdGlvbmAgPyB7CgkJCWFjdGlvbjogewoJCQkJYXV0aG9yaXphdGlvbkF0dGVtcHRJZHM6IHQuYXV0aG9yaXphdGlvbkF0dGVtcHRJZHMsCgkJCQlhdXRob3JpemF0aW9uTmFtZXM6IHQuYXV0aG9yaXphdGlvbk5hbWVzLAoJCQkJa2luZDogYHBhcmtgLAoJCQkJc2VyaWFsaXplZENvbnRleHQ6IHQuc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IHQuc2Vzc2lvblN0YXRlLAoJCQkJc2V0dGxlZDogdC5zZXR0bGVkCgkJCX0sCgkJCWtpbmQ6IGByZXN1bHRgCgkJfSA6IGNoaWxkT3V0Y29tZShvLCBpKTsKCQlsZXQgYyA9IGEuc2Vzc2lvblN0YXRlLmNvbnRpbnVhdGlvblRva2VuOwoJCWEuYWRvcHRTdGF0ZSh0KSwgYS5zZXNzaW9uU3RhdGUuY29udGludWF0aW9uVG9rZW4gIT09IGBgICYmIGEuc2Vzc2lvblN0YXRlLmNvbnRpbnVhdGlvblRva2VuICE9PSBjICYmIGF3YWl0IG4uY29tbWFuZEluYm94LnJla2V5Q29udGludWF0aW9uKGEuc2Vzc2lvblN0YXRlLmNvbnRpbnVhdGlvblRva2VuKSwgcyA9IHZvaWQgMDsKCX0KfQpmdW5jdGlvbiBjaGlsZE91dGNvbWUoZSwgdCkgewoJcmV0dXJuIHsKCQlpbml0aWFsQ2FuY2VsbGF0aW9uOiBlLmluaXRpYWxDYW5jZWxsYXRpb24sCgkJaW5pdGlhbFN0ZXA6IHQsCgkJa2luZDogYGNoaWxkYAoJfTsKfQp2YXIgSW5saW5lVHVybkNvbnRyb2wgPSBjbGFzcyB7CglidWZmZXJlZERlbGl2ZXJpZXM7CglidWZmZXJlZFNlc3Npb25Db250cm9sczsKCWNhbmNlbGxlZFRhc2tJZHM7Cgljb21tYW5kSW5ib3g7Cgljb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpOwoJZXhwZWN0ZWRUdXJuSWQ7CglzZWVuVGFza0RlbGl2ZXJpZXM7CglzdGF0ZUN1cnNvcjsKCWNhbmNlbGxhdGlvbjsKCWNvbnN0cnVjdG9yKGUpIHsKCQl0aGlzLmJ1ZmZlcmVkRGVsaXZlcmllcyA9IGUuYnVmZmVyZWREZWxpdmVyaWVzLCB0aGlzLmJ1ZmZlcmVkU2Vzc2lvbkNvbnRyb2xzID0gZS5idWZmZXJlZFNlc3Npb25Db250cm9scywgdGhpcy5jYW5jZWxsZWRUYXNrSWRzID0gZS5jYW5jZWxsZWRUYXNrSWRzID8/IG5ldyBTZXQoKSwgdGhpcy5jb21tYW5kSW5ib3ggPSBlLmNvbW1hbmRJbmJveCwgdGhpcy5leHBlY3RlZFR1cm5JZCA9IGUuZXhwZWN0ZWRUdXJuSWQsIHRoaXMuc2VlblRhc2tEZWxpdmVyaWVzID0gZS5zZWVuVGFza0RlbGl2ZXJpZXMgPz8gbmV3IFNldCgpLCB0aGlzLnN0YXRlQ3Vyc29yID0gZS5zdGF0ZUN1cnNvcjsKCX0KCWdldCBpbml0aWFsQ2FuY2VsbGF0aW9uKCkgewoJCXJldHVybiB0aGlzLmNhbmNlbGxhdGlvbjsKCX0KCWdldCBzaWduYWwoKSB7CgkJcmV0dXJuIHRoaXMuY29udHJvbGxlci5zaWduYWw7Cgl9Cglhc3luYyB3YWl0Rm9yU3RlcChlKSB7CgkJbGV0IHQgPSBlLnRoZW4oKGUpID0+ICh7CgkJCWtpbmQ6IGBzdGVwYCwKCQkJcmVzdWx0OiBlCgkJfSkpOwoJCWZvciAoOzspIHsKCQkJbGV0IGUgPSBhd2FpdCBQcm9taXNlLnJhY2UoW3QsIHRoaXMuY29tbWFuZEluYm94Lm5leHQoKS50aGVuKChlKSA9PiAoewoJCQkJa2luZDogYGNvbW1hbmRgLAoJCQkJcmVzdWx0OiBlCgkJCX0pKV0pOwoJCQlpZiAoZS5raW5kID09PSBgc3RlcGApIHJldHVybiBlLnJlc3VsdDsKCQkJaWYgKGUucmVzdWx0LmRvbmUpIHRocm93IEVycm9yKGBTZXNzaW9uIGNvbW1hbmQgaW5ib3ggY2xvc2VkIGJlZm9yZSB0aGUgaW5saW5lIHR1cm4gc3RlcCBzZXR0bGVkLmApOwoJCQl0aGlzLmNvbW1hbmRJbmJveC5jb25zdW1lTmV4dCgpLCBhd2FpdCB0aGlzLmhhbmRsZShlLnJlc3VsdC52YWx1ZSk7CgkJfQoJfQoJYWJvcnQoZSkgewoJCXRoaXMuY29udHJvbGxlci5zaWduYWwuYWJvcnRlZCB8fCAodGhpcy5jYW5jZWxsYXRpb24gPSBlLCB0aGlzLmNvbnRyb2xsZXIuYWJvcnQobmV3IFR1cm5DYW5jZWxsZWRFcnJvcigpKSk7Cgl9CglhY2NlcHRUYXNrRGVsaXZlcnkoZSkgewoJCWxldCB0ID0gZS50YXNrRGVsaXZlcnlJZCA/PyBlLmNhbGxlcj8udGFza0lkOwoJCXJldHVybiB0ID09PSB2b2lkIDAgPyAhMCA6IHRoaXMub3JpZ2luYXRlc0Zyb21DYW5jZWxsZWRUYXNrKHQpIHx8IHRoaXMuc2VlblRhc2tEZWxpdmVyaWVzLmhhcyh0KSA/ICExIDogKHRoaXMuc2VlblRhc2tEZWxpdmVyaWVzLmFkZCh0KSwgITApOwoJfQoJYXN5bmMgaGFuZGxlKGUpIHsKCQlpZiAoZS5raW5kID09PSBgcnVudGltZS1hY3Rpb24tcmVzdWx0YCkgcmV0dXJuOwoJCWxldCB0OwoJCXRyeSB7CgkJCXQgPSBzZXNzaW9uSW5ib3hXaXJlLmRlY29kZShlKTsKCQl9IGNhdGNoIChlKSB7CgkJCWlmICghKGUgaW5zdGFuY2VvZiBTZXNzaW9uSW5ib3hXaXJlRXJyb3IpKSB0aHJvdyBlOwoJCQlhd2FpdCByZXBvcnREcm9wcGVkV2lyZVBheWxvYWRTdGVwKHsKCQkJCWRldGFpbDogZS5tZXNzYWdlLAoJCQkJZmFtaWx5OiBgc2Vzc2lvbi1pbmJveGAKCQkJfSk7CgkJCXJldHVybjsKCQl9CgkJaWYgKHQua2luZCA9PT0gYGRlbGl2ZXJgKSB7CgkJCWlmICghdGhpcy5hY2NlcHRUYXNrRGVsaXZlcnkodCkpIHJldHVybjsKCQkJdGhpcy5idWZmZXJlZERlbGl2ZXJpZXMucHVzaCh0KSwgdC50dXJuUG9saWN5ID09PSBgc3RlZXJgICYmIGRlbGl2ZXJ5SGFzTWVzc2FnZSh0KSAmJiB0aGlzLmFib3J0KHt9KTsKCQkJcmV0dXJuOwoJCX0KCQlpZiAodC5raW5kID09PSBgY2xlYXJgIHx8IHQua2luZCA9PT0gYGNvbXBhY3RgKSB7CgkJCXRoaXMuYnVmZmVyZWRTZXNzaW9uQ29udHJvbHMucHVzaCh0LmtpbmQpOwoJCQlyZXR1cm47CgkJfQoJCWlmICh0LmtpbmQgPT09IGBzZXNzaW9uLXRpbWVvdXRgKSB7CgkJCXRoaXMuYnVmZmVyZWRTZXNzaW9uQ29udHJvbHMucHVzaChgZXhwaXJlZGApOwoJCQlyZXR1cm47CgkJfQoJCWlmICh0LmtpbmQgPT09IGByZXNldGApIHsKCQkJdGhpcy5idWZmZXJlZFNlc3Npb25Db250cm9scy5wdXNoKGByZXNldGApLCB0aGlzLmFib3J0KHt9KTsKCQkJcmV0dXJuOwoJCX0KCQlpZiAodC5raW5kID09PSBgY2FuY2VsYCkgewoJCQlgdGFza3NgIGluIHQgJiYgdC50YXNrcyA9PT0gITAgJiYgYXdhaXQgY2FuY2VsQWxsSW5kZXhlZFNlc3Npb25UYXNrc1N0ZXAoewoJCQkJc2VyaWFsaXplZENvbnRleHQ6IHRoaXMuc3RhdGVDdXJzb3Iuc2VyaWFsaXplZENvbnRleHQsCgkJCQlzZXNzaW9uU3RhdGU6IHRoaXMuc3RhdGVDdXJzb3Iuc2Vzc2lvblN0YXRlCgkJCX0pLCB0LnRhc2tJZCAhPT0gdm9pZCAwICYmIHRoaXMuZGlzY2FyZFRhc2tEZWxpdmVyaWVzKHQudGFza0lkKTsKCQkJbGV0IGUgPSB0LnRhc2tJZCAhPT0gdm9pZCAwICYmIHQudHVybklkICE9PSB2b2lkIDAgJiYgdC50dXJuSWQgIT09IHRoaXMuZXhwZWN0ZWRUdXJuSWQgPyB2b2lkIDAgOiB0LnR1cm5JZDsKCQkJaWYgKGUgPT09IHZvaWQgMCB8fCBlID09PSB0aGlzLmV4cGVjdGVkVHVybklkKSB7CgkJCQlsZXQgbiA9IGUgPT09IHZvaWQgMCA/IHsgdGFza3M6IHQudGFza3MgfSA6IHsKCQkJCQl0YXNrczogdC50YXNrcywKCQkJCQl0dXJuSWQ6IGUKCQkJCX07CgkJCQl0aGlzLmFib3J0KG4pOwoJCQl9CgkJfQoJfQoJZGlzY2FyZFRhc2tEZWxpdmVyaWVzKGUpIHsKCQl0aGlzLmNhbmNlbGxlZFRhc2tJZHMuYWRkKGUpOwoJCWxldCB0ID0gdGhpcy5idWZmZXJlZERlbGl2ZXJpZXMuZmlsdGVyKChlKSA9PiAhdGhpcy5zaG91bGREaXNjYXJkKGUpKTsKCQl0aGlzLmJ1ZmZlcmVkRGVsaXZlcmllcy5zcGxpY2UoMCwgdGhpcy5idWZmZXJlZERlbGl2ZXJpZXMubGVuZ3RoLCAuLi50KTsKCX0KCW9yaWdpbmF0ZXNGcm9tQ2FuY2VsbGVkVGFzayhlKSB7CgkJcmV0dXJuIFsuLi50aGlzLmNhbmNlbGxlZFRhc2tJZHNdLnNvbWUoKHQpID0+IGUgPT09IHQgfHwgZS5zdGFydHNXaXRoKGAke3R9OmApKTsKCX0KCXNob3VsZERpc2NhcmQoZSkgewoJCWxldCB0ID0gZS50YXNrRGVsaXZlcnlJZCA/PyBlLmNhbGxlcj8udGFza0lkOwoJCXJldHVybiB0ICE9PSB2b2lkIDAgJiYgdGhpcy5vcmlnaW5hdGVzRnJvbUNhbmNlbGxlZFRhc2sodCk7Cgl9Cn07CmZ1bmN0aW9uIGRlbGl2ZXJ5SGFzTWVzc2FnZShlKSB7CglyZXR1cm4gZS5wYXlsb2Fkcy5zb21lKChlKSA9PiBlLm1lc3NhZ2UgIT09IHZvaWQgMCk7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vdHVybi1kaXNwYXRjaC5qcwphc3luYyBmdW5jdGlvbiBkaXNwYXRjaEFuZEF3YWl0VHVybihlKSB7CglsZXQgbiA9IGUuc3RhdGVDdXJzb3IgPz8gbmV3IFNlc3Npb25TdGF0ZUN1cnNvcih7CgkJc2VyaWFsaXplZENvbnRleHQ6IGUuc2VyaWFsaXplZENvbnRleHQsCgkJc2Vzc2lvblN0YXRlOiBlLnNlc3Npb25TdGF0ZQoJfSksIHIgPSBhd2FpdCBydW5JbmxpbmVUdXJuKHsKCQkuLi5lLAoJCXN0YXRlQ3Vyc29yOiBuCgl9KTsKCXJldHVybiByLmtpbmQgPT09IGByZXN1bHRgID8gewoJCWFjdGlvbjogci5hY3Rpb24sCgkJYXN5bmMgZGlzcG9zZSgpIHt9Cgl9IDogYXdhaXQgZGlzcGF0Y2hBbmRBd2FpdENoaWxkVHVybih7CgkJLi4uZSwKCQlpbml0aWFsQ2FuY2VsbGF0aW9uOiByLmluaXRpYWxDYW5jZWxsYXRpb24sCgkJc3RhdGVDdXJzb3I6IG4sCgkJaW5pdGlhbFN0ZXA6IHIuaW5pdGlhbFN0ZXAKCX0pOwp9CmFzeW5jIGZ1bmN0aW9uIGRpc3BhdGNoQW5kQXdhaXRDaGlsZFR1cm4odCkgewoJbGV0IGkgPSBuZXcgVHVybkNvbnRyb2xSZWNlaXZlcih7CgkJYnVmZmVyZWREZWxpdmVyaWVzOiB0LmJ1ZmZlcmVkRGVsaXZlcmllcywKCQlidWZmZXJlZFNlc3Npb25Db250cm9sczogdC5idWZmZXJlZFNlc3Npb25Db250cm9scywKCQljYW5jZWxsZWRUYXNrSWRzOiB0LmNhbmNlbGxlZFRhc2tJZHMsCgkJY29tbWFuZEluYm94OiB0LmNvbW1hbmRJbmJveCwKCQlleHBlY3RlZFR1cm5JZDogYWN0aXZlVHVybklkKHQuc2Vzc2lvblN0YXRlLmVtaXNzaW9uU3RhdGUpLAoJCXNlZW5UYXNrRGVsaXZlcmllczogdC5zZWVuVGFza0RlbGl2ZXJpZXMgPz8gbmV3IFNldCgpLAoJCXN0YXRlQ3Vyc29yOiB0LnN0YXRlQ3Vyc29yLAoJCXRva2VuOiB0LmNvbnRyb2xUb2tlbgoJfSk7Cgl0cnkgewoJCXJldHVybiBhd2FpdCBkaXNwYXRjaFR1cm5TdGVwKHsKCQkJY2FwYWJpbGl0aWVzOiB0LmNhcGFiaWxpdGllcywKCQkJY29tcGxldGlvblRva2VuOiBpLnRva2VuLAoJCQlkZWxpdmVyeTogdC5kZWxpdmVyeSwKCQkJaW5pdGlhbENhbmNlbGxhdGlvbjogdC5pbml0aWFsQ2FuY2VsbGF0aW9uLAoJCQlpbml0aWFsU3RlcDogdC5pbml0aWFsU3RlcCwKCQkJbW9kZTogdC5tb2RlLAoJCQlwYXJlbnRXcml0YWJsZTogdC5wYXJlbnRXcml0YWJsZSwKCQkJc2VyaWFsaXplZENvbnRleHQ6IHQuc2VyaWFsaXplZENvbnRleHQsCgkJCXNlc3Npb25TdGF0ZTogdC5zZXNzaW9uU3RhdGUKCQl9KSwgewoJCQlhY3Rpb246IGF3YWl0IGkud2FpdEZvckFjdGlvbigpLAoJCQlkaXNwb3NlOiAoKSA9PiBpLmRpc3Bvc2UoKQoJCX07Cgl9IGNhdGNoIChlKSB7CgkJdGhyb3cgYXdhaXQgaS5kaXNwb3NlKCksIGU7Cgl9Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vY3JlYXRlLXNlc3Npb24tc3RlcC5qcwp2YXIgY3JlYXRlU2Vzc2lvblN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9jcmVhdGVTZXNzaW9uU3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9zZXR0bGUtY2FuY2VsbGVkLXR1cm4tc3RlcC5qcwp2YXIgc2V0dGxlQ2FuY2VsbGVkVHVyblN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9zZXR0bGVDYW5jZWxsZWRUdXJuU3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90ZXJtaW5hbC1zZXNzaW9uLWZhaWx1cmUtc3RlcC5qcwp2YXIgZW1pdFRlcm1pbmFsU2Vzc2lvbkZhaWx1cmVTdGVwID0gZ2xvYmFsVGhpc1tTeW1ib2wuZm9yKCJXT1JLRkxPV19VU0VfU1RFUCIpXSgic3RlcC8vZXZlQDAuNTEuMS8vZW1pdFRlcm1pbmFsU2Vzc2lvbkZhaWx1cmVTdGVwIik7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gZGlzdC9zcmMvZXhlY3V0aW9uL3Rlcm1pbmFsLXNlc3Npb24tY29tcGxldGlvbi1zdGVwLmpzCnZhciBlbWl0VGVybWluYWxTZXNzaW9uQ29tcGxldGlvblN0ZXAgPSBnbG9iYWxUaGlzW1N5bWJvbC5mb3IoIldPUktGTE9XX1VTRV9TVEVQIildKCJzdGVwLy9ldmVAMC41MS4xLy9lbWl0VGVybWluYWxTZXNzaW9uQ29tcGxldGlvblN0ZXAiKTsKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vd29ya2Zsb3ctZW50cnktZmluYWxpemF0aW9uLmpzCmFzeW5jIGZ1bmN0aW9uIGZpbmFsaXplRXhwaXJlZFNlc3Npb24odCkgewoJcmV0dXJuIGF3YWl0IHRlcm1pbmF0ZUNoaWxkU2Vzc2lvbnNTdGVwKHsKCQlzZXJpYWxpemVkQ29udGV4dDogdC5zZXJpYWxpemVkQ29udGV4dCwKCQlzZXNzaW9uU3RhdGU6IHQuc2Vzc2lvblN0YXRlCgl9KSwgYXdhaXQgZW1pdFRlcm1pbmFsU2Vzc2lvbkNvbXBsZXRpb25TdGVwKHsKCQlwYXJlbnRXcml0YWJsZTogdC5kcml2ZXJXcml0YWJsZSwKCQlzZXJpYWxpemVkQ29udGV4dDogdC5zZXJpYWxpemVkQ29udGV4dAoJfSksIHQudGVybWluYWxTdGF0ZSAhPT0gdm9pZCAwICYmICh0LnRlcm1pbmFsU3RhdGUudGVybWluYWxFbWl0dGVkID0gITApLCB0Lm1vZGUgPT09IGB0YXNrYCA/IChhd2FpdCBmaXJlU2Vzc2lvbkNhbGxiYWNrU3RlcCh7CgkJb3V0cHV0OiBgYCwKCQlzZXJpYWxpemVkQ29udGV4dDogdC5zZXJpYWxpemVkQ29udGV4dCwKCQlzdGF0dXM6IGBjb21wbGV0ZWRgCgl9KSwgYXdhaXQgbm90aWZ5RGVsZWdhdGVkUGFyZW50U3RlcCh7CgkJcmVzdWx0OiBjcmVhdGVEZWxlZ2F0ZWRTdWJhZ2VudFN1Y2Nlc3NSZXN1bHQodC5zZXJpYWxpemVkQ29udGV4dCwgYGApLAoJCXNlcmlhbGl6ZWRDb250ZXh0OiB0LnNlcmlhbGl6ZWRDb250ZXh0Cgl9KSkgOiB0LmNhbGxlciAhPT0gdm9pZCAwICYmIGF3YWl0IG5vdGlmeVR1cm5DYWxsZXJTdGVwKHsKCQljYWxsZXI6IHQuY2FsbGVyLAoJCWxpZmVjeWNsZTogYHRlcm1pbmFsYCwKCQlzZXNzaW9uSWQ6IHQuc2Vzc2lvblN0YXRlLnNlc3Npb25JZCwKCQlzZXR0bGVkOiB7IG91dHB1dDogYGAgfQoJfSksIHsgb3V0cHV0OiBgYCB9Owp9CmFzeW5jIGZ1bmN0aW9uIGZpbmFsaXplRG9uZShuKSB7CglsZXQgeyBvdXRwdXQ6IHIsIHNlcmlhbGl6ZWRDb250ZXh0OiBpIH0gPSBuLmFjdGlvbiwgYSA9IG4uYWN0aW9uLmlzRXJyb3IgPT09ICEwOwoJaWYgKGF3YWl0IHRlcm1pbmF0ZUNoaWxkU2Vzc2lvbnNTdGVwKHsKCQlzZXJpYWxpemVkQ29udGV4dDogaSwKCQlzZXNzaW9uU3RhdGU6IG4uYWN0aW9uLnNlc3Npb25TdGF0ZQoJfSksIG4udGVybWluYWxTdGF0ZSAhPT0gdm9pZCAwICYmIChuLnRlcm1pbmFsU3RhdGUudGVybWluYWxFbWl0dGVkID0gITApLCBuLm1vZGUgPT09IGB0YXNrYCkgYXdhaXQgZmlyZVNlc3Npb25DYWxsYmFja1N0ZXAoewoJCWVycm9yOiBhID8gciA6IHZvaWQgMCwKCQlvdXRwdXQ6IGEgPyB2b2lkIDAgOiByLAoJCXNlcmlhbGl6ZWRDb250ZXh0OiBpLAoJCXN0YXR1czogYSA/IGBmYWlsZWRgIDogYGNvbXBsZXRlZGAsCgkJdXNhZ2U6IG4uYWN0aW9uLnVzYWdlCgl9KSwgYXdhaXQgbm90aWZ5RGVsZWdhdGVkUGFyZW50U3RlcCh7CgkJcmVzdWx0OiBhID8gY3JlYXRlRGVsZWdhdGVkU3ViYWdlbnRFcnJvclJlc3VsdChpLCByKSA6IGNyZWF0ZURlbGVnYXRlZFN1YmFnZW50U3VjY2Vzc1Jlc3VsdChpLCByKSwKCQlzZXJpYWxpemVkQ29udGV4dDogaSwKCQl1c2FnZTogbi5hY3Rpb24udXNhZ2UKCX0pOwoJZWxzZSB7CgkJbGV0IGUgPSB7CgkJCW91dHB1dDogciwKCQkJdXNhZ2U6IG4uYWN0aW9uLnVzYWdlRGVsdGEKCQl9OwoJCWEgJiYgKGUuaXNFcnJvciA9ICEwKSwgbi5jYWxsZXIgIT09IHZvaWQgMCAmJiBhd2FpdCBub3RpZnlUdXJuQ2FsbGVyU3RlcCh7CgkJCWNhbGxlcjogbi5jYWxsZXIsCgkJCWxpZmVjeWNsZTogYHRlcm1pbmFsYCwKCQkJc2Vzc2lvbklkOiBu",
	"LmFjdGlvbi5zZXNzaW9uU3RhdGUuc2Vzc2lvbklkLAoJCQlzZXR0bGVkOiBlCgkJfSk7Cgl9CglyZXR1cm4geyBvdXRwdXQ6IHIgfTsKfQovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi9zZXNzaW9uLWNvbW1hbmQtaW5ib3guanMKZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbkNvbW1hbmRJbmJveCgpIHsKCWxldCBhLCBvLCBzLCBjID0gW10sIGwgPSBbXSwgdSA9IDAsIGQgPSBudWxsLCBmLCBwLCBlbnF1ZXVlID0gKGUpID0+IHsKCQlsLnB1c2goZSksIGwuc29ydCgoZSwgdCkgPT4gZS5vcmRlciAtIHQub3JkZXIpLCBwPy4oKSwgcCA9IHZvaWQgMDsKCX0sIGFybSA9IChlKSA9PiB7CgkJZS5jbG9zZWQgfHwgZS5wZW5kaW5nIHx8IChlLnBlbmRpbmcgPSAhMCwgZS5yZXNvbHZlZCA9IHZvaWQgMCwgKGUucmV0aXJlZCA/IFByb21pc2UucmVzb2x2ZShlLmhvb2spLnRoZW4oKGUpID0+ICh7CgkJCWRvbmU6ICExLAoJCQl2YWx1ZTogZQoJCX0pKSA6IGUuaXRlcmF0b3IubmV4dCgpKS50aGVuKCh0KSA9PiB7CgkJCWxldCBuID0gewoJCQkJb3JkZXI6IHUrKywKCQkJCXJlc3VsdDogdCwKCQkJCXN0YXRlOiBlCgkJCX07CgkJCWUucmVzb2x2ZWQgPSBuLCBlLmVuYWJsZWQgJiYgZW5xdWV1ZShuKTsKCQl9LCAoKSA9PiB7fSkpOwoJfSwgZW5hYmxlID0gKGUpID0+IHsKCQllLmVuYWJsZWQgPSAhMCwgZS5yZXNvbHZlZCAhPT0gdm9pZCAwICYmIGVucXVldWUoZS5yZXNvbHZlZCk7Cgl9LCBjcmVhdGVTdGF0ZSA9ICh0KSA9PiB7CgkJbGV0IG4gPSBjcmVhdGVIb29rKHsKCQkJbWV0YWRhdGE6IHsgW1NFU1NJT05fSU5CT1hfV0lSRV9WRVJTSU9OX01FVEFEQVRBX0tFWV06IFNFU1NJT05fSU5CT1hfV0lSRV9WRVJTSU9OIH0sCgkJCXRva2VuOiB0CgkJfSk7CgkJcmV0dXJuIHsKCQkJY2xvc2VkOiAhMSwKCQkJZW5hYmxlZDogITEsCgkJCWhvb2s6IG4sCgkJCWl0ZXJhdG9yOiBuW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpLAoJCQlwZW5kaW5nOiAhMSwKCQkJcmV0aXJlZDogITEKCQl9OwoJfSwgc3RhdGVzID0gKCkgPT4gWwoJCWEsCgkJbywKCQlzLAoJCS4uLmMKCV0uZmlsdGVyKChlKSA9PiBlICE9PSB2b2lkIDApLCBuZXh0UmVhZCA9ICgpID0+IHsKCQlpZiAoYSA9PT0gdm9pZCAwKSB0aHJvdyBFcnJvcihgQ2Fubm90IHdhaXQgZm9yIHNlc3Npb24gY29tbWFuZHMgYmVmb3JlIGNsYWltaW5nIHRoZSBzdGFibGUgaW5ib3guYCk7CgkJaWYgKGQgIT09IG51bGwpIHJldHVybiBkOwoJCWxldCBlID0gc3RhdGVzKCk7CgkJZm9yIChsZXQgdCBvZiBlKSBhcm0odCk7CgkJcmV0dXJuIGUuZXZlcnkoKGUpID0+IGUuY2xvc2VkKSA/IChmID0gewoJCQlvcmRlcjogdSsrLAoJCQlyZXN1bHQ6IHsKCQkJCWRvbmU6ICEwLAoJCQkJdmFsdWU6IHZvaWQgMAoJCQl9LAoJCQlzdGF0ZTogYQoJCX0sIGQgPSBQcm9taXNlLnJlc29sdmUoZi5yZXN1bHQpLCBkKSA6IChkID0gKGFzeW5jICgpID0+IHsKCQkJZm9yICg7IGwubGVuZ3RoID09PSAwOykgYXdhaXQgbmV3IFByb21pc2UoKGUpID0+IHsKCQkJCXAgPSBlOwoJCQl9KTsKCQkJbGV0IGUgPSBsLnNoaWZ0KCk7CgkJCXJldHVybiBmID0gZSwgZS5yZXN1bHQ7CgkJfSkoKSwgZCk7Cgl9OwoJcmV0dXJuIHsKCQlhc3luYyBjbGFpbUF1dGhvcml6YXRpb24oZSkgewoJCQlpZiAocyAhPT0gdm9pZCAwKSB7CgkJCQlpZiAocy5ob29rLnRva2VuID09PSBlKSByZXR1cm47CgkJCQl0aHJvdyBFcnJvcihgQSBzZXNzaW9uIGNvbW1hbmQgaW5ib3ggY2Fubm90IGNoYW5nZSBpdHMgYXV0aG9yaXphdGlvbiB0b2tlbi5gKTsKCQkJfQoJCQlsZXQgbiA9IGNyZWF0ZVN0YXRlKGUpOwoJCQlhd2FpdCBjbGFpbUhvb2tPd25lcnNoaXAobi5ob29rKSwgcyA9IG47CgkJfSwKCQlhc3luYyBjbGFpbVN0YWJsZShlKSB7CgkJCWlmIChhICE9PSB2b2lkIDApIHsKCQkJCWlmIChhLmhvb2sudG9rZW4gPT09IGUpIHJldHVybjsKCQkJCXRocm93IEVycm9yKGBBIHNlc3Npb24gY29tbWFuZCBpbmJveCBjYW5ub3QgY2hhbmdlIGl0cyBzdGFibGUgdG9rZW4uYCk7CgkJCX0KCQkJbGV0IG4gPSBjcmVhdGVTdGF0ZShlKTsKCQkJYXdhaXQgY2xhaW1Ib29rT3duZXJzaGlwKG4uaG9vayksIGVuYWJsZShuKSwgYSA9IG47CgkJfSwKCQljb25zdW1lTmV4dCgpIHsKCQkJaWYgKGYgPT09IHZvaWQgMCkgdGhyb3cgRXJyb3IoYENhbm5vdCBjb25zdW1lIGEgc2Vzc2lvbiBjb21tYW5kIGJlZm9yZSBpdCByZXNvbHZlcy5gKTsKCQkJZi5zdGF0ZS5wZW5kaW5nID0gITEsIGYuc3RhdGUucmVzb2x2ZWQgPSB2b2lkIDAsIGYucmVzdWx0LmRvbmUgJiYgKGYuc3RhdGUuY2xvc2VkID0gITApLCBmID0gdm9pZCAwLCBkID0gbnVsbDsKCQl9LAoJCWFzeW5jIGRpc3Bvc2UoKSB7CgkJCWxldCBlID0gWwoJCQkJbywKCQkJCWEsCgkJCQlzCgkJCV0uZmlsdGVyKChlKSA9PiBlICE9PSB2b2lkIDApOwoJCQlvID0gdm9pZCAwLCBhID0gdm9pZCAwLCBzID0gdm9pZCAwLCBhd2FpdCBQcm9taXNlLmFsbChlLm1hcChhc3luYyAoZSkgPT4gYXdhaXQgZGlzcG9zZUhvb2soZS5ob29rKSkpOwoJCX0sCgkJaGFzUmVhZHlBdXRob3JpemF0aW9uKCkgewoJCQlyZXR1cm4gcz8uZW5hYmxlZCAhPT0gITAgfHwgcy5yZXNvbHZlZCA9PT0gdm9pZCAwID8gITEgOiBmID09PSB2b2lkIDAgPyBsWzBdPy5zdGF0ZSA9PT0gcyA6IGYuc3RhdGUgPT09IHM7CgkJfSwKCQluZXh0OiBuZXh0UmVhZCwKCQlhc3luYyBuZXh0V2l0aFNvdXJjZSgpIHsKCQkJcmV0dXJuIHsKCQkJCXJlc3VsdDogYXdhaXQgbmV4dFJlYWQoKSwKCQkJCXNvdXJjZTogZiAhPT0gdm9pZCAwICYmIGYuc3RhdGUgPT09IHMgPyBgYXV0aG9yaXphdGlvbmAgOiBgc2Vzc2lvbmAKCQkJfTsKCQl9LAoJCXNldEF1dGhvcml6YXRpb25XaW5kb3coZSkgewoJCQlpZiAocyA9PT0gdm9pZCAwKSB7CgkJCQlpZiAoZSkgdGhyb3cgRXJyb3IoYENhbm5vdCBvcGVuIHRoZSBhdXRob3JpemF0aW9uIHdpbmRvdyBiZWZvcmUgY2xhaW1pbmcgaXRzIGhvb2suYCk7CgkJCQlyZXR1cm47CgkJCX0KCQkJaWYgKGUpIHsKCQkJCXMuZW5hYmxlZCB8fCBlbmFibGUocyksIGYgIT09IHZvaWQgMCAmJiBmLnN0YXRlICE9PSBzICYmIHMucmVzb2x2ZWQgIT09IHZvaWQgMCAmJiBzLnJlc29sdmVkLm9yZGVyIDwgZi5vcmRlciAmJiAoZW5xdWV1ZShmKSwgZiA9IHZvaWQgMCwgZCA9IG51bGwpLCBkICE9PSBudWxsICYmIGFybShzKTsKCQkJCXJldHVybjsKCQkJfQoJCQlzLmVuYWJsZWQgPSAhMTsKCQkJbGV0IHQgPSBsLmZpbmRJbmRleCgoZSkgPT4gZS5zdGF0ZSA9PT0gcyk7CgkJCXQgIT09IC0xICYmIGwuc3BsaWNlKHQsIDEpOwoJCX0sCgkJYXN5bmMgcmVrZXlDb250aW51YXRpb24oZSkgewoJCQlpZiAoIWUgfHwgbz8uaG9vay50b2tlbiA9PT0gZSkgcmV0dXJuOwoJCQlsZXQgciA9IGNyZWF0ZVN0YXRlKGUpOwoJCQlpZiAobyA9PT0gdm9pZCAwKSB7CgkJCQlhd2FpdCBjbGFpbUhvb2tPd25lcnNoaXAoci5ob29rKSwgZW5hYmxlKHIpLCBvID0gciwgZCAhPT0gbnVsbCAmJiBhcm0ocik7CgkJCQlyZXR1cm47CgkJCX0KCQkJYXJtKHIpLCBhd2FpdCBjbGFpbUhvb2tPd25lcnNoaXAoci5ob29rKSwgZW5hYmxlKHIpOwoJCQlsZXQgaSA9IG87CgkJCW8gPSByLCBhcm0oaSk7CgkJCXRyeSB7CgkJCQlhd2FpdCBkaXNwb3NlSG9vayhpLmhvb2spOwoJCQl9IGNhdGNoIChlKSB7CgkJCQlvID0gdm9pZCAwOwoJCQkJdHJ5IHsKCQkJCQlhd2FpdCBkaXNwb3NlSG9vayhyLmhvb2spOwoJCQkJfSBjYXRjaCB7fQoJCQkJdGhyb3cgZTsKCQkJfQoJCQlpLnJldGlyZWQgPSAhMCwgYy5wdXNoKGkpOwoJCX0KCX07Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vc2Vzc2lvbi10aW1lb3V0LWNvbnRyb2wuanMKZnVuY3Rpb24gY3JlYXRlU2Vzc2lvblRpbWVvdXRDb250cm9sKHQpIHsKCWxldCBuOwoJcmV0dXJuIHsKCQlhc3luYyBkaXNwb3NlKCkgewoJCQlpZiAobiA9PT0gdm9pZCAwKSByZXR1cm47CgkJCWxldCBlID0gbjsKCQkJbiA9IHZvaWQgMCwgYXdhaXQgY2FuY2VsU2Vzc2lvblRpbWVvdXRTdGVwKHsgcnVuSWQ6IGUucnVuSWQgfSk7CgkJfSwKCQlhc3luYyBzdGFydCgpIHsKCQkJbiA9PT0gdm9pZCAwICYmIChuID0gYXdhaXQgc3RhcnRTZXNzaW9uVGltZW91dFN0ZXAodCkpOwoJCX0KCX07Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9leGVjdXRpb24vY29udGludWF0aW9uLWNvbmZsaWN0LXN0ZXAuanMKdmFyIHNldHRsZUNvbnRpbnVhdGlvbkNvbmZsaWN0U3RlcCA9IGdsb2JhbFRoaXNbU3ltYm9sLmZvcigiV09SS0ZMT1dfVVNFX1NURVAiKV0oInN0ZXAvL2V2ZUAwLjUxLjEvL3NldHRsZUNvbnRpbnVhdGlvbkNvbmZsaWN0U3RlcCIpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi93b3JrZmxvdy1lbnRyeS5qcwphc3luYyBmdW5jdGlvbiB3b3JrZmxvd0VudHJ5KGMpIHsKCWxldCB7IHdvcmtmbG93UnVuSWQ6IGQsIHdvcmtmbG93U3RhcnRlZEF0OiBmIH0gPSBnZXRXb3JrZmxvd01ldGFkYXRhKCksIHAgPSBjLnNlcmlhbGl6ZWRDb250ZXh0W2BldmUuY29udGludWF0aW9uVG9rZW5gXSB8fCBgYCwgdiA9IGMuc2VyaWFsaXplZENvbnRleHRbYGV2ZS5tb2RlYF0sIHkgPSBjLnNlcmlhbGl6ZWRDb250ZXh0W2BldmUuY2FwYWJpbGl0aWVzYF0sIGIgPSBjLnNlcmlhbGl6ZWRDb250ZXh0W2BldmUuYnVuZGxlYF07CgljLnNlcmlhbGl6ZWRDb250ZXh0W2BldmUuc2Vzc2lvbklkYF0gPSBkOwoJbGV0IHggPSBnZXRXcml0YWJsZSgpLCBDID0gewoJCWNhbGxlcjogdm9pZCAwLAoJCWNhbGxlclJlc29sdmVkOiAhMSwKCQlsYXN0U2Vzc2lvblN0YXRlOiB2b2lkIDAsCgkJc2VyaWFsaXplZENvbnRleHQ6IGMuc2VyaWFsaXplZENvbnRleHQsCgkJdGVybWluYWxFbWl0dGVkOiAhMQoJfTsKCXRyeSB7CgkJbGV0IHIgPSByZWFkUm9vdFNlc3Npb25JZChjLnNlcmlhbGl6ZWRDb250ZXh0KSwgaSA9IGMuc2VyaWFsaXplZENvbnRleHRbYGV2ZS5keW5hbWljU3ViYWdlbnRBZ2VudENvbmZpZ2BdLCBsID0gY3JlYXRlU2Vzc2lvbkNvbW1hbmRJbmJveCgpLCB1ID0gc2Vzc2lvbkNvbW1hbmRIb29rVG9rZW4oZCksIG0gPSBgJHtkfTphdXRoYCwgaCwgZzsKCQl0cnkgewoJCQlsZXQgW24sIHMsIF8sIFNdID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFsKCQkJCWNyZWF0ZVNlc3Npb25TdGVwKHsKCQkJCQljb21waWxlZEFydGlmYWN0c1NvdXJjZTogYi5zb3VyY2UsCgkJCQkJY29udGludWF0aW9uVG9rZW46IHAsCgkJCQkJZHluYW1pY1N1YmFnZW50QWdlbnRDb25maWc6IGksCgkJCQkJaW5oZXJpdGVkTGltaXRzOiBjLmxpbWl0cywKCQkJCQlub2RlSWQ6IGIubm9kZUlkLAoJCQkJCW91dHB1dFNjaGVtYTogYy5pbnB1dC5vdXRwdXRTY2hlbWEsCgkJCQkJcm9vdFNlc3Npb25JZDogciwKCQkJCQlzZXNzaW9uSWQ6IGQsCgkJCQkJdGFza0lkOiBjLnRhc2tJZAoJCQkJfSksCgkJCQlsLmNsYWltU3RhYmxlKHUpLAoJCQkJbC5jbGFpbUF1dGhvcml6YXRpb24obSksCgkJCQlsLnJla2V5Q29udGludWF0aW9uKHApCgkJCV0pOwoJCQlpZiAobi5zdGF0dXMgPT09IGByZWplY3RlZGApIHRocm93IG4ucmVhc29uOwoJCQlpZiAocy5zdGF0dXMgPT09IGByZWplY3RlZGApIHRocm93IHMucmVhc29uOwoJCQlpZiAoXy5zdGF0dXMgPT09IGByZWplY3RlZGApIHRocm93IF8ucmVhc29uOwoJCQlpZiAoUy5zdGF0dXMgPT09IGByZWplY3RlZGApIHsKCQkJCWlmIChpc0hvb2tDb25mbGljdEVycm9yKFMucmVhc29uKSkgcmV0dXJuIChjLmFjdGl2aXR5Q29sbGVjdG9yUnVuSWQgIT09IHZvaWQgMCB8fCBjLmNvbnRpbnVhdGlvbkNvbmZsaWN0Q29tbWFuZCAhPT0gdm9pZCAwKSAmJiBhd2FpdCBzZXR0bGVDb250aW51YXRpb25Db25mbGljdFN0ZXAoewoJCQkJCWFjdGl2aXR5Q29sbGVjdG9yUnVuSWQ6IGMuYWN0aXZpdHlDb2xsZWN0b3JSdW5JZCwKCQkJCQljb21tYW5kOiBjLmNvbnRpbnVhdGlvbkNvbmZsaWN0Q29tbWFuZCwKCQkJCQljb250aW51YXRpb25Ub2tlbjogcCwKCQkJCQlvd25lclNlc3Npb25JZDogdHlwZW9mIFMucmVhc29uLmNvbmZsaWN0aW5nUnVuSWQgPT0gYHN0cmluZ2AgPyBTLnJlYXNvbi5jb25mbGljdGluZ1J1bklkIDogdm9pZCAwCgkJCQl9KSwgeyBvdXRwdXQ6IGBgIH07CgkJCQl0aHJvdyBTLnJlYXNvbjsKCQkJfQoJCQloID0gbi52YWx1ZS5zdGF0ZSwgQy5sYXN0U2Vzc2lvblN0YXRlID0gaCwgQy5jYWxsZXIgPSBoYXNEZWxlZ2F0ZWRDYWxsZXJDb250ZXh0KGMuc2VyaWFsaXplZENvbnRleHQpID8gYXdhaXQgcmVzb2x2ZUluaXRpYWxUdXJuQ2FsbGVyU3RlcCh7IHNlcmlhbGl6ZWRDb250ZXh0OiBjLnNlcmlhbGl6ZWRDb250ZXh0IH0pIDogdm9pZCAwLCBDLmNhbGxlclJlc29sdmVkID0gITAsIGcgPSBhd2FpdCBydW5Ecml2ZXJMb29wKHsKCQkJCWNhcGFiaWxpdGllczogeSwKCQkJCWNvbW1hbmRJbmJveDogbCwKCQkJCWRyaXZlcldyaXRhYmxlOiB4LAoJCQkJaW5pdGlhbElucHV0OiB7CgkJCQkJZGVsaXZlcnlNZXRhZGF0YTogYy5zZXJpYWxpemVkQ29udGV4dFtgZXZlLmNoYW5uZWxEZWxpdmVyeWBdID09PSB2b2lkIDAgPyB2b2lkIDAgOiBbewoJCQkJCQkuLi5jLnNlcmlhbGl6ZWRDb250ZXh0W2BldmUuY2hhbm5lbERlbGl2ZXJ5YF0sCgkJCQkJCXBheWxvYWRJbmRleDogMAoJCQkJCX1dLAoJCQkJCWtpbmQ6IGBkZWxpdmVyYCwKCQkJCQlwYXlsb2FkczogW2F0dGFjaENsaWVudENvbnRleHQoewoJCQkJCQltZXNzYWdlOiBjLmlucHV0Lm1lc3NhZ2UsCgkJCQkJCWNvbnRleHQ6IGMuaW5wdXQuY29udGV4dCwKCQkJCQkJb3V0cHV0U2NoZW1hOiBjLmlucHV0Lm91dHB1dFNjaGVtYQoJCQkJCX0sIHJlYWRDbGllbnRDb250ZXh0KGMuaW5wdXQpKV0sCgkJCQkJcmVxdWVzdElkOiByZWFkQ2hhbm5lbFJlcXVlc3RJZChjLnNlcmlhbGl6ZWRDb250ZXh0KQoJCQkJfSwKCQkJCWNyYXNoQ2xlYW51cFN0YXRlOiBDLAoJCQkJbW9kZTogdiwKCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiBjLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJc2Vzc2lvblN0YXRlOiBoLAoJCQkJc2Vzc2lvblRpbWVvdXREZWFkbGluZTogYy5zZXNzaW9uVGltZW91dE1zID09PSAhMSA/IHZvaWQgMCA6IG5ldyBEYXRlKGYuZ2V0VGltZSgpICsgKGMuc2Vzc2lvblRpbWVvdXRNcyA/PyAyNTkyZTYpKSwKCQkJCXN0YWJsZUNvbW1hbmRUb2tlbjogdQoJCQl9KTsKCQl9IGZpbmFsbHkgewoJCQlhd2FpdCBsLmRpc3Bvc2UoKTsKCQl9CgkJcmV0dXJuIGcua2luZCA9PT0gYHJlc3VsdGAgPyBnLnJlc3VsdCA6IGF3YWl0IGZpbmFsaXplRXhwaXJlZFNlc3Npb24oewoJCQljYWxsZXI6IEMuY2FsbGVyLAoJCQlkcml2ZXJXcml0YWJsZTogeCwKCQkJbW9kZTogdiwKCQkJc2VyaWFsaXplZENvbnRleHQ6IGcuc2VyaWFsaXplZENvbnRleHQsCgkJCXNlc3Npb25TdGF0ZTogZy5zZXNzaW9uU3RhdGUsCgkJCXRlcm1pbmFsU3RhdGU6IEMKCQl9KTsKCX0gY2F0Y2ggKGUpIHsKCQlsZXQgdCA9IEMudGVybWluYWxFbWl0dGVkOwoJCXRocm93ICFDLnRlcm1pbmFsRW1pdHRlZCAmJiBDLmxhc3RTZXNzaW9uU3RhdGUgIT09IHZvaWQgMCAmJiBhd2FpdCB0ZXJtaW5hdGVDaGlsZFNlc3Npb25zU3RlcCh7CgkJCXNlcmlhbGl6ZWRDb250ZXh0OiBDLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQlzZXNzaW9uU3RhdGU6IEMubGFzdFNlc3Npb25TdGF0ZQoJCX0pLCBDLnRlcm1pbmFsRW1pdHRlZCB8fD0gKGF3YWl0IGVtaXRUZXJtaW5hbFNlc3Npb25GYWlsdXJlU3RlcCh7CgkJCWVycm9yOiBub3JtYWxpemVTZXJpYWxpemFibGVFcnJvcihlKSwKCQkJcGFyZW50V3JpdGFibGU6IHgsCgkJCXNlcmlhbGl6ZWRDb250ZXh0OiBDLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQl0dXJuSWQ6IEMudHVybklkCgkJfSksICEwKSwgdCB8fCAodiA9PT0gYHRhc2tgID8gKGF3YWl0IGZpcmVTZXNzaW9uQ2FsbGJhY2tTdGVwKHsKCQkJZXJyb3I6IG5vcm1hbGl6ZVNlcmlhbGl6YWJsZUVycm9yKGUpLAoJCQlzZXJpYWxpemVkQ29udGV4dDogQy5zZXJpYWxpemVkQ29udGV4dCwKCQkJc3RhdHVzOiBgZmFpbGVkYAoJCX0pLCBhd2FpdCBub3RpZnlEZWxlZ2F0ZWRQYXJlbnRTdGVwKHsKCQkJcmVzdWx0OiBjcmVhdGVEZWxlZ2F0ZWRTdWJhZ2VudEVycm9yUmVzdWx0KEMuc2VyaWFsaXplZENvbnRleHQsIGUpLAoJCQlzZXJpYWxpemVkQ29udGV4dDogQy5zZXJpYWxpemVkQ29udGV4dAoJCX0pKSA6IChDLmNhbGxlciAhPT0gdm9pZCAwIHx8ICFDLmNhbGxlclJlc29sdmVkKSAmJiBhd2FpdCBub3RpZnlUdXJuQ2FsbGVyU3RlcCh7CgkJCWNhbGxlcjogYXdhaXQgcmVzb2x2ZUNhbGxlckZvckNyYXNoKEMsIEMuc2VyaWFsaXplZENvbnRleHQpLAoJCQlsaWZlY3ljbGU6IGB0ZXJtaW5hbGAsCgkJCXNlc3Npb25JZDogZCwKCQkJc2V0dGxlZDogewoJCQkJaXNFcnJvcjogITAsCgkJCQlvdXRwdXQ6IGUKCQkJfQoJCX0pKSwgY3JlYXRlU2FmZU91dGVyV29ya2Zsb3dFcnJvcigpOwoJfQp9CmZ1bmN0aW9uIGhhc0RlbGVnYXRlZENhbGxlckNvbnRleHQoZSkgewoJaWYgKGVbYGV2ZS5zZXNzaW9uQ2FsbGJhY2tgXSAhPT0gdm9pZCAwKSByZXR1cm4gITA7CglsZXQgdCA9IGVbYGV2ZS5jaGFubmVsYF07CglyZXR1cm4gdHlwZW9mIHQgPT0gYG9iamVjdGAgJiYgISF0ICYmIFJlZmxlY3QuZ2V0KHQsIGBraW5kYCkgPT09IGBzdWJhZ2VudGA7Cn0KYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZUNhbGxlckZvckNyYXNoKGUsIHQpIHsKCWlmIChlLmNhbGxlclJlc29sdmVkKSByZXR1cm4gZS5jYWxsZXI7Cgl0cnkgewoJCXJldHVybiBhd2FpdCByZXNvbHZlSW5pdGlhbFR1cm5DYWxsZXJTdGVwKHsgc2VyaWFsaXplZENvbnRleHQ6IHQgfSk7Cgl9IGNhdGNoIHsKCQlyZXR1cm47Cgl9Cn0KZnVuY3Rpb24gY3JlYXRlU2FmZU91dGVyV29ya2Zsb3dFcnJvcigpIHsKCWxldCBlID0gRXJyb3IoYEFnZW50IHdvcmtmbG93IGZhaWxlZC4gSW5zcGVjdCB0aGUgcHJpdmF0ZSBzZXNzaW9uIHRyYWNlIGZvciBkZXRhaWxzLmApOwoJcmV0dXJuIGUubmFtZSA9IGBFdmVXb3JrZmxvd0ZhaWx1cmVgLCBlOwp9CmFzeW5jIGZ1bmN0aW9uIHJ1bkRyaXZlckxvb3AoZSkgewoJbGV0IHQgPSBlLmNvbW1hbmRJbmJveCwgbiA9IG5ldyBNYXAoKSwgbmV4dFBhcmtlZEFjdGl2aXR5ID0gYXN5bmMgKHIpID0+IHsKCQlsZXQgYyA9IG5ldyBTZXQoci5leHBlY3RlZEF0dGVtcHRJZHMpOwoJCWZvciAobGV0IGUgb2Ygbi5rZXlzKCkpIGMuaGFzKGUpIHx8IG4uZGVsZXRlKGUpOwoJCWZvciAoOzspIHsKCQkJaWYgKGMuc2l6ZSA+IDAgJiYgWy4uLmNdLmV2ZXJ5KChlKSA9PiBuLmhhcyhlKSkpIHsKCQkJCWxldCBlID0gWy4uLmNdLm1hcCgoZSkgPT4gbi5nZXQoZSkpOwoJCQkJcmV0dXJuIG4uY2xlYXIoKSwgewoJCQkJCWtpbmQ6IGBhdXRob3JpemF0aW9uLXJlc3VtZWAsCgkJCQkJcGF5bG9hZHM6IGUKCQkJCX07CgkJCX0KCQkJbGV0IHIgPSBhd2FpdCBuZXh0VHVybkRlbGl2ZXJ5KHsKCQkJCWF3YWl0QXV0aG9yaXphdGlvbkNhbGxiYWNrczogYy5zaXplID4gMCwKCQkJCWJ1ZmZlcmVkRGVsaXZlcmllczogaSwKCQkJCWJ1ZmZlcmVkU2Vzc2lvbkNvbnRyb2xzOiBhLAoJCQkJY2FuY2VsbGVkVGFza0lkczogbywKCQkJCWNvbW1hbmRJbmJveDogdCwKCQkJCWRlZmVyRGVsaXZlcmllczogZS5tb2RlID09PSBgdGFza2AgJiYgYy5zaXplID4gMCwKCQkJCWRyaXZlcldyaXRhYmxlOiBlLmRyaXZlcldyaXRhYmxlLAoJCQkJc2VlblRhc2tEZWxpdmVyaWVzOiBzLAoJCQkJc3RhdGVDdXJzb3I6IGwKCQkJfSk7CgkJCWlmIChyLmtpbmQgIT09IGBhdXRob3JpemF0aW9uYCkgcmV0dXJuIHI7CgkJCWZvciAobGV0IGUgb2Ygci5wYXlsb2FkcykgewoJCQkJbGV0IHQgPSBlLmF1dGhvcml6YXRpb25DYWxsYmFjazsKCQkJCXR5cGVvZiB0Py5hdHRlbXB0SWQgPT0gYHN0cmluZ2AgJiYgYy5oYXModC5hdHRlbXB0SWQpICYmICFuLmhhcyh0LmF0dGVtcHRJZCkgJiYgbi5zZXQodC5hdHRlbXB0SWQsIGUpOwoJCQl9CgkJCWlmIChyLmNsb3NlZCkgewoJCQkJbGV0IGUgPSBbLi4ubi52YWx1ZXMoKV07CgkJCQlyZXR1cm4gbi5jbGVhcigpLCB7CgkJCQkJa2luZDogYGF1dGhvcml6YXRpb24tcmVzdW1lYCwKCQkJCQlwYXlsb2FkczogZQoJCQkJfTsKCQkJfQoJCX0KCX0sIHIgPSAwLCBuZXh0VHVybkNvbnRyb2xUb2tlbiA9ICgpID0+IGAke2Uuc2Vzc2lvblN0YXRlLnNlc3Npb25JZH06dHVybi1jb250cm9sOiR7U3RyaW5nKHIrKyl9YCwgaSA9IFtdLCBhID0gW10sIG8gPSBuZXcgU2V0KCksIHMgPSBuZXcgU2V0KCksIGwgPSBuZXcgU2Vzc2lvblN0YXRlQ3Vyc29yKHsKCQlzZXJpYWxpemVkQ29udGV4dDogZS5zZXJpYWxpemVkQ29udGV4dCwKCQlzZXNzaW9uU3RhdGU6IGUuc2Vzc2lvblN0YXRlCgl9KSwgdSA9IGUuc2Vzc2lvblRpbWVvdXREZWFkbGluZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3JlYXRlU2Vzc2lvblRpbWVvdXRDb250cm9sKHsKCQlkZWFkbGluZTogZS5zZXNzaW9uVGltZW91dERlYWRsaW5lLAoJCXRva2VuOiBlLnN0YWJsZUNvbW1hbmRUb2tlbgoJfSksIG0sIHJ1blR1cm4gPSBhc3luYyAobikgPT4gewoJCWxldCBjID0gbC5zZXNzaW9uU3RhdGUsIHUgPSBlLmNyYXNoQ2xlYW51cFN0YXRlLmNhbGxlcjsKCQl1Py50YXNrSWQgIT09IHZvaWQgMCAmJiBzLmFkZCh1LnRhc2tJZCk7CgkJbGV0IGQgPSB1ID09PSB2b2lkIDAgPyBsLnNlcmlhbGl6ZWRDb250ZXh0IDogYXdhaXQgYmluZFR1cm5DYWxsZXJDb250ZXh0U3RlcCh7CgkJCWNhbGxlcjogdSwKCQkJc2VyaWFsaXplZENvbnRleHQ6IGwuc2VyaWFsaXplZENvbnRleHQKCQl9KTsKCQllLmNyYXNoQ2xlYW51cFN0YXRlLnR1cm5JZCA9IGB0dXJuXyR7U3RyaW5nKHIpfWA7CgkJbGV0IHAgPSBhd2FpdCBkaXNwYXRjaEFuZEF3YWl0VHVybih7CgkJCWJ1ZmZlcmVkRGVsaXZlcmllczogaSwKCQkJYnVmZmVyZWRTZXNzaW9uQ29udHJvbHM6IGEsCgkJCWNhbmNlbGxlZFRhc2tJZHM6IG8sCgkJCWNhcGFiaWxpdGllczogZS5jYXBhYmlsaXRpZXMsCgkJCWNvbW1hbmRJbmJveDogdCwKCQkJY29udHJvbFRva2VuOiBuZXh0VHVybkNvbnRyb2xUb2tlbigpLAoJCQlkZWxpdmVyeTogbiwKCQkJbW9kZTogZS5tb2RlLAoJCQlwYXJlbnRXcml0YWJsZTogZS5kcml2ZXJXcml0YWJsZSwKCQkJc2VyaWFsaXplZENvbnRleHQ6IGQsCgkJCXNlZW5UYXNrRGVsaXZlcmllczogcywKCQkJc2Vzc2lvblN0YXRlOiBsLnNlc3Npb25TdGF0ZSwKCQkJc3RhdGVDdXJzb3I6IGwKCQl9KTsKCQlhd2FpdCBtPy4oKSwgbSA9IHAuZGlzcG9zZTsKCQlsZXQgaCA9IGwuc2Vzc2lvblN0YXRlID09PSBjID8gcC5hY3Rpb24gOiByZWJhc2VUYXNrQWdlbnRIYW5kbGVNdXRhdGlvbnMocC5hY3Rpb24sIGwuc2Vzc2lvblN0YXRlLCBjKTsKCQlyZXR1cm4gbC5hZG9wdFN0YXRlKGgpLCBlLmNyYXNoQ2xlYW51cFN0YXRlLmxhc3RTZXNzaW9uU3RhdGUgPSBsLnNlc3Npb25TdGF0ZSwgZS5jcmFzaENsZWFudXBTdGF0ZS5zZXJpYWxpemVkQ29udGV4dCA9IGwuc2VyaWFsaXplZENvbnRleHQsIGg7Cgl9OwoJdHJ5IHsKCQlhd2FpdCB1Py5zdGFydCgpOwoJCWxldCBuID0gYXdhaXQgcnVuVHVybihlLmluaXRpYWxJbnB1dCk7CgkJZm9yICg7OykgewoJCQlpZiAobi5raW5kID09PSBgZG9uZWApIHJldHVybiB7CgkJCQlraW5kOiBgcmVzdWx0YCwKCQkJCXJlc3VsdDogYXdhaXQgZmluYWxpemVEb25lKHsKCQkJCQlhY3Rpb246IG4sCgkJCQkJY2FsbGVyOiBlLmNyYXNoQ2xlYW51cFN0YXRlLmNhbGxlciwKCQkJCQltb2RlOiBlLm1vZGUsCgkJCQkJdGVybWluYWxTdGF0ZTogZS5jcmFzaENsZWFudXBTdGF0ZQoJCQkJfSkKCQkJfTsKCQkJaWYgKG4ua2luZCAhPT0gYHBhcmtgKSB0aHJvdyBFcnJvcihgRHJpdmVyIHJlY2VpdmVkIHVuZXhwZWN0ZWQgdHVybiBhY3Rpb24gIiR7bi5raW5kfSIuYCk7CgkJCWlmIChuLmNhbmNlbGxlZCA9PT0gITApIHsKCQkJCWxldCB0ID0gYXdhaXQgc2V0dGxlQ2FuY2VsbGVkVHVyblN0ZXAoewoJCQkJCXBhcmVudFdyaXRhYmxlOiBlLmRyaXZlcldyaXRhYmxlLAoJCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiBsLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJCXNlc3Npb25TdGF0ZTogbC5zZXNzaW9uU3RhdGUKCQkJCX0pOwoJCQkJbC5hZG9wdFN0YXRlKHQpLCBlLmNyYXNoQ2xlYW51cFN0YXRlLnNlcmlhbGl6ZWRDb250ZXh0ID0gbC5zZXJpYWxpemVkQ29udGV4dDsKCQkJCWxldCBuID0gewoJCQkJCWNhbGxl",
	"cjogZS5jcmFzaENsZWFudXBTdGF0ZS5jYWxsZXIsCgkJCQkJc2Vzc2lvbklkOiBsLnNlc3Npb25TdGF0ZS5zZXNzaW9uSWQKCQkJCX07CgkJCQlhd2FpdCBub3RpZnlDYW5jZWxsZWRUYXNrQ2FsbGVyU3RlcCh0LnVzYWdlID09PSB2b2lkIDAgPyBuIDogewoJCQkJCS4uLm4sCgkJCQkJdXNhZ2U6IHQudXNhZ2UKCQkJCX0pLCBlLmNyYXNoQ2xlYW51cFN0YXRlLmxhc3RTZXNzaW9uU3RhdGUgPSBsLnNlc3Npb25TdGF0ZTsKCQkJfQoJCQlsLnNlc3Npb25TdGF0ZS5jb250aW51YXRpb25Ub2tlbiAmJiBhd2FpdCB0LnJla2V5Q29udGludWF0aW9uKGwuc2Vzc2lvblN0YXRlLmNvbnRpbnVhdGlvblRva2VuKTsKCQkJbGV0IHIgPSBuLnNldHRsZWQ7CgkJCW4uY2FuY2VsbGVkICE9PSAhMCAmJiByICE9PSB2b2lkIDAgPyAoZS5jcmFzaENsZWFudXBTdGF0ZS5jYWxsZXIgIT09IHZvaWQgMCAmJiBhd2FpdCBub3RpZnlUdXJuQ2FsbGVyU3RlcCh7CgkJCQljYWxsZXI6IGUuY3Jhc2hDbGVhbnVwU3RhdGUuY2FsbGVyLAoJCQkJbGlmZWN5Y2xlOiBgcGFya2VkYCwKCQkJCXNlc3Npb25JZDogbC5zZXNzaW9uU3RhdGUuc2Vzc2lvbklkLAoJCQkJc2V0dGxlZDogcgoJCQl9KSwgZS5jcmFzaENsZWFudXBTdGF0ZS5jYWxsZXIgPSB2b2lkIDApIDogbi5jYW5jZWxsZWQgPT09ICEwICYmIChlLmNyYXNoQ2xlYW51cFN0YXRlLmNhbGxlciA9IHZvaWQgMCk7CgkJCWxldCBpID0gYXdhaXQgbmV4dFBhcmtlZEFjdGl2aXR5KHsgZXhwZWN0ZWRBdHRlbXB0SWRzOiBuLmF1dGhvcml6YXRpb25BdHRlbXB0SWRzID8/IFtdIH0pOwoJCQlpZiAoZS5jcmFzaENsZWFudXBTdGF0ZS5sYXN0U2Vzc2lvblN0YXRlID0gbC5zZXNzaW9uU3RhdGUsIGkua2luZCA9PT0gYGF1dGhvcml6YXRpb24tcmVzdW1lYCkgewoJCQkJbiA9IGF3YWl0IHJ1blR1cm4oewoJCQkJCWtpbmQ6IGBkZWxpdmVyYCwKCQkJCQlwYXlsb2FkczogaS5wYXlsb2FkcwoJCQkJfSk7CgkJCQljb250aW51ZTsKCQkJfQoJCQlpZiAoaS5raW5kID09PSBgZXhwaXJlZGApIHJldHVybiB7CgkJCQlraW5kOiBgZXhwaXJlZGAsCgkJCQlzZXJpYWxpemVkQ29udGV4dDogbC5zZXJpYWxpemVkQ29udGV4dCwKCQkJCXNlc3Npb25TdGF0ZTogbC5zZXNzaW9uU3RhdGUKCQkJfTsKCQkJaWYgKGkua2luZCA9PT0gYHJlc2V0YCkgcmV0dXJuIHsKCQkJCWtpbmQ6IGByZXN1bHRgLAoJCQkJcmVzdWx0OiBhd2FpdCBmaW5hbGl6ZUV4cGlyZWRTZXNzaW9uKHsKCQkJCQljYWxsZXI6IGUuY3Jhc2hDbGVhbnVwU3RhdGUuY2FsbGVyLAoJCQkJCWRyaXZlcldyaXRhYmxlOiBlLmRyaXZlcldyaXRhYmxlLAoJCQkJCW1vZGU6IGUubW9kZSwKCQkJCQlzZXJpYWxpemVkQ29udGV4dDogbC5zZXJpYWxpemVkQ29udGV4dCwKCQkJCQlzZXNzaW9uU3RhdGU6IGwuc2Vzc2lvblN0YXRlLAoJCQkJCXRlcm1pbmFsU3RhdGU6IGUuY3Jhc2hDbGVhbnVwU3RhdGUKCQkJCX0pCgkJCX07CgkJCWlmIChpLmtpbmQgPT09IGBjbGVhcmAgfHwgaS5raW5kID09PSBgY29tcGFjdGApIHsKCQkJCW4gPSBhd2FpdCBydW5UdXJuKHsga2luZDogaS5raW5kIH0pOwoJCQkJY29udGludWU7CgkJCX0KCQkJaWYgKGkua2luZCA9PT0gYGNsb3NlZGApIHJldHVybiB7CgkJCQlraW5kOiBgcmVzdWx0YCwKCQkJCXJlc3VsdDogYXdhaXQgZmluYWxpemVFeHBpcmVkU2Vzc2lvbih7CgkJCQkJY2FsbGVyOiBlLmNyYXNoQ2xlYW51cFN0YXRlLmNhbGxlciwKCQkJCQlkcml2ZXJXcml0YWJsZTogZS5kcml2ZXJXcml0YWJsZSwKCQkJCQltb2RlOiBlLm1vZGUsCgkJCQkJc2VyaWFsaXplZENvbnRleHQ6IGwuc2VyaWFsaXplZENvbnRleHQsCgkJCQkJc2Vzc2lvblN0YXRlOiBsLnNlc3Npb25TdGF0ZSwKCQkJCQl0ZXJtaW5hbFN0YXRlOiBlLmNyYXNoQ2xlYW51cFN0YXRlCgkJCQl9KQoJCQl9OwoJCQlpZiAoaS5raW5kID09PSBgY2FuY2VsLXR1cm5gKSB7CgkJCQlhd2FpdCBjYW5jZWxEZXNjZW5kYW50VHVybnNTdGVwKHsKCQkJCQlzZXJpYWxpemVkQ29udGV4dDogbC5zZXJpYWxpemVkQ29udGV4dCwKCQkJCQlzZXNzaW9uU3RhdGU6IGwuc2Vzc2lvblN0YXRlCgkJCQl9KTsKCQkJCWxldCB0ID0gYXdhaXQgc2V0dGxlQ2FuY2VsbGVkVHVyblN0ZXAoewoJCQkJCXBhcmVudFdyaXRhYmxlOiBlLmRyaXZlcldyaXRhYmxlLAoJCQkJCXNlcmlhbGl6ZWRDb250ZXh0OiBsLnNlcmlhbGl6ZWRDb250ZXh0LAoJCQkJCXNlc3Npb25TdGF0ZTogbC5zZXNzaW9uU3RhdGUKCQkJCX0pOwoJCQkJbC5hZG9wdFN0YXRlKHQpLCBlLmNyYXNoQ2xlYW51cFN0YXRlLnNlcmlhbGl6ZWRDb250ZXh0ID0gbC5zZXJpYWxpemVkQ29udGV4dCwgbiA9IHsKCQkJCQkuLi5uLAoJCQkJCXNldHRsZWQ6IHZvaWQgMAoJCQkJfSwgZS5jcmFzaENsZWFudXBTdGF0ZS5jYWxsZXIgPSB2b2lkIDAsIGUuY3Jhc2hDbGVhbnVwU3RhdGUubGFzdFNlc3Npb25TdGF0ZSA9IGwuc2Vzc2lvblN0YXRlOwoJCQkJY29udGludWU7CgkJCX0KCQkJaS5kZWxpdmVyeS5jYWxsZXIgIT09IHZvaWQgMCAmJiAoZS5jcmFzaENsZWFudXBTdGF0ZS5jYWxsZXIgPSBpLmRlbGl2ZXJ5LmNhbGxlciksIG4gPSBhd2FpdCBydW5UdXJuKGkuZGVsaXZlcnkpOwoJCX0KCX0gZmluYWxseSB7CgkJYXdhaXQgbT8uKCksIGF3YWl0IHU/LmRpc3Bvc2UoKTsKCX0KfQp3b3JrZmxvd0VudHJ5LndvcmtmbG93SWQgPSBgd29ya2Zsb3cvL2V2ZS8vd29ya2Zsb3dFbnRyeWA7CndvcmtmbG93RW50cnkud29ya2Zsb3dJZCA9ICJ3b3JrZmxvdy8vZXZlLy93b3JrZmxvd0VudHJ5IjsKZ2xvYmFsVGhpcy5fX3ByaXZhdGVfd29ya2Zsb3dzLnNldCgid29ya2Zsb3cvL2V2ZS8vd29ya2Zsb3dFbnRyeSIsIHdvcmtmbG93RW50cnkpOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIGRpc3Qvc3JjL2V4ZWN1dGlvbi90b29scy9zdWJhZ2VudC9pbnZva2UtYWdlbnQuanMKY29uc3QgQUdFTlRfSU5WT0NBVElPTl9JRFMgPSBTeW1ib2wuZm9yKGBldmUud29ya2Zsb3ctdG9vbC1ydW4uYWdlbnQtaW52b2NhdGlvbi1pZHNgKTsKYXN5bmMgZnVuY3Rpb24gaW52b2tlQWdlbnQoaSwgYSwgbykgewoJdmFsaWRhdGVBZ2VudElucHV0KGEsICExKTsKCWxldCBzID0gcmVhZFdvcmtmbG93VG9vbFJ1blJlZihpKSwgYyA9IHJlYWRXb3JrZmxvd1Rvb2xSdW5Pd25lcihpKSwgbCA9IHJlYWRXb3JrZmxvd1Rvb2xSdW5BZG1pc3Npb24oaSk7CgljbGFpbUludm9jYXRpb25JZChpLCBvLmludm9jYXRpb25JZCk7CglsZXQgdSA9IGNyZWF0ZUhvb2soKSwgZCA9ICExOwoJdHJ5IHsKCQlpZiAoYXdhaXQgY2xhaW1Ib29rT3duZXJzaGlwKHUpLCBkID0gITAsIGwgIT09IHZvaWQgMCkgewoJCQlsZXQgZSA9IGF3YWl0IGw7CgkJCWlmIChlLnN0YXR1cyA9PT0gYHJlamVjdGVkYCkgdGhyb3cgRXJyb3IoZS5yZWFzb24pOwoJCX0KCQlhd2FpdCByZXN1bWVIb29rU3RlcChjLnJlcXVlc3QsIHsKCQkJZnJvbTogcywKCQkJcmVwbHlUbzogdS50b2tlbiwKCQkJcmVxdWVzdDogewoJCQkJaW5wdXQ6IGEsCgkJCQlpbnZvY2F0aW9uSWQ6IG8uaW52b2NhdGlvbklkLAoJCQkJa2luZDogYGFnZW50LWludm9rZWAKCQkJfQoJCX0pOwoJCWxldCBlID0gdVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKTsKCQlmb3IgKDs7KSB7CgkJCWxldCB0ID0gYXdhaXQgbmV4dEFnZW50UmVwbHkoZSwgaS5hYm9ydFNpZ25hbCk7CgkJCWlmICh0LmRvbmUpIGJyZWFrOwoJCQlsZXQgbiA9IHQudmFsdWU7CgkJCWlmIChuLmtpbmQgPT09IGBydW50aW1lLWFjdGlvbi1yZXN1bHRgKSB7CgkJCQlsZXQgZSA9IG4ucmVzdWx0cy5maW5kKChlKSA9PiBlLmtpbmQgPT09IGBzdWJhZ2VudC1yZXN1bHRgICYmIGUuY2FsbElkID09PSBvLmludm9jYXRpb25JZCk7CgkJCQlpZiAoZSAhPT0gdm9pZCAwKSB7CgkJCQkJaWYgKGUub3JpZ2luID09PSBgY2hpbGRgICYmIGF3YWl0IHJlc3VtZUhvb2tTdGVwKGMucmVxdWVzdCwgewoJCQkJCQlmcm9tOiBzLAoJCQkJCQlyZXBseVRvOiB1LnRva2VuLAoJCQkJCQlyZXF1ZXN0OiB7CgkJCQkJCQlraW5kOiBgYWdlbnQtc2V0dGxlZGAsCgkJCQkJCQlyZXN1bHQ6IGUKCQkJCQkJfQoJCQkJCX0pLCBvLnJldHVyblJlc3VsdCA9PT0gITAgJiYgcy5leGVjdXRpb24gPT09IGBibG9ja2luZ2ApIHJldHVybiBlOwoJCQkJCWlmIChlLmlzRXJyb3IgPT09ICEwKSB0aHJvdyBlLm91dHB1dDsKCQkJCQlyZXR1cm4gZS5vdXRwdXQ7CgkJCQl9CgkJCQljb250aW51ZTsKCQkJfQoJCQlpZiAobi5raW5kID09PSBgc3ViYWdlbnQtaW5wdXQtcmVxdWVzdGApIHsKCQkJCWF3YWl0IHJlc3VtZUhvb2tTdGVwKGMucmVxdWVzdCwgewoJCQkJCWZyb206IHMsCgkJCQkJcmVwbHlUbzogbi5jaGlsZENvbnRpbnVhdGlvblRva2VuLAoJCQkJCXJlcXVlc3Q6IHsKCQkJCQkJa2luZDogYGlucHV0LWJhdGNoYCwKCQkJCQkJcmVxdWVzdHM6IG4uZXZlbnQucmVxdWVzdHMKCQkJCQl9LAoJCQkJCXJlcXVlc3RDb29yZGluYXRlczogewoJCQkJCQlzZXF1ZW5jZTogbi5ldmVudC5zZXF1ZW5jZSwKCQkJCQkJc3RlcEluZGV4OiBuLmV2ZW50LnN0ZXBJbmRleCwKCQkJCQkJdHVybklkOiBuLmV2ZW50LnR1cm5JZAoJCQkJCX0KCQkJCX0pOwoJCQkJY29udGludWU7CgkJCX0KCQkJaWYgKG4ua2luZCA9PT0gYHRhc2stdXBkYXRlYCkgewoJCQkJYXdhaXQgcmVzdW1lSG9va1N0ZXAoYy5yZXBvcnQsIHsKCQkJCQlmcm9tOiBzLAoJCQkJCXVwZGF0ZTogbi5tZXNzYWdlCgkJCQl9KTsKCQkJCWNvbnRpbnVlOwoJCQl9CgkJCWF3YWl0IHJlc3VtZUhvb2tTdGVwKGMucmVxdWVzdCwgewoJCQkJZnJvbTogcywKCQkJCXJlcGx5VG86IHUudG9rZW4sCgkJCQlyZXF1ZXN0OiB7CgkJCQkJZXZlbnQ6IG4sCgkJCQkJa2luZDogYGF1dGhvcml6YXRpb24tcmVxdWVzdGAKCQkJCX0KCQkJfSk7CgkJfQoJfSBmaW5hbGx5IHsKCQlpZiAoZCkgdHJ5IHsKCQkJYXdhaXQgZGlzcG9zZUhvb2sodSk7CgkJfSBjYXRjaCB7fQoJfQoJdGhyb3cgRXJyb3IoYEFnZW50ICIke2EudGFyZ2V0fSIgY2xvc2VkIHdpdGhvdXQgYSByZXN1bHQuYCk7Cn0KYXN5bmMgZnVuY3Rpb24gbmV4dEFnZW50UmVwbHkoZSwgdCkgewoJaWYgKHQgPT09IHZvaWQgMCkgcmV0dXJuIGF3YWl0IGUubmV4dCgpOwoJaWYgKHQuYWJvcnRlZCkgdGhyb3cgdC5yZWFzb247CglsZXQgbiwgciA9IG5ldyBQcm9taXNlKChlLCB0KSA9PiB7CgkJbiA9IHQ7Cgl9KSwgYWJvcnQgPSAoKSA9PiBuPy4odC5yZWFzb24pOwoJdC5hZGRFdmVudExpc3RlbmVyKGBhYm9ydGAsIGFib3J0LCB7IG9uY2U6ICEwIH0pOwoJdHJ5IHsKCQlyZXR1cm4gYXdhaXQgUHJvbWlzZS5yYWNlKFtlLm5leHQoKSwgcl0pOwoJfSBmaW5hbGx5IHsKCQl0LnJlbW92ZUV2ZW50TGlzdGVuZXIoYGFib3J0YCwgYWJvcnQpOwoJfQp9CmZ1bmN0aW9uIHZhbGlkYXRlQWdlbnRJbnB1dChlLCB0KSB7CglpZiAodCAmJiAodHlwZW9mIGUua2V5ICE9IGBzdHJpbmdgIHx8IGUua2V5LnRyaW0oKSA9PT0gYGApKSB0aHJvdyBUeXBlRXJyb3IoImFnZW50KCkgcmVxdWlyZXMgYSBub24tZW1wdHkgYGtleWAuIik7CglpZiAodHlwZW9mIGUudGFyZ2V0ICE9IGBzdHJpbmdgIHx8IGUudGFyZ2V0LnRyaW0oKSA9PT0gYGApIHRocm93IFR5cGVFcnJvcigiYWdlbnQoKSByZXF1aXJlcyBhIG5vbi1lbXB0eSBgdGFyZ2V0YC4iKTsKCWlmICh0eXBlb2YgZS5tZXNzYWdlICE9IGBzdHJpbmdgIHx8IGUubWVzc2FnZS50cmltKCkgPT09IGBgKSB0aHJvdyBUeXBlRXJyb3IoImFnZW50KCkgcmVxdWlyZXMgYSBub24tZW1wdHkgYG1lc3NhZ2VgLiIpOwp9CmZ1bmN0aW9uIGNsYWltSW52b2NhdGlvbklkKGUsIHQpIHsKCWxldCBuID0gZSwgciA9IG5bQUdFTlRfSU5WT0NBVElPTl9JRFNdID8/IG5ldyBTZXQoKTsKCWlmIChyLmhhcyh0KSkgewoJCWxldCBlID0gdC5sYXN0SW5kZXhPZihgOmApLCBuID0gZSA8IDAgPyB0IDogdC5zbGljZShlICsgMSk7CgkJdGhyb3cgVHlwZUVycm9yKGBhZ2VudCgpIGludm9jYXRpb24ga2V5ICIke259IiB3YXMgYWxyZWFkeSB1c2VkIGluIHRoaXMgcnVuOyBrZXlzIG11c3QgYmUgdW5pcXVlIHBlciBydW4uYCk7Cgl9CglyLmFkZCh0KSwgbltBR0VOVF9JTlZPQ0FUSU9OX0lEU10gPT09IHZvaWQgMCAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgQUdFTlRfSU5WT0NBVElPTl9JRFMsIHsKCQllbnVtZXJhYmxlOiAhMSwKCQl2YWx1ZTogcgoJfSk7Cn0KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBkaXN0L3NyYy9ydW50aW1lL3N1YmFnZW50cy93b3JrZmxvdy5qcwphc3luYyBmdW5jdGlvbiBzdWJhZ2VudFRvb2xFeGVjdXRlV29ya2Zsb3coZSwgdCkgewoJcmV0dXJuIGF3YWl0IGludm9rZUFnZW50KHQsIHsKCQkuLi50eXBlb2YgZS5hZ2VudElkID09IGBzdHJpbmdgICYmIGUuYWdlbnRJZC50cmltKCkgIT09IGBgID8geyBhZ2VudElkOiBlLmFnZW50SWQgfSA6IHt9LAoJCW1lc3NhZ2U6IGUubWVzc2FnZSwKCQlvdXRwdXRTY2hlbWE6IGUub3V0cHV0U2NoZW1hLAoJCXRhcmdldDogdC50b29sTmFtZQoJfSwgewoJCWludm9jYXRpb25JZDogdC5jYWxsSWQsCgkJcmV0dXJuUmVzdWx0OiAhMAoJfSk7Cn0Kc3ViYWdlbnRUb29sRXhlY3V0ZVdvcmtmbG93LndvcmtmbG93SWQgPSBgd29ya2Zsb3cvL2V2ZS8vc3ViYWdlbnRUb29sRXhlY3V0ZVdvcmtmbG93YDsKc3ViYWdlbnRUb29sRXhlY3V0ZVdvcmtmbG93LndvcmtmbG93SWQgPSAid29ya2Zsb3cvL2V2ZS8vc3ViYWdlbnRUb29sRXhlY3V0ZVdvcmtmbG93IjsKZ2xvYmFsVGhpcy5fX3ByaXZhdGVfd29ya2Zsb3dzLnNldCgid29ya2Zsb3cvL2V2ZS8vc3ViYWdlbnRUb29sRXhlY3V0ZVdvcmtmbG93Iiwgc3ViYWdlbnRUb29sRXhlY3V0ZVdvcmtmbG93KTsKLy8jZW5kcmVnaW9uCgovLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyVjJaUzEzYjNKclpteHZkeTFsYm5SeWVTNXFjeUlzSW01aGJXVnpJanBiSWxObGMzTnBiMjVKYm1KdmVGZHBjbVZGY25KdmNpUXhJaXdpWkdWc2FYWmxjbmxJWVhOTlpYTnpZV2RsSWwwc0luTnZkWEpqWlhNaU9sc2ljM0pqTDJsdWRHVnlibUZzTDNkdmNtdG1iRzkzTFdKMWJtUnNaUzkzYjNKclpteHZkeTFqYjNKbExYTm9hVzB1YW5NaUxDSnpjbU12WlhobFkzVjBhVzl1TDJodmIyc3RiM2R1WlhKemFHbHdMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTloWTNScGRtbDBlUzEwWlhoMExtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOXpaWE56YVc5dUxXRmpkR2wyYVhSNUxtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOXpaWE56YVc5dUxXRmpkR2wyYVhSNUxYSmxibVJsY21WeUxYTjBaWEF1YW5NaUxDSnpjbU12WlhobFkzVjBhVzl1TDJGamRHbDJhWFI1TFdOdmJHeGxZM1J2Y2k1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dmMyVnpjMmx2YmkxMGFXMWxiM1YwTFhOMFpYQnpMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTl6WlhOemFXOXVMWFJwYldWdmRYUXRkMjl5YTJac2IzY3Vhbk1pTENKemNtTXZjMmhoY21Wa0wycHpiMjR1YW5NaUxDSnpjbU12ZEdGemEzTXZkSGx3WlhNdWFuTWlMQ0p6Y21NdlpYaGxZM1YwYVc5dUwzUmhjMnR6TDJOb2FXeGtMM04wWlhCekxtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOTBiMjlzY3k5M2IzSnJabXh2ZHk5dFpYTnpZV2RsY3k1cWN5SXNJbk55WXk5b1lYSnVaWE56TDNkdmNtdG1iRzkzTFhSdmIyd3RjblZ1Y3k1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dmRHOXZiSE12ZDI5eWEyWnNiM2N2Y21WemRXMWxMV2h2YjJzdGMzUmxjQzVxY3lJc0luTnlZeTlsZUdWamRYUnBiMjR2ZEc5dmJITXZkMjl5YTJac2IzY3ZZWE5yTG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5M2IzSnJabXh2ZHkxbGNuSnZjbk11YW5NaUxDSnpjbU12WlhobFkzVjBhVzl1TDNkdmNtdG1iRzkzTFhKbFoybHpkSEo1TG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5MGIyOXNjeTkzYjNKclpteHZkeTlpYjJSNUxtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOTBiMjlzY3k5M2IzSnJabXh2ZHk5dmQyNWxjaTFqYUdGdWJtVnNjeTVxY3lJc0luTnlZeTlsZUdWamRYUnBiMjR2ZEc5dmJITXZkMjl5YTJac2IzY3ZiM2R1WlhJdWFuTWlMQ0p6Y21NdmMzVmlZV2RsYm5SekwyRm5aVzUwTFdoaGJtUnNaUzFsY25KdmNuTXVhbk1pTENKemNtTXZaWGhsWTNWMGFXOXVMM1J2YjJ4ekwzZHZjbXRtYkc5M0wyOTNibVZ5TFdsdVltOTRMbXB6SWl3aWMzSmpMM1JoYzJ0ekwzUnlZVzV6YVhScGIyNXpMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTkwWVhOcmN5OWphR2xzWkM5M2IzSnJabXh2ZHk1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dmRHOXZiSE12YzJ4bFpYQXRkMjl5YTJac2IzY3Vhbk1pTENKemNtTXZaWGhsWTNWMGFXOXVMM1J2YjJ4ekwzZHZjbXRtYkc5M0wzSjFiaTFqYjI1MGNtOXNMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTkwYjI5c2N5OTNiM0pyWm14dmR5OTNiM0pyWm14dmR5NXFjeUlzSW5OeVl5OW9ZWEp1WlhOekwyRmpkR2wyWlMxMGRYSnVMV2xrTG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5a2RYSmhZbXhsTFhObGMzTnBiMjR0YldsbmNtRjBhVzl1Y3k5amFHRnBiaTVxY3lJc0luTnlZeTlsZUdWamRYUnBiMjR2WkhWeVlXSnNaUzF6WlhOemFXOXVMVzFwWjNKaGRHbHZibk12ZEhWeWJpMTNiM0pyWm14dmR5MTJNQzEwYnkxMk1TNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZaSFZ5WVdKc1pTMXpaWE56YVc5dUxXMXBaM0poZEdsdmJuTXZkSFZ5YmkxM2IzSnJabXh2ZHkxMk1TMTBieTEyTWk1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dlpIVnlZV0pzWlMxelpYTnphVzl1TFcxcFozSmhkR2x2Ym5NdmRIVnliaTEzYjNKclpteHZkeTVxY3lJc0luTnlZeTlsZUdWamRYUnBiMjR2WTJGdVkyVnNMV2x1WkdWNFpXUXRjMlZ6YzJsdmJpMTBZWE5yY3kxemRHVndMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTkzYjNKclpteHZkeTF6ZEdWd2N5NXFjeUlzSW5OeVl5OXBiblJsY201aGJDOWpiR2xsYm5RdFkyOXVkR1Y0ZEM1cWN5SXNJbk55WXk5b1lYSnVaWE56TDIxbGMzTmhaMlZ6TG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5a1pXeHBkbVZ5TFhCaGVXeHZZV1J6TG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5d2NtOTRhV1ZrTFdSbGJHbDJaWEl0YzNSbGNDNXFjeUlzSW5OeVl5OXpkV0poWjJWdWRITXZaWFpsYm5RdGNISnZlSGt0YzNSbGNDNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZkR0Z6YTNNdmNHRnlaVzUwTDJocGRHd3RjSEp2ZUhrdGMzUmxjSE11YW5NaUxDSnpjbU12WlhobFkzVjBhVzl1TDNSdmIyeHpMM04xWW1GblpXNTBMMkZqWTJWd2RDMWxkbVZ1ZEMxemRHVndMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTkwYjI5c2N5OXpkV0poWjJWdWRDOWxiV2wwTFdOaGJHeGxaQzF6ZEdWd0xtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOTBiMjlzY3k5emRXSmhaMlZ1ZEM5cGJuWnZhMlV0YzNSbGNDNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZkRzl2YkhNdmMzVmlZV2RsYm5RdmRHRnpheTFoWjJWdWRDMXlaWEYxWlhOMGN5NXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZjbTkxZEdVdFkyaHBiR1F0WkdWc2FYWmxjbmt1YW5NaUxDSnpjbU12YzJoaGNtVmtMM0IxWW14cFl5MXliM1YwWlMxd2NtVm1hWGd1YW5NaUxDSnpjbU12WlhobFkzVjBhVzl1TDNkdmNtdG1iRzkzTFdOaGJHeGlZV05yTFhWeWJDNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZkR0Z6YTNNdmNHRnlaVzUwTDJSbGJHVm5ZWFJsTG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5MGRYSnVMV052Ym5SeWIyd3RjSEp2ZEc5amIyd3Vhbk1pTENKemNtTXZjM1ZpWVdkbGJuUnpMMmhoYm1Sc1pYTXZjM1JoZEdVdGEyVjVMbXB6SWl3aWMzSmpMM04xWW1GblpXNTBjeTlvWVc1a2JHVnpMM0YxWlhKNUxtcHpJaXdpYzNKakwyTnZiblJsZUhRdmEyVjVMbXB6SWl3aWMzSmpMMk52Ym5SbGVIUXZhMlY1TFc1aGJXVnpMbXB6SWl3aWMzSmpMMk52Ym5SbGVIUXZhMlY1Y3k1cWN5SXNJbk55WXk5amIyNTBaWGgwTDNObGNtbGhiR2w2WldRdFpIbHVZVzFwWXkxdGIyUmxiQzF6Wld4bFkzUnBiMjR1YW5NaUxDSnpjbU12WlhobFkzVjBhVzl1TDJOaGJtTmxiQzFrWlhOalpXNWtZVzUwTFhSMWNtNXpMWE4wWlhBdWFuTWlMQ0p6Y21NdlpYaGxZM1YwYVc5dUwyTnZiM0prYVc1aGRHbHZiaTFrYVhOd1lYUmphQzF6ZEdWd0xtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOTBiMjlzY3k5M2IzSnJabXh2ZHk5bGJXbDBMWGR2Y210bWJHOTNMWFJ2YjJ3dGNuVnVMWEpsY0c5eWRDMXpkR1Z3TG1weklpd2ljM0pqTDJoaGNtNWxjM012ZEhWeWJpMWpZVzVqWld4c1lYUnBiMjR1YW5NaUxDSnpjbU12WlhobFkzVjBhVzl1TDNSMWNtNHRZMkZ1WTJWc2JHRjBhVzl1TFhSdmEyVnVMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTkwZFhKdUxXTmhibU5sYkd4aGRHbHZiaTFqYjI1MGNtOXNMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTl6WlhOemFXOXVMWE4wWVhSbExXTjFjbk52Y2k1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dmRIVnliaTFsZUdWamRYUnBiMjR0WTNWeWMyOXlMbXB6SWl3aWMzSmpMM0oxYm5ScGJXVXZZV04wYVc5dWN5OXlaWE4xYkhSekxtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOTBiMjlzY3k5emRXSmhaMlZ1ZEM5MFlYTnJMV05oYm1ObGJDNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZkSFZ5YmkxM2IzSnJabXh2ZHkxMGIyOXNMWEoxYmk1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dmRIVnliaTEzYjNKclpteHZkeTVxY3lJc0luTnlZeTlsZUdWamRYUnBiMjR2YzJWemMybHZiaTFqYjIxdFlXNWtMWFJ2YTJWdUxtcHpJaXdpYzNKakwzTm9ZWEpsWkM5bmRXRnlaSE11YW5NaUxDSnpjbU12WlhobFkzVjBhVzl1TDJWMlpTMTNiM0pyWm14dmR5MWhkSFJ5YVdKMWRHVnpMbXB6SWl3aWMzSmpMM04xWW1GblpXNTBjeTlqWVd4c1ltRmpheTF6ZEdWd0xtcHpJaXdpYzNKakwzTjFZbUZuWlc1MGN5OXdZWEpsYm5RdGJtOTBhV1pwWTJGMGFXOXVMbXB6SWl3aWMzSmpMM05vWVhKbFpDOWxjbkp2Y25NdWFuTWlMQ0p6Y21NdmMzVmlZV2RsYm5SekwyRmtZWEIwWlhJdGMzUmhkR1V1YW5NaUxDSnpjbU12YzNWaVlXZGxiblJ6TDNCaGNtVnVkQzF5WlhOMWJIUXVhbk1pTENKemNtTXZaWGhsWTNWMGFXOXVMM1JsY20xcGJtRjBaUzFqYUdsc1pDMXpaWE56YVc5dWN5MXpkR1Z3TG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5eVpYQnZjblF0WkhKdmNIQmxaQzEzYVhKbExYQmhlV3h2WVdRdGMzUmxjQzVxY3lJc0luTnlZeTlsZUdWamRYUnBiMjR2ZDJseVpTOXpaWE56YVc5dUxXbHVZbTk0TFdOdmJuUnlZV04wTG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5M2FYSmxMM05sYzNOcGIyNHRhVzVpYjNndGQybHlaUzUyTUM1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dmQybHlaUzl6WlhOemFXOXVMV2x1WW05NExYZHBjbVV1ZGpJdGJXbG5jbUYwYVc5dUxtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOTNhWEpsTDNObGMzTnBiMjR0YVc1aWIzZ3RkMmx5WlM1Mk1pNXRhV2R5WVhScGIyNHVhbk1pTENKemNtTXZaWGhsWTNWMGFXOXVMM2RwY21VdmMyVnpjMmx2YmkxcGJtSnZlQzEzYVhKbExuWXpMbTFwWjNKaGRHbHZiaTVxY3lJc0luTnlZeTlsZUdWamRYUnBiMjR2ZDJseVpTOXpaWE56YVc5dUxXbHVZbTk0TFhkcGNtVXVkalF1YldsbmNtRjBhVzl1TG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5M2FYSmxMM05sYzNOcGIyNHRhVzVpYjNndGQybHlaUzUyTlM1dGFXZHlZWFJwYjI0dWFuTWlMQ0p6Y21NdlpYaGxZM1YwYVc5dUwzZHBjbVV2YzJWemMybHZiaTFwYm1KdmVDMTNhWEpsTG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5d1lYSnJaV1F0WkdWc2FYWmxjbmt0ZDJGcGRDNXFjeUlzSW5OeVl5OXpkV0poWjJWdWRITXZhR0Z1Wkd4bGN5OXlaV0poYzJVdWFuTWlMQ0p6Y21NdlpYaGxZM1YwYVc5dUwyUnBjM0JoZEdOb0xYUjFjbTR0YzNSbGNDNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZabTl5ZDJGeVpDMTBkWEp1TFdOaGJtTmxiR3hoZEdsdmJpMXpkR1Z3TG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5bWIzSjNZWEprTFhSMWNtNHRaR1ZzYVhabGNua3RjM1JsY0M1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dmRIVnliaTFqYjI1MGNtOXNMWEpsWTJWcGRtVnlMbXB6SWl3aWMzSmpMMlY0WldOMWRHbHZiaTloWTJObGNIUmxaQzFrWld4cGRtVnllUzFrWlhCc2IzbHRaVzUwTG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5cGJteHBibVV0ZEhWeWJpNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZkSFZ5Ymkxa2FYTndZWFJqYUM1cWN5SXNJbk55WXk5",
	"bGVHVmpkWFJwYjI0dlkzSmxZWFJsTFhObGMzTnBiMjR0YzNSbGNDNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZjMlYwZEd4bExXTmhibU5sYkd4bFpDMTBkWEp1TFhOMFpYQXVhbk1pTENKemNtTXZaWGhsWTNWMGFXOXVMM1JsY20xcGJtRnNMWE5sYzNOcGIyNHRabUZwYkhWeVpTMXpkR1Z3TG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5MFpYSnRhVzVoYkMxelpYTnphVzl1TFdOdmJYQnNaWFJwYjI0dGMzUmxjQzVxY3lJc0luTnlZeTlsZUdWamRYUnBiMjR2ZDI5eWEyWnNiM2N0Wlc1MGNua3RabWx1WVd4cGVtRjBhVzl1TG1weklpd2ljM0pqTDJWNFpXTjFkR2x2Ymk5elpYTnphVzl1TFdOdmJXMWhibVF0YVc1aWIzZ3Vhbk1pTENKemNtTXZaWGhsWTNWMGFXOXVMM05sYzNOcGIyNHRkR2x0Wlc5MWRDNXFjeUlzSW5OeVl5OWxlR1ZqZFhScGIyNHZjMlZ6YzJsdmJpMTBhVzFsYjNWMExXTnZiblJ5YjJ3dWFuTWlMQ0p6Y21NdlpYaGxZM1YwYVc5dUwyTnZiblJwYm5WaGRHbHZiaTFqYjI1bWJHbGpkQzF6ZEdWd0xtcHpJaXdpYzNKakwyVjRaV04xZEdsdmJpOTNiM0pyWm14dmR5MWxiblJ5ZVM1cWN5SXNJbk55WXk5bGVHVmpkWFJwYjI0dmRHOXZiSE12YzNWaVlXZGxiblF2YVc1MmIydGxMV0ZuWlc1MExtcHpJaXdpYzNKakwzSjFiblJwYldVdmMzVmlZV2RsYm5SekwzZHZjbXRtYkc5M0xtcHpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRmRQVWt0R1RFOVhYME5QVGxSRldGUmZVMWxOUWs5TVBWTjViV0p2YkM1bWIzSW9ZRmRQVWt0R1RFOVhYME5QVGxSRldGUmdLU3hYVDFKTFJreFBWMTlEVWtWQlZFVmZTRTlQU3oxVGVXMWliMnd1Wm05eUtHQlhUMUpMUmt4UFYxOURVa1ZCVkVWZlNFOVBTMkFwTEZkUFVrdEdURTlYWDBkRlZGOVRWRkpGUVUxZlNVUTlVM2x0WW05c0xtWnZjaWhnVjA5U1MwWk1UMWRmUjBWVVgxTlVVa1ZCVFY5SlJHQXBMRmRQVWt0R1RFOVhYMU5NUlVWUVBWTjViV0p2YkM1bWIzSW9ZRmRQVWt0R1RFOVhYMU5NUlVWUVlDa3NWMDlTUzBaTVQxZGZWVk5GWDFOVVJWQTlVM2x0WW05c0xtWnZjaWhnVjA5U1MwWk1UMWRmVlZORlgxTlVSVkJnS1N4VFZGSkZRVTFmVGtGTlJWOVRXVTFDVDB3OVUzbHRZbTlzTG1admNpaGdWMDlTUzBaTVQxZGZVMVJTUlVGTlgwNUJUVVZnS1N4M2IzSnJabXh2ZDBkc2IySmhiRDFuYkc5aVlXeFVhR2x6TzNaaGNpQlNaWFJ5ZVdGaWJHVkZjbkp2Y2oxamJHRnpjeUJsZUhSbGJtUnpJRVZ5Y205eWUyTnZibk4wY25WamRHOXlLR1VwZTNOMWNHVnlLR1VwTEhSb2FYTXVibUZ0WlQxZ1VtVjBjbmxoWW14bFJYSnliM0pnZlgwc1JtRjBZV3hGY25KdmNqMWpiR0Z6Y3lCbGVIUmxibVJ6SUVWeWNtOXllMlpoZEdGc1BTRXdPMk52Ym5OMGNuVmpkRzl5S0dVcGUzTjFjR1Z5S0dVcExIUm9hWE11Ym1GdFpUMWdSbUYwWVd4RmNuSnZjbUI5ZlR0bWRXNWpkR2x2YmlCamNtVmhkR1ZJYjI5cktHVXBlMnhsZENCdVBYZHZjbXRtYkc5M1IyeHZZbUZzVzFkUFVrdEdURTlYWDBOU1JVRlVSVjlJVDA5TFhUdHBaaWh1UFQwOWRtOXBaQ0F3S1hSb2NtOTNJRVZ5Y205eUtGd2lZR055WldGMFpVaHZiMnNvS1dBZ1kyRnVJRzl1YkhrZ1ltVWdZMkZzYkdWa0lHbHVjMmxrWlNCaElIZHZjbXRtYkc5M0lHWjFibU4wYVc5dVhDSXBPM0psZEhWeWJpQnVLR1VwZldaMWJtTjBhVzl1SUdkbGRGZHZjbXRtYkc5M1RXVjBZV1JoZEdFb0tYdHNaWFFnZEQxM2IzSnJabXh2ZDBkc2IySmhiRnRYVDFKTFJreFBWMTlEVDA1VVJWaFVYMU5aVFVKUFRGMDdhV1lvZEQwOVBYWnZhV1FnTUNsMGFISnZkeUJGY25KdmNpaGNJbUJuWlhSWGIzSnJabXh2ZDAxbGRHRmtZWFJoS0NsZ0lHTmhiaUJ2Ym14NUlHSmxJR05oYkd4bFpDQnBibk5wWkdVZ1lTQjNiM0pyWm14dmR5QnZjaUJ6ZEdWd0lHWjFibU4wYVc5dVhDSXBPM0psZEhWeWJpQjBmV1oxYm1OMGFXOXVJR2RsZEZkeWFYUmhZbXhsS0dVOWUzMHBlMnhsZENCMFBYZHZjbXRtYkc5M1IyeHZZbUZzVzFkUFVrdEdURTlYWDBkRlZGOVRWRkpGUVUxZlNVUmRPMmxtS0hROVBUMTJiMmxrSURBcGRHaHliM2NnUlhKeWIzSW9YQ0pnWjJWMFYzSnBkR0ZpYkdVb0tXQWdZMkZ1SUc5dWJIa2dZbVVnWTJGc2JHVmtJR2x1YzJsa1pTQmhJSGR2Y210bWJHOTNJR1oxYm1OMGFXOXVYQ0lwTzJ4bGRDQnlQWFFvWlM1dVlXMWxjM0JoWTJVcE8zSmxkSFZ5YmlCUFltcGxZM1F1WTNKbFlYUmxLR2RzYjJKaGJGUm9hWE11VjNKcGRHRmliR1ZUZEhKbFlXMHVjSEp2ZEc5MGVYQmxMSHRiVTFSU1JVRk5YMDVCVFVWZlUxbE5RazlNWFRwN2RtRnNkV1U2Y2l4M2NtbDBZV0pzWlRvaE1YMTlLWDFtZFc1amRHbHZiaUJqY21WaGRHVlhaV0pvYjI5cktHVXBlMnhsZENCMFBXTnlaV0YwWlVodmIyc29aU2tzYmoxblpYUlhiM0pyWm14dmQwMWxkR0ZrWVhSaEtDazdjbVYwZFhKdUlIUXVkWEpzUFdBa2UzUjVjR1Z2WmlCdUxuVnliRDA5WUhOMGNtbHVaMkEvYmk1MWNtdzZZR0I5THk1M1pXeHNMV3R1YjNkdUwzZHZjbXRtYkc5M0wzWXhMM2RsWW1odmIyc3ZKSHRsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvZEM1MGIydGxiaWw5WUN4MGZXWjFibU4wYVc5dUlHUmxabWx1WlVodmIyc29LWHR5WlhSMWNtNTdZM0psWVhSbE9tTnlaV0YwWlVodmIyc3NjbVZ6ZFcxbEtDbDdkR2h5YjNjZ1JYSnliM0lvWENKZ1pHVm1hVzVsU0c5dmF5Z3BMbkpsYzNWdFpTZ3BZQ0JqWVc0Z2IyNXNlU0JpWlNCallXeHNaV1FnWm5KdmJTQmxlSFJsY201aGJDQmpiMjUwWlhoMGN5NWNJaWw5ZlgxbWRXNWpkR2x2YmlCemJHVmxjQ2hsS1h0c1pYUWdkRDEzYjNKclpteHZkMGRzYjJKaGJGdFhUMUpMUmt4UFYxOVRURVZGVUYwN2FXWW9kRDA5UFhadmFXUWdNQ2wwYUhKdmR5QkZjbkp2Y2loY0ltQnpiR1ZsY0NncFlDQmpZVzRnYjI1c2VTQmlaU0JqWVd4c1pXUWdhVzV6YVdSbElHRWdkMjl5YTJac2IzY2dablZ1WTNScGIyNWNJaWs3Y21WMGRYSnVJSFFvWlNsOVpuVnVZM1JwYjI0Z2NtVnpkVzFsU0c5dmF5Z3BlM1JvY205M0lFVnljbTl5S0Z3aVlISmxjM1Z0WlVodmIyc29LV0FnWTJGdUlHOXViSGtnWW1VZ1kyRnNiR1ZrSUdaeWIyMGdiM1YwYzJsa1pTQmhJSGR2Y210bWJHOTNJR1oxYm1OMGFXOXVYQ0lwZldaMWJtTjBhVzl1SUdkbGRGTjBaWEJOWlhSaFpHRjBZU2dwZTNSb2NtOTNJRVZ5Y205eUtGd2lZR2RsZEZOMFpYQk5aWFJoWkdGMFlTZ3BZQ0JqWVc0Z2IyNXNlU0JpWlNCallXeHNaV1FnYVc1emFXUmxJR0VnYzNSbGNDQm1kVzVqZEdsdmJsd2lLWDFoYzNsdVl5Qm1kVzVqZEdsdmJpQnpaWFJCZEhSeWFXSjFkR1Z6S0dVc2REMTdmU2w3YkdWMElHNDlUMkpxWldOMExtVnVkSEpwWlhNb1pTazdhV1lvYmk1c1pXNW5kR2c5UFQwd0tYSmxkSFZ5Ymp0c1pYUWdjajEzYjNKclpteHZkMGRzYjJKaGJGdFhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGMDdhV1lvY2owOVBYWnZhV1FnTUNsMGFISnZkeUJGY25KdmNpaGNJbUJ6WlhSQmRIUnlhV0oxZEdWektDbGdJR05oYmlCdmJteDVJR0psSUdOaGJHeGxaQ0JwYm5OcFpHVWdZU0IzYjNKclpteHZkeUJ5ZFc1MGFXMWxJR052Ym5SbGVIUmNJaWs3YkdWMElHazliaTV0WVhBb0tGdGxMSFJkS1QwK0tIdHJaWGs2WlN4MllXeDFaVHAwUFQwOWRtOXBaQ0F3UDI1MWJHdzZkSDBwS1N4aFBYUXVZV3hzYjNkU1pYTmxjblpsWkVGMGRISnBZblYwWlhNOVBUMGhNRDk3WVd4c2IzZFNaWE5sY25abFpFRjBkSEpwWW5WMFpYTTZJVEI5T250OU8yRjNZV2wwSUhJb1lGOWZZblZwYkhScGJsOXpaWFJmWVhSMGNtbGlkWFJsYzJBcEtHa3NZU2w5Wlhod2IzSjBlMFpoZEdGc1JYSnliM0lzVW1WMGNubGhZbXhsUlhKeWIzSXNZM0psWVhSbFNHOXZheXhqY21WaGRHVlhaV0pvYjI5ckxHUmxabWx1WlVodmIyc3NaMlYwVTNSbGNFMWxkR0ZrWVhSaExHZGxkRmR2Y210bWJHOTNUV1YwWVdSaGRHRXNaMlYwVjNKcGRHRmliR1VzY21WemRXMWxTRzl2YXl4elpYUkJkSFJ5YVdKMWRHVnpMSE5zWldWd2ZUc2lMQ0poYzNsdVl5Qm1kVzVqZEdsdmJpQmpiR0ZwYlVodmIydFBkMjVsY25Ob2FYQW9aU2w3YkdWMElIUTdkSEo1ZTNROVlYZGhhWFFnWlM1blpYUkRiMjVtYkdsamRDZ3BmV05oZEdOb0tIUXBlM0psZEhWeWJpQmhkMkZwZENCa2FYTndiM05sUVc1a1ZHaHliM2NvWlN4dWIzSnRZV3hwZW1WSWIyOXJRMnhoYVcxRmNuSnZjaWgwTEdVdWRHOXJaVzRwS1gxcFppaDBJVDA5Ym5Wc2JDbHlaWFIxY200Z1lYZGhhWFFnWkdsemNHOXpaVUZ1WkZSb2NtOTNLR1VzWTNKbFlYUmxTRzl2YTBOdmJtWnNhV04wUlhKeWIzSW9aUzUwYjJ0bGJpeDBMbkoxYmtsa0tTbDlZWE41Ym1NZ1puVnVZM1JwYjI0Z1kyeHZjMlZJYjI5clNYUmxjbUYwYjNJb1pTbDdkSGx3Wlc5bUlHVXVjbVYwZFhKdVBUMWdablZ1WTNScGIyNWdKaVpoZDJGcGRDQmxMbkpsZEhWeWJpaDJiMmxrSURBcGZXRnplVzVqSUdaMWJtTjBhVzl1SUdScGMzQnZjMlZJYjI5cktHVXBlMnhsZENCMFBXVXVaR2x6Y0c5elpUdHBaaWgwZVhCbGIyWWdkRDA5WUdaMWJtTjBhVzl1WUNsN1lYZGhhWFFnZEM1allXeHNLR1VwTzNKbGRIVnlibjFzWlhRZ2JqMWxXMU41YldKdmJDNWthWE53YjNObFhUdDBlWEJsYjJZZ2JqMDlZR1oxYm1OMGFXOXVZQ1ltWVhkaGFYUWdiaTVqWVd4c0tHVXBmV0Z6ZVc1aklHWjFibU4wYVc5dUlHUnBjM0J2YzJWQmJtUlVhSEp2ZHlobExIUXBlM1J5ZVh0aGQyRnBkQ0JrYVhOd2IzTmxTRzl2YXlobEtYMWpZWFJqYUh0OWRHaHliM2NnZEgxbWRXNWpkR2x2YmlCdWIzSnRZV3hwZW1WSWIyOXJRMnhoYVcxRmNuSnZjaWhsTEhRcGUzSmxkSFZ5YmlCcGMwaHZiMnREYjI1bWJHbGpkRVZ5Y205eUtHVXBQMk55WldGMFpVaHZiMnREYjI1bWJHbGpkRVZ5Y205eUtIUjVjR1Z2WmlCbExuUnZhMlZ1UFQxZ2MzUnlhVzVuWUQ5bExuUnZhMlZ1T25Rc2RIbHdaVzltSUdVdVkyOXVabXhwWTNScGJtZFNkVzVKWkQwOVlITjBjbWx1WjJBL1pTNWpiMjVtYkdsamRHbHVaMUoxYmtsa09uWnZhV1FnTUNrNlpYMW1kVzVqZEdsdmJpQnBjMGh2YjJ0RGIyNW1iR2xqZEVWeWNtOXlLR1VwZTNKbGRIVnliaUIwZVhCbGIyWWdaVDA5WUc5aWFtVmpkR0FtSmlFaFpTWW1ZRzVoYldWZ2FXNGdaU1ltWlM1dVlXMWxQVDA5WUVodmIydERiMjVtYkdsamRFVnljbTl5WUgxbWRXNWpkR2x2YmlCamNtVmhkR1ZJYjI5clEyOXVabXhwWTNSRmNuSnZjaWhsTEhRcGUyeGxkQ0J1UFhROVBUMTJiMmxrSURBL1lHQTZZQ0FvY25WdUlGd2lKSHQwZlZ3aUtXQTdjbVYwZFhKdUlFOWlhbVZqZEM1aGMzTnBaMjRvUlhKeWIzSW9ZRWh2YjJzZ2RHOXJaVzRnWENJa2UyVjlYQ0lnYVhNZ1lXeHlaV0ZrZVNCcGJpQjFjMlVrZTI1OVlDa3NlMk52Ym1ac2FXTjBhVzVuVW5WdVNXUTZkQ3h1WVcxbE9tQkliMjlyUTI5dVpteHBZM1JGY25KdmNtQXNkRzlyWlc0NlpYMHBmV1Y0Y0c5eWRIdGpiR0ZwYlVodmIydFBkMjVsY25Ob2FYQXNZMnh2YzJWSWIyOXJTWFJsY21GMGIzSXNaR2x6Y0c5elpVaHZiMnNzYVhOSWIyOXJRMjl1Wm14cFkzUkZjbkp2Y24wN0lpd2lZMjl1YzNRZ1RVRllYMEZEVkVsV1NWUlpYMVJGV0ZSZlRFVk9SMVJJUFRVd01EdG1kVzVqZEdsdmJpQnViM0p0WVd4cGVtVkJZM1JwZG1sMGVWUmxlSFFvWlNsN2NtVjBkWEp1SUdVdWNtVndiR0ZqWlNndlhGeHdlME5qZlM5bmRTeGdJR0FwTG5KbGNHeGhZMlVvTDF4Y2N5c3ZaeXhnSUdBcExuUnlhVzBvS1M1emJHbGpaU2d3TERVd01DbDlaWGh3YjNKMGUwMUJXRjlCUTFSSlZrbFVXVjlVUlZoVVgweEZUa2RVU0N4dWIzSnRZV3hwZW1WQlkzUnBkbWwwZVZSbGVIUjlPeUlzSW1sdGNHOXlkRndpSTNCeWIzUnZZMjlzTDJGamRHbDJhWFI1TG1welhDSTdhVzF3YjNKMGUyNXZjbTFoYkdsNlpVRmpkR2wyYVhSNVZHVjRkSDFtY205dFhDSWpaWGhsWTNWMGFXOXVMMkZqZEdsMmFYUjVMWFJsZUhRdWFuTmNJanRqYjI1emRDQk5RVmhmUVVOVVNWWkpWRmxmUlZaRlRsUmZTVVJUUFRGbE15eE5RVmhmUVVOVVNWWkpWRmxmVUVWT1JFbE9SMTlUUlZSVVRFVk5SVTVVVXowMU1EQXNUVUZZWDBGRFZFbFdTVlJaWDBWT1ZFbFVTVVZUUFRVd01EdG1kVzVqZEdsdmJpQmpjbVZoZEdWQlkzUnBkbWwwZVZOdVlYQnphRzkwS0NsN2NtVjBkWEp1ZTJGamRHbHZibk02ZTMwc1lteHZZMnRsY25NNmUzMHNjR1Z1WkdsdVoxTmxkSFJzWlcxbGJuUnpPbnQ5TEhKbGRtbHphVzl1T2pBc2MyVmxia1YyWlc1MFNXUnpPbHRkTEhabGNuTnBiMjQ2TVN4M2IzSnJPbnQ5ZlgxbWRXNWpkR2x2YmlCeVpXUjFZMlZCWTNScGRtbDBlVUpoZEdOb0tHVXNiaWw3YkdWMElISTlaU3hwUFdVdWMyVmxia1YyWlc1MFNXUnpMR0U5SVRFc2J6MGhNVHRtYjNJb2JHVjBJR1VnYjJZZ2JpNWxkbVZ1ZEhNcGUybG1LR2t1YVc1amJIVmtaWE1vWlM1bGRtVnVkRWxrS1NsamIyNTBhVzUxWlR0c1pYUWdiajF5WldSMVkyVkZkbVZ1ZENoeUxHVXBPMjRoUFQxeUppWW9iejBoTUN4cFBXRndjR1Z1WkVKdmRXNWtaV1FvYVN4bExtVjJaVzUwU1dRc1RVRllYMEZEVkVsV1NWUlpYMFZXUlU1VVgwbEVVeWtzWVh4OFBYQnlaWE5sYm5SaGRHbHZia1JwWm1abGNuTW9jaXh1S1N4eVBXNHBmWEpsZEhWeWJpQnZQMkUvZXk0dUxuSXNjbVYyYVhOcGIyNDZaUzV5WlhacGMybHZiaXN4TEhObFpXNUZkbVZ1ZEVsa2N6cHBmVHA3TGk0dWNpeHlaWFpwYzJsdmJqcGxMbkpsZG1semFXOXVMSE5sWlc1RmRtVnVkRWxrY3pwcGZUcGxmV1oxYm1OMGFXOXVJSEJ5WlhObGJuUmhkR2x2YmtScFptWmxjbk1vWlN4MEtYdHlaWFIxY200Z1pTNWhZM1JwYjI1eklUMDlkQzVoWTNScGIyNXpmSHhsTG1Kc2IyTnJaWEp6SVQwOWRDNWliRzlqYTJWeWMzeDhaUzUzYjNKcklUMDlkQzUzYjNKcmZXWjFibU4wYVc5dUlISmxaSFZqWlVWMlpXNTBLR1VzZENsN2MzZHBkR05vS0hRdWEybHVaQ2w3WTJGelpXQjNiM0pyTG5OMFlYSjBaV1JnT25KbGRIVnliaUJ6ZEdGeWRGZHZjbXNvWlN4MEtUdGpZWE5sWUhkdmNtc3VjMlYwZEd4bFpHQTZjbVYwZFhKdUlITmxkSFJzWlZkdmNtc29aU3gwS1R0allYTmxZR0ZqZEdsdmJpNXpkR0Z5ZEdWa1lEcHlaWFIxY200Z2MzUmhjblJCWTNScGIyNG9aU3gwS1R0allYTmxZR0ZqZEdsdmJpNXpaWFIwYkdWa1lEcHlaWFIxY200Z2MyVjBkR3hsUVdOMGFXOXVLR1VzZENrN1kyRnpaV0JpYkc5amEyVnlMbk4wWVhKMFpXUmdPbkpsZEhWeWJpQnpkR0Z5ZEVKc2IyTnJaWElvWlN4MEtUdGpZWE5sWUdKc2IyTnJaWEl1YzJWMGRHeGxaR0E2Y21WMGRYSnVJSE5sZEhSc1pVSnNiMk5yWlhJb1pTeDBLWDE5Wm5WdVkzUnBiMjRnYzNSaGNuUlhiM0pyS0hRc2JpbDdhV1lvZEM1M2IzSnJXMjR1ZDI5eWF5NXBaRjBoUFQxMmIybGtJREFwY21WMGRYSnVJSFE3YkdWMElISTljR1Z1WkdsdVowWnZjaWgwTEdCM2IzSnJZQ3h1TG5kdmNtc3VhV1FwTEdrOWJpNTNiM0pyTG5CaGNtVnVkRWxrUFQwOWRtOXBaQ0F3UDNadmFXUWdNRHAwTG5kdmNtdGJiaTUzYjNKckxuQmhjbVZ1ZEVsa1hTeGhQWEkvTG05MWRHTnZiV1UvUHlnaGFYTkNZV05yWjNKdmRXNWtWMjl5YTBKdmRXNWtZWEo1S0hRc2JpNTNiM0pyS1NZbWFTRTlQWFp2YVdRZ01DWW1hUzV3YUdGelpTRTlQV0J5ZFc1dWFXNW5ZRDlnWTJGdVkyVnNiR1ZrWURwZ2NuVnVibWx1WjJBcExHODlleTR1TG00dWQyOXlheXh1WVcxbE9tNHVkMjl5YXk1dVlXMWxQVDA5ZG05cFpDQXdQM1p2YVdRZ01EcHViM0p0WVd4cGVtVkJZM1JwZG1sMGVWUmxlSFFvYmk1M2IzSnJMbTVoYldVcExIQm9ZWE5sT21Fc2MyVjBkR3hsWkVGME9uSS9Mbk5sZEhSc1pXUkJkRDgvS0dFOVBUMWdZMkZ1WTJWc2JHVmtZRDlwUHk1elpYUjBiR1ZrUVhRNmRtOXBaQ0F3S1N4emRHRnlkR1ZrUVhRNmJpNXpkR0Z5ZEdWa1FYUjlMSE05ZXk0dUxuUXNjR1Z1WkdsdVoxTmxkSFJzWlcxbGJuUnpPbkpsYlc5MlpVdGxlU2gwTG5CbGJtUnBibWRUWlhSMGJHVnRaVzUwY3l4d1pXNWthVzVuUzJWNUtHQjNiM0pyWUN4dkxtbGtLU2tzZDI5eWF6cHlaWEJzWVdObFFtOTFibVJsWkNoMExuZHZjbXNzYnk1cFpDeHZLWDA3Y21WMGRYSnVJRzh1Y0doaGMyVTlQVDFnY25WdWJtbHVaMkEvY3pwelpYUjBiR1ZYYjNKclZISmxaU2h6TEh0dmRYUmpiMjFsT204dWNHaGhjMlVzYzJWMGRHeGxaRUYwT204dWMyVjBkR3hsWkVGMFB6OXVMbk4wWVhKMFpXUkJkQ3gzYjNKclNXUTZieTVwWkgwcGZXWjFibU4wYVc5dUlITmxkSFJzWlZkdmNtc29aU3gwS1h0c1pYUWdiajFsTG5kdmNtdGJkQzUzYjNKclNXUmRPM0psZEhWeWJpQnVQVDA5ZG05cFpDQXdQM0psZEdGcGJsQmxibVJwYm1jb1pTeGdkMjl5YTJBc2RDNTNiM0pyU1dRc2RDazZiaTV3YUdGelpUMDlQV0J5ZFc1dWFXNW5ZRDl6WlhSMGJHVlhiM0pyVkhKbFpTaGxMSHR2ZFhSamIyMWxPblF1YjNWMFkyOXRaU3h6WlhSMGJHVmtRWFE2ZEM1elpYUjBiR1ZrUVhRc2QyOXlhMGxrT25RdWQyOXlhMGxrZlNrNlpYMW1kVzVqZEdsdmJpQnpkR0Z5ZEVGamRHbHZiaWgwTEc0cGUybG1LSFF1WVdOMGFXOXVjMXR1TG1GamRHbHZiaTVwWkYwaFBUMTJiMmxrSURBcGNtVjBkWEp1SUhRN2JHVjBJSEk5Y0dWdVpHbHVaMFp2Y2loMExHQmhZM1JwYjI1Z0xHNHVZV04wYVc5dUxtbGtLU3hwUFhRdWQyOXlhMXR1TG1GamRHbHZiaTV3WVhKbGJuUlhiM0pyU1dSZExHRTljajh1YjNWMFkyOXRaVDgvS0draFBUMTJiMmxrSURBbUpta3VjR2hoYzJVaFBUMWdjblZ1Ym1sdVoyQS9ZR05oYm1ObGJHeGxaR0E2WUhKMWJtNXBibWRnS1R0eVpYUjFjbTU3TGk0dWRDeGhZM1JwYjI1ek9uSmxjR3hoWTJWQ2IzVnVaR1ZrS0hRdVlXTjBhVzl1Y3l4dUxtRmpkR2x2Ymk1cFpDeDdMaTR1Ymk1aFkzUnBiMjRzYm1GdFpUcHViM0p0WVd4cGVtVkJZM1JwZG1sMGVWUmxlSFFvYmk1aFkzUnBiMjR1Ym1GdFpTa3NjR2hoYzJVNllTeHpaWFIwYkdWa1FYUTZjajh1YzJWMGRHeGxaRUYwUHo4b1lUMDlQV0JqWVc1alpXeHNaV1JnUDJrL0xuTmxkSFJzWldSQmREcDJiMmxrSURBcExITjBZWEowWldSQmREcHVMbk4wWVhKMFpXUkJkSDBwTEhCbGJtUnBibWRUWlhSMGJHVnRaVzUwY3pweVpXMXZkbVZMWlhrb2RDNXdaVzVrYVc1blUyVjBkR3hsYldWdWRITXNjR1Z1WkdsdVowdGxlU2hnWVdOMGFXOXVZQ3h1TG1GamRHbHZiaTVwWkNrcGZYMW1kVzVqZEdsdmJpQnpaWFIwYkdWQlkzUnBiMjRvWlN4MEtYdHNaWFFnYmoxbExtRmpkR2x2Ym5OYmRDNWhZM1JwYjI1SlpGMDdjbVYwZFhKdUlHNDlQVDEyYjJsa0lEQS9jbVYwWVdsdVVHVnVaR2x1WnlobExHQmhZM1JwYjI1Z0xIUXVZV04wYVc5dVNXUXNkQ2s2Ymk1d2FHRnpaVDA5UFdCeWRXNXVhVzVuWUQ5N0xpNHVaU3hoWTNScGIyNXpPbkpsY0d4aFkyVkNiM1Z1WkdWa0tHVXVZV04wYVc5dWN5eDBMbUZqZEdsdmJrbGtMSHN1TGk1dUxIQm9ZWE5sT25RdWIzVjBZMjl0WlN4elpYUjBiR1ZrUVhRNmRDNXpaWFIwYkdWa1FYUjlLWDA2WlgxbWRXNWpkR2x2YmlCemRHRnlkRUpzYjJOclpYSW9kQ3h1S1h0cFppaDBMbUpzYjJOclpYSnpXMjR1WW14dlkydGxjaTVwWkYwaFBUMTJiMmxrSURBcGNtVjBkWEp1SUhRN2JHVjBJSEk5Y0dWdVpHbHVaMFp2Y2loMExHQmliRzlqYTJWeVlDeHVMbUpzYjJOclpYSXVhV1FwTEdrOWRDNTNiM0pyVzI0dVlteHZZMnRsY2k1d1lYSmxiblJYYjNKclNXUmRMR0U5Y2o4dWIzVjBZMjl0WlQ4L0tHa2hQVDEyYjJsa0lEQW1KbWt1Y0doaGMyVWhQVDFnY25WdWJtbHVaMkEvWUdOaGJtTmxiR3hsWkdBNllHSnNiMk5yWldSZ0tUdHlaWFIxY201N0xpNHVkQ3hpYkc5amEyVnljenB5WlhCc1lXTmxRbTkxYm1SbFpDaDBMbUpzYjJOclpYSnpMRzR1WW14dlkydGxjaTVwWkN4N0xpNHViaTVpYkc5amEyVnlMR3hoWW1Wc09tNHVZbXh2WTJ0bGNpNXNZV0psYkQwOVBYWnZhV1FnTUQ5MmIybGtJREE2Ym05eWJXRnNhWHBsUVdOMGFYWnBkSGxVWlhoMEtHNHVZbXh2WTJ0bGNpNXNZV0psYkNrc2NHaGhjMlU2WVN4elpYUjBiR1ZrUVhRNmNqOHVjMlYwZEd4bFpFRjBQejhvWVQwOVBXQmpZVzVqWld4c1pXUmdQMmsvTG5ObGRIUnNaV1JCZERwMmIybGtJREFwTEhOMFlYSjBaV1JCZERwdUxuTjBZWEowWldSQmRIMHBMSEJsYm1ScGJtZFRaWFIwYkdWdFpXNTBjenB5WlcxdmRtVkxaWGtvZEM1d1pXNWthVzVuVTJWMGRHeGxiV1Z1ZEhNc2NHVnVaR2x1WjB0bGVTaGdZbXh2WTJ0bGNtQXNiaTVpYkc5amEyVnlMbWxrS1NsOWZXWjFibU4wYVc5dUlITmxkSFJzWlVKc2IyTnJaWElvWlN4MEtYdHNaWFFnYmoxbExtSnNiMk5yWlhKelczUXVZbXh2WTJ0bGNrbGtYVHR5WlhSMWNtNGdiajA5UFhadmFXUWdNRDl5WlhSaGFXNVFaVzVrYVc1bktHVXNZR0pzYjJOclpYSmdMSFF1WW14dlkydGxja2xrTEhRcE9tNHVjR2hoYzJVOVBUMWdZbXh2WTJ0bFpHQS9leTR1TG1Vc1lteHZZMnRsY25NNmNtVndiR0ZqWlVKdmRXNWtaV1FvWlM1aWJHOWphMlZ5Y3l4MExtSnNiMk5yWlhKSlpDeDdMaTR1Yml4d2FHRnpaVHAwTG05MWRHTnZiV1VzYzJWMGRHeGxaRUYwT25RdWMyVjBkR3hsWkVGMGZTbDlPbVY5Wm5WdVkzUnBiMjRnY21WMFlXbHVVR1Z1WkdsdVp5aGxMSFFzYml4eUtYdHNaWFFnYVQxd1pXNWthVzVuUzJWNUtIUXNiaWs3Y21WMGRYSnVJR1V1Y0dWdVpHbHVaMU5sZEhSc1pXMWxiblJ6VzJsZFBUMDlkbTlwWkNBd1Azc3VMaTVsTEhCbGJtUnBibWRUWlhSMGJHVnRaVzUwY3pweVpYQnNZV05sUW05MWJtUmxaQ2hsTG5CbGJtUnBibWRUWlhSMGJHVnRaVzUwY3l4cExIdGxiblJwZEhsTGFXNWtPblFzWlhabGJuUkpaRHB5TG1WMlpXNTBTV1FzYjNWMFkyOXRaVHB5TG05MWRHTnZiV1VzYzJWMGRHeGxaRUYwT25JdWMyVjBkR3hsWkVGMGZTdzFNREFwZlRwbGZXWjFibU4wYVc5dUlIQmxibVJwYm1kR2IzSW9aU3gwTEc0cGUzSmxkSFZ5YmlCbExuQmxibVJwYm1kVFpYUjBiR1Z0Wlc1MGMxdHdaVzVrYVc1blMyVjVLSFFzYmlsZGZXWjFibU4wYVc5dUlIQmxibVJwYm1kTFpYa29aU3gwS1h0eVpYUjFjbTVnSkh0bGZUb2tlM1I5WUgxbWRXNWpkR2x2YmlCelpYUjBiR1ZYYjNKclZISmxaU2hsTEhRcGUyeGxkQ0J1UFc1bGR5QlRaWFFvVzNRdWQyOXlhMGxrWFNrc2NqMGhNRHRtYjNJb08zSTdLWHR5UFNFeE8yWnZjaWhzWlhRZ2RDQnZaaUJQWW1wbFkzUXVkbUZzZFdWektHVXVkMjl5YXlrcGRDNXdZWEpsYm5SSlpEMDlQWFp2YVdRZ01IeDhJVzR1YUdGektIUXVjR0Z5Wlc1MFNXUXBmSHh1TG1oaGN5aDBMbWxrS1h4OGFYTkNZV05yWjNKdmRXNWtWMjl5YTBKdmRXNWtZWEo1S0dVc2RDbDhmQ2h1TG1Ga1pDaDBMbWxrS1N4eVBTRXdLWDF5WlhSMWNtNTdMaTR1WlN4aFkzUnBiMjV6T20xaGNFRmpkR2wyYVhSNVUzUmhkR1Z6S0dVdVlXTjBhVzl1Y3l4bFBUNXVMbWhoY3lobExuQmhjbVZ1ZEZkdmNtdEpaQ2ttSm1VdWNHaGhjMlU5UFQxZ2NuVnVibWx1WjJBL2V5NHVMbVVzY0doaGMyVTZZR05oYm1ObGJHeGxaR0FzYzJWMGRHeGxaRUYwT25RdWMyVjBkR3hsWkVGMGZUcGxLU3hpYkc5amEyVnljenB0WVhCQlkzUnBkbWwwZVZOMFlYUmxjeWhsTG1Kc2IyTnJaWEp6TEdVOVBtNHVhR0Z6S0dVdWNHRnlaVzUwVjI5eWEwbGtLU1ltWlM1d2FHRnpaVDA5UFdCaWJHOWphMlZrWUQ5N0xpNHVaU3h3YUdGelpUcGdZMkZ1WTJWc2JHVmtZQ3h6WlhSMGJHVmtRWFE2ZEM1elpYUjBiR1ZrUVhSOU9tVXBMSGR2Y21zNmJXRndRV04wYVhacGRIbFRkR0YwWlhNb1pTNTNiM0pyTEdVOVBtVXVhV1E5UFQxMExuZHZjbXRKWkQ5N0xpNHVaU3h3YUdGelpUcDBMbTkxZEdOdmJXVXNjMlYwZEd4bFpFRjBPblF1YzJWMGRHeGxaRUYwZlRwdUxtaGhjeWhsTG1sa0tTWW1aUzV3YUdGelpUMDlQV0J5ZFc1dWFXNW5ZRDk3TGk0dVpTeHdhR0Z6WlRwZ1kyRnVZMlZzYkdWa1lDeHpaWFIwYkdWa1FYUTZkQzV6WlhSMGJHVmtRWFI5T21VcGZYMW1kVzVqZEdsdmJpQnBjMEpoWTJ0bmNtOTFibVJYYjNKclFtOTFibVJoY25rb1pTeDBLWHR5WlhSMWNtNGdkQzVyYVc1a1BUMDlZSFJoYzJ0Z1B5RXdPblF1WTJGc2JFbGtQVDA5ZG05cFpDQXdmSHgwTG5CaGNtVnVkRWxrUFQwOWRtOXBaQ0F3UHlFeE9tVXVZV04wYVc5dWMxdGdZV04wYVc5dU9pUjdkQzV3WVhKbGJuUkpaSDA2Skh0MExtTmhiR3hKWkgxZ1hTRTlQWFp2YVdRZ01IMW1kVzVqZEdsdmJpQnRZWEJCWTNScGRtbDBlVk4wWVhSbGN5aGxMSFFwZTJ4bGRDQnVQV1U3Wm05eUtHeGxkRnR5TEdsZGIyWWdUMkpxWldOMExtVnVkSEpwWlhNb1pTa3BlMnhsZENCaFBYUW9hU2s3WVNFOVBXa21KaWh1UFQwOVpTWW1LRzQ5ZXk0dUxtVjlLU3h1VzNKZFBXRXBmWEpsZEhWeWJpQnVmV1oxYm1OMGFXOXVJSEpsY0d4aFkyVkNiM1Z1WkdWa0tHVXNkQ3h1TEhJOU5UQXdLWHRzWlhRZ2FUMTdMaTR1WlN4YmRGMDZibjBzWVQxUFltcGxZM1F1YTJWNWN5aHBLUzVzWlc1bmRHZ3RjanRtYjNJb2JHVjBJR1VnYjJZZ1QySnFaV04wTG10bGVYTW9hU2t1YzJ4cFkyVW9NQ3hOWVhSb0xtMWhlQ2d3TEdFcEtTbGtaV3hsZEdV",
	"Z2FWdGxYVHR5WlhSMWNtNGdhWDFtZFc1amRHbHZiaUJ5WlcxdmRtVkxaWGtvWlN4MEtYdHBaaWhsVzNSZFBUMDlkbTlwWkNBd0tYSmxkSFZ5YmlCbE8yeGxkQ0J1UFhzdUxpNWxmVHR5WlhSMWNtNGdaR1ZzWlhSbElHNWJkRjBzYm4xbWRXNWpkR2x2YmlCaGNIQmxibVJDYjNWdVpHVmtLR1VzZEN4dUtYdHlaWFIxY201YkxpNHVaU3gwWFM1emJHbGpaU2d0YmlsOVpYaHdiM0owZTAxQldGOUJRMVJKVmtsVVdWOUZUbFJKVkVsRlV5eE5RVmhmUVVOVVNWWkpWRmxmUlZaRlRsUmZTVVJUTEUxQldGOUJRMVJKVmtsVVdWOVFSVTVFU1U1SFgxTkZWRlJNUlUxRlRsUlRMR055WldGMFpVRmpkR2wyYVhSNVUyNWhjSE5vYjNRc2NtVmtkV05sUVdOMGFYWnBkSGxDWVhSamFIMDdJaXdpTHlvcVgxOXBiblJsY201aGJGOTNiM0pyWm14dmQzTjdYQ0p6ZEdWd2Mxd2lPbnRjSW1ScGMzUXZjM0pqTDJWNFpXTjFkR2x2Ymk5elpYTnphVzl1TFdGamRHbDJhWFI1TFhKbGJtUmxjbVZ5TFhOMFpYQXVhbk5jSWpwN1hDSnlaVzVrWlhKVFpYTnphVzl1UVdOMGFYWnBkSGxUZEdWd1hDSTZlMXdpYzNSbGNFbGtYQ0k2WENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5eVpXNWtaWEpUWlhOemFXOXVRV04wYVhacGRIbFRkR1Z3WENKOUxGd2laR2x6Y0c5elpWTmxjM05wYjI1QlkzUnBkbWwwZVZOMFpYQmNJanA3WENKemRHVndTV1JjSWpwY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwyUnBjM0J2YzJWVFpYTnphVzl1UVdOMGFYWnBkSGxUZEdWd1hDSjlmWDE5S2k4N1hHNWxlSEJ2Y25RZ2RtRnlJSEpsYm1SbGNsTmxjM05wYjI1QlkzUnBkbWwwZVZOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5eVpXNWtaWEpUWlhOemFXOXVRV04wYVhacGRIbFRkR1Z3WENJcE8xeHVaWGh3YjNKMElIWmhjaUJrYVhOd2IzTmxVMlZ6YzJsdmJrRmpkR2wyYVhSNVUzUmxjQ0E5SUdkc2IySmhiRlJvYVhOYlUzbHRZbTlzTG1admNpaGNJbGRQVWt0R1RFOVhYMVZUUlY5VFZFVlFYQ0lwWFNoY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwyUnBjM0J2YzJWVFpYTnphVzl1UVdOMGFYWnBkSGxUZEdWd1hDSXBPMXh1SWl3aUx5b3FYMTlwYm5SbGNtNWhiRjkzYjNKclpteHZkM043WENKM2IzSnJabXh2ZDNOY0lqcDdYQ0prYVhOMEwzTnlZeTlsZUdWamRYUnBiMjR2WVdOMGFYWnBkSGt0WTI5c2JHVmpkRzl5TG1welhDSTZlMXdpWVdOMGFYWnBkSGxEYjJ4c1pXTjBiM0pYYjNKclpteHZkMXdpT250Y0luZHZjbXRtYkc5M1NXUmNJanBjSW5kdmNtdG1iRzkzTHk5bGRtVXZMMkZqZEdsMmFYUjVRMjlzYkdWamRHOXlWMjl5YTJac2IzZGNJbjE5ZlgwcUx6dGNibWx0Y0c5eWRIdGpjbVZoZEdWSWIyOXJMSE5zWldWd2ZXWnliMjFjSWlOamIyMXdhV3hsWkM5QWQyOXlhMlpzYjNjdlkyOXlaUzlwYm1SbGVDNXFjMXdpTzJsdGNHOXlkSHRqYkdGcGJVaHZiMnRQZDI1bGNuTm9hWEFzWTJ4dmMyVkliMjlyU1hSbGNtRjBiM0lzWkdsemNHOXpaVWh2YjJzc2FYTkliMjlyUTI5dVpteHBZM1JGY25KdmNuMW1jbTl0WENJalpYaGxZM1YwYVc5dUwyaHZiMnN0YjNkdVpYSnphR2x3TG1welhDSTdhVzF3YjNKMGUyTnlaV0YwWlVGamRHbDJhWFI1VTI1aGNITm9iM1FzY21Wa2RXTmxRV04wYVhacGRIbENZWFJqYUgxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNObGMzTnBiMjR0WVdOMGFYWnBkSGt1YW5OY0lqdHBiWEJ2Y25SN1pHbHpjRzl6WlZObGMzTnBiMjVCWTNScGRtbDBlVk4wWlhBc2NtVnVaR1Z5VTJWemMybHZia0ZqZEdsMmFYUjVVM1JsY0gxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNObGMzTnBiMjR0WVdOMGFYWnBkSGt0Y21WdVpHVnlaWEl0YzNSbGNDNXFjMXdpTzJGemVXNWpJR1oxYm1OMGFXOXVJR0ZqZEdsMmFYUjVRMjlzYkdWamRHOXlWMjl5YTJac2IzY29hU2w3YkdWMElHRTlZM0psWVhSbFNHOXZheWg3ZEc5clpXNDZhUzUwYjJ0bGJuMHBMRzg5WVZ0VGVXMWliMnd1WVhONWJtTkpkR1Z5WVhSdmNsMG9LU3h6UFNFeExHTXNiRDF6YkdWbGNDaHVaWGNnUkdGMFpTaHBMbVY0Y0dseVpYTkJkQ2twTG5Sb1pXNG9LQ2s5UGloN2EybHVaRHBnWlhod2FYSmxaR0I5S1Nrc2RUMWpjbVZoZEdWQlkzUnBkbWwwZVZOdVlYQnphRzkwS0Nrc1pEMTdmVHQwY25sN2RISjVlMkYzWVdsMElHTnNZV2x0U0c5dmEwOTNibVZ5YzJocGNDaGhLU3h6UFNFd2ZXTmhkR05vS0dVcGUybG1LR2x6U0c5dmEwTnZibVpzYVdOMFJYSnliM0lvWlNrcGNtVjBkWEp1TzNSb2NtOTNJR1Y5Wm05eUtEczdLWHRqUHo4OWJ5NXVaWGgwS0NrN2JHVjBJR1U5WVhkaGFYUWdVSEp2YldselpTNXlZV05sS0Z0akxuUm9aVzRvWlQwK0tIdHJhVzVrT21CaVlYUmphR0FzZG1Gc2RXVTZaWDBwS1N4c1hTazdhV1lvWlM1cmFXNWtQVDA5WUdWNGNHbHlaV1JnZkh4bExuWmhiSFZsTG1SdmJtVTlQVDBoTUNsaWNtVmhhenRqUFhadmFXUWdNRHRzWlhRZ2JqMXlaV1IxWTJWRGIyeHNaV04wYjNKQlkzUnBkbWwwZVNoMUxHVXVkbUZzZFdVdWRtRnNkV1VwTzJsbUtIVTliaTV6Ym1Gd2MyaHZkQ3doYmk1d2NtVnpaVzUwWVhScGIyNURhR0Z1WjJWa0tXTnZiblJwYm5WbE8yeGxkQ0J5UFhOc1pXVndLRE0xTUNrdWRHaGxiaWdvS1QwK0tIdHJhVzVrT21CeVpXNWtaWEpnZlNrcE8yWnZjaWc3T3lsN1l6OC9QVzh1Ym1WNGRDZ3BPMnhsZENCbFBXRjNZV2wwSUZCeWIyMXBjMlV1Y21GalpTaGJZeTUwYUdWdUtHVTlQaWg3YTJsdVpEcGdZbUYwWTJoZ0xIWmhiSFZsT21WOUtTa3NjaXhzWFNrN2FXWW9aUzVyYVc1a1BUMDlZR1Y0Y0dseVpXUmdLWEpsZEhWeWJqdHBaaWhsTG10cGJtUTlQVDFnY21WdVpHVnlZQ2xpY21WaGF6dHBaaWhsTG5aaGJIVmxMbVJ2Ym1VOVBUMGhNQ2x5WlhSMWNtNDdZejEyYjJsa0lEQXNkVDF5WldSMVkyVkJZM1JwZG1sMGVVSmhkR05vS0hVc1pTNTJZV3gxWlM1MllXeDFaU2w5WkQwb1lYZGhhWFFnY21WdVpHVnlVMlZ6YzJsdmJrRmpkR2wyYVhSNVUzUmxjQ2g3Y21WdVpHVnlaWEpUZEdGMFpYTTZaQ3h6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHBwTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhOdVlYQnphRzkwT25WOUtTa3VjbVZ1WkdWeVpYSlRkR0YwWlhOOWZXWnBibUZzYkhsN2N5WW1LR0YzWVdsMElHTnNiM05sU0c5dmEwbDBaWEpoZEc5eUtHOHBMbU5oZEdOb0tDZ3BQVDU3ZlNrc1lYZGhhWFFnWkdsemNHOXpaVWh2YjJzb1lTa3VZMkYwWTJnb0tDazlQbnQ5S1N4aGQyRnBkQ0JrYVhOd2IzTmxVMlZ6YzJsdmJrRmpkR2wyYVhSNVUzUmxjQ2g3Y21WdVpHVnlaWEpUZEdGMFpYTTZaQ3h6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHBwTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwZlNrdVkyRjBZMmdvS0NrOVBudDlLU2w5ZldaMWJtTjBhVzl1SUhKbFpIVmpaVU52Ykd4bFkzUnZja0ZqZEdsMmFYUjVLR1VzZENsN2JHVjBJRzQ5WlM1eVpYWnBjMmx2Yml4eVBYSmxaSFZqWlVGamRHbDJhWFI1UW1GMFkyZ29aU3gwS1R0eVpYUjFjbTU3Y0hKbGMyVnVkR0YwYVc5dVEyaGhibWRsWkRweUxuSmxkbWx6YVc5dUlUMDliaXh6Ym1Gd2MyaHZkRHB5ZlgxaFkzUnBkbWwwZVVOdmJHeGxZM1J2Y2xkdmNtdG1iRzkzTG5kdmNtdG1iRzkzU1dROVlIZHZjbXRtYkc5M0x5OWxkbVV2TDJGamRHbDJhWFI1UTI5c2JHVmpkRzl5VjI5eWEyWnNiM2RnTzJWNGNHOXlkSHRoWTNScGRtbDBlVU52Ykd4bFkzUnZjbGR2Y210bWJHOTNMSEpsWkhWalpVTnZiR3hsWTNSdmNrRmpkR2wyYVhSNWZUdGNibUZqZEdsMmFYUjVRMjlzYkdWamRHOXlWMjl5YTJac2IzY3VkMjl5YTJac2IzZEpaQ0E5SUZ3aWQyOXlhMlpzYjNjdkwyVjJaUzh2WVdOMGFYWnBkSGxEYjJ4c1pXTjBiM0pYYjNKclpteHZkMXdpTzF4dVoyeHZZbUZzVkdocGN5NWZYM0J5YVhaaGRHVmZkMjl5YTJac2IzZHpMbk5sZENoY0luZHZjbXRtYkc5M0x5OWxkbVV2TDJGamRHbDJhWFI1UTI5c2JHVmpkRzl5VjI5eWEyWnNiM2RjSWl3Z1lXTjBhWFpwZEhsRGIyeHNaV04wYjNKWGIzSnJabXh2ZHlrN1hHNGlMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbk4wWlhCelhDSTZlMXdpWkdsemRDOXpjbU12WlhobFkzVjBhVzl1TDNObGMzTnBiMjR0ZEdsdFpXOTFkQzF6ZEdWd2N5NXFjMXdpT250Y0luTjBZWEowVTJWemMybHZibFJwYldWdmRYUlRkR1Z3WENJNmUxd2ljM1JsY0Vsa1hDSTZYQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTl6ZEdGeWRGTmxjM05wYjI1VWFXMWxiM1YwVTNSbGNGd2lmU3hjSW5OcFoyNWhiRk5sYzNOcGIyNVVhVzFsYjNWMFUzUmxjRndpT250Y0luTjBaWEJKWkZ3aU9sd2ljM1JsY0M4dlpYWmxRREF1TlRFdU1TOHZjMmxuYm1Gc1UyVnpjMmx2YmxScGJXVnZkWFJUZEdWd1hDSjlMRndpWTJGdVkyVnNVMlZ6YzJsdmJsUnBiV1Z2ZFhSVGRHVndYQ0k2ZTF3aWMzUmxjRWxrWENJNlhDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OWpZVzVqWld4VFpYTnphVzl1VkdsdFpXOTFkRk4wWlhCY0luMTlmWDBxTHp0Y2JtVjRjRzl5ZENCMllYSWdjM1JoY25SVFpYTnphVzl1VkdsdFpXOTFkRk4wWlhBZ1BTQm5iRzlpWVd4VWFHbHpXMU41YldKdmJDNW1iM0lvWENKWFQxSkxSa3hQVjE5VlUwVmZVMVJGVUZ3aUtWMG9YQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTl6ZEdGeWRGTmxjM05wYjI1VWFXMWxiM1YwVTNSbGNGd2lLVHRjYm1WNGNHOXlkQ0IyWVhJZ2MybG5ibUZzVTJWemMybHZibFJwYldWdmRYUlRkR1Z3SUQwZ1oyeHZZbUZzVkdocGMxdFRlVzFpYjJ3dVptOXlLRndpVjA5U1MwWk1UMWRmVlZORlgxTlVSVkJjSWlsZEtGd2ljM1JsY0M4dlpYWmxRREF1TlRFdU1TOHZjMmxuYm1Gc1UyVnpjMmx2YmxScGJXVnZkWFJUZEdWd1hDSXBPMXh1Wlhod2IzSjBJSFpoY2lCallXNWpaV3hUWlhOemFXOXVWR2x0Wlc5MWRGTjBaWEFnUFNCbmJHOWlZV3hVYUdselcxTjViV0p2YkM1bWIzSW9YQ0pYVDFKTFJreFBWMTlWVTBWZlUxUkZVRndpS1Ywb1hDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OWpZVzVqWld4VFpYTnphVzl1VkdsdFpXOTFkRk4wWlhCY0lpazdYRzRpTENJdktpcGZYMmx1ZEdWeWJtRnNYM2R2Y210bWJHOTNjM3RjSW5kdmNtdG1iRzkzYzF3aU9udGNJbVJwYzNRdmMzSmpMMlY0WldOMWRHbHZiaTl6WlhOemFXOXVMWFJwYldWdmRYUXRkMjl5YTJac2IzY3Vhbk5jSWpwN1hDSnpaWE56YVc5dVZHbHRaVzkxZEZkdmNtdG1iRzkzWENJNmUxd2lkMjl5YTJac2IzZEpaRndpT2x3aWQyOXlhMlpzYjNjdkwyVjJaUzh2YzJWemMybHZibFJwYldWdmRYUlhiM0pyWm14dmQxd2lmWDE5ZlNvdk8xeHVhVzF3YjNKMGUzTnNaV1Z3ZldaeWIyMWNJaU5qYjIxd2FXeGxaQzlBZDI5eWEyWnNiM2N2WTI5eVpTOXBibVJsZUM1cWMxd2lPMmx0Y0c5eWRIdHphV2R1WVd4VFpYTnphVzl1VkdsdFpXOTFkRk4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5elpYTnphVzl1TFhScGJXVnZkWFF0YzNSbGNITXVhbk5jSWp0aGMzbHVZeUJtZFc1amRHbHZiaUJ6WlhOemFXOXVWR2x0Wlc5MWRGZHZjbXRtYkc5M0tHVXBlMkYzWVdsMElITnNaV1Z3S0dVdVpHVmhaR3hwYm1VcExHRjNZV2wwSUhOcFoyNWhiRk5sYzNOcGIyNVVhVzFsYjNWMFUzUmxjQ2g3ZEc5clpXNDZaUzUwYjJ0bGJuMHBmWE5sYzNOcGIyNVVhVzFsYjNWMFYyOXlhMlpzYjNjdWQyOXlhMlpzYjNkSlpEMWdkMjl5YTJac2IzY3ZMMlYyWlM4dmMyVnpjMmx2YmxScGJXVnZkWFJYYjNKclpteHZkMkE3Wlhod2IzSjBlM05sYzNOcGIyNVVhVzFsYjNWMFYyOXlhMlpzYjNkOU8xeHVjMlZ6YzJsdmJsUnBiV1Z2ZFhSWGIzSnJabXh2ZHk1M2IzSnJabXh2ZDBsa0lEMGdYQ0ozYjNKclpteHZkeTh2WlhabEx5OXpaWE56YVc5dVZHbHRaVzkxZEZkdmNtdG1iRzkzWENJN1hHNW5iRzlpWVd4VWFHbHpMbDlmY0hKcGRtRjBaVjkzYjNKclpteHZkM011YzJWMEtGd2lkMjl5YTJac2IzY3ZMMlYyWlM4dmMyVnpjMmx2YmxScGJXVnZkWFJYYjNKclpteHZkMXdpTENCelpYTnphVzl1VkdsdFpXOTFkRmR2Y210bWJHOTNLVHRjYmlJc0ltWjFibU4wYVc5dUlHcHpiMjVXWVd4MVpYTkZjWFZoYkNobExIUXBlMmxtS0dVOVBUMTBLWEpsZEhWeWJpRXdPMmxtS0VGeWNtRjVMbWx6UVhKeVlYa29aU2w4ZkVGeWNtRjVMbWx6UVhKeVlYa29kQ2twY21WMGRYSnVJRUZ5Y21GNUxtbHpRWEp5WVhrb1pTa21Ka0Z5Y21GNUxtbHpRWEp5WVhrb2RDa21KbVV1YkdWdVozUm9QVDA5ZEM1c1pXNW5kR2dtSm1VdVpYWmxjbmtvS0dVc2JpazlQbXB6YjI1V1lXeDFaWE5GY1hWaGJDaGxMSFJiYmwwcEtUdHBaaWhsUFQwOWJuVnNiSHg4ZEQwOVBXNTFiR3g4ZkhSNWNHVnZaaUJsSVQxZ2IySnFaV04wWUh4OGRIbHdaVzltSUhRaFBXQnZZbXBsWTNSZ0tYSmxkSFZ5YmlFeE8yeGxkQ0J1UFU5aWFtVmpkQzVsYm5SeWFXVnpLR1VwTEhJOWREdHlaWFIxY200Z2JpNXNaVzVuZEdnOVBUMVBZbXBsWTNRdWEyVjVjeWh5S1M1c1pXNW5kR2dtSm00dVpYWmxjbmtvS0Z0bExIUmRLVDArVDJKcVpXTjBMbWhoYzA5M2JpaHlMR1VwSmlacWMyOXVWbUZzZFdWelJYRjFZV3dvZEN4eVcyVmRLU2w5WTI5dWMzUWdTVTVXUVV4SlJGOUtVMDlPWDFaQlRGVkZYME5CVGtSSlJFRlVSVDFUZVcxaWIyd29ZR2x1ZG1Gc2FXUXRhbk52YmkxMllXeDFaUzFqWVc1a2FXUmhkR1ZnS1R0bWRXNWpkR2x2YmlCd1lYSnpaVXB6YjI1V1lXeDFaU2gwS1h0c1pYUWdiajF1YjNKdFlXeHBlbVZLYzI5dVZtRnNkV1ZEWVc1a2FXUmhkR1VvZENrN2FXWW9iajA5UFVsT1ZrRk1TVVJmU2xOUFRsOVdRVXhWUlY5RFFVNUVTVVJCVkVVcGRHaHliM2NnVkhsd1pVVnljbTl5S0dCRmVIQmxZM1JsWkNCaElFcFRUMDR0YzJWeWFXRnNhWHBoWW14bElIWmhiSFZsTG1BcE8zSmxkSFZ5YmlCdWZXWjFibU4wYVc5dUlIQmhjbk5sU25OdmJrOWlhbVZqZENobEtYdHNaWFFnZEQxd1lYSnpaVXB6YjI1V1lXeDFaU2hsS1R0cFppZ2hhWE5LYzI5dVQySnFaV04wVm1Gc2RXVW9kQ2twZEdoeWIzY2dWSGx3WlVWeWNtOXlLR0JGZUhCbFkzUmxaQ0JoSUVwVFQwNHRjMlZ5YVdGc2FYcGhZbXhsSUc5aWFtVmpkQzVnS1R0eVpYUjFjbTRnZEgxbWRXNWpkR2x2YmlCdWIzSnRZV3hwZW1WS2MyOXVWbUZzZFdWRFlXNWthV1JoZEdVb2RDeHVQVzVsZHlCWFpXRnJVMlYwS1h0cFppaDBQVDA5Ym5Wc2JIeDhkSGx3Wlc5bUlIUTlQV0JpYjI5c1pXRnVZSHg4ZEhsd1pXOW1JSFE5UFdCemRISnBibWRnS1hKbGRIVnliaUIwTzJsbUtIUjVjR1Z2WmlCMFBUMWdiblZ0WW1WeVlDbHlaWFIxY200Z1RuVnRZbVZ5TG1selJtbHVhWFJsS0hRcFAzUTZTVTVXUVV4SlJGOUtVMDlPWDFaQlRGVkZYME5CVGtSSlJFRlVSVHRwWmloQmNuSmhlUzVwYzBGeWNtRjVLSFFwS1h0c1pYUWdjajFiWFR0bWIzSW9iR1YwSUdrZ2IyWWdkQ2w3YkdWMElIUTlibTl5YldGc2FYcGxTbk52YmxaaGJIVmxRMkZ1Wkdsa1lYUmxLR2tzYmlrN2FXWW9kRDA5UFVsT1ZrRk1TVVJmU2xOUFRsOVdRVXhWUlY5RFFVNUVTVVJCVkVVcGNtVjBkWEp1SUVsT1ZrRk1TVVJmU2xOUFRsOVdRVXhWUlY5RFFVNUVTVVJCVkVVN2NpNXdkWE5vS0hRcGZYSmxkSFZ5YmlCeWZXbG1LSFI1Y0dWdlppQjBJVDFnYjJKcVpXTjBZSHg4ZEQwOVBYWnZhV1FnTUh4OElXbHpVR3hoYVc1UFltcGxZM1FvZENsOGZHNHVhR0Z6S0hRcEtYSmxkSFZ5YmlCSlRsWkJURWxFWDBwVFQwNWZWa0ZNVlVWZlEwRk9SRWxFUVZSRk8yNHVZV1JrS0hRcE8yeGxkQ0J5UFh0OU8yWnZjaWhzWlhSYmFTeGhYVzltSUU5aWFtVmpkQzVsYm5SeWFXVnpLSFFwS1h0cFppaGhQVDA5ZG05cFpDQXdLV052Ym5ScGJuVmxPMnhsZENCMFBXNXZjbTFoYkdsNlpVcHpiMjVXWVd4MVpVTmhibVJwWkdGMFpTaGhMRzRwTzJsbUtIUTlQVDFKVGxaQlRFbEVYMHBUVDA1ZlZrRk1WVVZmUTBGT1JFbEVRVlJGS1hKbGRIVnliaUJKVGxaQlRFbEVYMHBUVDA1ZlZrRk1WVVZmUTBGT1JFbEVRVlJGTzNKYmFWMDlkSDF5WlhSMWNtNGdiaTVrWld4bGRHVW9kQ2tzY24xbWRXNWpkR2x2YmlCcGMwcHpiMjVQWW1wbFkzUldZV3gxWlNobEtYdHlaWFIxY200Z1pTRTlQVzUxYkd3bUppRkJjbkpoZVM1cGMwRnljbUY1S0dVcEppWjBlWEJsYjJZZ1pUMDlZRzlpYW1WamRHQjlablZ1WTNScGIyNGdhWE5RYkdGcGJrOWlhbVZqZENobEtYdHNaWFFnZEQxUFltcGxZM1F1WjJWMFVISnZkRzkwZVhCbFQyWW9aU2s3Y21WMGRYSnVJSFE5UFQxdWRXeHNmSHhQWW1wbFkzUXVaMlYwVUhKdmRHOTBlWEJsVDJZb2RDazlQVDF1ZFd4c2ZXVjRjRzl5ZEh0cGMwcHpiMjVQWW1wbFkzUldZV3gxWlN4cWMyOXVWbUZzZFdWelJYRjFZV3dzY0dGeWMyVktjMjl1VDJKcVpXTjBMSEJoY25ObFNuTnZibFpoYkhWbGZUc2lMQ0pwYlhCdmNuUjdhbk52YmxaaGJIVmxjMFZ4ZFdGc2ZXWnliMjFjSWlOemFHRnlaV1F2YW5OdmJpNXFjMXdpTzJaMWJtTjBhVzl1SUhOaGJXVlVZWE5yVFdWMFlXUmhkR0VvZEN4dUtYdHlaWFIxY200Z2FuTnZibFpoYkhWbGMwVnhkV0ZzS0hRc2JpbDlablZ1WTNScGIyNGdjbVZoWkZSaGMydFZjMkZuWlNobEtYdHBaaWgwZVhCbGIyWWdaU0U5WUc5aWFtVmpkR0I4ZkNGbGZIeEJjbkpoZVM1cGMwRnljbUY1S0dVcEtYSmxkSFZ5Ymp0c1pYUWdkRDF5WldGa1ZYTmhaMlZCZUdsektHVXNZR05oWTJobFVtVmhaRlJ2YTJWdWMyQXBMRzQ5Y21WaFpGVnpZV2RsUVhocGN5aGxMR0JqWVdOb1pWZHlhWFJsVkc5clpXNXpZQ2tzY2oxeVpXRmtWWE5oWjJWQmVHbHpLR1VzWUdOdmMzUlZjMlJnS1N4cFBYSmxZV1JWYzJGblpVRjRhWE1vWlN4Z2FXNXdkWFJVYjJ0bGJuTmdLU3hoUFhKbFlXUlZjMkZuWlVGNGFYTW9aU3hnYjNWMGNIVjBWRzlyWlc1ellDazdhV1lvZEQwOVBYWnZhV1FnTUh4OGJqMDlQWFp2YVdRZ01IeDhhVDA5UFhadmFXUWdNSHg4WVQwOVBYWnZhV1FnTUNseVpYUjFjbTQ3YkdWMElHODllMk5oWTJobFVtVmhaRlJ2YTJWdWN6cDBMR05oWTJobFYzSnBkR1ZVYjJ0bGJuTTZiaXhwYm5CMWRGUnZhMlZ1Y3pwcExHOTFkSEIxZEZSdmEyVnVjenBoZlR0eVpYUjFjbTRnY2lFOVBYWnZhV1FnTUNZbUtHOHVZMjl6ZEZWelpEMXlLU3h2ZldaMWJtTjBhVzl1SUhKbFlXUlZjMkZuWlVGNGFYTW9aU3gwS1h0c1pYUWdiajFTWldac1pXTjBMbWRsZENobExIUXBPM0psZEhWeWJpQjBlWEJsYjJZZ2JqMDlZRzUxYldKbGNtQW1KazUxYldKbGNpNXBjMFpwYm1sMFpTaHVLU1ltYmo0OU1EOXVPblp2YVdRZ01IMW1kVzVqZEdsdmJpQnlaV0ZrVkdGemEwbHVjSFYwVW1WeGRXVnpkRWxrS0dVcGUybG1LSFI1Y0dWdlppQmxJVDFnYjJKcVpXTjBZSHg4SVdWOGZFRnljbUY1TG1selFYSnlZWGtvWlNrcGNtVjBkWEp1TzJ4bGRDQjBQVkpsWm14bFkzUXVaMlYwS0dVc1lISmxjWFZsYzNSSlpHQXBPM0psZEhWeWJpQjBlWEJsYjJZZ2REMDlZSE4wY21sdVoyQS9kRHAyYjJsa0lEQjlZMjl1YzNRZ1ZFRlRTMTlCVlZSSVQxSkpXa0ZVU1U5T1gxSkZVVlZGVTFSZlNVUmZVRkpGUmtsWVBXQjBZWE5yT21GMWRHaHZjbWw2WVhScGIyNWdPMloxYm1OMGFXOXVJSFJoYzJ0QmRYUm9iM0pwZW1GMGFXOXVVbVZ4ZFdWemRFbGtLR1VwZTNKbGRIVnliaUJsTG5SNWNHVTlQVDFnWVhCd2NtOTJZV3d1WTJGdVpHbGtZWFJsWUh4OFpTNTBlWEJsUFQwOVlHRndjSEp2ZG1Gc0xuTmxkSFJzWldSZ1AyQWtlMVJCVTB0ZlFWVlVTRTlTU1ZwQlZFbFBUbDlTUlZGVlJWTlVYMGxFWDFCU1JVWkpXSDA2Skh0bExtUmhkR0V1Y21WeGRXVnpkRWxrZldBNllDUjdWRUZUUzE5QlZWUklUMUpKV2tGVVNVOU9YMUpGVVZWRlUxUmZTVVJmVUZKRlJrbFlmVG9rZTJVdVpHRjBZUzVoZEhSbGJYQjBTV1EvUDJVdVpHRjBZUzV1WVcxbGZXQjlZMjl1YzNRZ1ZFRlRTMTlXU1VWWFgxTlVVa1ZCVFY5T1FVMUZVMUJCUTBVOVlHVjJaUzUwWVhOcllEdG1kVzVqZEdsdmJpQnBjMVJsY20xcGJtRnNWR0Z6YTFOMFlYUjFjeWhsS1h0eVpYUjFjbTRnWlQwOVBXQmpiMjF3YkdWMFpXUmdmSHhsUFQwOVlHWmhhV3hsWkdCOGZHVTlQVDFnWTJGdVkyVnNiR1ZrWUgxbWRXNWpkR2x2YmlCcGMxSmxZV1I1VkdGemExTjBZWFIxY3lobEtYdHlaWFIxY200Z1pUMDlQV0JwYm5CMWRGOXlaWEYxYVhKbFpHQjhmR2x6VkdWeWJXbHVZV3hVWVhOclUzUmhkSFZ6S0dVcGZXVjRjRzl5ZEh0VVFWTkxYMVpKUlZkZlUxUlNSVUZOWDA1QlRVVlRVRUZEUlN4cGMxSmxZV1I1VkdGemExTjBZWFIxY3l4cGMxUmxjbTFwYm1Gc1ZHRnphMU4wWVhSMWN5eHlaV0ZrVkdGemEwbHVjSFYwVW1WeGRXVnpkRWxrTEhKbFlXUlVZWE5yVlhOaFoyVXNjMkZ0WlZSaGMydE5aWFJoWkdGMFlTeDBZWE5yUVhWMGFHOXlhWHBoZEdsdmJsSmxjWFZsYzNSSlpIMDdJaXdpTHlvcVgxOXBiblJsY201aGJGOTNiM0pyWm14dmQzTjdYQ0p6ZEdWd2Mxd2lPbnRjSW1ScGMzUXZjM0pqTDJWNFpXTjFkR2x2Ymk5MFlYTnJjeTlqYUdsc1pDOXpkR1Z3Y3k1cWMxd2lPbnRjSW1Gd2NHVnVaRlJoYzJ0V2FXVjNVM1JsY0Z3aU9udGNJbk4wWlhCSlpGd2lPbHdpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2WVhCd1pXNWtWR0Z6YTFacFpYZFRkR1Z3WENKOUxGd2lkMkZyWlZSaGMydFFZWEpsYm5SVGRHVndYQ0k2ZTF3aWMzUmxjRWxrWENJNlhDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OTNZV3RsVkdGemExQmhjbVZ1ZEZOMFpYQmNJbjBzWENKM1lXdGxWR0Z6YTFWd1pHRjBaVkJoY21WdWRGTjBaWEJjSWpwN1hDSnpkR1Z3U1dSY0lqcGNJbk4wWlhBdkwyVjJaVUF3TGpVeExqRXZMM2RoYTJWVVlYTnJWWEJrWVhSbFVHRnlaVzUwVTNSbGNGd2lmU3hjSW5kaGEyVlVZWE5yUVdkbGJuUlNaWEYxWlhOMFVHRnlaVzUwVTNSbGNGd2lPbnRjSW5OMFpYQkpaRndpT2x3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dmQyRnJaVlJoYzJ0QloyVnVkRkpsY1hWbGMzUlFZWEpsYm5SVGRHVndYQ0o5TEZ3aWQyRnJaVlJoYzJ0QmRYUm9iM0pwZW1GMGFXOXVVR0Z5Wlc1MFUzUmxjRndpT250Y0luTjBaWEJKWkZ3aU9sd2ljM1JsY0M4dlpYWmxRREF1TlRFdU1TOHZkMkZyWlZSaGMydEJkWFJvYjNKcGVtRjBhVzl1VUdGeVpXNTBVM1JsY0Z3aWZTeGNJbmRoYTJWWGIzSnJabXh2ZDFSaGMydEpibkIxZEZKbGNYVmxjM1JRWVhKbGJuUlRkR1Z3WENJNmUxd2ljM1JsY0Vsa1hDSTZYQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTkzWVd0bFYyOXlhMlpzYjNkVVlYTnJTVzV3ZFhSU1pYRjFaWE4wVUdGeVpXNTBVM1JsY0Z3aWZTeGNJbVJsYkdsMlpYSlVZWE5yU1c1d2RYUlNaWE53YjI1elpYTlRkR1Z3WENJNmUxd2ljM1JsY0Vsa1hDSTZYQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTlrWld4cGRtVnlWR0Z6YTBsdWNIVjBVbVZ6Y0c5dWMyVnpVM1JsY0Z3aWZYMTlmU292TzF4dVpYaHdiM0owSUhaaGNpQmhjSEJsYm1SVVlYTnJWbWxsZDFOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5aGNIQmxibVJVWVhOclZtbGxkMU4wWlhCY0lpazdYRzVsZUhCdmNuUWdkbUZ5SUhkaGEyVlVZWE5yVUdGeVpXNTBVM1JsY0NBOUlHZHNiMkpoYkZSb2FYTmJVM2x0WW05c0xtWnZjaWhjSWxkUFVrdEdURTlYWDFWVFJWOVRWRVZRWENJcFhTaGNJbk4wWlhBdkwyVjJaVUF3TGpVeExqRXZMM2RoYTJWVVlYTnJVR0Z5Wlc1MFUzUmxjRndpS1R0Y2JtVjRjRzl5ZENCMllYSWdkMkZyWlZSaGMydFZjR1JoZEdWUVlYSmxiblJUZEdWd0lEMGdaMnh2WW1Gc1ZHaHBjMXRUZVcxaWIyd3VabTl5S0Z3aVYwOVNTMFpNVDFkZlZWTkZYMU5VUlZCY0lpbGRLRndpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2ZDJGclpWUmhjMnRWY0dSaGRHVlFZWEpsYm5SVGRHVndYQ0lwTzF4dVpYaHdiM0owSUhaaGNpQjNZV3RsVkdGemEwRm5aVzUwVW1WeGRXVnpkRkJoY21WdWRGTjBaWEFnUFNCbmJHOWlZV3hVYUdselcxTjViV0p2YkM1bWIzSW9YQ0pYVDFKTFJreFBWMTlWVTBWZlUxUkZVRndpS1Ywb1hDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OTNZV3RsVkdGemEwRm5aVzUwVW1WeGRXVnpkRkJoY21WdWRGTjBaWEJjSWlrN1hHNWxlSEJ2Y25RZ2RtRnlJSGRoYTJWVVlYTnJRWFYwYUc5eWFYcGhkR2x2YmxCaGNtVnVkRk4wWlhBZ1BTQm5iRzlpWVd4VWFHbHpXMU41YldKdmJDNW1iM0lvWENKWFQxSkxSa3hQVjE5VlUwVmZVMVJGVUZ3aUtWMG9YQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTkzWVd0bFZHRnphMEYxZEdodmNtbDZZWFJwYjI1UVlYSmxiblJUZEdWd1hDSXBPMXh1Wlhod2IzSjBJSFpoY2lCM1lXdGxWMjl5YTJac2IzZFVZWE5yU1c1d2RYUlNaWEYxWlhOMFVHRnlaVzUwVTNSbGNDQTlJR2RzYjJKaGJGUm9hWE5iVTNsdFltOXNMbVp2Y2loY0lsZFBVa3RHVEU5WFgxVlRSVjlUVkVWUVhDSXBYU2hjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDNk",
	"aGEyVlhiM0pyWm14dmQxUmhjMnRKYm5CMWRGSmxjWFZsYzNSUVlYSmxiblJUZEdWd1hDSXBPMXh1Wlhod2IzSjBJSFpoY2lCa1pXeHBkbVZ5VkdGemEwbHVjSFYwVW1WemNHOXVjMlZ6VTNSbGNDQTlJR2RzYjJKaGJGUm9hWE5iVTNsdFltOXNMbVp2Y2loY0lsZFBVa3RHVEU5WFgxVlRSVjlUVkVWUVhDSXBYU2hjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJSbGJHbDJaWEpVWVhOclNXNXdkWFJTWlhOd2IyNXpaWE5UZEdWd1hDSXBPMXh1SWl3aWFXMXdiM0owZTJSbFptbHVaVWh2YjJ0OVpuSnZiVndpSTJOdmJYQnBiR1ZrTDBCM2IzSnJabXh2ZHk5amIzSmxMMmx1WkdWNExtcHpYQ0k3WTI5dWMzUWdkMjl5YTJac2IzZFViMjlzVW5WdVVtVndiM0owU0c5dmF6MWtaV1pwYm1WSWIyOXJLQ2tzZDI5eWEyWnNiM2RVYjI5c1VuVnVVbVZ4ZFdWemRFaHZiMnM5WkdWbWFXNWxTRzl2YXlncExIZHZjbXRtYkc5M1ZHOXZiRkoxYms5MWRHTnZiV1ZJYjI5clBXUmxabWx1WlVodmIyc29LVHRtZFc1amRHbHZiaUJrWlhKcGRtVlhiM0pyWm14dmQxUnZiMnhTZFc1UGQyNWxjaWhsS1h0eVpYUjFjbTU3WVdSdGFYTnphVzl1T21Ba2UyVjlPbUZrYldsemMybHZibUFzYjNWMFkyOXRaVHBnSkh0bGZUcHZkWFJqYjIxbFlDeHlaWEJ2Y25RNllDUjdaWDA2Y21Wd2IzSjBZQ3h5WlhGMVpYTjBPbUFrZTJWOU9uSmxjWFZsYzNSZ2ZYMW1kVzVqZEdsdmJpQnBjMWR2Y210bWJHOTNWRzl2YkZKMWJrTnZiblJ5YjJ4TlpYTnpZV2RsS0dVcGUybG1LSFI1Y0dWdlppQmxJVDFnYjJKcVpXTjBZSHg4SVdVcGNtVjBkWEp1SVRFN2JHVjBlMnRwYm1RNmRDeHlaV0Z6YjI0NmJuMDlaVHR5WlhSMWNtNGdkRDA5UFdCallXNWpaV3hnSmlaMGVYQmxiMllnYmowOVlITjBjbWx1WjJCOVpYaHdiM0owZTJSbGNtbDJaVmR2Y210bWJHOTNWRzl2YkZKMWJrOTNibVZ5TEdselYyOXlhMlpzYjNkVWIyOXNVblZ1UTI5dWRISnZiRTFsYzNOaFoyVXNkMjl5YTJac2IzZFViMjlzVW5WdVQzVjBZMjl0WlVodmIyc3NkMjl5YTJac2IzZFViMjlzVW5WdVVtVndiM0owU0c5dmF5eDNiM0pyWm14dmQxUnZiMnhTZFc1U1pYRjFaWE4wU0c5dmEzMDdJaXdpWTI5dWMzUWdWMDlTUzBaTVQxZGZWRTlQVEY5U1ZVNVRYMU5VUVZSRlgwdEZXVDFnWlhabExuSjFiblJwYldVdWQyOXlhMlpzYjNkVWIyOXNVblZ1YzJBN1puVnVZM1JwYjI0Z2QyOXlhMlpzYjNkVWIyOXNVblZ1UVc1emQyVnlWRzlyWlc0b1pTeDBLWHR5WlhSMWNtNWdaWFpsT25kdmNtdG1iRzkzTFhSdmIyd3RjblZ1TFdGdWMzZGxjam9rZTJWOU9pUjdkSDFnZldaMWJtTjBhVzl1SUdkbGRGZHZjbXRtYkc5M1ZHOXZiRkoxYm5Nb2RDbDdiR1YwSUc0OWREOHVXMWRQVWt0R1RFOVhYMVJQVDB4ZlVsVk9VMTlUVkVGVVJWOUxSVmxkTzNKbGRIVnliaUJCY25KaGVTNXBjMEZ5Y21GNUtHNHBQMjQ2VzExOVpuVnVZM1JwYjI0Z1ptbHVaRmR2Y210bWJHOTNWRzl2YkZKMWJpaGxMSFFwZTNKbGRIVnliaUJuWlhSWGIzSnJabXh2ZDFSdmIyeFNkVzV6S0dVcExtWnBibVFvWlQwK1pTNWpZV3hzU1dROVBUMTBLWDFtZFc1amRHbHZiaUJ5WldOdmNtUlhiM0pyWm14dmQxUnZiMnhTZFc0b1pTeDBLWHR5WlhSMWNtNGdkM0pwZEdWWGIzSnJabXh2ZDFSdmIyeFNkVzV6S0dVc1d5NHVMbWRsZEZkdmNtdG1iRzkzVkc5dmJGSjFibk1vWlM1emRHRjBaU2t1Wm1sc2RHVnlLR1U5UG1VdVkyRnNiRWxrSVQwOWRDNWpZV3hzU1dRcExIUmRLWDFtZFc1amRHbHZiaUJ5WlcxdmRtVlhiM0pyWm14dmQxUnZiMnhTZFc0b1pTeDBLWHRzWlhRZ2JqMW5aWFJYYjNKclpteHZkMVJ2YjJ4U2RXNXpLR1V1YzNSaGRHVXBMSEk5Ymk1bWFXeDBaWElvWlQwK1pTNWpZV3hzU1dRaFBUMTBLVHR5WlhSMWNtNGdjaTVzWlc1bmRHZzlQVDF1TG14bGJtZDBhRDlsT25keWFYUmxWMjl5YTJac2IzZFViMjlzVW5WdWN5aGxMSElwZldaMWJtTjBhVzl1SUdOc1pXRnlWMjl5YTJac2IzZFViMjlzVW5WdWN5aGxLWHR5WlhSMWNtNGdaMlYwVjI5eWEyWnNiM2RVYjI5c1VuVnVjeWhsTG5OMFlYUmxLUzVzWlc1bmRHZzlQVDB3UDJVNmQzSnBkR1ZYYjNKclpteHZkMVJ2YjJ4U2RXNXpLR1VzVzEwcGZXWjFibU4wYVc5dUlHbHpTVzVpYjNoVWIyOXNVbVZ6ZFd4MFJuSnZiVkpsWTI5eVpHVmtWMjl5YTJac2IzZFViMjlzVW5WdUtHVXNkQ2w3YkdWMElHNDlabWx1WkZkdmNtdG1iRzkzVkc5dmJGSjFiaWhsTEhRdVkyRnNiRWxrS1R0eVpYUjFjbTRnYmlFOVBYWnZhV1FnTUNZbWJpNXlaWE4xYkhSTGFXNWtJVDA5WUhOMVltRm5aVzUwWUNZbWJpNTBiMjlzVG1GdFpUMDlQWFF1ZEc5dmJFNWhiV1Y5Wm5WdVkzUnBiMjRnYVhOSmJtSnZlRk4xWW1GblpXNTBVbVZ6ZFd4MFJuSnZiVkpsWTI5eVpHVmtWMjl5YTJac2IzZFViMjlzVW5WdUtHVXNkQ2w3YkdWMElHNDlabWx1WkZkdmNtdG1iRzkzVkc5dmJGSjFiaWhsTEhRdVkyRnNiRWxrS1R0eVpYUjFjbTRnYmo4dWNtVnpkV3gwUzJsdVpEMDlQV0J6ZFdKaFoyVnVkR0FtSm00dWRHOXZiRTVoYldVOVBUMTBMbk4xWW1GblpXNTBUbUZ0WlgxbWRXNWpkR2x2YmlCM2NtbDBaVmR2Y210bWJHOTNWRzl2YkZKMWJuTW9kQ3h1S1h0c1pYUWdjajE3TGk0dWRDNXpkR0YwWlgwN2NtVjBkWEp1SUc0dWJHVnVaM1JvUFQwOU1EOWtaV3hsZEdVZ2NsdFhUMUpMUmt4UFYxOVVUMDlNWDFKVlRsTmZVMVJCVkVWZlMwVlpYVHB5VzFkUFVrdEdURTlYWDFSUFQweGZVbFZPVTE5VFZFRlVSVjlMUlZsZFBXNHNleTR1TG5Rc2MzUmhkR1U2VDJKcVpXTjBMbXRsZVhNb2Npa3ViR1Z1WjNSb1BqQS9janAyYjJsa0lEQjlmV1Y0Y0c5eWRIdGpiR1ZoY2xkdmNtdG1iRzkzVkc5dmJGSjFibk1zWm1sdVpGZHZjbXRtYkc5M1ZHOXZiRkoxYml4blpYUlhiM0pyWm14dmQxUnZiMnhTZFc1ekxHbHpTVzVpYjNoVGRXSmhaMlZ1ZEZKbGMzVnNkRVp5YjIxU1pXTnZjbVJsWkZkdmNtdG1iRzkzVkc5dmJGSjFiaXhwYzBsdVltOTRWRzl2YkZKbGMzVnNkRVp5YjIxU1pXTnZjbVJsWkZkdmNtdG1iRzkzVkc5dmJGSjFiaXh5WldOdmNtUlhiM0pyWm14dmQxUnZiMnhTZFc0c2NtVnRiM1psVjI5eWEyWnNiM2RVYjI5c1VuVnVMSGR2Y210bWJHOTNWRzl2YkZKMWJrRnVjM2RsY2xSdmEyVnVmVHNpTENJdktpcGZYMmx1ZEdWeWJtRnNYM2R2Y210bWJHOTNjM3RjSW5OMFpYQnpYQ0k2ZTF3aVpHbHpkQzl6Y21NdlpYaGxZM1YwYVc5dUwzUnZiMnh6TDNkdmNtdG1iRzkzTDNKbGMzVnRaUzFvYjI5ckxYTjBaWEF1YW5OY0lqcDdYQ0p5WlhOMWJXVkliMjlyVTNSbGNGd2lPbnRjSW5OMFpYQkpaRndpT2x3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dmNtVnpkVzFsU0c5dmExTjBaWEJjSW4xOWZYMHFMenRjYm1WNGNHOXlkQ0IyWVhJZ2NtVnpkVzFsU0c5dmExTjBaWEFnUFNCbmJHOWlZV3hVYUdselcxTjViV0p2YkM1bWIzSW9YQ0pYVDFKTFJreFBWMTlWVTBWZlUxUkZVRndpS1Ywb1hDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OXlaWE4xYldWSWIyOXJVM1JsY0Z3aUtUdGNiaUlzSW1sdGNHOXlkSHRqY21WaGRHVkliMjlyZldaeWIyMWNJaU5qYjIxd2FXeGxaQzlBZDI5eWEyWnNiM2N2WTI5eVpTOXBibVJsZUM1cWMxd2lPMmx0Y0c5eWRIdDNiM0pyWm14dmQxUnZiMnhTZFc1QmJuTjNaWEpVYjJ0bGJuMW1jbTl0WENJamFHRnlibVZ6Y3k5M2IzSnJabXh2ZHkxMGIyOXNMWEoxYm5NdWFuTmNJanRwYlhCdmNuUjdjbVZ6ZFcxbFNHOXZhMU4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MGIyOXNjeTkzYjNKclpteHZkeTl5WlhOMWJXVXRhRzl2YXkxemRHVndMbXB6WENJN1kyOXVjM1FnVjA5U1MwWk1UMWRmVkU5UFRGOVNWVTVmUTA5T1ZFVllWRDFUZVcxaWIyd3VabTl5S0dCbGRtVXVkMjl5YTJac2IzY3RkRzl2YkMxeWRXNHVZMjl1ZEdWNGRHQXBPMloxYm1OMGFXOXVJR0YwZEdGamFGZHZjbXRtYkc5M1ZHOXZiRkoxYmtOdmJuUmxlSFFvWlN4MEtYdFBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlN4WFQxSkxSa3hQVjE5VVQwOU1YMUpWVGw5RFQwNVVSVmhVTEh0bGJuVnRaWEpoWW14bE9pRXhMSFpoYkhWbE9uc3VMaTUwTEdGdWMzZGxjbE5sY1Rvd2ZYMHBmV1oxYm1OMGFXOXVJSEpsWVdSWGIzSnJabXh2ZDFSdmIyeFNkVzVEYjI1MFpYaDBLR1VwZTJ4bGRDQjBQV1ZiVjA5U1MwWk1UMWRmVkU5UFRGOVNWVTVmUTA5T1ZFVllWRjA3YVdZb2REMDlQWFp2YVdRZ01DbDBhSEp2ZHlCRmNuSnZjaWhnVkdocGN5Qm1kVzVqZEdsdmJpQnRkWE4wSUdKbElHTmhiR3hsWkNCM2FYUm9JSFJvWlNCamIyNTBaWGgwSUc5bUlHRWdkMjl5YTJac2IzY2dkRzl2YkNCaWIyUjVJQ2hjSW5WelpTQjNiM0pyWm14dmQxd2lLUzVnS1R0eVpYUjFjbTRnZEgxbWRXNWpkR2x2YmlCeVpXRmtWMjl5YTJac2IzZFViMjlzVW5WdVVtVm1LR1VwZTNKbGRIVnliaUJ5WldGa1YyOXlhMlpzYjNkVWIyOXNVblZ1UTI5dWRHVjRkQ2hsS1M1bWNtOXRmV1oxYm1OMGFXOXVJSEpsWVdSWGIzSnJabXh2ZDFSdmIyeFNkVzVQZDI1bGNpaGxLWHR5WlhSMWNtNGdjbVZoWkZkdmNtdG1iRzkzVkc5dmJGSjFia052Ym5SbGVIUW9aU2t1YjNkdVpYSjlablZ1WTNScGIyNGdjbVZoWkZkdmNtdG1iRzkzVkc5dmJGSjFia0ZrYldsemMybHZiaWhsS1h0eVpYUjFjbTRnY21WaFpGZHZjbXRtYkc5M1ZHOXZiRkoxYmtOdmJuUmxlSFFvWlNrdVlXUnRhWE56YVc5dWZXWjFibU4wYVc5dUlHRnpheWh1TEhJcGUyeGxkQ0JwUFhKbFlXUlhiM0pyWm14dmQxUnZiMnhTZFc1RGIyNTBaWGgwS0c0cExHRTlZM0psWVhSbFNHOXZheWg3ZEc5clpXNDZkMjl5YTJac2IzZFViMjlzVW5WdVFXNXpkMlZ5Vkc5clpXNG9hUzVtY205dExuSjFia2xrTEdrdVlXNXpkMlZ5VTJWeEt5c3BmU2s3Y21WMGRYSnVJSEpsYzNWdFpVaHZiMnRUZEdWd0tHa3ViM2R1WlhJdWNtVnhkV1Z6ZEN4N1puSnZiVHBwTG1aeWIyMHNjbVZ3YkhsVWJ6cGhMblJ2YTJWdUxISmxjWFZsYzNRNmUydHBibVE2WUdGemEyQXNjbVZ4ZFdWemREcHlmWDBwTEdGOVpYaHdiM0owZTJGemF5eGhkSFJoWTJoWGIzSnJabXh2ZDFSdmIyeFNkVzVEYjI1MFpYaDBMSEpsWVdSWGIzSnJabXh2ZDFSdmIyeFNkVzVCWkcxcGMzTnBiMjRzY21WaFpGZHZjbXRtYkc5M1ZHOXZiRkoxYms5M2JtVnlMSEpsWVdSWGIzSnJabXh2ZDFSdmIyeFNkVzVTWldaOU95SXNJbVoxYm1OMGFXOXVJRzV2Y20xaGJHbDZaVk5sY21saGJHbDZZV0pzWlVWeWNtOXlLR1VwZTNKbGRIVnliaUJsSUdsdWMzUmhibU5sYjJZZ1JYSnliM0kvZXk0dUxrOWlhbVZqZEM1bWNtOXRSVzUwY21sbGN5aFBZbXBsWTNRdVpXNTBjbWxsY3lobEtTa3NZMkYxYzJVNlpTNWpZWFZ6WlQwOVBYWnZhV1FnTUQ5MmIybGtJREE2Ym05eWJXRnNhWHBsVTJWeWFXRnNhWHBoWW14bFJYSnliM0lvWlM1allYVnpaU2tzYldWemMyRm5aVHBsTG0xbGMzTmhaMlVzYm1GdFpUcGxMbTVoYldVc2MzUmhZMnM2WlM1emRHRmphMzA2WlgxbWRXNWpkR2x2YmlCeVpXSjFhV3hrVTJWeWFXRnNhWHBoWW14bFJYSnliM0lvWlNsN2FXWW9JV2x6VW1WamIzSmtLR1VwS1hKbGRIVnliaUJGY25KdmNpaFRkSEpwYm1jb1pTa3BPMnhsZENCMFBYUjVjR1Z2WmlCbExtMWxjM05oWjJVOVBXQnpkSEpwYm1kZ1AyVXViV1Z6YzJGblpUcFRkSEpwYm1jb1pTa3NiajFGY25KdmNpaDBLVHQwZVhCbGIyWWdaUzV1WVcxbFBUMWdjM1J5YVc1bllDWW1LRzR1Ym1GdFpUMWxMbTVoYldVcExIUjVjR1Z2WmlCbExuTjBZV05yUFQxZ2MzUnlhVzVuWUNZbUtHNHVjM1JoWTJzOVpTNXpkR0ZqYXlrc1lHTmhkWE5sWUdsdUlHVW1KaWh1TG1OaGRYTmxQV2x6VW1WamIzSmtLR1V1WTJGMWMyVXBQM0psWW5WcGJHUlRaWEpwWVd4cGVtRmliR1ZGY25KdmNpaGxMbU5oZFhObEtUcGxMbU5oZFhObEtUdHNaWFFnY2oxdU8yWnZjaWhzWlhSYmRDeHVYVzltSUU5aWFtVmpkQzVsYm5SeWFXVnpLR1VwS1hROVBUMWdiV1Z6YzJGblpXQjhmSFE5UFQxZ2JtRnRaV0I4ZkhROVBUMWdjM1JoWTJ0Z2ZIeDBQVDA5WUdOaGRYTmxZSHg4S0hKYmRGMDliaWs3Y21WMGRYSnVJRzU5Wm5WdVkzUnBiMjRnYVhOU1pXTnZjbVFvWlNsN2NtVjBkWEp1SUhSNWNHVnZaaUJsUFQxZ2IySnFaV04wWUNZbUlTRmxmV1Y0Y0c5eWRIdHViM0p0WVd4cGVtVlRaWEpwWVd4cGVtRmliR1ZGY25KdmNpeHlaV0oxYVd4a1UyVnlhV0ZzYVhwaFlteGxSWEp5YjNKOU95SXNJbU52Ym5OMElGZFBVa3RHVEU5WFgxSkZSMGxUVkZKWlgwZE1UMEpCVEQxZ1gxOXdjbWwyWVhSbFgzZHZjbXRtYkc5M2MyQTdablZ1WTNScGIyNGdjbVZoWkZKbFoybHpkR1Z5WldSWGIzSnJabXh2ZHlobEtYdHlaWFIxY200Z1oyeHZZbUZzVkdocGMxdFhUMUpMUmt4UFYxOVNSVWRKVTFSU1dWOUhURTlDUVV4ZFB5NW5aWFFvWlNsOVpYaHdiM0owZTFkUFVrdEdURTlYWDFKRlIwbFRWRkpaWDBkTVQwSkJUQ3h5WldGa1VtVm5hWE4wWlhKbFpGZHZjbXRtYkc5M2ZUc2lMQ0pwYlhCdmNuUjdaMlYwVjI5eWEyWnNiM2ROWlhSaFpHRjBZWDFtY205dFhDSWpZMjl0Y0dsc1pXUXZRSGR2Y210bWJHOTNMMk52Y21VdmFXNWtaWGd1YW5OY0lqdHBiWEJ2Y25SY0lpTmxlR1ZqZFhScGIyNHZkRzl2YkhNdmQyOXlhMlpzYjNjdmJXVnpjMkZuWlhNdWFuTmNJanRwYlhCdmNuUjdZWFIwWVdOb1YyOXlhMlpzYjNkVWIyOXNVblZ1UTI5dWRHVjRkSDFtY205dFhDSWpaWGhsWTNWMGFXOXVMM1J2YjJ4ekwzZHZjbXRtYkc5M0wyRnpheTVxYzF3aU8ybHRjRzl5ZEh0eVpYTjFiV1ZJYjI5clUzUmxjSDFtY205dFhDSWpaWGhsWTNWMGFXOXVMM1J2YjJ4ekwzZHZjbXRtYkc5M0wzSmxjM1Z0WlMxb2IyOXJMWE4wWlhBdWFuTmNJanRwYlhCdmNuUjdibTl5YldGc2FYcGxVMlZ5YVdGc2FYcGhZbXhsUlhKeWIzSjlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOTNiM0pyWm14dmR5MWxjbkp2Y25NdWFuTmNJanRwYlhCdmNuUjdjbVZoWkZKbFoybHpkR1Z5WldSWGIzSnJabXh2ZDMxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNkdmNtdG1iRzkzTFhKbFoybHpkSEo1TG1welhDSTdZWE41Ym1NZ1puVnVZM1JwYjI0Z1pYaGxZM1YwWlZkdmNtdG1iRzkzUW05a2VTaGxMR2twZTJ4bGRDQmhQV055WldGMFpWZHZjbXRtYkc5M1FtOWtlVkpsWmlobEtTeHZQV055WldGMFpWZHZjbXRtYkc5M1FtOWtlVU52Ym5SbGVIUW9aU3hwS1R0aGRIUmhZMmhYYjNKclpteHZkMVJ2YjJ4U2RXNURiMjUwWlhoMEtHOHNlMlp5YjIwNllTeHZkMjVsY2pwbExtOTNibVZ5ZlNrN2RISjVlMnhsZENCMFBYSmxjMjlzZG1WWGIzSnJabXh2ZDFSdmIyeEZlR1ZqZFhSbEtHVXBLR1V1WlhobFkzVjBaVWx1Y0hWMFB6OWxMbWx1Y0hWMExHOHBMSEk3YVdZb0lXbHpRWE41Ym1OSmRHVnlZV0pzWlNoMEtTbHlQV0YzWVdsMElIUTdaV3h6Wlh0c1pYUWdhVDEwVzFONWJXSnZiQzVoYzNsdVkwbDBaWEpoZEc5eVhTZ3BMRzhzY3oxaGQyRnBkQ0JwTG01bGVIUW9LVHRtYjNJb08zTXVaRzl1WlNFOVBTRXdPeWw3YnoxekxuWmhiSFZsTzJ4bGRDQjBQWHRtY205dE9tRXNkWEJrWVhSbE9uTXVkbUZzZFdWOU8yRjNZV2wwSUhKbGMzVnRaVWh2YjJ0VGRHVndLR1V1YjNkdVpYSXVjbVZ3YjNKMExIUXBMSE05WVhkaGFYUWdhUzV1WlhoMEtDbDljajF6TG5aaGJIVmxQejl2UHo5dWRXeHNmWEpsZEhWeWJudHZkWFJ3ZFhRNmNpeHpkR0YwZFhNNllHTnZiWEJzWlhSbFpHQjlmV05oZEdOb0tHVXBlM0psZEhWeWJpQnBMbUZpYjNKMFpXUS9lM0psWVhOdmJqcHBMbkpsWVhOdmJpQnBibk4wWVc1alpXOW1JRVZ5Y205eVAya3VjbVZoYzI5dUxtMWxjM05oWjJVNlUzUnlhVzVuS0drdWNtVmhjMjl1UHo5Z1lDa3NjM1JoZEhWek9tQmpZVzVqWld4c1pXUmdmVHA3WlhKeWIzSTZibTl5YldGc2FYcGxVMlZ5YVdGc2FYcGhZbXhsUlhKeWIzSW9aU2tzYzNSaGRIVnpPbUJtWVdsc1pXUmdmWDE5Wm5WdVkzUnBiMjRnWTNKbFlYUmxWMjl5YTJac2IzZENiMlI1VW1WbUtIUXBlM0psZEhWeWJudGpZV3hzU1dRNmRDNWpZV3hzU1dRc1pYaGxZM1YwYVc5dU9uUXVaWGhsWTNWMGFXOXVMR2x1Y0hWME9uUXVhVzV3ZFhRc2NtVnpkV3gwUzJsdVpEcDBMbkpsYzNWc2RFdHBibVFzY25WdVNXUTZkQzV5ZFc1SlpEOC9aMlYwVjI5eWEyWnNiM2ROWlhSaFpHRjBZU2dwTG5kdmNtdG1iRzkzVW5WdVNXUXNjMlZ4ZFdWdVkyVTZkQzV6WlhOemFXOXVMblIxY200dWMyVnhkV1Z1WTJVc2MzUmxjRWx1WkdWNE9uUXVjM1JsY0VsdVpHVjRMSFJ2YjJ4T1lXMWxPblF1ZEc5dmJFNWhiV1VzZEhWeWJrbGtPblF1YzJWemMybHZiaTUwZFhKdUxtbGtmWDFtZFc1amRHbHZiaUJ5WlhOdmJIWmxWMjl5YTJac2IzZFViMjlzUlhobFkzVjBaU2hsS1h0c1pYUWdkRDF5WldGa1VtVm5hWE4wWlhKbFpGZHZjbXRtYkc5M0tHVXVkMjl5YTJac2IzZEpaQ2s3YVdZb2RIbHdaVzltSUhRaFBXQm1kVzVqZEdsdmJtQXBkR2h5YjNjZ1JYSnliM0lvWUZSdmIyd2dYQ0lrZTJVdWRHOXZiRTVoYldWOVhDSWdhWE1nYm05MElISmxaMmx6ZEdWeVpXUWdZWE1nWVNCM2IzSnJabXh2ZHlCcGJpQjBhR2x6SUdSbGNHeHZlVzFsYm5RZ0tDUjdaUzUzYjNKclpteHZkMGxrZlNrdUlGUm9aU0IwYjI5c0lIZGhjeUJ5Wlc1aGJXVmtJRzl5SUhKbGJXOTJaV1FnWVdaMFpYSWdkR2hwY3lCeWRXNGdjM1JoY25SbFpDNWdLVHR5WlhSMWNtNGdkSDFtZFc1amRHbHZiaUJqY21WaGRHVlhiM0pyWm14dmQwSnZaSGxEYjI1MFpYaDBLR1VzZENsN2JHVjBJSFZ1WVhaaGFXeGhZbXhsUFNoMExHNHBQVDU3ZEdoeWIzY2dSWEp5YjNJb1lHTjBlQzRrZTNSOUlHbHpJRzV2ZENCaGRtRnBiR0ZpYkdVZ2FXNXphV1JsSUdFZ2QyOXlhMlpzYjNjZ2RHOXZiRHNnSkh0dWZTNGdWRzl2YkNCY0lpUjdaUzUwYjI5c1RtRnRaWDFjSWlCeWRXNXpJR0Z6SUdFZ1pIVnlZV0pzWlNCM2IzSnJabXh2ZHlCaWIyUjVMQ0IzYUdsamFDQnZibXg1SUhKbGNHeGhlWE1nWkdWMFpYSnRhVzVwYzNScFl5QmpiMlJsTG1BcGZUdHlaWFIxY201N1lXSnZjblJUYVdkdVlXdzZkQ3hqWVd4c1NXUTZaUzVqWVd4c1NXUXNaMlYwVTJGdVpHSnZlRG9vS1QwK2RXNWhkbUZwYkdGaWJHVW9ZR2RsZEZOaGJtUmliM2dvS1dBc1lIUm9aU0J6WlhOemFXOXVJSE5oYm1SaWIzZ2dZbVZzYjI1bmN5QjBieUIwYUdVZ2RIVnlibUFwTEdkbGRGTnJhV3hzT2lncFBUNTFibUYyWVdsc1lXSnNaU2hnWjJWMFUydHBiR3dvS1dBc1lITnJhV3hzY3lCaGNtVWdjbVZoWkNCMGFISnZkV2RvSUhSb1pTQnpaWE56YVc5dUlITmhibVJpYjNoZ0tTeG5aWFJVYjJ0bGJqb29LVDArZFc1aGRtRnBiR0ZpYkdVb1lHZGxkRlJ2YTJWdUtDbGdMR0J5WldGa0lHTnlaV1JsYm5ScFlXeHpJR1p5YjIwZ2RHaGxJR1Z1ZG1seWIyNXRaVzUwSUdsdWMybGtaU0JoSUZ3aWRYTmxJSE4wWlhCY0lpQm9aV3h3WlhKZ0tTeHlaWEYxYVhKbFFYVjBhRG9vS1QwK2RXNWhkbUZwYkdGaWJHVW9ZSEpsY1hWcGNtVkJkWFJvS0NsZ0xHQmhJSGR2Y210bWJHOTNJR0p2WkhrZ1kyRnVibTkwSUhCaGNtc2diMjRnWVhWMGFHOXlhWHBoZEdsdmJtQXBMSE5sYzNOcGIyNDZaUzV6WlhOemFXOXVMSFJ2YjJ4T1lXMWxPbVV1ZEc5dmJFNWhiV1Y5ZldaMWJtTjBhVzl1SUdselFYTjVibU5KZEdWeVlXSnNaU2hsS1h0eVpYUjFjbTRnZEhsd1pXOW1JR1U5UFdCdlltcGxZM1JnSmlZaElXVW1KblI1Y0dWdlppQmxXMU41YldKdmJDNWhjM2x1WTBsMFpYSmhkRzl5WFQwOVlHWjFibU4wYVc5dVlIMWxlSEJ2Y25SN1kzSmxZWFJsVjI5eWEyWnNiM2RDYjJSNVVtVm1MR1Y0WldOMWRHVlhiM0pyWm14dmQwSnZaSGw5T3lJc0ltWjFibU4wYVc5dUlHTnlaV0YwWlVOb1lXNXVaV3hTWldGa1pYSW9aU3gwS1h0eVpYUjFjbTU3WTJoaGJtNWxiRHBsTEdsMFpYSmhkRzl5T25SYlUzbHRZbTlzTG1GemVXNWpTWFJsY21GMGIzSmRLQ2tzYkdGdVpHVmtPbHRkZlgxaGMzbHVZeUJtZFc1amRHbHZiaUJ5WVdObFEyaGhibTVsYkZKbFlXUnpLR1VzZENsN1ptOXlLRHM3S1h0bWIzSW9iR1YwSUhRZ2IyWWdaU2w3YVdZb2RDNW1ZV2xzZFhKbElUMDlkbTlwWkNBd0tYUm9jbTkzSUhRdVptRnBiSFZ5WlM1bGNuSnZjanRzWlhRZ1pUMTBMbXhoYm1SbFpDNXphR2xtZENncE8ybG1LR1VoUFQxMmIybGtJREFwY21WMGRYSnVlMk5vWVc1dVpXdzZkQzVqYUdGdWJtVnNMRzVsZUhRNlpYMTliR1YwSUc0OVcxMDdabTl5S0d4bGRDQjBJRzltSUdVcGRDNXdaVzVrYVc1blB6ODlkQzVwZEdWeVlYUnZjaTV1WlhoMEtDa3VkR2hsYmlobFBUNTdkQzVzWVc1a1pXUXVjSFZ6YUNobEtTeDBMbkJsYm1ScGJtYzlkbTlwWkNBd2ZTeGxQVDU3ZEM1bVlXbHNkWEpsUFh0bGNuSnZjanBsZlN4MExuQmxibVJwYm1jOWRtOXBaQ0F3ZlNrc2JpNXdkWE5vS0hRdWNHVnVaR2x1WnlrN2FXWW9kQ0U5UFhadmFXUWdNQ1ltYmk1d2RYTm9LSFFwTEdGM1lXbDBJRkJ5YjIxcGMyVXVjbUZqWlNodUtUMDlQV0JqWVc1alpXeGdLWEpsZEhWeWJtQmpZVzVqWld4Z2ZYMWxlSEJ2Y25SN1kzSmxZWFJsUTJoaGJtNWxiRkpsWVdSbGNpeHlZV05sUTJoaGJtNWxiRkpsWVdSemZUc2lMQ0pwYlhCdmNuUjdaR2x6Y0c5elpVaHZiMnQ5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTlvYjI5ckxXOTNibVZ5YzJocGNDNXFjMXdpTzJsdGNHOXlkSHRrWlhKcGRtVlhiM0pyWm14dmQxUnZiMnhTZFc1UGQyNWxjaXgzYjNKclpteHZkMVJ2YjJ4U2RXNVBkWFJqYjIxbFNHOXZheXgzYjNKclpteHZkMVJ2YjJ4U2RXNVNaWEJ2Y25SSWIyOXJMSGR2Y210bWJHOTNWRzl2YkZKMWJsSmxjWFZsYzNSSWIyOXJmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkRzl2YkhNdmQyOXlhMlpzYjNjdmJXVnpjMkZuWlhNdWFuTmNJanRwYlhCdmNuUjdZM0psWVhSbFEyaGhibTVsYkZKbFlXUmxjbjFtY205dFhDSWpaWGhsWTNWMGFXOXVMM1J2YjJ4ekwzZHZjbXRtYkc5M0wyOTNibVZ5TFdOb1lXNXVaV3h6TG1welhDSTdablZ1WTNScGIyNGdiM0JsYmxkdmNtdG1iRzkzVkc5dmJGSjFiazkzYm1WeVEyaGhibTVsYkhNb1pTbDdiR1YwSUhROVpHVnlhWFpsVjI5eWEyWnNiM2RVYjI5c1VuVnVUM2R1WlhJb1pTa3NiajEzYjNKclpteHZkMVJ2YjJ4U2RXNVNaWEJ2Y25SSWIyOXJMbU55WldGMFpTaDdkRzlyWlc0NmRDNXlaWEJ2Y25SOUtTeHlQWGR2Y210bWJHOTNWRzl2YkZKMWJsSmxjWFZsYzNSSWIyOXJMbU55WldGMFpTaDdkRzlyWlc0NmRDNXlaWEYxWlhOMGZTa3NhVDEzYjNKclpteHZkMVJ2YjJ4U2RXNVBkWFJqYjIxbFNHOXZheTVqY21WaGRHVW9lM1J2YTJWdU9uUXViM1YwWTI5dFpYMHBPM0psZEhWeWJudHlaV0ZrWlhKek9sdGpjbVZoZEdWRGFHRnVibVZzVW1WaFpHVnlLR0J5WlhCdmNuUmdMRzRwTEdOeVpXRjBaVU5vWVc1dVpXeFNaV0ZrWlhJb1lISmxjWFZsYzNSZ0xISXBMR055WldGMFpVTm9ZVzV1Wld4U1pXRmtaWElvWUc5MWRHTnZiV1ZnTEdrcFhTeGhjM2x1WXlCa2FYTndiM05sS0NsN1lYZGhhWFFnWkdsemNHOXpaVWh2YjJzb2Jpa3NZWGRoYVhRZ1pHbHpjRzl6WlVodmIyc29jaWtzWVhkaGFYUWdaR2x6Y0c5elpVaHZiMnNvYVNsOWZYMWxlSEJ2Y25SN2IzQmxibGR2Y210bWJHOTNWRzl2YkZKMWJrOTNibVZ5UTJoaGJtNWxiSE45T3lJc0ltTnZibk4wSUVGSFJVNVVYMDFKVTAxQlZFTklQV0JCUjBWT1ZGOU5TVk5OUVZSRFNHQXNRVWRGVGxSZlZVNVNSVUZEU0VGQ1RFVTlZRUZIUlU1VVgxVk9Va1ZCUTBoQlFreEZZQ3hCUjBWT1ZGOUNWVk5aUFdCQlIwVk9WRjlDVlZOWllEdG1kVzVqZEdsdmJpQm1iM0p0WVhSQloyVnVkRUoxYzNsTlpYTnpZV2RsS0dVcGUyeGxkQ0IwUFdCQloyVnVkQ0JjSWlSN1pTNWhaMlZ1ZEU1aGJXVjlYQ0lnZDJsMGFDQnBaQ0JjSWlSN1pTNWhaMlZ1ZEVsa2ZWd2lJR2x6SUhOMGFXeHNJSGR2Y210cGJtY2diMjVnTzNKbGRIVnliaUJsTG05M2JtVnlTV1EvTG5OMFlYSjBjMWRwZEdnb1lIUmhjMnRmWUNrL1lDUjdkSDBnZEdGemF5QmNJaVI3WlM1dmQyNWxja2xrZlZ3aUxtQTZZQ1I3ZEgwZ0pIdGxMbTkzYm1WeVNXUTlQVDEyYjJsa0lEQS9ZR0Z1YjNSb1pYSWdkR0Z6YTJBNllHRnViM1JvWlhJZ2FXNTJiMk5oZEdsdmJtQjlMbUI5WTI5dWMzUWdVMVZDUVVkRlRsUmZVMVJCVWxSZlJrRkpURVZFUFdCVFZVSkJSMFZPVkY5VFZFRlNWRjlHUVVsTVJVUmdMRk5WUWtGSFJVNVVYMFZZUlVOVlZFbFBUbDlHUVVsTVJVUTlZRk5WUWtGSFJVNVVYMFZZUlVOVlZFbFBUbDlHUVVsTVJVUmdMRkpGVFU5VVJWOUJSMFZPVkY5VFZFRlNWRjlHUVVsTVJVUTlZRkpGVFU5VVJWOUJSMFZPVkY5VFZFRlNWRjlHUVVsTVJVUmdMRkpGVFU5VVJWOUJSMFZPVkY5R1FVbE1SVVE5WUZKRlRVOVVSVjlCUjBWT1ZGOUdRVWxNUlVSZ0xGTkZVMU5KVDA1ZlJrRkpURVZFUFdCVFJWTlRTVTlPWDBaQlNVeEZSR0E3Wlhod2IzSjBlMEZIUlU1VVgwSlZVMWtzUVVkRlRsUmZUVWxUVFVGVVEwZ3NRVWRGVGxSZlZVNVNSVUZEU0VGQ1RFVXNVa1ZOVDFSRlgwRkhSVTVVWDBaQlNVeEZSQ3hTUlUx",
	"UFZFVmZRVWRGVGxSZlUxUkJVbFJmUmtGSlRFVkVMRk5GVTFOSlQwNWZSa0ZKVEVWRUxGTlZRa0ZIUlU1VVgwVllSVU5WVkVsUFRsOUdRVWxNUlVRc1UxVkNRVWRGVGxSZlUxUkJVbFJmUmtGSlRFVkVMR1p2Y20xaGRFRm5aVzUwUW5WemVVMWxjM05oWjJWOU95SXNJbWx0Y0c5eWRIdHdZWEp6WlVwemIyNVdZV3gxWlgxbWNtOXRYQ0lqYzJoaGNtVmtMMnB6YjI0dWFuTmNJanRwYlhCdmNuUjdVMVZDUVVkRlRsUmZSVmhGUTFWVVNVOU9YMFpCU1V4RlJIMW1jbTl0WENJamMzVmlZV2RsYm5SekwyRm5aVzUwTFdoaGJtUnNaUzFsY25KdmNuTXVhbk5jSWp0bWRXNWpkR2x2YmlCM2IzSnJabXh2ZDFSdmIyeFNkVzVQZFhSamIyMWxWRzlVYjI5c1VtVnpkV3gwS0dVcGUyeGxkSHRtY205dE9uUXNjbVZ6ZFd4ME9tNTlQV1U3Y21WMGRYSnVJRzR1YzNSaGRIVnpQVDA5WUdOdmJYQnNaWFJsWkdBL2UyTmhiR3hKWkRwMExtTmhiR3hKWkN4cmFXNWtPbUIwYjI5c0xYSmxjM1ZzZEdBc2IzVjBjSFYwT200dWIzVjBjSFYwTEhSdmIyeE9ZVzFsT25RdWRHOXZiRTVoYldWOU9udGpZV3hzU1dRNmRDNWpZV3hzU1dRc2FYTkZjbkp2Y2pvaE1DeHJhVzVrT21CMGIyOXNMWEpsYzNWc2RHQXNiM1YwY0hWME9tNHVjM1JoZEhWelBUMDlZR1poYVd4bFpHQS9aWEp5YjNKTlpYTnpZV2RsS0c0dVpYSnliM0lwT200dWNtVmhjMjl1UHo5Z1ZHaGxJSGR2Y210bWJHOTNJSFJ2YjJ3Z2NuVnVJSGRoY3lCallXNWpaV3hzWldRdVlDeDBiMjlzVG1GdFpUcDBMblJ2YjJ4T1lXMWxmWDFtZFc1amRHbHZiaUIzYjNKclpteHZkMVJ2YjJ4U2RXNVBkWFJqYjIxbFZHOVRkV0poWjJWdWRGSmxjM1ZzZENobEtYdHBaaWhsTG5KbGMzVnNkQzV6ZEdGMGRYTTlQVDFnWTI5dGNHeGxkR1ZrWUNZbWFYTlNkVzUwYVcxbFUzVmlZV2RsYm5SU1pYTjFiSFFvWlM1eVpYTjFiSFF1YjNWMGNIVjBLU2x5WlhSMWNtNGdaUzV5WlhOMWJIUXViM1YwY0hWME8yeGxkQ0IwUFdVdWNtVnpkV3gwTG5OMFlYUjFjejA5UFdCbVlXbHNaV1JnUDJWeWNtOXlUV1Z6YzJGblpTaGxMbkpsYzNWc2RDNWxjbkp2Y2lrNlpTNXlaWE4xYkhRdWMzUmhkSFZ6UFQwOVlHTmhibU5sYkd4bFpHQS9aUzV5WlhOMWJIUXVjbVZoYzI5dVB6OWdWR2hsSUdGblpXNTBJR2x1ZG05allYUnBiMjRnZDJGeklHTmhibU5sYkd4bFpDNWdPbUJVYUdVZ1lXZGxiblFnYVc1MmIyTmhkR2x2YmlCeVpYUjFjbTVsWkNCaGJpQnBiblpoYkdsa0lISmxjM1ZzZEM1Z08zSmxkSFZ5Ym50allXeHNTV1E2WlM1bWNtOXRMbU5oYkd4SlpDeHBjMFZ5Y205eU9pRXdMR3RwYm1RNllITjFZbUZuWlc1MExYSmxjM1ZzZEdBc2IzSnBaMmx1T21Ca2FYTndZWFJqYUdBc2IzVjBjSFYwT25Rc2MzVmlZV2RsYm5ST1lXMWxPbVV1Wm5KdmJTNTBiMjlzVG1GdFpYMTlablZ1WTNScGIyNGdkMjl5YTJac2IzZFViMjlzVW5WdVQzVjBZMjl0WlZSdlZHRnphME52YlcxaGJtUW9aU2w3Y21WMGRYSnVJR1V1Y21WemRXeDBMbk4wWVhSMWN6MDlQV0JqYjIxd2JHVjBaV1JnUDN0a1lYUmhPbVV1Y21WemRXeDBMbTkxZEhCMWRDeHJhVzVrT21CamIyMXdiR1YwWldCOU9tVXVjbVZ6ZFd4MExuTjBZWFIxY3owOVBXQm1ZV2xzWldSZ1AzdGtZWFJoT21VdVpuSnZiUzV5WlhOMWJIUkxhVzVrUFQwOVlITjFZbUZuWlc1MFlEOXpkV0poWjJWdWRFWmhhV3gxY21WUGRYUndkWFFvWlM1eVpYTjFiSFF1WlhKeWIzSXBPbVZ5Y205eVRXVnpjMkZuWlNobExuSmxjM1ZzZEM1bGNuSnZjaWtzYTJsdVpEcGdabUZwYkdCOU9udHJhVzVrT21CallXNWpaV3hnZlgxbWRXNWpkR2x2YmlCemRXSmhaMlZ1ZEVaaGFXeDFjbVZQZFhSd2RYUW9aU2w3YkdWMElHNDljR0Z5YzJWS2MyOXVWbUZzZFdWUGNsVnVaR1ZtYVc1bFpDaGxLVHR5WlhSMWNtNGdiaUU5UFhadmFXUWdNQ1ltZEhsd1pXOW1JRzQ5UFdCdlltcGxZM1JnSmladUppWWhRWEp5WVhrdWFYTkJjbkpoZVNodUtTWW1kSGx3Wlc5bUlGSmxabXhsWTNRdVoyVjBLRzRzWUdOdlpHVmdLVDA5WUhOMGNtbHVaMkEvYmpwN1kyOWtaVHBUVlVKQlIwVk9WRjlGV0VWRFZWUkpUMDVmUmtGSlRFVkVMRzFsYzNOaFoyVTZaWEp5YjNKTlpYTnpZV2RsS0dVcGZYMW1kVzVqZEdsdmJpQjNiM0pyWm14dmQxUnZiMnhTZFc1U1pYQnZjblJVYjFSaGMydFZjR1JoZEdVb1pTeDBMRzRwZTNKbGRIVnlibnRqWVd4c1NXUTZaUzVtY205dExtTmhiR3hKWkN4cmFXNWtPbUIwWVhOckxYVndaR0YwWldBc2JXVnpjMkZuWlRwMGVYQmxiMllnWlM1MWNHUmhkR1U5UFdCemRISnBibWRnUDJVdWRYQmtZWFJsT2twVFQwNHVjM1J5YVc1bmFXWjVLR1V1ZFhCa1lYUmxLU3gxY0dSaGRHVkZjRzlqYURwMExIVndaR0YwWlVsdVpHVjRPbTU5ZldaMWJtTjBhVzl1SUdselVuVnVkR2x0WlZOMVltRm5aVzUwVW1WemRXeDBLR1VwZTJsbUtIUjVjR1Z2WmlCbElUMWdiMkpxWldOMFlIeDhJV1VwY21WMGRYSnVJVEU3YkdWMElIUTlVbVZtYkdWamRDNW5aWFFvWlN4Z2IzSnBaMmx1WUNrN2NtVjBkWEp1SUZKbFpteGxZM1F1WjJWMEtHVXNZR3RwYm1SZ0tUMDlQV0J6ZFdKaFoyVnVkQzF5WlhOMWJIUmdKaVlvZEQwOVBXQmphR2xzWkdCOGZIUTlQVDFnWkdsemNHRjBZMmhnS1gxbWRXNWpkR2x2YmlCbGNuSnZjazFsYzNOaFoyVW9aU2w3YVdZb2RIbHdaVzltSUdVOVBXQnZZbXBsWTNSZ0ppWmxKaVpnYldWemMyRm5aV0JwYmlCbEtYdHNaWFFnZEQxbExtMWxjM05oWjJVN2FXWW9kSGx3Wlc5bUlIUTlQV0J6ZEhKcGJtZGdLWEpsZEhWeWJpQjBmWEpsZEhWeWJpQlRkSEpwYm1jb1pTbDlablZ1WTNScGIyNGdjR0Z5YzJWS2MyOXVWbUZzZFdWUGNsVnVaR1ZtYVc1bFpDaDBLWHQwY25sN2NtVjBkWEp1SUhCaGNuTmxTbk52YmxaaGJIVmxLSFFwZldOaGRHTm9lM0psZEhWeWJuMTlablZ1WTNScGIyNGdkMjl5YTJac2IzZFViMjlzVW5WdVVtVnhkV1Z6ZEZSdlNXNXdkWFJTWlhGMVpYTjBVR0Y1Ykc5aFpDaGxLWHRzWlhSN1puSnZiVHAwTEhKbGNHeDVWRzg2Yml4eVpYRjFaWE4wT25Jc2NtVnhkV1Z6ZEVOdmIzSmthVzVoZEdWek9tbDlQV1U3Y21WMGRYSnVlMk5oYkd4SlpEcDBMbU5oYkd4SlpDeGphR2xzWkVOdmJuUnBiblZoZEdsdmJsUnZhMlZ1T200c1kyaHBiR1JUWlhOemFXOXVTV1E2ZEM1eWRXNUpaQ3hsZG1WdWREcDdjbVZ4ZFdWemRITTZjaTVyYVc1a1BUMDlZR2x1Y0hWMExXSmhkR05vWUQ5eUxuSmxjWFZsYzNSek9sdHViM0p0WVd4cGVtVkpibkIxZEZKbGNYVmxjM1FvY2l4MExHNHBYU3h6WlhGMVpXNWpaVHBwUHk1elpYRjFaVzVqWlQ4L2RDNXpaWEYxWlc1alpTeHpkR1Z3U1c1a1pYZzZhVDh1YzNSbGNFbHVaR1Y0UHo5MExuTjBaWEJKYm1SbGVDeDBkWEp1U1dRNmFUOHVkSFZ5Ymtsa1B6OTBMblIxY201SlpIMHNhMmx1WkRwZ2MzVmlZV2RsYm5RdGFXNXdkWFF0Y21WeGRXVnpkR0FzYzNWaVlXZGxiblJPWVcxbE9uUXVkRzl2YkU1aGJXVjlmV1oxYm1OMGFXOXVJSGR2Y210bWJHOTNWRzl2YkZKMWJsSmxjWFZsYzNSVWIxUmhjMnRKYm5CMWRGSmxjWFZsYzNRb1pTbDdiR1YwZTJaeWIyMDZkQ3h5WlhCc2VWUnZPbTRzY21WeGRXVnpkRHB5TEhKbGNYVmxjM1JEYjI5eVpHbHVZWFJsY3pwcGZUMWxMR0U5ZTJ0cGJtUTZZSFJoYzJzdGFXNXdkWFF0Y21WeGRXVnpkR0FzY21Wd2JIbFVienB1TEhObGNYVmxibU5sT21rL0xuTmxjWFZsYm1ObFB6OTBMbk5sY1hWbGJtTmxMSE4wWlhCSmJtUmxlRHBwUHk1emRHVndTVzVrWlhnL1AzUXVjM1JsY0VsdVpHVjRMSFIxY201SlpEcHBQeTUwZFhKdVNXUS9QM1F1ZEhWeWJrbGtmVHR5WlhSMWNtNGdjaTVyYVc1a1BUMDlZR2x1Y0hWMExXSmhkR05vWUQ5N0xpNHVZU3h5WlhGMVpYTjBjenB5TG5KbGNYVmxjM1J6ZlRwN0xpNHVZU3h5WlhGMVpYTjBPbTV2Y20xaGJHbDZaVWx1Y0hWMFVtVnhkV1Z6ZENoeUxIUXNiaWw5ZldaMWJtTjBhVzl1SUc1dmNtMWhiR2w2WlVsdWNIVjBVbVZ4ZFdWemRDaGxMSFFzYmlsN2MzZHBkR05vS0dVdWEybHVaQ2w3WTJGelpXQmhaMlZ1ZEMxcGJuWnZhMlZnT21OaGMyVmdZV2RsYm5RdGMyVjBkR3hsWkdBNmRHaHliM2NnVkhsd1pVVnljbTl5S0dCQklIZHZjbXRtYkc5M0lHRm5aVzUwSUhKbGNYVmxjM1FnWTJGdWJtOTBJR0psSUc1dmNtMWhiR2w2WldRZ1lYTWdhSFZ0WVc0Z2FXNXdkWFF1WUNrN1kyRnpaV0JoZFhSb2IzSnBlbUYwYVc5dUxYSmxjWFZsYzNSZ09uUm9jbTkzSUZSNWNHVkZjbkp2Y2loZ1FTQjNiM0pyWm14dmR5QmhkWFJvYjNKcGVtRjBhVzl1SUdWMlpXNTBJR05oYm01dmRDQmlaU0J1YjNKdFlXeHBlbVZrSUdGeklHaDFiV0Z1SUdsdWNIVjBMbUFwTzJOaGMyVmdZWE5yWURweVpYUjFjbTRnYm05eWJXRnNhWHBsUVhOclVtVnhkV1Z6ZENobExuSmxjWFZsYzNRc2RDeHVLVHRrWldaaGRXeDBPbkpsZEhWeWJpQmxmWDFtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZCYzJ0U1pYRjFaWE4wS0dVc2RDeHVLWHRwWmloMGVYQmxiMllnWlM1d2NtOXRjSFFoUFdCemRISnBibWRnZkh4bExuQnliMjF3ZEM1c1pXNW5kR2c5UFQwd0tYUm9jbTkzSUZSNWNHVkZjbkp2Y2loY0lrRWdkMjl5YTJac2IzY2dkRzl2YkNCeWRXNGdjbVZ4ZFdWemRDQnVaV1ZrY3lCaElHNXZiaTFsYlhCMGVTQmdjSEp2YlhCMFlDNWNJaWs3YkdWMElISTllMkZqZEdsdmJqcDdZMkZzYkVsa09uUXVZMkZzYkVsa0xHbHVjSFYwT25RdWFXNXdkWFFzYTJsdVpEcGdkRzl2YkMxallXeHNZQ3gwYjI5c1RtRnRaVHAwTG5SdmIyeE9ZVzFsZlN4cmFXNWtPbUJ4ZFdWemRHbHZibUFzY0hKdmJYQjBPbVV1Y0hKdmJYQjBMSEpsY1hWbGMzUkpaRHB1ZlR0eVpYUjFjbTRnWlM1aGJHeHZkMFp5WldWbWIzSnRJVDA5ZG05cFpDQXdKaVlvY2k1aGJHeHZkMFp5WldWbWIzSnRQV1V1WVd4c2IzZEdjbVZsWm05eWJTa3NaUzVrYVhOd2JHRjVJVDA5ZG05cFpDQXdKaVlvY2k1a2FYTndiR0Y1UFdVdVpHbHpjR3hoZVNrc1pTNXZjSFJwYjI1eklUMDlkbTlwWkNBd0ppWW9jaTV2Y0hScGIyNXpQVnN1TGk1bExtOXdkR2x2Ym5OZEtTeHlmV1Y0Y0c5eWRIdDNiM0pyWm14dmQxUnZiMnhTZFc1UGRYUmpiMjFsVkc5VGRXSmhaMlZ1ZEZKbGMzVnNkQ3gzYjNKclpteHZkMVJ2YjJ4U2RXNVBkWFJqYjIxbFZHOVVZWE5yUTI5dGJXRnVaQ3gzYjNKclpteHZkMVJ2YjJ4U2RXNVBkWFJqYjIxbFZHOVViMjlzVW1WemRXeDBMSGR2Y210bWJHOTNWRzl2YkZKMWJsSmxjRzl5ZEZSdlZHRnphMVZ3WkdGMFpTeDNiM0pyWm14dmQxUnZiMnhTZFc1U1pYRjFaWE4wVkc5SmJuQjFkRkpsY1hWbGMzUlFZWGxzYjJGa0xIZHZjbXRtYkc5M1ZHOXZiRkoxYmxKbGNYVmxjM1JVYjFSaGMydEpibkIxZEZKbGNYVmxjM1I5T3lJc0ltbHRjRzl5ZEh0cWMyOXVWbUZzZFdWelJYRjFZV3g5Wm5KdmJWd2lJM05vWVhKbFpDOXFjMjl1TG1welhDSTdhVzF3YjNKMGUybHpWR1Z5YldsdVlXeFVZWE5yVTNSaGRIVnpMSEpsWVdSVVlYTnJTVzV3ZFhSU1pYRjFaWE4wU1dSOVpuSnZiVndpSTNSaGMydHpMM1I1Y0dWekxtcHpYQ0k3Wm5WdVkzUnBiMjRnZEdWeWJXbHVZV3hXYVdWM0tHVXNkQ3h1S1h0c1pYUWdjajFnZFhOaFoyVmdhVzRnZEQ5MExuVnpZV2RsT25admFXUWdNQ3hwUFh0bGVHVmpkWFJ2Y2pwbExtVjRaV04xZEc5eUxHMWxkR0ZrWVhSaE9tVXViV1YwWVdSaGRHRXNkR0Z6YTBsa09tVXVkR0Z6YTBsa2ZUdHpkMmwwWTJnb2NpRTlQWFp2YVdRZ01DWW1LR2t1ZFhOaFoyVTljaWtzYmk1emRHRjBkWE1wZTJOaGMyVmdZMjl0Y0d4bGRHVmtZRHB5WlhSMWNtNTdMaTR1YVN4c1lYTjBUM1YwY0hWME9tNHViR0Z6ZEU5MWRIQjFkQ3h6ZEdGMGRYTTZZR052YlhCc1pYUmxaR0I5TzJOaGMyVmdabUZwYkdWa1lEcHlaWFIxY201N0xpNHVhU3hzWVhOMFQzVjBjSFYwT200dWJHRnpkRTkxZEhCMWRDeHpkR0YwZFhNNllHWmhhV3hsWkdCOU8yTmhjMlZnWTJGdVkyVnNiR1ZrWURweVpYUjFjbTU3TGk0dWFTeHpkR0YwZFhNNllHTmhibU5sYkd4bFpHQjlmWDFtZFc1amRHbHZiaUJoY0hCc2VWUmhjMnRVY21GdWMybDBhVzl1S0hJc2FTbDdhV1lvYVM1cmFXNWtQVDA5WUdKcGJtUmdLWHRzWlhRZ2REMXlMbVY0WldOMWRHOXlQeTVpYVc1a2FXNW5PM0psZEhWeWJpQjBJVDA5ZG05cFpDQXdKaVowTG10cGJtUTlQVDFwTG1WNFpXTjFkRzl5TG10cGJtUW1KbXB6YjI1V1lXeDFaWE5GY1hWaGJDaDBMbVJoZEdFc2FTNWxlR1ZqZFhSdmNpNWtZWFJoS1Q5N1lXTjBhVzl1T21CdWIyOXdZQ3gyYVdWM09uSjlPblE5UFQxMmIybGtJREEvZTJGamRHbHZianBnWVdOalpYQjBaV1JnTEhacFpYYzZleTR1TG5Jc1pYaGxZM1YwYjNJNmV5NHVMbkl1WlhobFkzVjBiM0lzWW1sdVpHbHVaenBwTG1WNFpXTjFkRzl5ZlgxOU9udGhZM1JwYjI0NllISmxhbVZqZEdWa1lDeHlaV0Z6YjI0NllGUmhjMnNnWENJa2UzSXVkR0Z6YTBsa2ZWd2lJR0ZzY21WaFpIa2dhR0Z6SUdGdUlHVjRaV04xZEc5eUlHSnBibVJwYm1jdVlDeDJhV1YzT25KOWZXbG1LR2x6VkdWeWJXbHVZV3hVWVhOclUzUmhkSFZ6S0hJdWMzUmhkSFZ6S1NseVpYUjFjbTRnYVM1cmFXNWtQVDA5WUdOaGJtTmxiR0FtSm5JdWMzUmhkSFZ6UFQwOVlHTmhibU5sYkd4bFpHQS9lMkZqZEdsdmJqcGdibTl2Y0dBc2RtbGxkenB5ZlRwN1lXTjBhVzl1T21CeVpXcGxZM1JsWkdBc2NtVmhjMjl1T21CVVlYTnJJRndpSkh0eUxuUmhjMnRKWkgxY0lpQnBjeUJoYkhKbFlXUjVJQ1I3Y2k1emRHRjBkWE45T3lCY0lpUjdhUzVyYVc1a2ZWd2lJR05oYm01dmRDQmphR0Z1WjJVZ1lTQjBaWEp0YVc1aGJDQjBZWE5yTG1Bc2RtbGxkenB5ZlR0emQybDBZMmdvYVM1cmFXNWtLWHRqWVhObFlHTnZiWEJzWlhSbFlEcHlaWFIxY201N1lXTjBhVzl1T21CaFkyTmxjSFJsWkdBc2RtbGxkenAwWlhKdGFXNWhiRlpwWlhjb2NpeHBMSHRzWVhOMFQzVjBjSFYwT250a1lYUmhPbWt1WkdGMFlTeDBlWEJsT21CeVpYTjFiSFJnZlN4emRHRjBkWE02WUdOdmJYQnNaWFJsWkdCOUtYMDdZMkZ6WldCbVlXbHNZRHBqWVhObFlISmxhbVZqZEMxa2FYTndZWFJqYUdBNmNtVjBkWEp1ZTJGamRHbHZianBnWVdOalpYQjBaV1JnTEhacFpYYzZkR1Z5YldsdVlXeFdhV1YzS0hJc2FTeDdiR0Z6ZEU5MWRIQjFkRHA3WkdGMFlUcHBMbVJoZEdFc2RIbHdaVHBnWlhKeWIzSmdmU3h6ZEdGMGRYTTZZR1poYVd4bFpHQjlLWDA3WTJGelpXQmpZVzVqWld4Z09uSmxkSFZ5Ym50aFkzUnBiMjQ2WUdGalkyVndkR1ZrWUN4MmFXVjNPblJsY20xcGJtRnNWbWxsZHloeUxHa3NlM04wWVhSMWN6cGdZMkZ1WTJWc2JHVmtZSDBwZlR0allYTmxZSEpsY1hWcGNtVXRhVzV3ZFhSZ09uSmxkSFZ5YmlCcGMxWmhiR2xrU1c1d2RYUlNaWEYxWlhOMFFtRjBZMmdvYVM1cGJuQjFkRkpsY1hWbGMzUnpLVDk3WVdOMGFXOXVPbUJoWTJObGNIUmxaR0FzZG1sbGR6cDdhVzV3ZFhSU1pYRjFaWE4wY3pwcExtbHVjSFYwVW1WeGRXVnpkSE1zWlhobFkzVjBiM0k2Y2k1bGVHVmpkWFJ2Y2l4dFpYUmhaR0YwWVRweUxtMWxkR0ZrWVhSaExITjBZWFIxY3pwZ2FXNXdkWFJmY21WeGRXbHlaV1JnTEhSaGMydEpaRHB5TG5SaGMydEpaSDE5T250aFkzUnBiMjQ2WUhKbGFtVmpkR1ZrWUN4eVpXRnpiMjQ2WUZSaGMyc2dYQ0lrZTNJdWRHRnphMGxrZlZ3aUlISmxZMlZwZG1Wa0lHRnVJR2x1ZG1Gc2FXUWdhVzV3ZFhRZ2NtVnhkV1Z6ZENCaVlYUmphQzVnTEhacFpYYzZjbjA3WTJGelpXQnlaV0ZrZVdBNmNtVjBkWEp1ZTJGamRHbHZianBnWVdOalpYQjBaV1JnTEhacFpYYzZjbjA3WTJGelpXQmhibk4zWlhKbFpHQTZlMmxtS0hJdWMzUmhkSFZ6SVQwOVlHbHVjSFYwWDNKbGNYVnBjbVZrWUNseVpYUjFjbTU3WVdOMGFXOXVPbUJ1YjI5d1lDeDJhV1YzT25KOU8yeGxkQ0JsUFc1bGR5QlRaWFFvYVM1eVpYRjFaWE4wU1dSektTeDBQWEl1YVc1d2RYUlNaWEYxWlhOMGN5NW1hV3gwWlhJb2REMCtlMnhsZENCeVBYSmxZV1JVWVhOclNXNXdkWFJTWlhGMVpYTjBTV1FvZENrN2NtVjBkWEp1SUhJOVBUMTJiMmxrSURCOGZDRmxMbWhoY3loeUtYMHBPM0psZEhWeWJpQjBMbXhsYm1kMGFEMDlQWEl1YVc1d2RYUlNaWEYxWlhOMGN5NXNaVzVuZEdnL2UyRmpkR2x2YmpwZ2JtOXZjR0FzZG1sbGR6cHlmVHAwTG14bGJtZDBhRDR3UDN0aFkzUnBiMjQ2WUdGalkyVndkR1ZrWUN4MmFXVjNPbnN1TGk1eUxHbHVjSFYwVW1WeGRXVnpkSE02ZEgxOU9udGhZM1JwYjI0NllHRmpZMlZ3ZEdWa1lDeDJhV1YzT250bGVHVmpkWFJ2Y2pweUxtVjRaV04xZEc5eUxHMWxkR0ZrWVhSaE9uSXViV1YwWVdSaGRHRXNjM1JoZEhWek9tQjNiM0pyYVc1bllDeDBZWE5yU1dRNmNpNTBZWE5yU1dSOWZYMTlmV1oxYm1OMGFXOXVJR2x6Vm1Gc2FXUkpibkIxZEZKbGNYVmxjM1JDWVhSamFDaGxLWHRwWmlobExteGxibWQwYUQwOVBUQXBjbVYwZFhKdUlURTdiR1YwSUhROVpTNXRZWEFvY21WaFpGUmhjMnRKYm5CMWRGSmxjWFZsYzNSSlpDazdjbVYwZFhKdUlIUXVaWFpsY25rb1pUMCtaU0U5UFhadmFXUWdNQ1ltWlM1c1pXNW5kR2crTUNrbUptNWxkeUJUWlhRb2RDa3VjMmw2WlQwOVBYUXViR1Z1WjNSb2ZXVjRjRzl5ZEh0aGNIQnNlVlJoYzJ0VWNtRnVjMmwwYVc5dWZUc2lMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbmR2Y210bWJHOTNjMXdpT250Y0ltUnBjM1F2YzNKakwyVjRaV04xZEdsdmJpOTBZWE5yY3k5amFHbHNaQzkzYjNKclpteHZkeTVxYzF3aU9udGNJblJoYzJ0U2RXNVhiM0pyWm14dmQxd2lPbnRjSW5kdmNtdG1iRzkzU1dSY0lqcGNJbmR2Y210bWJHOTNMeTlsZG1VdkwzUmhjMnRTZFc1WGIzSnJabXh2ZDF3aWZYMTlmU292TzF4dWFXMXdiM0owZTJOeVpXRjBaVWh2YjJ0OVpuSnZiVndpSTJOdmJYQnBiR1ZrTDBCM2IzSnJabXh2ZHk5amIzSmxMMmx1WkdWNExtcHpYQ0k3YVcxd2IzSjBlMk5zWVdsdFNHOXZhMDkzYm1WeWMyaHBjQ3hrYVhOd2IzTmxTRzl2YXl4cGMwaHZiMnREYjI1bWJHbGpkRVZ5Y205eWZXWnliMjFjSWlObGVHVmpkWFJwYjI0dmFHOXZheTF2ZDI1bGNuTm9hWEF1YW5OY0lqdHBiWEJ2Y25SN2FYTlNaV0ZrZVZSaGMydFRkR0YwZFhNc2FYTlVaWEp0YVc1aGJGUmhjMnRUZEdGMGRYTXNjbVZoWkZSaGMydEpibkIxZEZKbGNYVmxjM1JKWkgxbWNtOXRYQ0lqZEdGemEzTXZkSGx3WlhNdWFuTmNJanRwYlhCdmNuUjdZWEJ3Wlc1a1ZHRnphMVpwWlhkVGRHVndMR1JsYkdsMlpYSlVZWE5yU1c1d2RYUlNaWE53YjI1elpYTlRkR1Z3TEhkaGEyVlVZWE5yUVdkbGJuUlNaWEYxWlhOMFVHRnlaVzUwVTNSbGNDeDNZV3RsVkdGemEwRjFkR2h2Y21sNllYUnBiMjVRWVhKbGJuUlRkR1Z3TEhkaGEyVlVZWE5yVUdGeVpXNTBVM1JsY0N4M1lXdGxWR0Z6YTFWd1pHRjBaVkJoY21WdWRGTjBaWEFzZDJGclpWZHZjbXRtYkc5M1ZHRnphMGx1Y0hWMFVtVnhkV1Z6ZEZCaGNtVnVkRk4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MFlYTnJjeTlqYUdsc1pDOXpkR1Z3Y3k1cWMxd2lPMmx0Y0c5eWRIdGpjbVZoZEdWWGIzSnJabXh2ZDBKdlpIbFNaV1lzWlhobFkzVjBaVmR2Y210bWJHOTNRbTlrZVgxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNSdmIyeHpMM2R2Y210bWJHOTNMMkp2WkhrdWFuTmNJanRwYlhCdmNuUjdaR1Z5YVhabFYyOXlhMlpzYjNkVWIyOXNVblZ1VDNkdVpYSjlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOTBiMjlzY3k5M2IzSnJabXh2ZHk5dFpYTnpZV2RsY3k1cWMxd2lPMmx0Y0c5eWRIdGpjbVZoZEdWRGFHRnVibVZzVW1WaFpHVnlMSEpoWTJWRGFHRnVibVZzVW1WaFpITjlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOTBiMjlzY3k5M2IzSnJabXh2ZHk5dmQyNWxjaTFqYUdGdWJtVnNjeTVxYzF3aU8ybHRjRzl5ZEh0dmNHVnVWMjl5YTJac2IzZFViMjlzVW5WdVQzZHVaWEpEYUdGdWJtVnNjMzFtY205dFhDSWpaWGhsWTNWMGFXOXVMM1J2YjJ4ekwzZHZjbXRtYkc5M0wyOTNibVZ5TG1welhDSTdhVzF3YjNKMGUzZHZjbXRtYkc5M1ZHOXZiRkoxYms5MWRHTnZiV1ZVYjFSaGMydERiMjF0WVc1a0xIZHZjbXRtYkc5M1ZHOXZiRkoxYmxKbGNHOXlkRlJ2VkdGemExVndaR0YwWlN4M2IzSnJabXh2ZDFSdmIyeFNkVzVTWlhGMVpYTjBWRzlVWVhOclNXNXdkWFJTWlhGMVpYTjBmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkRzl2YkhNdmQyOXlhMlpzYjNjdmIzZHVaWEl0YVc1aWIzZ3Vhbk5jSWp0cGJYQnZjblI3WVhCd2JIbFVZWE5yVkhKaGJuTnBkR2x2Ym4xbWNtOXRYQ0lqZEdGemEzTXZkSEpoYm5OcGRHbHZibk11YW5OY0lqdGhjM2x1WXlCbWRXNWpkR2x2YmlCMFlYTnJVblZ1VjI5eWEyWnNiM2NvWVNsN2JHVjBJRzg5WTNKbFlYUmxTRzl2YXloN2RHOXJaVzQ2WVM1MFlYTnJTVzVpYjNoVWIydGxibjBwTEdNOWIzQmxibGR2Y210bWJHOTNWRzl2YkZKMWJrOTNibVZ5UTJoaGJtNWxiSE1vWVM1MFlYTnJTVzVpYjNoVWIydGxiaWtzYkQxYkxpNHVZeTV5WldGa1pYSnpMR055WldGMFpVTm9ZVzV1Wld4U1pXRmtaWElvWUdOdmJXMWhibVJ6WUN4dktWMHNkVDBoTVN4a1BXRXVhVzVwZEdsaGJGWnBaWGNzWmowaE1TeHdQU0V4TEcwc2FEMWJYU3huUFRBc1h6MTdiM2R1WlhKU1pYRjFaWE4wY3pwYlhYMHNkajF1WlhjZ1RXRndMSGs5Ym1WM0lFRmliM0owUTI5dWRISnZiR3hsY2l4aUxIZzlZUzUzYjNKclpteHZkejA5UFhadmFXUWdNRHQwY25sN2RISjVlMkYzWVdsMElHTnNZV2x0U0c5dmEwOTNibVZ5YzJocGNDaHZLU3gxUFNFd2ZXTmhkR05vS0dVcGUybG1LR2x6U0c5dmEwTnZibVpzYVdOMFJYSnliM0lvWlNrcGNtVjBkWEp1TzNSb2NtOTNJR1Y5Wm05eUtHRjNZV2wwSUdGd2NHVnVaRlJoYzJ0V2FXVjNVM1JsY0NoN1lXTjBhWFpwZEhsUFluTmxjblpsY2pwaExtRmpkR2wyYVhSNVQySnpaWEoyWlhJc2RtbGxkenBrZlNrN0lXbHpSbWx1YVhOb1pXUW9LVHNwZTJ4bGRDQmxQV0YzWVdsMElISmhZMlZEYUdGdWJtVnNVbVZoWkhNb1lqMDlQWFp2YVdRZ01EOXNPbHN1TGk1c0xHSmRLVHRwWmlobExtTm9ZVzV1Wld3OVBUMWdZbTlrZVdBcGUybG1LSGc5SVRBc1lqMTJiMmxrSURBc1pTNXVaWGgwTG1SdmJtVXBZMjl1ZEdsdWRXVTdZWGRoYVhRZ1lYQndiSGxRWVhsc2IyRmtLSHRqYjIxdFlXNWtPbmR2Y210bWJHOTNWRzl2YkZKMWJrOTFkR052YldWVWIxUmhjMnREYjIxdFlXNWtLSHRtY205dE9tTnlaV0YwWlZkdmNtdG1iRzkzUW05a2VWSmxaaWg3TGk0dVlTNTNiM0pyWm14dmR5eGxlR1ZqZFhScGIyNDZZR0poWTJ0bmNtOTFibVJnZlNrc2NtVnpkV3gwT21VdWJtVjRkQzUyWVd4MVpYMHBMR3RwYm1RNllIUmhjMnN0WTI5dGJXRnVaR0I5S1N4a0xuTjBZWFIxY3owOVBXQmpZVzVqWld4c1pXUmdKaVptSmlZaGNDWW1ZWGRoYVhRZ2QyRnJaVlJoYzJ0UVlYSmxiblJUZEdWd0tIdDBiMnRsYmpwaExuQmhjbVZ1ZEVOdmJuUnBiblZoZEdsdmJsUnZhMlZ1TEhacFpYYzZaSDBwTzJOdmJuUnBiblZsZldsbUtHVXVibVY0ZEM1a2IyNWxLWEpsZEhWeWJqdHBaaWhsTG1Ob1lXNXVaV3c5UFQxZ2NtVndiM0owWUNsN1lYZGhhWFFnWVhCd2JIbFFZWGxzYjJGa0tIZHZjbXRtYkc5M1ZHOXZiRkoxYmxKbGNHOXlkRlJ2VkdGemExVndaR0YwWlNobExtNWxlSFF1ZG1Gc2RXVXNaQzUwWVhOclNXUXNaeXNyS1NrN1kyOXVkR2x1ZFdWOWFXWW9aUzVqYUdGdWJtVnNQVDA5WUc5MWRHTnZiV1ZnS1h0aGQyRnBkQ0JoY0hCc2VWQmhlV3h2WVdRb2UyTnZiVzFoYm1RNmQyOXlhMlpzYjNkVWIyOXNVblZ1VDNWMFkyOXRaVlJ2VkdGemEwTnZiVzFoYm1Rb1pTNXVaWGgwTG5aaGJIVmxLU3hyYVc1a09tQjBZWE5yTFdOdmJXMWhibVJnZlNrN1kyOXVkR2x1ZFdWOWFXWW9aUzVqYUdGdWJtVnNQVDA5WUhKbGNYVmxjM1JnS1h0c1pYUWdkRDFsTG01bGVIUXVkbUZzZFdVc2JqMTBMbkpsY1hWbGMzUXVhMmx1WkR0cFppaHVQVDA5WUdGblpXNTBMV2x1ZG05clpXQjhmRzQ5UFQxZ1lXZGxiblF0YzJWMGRHeGxaR0I4Zkc0OVBUMWdZWFYwYUc5eWFYcGhkR2x2YmkxeVpYRjFaWE4wWUNsN1lYZGhhWFFnYUdGdVpHeGxUM2R1WlhKU1pYRjFaWE4wS0hRcE8yTnZiblJwYm5WbGZYUXVjbVZ4ZFdWemRFTnZiM0prYVc1aGRHVnpQVDA5ZG05cFpDQXdKaVoyTG5ObGRDaDBMbkpsY0d4NVZHOHNlM0oxYmtsa09uUXVabkp2YlM1eWRXNUpaSDBwTEdGM1lXbDBJR0Z3Y0d4NVVHRjViRzloWkNoM2IzSnJabXh2ZDFSdmIyeFNkVzVTWlhGMVpYTjBWRzlVWVhOclNXNXdkWFJTWlhGMVpYTjBLSFFwS1R0amIyNTBhVzUxWlgxaGQyRnBkQ0JoY0hCc2VWQmhlV3h2WVdRb1pTNXVaWGgwTG5aaGJIVmxLWDE5Wm1sdVlXeHNlWHQxSmlZb1lYZGhhWFFnWXk1a2FYTndiM05sS0Nrc1lYZGhhWFFnWkdsemNHOXpaVWh2YjJzb2J5a3BmV1oxYm1OMGFXOXVJR2x6Um1sdWFYTm9aV1FvS1h0eVpYUjFjbTRnYVhOVVpYSnRhVzVoYkZSaGMydFRkR0YwZFhNb1pDNXpkR0YwZFhNcEppWm1KaVo0ZldGemVXNWpJR1oxYm1OMGFXOXVJR2hoYm1Sc1pWVndaR0YwWlNo",
	"bEtYdG1KaVloYVhOVVpYSnRhVzVoYkZSaGMydFRkR0YwZFhNb1pDNXpkR0YwZFhNcFAyRjNZV2wwSUhkaGEyVlVZWE5yVlhCa1lYUmxVR0Z5Wlc1MFUzUmxjQ2g3ZEc5clpXNDZZUzV3WVhKbGJuUkRiMjUwYVc1MVlYUnBiMjVVYjJ0bGJpeDFjR1JoZEdVNlpTeDJhV1YzT21SOUtUcG9MbkIxYzJnb1pTbDlZWE41Ym1NZ1puVnVZM1JwYjI0Z1lYQndiSGxRWVhsc2IyRmtLR1VwZTJ4bGRDQjBQV1V1YTJsdVpEMDlQV0IwWVhOckxXTnZiVzFoYm1SZ0ppWmxMbU52YlcxaGJtUXVhMmx1WkQwOVBXQnlaV0ZrZVdBc2JqMWxMbXRwYm1ROVBUMWdkR0Z6YXkxamIyMXRZVzVrWUNZbVpTNWpiMjF0WVc1a0xtdHBibVE5UFQxZ2NtVnFaV04wTFdScGMzQmhkR05vWUR0cFppZ29kSHg4YmlrbUppaG1QU0V3S1N4dUppWW9jRDBoTUNrc0tIUjhmRzRwSmlZb2JueDhhWE5VWlhKdGFXNWhiRlJoYzJ0VGRHRjBkWE1vWkM1emRHRjBkWE1wUDNnOUlUQTZZUzUzYjNKclpteHZkeUU5UFhadmFXUWdNQ1ltWWowOVBYWnZhV1FnTUNZbUlYZ21KaWhpUFdOeVpXRjBaVU5vWVc1dVpXeFNaV0ZrWlhJb1lHSnZaSGxnTEdGM1lXbDBRbTlrZVZKbGMzVnNkQ2hsZUdWamRYUmxWMjl5YTJac2IzZENiMlI1S0hzdUxpNWhMbmR2Y210bWJHOTNMR1Y0WldOMWRHbHZianBnWW1GamEyZHliM1Z1WkdBc2IzZHVaWEk2WkdWeWFYWmxWMjl5YTJac2IzZFViMjlzVW5WdVQzZHVaWElvWVM1MFlYTnJTVzVpYjNoVWIydGxiaWw5TEhrdWMybG5ibUZzS1NrcEtTeGhkMkZwZENCbWJIVnphRkJsYm1ScGJtZFVjbUZtWm1saktDa3BMR1V1YTJsdVpEMDlQV0IwWVhOckxXbHVjSFYwTFhKbGNYVmxjM1JnSmlZb2JUMWxLU3hsTG10cGJtUTlQVDFnZEdGemF5MTFjR1JoZEdWZ0tYdGhkMkZwZENCb1lXNWtiR1ZWY0dSaGRHVW9aU2s3Y21WMGRYSnVmV3hsZENCeU8ybG1LR1V1YTJsdVpEMDlQV0JwYm5CMWRDMXlaWE53YjI1elpXQXBjajFrTG5OMFlYUjFjejA5UFdCcGJuQjFkRjl5WlhGMWFYSmxaR0EvWVhkaGFYUWdjbVZ6YjJ4MlpVRnVjM2RsY21Wa1EyOXRiV0Z1WkNoa0xHVXNkaTVuWlhRb1pTNWphR2xzWkVOdmJuUnBiblZoZEdsdmJsUnZhMlZ1S1NrNmRtOXBaQ0F3TzJWc2MyVWdhV1lvWlM1cmFXNWtQVDA5WUhSaGMyc3RhVzV3ZFhRdGNtVnhkV1Z6ZEdBcGNqMTdhVzV3ZFhSU1pYRjFaWE4wY3pwbExuSmxjWFZsYzNSelB6OWJaUzV5WlhGMVpYTjBYU3hyYVc1a09tQnlaWEYxYVhKbExXbHVjSFYwWUgwN1pXeHpaU0JwWmlobExtdHBibVE5UFQxZ2RHRnpheTFqYjIxdFlXNWtZQ2x5UFdVdVkyOXRiV0Z1WkR0bGJITmxJSEpsZEhWeWJqdHBaaWh5UFQwOWRtOXBaQ0F3S1hKbGRIVnlianRwWmloMEppWnBjMVJsY20xcGJtRnNWR0Z6YTFOMFlYUjFjeWhrTG5OMFlYUjFjeWtwZTJGM1lXbDBJR1pzZFhOb1ZYQmtZWFJsY3lnaE1Da3NZWGRoYVhRZ2QyRnJaVlJoYzJ0UVlYSmxiblJUZEdWd0tIdDBiMnRsYmpwaExuQmhjbVZ1ZEVOdmJuUnBiblZoZEdsdmJsUnZhMlZ1TEhacFpYYzZaSDBwTzNKbGRIVnlibjFzWlhRZ2J6MWtMSE05WVhCd2JIbFVZWE5yVkhKaGJuTnBkR2x2Ymloa0xISXBPM011WVdOMGFXOXVQVDA5WUdGalkyVndkR1ZrWUNZbUtHUTljeTUyYVdWM0xHRjNZV2wwSUdGd2NHVnVaRlJoYzJ0V2FXVjNVM1JsY0NoN1lXTjBhWFpwZEhsUFluTmxjblpsY2pwaExtRmpkR2wyYVhSNVQySnpaWEoyWlhJc2RtbGxkenBrZlNrc2NpNXJhVzVrUFQwOVlHTmhibU5sYkdBbUppaDVMbUZpYjNKMEtFVnljbTl5S0dCVVlYTnJJQ1I3WkM1MFlYTnJTV1I5SUhkaGN5QmpZVzVqWld4c1pXUXVZQ2twTEdJOVBUMTJiMmxrSURBbUppaDRQU0V3S1Nrc2FYTlVaWEp0YVc1aGJGUmhjMnRUZEdGMGRYTW9aQzV6ZEdGMGRYTXBmSHhoZDJGcGRDQm1iSFZ6YUZWd1pHRjBaWE1vS1N4dElUMDlkbTlwWkNBd0ppWm1KaVprTG5OMFlYUjFjejA5UFdCcGJuQjFkRjl5WlhGMWFYSmxaR0EvS0dGM1lXbDBJSGRoYTJWWGIzSnJabXh2ZDFSaGMydEpibkIxZEZKbGNYVmxjM1JRWVhKbGJuUlRkR1Z3S0h0eVpYRjFaWE4wT20wc2RHRnphMGxrT21RdWRHRnphMGxrTEhSdmEyVnVPbUV1Y0dGeVpXNTBRMjl1ZEdsdWRXRjBhVzl1Vkc5clpXNTlLU3h0UFhadmFXUWdNQ2s2SVhBbUptWW1KaWh5TG10cGJtUWhQVDFnWTJGdVkyVnNZSHg4ZUNrbUppZ2hhWE5VWlhKdGFXNWhiRlJoYzJ0VGRHRjBkWE1vYnk1emRHRjBkWE1wSmlacGMxUmxjbTFwYm1Gc1ZHRnphMU4wWVhSMWN5aGtMbk4wWVhSMWN5bDhmQ0ZwYzFKbFlXUjVWR0Z6YTFOMFlYUjFjeWh2TG5OMFlYUjFjeWttSm1selVtVmhaSGxVWVhOclUzUmhkSFZ6S0dRdWMzUmhkSFZ6S1NZbWJUMDlQWFp2YVdRZ01Da21KbUYzWVdsMElIZGhhMlZVWVhOclVHRnlaVzUwVTNSbGNDaDdkRzlyWlc0NllTNXdZWEpsYm5SRGIyNTBhVzUxWVhScGIyNVViMnRsYml4MmFXVjNPbVI5S1N4a0xuTjBZWFIxY3lFOVBXQnBibkIxZEY5eVpYRjFhWEpsWkdBbUppaHRQWFp2YVdRZ01Da3BmV0Z6ZVc1aklHWjFibU4wYVc5dUlHWnNkWE5vVlhCa1lYUmxjeWhsUFNFeEtYdHBaaWdoS0NGbWZIeHBjMVJsY20xcGJtRnNWR0Z6YTFOMFlYUjFjeWhrTG5OMFlYUjFjeWttSmlGbEtTbDdabTl5S0d4bGRDQmxJRzltSUdncFlYZGhhWFFnZDJGclpWUmhjMnRWY0dSaGRHVlFZWEpsYm5SVGRHVndLSHQwYjJ0bGJqcGhMbkJoY21WdWRFTnZiblJwYm5WaGRHbHZibFJ2YTJWdUxIVndaR0YwWlRwbExIWnBaWGM2WkgwcE8yZzlXMTE5ZldGemVXNWpJR1oxYm1OMGFXOXVJR2hoYm1Sc1pVOTNibVZ5VW1WeGRXVnpkQ2hsS1h0cFppZ2hLSEI4ZkdselZHVnliV2x1WVd4VVlYTnJVM1JoZEhWektHUXVjM1JoZEhWektTa3BlMmxtS0NGbUtYdGZMbTkzYm1WeVVtVnhkV1Z6ZEhNdWNIVnphQ2hsS1R0eVpYUjFjbTU5WVhkaGFYUWdkMkZyWlZSaGMydFBkMjVsY2xKbGNYVmxjM1JRWVhKbGJuUW9aU2w5ZldGemVXNWpJR1oxYm1OMGFXOXVJR1pzZFhOb1VHVnVaR2x1WjFSeVlXWm1hV01vS1h0cFppZ2hjQ2xtYjNJb2JHVjBJR1VnYjJZZ1h5NXZkMjVsY2xKbGNYVmxjM1J6S1dGM1lXbDBJSGRoYTJWVVlYTnJUM2R1WlhKU1pYRjFaWE4wVUdGeVpXNTBLR1VwTzE4dWIzZHVaWEpTWlhGMVpYTjBjeTVzWlc1bmRHZzlNSDFoYzNsdVl5Qm1kVzVqZEdsdmJpQjNZV3RsVkdGemEwOTNibVZ5VW1WeGRXVnpkRkJoY21WdWRDaGxLWHRwWmlobExuSmxjWFZsYzNRdWEybHVaRDA5UFdCaGRYUm9iM0pwZW1GMGFXOXVMWEpsY1hWbGMzUmdLWHRoZDJGcGRDQjNZV3RsVkdGemEwRjFkR2h2Y21sNllYUnBiMjVRWVhKbGJuUlRkR1Z3S0h0eVpYRjFaWE4wT21VdWNtVnhkV1Z6ZEN4MFlYTnJTV1E2WkM1MFlYTnJTV1FzZEc5clpXNDZZUzV3WVhKbGJuUkRiMjUwYVc1MVlYUnBiMjVVYjJ0bGJuMHBPM0psZEhWeWJuMWhkMkZwZENCM1lXdGxWR0Z6YTBGblpXNTBVbVZ4ZFdWemRGQmhjbVZ1ZEZOMFpYQW9lM0psY1hWbGMzUTZaU3gwWVhOclNXUTZaQzUwWVhOclNXUXNkRzlyWlc0NllTNXdZWEpsYm5SRGIyNTBhVzUxWVhScGIyNVViMnRsYm4wcGZYMWhjM2x1WXlCbWRXNWpkR2x2YmlwaGQyRnBkRUp2WkhsU1pYTjFiSFFvWlNsN2VXbGxiR1FnWVhkaGFYUWdaWDFoYzNsdVl5Qm1kVzVqZEdsdmJpQnlaWE52YkhabFFXNXpkMlZ5WldSRGIyMXRZVzVrS0dVc2RDeHVLWHRwWmloMExuUmhjMnRKWkNFOVBXVXVkR0Z6YTBsa0tYSmxkSFZ5Ymp0c1pYUWdjajF1WlhjZ1UyVjBLR1V1YVc1d2RYUlNaWEYxWlhOMGN5NW1iR0YwVFdGd0tHVTlQbnRzWlhRZ2REMXlaV0ZrVkdGemEwbHVjSFYwVW1WeGRXVnpkRWxrS0dVcE8zSmxkSFZ5YmlCMFBUMDlkbTlwWkNBd1AxdGRPbHQwWFgwcEtTeHBQWFF1YVc1d2RYUlNaWE53YjI1elpYTXViV0Z3S0dVOVBtVXVjbVZ4ZFdWemRFbGtLUzVtYVd4MFpYSW9aVDArY2k1b1lYTW9aU2twTzJsbUtHa3ViR1Z1WjNSb0lUMDlNQ2x5WlhSMWNtNGdZWGRoYVhRZ1pHVnNhWFpsY2xSaGMydEpibkIxZEZKbGMzQnZibk5sYzFOMFpYQW9lMkZ1YzNkbGNqcDBMR0Z1YzNkbGNraHZiMnM2Yml4eVpYRjFaWE4wU1dSek9tbDlLVDA5UFdCa1pXeHBkbVZ5WldSZ1AzdHJhVzVrT21CaGJuTjNaWEpsWkdBc2NtVnhkV1Z6ZEVsa2N6cHBmVHAyYjJsa0lEQjlkR0Z6YTFKMWJsZHZjbXRtYkc5M0xuZHZjbXRtYkc5M1NXUTlZSGR2Y210bWJHOTNMeTlsZG1VdkwzUmhjMnRTZFc1WGIzSnJabXh2ZDJBN1pYaHdiM0owZTNSaGMydFNkVzVYYjNKclpteHZkMzA3WEc1MFlYTnJVblZ1VjI5eWEyWnNiM2N1ZDI5eWEyWnNiM2RKWkNBOUlGd2lkMjl5YTJac2IzY3ZMMlYyWlM4dmRHRnphMUoxYmxkdmNtdG1iRzkzWENJN1hHNW5iRzlpWVd4VWFHbHpMbDlmY0hKcGRtRjBaVjkzYjNKclpteHZkM011YzJWMEtGd2lkMjl5YTJac2IzY3ZMMlYyWlM4dmRHRnphMUoxYmxkdmNtdG1iRzkzWENJc0lIUmhjMnRTZFc1WGIzSnJabXh2ZHlrN1hHNGlMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbmR2Y210bWJHOTNjMXdpT250Y0ltUnBjM1F2YzNKakwyVjRaV04xZEdsdmJpOTBiMjlzY3k5emJHVmxjQzEzYjNKclpteHZkeTVxYzF3aU9udGNJbVY0WldOMWRHVlRiR1ZsY0ZSdmIyeGNJanA3WENKM2IzSnJabXh2ZDBsa1hDSTZYQ0ozYjNKclpteHZkeTh2WlhabFFEQXVOVEV1TVM4dlpYaGxZM1YwWlZOc1pXVndWRzl2YkZ3aWZYMTlmU292TzF4dWFXMXdiM0owZTNOc1pXVndmV1p5YjIxY0lpTmpiMjF3YVd4bFpDOUFkMjl5YTJac2IzY3ZZMjl5WlM5cGJtUmxlQzVxYzF3aU8yRnplVzVqSUdaMWJtTjBhVzl1SUdWNFpXTjFkR1ZUYkdWbGNGUnZiMndvWlNsN2NtVjBkWEp1SUdGM1lXbDBJSE5zWldWd0tFMWhkR2d1WTJWcGJDaGxMbk5sWTI5dVpITXFNV1V6S1Nrc2UzZGhhWFJsWkZObFkyOXVaSE02WlM1elpXTnZibVJ6ZlgxbGVHVmpkWFJsVTJ4bFpYQlViMjlzTG5kdmNtdG1iRzkzU1dROVlIZHZjbXRtYkc5M0x5OWxkbVZBTUM0MU1TNHhMeTlsZUdWamRYUmxVMnhsWlhCVWIyOXNZRHRsZUhCdmNuUjdaWGhsWTNWMFpWTnNaV1Z3Vkc5dmJIMDdYRzVsZUdWamRYUmxVMnhsWlhCVWIyOXNMbmR2Y210bWJHOTNTV1FnUFNCY0luZHZjbXRtYkc5M0x5OWxkbVZBTUM0MU1TNHhMeTlsZUdWamRYUmxVMnhsWlhCVWIyOXNYQ0k3WEc1bmJHOWlZV3hVYUdsekxsOWZjSEpwZG1GMFpWOTNiM0pyWm14dmQzTXVjMlYwS0Z3aWQyOXlhMlpzYjNjdkwyVjJaVUF3TGpVeExqRXZMMlY0WldOMWRHVlRiR1ZsY0ZSdmIyeGNJaXdnWlhobFkzVjBaVk5zWldWd1ZHOXZiQ2s3WEc0aUxDSnBiWEJ2Y25SN1kzSmxZWFJsU0c5dmEzMW1jbTl0WENJalkyOXRjR2xzWldRdlFIZHZjbXRtYkc5M0wyTnZjbVV2YVc1a1pYZ3Vhbk5jSWp0cGJYQnZjblI3YVhOWGIzSnJabXh2ZDFSdmIyeFNkVzVEYjI1MGNtOXNUV1Z6YzJGblpYMW1jbTl0WENJalpYaGxZM1YwYVc5dUwzUnZiMnh6TDNkdmNtdG1iRzkzTDIxbGMzTmhaMlZ6TG1welhDSTdablZ1WTNScGIyNGdiM0JsYmxkdmNtdG1iRzkzVkc5dmJGSjFia052Ym5SeWIyeEpibUp2ZUNoMEtYdHNaWFFnYmoxamNtVmhkR1ZJYjI5cktIdDBiMnRsYmpwMGZTa3NjajF1VzFONWJXSnZiQzVoYzNsdVkwbDBaWEpoZEc5eVhTZ3BMR2s5Ym1WM0lFRmliM0owUTI5dWRISnZiR3hsY2l4aExHODlZMjl1YzNWdFpVTmhibU5sYkNoeUxHVTlQbnRoUFdVc2FTNWhZbTl5ZENodVpYY2dWMjl5YTJac2IzZFViMjlzVW5WdVEyRnVZMlZzYkdWa1JYSnliM0lvWlNrcGZTazdjbVYwZFhKdUlHOHVZMkYwWTJnb0tDazlQbnQ5S1N4N1kyRnVZMlZzYkdWa09tOHNhRzl2YXpwdUxISmxZWE52Ympvb0tUMCtZU3h6YVdkdVlXdzZhUzV6YVdkdVlXeDlmV0Z6ZVc1aklHWjFibU4wYVc5dUlHTnZibk4xYldWRFlXNWpaV3dvWlN4dUtYdG1iM0lvT3pzcGUyeGxkQ0J5TzNSeWVYdHlQV0YzWVdsMElHVXVibVY0ZENncGZXTmhkR05vZTNKbGRIVnliaUJoZDJGcGRDQnVaWGNnVUhKdmJXbHpaU2dvS1QwK2UzMHBmV2xtS0hJdVpHOXVaVDA5UFNFd0tYSmxkSFZ5YmlCaGQyRnBkQ0J1WlhjZ1VISnZiV2x6WlNnb0tUMCtlMzBwTzJsbUtHbHpWMjl5YTJac2IzZFViMjlzVW5WdVEyOXVkSEp2YkUxbGMzTmhaMlVvY2k1MllXeDFaU2twZEdoeWIzY2diaWh5TG5aaGJIVmxMbkpsWVhOdmJpa3NibVYzSUZkdmNtdG1iRzkzVkc5dmJGSjFia05oYm1ObGJHeGxaRVZ5Y205eUtISXVkbUZzZFdVdWNtVmhjMjl1S1gxOWRtRnlJRmR2Y210bWJHOTNWRzl2YkZKMWJrTmhibU5sYkd4bFpFVnljbTl5UFdOc1lYTnpJR1Y0ZEdWdVpITWdSWEp5YjNKN1kyOXVjM1J5ZFdOMGIzSW9aU2w3YzNWd1pYSW9aU2tzZEdocGN5NXVZVzFsUFdCWGIzSnJabXh2ZDFSdmIyeFNkVzVEWVc1alpXeHNaV1JGY25KdmNtQjlmVHRsZUhCdmNuUjdWMjl5YTJac2IzZFViMjlzVW5WdVEyRnVZMlZzYkdWa1JYSnliM0lzYjNCbGJsZHZjbXRtYkc5M1ZHOXZiRkoxYmtOdmJuUnliMnhKYm1KdmVIMDdJaXdpTHlvcVgxOXBiblJsY201aGJGOTNiM0pyWm14dmQzTjdYQ0ozYjNKclpteHZkM05jSWpwN1hDSmthWE4wTDNOeVl5OWxlR1ZqZFhScGIyNHZkRzl2YkhNdmQyOXlhMlpzYjNjdmQyOXlhMlpzYjNjdWFuTmNJanA3WENKM2IzSnJabXh2ZDFSdmIyeFNkVzVYYjNKclpteHZkMXdpT250Y0luZHZjbXRtYkc5M1NXUmNJanBjSW5kdmNtdG1iRzkzTHk5bGRtVXZMM2R2Y210bWJHOTNWRzl2YkZKMWJsZHZjbXRtYkc5M1hDSjlmWDE5S2k4N1hHNXBiWEJ2Y25SN2MyeGxaWEI5Wm5KdmJWd2lJMk52YlhCcGJHVmtMMEIzYjNKclpteHZkeTlqYjNKbEwybHVaR1Y0TG1welhDSTdhVzF3YjNKMGUyTnNZV2x0U0c5dmEwOTNibVZ5YzJocGNDeGthWE53YjNObFNHOXZheXhwYzBodmIydERiMjVtYkdsamRFVnljbTl5ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2YUc5dmF5MXZkMjVsY25Ob2FYQXVhbk5jSWp0cGJYQnZjblI3WTNKbFlYUmxWMjl5YTJac2IzZENiMlI1VW1WbUxHVjRaV04xZEdWWGIzSnJabXh2ZDBKdlpIbDlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOTBiMjlzY3k5M2IzSnJabXh2ZHk5aWIyUjVMbXB6WENJN2FXMXdiM0owZTNKbGMzVnRaVWh2YjJ0VGRHVndmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkRzl2YkhNdmQyOXlhMlpzYjNjdmNtVnpkVzFsTFdodmIyc3RjM1JsY0M1cWMxd2lPMmx0Y0c5eWRIdHViM0p0WVd4cGVtVlRaWEpwWVd4cGVtRmliR1ZGY25KdmNuMW1jbTl0WENJalpYaGxZM1YwYVc5dUwzZHZjbXRtYkc5M0xXVnljbTl5Y3k1cWMxd2lPMmx0Y0c5eWRIdHZjR1Z1VjI5eWEyWnNiM2RVYjI5c1VuVnVRMjl1ZEhKdmJFbHVZbTk0ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2ZEc5dmJITXZkMjl5YTJac2IzY3ZjblZ1TFdOdmJuUnliMnd1YW5OY0lqdGhjM2x1WXlCbWRXNWpkR2x2YmlCM2IzSnJabXh2ZDFSdmIyeFNkVzVYYjNKclpteHZkeWhwS1h0c1pYUWdZVDF2Y0dWdVYyOXlhMlpzYjNkVWIyOXNVblZ1UTI5dWRISnZiRWx1WW05NEtHa3VhRzl2YTFSdmEyVnVLU3h2UFNFeE8zUnllWHQwY25sN1lYZGhhWFFnWTJ4aGFXMUliMjlyVDNkdVpYSnphR2x3S0dFdWFHOXZheWtzYnowaE1IMWpZWFJqYUNobEtYdHBaaWhwYzBodmIydERiMjVtYkdsamRFVnljbTl5S0dVcEtYSmxkSFZ5Ymp0MGFISnZkeUJsZld4bGRDQnVQWHN1TGk1cExHVjRaV04xZEdsdmJqcHBMbVY0WldOMWRHbHZiajgvWUdKc2IyTnJhVzVuWUgwc2NqMWpjbVZoZEdWWGIzSnJabXh2ZDBKdlpIbFNaV1lvYmlrc2N6MWxlR1ZqZFhSbFYyOXlhMlpzYjNkQ2IyUjVLRzRzWVM1emFXZHVZV3dwTG5Sb1pXNG9aVDArZTJsbUtHVXVjM1JoZEhWelBUMDlZR052YlhCc1pYUmxaR0FwY21WMGRYSnVJR1V1YjNWMGNIVjBPM1JvY205M0lHVXVjM1JoZEhWelBUMDlZR1poYVd4bFpHQS9aUzVsY25KdmNqcGhMbk5wWjI1aGJDNXlaV0Z6YjI0L1AwVnljbTl5S0dVdWNtVmhjMjl1UHo5Z1YyOXlhMlpzYjNjZ2RHOXZiQ0J5ZFc0Z1kyRnVZMlZzYkdWa0xtQXBmU2tzWXoxekxtTmhkR05vS0NncFBUNTdmU2tzYkR0MGNubDdiRDE3YjNWMGNIVjBPbUYzWVdsMElGQnliMjFwYzJVdWNtRmpaU2hiY3l4aExtTmhibU5sYkd4bFpGMHBMSE4wWVhSMWN6cGdZMjl0Y0d4bGRHVmtZSDE5WTJGMFkyZ29kQ2w3WVM1emFXZHVZV3d1WVdKdmNuUmxaRDhvWVhkaGFYUWdVSEp2YldselpTNXlZV05sS0Z0akxITnNaV1Z3S0dBek1ITmdLVjBwTEd3OWUzSmxZWE52YmpwaExuSmxZWE52YmlncExITjBZWFIxY3pwZ1kyRnVZMlZzYkdWa1lIMHBPbXc5ZTJWeWNtOXlPbTV2Y20xaGJHbDZaVk5sY21saGJHbDZZV0pzWlVWeWNtOXlLSFFwTEhOMFlYUjFjenBnWm1GcGJHVmtZSDE5YkdWMElIVTllMlp5YjIwNmNpeHlaWE4xYkhRNmJIMDdZWGRoYVhRZ2NtVnpkVzFsU0c5dmExTjBaWEFvYVM1dmQyNWxjaTV2ZFhSamIyMWxMSFVzZTJsbVVISmxjMlZ1ZERwc0xuTjBZWFIxY3owOVBXQmpZVzVqWld4c1pXUmdmU2w5Wm1sdVlXeHNlWHR2SmlaaGQyRnBkQ0JrYVhOd2IzTmxTRzl2YXloaExtaHZiMnNwZlgxM2IzSnJabXh2ZDFSdmIyeFNkVzVYYjNKclpteHZkeTUzYjNKclpteHZkMGxrUFdCM2IzSnJabXh2ZHk4dlpYWmxMeTkzYjNKclpteHZkMVJ2YjJ4U2RXNVhiM0pyWm14dmQyQTdaWGh3YjNKMGUzZHZjbXRtYkc5M1ZHOXZiRkoxYmxkdmNtdG1iRzkzZlR0Y2JuZHZjbXRtYkc5M1ZHOXZiRkoxYmxkdmNtdG1iRzkzTG5kdmNtdG1iRzkzU1dRZ1BTQmNJbmR2Y210bWJHOTNMeTlsZG1VdkwzZHZjbXRtYkc5M1ZHOXZiRkoxYmxkdmNtdG1iRzkzWENJN1hHNW5iRzlpWVd4VWFHbHpMbDlmY0hKcGRtRjBaVjkzYjNKclpteHZkM011YzJWMEtGd2lkMjl5YTJac2IzY3ZMMlYyWlM4dmQyOXlhMlpzYjNkVWIyOXNVblZ1VjI5eWEyWnNiM2RjSWl3Z2QyOXlhMlpzYjNkVWIyOXNVblZ1VjI5eWEyWnNiM2NwTzF4dUlpd2lablZ1WTNScGIyNGdZV04wYVhabFZIVnlia2xrS0dVcGUzSmxkSFZ5YmlCbExuUjFjbTVKWkQwOVBXQmdQMkIwZFhKdVh5UjdaUzV6WlhGMVpXNWpaWDFnT21VdWRIVnlia2xrZldWNGNHOXlkSHRoWTNScGRtVlVkWEp1U1dSOU95SXNJbVoxYm1OMGFXOXVJSEoxYmsxcFozSmhkR2x2YmtOb1lXbHVLR1VwZTJsbUtIUjVjR1Z2WmlCbExuWmhiSFZsSVQxZ2IySnFaV04wWUh4OFpTNTJZV3gxWlQwOVBXNTFiR3dwZEdoeWIzY2dSWEp5YjNJb1lDUjdaUzVzWVdKbGJIMDZJSFpoYkhWbElHaGhjeUJ1YnlCdWRXMWxjbWxqSUZ3aWRtVnljMmx2Ymx3aUlHWnBaV3hrTG1BcE8yeGxkQ0IwUFdVdWRtRnNkV1V1ZG1WeWMybHZiaXh1TzJsbUtIUjVjR1Z2WmlCMFBUMWdiblZ0WW1WeVlDbHVQV1V1ZG1Gc2RXVTdaV3h6WlNCcFppZ2hLR0IyWlhKemFXOXVZR2x1SUdVdWRtRnNkV1VwSmlabExtbHVhWFJwWVd4V1pYSnphVzl1SVQwOWRtOXBaQ0F3S1c0OWV5NHVMbVV1ZG1Gc2RXVXNkbVZ5YzJsdmJqcGxMbWx1YVhScFlXeFdaWEp6YVc5dWZUdGxiSE5sSUhSb2NtOTNJRVZ5Y205eUtHQWtlMlV1YkdGaVpXeDlPaUIyWVd4MVpTQm9ZWE1nYm04Z2JuVnRaWEpwWXlCY0luWmxjbk5wYjI1Y0lpQm1hV1ZzWkM1Z0tUdHNaWFFnY2oxbExtbHVhWFJwWVd4V1pYSnphVzl1UHo4eE8ybG1LQ0ZPZFcxaVpYSXVhWE5KYm5SbFoyVnlLRzR1ZG1WeWMybHZiaWw4Zkc0dWRtVnljMmx2Ymp4eUtYUm9jbTkzSUVWeWNtOXlLR0FrZTJVdWJHRmlaV3g5T2lCMlpYSnphVzl1SUNSN2JpNTJaWEp6YVc5dWZTQnBjeUJ1YjNRZ1lTQndiM05wZEdsMlpTQnBiblJsWjJWeUxtQXBPMmxtS0c0dWRtVnljMmx2Ymo1bExuUmhjbWRsZEZabGNuTnBiMjRwZEdoeWIzY2dSWEp5YjNJb1lDUjdaUzVzWVdKbGJIMDZJR1Z1WTI5MWJuUmxjbVZrSUhabGNuTnBiMjRnSkh0dUxuWmxjbk5wYjI1OUxDQjNhR2xqYUNCcGN5QnVaWGRsY2lCMGFHRnVJSFJvWlNCemRYQndiM0owWldRZ2RtVnljMmx2YmlBa2UyVXVkR0Z5WjJWMFZtVnljMmx2Ym4wdUlGUm9hWE1nZFhOMVlXeHNlU0JwYm1ScFkyRjBaWE1nZEdobElIZHBjbVVnZDJGeklIZHlhWFIwWlc0Z1lua2dZU0J1WlhkbGNpQmxkbVVnWkdWd2JHOTViV1Z1ZENCMGFHRnVJSFJvWlNCdmJtVWdjbVZoWkdsdVp5QnBkQzVnS1R0bWIzSW9PMjR1ZG1WeWMybHZianhsTG5SaGNtZGxkRlpsY25OcGIyNDdLWHRzWlhRZ2REMWxMbTFwWjNKaGRHbHZibk11Wm1sdVpDaGxQVDVsTG1aeWIyMDlQVDF1TG5abGNuTnBiMjRwTzJsbUtDRjBLWFJvY205M0lFVnljbTl5S0dBa2UyVXViR0ZpWld4OU9pQnVieUJ0YVdkeVlYUnBiMjRnY21WbmFYTjBaWEpsWkNCbWIzSWdkbVZ5YzJsdmJpQWtlMjR1ZG1WeWMybHZibjBnNG9hU0lDUjdiaTUyWlhKemFXOXVLekY5TG1BcE8ybG1LSFF1ZEc4aFBUMTBMbVp5YjIwck1TbDBhSEp2ZHlCRmNuSnZjaWhnSkh0bExteGhZbVZzZlRvZ2JXbG5jbUYwYVc5dUlDUjdkQzVtY205dGZTRGlocElnSkh0MExuUnZmU0J0ZFhOMElITjBaWEFnWlhoaFkzUnNlU0J2Ym1VZ2RtVnljMmx2YmlCaGRDQmhJSFJwYldVdVlDazdiR1YwSUhJOWRDNXRhV2R5WVhSbEtHNHBPMmxtS0hJdWRtVnljMmx2YmlFOVBYUXVkRzhwZEdoeWIzY2dSWEp5YjNJb1lDUjdaUzVzWVdKbGJIMDZJRzFwWjNKaGRHbHZiaUFrZTNRdVpuSnZiWDBnNG9hU0lDUjdkQzUwYjMwZ2NISnZaSFZqWldRZ1lTQjJZV3gxWlNCM2FYUm9JSFpsY25OcGIyNGdKSHR5TG5abGNuTnBiMjU5TG1BcE8yNDljbjF5WlhSMWNtNGdibjFsZUhCdmNuUjdjblZ1VFdsbmNtRjBhVzl1UTJoaGFXNTlPeUlzSW1OdmJuTjBJSFIxY201WGIzSnJabXh2ZDBsdWNIVjBWakJVYjFZeFBYdG1jbTl0T2pBc2JXbG5jbUYwWlNobEtYdHBaaWdoYVhOUWNtVldaWEp6YVc5dVZIVnlibGR2Y210bWJHOTNTVzV3ZFhRb1pTa3BkR2h5YjNjZ1JYSnliM0lvWUhSMWNtNGdkMjl5YTJac2IzY2dhVzV3ZFhRNklIWmxjbk5wYjI0Z01DQjJZV3gxWlNCcGN5QnViM1FnWVNCeVpXTnZaMjVwZW1Wa0lIQnlaUzEyWlhKemFXOXVJSE5vWVhCbExtQXBPM0psZEhWeWJudGpZWEJoWW1sc2FYUnBaWE02WlM1allYQmhZbWxzYVhScFpYTXNZMjl0Y0d4bGRHbHZibFJ2YTJWdU9tVXVZMjl0Y0d4bGRHbHZibFJ2YTJWdUxHMXZaR1U2WlM1dGIyUmxMSE4wWlhCSmJuQjFkRHA3YVc1d2RYUTZaUzVrWld4cGRtVnllU3h3WVhKbGJuUlhjbWwwWVdKc1pUcGxMbkJoY21WdWRGZHlhWFJoWW14bExITmxjbWxoYkdsNlpXUkRiMjUwWlhoME9tVXVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUXNjMlZ6YzJsdmJsTjBZWFJsT21VdWMyVnpjMmx2YmxOMFlYUmxmU3gyWlhKemFXOXVPakY5ZlN4MGJ6b3hmVHRtZFc1amRHbHZiaUJwYzFCeVpWWmxjbk5wYjI1VWRYSnVWMjl5YTJac2IzZEpibkIxZENobEtYdHlaWFIxY200Z2RIbHdaVzltSUdVOVBXQnZZbXBsWTNSZ0ppWWhJV1VtSm1Ca1pXeHBkbVZ5ZVdCcGJpQmxmV1Y0Y0c5eWRIdDBkWEp1VjI5eWEyWnNiM2RKYm5CMWRGWXdWRzlXTVgwN0lpd2lZMjl1YzNRZ2RIVnlibGR2Y210bWJHOTNTVzV3ZFhSV01WUnZWakk5ZTJaeWIyMDZNU3h0YVdkeVlYUmxLR1VwZTNKbGRIVnlibnN1TGk1bExIWmxjbk5wYjI0Nk1uMTlMSFJ2T2pKOU8yVjRjRzl5ZEh0MGRYSnVWMjl5YTJac2IzZEpibkIxZEZZeFZHOVdNbjA3SWl3aWFXMXdiM0owZTNKMWJrMXBaM0poZEdsdmJrTm9ZV2x1ZldaeWIyMWNJaTR2WTJoaGFXNHVhbk5jSWp0cGJYQnZjblI3ZEhWeWJsZHZjbXRtYkc5M1NXNXdkWFJXTUZSdlZqRjlabkp2YlZ3aUxpOTBkWEp1TFhkdmNtdG1iRzkzTFhZd0xYUnZMWFl4TG1welhDSTdhVzF3YjNKMGUzUjFjbTVYYjNKclpteHZkMGx1Y0hWMFZqRlViMVl5ZldaeWIyMWNJaTR2ZEhWeWJpMTNiM0pyWm14dmR5MTJNUzEwYnkxMk1pNXFjMXdpTzJOdmJuTjBJRlJWVWs1ZlYwOVNTMFpNVDFkZlNVNVFWVlJmVmtWU1UwbFBUajB5TEhSMWNtNVhiM0pyWm14dmQwbHVjSFYwVFdsbmNtRjBhVzl1Y3oxYmRIVnlibGR2Y210bWJHOTNTVzV3ZFhSV01GUnZWakVzZEhWeWJsZHZjbXRtYkc5M1NXNXdkWFJXTVZSdlZqSmRPMloxYm1OMGFXOXVJR055WldGMFpWUjFjbTVYYjNKclpteHZkMGx1Y0hWMEtHVXBlM0psZEhWeWJudGpZWEJoWW1sc2FYUnBaWE02WlM1allYQmhZbWxzYVhScFpYTXNZMjl0Y0d4bGRHbHZibFJ2YTJWdU9tVXVZMjl0Y0d4bGRHbHZibFJ2YTJWdUxHUnlhWFpsY2tOaGNHRmlhV3hwZEdsbGN6cDdZMkZ1WTJWc2JHVmtWSFZ5YmxObGRIUnNaVG9oTUN4MGRYSnVTVzVpYjNnNklUQjlMR2x1YVhScFlXeERZVzVqWld4c1lYUnBiMjQ2WlM1cGJtbDBhV0ZzUTJGdVkyVnNiR0YwYVc5dUxHbHVhWFJwWVd4VGRHVndPbVV1YVc1cGRHbGhiRk4wWlhBc2JXOWtaVHBsTG0xdlpHVXNjM1JsY0VsdWNIVjBPbnRwYm5CMWREcGxMbVJsYkdsMlpYSjVMSEJoY21WdWRGZHlhWFJoWW14bE9tVXVjR0Z5Wlc1MFYzSnBkR0ZpYkdVc2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNlpTNXpaWEpwWVd4cGVtVmtRMjl1ZEdW",
	"NGRDeHpaWE56YVc5dVUzUmhkR1U2WlM1elpYTnphVzl1VTNSaGRHVjlMSFpsY25OcGIyNDZNbjE5Wm5WdVkzUnBiMjRnYldsbmNtRjBaVlIxY201WGIzSnJabXh2ZDBsdWNIVjBLSFFwZTNKbGRIVnliaUJ5ZFc1TmFXZHlZWFJwYjI1RGFHRnBiaWg3YVc1cGRHbGhiRlpsY25OcGIyNDZNQ3hzWVdKbGJEcGdkSFZ5YmlCM2IzSnJabXh2ZHlCcGJuQjFkR0FzYldsbmNtRjBhVzl1Y3pwMGRYSnVWMjl5YTJac2IzZEpibkIxZEUxcFozSmhkR2x2Ym5Nc2RHRnlaMlYwVm1WeWMybHZiam95TEhaaGJIVmxPblI5S1gxbGVIQnZjblI3VkZWU1RsOVhUMUpMUmt4UFYxOUpUbEJWVkY5V1JWSlRTVTlPTEdOeVpXRjBaVlIxY201WGIzSnJabXh2ZDBsdWNIVjBMRzFwWjNKaGRHVlVkWEp1VjI5eWEyWnNiM2RKYm5CMWRIMDdJaXdpTHlvcVgxOXBiblJsY201aGJGOTNiM0pyWm14dmQzTjdYQ0p6ZEdWd2Mxd2lPbnRjSW1ScGMzUXZjM0pqTDJWNFpXTjFkR2x2Ymk5allXNWpaV3d0YVc1a1pYaGxaQzF6WlhOemFXOXVMWFJoYzJ0ekxYTjBaWEF1YW5OY0lqcDdYQ0pqWVc1alpXeEJiR3hKYm1SbGVHVmtVMlZ6YzJsdmJsUmhjMnR6VTNSbGNGd2lPbnRjSW5OMFpYQkpaRndpT2x3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dlkyRnVZMlZzUVd4c1NXNWtaWGhsWkZObGMzTnBiMjVVWVhOcmMxTjBaWEJjSW4xOWZYMHFMenRjYm1WNGNHOXlkQ0IyWVhJZ1kyRnVZMlZzUVd4c1NXNWtaWGhsWkZObGMzTnBiMjVVWVhOcmMxTjBaWEFnUFNCbmJHOWlZV3hVYUdselcxTjViV0p2YkM1bWIzSW9YQ0pYVDFKTFJreFBWMTlWVTBWZlUxUkZVRndpS1Ywb1hDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OWpZVzVqWld4QmJHeEpibVJsZUdWa1UyVnpjMmx2YmxSaGMydHpVM1JsY0Z3aUtUdGNiaUlzSWk4cUtsOWZhVzUwWlhKdVlXeGZkMjl5YTJac2IzZHplMXdpYzNSbGNITmNJanA3WENKa2FYTjBMM055WXk5bGVHVmpkWFJwYjI0dmQyOXlhMlpzYjNjdGMzUmxjSE11YW5OY0lqcDdYQ0owZFhKdVUzUmxjRndpT250Y0luTjBaWEJKWkZ3aU9sd2ljM1JsY0M4dlpYWmxRREF1TlRFdU1TOHZkSFZ5YmxOMFpYQmNJbjE5ZlgwcUx6dGNibVY0Y0c5eWRDQjJZWElnZEhWeWJsTjBaWEFnUFNCbmJHOWlZV3hVYUdselcxTjViV0p2YkM1bWIzSW9YQ0pYVDFKTFJreFBWMTlWVTBWZlUxUkZVRndpS1Ywb1hDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OTBkWEp1VTNSbGNGd2lLVHRjYmlJc0ltTnZibk4wSUdOc2FXVnVkRU52Ym5SbGVIUkxaWGs5WUY5ZlpYWmxRMnhwWlc1MFEyOXVkR1Y0ZEdBN1puVnVZM1JwYjI0Z1lYUjBZV05vUTJ4cFpXNTBRMjl1ZEdWNGRDaGxMSFFwZTNKbGRIVnliaUIwSVQwOWRtOXBaQ0F3SmlZb1pWdGpiR2xsYm5SRGIyNTBaWGgwUzJWNVhUMTBLU3hsZldaMWJtTjBhVzl1SUhKbFlXUkRiR2xsYm5SRGIyNTBaWGgwS0dVcGUzSmxkSFZ5YmlCbFB5NWJZMnhwWlc1MFEyOXVkR1Y0ZEV0bGVWMTlaWGh3YjNKMGUyRjBkR0ZqYUVOc2FXVnVkRU52Ym5SbGVIUXNjbVZoWkVOc2FXVnVkRU52Ym5SbGVIUjlPeUlzSW1sdGNHOXlkSHRoZEhSaFkyaERiR2xsYm5SRGIyNTBaWGgwTEhKbFlXUkRiR2xsYm5SRGIyNTBaWGgwZldaeWIyMWNJaU5wYm5SbGNtNWhiQzlqYkdsbGJuUXRZMjl1ZEdWNGRDNXFjMXdpTzJaMWJtTjBhVzl1SUdOdllXeGxjMk5sVkhWeWJrbHVjSFYwY3lodUxISXBlMnhsZENCcFBXTnZZV3hsYzJObFNXNXdkWFJTWlhOd2IyNXpaWE1vZTJFNmJpNXBibkIxZEZKbGMzQnZibk5sY3l4aU9uSXVhVzV3ZFhSU1pYTndiMjV6WlhOOUtTeGhQV052WVd4bGMyTmxUV1Z6YzJGblpTaDdZVHB1TG0xbGMzTmhaMlVzWWpweUxtMWxjM05oWjJWOUtTeHZQV052WVd4bGMyTmxRMjl1ZEdWNGRDaDdZVHB1TG1OdmJuUmxlSFFzWWpweUxtTnZiblJsZUhSOUtTeHpQV052WVd4bGMyTmxRMjl1ZEdWNGRDaDdZVHB5WldGa1EyeHBaVzUwUTI5dWRHVjRkQ2h1S1N4aU9uSmxZV1JEYkdsbGJuUkRiMjUwWlhoMEtISXBmU2tzWXoxeUxtOTFkSEIxZEZOamFHVnRZVDgvYmk1dmRYUndkWFJUWTJobGJXRXNiRDE3ZlR0eVpYUjFjbTRnYVNFOVBYWnZhV1FnTUNZbUtHd3VhVzV3ZFhSU1pYTndiMjV6WlhNOWFTa3NZU0U5UFhadmFXUWdNQ1ltS0d3dWJXVnpjMkZuWlQxaEtTeHZJVDA5ZG05cFpDQXdKaVlvYkM1amIyNTBaWGgwUFc4cExHTWhQVDEyYjJsa0lEQW1KaWhzTG05MWRIQjFkRk5qYUdWdFlUMWpLU3hoZEhSaFkyaERiR2xsYm5SRGIyNTBaWGgwS0d3c2N5bDlablZ1WTNScGIyNGdibTl5YldGc2FYcGxWWE5sY2tOdmJuUmxiblFvWlNsN2FXWW9aVDA5UFhadmFXUWdNQ2x5WlhSMWNtNDdhV1lvZEhsd1pXOW1JR1U5UFdCemRISnBibWRnS1hKbGRIVnliaUJsTG5SeWFXMG9LUzVzWlc1bmRHZytNRDlsT25admFXUWdNRHRzWlhRZ2REMWxMbVpwYkhSbGNpaGxQVDVsTG5SNWNHVWhQVDFnZEdWNGRHQjhmR1V1ZEdWNGRDNTBjbWx0S0NrdWJHVnVaM1JvUGpBcE8ybG1LSFF1YkdWdVozUm9JVDA5TUNseVpYUjFjbTRnZEM1c1pXNW5kR2c5UFQxbExteGxibWQwYUQ5bE9uUjlablZ1WTNScGIyNGdibTl5YldGc2FYcGxUVzlrWld4TlpYTnpZV2RsY3lobEtYdHlaWFIxY200Z1pTNW1iR0YwVFdGd0tHVTlQbnRwWmloMGVYQmxiMllnWlM1amIyNTBaVzUwUFQxZ2MzUnlhVzVuWUNseVpYUjFjbTRnWlM1amIyNTBaVzUwTG5SeWFXMG9LUzVzWlc1bmRHZytNRDliWlYwNlcxMDdiR1YwSUhROVpTNWpiMjUwWlc1MExtWnBiSFJsY2lobFBUNWxMblI1Y0dVaFBUMWdkR1Y0ZEdCOGZHVXVkR1Y0ZEM1MGNtbHRLQ2t1YkdWdVozUm9QakFwTzNKbGRIVnliaUIwTG14bGJtZDBhRDA5UFRBL1cxMDZkQzVzWlc1bmRHZzlQVDFsTG1OdmJuUmxiblF1YkdWdVozUm9QMXRsWFRwYmV5NHVMbVVzWTI5dWRHVnVkRHAwZlYxOUtYMW1kVzVqZEdsdmJpQnlaWE52YkhabFFYTnphWE4wWVc1MFUzUmxjRlJsZUhRb1pTeDBLWHRtYjNJb2JHVjBJSFE5WlM1c1pXNW5kR2d0TVR0MFBqMHdPeTB0ZENsN2JHVjBJRzQ5WlZ0MFhUdHBaaWh1UHk1eWIyeGxJVDA5WUdGemMybHpkR0Z1ZEdBcFkyOXVkR2x1ZFdVN2JHVjBJSEk5WlhoMGNtRmpkRTFsYzNOaFoyVlVaWGgwS0c0cE8ybG1LSEl1ZEhKcGJTZ3BMbXhsYm1kMGFENHdLWEpsZEhWeWJpQnlmWEpsZEhWeWJpQjBJVDA5ZG05cFpDQXdKaVowTG5SeWFXMG9LUzVzWlc1bmRHZytNRDkwT201MWJHeDlablZ1WTNScGIyNGdaWGgwY21GamRFMWxjM05oWjJWVVpYaDBLR1VwZTNKbGRIVnliaUIwZVhCbGIyWWdaUzVqYjI1MFpXNTBQVDFnYzNSeWFXNW5ZRDlsTG1OdmJuUmxiblE2UVhKeVlYa3VhWE5CY25KaGVTaGxMbU52Ym5SbGJuUXBQMlV1WTI5dWRHVnVkQzVtYkdGMFRXRndLR1U5UG5SNWNHVnZaaUJsUFQxZ2MzUnlhVzVuWUQ5YlpWMDZZSFI1Y0dWZ2FXNGdaU1ltWlM1MGVYQmxQVDA5WUhSbGVIUmdKaVowZVhCbGIyWWdaUzUwWlhoMFBUMWdjM1J5YVc1bllEOWJaUzUwWlhoMFhUcGJYU2t1YW05cGJpaGdZQ2s2WUdCOVpuVnVZM1JwYjI0Z1kyOWhiR1Z6WTJWSmJuQjFkRkpsYzNCdmJuTmxjeWhsS1h0c1pYUWdkRDFsTG1FL1AxdGRMRzQ5WlM1aVB6OWJYVHRwWmlnaEtIUXViR1Z1WjNSb1BUMDlNQ1ltYmk1c1pXNW5kR2c5UFQwd0tTbHlaWFIxY201YkxpNHVkQ3d1TGk1dVhYMW1kVzVqZEdsdmJpQmpiMkZzWlhOalpVTnZiblJsZUhRb1pTbDdiR1YwSUhROVpTNWhQejliWFN4dVBXVXVZajgvVzEwN2FXWW9JU2gwTG14bGJtZDBhRDA5UFRBbUptNHViR1Z1WjNSb1BUMDlNQ2twY21WMGRYSnVXeTR1TG5Rc0xpNHVibDE5Wm5WdVkzUnBiMjRnWTI5aGJHVnpZMlZOWlhOellXZGxLR1VwZTJ4bGRDQjBQVzV2Y20xaGJHbDZaVlZ6WlhKRGIyNTBaVzUwS0dVdVlTa3NiajF1YjNKdFlXeHBlbVZWYzJWeVEyOXVkR1Z1ZENobExtSXBPM0psZEhWeWJpQjBQVDA5ZG05cFpDQXdQMjQ2YmowOVBYWnZhV1FnTUQ5ME9tRndjR1Z1WkZWelpYSkRiMjUwWlc1MEtIdGhjSEJsYm1SbFpEcHVMR1Y0YVhOMGFXNW5PblI5S1gxbWRXNWpkR2x2YmlCaGNIQmxibVJWYzJWeVEyOXVkR1Z1ZENobEtYdHlaWFIxY200Z2RIbHdaVzltSUdVdVpYaHBjM1JwYm1jOVBXQnpkSEpwYm1kZ0ppWjBlWEJsYjJZZ1pTNWhjSEJsYm1SbFpEMDlZSE4wY21sdVoyQS9ZQ1I3WlM1bGVHbHpkR2x1WjMxY1hHNWNYRzRrZTJVdVlYQndaVzVrWldSOVlEcGJMaTR1ZEc5VmMyVnlRMjl1ZEdWdWRFRnljbUY1S0dVdVpYaHBjM1JwYm1jcExDNHVMblJ2VlhObGNrTnZiblJsYm5SQmNuSmhlU2hsTG1Gd2NHVnVaR1ZrS1YxOVpuVnVZM1JwYjI0Z2RHOVZjMlZ5UTI5dWRHVnVkRUZ5Y21GNUtHVXBlM0psZEhWeWJpQjBlWEJsYjJZZ1pUMDlZSE4wY21sdVoyQS9aUzVzWlc1bmRHZytNRDliZTNSNWNHVTZZSFJsZUhSZ0xIUmxlSFE2WlgxZE9sdGRPa0Z5Y21GNUxtbHpRWEp5WVhrb1pTay9XeTR1TG1WZE9sdGRmV1oxYm1OMGFXOXVJR052WVd4bGMyTmxSR1ZzYVhabGNtbGxjeWhsS1h0c1pYUmJkQ3d1TGk1dVhUMWxPMmxtS0hROVBUMTJiMmxrSURBcGRHaHliM2NnUlhKeWIzSW9ZRU5oYm01dmRDQmpiMkZzWlhOalpTQmhiaUJsYlhCMGVTQmtaV3hwZG1WeWVTQmlZWFJqYUM1Z0tUdHNaWFFnY2oxMExtRjFkR2dzYVQxMExtTmhiR3hsY2l4aFBWc3VMaTUwTG5CaGVXeHZZV1J6WFN4dlBWc3VMaTUwTG1SbGJHbDJaWEo1VFdWMFlXUmhkR0UvUDF0ZFhUdG1iM0lvYkdWMElHVWdiMllnYmlsN2JHVjBJSFE5WVM1c1pXNW5kR2c3YVdZb1pTNWhkWFJvSVQwOWRtOXBaQ0F3SmlZb2NqMWxMbUYxZEdncExHVXVZMkZzYkdWeUlUMDlkbTlwWkNBd0tYdHBaaWhwSVQwOWRtOXBaQ0F3S1hSb2NtOTNJRVZ5Y205eUtHQkRZVzV1YjNRZ1kyOWhiR1Z6WTJVZ1pHVnNhWFpsY21sbGN5Qm1jbTl0SUdScFptWmxjbVZ1ZENCMGRYSnVjeTVnS1R0cFBXVXVZMkZzYkdWeWZXRXVjSFZ6YUNndUxpNWxMbkJoZVd4dllXUnpLU3h2TG5CMWMyZ29MaTR1S0dVdVpHVnNhWFpsY25sTlpYUmhaR0YwWVQ4L1cxMHBMbTFoY0NobFBUNG9leTR1TG1Vc2NHRjViRzloWkVsdVpHVjRPbVV1Y0dGNWJHOWhaRWx1WkdWNEszUjlLU2twZlhKbGRIVnlibnN1TGk1MExHRjFkR2c2Y2l4allXeHNaWEk2YVN4a1pXeHBkbVZ5ZVUxbGRHRmtZWFJoT204dWJHVnVaM1JvUFQwOU1EOTJiMmxrSURBNmJ5eHdZWGxzYjJGa2N6cGhmWDFsZUhCdmNuUjdZWEJ3Wlc1a1ZYTmxja052Ym5SbGJuUXNZMjloYkdWelkyVkVaV3hwZG1WeWFXVnpMR052WVd4bGMyTmxWSFZ5YmtsdWNIVjBjeXh1YjNKdFlXeHBlbVZOYjJSbGJFMWxjM05oWjJWekxHNXZjbTFoYkdsNlpWVnpaWEpEYjI1MFpXNTBMSEpsYzI5c2RtVkJjM05wYzNSaGJuUlRkR1Z3VkdWNGRIMDdJaXdpYVcxd2IzSjBlMk52WVd4bGMyTmxWSFZ5YmtsdWNIVjBjMzFtY205dFhDSWphR0Z5Ym1WemN5OXRaWE56WVdkbGN5NXFjMXdpTzJOdmJuTjBJRU5QUVV4RlUwTkZSRjlFUlV4SlZrVlNYMFpKUlV4RVV6MWJZR052Ym5SbGVIUmdMR0JwYm5CMWRGSmxjM0J2Ym5ObGMyQXNZRzFsYzNOaFoyVmdMR0J2ZFhSd2RYUlRZMmhsYldGZ0xHQjBZWE5yWUYwN1puVnVZM1JwYjI0Z1kyOWhiR1Z6WTJWRVpXeHBkbVZ5VUdGNWJHOWhaSE1vYmlsN2FXWW9iaTVzWlc1bmRHZzlQVDB3S1hKbGRIVnlibnQ5TzJsbUtHNHViR1Z1WjNSb1BUMDlNU2x5WlhSMWNtNGdibHN3WFQ4L2UzMDdiR1YwSUhJOWUzMHNhVDFiWFN4aFBWdGRMRzg5VzEwc2N6MWJYU3hqUFh0OU8yWnZjaWhzWlhRZ2RDQnZaaUJ1S1h0cExuQjFjMmdvTGk0dWRDNTBZWE5yUHk1cGJuQjFkRkpsY1hWbGMzUnpQejliWFNrc1lTNXdkWE5vS0M0dUxuUXVkR0Z6YXo4dVlXZGxiblJTWlhGMVpYTjBjejgvVzEwcExHOHVjSFZ6YUNndUxpNTBMblJoYzJzL0xtRjFkR2h2Y21sNllYUnBiMjVGZG1WdWRITS9QMXRkS1N4ekxuQjFjMmdvTGk0dWRDNTBZWE5yUHk1MmFXVjNjejgvVzEwcE8yWnZjaWhzWlhSYlpTeHVYVzltSUU5aWFtVmpkQzVsYm5SeWFXVnpLSFFwS1c0aFBUMTJiMmxrSURBbUppaHlXMlZkUFc0cE8yTTlZMjloYkdWelkyVlVkWEp1U1c1d2RYUnpLR01zZENsOVptOXlLR3hsZENCbElHOW1JRU5QUVV4RlUwTkZSRjlFUlV4SlZrVlNYMFpKUlV4RVV5bGtaV3hsZEdVZ2NsdGxYVHRzWlhRZ2JEMTdmVHR5WlhSMWNtNGdhUzVzWlc1bmRHZytNQ1ltS0d3dWFXNXdkWFJTWlhGMVpYTjBjejFwS1N4aExteGxibWQwYUQ0d0ppWW9iQzVoWjJWdWRGSmxjWFZsYzNSelBXRXBMRzh1YkdWdVozUm9QakFtSmloc0xtRjFkR2h2Y21sNllYUnBiMjVGZG1WdWRITTlieWtzY3k1c1pXNW5kR2crTUNZbUtHd3VkbWxsZDNNOWN5a3NUMkpxWldOMExtdGxlWE1vYkNrdWJHVnVaM1JvUGpBbUppaHlMblJoYzJzOWJDa3NUMkpxWldOMExtRnpjMmxuYmloeUxHTXBmV1Y0Y0c5eWRIdGpiMkZzWlhOalpVUmxiR2wyWlhKUVlYbHNiMkZrYzMwN0lpd2lMeW9xWDE5cGJuUmxjbTVoYkY5M2IzSnJabXh2ZDNON1hDSnpkR1Z3YzF3aU9udGNJbVJwYzNRdmMzSmpMMlY0WldOMWRHbHZiaTl3Y205NGFXVmtMV1JsYkdsMlpYSXRjM1JsY0M1cWMxd2lPbnRjSW5KdmRYUmxVSEp2ZUdsbFpFUmxiR2wyWlhKVGRHVndYQ0k2ZTF3aWMzUmxjRWxrWENJNlhDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OXliM1YwWlZCeWIzaHBaV1JFWld4cGRtVnlVM1JsY0Z3aWZYMTlmU292TzF4dVpYaHdiM0owSUhaaGNpQnliM1YwWlZCeWIzaHBaV1JFWld4cGRtVnlVM1JsY0NBOUlHZHNiMkpoYkZSb2FYTmJVM2x0WW05c0xtWnZjaWhjSWxkUFVrdEdURTlYWDFWVFJWOVRWRVZRWENJcFhTaGNJbk4wWlhBdkwyVjJaVUF3TGpVeExqRXZMM0p2ZFhSbFVISnZlR2xsWkVSbGJHbDJaWEpUZEdWd1hDSXBPMXh1SWl3aUx5b3FYMTlwYm5SbGNtNWhiRjkzYjNKclpteHZkM043WENKemRHVndjMXdpT250Y0ltUnBjM1F2YzNKakwzTjFZbUZuWlc1MGN5OWxkbVZ1ZEMxd2NtOTRlUzF6ZEdWd0xtcHpYQ0k2ZTF3aWNuVnVVSEp2ZUhsVGRXSmhaMlZ1ZEVWMlpXNTBVM1JsY0Z3aU9udGNJbk4wWlhCSlpGd2lPbHdpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2Y25WdVVISnZlSGxUZFdKaFoyVnVkRVYyWlc1MFUzUmxjRndpZlN4Y0ltVnRhWFJTWldOdmNtUmxaRlJoYzJ0SmJuQjFkRkpsY1hWbGMzUlRkR1Z3WENJNmUxd2ljM1JsY0Vsa1hDSTZYQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTlsYldsMFVtVmpiM0prWldSVVlYTnJTVzV3ZFhSU1pYRjFaWE4wVTNSbGNGd2lmWDE5ZlNvdk8xeHVaWGh3YjNKMElIWmhjaUJ5ZFc1UWNtOTRlVk4xWW1GblpXNTBSWFpsYm5SVGRHVndJRDBnWjJ4dlltRnNWR2hwYzF0VGVXMWliMnd1Wm05eUtGd2lWMDlTUzBaTVQxZGZWVk5GWDFOVVJWQmNJaWxkS0Z3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dmNuVnVVSEp2ZUhsVGRXSmhaMlZ1ZEVWMlpXNTBVM1JsY0Z3aUtUdGNibVY0Y0c5eWRDQjJZWElnWlcxcGRGSmxZMjl5WkdWa1ZHRnphMGx1Y0hWMFVtVnhkV1Z6ZEZOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5bGJXbDBVbVZqYjNKa1pXUlVZWE5yU1c1d2RYUlNaWEYxWlhOMFUzUmxjRndpS1R0Y2JpSXNJaThxS2w5ZmFXNTBaWEp1WVd4ZmQyOXlhMlpzYjNkemUxd2ljM1JsY0hOY0lqcDdYQ0prYVhOMEwzTnlZeTlsZUdWamRYUnBiMjR2ZEdGemEzTXZjR0Z5Wlc1MEwyaHBkR3d0Y0hKdmVIa3RjM1JsY0hNdWFuTmNJanA3WENKeVpXTnZjbVJVWVhOclNXNXdkWFJTWlhGMVpYTjBVM1JsY0Z3aU9udGNJbk4wWlhCSlpGd2lPbHdpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2Y21WamIzSmtWR0Z6YTBsdWNIVjBVbVZ4ZFdWemRGTjBaWEJjSW4wc1hDSnlaV052Y21SVVpYSnRhVzVoYkZSaGMydFdhV1YzYzFOMFpYQmNJanA3WENKemRHVndTV1JjSWpwY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwzSmxZMjl5WkZSbGNtMXBibUZzVkdGemExWnBaWGR6VTNSbGNGd2lmWDE5ZlNvdk8xeHVaWGh3YjNKMElIWmhjaUJ5WldOdmNtUlVZWE5yU1c1d2RYUlNaWEYxWlhOMFUzUmxjQ0E5SUdkc2IySmhiRlJvYVhOYlUzbHRZbTlzTG1admNpaGNJbGRQVWt0R1RFOVhYMVZUUlY5VFZFVlFYQ0lwWFNoY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwzSmxZMjl5WkZSaGMydEpibkIxZEZKbGNYVmxjM1JUZEdWd1hDSXBPMXh1Wlhod2IzSjBJSFpoY2lCeVpXTnZjbVJVWlhKdGFXNWhiRlJoYzJ0V2FXVjNjMU4wWlhBZ1BTQm5iRzlpWVd4VWFHbHpXMU41YldKdmJDNW1iM0lvWENKWFQxSkxSa3hQVjE5VlUwVmZVMVJGVUZ3aUtWMG9YQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTl5WldOdmNtUlVaWEp0YVc1aGJGUmhjMnRXYVdWM2MxTjBaWEJjSWlrN1hHNGlMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbk4wWlhCelhDSTZlMXdpWkdsemRDOXpjbU12WlhobFkzVjBhVzl1TDNSdmIyeHpMM04xWW1GblpXNTBMMkZqWTJWd2RDMWxkbVZ1ZEMxemRHVndMbXB6WENJNmUxd2lZV05qWlhCMFZHRnphMEYxZEdodmNtbDZZWFJwYjI1RmRtVnVkRk4wWlhCY0lqcDdYQ0p6ZEdWd1NXUmNJanBjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJGalkyVndkRlJoYzJ0QmRYUm9iM0pwZW1GMGFXOXVSWFpsYm5SVGRHVndYQ0o5ZlgxOUtpODdYRzVsZUhCdmNuUWdkbUZ5SUdGalkyVndkRlJoYzJ0QmRYUm9iM0pwZW1GMGFXOXVSWFpsYm5SVGRHVndJRDBnWjJ4dlltRnNWR2hwYzF0VGVXMWliMnd1Wm05eUtGd2lWMDlTUzBaTVQxZGZWVk5GWDFOVVJWQmNJaWxkS0Z3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dllXTmpaWEIwVkdGemEwRjFkR2h2Y21sNllYUnBiMjVGZG1WdWRGTjBaWEJjSWlrN1hHNGlMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbk4wWlhCelhDSTZlMXdpWkdsemRDOXpjbU12WlhobFkzVjBhVzl1TDNSdmIyeHpMM04xWW1GblpXNTBMMlZ0YVhRdFkyRnNiR1ZrTFhOMFpYQXVhbk5jSWpwN1hDSmxiV2wwVkdGemExTjFZbUZuWlc1MFEyRnNiR1ZrVTNSbGNGd2lPbnRjSW5OMFpYQkpaRndpT2x3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dlpXMXBkRlJoYzJ0VGRXSmhaMlZ1ZEVOaGJHeGxaRk4wWlhCY0luMTlmWDBxTHp0Y2JtVjRjRzl5ZENCMllYSWdaVzFwZEZSaGMydFRkV0poWjJWdWRFTmhiR3hsWkZOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5bGJXbDBWR0Z6YTFOMVltRm5aVzUwUTJGc2JHVmtVM1JsY0Z3aUtUdGNiaUlzSWk4cUtsOWZhVzUwWlhKdVlXeGZkMjl5YTJac2IzZHplMXdpYzNSbGNITmNJanA3WENKa2FYTjBMM055WXk5bGVHVmpkWFJwYjI0dmRHOXZiSE12YzNWaVlXZGxiblF2YVc1MmIydGxMWE4wWlhBdWFuTmNJanA3WENKa2FYTndZWFJqYUZSaGMydEJaMlZ1ZEVsdWRtOWpZWFJwYjI1VGRHVndYQ0k2ZTF3aWMzUmxjRWxrWENJNlhDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OWthWE53WVhSamFGUmhjMnRCWjJWdWRFbHVkbTlqWVhScGIyNVRkR1Z3WENKOUxGd2ljMlYwZEd4bFZHRnphMEZuWlc1MFNXNTJiMk5oZEdsdmJsTjBaWEJjSWpwN1hDSnpkR1Z3U1dSY0lqcGNJbk4wWlhBdkwyVjJaVUF3TGpVeExqRXZMM05sZEhSc1pWUmhjMnRCWjJWdWRFbHVkbTlqWVhScGIyNVRkR1Z3WENKOUxGd2ljbVZzWldGelpVRm5aVzUwU1c1MmIyTmhkR2x2Yms5M2JtVnlVM1JsY0Z3aU9udGNJbk4wWlhCSlpGd2lPbHdpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2Y21Wc1pXRnpaVUZuWlc1MFNXNTJiMk5oZEdsdmJrOTNibVZ5VTNSbGNGd2lmWDE5ZlNvdk8xeHVaWGh3YjNKMElIWmhjaUJrYVhOd1lYUmphRlJoYzJ0QloyVnVkRWx1ZG05allYUnBiMjVUZEdWd0lEMGdaMnh2WW1Gc1ZHaHBjMXRUZVcxaWIyd3VabTl5S0Z3aVYwOVNTMFpNVDFkZlZWTkZYMU5VUlZCY0lpbGRLRndpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2WkdsemNHRjBZMmhVWVhOclFXZGxiblJKYm5adlkyRjBhVzl1VTNSbGNGd2lLVHRjYm1WNGNHOXlkQ0IyWVhJZ2MyVjBkR3hsVkdGemEwRm5aVzUwU1c1MmIyTmhkR2x2YmxOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5elpYUjBiR1ZVWVhOclFXZGxiblJKYm5adlkyRjBhVzl1VTNSbGNGd2lLVHRjYm1WNGNHOXlkQ0IyWVhJZ2NtVnNaV0Z6WlVGblpXNTBTVzUyYjJOaGRHbHZiazkzYm1WeVUzUmxjQ0E5SUdkc2IySmhiRlJvYVhOYlUzbHRZbTlzTG1admNpaGNJbGRQVWt0R1RFOVhYMVZUUlY5VFZFVlFYQ0lwWFNoY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwzSmxiR1ZoYzJWQloyVnVkRWx1ZG05allYUnBiMjVQZDI1bGNsTjBaWEJjSWlrN1hHNGlMQ0pwYlhCdmNuUjdjbVZ6ZFcxbFNHOXZhMU4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MGIyOXNjeTkzYjNKclpteHZkeTl5WlhOMWJXVXRhRzl2YXkxemRHVndMbXB6WENJN2FXMXdiM0owZTJWdGFYUlVZWE5yVTNWaVlXZGxiblJEWVd4c1pXUlRkR1Z3ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2ZEc5dmJITXZjM1ZpWVdkbGJuUXZaVzFwZEMxallXeHNaV1F0YzNSbGNDNXFjMXdpTzJsdGNHOXlkSHRrYVhOd1lYUmphRlJoYzJ0QloyVnVkRWx1ZG05allYUnBiMjVUZEdWd0xITmxkSFJzWlZSaGMydEJaMlZ1ZEVsdWRtOWpZWFJwYjI1VGRHVndmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkRzl2YkhNdmMzVmlZV2RsYm5RdmFXNTJiMnRsTFhOMFpYQXVhbk5jSWp0aGMzbHVZeUJtZFc1amRHbHZiaUJoY0hCc2VWUmhjMnRCWjJWdWRGSmxjWFZsYzNRb2JpeHlLWHRzWlhSN2NtVnhkV1Z6ZERwcGZUMXVPM04zYVhSamFDaHBMbXRwYm1RcGUyTmhjMlZnWVdkbGJuUXRjMlYwZEd4bFpHQTZlMnhsZENCbFBXRjNZV2wwSUhObGRIUnNaVlJoYzJ0QloyVnVkRWx1ZG05allYUnBiMjVUZEdWd0tIdGhZMk4xYlhWc1lYUmxWWE5oWjJVNmJpNWhZMk4xYlhWc1lYUmxWWE5oWjJVc2IzZHVaWEpKWkRwdUxtOTNibVZ5U1dRc2NtVnpkV3gwT21rdWNtVnpkV3gwTEhObGMzTnBiMjVUZEdGMFpUcHlMbk5sYzNOcGIyNVRkR0YwWlN4MFlYTnJTV1E2Ymk1MFlYTnJTV1I5S1R0eVpYUjFjbTU3YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2Y2k1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZaUzV6WlhOemFXOXVVM1JoZEdWOWZXTmhjMlZnWVdkbGJuUXRhVzUyYjJ0bFlEcDdiR1YwSUhROVlYZGhhWFFnWkdsemNHRjBZMmhVWVhOclFXZGxiblJKYm5adlkyRjBhVzl1VTNSbGNDaDdiM2R1WlhKSlpEcHVMbTkzYm1WeVNXUXNjbVZ3YkhsVWJ6cHVMbkpsY0d4NVZHOHNjbVZ4ZFdWemREcHBMSE5sY21saGJHbDZaV1JEYjI1MFpYaDBPbkl1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFzYzJWemMybHZibE4wWVhSbE9uSXVjMlZ6YzJsdmJsTjBZWFJsTEhSaGMydEpaRHB1TG5SaGMydEpaSDBwTzNOM2FYUmphQ2gwTG10cGJtUXBlMk5oYzJWZ1pHbHpjR0YwWTJobFpHQTZjbVYwZFhKdWUzTmxjbWxoYkdsNlpXUkRiMjUwWlhoME9paGhkMkZwZENCbGJXbDBWR0Z6YTFOMVltRm5aVzUwUTJGc2JHVmtVM1JsY0NoN1pYWmxiblE2ZEM1bGRtVnVkQ3h3WVhKbGJuUlhjbWwwWVdKc1pUcHlMbkJoY21WdWRGZHlhWFJoWW14bExITmxjbWxoYkdsNlpXUkRiMjUwWlhoME9uSXVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUjlLU2t1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFzYzJWemMybHZibE4wWVhSbE9uUXVjMlZ6YzJsdmJsTjBZWFJsZlR0allYTmxZR1poYVd4bFpHQTZjbVYwZFhKdUlHRjNZV2wwSUhKbGMzVnRaVWh2YjJ0VGRHVndLRzR1Y21Wd2JIbFVieXg3YTJsdVpEcGdjblZ1ZEdsdFpTMWhZM1JwYjI0dGNtVnpkV3gwWUN4eVpYTjFiSFJ6T2x0MExuSmxjM1ZzZEYxOUtTeDdjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZjaTV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ3h6WlhOemFXOXVVM1JoZEdVNmRDNXpaWE56YVc5dVUzUmhkR1Y5TzJOaGMyVmdibTkwTFdGa2JXbDBkR1ZrWURweVpYUjFjbTU3YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2Y2k1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZkQzV6WlhOemFXOXVVM1JoZEdWOWZYMTlmV1Y0Y0c5eWRIdGhjSEJzZVZSaGMydEJaMlZ1ZEZKbGNYVmxjM1I5T3lJc0ltbHRjRzl5ZEh0amIyRnNaWE5qWlVSbGJHbDJaWEpRWVhsc2IyRmtjMzFtY205dFhDSWpaWGhsWTNWMGFXOXVMMlJsYkdsMlpYSXRjR0Y1Ykc5aFpITXVhbk5jSWp0cGJYQnZjblI3Y205MWRHVlFjbTk0YVdWa1JHVnNhWFpsY2xOMFpYQjlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOXdjbTk0YVdWa0xXUmxiR2wyWlhJ",
	"dGMzUmxjQzVxYzF3aU8ybHRjRzl5ZEh0bGJXbDBVbVZqYjNKa1pXUlVZWE5yU1c1d2RYUlNaWEYxWlhOMFUzUmxjQ3h5ZFc1UWNtOTRlVk4xWW1GblpXNTBSWFpsYm5SVGRHVndmV1p5YjIxY0lpTnpkV0poWjJWdWRITXZaWFpsYm5RdGNISnZlSGt0YzNSbGNDNXFjMXdpTzJsdGNHOXlkSHR5WldOdmNtUlVZWE5yU1c1d2RYUlNaWEYxWlhOMFUzUmxjQ3h5WldOdmNtUlVaWEp0YVc1aGJGUmhjMnRXYVdWM2MxTjBaWEI5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTkwWVhOcmN5OXdZWEpsYm5RdmFHbDBiQzF3Y205NGVTMXpkR1Z3Y3k1cWMxd2lPMmx0Y0c5eWRIdGhZMk5sY0hSVVlYTnJRWFYwYUc5eWFYcGhkR2x2YmtWMlpXNTBVM1JsY0gxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNSdmIyeHpMM04xWW1GblpXNTBMMkZqWTJWd2RDMWxkbVZ1ZEMxemRHVndMbXB6WENJN2FXMXdiM0owZTJGd2NHeDVWR0Z6YTBGblpXNTBVbVZ4ZFdWemRIMW1jbTl0WENJalpYaGxZM1YwYVc5dUwzUnZiMnh6TDNOMVltRm5aVzUwTDNSaGMyc3RZV2RsYm5RdGNtVnhkV1Z6ZEhNdWFuTmNJanRoYzNsdVl5Qm1kVzVqZEdsdmJpQnliM1YwWlVSbGJHbDJaWEpVYjBOb2FXeGtjbVZ1S0drcGUyeGxkQ0JoUFdOdllXeGxjMk5sUkdWc2FYWmxjbEJoZVd4dllXUnpLR2t1WkdWc2FYWmxjbmt1Y0dGNWJHOWhaSE1wTEc4OWFTNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDeHpQV2t1YzJWemMybHZibE4wWVhSbE8yWnZjaWhzWlhRZ1pTQnZaaUJoTG5SaGMycy9MbWx1Y0hWMFVtVnhkV1Z6ZEhNL1AxdGRLWHRzWlhRZ2REMWhkMkZwZENCeVpXTnZjbVJVWVhOclNXNXdkWFJTWlhGMVpYTjBVM1JsY0NoN2NtVnhkV1Z6ZERwbExITmxjM05wYjI1VGRHRjBaVHB6ZlNrN2FXWW9jejEwTG5ObGMzTnBiMjVUZEdGMFpTd2hkQzVoWTJObGNIUmxaQ2xqYjI1MGFXNTFaVHRzWlhRZ2NqMWhkMkZwZENCbGJXbDBVbVZqYjNKa1pXUlVZWE5yU1c1d2RYUlNaWEYxWlhOMFUzUmxjQ2g3Y0dGeVpXNTBWM0pwZEdGaWJHVTZhUzV3WVhKbGJuUlhjbWwwWVdKc1pTeHlaWEYxWlhOME9uUXVjbVZ4ZFdWemRDeHpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREcHZMSE5sYzNOcGIyNVRkR0YwWlRwemZTazdiejF5TG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhNOWNpNXpaWE56YVc5dVUzUmhkR1Y5Wm05eUtHeGxkQ0JsSUc5bUlHRXVkR0Z6YXo4dVlXZGxiblJTWlhGMVpYTjBjejgvVzEwcGUyeGxkQ0IwUFdGM1lXbDBJR0Z3Y0d4NVZHRnphMEZuWlc1MFVtVnhkV1Z6ZENoN0xpNHVaU3h2ZDI1bGNrbGtPbVV1ZEdGemEwbGtmU3g3Y0dGeVpXNTBWM0pwZEdGaWJHVTZhUzV3WVhKbGJuUlhjbWwwWVdKc1pTeHpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREcHZMSE5sYzNOcGIyNVRkR0YwWlRwemZTazdiejEwTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhNOWRDNXpaWE56YVc5dVUzUmhkR1Y5Wm05eUtHeGxkQ0JsSUc5bUlHRXVkR0Z6YXo4dVlYVjBhRzl5YVhwaGRHbHZia1YyWlc1MGN6OC9XMTBwZTJsbUtDRmhkMkZwZENCaFkyTmxjSFJVWVhOclFYVjBhRzl5YVhwaGRHbHZia1YyWlc1MFUzUmxjQ2g3WkdWc2FYWmxjbms2WlN4elpYTnphVzl1VTNSaGRHVTZjMzBwS1dOdmJuUnBiblZsTzJ4bGRDQjBQV0YzWVdsMElISjFibEJ5YjNoNVUzVmlZV2RsYm5SRmRtVnVkRk4wWlhBb2UyaHZiMnRRWVhsc2IyRmtPbVV1YUc5dmExQmhlV3h2WVdRc2NHRnlaVzUwVjNKcGRHRmliR1U2YVM1d1lYSmxiblJYY21sMFlXSnNaU3h6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHB2TEhObGMzTnBiMjVUZEdGMFpUcHpmU2s3YnoxMExuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMExITTlkQzV6WlhOemFXOXVVM1JoZEdWOUtHRXVkR0Z6YXo4dWRtbGxkM00vTG14bGJtZDBhRDgvTUNrK01DWW1LSE05WVhkaGFYUWdjbVZqYjNKa1ZHVnliV2x1WVd4VVlYTnJWbWxsZDNOVGRHVndLSHR6WlhOemFXOXVVM1JoZEdVNmN5eDJhV1YzY3pwaExuUmhjMnMvTG5acFpYZHpQejliWFgwcEtUdHNaWFFnWXoxYlhTeHNQVnRkTzJadmNpaHNaWFJiWlN4MFhXOW1JR2t1WkdWc2FYWmxjbmt1Y0dGNWJHOWhaSE11Wlc1MGNtbGxjeWdwS1h0c1pYUWdiajE3TGk0dWRIMDdhV1lvWkdWc1pYUmxJRzR1ZEdGemF5eFBZbXBsWTNRdWEyVjVjeWh1S1M1c1pXNW5kR2c5UFQwd0tXTnZiblJwYm5WbE8yeGxkQ0J5UFdNdWJHVnVaM1JvTzJNdWNIVnphQ2h1S1R0bWIzSW9iR1YwSUhRZ2IyWWdhUzVrWld4cGRtVnllUzVrWld4cGRtVnllVTFsZEdGa1lYUmhQejliWFNsMExuQmhlV3h2WVdSSmJtUmxlRDA5UFdVbUptd3VjSFZ6YUNoN0xpNHVkQ3h3WVhsc2IyRmtTVzVrWlhnNmNuMHBmV3hsZENCMVBXTXViR1Z1WjNSb1BUMDlNRDkyYjJsa0lEQTZleTR1TG1rdVpHVnNhWFpsY25rc1pHVnNhWFpsY25sTlpYUmhaR0YwWVRwc0xteGxibWQwYUQwOVBUQS9kbTlwWkNBd09td3NjR0Y1Ykc5aFpITTZZMzA3Y21WMGRYSnVJSFU5UFQxMmIybGtJREEvZTJ0cGJtUTZZR052Ym5ScGJuVmxZQ3h5WlcxaGFXNWtaWEk2ZG05cFpDQXdMSE5sY21saGJHbDZaV1JEYjI1MFpYaDBPbThzYzJWemMybHZibE4wWVhSbE9uTjlPbk11YUdGelVISnZlSGxKYm5CMWRGSmxjWFZsYzNSelAyRjNZV2wwSUhKdmRYUmxVSEp2ZUdsbFpFUmxiR2wyWlhKVGRHVndLSHRrWld4cGRtVnllVHAxTEhCaGNtVnVkRmR5YVhSaFlteGxPbWt1Y0dGeVpXNTBWM0pwZEdGaWJHVXNjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZieXh6WlhOemFXOXVVM1JoZEdVNmMzMHBPbnRyYVc1a09tQmpiMjUwYVc1MVpXQXNjbVZ0WVdsdVpHVnlPblVzYzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2Ynl4elpYTnphVzl1VTNSaGRHVTZjMzE5Wlhod2IzSjBlM0p2ZFhSbFJHVnNhWFpsY2xSdlEyaHBiR1J5Wlc1OU95SXNJbU52Ym5OMElFVldSVjlRVlVKTVNVTmZVazlWVkVWZlVGSkZSa2xZWDBWT1ZqMWdSVlpGWDFCVlFreEpRMTlTVDFWVVJWOVFVa1ZHU1ZoZ08yWjFibU4wYVc5dUlHNXZjbTFoYkdsNlpWQjFZbXhwWTFKdmRYUmxVSEpsWm1sNEtHVXBlMnhsZENCMFBXVS9MblJ5YVcwb0tUdHBaaWgwUFQwOWRtOXBaQ0F3Zkh4MExteGxibWQwYUQwOVBUQXBjbVYwZFhKdU8yeGxkQ0J1UFNoMExuTjBZWEowYzFkcGRHZ29ZQzlnS1Q5ME9tQXZKSHQwZldBcExuSmxjR3hoWTJVb0wxeGNMeXNrTHl4Z1lDazdjbVYwZFhKdUlHNHViR1Z1WjNSb1BUMDlNRDkyYjJsa0lEQTZibjFsZUhCdmNuUjdSVlpGWDFCVlFreEpRMTlTVDFWVVJWOVFVa1ZHU1ZoZlJVNVdMRzV2Y20xaGJHbDZaVkIxWW14cFkxSnZkWFJsVUhKbFptbDRmVHNpTENKcGJYQnZjblI3UlZaRlgxQlZRa3hKUTE5U1QxVlVSVjlRVWtWR1NWaGZSVTVXTEc1dmNtMWhiR2w2WlZCMVlteHBZMUp2ZFhSbFVISmxabWw0ZldaeWIyMWNJaU56YUdGeVpXUXZjSFZpYkdsakxYSnZkWFJsTFhCeVpXWnBlQzVxYzF3aU8yTnZibk4wSUZaRlVrTkZURjlRVWs5VVJVTlVTVTlPWDBKWlVFRlRVMTlSVlVWU1dUMWdlQzEyWlhKalpXd3RjSEp2ZEdWamRHbHZiaTFpZVhCaGMzTmdMRlpGVWtORlRGOURRVXhNUWtGRFMxOUlUMU5VWDBWT1ZsTTlXMkJXUlZKRFJVeGZWVkpNWUN4Z1ZrVlNRMFZNWDBKU1FVNURTRjlWVWt4Z0xHQldSVkpEUlV4ZlVGSlBTa1ZEVkY5UVVrOUVWVU5VU1U5T1gxVlNUR0JkTzJaMWJtTjBhVzl1SUhKbGMyOXNkbVZXWlhKalpXeFFjbTlrZFdOMGFXOXVRMkZzYkdKaFkydENZWE5sVlhKc0tDbDdjbVYwZFhKdUlIQnliMk5sYzNNdVpXNTJMbFpGVWtORlRGOUZUbFk5UFQxZ2NISnZaSFZqZEdsdmJtQW1KbkJ5YjJObGMzTXVaVzUyTGxaRlVrTkZURjlRVWs5S1JVTlVYMUJTVDBSVlExUkpUMDVmVlZKTVAyQm9kSFJ3Y3pvdkx5UjdjSEp2WTJWemN5NWxibll1VmtWU1EwVk1YMUJTVDBwRlExUmZVRkpQUkZWRFZFbFBUbDlWVWt4OVlEcHVkV3hzZldaMWJtTjBhVzl1SUhKbGMyOXNkbVZYYjNKclpteHZkME5oYkd4aVlXTnJRbUZ6WlZWeWJDaHVLWHRzWlhRZ2NqMXdjbTlqWlhOekxtVnVkaTVYVDFKTFJreFBWMTlNVDBOQlRGOUNRVk5GWDFWU1REOHVkSEpwYlNncGZIeDJiMmxrSURBc2FUMG9jbVZ6YjJ4MlpWWmxjbU5sYkZCeWIyUjFZM1JwYjI1RFlXeHNZbUZqYTBKaGMyVlZjbXdvS1Q4L2NqOC9iaWt1Y21Wd2JHRmpaU2d2WEZ3dkpDOHNZR0FwTEdFOWJtOXliV0ZzYVhwbFVIVmliR2xqVW05MWRHVlFjbVZtYVhnb2NISnZZMlZ6Y3k1bGJuWmJSVlpGWDFCVlFreEpRMTlTVDFWVVJWOVFVa1ZHU1ZoZlJVNVdYU2s3Y21WMGRYSnVJR0U5UFQxMmIybGtJREEvYVRwZ0pIdHBmU1I3WVgxZ2ZXWjFibU4wYVc5dUlHTnlaV0YwWlZkdmNtdG1iRzkzUTJGc2JHSmhZMnRWY213b1pTeDBLWHRzWlhRZ2NqMXVaWGNnVlZKTUtHQWtlMlV1Y21Wd2JHRmpaU2d2WEZ3dkpDOHNZR0FwZlNSN2RIMWdLU3hwUFhCeWIyTmxjM011Wlc1MkxsWkZVa05GVEY5QlZWUlBUVUZVU1U5T1gwSlpVRUZUVTE5VFJVTlNSVlEvTG5SeWFXMG9LVHR5WlhSMWNtNGdhU1ltY2k1elpXRnlZMmhRWVhKaGJYTXVjMlYwS0ZaRlVrTkZURjlRVWs5VVJVTlVTVTlPWDBKWlVFRlRVMTlSVlVWU1dTeHBLU3h5TG5SdlUzUnlhVzVuS0NsOVpuVnVZM1JwYjI0Z1kzSmxZWFJsVW1WdGIzUmxWR0Z6YTBsdWNIVjBRMkZzYkdKaFkydFZjbXdvWlN4MEtYdHNaWFFnYVQxdVpYY2dWVkpNS0dBa2UyVXVjbVZ3YkdGalpTZ3ZYRnd2SkM4c1lHQXBmU1I3ZEgxZ0tTeGhQWEJ5YjJObGMzTXVaVzUyTGxaRlVrTkZURjlCVlZSUFRVRlVTVTlPWDBKWlVFRlRVMTlUUlVOU1JWUS9MblJ5YVcwb0tTeHZQVlpGVWtORlRGOURRVXhNUWtGRFMxOUlUMU5VWDBWT1ZsTXVjMjl0WlNobFBUNXdjbTlqWlhOekxtVnVkbHRsWFQ4dWRISnBiU2dwTG5SdlRHOTNaWEpEWVhObEtDazlQVDFwTG1odmMzUnVZVzFsTG5SdlRHOTNaWEpEWVhObEtDa3BPM0psZEhWeWJpQmhKaVpwTG5CeWIzUnZZMjlzUFQwOVlHaDBkSEJ6T21BbUptOG1KbWt1YzJWaGNtTm9VR0Z5WVcxekxuTmxkQ2hXUlZKRFJVeGZVRkpQVkVWRFZFbFBUbDlDV1ZCQlUxTmZVVlZGVWxrc1lTa3NhUzUwYjFOMGNtbHVaeWdwZldWNGNHOXlkSHRqY21WaGRHVlNaVzF2ZEdWVVlYTnJTVzV3ZFhSRFlXeHNZbUZqYTFWeWJDeGpjbVZoZEdWWGIzSnJabXh2ZDBOaGJHeGlZV05yVlhKc0xISmxjMjlzZG1WV1pYSmpaV3hRY205a2RXTjBhVzl1UTJGc2JHSmhZMnRDWVhObFZYSnNMSEpsYzI5c2RtVlhiM0pyWm14dmQwTmhiR3hpWVdOclFtRnpaVlZ5YkgwN0lpd2lMeW9xWDE5cGJuUmxjbTVoYkY5M2IzSnJabXh2ZDNON1hDSnpkR1Z3YzF3aU9udGNJbVJwYzNRdmMzSmpMMlY0WldOMWRHbHZiaTkwWVhOcmN5OXdZWEpsYm5RdlpHVnNaV2RoZEdVdWFuTmNJanA3WENKaFkydHViM2RzWldSblpVUmxiR1ZuWVhSbFpGUmhjMnR6VTNSbGNGd2lPbnRjSW5OMFpYQkpaRndpT2x3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dllXTnJibTkzYkdWa1oyVkVaV3hsWjJGMFpXUlVZWE5yYzFOMFpYQmNJbjE5ZlgwcUx6dGNibVY0Y0c5eWRDQjJZWElnWVdOcmJtOTNiR1ZrWjJWRVpXeGxaMkYwWldSVVlYTnJjMU4wWlhBZ1BTQm5iRzlpWVd4VWFHbHpXMU41YldKdmJDNW1iM0lvWENKWFQxSkxSa3hQVjE5VlUwVmZVMVJGVUZ3aUtWMG9YQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTloWTJ0dWIzZHNaV1JuWlVSbGJHVm5ZWFJsWkZSaGMydHpVM1JsY0Z3aUtUdGNiaUlzSWk4cUtsOWZhVzUwWlhKdVlXeGZkMjl5YTJac2IzZHplMXdpYzNSbGNITmNJanA3WENKa2FYTjBMM055WXk5bGVHVmpkWFJwYjI0dmRIVnliaTFqYjI1MGNtOXNMWEJ5YjNSdlkyOXNMbXB6WENJNmUxd2ljMlZ1WkZSMWNtNURiMjUwY205c1UzUmxjRndpT250Y0luTjBaWEJKWkZ3aU9sd2ljM1JsY0M4dlpYWmxRREF1TlRFdU1TOHZjMlZ1WkZSMWNtNURiMjUwY205c1UzUmxjRndpZlgxOWZTb3ZPMXh1Wlhod2IzSjBJSFpoY2lCelpXNWtWSFZ5YmtOdmJuUnliMnhUZEdWd0lEMGdaMnh2WW1Gc1ZHaHBjMXRUZVcxaWIyd3VabTl5S0Z3aVYwOVNTMFpNVDFkZlZWTkZYMU5VUlZCY0lpbGRLRndpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2YzJWdVpGUjFjbTVEYjI1MGNtOXNVM1JsY0Z3aUtUdGNiaUlzSW1OdmJuTjBJRUZIUlU1VVgwaEJUa1JNUlZOZlUxUkJWRVZmUzBWWlBXQmxkbVV1WVdkbGJuUXVhR0Z1Wkd4bGMyQTdaWGh3YjNKMGUwRkhSVTVVWDBoQlRrUk1SVk5mVTFSQlZFVmZTMFZaZlRzaUxDSnBiWEJ2Y25SN1FVZEZUbFJmU0VGT1JFeEZVMTlUVkVGVVJWOUxSVmw5Wm5KdmJWd2lJM04xWW1GblpXNTBjeTlvWVc1a2JHVnpMM04wWVhSbExXdGxlUzVxYzF3aU8yWjFibU4wYVc5dUlISmxZV1JCWjJWdWRFaGhibVJzWlhNb2RDbDdiR1YwSUc0OWREOHVXMEZIUlU1VVgwaEJUa1JNUlZOZlUxUkJWRVZmUzBWWlhUdHBaaWh1UFQwOWRtOXBaQ0F3S1hKbGRIVnlibHRkTzJ4bGRDQnlQVzR1YUdGdVpHeGxjenR5WlhSMWNtNGdRWEp5WVhrdWFYTkJjbkpoZVNoeUtUOXlPbHRkZldaMWJtTjBhVzl1SUcxbGNtZGxWR0Z6YTA5M2JtVmtRV2RsYm5SSVlXNWtiR1Z6U1c1MGIxUjFjbTVUZEdGMFpTaDBLWHRzWlhRZ2JqMXVaWGNnVFdGd0tISmxZV1JCWjJWdWRFaGhibVJzWlhNb2RDNWlZWE5sVTNSaGRHVXBMbTFoY0NobFBUNWJaUzVwWkdWdWRHbDBlUzVwWkN4bFhTa3BMSEk5Ym1WM0lFMWhjQ2h5WldGa1FXZGxiblJJWVc1a2JHVnpLSFF1WkhKcGRtVnlVM1JoZEdVcExtMWhjQ2hsUFQ1YlpTNXBaR1Z1ZEdsMGVTNXBaQ3hsWFNrcExHazlibVYzSUZObGRDaGJMaTR1Ymk1clpYbHpLQ2tzTGk0dWNpNXJaWGx6S0NsZEtUdG1iM0lvYkdWMElHVWdiMllnYVNsb1lXNWtiR1Z6UlhGMVlXd29iaTVuWlhRb1pTa3NjaTVuWlhRb1pTa3BKaVpwTG1SbGJHVjBaU2hsS1R0cFppaHBMbk5wZW1VOVBUMHdLWEpsZEhWeWJpQjBMblIxY201VGRHRjBaVHRzWlhRZ1lUMWJYVHRtYjNJb2JHVjBJR1VnYjJZZ2NtVmhaRUZuWlc1MFNHRnVaR3hsY3loMExuUjFjbTVUZEdGMFpTa3BlMmxtS0NGcExtaGhjeWhsTG1sa1pXNTBhWFI1TG1sa0tTbDdZUzV3ZFhOb0tHVXBPMk52Ym5ScGJuVmxmV3hsZENCMFBYSXVaMlYwS0dVdWFXUmxiblJwZEhrdWFXUXBPMmxtS0NGb1lXNWtiR1Z6UlhGMVlXd29aU3h1TG1kbGRDaGxMbWxrWlc1MGFYUjVMbWxrS1NrbUppRm9ZVzVrYkdWelJYRjFZV3dvWlN4MEtTbDBhSEp2ZHlCRmNuSnZjaWhnUVdkbGJuUWdhR0Z1Wkd4bElGd2lKSHRsTG1sa1pXNTBhWFI1TG1sa2ZWd2lJR05vWVc1blpXUWdiM2R1WlhKemFHbHdJSGRvYVd4bElHbDBjeUIwZFhKdUlIZGhjeUJ5ZFc1dWFXNW5MbUFwTzNRaFBUMTJiMmxrSURBbUptRXVjSFZ6YUNoMEtTeHBMbVJsYkdWMFpTaGxMbWxrWlc1MGFYUjVMbWxrS1gxbWIzSW9iR1YwSUdVZ2IyWWdhU2w3YkdWMElIUTljaTVuWlhRb1pTazdkQ0U5UFhadmFXUWdNQ1ltWVM1d2RYTm9LSFFwZlhKbGRIVnlibnN1TGk1MExuUjFjbTVUZEdGMFpTeGJRVWRGVGxSZlNFRk9SRXhGVTE5VFZFRlVSVjlMUlZsZE9udG9ZVzVrYkdWek9tRjlmWDFtZFc1amRHbHZiaUJvWVc1a2JHVnpSWEYxWVd3b1pTeDBLWHRwWmlobFBUMDlkQ2x5WlhSMWNtNGhNRHRwWmlobFBUMDlkbTlwWkNBd2ZIeDBQVDA5ZG05cFpDQXdLWEpsZEhWeWJpRXhPMnhsZENCdVBVOWlhbVZqZEM1clpYbHpLR1VwTEhJOVQySnFaV04wTG10bGVYTW9kQ2s3Y21WMGRYSnVJRzR1YkdWdVozUm9QVDA5Y2k1c1pXNW5kR2dtSm00dVpYWmxjbmtvYmowK2RtRnNkV1Z6UlhGMVlXd29VbVZtYkdWamRDNW5aWFFvWlN4dUtTeFNaV1pzWldOMExtZGxkQ2gwTEc0cEtTbDlablZ1WTNScGIyNGdkbUZzZFdWelJYRjFZV3dvWlN4MEtYdHBaaWhsUFQwOWRDbHlaWFIxY200aE1EdHBaaWgwZVhCbGIyWWdaU0U5WUc5aWFtVmpkR0I4ZkNGbGZIeDBlWEJsYjJZZ2RDRTlZRzlpYW1WamRHQjhmQ0YwS1hKbGRIVnliaUV4TzJ4bGRDQnVQVTlpYW1WamRDNXJaWGx6S0dVcExISTlUMkpxWldOMExtdGxlWE1vZENrN2NtVjBkWEp1SUc0dWJHVnVaM1JvUFQwOWNpNXNaVzVuZEdnbUptNHVaWFpsY25rb2JqMCtkbUZzZFdWelJYRjFZV3dvVW1WbWJHVmpkQzVuWlhRb1pTeHVLU3hTWldac1pXTjBMbWRsZENoMExHNHBLU2w5Wm5WdVkzUnBiMjRnWm1sdVpGSjFibTVwYm1kQloyVnVkRWhoYm1Sc1pTaGxMSFFwZTNKbGRIVnliaUJ5WldGa1FXZGxiblJJWVc1a2JHVnpLR1VwTG1acGJtUW9aVDArWlM1d2FHRnpaVDA5UFdCeWRXNXVhVzVuWUNZbVpTNXZjR1Z5WVhScGIyNHVZMkZzYkVsa1BUMDlkQzVqWVd4c1NXUXBmV1oxYm1OMGFXOXVJR2x6VW1WemRXeDBRbTkxYm1SVWIxSjFibTVwYm1kSVlXNWtiR1VvWlN4MEtYdHlaWFIxY200Z2RDNXJhVzVrSVQwOVlITjFZbUZuWlc1MExYSmxjM1ZzZEdCOGZIUXViM0pwWjJsdVBUMDlZR1JwYzNCaGRHTm9ZSHg4ZEM1aVlXTnJaM0p2ZFc1a1ZHRnpheUU5UFhadmFXUWdNSHg4Wm1sdVpGSjFibTVwYm1kQloyVnVkRWhoYm1Sc1pTaGxMSHRqWVd4c1NXUTZkQzVqWVd4c1NXUjlLU0U5UFhadmFXUWdNSDFtZFc1amRHbHZiaUJwYzBsdVltOTRVM1ZpWVdkbGJuUlNaWE4xYkhSR2NtOXRVblZ1Ym1sdVowaGhibVJzWlNobExIUXBlM0psZEhWeWJpQm1hVzVrVW5WdWJtbHVaMEZuWlc1MFNHRnVaR3hsS0dVc2UyTmhiR3hKWkRwMExtTmhiR3hKWkgwcElUMDlkbTlwWkNBd2ZXVjRjRzl5ZEh0bWFXNWtVblZ1Ym1sdVowRm5aVzUwU0dGdVpHeGxMR2x6U1c1aWIzaFRkV0poWjJWdWRGSmxjM1ZzZEVaeWIyMVNkVzV1YVc1blNHRnVaR3hsTEdselVtVnpkV3gwUW05MWJtUlViMUoxYm01cGJtZElZVzVrYkdVc2JXVnlaMlZVWVhOclQzZHVaV1JCWjJWdWRFaGhibVJzWlhOSmJuUnZWSFZ5YmxOMFlYUmxmVHNpTENKamIyNXpkQ0JMUlZsZlVrVkhTVk5VVWxsZlIweFBRa0ZNWDB0RldUMVRlVzFpYjJ3dVptOXlLR0JsZG1VdVkyOXVkR1Y0ZEMxclpYa3RjbVZuYVhOMGNubGdLU3huYkc5aVlXeExaWGxTWldkcGMzUnllVU52Ym5SaGFXNWxjajFuYkc5aVlXeFVhR2x6TzJkc2IySmhiRXRsZVZKbFoybHpkSEo1UTI5dWRHRnBibVZ5VzB0RldWOVNSVWRKVTFSU1dWOUhURTlDUVV4ZlMwVlpYVDA5UFhadmFXUWdNQ1ltS0dkc2IySmhiRXRsZVZKbFoybHpkSEo1UTI5dWRHRnBibVZ5VzB0RldWOVNSVWRKVTFSU1dWOUhURTlDUVV4ZlMwVlpYVDF1WlhjZ1RXRndLVHRqYjI1emRDQnJaWGxTWldkcGMzUnllVDFuYkc5aVlXeExaWGxTWldkcGMzUnllVU52Ym5SaGFXNWxjbHRMUlZsZlVrVkhTVk5VVWxsZlIweFBRa0ZNWDB0RldWMDdkbUZ5SUVOdmJuUmxlSFJMWlhrOVkyeGhjM043Ym1GdFpUdGpiMlJsWXp0amIyNXpkSEoxWTNSdmNpaGxMSFE5ZTMwcGUzUm9hWE11Ym1GdFpUMWxMSFJvYVhNdVkyOWtaV005ZEM1amIyUmxZenRzWlhRZ2JqMXJaWGxTWldkcGMzUnllUzVuWlhRb1pTazdhV1lvYmlFOVBYWnZhV1FnTUNZbWJpNWpiMlJsWXowOVBYWnZhV1FnTUNFOUtIUm9hWE11WTI5a1pXTTlQVDEyYjJsa0lEQXBLWFJvY205M0lFVnljbTl5S0dCRGIyNTBaWGgwUzJWNUlHNWhiV1VnWTI5c2JHbHphVzl1T2lCY0lpUjdaWDFjSWlCcGN5QmhiSEpsWVdSNUlISmxaMmx6ZEdWeVpXUWdKSHR1TG1OdlpHVmpQMkIzYVhSb1lEcGdkMmwwYUc5MWRHQjlJR0VnWTI5a1pXTXNJR0oxZENCaElHdGxlU0FrZTNSb2FYTXVZMjlrWldNL1lIZHBkR2hnT21CM2FYUm9iM1YwWUgwZ1lTQmpiMlJsWXlCcGN5QmlaV2x1WnlCeVpXZHBjM1JsY21Wa0lIVnVaR1Z5SUhSb1pTQnpZVzFsSUc1aGJXVXVJRlJvYVhNZ2MybHNaVzUwYkhrZ1luSmxZV3R6SUdOdmJuUmxlSFFnYzJWeWFXRnNhWHBoZEdsdmJpRGlnSlFnZFhObElHRWdaR2x6ZEdsdVkzUWdibUZ0WlM1Z0tUdHJaWGxTWldkcGMzUnllUzV6WlhRb1pTeDBhR2x6S1gxOU8yWjFibU4wYVc5dUlISmxjMjlzZG1WTFpYa29aU2w3Y21WMGRYSnVJR3RsZVZKbFoybHpkSEo1TG1kbGRDaGxLWDFsZUhCdmNuUjdRMjl1ZEdWNGRFdGxlU3h5WlhOdmJIWmxTMlY1ZlRzaUxDSmpiMjV6ZENCRFNFRk9Ua1ZNWDBOUFRsUkZXRlJmUzBWWlgwNUJUVVU5WUdWMlpTNWphR0Z1Ym1Wc1lDeFRSVk5UU1U5T1gwTkJURXhDUVVOTFgwTlBUbFJGV0ZSZlMwVlpYMDVCVFVVOVlHVjJaUzV6WlhOemFXOXVRMkZzYkdKaFkydGdPMlY0Y0c5eWRIdERTRUZPVGtWTVgwTlBUbFJGV0ZSZlMwVlpYMDVCVFVVc1UwVlRVMGxQVGw5RFFVeE1Ra0ZEUzE5RFQwNVVSVmhVWDB0RldWOU9RVTFGZlRzaUxDSnBiWEJ2Y25SN1EyOXVkR1Y0ZEV0bGVYMW1jbTl0WENJalkyOXVkR1Y0ZEM5clpYa3Vhbk5jSWp0cGJYQnZjblI3VTBWVFUwbFBUbDlEUVV4TVFrRkRTMTlEVDA1VVJWaFVYMHRGV1Y5T1FVMUZmV1p5YjIxY0lpTmpiMjUwWlhoMEwydGxlUzF1WVcxbGN5NXFjMXdpTzJOdmJuTjBJRUYxZEdoTFpYazlibVYzSUVOdmJuUmxlSFJMWlhrb1lHVjJaUzVoZFhSb1lDa3NTVzVwZEdsaGRHOXlRWFYwYUV0bGVUMXVaWGNnUTI5dWRHVjRkRXRsZVNoZ1pYWmxMbWx1YVhScFlYUnZja0YxZEdoZ0tTeFRaWE56YVc5dVNXUkxaWGs5Ym1WM0lFTnZiblJsZUhSTFpYa29ZR1YyWlM1elpYTnphVzl1U1dSZ0tTeERiMjUwYVc1MVlYUnBiMjVVYjJ0bGJrdGxlVDF1WlhjZ1EyOXVkR1Y0ZEV0bGVTaGdaWFpsTG1OdmJuUnBiblZoZEdsdmJsUnZhMlZ1WUNrc1EyaGhibTVsYkZKbGNYVmxjM1JKWkV0bGVUMXVaWGNnUTI5dWRHVjRkRXRsZVNoZ1pYWmxMbU5vWVc1dVpXeFNaWEYxWlhOMFNXUmdLU3hNYjJOaGJFUmxkbEpsY1hWbGMzUkxaWGs5Ym1WM0lFTnZiblJsZUhSTFpYa29ZR1YyWlM1cGJuUmxjbTVoYkM1c2IyTmhiRVJsZGxKbGNYVmxjM1JnS1N4VFkyaGxaSFZzWlVsa1MyVjVQVzVsZHlCRGIyNTBaWGgwUzJWNUtHQmxkbVV1YzJOb1pXUjFiR1ZKWkdBcExFTm9ZVzV1Wld4RVpXeHBkbVZ5ZVV0bGVUMXVaWGNnUTI5dWRHVjRkRXRsZVNoZ1pYWmxMbU5vWVc1dVpXeEVaV3hwZG1WeWVXQXBMRlIxY201VVlYTnJSR1ZzYVhabGNubExaWGs5Ym1WM0lFTnZiblJsZUhSTFpYa29ZR1YyWlM1MGRYSnVWR0Z6YTBSbGJHbDJaWEo1WUNrc1ZIVnlibFJoYzJ0VGRHRjBaVXRsZVQxdVpYY2dRMjl1ZEdWNGRFdGxlU2hnWlhabExuUjFjbTVVWVhOclUzUmhkR1ZnS1N4QlkzUnBkbVZEYUdGdWJtVnNSR1ZzYVhabGNtbGxjMHRsZVQxdVpYY2dRMjl1ZEdWNGRFdGxlU2hnWlhabExtRmpkR2wyWlVOb1lXNXVaV3hFWld4cGRtVnlhV1Z6WUNrc1EyaGhibTVsYkVsdWMzUnlkVzFsYm5SaGRHbHZia3RsZVQxdVpYY2dRMjl1ZEdWNGRFdGxlU2hnWlhabExtTm9ZVzV1Wld4SmJuTjBjblZ0Wlc1MFlYUnBiMjVnS1N4TmIyUmxTMlY1UFc1bGR5QkRiMjUwWlhoMFMyVjVLR0JsZG1VdWJXOWtaV0FwTEZCaGNtVnVkRk5sYzNOcGIyNUxaWGs5Ym1WM0lFTnZiblJsZUhSTFpYa29ZR1YyWlM1d1lYSmxiblJUWlhOemFXOXVZQ2tzVUdGeVpXNTBWSEpoWTJWRGIyNTBaWGgwUzJWNVBXNWxkeUJEYjI1MFpYaDBTMlY1S0dCbGRtVXVjR0Z5Wlc1MFZISmhZMlZEYjI1MFpYaDBZQ2tzVTJWemMybHZibFJ5WVdObFUyVmxaRXRsZVQxdVpYY2dRMjl1ZEdWNGRFdGxlU2hnWlhabExuTmxjM05wYjI1VWNtRmpaVk5sWldSZ0tTeFBkR1ZzVkhKaFkyVkZibUZpYkdWa1MyVjVQVzVsZHlCRGIyNTBaWGgwUzJWNUtHQmxkbVV1YjNSbGJGUnlZV05sUlc1aFlteGxaR0FwTEVOaGNHRmlhV3hwZEdsbGMwdGxlVDF1WlhjZ1EyOXVkR1Y0ZEV0bGVTaGdaWFpsTG1OaGNHRmlhV3hwZEdsbGMyQXBMRUZqZEdsMmFYUjVUMkp6WlhKMlpYSkxaWGs5Ym1WM0lFTnZiblJsZUhSTFpYa29ZR1YyWlM1aFkzUnBkbWwwZVU5aWMyVnlkbVZ5WUNrc1UyVnpjMmx2YmtOaGJHeGlZV05yUzJWNVBXNWxkeUJEYjI1MFpYaDBTMlY1S0ZORlUxTkpUMDVmUTBGTVRFSkJRMHRmUTA5T1ZFVllWRjlMUlZsZlRrRk5SU2tzVTJWemMybHZia3RsZVQxdVpYY2dRMjl1ZEdWNGRFdGxlU2hnWlhabExuTmxjM05wYjI1Z0tTeFRZVzVrWW05NFMyVjVQVzVsZHlCRGIyNTBaWGgwUzJWNUtHQmxkbVV1YzJGdVpHSnZlR0FwTEVoaGJtUnNaVVYyWlc1MFMyVjVQVzVsZHlCRGIyNTBaWGgwUzJWNUtHQmxkbVV1YVc1MFpYSnVZV3d1YUdGdVpHeGxSWFpsYm5SZ0tTeFRaWE56YVc5dVJIbHVZVzFwWTAxdlpHVnNVbVZtWlhKbGJtTmxTMlY1UFc1bGR5QkRiMjUwWlhoMFMyVjVLR0JsZG1VdWMyVnpjMmx2YmtSNWJtRnRhV05OYjJSbGJGSmxabVZ5Wlc1alpXQXBMRlIxY201RWVXNWhiV2xqVFc5a1pXeFNaV1psY21WdVkyVkxaWGs5Ym1WM0lFTnZiblJsZUhSTFpYa29ZR1YyWlM1MGRYSnVSSGx1WVcxcFkwMXZaR1ZzVW1WbVpYSmxibU5sWUNrc1VuVnVkR2x0WlUxdlpHVnNUV1YwWVdSaGRHRkRZV05vWlV0bGVUMXVaWGNnUTI5dWRHVjRkRXRsZVNoZ1pYWmxMbkoxYm5ScGJXVk5iMlJsYkUxbGRHRmtZWFJoUTJGamFHVmdLU3hNYVhabFUzUmxjRVI1Ym1GdGFXTk5iMlJsYkZObGJHVmpkR2x2Ymt0",
	"bGVUMXVaWGNnUTI5dWRHVjRkRXRsZVNoZ1pYWmxMbXhwZG1WVGRHVndSSGx1WVcxcFkwMXZaR1ZzVTJWc1pXTjBhVzl1WUNrc1UyVnpjMmx2YmtSNWJtRnRhV05VYjI5c1RXVjBZV1JoZEdGTFpYazlibVYzSUVOdmJuUmxlSFJMWlhrb1lHVjJaUzV6WlhOemFXOXVSSGx1WVcxcFkxUnZiMnhOWlhSaFpHRjBZV0FwTEZObGMzTnBiMjVFZVc1aGJXbGpWRzl2YkZKMWJuUnBiV1ZTWlhacGMybHZia3RsZVQxdVpYY2dRMjl1ZEdWNGRFdGxlU2hnWlhabExuTmxjM05wYjI1RWVXNWhiV2xqVkc5dmJGSjFiblJwYldWU1pYWnBjMmx2Ym1BcExGUjFjbTVFZVc1aGJXbGpWRzl2YkUxbGRHRmtZWFJoUzJWNVBXNWxkeUJEYjI1MFpYaDBTMlY1S0dCbGRtVXVkSFZ5YmtSNWJtRnRhV05VYjI5c1RXVjBZV1JoZEdGZ0tTeFVkWEp1VFdWdGIzSjVURzlqYTNOTFpYazlibVYzSUVOdmJuUmxlSFJMWlhrb1lHVjJaUzV0WlcxdmNua3VkSFZ5Ymt4dlkydHpZQ2tzVUhKbGNHRnlaV1JOWlcxdmNubFFjbVZoYldKc1pVdGxlVDF1WlhjZ1EyOXVkR1Y0ZEV0bGVTaGdaWFpsTG0xbGJXOXllUzV3Y21Wd1lYSmxaRkJ5WldGdFlteGxZQ2tzVUdWdVpHbHVaMDFsYlc5eWVVTnZiVzFwZEV0bGVUMXVaWGNnUTI5dWRHVjRkRXRsZVNoZ1pYWmxMbTFsYlc5eWVTNXdaVzVrYVc1blEyOXRiV2wwWUNrc1VISmxjR0Z5WldSTlpXMXZjbmxEYjIxd1lXTjBhVzl1UzJWNVBXNWxkeUJEYjI1MFpYaDBTMlY1S0dCbGRtVXViV1Z0YjNKNUxuQnlaWEJoY21Wa1EyOXRjR0ZqZEdsdmJtQXBMRk4wWlhCRWVXNWhiV2xqVkc5dmJFMWxkR0ZrWVhSaFMyVjVQVzVsZHlCRGIyNTBaWGgwUzJWNUtHQmxkbVV1YzNSbGNFUjVibUZ0YVdOVWIyOXNUV1YwWVdSaGRHRmdLU3hUWlhOemFXOXVSSGx1WVcxcFkxTjFZbUZuWlc1MFUyVnNaV04wYVc5dWMwdGxlVDF1WlhjZ1EyOXVkR1Y0ZEV0bGVTaGdaWFpsTG5ObGMzTnBiMjVFZVc1aGJXbGpVM1ZpWVdkbGJuUlRaV3hsWTNScGIyNXpZQ2tzVkhWeWJrUjVibUZ0YVdOVGRXSmhaMlZ1ZEZObGJHVmpkR2x2Ym5OTFpYazlibVYzSUVOdmJuUmxlSFJMWlhrb1lHVjJaUzUwZFhKdVJIbHVZVzFwWTFOMVltRm5aVzUwVTJWc1pXTjBhVzl1YzJBcExGTmxjM05wYjI1RWVXNWhiV2xqVTNWaVlXZGxiblJTZFc1MGFXMWxVbVYyYVhOcGIyNUxaWGs5Ym1WM0lFTnZiblJsZUhSTFpYa29ZR1YyWlM1elpYTnphVzl1UkhsdVlXMXBZMU4xWW1GblpXNTBVblZ1ZEdsdFpWSmxkbWx6YVc5dVlDa3NSSGx1WVcxcFkxTjFZbUZuWlc1MFFXZGxiblJEYjI1bWFXZExaWGs5Ym1WM0lFTnZiblJsZUhSTFpYa29ZR1YyWlM1a2VXNWhiV2xqVTNWaVlXZGxiblJCWjJWdWRFTnZibVpwWjJBcExFUjVibUZ0YVdOVGEybHNiRTFoYm1sbVpYTjBTMlY1UFc1bGR5QkRiMjUwWlhoMFMyVjVLR0JsZG1VdVpIbHVZVzFwWTFOcmFXeHNUV0Z1YVdabGMzUmdLU3hUWlhOemFXOXVSSGx1WVcxcFkwbHVjM1J5ZFdOMGFXOXVjMHRsZVQxdVpYY2dRMjl1ZEdWNGRFdGxlU2hnWlhabExuTmxjM05wYjI1RWVXNWhiV2xqU1c1emRISjFZM1JwYjI1ellDa3NWSFZ5YmtSNWJtRnRhV05KYm5OMGNuVmpkR2x2Ym5OTFpYazlibVYzSUVOdmJuUmxlSFJMWlhrb1lHVjJaUzUwZFhKdVJIbHVZVzFwWTBsdWMzUnlkV04wYVc5dWMyQXBMRVI1Ym1GdGFXTkpibk4wY25WamRHbHZibEpsYzI5c2RtVk5aWE56WVdkbGMwdGxlVDF1WlhjZ1EyOXVkR1Y0ZEV0bGVTaGdaWFpsTG1SNWJtRnRhV05KYm5OMGNuVmpkR2x2YmxKbGMyOXNkbVZOWlhOellXZGxjMkFwTEZCbGJtUnBibWRFZVc1aGJXbGpTVzV6ZEhKMVkzUnBiMjVWYzJWeVRXVnpjMkZuWlhOTFpYazlibVYzSUVOdmJuUmxlSFJMWlhrb1lHVjJaUzV3Wlc1a2FXNW5SSGx1WVcxcFkwbHVjM1J5ZFdOMGFXOXVWWE5sY2sxbGMzTmhaMlZ6WUNrN1pYaHdiM0owZTBGamRHbDJaVU5vWVc1dVpXeEVaV3hwZG1WeWFXVnpTMlY1TEVGamRHbDJhWFI1VDJKelpYSjJaWEpMWlhrc1FYVjBhRXRsZVN4RFlYQmhZbWxzYVhScFpYTkxaWGtzUTJoaGJtNWxiRVJsYkdsMlpYSjVTMlY1TEVOb1lXNXVaV3hKYm5OMGNuVnRaVzUwWVhScGIyNUxaWGtzUTJoaGJtNWxiRkpsY1hWbGMzUkpaRXRsZVN4RGIyNTBhVzUxWVhScGIyNVViMnRsYmt0bGVTeEVlVzVoYldsalNXNXpkSEoxWTNScGIyNVNaWE52YkhabFRXVnpjMkZuWlhOTFpYa3NSSGx1WVcxcFkxTnJhV3hzVFdGdWFXWmxjM1JMWlhrc1JIbHVZVzFwWTFOMVltRm5aVzUwUVdkbGJuUkRiMjVtYVdkTFpYa3NTR0Z1Wkd4bFJYWmxiblJMWlhrc1NXNXBkR2xoZEc5eVFYVjBhRXRsZVN4TWFYWmxVM1JsY0VSNWJtRnRhV05OYjJSbGJGTmxiR1ZqZEdsdmJrdGxlU3hNYjJOaGJFUmxkbEpsY1hWbGMzUkxaWGtzVFc5a1pVdGxlU3hQZEdWc1ZISmhZMlZGYm1GaWJHVmtTMlY1TEZCaGNtVnVkRk5sYzNOcGIyNUxaWGtzVUdGeVpXNTBWSEpoWTJWRGIyNTBaWGgwUzJWNUxGQmxibVJwYm1kRWVXNWhiV2xqU1c1emRISjFZM1JwYjI1VmMyVnlUV1Z6YzJGblpYTkxaWGtzVUdWdVpHbHVaMDFsYlc5eWVVTnZiVzFwZEV0bGVTeFFjbVZ3WVhKbFpFMWxiVzl5ZVVOdmJYQmhZM1JwYjI1TFpYa3NVSEpsY0dGeVpXUk5aVzF2Y25sUWNtVmhiV0pzWlV0bGVTeFNkVzUwYVcxbFRXOWtaV3hOWlhSaFpHRjBZVU5oWTJobFMyVjVMRk5oYm1SaWIzaExaWGtzVTJOb1pXUjFiR1ZKWkV0bGVTeFRaWE56YVc5dVEyRnNiR0poWTJ0TFpYa3NVMlZ6YzJsdmJrUjVibUZ0YVdOSmJuTjBjblZqZEdsdmJuTkxaWGtzVTJWemMybHZia1I1Ym1GdGFXTk5iMlJsYkZKbFptVnlaVzVqWlV0bGVTeFRaWE56YVc5dVJIbHVZVzFwWTFOMVltRm5aVzUwVW5WdWRHbHRaVkpsZG1semFXOXVTMlY1TEZObGMzTnBiMjVFZVc1aGJXbGpVM1ZpWVdkbGJuUlRaV3hsWTNScGIyNXpTMlY1TEZObGMzTnBiMjVFZVc1aGJXbGpWRzl2YkUxbGRHRmtZWFJoUzJWNUxGTmxjM05wYjI1RWVXNWhiV2xqVkc5dmJGSjFiblJwYldWU1pYWnBjMmx2Ymt0bGVTeFRaWE56YVc5dVNXUkxaWGtzVTJWemMybHZia3RsZVN4VFpYTnphVzl1VkhKaFkyVlRaV1ZrUzJWNUxGTjBaWEJFZVc1aGJXbGpWRzl2YkUxbGRHRmtZWFJoUzJWNUxGUjFjbTVFZVc1aGJXbGpTVzV6ZEhKMVkzUnBiMjV6UzJWNUxGUjFjbTVFZVc1aGJXbGpUVzlrWld4U1pXWmxjbVZ1WTJWTFpYa3NWSFZ5YmtSNWJtRnRhV05UZFdKaFoyVnVkRk5sYkdWamRHbHZibk5MWlhrc1ZIVnlia1I1Ym1GdGFXTlViMjlzVFdWMFlXUmhkR0ZMWlhrc1ZIVnliazFsYlc5eWVVeHZZMnR6UzJWNUxGUjFjbTVVWVhOclJHVnNhWFpsY25sTFpYa3NWSFZ5YmxSaGMydFRkR0YwWlV0bGVYMDdJaXdpYVcxd2IzSjBlMU5sYzNOcGIyNUVlVzVoYldsalRXOWtaV3hTWldabGNtVnVZMlZMWlhsOVpuSnZiVndpSTJOdmJuUmxlSFF2YTJWNWN5NXFjMXdpTzJaMWJtTjBhVzl1SUhCeVpYTmxjblpsVTJWeWFXRnNhWHBsWkZObGMzTnBiMjVFZVc1aGJXbGpUVzlrWld4VFpXeGxZM1JwYjI0b1pTeDBLWHRzWlhRZ2JqMTBXMU5sYzNOcGIyNUVlVzVoYldsalRXOWtaV3hTWldabGNtVnVZMlZMWlhrdWJtRnRaVjA3Y21WMGRYSnVJRzQ5UFQxMmIybGtJREEvWlRwN0xpNHVaU3hiVTJWemMybHZia1I1Ym1GdGFXTk5iMlJsYkZKbFptVnlaVzVqWlV0bGVTNXVZVzFsWFRwdWZYMWxlSEJ2Y25SN2NISmxjMlZ5ZG1WVFpYSnBZV3hwZW1Wa1UyVnpjMmx2YmtSNWJtRnRhV05OYjJSbGJGTmxiR1ZqZEdsdmJuMDdJaXdpTHlvcVgxOXBiblJsY201aGJGOTNiM0pyWm14dmQzTjdYQ0p6ZEdWd2Mxd2lPbnRjSW1ScGMzUXZjM0pqTDJWNFpXTjFkR2x2Ymk5allXNWpaV3d0WkdWelkyVnVaR0Z1ZEMxMGRYSnVjeTF6ZEdWd0xtcHpYQ0k2ZTF3aVkyRnVZMlZzUkdWelkyVnVaR0Z1ZEZSMWNtNXpVM1JsY0Z3aU9udGNJbk4wWlhCSlpGd2lPbHdpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2WTJGdVkyVnNSR1Z6WTJWdVpHRnVkRlIxY201elUzUmxjRndpZlgxOWZTb3ZPMXh1Wlhod2IzSjBJSFpoY2lCallXNWpaV3hFWlhOalpXNWtZVzUwVkhWeWJuTlRkR1Z3SUQwZ1oyeHZZbUZzVkdocGMxdFRlVzFpYjJ3dVptOXlLRndpVjA5U1MwWk1UMWRmVlZORlgxTlVSVkJjSWlsZEtGd2ljM1JsY0M4dlpYWmxRREF1TlRFdU1TOHZZMkZ1WTJWc1JHVnpZMlZ1WkdGdWRGUjFjbTV6VTNSbGNGd2lLVHRjYmlJc0lpOHFLbDlmYVc1MFpYSnVZV3hmZDI5eWEyWnNiM2R6ZTF3aWMzUmxjSE5jSWpwN1hDSmthWE4wTDNOeVl5OWxlR1ZqZFhScGIyNHZZMjl2Y21ScGJtRjBhVzl1TFdScGMzQmhkR05vTFhOMFpYQXVhbk5jSWpwN1hDSmthWE53WVhSamFFTnZiM0prYVc1aGRHbHZibE4wWlhCY0lqcDdYQ0p6ZEdWd1NXUmNJanBjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJScGMzQmhkR05vUTI5dmNtUnBibUYwYVc5dVUzUmxjRndpZlgxOWZTb3ZPMXh1Wlhod2IzSjBJSFpoY2lCa2FYTndZWFJqYUVOdmIzSmthVzVoZEdsdmJsTjBaWEFnUFNCbmJHOWlZV3hVYUdselcxTjViV0p2YkM1bWIzSW9YQ0pYVDFKTFJreFBWMTlWVTBWZlUxUkZVRndpS1Ywb1hDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OWthWE53WVhSamFFTnZiM0prYVc1aGRHbHZibE4wWlhCY0lpazdYRzRpTENJdktpcGZYMmx1ZEdWeWJtRnNYM2R2Y210bWJHOTNjM3RjSW5OMFpYQnpYQ0k2ZTF3aVpHbHpkQzl6Y21NdlpYaGxZM1YwYVc5dUwzUnZiMnh6TDNkdmNtdG1iRzkzTDJWdGFYUXRkMjl5YTJac2IzY3RkRzl2YkMxeWRXNHRjbVZ3YjNKMExYTjBaWEF1YW5OY0lqcDdYQ0psYldsMFYyOXlhMlpzYjNkVWIyOXNVblZ1VW1Wd2IzSjBVM1JsY0Z3aU9udGNJbk4wWlhCSlpGd2lPbHdpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2WlcxcGRGZHZjbXRtYkc5M1ZHOXZiRkoxYmxKbGNHOXlkRk4wWlhCY0luMTlmWDBxTHp0Y2JtVjRjRzl5ZENCMllYSWdaVzFwZEZkdmNtdG1iRzkzVkc5dmJGSjFibEpsY0c5eWRGTjBaWEFnUFNCbmJHOWlZV3hVYUdselcxTjViV0p2YkM1bWIzSW9YQ0pYVDFKTFJreFBWMTlWVTBWZlUxUkZVRndpS1Ywb1hDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OWxiV2wwVjI5eWEyWnNiM2RVYjI5c1VuVnVVbVZ3YjNKMFUzUmxjRndpS1R0Y2JpSXNJbU52Ym5OMElGUlZVazVmUTBGT1EwVk1URVZFWDBWU1VrOVNYMDVCVFVVOVlGUjFjbTVEWVc1alpXeHNaV1JGY25KdmNtQTdkbUZ5SUZSMWNtNURZVzVqWld4c1pXUkZjbkp2Y2oxamJHRnpjeUJsZUhSbGJtUnpJRVZ5Y205eWUyTnZibk4wY25WamRHOXlLSFE5WUZSb1pTQjBkWEp1SUhkaGN5QmpZVzVqWld4c1pXUXVZQ2w3YzNWd1pYSW9kQ2tzZEdocGN5NXVZVzFsUFZSVlVrNWZRMEZPUTBWTVRFVkVYMFZTVWs5U1gwNUJUVVY5ZlN4VFpYTnphVzl1VEdsdGFYUkVaV05zYVc1bFpFVnljbTl5UFdOc1lYTnpJR1Y0ZEdWdVpITWdWSFZ5YmtOaGJtTmxiR3hsWkVWeWNtOXllM05sYzNOcGIyNU1hVzFwZEVSbFkyeHBibVZrUFNFd08yTnZibk4wY25WamRHOXlLQ2w3YzNWd1pYSW9ZRlJvWlNCMWMyVnlJR1JsWTJ4cGJtVmtJR0VnWm5KbGMyZ2djMlZ6YzJsdmJpQjBiMnRsYmlCaWRXUm5aWFF1WUNsOWZUdG1kVzVqZEdsdmJpQnBjMU5sYzNOcGIyNU1hVzFwZEVSbFkyeHBibVVvWlNsN2JHVjBJSFE5WlN4dVBXNWxkeUJUWlhRN1ptOXlLRHQwZVhCbGIyWWdkRDA5WUc5aWFtVmpkR0FtSm5RbUppRnVMbWhoY3loMEtUc3BlMmxtS0c0dVlXUmtLSFFwTEhRdWMyVnpjMmx2Ymt4cGJXbDBSR1ZqYkdsdVpXUTlQVDBoTUNseVpYUjFjbTRoTUR0MFBYUXVZMkYxYzJWOWNtVjBkWEp1SVRGOVpuVnVZM1JwYjI0Z2FYTlVkWEp1UTJGdVkyVnNiR0YwYVc5dUtIUXBlMnhsZENCdVBYUXNjajF1WlhjZ1UyVjBPMlp2Y2lnN2RIbHdaVzltSUc0OVBXQnZZbXBsWTNSZ0ppWnVKaVloY2k1b1lYTW9iaWs3S1h0cFppaHlMbUZrWkNodUtTeHVMbTVoYldVOVBUMVVWVkpPWDBOQlRrTkZURXhGUkY5RlVsSlBVbDlPUVUxRktYSmxkSFZ5YmlFd08yNDliaTVqWVhWelpYMXlaWFIxY200aE1YMW1kVzVqZEdsdmJpQjBhSEp2ZDBsbVZIVnlia0ZpYjNKMFpXUW9aU2w3YVdZb1pUOHVZV0p2Y25SbFpEMDlQU0V3S1hSb2NtOTNJR2x6VkhWeWJrTmhibU5sYkd4aGRHbHZiaWhsTG5KbFlYTnZiaWsvWlM1eVpXRnpiMjQ2Ym1WM0lGUjFjbTVEWVc1alpXeHNaV1JGY25KdmNuMWxlSEJ2Y25SN1UyVnpjMmx2Ymt4cGJXbDBSR1ZqYkdsdVpXUkZjbkp2Y2l4VWRYSnVRMkZ1WTJWc2JHVmtSWEp5YjNJc2FYTlRaWE56YVc5dVRHbHRhWFJFWldOc2FXNWxMR2x6VkhWeWJrTmhibU5sYkd4aGRHbHZiaXgwYUhKdmQwbG1WSFZ5YmtGaWIzSjBaV1I5T3lJc0ltWjFibU4wYVc5dUlIUjFjbTVEWVc1alpXeHNZWFJwYjI1SWIyOXJWRzlyWlc0b1pTbDdjbVYwZFhKdVlDUjdaWDA2WTJGdVkyVnNZSDFsZUhCdmNuUjdkSFZ5YmtOaGJtTmxiR3hoZEdsdmJraHZiMnRVYjJ0bGJuMDdJaXdpYVcxd2IzSjBlMk55WldGMFpVaHZiMnQ5Wm5KdmJWd2lJMk52YlhCcGJHVmtMMEIzYjNKclpteHZkeTlqYjNKbEwybHVaR1Y0TG1welhDSTdhVzF3YjNKMGUyTnNZV2x0U0c5dmEwOTNibVZ5YzJocGNDeGthWE53YjNObFNHOXZheXhwYzBodmIydERiMjVtYkdsamRFVnljbTl5ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2YUc5dmF5MXZkMjVsY25Ob2FYQXVhbk5jSWp0cGJYQnZjblI3VkhWeWJrTmhibU5sYkd4bFpFVnljbTl5ZldaeWIyMWNJaU5vWVhKdVpYTnpMM1IxY200dFkyRnVZMlZzYkdGMGFXOXVMbXB6WENJN2FXMXdiM0owZTNSMWNtNURZVzVqWld4c1lYUnBiMjVJYjI5clZHOXJaVzU5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTkwZFhKdUxXTmhibU5sYkd4aGRHbHZiaTEwYjJ0bGJpNXFjMXdpTzJGemVXNWpJR1oxYm1OMGFXOXVJR055WldGMFpWUjFjbTVEWVc1alpXeHNZWFJwYjI1RGIyNTBjbTlzS0drcGUyeGxkQ0JoUFdOeVpXRjBaVWh2YjJzb2UzUnZhMlZ1T25SMWNtNURZVzVqWld4c1lYUnBiMjVJYjI5clZHOXJaVzRvYVM1amIyNTBjbTlzVkc5clpXNHBmU2tzYnoxaFcxTjViV0p2YkM1aGMzbHVZMGwwWlhKaGRHOXlYU2dwTzNSeWVYdGhkMkZwZENCamJHRnBiVWh2YjJ0UGQyNWxjbk5vYVhBb1lTbDlZMkYwWTJnb1pTbDdhV1lvYVhOSWIyOXJRMjl1Wm14cFkzUkZjbkp2Y2lobEtTbHlaWFIxY200N2RHaHliM2NnWlgxc1pYUWdjejF1WlhjZ1FXSnZjblJEYjI1MGNtOXNiR1Z5TEdGaWIzSjBQU2dwUFQ1ekxtRmliM0owS0c1bGR5QlVkWEp1UTJGdVkyVnNiR1ZrUlhKeWIzSXBMR005YVM1cGJtbDBhV0ZzVUdGNWJHOWhaQ0U5UFhadmFXUWdNQ1ltYldGMFkyaGxjMEZqZEdsMlpWUjFjbTRvYVM1cGJtbDBhV0ZzVUdGNWJHOWhaQ3hwTG1WNGNHVmpkR1ZrVkhWeWJrbGtLVHRqSmlaaFltOXlkQ2dwTzJ4bGRDQnNQV00vVUhKdmJXbHpaUzV5WlhOdmJIWmxLR2t1YVc1cGRHbGhiRkJoZVd4dllXUXBPbU52Ym5OMWJXVk5ZWFJqYUdsdVowTmhibU5sYkNodkxHa3VaWGh3WldOMFpXUlVkWEp1U1dRc1lXSnZjblFwTEhVOUlURTdjbVYwZFhKdWUzQmhlV3h2WVdRNmJDeHphV2R1WVd3NmN5NXphV2R1WVd3c2NtVnhkV1Z6ZEdWa09td3VkR2hsYmlnb0tUMCtZR05oYm1ObGJHQXBMR0Z6ZVc1aklHUnBjM0J2YzJVb0tYdDFmSHdvZFQwaE1DeGhkMkZwZENCa2FYTndiM05sU0c5dmF5aGhLU2w5ZlgxaGMzbHVZeUJtZFc1amRHbHZiaUJqYjI1emRXMWxUV0YwWTJocGJtZERZVzVqWld3b1pTeDBMRzRwZTJadmNpZzdPeWw3YkdWMElISTlZWGRoYVhRZ1pTNXVaWGgwS0NrN2FXWW9jaTVrYjI1bEtYSmxkSFZ5YmlCaGQyRnBkQ0J1WlhjZ1VISnZiV2x6WlNnb0tUMCtlMzBwTzJsbUtHMWhkR05vWlhOQlkzUnBkbVZVZFhKdUtISXVkbUZzZFdVc2RDa3BjbVYwZFhKdUlHNG9LU3h5TG5aaGJIVmxmWDFtZFc1amRHbHZiaUJ0WVhSamFHVnpRV04wYVhabFZIVnliaWhsTEhRcGUybG1LSFI1Y0dWdlppQmxJVDFnYjJKcVpXTjBZSHg4SVdVcGNtVjBkWEp1SVRBN2JHVjBJRzQ5WlM1MGRYSnVTV1E3Y21WMGRYSnVJRzQ5UFQxMmIybGtJREI4Zkc0OVBUMTBmV1Y0Y0c5eWRIdGpjbVZoZEdWVWRYSnVRMkZ1WTJWc2JHRjBhVzl1UTI5dWRISnZiSDA3SWl3aWRtRnlJRk5sYzNOcGIyNVRkR0YwWlVOMWNuTnZjajFqYkdGemMzdGpkWEp5Wlc1MFUyVnlhV0ZzYVhwbFpFTnZiblJsZUhRN1kzVnljbVZ1ZEZObGMzTnBiMjVUZEdGMFpUdGpiMjV6ZEhKMVkzUnZjaWhsS1h0MGFHbHpMbU4xY25KbGJuUlRaWEpwWVd4cGVtVmtRMjl1ZEdWNGREMWxMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBMSFJvYVhNdVkzVnljbVZ1ZEZObGMzTnBiMjVUZEdGMFpUMWxMbk5sYzNOcGIyNVRkR0YwWlgxblpYUWdjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUW9LWHR5WlhSMWNtNGdkR2hwY3k1amRYSnlaVzUwVTJWeWFXRnNhWHBsWkVOdmJuUmxlSFI5WjJWMElITmxjM05wYjI1VGRHRjBaU2dwZTNKbGRIVnliaUIwYUdsekxtTjFjbkpsYm5SVFpYTnphVzl1VTNSaGRHVjlZV1J2Y0hSVGRHRjBaU2hsS1h0MGFHbHpMbU4xY25KbGJuUlRaWEpwWVd4cGVtVmtRMjl1ZEdWNGREMWxMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBQejkwYUdsekxtTjFjbkpsYm5SVFpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4MGFHbHpMbU4xY25KbGJuUlRaWE56YVc5dVUzUmhkR1U5WlM1elpYTnphVzl1VTNSaGRHVS9QM1JvYVhNdVkzVnljbVZ1ZEZObGMzTnBiMjVUZEdGMFpYMTlPMlY0Y0c5eWRIdFRaWE56YVc5dVUzUmhkR1ZEZFhKemIzSjlPeUlzSW1sdGNHOXlkSHRUWlhOemFXOXVVM1JoZEdWRGRYSnpiM0o5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTl6WlhOemFXOXVMWE4wWVhSbExXTjFjbk52Y2k1cWMxd2lPMmx0Y0c5eWRIdHpaVzVrVkhWeWJrTnZiblJ5YjJ4VGRHVndmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkSFZ5YmkxamIyNTBjbTlzTFhCeWIzUnZZMjlzTG1welhDSTdkbUZ5SUZSMWNtNUZlR1ZqZFhScGIyNURkWEp6YjNJOVkyeGhjM01nWlhoMFpXNWtjeUJUWlhOemFXOXVVM1JoZEdWRGRYSnpiM0o3WTI5dWRISnZiRlJ2YTJWdU8zQmhjbVZ1ZEZkeWFYUmhZbXhsTzJ4aGMzUlNaWEJ2Y25SbFpFTnZiblJwYm5WaGRHbHZibFJ2YTJWdU8yTnZibk4wY25WamRHOXlLR1VwZTNOMWNHVnlLSHR6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHBsTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhObGMzTnBiMjVUZEdGMFpUcGxMbk5sYzNOcGIyNVRkR0YwWlgwcExIUm9hWE11WTI5dWRISnZiRlJ2YTJWdVBXVXVZMjl1ZEhKdmJGUnZhMlZ1TEhSb2FYTXViR0Z6ZEZKbGNHOXlkR1ZrUTI5dWRHbHVkV0YwYVc5dVZHOXJaVzQ5WlM1elpYTnphVzl1VTNSaGRHVXVZMjl1ZEdsdWRXRjBhVzl1Vkc5clpXNHNkR2hwY3k1d1lYSmxiblJYY21sMFlXSnNaVDFsTG5CaGNtVnVkRmR5YVhSaFlteGxmV0Z6ZVc1aklHRmtiM0IwS0dVcGUzUm9hWE11WVdSdmNIUlRkR0YwWlNobEtUdHNaWFFnZEQxbExuTmxjM05wYjI1VGRHRjBaUzVqYjI1MGFXNTFZWFJwYjI1VWIydGxianQwUFQwOVlHQjhmSFE5UFQxMGFHbHpMbXhoYzNSU1pYQnZjblJsWkVOdmJuUnBiblZoZEdsdmJsUnZhMlZ1Zkh3b2RHaHBjeTVzWVhOMFVtVndiM0owWldSRGIyNTBhVzUxWVhScGIyNVViMnRsYmoxMExHRjNZV2wwSUhSb2FYTXVjMlZ1WkNoN1kyOXVkR2x1ZFdGMGFXOXVWRzlyWlc0NmRDeHJhVzVrT21CMGRYSnVMV052Ym5ScGJuVmhkR2x2YmkxMGIydGxibUI5S1NsOVkzSmxZWFJsVTNSbGNFbHVjSFYwS0dVc2RDbDdjbVYwZFhKdWUyRmliM0owVTJsbmJtRnNPblFzYVc1d2RYUTZaU3h3WVhKbGJuUlhjbWwwWVdKc1pUcDBhR2x6TG5CaGNtVnVkRmR5YVhSaFlteGxMSE5sY21saGJHbDZaV1JEYjI1MFpYaDBPblJvYVhNdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPblJvYVhNdWMyVnpjMmx2YmxOMFlYUmxmWDFoYzNsdVl5Qm1hVzVwYzJnb1pTeDBMRzRwZTNSb2FYTXVZV1J2Y0hSVGRHRjBaU2hsS1N4aGQyRnBkQ0IwYUdsekxuTmxibVFvZTJGamRHbHZianA3TGk0dWRDeHpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREcDBhR2x6TG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhObGMzTnBiMjVUZEdGMFpUcDBhR2x6TG5ObGMzTnBiMjVUZEdGMFpYMHNZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpPbTR1YkdWdVozUm9QVDA5TUQ5MmIybGtJREE2V3k0dUxtNWRMR3RwYm1RNllIUjFjbTR0Y21WemRXeDBZSDBwZldGemVXNWpJSE5sYm1Rb1pTbDdZWGRoYVhRZ2MyVnVaRlIxY201RGIyNTBjbTlzVTNSbGNDaDdZMjl1ZEhKdmJGUnZhMlZ1T25Sb2FYTXVZMjl1ZEhKdmJGUnZhMlZ1TEhCaGVXeHZZV1E2WlgwcGZYMDdaWGh3YjNKMGUxUjFjbTVGZUdWamRYUnBiMjVEZFhKemIzSjlPeUlzSW1aMWJtTjBhVzl1SUhKbGMyOXNkbVZTZFc1MGFXMWxRV04wYVc5dVVtVnpkV3gwYzBadmNrTmhiR3hKWkhNb1pTbDdiR1YwSUhROWJtVjNJRk5sZENobExuQmxibVJwYm1kRFlXeHNTV1J6S1N4dVBXNWxkeUJOWVhBN1ptOXlLR3hsZENCeUlHOW1JR1V1Y21WemRXeDBjeWwwTG1oaGN5aHlMbU5oYkd4SlpDa21KbTR1YzJWMEtISXVZMkZzYkVsa0xISXBPMnhsZENCeVBWdGRPMlp2Y2loc1pYUWdkQ0J2WmlCbExuQmxibVJwYm1kRFlXeHNTV1J6S1h0c1pYUWdaVDF1TG1kbGRDaDBLVHRwWmlobFBUMDlkbTlwWkNBd0tYSmxkSFZ5Ymp0eUxuQjFjMmdvWlNsOWNtVjBkWEp1SUhKOVpYaHdiM0owZTNKbGMyOXNkbVZTZFc1MGFXMWxRV04wYVc5dVVtVnpkV3gwYzBadmNrTmhiR3hKWkhOOU95SXNJaThxS2w5ZmFXNTBaWEp1WVd4ZmQyOXlhMlpzYjNkemUxd2ljM1JsY0hOY0lqcDdYQ0prYVhOMEwzTnlZeTlsZUdWamRYUnBiMjR2ZEc5dmJITXZjM1ZpWVdkbGJuUXZkR0Z6YXkxallXNWpaV3d1YW5OY0lqcDdYQ0pqWVc1alpXeEJaMlZ1ZEVsdWRtOWpZWFJwYjI1UGQyNWxjbE4wWlhCY0lqcDdYQ0p6ZEdWd1NXUmNJanBjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJOaGJtTmxiRUZuWlc1MFNXNTJiMk5oZEdsdmJrOTNibVZ5VTNSbGNGd2lmWDE5ZlNvdk8xeHVaWGh3YjNKMElIWmhjaUJqWVc1alpXeEJaMlZ1ZEVsdWRtOWpZWFJwYjI1UGQyNWxjbE4wWlhBZ1BTQm5iRzlpWVd4VWFHbHpXMU41YldKdmJDNW1iM0lvWENKWFQxSkxSa3hQVjE5VlUwVmZVMVJGVUZ3aUtWMG9YQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTlqWVc1alpXeEJaMlZ1ZEVsdWRtOWpZWFJwYjI1UGQyNWxjbE4wWlhCY0lpazdYRzRpTENKcGJYQnZjblI3Wm1sdVpGZHZjbXRtYkc5M1ZHOXZiRkoxYml4cGMwbHVZbTk0VTNWaVlXZGxiblJTWlhOMWJIUkdjbTl0VW1WamIzSmtaV1JYYjNKclpteHZkMVJ2YjJ4U2RXNHNhWE5KYm1KdmVGUnZiMnhTWlhOMWJIUkdjbTl0VW1WamIzSmtaV1JYYjNKclpteHZkMVJ2YjJ4U2RXNTlabkp2YlZ3aUkyaGhjbTVsYzNNdmQyOXlhMlpzYjNjdGRHOXZiQzF5ZFc1ekxtcHpYQ0k3YVcxd2IzSjBlMk5oYm1ObGJFRm5aVzUwU1c1MmIyTmhkR2x2Yms5M2JtVnlVM1JsY0gxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNSdmIyeHpMM04xWW1GblpXNTBMM1JoYzJzdFkyRnVZMlZzTG1welhDSTdhVzF3YjNKMGUzSjFibEJ5YjNoNVUzVmlZV2RsYm5SRmRtVnVkRk4wWlhCOVpuSnZiVndpSTNOMVltRm5aVzUwY3k5bGRtVnVkQzF3Y205NGVTMXpkR1Z3TG1welhDSTdhVzF3YjNKMGUyRndjR3g1VkdGemEwRm5aVzUwVW1WeGRXVnpkSDFtY205dFhDSWpaWGhsWTNWMGFXOXVMM1J2YjJ4ekwzTjFZbUZuWlc1MEwzUmhjMnN0WVdkbGJuUXRjbVZ4ZFdWemRITXVhbk5jSWp0cGJYQnZjblI3ZDI5eWEyWnNiM2RVYjI5c1VuVnVUM1YwWTI5dFpWUnZVM1ZpWVdkbGJuUlNaWE4xYkhRc2QyOXlhMlpzYjNkVWIyOXNVblZ1VDNWMFkyOXRaVlJ2Vkc5dmJGSmxjM1ZzZEN4M2IzSnJabXh2ZDFSdmIyeFNkVzVTWlhGMVpYTjBWRzlKYm5CMWRGSmxjWFZsYzNSUVlYbHNiMkZrZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2ZEc5dmJITXZkMjl5YTJac2IzY3ZiM2R1WlhJdGFXNWliM2d1YW5OY0lqdHBiWEJ2Y25SN2NtVnpiMngyWlZkdmNtdG1iRzkzUTJGc2JHSmhZMnRDWVhObFZYSnNmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkMjl5YTJac2IzY3RZMkZzYkdKaFkyc3RkWEpzTG1welhDSTdhVzF3YjNKMGUzSmxjM1Z0WlVodmIydFRkR1Z3ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2ZEc5dmJITXZkMjl5YTJac2IzY3ZjbVZ6ZFcxbExXaHZiMnN0YzNSbGNDNXFjMXdpTzJsdGNHOXlkSHR5Wld4bFlYTmxRV2RsYm5SSmJuWnZZMkYwYVc5dVQzZHVaWEpUZEdWd2ZXWnliMjFjSWlObGVHVmpkWFJwYjI0dmRHOXZiSE12YzNWaVlXZGxiblF2YVc1MmIydGxMWE4wWlhBdWFuTmNJanRoYzNsdVl5Qm1kVzVqZEdsdmJpQm9ZVzVrYkdWWGIzSnJabXh2ZDFSdmIyeFNkVzVQZFhSamIyMWxLR2twZTJ4bGRIdGpkWEp6YjNJNllTeHRaWE56WVdkbE9tOTlQV2tzY3oxbWFXNWtWMjl5YTJac2IzZFViMjlzVW5W",
	"dUtHRXVjMlZ6YzJsdmJsTjBZWFJsTG5OdVlYQnphRzkwUHk1elpYTnphVzl1TG5OMFlYUmxMRzh1Wm5KdmJTNWpZV3hzU1dRcE8ybG1LSE0vTG5KMWJrbGtJVDA5Ynk1bWNtOXRMbkoxYmtsa0tYSmxkSFZ5Ymp0c1pYUWdZejF6TG5KbGMzVnNkRXRwYm1ROVBUMWdjM1ZpWVdkbGJuUmdQMkYzWVdsMElITmxkSFJzWlZOMVltRm5aVzUwVDNWMFkyOXRaU2hwS1RwM2IzSnJabXh2ZDFSdmIyeFNkVzVQZFhSamIyMWxWRzlVYjI5c1VtVnpkV3gwS0c4cE8yRjNZV2wwSUdOaGJtTmxiRUZuWlc1MFNXNTJiMk5oZEdsdmJrOTNibVZ5VTNSbGNDaDdiM2R1WlhKSlpEcHZMbVp5YjIwdWNuVnVTV1FzYzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2WVM1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZZUzV6WlhOemFXOXVVM1JoZEdWOUtUdHNaWFFnYkQxaGQyRnBkQ0J5Wld4bFlYTmxRV2RsYm5SSmJuWnZZMkYwYVc5dVQzZHVaWEpUZEdWd0tIdGpZVzVqWld4c1pXUTZieTV5WlhOMWJIUXVjM1JoZEhWelBUMDlZR05oYm1ObGJHeGxaR0FzYjNkdVpYSkpaRHB2TG1aeWIyMHVjblZ1U1dRc2MyVnpjMmx2YmxOMFlYUmxPbUV1YzJWemMybHZibE4wWVhSbGZTazdZWGRoYVhRZ1lTNWhaRzl3ZENoN2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNllTNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDeHpaWE56YVc5dVUzUmhkR1U2YkM1elpYTnphVzl1VTNSaGRHVjlLVHRzWlhRZ2RUMWhMbk5sYzNOcGIyNVRkR0YwWlM1emJtRndjMmh2ZEQ4dWMyVnpjMmx2Ymk1emRHRjBaVHR5WlhSMWNtNG9ZeTVyYVc1a1BUMDlZSE4xWW1GblpXNTBMWEpsYzNWc2RHQS9ZeTVqWVd4c1NXUTlQVDF2TG1aeWIyMHVZMkZzYkVsa0ppWnBjMGx1WW05NFUzVmlZV2RsYm5SU1pYTjFiSFJHY205dFVtVmpiM0prWldSWGIzSnJabXh2ZDFSdmIyeFNkVzRvZFN4aktUcHBjMGx1WW05NFZHOXZiRkpsYzNWc2RFWnliMjFTWldOdmNtUmxaRmR2Y210bWJHOTNWRzl2YkZKMWJpaDFMR01wS1Q5ak9uWnZhV1FnTUgxaGMzbHVZeUJtZFc1amRHbHZiaUJ6WlhSMGJHVlRkV0poWjJWdWRFOTFkR052YldVb1pTbDdiR1YwZTJOMWNuTnZjanAwTEcxbGMzTmhaMlU2Ym4wOVpTeHlQWGR2Y210bWJHOTNWRzl2YkZKMWJrOTFkR052YldWVWIxTjFZbUZuWlc1MFVtVnpkV3gwS0c0cE8zSmxkSFZ5YmlCeUxtOXlhV2RwYmowOVBXQmphR2xzWkdBbUptRjNZV2wwSUhRdVlXUnZjSFFvWVhkaGFYUWdZWEJ3YkhsVVlYTnJRV2RsYm5SU1pYRjFaWE4wS0h0aFkyTjFiWFZzWVhSbFZYTmhaMlU2SVRFc2IzZHVaWEpKWkRwdUxtWnliMjB1Y25WdVNXUXNjbVZ3YkhsVWJ6cHVMbVp5YjIwdWNuVnVTV1FzY21WeGRXVnpkRHA3YTJsdVpEcGdZV2RsYm5RdGMyVjBkR3hsWkdBc2NtVnpkV3gwT25KOWZTeHlaWEYxWlhOMFEyOXVkR1Y0ZENobEtTa3BMSEo5WVhONWJtTWdablZ1WTNScGIyNGdhR0Z1Wkd4bFYyOXlhMlpzYjNkVWIyOXNVblZ1VW1WeGRXVnpkQ2gwS1h0c1pYUjdZM1Z5YzI5eU9tNHNiV1Z6YzJGblpUcHlmVDEwTzJsbUtISXVjbVZ4ZFdWemRDNXJhVzVrUFQwOVlHRm5aVzUwTFdsdWRtOXJaV0I4ZkhJdWNtVnhkV1Z6ZEM1cmFXNWtQVDA5WUdGblpXNTBMWE5sZEhSc1pXUmdLWHRwWmlobWFXNWtWMjl5YTJac2IzZFViMjlzVW5WdUtHNHVjMlZ6YzJsdmJsTjBZWFJsTG5OdVlYQnphRzkwUHk1elpYTnphVzl1TG5OMFlYUmxMSEl1Wm5KdmJTNWpZV3hzU1dRcFB5NXlkVzVKWkNFOVBYSXVabkp2YlM1eWRXNUpaQ2w3Y2k1eVpYRjFaWE4wTG10cGJtUTlQVDFnWVdkbGJuUXRhVzUyYjJ0bFlDWW1ZWGRoYVhRZ2NtVnpkVzFsU0c5dmExTjBaWEFvY2k1eVpYQnNlVlJ2TEh0cmFXNWtPbUJ5ZFc1MGFXMWxMV0ZqZEdsdmJpMXlaWE4xYkhSZ0xISmxjM1ZzZEhNNlczdGpZV3hzU1dRNmNpNXlaWEYxWlhOMExtbHVkbTlqWVhScGIyNUpaQ3hwYzBWeWNtOXlPaUV3TEd0cGJtUTZZSE4xWW1GblpXNTBMWEpsYzNWc2RHQXNiM0pwWjJsdU9tQmthWE53WVhSamFHQXNiM1YwY0hWME9udGpiMlJsT21CQlIwVk9WRjlKVGxaUFEwRlVTVTlPWDA1UFZGOUJSRTFKVkZSRlJHQXNiV1Z6YzJGblpUcGdWR2hsSUhkdmNtdG1iRzkzSUhSdmIyd2djblZ1SUc1dklHeHZibWRsY2lCdmQyNXpJSFJvYVhNZ1lXZGxiblFnYVc1MmIyTmhkR2x2Ymk1Z2ZTeHpkV0poWjJWdWRFNWhiV1U2Y2k1eVpYRjFaWE4wTG1sdWNIVjBMblJoY21kbGRIMWRmU2s3Y21WMGRYSnVmV0YzWVdsMElHNHVZV1J2Y0hRb1lYZGhhWFFnWVhCd2JIbFVZWE5yUVdkbGJuUlNaWEYxWlhOMEtIdGhZMk4xYlhWc1lYUmxWWE5oWjJVNmNpNW1jbTl0TG5KbGMzVnNkRXRwYm1RaFBUMWdjM1ZpWVdkbGJuUmdMRzkzYm1WeVNXUTZjaTVtY205dExuSjFia2xrTEhKbGNHeDVWRzg2Y2k1eVpYQnNlVlJ2TEhKbGNYVmxjM1E2Y2k1eVpYRjFaWE4wZlN4eVpYRjFaWE4wUTI5dWRHVjRkQ2gwS1NrcE8zSmxkSFZ5Ym4xcFppaHlMbkpsY1hWbGMzUXVhMmx1WkQwOVBXQmhkWFJvYjNKcGVtRjBhVzl1TFhKbGNYVmxjM1JnS1h0aGQyRnBkQ0J1TG1Ga2IzQjBLR0YzWVdsMElISjFibEJ5YjNoNVUzVmlZV2RsYm5SRmRtVnVkRk4wWlhBb2UyaHZiMnRRWVhsc2IyRmtPbkl1Y21WeGRXVnpkQzVsZG1WdWRDeHdZWEpsYm5SWGNtbDBZV0pzWlRwdUxuQmhjbVZ1ZEZkeWFYUmhZbXhsTEhObGNtbGhiR2w2WldSRGIyNTBaWGgwT200dWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPbTR1YzJWemMybHZibE4wWVhSbGZTa3BPM0psZEhWeWJuMWhkMkZwZENCdUxtRmtiM0IwS0dGM1lXbDBJSEoxYmxCeWIzaDVVM1ZpWVdkbGJuUkZkbVZ1ZEZOMFpYQW9leTR1TG5JdWNtVnhkV1Z6ZEVOdmIzSmthVzVoZEdWelBUMDlkbTlwWkNBd1AzdGhibk4zWlhKSWIyOXJPbnR5ZFc1SlpEcHlMbVp5YjIwdWNuVnVTV1I5ZlRwN2ZTeG9iMjlyVUdGNWJHOWhaRHAzYjNKclpteHZkMVJ2YjJ4U2RXNVNaWEYxWlhOMFZHOUpibkIxZEZKbGNYVmxjM1JRWVhsc2IyRmtLSElwTEhCaGNtVnVkRmR5YVhSaFlteGxPbTR1Y0dGeVpXNTBWM0pwZEdGaWJHVXNjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZiaTV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ3h6WlhOemFXOXVVM1JoZEdVNmJpNXpaWE56YVc5dVUzUmhkR1Y5S1NsOVpuVnVZM1JwYjI0Z2NtVnhkV1Z6ZEVOdmJuUmxlSFFvWlNsN2NtVjBkWEp1ZTJOaGJHeGlZV05yUW1GelpWVnliRHB5WlhOdmJIWmxWMjl5YTJac2IzZERZV3hzWW1GamEwSmhjMlZWY213b1pTNWpZV3hzWW1GamEwMWxkR0ZrWVhSaFZYSnNLU3h3WVhKbGJuUlhjbWwwWVdKc1pUcGxMbU4xY25OdmNpNXdZWEpsYm5SWGNtbDBZV0pzWlN4elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZERwbExtTjFjbk52Y2k1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZaUzVqZFhKemIzSXVjMlZ6YzJsdmJsTjBZWFJsZlgxbGVIQnZjblI3YUdGdVpHeGxWMjl5YTJac2IzZFViMjlzVW5WdVQzVjBZMjl0WlN4b1lXNWtiR1ZYYjNKclpteHZkMVJ2YjJ4U2RXNVNaWEYxWlhOMGZUc2lMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbmR2Y210bWJHOTNjMXdpT250Y0ltUnBjM1F2YzNKakwyVjRaV04xZEdsdmJpOTBkWEp1TFhkdmNtdG1iRzkzTG1welhDSTZlMXdpZEhWeWJsZHZjbXRtYkc5M1hDSTZlMXdpZDI5eWEyWnNiM2RKWkZ3aU9sd2lkMjl5YTJac2IzY3ZMMlYyWlM4dmRIVnlibGR2Y210bWJHOTNYQ0o5ZlgxOUtpODdYRzVwYlhCdmNuUjdZM0psWVhSbFNHOXZheXhuWlhSWGIzSnJabXh2ZDAxbGRHRmtZWFJoZldaeWIyMWNJaU5qYjIxd2FXeGxaQzlBZDI5eWEyWnNiM2N2WTI5eVpTOXBibVJsZUM1cWMxd2lPMmx0Y0c5eWRIdGpiR0ZwYlVodmIydFBkMjVsY25Ob2FYQXNaR2x6Y0c5elpVaHZiMnNzYVhOSWIyOXJRMjl1Wm14cFkzUkZjbkp2Y24xbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDJodmIyc3RiM2R1WlhKemFHbHdMbXB6WENJN2FXMXdiM0owZTJselNXNWliM2hUZFdKaFoyVnVkRkpsYzNWc2RFWnliMjFTWldOdmNtUmxaRmR2Y210bWJHOTNWRzl2YkZKMWJpeHBjMGx1WW05NFZHOXZiRkpsYzNWc2RFWnliMjFTWldOdmNtUmxaRmR2Y210bWJHOTNWRzl2YkZKMWJuMW1jbTl0WENJamFHRnlibVZ6Y3k5M2IzSnJabXh2ZHkxMGIyOXNMWEoxYm5NdWFuTmNJanRwYlhCdmNuUjdZV04wYVhabFZIVnlia2xrZldaeWIyMWNJaU5vWVhKdVpYTnpMMkZqZEdsMlpTMTBkWEp1TFdsa0xtcHpYQ0k3YVcxd2IzSjBlMjFwWjNKaGRHVlVkWEp1VjI5eWEyWnNiM2RKYm5CMWRIMW1jbTl0WENJalpYaGxZM1YwYVc5dUwyUjFjbUZpYkdVdGMyVnpjMmx2YmkxdGFXZHlZWFJwYjI1ekwzUjFjbTR0ZDI5eWEyWnNiM2N1YW5OY0lqdHBiWEJ2Y25SN1kyRnVZMlZzUVd4c1NXNWtaWGhsWkZObGMzTnBiMjVVWVhOcmMxTjBaWEI5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTlqWVc1alpXd3RhVzVrWlhobFpDMXpaWE56YVc5dUxYUmhjMnR6TFhOMFpYQXVhbk5jSWp0cGJYQnZjblI3ZEhWeWJsTjBaWEI5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTkzYjNKclpteHZkeTF6ZEdWd2N5NXFjMXdpTzJsdGNHOXlkSHR5YjNWMFpVUmxiR2wyWlhKVWIwTm9hV3hrY21WdWZXWnliMjFjSWlObGVHVmpkWFJwYjI0dmNtOTFkR1V0WTJocGJHUXRaR1ZzYVhabGNua3Vhbk5jSWp0cGJYQnZjblI3Y25WdVVISnZlSGxUZFdKaFoyVnVkRVYyWlc1MFUzUmxjSDFtY205dFhDSWpjM1ZpWVdkbGJuUnpMMlYyWlc1MExYQnliM2g1TFhOMFpYQXVhbk5jSWp0cGJYQnZjblI3WTNKbFlYUmxRMmhoYm01bGJGSmxZV1JsY2l4eVlXTmxRMmhoYm01bGJGSmxZV1J6ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2ZEc5dmJITXZkMjl5YTJac2IzY3ZiM2R1WlhJdFkyaGhibTVsYkhNdWFuTmNJanRwYlhCdmNuUjdiM0JsYmxkdmNtdG1iRzkzVkc5dmJGSjFiazkzYm1WeVEyaGhibTVsYkhOOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MGIyOXNjeTkzYjNKclpteHZkeTl2ZDI1bGNpNXFjMXdpTzJsdGNHOXlkSHR5WlhOdmJIWmxWMjl5YTJac2IzZERZV3hzWW1GamEwSmhjMlZWY214OVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5M2IzSnJabXh2ZHkxallXeHNZbUZqYXkxMWNtd3Vhbk5jSWp0cGJYQnZjblI3WVdOcmJtOTNiR1ZrWjJWRVpXeGxaMkYwWldSVVlYTnJjMU4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MFlYTnJjeTl3WVhKbGJuUXZaR1ZzWldkaGRHVXVhbk5jSWp0cGJYQnZjblI3Ym05eWJXRnNhWHBsVTJWeWFXRnNhWHBoWW14bFJYSnliM0o5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTkzYjNKclpteHZkeTFsY25KdmNuTXVhbk5jSWp0cGJYQnZjblI3YzJWdVpGUjFjbTVEYjI1MGNtOXNVM1JsY0gxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNSMWNtNHRZMjl1ZEhKdmJDMXdjbTkwYjJOdmJDNXFjMXdpTzJsdGNHOXlkSHRtYVc1a1VuVnVibWx1WjBGblpXNTBTR0Z1Wkd4bExHbHpTVzVpYjNoVGRXSmhaMlZ1ZEZKbGMzVnNkRVp5YjIxU2RXNXVhVzVuU0dGdVpHeGxmV1p5YjIxY0lpTnpkV0poWjJWdWRITXZhR0Z1Wkd4bGN5OXhkV1Z5ZVM1cWMxd2lPMmx0Y0c5eWRIdHdjbVZ6WlhKMlpWTmxjbWxoYkdsNlpXUlRaWE56YVc5dVJIbHVZVzFwWTAxdlpHVnNVMlZzWldOMGFXOXVmV1p5YjIxY0lpTmpiMjUwWlhoMEwzTmxjbWxoYkdsNlpXUXRaSGx1WVcxcFl5MXRiMlJsYkMxelpXeGxZM1JwYjI0dWFuTmNJanRwYlhCdmNuUjdZMkZ1WTJWc1JHVnpZMlZ1WkdGdWRGUjFjbTV6VTNSbGNIMW1jbTl0WENJalpYaGxZM1YwYVc5dUwyTmhibU5sYkMxa1pYTmpaVzVrWVc1MExYUjFjbTV6TFhOMFpYQXVhbk5jSWp0cGJYQnZjblI3WkdsemNHRjBZMmhEYjI5eVpHbHVZWFJwYjI1VGRHVndmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZZMjl2Y21ScGJtRjBhVzl1TFdScGMzQmhkR05vTFhOMFpYQXVhbk5jSWp0cGJYQnZjblI3WlcxcGRGZHZjbXRtYkc5M1ZHOXZiRkoxYmxKbGNHOXlkRk4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MGIyOXNjeTkzYjNKclpteHZkeTlsYldsMExYZHZjbXRtYkc5M0xYUnZiMnd0Y25WdUxYSmxjRzl5ZEMxemRHVndMbXB6WENJN2FXMXdiM0owZTJOeVpXRjBaVlIxY201RFlXNWpaV3hzWVhScGIyNURiMjUwY205c2ZXWnliMjFjSWlObGVHVmpkWFJwYjI0dmRIVnliaTFqWVc1alpXeHNZWFJwYjI0dFkyOXVkSEp2YkM1cWMxd2lPMmx0Y0c5eWRIdFVkWEp1UlhobFkzVjBhVzl1UTNWeWMyOXlmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkSFZ5YmkxbGVHVmpkWFJwYjI0dFkzVnljMjl5TG1welhDSTdhVzF3YjNKMGUzSmxjMjlzZG1WU2RXNTBhVzFsUVdOMGFXOXVVbVZ6ZFd4MGMwWnZja05oYkd4SlpITjlabkp2YlZ3aUkzSjFiblJwYldVdllXTjBhVzl1Y3k5eVpYTjFiSFJ6TG1welhDSTdhVzF3YjNKMGUyaGhibVJzWlZkdmNtdG1iRzkzVkc5dmJGSjFiazkxZEdOdmJXVXNhR0Z1Wkd4bFYyOXlhMlpzYjNkVWIyOXNVblZ1VW1WeGRXVnpkSDFtY205dFhDSWpaWGhsWTNWMGFXOXVMM1IxY200dGQyOXlhMlpzYjNjdGRHOXZiQzF5ZFc0dWFuTmNJanRqYjI1emRDQlVRVk5MWDAxUFJFVmZWMEZKVkY5RlVsSlBVbDlOUlZOVFFVZEZQVndpVkdGemF5QnRiMlJsSUdOaGJtNXZkQ0IzWVdsMElHWnZjaUJtYjJ4c2IzY3RkWEFnYVc1d2RYUWdLR0J1WlhoME9pQnVkV3hzWUNrdVhDSTdZWE41Ym1NZ1puVnVZM1JwYjI0Z2RIVnlibGR2Y210bWJHOTNLR1VwZTJ4bGRDQjBQVzFwWjNKaGRHVlVkWEp1VjI5eWEyWnNiM2RKYm5CMWRDaGxLVHR5WlhSMWNtNGdkQzVrY21sMlpYSkRZWEJoWW1sc2FYUnBaWE0vTG5SMWNtNUpibUp2ZUQwOVBTRXdQM0oxYmxSMWNtNVBkMjVsWkZkdmNtdG1iRzkzS0hRcE9uSjFia3hsWjJGamVWUjFjbTVYYjNKclpteHZkeWgwS1gxaGMzbHVZeUJtZFc1amRHbHZiaUJ5ZFc1VWRYSnVUM2R1WldSWGIzSnJabXh2ZHloaEtYdHNaWFFnYnoxamNtVmhkR1ZJYjI5cktIdDBiMnRsYmpwZ0pIdGhMbU52YlhCc1pYUnBiMjVVYjJ0bGJuMDZhVzVpYjNoZ2ZTa3NZejFqY21WaGRHVkRhR0Z1Ym1Wc1VtVmhaR1Z5S0dCcGJtSnZlR0FzYnlrc2JEMWhMbWx1YVhScFlXeFRkR1Z3TEhVOWJtVjNJRlIxY201RmVHVmpkWFJwYjI1RGRYSnpiM0lvZTJOdmJuUnliMnhVYjJ0bGJqcGhMbU52YlhCc1pYUnBiMjVVYjJ0bGJpeHdZWEpsYm5SWGNtbDBZV0pzWlRwaExuTjBaWEJKYm5CMWRDNXdZWEpsYm5SWGNtbDBZV0pzWlN4elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZERwc1B5NWlaV1p2Y21WVGRHVndMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBQejloTG5OMFpYQkpibkIxZEM1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZiRDh1WW1WbWIzSmxVM1JsY0M1elpYTnphVzl1VTNSaGRHVS9QMkV1YzNSbGNFbHVjSFYwTG5ObGMzTnBiMjVUZEdGMFpYMHBMR1E5TUN4dVpYaDBSR1ZzYVhabGNubFNaWEYxWlhOMFNXUTlLQ2s5UG1Ba2UyOHVkRzlyWlc1OU9tUmxiR2wyWlhKNU9pUjdVM1J5YVc1bktHUXJLeWw5WUN4bVBWdGRMSEE5WVM1emRHVndTVzV3ZFhRdWFXNXdkWFFzYlQwaE1TeG9MR2M3ZEhKNWUzUnllWHRoZDJGcGRDQmpiR0ZwYlVodmIydFBkMjVsY25Ob2FYQW9ieWtzYlQwaE1IMWpZWFJqYUNobEtYdHBaaWhwYzBodmIydERiMjVtYkdsamRFVnljbTl5S0dVcEtYSmxkSFZ5Ymp0MGFISnZkeUJsZldnOWIzQmxibGR2Y210bWJHOTNWRzl2YkZKMWJrOTNibVZ5UTJoaGJtNWxiSE1vYnk1MGIydGxiaWs3YkdWMElHVTlXeTR1TG1ndWNtVmhaR1Z5Y3l4alhUdG1iM0lvWVM1a2NtbDJaWEpEWVhCaFltbHNhWFJwWlhNL0xtTmhibU5sYkd4bFpGUjFjbTVUWlhSMGJHVTlQVDBoTUNZbUtHYzlZWGRoYVhRZ1kzSmxZWFJsVkhWeWJrTmhibU5sYkd4aGRHbHZia052Ym5SeWIyd29lMk52Ym5SeWIyeFViMnRsYmpwaExtTnZiWEJzWlhScGIyNVViMnRsYml4bGVIQmxZM1JsWkZSMWNtNUpaRHBoWTNScGRtVlVkWEp1U1dRb2RTNXpaWE56YVc5dVUzUmhkR1V1WlcxcGMzTnBiMjVUZEdGMFpTa3NhVzVwZEdsaGJGQmhlV3h2WVdRNllTNXBibWwwYVdGc1EyRnVZMlZzYkdGMGFXOXVmU2twT3pzcGUyeGxkQ0J1UFd3L0xtSmxabTl5WlZOMFpYQS9QM3R6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHAxTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhObGMzTnBiMjVUZEdGMFpUcDFMbk5sYzNOcGIyNVRkR0YwWlgwc2NqMXNQeTV5WlhOMWJIUS9QMkYzWVdsMElIUjFjbTVUZEdWd0tIVXVZM0psWVhSbFUzUmxjRWx1Y0hWMEtIQXNaejh1YzJsbmJtRnNLU2s3YkQxMmIybGtJREE3YkdWMElHazljaTVoWTNScGIyNDlQVDFnWkdsemNHRjBZMmd0ZDI5eWEyWnNiM2N0ZEdGemEzTmdQM0l1Y0dWdVpHbHVaMVJoYzJ0RFlXeHNTV1J6T25JdVlXTjBhVzl1UFQwOVlIQmhjbXRnUDNJdWNHVnVaR2x1WjBOdmIzSmthVzVoZEdsdmJrTmhiR3hKWkhNNmRtOXBaQ0F3TEhNOUtISXVZbUZqYTJkeWIzVnVaRlJoYzJ0elB5NXNaVzVuZEdnL1B6QXBQakE3YVdZb2N5bDdhV1lvY2k1aVlXTnJaM0p2ZFc1a1ZHRnphMU4wWVhSbFBUMDlkbTlwWkNBd0tYUm9jbTkzSUVWeWNtOXlLR0JDWVdOclozSnZkVzVrSUhSaGMydHpJSGRsY21VZ2NtVjBkWEp1WldRZ2QybDBhRzkxZENCMGFHVnBjaUJqYjIxdGFYUjBaV1FnYzJWemMybHZiaUJ6ZEdGMFpTNWdLVHRoZDJGcGRDQjFMbUZrYjNCMEtIdHpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREcHVMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBMSE5sYzNOcGIyNVRkR0YwWlRweUxtSmhZMnRuY205MWJtUlVZWE5yVTNSaGRHVjlLU3hoZDJGcGRDQmhZMnR1YjNkc1pXUm5aVVJsYkdWbllYUmxaRlJoYzJ0elUzUmxjQ2g3ZEdGemEzTTZjaTVpWVdOclozSnZkVzVrVkdGemEzTS9QMXRkZlNsOWFXWW9jaTVoWTNScGIyNDlQVDFnWTJGdVkyVnNiR1ZrWUNsN1lYZGhhWFFnZFM1aFpHOXdkQ2g3YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2Y2k1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZjaTVpWVdOclozSnZkVzVrVkdGemExTjBZWFJsUHo5eUxuTmxjM05wYjI1VGRHRjBaWDBwTEdGM1lXbDBJR1pwYm1semFFTmhibU5sYkd4bFpGUjFjbTRvZTJKMVptWmxjbVZrUkdWc2FYWmxjbWxsY3pwbUxHTmhibU5sYkd4aGRHbHZianBuTEdOMWNuTnZjanAxZlNrN2NtVjBkWEp1ZldsbUtHYy9Mbk5wWjI1aGJDNWhZbTl5ZEdWa1BUMDlJVEFtSmlocFBUMDlkbTlwWkNBd2ZIeHpLU2w3WVhkaGFYUWdkUzVoWkc5d2RDaDdjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZjSEpsYzJWeWRtVlRaWEpwWVd4cGVtVmtVMlZ6YzJsdmJrUjVibUZ0YVdOTmIyUmxiRk5sYkdWamRHbHZiaWh1TG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhJdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRcExITmxjM05wYjI1VGRHRjBaVHAxTG5ObGMzTnBiMjVUZEdGMFpYMHBMR0YzWVdsMElHWnBibWx6YUVOaGJtTmxiR3hsWkZSMWNtNG9lMkoxWm1abGNtVmtSR1ZzYVhabGNtbGxjenBtTEdOaGJtTmxiR3hoZEdsdmJqcG5MR04xY25OdmNqcDFmU2s3Y21WMGRYSnVmV2xtS0hJdVlXTjBhVzl1UFQwOVlHUnZibVZnS1h0aGQyRnBkQ0JuUHk1a2FYTndiM05sS0Nrc1lYZGhhWFFnZFM1bWFXNXBjMmdvY2l4N2EybHVaRHBnWkc5dVpXQXNiM1YwY0hWME9uSXViM1YwY0hWMFB6OWdZQ3hwYzBWeWNtOXlPbkl1YVhORmNuSnZjaXgxYzJGblpUcHlMblZ6WVdkbExIVnpZV2RsUkdWc2RHRTZjaTUxYzJGblpVUmxiSFJoZlN4bUtUdHlaWFIxY201OWFXWW9hU0U5UFhadmFXUWdNQ1ltS0hJdVlXTjBhVzl1UFQwOVlIQmhjbXRnZkh4eUxtRmpkR2x2YmowOVBXQmthWE53WVhSamFDMTNiM0pyWm14dmR5MTBZWE5yYzJBcEtYdGhkMkZwZENCMUxtRmtiM0IwS0hJcE8yeGxkQ0J1UFdGM1lXbDBJR1JwYzNCaGRHTm9RMjl2Y21ScGJtRjBhVzl1VTNSbGNDaDdZV04wYVc5dU9uSXVZV04wYVc5dUxHTmhiR3hpWVdOclFtRnpaVlZ5YkRweVpYTnZiSFpsVjI5eWEyWnNiM2REWVd4c1ltRmphMEpoYzJWVmNtd29aMlYwVjI5eWEyWnNiM2ROWlhSaFpHRjBZU2dwTG5WeWJDa3NjR0Z5Wlc1MFEyOXVkR2x1ZFdGMGFXOXVWRzlyWlc0NmJ5NTBiMnRsYml4d1lYSmxiblJYY21sMFlXSnNaVHAxTG5CaGNtVnVkRmR5YVhSaFlteGxMSE5sY21saGJHbDZaV1JEYjI1MFpYaDBPblV1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFzYzJWemMybHZibE4wWVhSbE9uVXVjMlZ6YzJsdmJsTjBZWFJsZlNrc1lUMXVMbkpsYzNWc2RITXViR1Z1WjNSb1BUMDlNRDkyYjJsa0lEQTZSR0YwWlM1dWIzY29LVHRoZDJGcGRDQjFMbUZrYjNCMEtHNHBMR0YzWVdsMElHRmphMjV2ZDJ4bFpHZGxSR1ZzWldkaGRHVmtWR0Z6YTNOVGRHVndLSHQwWVhOcmN6cHVMbkJsYm1ScGJtZFVZWE5yYzMwcE8yeGxkQ0J6UFdGM1lXbDBJSGRoYVhSR2IzSlNkVzUwYVcxbFFXTjBhVzl1VW1WemRXeDBjeWg3WW5WbVptVnlaV1JFWld4cGRtVnlhV1Z6T21Zc1kyRnVZMlZzYkdGMGFXOXVPbWNzWTNWeWMyOXlPblVzYVc1aWIzaFViMnRsYmpwdkxuUnZhMlZ1TEdsdWFYUnBZV3hCWTJObGNIUmxaRUYwVFhNNllTeHBibWwwYVdGc1VtVnpkV3gwY3pwdUxuSmxjM1ZzZEhNc2JtVjRkRVJsYkdsMlpYSjVVbVZ4ZFdWemRFbGtMSEpsWVdSbGNuTTZaU3h3Wlc1a2FXNW5RMkZzYkVsa2N6cHBmU2s3YVdZb2N6MDlQV0JqWVc1alpXeHNaV1JnS1h0d1BYWnZhV1FnTUR0amIyNTBhVzUxWlgxcFppaHpQVDA5WUdOaGJtTmxiQzEwZFhKdVlDbDdZWGRoYVhRZ1ptbHVhWE5vUTJGdVkyVnNiR1ZrVkhWeWJpaDdZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpPbVlzWTJGdVkyVnNiR0YwYVc5dU9tY3NZM1Z5YzI5eU9uVjlLVHR5WlhSMWNtNTljRDE3YTJsdVpEcGdjblZ1ZEdsdFpTMWhZM1JwYjI0dGNtVnpkV3gwWUN3dUxpNXpmVHRqYjI1MGFXNTFaWDFwWmloeUxtRmpkR2x2YmowOVBXQndZWEpyWUNsN2FXWW9JU2h5TG1oaGMxQmxibVJwYm1kQmRYUm9iM0pwZW1GMGFXOXVmSHh5TG1oaGMxQmxibVJwYm1kSmJuQjFkRUpoZEdOb0ppWmhMbU5oY0dGaWFXeHBkR2xsY3o4dWNtVnhkV1Z6ZEVsdWNIVjBQVDA5SVRCOGZHRXViVzlrWlQwOVBXQmpiMjUyWlhKellYUnBiMjVnS1NsMGFISnZkeUJGY25KdmNpaFVRVk5MWDAxUFJFVmZWMEZKVkY5RlVsSlBVbDlOUlZOVFFVZEZLVHRoZDJGcGRDQm5QeTVrYVhOd2IzTmxLQ2tzWVhkaGFYUWdkUzVtYVc1cGMyZ29jaXg3WVhWMGFHOXlhWHBoZEdsdmJrRjBkR1Z0Y0hSSlpITTZjaTVoZFhSb2IzSnBlbUYwYVc5dVFYUjBaVzF3ZEVsa2N5eGhkWFJvYjNKcGVtRjBhVzl1VG1GdFpYTTZjaTVoZFhSb2IzSnBlbUYwYVc5dVRtRnRaWE1zYTJsdVpEcGdjR0Z5YTJBc2MyVjBkR3hsWkRweUxuTmxkSFJzWldSOUxHWXBPM0psZEhWeWJuMWhkMkZwZENCMUxtRmtiM0IwS0hJcExIQTlkbTlwWkNBd2ZYMWpZWFJqYUNobEtYdDBhSEp2ZHlCaGQyRnBkQ0IxTG5ObGJtUW9lMlZ5Y205eU9tNXZjbTFoYkdsNlpWTmxjbWxoYkdsNllXSnNaVVZ5Y205eUtHVXBMR3RwYm1RNllIUjFjbTR0WlhKeWIzSmdmU2tzWlgxbWFXNWhiR3g1ZTJjaFBUMTJiMmxrSURBbUptRjNZV2wwSUdjdVpHbHpjRzl6WlNncExHZ2hQVDEyYjJsa0lEQW1KbUYzWVdsMElHZ3VaR2x6Y0c5elpTZ3BMRzBtSm1GM1lXbDBJR1JwYzNCdmMyVkliMjlyS0c4cGZYMWhjM2x1WXlCbWRXNWpkR2x2YmlCbWFXNXBjMmhEWVc1alpXeHNaV1JVZFhKdUtHVXBleWhsTG1OaGJtTmxiR3hoZEdsdmJqOHVjMmxuYm1Gc0xtRmliM0owWldROVBUMGhNRDloZDJGcGRDQmxMbU5oYm1ObGJHeGhkR2x2Ymk1d1lYbHNiMkZrT25admFXUWdNQ2svTG5SaGMydHpQVDA5SVRBbUptRjNZV2wwSUdOaGJtTmxiRUZzYkVsdVpHVjRaV1JUWlhOemFXOXVWR0Z6YTNOVGRHVndLSHR6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHBsTG1OMWNuTnZjaTV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ3h6WlhOemFXOXVVM1JoZEdVNlpTNWpkWEp6YjNJdWMyVnpjMmx2YmxOMFlYUmxmU2tzWVhkaGFYUWdZMkZ1WTJWc1JHVnpZMlZ1WkdGdWRGUjFjbTV6VTNSbGNDaDdjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZaUzVqZFhKemIzSXVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUXNjMlZ6YzJsdmJsTjBZWFJsT21VdVkzVnljMjl5TG5ObGMzTnBiMjVUZEdGMFpYMHBMR0YzWVdsMElHVXVZMkZ1WTJWc2JHRjBhVzl1UHk1a2FYTndiM05sS0Nrc1lYZGhhWFFnWlM1amRYSnpiM0l1Wm1sdWFYTm9LSHR6WlhOemFXOXVVM1JoZEdVNlpTNWpkWEp6YjNJdWMyVnpjMmx2YmxOMFlYUmxmU3g3WTJGdVkyVnNiR1ZrT2lFd0xHdHBibVE2WUhCaGNtdGdmU3hsTG1KMVptWmxjbVZrUkdWc2FYWmxjbWxsY3lsOVlYTjVibU1nWm5WdVkzUnBiMjRnZDJGcGRFWnZjbEoxYm5ScGJXVkJZM1JwYjI1U1pYTjFiSFJ6S0dVcGUyeGxkQ0J1TEhJOVd5NHVMbVV1YVc1cGRHbGhiRkpsYzNW",
	"c2RITmRMR2s5Ym1WM0lFMWhjRHRwWmlobExtbHVhWFJwWVd4QlkyTmxjSFJsWkVGMFRYTWhQVDEyYjJsa0lEQXBabTl5S0d4bGRDQjBJRzltSUdVdWFXNXBkR2xoYkZKbGMzVnNkSE1wYVM1elpYUW9kQzVqWVd4c1NXUXNaUzVwYm1sMGFXRnNRV05qWlhCMFpXUkJkRTF6S1R0bWIzSW9PenNwZTJ4bGRDQnpQWEpsYzI5c2RtVlNkVzUwYVcxbFFXTjBhVzl1VW1WemRXeDBjMFp2Y2tOaGJHeEpaSE1vZTNCbGJtUnBibWREWVd4c1NXUnpPbVV1Y0dWdVpHbHVaME5oYkd4SlpITXNjbVZ6ZFd4MGN6cHlmU2s3YVdZb2N5RTlQWFp2YVdRZ01DbHlaWFIxY200Z2JpRTlQWFp2YVdRZ01DWW1ZWGRoYVhRZ1pTNWpkWEp6YjNJdWMyVnVaQ2g3YTJsdVpEcGdkSFZ5Ymkxa1pXeHBkbVZ5ZVMxallXNWpaV3hzWldSZ0xISmxjWFZsYzNSSlpEcHVmU2tzZTJGalkyVndkR1ZrUVhSTmMwSjVRMkZzYkVsa09rOWlhbVZqZEM1bWNtOXRSVzUwY21sbGN5aHpMbTFoY0NobFBUNWJaUzVqWVd4c1NXUXNhUzVuWlhRb1pTNWpZV3hzU1dRcFhTa3BMSEpsYzNWc2RITTZjMzA3WlM1amRYSnpiM0l1YzJWemMybHZibE4wWVhSbExtaGhjMUJ5YjNoNVNXNXdkWFJTWlhGMVpYTjBjeVltYmowOVBYWnZhV1FnTUNZbUtHNDlaUzV1WlhoMFJHVnNhWFpsY25sU1pYRjFaWE4wU1dRb0tTeGhkMkZwZENCbExtTjFjbk52Y2k1elpXNWtLSHRqYjI1MGFXNTFZWFJwYjI1VWIydGxianBsTG1OMWNuTnZjaTV6WlhOemFXOXVVM1JoZEdVdVkyOXVkR2x1ZFdGMGFXOXVWRzlyWlc0c2FXNWliM2hVYjJ0bGJqcGxMbWx1WW05NFZHOXJaVzRzYTJsdVpEcGdkSFZ5Ymkxa1pXeHBkbVZ5ZVMxeVpYRjFaWE4wWUN4eVpYRjFaWE4wU1dRNmJuMHBLVHRzWlhRZ1l6MWhkMkZwZENCeVlXTmxRMmhoYm01bGJGSmxZV1J6S0dVdWNtVmhaR1Z5Y3l4bExtTmhibU5sYkd4aGRHbHZiajh1Y21WeGRXVnpkR1ZrS1R0cFppaGpQVDA5WUdOaGJtTmxiR0FwY21WMGRYSnVJRzRoUFQxMmIybGtJREFtSm1GM1lXbDBJR1V1WTNWeWMyOXlMbk5sYm1Rb2UydHBibVE2WUhSMWNtNHRaR1ZzYVhabGNua3RZMkZ1WTJWc2JHVmtZQ3h5WlhGMVpYTjBTV1E2Ym4wcExHQmpZVzVqWld4c1pXUmdPMmxtS0dNdWJtVjRkQzVrYjI1bEtYUm9jbTkzSUVWeWNtOXlLR0JVZFhKdUlHbHVZbTk0SUdOc2IzTmxaQ0JpWldadmNtVWdjblZ1ZEdsdFpTQmhZM1JwYjI1eklHTnZiWEJzWlhSbFpDNWdLVHRwWmloakxtTm9ZVzV1Wld3OVBUMWdiM1YwWTI5dFpXQXBlMnhsZENCdVBXRjNZV2wwSUdoaGJtUnNaVmR2Y210bWJHOTNWRzl2YkZKMWJrOTFkR052YldVb2UyTmhiR3hpWVdOclRXVjBZV1JoZEdGVmNtdzZaMlYwVjI5eWEyWnNiM2ROWlhSaFpHRjBZU2dwTG5WeWJDeGpkWEp6YjNJNlpTNWpkWEp6YjNJc2JXVnpjMkZuWlRwakxtNWxlSFF1ZG1Gc2RXVjlLVHR1SVQwOWRtOXBaQ0F3SmlZb2NpNXdkWE5vS0c0cExHa3VjMlYwS0c0dVkyRnNiRWxrTEVSaGRHVXVibTkzS0NrcEtUdGpiMjUwYVc1MVpYMXBaaWhqTG1Ob1lXNXVaV3c5UFQxZ2NtVnhkV1Z6ZEdBcGUyRjNZV2wwSUdoaGJtUnNaVmR2Y210bWJHOTNWRzl2YkZKMWJsSmxjWFZsYzNRb2UyTmhiR3hpWVdOclRXVjBZV1JoZEdGVmNtdzZaMlYwVjI5eWEyWnNiM2ROWlhSaFpHRjBZU2dwTG5WeWJDeGpkWEp6YjNJNlpTNWpkWEp6YjNJc2JXVnpjMkZuWlRwakxtNWxlSFF1ZG1Gc2RXVjlLVHRqYjI1MGFXNTFaWDFwWmloakxtTm9ZVzV1Wld3OVBUMWdjbVZ3YjNKMFlDbDdZWGRoYVhRZ1pXMXBkRmR2Y210bWJHOTNWRzl2YkZKMWJsSmxjRzl5ZEZOMFpYQW9lMlp5YjIwNll5NXVaWGgwTG5aaGJIVmxMbVp5YjIwc2NHRnlaVzUwVjNKcGRHRmliR1U2WlM1amRYSnpiM0l1Y0dGeVpXNTBWM0pwZEdGaWJHVXNkWEJrWVhSbE9tTXVibVY0ZEM1MllXeDFaUzUxY0dSaGRHVjlLVHRqYjI1MGFXNTFaWDFzWlhRZ2JEMWpMbTVsZUhRdWRtRnNkV1U3YVdZb2JDNXJhVzVrUFQwOVlISjFiblJwYldVdFlXTjBhVzl1TFhKbGMzVnNkR0FwZTJ4bGRDQjBQV1V1WTNWeWMyOXlMbk5sYzNOcGIyNVRkR0YwWlM1emJtRndjMmh2ZEQ4dWMyVnpjMmx2Ymk1emRHRjBaU3h1UFd3dWNtVnpkV3gwY3k1bWFXeDBaWElvWlQwK1pTNXJhVzVrUFQwOVlIUnZiMnd0Y21WemRXeDBZRDlwYzBsdVltOTRWRzl2YkZKbGMzVnNkRVp5YjIxU1pXTnZjbVJsWkZkdmNtdG1iRzkzVkc5dmJGSjFiaWgwTEdVcE9tVXViM0pwWjJsdVBUMDlZR05vYVd4a1lDWW1hWE5KYm1KdmVGTjFZbUZuWlc1MFVtVnpkV3gwUm5KdmJWSjFibTVwYm1kSVlXNWtiR1VvZEN4bEtYeDhhWE5KYm1KdmVGTjFZbUZuWlc1MFVtVnpkV3gwUm5KdmJWSmxZMjl5WkdWa1YyOXlhMlpzYjNkVWIyOXNVblZ1S0hRc1pTa3BPMmxtS0c0dWJHVnVaM1JvUGpBcGUyeGxkQ0JsUFVSaGRHVXVibTkzS0NrN2NpNXdkWE5vS0M0dUxtNHBPMlp2Y2loc1pYUWdkQ0J2WmlCdUtXa3VjMlYwS0hRdVkyRnNiRWxrTEdVcGZXTnZiblJwYm5WbGZXbG1LR3d1YTJsdVpEMDlQV0J6ZFdKaFoyVnVkQzFwYm5CMWRDMXlaWEYxWlhOMFlIeDhiQzVyYVc1a1BUMDlZSE4xWW1GblpXNTBMV0YxZEdodmNtbDZZWFJwYjI0dFpYWmxiblJnS1h0c1pYUWdkRDFtYVc1a1VuVnVibWx1WjBGblpXNTBTR0Z1Wkd4bEtHVXVZM1Z5YzI5eUxuTmxjM05wYjI1VGRHRjBaUzV6Ym1Gd2MyaHZkRDh1YzJWemMybHZiaTV6ZEdGMFpTeDdZMkZzYkVsa09td3VZMkZzYkVsa2ZTazdhV1lvZEQ4dWFXUmxiblJwZEhrdWJtRnRaU0U5UFd3dWMzVmlZV2RsYm5ST1lXMWxmSHgwTG1Ga1pISmxjM011YzJWemMybHZia2xrSVQwOWJDNWphR2xzWkZObGMzTnBiMjVKWkNsamIyNTBhVzUxWlR0c1pYUWdiajFoZDJGcGRDQnlkVzVRY205NGVWTjFZbUZuWlc1MFJYWmxiblJUZEdWd0tIdG9iMjlyVUdGNWJHOWhaRHBzTEhCaGNtVnVkRmR5YVhSaFlteGxPbVV1WTNWeWMyOXlMbkJoY21WdWRGZHlhWFJoWW14bExITmxjbWxoYkdsNlpXUkRiMjUwWlhoME9tVXVZM1Z5YzI5eUxuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMExITmxjM05wYjI1VGRHRjBaVHBsTG1OMWNuTnZjaTV6WlhOemFXOXVVM1JoZEdWOUtUdGhkMkZwZENCbExtTjFjbk52Y2k1aFpHOXdkQ2h1S1R0amIyNTBhVzUxWlgxcFppaHNMbXRwYm1ROVBUMWdaSEpwZG1WeUxXUmxiR2wyWlhKNVlDWW1iQzV5WlhGMVpYTjBTV1E5UFQxdUtYdGhkMkZwZENCbExtTjFjbk52Y2k1elpXNWtLSHRyYVc1a09tQjBkWEp1TFdSbGJHbDJaWEo1TFdGalkyVndkR1ZrWUN4eVpYRjFaWE4wU1dRNmJDNXlaWEYxWlhOMFNXUjlLU3h1UFhadmFXUWdNRHRzWlhRZ2REMWhkMkZwZENCeWIzVjBaVVJsYkdsMlpYSlViME5vYVd4a2NtVnVLSHRrWld4cGRtVnllVHBzTG1SbGJHbDJaWEo1TEhCaGNtVnVkRmR5YVhSaFlteGxPbVV1WTNWeWMyOXlMbkJoY21WdWRGZHlhWFJoWW14bExITmxjbWxoYkdsNlpXUkRiMjUwWlhoME9tVXVZM1Z5YzI5eUxuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMExITmxjM05wYjI1VGRHRjBaVHBsTG1OMWNuTnZjaTV6WlhOemFXOXVVM1JoZEdWOUtUdHBaaWhoZDJGcGRDQmxMbU4xY25OdmNpNWhaRzl3ZENoN2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNmRDNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREOC9aUzVqZFhKemIzSXVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUXNjMlZ6YzJsdmJsTjBZWFJsT25RdWMyVnpjMmx2YmxOMFlYUmxQejlsTG1OMWNuTnZjaTV6WlhOemFXOXVVM1JoZEdWOUtTeDBMbXRwYm1ROVBUMWdZMkZ1WTJWc0xYUjFjbTVnS1hKbGRIVnliaUIwTG10cGJtUTdkQzV5WlcxaGFXNWtaWEloUFQxMmIybGtJREFtSm1VdVluVm1abVZ5WldSRVpXeHBkbVZ5YVdWekxuQjFjMmdvZEM1eVpXMWhhVzVrWlhJcGZYMTlZWE41Ym1NZ1puVnVZM1JwYjI0Z2NuVnVUR1ZuWVdONVZIVnlibGR2Y210bWJHOTNLR1VwZTJ4bGRDQjBQV1V1YzNSbGNFbHVjSFYwTzNSeWVYdG1iM0lvT3pzcGUyeGxkQ0J1UFdGM1lXbDBJSFIxY201VGRHVndLSFFwTzJsbUtHNHVZV04wYVc5dVBUMDlZR1J2Ym1WZ0tYdGhkMkZwZENCelpXNWtWSFZ5YmtOdmJuUnliMnhUZEdWd0tIdGpiMjUwY205c1ZHOXJaVzQ2WlM1amIyMXdiR1YwYVc5dVZHOXJaVzRzY0dGNWJHOWhaRHA3WVdOMGFXOXVPbnRyYVc1a09tQmtiMjVsWUN4dmRYUndkWFE2Ymk1dmRYUndkWFEvUDJCZ0xHbHpSWEp5YjNJNmJpNXBjMFZ5Y205eUxITmxjbWxoYkdsNlpXUkRiMjUwWlhoME9tNHVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUXNjMlZ6YzJsdmJsTjBZWFJsT200dWMyVnpjMmx2YmxOMFlYUmxMSFZ6WVdkbE9tNHVkWE5oWjJVc2RYTmhaMlZFWld4MFlUcHVMblZ6WVdkbFJHVnNkR0Y5TEd0cGJtUTZZSFIxY200dGNtVnpkV3gwWUgxOUtUdHlaWFIxY201OWFXWW9iaTVoWTNScGIyNDlQVDFnWkdsemNHRjBZMmd0ZDI5eWEyWnNiM2N0ZEdGemEzTmdLWHRoZDJGcGRDQnpaVzVrVkhWeWJrTnZiblJ5YjJ4VGRHVndLSHRqYjI1MGNtOXNWRzlyWlc0NlpTNWpiMjF3YkdWMGFXOXVWRzlyWlc0c2NHRjViRzloWkRwN1lXTjBhVzl1T250cmFXNWtPbUJrYVhOd1lYUmphQzEzYjNKclpteHZkeTEwWVhOcmMyQXNjR1Z1WkdsdVowTmhiR3hKWkhNNmJpNXdaVzVrYVc1blZHRnphME5oYkd4SlpITXNjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZiaTV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ3h6WlhOemFXOXVVM1JoZEdVNmJpNXpaWE56YVc5dVUzUmhkR1Y5TEd0cGJtUTZZSFIxY200dGNtVnpkV3gwWUgxOUtUdHlaWFIxY201OWFXWW9iaTVoWTNScGIyNDlQVDFnY0dGeWEyQXBlMnhsZENCMFBXNHVjR1Z1WkdsdVowTnZiM0prYVc1aGRHbHZia05oYkd4SlpITTdhV1lvSVNoMElUMDlkbTlwWkNBd2ZIeHVMbWhoYzFCbGJtUnBibWRCZFhSb2IzSnBlbUYwYVc5dWZIeHVMbWhoYzFCbGJtUnBibWRKYm5CMWRFSmhkR05vSmlabExtTmhjR0ZpYVd4cGRHbGxjejh1Y21WeGRXVnpkRWx1Y0hWMFBUMDlJVEI4ZkdVdWJXOWtaVDA5UFdCamIyNTJaWEp6WVhScGIyNWdLU2wwYUhKdmR5QkZjbkp2Y2loVVFWTkxYMDFQUkVWZlYwRkpWRjlGVWxKUFVsOU5SVk5UUVVkRktUdHNaWFFnY2oxMFBUMDlkbTlwWkNBd1AzdHJhVzVrT21Cd1lYSnJZQ3h6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHB1TG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhObGMzTnBiMjVUZEdGMFpUcHVMbk5sYzNOcGIyNVRkR0YwWlN4aGRYUm9iM0pwZW1GMGFXOXVRWFIwWlcxd2RFbGtjenB1TG1GMWRHaHZjbWw2WVhScGIyNUJkSFJsYlhCMFNXUnpMR0YxZEdodmNtbDZZWFJwYjI1T1lXMWxjenB1TG1GMWRHaHZjbWw2WVhScGIyNU9ZVzFsY3l4elpYUjBiR1ZrT200dWMyVjBkR3hsWkgwNmUydHBibVE2WUdScGMzQmhkR05vTFdOdmIzSmthVzVoZEdsdmJtQXNjR1Z1WkdsdVowTmhiR3hKWkhNNmRDeHpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREcHVMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBMSE5sYzNOcGIyNVRkR0YwWlRwdUxuTmxjM05wYjI1VGRHRjBaWDA3WVhkaGFYUWdjMlZ1WkZSMWNtNURiMjUwY205c1UzUmxjQ2g3WTI5dWRISnZiRlJ2YTJWdU9tVXVZMjl0Y0d4bGRHbHZibFJ2YTJWdUxIQmhlV3h2WVdRNmUyRmpkR2x2YmpweUxHdHBibVE2WUhSMWNtNHRjbVZ6ZFd4MFlIMTlLVHR5WlhSMWNtNTlkRDE3YVc1d2RYUTZkbTlwWkNBd0xIQmhjbVZ1ZEZkeWFYUmhZbXhsT25RdWNHRnlaVzUwVjNKcGRHRmliR1VzYzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2Ymk1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZiaTV6WlhOemFXOXVVM1JoZEdWOWZYMWpZWFJqYUNoMEtYdDBhSEp2ZHlCaGQyRnBkQ0J6Wlc1a1ZIVnlia052Ym5SeWIyeFRkR1Z3S0h0amIyNTBjbTlzVkc5clpXNDZaUzVqYjIxd2JHVjBhVzl1Vkc5clpXNHNjR0Y1Ykc5aFpEcDdaWEp5YjNJNmJtOXliV0ZzYVhwbFUyVnlhV0ZzYVhwaFlteGxSWEp5YjNJb2RDa3NhMmx1WkRwZ2RIVnliaTFsY25KdmNtQjlmU2tzZEgxOWRIVnlibGR2Y210bWJHOTNMbmR2Y210bWJHOTNTV1E5WUhkdmNtdG1iRzkzTHk5bGRtVXZMM1IxY201WGIzSnJabXh2ZDJBN1pYaHdiM0owZTNSMWNtNVhiM0pyWm14dmQzMDdYRzUwZFhKdVYyOXlhMlpzYjNjdWQyOXlhMlpzYjNkSlpDQTlJRndpZDI5eWEyWnNiM2N2TDJWMlpTOHZkSFZ5YmxkdmNtdG1iRzkzWENJN1hHNW5iRzlpWVd4VWFHbHpMbDlmY0hKcGRtRjBaVjkzYjNKclpteHZkM011YzJWMEtGd2lkMjl5YTJac2IzY3ZMMlYyWlM4dmRIVnlibGR2Y210bWJHOTNYQ0lzSUhSMWNtNVhiM0pyWm14dmR5azdYRzRpTENKamIyNXpkQ0JUUlZOVFNVOU9YME5QVFUxQlRrUmZUa0ZOUlZOUVFVTkZQV0JsZG1VNmMyVnpjMmx2Ym1BN1puVnVZM1JwYjI0Z2FYTlNaWE5sY25abFpGTmxjM05wYjI1RGIyMXRZVzVrVkc5clpXNG9aU2w3Y21WMGRYSnVJR1V1YzNSaGNuUnpWMmwwYUNoZ0pIdFRSVk5UU1U5T1gwTlBUVTFCVGtSZlRrRk5SVk5RUVVORmZUcGdLWDFtZFc1amRHbHZiaUJwYzFObGMzTnBiMjVEYjIxdFlXNWtTRzl2YTFSdmEyVnVLR1VwZTJ4bGRDQjBQV0FrZTFORlUxTkpUMDVmUTA5TlRVRk9SRjlPUVUxRlUxQkJRMFY5T21BN2NtVjBkWEp1SVdVdWMzUmhjblJ6VjJsMGFDaDBLWHg4SVdVdVpXNWtjMWRwZEdnb1lEcHBibUp2ZUdBcFB5RXhPaUZsTG5Oc2FXTmxLSFF1YkdWdVozUm9MQzAyS1M1cGJtTnNkV1JsY3loZ09tQXBmV1oxYm1OMGFXOXVJSE5sYzNOcGIyNURiMjF0WVc1a1NHOXZhMVJ2YTJWdUtHVXBlM0psZEhWeWJtQWtlMU5GVTFOSlQwNWZRMDlOVFVGT1JGOU9RVTFGVTFCQlEwVjlPaVI3WlgwNmFXNWliM2hnZldWNGNHOXlkSHRwYzFKbGMyVnlkbVZrVTJWemMybHZia052YlcxaGJtUlViMnRsYml4cGMxTmxjM05wYjI1RGIyMXRZVzVrU0c5dmExUnZhMlZ1TEhObGMzTnBiMjVEYjIxdFlXNWtTRzl2YTFSdmEyVnVmVHNpTENKbWRXNWpkR2x2YmlCcGMwOWlhbVZqZENobEtYdHlaWFIxY200Z2RIbHdaVzltSUdVOVBXQnZZbXBsWTNSZ0ppWWhJV1VtSmlGQmNuSmhlUzVwYzBGeWNtRjVLR1VwZldaMWJtTjBhVzl1SUdselRtOXVSVzF3ZEhsVGRISnBibWNvWlNsN2NtVjBkWEp1SUhSNWNHVnZaaUJsUFQxZ2MzUnlhVzVuWUNZbVpTNXNaVzVuZEdnK01IMW1kVzVqZEdsdmJpQnlaV0ZrVG05dVJXMXdkSGxUZEhKcGJtY29aU2w3Y21WMGRYSnVJR2x6VG05dVJXMXdkSGxUZEhKcGJtY29aU2svWlRwMmIybGtJREI5Wm5WdVkzUnBiMjRnYVhOVWFHVnVZV0pzWlNobEtYdHlaWFIxY200Z2FYTlBZbXBsWTNRb1pTa21KblI1Y0dWdlppQmxMblJvWlc0OVBXQm1kVzVqZEdsdmJtQjlablZ1WTNScGIyNGdhWE5GY25KdWIwTnZaR1VvWlN4MEtYdHlaWFIxY200Z1pTQnBibk4wWVc1alpXOW1JRVZ5Y205eUppWmdZMjlrWldCcGJpQmxKaVpsTG1OdlpHVTlQVDEwZldaMWJtTjBhVzl1SUdselVHeGhhVzVTWldOdmNtUW9aU2w3YVdZb0lXbHpUMkpxWldOMEtHVXBLWEpsZEhWeWJpRXhPMnhsZENCMFBVOWlhbVZqZEM1blpYUlFjbTkwYjNSNWNHVlBaaWhsS1R0eVpYUjFjbTRnZEQwOVBVOWlhbVZqZEM1d2NtOTBiM1I1Y0dWOGZIUTlQVDF1ZFd4c2ZXVjRjRzl5ZEh0cGMwVnljbTV2UTI5a1pTeHBjMDV2YmtWdGNIUjVVM1J5YVc1bkxHbHpUMkpxWldOMExHbHpVR3hoYVc1U1pXTnZjbVFzYVhOVWFHVnVZV0pzWlN4eVpXRmtUbTl1Ulcxd2RIbFRkSEpwYm1kOU95SXNJbWx0Y0c5eWRIdHViM0p0WVd4cGVtVkRhR0Z1Ym1Wc1FYVmthV1Z1WTJWOVpuSnZiVndpSTNOb1lYSmxaQzlqYUdGdWJtVnNMV0YxWkdsbGJtTmxMbXB6WENJN2FXMXdiM0owZTBOb1lXNXVaV3hTWlhGMVpYTjBTV1JMWlhrc1QzUmxiRlJ5WVdObFJXNWhZbXhsWkV0bGVTeFRZMmhsWkhWc1pVbGtTMlY1TEZObGMzTnBiMjVVY21GalpWTmxaV1JMWlhsOVpuSnZiVndpSTJOdmJuUmxlSFF2YTJWNWN5NXFjMXdpTzJsdGNHOXlkSHRwYzA1dmJrVnRjSFI1VTNSeWFXNW5mV1p5YjIxY0lpTnphR0Z5WldRdlozVmhjbVJ6TG1welhDSTdhVzF3YjNKMGUwTklRVTVPUlV4ZlEwOU9WRVZZVkY5TFJWbGZUa0ZOUlgxbWNtOXRYQ0lqWTI5dWRHVjRkQzlyWlhrdGJtRnRaWE11YW5OY0lqdHBiWEJ2Y25SN2NtVnpiMngyWlVadmNuZGhjbVJsWkZSeVlXTmxVMlZsWkgxbWNtOXRYQ0lqYzJoaGNtVmtMMlp2Y25kaGNtUmxaQzEwY21GalpTMXdiMnhwWTNrdWFuTmNJanRwYlhCdmNuUjdjMmh2ZFd4a1EyRndkSFZ5WlVsdWMzUnlkVzFsYm5SaGRHbHZia052Ym5SbGJuUjlabkp2YlZ3aUkzTm9ZWEpsWkM5cGJuTjBjblZ0Wlc1MFlYUnBiMjR0WTI5dWRHVnVkQzVxYzF3aU8ybHRjRzl5ZEh0cGMxTmhiWEJzWldSVWNtRmpaWDFtY205dFhDSWpkSEpoWTJsdVp5OXpZVzF3YkdWa0xYUnlZV05sTG1welhDSTdablZ1WTNScGIyNGdjbVZoWkVOb1lXNXVaV3hMYVc1a0tHVXBlMnhsZENCMFBXVmJRMGhCVGs1RlRGOURUMDVVUlZoVVgwdEZXVjlPUVUxRlhUOHVhMmx1WkR0eVpYUjFjbTRnYVhOT2IyNUZiWEIwZVZOMGNtbHVaeWgwS1Q5ME9uWnZhV1FnTUgxbWRXNWpkR2x2YmlCcGMxZHZjbXRtYkc5M1ZISmhZMlZEYjI1MFpXNTBWbWx6YVdKc1pTaDBLWHRzWlhRZ2JqMTBXMU5sYzNOcGIyNVVjbUZqWlZObFpXUkxaWGt1Ym1GdFpWMDdhV1lvYmlFOVBYWnZhV1FnTUNsN2JHVjBJR1U5Y21WemIyeDJaVVp2Y25kaGNtUmxaRlJ5WVdObFUyVmxaQ2h1S1R0cFppaGxMbVp2Y25kaGNtUmxaRlJ5WVdObFVHOXNhV041SVQwOWRtOXBaQ0F3S1h0c1pYUWdkRDFsTG1SbFkybHphVzl1TzNKbGRIVnliaUIwUHk1aFkzUnBiMjQ5UFQxZ2NtVmpiM0prWUNZbWRDNXlaV052Y21SSmJuQjFkSE1tSm5RdWNtVmpiM0prVDNWMGNIVjBjMzE5YkdWMElISTlkRnREU0VGT1RrVk1YME5QVGxSRldGUmZTMFZaWDA1QlRVVmRPM0psZEhWeWJpQnphRzkxYkdSRFlYQjBkWEpsU1c1emRISjFiV1Z1ZEdGMGFXOXVRMjl1ZEdWdWRDaHViM0p0WVd4cGVtVkRhR0Z1Ym1Wc1FYVmthV1Z1WTJVb2NqOHVZWFZrYVdWdVkyVXBLWDFtZFc1amRHbHZiaUJwYzFkdmNtdG1iRzkzVDNSbGJGUnlZV05sUlc1aFlteGxaQ2hsS1h0eVpYUjFjbTRnWlZ0UGRHVnNWSEpoWTJWRmJtRmliR1ZrUzJWNUxtNWhiV1ZkUFQwOUlUQjlablZ1WTNScGIyNGdjbVZoWkZObGMzTnBiMjVVY21GalpVbGtLR1VwZTJ4bGRDQjBQV1ZiVTJWemMybHZibFJ5WVdObFUyVmxaRXRsZVM1dVlXMWxYVHRwWmlnaEtIUTlQVDEyYjJsa0lEQjhmQ0ZwYzFOaGJYQnNaV1JVY21GalpTaHlaWE52YkhabFJtOXlkMkZ5WkdWa1ZISmhZMlZUWldWa0tIUXBLU2twY21WMGRYSnVJR2x6VG05dVJXMXdkSGxUZEhKcGJtY29kQzUwY21GalpVbGtLVDkwTG5SeVlXTmxTV1E2ZG05cFpDQXdmV1oxYm1OMGFXOXVJSEpsWVdSUVlYSmxiblJNYVc1bFlXZGxLR1VwZTJ4bGRDQjBQV1ZiWUdWMlpTNXdZWEpsYm5SVFpYTnphVzl1WUYwc2JqMTBQeTVqWVd4c1NXUXNjajEwUHk1eWIyOTBVMlZ6YzJsdmJrbGtMR2s5ZEQ4dWMyVnpjMmx2Ymtsa0xHRTlkRDh1ZEhWeWJqOHVhV1E3Y21WMGRYSnVlMk5oYkd4SlpEcHBjMDV2YmtWdGNIUjVVM1J5YVc1bktHNHBQMjQ2ZG05cFpDQXdMSEp2YjNSVFpYTnphVzl1U1dRNmFYTk9iMjVGYlhCMGVWTjBjbWx1WnloeUtUOXlPblp2YVdRZ01DeHpaWE56YVc5dVNXUTZhWE5PYjI1RmJYQjBlVk4wY21sdVp5aHBLVDlwT25admFXUWdNQ3gwZFhKdVNXUTZhWE5PYjI1RmJYQjBlVk4wY21sdVp5aGhLVDloT25admFXUWdNSDE5Wm5WdVkzUnBiMjRnY21WaFpGQmhjbVZ1ZEZObGMzTnBiMjVKWkNobEtYdHlaWFIxY200Z2NtVmhaRkJoY21WdWRFeHBibVZoWjJVb1pTa3VjMlZ6YzJsdmJrbGtmV1oxYm1OMGFXOXVJSEpsWVdSU2IyOTBVMlZ6YzJsdmJrbGtLR1VwZTNKbGRIVnliaUJ5WldGa1VHRnlaVzUwVEdsdVpXRm5aU2hsS1M1eWIyOTBVMlZ6YzJsdmJrbGtmV1oxYm1OMGFXOXVJSEpsWVdSRGFHRnVibVZzVW1WeGRXVnpkRWxrS0dVcGUyeGxkQ0J1UFdWYlEyaGhibTVsYkZKbGNYVmxjM1JKWkV0bGVTNXVZVzFsWFR0eVpYUjFjbTRnYVhOT2IyNUZiWEIwZVZOMGNtbHVaeWh1S1Q5dU9uWnZhV1FnTUgxbWRXNWpkR2x2YmlCeVpXRmtVMk5vWldSMWJHVkpaQ2hsS1h0c1pYUWdkRDFsVzFOamFHVmtkV3hsU1dSTFpYa3VibUZ0WlYwN2NtVjBkWEp1SUdselRtOXVSVzF3ZEhsVGRISnBibWNvZENrL2REcDJiMmxrSURCOVkyOXVjM1FnUlZaRlgxTkZVMU5KVDA1ZlZFbFVURVZmVFVGWVgwTklRVkpUUFRFeU5UdG1kVzVqZEdsdmJpQmtaWEpwZG1WVFpYTnphVzl1VkdsMGJHVW9aU2w3YkdWMElIUTlZMjlzYkdWamRFMWxjM05oWjJWVVpYaDBLR1VwTzJsbUtIUTlQVDEyYjJsa0lEQjhmSFF1YkdWdVozUm9QVDA5TUNseVpYUjFjbTQ3YkdWMElHNDlkQzV5WlhCc1lXTmxLQzljWEhNckwyZDFMR0FnWUNrdWRISnBiU2dwTzJsbUtHNHViR1Z1WjNSb1BUMDlNQ2x5WlhSMWNtNDdiR1YwSUhJOVFYSnlZWGt1Wm5KdmJTaHVLVHR5WlhSMWNtNGdjaTVzWlc1bmRHZzhQVEV5TlQ5dU9tQWtlM0l1YzJ4cFkyVW9NQ3d4TWpRcExtcHZhVzRvWUdBcGZlS0FwbUI5Wm5WdVkzUnBiMjRnWTI5c2JHVmpkRTFsYzNOaFoyVlVaWGgwS0dVcGUybG1LSFI1Y0dWdlppQmxQVDFnYzNSeWFXNW5ZQ2x5WlhSMWNtNGdaVHRwWmlnaFFYSnlZWGt1YVhOQmNuSmhlU2hsS1NseVpYUjFjbTQ3YkdWMElIUTlXMTA3Wm05eUtHeGxkQ0J1SUc5bUlHVXBiaVltZEhsd1pXOW1JRzQ5UFdCdlltcGxZM1JnSmladUxuUjVjR1U5UFQxZ2RHVjRkR0FtSm5SNWNHVnZaaUJ1TG5SbGVIUTlQV0J6ZEhKcGJtZGdKaVowTG5CMWMyZ29iaTUwWlhoMEtUdHlaWFIxY200Z2RDNXNaVzVuZEdnK01EOTBMbXB2YVc0b1lDQmdLVHAyYjJsa0lEQjlablZ1WTNScGIyNGdZblZwYkdSVFpYTnphVzl1UVhSMGNtbGlkWFJsY3lobEtYdHNaWFFnZEQxcGMxZHZjbXRtYkc5M1ZISmhZMlZEYjI1MFpXNTBWbWx6YVdKc1pTaGxMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBLU3h1UFdselYyOXlhMlpzYjNkUGRHVnNWSEpoWTJWRmJtRmliR1ZrS0dVdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRcE8zSmxkSFZ5Ym50Y0lpUmxkbVV1WTJoaGJtNWxiRjl5WlhGMVpYTjBYMmxrWENJNmNtVmhaRU5vWVc1dVpXeFNaWEYxWlhOMFNXUW9aUzV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ2tzWENJa1pYWmxMbk5qYUdWa2RXeGxYQ0k2Y21WaFpGTmphR1ZrZFd4bFNXUW9aUzV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ2tzWENJa1pYWmxMbWx6WDI5MFpXeGZkSEpoWTJWZlpXNWhZbXhsWkZ3aU9tNHNYQ0lrWlhabExtbHpYM1J5WVdObFgyTnZiblJsYm5SZmRtbHphV0pzWlZ3aU9uUXNYQ0lrWlhabExuUnlZV05sWDJsa1hDSTZjbVZoWkZObGMzTnBiMjVVY21GalpVbGtLR1V1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFwTEZ3aUpHVjJaUzUwZVhCbFhDSTZZSE5sYzNOcGIyNWdMRndpSkdWMlpTNTBjbWxuWjJWeVhDSTZjbVZoWkVOb1lXNXVaV3hMYVc1a0tHVXVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUXBMRndpSkdWMlpTNTBhWFJzWlZ3aU9tUmxjbWwyWlZObGMzTnBiMjVVYVhSc1pTaGxMbWx1Y0hWMFRXVnpjMkZuWlNsOWZXWjFibU4wYVc5dUlHSjFhV3hrVTNWaVlXZGxiblJTYjI5MFFYUjBjbWxpZFhSbGN5aGxLWHR5WlhSMWNtNTdYQ0lrWlhabExtTm9ZVzV1Wld4ZmNtVnhkV1Z6ZEY5cFpGd2lPbkpsWVdSRGFHRnVibVZzVW1WeGRXVnpkRWxrS0dVdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRcExGd2lKR1YyWlM1cGMxOXZkR1ZzWDNSeVlXTmxYMlZ1WVdKc1pXUmNJanBwYzFkdmNtdG1iRzkzVDNSbGJGUnlZV05sUlc1aFlteGxaQ2hsTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwS1N4Y0lpUmxkbVV1YVhOZmRISmhZMlZmWTI5dWRHVnVkRjkyYVhOcFlteGxYQ0k2YVhOWGIzSnJabXh2ZDFSeVlXTmxRMjl1ZEdWdWRGWnBjMmxpYkdVb1pTNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDa3NYQ0lrWlhabExuUnlZV05sWDJsa1hDSTZjbVZoWkZObGMzTnBiMjVVY21GalpVbGtLR1V1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFwTEZ3aUpHVjJaUzUwZVhCbFhDSTZZSE4xWW1GblpXNTBZQ3hjSWlSbGRtVXVjR0Z5Wlc1MFhDSTZaUzV3WVhKbGJuUlRaWE56YVc5dVNXUXNYQ0lrWlhabExuQmhjbVZ1ZEY5allXeHNYQ0k2WlM1d1lYSmxiblJEWVd4c1NXUXNYQ0lrWlhabExuQmhjbVZ1ZEY5MGRYSnVYQ0k2WlM1d1lYSmxiblJVZFhKdVNXUXNYQ0lrWlhabExuSnZiM1JjSWpwbExuSnZiM1JUWlhOemFXOXVTV1FzWENJa1pYWmxMbk4xWW1GblpXNTBYQ0k2WlM1cFpHVnVkR2wwZVM1dWIyUmxTV1FzWENJa1pYWmxMblJ5YVdkblpYSmNJanB5WldGa1EyaGhibTVsYkV0cGJtUW9aUzV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ2w5ZldaMWJtTjBhVzl1SUdKMWFXeGtWSFZ5YmtGMGRISnBZblYwWlhNb1pTbDdjbVYwZFhKdWUxd2lKR1YyWlM1amFHRnVibVZzWDNKbGNYVmxjM1JmYVdSY0lqcGxMbkpsY1hW",
	"bGMzUkpaQ3hjSWlSbGRtVXVhWE5mYjNSbGJGOTBjbUZqWlY5bGJtRmliR1ZrWENJNmFYTlhiM0pyWm14dmQwOTBaV3hVY21GalpVVnVZV0pzWldRb1pTNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDa3NYQ0lrWlhabExtbHpYM1J5WVdObFgyTnZiblJsYm5SZmRtbHphV0pzWlZ3aU9tbHpWMjl5YTJac2IzZFVjbUZqWlVOdmJuUmxiblJXYVhOcFlteGxLR1V1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFwTEZ3aUpHVjJaUzUwY21GalpWOXBaRndpT25KbFlXUlRaWE56YVc5dVZISmhZMlZKWkNobExuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMEtTeGNJaVJsZG1VdWRIbHdaVndpT21CMGRYSnVZQ3hjSWlSbGRtVXVjR0Z5Wlc1MFhDSTZaUzV3WVhKbGJuUlRaWE56YVc5dVNXUXNYQ0lrWlhabExuSnZiM1JjSWpwbExuSnZiM1JUWlhOemFXOXVTV1I5ZldWNGNHOXlkSHRGVmtWZlUwVlRVMGxQVGw5VVNWUk1SVjlOUVZoZlEwaEJVbE1zWW5WcGJHUlRaWE56YVc5dVFYUjBjbWxpZFhSbGN5eGlkV2xzWkZOMVltRm5aVzUwVW05dmRFRjBkSEpwWW5WMFpYTXNZblZwYkdSVWRYSnVRWFIwY21saWRYUmxjeXhrWlhKcGRtVlRaWE56YVc5dVZHbDBiR1VzYVhOWGIzSnJabXh2ZDA5MFpXeFVjbUZqWlVWdVlXSnNaV1FzYVhOWGIzSnJabXh2ZDFSeVlXTmxRMjl1ZEdWdWRGWnBjMmxpYkdVc2NtVmhaRU5vWVc1dVpXeExhVzVrTEhKbFlXUkRhR0Z1Ym1Wc1VtVnhkV1Z6ZEVsa0xISmxZV1JRWVhKbGJuUk1hVzVsWVdkbExISmxZV1JRWVhKbGJuUlRaWE56YVc5dVNXUXNjbVZoWkZKdmIzUlRaWE56YVc5dVNXUXNjbVZoWkZOamFHVmtkV3hsU1dRc2NtVmhaRk5sYzNOcGIyNVVjbUZqWlVsa2ZUc2lMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbk4wWlhCelhDSTZlMXdpWkdsemRDOXpjbU12YzNWaVlXZGxiblJ6TDJOaGJHeGlZV05yTFhOMFpYQXVhbk5jSWpwN1hDSm1hWEpsVkdGemEwVjJaVzUwUTJGc2JHSmhZMnRUZEdWd1hDSTZlMXdpYzNSbGNFbGtYQ0k2WENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5bWFYSmxWR0Z6YTBWMlpXNTBRMkZzYkdKaFkydFRkR1Z3WENKOUxGd2labWx5WlZSaGMydFZjR1JoZEdWRFlXeHNZbUZqYTFOMFpYQmNJanA3WENKemRHVndTV1JjSWpwY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwyWnBjbVZVWVhOclZYQmtZWFJsUTJGc2JHSmhZMnRUZEdWd1hDSjlMRndpWm1seVpWTmxjM05wYjI1RFlXeHNZbUZqYTFOMFpYQmNJanA3WENKemRHVndTV1JjSWpwY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwyWnBjbVZUWlhOemFXOXVRMkZzYkdKaFkydFRkR1Z3WENKOWZYMTlLaTg3WEc1bGVIQnZjblFnZG1GeUlHWnBjbVZVWVhOclJYWmxiblJEWVd4c1ltRmphMU4wWlhBZ1BTQm5iRzlpWVd4VWFHbHpXMU41YldKdmJDNW1iM0lvWENKWFQxSkxSa3hQVjE5VlUwVmZVMVJGVUZ3aUtWMG9YQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTltYVhKbFZHRnphMFYyWlc1MFEyRnNiR0poWTJ0VGRHVndYQ0lwTzF4dVpYaHdiM0owSUhaaGNpQm1hWEpsVkdGemExVndaR0YwWlVOaGJHeGlZV05yVTNSbGNDQTlJR2RzYjJKaGJGUm9hWE5iVTNsdFltOXNMbVp2Y2loY0lsZFBVa3RHVEU5WFgxVlRSVjlUVkVWUVhDSXBYU2hjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJacGNtVlVZWE5yVlhCa1lYUmxRMkZzYkdKaFkydFRkR1Z3WENJcE8xeHVaWGh3YjNKMElIWmhjaUJtYVhKbFUyVnpjMmx2YmtOaGJHeGlZV05yVTNSbGNDQTlJR2RzYjJKaGJGUm9hWE5iVTNsdFltOXNMbVp2Y2loY0lsZFBVa3RHVEU5WFgxVlRSVjlUVkVWUVhDSXBYU2hjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJacGNtVlRaWE56YVc5dVEyRnNiR0poWTJ0VGRHVndYQ0lwTzF4dUlpd2lMeW9xWDE5cGJuUmxjbTVoYkY5M2IzSnJabXh2ZDNON1hDSnpkR1Z3YzF3aU9udGNJbVJwYzNRdmMzSmpMM04xWW1GblpXNTBjeTl3WVhKbGJuUXRibTkwYVdacFkyRjBhVzl1TG1welhDSTZlMXdpYm05MGFXWjVSR1ZzWldkaGRHVmtVR0Z5Wlc1MFUzUmxjRndpT250Y0luTjBaWEJKWkZ3aU9sd2ljM1JsY0M4dlpYWmxRREF1TlRFdU1TOHZibTkwYVdaNVJHVnNaV2RoZEdWa1VHRnlaVzUwVTNSbGNGd2lmU3hjSW01dmRHbG1lVlIxY201RFlXeHNaWEpUZEdWd1hDSTZlMXdpYzNSbGNFbGtYQ0k2WENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5dWIzUnBabmxVZFhKdVEyRnNiR1Z5VTNSbGNGd2lmU3hjSW01dmRHbG1lVU5oYm1ObGJHeGxaRlJoYzJ0RFlXeHNaWEpUZEdWd1hDSTZlMXdpYzNSbGNFbGtYQ0k2WENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5dWIzUnBabmxEWVc1alpXeHNaV1JVWVhOclEyRnNiR1Z5VTNSbGNGd2lmU3hjSW5KbGMyOXNkbVZKYm1sMGFXRnNWSFZ5YmtOaGJHeGxjbE4wWlhCY0lqcDdYQ0p6ZEdWd1NXUmNJanBjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDNKbGMyOXNkbVZKYm1sMGFXRnNWSFZ5YmtOaGJHeGxjbE4wWlhCY0luMHNYQ0ppYVc1a1ZIVnlia05oYkd4bGNrTnZiblJsZUhSVGRHVndYQ0k2ZTF3aWMzUmxjRWxrWENJNlhDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OWlhVzVrVkhWeWJrTmhiR3hsY2tOdmJuUmxlSFJUZEdWd1hDSjlmWDE5S2k4N1hHNWxlSEJ2Y25RZ2RtRnlJRzV2ZEdsbWVVUmxiR1ZuWVhSbFpGQmhjbVZ1ZEZOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5dWIzUnBabmxFWld4bFoyRjBaV1JRWVhKbGJuUlRkR1Z3WENJcE8xeHVaWGh3YjNKMElIWmhjaUJ1YjNScFpubFVkWEp1UTJGc2JHVnlVM1JsY0NBOUlHZHNiMkpoYkZSb2FYTmJVM2x0WW05c0xtWnZjaWhjSWxkUFVrdEdURTlYWDFWVFJWOVRWRVZRWENJcFhTaGNJbk4wWlhBdkwyVjJaVUF3TGpVeExqRXZMMjV2ZEdsbWVWUjFjbTVEWVd4c1pYSlRkR1Z3WENJcE8xeHVaWGh3YjNKMElIWmhjaUJ1YjNScFpubERZVzVqWld4c1pXUlVZWE5yUTJGc2JHVnlVM1JsY0NBOUlHZHNiMkpoYkZSb2FYTmJVM2x0WW05c0xtWnZjaWhjSWxkUFVrdEdURTlYWDFWVFJWOVRWRVZRWENJcFhTaGNJbk4wWlhBdkwyVjJaVUF3TGpVeExqRXZMMjV2ZEdsbWVVTmhibU5sYkd4bFpGUmhjMnREWVd4c1pYSlRkR1Z3WENJcE8xeHVaWGh3YjNKMElIWmhjaUJ5WlhOdmJIWmxTVzVwZEdsaGJGUjFjbTVEWVd4c1pYSlRkR1Z3SUQwZ1oyeHZZbUZzVkdocGMxdFRlVzFpYjJ3dVptOXlLRndpVjA5U1MwWk1UMWRmVlZORlgxTlVSVkJjSWlsZEtGd2ljM1JsY0M4dlpYWmxRREF1TlRFdU1TOHZjbVZ6YjJ4MlpVbHVhWFJwWVd4VWRYSnVRMkZzYkdWeVUzUmxjRndpS1R0Y2JtVjRjRzl5ZENCMllYSWdZbWx1WkZSMWNtNURZV3hzWlhKRGIyNTBaWGgwVTNSbGNDQTlJR2RzYjJKaGJGUm9hWE5iVTNsdFltOXNMbVp2Y2loY0lsZFBVa3RHVEU5WFgxVlRSVjlUVkVWUVhDSXBYU2hjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJKcGJtUlVkWEp1UTJGc2JHVnlRMjl1ZEdWNGRGTjBaWEJjSWlrN1hHNGlMQ0pwYlhCdmNuUjdhWE5QWW1wbFkzUjlabkp2YlZ3aUkzTm9ZWEpsWkM5bmRXRnlaSE11YW5OY0lqdG1kVzVqZEdsdmJpQjBiMFZ5Y205eVRXVnpjMkZuWlNoMEtYdHlaWFIxY200Z2RDQnBibk4wWVc1alpXOW1JRVZ5Y205eVAzUXViV1Z6YzJGblpUcDBlWEJsYjJZZ2REMDlZSE4wY21sdVoyQS9kRHAwUFQxdWRXeHNQMU4wY21sdVp5aDBLVHBwYzA5aWFtVmpkQ2gwS1Q5MGVYQmxiMllnZEM1dFpYTnpZV2RsUFQxZ2MzUnlhVzVuWUNZbWRDNXRaWE56WVdkbExteGxibWQwYUQ0d1AzUXViV1Z6YzJGblpUcHpZV1psU25OdmJsTjBjbWx1WjJsbWVTaDBLVHBUZEhKcGJtY29kQ2w5Wm5WdVkzUnBiMjRnZEc5RmNuSnZjaWgwS1h0cFppaDBJR2x1YzNSaGJtTmxiMllnUlhKeWIzSXBjbVYwZFhKdUlIUTdiR1YwSUc0OVJYSnliM0lvZEc5RmNuSnZjazFsYzNOaFoyVW9kQ2twTzNKbGRIVnliaUJwYzA5aWFtVmpkQ2gwS1Q4b2RIbHdaVzltSUhRdWJtRnRaVDA5WUhOMGNtbHVaMkFtSm5RdWJtRnRaUzVzWlc1bmRHZytNQ1ltS0c0dWJtRnRaVDEwTG01aGJXVXBMSFI1Y0dWdlppQjBMbk4wWVdOclBUMWdjM1J5YVc1bllDWW1kQzV6ZEdGamF5NXNaVzVuZEdnK01DWW1LRzR1YzNSaFkyczlkQzV6ZEdGamF5a3NZR05oZFhObFlHbHVJSFFtSm5RdVkyRjFjMlVoUFQxMmIybGtJREFtSm5RdVkyRjFjMlVoUFQxMEppWW9iaTVqWVhWelpUMTBMbU5oZFhObEtTeHVLVHB1ZldaMWJtTjBhVzl1S25kaGJHdERZWFZ6WlVOb1lXbHVLSFFwZTJ4bGRDQnVQVzVsZHlCVFpYUXNjajEwTzJadmNpZzdhWE5QWW1wbFkzUW9jaWttSmlGdUxtaGhjeWh5S1RzcGJpNWhaR1FvY2lrc2VXbGxiR1FnY2l4eVBYSXVZMkYxYzJWOVpuVnVZM1JwYjI0Z2MyRm1aVXB6YjI1VGRISnBibWRwWm5rb1pTbDdkSEo1ZTNKbGRIVnliaUJLVTA5T0xuTjBjbWx1WjJsbWVTaGxLVDgvVTNSeWFXNW5LR1VwZldOaGRHTm9lM0psZEhWeWJpQlRkSEpwYm1jb1pTbDlmV1Y0Y0c5eWRIdDBiMFZ5Y205eUxIUnZSWEp5YjNKTlpYTnpZV2RsTEhkaGJHdERZWFZ6WlVOb1lXbHVmVHNpTENKamIyNXpkQ0JUVlVKQlIwVk9WRjlCUkVGUVZFVlNYMHRKVGtROVlITjFZbUZuWlc1MFlEdG1kVzVqZEdsdmJpQnBjMU4xWW1GblpXNTBRV1JoY0hSbGNsTjBZWFJsS0dVcGUybG1LSFI1Y0dWdlppQmxJVDFnYjJKcVpXTjBZSHg4SVdVcGNtVjBkWEp1SVRFN2JHVjBJSFE5WlR0eVpYUjFjbTRnZEhsd1pXOW1JSFF1WTJGc2JFbGtQVDFnYzNSeWFXNW5ZQ1ltZEM1allXeHNTV1F1YkdWdVozUm9QakFtSm5SNWNHVnZaaUIwTG5CaGNtVnVkRU52Ym5ScGJuVmhkR2x2YmxSdmEyVnVQVDFnYzNSeWFXNW5ZQ1ltZEM1d1lYSmxiblJEYjI1MGFXNTFZWFJwYjI1VWIydGxiaTVzWlc1bmRHZytNQ1ltZEhsd1pXOW1JSFF1Y0dGeVpXNTBVMlZ6YzJsdmJrbGtQVDFnYzNSeWFXNW5ZQ1ltZEhsd1pXOW1JSFF1YzNWaVlXZGxiblJPWVcxbFBUMWdjM1J5YVc1bllDWW1kQzV6ZFdKaFoyVnVkRTVoYldVdWJHVnVaM1JvUGpBbUppaDBMblJoYzJ0SlpEMDlQWFp2YVdRZ01IeDhkSGx3Wlc5bUlIUXVkR0Z6YTBsa1BUMWdjM1J5YVc1bllDWW1kQzUwWVhOclNXUXViR1Z1WjNSb1BqQXBmV1Y0Y0c5eWRIdFRWVUpCUjBWT1ZGOUJSRUZRVkVWU1gwdEpUa1FzYVhOVGRXSmhaMlZ1ZEVGa1lYQjBaWEpUZEdGMFpYMDdJaXdpYVcxd2IzSjBlM1J2UlhKeWIzSk5aWE56WVdkbGZXWnliMjFjSWlOemFHRnlaV1F2WlhKeWIzSnpMbXB6WENJN2FXMXdiM0owZTBOSVFVNU9SVXhmUTA5T1ZFVllWRjlMUlZsZlRrRk5SWDFtY205dFhDSWpZMjl1ZEdWNGRDOXJaWGt0Ym1GdFpYTXVhbk5jSWp0cGJYQnZjblI3VTFWQ1FVZEZUbFJmUlZoRlExVlVTVTlPWDBaQlNVeEZSSDFtY205dFhDSWpjM1ZpWVdkbGJuUnpMMkZuWlc1MExXaGhibVJzWlMxbGNuSnZjbk11YW5OY0lqdHBiWEJ2Y25SN1UxVkNRVWRGVGxSZlFVUkJVRlJGVWw5TFNVNUVmV1p5YjIxY0lpTnpkV0poWjJWdWRITXZZV1JoY0hSbGNpMXpkR0YwWlM1cWMxd2lPMk52Ym5OMElGcEZVazlmVkU5TFJVNWZWVk5CUjBVOWUyTmhZMmhsVW1WaFpGUnZhMlZ1Y3pvd0xHTmhZMmhsVjNKcGRHVlViMnRsYm5NNk1DeHBibkIxZEZSdmEyVnVjem93TEc5MWRIQjFkRlJ2YTJWdWN6b3dmVHRtZFc1amRHbHZiaUJqY21WaGRHVkVaV3hsWjJGMFpXUlRkV0poWjJWdWRGTjFZMk5sYzNOU1pYTjFiSFFvWlN4dUtYdHNaWFFnYVQxbFcwTklRVTVPUlV4ZlEwOU9WRVZZVkY5TFJWbGZUa0ZOUlYwN2FXWW9hVDh1YTJsdVpEMDlQVk5WUWtGSFJVNVVYMEZFUVZCVVJWSmZTMGxPUkNseVpYUjFjbTU3WTJGc2JFbGtPbE4wY21sdVp5aHBMbk4wWVhSbFB5NWpZV3hzU1dRL1AyQmdLU3hyYVc1a09tQnpkV0poWjJWdWRDMXlaWE4xYkhSZ0xHOXlhV2RwYmpwZ1kyaHBiR1JnTEc5MWRHTnZiV1U2ZTJ0cGJtUTZZSFJsY20xcGJtRnNZQ3h5WlhOMWJIUTZlMnRwYm1RNllITjFZMk5sWldSbFpHQXNiM1YwY0hWME9tNTlMSFZ6WVdkbFJHVnNkR0U2V2tWU1QxOVVUMHRGVGw5VlUwRkhSWDBzYjNWMGNIVjBPbTRzYzNWaVlXZGxiblJPWVcxbE9sTjBjbWx1WnlocExuTjBZWFJsUHk1emRXSmhaMlZ1ZEU1aGJXVS9QMkJnS1gxOVpuVnVZM1JwYjI0Z1kzSmxZWFJsUkdWc1pXZGhkR1ZrVTNWaVlXZGxiblJGY25KdmNsSmxjM1ZzZENoMExISXBlMnhsZENCcFBXTnlaV0YwWlVSbGJHVm5ZWFJsWkZOMVltRm5aVzUwVTNWalkyVnpjMUpsYzNWc2RDaDBMR0JnS1R0cFppaHBQVDA5ZG05cFpDQXdLWEpsZEhWeWJqdHNaWFFnWVQxN1kyOWtaVHBUVlVKQlIwVk9WRjlGV0VWRFZWUkpUMDVmUmtGSlRFVkVMRzFsYzNOaFoyVTZkRzlGY25KdmNrMWxjM05oWjJVb2NpbDlPM0psZEhWeWJuc3VMaTVwTEdselJYSnliM0k2SVRBc2IzVjBZMjl0WlRwN2EybHVaRHBnZEdWeWJXbHVZV3hnTEhKbGMzVnNkRHA3WlhKeWIzSTZZU3hyYVc1a09tQm1ZV2xzWldSZ2ZTeDFjMkZuWlVSbGJIUmhPbHBGVWs5ZlZFOUxSVTVmVlZOQlIwVjlMRzkxZEhCMWREcGhmWDFsZUhCdmNuUjdZM0psWVhSbFJHVnNaV2RoZEdWa1UzVmlZV2RsYm5SRmNuSnZjbEpsYzNWc2RDeGpjbVZoZEdWRVpXeGxaMkYwWldSVGRXSmhaMlZ1ZEZOMVkyTmxjM05TWlhOMWJIUjlPeUlzSWk4cUtsOWZhVzUwWlhKdVlXeGZkMjl5YTJac2IzZHplMXdpYzNSbGNITmNJanA3WENKa2FYTjBMM055WXk5bGVHVmpkWFJwYjI0dmRHVnliV2x1WVhSbExXTm9hV3hrTFhObGMzTnBiMjV6TFhOMFpYQXVhbk5jSWpwN1hDSjBaWEp0YVc1aGRHVkRhR2xzWkZObGMzTnBiMjV6VTNSbGNGd2lPbnRjSW5OMFpYQkpaRndpT2x3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dmRHVnliV2x1WVhSbFEyaHBiR1JUWlhOemFXOXVjMU4wWlhCY0luMTlmWDBxTHp0Y2JtVjRjRzl5ZENCMllYSWdkR1Z5YldsdVlYUmxRMmhwYkdSVFpYTnphVzl1YzFOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5MFpYSnRhVzVoZEdWRGFHbHNaRk5sYzNOcGIyNXpVM1JsY0Z3aUtUdGNiaUlzSWk4cUtsOWZhVzUwWlhKdVlXeGZkMjl5YTJac2IzZHplMXdpYzNSbGNITmNJanA3WENKa2FYTjBMM055WXk5bGVHVmpkWFJwYjI0dmNtVndiM0owTFdSeWIzQndaV1F0ZDJseVpTMXdZWGxzYjJGa0xYTjBaWEF1YW5OY0lqcDdYQ0p5WlhCdmNuUkVjbTl3Y0dWa1YybHlaVkJoZVd4dllXUlRkR1Z3WENJNmUxd2ljM1JsY0Vsa1hDSTZYQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTl5WlhCdmNuUkVjbTl3Y0dWa1YybHlaVkJoZVd4dllXUlRkR1Z3WENKOWZYMTlLaTg3WEc1bGVIQnZjblFnZG1GeUlISmxjRzl5ZEVSeWIzQndaV1JYYVhKbFVHRjViRzloWkZOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5eVpYQnZjblJFY205d2NHVmtWMmx5WlZCaGVXeHZZV1JUZEdWd1hDSXBPMXh1SWl3aVkyOXVjM1FnVTBWVFUwbFBUbDlKVGtKUFdGOVhTVkpGWDFaRlVsTkpUMDVUUFZzeExESXNNeXcwTERVc05sMHNVMFZUVTBsUFRsOUpUa0pQV0Y5WFNWSkZYMVpGVWxOSlQwNDlVMFZUVTBsUFRsOUpUa0pQV0Y5WFNWSkZYMVpGVWxOSlQwNVRXMU5GVTFOSlQwNWZTVTVDVDFoZlYwbFNSVjlXUlZKVFNVOU9VeTVzWlc1bmRHZ3RNVjBzVTBWVFUwbFBUbDlKVGtKUFdGOVhTVkpGWDFaRlVsTkpUMDVmVFVWVVFVUkJWRUZmUzBWWlBXQnpaWE56YVc5dVNXNWliM2hYYVhKbFZtVnljMmx2Ym1BN1puVnVZM1JwYjI0Z2FYTlRaWE56YVc5dVNXNWliM2hYYVhKbFZtVnljMmx2YmloMEtYdHlaWFIxY200Z1UwVlRVMGxQVGw5SlRrSlBXRjlYU1ZKRlgxWkZVbE5KVDA1VExuTnZiV1VvWlQwK1pUMDlQWFFwZlhaaGNpQlRaWE56YVc5dVNXNWliM2hYYVhKbFJYSnliM0k5WTJ4aGMzTWdaWGgwWlc1a2N5QkZjbkp2Y250amIyNXpkSEoxWTNSdmNpaGxLWHR6ZFhCbGNpaGxLU3gwYUdsekxtNWhiV1U5WUZObGMzTnBiMjVKYm1KdmVGZHBjbVZGY25KdmNtQjlmVHRsZUhCdmNuUjdVMFZUVTBsUFRsOUpUa0pQV0Y5WFNWSkZYMVpGVWxOSlQwNHNVMFZUVTBsUFRsOUpUa0pQV0Y5WFNWSkZYMVpGVWxOSlQwNVRMRk5GVTFOSlQwNWZTVTVDVDFoZlYwbFNSVjlXUlZKVFNVOU9YMDFGVkVGRVFWUkJYMHRGV1N4VFpYTnphVzl1U1c1aWIzaFhhWEpsUlhKeWIzSXNhWE5UWlhOemFXOXVTVzVpYjNoWGFYSmxWbVZ5YzJsdmJuMDdJaXdpYVcxd2IzSjBlMmx6VDJKcVpXTjBmV1p5YjIxY0lpTnphR0Z5WldRdlozVmhjbVJ6TG1welhDSTdablZ1WTNScGIyNGdiV2xuY21GMFpWTmxjM05wYjI1SmJtSnZlRmRwY21WV01DaDBLWHRzWlhRZ2JqMTBPMmxtS0c0dWEybHVaRDA5UFdCelpXNWtZQ2x5WlhSMWNtNGdiV2xuY21GMFpVeGxaMkZqZVZObGJtUW9iaWs3YVdZb2JpNXJhVzVrUFQwOVlHUmxiR2wyWlhKZ0ppWWhLRUZ5Y21GNUxtbHpRWEp5WVhrb2JpNXdZWGxzYjJGa2N5a21KbTR1Y0dGNWJHOWhaSE11WlhabGNua29hWE5QWW1wbFkzUXBLU2wwYUhKdmR5QkZjbkp2Y2loZ2JHVm5ZV041SUdSbGJHbDJaWElnY0dGNWJHOWhaQ0JvWVhNZ2JtOGdiMkpxWldOMExXRnljbUY1SUhCaGVXeHZZV1J6SUdacFpXeGtMbUFwTzNKbGRIVnlibnN1TGk1dUxIWmxjbk5wYjI0Nk1YMTlablZ1WTNScGIyNGdiV2xuY21GMFpVeGxaMkZqZVZObGJtUW9kQ2w3YVdZb0lXbHpUMkpxWldOMEtIUXVjR0Y1Ykc5aFpDa3BkR2h5YjNjZ1JYSnliM0lvWUd4bFoyRmplU0J6Wlc1a0lHTnZiVzFoYm1RZ2FHRnpJRzV2SUc5aWFtVmpkQ0J3WVhsc2IyRmtJR1pwWld4a0xtQXBPMmxtS0hRdVpHVnNhWFpsY25raFBUMTJiMmxrSURBbUppRnBjMDlpYW1WamRDaDBMbVJsYkdsMlpYSjVLU2wwYUhKdmR5QkZjbkp2Y2loZ2JHVm5ZV041SUhObGJtUWdZMjl0YldGdVpDQm9ZWE1nWVNCdWIyNHRiMkpxWldOMElHUmxiR2wyWlhKNUlHWnBaV3hrTG1BcE8zSmxkSFZ5Ym50aGRYUm9PblF1WVhWMGFDeGpZV3hzWlhJNmRDNWpZV3hzWlhJc1pHVnNhWFpsY25sTlpYUmhaR0YwWVRwMExtUmxiR2wyWlhKNVBUMDlkbTlwWkNBd1AzWnZhV1FnTURwYmV5NHVMblF1WkdWc2FYWmxjbmtzY0dGNWJHOWhaRWx1WkdWNE9qQjlYU3hyYVc1a09tQmtaV3hwZG1WeVlDeHdZWGxzYjJGa09uUXVjR0Y1Ykc5aFpDeHdZWGxzYjJGa2N6cGJkQzV3WVhsc2IyRmtYU3h5WlhGMVpYTjBTV1E2ZEM1eVpYRjFaWE4wU1dRc2RHRnphMFJsYkdsMlpYSjVTV1E2ZEM1MFlYTnJSR1ZzYVhabGNubEpaQ3gwZFhKdVVHOXNhV041T25RdWRIVnlibEJ2YkdsamVTeDJaWEp6YVc5dU9qRjlmV052Ym5OMElITmxjM05wYjI1SmJtSnZlRmRwY21WV01FMXBaM0poZEdsdmJqMTdabkp2YlRvd0xHMXBaM0poZEdVNmJXbG5jbUYwWlZObGMzTnBiMjVKYm1KdmVGZHBjbVZXTUN4MGJ6b3hmVHRtZFc1amRHbHZiaUJsYm1OdlpHVlRaWE56YVc5dVEyOXRiV0Z1WkZZd0tHVXNkQ2w3YVdZb1pTNXJhVzVrSVQwOVlHUmxiR2wyWlhKZ0tYdHNaWFI3ZG1WeWMybHZianAwTEM0dUxtNTlQV1U3Y21WMGRYSnVJRzU5YVdZb2REMDlQV0JrWld4cGRtVnlZQ2w3YkdWMGUzQmhlV3h2WVdRNmRDeDJaWEp6YVc5dU9tNHNMaTR1Y24wOVpUdHlaWFIxY200Z2NuMXNaWFFnYmoxbExtUmxiR2wyWlhKNVRXVjBZV1JoZEdFL0xtWnBibVFvWlQwK1pTNXdZWGxzYjJGa1NXNWtaWGc5UFQwd0tTeHlPMmxtS0c0aFBUMTJiMmxrSURBcGUyeGxkSHR3WVhsc2IyRmtTVzVrWlhnNlpTd3VMaTUwZlQxdU8zSTlkSDF5WlhSMWNtNTdZWFYwYURwbExtRjFkR2dzWTJGc2JHVnlPbVV1WTJGc2JHVnlMR1JsYkdsMlpYSjVPbklzYTJsdVpEcGdjMlZ1WkdBc2NHRjViRzloWkRwbExuQmhlV3h2WVdRc2NtVnhkV1Z6ZEVsa09tVXVjbVZ4ZFdWemRFbGtMSFJoYzJ0RVpXeHBkbVZ5ZVVsa09tVXVkR0Z6YTBSbGJHbDJaWEo1U1dRc2RIVnlibEJ2YkdsamVUcGxMblIxY201UWIyeHBZM2w5ZldWNGNHOXlkSHRsYm1OdlpHVlRaWE56YVc5dVEyOXRiV0Z1WkZZd0xITmxjM05wYjI1SmJtSnZlRmRwY21WV01FMXBaM0poZEdsdmJuMDdJaXdpYVcxd2IzSjBlMmx6VDJKcVpXTjBmV1p5YjIxY0lpTnphR0Z5WldRdlozVmhjbVJ6TG1welhDSTdablZ1WTNScGIyNGdibTl5YldGc2FYcGxVMlZ6YzJsdmJrbHVZbTk0VjJseVpWWXlLR1VzZEQwaE1TbDdjbVYwZFhKdUlHVTlQVDEyYjJsa0lEQS9kRDl1ZFd4c09uWnZhV1FnTURwQmNuSmhlUzVwYzBGeWNtRjVLR1VwUDJVdWJXRndLR1U5UG01dmNtMWhiR2w2WlZObGMzTnBiMjVKYm1KdmVGZHBjbVZXTWlobExDRXdLU2s2YVhOUWJHRnBibEpsWTI5eVpDUXhLR1VwUDA5aWFtVmpkQzVtY205dFJXNTBjbWxsY3loUFltcGxZM1F1Wlc1MGNtbGxjeWhsS1M1bWFXeDBaWElvWlQwK1pWc3hYU0U5UFhadmFXUWdNQ2t1YldGd0tDaGJaU3gwWFNrOVBsdGxMRzV2Y20xaGJHbDZaVk5sYzNOcGIyNUpibUp2ZUZkcGNtVldNaWgwS1YwcEtUcGxmV1oxYm1OMGFXOXVJR2x6VUd4aGFXNVNaV052Y21Ra01TaDBLWHRwWmlnaGFYTlBZbXBsWTNRb2RDa3BjbVYwZFhKdUlURTdiR1YwSUc0OVQySnFaV04wTG1kbGRGQnliM1J2ZEhsd1pVOW1LSFFwTzNKbGRIVnliaUJ1UFQwOWJuVnNiSHg4YmowOVBVOWlhbVZqZEM1d2NtOTBiM1I1Y0dWOGZFOWlhbVZqZEM1blpYUlFjbTkwYjNSNWNHVlBaaWh1S1QwOVBXNTFiR3g5Wlhod2IzSjBlMjV2Y20xaGJHbDZaVk5sYzNOcGIyNUpibUp2ZUZkcGNtVldNbjA3SWl3aVkyOXVjM1FnYzJWemMybHZia2x1WW05NFYybHlaVll4VFdsbmNtRjBhVzl1UFh0bWNtOXRPakVzYldsbmNtRjBaU2hsS1h0c1pYUWdkRDFsTEc0OWV5NHVMblFzZG1WeWMybHZiam95ZlR0eVpYUjFjbTRnZEM1cmFXNWtQVDA5WUdSbGJHbDJaWEpnSmlZaEtHQndZWGxzYjJGa1lHbHVJSFFwSmlZb2JpNXdZWGxzYjJGa1BYdDlLU3h1ZlN4MGJ6b3lmVHRsZUhCdmNuUjdjMlZ6YzJsdmJrbHVZbTk0VjJseVpWWXhUV2xuY21GMGFXOXVmVHNpTENKamIyNXpkQ0J6WlhOemFXOXVTVzVpYjNoWGFYSmxWakpOYVdkeVlYUnBiMjQ5ZTJaeWIyMDZNaXh0YVdkeVlYUmxLR1VwZTNKbGRIVnlibnN1TGk1bExIWmxjbk5wYjI0Nk0zMTlMSFJ2T2pOOU8yVjRjRzl5ZEh0elpYTnphVzl1U1c1aWIzaFhhWEpsVmpKTmFXZHlZWFJwYjI1OU95SXNJbWx0Y0c5eWRIdHBjMDlpYW1WamRIMW1jbTl0WENJamMyaGhjbVZrTDJkMVlYSmtjeTVxYzF3aU8yTnZibk4wSUhObGMzTnBiMjVKYm1KdmVGZHBjbVZXTTAxcFozSmhkR2x2YmoxN1puSnZiVG96TEcxcFozSmhkR1VvZENsN2FXWW9JV2x6VDJKcVpXTjBLSFFwS1hSb2NtOTNJRVZ5Y205eUtHQnpaWE56YVc5dUlHbHVZbTk0SUhkcGNtVWdkak1nZG1Gc2RXVWdhWE1nYm05MElHRnVJRzlpYW1WamRDNWdLVHR5WlhSMWNtNGdkQzVyYVc1a1BUMDlZR1JsYkdsMlpYSmdQM3N1TGk1MExIQmhlV3h2WVdRNmJXbG5jbUYwWlZCaGVXeHZZV1FvZEM1d1lYbHNiMkZrS1N4d1lYbHNiMkZrY3pwQmNuSmhlUzVwYzBGeWNtRjVLSFF1Y0dGNWJHOWhaSE1wUDNRdWNHRjViRzloWkhNdWJXRndLRzFwWjNKaGRHVlFZWGxzYjJGa0tUcDBMbkJoZVd4dllXUnpMSFpsY25OcGIyNDZOSDA2ZXk0dUxuUXNkbVZ5YzJsdmJqbzBmWDBzZEc4Nk5IMDdablZ1WTNScGIyNGdiV2xuY21GMFpWQmhlV3h2WVdRb2RDbDdhV1lvSVdselQySnFaV04wS0hRcGZId2hhWE5QWW1wbFkzUW9kQzUwWVhOcktTbHlaWFIxY200Z2REdHNaWFFnYmoxMExuUmhjMnM3Y21WMGRYSnVleTR1TG5Rc2RHRnphenA3WVdkbGJuUlNaWEYxWlhOMGN6cHVMbUZuWlc1MFVtVnhkV1Z6ZEhNc1lYVjBhRzl5YVhwaGRHbHZia1YyWlc1MGN6cHVMbUYxZEdodmNtbDZZWFJwYjI1RmRtVnVkSE1zYVc1d2RYUlNaWEYxWlhOMGN6cHRhV2R5WVhSbFNXNXdkWFJTWlhGMVpYTjBjeWh1TG1sdWNIVjBVbVZ4ZFdWemRITXBMSFpwWlhkek9rRnljbUY1TG1selFYSnlZWGtvYmk1MmFXVjNjeWsvYmk1MmFXVjNjeTV0WVhBb2JXbG5jbUYwWlZSaGMydFdhV1YzS1RwdUxuWnBaWGR6ZlgxOVpuVnVZM1JwYjI0Z2JXbG5jbUYwWlVsdWNIVjBVbVZ4ZFdWemRITW9kQ2w3YVdZb1FYSnlZWGt1YVhOQmNuSmhlU2gwS1NseVpYUjFjbTRnZEM1bWJHRjBUV0Z3S0hROVBudHBaaWdoYVhOUFltcGxZM1FvZENrcGNtVjBkWEp1VzEwN2FXWW9ZSEpsY1hWbGMzUmdhVzRnZEh4OFlISmxjWFZsYzNSellHbHVJSFFwY21WMGRYSnVXM1JkTzJsbUtDRnBjMDlpYW1WamRDaDBMbWh2YjJ0UVlYbHNiMkZrS1h4OGRIbHdaVzltSUhRdWRHRnphMGxrSVQxZ2MzUnlhVzVuWUNseVpYUjFjbTViWFR0c1pYUWdiajEwTG1odmIydFFZWGxzYjJGa0xISTliaTVsZG1W",
	"dWREdHlaWFIxY200Z2RIbHdaVzltSUc0dVkyaHBiR1JEYjI1MGFXNTFZWFJwYjI1VWIydGxiaUU5WUhOMGNtbHVaMkI4ZkNGcGMwOWlhbVZqZENoeUtYeDhJVUZ5Y21GNUxtbHpRWEp5WVhrb2NpNXlaWEYxWlhOMGN5bDhmSFI1Y0dWdlppQnlMbk5sY1hWbGJtTmxJVDFnYm5WdFltVnlZSHg4ZEhsd1pXOW1JSEl1YzNSbGNFbHVaR1Y0SVQxZ2JuVnRZbVZ5WUh4OGRIbHdaVzltSUhJdWRIVnlia2xrSVQxZ2MzUnlhVzVuWUQ5YlhUcHlMbkpsY1hWbGMzUnpMbTFoY0NobFBUNG9leTR1TG5Rc2NtVndiSGxVYnpwdUxtTm9hV3hrUTI5dWRHbHVkV0YwYVc5dVZHOXJaVzRzY21WeGRXVnpkRHBsTEhObGNYVmxibU5sT25JdWMyVnhkV1Z1WTJVc2MzUmxjRWx1WkdWNE9uSXVjM1JsY0VsdVpHVjRMSFJoYzJ0SlpEcDBMblJoYzJ0SlpDeDBkWEp1U1dRNmNpNTBkWEp1U1dSOUtTbDlLWDFtZFc1amRHbHZiaUJ0YVdkeVlYUmxWR0Z6YTFacFpYY29kQ2w3Y21WMGRYSnVJV2x6VDJKcVpXTjBLSFFwZkh3aGFYTlBZbXBsWTNRb2RDNWxlR1ZqZFhSdmNpay9kRHA3TGk0dWRDeGxlR1ZqZFhSdmNqcDBMbVY0WldOMWRHOXlMbUpwYm1ScGJtYzlQVDEyYjJsa0lEQS9kbTlwWkNBd09udGlhVzVrYVc1bk9uUXVaWGhsWTNWMGIzSXVZbWx1WkdsdVozMTlmV1Y0Y0c5eWRIdHpaWE56YVc5dVNXNWliM2hYYVhKbFZqTk5hV2R5WVhScGIyNTlPeUlzSW1sdGNHOXlkSHRwYzA5aWFtVmpkSDFtY205dFhDSWpjMmhoY21Wa0wyZDFZWEprY3k1cWMxd2lPMk52Ym5OMElITmxjM05wYjI1SmJtSnZlRmRwY21WV05FMXBaM0poZEdsdmJqMTdabkp2YlRvMExHMXBaM0poZEdVb1pTbDdhV1lvSVdselQySnFaV04wS0dVcEtYUm9jbTkzSUVWeWNtOXlLR0J6WlhOemFXOXVJR2x1WW05NElIZHBjbVVnZGpRZ2RtRnNkV1VnYVhNZ2JtOTBJR0Z1SUc5aWFtVmpkQzVnS1R0eVpYUjFjbTU3TGk0dVpTeDJaWEp6YVc5dU9qVjlmU3gwYnpvMWZUdGxlSEJ2Y25SN2MyVnpjMmx2YmtsdVltOTRWMmx5WlZZMFRXbG5jbUYwYVc5dWZUc2lMQ0pwYlhCdmNuUjdhWE5QWW1wbFkzUjlabkp2YlZ3aUkzTm9ZWEpsWkM5bmRXRnlaSE11YW5OY0lqdHBiWEJ2Y25SN1UwVlRVMGxQVGw5SlRrSlBXRjlYU1ZKRlgxWkZVbE5KVDA0c1UyVnpjMmx2YmtsdVltOTRWMmx5WlVWeWNtOXlMRk5sYzNOcGIyNUpibUp2ZUZkcGNtVkZjbkp2Y2lCaGN5QlRaWE56YVc5dVNXNWliM2hYYVhKbFJYSnliM0lrTVgxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNkcGNtVXZjMlZ6YzJsdmJpMXBibUp2ZUMxamIyNTBjbUZqZEM1cWMxd2lPMmx0Y0c5eWRIdHpaWE56YVc5dVNXNWliM2hYYVhKbFZqQk5hV2R5WVhScGIyNTlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOTNhWEpsTDNObGMzTnBiMjR0YVc1aWIzZ3RkMmx5WlM1Mk1DNXFjMXdpTzJsdGNHOXlkSHR5ZFc1TmFXZHlZWFJwYjI1RGFHRnBibjFtY205dFhDSWpaWGhsWTNWMGFXOXVMMlIxY21GaWJHVXRjMlZ6YzJsdmJpMXRhV2R5WVhScGIyNXpMMk5vWVdsdUxtcHpYQ0k3YVcxd2IzSjBlMjV2Y20xaGJHbDZaVk5sYzNOcGIyNUpibUp2ZUZkcGNtVldNbjFtY205dFhDSWpaWGhsWTNWMGFXOXVMM2RwY21VdmMyVnpjMmx2YmkxcGJtSnZlQzEzYVhKbExuWXlMVzFwWjNKaGRHbHZiaTVxYzF3aU8ybHRjRzl5ZEh0elpYTnphVzl1U1c1aWIzaFhhWEpsVmpGTmFXZHlZWFJwYjI1OVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5M2FYSmxMM05sYzNOcGIyNHRhVzVpYjNndGQybHlaUzUyTWk1dGFXZHlZWFJwYjI0dWFuTmNJanRwYlhCdmNuUjdjMlZ6YzJsdmJrbHVZbTk0VjJseVpWWXlUV2xuY21GMGFXOXVmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkMmx5WlM5elpYTnphVzl1TFdsdVltOTRMWGRwY21VdWRqTXViV2xuY21GMGFXOXVMbXB6WENJN2FXMXdiM0owZTNObGMzTnBiMjVKYm1KdmVGZHBjbVZXTTAxcFozSmhkR2x2Ym4xbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNkcGNtVXZjMlZ6YzJsdmJpMXBibUp2ZUMxM2FYSmxMblkwTG0xcFozSmhkR2x2Ymk1cWMxd2lPMmx0Y0c5eWRIdHpaWE56YVc5dVNXNWliM2hYYVhKbFZqUk5hV2R5WVhScGIyNTlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOTNhWEpsTDNObGMzTnBiMjR0YVc1aWIzZ3RkMmx5WlM1Mk5TNXRhV2R5WVhScGIyNHVhbk5jSWp0amIyNXpkQ0JYU1ZKRlgweEJRa1ZNUFdCelpYTnphVzl1SUdsdVltOTRJSEJoZVd4dllXUmdMSE5sYzNOcGIyNUpibUp2ZUUxcFozSmhkR2x2Ym5NOVczTmxjM05wYjI1SmJtSnZlRmRwY21WV01FMXBaM0poZEdsdmJpeHpaWE56YVc5dVNXNWliM2hYYVhKbFZqRk5hV2R5WVhScGIyNHNjMlZ6YzJsdmJrbHVZbTk0VjJseVpWWXlUV2xuY21GMGFXOXVMSE5sYzNOcGIyNUpibUp2ZUZkcGNtVldNMDFwWjNKaGRHbHZiaXh6WlhOemFXOXVTVzVpYjNoWGFYSmxWalJOYVdkeVlYUnBiMjRzZTJaeWIyMDZOU3h0YVdkeVlYUmxLSFFwZTJsbUtDRnBjMDlpYW1WamRDaDBLU2wwYUhKdmR5QkZjbkp2Y2loZ2MyVnpjMmx2YmlCcGJtSnZlQ0IzYVhKbElIWTFJSFpoYkhWbElHbHpJRzV2ZENCaGJpQnZZbXBsWTNRdVlDazdjbVYwZFhKdWV5NHVMblFzZG1WeWMybHZiam8yZlgwc2RHODZObjFkTzJaMWJtTjBhVzl1SUdSbFkyOWtaU2hsS1h0c1pYUWdiajEwZVhCbGIyWWdaVDA5WUc5aWFtVmpkR0FtSm1VbUptQjJaWEp6YVc5dVlHbHVJR1UvWlM1MlpYSnphVzl1T25admFXUWdNRHRwWmloMGVYQmxiMllnWlQwOVlHOWlhbVZqZEdBbUptVW1KbUIyWlhKemFXOXVZR2x1SUdVbUpuUjVjR1Z2WmlCdUlUMWdiblZ0WW1WeVlDbDBhSEp2ZHlCdVpYY2dVMlZ6YzJsdmJrbHVZbTk0VjJseVpVVnljbTl5SkRFb1lDUjdWMGxTUlY5TVFVSkZUSDA2SUhaaGJIVmxJR2hoY3lCdWJ5QnVkVzFsY21saklGd2lkbVZ5YzJsdmJsd2lJR1pwWld4a0xtQXBPMnhsZENCeVBXNXZjbTFoYkdsNlpWTmxjM05wYjI1SmJtSnZlRmRwY21WV01paGxLVHRwWmlnb2JqMDlQVEY4Zkc0OVBUMHlmSHh1UFQwOU15a21KbU52Ym5SaGFXNXpRM1Z5Y21WdWRGUmhjMnROWlhOellXZGxjeWh5S1NsMGFISnZkeUJ1WlhjZ1UyVnpjMmx2YmtsdVltOTRWMmx5WlVWeWNtOXlKREVvWUNSN1YwbFNSVjlNUVVKRlRIMGdaRzlsY3lCdWIzUWdiV0YwWTJnZ2QybHlaU0IyWlhKemFXOXVJQ1I3Ym4wdVlDazdiR1YwSUdrN2RISjVlMms5Y25WdVRXbG5jbUYwYVc5dVEyaGhhVzRvZTJsdWFYUnBZV3hXWlhKemFXOXVPakFzYkdGaVpXdzZWMGxTUlY5TVFVSkZUQ3h0YVdkeVlYUnBiMjV6T25ObGMzTnBiMjVKYm1KdmVFMXBaM0poZEdsdmJuTXNkR0Z5WjJWMFZtVnljMmx2YmpwVFJWTlRTVTlPWDBsT1FrOVlYMWRKVWtWZlZrVlNVMGxQVGl4MllXeDFaVHB5ZlNsOVkyRjBZMmdvWlNsN2RHaHliM2NnYm1WM0lGTmxjM05wYjI1SmJtSnZlRmRwY21WRmNuSnZjaVF4S0dVZ2FXNXpkR0Z1WTJWdlppQkZjbkp2Y2o5bExtMWxjM05oWjJVNlUzUnlhVzVuS0dVcEtYMXNaWFFnWVQxdWIzSnRZV3hwZW1WVFpYTnphVzl1U1c1aWIzaFhhWEpsVmpJb2FTazdhV1lvWVM1MlpYSnphVzl1SVQwOVUwVlRVMGxQVGw5SlRrSlBXRjlYU1ZKRlgxWkZVbE5KVDA0cGRHaHliM2NnYm1WM0lGTmxjM05wYjI1SmJtSnZlRmRwY21WRmNuSnZjaVF4S0dBa2UxZEpVa1ZmVEVGQ1JVeDlJR1JsWTJ4aGNtVnpJSFpsY25OcGIyNGdKSHRLVTA5T0xuTjBjbWx1WjJsbWVTaGhMblpsY25OcGIyNHBmU3dnWlhod1pXTjBaV1FnSkh0VFJWTlRTVTlPWDBsT1FrOVlYMWRKVWtWZlZrVlNVMGxQVG4wdVlDazdhV1lvZEhsd1pXOW1JRzQ5UFdCdWRXMWlaWEpnSmladVBqMHlKaVpoTG10cGJtUTlQVDFnWkdWc2FYWmxjbUFtSmlFb1lIQmhlV3h2WVdSZ2FXNGdZU2twZEdoeWIzY2dibVYzSUZObGMzTnBiMjVKYm1KdmVGZHBjbVZGY25KdmNpUXhLR0FrZTFkSlVrVmZURUZDUlV4OUlHUnZaWE1nYm05MElHMWhkR05vSUhkcGNtVWdkbVZ5YzJsdmJpQWtlMjU5TG1BcE8zSmxkSFZ5YmlCdWIzSnRZV3hwZW1WWGFYSmxLR0VwZldOdmJuTjBJSE5sYzNOcGIyNUpibUp2ZUZkcGNtVTllMlJsWTI5a1pYMDdablZ1WTNScGIyNGdZMjl1ZEdGcGJuTkRkWEp5Wlc1MFZHRnphMDFsYzNOaFoyVnpLSFFwZTNKbGRIVnliaUZwYzA5aWFtVmpkQ2gwS1h4OGRDNXJhVzVrSVQwOVlHUmxiR2wyWlhKZ1B5RXhPaWhCY25KaGVTNXBjMEZ5Y21GNUtIUXVjR0Y1Ykc5aFpITXBQM1F1Y0dGNWJHOWhaSE02VzEwcExuTnZiV1VvZEQwK2UybG1LQ0ZwYzA5aWFtVmpkQ2gwS1h4OElXbHpUMkpxWldOMEtIUXVkR0Z6YXlrcGNtVjBkWEp1SVRFN2FXWW9UMkpxWldOMExtaGhjMDkzYmloMExuUmhjMnNzWUdGblpXNTBVbVZ4ZFdWemRITmdLU2x5WlhSMWNtNGhNRHRzWlhRZ2JqMTBMblJoYzJzdWFXNXdkWFJTWlhGMVpYTjBjenR5WlhSMWNtNGdRWEp5WVhrdWFYTkJjbkpoZVNodUtTWW1iaTV6YjIxbEtIUTlQbWx6VDJKcVpXTjBLSFFwSmlZb1lISmxjWFZsYzNSZ2FXNGdkSHg4WUhKbGNYVmxjM1J6WUdsdUlIUXBLWDBwZldaMWJtTjBhVzl1SUc1dmNtMWhiR2w2WlZkcGNtVW9aU2w3YzNkcGRHTm9LR1V1YTJsdVpDbDdZMkZ6WldCa1pXeHBkbVZ5WURweVpYUjFjbTU3WVhWMGFEcGxMbUYxZEdnc1kyRnNiR1Z5T21VdVkyRnNiR1Z5TEdSbGJHbDJaWEo1VFdWMFlXUmhkR0U2WlM1a1pXeHBkbVZ5ZVUxbGRHRmtZWFJoTEd0cGJtUTZZR1JsYkdsMlpYSmdMSEJoZVd4dllXUnpPbVV1Y0dGNWJHOWhaSE1zY21WeGRXVnpkRWxrT21VdWNtVnhkV1Z6ZEVsa0xIUmhjMnRFWld4cGRtVnllVWxrT21VdWRHRnphMFJsYkdsMlpYSjVTV1FzZEhWeWJsQnZiR2xqZVRwbExuUjFjbTVRYjJ4cFkzbDlPMk5oYzJWZ2MyVnpjMmx2YmkxMGFXMWxiM1YwWURweVpYUjFjbTU3YTJsdVpEcGdjMlZ6YzJsdmJpMTBhVzFsYjNWMFlIMDdZMkZ6WldCamJHVmhjbUE2Y21WMGRYSnVlMnRwYm1RNllHTnNaV0Z5WUgwN1kyRnpaV0JqYjIxd1lXTjBZRHB5WlhSMWNtNTdhMmx1WkRwZ1kyOXRjR0ZqZEdCOU8yTmhjMlZnY21WelpYUmdPbkpsZEhWeWJudHJhVzVrT21CeVpYTmxkR0FzY21WaGMyOXVPbVV1Y21WaGMyOXVmVHRqWVhObFlHTmhibU5sYkdBNmNtVjBkWEp1ZTJ0cGJtUTZZR05oYm1ObGJHQXNkR0Z6YTBsa09tVXVkR0Z6YTBsa0xIUmhjMnR6T21VdWRHRnphM01zZEhWeWJrbGtPbVV1ZEhWeWJrbGtmVHRrWldaaGRXeDBPblJvY205M0lHNWxkeUJUWlhOemFXOXVTVzVpYjNoWGFYSmxSWEp5YjNJa01TaGdKSHRYU1ZKRlgweEJRa1ZNZlNCb1lYTWdZVzRnZFc1eVpXTnZaMjVwZW1Wa0lHdHBibVFnSkh0S1UwOU9Mbk4wY21sdVoybG1lU2hsTG10cGJtUXBmUzVnS1gxOVpYaHdiM0owZTFObGMzTnBiMjVKYm1KdmVGZHBjbVZGY25KdmNpeHpaWE56YVc5dVNXNWliM2hYYVhKbGZUc2lMQ0pwYlhCdmNuUjdZMjloYkdWelkyVkVaV3hwZG1WeWFXVnpmV1p5YjIxY0lpTm9ZWEp1WlhOekwyMWxjM05oWjJWekxtcHpYQ0k3YVcxd2IzSjBlMk5oYm1ObGJFRnNiRWx1WkdWNFpXUlRaWE56YVc5dVZHRnphM05UZEdWd2ZXWnliMjFjSWlObGVHVmpkWFJwYjI0dlkyRnVZMlZzTFdsdVpHVjRaV1F0YzJWemMybHZiaTEwWVhOcmN5MXpkR1Z3TG1welhDSTdhVzF3YjNKMGUzSmxjRzl5ZEVSeWIzQndaV1JYYVhKbFVHRjViRzloWkZOMFpYQjlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOXlaWEJ2Y25RdFpISnZjSEJsWkMxM2FYSmxMWEJoZVd4dllXUXRjM1JsY0M1cWMxd2lPMmx0Y0c5eWRIdFRaWE56YVc5dVNXNWliM2hYYVhKbFJYSnliM0lzYzJWemMybHZia2x1WW05NFYybHlaWDFtY205dFhDSWpaWGhsWTNWMGFXOXVMM2RwY21VdmMyVnpjMmx2YmkxcGJtSnZlQzEzYVhKbExtcHpYQ0k3YVcxd2IzSjBlM0p2ZFhSbFJHVnNhWFpsY2xSdlEyaHBiR1J5Wlc1OVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5eWIzVjBaUzFqYUdsc1pDMWtaV3hwZG1WeWVTNXFjMXdpTzJGemVXNWpJR1oxYm1OMGFXOXVJRzVsZUhSVWRYSnVSR1ZzYVhabGNua29aU2w3YVdZb1pTNWhkMkZwZEVGMWRHaHZjbWw2WVhScGIyNURZV3hzWW1GamEzTWhQVDBoTUNseVpYUjFjbTRnWVhkaGFYUWdZWGRoYVhST1pYaDBWSFZ5YmtSbGJHbDJaWEo1S0dVcE8yVXVZMjl0YldGdVpFbHVZbTk0TG5ObGRFRjFkR2h2Y21sNllYUnBiMjVYYVc1a2IzY29JVEFwTzNSeWVYdHlaWFIxY200Z1lYZGhhWFFnWVhkaGFYUk9aWGgwVkhWeWJrUmxiR2wyWlhKNUtHVXBmV1pwYm1Gc2JIbDdaUzVqYjIxdFlXNWtTVzVpYjNndWMyVjBRWFYwYUc5eWFYcGhkR2x2YmxkcGJtUnZkeWdoTVNsOWZXRnplVzVqSUdaMWJtTjBhVzl1SUdGM1lXbDBUbVY0ZEZSMWNtNUVaV3hwZG1WeWVTaGxLWHRzWlhRZ2REMWxMbU5oYm1ObGJHeGxaRlJoYzJ0SlpITS9QMjVsZHlCVFpYUXNiajFsTG5ObFpXNVVZWE5yUkdWc2FYWmxjbWxsY3o4L2JtVjNJRk5sZER0bWIzSW9PenNwZTJ4bGRDQnlQV0YzWVdsMElIZGhhWFJHYjNKT1pYaDBVMlZ6YzJsdmJrRmpkR2x2YmloN1luVm1abVZ5WldSRVpXeHBkbVZ5YVdWek9tVXVZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpMR0oxWm1abGNtVmtVMlZ6YzJsdmJrTnZiblJ5YjJ4ek9tVXVZblZtWm1WeVpXUlRaWE56YVc5dVEyOXVkSEp2YkhNc1kyRnVZMlZzYkdWa1ZHRnphMGxrY3pwMExHTnZiVzFoYm1SSmJtSnZlRHBsTG1OdmJXMWhibVJKYm1KdmVDeGtaV1psY2tSbGJHbDJaWEpwWlhNNlpTNWtaV1psY2tSbGJHbDJaWEpwWlhNc2MyVmxibFJoYzJ0RVpXeHBkbVZ5YVdWek9tNHNjM1JoZEdWRGRYSnpiM0k2WlM1emRHRjBaVU4xY25OdmNuMHBPMmxtS0hJdWEybHVaRDA5UFdCaGRYUm9iM0pwZW1GMGFXOXVZQ2x5WlhSMWNtNGdjanRwWmloeUxtdHBibVFoUFQxZ1pHVnNhWFpsY25sZ0tYSmxkSFZ5Ym50cmFXNWtPbkl1YTJsdVpIMDdiR1YwSUdrOWNpNWtaV3hwZG1WeWVUdHBaaWhwUFQwOWJuVnNiQ2x5WlhSMWNtNTdhMmx1WkRwZ1kyeHZjMlZrWUgwN2JHVjBJRzg5WVhkaGFYUWdjbTkxZEdWRVpXeHBkbVZ5Vkc5RGFHbHNaSEpsYmloN1pHVnNhWFpsY25rNmFTeHdZWEpsYm5SWGNtbDBZV0pzWlRwbExtUnlhWFpsY2xkeWFYUmhZbXhsTEhObGNtbGhiR2w2WldSRGIyNTBaWGgwT21VdWMzUmhkR1ZEZFhKemIzSXVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUXNjMlZ6YzJsdmJsTjBZWFJsT21VdWMzUmhkR1ZEZFhKemIzSXVjMlZ6YzJsdmJsTjBZWFJsZlNrN2FXWW9aUzV6ZEdGMFpVTjFjbk52Y2k1aFpHOXdkRk4wWVhSbEtHOHBMRzh1YTJsdVpEMDlQV0JqWVc1alpXd3RkSFZ5Ym1BcGNtVjBkWEp1ZTJ0cGJtUTZZR05oYm1ObGJDMTBkWEp1WUgwN2FXWW9ieTV5WlcxaGFXNWtaWEloUFQxMmIybGtJREFwY21WMGRYSnVlMlJsYkdsMlpYSjVPbTh1Y21WdFlXbHVaR1Z5TEd0cGJtUTZZSFIxY201Z2ZYMTlZWE41Ym1NZ1puVnVZM1JwYjI0Z2QyRnBkRVp2Y2s1bGVIUlRaWE56YVc5dVFXTjBhVzl1S0dVcGUyeGxkQ0JoUFdVdVluVm1abVZ5WldSVFpYTnphVzl1UTI5dWRISnZiSE11YzJocFpuUW9LVHRwWmloaElUMDlkbTlwWkNBd0tYSmxkSFZ5Ym50cmFXNWtPbUY5TzJadmNpZzdaUzVpZFdabVpYSmxaRVJsYkdsMlpYSnBaWE5iTUYwaFBUMTJiMmxrSURBbUptbHpRMkZ1WTJWc2JHVmtWR0Z6YTBSbGJHbDJaWEo1S0dVdVluVm1abVZ5WldSRVpXeHBkbVZ5YVdWeld6QmRMR1V1WTJGdVkyVnNiR1ZrVkdGemEwbGtjeWs3S1dVdVluVm1abVZ5WldSRVpXeHBkbVZ5YVdWekxuTm9hV1owS0NrN2FXWW9aUzVrWldabGNrUmxiR2wyWlhKcFpYTWhQVDBoTUNZbUlXVXVZMjl0YldGdVpFbHVZbTk0TG1oaGMxSmxZV1I1UVhWMGFHOXlhWHBoZEdsdmJpZ3BKaVpsTG1KMVptWmxjbVZrUkdWc2FYWmxjbWxsY3k1c1pXNW5kR2crTUNseVpYUjFjbTU3WkdWc2FYWmxjbms2ZEdGclpVSjFabVpsY21Wa1ZIVnlia1JsYkdsMlpYSjVLR1V1WW5WbVptVnlaV1JFWld4cGRtVnlhV1Z6S1N4cmFXNWtPbUJrWld4cGRtVnllV0I5TzJadmNpZzdPeWw3YkdWMGUzSmxjM1ZzZERwaExITnZkWEpqWlRwdmZUMWhkMkZwZENCbExtTnZiVzFoYm1SSmJtSnZlQzV1WlhoMFYybDBhRk52ZFhKalpTZ3BPMmxtS0dVdVkyOXRiV0Z1WkVsdVltOTRMbU52Ym5OMWJXVk9aWGgwS0Nrc2J6MDlQV0JoZFhSb2IzSnBlbUYwYVc5dVlDbHlaWFIxY200Z1lTNWtiMjVsUDN0amJHOXpaV1E2SVRBc2EybHVaRHBnWVhWMGFHOXlhWHBoZEdsdmJtQXNjR0Y1Ykc5aFpITTZXMTE5T250amJHOXpaV1E2SVRFc2EybHVaRHBnWVhWMGFHOXlhWHBoZEdsdmJtQXNjR0Y1Ykc5aFpITTZZUzUyWVd4MVpTNXJhVzVrUFQwOVlHUmxiR2wyWlhKZ1AyRXVkbUZzZFdVdWNHRjViRzloWkhNNlcxMTlPMmxtS0dFdVpHOXVaU2x5WlhSMWNtNTdaR1ZzYVhabGNuazZiblZzYkN4cmFXNWtPbUJrWld4cGRtVnllV0I5TzJsbUtHRXVkbUZzZFdVdWEybHVaRDA5UFdCeWRXNTBhVzFsTFdGamRHbHZiaTF5WlhOMWJIUmdLV052Ym5ScGJuVmxPMnhsZENCek8zUnllWHR6UFhObGMzTnBiMjVKYm1KdmVGZHBjbVV1WkdWamIyUmxLR0V1ZG1Gc2RXVXBmV05oZEdOb0tHVXBlMmxtS0NFb1pTQnBibk4wWVc1alpXOW1JRk5sYzNOcGIyNUpibUp2ZUZkcGNtVkZjbkp2Y2lrcGRHaHliM2NnWlR0aGQyRnBkQ0J5WlhCdmNuUkVjbTl3Y0dWa1YybHlaVkJoZVd4dllXUlRkR1Z3S0h0a1pYUmhhV3c2WlM1dFpYTnpZV2RsTEdaaGJXbHNlVHBnYzJWemMybHZiaTFwYm1KdmVHQjlLVHRqYjI1MGFXNTFaWDFwWmloekxtdHBibVE5UFQxZ2MyVnpjMmx2YmkxMGFXMWxiM1YwWUNseVpYUjFjbTU3YTJsdVpEcGdaWGh3YVhKbFpHQjlPMmxtS0hNdWEybHVaRDA5UFdCamJHVmhjbUI4ZkhNdWEybHVaRDA5UFdCamIyMXdZV04wWUh4OGN5NXJhVzVrUFQwOVlISmxjMlYwWUNseVpYUjFjbTU3YTJsdVpEcHpMbXRwYm1SOU8ybG1LSE11YTJsdVpEMDlQV0JqWVc1alpXeGdLWHRwWmloZ2RHRnphM05nYVc0Z2N5WW1jeTUwWVhOcmN6MDlQU0V3SmlaaGQyRnBkQ0JqWVc1alpXeEJiR3hKYm1SbGVHVmtVMlZ6YzJsdmJsUmhjMnR6VTNSbGNDaDdjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZaUzV6ZEdGMFpVTjFjbk52Y2k1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZaUzV6ZEdGMFpVTjFjbk52Y2k1elpYTnphVzl1VTNSaGRHVjlLU3h6TG5SaGMydEpaQ0U5UFhadmFXUWdNQ2w3WlM1allXNWpaV3hzWldSVVlYTnJTV1J6TG1Ga1pDaHpMblJoYzJ0SlpDazdiR1YwSUhROVpTNWlkV1ptWlhKbFpFUmxiR2wyWlhKcFpYTXVabWxzZEdWeUtIUTlQaUZwYzBOaGJtTmxiR3hsWkZSaGMydEVaV3hwZG1WeWVTaDBMR1V1WTJGdVkyVnNiR1ZrVkdGemEwbGtjeWtwTzJVdVluVm1abVZ5WldSRVpXeHBkbVZ5YVdWekxuTndiR2xqWlNnd0xHVXVZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpMbXhsYm1kMGFDd3VMaTUwS1gxamIyNTBhVzUxWlgxc1pYUWdZejF6TG5SaGMydEVaV3hwZG1WeWVVbGtQejl6TG1OaGJHeGxjajh1ZEdGemEwbGtPMmxtS0NFb1l5RTlQWFp2YVdRZ01DWW1hWE5EWVc1alpXeHNaV1JVWVhOclJHVnNhWFpsY25sSlpDaGpMR1V1WTJGdVkyVnNiR1ZrVkdGemEwbGtjeWtwS1h0cFppaGpJVDA5ZG05cFpDQXdLWHRwWmlobExuTmxaVzVVWVhOclJHVnNhWFpsY21sbGN5NW9ZWE1vWXlrcFkyOXVkR2x1ZFdVN1pTNXpaV1Z1VkdGemEwUmxiR2wyWlhKcFpYTXVZV1JrS0dNcGZXbG1LR1V1WkdWbVpYSkVaV3hwZG1WeWFXVnpQVDA5SVRBcGUyVXVZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpMbkIxYzJnb2N5azdZMjl1ZEdsdWRXVjljbVYwZFhKdWUyUmxiR2wyWlhKNU9uTXNhMmx1WkRwZ1pHVnNhWFpsY25sZ2ZYMTlmV1oxYm1OMGFXOXVJR2x6UTJGdVkyVnNiR1ZrVkdGemEwUmxiR2wyWlhKNUtHVXNkQ2w3YkdWMElHNDlaUzUwWVhOclJHVnNhWFpsY25sSlpEOC9aUzVqWVd4c1pYSS9MblJoYzJ0SlpEdHlaWFIxY200Z2JpRTlQWFp2YVdRZ01DWW1hWE5EWVc1alpXeHNaV1JVWVhOclJHVnNhWFpsY25sSlpDaHVMSFFwZldaMWJtTjBhVzl1SUdselEyRnVZMlZzYkdWa1ZHRnphMFJsYkdsMlpYSjVTV1FvWlN4MEtYdHlaWFIxY201YkxpNHVkRjB1YzI5dFpTaDBQVDVsUFQwOWRIeDhaUzV6ZEdGeWRITlhhWFJvS0dBa2UzUjlPbUFwS1gxbWRXNWpkR2x2YmlCMFlXdGxRblZtWm1WeVpXUlVkWEp1UkdWc2FYWmxjbmtvZENsN2JHVjBJRzQ5ZEM1emFHbG1kQ2dwTzJsbUtHNDlQVDEyYjJsa0lEQXBkR2h5YjNjZ1JYSnliM0lvWUVOaGJtNXZkQ0IwWVd0bElHRWdkSFZ5YmlCa1pXeHBkbVZ5ZVNCbWNtOXRJR0Z1SUdWdGNIUjVJR0oxWm1abGNpNWdLVHRzWlhRZ2NqMWJibDBzYVQxdUxtTmhiR3hsY2p0bWIzSW9PM1F1YkdWdVozUm9QakE3S1h0c1pYUWdaVDEwV3pCZE8ybG1LR1U5UFQxMmIybGtJREI4Zkc0dWRHRnphMFJsYkdsMlpYSjVTV1FoUFQxMmIybGtJREI4ZkdVdWRHRnphMFJsYkdsMlpYSjVTV1FoUFQxMmIybGtJREI4ZkdraFBUMTJiMmxrSURBbUptVXVZMkZzYkdWeUlUMDlkbTlwWkNBd0tXSnlaV0ZyTzJ4bGRDQmhQWFF1YzJocFpuUW9LVHRwWmloaFBUMDlkbTlwWkNBd0tYUm9jbTkzSUVWeWNtOXlLR0JDZFdabVpYSmxaQ0IwZFhKdUlHUmxiR2wyWlhKNUlHUnBjMkZ3Y0dWaGNtVmtJSGRvYVd4bElIQmhjblJwZEdsdmJtbHVaeTVnS1R0eUxuQjFjMmdvWVNrc2FUOC9QV0V1WTJGc2JHVnlmWEpsZEhWeWJpQmpiMkZzWlhOalpVUmxiR2wyWlhKcFpYTW9jaWw5Wlhod2IzSjBlMjVsZUhSVWRYSnVSR1ZzYVhabGNubDlPeUlzSW1sdGNHOXlkSHR0WlhKblpWUmhjMnRQZDI1bFpFRm5aVzUwU0dGdVpHeGxjMGx1ZEc5VWRYSnVVM1JoZEdWOVpuSnZiVndpSTNOMVltRm5aVzUwY3k5b1lXNWtiR1Z6TDNGMVpYSjVMbXB6WENJN1puVnVZM1JwYjI0Z2NtVmlZWE5sVkdGemEwRm5aVzUwU0dGdVpHeGxUWFYwWVhScGIyNXpLR1VzZEN4dUtYdHNaWFFnY2oxbExuTmxjM05wYjI1VGRHRjBaUzV6Ym1Gd2MyaHZkRHRwWmloeVBUMDlkbTlwWkNBd0tYUm9jbTkzSUVWeWNtOXlLR0JEWVc1dWIzUWdiV1Z5WjJVZ2RHRnpheTF2ZDI1bFpDQmhaMlZ1ZENCb1lXNWtiR1Z6SUdsdWRHOGdZU0J6WlhOemFXOXVJSE4wWVhSbElIZHBkR2h2ZFhRZ1lTQnpibUZ3YzJodmRDNWdLVHR5WlhSMWNtNTdMaTR1WlN4elpYTnphVzl1VTNSaGRHVTZleTR1TG1VdWMyVnpjMmx2YmxOMFlYUmxMSE51WVhCemFHOTBPbnN1TGk1eUxITmxjM05wYjI0NmV5NHVMbkl1YzJWemMybHZiaXh6ZEdGMFpUcHRaWEpuWlZSaGMydFBkMjVsWkVGblpXNTBTR0Z1Wkd4bGMwbHVkRzlVZFhKdVUzUmhkR1VvZTJKaGMyVlRkR0YwWlRwdUxuTnVZWEJ6YUc5MFB5NXpaWE56YVc5dUxuTjBZWFJsTEdSeWFYWmxjbE4wWVhSbE9uUXVjMjVoY0hOb2IzUS9Mbk5sYzNOcGIyNHVjM1JoZEdVc2RIVnlibE4wWVhSbE9uSXVjMlZ6YzJsdmJpNXpkR0YwWlgwcGZYMTlmWDFsZUhCdmNuUjdjbVZpWVhObFZHRnphMEZuWlc1MFNHRnVaR3hsVFhWMFlYUnBiMjV6ZlRzaUxDSXZLaXBmWDJsdWRHVnlibUZzWDNkdmNtdG1iRzkzYzN0Y0luTjBaWEJ6WENJNmUxd2laR2x6ZEM5emNtTXZaWGhsWTNWMGFXOXVMMlJwYzNCaGRHTm9MWFIxY200dGMzUmxjQzVxYzF3aU9udGNJbVJwYzNCaGRHTm9WSFZ5YmxOMFpYQmNJanA3WENKemRHVndTV1JjSWpwY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwyUnBjM0JoZEdOb1ZIVnlibE4wWlhCY0luMTlmWDBxTHp0Y2JtVjRjRzl5ZENCMllYSWdaR2x6Y0dGMFkyaFVkWEp1VTNSbGNDQTlJR2RzYjJKaGJGUm9hWE5iVTNsdFltOXNMbVp2Y2loY0lsZFBVa3RHVEU5WFgxVlRSVjlUVkVWUVhDSXBYU2hjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJScGMzQmhkR05vVkhWeWJsTjBaWEJjSWlrN1hHNGlMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbk4wWlhCelhDSTZlMXdpWkdsemRDOXpjbU12WlhobFkzVjBhVzl1TDJadmNuZGhjbVF0ZEhWeWJpMWpZVzVqWld4c1lYUnBiMjR0YzNSbGNDNXFjMXdpT250Y0ltWnZjbmRoY21SVWRYSnVRMkZ1WTJWc2JHRjBhVzl1VTNSbGNGd2lPbnRjSW5OMFpYQkpaRndpT2x3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dlptOXlkMkZ5WkZSMWNtNURZVzVqWld4c1lYUnBiMjVUZEdWd1hDSjlmWDE5S2k4N1hHNWxlSEJ2Y25RZ2RtRnlJR1p2Y25kaGNtUlVkWEp1UTJGdVkyVnNiR0YwYVc5dVUzUmxjQ0E5SUdkc2IySmhiRlJvYVhOYlUzbHRZbTlzTG1admNpaGNJbGRQVWt0R1RFOVhYMVZUUlY5VFZFVlFYQ0lwWFNoY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwyWnZjbmRoY21SVWRYSnVRMkZ1WTJWc2JHRjBhVzl1VTNSbGNGd2lLVHRjYmlJc0lpOHFLbDlmYVc1MFpYSnVZV3hmZDI5eWEyWnNiM2R6ZTF3aWMzUmxjSE5jSWpwN1hDSmthWE4wTDNOeVl5OWxlR1ZqZFhScGIyNHZabTl5ZDJGeVpDMTBkWEp1TFdSbGJHbDJaWEo1TFhOMFpYQXVhbk5jSWpwN1hDSm1iM0ozWVhKa1ZIVnlia1JsYkds",
	"MlpYSjVVM1JsY0Z3aU9udGNJbk4wWlhCSlpGd2lPbHdpYzNSbGNDOHZaWFpsUURBdU5URXVNUzh2Wm05eWQyRnlaRlIxY201RVpXeHBkbVZ5ZVZOMFpYQmNJbjE5ZlgwcUx6dGNibVY0Y0c5eWRDQjJZWElnWm05eWQyRnlaRlIxY201RVpXeHBkbVZ5ZVZOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5bWIzSjNZWEprVkhWeWJrUmxiR2wyWlhKNVUzUmxjRndpS1R0Y2JpSXNJbWx0Y0c5eWRIdGpjbVZoZEdWSWIyOXJmV1p5YjIxY0lpTmpiMjF3YVd4bFpDOUFkMjl5YTJac2IzY3ZZMjl5WlM5cGJtUmxlQzVxYzF3aU8ybHRjRzl5ZEh0amJHOXpaVWh2YjJ0SmRHVnlZWFJ2Y2l4a2FYTndiM05sU0c5dmEzMW1jbTl0WENJalpYaGxZM1YwYVc5dUwyaHZiMnN0YjNkdVpYSnphR2x3TG1welhDSTdhVzF3YjNKMGUyTmhibU5sYkVGc2JFbHVaR1Y0WldSVFpYTnphVzl1VkdGemEzTlRkR1Z3ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2WTJGdVkyVnNMV2x1WkdWNFpXUXRjMlZ6YzJsdmJpMTBZWE5yY3kxemRHVndMbXB6WENJN2FXMXdiM0owZTNKbGNHOXlkRVJ5YjNCd1pXUlhhWEpsVUdGNWJHOWhaRk4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5eVpYQnZjblF0WkhKdmNIQmxaQzEzYVhKbExYQmhlV3h2WVdRdGMzUmxjQzVxYzF3aU8ybHRjRzl5ZEh0VFpYTnphVzl1U1c1aWIzaFhhWEpsUlhKeWIzSXNjMlZ6YzJsdmJrbHVZbTk0VjJseVpYMW1jbTl0WENJalpYaGxZM1YwYVc5dUwzZHBjbVV2YzJWemMybHZiaTFwYm1KdmVDMTNhWEpsTG1welhDSTdhVzF3YjNKMGUzSmxZblZwYkdSVFpYSnBZV3hwZW1GaWJHVkZjbkp2Y24xbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNkdmNtdG1iRzkzTFdWeWNtOXljeTVxYzF3aU8ybHRjRzl5ZEh0MGRYSnVRMkZ1WTJWc2JHRjBhVzl1U0c5dmExUnZhMlZ1ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2ZEhWeWJpMWpZVzVqWld4c1lYUnBiMjR0ZEc5clpXNHVhbk5jSWp0cGJYQnZjblI3Wm05eWQyRnlaRlIxY201RFlXNWpaV3hzWVhScGIyNVRkR1Z3ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2Wm05eWQyRnlaQzEwZFhKdUxXTmhibU5sYkd4aGRHbHZiaTF6ZEdWd0xtcHpYQ0k3YVcxd2IzSjBlMlp2Y25kaGNtUlVkWEp1UkdWc2FYWmxjbmxUZEdWd2ZXWnliMjFjSWlObGVHVmpkWFJwYjI0dlptOXlkMkZ5WkMxMGRYSnVMV1JsYkdsMlpYSjVMWE4wWlhBdWFuTmNJanQyWVhJZ1ZIVnlia052Ym5SeWIyeFNaV05sYVhabGNqMWpiR0Z6YzN0aWRXWm1aWEpsWkVSbGJHbDJaWEpwWlhNN1luVm1abVZ5WldSVFpYTnphVzl1UTI5dWRISnZiSE03WTI5dGJXRnVaRWx1WW05NE8yTnZiblJ5YjJ3N1kyOXVkSEp2YkVsMFpYSmhkRzl5TzJWNGNHVmpkR1ZrVkhWeWJrbGtPMk5oYm1ObGJHeGxaRlJoYzJ0SlpITTdjMlZsYmxSaGMydEVaV3hwZG1WeWFXVnpPM04wWVhSbFEzVnljMjl5TzNCbGJtUnBibWREYjI1MGNtOXNQVzUxYkd3N1kyOXVjM1J5ZFdOMGIzSW9kQ2w3ZEdocGN5NWlkV1ptWlhKbFpFUmxiR2wyWlhKcFpYTTlkQzVpZFdabVpYSmxaRVJsYkdsMlpYSnBaWE1zZEdocGN5NWlkV1ptWlhKbFpGTmxjM05wYjI1RGIyNTBjbTlzY3oxMExtSjFabVpsY21Wa1UyVnpjMmx2YmtOdmJuUnliMnh6TEhSb2FYTXVZMkZ1WTJWc2JHVmtWR0Z6YTBsa2N6MTBMbU5oYm1ObGJHeGxaRlJoYzJ0SlpITS9QMjVsZHlCVFpYUXNkR2hwY3k1amIyMXRZVzVrU1c1aWIzZzlkQzVqYjIxdFlXNWtTVzVpYjNnc2RHaHBjeTV6WldWdVZHRnphMFJsYkdsMlpYSnBaWE05ZEM1elpXVnVWR0Z6YTBSbGJHbDJaWEpwWlhNL1AyNWxkeUJUWlhRc2RHaHBjeTV6ZEdGMFpVTjFjbk52Y2oxMExuTjBZWFJsUTNWeWMyOXlMSFJvYVhNdVkyOXVkSEp2YkQxamNtVmhkR1ZJYjI5cktIdDBiMnRsYmpwMExuUnZhMlZ1ZlNrc2RHaHBjeTVqYjI1MGNtOXNTWFJsY21GMGIzSTlkR2hwY3k1amIyNTBjbTlzVzFONWJXSnZiQzVoYzNsdVkwbDBaWEpoZEc5eVhTZ3BMSFJvYVhNdVpYaHdaV04wWldSVWRYSnVTV1E5ZEM1bGVIQmxZM1JsWkZSMWNtNUpaSDFuWlhRZ2RHOXJaVzRvS1h0eVpYUjFjbTRnZEdocGN5NWpiMjUwY205c0xuUnZhMlZ1ZldGemVXNWpJR1JwYzNCdmMyVW9LWHRoZDJGcGRDQmpiRzl6WlVodmIydEpkR1Z5WVhSdmNpaDBhR2x6TG1OdmJuUnliMnhKZEdWeVlYUnZjaWtzWVhkaGFYUWdaR2x6Y0c5elpVaHZiMnNvZEdocGN5NWpiMjUwY205c0tYMWhjM2x1WXlCM1lXbDBSbTl5UVdOMGFXOXVLQ2w3Wm05eUtEczdLWHRzWlhRZ1pUMWhkMkZwZENCMGFHbHpMbTVsZUhSRGIyNTBjbTlzVDNKRGIyMXRZVzVrS0NrN2FXWW9aUzVyYVc1a1BUMDlZR052YlcxaGJtUmdLWHRzWlhRZ2REMWhkMkZwZENCMGFHbHpMbWhoYm1Sc1pWTmxjM05wYjI1RGIyMXRZVzVrS0dVdVkyOXRiV0Z1WkNrN2FXWW9kQ0U5UFhadmFXUWdNQ2x5WlhSMWNtNGdkRHRqYjI1MGFXNTFaWDFzWlhRZ2REMWxMbkJoZVd4dllXUXNiajEwYUdsekxuSmxZV1JVWlhKdGFXNWhiRU52Ym5SeWIyd29kQ2s3YVdZb2JpRTlQWFp2YVdRZ01DbHlaWFIxY200Z2JqdHBaaWgwTG10cGJtUTlQVDFnZEhWeWJpMWtaV3hwZG1WeWVTMXlaWEYxWlhOMFlDbDdiR1YwSUdVOVlYZGhhWFFnZEdocGN5NXpaWEoyYVdObFJHVnNhWFpsY25sU1pYRjFaWE4wS0hRcE8ybG1LR1VoUFQxMmIybGtJREFwY21WMGRYSnVJR1Y5ZlgxaGMzbHVZeUJvWVc1a2JHVlRaWE56YVc5dVEyOXRiV0Z1WkNobEtYdHBaaWhsTG10cGJtUTlQVDFnWkdWc2FYWmxjbUFwZTJsbUtDRjBhR2x6TG1GalkyVndkRlJoYzJ0RVpXeHBkbVZ5ZVNobEtTbHlaWFIxY200N1lYZGhhWFFnZEdocGN5NWlkV1ptWlhKRVpXeHBkbVZ5ZVNobEtUdHlaWFIxY201OWFXWW9aUzVyYVc1a1BUMDlZR05zWldGeVlIeDhaUzVyYVc1a1BUMDlZR052YlhCaFkzUmdLWHQwYUdsekxtSjFabVpsY21Wa1UyVnpjMmx2YmtOdmJuUnliMnh6TG5CMWMyZ29aUzVyYVc1a0tUdHlaWFIxY201OWFXWW9aUzVyYVc1a1BUMDlZSE5sYzNOcGIyNHRkR2x0Wlc5MWRHQXBlM1JvYVhNdVluVm1abVZ5WldSVFpYTnphVzl1UTI5dWRISnZiSE11Y0hWemFDaGdaWGh3YVhKbFpHQXBPM0psZEhWeWJuMXBaaWhsTG10cGJtUTlQVDFnWTJGdVkyVnNZQ2w3WUhSaGMydHpZR2x1SUdVbUptVXVkR0Z6YTNNOVBUMGhNQ1ltWVhkaGFYUWdZMkZ1WTJWc1FXeHNTVzVrWlhobFpGTmxjM05wYjI1VVlYTnJjMU4wWlhBb2UzTmxjbWxoYkdsNlpXUkRiMjUwWlhoME9uUm9hWE11YzNSaGRHVkRkWEp6YjNJdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPblJvYVhNdWMzUmhkR1ZEZFhKemIzSXVjMlZ6YzJsdmJsTjBZWFJsZlNrc1pTNTBZWE5yU1dRaFBUMTJiMmxrSURBbUpuUm9hWE11WkdselkyRnlaRlJoYzJ0RVpXeHBkbVZ5YVdWektHVXVkR0Z6YTBsa0tUdHNaWFFnZEQxbExuUmhjMnRKWkNFOVBYWnZhV1FnTUNZbVpTNTBkWEp1U1dRaFBUMTJiMmxrSURBbUptVXVkSFZ5Ymtsa0lUMDlkR2hwY3k1bGVIQmxZM1JsWkZSMWNtNUpaRDkyYjJsa0lEQTZaUzUwZFhKdVNXUXNiajE3ZEdGemEzTTZaUzUwWVhOcmMzMDdkQ0U5UFhadmFXUWdNQ1ltS0c0dWRIVnlia2xrUFhRcExHRjNZV2wwSUdadmNuZGhjbVJVZFhKdVEyRnVZMlZzYkdGMGFXOXVVM1JsY0NoN2NHRjViRzloWkRwdUxIUnZhMlZ1T25SMWNtNURZVzVqWld4c1lYUnBiMjVJYjI5clZHOXJaVzRvZEdocGN5NWpiMjUwY205c0xuUnZhMlZ1S1gwcE8zSmxkSFZ5Ym4xcFppaGxMbXRwYm1ROVBUMWdjbVZ6WlhSZ0tYdGhkMkZwZENCbWIzSjNZWEprVkhWeWJrTmhibU5sYkd4aGRHbHZibE4wWlhBb2UzQmhlV3h2WVdRNmUzMHNkRzlyWlc0NmRIVnlia05oYm1ObGJHeGhkR2x2YmtodmIydFViMnRsYmloMGFHbHpMbU52Ym5SeWIyd3VkRzlyWlc0cGZTa3NkR2hwY3k1aWRXWm1aWEpsWkZObGMzTnBiMjVEYjI1MGNtOXNjeTV3ZFhOb0tHQnlaWE5sZEdBcE8zSmxkSFZ5Ym4xeVpYUjFjbTRnZFc1emRYQndiM0owWldSVFpYTnphVzl1UTI5dGJXRnVaQ2hsS1gxaGMzbHVZeUJpZFdabVpYSkVaV3hwZG1WeWVTaGxLWHQwYUdsekxtSjFabVpsY21Wa1JHVnNhWFpsY21sbGN5NXdkWE5vS0dVcExDRW9aUzUwZFhKdVVHOXNhV041SVQwOVlITjBaV1Z5WUh4OElXUmxiR2wyWlhKNVNHRnpUV1Z6YzJGblpTaGxLU2ttSm1GM1lXbDBJR1p2Y25kaGNtUlVkWEp1UTJGdVkyVnNiR0YwYVc5dVUzUmxjQ2g3Y0dGNWJHOWhaRHA3ZlN4MGIydGxianAwZFhKdVEyRnVZMlZzYkdGMGFXOXVTRzl2YTFSdmEyVnVLSFJvYVhNdVkyOXVkSEp2YkM1MGIydGxiaWw5S1gxaWRXWm1aWEpVZFhKdVJHVnNhWFpsY21sbGN5aGxLWHRsTG1KMVptWmxjbVZrUkdWc2FYWmxjbWxsY3lFOVBYWnZhV1FnTUNZbWRHaHBjeTVpZFdabVpYSmxaRVJsYkdsMlpYSnBaWE11ZFc1emFHbG1kQ2d1TGk1bExtSjFabVpsY21Wa1JHVnNhWFpsY21sbGN5NW1hV3gwWlhJb1pUMCtJWFJvYVhNdWMyaHZkV3hrUkdselkyRnlaQ2hsS1NrcGZXTnZibk4xYldWRGIyNTBjbTlzS0NsN2RHaHBjeTV3Wlc1a2FXNW5RMjl1ZEhKdmJEMXVkV3hzZldkbGRFTnZiblJ5YjJ4UWNtOXRhWE5sS0NsN2NtVjBkWEp1SUhSb2FYTXVjR1Z1WkdsdVowTnZiblJ5YjJ3L1B6MTBhR2x6TG1OdmJuUnliMnhKZEdWeVlYUnZjaTV1WlhoMEtDa3NkR2hwY3k1d1pXNWthVzVuUTI5dWRISnZiSDFoYzNsdVl5QnVaWGgwUTI5dWRISnZiRTl5UTI5dGJXRnVaQ2dwZTJ4bGRDQmxQV0YzWVdsMElGQnliMjFwYzJVdWNtRmpaU2hiZEdocGN5NW5aWFJEYjI1MGNtOXNVSEp2YldselpTZ3BMblJvWlc0b1pUMCtLSHRyYVc1a09tQmpiMjUwY205c1lDeDJZV3gxWlRwbGZTa3BMSFJvYVhNdVkyOXRiV0Z1WkVsdVltOTRMbTVsZUhRb0tTNTBhR1Z1S0dVOVBpaDdhMmx1WkRwZ1kyOXRiV0Z1WkdBc2RtRnNkV1U2WlgwcEtWMHBPMmxtS0dVdWEybHVaRDA5UFdCamIyMXRZVzVrWUNsN2FXWW9aUzUyWVd4MVpTNWtiMjVsS1hSb2NtOTNJRVZ5Y205eUtHQlRaWE56YVc5dUlHTnZiVzFoYm1RZ2FXNWliM2dnWTJ4dmMyVmtJR0psWm05eVpTQjBhR1VnWVdOMGFYWmxJSFIxY200Z2MyVjBkR3hsWkM1Z0tUdHBaaWgwYUdsekxtTnZiVzFoYm1SSmJtSnZlQzVqYjI1emRXMWxUbVY0ZENncExHVXVkbUZzZFdVdWRtRnNkV1V1YTJsdVpEMDlQV0J5ZFc1MGFXMWxMV0ZqZEdsdmJpMXlaWE4xYkhSZ0tYSmxkSFZ5YmlCaGQyRnBkQ0IwYUdsekxtNWxlSFJEYjI1MGNtOXNUM0pEYjIxdFlXNWtLQ2s3ZEhKNWUzSmxkSFZ5Ym50amIyMXRZVzVrT25ObGMzTnBiMjVKYm1KdmVGZHBjbVV1WkdWamIyUmxLR1V1ZG1Gc2RXVXVkbUZzZFdVcExHdHBibVE2WUdOdmJXMWhibVJnZlgxallYUmphQ2hsS1h0cFppZ2hLR1VnYVc1emRHRnVZMlZ2WmlCVFpYTnphVzl1U1c1aWIzaFhhWEpsUlhKeWIzSXBLWFJvY205M0lHVTdjbVYwZFhKdUlHRjNZV2wwSUhKbGNHOXlkRVJ5YjNCd1pXUlhhWEpsVUdGNWJHOWhaRk4wWlhBb2UyUmxkR0ZwYkRwbExtMWxjM05oWjJVc1ptRnRhV3g1T21CelpYTnphVzl1TFdsdVltOTRZSDBwTEdGM1lXbDBJSFJvYVhNdWJtVjRkRU52Ym5SeWIyeFBja052YlcxaGJtUW9LWDE5YVdZb2RHaHBjeTVqYjI1emRXMWxRMjl1ZEhKdmJDZ3BMR1V1ZG1Gc2RXVXVaRzl1WlNsMGFISnZkeUJGY25KdmNpaGdWSFZ5YmlCamIyNTBjbTlzSUdodmIyc2dZMnh2YzJWa0lHSmxabTl5WlNCa1pXeHBkbVZ5YVc1bklHRWdjbVZ6ZFd4MExtQXBPMnhsZENCMFBXVXVkbUZzZFdVdWRtRnNkV1U3YVdZb2RDNXJhVzVrUFQwOVlIUjFjbTR0WlhKeWIzSmdLWFJvY205M0lISmxZblZwYkdSVFpYSnBZV3hwZW1GaWJHVkZjbkp2Y2loMExtVnljbTl5S1R0eVpYUjFjbTRnZEM1cmFXNWtQVDA5WUhSMWNtNHRZMjl1ZEdsdWRXRjBhVzl1TFhSdmEyVnVZRDhvWVhkaGFYUWdkR2hwY3k1amIyMXRZVzVrU1c1aWIzZ3VjbVZyWlhsRGIyNTBhVzUxWVhScGIyNG9kQzVqYjI1MGFXNTFZWFJwYjI1VWIydGxiaWtzWVhkaGFYUWdkR2hwY3k1dVpYaDBRMjl1ZEhKdmJFOXlRMjl0YldGdVpDZ3BLVHA3YTJsdVpEcGdZMjl1ZEhKdmJHQXNjR0Y1Ykc5aFpEcDBmWDF5WldGa1ZHVnliV2x1WVd4RGIyNTBjbTlzS0dVcGUybG1LR1V1YTJsdVpEMDlQV0IwZFhKdUxXVnljbTl5WUNsMGFISnZkeUJ5WldKMWFXeGtVMlZ5YVdGc2FYcGhZbXhsUlhKeWIzSW9aUzVsY25KdmNpazdhV1lvWlM1cmFXNWtQVDA5WUhSMWNtNHRjbVZ6ZFd4MFlDbHlaWFIxY200Z2RHaHBjeTVpZFdabVpYSlVkWEp1UkdWc2FYWmxjbWxsY3lobEtTeGxMbUZqZEdsdmJuMWhjM2x1WXlCelpYSjJhV05sUkdWc2FYWmxjbmxTWlhGMVpYTjBLR1VwZTJGM1lXbDBJSFJvYVhNdVkyOXRiV0Z1WkVsdVltOTRMbkpsYTJWNVEyOXVkR2x1ZFdGMGFXOXVLR1V1WTI5dWRHbHVkV0YwYVc5dVZHOXJaVzRwTzJ4bGRDQjBQWFJvYVhNdWRHRnJaVWx1Y0hWMFVtVnpjRzl1YzJWRVpXeHBkbVZ5ZVNncE8yWnZjaWc3ZEQwOVBYWnZhV1FnTURzcGUyeGxkQ0J1UFdGM1lXbDBJRkJ5YjIxcGMyVXVjbUZqWlNoYmRHaHBjeTVuWlhSRGIyNTBjbTlzVUhKdmJXbHpaU2dwTG5Sb1pXNG9aVDArS0h0cmFXNWtPbUJqYjI1MGNtOXNZQ3gyWVd4MVpUcGxmU2twTEhSb2FYTXVZMjl0YldGdVpFbHVZbTk0TG01bGVIUW9LUzUwYUdWdUtHVTlQaWg3YTJsdVpEcGdZMjl0YldGdVpHQXNkbUZzZFdVNlpYMHBLVjBwTzJsbUtHNHVhMmx1WkQwOVBXQmpiMjUwY205c1lDbDdhV1lvZEdocGN5NWpiMjV6ZFcxbFEyOXVkSEp2YkNncExHNHVkbUZzZFdVdVpHOXVaU2wwYUhKdmR5QkZjbkp2Y2loZ1ZIVnliaUJqYjI1MGNtOXNJR2h2YjJzZ1kyeHZjMlZrSUdSMWNtbHVaeUJoSUdSbGJHbDJaWEo1SUhKbGNYVmxjM1F1WUNrN2FXWW9iaTUyWVd4MVpTNTJZV3gxWlM1cmFXNWtQVDA5WUhSMWNtNHRZMjl1ZEdsdWRXRjBhVzl1TFhSdmEyVnVZQ2w3WVhkaGFYUWdkR2hwY3k1amIyMXRZVzVrU1c1aWIzZ3VjbVZyWlhsRGIyNTBhVzUxWVhScGIyNG9iaTUyWVd4MVpTNTJZV3gxWlM1amIyNTBhVzUxWVhScGIyNVViMnRsYmlrN1kyOXVkR2x1ZFdWOWJHVjBJSFE5ZEdocGN5NXlaV0ZrVkdWeWJXbHVZV3hEYjI1MGNtOXNLRzR1ZG1Gc2RXVXVkbUZzZFdVcE8ybG1LSFFoUFQxMmIybGtJREFwY21WMGRYSnVJSFE3YVdZb2JpNTJZV3gxWlM1MllXeDFaUzVyYVc1a1BUMDlZSFIxY200dFpHVnNhWFpsY25rdFkyRnVZMlZzYkdWa1lDWW1iaTUyWVd4MVpTNTJZV3gxWlM1eVpYRjFaWE4wU1dROVBUMWxMbkpsY1hWbGMzUkpaQ2x5WlhSMWNtNDdZMjl1ZEdsdWRXVjlhV1lvYmk1MllXeDFaUzVrYjI1bEtYUm9jbTkzSUVWeWNtOXlLR0JUWlhOemFXOXVJR052YlcxaGJtUWdhVzVpYjNnZ1kyeHZjMlZrSUdSMWNtbHVaeUJoSUhSMWNtNGdaR1ZzYVhabGNua2djbVZ4ZFdWemRDNWdLVHRwWmloMGFHbHpMbU52YlcxaGJtUkpibUp2ZUM1amIyNXpkVzFsVG1WNGRDZ3BMRzR1ZG1Gc2RXVXVkbUZzZFdVdWEybHVaRDA5UFdCeWRXNTBhVzFsTFdGamRHbHZiaTF5WlhOMWJIUmdLV052Ym5ScGJuVmxPMnhsZENCeU8zUnllWHR5UFhObGMzTnBiMjVKYm1KdmVGZHBjbVV1WkdWamIyUmxLRzR1ZG1Gc2RXVXVkbUZzZFdVcGZXTmhkR05vS0dVcGUybG1LQ0VvWlNCcGJuTjBZVzVqWlc5bUlGTmxjM05wYjI1SmJtSnZlRmRwY21WRmNuSnZjaWtwZEdoeWIzY2daVHRoZDJGcGRDQnlaWEJ2Y25SRWNtOXdjR1ZrVjJseVpWQmhlV3h2WVdSVGRHVndLSHRrWlhSaGFXdzZaUzV0WlhOellXZGxMR1poYldsc2VUcGdjMlZ6YzJsdmJpMXBibUp2ZUdCOUtUdGpiMjUwYVc1MVpYMXBaaWh5TG10cGJtUTlQVDFnWkdWc2FYWmxjbUFwZTJsbUtDRjBhR2x6TG1GalkyVndkRlJoYzJ0RVpXeHBkbVZ5ZVNoeUtTbGpiMjUwYVc1MVpUdGtaV3hwZG1WeWVVaGhjMDFsYzNOaFoyVW9jaWsvWVhkaGFYUWdkR2hwY3k1aWRXWm1aWEpFWld4cGRtVnllU2h5S1RwMFBYSTdZMjl1ZEdsdWRXVjliR1YwSUdFOVlYZGhhWFFnZEdocGN5NW9ZVzVrYkdWVFpYTnphVzl1UTI5dGJXRnVaQ2h5S1R0cFppaGhJVDA5ZG05cFpDQXdLWEpsZEhWeWJpQmhmWFJ5ZVh0aGQyRnBkQ0JtYjNKM1lYSmtWSFZ5YmtSbGJHbDJaWEo1VTNSbGNDaDdhVzVpYjNoVWIydGxianBsTG1sdVltOTRWRzlyWlc0c2NHRjViRzloWkRwN1pHVnNhWFpsY25rNmRDeHJhVzVrT21Ca2NtbDJaWEl0WkdWc2FYWmxjbmxnTEhKbGNYVmxjM1JKWkRwbExuSmxjWFZsYzNSSlpIMTlLWDFqWVhSamFDaGxLWHRwWmlnaEtHVWdhVzV6ZEdGdVkyVnZaaUJGY25KdmNpWW1aUzV1WVcxbFBUMDlZRWh2YjJ0T2IzUkdiM1Z1WkVWeWNtOXlZQ2twZEdoeWIzY2daWDF5WlhSMWNtNGdZWGRoYVhRZ2RHaHBjeTVoZDJGcGRFWnZjbmRoY21SbFpFUmxiR2wyWlhKNUtHVXVjbVZ4ZFdWemRFbGtMSFFwZlhSaGEyVkpibkIxZEZKbGMzQnZibk5sUkdWc2FYWmxjbmtvS1h0c1pYUWdaVDEwYUdsekxtSjFabVpsY21Wa1JHVnNhWFpsY21sbGN5NW1hVzVrU1c1a1pYZ29aVDArSVdSbGJHbDJaWEo1U0dGelRXVnpjMkZuWlNobEtTazdhV1lvWlNFOVBTMHhLWEpsZEhWeWJpQjBhR2x6TG1KMVptWmxjbVZrUkdWc2FYWmxjbWxsY3k1emNHeHBZMlVvWlN3eEtWc3dYWDFoYzNsdVl5QmhkMkZwZEVadmNuZGhjbVJsWkVSbGJHbDJaWEo1S0dVc2RDbDdabTl5S0RzN0tYdHNaWFFnYmoxaGQyRnBkQ0IwYUdsekxtNWxlSFJEYjI1MGNtOXNUM0pEYjIxdFlXNWtLQ2s3YVdZb2JpNXJhVzVrUFQwOVlHTnZiVzFoYm1SZ0tYdHNaWFFnWlQxaGQyRnBkQ0IwYUdsekxtaGhibVJzWlZObGMzTnBiMjVEYjIxdFlXNWtLRzR1WTI5dGJXRnVaQ2s3YVdZb1pTRTlQWFp2YVdRZ01DbHlaWFIxY200Z2RHaHBjeTV6YUc5MWJHUkVhWE5qWVhKa0tIUXBmSHgwYUdsekxtSjFabVpsY21Wa1JHVnNhWFpsY21sbGN5NTFibk5vYVdaMEtIUXBMR1U3WTI5dWRHbHVkV1Y5YkdWMElISTliaTV3WVhsc2IyRmtPMmxtS0hJdWEybHVaRDA5UFdCMGRYSnVMV1JsYkdsMlpYSjVMV0ZqWTJWd2RHVmtZQ2w3YVdZb2NpNXlaWEYxWlhOMFNXUTlQVDFsS1hKbGRIVnlianRqYjI1MGFXNTFaWDFwWmloeUxtdHBibVE5UFQxZ2RIVnliaTFrWld4cGRtVnllUzFqWVc1alpXeHNaV1JnSmlaeUxuSmxjWFZsYzNSSlpEMDlQV1VwZTNSb2FYTXVjMmh2ZFd4a1JHbHpZMkZ5WkNoMEtYeDhkR2hwY3k1aWRXWm1aWEpsWkVSbGJHbDJaWEpwWlhNdWRXNXphR2xtZENoMEtUdHlaWFIxY201OWNpNXJhVzVrUFQwOVlIUjFjbTR0Y21WemRXeDBZQ1ltS0hSb2FYTXVjMmh2ZFd4a1JHbHpZMkZ5WkNoMEtYeDhkR2hwY3k1aWRXWm1aWEpsWkVSbGJHbDJaWEpwWlhNdWRXNXphR2xtZENoMEtTazdiR1YwSUdrOWRHaHBjeTV5WldGa1ZHVnliV2x1WVd4RGIyNTBjbTlzS0hJcE8ybG1LR2toUFQxMmIybGtJREFwY21WMGRYSnVJR2w5ZldGalkyVndkRlJoYzJ0RVpXeHBkbVZ5ZVNobEtYdHNaWFFnZEQxbExuUmhjMnRFWld4cGRtVnllVWxrUHo5bExtTmhiR3hsY2o4dWRHRnphMGxrTzNKbGRIVnliaUIwUFQwOWRtOXBaQ0F3UHlFd09uUm9hWE11YjNKcFoybHVZWFJsYzBaeWIyMURZVzVqWld4c1pXUlVZWE5yS0hRcGZIeDBhR2x6TG5ObFpXNVVZWE5yUkdWc2FYWmxjbWxsY3k1b1lYTW9kQ2svSVRFNktIUm9hWE11YzJWbGJsUmhjMnRFWld4cGRtVnlhV1Z6TG1Ga1pDaDBLU3doTUNsOVpHbHpZMkZ5WkZSaGMydEVaV3hwZG1WeWFXVnpLR1VwZTNSb2FYTXVZMkZ1WTJWc2JHVmtWR0Z6YTBsa2N5NWhaR1FvWlNrN2JHVjBJSFE5ZEdocGN5NWlkV1ptWlhKbFpFUmxiR2wyWlhKcFpYTXVabWxzZEdWeUtHVTlQaUYwYUdsekxuTm9iM1ZzWkVScGMyTmhjbVFvWlNrcE8zUm9hWE11WW5WbVptVnlaV1JFWld4cGRtVnlhV1Z6TG5Od2JHbGpaU2d3TEhSb2FYTXVZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpMbXhsYm1kMGFDd3VMaTUwS1gxdmNtbG5hVzVoZEdWelJuSnZiVU5oYm1ObGJHeGxaRlJoYzJzb1pTbDdjbVYwZFhKdVd5NHVMblJvYVhNdVkyRnVZMlZzYkdWa1ZHRnphMGxrYzEwdWMyOXRaU2gwUFQ1a1pXeHBkbVZ5ZVU5eWFXZHBibUYwWlhOR2NtOXRWR0Z6YXlobExIUXBLWDF6YUc5MWJHUkVhWE5qWVhKa0tHVXBlMnhsZENCMFBXVXVkR0Z6YTBSbGJHbDJaWEo1U1dRL1AyVXVZMkZzYkdWeVB5NTBZWE5yU1dRN2NtVjBkWEp1SUhRaFBUMTJiMmxrSURBbUpuUm9hWE11YjNKcFoybHVZWFJsYzBaeWIyMURZVzVqWld4c1pXUlVZWE5yS0hRcGZYMDdablZ1WTNScGIyNGdaR1ZzYVhabGNubFBjbWxuYVc1aGRHVnpSbkp2YlZSaGMyc29aU3gwS1h0eVpYUjFjbTRnWlQwOVBYUjhmR1V1YzNSaGNuUnpWMmwwYUNoZ0pIdDBmVHBnS1gxbWRXNWpkR2x2YmlCa1pXeHBkbVZ5ZVVoaGMwMWxjM05oWjJVb1pTbDdjbVYwZFhKdUlHVXVjR0Y1Ykc5aFpITXVjMjl0WlNobFBUNWxMbTFsYzNOaFoyVWhQVDEyYjJsa0lEQXBmV1oxYm1OMGFXOXVJSFZ1YzNWd2NHOXlkR1ZrVTJWemMybHZia052YlcxaGJtUW9aU2w3ZEdoeWIzY2dSWEp5YjNJb1lGVnVjM1Z3Y0c5eWRHVmtJSE5sYzNOcGIyNGdZMjl0YldGdVpEb2dKSHRLVTA5T0xuTjBjbWx1WjJsbWVTaGxLWDFnS1gxbGVIQnZjblI3VkhWeWJrTnZiblJ5YjJ4U1pXTmxhWFpsY24wN0lpd2lablZ1WTNScGIyNGdjbVZoWkVGalkyVndkR1ZrUkdWd2JHOTViV1Z1ZEVsa0tHVXBlMmxtS0dVdWEybHVaQ0U5UFdCa1pXeHBkbVZ5WUh4OFpTNWtaV3hwZG1WeWVVMWxkR0ZrWVhSaFB5NXNaVzVuZEdnOVBUMHdLWEpsZEhWeWJqdHNaWFFnZEQxbExtUmxiR2wyWlhKNVRXVjBZV1JoZEdFL0xsc3dYVDh1WVdOalpYQjBaV1JFWlhCc2IzbHRaVzUwU1dRN2FXWW9JU2gwUFQwOWRtOXBaQ0F3Zkh4MExteGxibWQwYUQwOVBUQXBLWEpsZEhWeWJpQmxMbVJsYkdsMlpYSjVUV1YwWVdSaGRHRS9MbVYyWlhKNUtHVTlQbVV1WVdOalpYQjBaV1JFWlhCc2IzbHRaVzUwU1dROVBUMTBLVDkwT25admFXUWdNSDFtZFc1amRHbHZiaUJrWldabGNrMXBjMjFoZEdOb1pXUkpibXhwYm1WVWRYSnVVM1JsY0NobEtYdHBaaWdoS0dVdVlXTmpaWEIwWldSRVpYQnNiM2x0Wlc1MFNXUTlQVDEyYjJsa0lEQjhmSEJ5YjJObGMzTXVaVzUyTGxaRlVrTkZURjlFUlZCTVQxbE5SVTVVWDBsRVB5NTBjbWx0S0NrOVBUMWxMbUZqWTJWd2RHVmtSR1Z3Ykc5NWJXVnVkRWxrS1NseVpYUjFjbTU3WVdOMGFXOXVPbUJqYjI1MGFXNTFaV0FzY21WeGRXbHlaWE5EYUdsc1pFUnBjM0JoZEdOb09pRXdMSE5sY21saGJHbDZaV1JEYjI1MFpYaDBPbVV1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFzYzJWemMybHZibE4wWVhSbE9tVXVjMlZ6YzJsdmJsTjBZWFJsZlgxbGVIQnZjblI3WkdWbVpYSk5hWE50WVhSamFHVmtTVzVzYVc1bFZIVnlibE4wWlhBc2NtVmhaRUZqWTJWd2RHVmtSR1Z3Ykc5NWJXVnVkRWxrZlRzaUxDSnBiWEJ2Y25SN1lXTjBhWFpsVkhWeWJrbGtmV1p5YjIxY0lpTm9ZWEp1WlhOekwyRmpkR2wyWlMxMGRYSnVMV2xrTG1welhDSTdhVzF3YjNKMGUzSmxZV1JCWTJObGNIUmxaRVJsY0d4dmVXMWxiblJKWkgxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDJGalkyVndkR1ZrTFdSbGJHbDJaWEo1TFdSbGNHeHZlVzFsYm5RdWFuTmNJanRwYlhCdmNuUjdZMkZ1WTJWc1FXeHNTVzVrWlhobFpGTmxjM05wYjI1VVlYTnJjMU4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5allXNWpaV3d0YVc1a1pYaGxaQzF6WlhOemFXOXVMWFJoYzJ0ekxYTjBaWEF1YW5OY0lqdHBiWEJ2Y25SN2NtVndiM0owUkhKdmNIQmxaRmRwY21WUVlYbHNiMkZrVTNSbGNIMW1jbTl0WENJalpYaGxZM1YwYVc5dUwzSmxjRzl5ZEMxa2NtOXdjR1ZrTFhkcGNtVXRjR0Y1Ykc5aFpDMXpkR1Z3TG1welhDSTdhVzF3YjNKMGUxTmxjM05wYjI1VGRHRjBaVU4xY25OdmNuMW1jbTl0WENJalpYaGxZM1YwYVc5dUwzTmxjM05wYjI0dGMzUmhkR1V0WTNWeWMyOXlMbXB6WENJN2FXMXdiM0owZTFObGMzTnBiMjVKYm1KdmVGZHBjbVZGY25KdmNpeHpaWE56YVc5dVNXNWliM2hYYVhKbGZXWnliMjFjSWlObGVHVmpkWFJwYjI0dmQybHlaUzl6WlhOemFXOXVMV2x1WW05NExYZHBjbVV1YW5OY0lqdHBiWEJ2Y25SN2RIVnlibE4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5M2IzSnJabXh2ZHkxemRHVndjeTVxYzF3aU8ybHRjRzl5ZEh0VWRYSnVRMkZ1WTJWc2JHVmtSWEp5YjNKOVpuSnZiVndpSTJoaGNtNWxjM012ZEhWeWJpMWpZVzVqWld4c1lYUnBiMjR1YW5OY0lqdGhjM2x1WXlCbWRXNWpkR2x2YmlCeWRXNUpibXhwYm1WVWRYSnVLRzRwZTJ4bGRDQnlQWEpsWVdSQlkyTmxjSFJsWkVSbGNHeHZlVzFsYm5SSlpDaHVMbVJsYkdsMlpYSjVLVHRwWmloeVBUMDlkbTlwWkNBd0tYSmxkSFZ5Ym50cmFXNWtPbUJqYUdsc1pHQjlPMnhsZENCaFBXNHVjM1JoZEdWRGRYSnpiM0kvUDI1",
	"bGR5QlRaWE56YVc5dVUzUmhkR1ZEZFhKemIzSW9lM05sY21saGJHbDZaV1JEYjI1MFpYaDBPbTR1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFzYzJWemMybHZibE4wWVhSbE9tNHVjMlZ6YzJsdmJsTjBZWFJsZlNrc2J6MXVaWGNnU1c1c2FXNWxWSFZ5YmtOdmJuUnliMndvZTJKMVptWmxjbVZrUkdWc2FYWmxjbWxsY3pwdUxtSjFabVpsY21Wa1JHVnNhWFpsY21sbGN5eGlkV1ptWlhKbFpGTmxjM05wYjI1RGIyNTBjbTlzY3pwdUxtSjFabVpsY21Wa1UyVnpjMmx2YmtOdmJuUnliMnh6TEdOaGJtTmxiR3hsWkZSaGMydEpaSE02Ymk1allXNWpaV3hzWldSVVlYTnJTV1J6TEdOdmJXMWhibVJKYm1KdmVEcHVMbU52YlcxaGJtUkpibUp2ZUN4bGVIQmxZM1JsWkZSMWNtNUpaRHBoWTNScGRtVlVkWEp1U1dRb2JpNXpaWE56YVc5dVUzUmhkR1V1WlcxcGMzTnBiMjVUZEdGMFpTa3NjMlZsYmxSaGMydEVaV3hwZG1WeWFXVnpPbTR1YzJWbGJsUmhjMnRFWld4cGRtVnlhV1Z6TEhOMFlYUmxRM1Z5YzI5eU9tRjlLU3h6UFc0dVpHVnNhWFpsY25rN1ptOXlLRHM3S1h0c1pYUWdaVDE3YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2WVM1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZZUzV6WlhOemFXOXVVM1JoZEdWOUxIUTlZWGRoYVhRZ2J5NTNZV2wwUm05eVUzUmxjQ2gwZFhKdVUzUmxjQ2g3WVdKdmNuUlRhV2R1WVd3NmJ5NXphV2R1WVd3c1lXTmpaWEIwWldSRVpYQnNiM2x0Wlc1MFNXUTZjaXhwYm5CMWREcHpMSEJoY21WdWRGZHlhWFJoWW14bE9tNHVjR0Z5Wlc1MFYzSnBkR0ZpYkdVc2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNllTNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDeHpaWE56YVc5dVUzUmhkR1U2WVM1elpYTnphVzl1VTNSaGRHVjlLU2s3YVdZb2RDNXlaWEYxYVhKbGMwTm9hV3hrUkdsemNHRjBZMmc5UFQwaE1DbHlaWFIxY200Z1kyaHBiR1JQZFhSamIyMWxLRzhwTzJ4bGRDQnBQWHRpWldadmNtVlRkR1Z3T21Vc2NtVnpkV3gwT25SOU8ybG1LRzh1YVc1cGRHbGhiRU5oYm1ObGJHeGhkR2x2YmlFOVBYWnZhV1FnTUh4OGRDNWhZM1JwYjI0OVBUMWdZMkZ1WTJWc2JHVmtZSHg4S0hRdVltRmphMmR5YjNWdVpGUmhjMnR6UHk1c1pXNW5kR2cvUHpBcFBqQXBjbVYwZFhKdUlHTm9hV3hrVDNWMFkyOXRaU2h2TEdrcE8ybG1LSFF1WVdOMGFXOXVQVDA5WUdSdmJtVmdLWEpsZEhWeWJudGhZM1JwYjI0NmUybHpSWEp5YjNJNmRDNXBjMFZ5Y205eUxHdHBibVE2WUdSdmJtVmdMRzkxZEhCMWREcDBMbTkxZEhCMWREOC9ZR0FzYzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2ZEM1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZkQzV6WlhOemFXOXVVM1JoZEdVc2RYTmhaMlU2ZEM1MWMyRm5aU3gxYzJGblpVUmxiSFJoT25RdWRYTmhaMlZFWld4MFlYMHNhMmx1WkRwZ2NtVnpkV3gwWUgwN2FXWW9kQzVoWTNScGIyNDlQVDFnWkdsemNHRjBZMmd0ZDI5eWEyWnNiM2N0ZEdGemEzTmdmSHgwTG1GamRHbHZiajA5UFdCd1lYSnJZQ1ltZEM1d1pXNWthVzVuUTI5dmNtUnBibUYwYVc5dVEyRnNiRWxrY3lFOVBYWnZhV1FnTUNseVpYUjFjbTRnWTJocGJHUlBkWFJqYjIxbEtHOHNhU2s3YVdZb2RDNWhZM1JwYjI0OVBUMWdjR0Z5YTJBcGNtVjBkWEp1SUhRdWFHRnpVR1Z1WkdsdVowRjFkR2h2Y21sNllYUnBiMjU4ZkhRdWFHRnpVR1Z1WkdsdVowbHVjSFYwUW1GMFkyZ21KbTR1WTJGd1lXSnBiR2wwYVdWelB5NXlaWEYxWlhOMFNXNXdkWFE5UFQwaE1IeDhiaTV0YjJSbFBUMDlZR052Ym5abGNuTmhkR2x2Ym1BL2UyRmpkR2x2YmpwN1lYVjBhRzl5YVhwaGRHbHZia0YwZEdWdGNIUkpaSE02ZEM1aGRYUm9iM0pwZW1GMGFXOXVRWFIwWlcxd2RFbGtjeXhoZFhSb2IzSnBlbUYwYVc5dVRtRnRaWE02ZEM1aGRYUm9iM0pwZW1GMGFXOXVUbUZ0WlhNc2EybHVaRHBnY0dGeWEyQXNjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZkQzV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ3h6WlhOemFXOXVVM1JoZEdVNmRDNXpaWE56YVc5dVUzUmhkR1VzYzJWMGRHeGxaRHAwTG5ObGRIUnNaV1I5TEd0cGJtUTZZSEpsYzNWc2RHQjlPbU5vYVd4a1QzVjBZMjl0WlNodkxHa3BPMnhsZENCalBXRXVjMlZ6YzJsdmJsTjBZWFJsTG1OdmJuUnBiblZoZEdsdmJsUnZhMlZ1TzJFdVlXUnZjSFJUZEdGMFpTaDBLU3hoTG5ObGMzTnBiMjVUZEdGMFpTNWpiMjUwYVc1MVlYUnBiMjVVYjJ0bGJpRTlQV0JnSmlaaExuTmxjM05wYjI1VGRHRjBaUzVqYjI1MGFXNTFZWFJwYjI1VWIydGxiaUU5UFdNbUptRjNZV2wwSUc0dVkyOXRiV0Z1WkVsdVltOTRMbkpsYTJWNVEyOXVkR2x1ZFdGMGFXOXVLR0V1YzJWemMybHZibE4wWVhSbExtTnZiblJwYm5WaGRHbHZibFJ2YTJWdUtTeHpQWFp2YVdRZ01IMTlablZ1WTNScGIyNGdZMmhwYkdSUGRYUmpiMjFsS0dVc2RDbDdjbVYwZFhKdWUybHVhWFJwWVd4RFlXNWpaV3hzWVhScGIyNDZaUzVwYm1sMGFXRnNRMkZ1WTJWc2JHRjBhVzl1TEdsdWFYUnBZV3hUZEdWd09uUXNhMmx1WkRwZ1kyaHBiR1JnZlgxMllYSWdTVzVzYVc1bFZIVnlia052Ym5SeWIydzlZMnhoYzNON1luVm1abVZ5WldSRVpXeHBkbVZ5YVdWek8ySjFabVpsY21Wa1UyVnpjMmx2YmtOdmJuUnliMnh6TzJOaGJtTmxiR3hsWkZSaGMydEpaSE03WTI5dGJXRnVaRWx1WW05NE8yTnZiblJ5YjJ4c1pYSTlibVYzSUVGaWIzSjBRMjl1ZEhKdmJHeGxjanRsZUhCbFkzUmxaRlIxY201SlpEdHpaV1Z1VkdGemEwUmxiR2wyWlhKcFpYTTdjM1JoZEdWRGRYSnpiM0k3WTJGdVkyVnNiR0YwYVc5dU8yTnZibk4wY25WamRHOXlLR1VwZTNSb2FYTXVZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpQV1V1WW5WbVptVnlaV1JFWld4cGRtVnlhV1Z6TEhSb2FYTXVZblZtWm1WeVpXUlRaWE56YVc5dVEyOXVkSEp2YkhNOVpTNWlkV1ptWlhKbFpGTmxjM05wYjI1RGIyNTBjbTlzY3l4MGFHbHpMbU5oYm1ObGJHeGxaRlJoYzJ0SlpITTlaUzVqWVc1alpXeHNaV1JVWVhOclNXUnpQejl1WlhjZ1UyVjBMSFJvYVhNdVkyOXRiV0Z1WkVsdVltOTRQV1V1WTI5dGJXRnVaRWx1WW05NExIUm9hWE11Wlhod1pXTjBaV1JVZFhKdVNXUTlaUzVsZUhCbFkzUmxaRlIxY201SlpDeDBhR2x6TG5ObFpXNVVZWE5yUkdWc2FYWmxjbWxsY3oxbExuTmxaVzVVWVhOclJHVnNhWFpsY21sbGN6OC9ibVYzSUZObGRDeDBhR2x6TG5OMFlYUmxRM1Z5YzI5eVBXVXVjM1JoZEdWRGRYSnpiM0o5WjJWMElHbHVhWFJwWVd4RFlXNWpaV3hzWVhScGIyNG9LWHR5WlhSMWNtNGdkR2hwY3k1allXNWpaV3hzWVhScGIyNTlaMlYwSUhOcFoyNWhiQ2dwZTNKbGRIVnliaUIwYUdsekxtTnZiblJ5YjJ4c1pYSXVjMmxuYm1Gc2ZXRnplVzVqSUhkaGFYUkdiM0pUZEdWd0tHVXBlMnhsZENCMFBXVXVkR2hsYmlobFBUNG9lMnRwYm1RNllITjBaWEJnTEhKbGMzVnNkRHBsZlNrcE8yWnZjaWc3T3lsN2JHVjBJR1U5WVhkaGFYUWdVSEp2YldselpTNXlZV05sS0Z0MExIUm9hWE11WTI5dGJXRnVaRWx1WW05NExtNWxlSFFvS1M1MGFHVnVLR1U5UGloN2EybHVaRHBnWTI5dGJXRnVaR0FzY21WemRXeDBPbVY5S1NsZEtUdHBaaWhsTG10cGJtUTlQVDFnYzNSbGNHQXBjbVYwZFhKdUlHVXVjbVZ6ZFd4ME8ybG1LR1V1Y21WemRXeDBMbVJ2Ym1VcGRHaHliM2NnUlhKeWIzSW9ZRk5sYzNOcGIyNGdZMjl0YldGdVpDQnBibUp2ZUNCamJHOXpaV1FnWW1WbWIzSmxJSFJvWlNCcGJteHBibVVnZEhWeWJpQnpkR1Z3SUhObGRIUnNaV1F1WUNrN2RHaHBjeTVqYjIxdFlXNWtTVzVpYjNndVkyOXVjM1Z0WlU1bGVIUW9LU3hoZDJGcGRDQjBhR2x6TG1oaGJtUnNaU2hsTG5KbGMzVnNkQzUyWVd4MVpTbDlmV0ZpYjNKMEtHVXBlM1JvYVhNdVkyOXVkSEp2Ykd4bGNpNXphV2R1WVd3dVlXSnZjblJsWkh4OEtIUm9hWE11WTJGdVkyVnNiR0YwYVc5dVBXVXNkR2hwY3k1amIyNTBjbTlzYkdWeUxtRmliM0owS0c1bGR5QlVkWEp1UTJGdVkyVnNiR1ZrUlhKeWIzSXBLWDFoWTJObGNIUlVZWE5yUkdWc2FYWmxjbmtvWlNsN2JHVjBJSFE5WlM1MFlYTnJSR1ZzYVhabGNubEpaRDgvWlM1allXeHNaWEkvTG5SaGMydEpaRHR5WlhSMWNtNGdkRDA5UFhadmFXUWdNRDhoTURwMGFHbHpMbTl5YVdkcGJtRjBaWE5HY205dFEyRnVZMlZzYkdWa1ZHRnpheWgwS1h4OGRHaHBjeTV6WldWdVZHRnphMFJsYkdsMlpYSnBaWE11YUdGektIUXBQeUV4T2loMGFHbHpMbk5sWlc1VVlYTnJSR1ZzYVhabGNtbGxjeTVoWkdRb2RDa3NJVEFwZldGemVXNWpJR2hoYm1Sc1pTaGxLWHRwWmlobExtdHBibVE5UFQxZ2NuVnVkR2x0WlMxaFkzUnBiMjR0Y21WemRXeDBZQ2x5WlhSMWNtNDdiR1YwSUhRN2RISjVlM1E5YzJWemMybHZia2x1WW05NFYybHlaUzVrWldOdlpHVW9aU2w5WTJGMFkyZ29aU2w3YVdZb0lTaGxJR2x1YzNSaGJtTmxiMllnVTJWemMybHZia2x1WW05NFYybHlaVVZ5Y205eUtTbDBhSEp2ZHlCbE8yRjNZV2wwSUhKbGNHOXlkRVJ5YjNCd1pXUlhhWEpsVUdGNWJHOWhaRk4wWlhBb2UyUmxkR0ZwYkRwbExtMWxjM05oWjJVc1ptRnRhV3g1T21CelpYTnphVzl1TFdsdVltOTRZSDBwTzNKbGRIVnlibjFwWmloMExtdHBibVE5UFQxZ1pHVnNhWFpsY21BcGUybG1LQ0YwYUdsekxtRmpZMlZ3ZEZSaGMydEVaV3hwZG1WeWVTaDBLU2x5WlhSMWNtNDdkR2hwY3k1aWRXWm1aWEpsWkVSbGJHbDJaWEpwWlhNdWNIVnphQ2gwS1N4MExuUjFjbTVRYjJ4cFkzazlQVDFnYzNSbFpYSmdKaVprWld4cGRtVnllVWhoYzAxbGMzTmhaMlVvZENrbUpuUm9hWE11WVdKdmNuUW9lMzBwTzNKbGRIVnlibjFwWmloMExtdHBibVE5UFQxZ1kyeGxZWEpnZkh4MExtdHBibVE5UFQxZ1kyOXRjR0ZqZEdBcGUzUm9hWE11WW5WbVptVnlaV1JUWlhOemFXOXVRMjl1ZEhKdmJITXVjSFZ6YUNoMExtdHBibVFwTzNKbGRIVnlibjFwWmloMExtdHBibVE5UFQxZ2MyVnpjMmx2YmkxMGFXMWxiM1YwWUNsN2RHaHBjeTVpZFdabVpYSmxaRk5sYzNOcGIyNURiMjUwY205c2N5NXdkWE5vS0dCbGVIQnBjbVZrWUNrN2NtVjBkWEp1ZldsbUtIUXVhMmx1WkQwOVBXQnlaWE5sZEdBcGUzUm9hWE11WW5WbVptVnlaV1JUWlhOemFXOXVRMjl1ZEhKdmJITXVjSFZ6YUNoZ2NtVnpaWFJnS1N4MGFHbHpMbUZpYjNKMEtIdDlLVHR5WlhSMWNtNTlhV1lvZEM1cmFXNWtQVDA5WUdOaGJtTmxiR0FwZTJCMFlYTnJjMkJwYmlCMEppWjBMblJoYzJ0elBUMDlJVEFtSm1GM1lXbDBJR05oYm1ObGJFRnNiRWx1WkdWNFpXUlRaWE56YVc5dVZHRnphM05UZEdWd0tIdHpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREcDBhR2x6TG5OMFlYUmxRM1Z5YzI5eUxuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMExITmxjM05wYjI1VGRHRjBaVHAwYUdsekxuTjBZWFJsUTNWeWMyOXlMbk5sYzNOcGIyNVRkR0YwWlgwcExIUXVkR0Z6YTBsa0lUMDlkbTlwWkNBd0ppWjBhR2x6TG1ScGMyTmhjbVJVWVhOclJHVnNhWFpsY21sbGN5aDBMblJoYzJ0SlpDazdiR1YwSUdVOWRDNTBZWE5yU1dRaFBUMTJiMmxrSURBbUpuUXVkSFZ5Ymtsa0lUMDlkbTlwWkNBd0ppWjBMblIxY201SlpDRTlQWFJvYVhNdVpYaHdaV04wWldSVWRYSnVTV1EvZG05cFpDQXdPblF1ZEhWeWJrbGtPMmxtS0dVOVBUMTJiMmxrSURCOGZHVTlQVDEwYUdsekxtVjRjR1ZqZEdWa1ZIVnlia2xrS1h0c1pYUWdiajFsUFQwOWRtOXBaQ0F3UDN0MFlYTnJjenAwTG5SaGMydHpmVHA3ZEdGemEzTTZkQzUwWVhOcmN5eDBkWEp1U1dRNlpYMDdkR2hwY3k1aFltOXlkQ2h1S1gxOWZXUnBjMk5oY21SVVlYTnJSR1ZzYVhabGNtbGxjeWhsS1h0MGFHbHpMbU5oYm1ObGJHeGxaRlJoYzJ0SlpITXVZV1JrS0dVcE8yeGxkQ0IwUFhSb2FYTXVZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpMbVpwYkhSbGNpaGxQVDRoZEdocGN5NXphRzkxYkdSRWFYTmpZWEprS0dVcEtUdDBhR2x6TG1KMVptWmxjbVZrUkdWc2FYWmxjbWxsY3k1emNHeHBZMlVvTUN4MGFHbHpMbUoxWm1abGNtVmtSR1ZzYVhabGNtbGxjeTVzWlc1bmRHZ3NMaTR1ZENsOWIzSnBaMmx1WVhSbGMwWnliMjFEWVc1alpXeHNaV1JVWVhOcktHVXBlM0psZEhWeWJsc3VMaTUwYUdsekxtTmhibU5sYkd4bFpGUmhjMnRKWkhOZExuTnZiV1VvZEQwK1pUMDlQWFI4ZkdVdWMzUmhjblJ6VjJsMGFDaGdKSHQwZlRwZ0tTbDljMmh2ZFd4a1JHbHpZMkZ5WkNobEtYdHNaWFFnZEQxbExuUmhjMnRFWld4cGRtVnllVWxrUHo5bExtTmhiR3hsY2o4dWRHRnphMGxrTzNKbGRIVnliaUIwSVQwOWRtOXBaQ0F3SmlaMGFHbHpMbTl5YVdkcGJtRjBaWE5HY205dFEyRnVZMlZzYkdWa1ZHRnpheWgwS1gxOU8yWjFibU4wYVc5dUlHUmxiR2wyWlhKNVNHRnpUV1Z6YzJGblpTaGxLWHR5WlhSMWNtNGdaUzV3WVhsc2IyRmtjeTV6YjIxbEtHVTlQbVV1YldWemMyRm5aU0U5UFhadmFXUWdNQ2w5Wlhod2IzSjBlM0oxYmtsdWJHbHVaVlIxY201OU95SXNJbWx0Y0c5eWRIdGhZM1JwZG1WVWRYSnVTV1I5Wm5KdmJWd2lJMmhoY201bGMzTXZZV04wYVhabExYUjFjbTR0YVdRdWFuTmNJanRwYlhCdmNuUjdVMlZ6YzJsdmJsTjBZWFJsUTNWeWMyOXlmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZjMlZ6YzJsdmJpMXpkR0YwWlMxamRYSnpiM0l1YW5OY0lqdHBiWEJ2Y25SN1pHbHpjR0YwWTJoVWRYSnVVM1JsY0gxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDJScGMzQmhkR05vTFhSMWNtNHRjM1JsY0M1cWMxd2lPMmx0Y0c5eWRIdFVkWEp1UTI5dWRISnZiRkpsWTJWcGRtVnlmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkSFZ5YmkxamIyNTBjbTlzTFhKbFkyVnBkbVZ5TG1welhDSTdhVzF3YjNKMGUzSjFia2x1YkdsdVpWUjFjbTU5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTlwYm14cGJtVXRkSFZ5Ymk1cWMxd2lPMkZ6ZVc1aklHWjFibU4wYVc5dUlHUnBjM0JoZEdOb1FXNWtRWGRoYVhSVWRYSnVLR1VwZTJ4bGRDQnVQV1V1YzNSaGRHVkRkWEp6YjNJL1AyNWxkeUJUWlhOemFXOXVVM1JoZEdWRGRYSnpiM0lvZTNObGNtbGhiR2w2WldSRGIyNTBaWGgwT21VdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPbVV1YzJWemMybHZibE4wWVhSbGZTa3NjajFoZDJGcGRDQnlkVzVKYm14cGJtVlVkWEp1S0hzdUxpNWxMSE4wWVhSbFEzVnljMjl5T201OUtUdHlaWFIxY200Z2NpNXJhVzVrUFQwOVlISmxjM1ZzZEdBL2UyRmpkR2x2YmpweUxtRmpkR2x2Yml4aGMzbHVZeUJrYVhOd2IzTmxLQ2w3ZlgwNllYZGhhWFFnWkdsemNHRjBZMmhCYm1SQmQyRnBkRU5vYVd4a1ZIVnliaWg3TGk0dVpTeHBibWwwYVdGc1EyRnVZMlZzYkdGMGFXOXVPbkl1YVc1cGRHbGhiRU5oYm1ObGJHeGhkR2x2Yml4emRHRjBaVU4xY25OdmNqcHVMR2x1YVhScFlXeFRkR1Z3T25JdWFXNXBkR2xoYkZOMFpYQjlLWDFoYzNsdVl5Qm1kVzVqZEdsdmJpQmthWE53WVhSamFFRnVaRUYzWVdsMFEyaHBiR1JVZFhKdUtIUXBlMnhsZENCcFBXNWxkeUJVZFhKdVEyOXVkSEp2YkZKbFkyVnBkbVZ5S0h0aWRXWm1aWEpsWkVSbGJHbDJaWEpwWlhNNmRDNWlkV1ptWlhKbFpFUmxiR2wyWlhKcFpYTXNZblZtWm1WeVpXUlRaWE56YVc5dVEyOXVkSEp2YkhNNmRDNWlkV1ptWlhKbFpGTmxjM05wYjI1RGIyNTBjbTlzY3l4allXNWpaV3hzWldSVVlYTnJTV1J6T25RdVkyRnVZMlZzYkdWa1ZHRnphMGxrY3l4amIyMXRZVzVrU1c1aWIzZzZkQzVqYjIxdFlXNWtTVzVpYjNnc1pYaHdaV04wWldSVWRYSnVTV1E2WVdOMGFYWmxWSFZ5Ymtsa0tIUXVjMlZ6YzJsdmJsTjBZWFJsTG1WdGFYTnphVzl1VTNSaGRHVXBMSE5sWlc1VVlYTnJSR1ZzYVhabGNtbGxjenAwTG5ObFpXNVVZWE5yUkdWc2FYWmxjbWxsY3o4L2JtVjNJRk5sZEN4emRHRjBaVU4xY25OdmNqcDBMbk4wWVhSbFEzVnljMjl5TEhSdmEyVnVPblF1WTI5dWRISnZiRlJ2YTJWdWZTazdkSEo1ZTNKbGRIVnliaUJoZDJGcGRDQmthWE53WVhSamFGUjFjbTVUZEdWd0tIdGpZWEJoWW1sc2FYUnBaWE02ZEM1allYQmhZbWxzYVhScFpYTXNZMjl0Y0d4bGRHbHZibFJ2YTJWdU9ta3VkRzlyWlc0c1pHVnNhWFpsY25rNmRDNWtaV3hwZG1WeWVTeHBibWwwYVdGc1EyRnVZMlZzYkdGMGFXOXVPblF1YVc1cGRHbGhiRU5oYm1ObGJHeGhkR2x2Yml4cGJtbDBhV0ZzVTNSbGNEcDBMbWx1YVhScFlXeFRkR1Z3TEcxdlpHVTZkQzV0YjJSbExIQmhjbVZ1ZEZkeWFYUmhZbXhsT25RdWNHRnlaVzUwVjNKcGRHRmliR1VzYzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2ZEM1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZkQzV6WlhOemFXOXVVM1JoZEdWOUtTeDdZV04wYVc5dU9tRjNZV2wwSUdrdWQyRnBkRVp2Y2tGamRHbHZiaWdwTEdScGMzQnZjMlU2S0NrOVBta3VaR2x6Y0c5elpTZ3BmWDFqWVhSamFDaGxLWHQwYUhKdmR5QmhkMkZwZENCcExtUnBjM0J2YzJVb0tTeGxmWDFsZUhCdmNuUjdaR2x6Y0dGMFkyaEJibVJCZDJGcGRGUjFjbTU5T3lJc0lpOHFLbDlmYVc1MFpYSnVZV3hmZDI5eWEyWnNiM2R6ZTF3aWMzUmxjSE5jSWpwN1hDSmthWE4wTDNOeVl5OWxlR1ZqZFhScGIyNHZZM0psWVhSbExYTmxjM05wYjI0dGMzUmxjQzVxYzF3aU9udGNJbU55WldGMFpWTmxjM05wYjI1VGRHVndYQ0k2ZTF3aWMzUmxjRWxrWENJNlhDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OWpjbVZoZEdWVFpYTnphVzl1VTNSbGNGd2lmWDE5ZlNvdk8xeHVaWGh3YjNKMElIWmhjaUJqY21WaGRHVlRaWE56YVc5dVUzUmxjQ0E5SUdkc2IySmhiRlJvYVhOYlUzbHRZbTlzTG1admNpaGNJbGRQVWt0R1RFOVhYMVZUUlY5VFZFVlFYQ0lwWFNoY0luTjBaWEF2TDJWMlpVQXdMalV4TGpFdkwyTnlaV0YwWlZObGMzTnBiMjVUZEdWd1hDSXBPMXh1SWl3aUx5b3FYMTlwYm5SbGNtNWhiRjkzYjNKclpteHZkM043WENKemRHVndjMXdpT250Y0ltUnBjM1F2YzNKakwyVjRaV04xZEdsdmJpOXpaWFIwYkdVdFkyRnVZMlZzYkdWa0xYUjFjbTR0YzNSbGNDNXFjMXdpT250Y0luTmxkSFJzWlVOaGJtTmxiR3hsWkZSMWNtNVRkR1Z3WENJNmUxd2ljM1JsY0Vsa1hDSTZYQ0p6ZEdWd0x5OWxkbVZBTUM0MU1TNHhMeTl6WlhSMGJHVkRZVzVqWld4c1pXUlVkWEp1VTNSbGNGd2lmWDE5ZlNvdk8xeHVaWGh3YjNKMElIWmhjaUJ6WlhSMGJHVkRZVzVqWld4c1pXUlVkWEp1VTNSbGNDQTlJR2RzYjJKaGJGUm9hWE5iVTNsdFltOXNMbVp2Y2loY0lsZFBVa3RHVEU5WFgxVlRSVjlUVkVWUVhDSXBYU2hjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDNObGRIUnNaVU5oYm1ObGJHeGxaRlIxY201VGRHVndYQ0lwTzF4dUlpd2lMeW9xWDE5cGJuUmxjbTVoYkY5M2IzSnJabXh2ZDNON1hDSnpkR1Z3YzF3aU9udGNJbVJwYzNRdmMzSmpMMlY0WldOMWRHbHZiaTkwWlhKdGFXNWhiQzF6WlhOemFXOXVMV1poYVd4MWNtVXRjM1JsY0M1cWMxd2lPbnRjSW1WdGFYUlVaWEp0YVc1aGJGTmxjM05wYjI1R1lXbHNkWEpsVTNSbGNGd2lPbnRjSW5OMFpYQkpaRndpT2x3aWMzUmxjQzh2WlhabFFEQXVOVEV1TVM4dlpXMXBkRlJsY20xcGJtRnNVMlZ6YzJsdmJrWmhhV3gxY21WVGRHVndYQ0o5ZlgxOUtpODdYRzVsZUhCdmNuUWdkbUZ5SUdWdGFYUlVaWEp0YVc1aGJGTmxjM05wYjI1R1lXbHNkWEpsVTNSbGNDQTlJR2RzYjJKaGJGUm9hWE5iVTNsdFltOXNMbVp2Y2loY0lsZFBVa3RHVEU5WFgxVlRSVjlUVkVWUVhDSXBYU2hjSW5OMFpYQXZMMlYyWlVBd0xqVXhMakV2TDJWdGFYUlVaWEp0YVc1aGJGTmxjM05wYjI1R1lXbHNkWEpsVTNSbGNGd2lLVHRjYmlJc0lpOHFLbDlmYVc1MFpYSnVZV3hmZDI5eWEyWnNiM2R6ZTF3aWMzUmxjSE5jSWpwN1hDSmthWE4wTDNOeVl5OWxlR1ZqZFhScGIyNHZkR1Z5YldsdVlXd3RjMlZ6YzJsdmJpMWpiMjF3YkdWMGFXOXVMWE4wWlhBdWFuTmNJanA3WENKbGJXbDBWR1Z5YldsdVlXeFRaWE56YVc5dVEyOXRjR3hsZEdsdmJsTjBaWEJjSWpwN1hDSnpkR1Z3U1dSY0lqcGNJbk4wWlhBdkwyVjJaVUF3TGpVeExqRXZMMlZ0YVhSVVpYSnRhVzVoYkZObGMzTnBiMjVEYjIxd2JHVjBhVzl1VTNSbGNGd2lmWDE5ZlNvdk8xeHVaWGh3YjNKMElIWmhjaUJsYldsMFZHVnliV2x1WVd4VFpYTnphVzl1UTI5dGNHeGxkR2x2YmxOMFpYQWdQU0JuYkc5aVlXeFVhR2x6VzFONWJXSnZiQzVtYjNJb1hDSlhUMUpMUmt4UFYxOVZVMFZmVTFSRlVGd2lLVjBvWENKemRHVndMeTlsZG1WQU1DNDFNUzR4THk5bGJXbDBWR1Z5YldsdVlXeFRaWE56YVc5dVEyOXRjR3hsZEdsdmJsTjBaWEJjSWlrN1hHNGlMQ0pwYlhCdmNuUjdabWx5WlZObGMzTnBiMjVEWVd4c1ltRmphMU4wWlhCOVpuSnZiVndpSTNOMVltRm5aVzUwY3k5allXeHNZbUZqYXkxemRHVndMbXB6WENJN2FXMXdiM0owZTI1dmRHbG1lVVJsYkdWbllYUmxaRkJoY21WdWRGTjBaWEFzYm05MGFXWjVWSFZ5YmtOaGJHeGxjbE4wWlhCOVpuSnZiVndpSTNOMVltRm5aVzUwY3k5d1lYSmxiblF0Ym05MGFXWnBZMkYwYVc5dUxtcHpYQ0k3YVcxd2IzSjBlMk55WldGMFpVUmxiR1ZuWVhSbFpGTjFZbUZuWlc1MFJYSnliM0pTWlhOMWJIUXNZM0psWVhSbFJHVnNaV2RoZEdWa1UzVmlZV2RsYm5SVGRXTmpaWE56VW1WemRXeDBmV1p5YjIxY0lpTnpkV0poWjJWdWRITXZjR0Z5Wlc1MExYSmxjM1ZzZEM1cWMxd2lPMmx0Y0c5eWRIdGxiV2wwVkdWeWJXbHVZV3hUWlhOemFXOXVRMjl0Y0d4bGRHbHZibE4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MFpYSnRhVzVoYkMxelpYTnphVzl1TFdOdmJYQnNaWFJwYjI0dGMzUmxjQzVxYzF3aU8ybHRjRzl5ZEh0MFpYSnRhVzVoZEdWRGFHbHNaRk5sYzNOcGIyNXpVM1JsY0gxbWNtOXRYQ0lqWlhobFkzVjBhVzl1TDNSbGNtMXBibUYwWlMxamFHbHNaQzF6WlhOemFXOXVjeTF6ZEdWd0xtcHpYQ0k3WVhONWJtTWdablZ1WTNScGIyNGdabWx1WVd4cGVtVkZlSEJwY21Wa1UyVnpjMmx2YmloMEtYdHlaWFIxY200Z1lYZGhhWFFnZEdWeWJXbHVZWFJsUTJocGJHUlRaWE56YVc5dWMxTjBaWEFvZTNObGNtbGhiR2w2WldSRGIyNTBaWGgwT25RdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPblF1YzJWemMybHZibE4wWVhSbGZTa3NZWGRoYVhRZ1pXMXBkRlJsY20xcGJtRnNVMlZ6YzJsdmJrTnZiWEJzWlhScGIyNVRkR1Z3S0h0d1lYSmxiblJYY21sMFlXSnNaVHAwTG1SeWFYWmxjbGR5YVhSaFlteGxMSE5sY21saGJHbDZaV1JEYjI1MFpYaDBPblF1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFI5S1N4MExuUmxjbTFwYm1Gc1UzUmhkR1VoUFQxMmIybGtJREFtSmloMExuUmxjbTFwYm1Gc1UzUmhkR1V1ZEdWeWJXbHVZV3hGYldsMGRHVmtQU0V3S1N4MExtMXZaR1U5UFQxZ2RHRnphMkEvS0dGM1lXbDBJR1pwY21WVFpYTnphVzl1UTJGc2JHSmhZMnRUZEdWd0tIdHZkWFJ3ZFhRNllHQXNjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUTZkQzV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkQ3h6ZEdGMGRYTTZZR052YlhCc1pYUmxaR0I5S1N4aGQyRnBkQ0J1YjNScFpubEVaV3hsWjJGMFpXUlFZWEpsYm5SVGRHVndLSHR5WlhOMWJIUTZZM0psWVhSbFJHVnNaV2RoZEdWa1UzVmlZV2RsYm5SVGRXTmpaWE56VW1WemRXeDBLSFF1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFzWUdBcExITmxjbWxoYkdsNlpXUkRiMjUwWlhoME9uUXVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUjlLU2s2ZEM1allXeHNaWEloUFQxMmIybGtJREFtSm1GM1lXbDBJRzV2ZEdsbWVWUjFjbTVEWVd4c1pYSlRkR1Z3S0h0allXeHNaWEk2ZEM1allXeHNaWElzYkdsbVpXTjVZMnhsT21CMFpYSnRhVzVoYkdBc2MyVnpjMmx2Ymtsa09uUXVjMlZ6YzJsdmJsTjBZWFJsTG5ObGMzTnBiMjVKWkN4elpYUjBiR1ZrT250dmRYUndkWFE2WUdCOWZTa3NlMjkxZEhCMWREcGdZSDE5WVhONWJtTWdablZ1WTNScGIyNGdabWx1WVd4cGVtVkViMjVsS0c0cGUyeGxkSHR2ZFhSd2RYUTZjaXh6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHBwZlQxdUxtRmpkR2x2Yml4aFBXNHVZV04wYVc5dUxtbHpSWEp5YjNJOVBUMGhNRHRwWmloaGQyRnBkQ0IwWlhKdGFXNWhkR1ZEYUdsc1pGTmxjM05wYjI1elUzUmxjQ2g3YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2YVN4elpYTnphVzl1VTNSaGRHVTZiaTVoWTNScGIyNHVjMlZ6YzJsdmJsTjBZWFJsZlNrc2JpNTBaWEp0YVc1aGJGTjBZWFJsSVQwOWRtOXBaQ0F3SmlZb2JpNTBaWEp0YVc1aGJGTjBZWFJsTG5SbGNtMXBibUZzUlcxcGRIUmxaRDBoTUNrc2JpNXRiMlJsUFQwOVlIUmhjMnRnS1dGM1lXbDBJR1pwY21WVFpYTnphVzl1UTJGc2JHSmhZMnRUZEdWd0tIdGxjbkp2Y2pwaFAzSTZkbTlwWkNBd0xHOTFkSEIxZERwaFAzWnZhV1FnTURweUxITmxjbWxoYkdsNlpXUkRiMjUwWlhoME9ta3NjM1JoZEhWek9tRS9ZR1poYVd4bFpHQTZZR052YlhCc1pYUmxaR0FzZFhOaFoyVTZiaTVoWTNScGIyNHVkWE5oWjJWOUtTeGhkMkZwZENCdWIzUnBabmxFWld4bFoyRjBaV1JRWVhKbGJuUlRkR1Z3S0h0",
	"eVpYTjFiSFE2WVQ5amNtVmhkR1ZFWld4bFoyRjBaV1JUZFdKaFoyVnVkRVZ5Y205eVVtVnpkV3gwS0drc2NpazZZM0psWVhSbFJHVnNaV2RoZEdWa1UzVmlZV2RsYm5SVGRXTmpaWE56VW1WemRXeDBLR2tzY2lrc2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNmFTeDFjMkZuWlRwdUxtRmpkR2x2Ymk1MWMyRm5aWDBwTzJWc2MyVjdiR1YwSUdVOWUyOTFkSEIxZERweUxIVnpZV2RsT200dVlXTjBhVzl1TG5WellXZGxSR1ZzZEdGOU8yRW1KaWhsTG1selJYSnliM0k5SVRBcExHNHVZMkZzYkdWeUlUMDlkbTlwWkNBd0ppWmhkMkZwZENCdWIzUnBabmxVZFhKdVEyRnNiR1Z5VTNSbGNDaDdZMkZzYkdWeU9tNHVZMkZzYkdWeUxHeHBabVZqZVdOc1pUcGdkR1Z5YldsdVlXeGdMSE5sYzNOcGIyNUpaRHB1TG1GamRHbHZiaTV6WlhOemFXOXVVM1JoZEdVdWMyVnpjMmx2Ymtsa0xITmxkSFJzWldRNlpYMHBmWEpsZEhWeWJudHZkWFJ3ZFhRNmNuMTlaWGh3YjNKMGUyWnBibUZzYVhwbFJHOXVaU3htYVc1aGJHbDZaVVY0Y0dseVpXUlRaWE56YVc5dWZUc2lMQ0pwYlhCdmNuUjdZM0psWVhSbFNHOXZhMzFtY205dFhDSWpZMjl0Y0dsc1pXUXZRSGR2Y210bWJHOTNMMk52Y21VdmFXNWtaWGd1YW5OY0lqdHBiWEJ2Y25SN1kyeGhhVzFJYjI5clQzZHVaWEp6YUdsd0xHUnBjM0J2YzJWSWIyOXJmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZhRzl2YXkxdmQyNWxjbk5vYVhBdWFuTmNJanRwYlhCdmNuUjdVMFZUVTBsUFRsOUpUa0pQV0Y5WFNWSkZYMVpGVWxOSlQwNHNVMFZUVTBsUFRsOUpUa0pQV0Y5WFNWSkZYMVpGVWxOSlQwNWZUVVZVUVVSQlZFRmZTMFZaZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2ZDJseVpTOXpaWE56YVc5dUxXbHVZbTk0TFdOdmJuUnlZV04wTG1welhDSTdablZ1WTNScGIyNGdZM0psWVhSbFUyVnpjMmx2YmtOdmJXMWhibVJKYm1KdmVDZ3BlMnhsZENCaExHOHNjeXhqUFZ0ZExHdzlXMTBzZFQwd0xHUTliblZzYkN4bUxIQXNaVzV4ZFdWMVpUMWxQVDU3YkM1d2RYTm9LR1VwTEd3dWMyOXlkQ2dvWlN4MEtUMCtaUzV2Y21SbGNpMTBMbTl5WkdWeUtTeHdQeTRvS1N4d1BYWnZhV1FnTUgwc1lYSnRQV1U5UG50bExtTnNiM05sWkh4OFpTNXdaVzVrYVc1bmZId29aUzV3Wlc1a2FXNW5QU0V3TEdVdWNtVnpiMngyWldROWRtOXBaQ0F3TENobExuSmxkR2x5WldRL1VISnZiV2x6WlM1eVpYTnZiSFpsS0dVdWFHOXZheWt1ZEdobGJpaGxQVDRvZTJSdmJtVTZJVEVzZG1Gc2RXVTZaWDBwS1RwbExtbDBaWEpoZEc5eUxtNWxlSFFvS1NrdWRHaGxiaWgwUFQ1N2JHVjBJRzQ5ZTI5eVpHVnlPblVyS3l4eVpYTjFiSFE2ZEN4emRHRjBaVHBsZlR0bExuSmxjMjlzZG1Wa1BXNHNaUzVsYm1GaWJHVmtKaVpsYm5GMVpYVmxLRzRwZlN3b0tUMCtlMzBwS1gwc1pXNWhZbXhsUFdVOVBudGxMbVZ1WVdKc1pXUTlJVEFzWlM1eVpYTnZiSFpsWkNFOVBYWnZhV1FnTUNZbVpXNXhkV1YxWlNobExuSmxjMjlzZG1Wa0tYMHNZM0psWVhSbFUzUmhkR1U5ZEQwK2UyeGxkQ0J1UFdOeVpXRjBaVWh2YjJzb2UyMWxkR0ZrWVhSaE9udGJVMFZUVTBsUFRsOUpUa0pQV0Y5WFNWSkZYMVpGVWxOSlQwNWZUVVZVUVVSQlZFRmZTMFZaWFRwVFJWTlRTVTlPWDBsT1FrOVlYMWRKVWtWZlZrVlNVMGxQVG4wc2RHOXJaVzQ2ZEgwcE8zSmxkSFZ5Ym50amJHOXpaV1E2SVRFc1pXNWhZbXhsWkRvaE1TeG9iMjlyT200c2FYUmxjbUYwYjNJNmJsdFRlVzFpYjJ3dVlYTjVibU5KZEdWeVlYUnZjbDBvS1N4d1pXNWthVzVuT2lFeExISmxkR2x5WldRNklURjlmU3h6ZEdGMFpYTTlLQ2s5UGx0aExHOHNjeXd1TGk1alhTNW1hV3gwWlhJb1pUMCtaU0U5UFhadmFXUWdNQ2tzYm1WNGRGSmxZV1E5S0NrOVBudHBaaWhoUFQwOWRtOXBaQ0F3S1hSb2NtOTNJRVZ5Y205eUtHQkRZVzV1YjNRZ2QyRnBkQ0JtYjNJZ2MyVnpjMmx2YmlCamIyMXRZVzVrY3lCaVpXWnZjbVVnWTJ4aGFXMXBibWNnZEdobElITjBZV0pzWlNCcGJtSnZlQzVnS1R0cFppaGtJVDA5Ym5Wc2JDbHlaWFIxY200Z1pEdHNaWFFnWlQxemRHRjBaWE1vS1R0bWIzSW9iR1YwSUhRZ2IyWWdaU2xoY20wb2RDazdjbVYwZFhKdUlHVXVaWFpsY25rb1pUMCtaUzVqYkc5elpXUXBQeWhtUFh0dmNtUmxjanAxS3lzc2NtVnpkV3gwT250a2IyNWxPaUV3TEhaaGJIVmxPblp2YVdRZ01IMHNjM1JoZEdVNllYMHNaRDFRY205dGFYTmxMbkpsYzI5c2RtVW9aaTV5WlhOMWJIUXBMR1FwT2loa1BTaGhjM2x1WXlncFBUNTdabTl5S0R0c0xteGxibWQwYUQwOVBUQTdLV0YzWVdsMElHNWxkeUJRY205dGFYTmxLR1U5UG50d1BXVjlLVHRzWlhRZ1pUMXNMbk5vYVdaMEtDazdjbVYwZFhKdUlHWTlaU3hsTG5KbGMzVnNkSDBwS0Nrc1pDbDlPM0psZEhWeWJudGhjM2x1WXlCamJHRnBiVUYxZEdodmNtbDZZWFJwYjI0b1pTbDdhV1lvY3lFOVBYWnZhV1FnTUNsN2FXWW9jeTVvYjI5ckxuUnZhMlZ1UFQwOVpTbHlaWFIxY200N2RHaHliM2NnUlhKeWIzSW9ZRUVnYzJWemMybHZiaUJqYjIxdFlXNWtJR2x1WW05NElHTmhibTV2ZENCamFHRnVaMlVnYVhSeklHRjFkR2h2Y21sNllYUnBiMjRnZEc5clpXNHVZQ2w5YkdWMElHNDlZM0psWVhSbFUzUmhkR1VvWlNrN1lYZGhhWFFnWTJ4aGFXMUliMjlyVDNkdVpYSnphR2x3S0c0dWFHOXZheWtzY3oxdWZTeGhjM2x1WXlCamJHRnBiVk4wWVdKc1pTaGxLWHRwWmloaElUMDlkbTlwWkNBd0tYdHBaaWhoTG1odmIyc3VkRzlyWlc0OVBUMWxLWEpsZEhWeWJqdDBhSEp2ZHlCRmNuSnZjaWhnUVNCelpYTnphVzl1SUdOdmJXMWhibVFnYVc1aWIzZ2dZMkZ1Ym05MElHTm9ZVzVuWlNCcGRITWdjM1JoWW14bElIUnZhMlZ1TG1BcGZXeGxkQ0J1UFdOeVpXRjBaVk4wWVhSbEtHVXBPMkYzWVdsMElHTnNZV2x0U0c5dmEwOTNibVZ5YzJocGNDaHVMbWh2YjJzcExHVnVZV0pzWlNodUtTeGhQVzU5TEdOdmJuTjFiV1ZPWlhoMEtDbDdhV1lvWmowOVBYWnZhV1FnTUNsMGFISnZkeUJGY25KdmNpaGdRMkZ1Ym05MElHTnZibk4xYldVZ1lTQnpaWE56YVc5dUlHTnZiVzFoYm1RZ1ltVm1iM0psSUdsMElISmxjMjlzZG1WekxtQXBPMll1YzNSaGRHVXVjR1Z1WkdsdVp6MGhNU3htTG5OMFlYUmxMbkpsYzI5c2RtVmtQWFp2YVdRZ01DeG1MbkpsYzNWc2RDNWtiMjVsSmlZb1ppNXpkR0YwWlM1amJHOXpaV1E5SVRBcExHWTlkbTlwWkNBd0xHUTliblZzYkgwc1lYTjVibU1nWkdsemNHOXpaU2dwZTJ4bGRDQmxQVnR2TEdFc2MxMHVabWxzZEdWeUtHVTlQbVVoUFQxMmIybGtJREFwTzI4OWRtOXBaQ0F3TEdFOWRtOXBaQ0F3TEhNOWRtOXBaQ0F3TEdGM1lXbDBJRkJ5YjIxcGMyVXVZV3hzS0dVdWJXRndLR0Z6ZVc1aklHVTlQbUYzWVdsMElHUnBjM0J2YzJWSWIyOXJLR1V1YUc5dmF5a3BLWDBzYUdGelVtVmhaSGxCZFhSb2IzSnBlbUYwYVc5dUtDbDdjbVYwZFhKdUlITS9MbVZ1WVdKc1pXUWhQVDBoTUh4OGN5NXlaWE52YkhabFpEMDlQWFp2YVdRZ01EOGhNVHBtUFQwOWRtOXBaQ0F3UDJ4Yk1GMC9Mbk4wWVhSbFBUMDljenBtTG5OMFlYUmxQVDA5YzMwc2JtVjRkRHB1WlhoMFVtVmhaQ3hoYzNsdVl5QnVaWGgwVjJsMGFGTnZkWEpqWlNncGUzSmxkSFZ5Ym50eVpYTjFiSFE2WVhkaGFYUWdibVY0ZEZKbFlXUW9LU3h6YjNWeVkyVTZaaUU5UFhadmFXUWdNQ1ltWmk1emRHRjBaVDA5UFhNL1lHRjFkR2h2Y21sNllYUnBiMjVnT21CelpYTnphVzl1WUgxOUxITmxkRUYxZEdodmNtbDZZWFJwYjI1WGFXNWtiM2NvWlNsN2FXWW9jejA5UFhadmFXUWdNQ2w3YVdZb1pTbDBhSEp2ZHlCRmNuSnZjaWhnUTJGdWJtOTBJRzl3Wlc0Z2RHaGxJR0YxZEdodmNtbDZZWFJwYjI0Z2QybHVaRzkzSUdKbFptOXlaU0JqYkdGcGJXbHVaeUJwZEhNZ2FHOXZheTVnS1R0eVpYUjFjbTU5YVdZb1pTbDdjeTVsYm1GaWJHVmtmSHhsYm1GaWJHVW9jeWtzWmlFOVBYWnZhV1FnTUNZbVppNXpkR0YwWlNFOVBYTW1Kbk11Y21WemIyeDJaV1FoUFQxMmIybGtJREFtSm5NdWNtVnpiMngyWldRdWIzSmtaWEk4Wmk1dmNtUmxjaVltS0dWdWNYVmxkV1VvWmlrc1pqMTJiMmxrSURBc1pEMXVkV3hzS1N4a0lUMDliblZzYkNZbVlYSnRLSE1wTzNKbGRIVnlibjF6TG1WdVlXSnNaV1E5SVRFN2JHVjBJSFE5YkM1bWFXNWtTVzVrWlhnb1pUMCtaUzV6ZEdGMFpUMDlQWE1wTzNRaFBUMHRNU1ltYkM1emNHeHBZMlVvZEN3eEtYMHNZWE41Ym1NZ2NtVnJaWGxEYjI1MGFXNTFZWFJwYjI0b1pTbDdhV1lvSVdWOGZHOC9MbWh2YjJzdWRHOXJaVzQ5UFQxbEtYSmxkSFZ5Ymp0c1pYUWdjajFqY21WaGRHVlRkR0YwWlNobEtUdHBaaWh2UFQwOWRtOXBaQ0F3S1h0aGQyRnBkQ0JqYkdGcGJVaHZiMnRQZDI1bGNuTm9hWEFvY2k1b2IyOXJLU3hsYm1GaWJHVW9jaWtzYnoxeUxHUWhQVDF1ZFd4c0ppWmhjbTBvY2lrN2NtVjBkWEp1ZldGeWJTaHlLU3hoZDJGcGRDQmpiR0ZwYlVodmIydFBkMjVsY25Ob2FYQW9jaTVvYjI5cktTeGxibUZpYkdVb2NpazdiR1YwSUdrOWJ6dHZQWElzWVhKdEtHa3BPM1J5ZVh0aGQyRnBkQ0JrYVhOd2IzTmxTRzl2YXlocExtaHZiMnNwZldOaGRHTm9LR1VwZTI4OWRtOXBaQ0F3TzNSeWVYdGhkMkZwZENCa2FYTndiM05sU0c5dmF5aHlMbWh2YjJzcGZXTmhkR05vZTMxMGFISnZkeUJsZldrdWNtVjBhWEpsWkQwaE1DeGpMbkIxYzJnb2FTbDlmWDFsZUhCdmNuUjdZM0psWVhSbFUyVnpjMmx2YmtOdmJXMWhibVJKYm1KdmVIMDdJaXdpWTI5dWMzUWdSRVZHUVZWTVZGOVRSVk5UU1U5T1gxUkpUVVZQVlZSZlRWTTlOekl3S2pZd0tqWXdLakZsTXp0bGVIQnZjblI3UkVWR1FWVk1WRjlUUlZOVFNVOU9YMVJKVFVWUFZWUmZUVk45T3lJc0ltbHRjRzl5ZEh0allXNWpaV3hUWlhOemFXOXVWR2x0Wlc5MWRGTjBaWEFzYzNSaGNuUlRaWE56YVc5dVZHbHRaVzkxZEZOMFpYQjlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOXpaWE56YVc5dUxYUnBiV1Z2ZFhRdGMzUmxjSE11YW5OY0lqdG1kVzVqZEdsdmJpQmpjbVZoZEdWVFpYTnphVzl1VkdsdFpXOTFkRU52Ym5SeWIyd29kQ2w3YkdWMElHNDdjbVYwZFhKdWUyRnplVzVqSUdScGMzQnZjMlVvS1h0cFppaHVQVDA5ZG05cFpDQXdLWEpsZEhWeWJqdHNaWFFnWlQxdU8yNDlkbTlwWkNBd0xHRjNZV2wwSUdOaGJtTmxiRk5sYzNOcGIyNVVhVzFsYjNWMFUzUmxjQ2g3Y25WdVNXUTZaUzV5ZFc1SlpIMHBmU3hoYzNsdVl5QnpkR0Z5ZENncGUyNDlQVDEyYjJsa0lEQW1KaWh1UFdGM1lXbDBJSE4wWVhKMFUyVnpjMmx2YmxScGJXVnZkWFJUZEdWd0tIUXBLWDE5ZldWNGNHOXlkSHRqY21WaGRHVlRaWE56YVc5dVZHbHRaVzkxZEVOdmJuUnliMng5T3lJc0lpOHFLbDlmYVc1MFpYSnVZV3hmZDI5eWEyWnNiM2R6ZTF3aWMzUmxjSE5jSWpwN1hDSmthWE4wTDNOeVl5OWxlR1ZqZFhScGIyNHZZMjl1ZEdsdWRXRjBhVzl1TFdOdmJtWnNhV04wTFhOMFpYQXVhbk5jSWpwN1hDSnpaWFIwYkdWRGIyNTBhVzUxWVhScGIyNURiMjVtYkdsamRGTjBaWEJjSWpwN1hDSnpkR1Z3U1dSY0lqcGNJbk4wWlhBdkwyVjJaVUF3TGpVeExqRXZMM05sZEhSc1pVTnZiblJwYm5WaGRHbHZia052Ym1ac2FXTjBVM1JsY0Z3aWZYMTlmU292TzF4dVpYaHdiM0owSUhaaGNpQnpaWFIwYkdWRGIyNTBhVzUxWVhScGIyNURiMjVtYkdsamRGTjBaWEFnUFNCbmJHOWlZV3hVYUdselcxTjViV0p2YkM1bWIzSW9YQ0pYVDFKTFJreFBWMTlWVTBWZlUxUkZVRndpS1Ywb1hDSnpkR1Z3THk5bGRtVkFNQzQxTVM0eEx5OXpaWFIwYkdWRGIyNTBhVzUxWVhScGIyNURiMjVtYkdsamRGTjBaWEJjSWlrN1hHNGlMQ0l2S2lwZlgybHVkR1Z5Ym1Gc1gzZHZjbXRtYkc5M2MzdGNJbmR2Y210bWJHOTNjMXdpT250Y0ltUnBjM1F2YzNKakwyVjRaV04xZEdsdmJpOTNiM0pyWm14dmR5MWxiblJ5ZVM1cWMxd2lPbnRjSW5kdmNtdG1iRzkzUlc1MGNubGNJanA3WENKM2IzSnJabXh2ZDBsa1hDSTZYQ0ozYjNKclpteHZkeTh2WlhabEx5OTNiM0pyWm14dmQwVnVkSEo1WENKOWZYMTlLaTg3WEc1cGJYQnZjblI3WVhSMFlXTm9RMnhwWlc1MFEyOXVkR1Y0ZEN4eVpXRmtRMnhwWlc1MFEyOXVkR1Y0ZEgxbWNtOXRYQ0lqYVc1MFpYSnVZV3d2WTJ4cFpXNTBMV052Ym5SbGVIUXVhbk5jSWp0cGJYQnZjblI3YzJWemMybHZia052YlcxaGJtUkliMjlyVkc5clpXNTlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOXpaWE56YVc5dUxXTnZiVzFoYm1RdGRHOXJaVzR1YW5OY0lqdHBiWEJ2Y25SN1oyVjBWMjl5YTJac2IzZE5aWFJoWkdGMFlTeG5aWFJYY21sMFlXSnNaWDFtY205dFhDSWpZMjl0Y0dsc1pXUXZRSGR2Y210bWJHOTNMMk52Y21VdmFXNWtaWGd1YW5OY0lqdHBiWEJ2Y25SN2FYTkliMjlyUTI5dVpteHBZM1JGY25KdmNuMW1jbTl0WENJalpYaGxZM1YwYVc5dUwyaHZiMnN0YjNkdVpYSnphR2x3TG1welhDSTdhVzF3YjNKMGUzSmxZV1JEYUdGdWJtVnNVbVZ4ZFdWemRFbGtMSEpsWVdSU2IyOTBVMlZ6YzJsdmJrbGtmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZaWFpsTFhkdmNtdG1iRzkzTFdGMGRISnBZblYwWlhNdWFuTmNJanRwYlhCdmNuUjdVMlZ6YzJsdmJsTjBZWFJsUTNWeWMyOXlmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZjMlZ6YzJsdmJpMXpkR0YwWlMxamRYSnpiM0l1YW5OY0lqdHBiWEJ2Y25SN1ptbHlaVk5sYzNOcGIyNURZV3hzWW1GamExTjBaWEI5Wm5KdmJWd2lJM04xWW1GblpXNTBjeTlqWVd4c1ltRmpheTF6ZEdWd0xtcHpYQ0k3YVcxd2IzSjBlMjV2Y20xaGJHbDZaVk5sY21saGJHbDZZV0pzWlVWeWNtOXlmV1p5YjIxY0lpTmxlR1ZqZFhScGIyNHZkMjl5YTJac2IzY3RaWEp5YjNKekxtcHpYQ0k3YVcxd2IzSjBlMk5oYm1ObGJFUmxjMk5sYm1SaGJuUlVkWEp1YzFOMFpYQjlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOWpZVzVqWld3dFpHVnpZMlZ1WkdGdWRDMTBkWEp1Y3kxemRHVndMbXB6WENJN2FXMXdiM0owZTJKcGJtUlVkWEp1UTJGc2JHVnlRMjl1ZEdWNGRGTjBaWEFzYm05MGFXWjVRMkZ1WTJWc2JHVmtWR0Z6YTBOaGJHeGxjbE4wWlhBc2JtOTBhV1o1UkdWc1pXZGhkR1ZrVUdGeVpXNTBVM1JsY0N4dWIzUnBabmxVZFhKdVEyRnNiR1Z5VTNSbGNDeHlaWE52YkhabFNXNXBkR2xoYkZSMWNtNURZV3hzWlhKVGRHVndmV1p5YjIxY0lpTnpkV0poWjJWdWRITXZjR0Z5Wlc1MExXNXZkR2xtYVdOaGRHbHZiaTVxYzF3aU8ybHRjRzl5ZEh0amNtVmhkR1ZFWld4bFoyRjBaV1JUZFdKaFoyVnVkRVZ5Y205eVVtVnpkV3gwZldaeWIyMWNJaU56ZFdKaFoyVnVkSE12Y0dGeVpXNTBMWEpsYzNWc2RDNXFjMXdpTzJsdGNHOXlkSHQwWlhKdGFXNWhkR1ZEYUdsc1pGTmxjM05wYjI1elUzUmxjSDFtY205dFhDSWpaWGhsWTNWMGFXOXVMM1JsY20xcGJtRjBaUzFqYUdsc1pDMXpaWE56YVc5dWN5MXpkR1Z3TG1welhDSTdhVzF3YjNKMGUyNWxlSFJVZFhKdVJHVnNhWFpsY25sOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5d1lYSnJaV1F0WkdWc2FYWmxjbmt0ZDJGcGRDNXFjMXdpTzJsdGNHOXlkSHR5WldKaGMyVlVZWE5yUVdkbGJuUklZVzVrYkdWTmRYUmhkR2x2Ym5OOVpuSnZiVndpSTNOMVltRm5aVzUwY3k5b1lXNWtiR1Z6TDNKbFltRnpaUzVxYzF3aU8ybHRjRzl5ZEh0a2FYTndZWFJqYUVGdVpFRjNZV2wwVkhWeWJuMW1jbTl0WENJalpYaGxZM1YwYVc5dUwzUjFjbTR0WkdsemNHRjBZMmd1YW5OY0lqdHBiWEJ2Y25SN1kzSmxZWFJsVTJWemMybHZibE4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5amNtVmhkR1V0YzJWemMybHZiaTF6ZEdWd0xtcHpYQ0k3YVcxd2IzSjBlM05sZEhSc1pVTmhibU5sYkd4bFpGUjFjbTVUZEdWd2ZXWnliMjFjSWlObGVHVmpkWFJwYjI0dmMyVjBkR3hsTFdOaGJtTmxiR3hsWkMxMGRYSnVMWE4wWlhBdWFuTmNJanRwYlhCdmNuUjdaVzFwZEZSbGNtMXBibUZzVTJWemMybHZia1poYVd4MWNtVlRkR1Z3ZldaeWIyMWNJaU5sZUdWamRYUnBiMjR2ZEdWeWJXbHVZV3d0YzJWemMybHZiaTFtWVdsc2RYSmxMWE4wWlhBdWFuTmNJanRwYlhCdmNuUjdabWx1WVd4cGVtVkViMjVsTEdacGJtRnNhWHBsUlhod2FYSmxaRk5sYzNOcGIyNTlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOTNiM0pyWm14dmR5MWxiblJ5ZVMxbWFXNWhiR2w2WVhScGIyNHVhbk5jSWp0cGJYQnZjblI3WTNKbFlYUmxVMlZ6YzJsdmJrTnZiVzFoYm1SSmJtSnZlSDFtY205dFhDSWpaWGhsWTNWMGFXOXVMM05sYzNOcGIyNHRZMjl0YldGdVpDMXBibUp2ZUM1cWMxd2lPMmx0Y0c5eWRIdEVSVVpCVlV4VVgxTkZVMU5KVDA1ZlZFbE5SVTlWVkY5TlUzMW1jbTl0WENJalpYaGxZM1YwYVc5dUwzTmxjM05wYjI0dGRHbHRaVzkxZEM1cWMxd2lPMmx0Y0c5eWRIdGpjbVZoZEdWVFpYTnphVzl1VkdsdFpXOTFkRU52Ym5SeWIyeDlabkp2YlZ3aUkyVjRaV04xZEdsdmJpOXpaWE56YVc5dUxYUnBiV1Z2ZFhRdFkyOXVkSEp2YkM1cWMxd2lPMmx0Y0c5eWRIdHpaWFIwYkdWRGIyNTBhVzUxWVhScGIyNURiMjVtYkdsamRGTjBaWEI5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTlqYjI1MGFXNTFZWFJwYjI0dFkyOXVabXhwWTNRdGMzUmxjQzVxYzF3aU8yRnplVzVqSUdaMWJtTjBhVzl1SUhkdmNtdG1iRzkzUlc1MGNua29ZeWw3YkdWMGUzZHZjbXRtYkc5M1VuVnVTV1E2WkN4M2IzSnJabXh2ZDFOMFlYSjBaV1JCZERwbWZUMW5aWFJYYjNKclpteHZkMDFsZEdGa1lYUmhLQ2tzY0QxakxuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMFcyQmxkbVV1WTI5dWRHbHVkV0YwYVc5dVZHOXJaVzVnWFh4OFlHQXNkajFqTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwVzJCbGRtVXViVzlrWldCZExIazlZeTV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRnRnWlhabExtTmhjR0ZpYVd4cGRHbGxjMkJkTEdJOVl5NXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRGdGdaWFpsTG1KMWJtUnNaV0JkTzJNdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhSYllHVjJaUzV6WlhOemFXOXVTV1JnWFQxa08yeGxkQ0I0UFdkbGRGZHlhWFJoWW14bEtDa3NRejE3WTJGc2JHVnlPblp2YVdRZ01DeGpZV3hzWlhKU1pYTnZiSFpsWkRvaE1TeHNZWE4wVTJWemMybHZibE4wWVhSbE9uWnZhV1FnTUN4elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZERwakxuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMExIUmxjbTFwYm1Gc1JXMXBkSFJsWkRvaE1YMDdkSEo1ZTJ4bGRDQnlQWEpsWVdSU2IyOTBVMlZ6YzJsdmJrbGtLR011YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFwTEdrOVl5NXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRGdGdaWFpsTG1SNWJtRnRhV05UZFdKaFoyVnVkRUZuWlc1MFEyOXVabWxuWUYwc2JEMWpjbVZoZEdWVFpYTnphVzl1UTI5dGJXRnVaRWx1WW05NEtDa3NkVDF6WlhOemFXOXVRMjl0YldGdVpFaHZiMnRVYjJ0bGJpaGtLU3h0UFdBa2UyUjlPbUYxZEdoZ0xHZ3NaenQwY25sN2JHVjBXMjRzY3l4ZkxGTmRQV0YzWVdsMElGQnliMjFwYzJVdVlXeHNVMlYwZEd4bFpDaGJZM0psWVhSbFUyVnpjMmx2YmxOMFpYQW9lMk52YlhCcGJHVmtRWEowYVdaaFkzUnpVMjkxY21ObE9tSXVjMjkxY21ObExHTnZiblJwYm5WaGRHbHZibFJ2YTJWdU9uQXNaSGx1WVcxcFkxTjFZbUZuWlc1MFFXZGxiblJEYjI1bWFXYzZhU3hwYm1obGNtbDBaV1JNYVcxcGRITTZZeTVzYVcxcGRITXNibTlrWlVsa09tSXVibTlrWlVsa0xHOTFkSEIxZEZOamFHVnRZVHBqTG1sdWNIVjBMbTkxZEhCMWRGTmphR1Z0WVN4eWIyOTBVMlZ6YzJsdmJrbGtPbklzYzJWemMybHZia2xrT21Rc2RHRnphMGxrT21NdWRHRnphMGxrZlNrc2JDNWpiR0ZwYlZOMFlXSnNaU2gxS1N4c0xtTnNZV2x0UVhWMGFHOXlhWHBoZEdsdmJpaHRLU3hzTG5KbGEyVjVRMjl1ZEdsdWRXRjBhVzl1S0hBcFhTazdhV1lvYmk1emRHRjBkWE05UFQxZ2NtVnFaV04wWldSZ0tYUm9jbTkzSUc0dWNtVmhjMjl1TzJsbUtITXVjM1JoZEhWelBUMDlZSEpsYW1WamRHVmtZQ2wwYUhKdmR5QnpMbkpsWVhOdmJqdHBaaWhmTG5OMFlYUjFjejA5UFdCeVpXcGxZM1JsWkdBcGRHaHliM2NnWHk1eVpXRnpiMjQ3YVdZb1V5NXpkR0YwZFhNOVBUMWdjbVZxWldOMFpXUmdLWHRwWmlocGMwaHZiMnREYjI1bWJHbGpkRVZ5Y205eUtGTXVjbVZoYzI5dUtTbHlaWFIxY200b1l5NWhZM1JwZG1sMGVVTnZiR3hsWTNSdmNsSjFia2xrSVQwOWRtOXBaQ0F3Zkh4akxtTnZiblJwYm5WaGRHbHZia052Ym1ac2FXTjBRMjl0YldGdVpDRTlQWFp2YVdRZ01Da21KbUYzWVdsMElITmxkSFJzWlVOdmJuUnBiblZoZEdsdmJrTnZibVpzYVdOMFUzUmxjQ2g3WVdOMGFYWnBkSGxEYjJ4c1pXTjBiM0pTZFc1SlpEcGpMbUZqZEdsMmFYUjVRMjlzYkdWamRHOXlVblZ1U1dRc1kyOXRiV0Z1WkRwakxtTnZiblJwYm5WaGRHbHZia052Ym1ac2FXTjBRMjl0YldGdVpDeGpiMjUwYVc1MVlYUnBiMjVVYjJ0bGJqcHdMRzkzYm1WeVUyVnpjMmx2Ymtsa09uUjVjR1Z2WmlCVExuSmxZWE52Ymk1amIyNW1iR2xqZEdsdVoxSjFia2xrUFQxZ2MzUnlhVzVuWUQ5VExuSmxZWE52Ymk1amIyNW1iR2xqZEdsdVoxSjFia2xrT25admFXUWdNSDBwTEh0dmRYUndkWFE2WUdCOU8zUm9jbTkzSUZNdWNtVmhjMjl1ZldnOWJpNTJZV3gxWlM1emRHRjBaU3hETG14aGMzUlRaWE56YVc5dVUzUmhkR1U5YUN4RExtTmhiR3hsY2oxb1lYTkVaV3hsWjJGMFpXUkRZV3hzWlhKRGIyNTBaWGgwS0dNdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRcFAyRjNZV2wwSUhKbGMyOXNkbVZKYm1sMGFXRnNWSFZ5YmtOaGJHeGxjbE4wWlhBb2UzTmxjbWxoYkdsNlpXUkRiMjUwWlhoME9tTXVjMlZ5YVdGc2FYcGxaRU52Ym5SbGVIUjlLVHAyYjJsa0lEQXNReTVqWVd4c1pYSlNaWE52YkhabFpEMGhNQ3huUFdGM1lXbDBJSEoxYmtSeWFYWmxja3h2YjNBb2UyTmhjR0ZpYVd4cGRHbGxjenA1TEdOdmJXMWhibVJKYm1KdmVEcHNMR1J5YVhabGNsZHlhWFJoWW14bE9uZ3NhVzVwZEdsaGJFbHVjSFYwT250a1pXeHBkbVZ5ZVUxbGRHRmtZWFJoT21NdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhSYllHVjJaUzVqYUdGdWJtVnNSR1ZzYVhabGNubGdYVDA5UFhadmFXUWdNRDkyYjJsa0lEQTZXM3N1TGk1akxuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMFcyQmxkbVV1WTJoaGJtNWxiRVJsYkdsMlpYSjVZRjBzY0dGNWJHOWhaRWx1WkdWNE9qQjlYU3hyYVc1a09tQmtaV3hwZG1WeVlDeHdZWGxzYjJGa2N6cGJZWFIwWVdOb1EyeHBaVzUwUTI5dWRHVjRkQ2g3YldWemMyRm5aVHBqTG1sdWNIVjBMbTFsYzNOaFoyVXNZMjl1ZEdWNGREcGpMbWx1Y0hWMExtTnZiblJsZUhRc2IzVjBjSFYwVTJOb1pXMWhPbU11YVc1d2RYUXViM1YwY0hWMFUyTm9aVzFoZlN4eVpXRmtRMnhwWlc1MFEyOXVkR1Y0ZENoakxtbHVjSFYwS1NsZExISmxjWFZsYzNSSlpEcHlaV0ZrUTJoaGJtNWxiRkpsY1hWbGMzUkpaQ2hqTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwS1gwc1kzSmhjMmhEYkdWaGJuVndVM1JoZEdVNlF5eHRiMlJsT25Zc2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNll5NXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDeHpaWE56YVc5dVUzUmhkR1U2YUN4elpYTnphVzl1VkdsdFpXOTFkRVJsWVdSc2FXNWxPbU11YzJWemMybHZibFJwYldWdmRYUk5jejA5UFNFeFAzWnZhV1FnTURwdVpYY2dSR0YwWlNobUxtZGxkRlJwYldVb0tTc29ZeTV6WlhOemFXOXVWR2x0Wlc5MWRFMXpQejlFUlVaQlZVeFVYMU5GVTFOSlQwNWZWRWxOUlU5VlZGOU5VeWtwTEhOMFlXSnNaVU52YlcxaGJtUlViMnRsYmpwMWZTbDlabWx1WVd4c2VYdGhkMkZwZENCc0xtUnBjM0J2YzJVb0tYMXlaWFIxY200Z1p5NXJhVzVrUFQwOVlISmxjM1ZzZEdBL1p5NXlaWE4xYkhRNllYZGhhWFFnWm1sdVlXeHBlbVZGZUhCcGNtVmtVMlZ6YzJsdmJpaDdZMkZzYkdWeU9rTXVZMkZzYkdWeUxHUnlhWFpsY2xkeWFYUmhZbXhsT25nc2JXOWtaVHAyTEhObGNtbGhiR2w2WldSRGIyNTBaWGgwT21jdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPbWN1YzJWemMybHZibE4wWVhSbExIUmxjbTFwYm1Gc1UzUmhkR1U2UTMwcGZXTmhkR05vS0dVcGUyeGxkQ0IwUFVNdWRHVnliV2x1WVd4RmJXbDBkR1ZrTzNSb2NtOTNJVU11ZEdWeWJXbHVZV3hGYldsMGRHVmtKaVpETG14aGMzUlRaWE56YVc5dVUzUmhkR1VoUFQxMmIybGtJREFtSm1GM1lXbDBJSFJsY20xcGJtRjBaVU5vYVd4a1UyVnpjMmx2Ym5OVGRHVndLSHR6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHBETG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEhObGMzTnBiMjVUZEdGMFpUcERMbXhoYzNSVFpYTnphVzl1VTNSaGRHVjlLU3hETG5SbGNtMXBibUZzUlcxcGRIUmxaSHg4UFNoaGQyRnBkQ0JsYldsMFZHVnliV2x1WVd4VFpYTnphVzl1Um1GcGJIVnlaVk4wWlhBb2UyVnljbTl5T201dmNtMWhiR2w2WlZObGNtbGhiR2w2WVdKc1pVVnljbTl5S0dVcExIQmhjbVZ1ZEZkeWFYUmhZbXhsT25nc2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNlF5NXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDeDBkWEp1U1dRNlF5NTBkWEp1U1dS",
	"OUtTd2hNQ2tzZEh4OEtIWTlQVDFnZEdGemEyQS9LR0YzWVdsMElHWnBjbVZUWlhOemFXOXVRMkZzYkdKaFkydFRkR1Z3S0h0bGNuSnZjanB1YjNKdFlXeHBlbVZUWlhKcFlXeHBlbUZpYkdWRmNuSnZjaWhsS1N4elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZERwRExuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMExITjBZWFIxY3pwZ1ptRnBiR1ZrWUgwcExHRjNZV2wwSUc1dmRHbG1lVVJsYkdWbllYUmxaRkJoY21WdWRGTjBaWEFvZTNKbGMzVnNkRHBqY21WaGRHVkVaV3hsWjJGMFpXUlRkV0poWjJWdWRFVnljbTl5VW1WemRXeDBLRU11YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFzWlNrc2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNlF5NXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRIMHBLVG9vUXk1allXeHNaWEloUFQxMmIybGtJREI4ZkNGRExtTmhiR3hsY2xKbGMyOXNkbVZrS1NZbVlYZGhhWFFnYm05MGFXWjVWSFZ5YmtOaGJHeGxjbE4wWlhBb2UyTmhiR3hsY2pwaGQyRnBkQ0J5WlhOdmJIWmxRMkZzYkdWeVJtOXlRM0poYzJnb1F5eERMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBLU3hzYVdabFkzbGpiR1U2WUhSbGNtMXBibUZzWUN4elpYTnphVzl1U1dRNlpDeHpaWFIwYkdWa09udHBjMFZ5Y205eU9pRXdMRzkxZEhCMWREcGxmWDBwS1N4amNtVmhkR1ZUWVdabFQzVjBaWEpYYjNKclpteHZkMFZ5Y205eUtDbDlmV1oxYm1OMGFXOXVJR2hoYzBSbGJHVm5ZWFJsWkVOaGJHeGxja052Ym5SbGVIUW9aU2w3YVdZb1pWdGdaWFpsTG5ObGMzTnBiMjVEWVd4c1ltRmphMkJkSVQwOWRtOXBaQ0F3S1hKbGRIVnliaUV3TzJ4bGRDQjBQV1ZiWUdWMlpTNWphR0Z1Ym1Wc1lGMDdjbVYwZFhKdUlIUjVjR1Z2WmlCMFBUMWdiMkpxWldOMFlDWW1JU0YwSmlaU1pXWnNaV04wTG1kbGRDaDBMR0JyYVc1a1lDazlQVDFnYzNWaVlXZGxiblJnZldGemVXNWpJR1oxYm1OMGFXOXVJSEpsYzI5c2RtVkRZV3hzWlhKR2IzSkRjbUZ6YUNobExIUXBlMmxtS0dVdVkyRnNiR1Z5VW1WemIyeDJaV1FwY21WMGRYSnVJR1V1WTJGc2JHVnlPM1J5ZVh0eVpYUjFjbTRnWVhkaGFYUWdjbVZ6YjJ4MlpVbHVhWFJwWVd4VWRYSnVRMkZzYkdWeVUzUmxjQ2g3YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2ZEgwcGZXTmhkR05vZTNKbGRIVnlibjE5Wm5WdVkzUnBiMjRnWTNKbFlYUmxVMkZtWlU5MWRHVnlWMjl5YTJac2IzZEZjbkp2Y2lncGUyeGxkQ0JsUFVWeWNtOXlLR0JCWjJWdWRDQjNiM0pyWm14dmR5Qm1ZV2xzWldRdUlFbHVjM0JsWTNRZ2RHaGxJSEJ5YVhaaGRHVWdjMlZ6YzJsdmJpQjBjbUZqWlNCbWIzSWdaR1YwWVdsc2N5NWdLVHR5WlhSMWNtNGdaUzV1WVcxbFBXQkZkbVZYYjNKclpteHZkMFpoYVd4MWNtVmdMR1Y5WVhONWJtTWdablZ1WTNScGIyNGdjblZ1UkhKcGRtVnlURzl2Y0NobEtYdHNaWFFnZEQxbExtTnZiVzFoYm1SSmJtSnZlQ3h1UFc1bGR5Qk5ZWEFzYm1WNGRGQmhjbXRsWkVGamRHbDJhWFI1UFdGemVXNWpJSEk5UG50c1pYUWdZejF1WlhjZ1UyVjBLSEl1Wlhod1pXTjBaV1JCZEhSbGJYQjBTV1J6S1R0bWIzSW9iR1YwSUdVZ2IyWWdiaTVyWlhsektDa3BZeTVvWVhNb1pTbDhmRzR1WkdWc1pYUmxLR1VwTzJadmNpZzdPeWw3YVdZb1l5NXphWHBsUGpBbUpsc3VMaTVqWFM1bGRtVnllU2hsUFQ1dUxtaGhjeWhsS1NrcGUyeGxkQ0JsUFZzdUxpNWpYUzV0WVhBb1pUMCtiaTVuWlhRb1pTa3BPM0psZEhWeWJpQnVMbU5zWldGeUtDa3NlMnRwYm1RNllHRjFkR2h2Y21sNllYUnBiMjR0Y21WemRXMWxZQ3h3WVhsc2IyRmtjenBsZlgxc1pYUWdjajFoZDJGcGRDQnVaWGgwVkhWeWJrUmxiR2wyWlhKNUtIdGhkMkZwZEVGMWRHaHZjbWw2WVhScGIyNURZV3hzWW1GamEzTTZZeTV6YVhwbFBqQXNZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpPbWtzWW5WbVptVnlaV1JUWlhOemFXOXVRMjl1ZEhKdmJITTZZU3hqWVc1alpXeHNaV1JVWVhOclNXUnpPbThzWTI5dGJXRnVaRWx1WW05NE9uUXNaR1ZtWlhKRVpXeHBkbVZ5YVdWek9tVXViVzlrWlQwOVBXQjBZWE5yWUNZbVl5NXphWHBsUGpBc1pISnBkbVZ5VjNKcGRHRmliR1U2WlM1a2NtbDJaWEpYY21sMFlXSnNaU3h6WldWdVZHRnphMFJsYkdsMlpYSnBaWE02Y3l4emRHRjBaVU4xY25OdmNqcHNmU2s3YVdZb2NpNXJhVzVrSVQwOVlHRjFkR2h2Y21sNllYUnBiMjVnS1hKbGRIVnliaUJ5TzJadmNpaHNaWFFnWlNCdlppQnlMbkJoZVd4dllXUnpLWHRzWlhRZ2REMWxMbUYxZEdodmNtbDZZWFJwYjI1RFlXeHNZbUZqYXp0MGVYQmxiMllnZEQ4dVlYUjBaVzF3ZEVsa1BUMWdjM1J5YVc1bllDWW1ZeTVvWVhNb2RDNWhkSFJsYlhCMFNXUXBKaVloYmk1b1lYTW9kQzVoZEhSbGJYQjBTV1FwSmladUxuTmxkQ2gwTG1GMGRHVnRjSFJKWkN4bEtYMXBaaWh5TG1Oc2IzTmxaQ2w3YkdWMElHVTlXeTR1TG00dWRtRnNkV1Z6S0NsZE8zSmxkSFZ5YmlCdUxtTnNaV0Z5S0Nrc2UydHBibVE2WUdGMWRHaHZjbWw2WVhScGIyNHRjbVZ6ZFcxbFlDeHdZWGxzYjJGa2N6cGxmWDE5ZlN4eVBUQXNibVY0ZEZSMWNtNURiMjUwY205c1ZHOXJaVzQ5S0NrOVBtQWtlMlV1YzJWemMybHZibE4wWVhSbExuTmxjM05wYjI1SlpIMDZkSFZ5YmkxamIyNTBjbTlzT2lSN1UzUnlhVzVuS0hJckt5bDlZQ3hwUFZ0ZExHRTlXMTBzYnoxdVpYY2dVMlYwTEhNOWJtVjNJRk5sZEN4c1BXNWxkeUJUWlhOemFXOXVVM1JoZEdWRGRYSnpiM0lvZTNObGNtbGhiR2w2WldSRGIyNTBaWGgwT21VdWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPbVV1YzJWemMybHZibE4wWVhSbGZTa3NkVDFsTG5ObGMzTnBiMjVVYVcxbGIzVjBSR1ZoWkd4cGJtVTlQVDEyYjJsa0lEQS9kbTlwWkNBd09tTnlaV0YwWlZObGMzTnBiMjVVYVcxbGIzVjBRMjl1ZEhKdmJDaDdaR1ZoWkd4cGJtVTZaUzV6WlhOemFXOXVWR2x0Wlc5MWRFUmxZV1JzYVc1bExIUnZhMlZ1T21VdWMzUmhZbXhsUTI5dGJXRnVaRlJ2YTJWdWZTa3NiU3h5ZFc1VWRYSnVQV0Z6ZVc1aklHNDlQbnRzWlhRZ1l6MXNMbk5sYzNOcGIyNVRkR0YwWlN4MVBXVXVZM0poYzJoRGJHVmhiblZ3VTNSaGRHVXVZMkZzYkdWeU8zVS9MblJoYzJ0SlpDRTlQWFp2YVdRZ01DWW1jeTVoWkdRb2RTNTBZWE5yU1dRcE8yeGxkQ0JrUFhVOVBUMTJiMmxrSURBL2JDNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREcGhkMkZwZENCaWFXNWtWSFZ5YmtOaGJHeGxja052Ym5SbGVIUlRkR1Z3S0h0allXeHNaWEk2ZFN4elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZERwc0xuTmxjbWxoYkdsNlpXUkRiMjUwWlhoMGZTazdaUzVqY21GemFFTnNaV0Z1ZFhCVGRHRjBaUzUwZFhKdVNXUTlZSFIxY201ZkpIdFRkSEpwYm1jb2NpbDlZRHRzWlhRZ2NEMWhkMkZwZENCa2FYTndZWFJqYUVGdVpFRjNZV2wwVkhWeWJpaDdZblZtWm1WeVpXUkVaV3hwZG1WeWFXVnpPbWtzWW5WbVptVnlaV1JUWlhOemFXOXVRMjl1ZEhKdmJITTZZU3hqWVc1alpXeHNaV1JVWVhOclNXUnpPbThzWTJGd1lXSnBiR2wwYVdWek9tVXVZMkZ3WVdKcGJHbDBhV1Z6TEdOdmJXMWhibVJKYm1KdmVEcDBMR052Ym5SeWIyeFViMnRsYmpwdVpYaDBWSFZ5YmtOdmJuUnliMnhVYjJ0bGJpZ3BMR1JsYkdsMlpYSjVPbTRzYlc5a1pUcGxMbTF2WkdVc2NHRnlaVzUwVjNKcGRHRmliR1U2WlM1a2NtbDJaWEpYY21sMFlXSnNaU3h6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRHBrTEhObFpXNVVZWE5yUkdWc2FYWmxjbWxsY3pwekxITmxjM05wYjI1VGRHRjBaVHBzTG5ObGMzTnBiMjVUZEdGMFpTeHpkR0YwWlVOMWNuTnZjanBzZlNrN1lYZGhhWFFnYlQ4dUtDa3NiVDF3TG1ScGMzQnZjMlU3YkdWMElHZzliQzV6WlhOemFXOXVVM1JoZEdVOVBUMWpQM0F1WVdOMGFXOXVPbkpsWW1GelpWUmhjMnRCWjJWdWRFaGhibVJzWlUxMWRHRjBhVzl1Y3lod0xtRmpkR2x2Yml4c0xuTmxjM05wYjI1VGRHRjBaU3hqS1R0eVpYUjFjbTRnYkM1aFpHOXdkRk4wWVhSbEtHZ3BMR1V1WTNKaGMyaERiR1ZoYm5Wd1UzUmhkR1V1YkdGemRGTmxjM05wYjI1VGRHRjBaVDFzTG5ObGMzTnBiMjVUZEdGMFpTeGxMbU55WVhOb1EyeGxZVzUxY0ZOMFlYUmxMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBQV3d1YzJWeWFXRnNhWHBsWkVOdmJuUmxlSFFzYUgwN2RISjVlMkYzWVdsMElIVS9Mbk4wWVhKMEtDazdiR1YwSUc0OVlYZGhhWFFnY25WdVZIVnliaWhsTG1sdWFYUnBZV3hKYm5CMWRDazdabTl5S0RzN0tYdHBaaWh1TG10cGJtUTlQVDFnWkc5dVpXQXBjbVYwZFhKdWUydHBibVE2WUhKbGMzVnNkR0FzY21WemRXeDBPbUYzWVdsMElHWnBibUZzYVhwbFJHOXVaU2g3WVdOMGFXOXVPbTRzWTJGc2JHVnlPbVV1WTNKaGMyaERiR1ZoYm5Wd1UzUmhkR1V1WTJGc2JHVnlMRzF2WkdVNlpTNXRiMlJsTEhSbGNtMXBibUZzVTNSaGRHVTZaUzVqY21GemFFTnNaV0Z1ZFhCVGRHRjBaWDBwZlR0cFppaHVMbXRwYm1RaFBUMWdjR0Z5YTJBcGRHaHliM2NnUlhKeWIzSW9ZRVJ5YVhabGNpQnlaV05sYVhabFpDQjFibVY0Y0dWamRHVmtJSFIxY200Z1lXTjBhVzl1SUZ3aUpIdHVMbXRwYm1SOVhDSXVZQ2s3YVdZb2JpNWpZVzVqWld4c1pXUTlQVDBoTUNsN2JHVjBJSFE5WVhkaGFYUWdjMlYwZEd4bFEyRnVZMlZzYkdWa1ZIVnlibE4wWlhBb2UzQmhjbVZ1ZEZkeWFYUmhZbXhsT21VdVpISnBkbVZ5VjNKcGRHRmliR1VzYzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2YkM1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZiQzV6WlhOemFXOXVVM1JoZEdWOUtUdHNMbUZrYjNCMFUzUmhkR1VvZENrc1pTNWpjbUZ6YUVOc1pXRnVkWEJUZEdGMFpTNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGREMXNMbk5sY21saGJHbDZaV1JEYjI1MFpYaDBPMnhsZENCdVBYdGpZV3hzWlhJNlpTNWpjbUZ6YUVOc1pXRnVkWEJUZEdGMFpTNWpZV3hzWlhJc2MyVnpjMmx2Ymtsa09td3VjMlZ6YzJsdmJsTjBZWFJsTG5ObGMzTnBiMjVKWkgwN1lYZGhhWFFnYm05MGFXWjVRMkZ1WTJWc2JHVmtWR0Z6YTBOaGJHeGxjbE4wWlhBb2RDNTFjMkZuWlQwOVBYWnZhV1FnTUQ5dU9uc3VMaTV1TEhWellXZGxPblF1ZFhOaFoyVjlLU3hsTG1OeVlYTm9RMnhsWVc1MWNGTjBZWFJsTG14aGMzUlRaWE56YVc5dVUzUmhkR1U5YkM1elpYTnphVzl1VTNSaGRHVjliQzV6WlhOemFXOXVVM1JoZEdVdVkyOXVkR2x1ZFdGMGFXOXVWRzlyWlc0bUptRjNZV2wwSUhRdWNtVnJaWGxEYjI1MGFXNTFZWFJwYjI0b2JDNXpaWE56YVc5dVUzUmhkR1V1WTI5dWRHbHVkV0YwYVc5dVZHOXJaVzRwTzJ4bGRDQnlQVzR1YzJWMGRHeGxaRHR1TG1OaGJtTmxiR3hsWkNFOVBTRXdKaVp5SVQwOWRtOXBaQ0F3UHlobExtTnlZWE5vUTJ4bFlXNTFjRk4wWVhSbExtTmhiR3hsY2lFOVBYWnZhV1FnTUNZbVlYZGhhWFFnYm05MGFXWjVWSFZ5YmtOaGJHeGxjbE4wWlhBb2UyTmhiR3hsY2pwbExtTnlZWE5vUTJ4bFlXNTFjRk4wWVhSbExtTmhiR3hsY2l4c2FXWmxZM2xqYkdVNllIQmhjbXRsWkdBc2MyVnpjMmx2Ymtsa09td3VjMlZ6YzJsdmJsTjBZWFJsTG5ObGMzTnBiMjVKWkN4elpYUjBiR1ZrT25KOUtTeGxMbU55WVhOb1EyeGxZVzUxY0ZOMFlYUmxMbU5oYkd4bGNqMTJiMmxrSURBcE9tNHVZMkZ1WTJWc2JHVmtQVDA5SVRBbUppaGxMbU55WVhOb1EyeGxZVzUxY0ZOMFlYUmxMbU5oYkd4bGNqMTJiMmxrSURBcE8yeGxkQ0JwUFdGM1lXbDBJRzVsZUhSUVlYSnJaV1JCWTNScGRtbDBlU2g3Wlhod1pXTjBaV1JCZEhSbGJYQjBTV1J6T200dVlYVjBhRzl5YVhwaGRHbHZia0YwZEdWdGNIUkpaSE0vUDF0ZGZTazdhV1lvWlM1amNtRnphRU5zWldGdWRYQlRkR0YwWlM1c1lYTjBVMlZ6YzJsdmJsTjBZWFJsUFd3dWMyVnpjMmx2YmxOMFlYUmxMR2t1YTJsdVpEMDlQV0JoZFhSb2IzSnBlbUYwYVc5dUxYSmxjM1Z0WldBcGUyNDlZWGRoYVhRZ2NuVnVWSFZ5YmloN2EybHVaRHBnWkdWc2FYWmxjbUFzY0dGNWJHOWhaSE02YVM1d1lYbHNiMkZrYzMwcE8yTnZiblJwYm5WbGZXbG1LR2t1YTJsdVpEMDlQV0JsZUhCcGNtVmtZQ2x5WlhSMWNtNTdhMmx1WkRwZ1pYaHdhWEpsWkdBc2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNmJDNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDeHpaWE56YVc5dVUzUmhkR1U2YkM1elpYTnphVzl1VTNSaGRHVjlPMmxtS0drdWEybHVaRDA5UFdCeVpYTmxkR0FwY21WMGRYSnVlMnRwYm1RNllISmxjM1ZzZEdBc2NtVnpkV3gwT21GM1lXbDBJR1pwYm1Gc2FYcGxSWGh3YVhKbFpGTmxjM05wYjI0b2UyTmhiR3hsY2pwbExtTnlZWE5vUTJ4bFlXNTFjRk4wWVhSbExtTmhiR3hsY2l4a2NtbDJaWEpYY21sMFlXSnNaVHBsTG1SeWFYWmxjbGR5YVhSaFlteGxMRzF2WkdVNlpTNXRiMlJsTEhObGNtbGhiR2w2WldSRGIyNTBaWGgwT213dWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPbXd1YzJWemMybHZibE4wWVhSbExIUmxjbTFwYm1Gc1UzUmhkR1U2WlM1amNtRnphRU5zWldGdWRYQlRkR0YwWlgwcGZUdHBaaWhwTG10cGJtUTlQVDFnWTJ4bFlYSmdmSHhwTG10cGJtUTlQVDFnWTI5dGNHRmpkR0FwZTI0OVlYZGhhWFFnY25WdVZIVnliaWg3YTJsdVpEcHBMbXRwYm1SOUtUdGpiMjUwYVc1MVpYMXBaaWhwTG10cGJtUTlQVDFnWTJ4dmMyVmtZQ2x5WlhSMWNtNTdhMmx1WkRwZ2NtVnpkV3gwWUN4eVpYTjFiSFE2WVhkaGFYUWdabWx1WVd4cGVtVkZlSEJwY21Wa1UyVnpjMmx2YmloN1kyRnNiR1Z5T21VdVkzSmhjMmhEYkdWaGJuVndVM1JoZEdVdVkyRnNiR1Z5TEdSeWFYWmxjbGR5YVhSaFlteGxPbVV1WkhKcGRtVnlWM0pwZEdGaWJHVXNiVzlrWlRwbExtMXZaR1VzYzJWeWFXRnNhWHBsWkVOdmJuUmxlSFE2YkM1elpYSnBZV3hwZW1Wa1EyOXVkR1Y0ZEN4elpYTnphVzl1VTNSaGRHVTZiQzV6WlhOemFXOXVVM1JoZEdVc2RHVnliV2x1WVd4VGRHRjBaVHBsTG1OeVlYTm9RMnhsWVc1MWNGTjBZWFJsZlNsOU8ybG1LR2t1YTJsdVpEMDlQV0JqWVc1alpXd3RkSFZ5Ym1BcGUyRjNZV2wwSUdOaGJtTmxiRVJsYzJObGJtUmhiblJVZFhKdWMxTjBaWEFvZTNObGNtbGhiR2w2WldSRGIyNTBaWGgwT213dWMyVnlhV0ZzYVhwbFpFTnZiblJsZUhRc2MyVnpjMmx2YmxOMFlYUmxPbXd1YzJWemMybHZibE4wWVhSbGZTazdiR1YwSUhROVlYZGhhWFFnYzJWMGRHeGxRMkZ1WTJWc2JHVmtWSFZ5YmxOMFpYQW9lM0JoY21WdWRGZHlhWFJoWW14bE9tVXVaSEpwZG1WeVYzSnBkR0ZpYkdVc2MyVnlhV0ZzYVhwbFpFTnZiblJsZUhRNmJDNXpaWEpwWVd4cGVtVmtRMjl1ZEdWNGRDeHpaWE56YVc5dVUzUmhkR1U2YkM1elpYTnphVzl1VTNSaGRHVjlLVHRzTG1Ga2IzQjBVM1JoZEdVb2RDa3NaUzVqY21GemFFTnNaV0Z1ZFhCVGRHRjBaUzV6WlhKcFlXeHBlbVZrUTI5dWRHVjRkRDFzTG5ObGNtbGhiR2w2WldSRGIyNTBaWGgwTEc0OWV5NHVMbTRzYzJWMGRHeGxaRHAyYjJsa0lEQjlMR1V1WTNKaGMyaERiR1ZoYm5Wd1UzUmhkR1V1WTJGc2JHVnlQWFp2YVdRZ01DeGxMbU55WVhOb1EyeGxZVzUxY0ZOMFlYUmxMbXhoYzNSVFpYTnphVzl1VTNSaGRHVTliQzV6WlhOemFXOXVVM1JoZEdVN1kyOXVkR2x1ZFdWOWFTNWtaV3hwZG1WeWVTNWpZV3hzWlhJaFBUMTJiMmxrSURBbUppaGxMbU55WVhOb1EyeGxZVzUxY0ZOMFlYUmxMbU5oYkd4bGNqMXBMbVJsYkdsMlpYSjVMbU5oYkd4bGNpa3NiajFoZDJGcGRDQnlkVzVVZFhKdUtHa3VaR1ZzYVhabGNua3BmWDFtYVc1aGJHeDVlMkYzWVdsMElHMC9MaWdwTEdGM1lXbDBJSFUvTG1ScGMzQnZjMlVvS1gxOWQyOXlhMlpzYjNkRmJuUnllUzUzYjNKclpteHZkMGxrUFdCM2IzSnJabXh2ZHk4dlpYWmxMeTkzYjNKclpteHZkMFZ1ZEhKNVlEdGxlSEJ2Y25SN2QyOXlhMlpzYjNkRmJuUnllWDA3WEc1M2IzSnJabXh2ZDBWdWRISjVMbmR2Y210bWJHOTNTV1FnUFNCY0luZHZjbXRtYkc5M0x5OWxkbVV2TDNkdmNtdG1iRzkzUlc1MGNubGNJanRjYm1kc2IySmhiRlJvYVhNdVgxOXdjbWwyWVhSbFgzZHZjbXRtYkc5M2N5NXpaWFFvWENKM2IzSnJabXh2ZHk4dlpYWmxMeTkzYjNKclpteHZkMFZ1ZEhKNVhDSXNJSGR2Y210bWJHOTNSVzUwY25rcE8xeHVJaXdpYVcxd2IzSjBlMk55WldGMFpVaHZiMnQ5Wm5KdmJWd2lJMk52YlhCcGJHVmtMMEIzYjNKclpteHZkeTlqYjNKbEwybHVaR1Y0TG1welhDSTdhVzF3YjNKMGUyTnNZV2x0U0c5dmEwOTNibVZ5YzJocGNDeGthWE53YjNObFNHOXZhMzFtY205dFhDSWpaWGhsWTNWMGFXOXVMMmh2YjJzdGIzZHVaWEp6YUdsd0xtcHpYQ0k3YVcxd2IzSjBlM0psWVdSWGIzSnJabXh2ZDFSdmIyeFNkVzVCWkcxcGMzTnBiMjRzY21WaFpGZHZjbXRtYkc5M1ZHOXZiRkoxYms5M2JtVnlMSEpsWVdSWGIzSnJabXh2ZDFSdmIyeFNkVzVTWldaOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MGIyOXNjeTkzYjNKclpteHZkeTloYzJzdWFuTmNJanRwYlhCdmNuUjdjbVZ6ZFcxbFNHOXZhMU4wWlhCOVpuSnZiVndpSTJWNFpXTjFkR2x2Ymk5MGIyOXNjeTkzYjNKclpteHZkeTl5WlhOMWJXVXRhRzl2YXkxemRHVndMbXB6WENJN1kyOXVjM1FnUVVkRlRsUmZTVTVXVDBOQlZFbFBUbDlKUkZNOVUzbHRZbTlzTG1admNpaGdaWFpsTG5kdmNtdG1iRzkzTFhSdmIyd3RjblZ1TG1GblpXNTBMV2x1ZG05allYUnBiMjR0YVdSellDazdZWE41Ym1NZ1puVnVZM1JwYjI0Z1lXZGxiblFvWlN4MEtYdHlaWFIxY200Z2RtRnNhV1JoZEdWQloyVnVkRWx1Y0hWMEtIUXNJVEFwTEdGM1lXbDBJR2x1ZG05clpVRm5aVzUwS0dVc2UyRm5aVzUwU1dRNmRDNWhaMlZ1ZEVsa0xHMWxjM05oWjJVNmRDNXRaWE56WVdkbExHOTFkSEIxZEZOamFHVnRZVHAwTG05MWRIQjFkRk5qYUdWdFlTeDBZWEpuWlhRNmRDNTBZWEpuWlhSOUxIdHBiblp2WTJGMGFXOXVTV1E2WUNSN1pTNWpZV3hzU1dSOU9pUjdkQzVyWlhsOVlIMHBmV0Z6ZVc1aklHWjFibU4wYVc5dUlHbHVkbTlyWlVGblpXNTBLR2tzWVN4dktYdDJZV3hwWkdGMFpVRm5aVzUwU1c1d2RYUW9ZU3doTVNrN2JHVjBJSE05Y21WaFpGZHZjbXRtYkc5M1ZHOXZiRkoxYmxKbFppaHBLU3hqUFhKbFlXUlhiM0pyWm14dmQxUnZiMnhTZFc1UGQyNWxjaWhwS1N4c1BYSmxZV1JYYjNKclpteHZkMVJ2YjJ4U2RXNUJaRzFwYzNOcGIyNG9hU2s3WTJ4aGFXMUpiblp2WTJGMGFXOXVTV1FvYVN4dkxtbHVkbTlqWVhScGIyNUpaQ2s3YkdWMElIVTlZM0psWVhSbFNHOXZheWdwTEdROUlURTdkSEo1ZTJsbUtHRjNZV2wwSUdOc1lXbHRTRzl2YTA5M2JtVnljMmhwY0NoMUtTeGtQU0V3TEd3aFBUMTJiMmxrSURBcGUyeGxkQ0JsUFdGM1lXbDBJR3c3YVdZb1pTNXpkR0YwZFhNOVBUMWdjbVZxWldOMFpXUmdLWFJvY205M0lFVnljbTl5S0dVdWNtVmhjMjl1S1gxaGQyRnBkQ0J5WlhOMWJXVkliMjlyVTNSbGNDaGpMbkpsY1hWbGMzUXNlMlp5YjIwNmN5eHlaWEJzZVZSdk9uVXVkRzlyWlc0c2NtVnhkV1Z6ZERwN2FXNXdkWFE2WVN4cGJuWnZZMkYwYVc5dVNXUTZieTVwYm5adlkyRjBhVzl1U1dRc2EybHVaRHBnWVdkbGJuUXRhVzUyYjJ0bFlIMTlLVHRzWlhRZ1pUMTFXMU41YldKdmJDNWhjM2x1WTBsMFpYSmhkRzl5WFNncE8yWnZjaWc3T3lsN2JHVjBJSFE5WVhkaGFYUWdibVY0ZEVGblpXNTBVbVZ3Ykhrb1pTeHBMbUZpYjNKMFUybG5ibUZzS1R0cFppaDBMbVJ2Ym1VcFluSmxZV3M3YkdWMElHNDlkQzUyWVd4MVpUdHBaaWh1TG10cGJtUTlQVDFnY25WdWRHbHRaUzFoWTNScGIyNHRjbVZ6ZFd4MFlDbDdiR1YwSUdVOWJpNXlaWE4xYkhSekxtWnBibVFvWlQwK1pTNXJhVzVrUFQwOVlITjFZbUZuWlc1MExYSmxjM1ZzZEdBbUptVXVZMkZzYkVsa1BUMDlieTVwYm5adlkyRjBhVzl1U1dRcE8ybG1LR1VoUFQxMmIybGtJREFwZTJsbUtHVXViM0pwWjJsdVBUMDlZR05vYVd4a1lDWW1ZWGRoYVhRZ2NtVnpkVzFsU0c5dmExTjBaWEFvWXk1eVpYRjFaWE4wTEh0bWNtOXRPbk1zY21Wd2JIbFVienAxTG5SdmEyVnVMSEpsY1hWbGMzUTZlMnRwYm1RNllHRm5aVzUwTFhObGRIUnNaV1JnTEhKbGMzVnNkRHBsZlgwcExHOHVjbVYwZFhKdVVtVnpkV3gwUFQwOUlUQW1Kbk11WlhobFkzVjBhVzl1UFQwOVlHSnNiMk5yYVc1bllDbHlaWFIxY200Z1pUdHBaaWhsTG1selJYSnliM0k5UFQwaE1DbDBhSEp2ZHlCbExtOTFkSEIxZER0eVpYUjFjbTRnWlM1dmRYUndkWFI5WTI5dWRHbHVkV1Y5YVdZb2JpNXJhVzVrUFQwOVlITjFZbUZuWlc1MExXbHVjSFYwTFhKbGNYVmxjM1JnS1h0aGQyRnBkQ0J5WlhOMWJXVkliMjlyVTNSbGNDaGpMbkpsY1hWbGMzUXNlMlp5YjIwNmN5eHlaWEJzZVZSdk9tNHVZMmhwYkdSRGIyNTBhVzUxWVhScGIyNVViMnRsYml4eVpYRjFaWE4wT250cmFXNWtPbUJwYm5CMWRDMWlZWFJqYUdBc2NtVnhkV1Z6ZEhNNmJpNWxkbVZ1ZEM1eVpYRjFaWE4wYzMwc2NtVnhkV1Z6ZEVOdmIzSmthVzVoZEdWek9udHpaWEYxWlc1alpUcHVMbVYyWlc1MExuTmxjWFZsYm1ObExITjBaWEJKYm1SbGVEcHVMbVYyWlc1MExuTjBaWEJKYm1SbGVDeDBkWEp1U1dRNmJpNWxkbVZ1ZEM1MGRYSnVTV1I5ZlNrN1kyOXVkR2x1ZFdWOWFXWW9iaTVyYVc1a1BUMDlZSFJoYzJzdGRYQmtZWFJsWUNsN1lYZGhhWFFnY21WemRXMWxTRzl2YTFOMFpYQW9ZeTV5WlhCdmNuUXNlMlp5YjIwNmN5eDFjR1JoZEdVNmJpNXRaWE56WVdkbGZTazdZMjl1ZEdsdWRXVjlZWGRoYVhRZ2NtVnpkVzFsU0c5dmExTjBaWEFvWXk1eVpYRjFaWE4wTEh0bWNtOXRPbk1zY21Wd2JIbFVienAxTG5SdmEyVnVMSEpsY1hWbGMzUTZlMlYyWlc1ME9tNHNhMmx1WkRwZ1lYVjBhRzl5YVhwaGRHbHZiaTF5WlhGMVpYTjBZSDE5S1gxOVptbHVZV3hzZVh0cFppaGtLWFJ5ZVh0aGQyRnBkQ0JrYVhOd2IzTmxTRzl2YXloMUtYMWpZWFJqYUh0OWZYUm9jbTkzSUVWeWNtOXlLR0JCWjJWdWRDQmNJaVI3WVM1MFlYSm5aWFI5WENJZ1kyeHZjMlZrSUhkcGRHaHZkWFFnWVNCeVpYTjFiSFF1WUNsOVlYTjVibU1nWm5WdVkzUnBiMjRnYm1WNGRFRm5aVzUwVW1Wd2JIa29aU3gwS1h0cFppaDBQVDA5ZG05cFpDQXdLWEpsZEhWeWJpQmhkMkZwZENCbExtNWxlSFFvS1R0cFppaDBMbUZpYjNKMFpXUXBkR2h5YjNjZ2RDNXlaV0Z6YjI0N2JHVjBJRzRzY2oxdVpYY2dVSEp2YldselpTZ29aU3gwS1QwK2UyNDlkSDBwTEdGaWIzSjBQU2dwUFQ1dVB5NG9kQzV5WldGemIyNHBPM1F1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWhnWVdKdmNuUmdMR0ZpYjNKMExIdHZibU5sT2lFd2ZTazdkSEo1ZTNKbGRIVnliaUJoZDJGcGRDQlFjbTl0YVhObExuSmhZMlVvVzJVdWJtVjRkQ2dwTEhKZEtYMW1hVzVoYkd4NWUzUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWhnWVdKdmNuUmdMR0ZpYjNKMEtYMTlablZ1WTNScGIyNGdkbUZzYVdSaGRHVkJaMlZ1ZEVsdWNIVjBLR1VzZENsN2FXWW9kQ1ltS0hSNWNHVnZaaUJsTG10bGVTRTlZSE4wY21sdVoyQjhmR1V1YTJWNUxuUnlhVzBvS1QwOVBXQmdLU2wwYUhKdmR5QlVlWEJsUlhKeWIzSW9YQ0poWjJWdWRDZ3BJSEpsY1hWcGNtVnpJR0VnYm05dUxXVnRjSFI1SUdCclpYbGdMbHdpS1R0cFppaDBlWEJsYjJZZ1pTNTBZWEpuWlhRaFBXQnpkSEpwYm1kZ2ZIeGxMblJoY21kbGRDNTBjbWx0S0NrOVBUMWdZQ2wwYUhKdmR5QlVlWEJsUlhKeWIzSW9YQ0poWjJWdWRDZ3BJSEpsY1hWcGNtVnpJR0VnYm05dUxXVnRjSFI1SUdCMFlYSm5aWFJnTGx3aUtUdHBaaWgwZVhCbGIyWWdaUzV0WlhOellXZGxJVDFnYzNSeWFXNW5ZSHg4WlM1dFpYTnpZV2RsTG5SeWFXMG9LVDA5UFdCZ0tYUm9jbTkzSUZSNWNHVkZjbkp2Y2loY0ltRm5aVzUwS0NrZ2NtVnhkV2x5WlhNZ1lTQnViMjR0Wlcxd2RIa2dZRzFsYzNOaFoyVmdMbHdpS1gxbWRXNWpkR2x2YmlCamJHRnBiVWx1ZG05allYUnBiMjVKWkNobExIUXBlMnhsZENCdVBXVXNjajF1VzBGSFJVNVVYMGxPVms5RFFWUkpUMDVmU1VSVFhUOC9ibVYzSUZObGREdHBaaWh5TG1oaGN5aDBLU2w3YkdWMElHVTlkQzVzWVhOMFNXNWtaWGhQWmloZ09tQXBMRzQ5WlR3d1AzUTZkQzV6YkdsalpTaGxLekVwTzNSb2NtOTNJRlI1Y0dWRmNuSnZjaWhnWVdkbGJuUW9LU0JwYm5adlkyRjBhVzl1SUd0bGVTQmNJaVI3Ym4xY0lpQjNZWE1nWVd4eVpXRmtlU0IxYzJWa0lHbHVJSFJvYVhNZ2NuVnVPeUJyWlhseklHMTFjM1FnWW1VZ2RXNXBjWFZsSUhCbGNpQnlkVzR1WUNsOWNpNWhaR1FvZENrc2JsdEJSMFZPVkY5SlRsWlBRMEZVU1U5T1gwbEVVMTA5UFQxMmIybGtJREFtSms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVMRUZIUlU1VVgwbE9WazlEUVZSSlQwNWZTVVJUTEh0bGJuVnRaWEpoWW14bE9pRXhMSFpoYkhWbE9uSjlLWDFsZUhCdmNuUjdZV2RsYm5Rc2FXNTJiMnRsUVdkbGJuUXNkbUZzYVdSaGRHVkJaMlZ1ZEVsdWNIVjBmVHNpTENJdktpcGZYMmx1ZEdWeWJtRnNYM2R2Y210bWJHOTNjM3RjSW5kdmNtdG1iRzkzYzF3aU9udGNJbVJwYzNRdmMzSmpMM0oxYm5ScGJXVXZjM1ZpWVdk",
	"bGJuUnpMM2R2Y210bWJHOTNMbXB6WENJNmUxd2ljM1ZpWVdkbGJuUlViMjlzUlhobFkzVjBaVmR2Y210bWJHOTNYQ0k2ZTF3aWQyOXlhMlpzYjNkSlpGd2lPbHdpZDI5eWEyWnNiM2N2TDJWMlpTOHZjM1ZpWVdkbGJuUlViMjlzUlhobFkzVjBaVmR2Y210bWJHOTNYQ0o5ZlgxOUtpODdYRzVwYlhCdmNuUjdhVzUyYjJ0bFFXZGxiblI5Wm5KdmJWd2lJMlY0WldOMWRHbHZiaTkwYjI5c2N5OXpkV0poWjJWdWRDOXBiblp2YTJVdFlXZGxiblF1YW5OY0lqdGhjM2x1WXlCbWRXNWpkR2x2YmlCemRXSmhaMlZ1ZEZSdmIyeEZlR1ZqZFhSbFYyOXlhMlpzYjNjb1pTeDBLWHR5WlhSMWNtNGdZWGRoYVhRZ2FXNTJiMnRsUVdkbGJuUW9kQ3g3TGk0dWRIbHdaVzltSUdVdVlXZGxiblJKWkQwOVlITjBjbWx1WjJBbUptVXVZV2RsYm5SSlpDNTBjbWx0S0NraFBUMWdZRDk3WVdkbGJuUkpaRHBsTG1GblpXNTBTV1I5T250OUxHMWxjM05oWjJVNlpTNXRaWE56WVdkbExHOTFkSEIxZEZOamFHVnRZVHBsTG05MWRIQjFkRk5qYUdWdFlTeDBZWEpuWlhRNmRDNTBiMjlzVG1GdFpYMHNlMmx1ZG05allYUnBiMjVKWkRwMExtTmhiR3hKWkN4eVpYUjFjbTVTWlhOMWJIUTZJVEI5S1gxemRXSmhaMlZ1ZEZSdmIyeEZlR1ZqZFhSbFYyOXlhMlpzYjNjdWQyOXlhMlpzYjNkSlpEMWdkMjl5YTJac2IzY3ZMMlYyWlM4dmMzVmlZV2RsYm5SVWIyOXNSWGhsWTNWMFpWZHZjbXRtYkc5M1lEdGxlSEJ2Y25SN2MzVmlZV2RsYm5SVWIyOXNSWGhsWTNWMFpWZHZjbXRtYkc5M2ZUdGNibk4xWW1GblpXNTBWRzl2YkVWNFpXTjFkR1ZYYjNKclpteHZkeTUzYjNKclpteHZkMGxrSUQwZ1hDSjNiM0pyWm14dmR5OHZaWFpsTHk5emRXSmhaMlZ1ZEZSdmIyeEZlR1ZqZFhSbFYyOXlhMlpzYjNkY0lqdGNibWRzYjJKaGJGUm9hWE11WDE5d2NtbDJZWFJsWDNkdmNtdG1iRzkzY3k1elpYUW9YQ0ozYjNKclpteHZkeTh2WlhabEx5OXpkV0poWjJWdWRGUnZiMnhGZUdWamRYUmxWMjl5YTJac2IzZGNJaXdnYzNWaVlXZGxiblJVYjI5c1JYaGxZM1YwWlZkdmNtdG1iRzkzS1R0Y2JpSmRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJMRTFCUVUwc01FSkJRWGRDTEU5QlFVOHNTVUZCU1N4clFrRkJhMEk3UVVGQlJTeE5RVUZCTEhWQ1FVRnhRaXhQUVVGUExFbEJRVWtzYzBKQlFYTkNPMEZCUVVVc1RVRkJRU3g1UWtGQmRVSXNUMEZCVHl4SlFVRkpMSGRDUVVGM1FqdEJRVUZGTEUxQlFVRXNhVUpCUVdVc1QwRkJUeXhKUVVGSkxHZENRVUZuUWp0QlFVRnZSQ3hOUVVGQkxIRkNRVUZ0UWl4UFFVRlBMRWxCUVVrc2MwSkJRWE5DTzBGQlFVVXNUVUZCUVN4cFFrRkJaVHRCUVVGblRTeFRRVUZUTEZkQlFWY3NSMEZCUlR0RFFVRkRMRWxCUVVrc1NVRkJSU3hsUVVGbE8wTkJRWE5DTEVsQlFVY3NUVUZCU1N4TFFVRkxMRWRCUVVVc1RVRkJUU3hOUVVGTkxEaEVRVUU0UkR0RFFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEhOQ1FVRnhRanREUVVGRExFbEJRVWtzU1VGQlJTeGxRVUZsTzBOQlFYbENMRWxCUVVjc1RVRkJTU3hMUVVGTExFZEJRVVVzVFVGQlRTeE5RVUZOTEN0RlFVRXJSVHREUVVGRkxFOUJRVTg3UVVGQlF6dEJRVUZETEZOQlFWTXNXVUZCV1N4SlFVRkZMRU5CUVVNc1IwRkJSVHREUVVGRExFbEJRVWtzU1VGQlJTeGxRVUZsTzBOQlFYZENMRWxCUVVjc1RVRkJTU3hMUVVGTExFZEJRVVVzVFVGQlRTeE5RVUZOTEN0RVFVRXJSRHREUVVGRkxFbEJRVWtzU1VGQlJTeEZRVUZGTEVWQlFVVXNVMEZCVXp0RFFVRkZMRTlCUVU4c1QwRkJUeXhQUVVGUExGZEJRVmNzWlVGQlpTeFhRVUZWTEVkQlFVVXNjVUpCUVc5Q08wVkJRVU1zVDBGQlRUdEZRVUZGTEZWQlFWTXNRMEZCUXp0RFFVRkRMRVZCUVVNc1EwRkJRenRCUVVGRE8wRkJRVEJNTEZOQlFWTXNZVUZCV1R0RFFVRkRMRTlCUVUwN1JVRkJReXhSUVVGUE8wVkJRVmNzVTBGQlVUdEhRVUZETEUxQlFVMHNUVUZCVFN4dlJVRkJiMFU3UlVGQlF6dERRVUZETzBGQlFVTTdRVUZCUXl4VFFVRlRMRTFCUVUwc1IwRkJSVHREUVVGRExFbEJRVWtzU1VGQlJTeGxRVUZsTzBOQlFXZENMRWxCUVVjc1RVRkJTU3hMUVVGTExFZEJRVVVzVFVGQlRTeE5RVUZOTEhsRVFVRjVSRHREUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETzBGQlFVTTdPenRCUTBGNGJrUXNaVUZCWlN4dFFrRkJiVUlzUjBGQlJUdERRVUZETEVsQlFVazdRMEZCUlN4SlFVRkhPMFZCUVVNc1NVRkJSU3hOUVVGTkxFVkJRVVVzV1VGQldUdERRVUZETEZOQlFVOHNSMEZCUlR0RlFVRkRMRTlCUVU4c1RVRkJUU3huUWtGQlowSXNSMEZCUlN4M1FrRkJkMElzUjBGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXp0RFFVRkRPME5CUVVNc1NVRkJSeXhOUVVGSkxFMUJRVXNzVDBGQlR5eE5RVUZOTEdkQ1FVRm5RaXhIUVVGRkxIZENRVUYzUWl4RlFVRkZMRTlCUVUwc1JVRkJSU3hMUVVGTExFTkJRVU03UVVGQlF6dEJRVUZETEdWQlFXVXNhMEpCUVd0Q0xFZEJRVVU3UTBGQlF5eFBRVUZQTEVWQlFVVXNWVUZCVVN4alFVRlpMRTFCUVUwc1JVRkJSU3hQUVVGUExFdEJRVXNzUTBGQlF6dEJRVUZETzBGQlFVTXNaVUZCWlN4WlFVRlpMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzUlVGQlJUdERRVUZSTEVsQlFVY3NUMEZCVHl4TFFVRkhMRmxCUVZjN1JVRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETzBWQlFVVTdRMEZCVFR0RFFVRkRMRWxCUVVrc1NVRkJSU3hGUVVGRkxFOUJRVTg3UTBGQlV5eFBRVUZQTEV0QlFVY3NZMEZCV1N4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRE8wRkJRVU03UVVGQlF5eGxRVUZsTEdkQ1FVRm5RaXhIUVVGRkxFZEJRVVU3UTBGQlF5eEpRVUZITzBWQlFVTXNUVUZCVFN4WlFVRlpMRU5CUVVNN1EwRkJReXhSUVVGTkxFTkJRVU03UTBGQlF5eE5RVUZOTzBGQlFVTTdRVUZCUXl4VFFVRlRMSGRDUVVGM1FpeEhRVUZGTEVkQlFVVTdRMEZCUXl4UFFVRlBMRzlDUVVGdlFpeERRVUZETEVsQlFVVXNkMEpCUVhkQ0xFOUJRVThzUlVGQlJTeFRRVUZQTEZkQlFWTXNSVUZCUlN4UlFVRk5MRWRCUVVVc1QwRkJUeXhGUVVGRkxHOUNRVUZyUWl4WFFVRlRMRVZCUVVVc2JVSkJRV2xDTEV0QlFVc3NRMEZCUXl4SlFVRkZPMEZCUVVNN1FVRkJReXhUUVVGVExHOUNRVUZ2UWl4SFFVRkZPME5CUVVNc1QwRkJUeXhQUVVGUExFdEJRVWNzV1VGQlZTeERRVUZETEVOQlFVTXNTMEZCUnl4VlFVRlRMRXRCUVVjc1JVRkJSU3hUUVVGUE8wRkJRVzFDTzBGQlFVTXNVMEZCVXl4M1FrRkJkMElzUjBGQlJTeEhRVUZGTzBOQlFVTXNTVUZCU1N4SlFVRkZMRTFCUVVrc1MwRkJTeXhKUVVGRkxFdEJRVWNzVlVGQlZTeEZRVUZGTzBOQlFVa3NUMEZCVHl4UFFVRlBMRTlCUVU4c1RVRkJUU3hsUVVGbExFVkJRVVVzY1VKQlFYRkNMRWRCUVVjc1IwRkJSVHRGUVVGRExHdENRVUZwUWp0RlFVRkZMRTFCUVVzN1JVRkJiMElzVDBGQlRUdERRVUZETEVOQlFVTTdRVUZCUXpzN08wRkRRWEF2UWl4VFFVRlRMSE5DUVVGelFpeEhRVUZGTzBOQlFVTXNUMEZCVHl4RlFVRkZMRkZCUVZFc1dVRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEZGQlFVOHNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZGTEVkQlFVYzdRVUZCUXp0QlEwRm5SQ3hUUVVGVExIbENRVUYzUWp0RFFVRkRMRTlCUVUwN1JVRkJReXhUUVVGUkxFTkJRVU03UlVGQlJTeFZRVUZUTEVOQlFVTTdSVUZCUlN4dlFrRkJiVUlzUTBGQlF6dEZRVUZGTEZWQlFWTTdSVUZCUlN4alFVRmhMRU5CUVVNN1JVRkJSU3hUUVVGUk8wVkJRVVVzVFVGQlN5eERRVUZETzBOQlFVTTdRVUZCUXp0QlFVRkRMRk5CUVZNc2IwSkJRVzlDTEVkQlFVVXNSMEZCUlR0RFFVRkRMRWxCUVVrc1NVRkJSU3hIUVVGRkxFbEJRVVVzUlVGQlJTeGpRVUZoTEVsQlFVVXNRMEZCUXl4SFFVRkZMRWxCUVVVc1EwRkJRenREUVVGRkxFdEJRVWtzU1VGQlNTeExRVUZMTEVWQlFVVXNVVUZCVHp0RlFVRkRMRWxCUVVjc1JVRkJSU3hUUVVGVExFVkJRVVVzVDBGQlR5eEhRVUZGTzBWQlFWTXNTVUZCU1N4SlFVRkZMRmxCUVZrc1IwRkJSU3hEUVVGRE8wVkJRVVVzVFVGQlNTeE5RVUZKTEVsQlFVVXNRMEZCUXl4SFFVRkZMRWxCUVVVc1kwRkJZeXhIUVVGRkxFVkJRVVVzVTBGQlFTeEhRVUU0UWl4SFFVRkZMRTFCUVVrc2IwSkJRVzlDTEVkQlFVVXNRMEZCUXl4SFFVRkZMRWxCUVVVN1EwRkJSVHREUVVGRExFOUJRVThzU1VGQlJTeEpRVUZGTzBWQlFVTXNSMEZCUnp0RlFVRkZMRlZCUVZNc1JVRkJSU3hYUVVGVE8wVkJRVVVzWTBGQllUdERRVUZETEVsQlFVVTdSVUZCUXl4SFFVRkhPMFZCUVVVc1ZVRkJVeXhGUVVGRk8wVkJRVk1zWTBGQllUdERRVUZETEVsQlFVVTdRVUZCUXp0QlFVRkRMRk5CUVZNc2IwSkJRVzlDTEVkQlFVVXNSMEZCUlR0RFFVRkRMRTlCUVU4c1JVRkJSU3haUVVGVkxFVkJRVVVzVjBGQlV5eEZRVUZGTEdGQlFWY3NSVUZCUlN4WlFVRlZMRVZCUVVVc1UwRkJUeXhGUVVGRk8wRkJRVWs3UVVGQlF5eFRRVUZUTEZsQlFWa3NSMEZCUlN4SFFVRkZPME5CUVVNc1VVRkJUeXhGUVVGRkxFMUJRVlE3UlVGQlpTeExRVUZKTEdkQ1FVRmxMRTlCUVU4c1ZVRkJWU3hIUVVGRkxFTkJRVU03UlVGQlJTeExRVUZKTEdkQ1FVRmxMRTlCUVU4c1YwRkJWeXhIUVVGRkxFTkJRVU03UlVGQlJTeExRVUZKTEd0Q1FVRnBRaXhQUVVGUExGbEJRVmtzUjBGQlJTeERRVUZETzBWQlFVVXNTMEZCU1N4clFrRkJhVUlzVDBGQlR5eGhRVUZoTEVkQlFVVXNRMEZCUXp0RlFVRkZMRXRCUVVrc2JVSkJRV3RDTEU5QlFVOHNZVUZCWVN4SFFVRkZMRU5CUVVNN1JVRkJSU3hMUVVGSkxHMUNRVUZyUWl4UFFVRlBMR05CUVdNc1IwRkJSU3hEUVVGRE8wTkJRVU03UVVGQlF6dEJRVUZETEZOQlFWTXNWVUZCVlN4SFFVRkZMRWRCUVVVN1EwRkJReXhKUVVGSExFVkJRVVVzUzBGQlN5eEZRVUZGTEV0QlFVc3NVVUZCVFN4TFFVRkxMRWRCUVVVc1QwRkJUenREUVVGRkxFbEJRVWtzU1VGQlJTeFhRVUZYTEVkQlFVVXNVVUZCVHl4RlFVRkZMRXRCUVVzc1JVRkJSU3hIUVVGRkxFbEJRVVVzUlVGQlJTeExRVUZMTEdGQlFWY3NTMEZCU3l4SlFVRkZMRXRCUVVzc1NVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEZkQlFWVXNTVUZCUlN4SFFVRkhMRmxCUVZVc1EwRkJReXg1UWtGQmVVSXNSMEZCUlN4RlFVRkZMRWxCUVVrc1MwRkJSeXhOUVVGSkxFdEJRVXNzUzBGQlJ5eEZRVUZGTEZWQlFWRXNXVUZCVlN4alFVRlpMRmxCUVZjc1NVRkJSVHRGUVVGRExFZEJRVWNzUlVGQlJUdEZRVUZMTEUxQlFVc3NSVUZCUlN4TFFVRkxMRk5CUVU4c1MwRkJTeXhKUVVGRkxFdEJRVXNzU1VGQlJTeHpRa0ZCYzBJc1JVRkJSU3hMUVVGTExFbEJRVWs3UlVGQlJTeFBRVUZOTzBWQlFVVXNWMEZCVlN4SFFVRkhMR05CUVZrc1RVRkJTU3hqUVVGWkxFZEJRVWNzV1VGQlZTeExRVUZMTzBWQlFVY3NWMEZCVlN4RlFVRkZPME5CUVZNc1IwRkJSU3hKUVVGRk8wVkJRVU1zUjBGQlJ6dEZRVUZGTEc5Q1FVRnRRaXhWUVVGVkxFVkJRVVVzYjBKQlFXMUNMRmRCUVZjc1VVRkJUeXhGUVVGRkxFVkJRVVVzUTBGQlF6dEZRVUZGTEUxQlFVc3NaVUZCWlN4RlFVRkZMRTFCUVVzc1JVRkJSU3hKUVVGSExFTkJRVU03UTBGQlF6dERRVUZGTEU5QlFVOHNSVUZCUlN4VlFVRlJMRmxCUVZVc1NVRkJSU3hsUVVGbExFZEJRVVU3UlVGQlF5eFRRVUZSTEVWQlFVVTdSVUZCVFN4WFFVRlZMRVZCUVVVc1lVRkJWeXhGUVVGRk8wVkJRVlVzVVVGQlR5eEZRVUZGTzBOQlFVVXNRMEZCUXp0QlFVRkRPMEZCUVVNc1UwRkJVeXhYUVVGWExFZEJRVVVzUjBGQlJUdERRVUZETEVsQlFVa3NTVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSVHREUVVGUkxFOUJRVThzVFVGQlNTeExRVUZMTEVsQlFVVXNZMEZCWXl4SFFVRkZMRkZCUVU4c1JVRkJSU3hSUVVGUExFTkJRVU1zU1VGQlJTeEZRVUZGTEZWQlFWRXNXVUZCVlN4bFFVRmxMRWRCUVVVN1JVRkJReXhUUVVGUkxFVkJRVVU3UlVGQlVTeFhRVUZWTEVWQlFVVTdSVUZCVlN4UlFVRlBMRVZCUVVVN1EwRkJUU3hEUVVGRExFbEJRVVU3UVVGQlF6dEJRVUZETEZOQlFWTXNXVUZCV1N4SFFVRkZMRWRCUVVVN1EwRkJReXhKUVVGSExFVkJRVVVzVVVGQlVTeEZRVUZGTEU5QlFVOHNVVUZCVFN4TFFVRkxMRWRCUVVVc1QwRkJUenREUVVGRkxFbEJRVWtzU1VGQlJTeFhRVUZYTEVkQlFVVXNWVUZCVXl4RlFVRkZMRTlCUVU4c1JVRkJSU3hIUVVGRkxFbEJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNUMEZCVHl4bFFVRmpMRWxCUVVVc1IwRkJSeXhaUVVGVkxFMUJRVWtzUzBGQlN5eExRVUZITEVWQlFVVXNWVUZCVVN4WlFVRlZMR05CUVZrN1EwRkJWeXhQUVVGTk8wVkJRVU1zUjBGQlJ6dEZRVUZGTEZOQlFWRXNaVUZCWlN4RlFVRkZMRk5CUVZFc1JVRkJSU3hQUVVGUExFbEJRVWM3UjBGQlF5eEhRVUZITEVWQlFVVTdSMEZCVHl4TlFVRkxMSE5DUVVGelFpeEZRVUZGTEU5QlFVOHNTVUZCU1R0SFFVRkZMRTlCUVUwN1IwRkJSU3hYUVVGVkxFZEJRVWNzWTBGQldTeE5RVUZKTEdOQlFWa3NSMEZCUnl4WlFVRlZMRXRCUVVzN1IwRkJSeXhYUVVGVkxFVkJRVVU3UlVGQlV5eERRVUZETzBWQlFVVXNiMEpCUVcxQ0xGVkJRVlVzUlVGQlJTeHZRa0ZCYlVJc1YwRkJWeXhWUVVGVExFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTTdRMEZCUXp0QlFVRkRPMEZCUVVNc1UwRkJVeXhoUVVGaExFZEJRVVVzUjBGQlJUdERRVUZETEVsQlFVa3NTVUZCUlN4RlFVRkZMRkZCUVZFc1JVRkJSVHREUVVGVkxFOUJRVThzVFVGQlNTeExRVUZMTEVsQlFVVXNZMEZCWXl4SFFVRkZMRlZCUVZNc1JVRkJSU3hWUVVGVExFTkJRVU1zU1VGQlJTeEZRVUZGTEZWQlFWRXNXVUZCVlR0RlFVRkRMRWRCUVVjN1JVRkJSU3hUUVVGUkxHVkJRV1VzUlVGQlJTeFRRVUZSTEVWQlFVVXNWVUZCVXp0SFFVRkRMRWRCUVVjN1IwRkJSU3hQUVVGTkxFVkJRVVU3UjBGQlVTeFhRVUZWTEVWQlFVVTdSVUZCVXl4RFFVRkRPME5CUVVNc1NVRkJSVHRCUVVGRE8wRkJRVU1zVTBGQlV5eGhRVUZoTEVkQlFVVXNSMEZCUlR0RFFVRkRMRWxCUVVjc1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTeFJRVUZOTEV0QlFVc3NSMEZCUlN4UFFVRlBPME5CUVVVc1NVRkJTU3hKUVVGRkxGZEJRVmNzUjBGQlJTeFhRVUZWTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWRCUVVVc1NVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFJRVUZSTEdWQlFXTXNTVUZCUlN4SFFVRkhMRmxCUVZVc1RVRkJTU3hMUVVGTExFdEJRVWNzUlVGQlJTeFZRVUZSTEZsQlFWVXNZMEZCV1R0RFFVRlhMRTlCUVUwN1JVRkJReXhIUVVGSE8wVkJRVVVzVlVGQlV5eGxRVUZsTEVWQlFVVXNWVUZCVXl4RlFVRkZMRkZCUVZFc1NVRkJSenRIUVVGRExFZEJRVWNzUlVGQlJUdEhRVUZSTEU5QlFVMHNSVUZCUlN4UlFVRlJMRlZCUVZFc1MwRkJTeXhKUVVGRkxFdEJRVXNzU1VGQlJTeHpRa0ZCYzBJc1JVRkJSU3hSUVVGUkxFdEJRVXM3UjBGQlJTeFBRVUZOTzBkQlFVVXNWMEZCVlN4SFFVRkhMR05CUVZrc1RVRkJTU3hqUVVGWkxFZEJRVWNzV1VGQlZTeExRVUZMTzBkQlFVY3NWMEZCVlN4RlFVRkZPMFZCUVZNc1EwRkJRenRGUVVGRkxHOUNRVUZ0UWl4VlFVRlZMRVZCUVVVc2IwSkJRVzFDTEZkQlFWY3NWMEZCVlN4RlFVRkZMRkZCUVZFc1JVRkJSU3hEUVVGRE8wTkJRVU03UVVGQlF6dEJRVUZETEZOQlFWTXNZMEZCWXl4SFFVRkZMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzUlVGQlJTeFRRVUZUTEVWQlFVVTdRMEZCVnl4UFFVRlBMRTFCUVVrc1MwRkJTeXhKUVVGRkxHTkJRV01zUjBGQlJTeFhRVUZWTEVWQlFVVXNWMEZCVlN4RFFVRkRMRWxCUVVVc1JVRkJSU3hWUVVGUkxGbEJRVlU3UlVGQlF5eEhRVUZITzBWQlFVVXNWVUZCVXl4bFFVRmxMRVZCUVVVc1ZVRkJVeXhGUVVGRkxGZEJRVlU3UjBGQlF5eEhRVUZITzBkQlFVVXNUMEZCVFN4RlFVRkZPMGRCUVZFc1YwRkJWU3hGUVVGRk8wVkJRVk1zUTBGQlF6dERRVUZETEVsQlFVVTdRVUZCUXp0QlFVRkRMRk5CUVZNc1kwRkJZeXhIUVVGRkxFZEJRVVVzUjBGQlJTeEhRVUZGTzBOQlFVTXNTVUZCU1N4SlFVRkZMRmRCUVZjc1IwRkJSU3hEUVVGRE8wTkJRVVVzVDBGQlR5eEZRVUZGTEcxQ1FVRnRRaXhQUVVGTExFdEJRVXNzU1VGQlJUdEZRVUZETEVkQlFVYzdSVUZCUlN4dlFrRkJiVUlzWlVGQlpTeEZRVUZGTEc5Q1FVRnRRaXhIUVVGRk8wZEJRVU1zV1VGQlZ6dEhRVUZGTEZOQlFWRXNSVUZCUlR0SFFVRlJMRk5CUVZFc1JVRkJSVHRIUVVGUkxGZEJRVlVzUlVGQlJUdEZRVUZUTEVkQlFVVXNSMEZCUnp0RFFVRkRMRWxCUVVVN1FVRkJRenRCUVVGRExGTkJRVk1zVjBGQlZ5eEhRVUZGTEVkQlFVVXNSMEZCUlR0RFFVRkRMRTlCUVU4c1JVRkJSU3h0UWtGQmJVSXNWMEZCVnl4SFFVRkZMRU5CUVVNN1FVRkJSVHRCUVVGRExGTkJRVk1zVjBGQlZ5eEhRVUZGTEVkQlFVVTdRMEZCUXl4UFFVRk5MRWRCUVVjc1JVRkJSU3hIUVVGSE8wRkJRVWM3UVVGQlF5eFRRVUZUTEdWQlFXVXNSMEZCUlN4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRkxFbEJRVWtzU1VGQlNTeERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVVc1NVRkJSU3hEUVVGRE8wTkJRVVVzVDBGQlN5eEpRVUZITzBWQlFVTXNTVUZCUlN4RFFVRkRPMFZCUVVVc1MwRkJTU3hKUVVGSkxFdEJRVXNzVDBGQlR5eFBRVUZQTEVWQlFVVXNTVUZCU1N4SFFVRkZMRVZCUVVVc1lVRkJWeXhMUVVGTExFdEJRVWNzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRXRCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeExRVUZITEhsQ1FVRjVRaXhIUVVGRkxFTkJRVU1zVFVGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRWRCUVVVc1NVRkJSU3hEUVVGRE8wTkJRVVU3UTBGQlF5eFBRVUZOTzBWQlFVTXNSMEZCUnp0RlFVRkZMRk5CUVZFc2EwSkJRV3RDTEVWQlFVVXNWVUZCVVN4TlFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxGbEJRVmtzUzBGQlJ5eEZRVUZGTEZWQlFWRXNXVUZCVlR0SFFVRkRMRWRCUVVjN1IwRkJSU3hQUVVGTk8wZEJRVmtzVjBGQlZTeEZRVUZGTzBWQlFWTXNTVUZCUlN4RFFVRkRPMFZCUVVVc1ZVRkJVeXhyUWtGQmEwSXNSVUZCUlN4WFFVRlRMRTFCUVVjc1JVRkJSU3hKUVVGSkxFVkJRVVVzV1VGQldTeExRVUZITEVWQlFVVXNWVUZCVVN4WlFVRlZPMGRCUVVNc1IwRkJSenRIUVVGRkxFOUJRVTA3UjBGQldTeFhRVUZWTEVWQlFVVTdSVUZCVXl4SlFVRkZMRU5CUVVNN1JVRkJSU3hOUVVGTExHdENRVUZyUWl4RlFVRkZMRTlCUVVzc1RVRkJSeXhGUVVGRkxFOUJRVXNzUlVGQlJTeFRRVUZQTzBkQlFVTXNSMEZCUnp0SFFVRkZMRTlCUVUwc1JVRkJSVHRIUVVGUkxGZEJRVlVzUlVGQlJUdEZRVUZUTEVsQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hMUVVGSExFVkJRVVVzVlVGQlVTeFpRVUZWTzBkQlFVTXNSMEZCUnp0SFFVRkZMRTlCUVUwN1IwRkJXU3hYUVVGVkxFVkJRVVU3UlVGQlV5eEpRVUZGTEVOQlFVTTdRMEZCUXp0QlFVRkRPMEZCUVVNc1UwRkJVeXg1UWtGQmVVSXNSMEZCUlN4SFFVRkZPME5CUVVNc1QwRkJUeXhGUVVGRkxGTkJRVThzVTBGQlR5eERRVUZETEVsQlFVVXNSVUZCUlN4WFFVRlRMRXRCUVVzc1MwRkJSeXhGUVVGRkxHRkJRVmNzUzBGQlN5eEpRVUZGTEVOQlFVTXNTVUZCUlN4RlFVRkZMRkZCUVZFc1ZVRkJWU3hGUVVGRkxGTkJRVk1zUjBGQlJ5eEZRVUZGTEdOQlFWa3NTMEZCU3p0QlFVRkRPMEZCUVVNc1UwRkJVeXhyUWtGQmEwSXNSMEZCUlN4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRk8wTkJRVVVzUzBGQlNTeEpRVUZITEVOQlFVTXNSMEZCUlN4TlFVRkxMRTlCUVU4c1VVRkJVU3hEUVVGRExFZEJRVVU3UlVGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4RFFVRkRPMFZCUVVVc1RVRkJTU3hOUVVGSkxFMUJRVWtzVFVGQlNTeEpRVUZGTEVWQlFVTXNSMEZCUnl4RlFVRkRMRWxCUVVjc1JVRkJSU3hMUVVGSE8wTkJRVVU3UTBGQlF5eFBRVUZQTzBGQlFVTTdRVUZCUXl4VFFVRlRMR1ZCUVdVc1IwRkJSU3hIUVVGRkxFZEJRVVVzU1VGQlJTeExRVUZKTzBOQlFVTXNTVUZCU1N4SlFVRkZPMFZCUVVNc1IwRkJSenRIUVVGSExFbEJRVWM3UTBGQlF5eEhRVUZGTEVsQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVTg3UTBGQlJTeExRVUZKTEVsQlFVa3NTMEZCU3l4UFFVRlBMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZGTEV0QlFVc3NTVUZCU1N4SFFVRkZMRU5CUVVNc1EwRkJReXhIUVVGRkxFOUJRVThzUlVGQlJUdERRVUZITEU5QlFVODdRVUZCUXp0QlFVRkRMRk5CUVZNc1ZVRkJWU3hIUVVGRkxFZEJRVVU3UTBGQlF5eEpRVUZITEVWQlFVVXNUMEZCU3l4TFFVRkxMRWRCUVVVc1QwRkJUenREUVVGRkxFbEJRVWtzU1VGQlJTeEZRVUZETEVkQlFVY3NSVUZCUXp0RFFVRkZMRTlCUVU4c1QwRkJUeXhGUVVGRkxFbEJRVWM3UVVGQlF6dEJRVUZETEZOQlFWTXNZMEZCWXl4SFFVRkZMRWRCUVVVc1IwRkJSVHREUVVGRExFOUJRVTBzUTBGQlF5eEhRVUZITEVkQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGQlF6czdPMEZEUXpFNVNpeEpRVUZYTERSQ1FVRTBRaXhYUVVGWExFOUJRVThzU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRExEWkRRVUUyUXp0QlFVTm9TU3hKUVVGWExEWkNRVUUyUWl4WFFVRlhMRTlCUVU4c1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRMRGhEUVVFNFF6czdPMEZEUkcxUUxHVkJRV1VzTUVKQlFUQkNMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzVjBGQlZ5eEZRVUZETEU5QlFVMHNSVUZCUlN4TlFVRkxMRU5CUVVNc1IwRkJSU3hKUVVGRkxFVkJRVVVzVDBGQlR5eGpRVUZqTEVOQlFVTXNSMEZCUlN4SlFVRkZMRU5CUVVNc1IwRkJSU3hIUVVGRkxFbEJRVVVzVFVGQlRTeEpRVUZKTEV0QlFVc3NSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExGbEJRVlVzUlVGQlF5eE5RVUZMTEZWQlFWTXNSVUZCUlN4SFFVRkZMRWxCUVVVc2RVSkJRWFZDTEVkQlFVVXNTVUZCUlN4RFFVRkRPME5CUVVVc1NVRkJSenRGUVVGRExFbEJRVWM3UjBGQlF5eE5RVUZOTEcxQ1FVRnRRaXhEUVVGRExFZEJRVVVzU1VGQlJTeERRVUZETzBWQlFVTXNVMEZCVHl4SFFVRkZPMGRCUVVNc1NVRkJSeXh2UWtGQmIwSXNRMEZCUXl4SFFVRkZPMGRCUVU4c1RVRkJUVHRGUVVGRE8wVkJRVU1zVTBGQlR6dEhRVUZETEUxQlFVa3NSVUZCUlN4TFFVRkxPMGRCUVVVc1NVRkJTU3hKUVVGRkxFMUJRVTBzVVVGQlVTeExRVUZMTEVOQlFVTXNSVUZCUlN4TlFVRkxMRTlCUVVrN1NVRkJReXhOUVVGTE8wbEJRVkVzVDBGQlRUdEhRVUZETEVWQlFVVXNSMEZCUlN4RFFVRkRMRU5CUVVNN1IwRkJSU3hKUVVGSExFVkJRVVVzVTBGQlR5eGhRVUZYTEVWQlFVVXNUVUZCVFN4VFFVRlBMRU5CUVVNc1IwRkJSVHRIUVVGTkxFbEJRVVVzUzBGQlN6dEhRVUZGTEVsQlFVa3NTVUZCUlN4M1FrRkJkMElzUjBGQlJTeEZRVUZGTEUxQlFVMHNTMEZCU3p0SFFVRkZMRWxCUVVjc1NVRkJSU3hGUVVGRkxGVkJRVk1zUTBGQlF5eEZRVUZGTEhGQ1FVRnZRanRIUVVGVExFbEJRVWtzU1VGQlJTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRmxCUVZVc1JVRkJReXhOUVVGTExGTkJRVkVzUlVGQlJUdEhRVUZGTEZOQlFVODdTVUZCUXl4TlFVRkpMRVZCUVVVc1MwRkJTenRKUVVGRkxFbEJRVWtzU1VGQlJTeE5RVUZOTEZGQlFWRXNTMEZCU3p0TFFVRkRMRVZCUVVVc1RVRkJTeXhQUVVGSk8wMUJRVU1zVFVGQlN6dE5RVUZSTEU5QlFVMDdTMEZCUXl4RlFVRkZPMHRCUVVVN1MwRkJSVHRKUVVGRExFTkJRVU03U1VGQlJTeEpRVUZITEVWQlFVVXNVMEZCVHl4WFFVRlZPMGxCUVU4c1NVRkJSeXhGUVVGRkxGTkJRVThzVlVGQlV6dEpRVUZOTEVsQlFVY3NSVUZCUlN4TlFVRk5MRk5CUVU4c1EwRkJReXhIUVVGRk8wbEJRVThzU1VGQlJTeExRVUZMTEVkQlFVVXNTVUZCUlN4dlFrRkJiMElzUjBGQlJTeEZRVUZGTEUxQlFVMHNTMEZCU3p0SFFVRkRPMGRCUVVNc1MwRkJSeXhOUVVGTkxEQkNRVUV3UWp0SlFVRkRMR2RDUVVGbE8wbEJRVVVzYlVKQlFXdENMRVZCUVVVN1NVRkJhMElzVlVGQlV6dEhRVUZETEVOQlFVTXNSVUZCUVN4RFFVRkhPMFZCUVdNN1EwRkJReXhWUVVGUk8wVkJRVU1zVFVGQlNTeE5RVUZOTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZWTEVOQlFVTXNRMEZCUXl4SFFVRkZMRTFCUVUwc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZWTEVOQlFVTXNRMEZCUXl4SFFVRkZMRTFCUVUwc01rSkJRVEpDTzBkQlFVTXNaMEpCUVdVN1IwRkJSU3h0UWtGQmEwSXNSVUZCUlR0RlFVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eFpRVUZWTEVOQlFVTXNRMEZCUXp0RFFVRkZPMEZCUVVNN1FVRkJReXhUUVVGVExIZENRVUYzUWl4SFFVRkZMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzUlVG",
	"QlJTeFZRVUZUTEVsQlFVVXNiMEpCUVc5Q0xFZEJRVVVzUTBGQlF6dERRVUZGTEU5QlFVMDdSVUZCUXl4eFFrRkJiMElzUlVGQlJTeGhRVUZYTzBWQlFVVXNWVUZCVXp0RFFVRkRPMEZCUVVNN1FVRkJReXd3UWtGQk1FSXNZVUZCVnp0QlFVTTVia1FzTUVKQlFUQkNMR0ZCUVdFN1FVRkRka01zVjBGQlZ5eHZRa0ZCYjBJc1NVRkJTU3cwUTBGQk5FTXNlVUpCUVhsQ096czdRVU5HZUVjc1NVRkJWeXd3UWtGQk1FSXNWMEZCVnl4UFFVRlBMRWxCUVVrc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl3eVEwRkJNa003UVVGRE5VZ3NTVUZCVnl3eVFrRkJNa0lzVjBGQlZ5eFBRVUZQTEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5dzBRMEZCTkVNN1FVRkRPVWdzU1VGQlZ5d3lRa0ZCTWtJc1YwRkJWeXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXcwUTBGQk5FTTdPenRCUTBaRExHVkJRV1VzZFVKQlFYVkNMRWRCUVVVN1EwRkJReXhOUVVGTkxFMUJRVTBzUlVGQlJTeFJRVUZSTEVkQlFVVXNUVUZCVFN4NVFrRkJlVUlzUlVGQlF5eFBRVUZOTEVWQlFVVXNUVUZCU3l4RFFVRkRPMEZCUVVNN1FVRkJReXgxUWtGQmRVSXNZVUZCVnp0QlFVTnNVaXgxUWtGQmRVSXNZVUZCWVR0QlFVTndReXhYUVVGWExHOUNRVUZ2UWl4SlFVRkpMSGxEUVVGNVF5eHpRa0ZCYzBJN096dEJRMGhzUnl4VFFVRlRMR2RDUVVGblFpeEhRVUZGTEVkQlFVVTdRMEZCUXl4SlFVRkhMRTFCUVVrc1IwRkJSU3hQUVVGTkxFTkJRVU03UTBGQlJTeEpRVUZITEUxQlFVMHNVVUZCVVN4RFFVRkRMRXRCUVVjc1RVRkJUU3hSUVVGUkxFTkJRVU1zUjBGQlJTeFBRVUZQTEUxQlFVMHNVVUZCVVN4RFFVRkRMRXRCUVVjc1RVRkJUU3hSUVVGUkxFTkJRVU1zUzBGQlJ5eEZRVUZGTEZkQlFWTXNSVUZCUlN4VlFVRlJMRVZCUVVVc1QwRkJUeXhIUVVGRkxFMUJRVWtzWjBKQlFXZENMRWRCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03UTBGQlJTeEpRVUZITEUxQlFVa3NVVUZCVFN4TlFVRkpMRkZCUVUwc1QwRkJUeXhMUVVGSExGbEJRVlVzVDBGQlR5eExRVUZITEZWQlFWTXNUMEZCVFN4RFFVRkRPME5CUVVVc1NVRkJTU3hKUVVGRkxFOUJRVThzVVVGQlVTeERRVUZETEVkQlFVVXNTVUZCUlR0RFFVRkZMRTlCUVU4c1JVRkJSU3hYUVVGVExFOUJRVThzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlJMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVVVzVDBGQlN5eFBRVUZQTEU5QlFVOHNSMEZCUlN4RFFVRkRMRXRCUVVjc1owSkJRV2RDTEVkQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1FVRkJRenRCUVVGRExFMUJRVTBzSzBKQlFUWkNMRTlCUVU4c09FSkJRVGhDTzBGQlFVVXNVMEZCVXl4bFFVRmxMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzTkVKQlFUUkNMRU5CUVVNN1EwRkJSU3hKUVVGSExFMUJRVWtzT0VKQlFUWkNMRTFCUVUwc1ZVRkJWU3h4UTBGQmNVTTdRMEZCUlN4UFFVRlBPMEZCUVVNN1FVRkJLMGtzVTBGQlV5dzBRa0ZCTkVJc1IwRkJSU3hKUVVGRkxFbEJRVWtzVVVGQlRTeEhRVUZGTzBOQlFVTXNTVUZCUnl4TlFVRkpMRkZCUVUwc1QwRkJUeXhMUVVGSExHRkJRVmNzVDBGQlR5eExRVUZITEZWQlFWTXNUMEZCVHp0RFFVRkZMRWxCUVVjc1QwRkJUeXhMUVVGSExGVkJRVk1zVDBGQlR5eFBRVUZQTEZOQlFWTXNRMEZCUXl4SlFVRkZMRWxCUVVVN1EwRkJOa0lzU1VGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4SFFVRkZPMFZCUVVNc1NVRkJTU3hKUVVGRkxFTkJRVU03UlVGQlJTeExRVUZKTEVsQlFVa3NTMEZCU3l4SFFVRkZPMGRCUVVNc1NVRkJTU3hKUVVGRkxEUkNRVUUwUWl4SFFVRkZMRU5CUVVNN1IwRkJSU3hKUVVGSExFMUJRVWtzT0VKQlFUWkNMRTlCUVU4N1IwRkJOa0lzUlVGQlJTeExRVUZMTEVOQlFVTTdSVUZCUXp0RlFVRkRMRTlCUVU4N1EwRkJRenREUVVGRExFbEJRVWNzVDBGQlR5eExRVUZITEZsQlFWVXNUVUZCU1N4TFFVRkxMRXRCUVVjc1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SFFVRkZMRTlCUVU4N1EwRkJOa0lzUlVGQlJTeEpRVUZKTEVOQlFVTTdRMEZCUlN4SlFVRkpMRWxCUVVVc1EwRkJRenREUVVGRkxFdEJRVWtzU1VGQlJ5eERRVUZETEVkQlFVVXNUVUZCU3l4UFFVRlBMRkZCUVZFc1EwRkJReXhIUVVGRk8wVkJRVU1zU1VGQlJ5eE5RVUZKTEV0QlFVc3NSMEZCUlR0RlFVRlRMRWxCUVVrc1NVRkJSU3cwUWtGQk5FSXNSMEZCUlN4RFFVRkRPMFZCUVVVc1NVRkJSeXhOUVVGSkxEaENRVUUyUWl4UFFVRlBPMFZCUVRaQ0xFVkJRVVVzUzBGQlJ6dERRVUZETzBOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhIUVVGRk8wRkJRVU03UVVGQmMwWXNVMEZCVXl4alFVRmpMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzVDBGQlR5eGxRVUZsTEVOQlFVTTdRMEZCUlN4UFFVRlBMRTFCUVVrc1VVRkJUU3hQUVVGUExHVkJRV1VzUTBGQlF5eE5RVUZKTzBGQlFVazdPenRCUTBGd0wwSXNVMEZCVXl4MVFrRkJkVUlzUjBGQlJUdERRVUZETEVsQlFVY3NUMEZCVHl4TFFVRkhMRmxCUVZVc1EwRkJReXhMUVVGSExFMUJRVTBzVVVGQlVTeERRVUZETEVkQlFVVTdRMEZCVHl4SlFVRkpMRWxCUVVVc1VVRkJVU3hKUVVGSkxFZEJRVVVzVjBGQlZ6dERRVUZGTEU5QlFVOHNUMEZCVHl4TFFVRkhMRmRCUVZNc1NVRkJSU3hMUVVGTE8wRkJRVU03UVVGQksxWXNVMEZCVXl4eFFrRkJjVUlzUjBGQlJUdERRVUZETEU5QlFVOHNUVUZCU1N4bFFVRmhMRTFCUVVrc1dVRkJWU3hOUVVGSk8wRkJRVmM3UVVGQlF5eFRRVUZUTEd0Q1FVRnJRaXhIUVVGRk8wTkJRVU1zVDBGQlR5eE5RVUZKTEc5Q1FVRnJRaXh4UWtGQmNVSXNRMEZCUXp0QlFVRkRPenM3UVVORE0zaERMRWxCUVZjc2NVSkJRWEZDTEZkQlFWY3NUMEZCVHl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNjME5CUVhORE8wRkJRMnhJTEVsQlFWY3NjVUpCUVhGQ0xGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zYzBOQlFYTkRPMEZCUTJ4SUxFbEJRVmNzTWtKQlFUSkNMRmRCUVZjc1QwRkJUeXhKUVVGSkxHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc05FTkJRVFJETzBGQlF6bElMRWxCUVZjc2FVTkJRV2xETEZkQlFWY3NUMEZCVHl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNhMFJCUVd0RU8wRkJRekZKTEVsQlFWY3NhME5CUVd0RExGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zYlVSQlFXMUVPMEZCUXpWSkxFbEJRVmNzZVVOQlFYbERMRmRCUVZjc1QwRkJUeXhKUVVGSkxHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc01FUkJRVEJFTzBGQlF6RktMRWxCUVZjc1owTkJRV2RETEZkQlFWY3NUMEZCVHl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNhVVJCUVdsRU96czdRVU5RT1VVc1RVRkJUU3cwUWtGQk1FSXNWMEZCVnp0QlFVRkZMRTFCUVVFc05rSkJRVEpDTEZkQlFWYzdRVUZCUlN4TlFVRkJMRFpDUVVFeVFpeFhRVUZYTzBGQlFVVXNVMEZCVXl3eVFrRkJNa0lzUjBGQlJUdERRVUZETEU5QlFVMDdSVUZCUXl4WFFVRlZMRWRCUVVjc1JVRkJSVHRGUVVGWkxGTkJRVkVzUjBGQlJ5eEZRVUZGTzBWQlFWVXNVVUZCVHl4SFFVRkhMRVZCUVVVN1JVRkJVeXhUUVVGUkxFZEJRVWNzUlVGQlJUdERRVUZUTzBGQlFVTTdRVUZCUXl4VFFVRlRMR2REUVVGblF5eEhRVUZGTzBOQlFVTXNTVUZCUnl4UFFVRlBMRXRCUVVjc1dVRkJWU3hEUVVGRExFZEJRVVVzVDBGQlRTeERRVUZETzBOQlFVVXNTVUZCUnl4RlFVRkRMRTFCUVVzc1IwRkJSU3hSUVVGUExFMUJRVWM3UTBGQlJTeFBRVUZQTEUxQlFVa3NXVUZCVlN4UFFVRlBMRXRCUVVjN1FVRkJVVHM3TzBGRFFXcGtMRTFCUVUwc0swSkJRVFpDTzBGQlFYVklMRk5CUVZNc2IwSkJRVzlDTEVkQlFVVTdRMEZCUXl4SlFVRkpMRWxCUVVVc1NVRkJTVHREUVVFNFFpeFBRVUZQTEUxQlFVMHNVVUZCVVN4RFFVRkRMRWxCUVVVc1NVRkJSU3hEUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEc5Q1FVRnZRaXhIUVVGRkxFZEJRVVU3UTBGQlF5eFBRVUZQTEc5Q1FVRnZRaXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZMTEUxQlFVY3NSVUZCUlN4WFFVRlRMRU5CUVVNN1FVRkJRenRCUVVGcldpeFRRVUZUTERaRFFVRTJReXhIUVVGRkxFZEJRVVU3UTBGQlF5eEpRVUZKTEVsQlFVVXNiMEpCUVc5Q0xFZEJRVVVzUlVGQlJTeE5RVUZOTzBOQlFVVXNUMEZCVHl4TlFVRkpMRXRCUVVzc1MwRkJSeXhGUVVGRkxHVkJRV0VzWTBGQldTeEZRVUZGTEdGQlFWY3NSVUZCUlR0QlFVRlJPMEZCUVVNc1UwRkJVeXhwUkVGQmFVUXNSMEZCUlN4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRkxHOUNRVUZ2UWl4SFFVRkZMRVZCUVVVc1RVRkJUVHREUVVGRkxFOUJRVThzUjBGQlJ5eGxRVUZoTEdOQlFWa3NSVUZCUlN4aFFVRlhMRVZCUVVVN1FVRkJXVHM3TzBGRFEyaHFReXhKUVVGWExHbENRVUZwUWl4WFFVRlhMRTlCUVU4c1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRMR3REUVVGclF6czdPMEZEUkdsSExFMUJRVTBzTkVKQlFUQkNMRTlCUVU4c1NVRkJTU3dyUWtGQkswSTdRVUZCUlN4VFFVRlRMRFpDUVVFMlFpeEhRVUZGTEVkQlFVVTdRMEZCUXl4UFFVRlBMR1ZCUVdVc1IwRkJSU3d5UWtGQk1FSTdSVUZCUXl4WlFVRlhMRU5CUVVNN1JVRkJSU3hQUVVGTk8wZEJRVU1zUjBGQlJ6dEhRVUZGTEZkQlFWVTdSVUZCUXp0RFFVRkRMRU5CUVVNN1FVRkJRenRCUVVGRExGTkJRVk1zTWtKQlFUSkNMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzUlVGQlJUdERRVUV5UWl4SlFVRkhMRTFCUVVrc1MwRkJTeXhIUVVGRkxFMUJRVTBzVFVGQlRTeDVSa0ZCZVVZN1EwRkJSU3hQUVVGUE8wRkJRVU03UVVGQlF5eFRRVUZUTEhWQ1FVRjFRaXhIUVVGRk8wTkJRVU1zVDBGQlR5d3lRa0ZCTWtJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGQlNUdEJRVUZETEZOQlFWTXNlVUpCUVhsQ0xFZEJRVVU3UTBGQlF5eFBRVUZQTERKQ1FVRXlRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVUZMTzBGQlFVTXNVMEZCVXl3MlFrRkJOa0lzUjBGQlJUdERRVUZETEU5QlFVOHNNa0pCUVRKQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBGQlFWTTdPenRCUTBFeE1VSXNVMEZCVXl3eVFrRkJNa0lzUjBGQlJUdERRVUZETEU5QlFVOHNZVUZCWVN4UlFVRk5PMFZCUVVNc1IwRkJSeXhQUVVGUExGbEJRVmtzVDBGQlR5eFJRVUZSTEVOQlFVTXNRMEZCUXp0RlFVRkZMRTlCUVUwc1JVRkJSU3hWUVVGUkxFdEJRVXNzU1VGQlJTeExRVUZMTEVsQlFVVXNNa0pCUVRKQ0xFVkJRVVVzUzBGQlN6dEZRVUZGTEZOQlFWRXNSVUZCUlR0RlFVRlJMRTFCUVVzc1JVRkJSVHRGUVVGTExFOUJRVTBzUlVGQlJUdERRVUZMTEVsQlFVVTdRVUZCUXp0QlFVRkRMRk5CUVZNc2VVSkJRWGxDTEVkQlFVVTdRMEZCUXl4SlFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVVVzVDBGQlR5eE5RVUZOTEU5QlFVOHNRMEZCUXl4RFFVRkRPME5CUVVVc1NVRkJTU3hKUVVGRkxFOUJRVThzUlVGQlJTeFhRVUZUTEZkQlFWTXNSVUZCUlN4VlFVRlJMRTlCUVU4c1EwRkJReXhIUVVGRkxFbEJRVVVzVFVGQlRTeERRVUZETzBOQlFVVXNUMEZCVHl4RlFVRkZMRkZCUVUwc1lVRkJWeXhGUVVGRkxFOUJRVXNzUlVGQlJTeFBRVUZOTEU5QlFVOHNSVUZCUlN4VFFVRlBMR0ZCUVZjc1JVRkJSU3hSUVVGTkxFVkJRVVVzVVVGQlR5eFhRVUZWTEUxQlFVa3NSVUZCUlN4UlFVRk5MRk5CUVZNc1JVRkJSU3hMUVVGTExFbEJRVVVzZVVKQlFYbENMRVZCUVVVc1MwRkJTeXhKUVVGRkxFVkJRVVU3UTBGQlR5eEpRVUZKTEVsQlFVVTdRMEZCUlN4TFFVRkpMRWxCUVVjc1EwRkJReXhIUVVGRkxFMUJRVXNzVDBGQlR5eFJRVUZSTEVOQlFVTXNSMEZCUlN4TlFVRkpMR0ZCUVZjc1RVRkJTU3hWUVVGUkxFMUJRVWtzVjBGQlV5eE5RVUZKTEZsQlFWVXNSVUZCUlN4TFFVRkhPME5CUVVjc1QwRkJUenRCUVVGRE8wRkJRVU1zVTBGQlV5eFRRVUZUTEVkQlFVVTdRMEZCUXl4UFFVRlBMRTlCUVU4c1MwRkJSeXhaUVVGVkxFTkJRVU1zUTBGQlF6dEJRVUZET3pzN1FVTkJjSEpDTEUxQlFVMHNNa0pCUVhsQ08wRkJRWE5DTEZOQlFWTXNkVUpCUVhWQ0xFZEJRVVU3UTBGQlF5eFBRVUZQTEZkQlFWY3NlVUpCUVhsQ0xFVkJRVVVzU1VGQlNTeERRVUZETzBGQlFVTTdPenRCUTBGeFVTeGxRVUZsTEc5Q1FVRnZRaXhIUVVGRkxFZEJRVVU3UTBGQlF5eEpRVUZKTEVsQlFVVXNjMEpCUVhOQ0xFTkJRVU1zUjBGQlJTeEpRVUZGTERCQ1FVRXdRaXhIUVVGRkxFTkJRVU03UTBGQlJTdzJRa0ZCTmtJc1IwRkJSVHRGUVVGRExFMUJRVXM3UlVGQlJTeFBRVUZOTEVWQlFVVTdRMEZCU3l4RFFVRkRPME5CUVVVc1NVRkJSenRGUVVGRExFbEJRVWtzU1VGQlJTd3lRa0ZCTWtJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeG5Ra0ZCWXl4RlFVRkZMRTlCUVUwc1EwRkJReXhIUVVGRk8wVkJRVVVzU1VGQlJ5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFZEJRVVVzU1VGQlJTeE5RVUZOTzA5QlFVMDdSMEZCUXl4SlFVRkpMRWxCUVVVc1JVRkJSU3hQUVVGUExHTkJRV01zUTBGQlF5eEhRVUZGTEVkQlFVVXNTVUZCUlN4TlFVRk5MRVZCUVVVc1MwRkJTenRIUVVGRkxFOUJRVXNzUlVGQlJTeFRRVUZQTEVOQlFVTXNTVUZCUnp0SlFVRkRMRWxCUVVVc1JVRkJSVHRKUVVGTkxFbEJRVWtzU1VGQlJUdExRVUZETEUxQlFVczdTMEZCUlN4UlFVRlBMRVZCUVVVN1NVRkJTenRKUVVGRkxFMUJRVTBzWlVGQlpTeEZRVUZGTEUxQlFVMHNVVUZCVHl4RFFVRkRMRWRCUVVVc1NVRkJSU3hOUVVGTkxFVkJRVVVzUzBGQlN6dEhRVUZETzBkQlFVTXNTVUZCUlN4RlFVRkZMRk5CUVU4c1MwRkJSenRGUVVGSk8wVkJRVU1zVDBGQlRUdEhRVUZETEZGQlFVODdSMEZCUlN4UlFVRlBPMFZCUVZjN1EwRkJReXhUUVVGUExFZEJRVVU3UlVGQlF5eFBRVUZQTEVWQlFVVXNWVUZCVVR0SFFVRkRMRkZCUVU4c1JVRkJSU3hyUWtGQmEwSXNVVUZCVFN4RlFVRkZMRTlCUVU4c1ZVRkJVU3hQUVVGUExFVkJRVVVzVlVGQlVTeEZRVUZGTzBkQlFVVXNVVUZCVHp0RlFVRlhMRWxCUVVVN1IwRkJReXhQUVVGTkxESkNRVUV5UWl4RFFVRkRPMGRCUVVVc1VVRkJUenRGUVVGUk8wTkJRVU03UVVGQlF6dEJRVUZETEZOQlFWTXNjMEpCUVhOQ0xFZEJRVVU3UTBGQlF5eFBRVUZOTzBWQlFVTXNVVUZCVHl4RlFVRkZPMFZCUVU4c1YwRkJWU3hGUVVGRk8wVkJRVlVzVDBGQlRTeEZRVUZGTzBWQlFVMHNXVUZCVnl4RlFVRkZPMFZCUVZjc1QwRkJUU3hGUVVGRkxGTkJRVThzYjBKQlFXOUNMRU5CUVVNc1EwRkJRenRGUVVGakxGVkJRVk1zUlVGQlJTeFJRVUZSTEV0QlFVczdSVUZCVXl4WFFVRlZMRVZCUVVVN1JVRkJWU3hWUVVGVExFVkJRVVU3UlVGQlV5eFJRVUZQTEVWQlFVVXNVVUZCVVN4TFFVRkxPME5CUVVVN1FVRkJRenRCUVVGRExGTkJRVk1zTWtKQlFUSkNMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzZFVKQlFYVkNMRVZCUVVVc1ZVRkJWVHREUVVGRkxFbEJRVWNzVDBGQlR5eExRVUZITEZsQlFWY3NUVUZCVFN4TlFVRk5MRk5CUVZNc1JVRkJSU3hUUVVGVExIZEVRVUYzUkN4RlFVRkZMRmRCUVZjc01rUkJRVEpFTzBOQlFVVXNUMEZCVHp0QlFVRkRPMEZCUVVNc1UwRkJVeXd3UWtGQk1FSXNSMEZCUlN4SFFVRkZPME5CUVVNc1NVRkJTU3hsUVVGaExFZEJRVVVzVFVGQlNUdEZRVUZETEUxQlFVMHNUVUZCVFN4UFFVRlBMRVZCUVVVc05FTkJRVFJETEVWQlFVVXNWVUZCVlN4RlFVRkZMRk5CUVZNc01FVkJRVEJGTzBOQlFVTTdRMEZCUlN4UFFVRk5PMFZCUVVNc1lVRkJXVHRGUVVGRkxGRkJRVThzUlVGQlJUdEZRVUZQTEd0Q1FVRmxMRmxCUVZrc1owSkJRV1VzZVVOQlFYbERPMFZCUVVVc1owSkJRV0VzV1VGQldTeGpRVUZoTERaRFFVRTJRenRGUVVGRkxHZENRVUZoTEZsQlFWa3NZMEZCWVN4clJVRkJhMFU3UlVGQlJTeHRRa0ZCWjBJc1dVRkJXU3hwUWtGQlowSXNPRU5CUVRoRE8wVkJRVVVzVTBGQlVTeEZRVUZGTzBWQlFWRXNWVUZCVXl4RlFVRkZPME5CUVZFN1FVRkJRenRCUVVGRExGTkJRVk1zWjBKQlFXZENMRWRCUVVVN1EwRkJReXhQUVVGUExFOUJRVThzUzBGQlJ5eFpRVUZWTEVOQlFVTXNRMEZCUXl4TFFVRkhMRTlCUVU4c1JVRkJSU3hQUVVGUExHdENRVUZuUWp0QlFVRlZPenM3UVVOQk56QkZMRk5CUVZNc2IwSkJRVzlDTEVkQlFVVXNSMEZCUlR0RFFVRkRMRTlCUVUwN1JVRkJReXhUUVVGUk8wVkJRVVVzVlVGQlV5eEZRVUZGTEU5QlFVOHNZMEZCWXl4RFFVRkRPMFZCUVVVc1VVRkJUeXhEUVVGRE8wTkJRVU03UVVGQlF6dEJRVUZETEdWQlFXVXNhVUpCUVdsQ0xFZEJRVVVzUjBGQlJUdERRVUZETEZOQlFVODdSVUZCUXl4TFFVRkpMRWxCUVVrc1MwRkJTeXhIUVVGRk8wZEJRVU1zU1VGQlJ5eEZRVUZGTEZsQlFWVXNTMEZCU3l4SFFVRkZMRTFCUVUwc1JVRkJSU3hSUVVGUk8wZEJRVTBzU1VGQlNTeEpRVUZGTEVWQlFVVXNUMEZCVHl4TlFVRk5PMGRCUVVVc1NVRkJSeXhOUVVGSkxFdEJRVXNzUjBGQlJTeFBRVUZOTzBsQlFVTXNVMEZCVVN4RlFVRkZPMGxCUVZFc1RVRkJTenRIUVVGRE8wVkJRVU03UlVGQlF5eEpRVUZKTEVsQlFVVXNRMEZCUXp0RlFVRkZMRXRCUVVrc1NVRkJTU3hMUVVGTExFZEJRVVVzUlVGQlJTeFpRVUZWTEVWQlFVVXNVMEZCVXl4TFFVRkxMRU5CUVVNc1EwRkJReXhOUVVGTExFMUJRVWM3UjBGQlF5eEZRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVVc1JVRkJSU3hWUVVGUkxFdEJRVXM3UlVGQlF5eEpRVUZGTEUxQlFVYzdSMEZCUXl4RlFVRkZMRlZCUVZFc1JVRkJReXhQUVVGTkxFVkJRVU1zUjBGQlJTeEZRVUZGTEZWQlFWRXNTMEZCU3p0RlFVRkRMRU5CUVVNc1IwRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeFBRVUZQTzBWQlFVVXNTVUZCUnl4TlFVRkpMRXRCUVVzc1MwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZGTEUxQlFVMHNVVUZCVVN4TFFVRkxMRU5CUVVNc1RVRkJTU3hWUVVGVExFOUJRVTA3UTBGQlVUdEJRVUZET3pzN1FVTkJkazRzVTBGQlV5eHBRMEZCYVVNc1IwRkJSVHREUVVGRExFbEJRVWtzU1VGQlJTd3lRa0ZCTWtJc1EwRkJReXhIUVVGRkxFbEJRVVVzTUVKQlFUQkNMRTlCUVU4c1JVRkJReXhQUVVGTkxFVkJRVVVzVDBGQlRTeERRVUZETEVkQlFVVXNTVUZCUlN3eVFrRkJNa0lzVDBGQlR5eEZRVUZETEU5QlFVMHNSVUZCUlN4UlFVRlBMRU5CUVVNc1IwRkJSU3hKUVVGRkxESkNRVUV5UWl4UFFVRlBMRVZCUVVNc1QwRkJUU3hGUVVGRkxGRkJRVThzUTBGQlF6dERRVUZGTEU5QlFVMDdSVUZCUXl4VFFVRlJPMGRCUVVNc2IwSkJRVzlDTEZWQlFWTXNRMEZCUXp0SFFVRkZMRzlDUVVGdlFpeFhRVUZWTEVOQlFVTTdSMEZCUlN4dlFrRkJiMElzVjBGQlZTeERRVUZETzBWQlFVTTdSVUZCUlN4TlFVRk5MRlZCUVZNN1IwRkJReXhOUVVGTkxGbEJRVmtzUTBGQlF5eEhRVUZGTEUxQlFVMHNXVUZCV1N4RFFVRkRMRWRCUVVVc1RVRkJUU3haUVVGWkxFTkJRVU03UlVGQlF6dERRVUZETzBGQlFVTTdPenRCUTBFdlZTeE5RVUZCTERSQ1FVRXdRanM3TzBGRFFUbFRMRk5CUVZNc2JVTkJRVzFETEVkQlFVVTdRMEZCUXl4SlFVRkhMRVZCUVVNc1RVRkJTeXhIUVVGRkxGRkJRVThzVFVGQlJ6dERRVUZGTEU5QlFVOHNSVUZCUlN4WFFVRlRMR05CUVZrN1JVRkJReXhSUVVGUExFVkJRVVU3UlVGQlR5eE5RVUZMTzBWQlFXTXNVVUZCVHl4RlFVRkZPMFZCUVU4c1ZVRkJVeXhGUVVGRk8wTkJRVkVzU1VGQlJUdEZRVUZETEZGQlFVOHNSVUZCUlR0RlFVRlBMRk5CUVZFc1EwRkJRenRGUVVGRkxFMUJRVXM3UlVGQll5eFJRVUZQTEVWQlFVVXNWMEZCVXl4WFFVRlRMR0ZCUVdFc1JVRkJSU3hMUVVGTExFbEJRVVVzUlVGQlJTeFZRVUZSTzBWQlFYVkRMRlZCUVZNc1JVRkJSVHREUVVGUk8wRkJRVU03UVVGQlF5eFRRVUZUTEhWRFFVRjFReXhIUVVGRk8wTkJRVU1zU1VGQlJ5eEZRVUZGTEU5QlFVOHNWMEZCVXl4bFFVRmhMSGRDUVVGM1FpeEZRVUZGTEU5QlFVOHNUVUZCVFN4SFFVRkZMRTlCUVU4c1JVRkJSU3hQUVVGUE8wTkJRVThzU1VGQlNTeEpRVUZGTEVWQlFVVXNUMEZCVHl4WFFVRlRMRmRCUVZNc1lVRkJZU3hGUVVGRkxFOUJRVThzUzBGQlN5eEpRVUZGTEVWQlFVVXNUMEZCVHl4WFFVRlRMR05CUVZrc1JVRkJSU3hQUVVGUExGVkJRVkVzZDBOQlFYTkRPME5CUVcxRUxFOUJRVTA3UlVGQlF5eFJRVUZQTEVWQlFVVXNTMEZCU3p0RlFVRlBMRk5CUVZFc1EwRkJRenRGUVVGRkxFMUJRVXM3UlVGQmEwSXNVVUZCVHp0RlFVRlhMRkZCUVU4N1JVRkJSU3hqUVVGaExFVkJRVVVzUzBGQlN6dERRVUZSTzBGQlFVTTdRVUZCUXl4VFFVRlRMRzlEUVVGdlF5eEhRVUZGTzBOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1YwRkJVeXhqUVVGWk8wVkJRVU1zVFVGQlN5eEZRVUZGTEU5QlFVODdSVUZCVHl4TlFVRkxPME5CUVZVc1NVRkJSU3hGUVVGRkxFOUJRVThzVjBGQlV5eFhRVUZUTzBWQlFVTXNUVUZCU3l4RlFVRkZMRXRCUVVzc1pVRkJZU3hoUVVGWExITkNRVUZ6UWl4RlFVRkZMRTlCUVU4c1MwRkJTeXhKUVVGRkxHRkJRV0VzUlVGQlJTeFBRVUZQTEV0QlFVczdSVUZCUlN4TlFVRkxPME5CUVUwc1NVRkJSU3hGUVVGRExFMUJRVXNzVTBGQlVUdEJRVUZETzBGQlFVTXNVMEZCVXl4elFrRkJjMElzUjBGQlJUdERRVUZETEVsQlFVa3NTVUZCUlN3d1FrRkJNRUlzUTBGQlF6dERRVUZGTEU5QlFVOHNUVUZCU1N4TFFVRkxMRXRCUVVjc1QwRkJUeXhMUVVGSExGbEJRVlVzUzBGQlJ5eERRVUZETEUxQlFVMHNVVUZCVVN4RFFVRkRMRXRCUVVjc1QwRkJUeXhSUVVGUkxFbEJRVWtzUjBGQlJTeE5RVUZOTEV0QlFVY3NWMEZCVXl4SlFVRkZPMFZCUVVNc1RVRkJTenRGUVVFd1FpeFRRVUZSTEdGQlFXRXNRMEZCUXp0RFFVRkRPMEZCUVVNN1FVRkJReXhUUVVGVExHdERRVUZyUXl4SFFVRkZMRWRCUVVVc1IwRkJSVHREUVVGRExFOUJRVTA3UlVGQlF5eFJRVUZQTEVWQlFVVXNTMEZCU3p0RlFVRlBMRTFCUVVzN1JVRkJZeXhUUVVGUkxFOUJRVThzUlVGQlJTeFZRVUZSTEZkQlFWTXNSVUZCUlN4VFFVRlBMRXRCUVVzc1ZVRkJWU3hGUVVGRkxFMUJRVTA3UlVGQlJTeGhRVUZaTzBWQlFVVXNZVUZCV1R0RFFVRkRPMEZCUVVNN1FVRkJReXhUUVVGVExIZENRVUYzUWl4SFFVRkZPME5CUVVNc1NVRkJSeXhQUVVGUExFdEJRVWNzV1VGQlZTeERRVUZETEVkQlFVVXNUMEZCVFN4RFFVRkRPME5CUVVVc1NVRkJTU3hKUVVGRkxGRkJRVkVzU1VGQlNTeEhRVUZGTEZGQlFWRTdRMEZCUlN4UFFVRlBMRkZCUVZFc1NVRkJTU3hIUVVGRkxFMUJRVTBzVFVGQlNTeHpRa0ZCYjBJc1RVRkJTU3hYUVVGVExFMUJRVWs3UVVGQlZ6dEJRVUZETEZOQlFWTXNZVUZCWVN4SFFVRkZPME5CUVVNc1NVRkJSeXhQUVVGUExFdEJRVWNzV1VGQlZTeExRVUZITEdGQlFWa3NSMEZCUlR0RlFVRkRMRWxCUVVrc1NVRkJSU3hGUVVGRk8wVkJRVkVzU1VGQlJ5eFBRVUZQTEV0QlFVY3NWVUZCVXl4UFFVRlBPME5CUVVNN1EwRkJReXhQUVVGUExFOUJRVThzUTBGQlF6dEJRVUZETzBGQlFVTXNVMEZCVXl3d1FrRkJNRUlzUjBGQlJUdERRVUZETEVsQlFVYzdSVUZCUXl4UFFVRlBMR1ZCUVdVc1EwRkJRenREUVVGRExGRkJRVTA3UlVGQlF6dERRVUZOTzBGQlFVTTdRVUZCUXl4VFFVRlRMRFJEUVVFMFF5eEhRVUZGTzBOQlFVTXNTVUZCUnl4RlFVRkRMRTFCUVVzc1IwRkJSU3hUUVVGUkxFZEJRVVVzVTBGQlVTeEhRVUZGTEc5Q1FVRnRRaXhOUVVGSE8wTkJRVVVzVDBGQlRUdEZRVUZETEZGQlFVOHNSVUZCUlR0RlFVRlBMSGRDUVVGMVFqdEZRVUZGTEdkQ1FVRmxMRVZCUVVVN1JVRkJUU3hQUVVGTk8wZEJRVU1zVlVGQlV5eEZRVUZGTEZOQlFVOHNaMEpCUVdNc1JVRkJSU3hYUVVGVExFTkJRVU1zYzBKQlFYTkNMRWRCUVVVc1IwRkJSU3hEUVVGRExFTkJRVU03UjBGQlJTeFZRVUZUTEVkQlFVY3NXVUZCVlN4RlFVRkZPMGRCUVZNc1YwRkJWU3hIUVVGSExHRkJRVmNzUlVGQlJUdEhRVUZWTEZGQlFVOHNSMEZCUnl4VlFVRlJMRVZCUVVVN1JVRkJUVHRGUVVGRkxFMUJRVXM3UlVGQmVVSXNZMEZCWVN4RlFVRkZPME5CUVZFN1FVRkJRenRCUVVGRExGTkJRVk1zZVVOQlFYbERMRWRCUVVVN1EwRkJReXhKUVVGSExFVkJRVU1zVFVGQlN5eEhRVUZGTEZOQlFWRXNSMEZCUlN4VFFVRlJMRWRCUVVVc2IwSkJRVzFDTEUxQlFVY3NSMEZCUlN4SlFVRkZPMFZCUVVNc1RVRkJTenRGUVVGeFFpeFRRVUZSTzBWQlFVVXNWVUZCVXl4SFFVRkhMRmxCUVZVc1JVRkJSVHRGUVVGVExGZEJRVlVzUjBGQlJ5eGhRVUZYTEVWQlFVVTdSVUZCVlN4UlFVRlBMRWRCUVVjc1ZVRkJVU3hGUVVGRk8wTkJRVTA3UTBGQlJTeFBRVUZQTEVWQlFVVXNVMEZCVHl4blFrRkJZenRGUVVGRExFZEJRVWM3UlVGQlJTeFZRVUZUTEVWQlFVVTdRMEZCVVN4SlFVRkZPMFZCUVVNc1IwRkJSenRGUVVGRkxGTkJRVkVzYzBKQlFYTkNMRWRCUVVVc1IwRkJSU3hEUVVGRE8wTkJRVU03UVVG",
	"QlF6dEJRVUZETEZOQlFWTXNjMEpCUVhOQ0xFZEJRVVVzUjBGQlJTeEhRVUZGTzBOQlFVTXNVVUZCVHl4RlFVRkZMRTFCUVZRN1JVRkJaU3hMUVVGSk8wVkJRV1VzUzBGQlNTeHBRa0ZCWjBJc1RVRkJUU3hWUVVGVkxDdEVRVUVyUkR0RlFVRkZMRXRCUVVrc2VVSkJRWGRDTEUxQlFVMHNWVUZCVlN4eFJVRkJjVVU3UlVGQlJTeExRVUZKTEU5QlFVMHNUMEZCVHl4dlFrRkJiMElzUlVGQlJTeFRRVUZSTEVkQlFVVXNRMEZCUXp0RlFVRkZMRk5CUVZFc1QwRkJUenREUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEc5Q1FVRnZRaXhIUVVGRkxFZEJRVVVzUjBGQlJUdERRVUZETEVsQlFVY3NUMEZCVHl4RlFVRkZMRlZCUVZFc1dVRkJWU3hGUVVGRkxFOUJRVThzVjBGQlV5eEhRVUZGTEUxQlFVMHNWVUZCVlN4NVJFRkJlVVE3UTBGQlJTeEpRVUZKTEVsQlFVVTdSVUZCUXl4UlFVRlBPMGRCUVVNc1VVRkJUeXhGUVVGRk8wZEJRVThzVDBGQlRTeEZRVUZGTzBkQlFVMHNUVUZCU3p0SFFVRlpMRlZCUVZNc1JVRkJSVHRGUVVGUk8wVkJRVVVzVFVGQlN6dEZRVUZYTEZGQlFVOHNSVUZCUlR0RlFVRlBMRmRCUVZVN1EwRkJRenREUVVGRkxFOUJRVThzUlVGQlJTeHJRa0ZCWjBJc1MwRkJTeXhOUVVGSkxFVkJRVVVzWjBKQlFXTXNSVUZCUlN4blFrRkJaU3hGUVVGRkxGbEJRVlVzUzBGQlN5eE5RVUZKTEVWQlFVVXNWVUZCVVN4RlFVRkZMRlZCUVZNc1JVRkJSU3haUVVGVkxFdEJRVXNzVFVGQlNTeEZRVUZGTEZWQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1QwRkJUeXhKUVVGSE8wRkJRVU03T3p0QlEwRXhORWNzVTBGQlV5eGhRVUZoTEVkQlFVVXNSMEZCUlN4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRkxGZEJRVlVzU1VGQlJTeEZRVUZGTEZGQlFVMHNTMEZCU3l4SFFVRkZMRWxCUVVVN1JVRkJReXhWUVVGVExFVkJRVVU3UlVGQlV5eFZRVUZUTEVWQlFVVTdSVUZCVXl4UlFVRlBMRVZCUVVVN1EwRkJUVHREUVVGRkxGRkJRVThzVFVGQlNTeExRVUZMTEUxQlFVa3NSVUZCUlN4UlFVRk5MRWxCUVVjc1JVRkJSU3hSUVVGcVF6dEZRVUY1UXl4TFFVRkpMR0ZCUVZrc1QwRkJUVHRIUVVGRExFZEJRVWM3UjBGQlJTeFpRVUZYTEVWQlFVVTdSMEZCVnl4UlFVRlBPMFZCUVZjN1JVRkJSU3hMUVVGSkxGVkJRVk1zVDBGQlRUdEhRVUZETEVkQlFVYzdSMEZCUlN4WlFVRlhMRVZCUVVVN1IwRkJWeXhSUVVGUE8wVkJRVkU3UlVGQlJTeExRVUZKTEdGQlFWa3NUMEZCVFR0SFFVRkRMRWRCUVVjN1IwRkJSU3hSUVVGUE8wVkJRVmM3UTBGQlF6dEJRVUZETzBGQlFVTXNVMEZCVXl4dlFrRkJiMElzUjBGQlJTeEhRVUZGTzBOQlFVTXNTVUZCUnl4RlFVRkZMRk5CUVU4c1VVRkJUenRGUVVGRExFbEJRVWtzU1VGQlJTeEZRVUZGTEZWQlFWVTdSVUZCVVN4UFFVRlBMRTFCUVVrc1MwRkJTeXhMUVVGSExFVkJRVVVzVTBGQlR5eEZRVUZGTEZOQlFWTXNVVUZCVFN4blFrRkJaMElzUlVGQlJTeE5RVUZMTEVWQlFVVXNVMEZCVXl4SlFVRkpMRWxCUVVVN1IwRkJReXhSUVVGUE8wZEJRVThzVFVGQlN6dEZRVUZETEVsQlFVVXNUVUZCU1N4TFFVRkxMRWxCUVVVN1IwRkJReXhSUVVGUE8wZEJRVmNzVFVGQlN6dEpRVUZETEVkQlFVYzdTVUZCUlN4VlFVRlRPMHRCUVVNc1IwRkJSeXhGUVVGRk8wdEJRVk1zVTBGQlVTeEZRVUZGTzBsQlFWRTdSMEZCUXp0RlFVRkRMRWxCUVVVN1IwRkJReXhSUVVGUE8wZEJRVmNzVVVGQlR5eFRRVUZUTEVWQlFVVXNUMEZCVHp0SFFVRnZReXhOUVVGTE8wVkJRVU03UTBGQlF6dERRVUZETEVsQlFVY3NjVUpCUVhGQ0xFVkJRVVVzVFVGQlRTeEhRVUZGTEU5QlFVOHNSVUZCUlN4VFFVRlBMRmxCUVZVc1JVRkJSU3hYUVVGVExHTkJRVms3UlVGQlF5eFJRVUZQTzBWQlFVOHNUVUZCU3p0RFFVRkRMRWxCUVVVN1JVRkJReXhSUVVGUE8wVkJRVmNzVVVGQlR5eFRRVUZUTEVWQlFVVXNUMEZCVHl4bFFVRmxMRVZCUVVVc1QwRkJUeXhMUVVGTExFVkJRVVVzUzBGQlN6dEZRVUZyUXl4TlFVRkxPME5CUVVNN1EwRkJSU3hSUVVGUExFVkJRVVVzVFVGQlZEdEZRVUZsTEV0QlFVa3NXVUZCVnl4UFFVRk5PMGRCUVVNc1VVRkJUenRIUVVGWExFMUJRVXNzWVVGQllTeEhRVUZGTEVkQlFVVTdTVUZCUXl4WlFVRlhPMHRCUVVNc1RVRkJTeXhGUVVGRk8wdEJRVXNzVFVGQlN6dEpRVUZSTzBsQlFVVXNVVUZCVHp0SFFVRlhMRU5CUVVNN1JVRkJRenRGUVVGRkxFdEJRVWs3UlVGQlR5eExRVUZKTEcxQ1FVRnJRaXhQUVVGTk8wZEJRVU1zVVVGQlR6dEhRVUZYTEUxQlFVc3NZVUZCWVN4SFFVRkZMRWRCUVVVN1NVRkJReXhaUVVGWE8wdEJRVU1zVFVGQlN5eEZRVUZGTzB0QlFVc3NUVUZCU3p0SlFVRlBPMGxCUVVVc1VVRkJUenRIUVVGUkxFTkJRVU03UlVGQlF6dEZRVUZGTEV0QlFVa3NWVUZCVXl4UFFVRk5PMGRCUVVNc1VVRkJUenRIUVVGWExFMUJRVXNzWVVGQllTeEhRVUZGTEVkQlFVVXNSVUZCUXl4UlFVRlBMRmxCUVZjc1EwRkJRenRGUVVGRE8wVkJRVVVzUzBGQlNTeHBRa0ZCWjBJc1QwRkJUeXg1UWtGQmVVSXNSVUZCUlN4aFFVRmhMRWxCUVVVN1IwRkJReXhSUVVGUE8wZEJRVmNzVFVGQlN6dEpRVUZETEdWQlFXTXNSVUZCUlR0SlFVRmpMRlZCUVZNc1JVRkJSVHRKUVVGVExGVkJRVk1zUlVGQlJUdEpRVUZUTEZGQlFVODdTVUZCYVVJc1VVRkJUeXhGUVVGRk8wZEJRVTA3UlVGQlF5eEpRVUZGTzBkQlFVTXNVVUZCVHp0SFFVRlhMRkZCUVU4c1UwRkJVeXhGUVVGRkxFOUJRVTg3UjBGQk5FTXNUVUZCU3p0RlFVRkRPMFZCUVVVc1MwRkJTU3hUUVVGUkxFOUJRVTA3UjBGQlF5eFJRVUZQTzBkQlFWY3NUVUZCU3p0RlFVRkRPMFZCUVVVc1MwRkJTU3haUVVGWE8wZEJRVU1zU1VGQlJ5eEZRVUZGTEZkQlFWTXNhMEpCUVdsQ0xFOUJRVTA3U1VGQlF5eFJRVUZQTzBsQlFVOHNUVUZCU3p0SFFVRkRPMGRCUVVVc1NVRkJTU3hKUVVGRkxFbEJRVWtzU1VGQlNTeEZRVUZGTEZWQlFWVXNSMEZCUlN4SlFVRkZMRVZCUVVVc1kwRkJZeXhSUVVGUExFMUJRVWM3U1VGQlF5eEpRVUZKTEVsQlFVVXNkVUpCUVhWQ0xFTkJRVU03U1VGQlJTeFBRVUZQTEUxQlFVa3NTMEZCU3l4TFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU03UjBGQlF5eERRVUZETzBkQlFVVXNUMEZCVHl4RlFVRkZMRmRCUVZNc1JVRkJSU3hqUVVGakxGTkJRVTg3U1VGQlF5eFJRVUZQTzBsQlFVOHNUVUZCU3p0SFFVRkRMRWxCUVVVc1JVRkJSU3hUUVVGUExFbEJRVVU3U1VGQlF5eFJRVUZQTzBsQlFWY3NUVUZCU3p0TFFVRkRMRWRCUVVjN1MwRkJSU3hsUVVGak8wbEJRVU03UjBGQlF5eEpRVUZGTzBsQlFVTXNVVUZCVHp0SlFVRlhMRTFCUVVzN1MwRkJReXhWUVVGVExFVkJRVVU3UzBGQlV5eFZRVUZUTEVWQlFVVTdTMEZCVXl4UlFVRlBPMHRCUVZVc1VVRkJUeXhGUVVGRk8wbEJRVTA3UjBGQlF6dEZRVUZETzBOQlFVTTdRVUZCUXp0QlFVRkRMRk5CUVZNc2VVSkJRWGxDTEVkQlFVVTdRMEZCUXl4SlFVRkhMRVZCUVVVc1YwRkJVeXhIUVVGRkxFOUJRVTBzUTBGQlF6dERRVUZGTEVsQlFVa3NTVUZCUlN4RlFVRkZMRWxCUVVrc2MwSkJRWE5DTzBOQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVUwc1RVRkJSeXhOUVVGSkxFdEJRVXNzUzBGQlJ5eEZRVUZGTEZOQlFVOHNRMEZCUXl4TFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZQTEVWQlFVVTdRVUZCVFRzN08wRkRRemw0UXl4bFFVRmxMR2RDUVVGblFpeEhRVUZGTzBOQlFVTXNTVUZCU1N4SlFVRkZMRmRCUVZjc1JVRkJReXhQUVVGTkxFVkJRVVVzWlVGQll5eERRVUZETEVkQlFVVXNTVUZCUlN4cFEwRkJhVU1zUlVGQlJTeGpRVUZqTEVkQlFVVXNTVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hUUVVGUkxHOUNRVUZ2UWl4WlFVRlhMRU5CUVVNc1EwRkJReXhIUVVGRkxFbEJRVVVzUTBGQlF5eEhRVUZGTEVsQlFVVXNSVUZCUlN4aFFVRlpMRWxCUVVVc1EwRkJReXhIUVVGRkxFbEJRVVVzUTBGQlF5eEhRVUZGTEVkQlFVVXNTVUZCUlN4RFFVRkRMRWRCUVVVc1NVRkJSU3hIUVVGRkxFbEJRVVVzUlVGQlF5eGxRVUZqTEVOQlFVTXNSVUZCUXl4SFFVRkZMRWxCUVVVc1NVRkJTU3hKUVVGRkxFZEJRVVVzU1VGQlJTeEpRVUZKTEdkQ1FVRmpMRWRCUVVVc1IwRkJSU3hKUVVGRkxFVkJRVVVzWVVGQlZ5eExRVUZMTzBOQlFVVXNTVUZCUnp0RlFVRkRMRWxCUVVjN1IwRkJReXhOUVVGTkxHMUNRVUZ0UWl4RFFVRkRMRWRCUVVVc1NVRkJSU3hEUVVGRE8wVkJRVU1zVTBGQlR5eEhRVUZGTzBkQlFVTXNTVUZCUnl4dlFrRkJiMElzUTBGQlF5eEhRVUZGTzBkQlFVOHNUVUZCVFR0RlFVRkRPMFZCUVVNc1MwRkJTU3hOUVVGTkxHMUNRVUZ0UWp0SFFVRkRMR3RDUVVGcFFpeEZRVUZGTzBkQlFXbENMRTFCUVVzN1JVRkJReXhEUVVGRExFZEJRVVVzUTBGQlF5eFhRVUZYTEVsQlFVYzdSMEZCUXl4SlFVRkpMRWxCUVVVc1RVRkJUU3hwUWtGQmFVSXNUVUZCU1N4TFFVRkxMRWxCUVVVc1NVRkJSU3hEUVVGRExFZEJRVWNzUjBGQlJTeERRVUZETEVOQlFVTTdSMEZCUlN4SlFVRkhMRVZCUVVVc1dVRkJWU3hSUVVGUE8wbEJRVU1zU1VGQlJ5eEpRVUZGTEVOQlFVTXNSMEZCUlN4SlFVRkZMRXRCUVVzc1IwRkJSU3hGUVVGRkxFdEJRVXNzVFVGQlN6dEpRVUZUTEUxQlFVMHNZVUZCWVR0TFFVRkRMRk5CUVZFc2IwTkJRVzlETzAxQlFVTXNUVUZCU3l4elFrRkJjMEk3VDBGQlF5eEhRVUZITEVWQlFVVTdUMEZCVXl4WFFVRlZPMDFCUVZrc1EwRkJRenROUVVGRkxGRkJRVThzUlVGQlJTeExRVUZMTzB0QlFVc3NRMEZCUXp0TFFVRkZMRTFCUVVzN1NVRkJZeXhEUVVGRExFZEJRVVVzUlVGQlJTeFhRVUZUTEdWQlFXRXNTMEZCUnl4RFFVRkRMRXRCUVVjc1RVRkJUU3h0UWtGQmJVSTdTMEZCUXl4UFFVRk5MRVZCUVVVN1MwRkJkMElzVFVGQlN6dEpRVUZETEVOQlFVTTdTVUZCUlR0SFFVRlJPMGRCUVVNc1NVRkJSeXhGUVVGRkxFdEJRVXNzVFVGQlN6dEhRVUZQTEVsQlFVY3NSVUZCUlN4WlFVRlZMRlZCUVZNN1NVRkJReXhOUVVGTkxHRkJRV0VzYTBOQlFXdERMRVZCUVVVc1MwRkJTeXhQUVVGTkxFVkJRVVVzVVVGQlR5eEhRVUZITEVOQlFVTTdTVUZCUlR0SFFVRlJPMGRCUVVNc1NVRkJSeXhGUVVGRkxGbEJRVlVzVjBGQlZUdEpRVUZETEUxQlFVMHNZVUZCWVR0TFFVRkRMRk5CUVZFc2IwTkJRVzlETEVWQlFVVXNTMEZCU3l4TFFVRkxPMHRCUVVVc1RVRkJTenRKUVVGakxFTkJRVU03U1VGQlJUdEhRVUZSTzBkQlFVTXNTVUZCUnl4RlFVRkZMRmxCUVZVc1YwRkJWVHRKUVVGRExFbEJRVWtzU1VGQlJTeEZRVUZGTEV0QlFVc3NUMEZCVFN4SlFVRkZMRVZCUVVVc1VVRkJVVHRKUVVGTExFbEJRVWNzVFVGQlNTeHJRa0ZCWjBJc1RVRkJTU3h0UWtGQmFVSXNUVUZCU1N4NVFrRkJkMEk3UzBGQlF5eE5RVUZOTEcxQ1FVRnRRaXhEUVVGRE8wdEJRVVU3U1VGQlVUdEpRVUZETEVWQlFVVXNkVUpCUVhGQ0xFdEJRVXNzUzBGQlJ5eEZRVUZGTEVsQlFVa3NSVUZCUlN4VFFVRlJMRVZCUVVNc1QwRkJUU3hGUVVGRkxFdEJRVXNzVFVGQlN5eERRVUZETEVkQlFVVXNUVUZCVFN4aFFVRmhMSGxEUVVGNVF5eERRVUZETEVOQlFVTTdTVUZCUlR0SFFVRlJPMGRCUVVNc1RVRkJUU3hoUVVGaExFVkJRVVVzUzBGQlN5eExRVUZMTzBWQlFVTTdRMEZCUXl4VlFVRlJPMFZCUVVNc1RVRkJTU3hOUVVGTkxFVkJRVVVzVVVGQlVTeEhRVUZGTEUxQlFVMHNXVUZCV1N4RFFVRkRPME5CUVVVN1EwRkJReXhUUVVGVExHRkJRVms3UlVGQlF5eFBRVUZQTEhGQ1FVRnhRaXhGUVVGRkxFMUJRVTBzUzBGQlJ5eExRVUZITzBOQlFVTTdRMEZCUXl4bFFVRmxMR0ZCUVdFc1IwRkJSVHRGUVVGRExFdEJRVWNzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hOUVVGTkxFbEJRVVVzVFVGQlRTeDVRa0ZCZVVJN1IwRkJReXhQUVVGTkxFVkJRVVU3UjBGQmQwSXNVVUZCVHp0SFFVRkZMRTFCUVVzN1JVRkJReXhEUVVGRExFbEJRVVVzUlVGQlJTeExRVUZMTEVOQlFVTTdRMEZCUXp0RFFVRkRMR1ZCUVdVc1lVRkJZU3hIUVVGRk8wVkJRVU1zU1VGQlNTeEpRVUZGTEVWQlFVVXNVMEZCVHl4clFrRkJaMElzUlVGQlJTeFJRVUZSTEZOQlFVOHNVMEZCVVN4SlFVRkZMRVZCUVVVc1UwRkJUeXhyUWtGQlowSXNSVUZCUlN4UlFVRlJMRk5CUVU4N1JVRkJhMElzUzBGQlNTeExRVUZITEU5QlFVc3NTVUZCUlN4RFFVRkRMRWxCUVVjc1RVRkJTU3hKUVVGRkxFTkJRVU1zUzBGQlNTeExRVUZITEU5QlFVc3NTMEZCUnl4eFFrRkJjVUlzUlVGQlJTeE5RVUZOTEVsQlFVVXNTVUZCUlN4RFFVRkRMRWxCUVVVc1JVRkJSU3hoUVVGWExFdEJRVXNzUzBGQlJ5eE5RVUZKTEV0QlFVc3NTMEZCUnl4RFFVRkRMRTFCUVVrc1NVRkJSU3h2UWtGQmIwSXNVVUZCVHl4blFrRkJaMElzYjBKQlFXOUNPMGRCUVVNc1IwRkJSeXhGUVVGRk8wZEJRVk1zVjBGQlZUdEhRVUZoTEU5QlFVMHNNa0pCUVRKQ0xFVkJRVVVzWTBGQll6dEZRVUZETEVkQlFVVXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSExFMUJRVTBzYjBKQlFXOUNMRWxCUVVjc1JVRkJSU3hUUVVGUExIbENRVUYxUWl4SlFVRkZMRWxCUVVjc1JVRkJSU3hUUVVGUExHVkJRV003UjBGQlF5eE5RVUZOTEdGQlFXRXNRMEZCUXp0SFFVRkZPMFZCUVUwN1JVRkJReXhKUVVGSk8wVkJRVVVzU1VGQlJ5eEZRVUZGTEZOQlFVOHNhMEpCUVdsQ0xFbEJRVVVzUlVGQlJTeFhRVUZUTEcxQ1FVRnBRaXhOUVVGTkxIVkNRVUYxUWl4SFFVRkZMRWRCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzYzBKQlFYTkNMRU5CUVVNc1NVRkJSU3hMUVVGTE8wOUJRVThzU1VGQlJ5eEZRVUZGTEZOQlFVOHNjMEpCUVhGQ0xFbEJRVVU3UjBGQlF5eGxRVUZqTEVWQlFVVXNXVUZCVlN4RFFVRkRMRVZCUVVVc1QwRkJUenRIUVVGRkxFMUJRVXM3UlVGQlpUdFBRVUZQTEVsQlFVY3NSVUZCUlN4VFFVRlBMR2RDUVVGbExFbEJRVVVzUlVGQlJUdFBRVUZoTzBWQlFVOHNTVUZCUnl4TlFVRkpMRXRCUVVzc1IwRkJSVHRGUVVGUExFbEJRVWNzUzBGQlJ5eHhRa0ZCY1VJc1JVRkJSU3hOUVVGTkxFZEJRVVU3UjBGQlF5eE5RVUZOTEdGQlFXRXNRMEZCUXl4RFFVRkRMRWRCUVVVc1RVRkJUU3h0UWtGQmJVSTdTVUZCUXl4UFFVRk5MRVZCUVVVN1NVRkJkMElzVFVGQlN6dEhRVUZETEVOQlFVTTdSMEZCUlR0RlFVRk5PMFZCUVVNc1NVRkJTU3hKUVVGRkxFZEJRVVVzU1VGQlJTeHZRa0ZCYjBJc1IwRkJSU3hEUVVGRE8wVkJRVVVzUlVGQlJTeFhRVUZUTEdWQlFXRXNTVUZCUlN4RlFVRkZMRTFCUVVzc1RVRkJUU3h0UWtGQmJVSTdSMEZCUXl4clFrRkJhVUlzUlVGQlJUdEhRVUZwUWl4TlFVRkxPMFZCUVVNc1EwRkJReXhIUVVGRkxFVkJRVVVzVTBGQlR5eGhRVUZYTEVWQlFVVXNUVUZCVFN4TlFVRk5MRkZCUVZFc1JVRkJSU3hQUVVGUExHZENRVUZuUWl4RFFVRkRMRWRCUVVVc1RVRkJTU3hMUVVGTExFMUJRVWtzU1VGQlJTeERRVUZETEV0QlFVa3NjVUpCUVhGQ0xFVkJRVVVzVFVGQlRTeExRVUZITEUxQlFVMHNZVUZCWVN4SFFVRkZMRTFCUVVrc1MwRkJTeXhMUVVGSExFdEJRVWNzUlVGQlJTeFhRVUZUTEc5Q1FVRnJRaXhOUVVGTkxIVkRRVUYxUXp0SFFVRkRMRk5CUVZFN1IwRkJSU3hSUVVGUExFVkJRVVU3UjBGQlR5eFBRVUZOTEVWQlFVVTdSVUZCZFVJc1EwRkJReXhIUVVGRkxFbEJRVVVzUzBGQlN5eExRVUZITEVOQlFVTXNTMEZCUnl4TlFVRkpMRVZCUVVVc1UwRkJUeXhaUVVGVkxFOUJRVXNzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hOUVVGTkxFdEJRVWNzY1VKQlFYRkNMRVZCUVVVc1RVRkJUU3hMUVVGSExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1RVRkJUU3hMUVVGSExHdENRVUZyUWl4RlFVRkZMRTFCUVUwc1MwRkJSeXhOUVVGSkxFdEJRVXNzVFVGQlNTeE5RVUZOTEcxQ1FVRnRRanRIUVVGRExFOUJRVTBzUlVGQlJUdEhRVUYzUWl4TlFVRkxPMFZCUVVNc1EwRkJReXhIUVVGRkxFVkJRVVVzVjBGQlV5eHhRa0ZCYlVJc1NVRkJSU3hMUVVGTE8wTkJRVWM3UTBGQlF5eGxRVUZsTEdGQlFXRXNTVUZCUlN4RFFVRkRMRWRCUVVVN1JVRkJReXhKUVVGSExFVkJRVVVzUTBGQlF5eExRVUZITEhGQ1FVRnhRaXhGUVVGRkxFMUJRVTBzUzBGQlJ5eERRVUZETEVsQlFVYzdSMEZCUXl4TFFVRkpMRWxCUVVrc1MwRkJTeXhIUVVGRkxFMUJRVTBzZVVKQlFYbENPMGxCUVVNc1QwRkJUU3hGUVVGRk8wbEJRWGRDTEZGQlFVODdTVUZCUlN4TlFVRkxPMGRCUVVNc1EwRkJRenRIUVVGRkxFbEJRVVVzUTBGQlF6dEZRVUZETzBOQlFVTTdRMEZCUXl4bFFVRmxMRzFDUVVGdFFpeEhRVUZGTzBWQlFVTXNTVUZCUnl4RlFVRkZMRXRCUVVjc2NVSkJRWEZDTEVWQlFVVXNUVUZCVFN4SlFVRkhPMGRCUVVNc1NVRkJSeXhEUVVGRExFZEJRVVU3U1VGQlF5eEZRVUZGTEdOQlFXTXNTMEZCU3l4RFFVRkRPMGxCUVVVN1IwRkJUVHRIUVVGRExFMUJRVTBzTWtKQlFUSkNMRU5CUVVNN1JVRkJRenREUVVGRE8wTkJRVU1zWlVGQlpTeHpRa0ZCY1VJN1JVRkJReXhKUVVGSExFTkJRVU1zUjBGQlJTeExRVUZKTEVsQlFVa3NTMEZCU3l4RlFVRkZMR1ZCUVdNc1RVRkJUU3d5UWtGQk1rSXNRMEZCUXp0RlFVRkZMRVZCUVVVc1kwRkJZeXhUUVVGUE8wTkJRVU03UTBGQlF5eGxRVUZsTERKQ1FVRXlRaXhIUVVGRk8wVkJRVU1zU1VGQlJ5eEZRVUZGTEZGQlFWRXNVMEZCVHl4NVFrRkJkMEk3UjBGQlF5eE5RVUZOTEdkRFFVRm5RenRKUVVGRExGTkJRVkVzUlVGQlJUdEpRVUZSTEZGQlFVOHNSVUZCUlR0SlFVRlBMRTlCUVUwc1JVRkJSVHRIUVVGMVFpeERRVUZETzBkQlFVVTdSVUZCVFR0RlFVRkRMRTFCUVUwc0swSkJRU3RDTzBkQlFVTXNVMEZCVVR0SFFVRkZMRkZCUVU4c1JVRkJSVHRIUVVGUExFOUJRVTBzUlVGQlJUdEZRVUYxUWl4RFFVRkRPME5CUVVNN1FVRkJRenRCUVVGRExHZENRVUZsTEdkQ1FVRm5RaXhIUVVGRk8wTkJRVU1zVFVGQlRTeE5RVUZOTzBGQlFVTTdRVUZCUXl4bFFVRmxMSFZDUVVGMVFpeEhRVUZGTEVkQlFVVXNSMEZCUlR0RFFVRkRMRWxCUVVjc1JVRkJSU3hYUVVGVExFVkJRVVVzVVVGQlR6dERRVUZQTEVsQlFVa3NTVUZCUlN4SlFVRkpMRWxCUVVrc1JVRkJSU3hqUVVGakxGTkJRVkVzVFVGQlJ6dEZRVUZETEVsQlFVa3NTVUZCUlN4MVFrRkJkVUlzUTBGQlF6dEZRVUZGTEU5QlFVOHNUVUZCU1N4TFFVRkxMRWxCUVVVc1EwRkJReXhKUVVGRkxFTkJRVU1zUTBGQlF6dERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkZMRWxCUVVVc1JVRkJSU3hsUVVGbExFdEJRVWtzVFVGQlJ5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkRMRkZCUVU4c1RVRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBOQlFVVXNTVUZCUnl4RlFVRkZMRmRCUVZNc1IwRkJSU3hQUVVGUExFMUJRVTBzT0VKQlFUaENPMFZCUVVNc1VVRkJUenRGUVVGRkxGbEJRVmM3UlVGQlJTeFpRVUZYTzBOQlFVTXNRMEZCUXl4TlFVRkpMR05CUVZrN1JVRkJReXhOUVVGTE8wVkJRVmNzV1VGQlZ6dERRVUZETEVsQlFVVXNTMEZCU3p0QlFVRkRPMEZCUVVNc1owSkJRV2RDTEdGQlFWYzdRVUZETVc5TUxHZENRVUZuUWl4aFFVRmhPMEZCUXpkQ0xGZEJRVmNzYjBKQlFXOUNMRWxCUVVrc2EwTkJRV3RETEdWQlFXVTdPenRCUTBZdlFpeGxRVUZsTEdsQ1FVRnBRaXhIUVVGRk8wTkJRVU1zVDBGQlR5eE5RVUZOTEUxQlFVMHNTMEZCU3l4TFFVRkxMRVZCUVVVc1ZVRkJVU3hIUVVGSExFTkJRVU1zUjBGQlJTeEZRVUZETEdWQlFXTXNSVUZCUlN4UlFVRlBPMEZCUVVNN1FVRkJReXhwUWtGQmFVSXNZVUZCVnp0QlFVTXpUQ3hwUWtGQmFVSXNZVUZCWVR0QlFVTTVRaXhYUVVGWExHOUNRVUZ2UWl4SlFVRkpMREJEUVVFd1F5eG5Ra0ZCWjBJN096dEJRMGhuUkN4VFFVRlRMR2REUVVGblF5eEhRVUZGTzBOQlFVTXNTVUZCU1N4SlFVRkZMRmRCUVZjc1JVRkJReXhQUVVGTkxFVkJRVU1zUTBGQlF5eEhRVUZGTEVsQlFVVXNSVUZCUlN4UFFVRlBMR05CUVdNc1EwRkJReXhIUVVGRkxFbEJRVVVzU1VGQlNTeG5Ra0ZCWXl4SFFVRkZMRWRCUVVVc1NVRkJSU3hqUVVGakxFbEJRVVVzVFVGQlJ6dEZRVUZETEVsQlFVVXNSMEZCUlN4RlFVRkZMRTFCUVUwc1NVRkJTU3c0UWtGQk9FSXNRMEZCUXl4RFFVRkRPME5CUVVNc1EwRkJRenREUVVGRkxFOUJRVThzUlVGQlJTeFpRVUZWTEVOQlFVTXNRMEZCUXl4SFFVRkZPMFZCUVVNc1YwRkJWVHRGUVVGRkxFMUJRVXM3UlVGQlJTeGpRVUZYTzBWQlFVVXNVVUZCVHl4RlFVRkZPME5CUVUwN1FVRkJRenRCUVVGRExHVkJRV1VzWTBGQll5eEhRVUZGTEVkQlFVVTdRMEZCUXl4VFFVRlBPMFZCUVVNc1NVRkJTVHRGUVVGRkxFbEJRVWM3UjBGQlF5eEpRVUZGTEUxQlFVMHNSVUZCUlN4TFFVRkxPMFZCUVVNc1VVRkJUVHRIUVVGRExFOUJRVThzVFVGQlRTeEpRVUZKTEdOQlFWa3NRMEZCUXl4RFFVRkRPMFZCUVVNN1JVRkJReXhKUVVGSExFVkJRVVVzVTBGQlR5eERRVUZETEVkQlFVVXNUMEZCVHl4TlFVRk5MRWxCUVVrc1kwRkJXU3hEUVVGRExFTkJRVU03UlVGQlJTeEpRVUZITEdkRFFVRm5ReXhGUVVGRkxFdEJRVXNzUjBGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlN4TlFVRk5MRTFCUVUwc1IwRkJSU3hKUVVGSkxEaENRVUU0UWl4RlFVRkZMRTFCUVUwc1RVRkJUVHREUVVGRE8wRkJRVU03UVVGQlF5eEpRVUZKTEdkRFFVRTRRaXhqUVVGakxFMUJRVXM3UTBGQlF5eFpRVUZaTEVkQlFVVTdSVUZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSU3hMUVVGTExFOUJRVXM3UTBGQkswSTdRVUZCUXpzN08wRkRRM1JXTEdWQlFXVXNkMEpCUVhkQ0xFZEJRVVU3UTBGQlF5eEpRVUZKTEVsQlFVVXNaME5CUVdkRExFVkJRVVVzVTBGQlV5eEhRVUZGTEVsQlFVVXNRMEZCUXp0RFFVRkZMRWxCUVVjN1JVRkJReXhKUVVGSE8wZEJRVU1zVFVGQlRTeHRRa0ZCYlVJc1JVRkJSU3hKUVVGSkxFZEJRVVVzU1VGQlJTeERRVUZETzBWQlFVTXNVMEZCVHl4SFFVRkZPMGRCUVVNc1NVRkJSeXh2UWtGQmIwSXNRMEZCUXl4SFFVRkZPMGRCUVU4c1RVRkJUVHRGUVVGRE8wVkJRVU1zU1VGQlNTeEpRVUZGTzBkQlFVTXNSMEZCUnp0SFFVRkZMRmRCUVZVc1JVRkJSU3hoUVVGWE8wVkJRVlVzUjBGQlJTeEpRVUZGTEhOQ1FVRnpRaXhEUVVGRExFZEJRVVVzU1VGQlJTeHZRa0ZCYjBJc1IwRkJSU3hGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEUxQlFVc3NUVUZCUnp0SFFVRkRMRWxCUVVjc1JVRkJSU3hYUVVGVExHRkJRVmtzVDBGQlR5eEZRVUZGTzBkQlFVOHNUVUZCVFN4RlFVRkZMRmRCUVZNc1YwRkJVeXhGUVVGRkxGRkJRVTBzUlVGQlJTeFBRVUZQTEZWQlFWRXNUVUZCVFN4RlFVRkZMRlZCUVZFc09FSkJRVGhDTzBWQlFVTXNRMEZCUXl4SFFVRkZMRWxCUVVVc1JVRkJSU3haUVVGVkxFTkJRVU1zUTBGQlF5eEhRVUZGTzBWQlFVVXNTVUZCUnp0SFFVRkRMRWxCUVVVN1NVRkJReXhSUVVGUExFMUJRVTBzVVVGQlVTeExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRk5CUVZNc1EwRkJRenRKUVVGRkxGRkJRVTg3UjBGQlZ6dEZRVUZETEZOQlFVOHNSMEZCUlR0SFFVRkRMRVZCUVVVc1QwRkJUeXhYUVVGVExFMUJRVTBzVVVGQlVTeExRVUZMTEVOQlFVTXNSMEZCUlN4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFZEJRVVVzU1VGQlJUdEpRVUZETEZGQlFVOHNSVUZCUlN4UFFVRlBPMGxCUVVVc1VVRkJUenRIUVVGWExFdEJRVWNzU1VGQlJUdEpRVUZETEU5QlFVMHNNa0pCUVRKQ0xFTkJRVU03U1VGQlJTeFJRVUZQTzBkQlFWRTdSVUZCUXp0RlFVRkRMRWxCUVVrc1NVRkJSVHRIUVVGRExFMUJRVXM3UjBGQlJTeFJRVUZQTzBWQlFVTTdSVUZCUlN4TlFVRk5MR1ZCUVdVc1JVRkJSU3hOUVVGTkxGTkJRVkVzUjBGQlJTeEZRVUZETEZkQlFWVXNSVUZCUlN4WFFVRlRMRmxCUVZjc1EwRkJRenREUVVGRExGVkJRVkU3UlVGQlF5eExRVUZITEUxQlFVMHNXVUZCV1N4RlFVRkZMRWxCUVVrN1EwRkJRenRCUVVGRE8wRkJRVU1zZDBKQlFYZENMR0ZCUVZjN1FVRkRMM3BETEhkQ1FVRjNRaXhoUVVGaE8wRkJRM0pETEZkQlFWY3NiMEpCUVc5Q0xFbEJRVWtzTUVOQlFUQkRMSFZDUVVGMVFqczdPMEZEU0hCSExGTkJRVk1zWVVGQllTeEhRVUZGTzBOQlFVTXNUMEZCVHl4RlFVRkZMRmRCUVZNc1MwRkJSeXhSUVVGUkxFVkJRVVVzWVVGQlZ5eEZRVUZGTzBGQlFVMDdPenRCUTBFelJTeFRRVUZUTEd0Q1FVRnJRaXhIUVVGRk8wTkJRVU1zU1VGQlJ5eFBRVUZQTEVWQlFVVXNVMEZCVHl4WlFVRlZMRVZCUVVVc1ZVRkJVU3hOUVVGTExFMUJRVTBzVFVGQlRTeEhRVUZITEVWQlFVVXNUVUZCVFN4M1EwRkJkME03UTBGQlJTeEpRVUZKTEVsQlFVVXNSVUZCUlN4TlFVRk5MRk5CUVZFN1EwRkJSU3hKUVVGSExFOUJRVThzUzBGQlJ5eFZRVUZUTEVsQlFVVXNSVUZCUlR0TlFVRlhMRWxCUVVjc1JVRkJSU3hoUVVGWkxFVkJRVVVzVlVGQlVTeEZRVUZGTEcxQ1FVRnBRaXhMUVVGTExFZEJRVVVzU1VGQlJUdEZRVUZETEVkQlFVY3NSVUZCUlR0RlFVRk5MRk5CUVZFc1JVRkJSVHREUVVGak8wMUJRVThzVFVGQlRTeE5RVUZOTEVk",
	"QlFVY3NSVUZCUlN4TlFVRk5MSGREUVVGM1F6dERRVUZGTEVsQlFVa3NTVUZCUlN4RlFVRkZMR3RDUVVGblFqdERRVUZGTEVsQlFVY3NRMEZCUXl4UFFVRlBMRlZCUVZVc1JVRkJSU3hQUVVGUExFdEJRVWNzUlVGQlJTeFZRVUZSTEVkQlFVVXNUVUZCVFN4TlFVRk5MRWRCUVVjc1JVRkJSU3hOUVVGTkxGbEJRVmtzUlVGQlJTeFJRVUZSTERSQ1FVRTBRanREUVVGRkxFbEJRVWNzUlVGQlJTeFZRVUZSTEVWQlFVVXNaVUZCWXl4TlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFMUJRVTBzZDBKQlFYZENMRVZCUVVVc1VVRkJVU3c0UTBGQk9FTXNSVUZCUlN4alFVRmpMR2xIUVVGcFJ6dERRVUZGTEU5QlFVc3NSVUZCUlN4VlFVRlJMRVZCUVVVc1owSkJRV1U3UlVGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4WFFVRlhMRTFCUVVzc1RVRkJSeXhGUVVGRkxGTkJRVThzUlVGQlJTeFBRVUZQTzBWQlFVVXNTVUZCUnl4RFFVRkRMRWRCUVVVc1RVRkJUU3hOUVVGTkxFZEJRVWNzUlVGQlJTeE5RVUZOTEhkRFFVRjNReXhGUVVGRkxGRkJRVkVzUzBGQlN5eEZRVUZGTEZWQlFWRXNSVUZCUlN4RlFVRkZPMFZCUVVVc1NVRkJSeXhGUVVGRkxFOUJRVXNzUlVGQlJTeFBRVUZMTEVkQlFVVXNUVUZCVFN4TlFVRk5MRWRCUVVjc1JVRkJSU3hOUVVGTkxHTkJRV01zUlVGQlJTeExRVUZMTEV0QlFVc3NSVUZCUlN4SFFVRkhMREJEUVVFd1F6dEZRVUZGTEVsQlFVa3NTVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJRenRGUVVGRkxFbEJRVWNzUlVGQlJTeFpRVUZWTEVWQlFVVXNTVUZCUnl4TlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFMUJRVTBzWTBGQll5eEZRVUZGTEV0QlFVc3NTMEZCU3l4RlFVRkZMRWRCUVVjc2FVTkJRV2xETEVWQlFVVXNVVUZCVVN4RlFVRkZPMFZCUVVVc1NVRkJSVHREUVVGRE8wTkJRVU1zVDBGQlR6dEJRVUZET3pzN1FVTkJjbkpETEUxQlFVMHNNRUpCUVhkQ08wTkJRVU1zVFVGQlN6dERRVUZGTEZGQlFWRXNSMEZCUlR0RlFVRkRMRWxCUVVjc1EwRkJReXc0UWtGQk9FSXNRMEZCUXl4SFFVRkZMRTFCUVUwc1RVRkJUU3cyUlVGQk5rVTdSVUZCUlN4UFFVRk5PMGRCUVVNc1kwRkJZU3hGUVVGRk8wZEJRV0VzYVVKQlFXZENMRVZCUVVVN1IwRkJaMElzVFVGQlN5eEZRVUZGTzBkQlFVc3NWMEZCVlR0SlFVRkRMRTlCUVUwc1JVRkJSVHRKUVVGVExHZENRVUZsTEVWQlFVVTdTVUZCWlN4dFFrRkJhMElzUlVGQlJUdEpRVUZyUWl4alFVRmhMRVZCUVVVN1IwRkJXVHRIUVVGRkxGTkJRVkU3UlVGQlF6dERRVUZETzBOQlFVVXNTVUZCUnp0QlFVRkRPMEZCUVVVc1UwRkJVeXc0UWtGQk9FSXNSMEZCUlR0RFFVRkRMRTlCUVU4c1QwRkJUeXhMUVVGSExGbEJRVlVzUTBGQlF5eERRVUZETEV0QlFVY3NZMEZCWVR0QlFVRkRPenM3UVVWQk0xSXNUVUZCUVN3NFFrRkJORUlzUTBGQlF5eDVRa0ZCZDBJN1EwUkJkRThzVFVGQlN6dERRVUZGTEZGQlFWRXNSMEZCUlR0RlFVRkRMRTlCUVUwN1IwRkJReXhIUVVGSE8wZEJRVVVzVTBGQlVUdEZRVUZETzBOQlFVTTdRMEZCUlN4SlFVRkhPMEZEUVhsTUxFTkJRWFZDTzBGQlFUaFlMRk5CUVZNc2VVSkJRWGxDTEVkQlFVVTdRMEZCUXl4UFFVRlBMR3RDUVVGclFqdEZRVUZETEdkQ1FVRmxPMFZCUVVVc1QwRkJUVHRGUVVGelFpeFpRVUZYTzBWQlFUUkNMR1ZCUVdNN1JVRkJSU3hQUVVGTk8wTkJRVU1zUTBGQlF6dEJRVUZET3pzN1FVTkRkREJDTEVsQlFWY3NiVU5CUVcxRExGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zYjBSQlFXOUVPenM3UVVOQk9Va3NTVUZCVnl4WFFVRlhMRmRCUVZjc1QwRkJUeXhKUVVGSkxHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc05FSkJRVFJDT3pzN1FVTkVPVVlzVFVGQlRTeHRRa0ZCYVVJN1FVRkJjVUlzVTBGQlV5eHZRa0ZCYjBJc1IwRkJSU3hIUVVGRk8wTkJRVU1zVDBGQlR5eE5RVUZKTEV0QlFVc3NUVUZCU1N4RlFVRkZMRzlDUVVGclFpeEpRVUZITzBGQlFVTTdRVUZCUXl4VFFVRlRMR3RDUVVGclFpeEhRVUZGTzBOQlFVTXNUMEZCVHl4SlFVRkpPMEZCUVdsQ096czdRVU5CZEVjc1UwRkJVeXh0UWtGQmJVSXNSMEZCUlN4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRkxIVkNRVUYxUWp0RlFVRkRMRWRCUVVVc1JVRkJSVHRGUVVGbExFZEJRVVVzUlVGQlJUdERRVUZqTEVOQlFVTXNSMEZCUlN4SlFVRkZMR2RDUVVGblFqdEZRVUZETEVkQlFVVXNSVUZCUlR0RlFVRlJMRWRCUVVVc1JVRkJSVHREUVVGUExFTkJRVU1zUjBGQlJTeEpRVUZGTEdkQ1FVRm5RanRGUVVGRExFZEJRVVVzUlVGQlJUdEZRVUZSTEVkQlFVVXNSVUZCUlR0RFFVRlBMRU5CUVVNc1IwRkJSU3hKUVVGRkxHZENRVUZuUWp0RlFVRkRMRWRCUVVVc2EwSkJRV3RDTEVOQlFVTTdSVUZCUlN4SFFVRkZMR3RDUVVGclFpeERRVUZETzBOQlFVTXNRMEZCUXl4SFFVRkZMRWxCUVVVc1JVRkJSU3huUWtGQll5eEZRVUZGTEdOQlFXRXNTVUZCUlN4RFFVRkRPME5CUVVVc1QwRkJUeXhOUVVGSkxFdEJRVXNzVFVGQlNTeEZRVUZGTEdsQ1FVRmxMRWxCUVVjc1RVRkJTU3hMUVVGTExFMUJRVWtzUlVGQlJTeFZRVUZSTEVsQlFVY3NUVUZCU1N4TFFVRkxMRTFCUVVrc1JVRkJSU3hWUVVGUkxFbEJRVWNzVFVGQlNTeExRVUZMTEUxQlFVa3NSVUZCUlN4bFFVRmhMRWxCUVVjc2IwSkJRVzlDTEVkQlFVVXNRMEZCUXp0QlFVRkRPMEZCUVVNc1UwRkJVeXh4UWtGQmNVSXNSMEZCUlR0RFFVRkRMRWxCUVVjc1RVRkJTU3hMUVVGTExFZEJRVVU3UTBGQlR5eEpRVUZITEU5QlFVOHNTMEZCUnl4VlFVRlRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZQTEVsQlFVVXNTVUZCUlN4TFFVRkxPME5CUVVVc1NVRkJTU3hKUVVGRkxFVkJRVVVzVVVGQlR5eE5RVUZITEVWQlFVVXNVMEZCVHl4VlFVRlJMRVZCUVVVc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eFRRVUZQTEVOQlFVTTdRMEZCUlN4SlFVRkhMRVZCUVVVc1YwRkJVeXhIUVVGRkxFOUJRVThzUlVGQlJTeFhRVUZUTEVWQlFVVXNVMEZCVHl4SlFVRkZPMEZCUVVNN1FVRkJjWE5DTEZOQlFWTXNkVUpCUVhWQ0xFZEJRVVU3UTBGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4TFFVRkhMRU5CUVVNc1IwRkJSU3hKUVVGRkxFVkJRVVVzUzBGQlJ5eERRVUZETzBOQlFVVXNTVUZCUnl4RlFVRkZMRVZCUVVVc1YwRkJVeXhMUVVGSExFVkJRVVVzVjBGQlV5eEpRVUZITEU5QlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVVc1IwRkJSeXhEUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEdkQ1FVRm5RaXhIUVVGRk8wTkJRVU1zU1VGQlNTeEpRVUZGTEVWQlFVVXNTMEZCUnl4RFFVRkRMRWRCUVVVc1NVRkJSU3hGUVVGRkxFdEJRVWNzUTBGQlF6dERRVUZGTEVsQlFVY3NSVUZCUlN4RlFVRkZMRmRCUVZNc1MwRkJSeXhGUVVGRkxGZEJRVk1zU1VGQlJ5eFBRVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkZMRWRCUVVjc1EwRkJRenRCUVVGRE8wRkJRVU1zVTBGQlV5eG5Ra0ZCWjBJc1IwRkJSVHREUVVGRExFbEJRVWtzU1VGQlJTeHhRa0ZCY1VJc1JVRkJSU3hEUVVGRExFZEJRVVVzU1VGQlJTeHhRa0ZCY1VJc1JVRkJSU3hEUVVGRE8wTkJRVVVzVDBGQlR5eE5RVUZKTEV0QlFVc3NTVUZCUlN4SlFVRkZMRTFCUVVrc1MwRkJTeXhKUVVGRkxFbEJRVVVzYTBKQlFXdENPMFZCUVVNc1ZVRkJVenRGUVVGRkxGVkJRVk03UTBGQlF5eERRVUZETzBGQlFVTTdRVUZCUXl4VFFVRlRMR3RDUVVGclFpeEhRVUZGTzBOQlFVTXNUMEZCVHl4UFFVRlBMRVZCUVVVc1dVRkJWU3haUVVGVkxFOUJRVThzUlVGQlJTeFpRVUZWTEZkQlFWTXNSMEZCUnl4RlFVRkZMRk5CUVZNc1RVRkJUU3hGUVVGRkxHRkJRVmNzUTBGQlF5eEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxGRkJRVkVzUjBGQlJTeEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxGRkJRVkVzUTBGQlF6dEJRVUZETzBGQlFVTXNVMEZCVXl4dFFrRkJiVUlzUjBGQlJUdERRVUZETEU5QlFVOHNUMEZCVHl4TFFVRkhMRmRCUVZNc1JVRkJSU3hUUVVGUExFbEJRVVVzUTBGQlF6dEZRVUZETEUxQlFVczdSVUZCVHl4TlFVRkxPME5CUVVNc1EwRkJReXhKUVVGRkxFTkJRVU1zU1VGQlJTeE5RVUZOTEZGQlFWRXNRMEZCUXl4SlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVVVzUTBGQlF6dEJRVUZETzBGQlFVTXNVMEZCVXl4dFFrRkJiVUlzUjBGQlJUdERRVUZETEVsQlFVY3NRMEZCUXl4SFFVRkZMRWRCUVVjc1MwRkJSenREUVVGRkxFbEJRVWNzVFVGQlNTeExRVUZMTEVkQlFVVXNUVUZCVFN4TlFVRk5MREJEUVVFd1F6dERRVUZGTEVsQlFVa3NTVUZCUlN4RlFVRkZMRTFCUVVzc1NVRkJSU3hGUVVGRkxGRkJRVThzU1VGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRWRCUVVVc1NVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeHZRa0ZCYTBJc1EwRkJReXhEUVVGRE8wTkJRVVVzUzBGQlNTeEpRVUZKTEV0QlFVc3NSMEZCUlR0RlFVRkRMRWxCUVVrc1NVRkJSU3hGUVVGRk8wVkJRVThzU1VGQlJ5eEZRVUZGTEZOQlFVOHNTMEZCU3l4TlFVRkpMRWxCUVVVc1JVRkJSU3hQUVVGTkxFVkJRVVVzVjBGQlV5eExRVUZMTEVkQlFVVTdSMEZCUXl4SlFVRkhMRTFCUVVrc1MwRkJTeXhIUVVGRkxFMUJRVTBzVFVGQlRTeHJSRUZCYTBRN1IwRkJSU3hKUVVGRkxFVkJRVVU3UlVGQlRUdEZRVUZETEVWQlFVVXNTMEZCU3l4SFFVRkhMRVZCUVVVc1VVRkJVU3hIUVVGRkxFVkJRVVVzUzBGQlN5eEpRVUZKTEVWQlFVVXNiMEpCUVd0Q0xFTkJRVU1zUlVGQlFTeERRVUZITEV0QlFVa3NUMEZCU1R0SFFVRkRMRWRCUVVjN1IwRkJSU3hqUVVGaExFVkJRVVVzWlVGQllUdEZRVUZETEVWQlFVVXNRMEZCUXp0RFFVRkRPME5CUVVNc1QwRkJUVHRGUVVGRExFZEJRVWM3UlVGQlJTeE5RVUZMTzBWQlFVVXNVVUZCVHp0RlFVRkZMR3RDUVVGcFFpeEZRVUZGTEZkQlFWTXNTVUZCUlN4TFFVRkxMRWxCUVVVN1JVRkJSU3hWUVVGVE8wTkJRVU03UVVGQlF6czdPMEZEUVhaclJpeE5RVUZOTERKQ1FVRjVRanREUVVGRE8wTkJRVlU3UTBGQmFVSTdRMEZCVlR0RFFVRmxPMEZCUVUwN1FVRkJSU3hUUVVGVExIZENRVUYzUWl4SFFVRkZPME5CUVVNc1NVRkJSeXhGUVVGRkxGZEJRVk1zUjBGQlJTeFBRVUZOTEVOQlFVTTdRMEZCUlN4SlFVRkhMRVZCUVVVc1YwRkJVeXhIUVVGRkxFOUJRVThzUlVGQlJTeE5RVUZKTEVOQlFVTTdRMEZCUlN4SlFVRkpMRWxCUVVVc1EwRkJReXhIUVVGRkxFbEJRVVVzUTBGQlF5eEhRVUZGTEVsQlFVVXNRMEZCUXl4SFFVRkZMRWxCUVVVc1EwRkJReXhIUVVGRkxFbEJRVVVzUTBGQlF5eEhRVUZGTEVsQlFVVXNRMEZCUXp0RFFVRkZMRXRCUVVrc1NVRkJTU3hMUVVGTExFZEJRVVU3UlVGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4RlFVRkZMRTFCUVUwc2FVSkJRV1VzUTBGQlF5eERRVUZETEVkQlFVVXNSVUZCUlN4TFFVRkxMRWRCUVVjc1JVRkJSU3hOUVVGTkxHbENRVUZsTEVOQlFVTXNRMEZCUXl4SFFVRkZMRVZCUVVVc1MwRkJTeXhIUVVGSExFVkJRVVVzVFVGQlRTeDFRa0ZCY1VJc1EwRkJReXhEUVVGRExFZEJRVVVzUlVGQlJTeExRVUZMTEVkQlFVY3NSVUZCUlN4TlFVRk5MRk5CUVU4c1EwRkJReXhEUVVGRE8wVkJRVVVzUzBGQlNTeEpRVUZITEVOQlFVTXNSMEZCUlN4TlFVRkxMRTlCUVU4c1VVRkJVU3hEUVVGRExFZEJRVVVzVFVGQlNTeExRVUZMTEUxQlFVa3NSVUZCUlN4TFFVRkhPMFZCUVVjc1NVRkJSU3h0UWtGQmJVSXNSMEZCUlN4RFFVRkRPME5CUVVNN1EwRkJReXhMUVVGSkxFbEJRVWtzUzBGQlN5d3dRa0ZCZVVJc1QwRkJUeXhGUVVGRk8wTkJRVWNzU1VGQlNTeEpRVUZGTEVOQlFVTTdRMEZCUlN4UFFVRlBMRVZCUVVVc1UwRkJUeXhOUVVGSkxFVkJRVVVzWjBKQlFXTXNTVUZCUnl4RlFVRkZMRk5CUVU4c1RVRkJTU3hGUVVGRkxHZENRVUZqTEVsQlFVY3NSVUZCUlN4VFFVRlBMRTFCUVVrc1JVRkJSU3h6UWtGQmIwSXNTVUZCUnl4RlFVRkZMRk5CUVU4c1RVRkJTU3hGUVVGRkxGRkJRVTBzU1VGQlJ5eFBRVUZQTEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJUeXhOUVVGSkxFVkJRVVVzVDBGQlN5eEpRVUZITEU5QlFVOHNUMEZCVHl4SFFVRkZMRU5CUVVNN1FVRkJRenM3TzBGRFEzaDJRaXhKUVVGWExEQkNRVUV3UWl4WFFVRlhMRTlCUVU4c1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRMREpEUVVFeVF6czdPMEZEUVRWSUxFbEJRVmNzTkVKQlFUUkNMRmRCUVZjc1QwRkJUeXhKUVVGSkxHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc05rTkJRVFpETzBGQlEyaEpMRWxCUVZjc2JVTkJRVzFETEZkQlFWY3NUMEZCVHl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNiMFJCUVc5RU96czdRVU5FT1Vrc1NVRkJWeXcyUWtGQk5rSXNWMEZCVnl4UFFVRlBMRWxCUVVrc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl3NFEwRkJPRU03UVVGRGJFa3NTVUZCVnl3NFFrRkJPRUlzVjBGQlZ5eFBRVUZQTEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5d3JRMEZCSzBNN096dEJRMFJ3U1N4SlFVRlhMRzFEUVVGdFF5eFhRVUZYTEU5QlFVOHNTVUZCU1N4dFFrRkJiVUlzUlVGQlJTeERRVUZETEc5RVFVRnZSRHM3TzBGRFFUbEpMRWxCUVZjc05rSkJRVFpDTEZkQlFWY3NUMEZCVHl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNPRU5CUVRoRE96czdRVU5CYkVrc1NVRkJWeXhyUTBGQmEwTXNWMEZCVnl4UFFVRlBMRWxCUVVrc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl4dFJFRkJiVVE3UVVGRE5Va3NTVUZCVnl4blEwRkJaME1zVjBGQlZ5eFBRVUZQTEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5eHBSRUZCYVVRN1FVRkRlRWtzU1VGQlZ5eHJRMEZCYTBNc1YwRkJWeXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXh0UkVGQmJVUTdPenRCUTBoM1NTeGxRVUZsTEhOQ1FVRnpRaXhIUVVGRkxFZEJRVVU3UTBGQlF5eEpRVUZITEVWQlFVTXNVMEZCVVN4TlFVRkhPME5CUVVVc1VVRkJUeXhGUVVGRkxFMUJRVlE3UlVGQlpTeExRVUZKTEdsQ1FVRm5RanRIUVVGRExFbEJRVWtzU1VGQlJTeE5RVUZOTERoQ1FVRTRRanRKUVVGRExHbENRVUZuUWl4RlFVRkZPMGxCUVdkQ0xGTkJRVkVzUlVGQlJUdEpRVUZSTEZGQlFVOHNSVUZCUlR0SlFVRlBMR05CUVdFc1JVRkJSVHRKUVVGaExGRkJRVThzUlVGQlJUdEhRVUZOTEVOQlFVTTdSMEZCUlN4UFFVRk5PMGxCUVVNc2JVSkJRV3RDTEVWQlFVVTdTVUZCYTBJc1kwRkJZU3hGUVVGRk8wZEJRVms3UlVGQlF6dEZRVUZETEV0QlFVa3NaMEpCUVdVN1IwRkJReXhKUVVGSkxFbEJRVVVzVFVGQlRTeG5RMEZCWjBNN1NVRkJReXhUUVVGUkxFVkJRVVU3U1VGQlVTeFRRVUZSTEVWQlFVVTdTVUZCVVN4VFFVRlJPMGxCUVVVc2JVSkJRV3RDTEVWQlFVVTdTVUZCYTBJc1kwRkJZU3hGUVVGRk8wbEJRV0VzVVVGQlR5eEZRVUZGTzBkQlFVMHNRMEZCUXp0SFFVRkZMRkZCUVU4c1JVRkJSU3hOUVVGVU8wbEJRV1VzUzBGQlNTeGpRVUZoTEU5QlFVMDdTMEZCUXl4dlFrRkJiVUlzVFVGQlRTd3lRa0ZCTWtJN1RVRkJReXhQUVVGTkxFVkJRVVU3VFVGQlRTeG5Ra0ZCWlN4RlFVRkZPMDFCUVdVc2JVSkJRV3RDTEVWQlFVVTdTMEZCYVVJc1EwRkJReXhGUVVGQkxFTkJRVWM3UzBGQmEwSXNZMEZCWVN4RlFVRkZPMGxCUVZrN1NVRkJSU3hMUVVGSkxGVkJRVk1zVDBGQlR5eE5RVUZOTEdWQlFXVXNSVUZCUlN4VFFVRlJPMHRCUVVNc1RVRkJTenRMUVVGM1FpeFRRVUZSTEVOQlFVTXNSVUZCUlN4TlFVRk5PMGxCUVVNc1EwRkJReXhIUVVGRk8wdEJRVU1zYlVKQlFXdENMRVZCUVVVN1MwRkJhMElzWTBGQllTeEZRVUZGTzBsQlFWazdTVUZCUlN4TFFVRkpMR2RDUVVGbExFOUJRVTA3UzBGQlF5eHRRa0ZCYTBJc1JVRkJSVHRMUVVGclFpeGpRVUZoTEVWQlFVVTdTVUZCV1R0SFFVRkRPMFZCUVVNN1EwRkJRenRCUVVGRE96czdRVU5CY0haQ0xHVkJRV1VzZFVKQlFYVkNMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzZDBKQlFYZENMRVZCUVVVc1UwRkJVeXhSUVVGUkxFZEJRVVVzU1VGQlJTeEZRVUZGTEcxQ1FVRnJRaXhKUVVGRkxFVkJRVVU3UTBGQllTeExRVUZKTEVsQlFVa3NTMEZCU3l4RlFVRkZMRTFCUVUwc2FVSkJRV1VzUTBGQlF5eEhRVUZGTzBWQlFVTXNTVUZCU1N4SlFVRkZMRTFCUVUwc01rSkJRVEpDTzBkQlFVTXNVMEZCVVR0SFFVRkZMR05CUVdFN1JVRkJReXhEUVVGRE8wVkJRVVVzU1VGQlJ5eEpRVUZGTEVWQlFVVXNZMEZCWVN4RFFVRkRMRVZCUVVVc1ZVRkJVenRGUVVGVExFbEJRVWtzU1VGQlJTeE5RVUZOTEdsRFFVRnBRenRIUVVGRExHZENRVUZsTEVWQlFVVTdSMEZCWlN4VFFVRlJMRVZCUVVVN1IwRkJVU3h0UWtGQmEwSTdSMEZCUlN4alFVRmhPMFZCUVVNc1EwRkJRenRGUVVGRkxFbEJRVVVzUlVGQlJTeHRRa0ZCYTBJc1NVRkJSU3hGUVVGRk8wTkJRVms3UTBGQlF5eExRVUZKTEVsQlFVa3NTMEZCU3l4RlFVRkZMRTFCUVUwc2FVSkJRV1VzUTBGQlF5eEhRVUZGTzBWQlFVTXNTVUZCU1N4SlFVRkZMRTFCUVUwc2MwSkJRWE5DTzBkQlFVTXNSMEZCUnp0SFFVRkZMRk5CUVZFc1JVRkJSVHRGUVVGTkxFZEJRVVU3UjBGQlF5eG5Ra0ZCWlN4RlFVRkZPMGRCUVdVc2JVSkJRV3RDTzBkQlFVVXNZMEZCWVR0RlFVRkRMRU5CUVVNN1JVRkJSU3hKUVVGRkxFVkJRVVVzYlVKQlFXdENMRWxCUVVVc1JVRkJSVHREUVVGWk8wTkJRVU1zUzBGQlNTeEpRVUZKTEV0QlFVc3NSVUZCUlN4TlFVRk5MSFZDUVVGeFFpeERRVUZETEVkQlFVVTdSVUZCUXl4SlFVRkhMRU5CUVVNc1RVRkJUU3hwUTBGQmFVTTdSMEZCUXl4VlFVRlRPMGRCUVVVc1kwRkJZVHRGUVVGRExFTkJRVU1zUjBGQlJUdEZRVUZUTEVsQlFVa3NTVUZCUlN4TlFVRk5MREJDUVVFd1FqdEhRVUZETEdGQlFWa3NSVUZCUlR0SFFVRlpMR2RDUVVGbExFVkJRVVU3UjBGQlpTeHRRa0ZCYTBJN1IwRkJSU3hqUVVGaE8wVkJRVU1zUTBGQlF6dEZRVUZGTEVsQlFVVXNSVUZCUlN4dFFrRkJhMElzU1VGQlJTeEZRVUZGTzBOQlFWazdRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hQUVVGUExGVkJRVkVzUzBGQlJ5eE5RVUZKTEVsQlFVVXNUVUZCVFN3MFFrRkJORUk3UlVGQlF5eGpRVUZoTzBWQlFVVXNUMEZCVFN4RlFVRkZMRTFCUVUwc1UwRkJUeXhEUVVGRE8wTkJRVU1zUTBGQlF6dERRVUZITEVsQlFVa3NTVUZCUlN4RFFVRkRMRWRCUVVVc1NVRkJSU3hEUVVGRE8wTkJRVVVzUzBGQlNTeEpRVUZITEVOQlFVTXNSMEZCUlN4TlFVRkxMRVZCUVVVc1UwRkJVeXhUUVVGVExGRkJRVkVzUjBGQlJUdEZRVUZETEVsQlFVa3NTVUZCUlN4RlFVRkRMRWRCUVVjc1JVRkJRenRGUVVGRkxFbEJRVWNzVDBGQlR5eEZRVUZGTEUxQlFVc3NUMEZCVHl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVk1zUjBGQlJUdEZRVUZUTEVsQlFVa3NTVUZCUlN4RlFVRkZPMFZCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU03UlVGQlJTeExRVUZKTEVsQlFVa3NTMEZCU3l4RlFVRkZMRk5CUVZNc2IwSkJRV3RDTEVOQlFVTXNSMEZCUlN4RlFVRkZMR2xDUVVGbExFdEJRVWNzUlVGQlJTeExRVUZMTzBkQlFVTXNSMEZCUnp0SFFVRkZMR05CUVdFN1JVRkJReXhEUVVGRE8wTkJRVU03UTBGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4WFFVRlRMRWxCUVVVc1MwRkJTeXhKUVVGRk8wVkJRVU1zUjBGQlJ5eEZRVUZGTzBWQlFWTXNhMEpCUVdsQ0xFVkJRVVVzVjBGQlV5eEpRVUZGTEV0QlFVc3NTVUZCUlR0RlFVRkZMRlZCUVZNN1EwRkJRenREUVVGRkxFOUJRVThzVFVGQlNTeExRVUZMTEVsQlFVVTdSVUZCUXl4TlFVRkxPMFZCUVZjc1YwRkJWU3hMUVVGTE8wVkJRVVVzYlVKQlFXdENPMFZCUVVVc1kwRkJZVHREUVVGRExFbEJRVVVzUlVGQlJTeDNRa0ZCYzBJc1RVRkJUU3gzUWtGQmQwSTdSVUZCUXl4VlFVRlRPMFZCUVVVc1owSkJRV1VzUlVGQlJUdEZRVUZsTEcxQ1FVRnJRanRGUVVGRkxHTkJRV0U3UTBGQlF5eERRVUZETEVsQlFVVTdSVUZCUXl4TlFVRkxPMFZCUVZjc1YwRkJWVHRGUVVGRkxHMUNRVUZyUWp0RlFVRkZMR05CUVdFN1EwRkJRenRCUVVGRE96czdRVU5CYUhKRkxFMUJRVTBzT0VKQlFUUkNPMEZCUVRCQ0xGTkJRVk1zTWtKQlFUSkNMRWRCUVVVN1EwRkJReXhKUVVGSkxFbEJRVVVzUjBGQlJ5eExRVUZMTzBOQlFVVXNTVUZCUnl4TlFVRkpMRXRCUVVzc1MwRkJSeXhGUVVGRkxGZEJRVk1zUjBGQlJUdERRVUZQTEVsQlFVa3NTMEZCUnl4RlFVRkZMRmRCUVZjc1IwRkJSeXhKUVVGRkxFbEJRVVVzU1VGQlNTeEpRVUZCTEVOQlFVc3NVVUZCVVN4UlFVRlBMRVZCUVVVN1EwRkJSU3hQUVVGUExFVkJRVVVzVjBGQlV5eEpRVUZGTEV0QlFVc3NTVUZCUlR0QlFVRkRPenM3UVVOQmVVSXNVMEZCVXl4NVEwRkJkME03UTBGQlF5eFBRVUZQTEZGQlFWRXNTVUZCU1N4bFFVRmhMR2RDUVVGakxGRkJRVkVzU1VGQlNTeG5RMEZCT0VJc1YwRkJWeXhSUVVGUkxFbEJRVWtzYTBOQlFXZERPMEZCUVVrN1FVRkJReXhUUVVGVExDdENRVUVyUWl4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRkxGRkJRVkVzU1VGQlNTeDVRa0ZCZVVJc1MwRkJTeXhMUVVGSExFdEJRVXNzUjBGQlJTeExRVUZITEhWRFFVRjFReXhMUVVGSExFdEJRVWNzUlVGQlFTeERRVUZITEZGQlFWRXNUMEZCVFN4RlFVRkZMRWRCUVVVc1NVRkJSU3d5UWtGQk1rSXNVVUZCVVN4SlFVRkpMRFJDUVVFMFFqdERRVUZGTEU5QlFVOHNUVUZCU1N4TFFVRkxMRWxCUVVVc1NVRkJSU3hIUVVGSExFbEJRVWs3UVVGQlJ6czdPMEZEUTNaMFFpeEpRVUZYTEdkRFFVRm5ReXhYUVVGWExFOUJRVThzU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRExHbEVRVUZwUkRzN08wRkRRWGhKTEVsQlFWY3NjMEpCUVhOQ0xGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zZFVOQlFYVkRPenM3UVVORWNFZ3NUVUZCVFN3d1FrRkJkMEk3T3p0QlEwRjFReXhUUVVGVExHbENRVUZwUWl4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRkxFbEJRVWs3UTBGQmVVSXNTVUZCUnl4TlFVRkpMRXRCUVVzc1IwRkJSU3hQUVVGTkxFTkJRVU03UTBGQlJTeEpRVUZKTEVsQlFVVXNSVUZCUlR0RFFVRlJMRTlCUVU4c1RVRkJUU3hSUVVGUkxFTkJRVU1zU1VGQlJTeEpRVUZGTEVOQlFVTTdRVUZCUXp0QlFVRkRMRk5CUVZNc2QwTkJRWGRETEVkQlFVVTdRMEZCUXl4SlFVRkpMRWxCUVVVc1NVRkJTU3hKUVVGSkxHbENRVUZwUWl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGRExFdEJRVWtzVFVGQlJ5eERRVUZETEVWQlFVVXNVMEZCVXl4SlFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVVVzU1VGQlJTeEpRVUZKTEVsQlFVa3NhVUpCUVdsQ0xFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTXNTMEZCU1N4TlFVRkhMRU5CUVVNc1JVRkJSU3hUUVVGVExFbEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUlN4SlFVRkZMRWxCUVVrc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVkQlFVVXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wTkJRVVVzUzBGQlNTeEpRVUZKTEV0QlFVc3NSMEZCUlN4aFFVRmhMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4TFFVRkhMRVZCUVVVc1QwRkJUeXhEUVVGRE8wTkJRVVVzU1VGQlJ5eEZRVUZGTEZOQlFVOHNSMEZCUlN4UFFVRlBMRVZCUVVVN1EwRkJWU3hKUVVGSkxFbEJRVVVzUTBGQlF6dERRVUZGTEV0QlFVa3NTVUZCU1N4TFFVRkxMR2xDUVVGcFFpeEZRVUZGTEZOQlFWTXNSMEZCUlR0RlFVRkRMRWxCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFRRVUZUTEVWQlFVVXNSMEZCUlR0SFFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRE8wZEJRVVU3UlVGQlVUdEZRVUZETEVsQlFVa3NTVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hUUVVGVExFVkJRVVU3UlVGQlJTeEpRVUZITEVOQlFVTXNZVUZCWVN4SFFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxGTkJRVk1zUlVGQlJTeERRVUZETEV0QlFVY3NRMEZCUXl4aFFVRmhMRWRCUVVVc1EwRkJReXhIUVVGRkxFMUJRVTBzVFVGQlRTeHBRa0ZCYVVJc1JVRkJSU3hUUVVGVExFZEJRVWNzWjBSQlFXZEVPMFZCUVVVc1RVRkJTU3hMUVVGTExFdEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVU3UTBGQlF6dERRVUZETEV0QlFVa3NTVUZCU1N4TFFVRkxMRWRCUVVVN1JVRkJReXhKUVVGSkxFbEJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTTdSVUZCUlN4TlFVRkpMRXRCUVVzc1MwRkJSeXhGUVVGRkxFdEJRVXNzUTBGQlF6dERRVUZETzBOQlFVTXNUMEZCVFR0RlFVRkRMRWRCUVVjc1JVRkJSVHRIUVVGWExEQkNRVUY1UWl4RlFVRkRMRk5CUVZFc1JVRkJRenREUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEdGQlFXRXNSMEZCUlN4SFFVRkZPME5CUVVNc1NVRkJSeXhOUVVGSkxFZEJRVVVzVDBGQlRTeERRVUZETzBOQlFVVXNTVUZCUnl4TlFVRkpMRXRCUVVzc1MwRkJSeXhOUVVGSkxFdEJRVXNzUjBG",
	"QlJTeFBRVUZOTEVOQlFVTTdRMEZCUlN4SlFVRkpMRWxCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU1zUjBGQlJTeEpRVUZGTEU5QlFVOHNTMEZCU3l4RFFVRkRPME5CUVVVc1QwRkJUeXhGUVVGRkxGZEJRVk1zUlVGQlJTeFZRVUZSTEVWQlFVVXNUMEZCVFN4TlFVRkhMRmxCUVZrc1VVRkJVU3hKUVVGSkxFZEJRVVVzUTBGQlF5eEhRVUZGTEZGQlFWRXNTVUZCU1N4SFFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEZsQlFWa3NSMEZCUlN4SFFVRkZPME5CUVVNc1NVRkJSeXhOUVVGSkxFZEJRVVVzVDBGQlRTeERRVUZETzBOQlFVVXNTVUZCUnl4UFFVRlBMRXRCUVVjc1dVRkJWU3hEUVVGRExFdEJRVWNzVDBGQlR5eExRVUZITEZsQlFWVXNRMEZCUXl4SFFVRkZMRTlCUVUwc1EwRkJRenREUVVGRkxFbEJRVWtzU1VGQlJTeFBRVUZQTEV0QlFVc3NRMEZCUXl4SFFVRkZMRWxCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03UTBGQlJTeFBRVUZQTEVWQlFVVXNWMEZCVXl4RlFVRkZMRlZCUVZFc1JVRkJSU3hQUVVGTkxFMUJRVWNzV1VGQldTeFJRVUZSTEVsQlFVa3NSMEZCUlN4RFFVRkRMRWRCUVVVc1VVRkJVU3hKUVVGSkxFZEJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZCUXp0QlFVRkRMRk5CUVZNc2RVSkJRWFZDTEVkQlFVVXNSMEZCUlR0RFFVRkRMRTlCUVU4c2FVSkJRV2xDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVVzc1RVRkJSeXhGUVVGRkxGVkJRVkVzWVVGQlZ5eEZRVUZGTEZWQlFWVXNWMEZCVXl4RlFVRkZMRTFCUVUwN1FVRkJRenRCUVVGelRDeFRRVUZUTEhWRFFVRjFReXhIUVVGRkxFZEJRVVU3UTBGQlF5eFBRVUZQTEhWQ1FVRjFRaXhIUVVGRkxFVkJRVU1zVVVGQlR5eEZRVUZGTEU5QlFVMHNRMEZCUXl4TlFVRkpMRXRCUVVzN1FVRkJRenM3TzBGRFFYQjRSQ3hOUVVGTkxEQkNRVUYzUWl4UFFVRlBMRWxCUVVrc01FSkJRVEJDTzBGQlFVVXNUVUZCUVN3MlFrRkJNa0k3UVVGQlZ5d3lRa0ZCTWtJc05rSkJRVEpDTEV0QlFVc3NUVUZCU1N3eVFrRkJNa0lzTWtKQlFYbENMRWxCUVVrc1NVRkJSVHRCUVVGSExFMUJRVTBzWTBGQldTd3lRa0ZCTWtJN1FVRkJlVUlzU1VGQlNTeGhRVUZYTEUxQlFVczdRMEZCUXp0RFFVRkxPME5CUVUwc1dVRkJXU3hIUVVGRkxFbEJRVVVzUTBGQlF5eEhRVUZGTzBWQlFVTXNTMEZCU3l4UFFVRkxMRWRCUVVVc1MwRkJTeXhSUVVGTkxFVkJRVVU3UlVGQlRTeEpRVUZKTEVsQlFVVXNXVUZCV1N4SlFVRkpMRU5CUVVNN1JVRkJSU3hKUVVGSExFMUJRVWtzUzBGQlN5eExRVUZITEVWQlFVVXNWVUZCVVN4TFFVRkxMRTFCUVVrc1MwRkJTeXhWUVVGUkxFdEJRVXNzU1VGQlJ5eE5RVUZOTEUxQlFVMHNLMEpCUVN0Q0xFVkJRVVVzTUVKQlFUQkNMRVZCUVVVc1VVRkJUU3hUUVVGUExGVkJRVlVzYzBKQlFYTkNMRXRCUVVzc1VVRkJUU3hUUVVGUExGVkJRVlVzYjBoQlFXOUlPMFZCUVVVc1dVRkJXU3hKUVVGSkxFZEJRVVVzU1VGQlNUdERRVUZETzBGQlFVTTdPenRCUTBGb2RrSXNUVUZCVFN3eVFrRkJlVUk3UVVGQll5eE5RVUZCTEc5RFFVRnJRenRCUTBFMFF5eEpRVUZKTEZkQlFWY3NWVUZCVlR0QlFVRnRRaXhKUVVGSkxGZEJRVmNzYlVKQlFXMUNPMEZCUVdVc1NVRkJTU3hYUVVGWExHVkJRV1U3UVVGQmRVSXNTVUZCU1N4WFFVRlhMSFZDUVVGMVFqdEJRVUZGTEUxQlFVRXNjMEpCUVc5Q0xFbEJRVWtzVjBGQlZ5eHpRa0ZCYzBJN1FVRkJjVUlzU1VGQlNTeFhRVUZYTERoQ1FVRTRRanRCUVVGblFpeEpRVUZKTEZkQlFWY3NaMEpCUVdkQ08wRkJRWEZDTEVsQlFVa3NWMEZCVnl4eFFrRkJjVUk3UVVGQmMwSXNTVUZCU1N4WFFVRlhMSE5DUVVGelFqdEJRVUZ0UWl4SlFVRkpMRmRCUVZjc2JVSkJRVzFDTzBGQlFUWkNMRWxCUVVrc1YwRkJWeXcyUWtGQk5rSTdRVUZCTkVJc1NVRkJTU3hYUVVGWExEUkNRVUUwUWp0QlFVRlZMRWxCUVVrc1YwRkJWeXhWUVVGVk8wRkJRVzFDTEVsQlFVa3NWMEZCVnl4dFFrRkJiVUk3UVVGQmQwSXNTVUZCU1N4WFFVRlhMSGRDUVVGM1FqdEJRVUZ6UWl4SlFVRkpMRmRCUVZjc2MwSkJRWE5DTzBGQlFYTkNMRWxCUVVrc1YwRkJWeXh6UWtGQmMwSTdRVUZCYTBJc1NVRkJTU3hYUVVGWExHdENRVUZyUWp0QlFVRnpRaXhKUVVGSkxGZEJRVmNzYzBKQlFYTkNPMEZCUVhGQ0xFbEJRVWtzVjBGQlZ5eHBRMEZCYVVNN1FVRkJZU3hKUVVGSkxGZEJRVmNzWVVGQllUdEJRVUZoTEVsQlFVa3NWMEZCVnl4aFFVRmhPMEZCUVdsQ0xFbEJRVWtzVjBGQlZ5d3dRa0ZCTUVJN1FVRkJSU3hOUVVGQkxHdERRVUZuUXl4SlFVRkpMRmRCUVZjc2EwTkJRV3RETzBGQlFTdENMRWxCUVVrc1YwRkJWeXdyUWtGQkswSTdRVUZCSzBJc1NVRkJTU3hYUVVGWExDdENRVUVyUWp0QlFVRnRReXhKUVVGSkxGZEJRVmNzYlVOQlFXMURPMEZCUVdkRExFbEJRVWtzVjBGQlZ5eG5RMEZCWjBNN1FVRkJkVU1zU1VGQlNTeFhRVUZYTEhWRFFVRjFRenRCUVVFMlFpeEpRVUZKTEZkQlFWY3NOa0pCUVRaQ08wRkJRWEZDTEVsQlFVa3NWMEZCVnl4elFrRkJjMEk3UVVGQk5FSXNTVUZCU1N4WFFVRlhMRFpDUVVFMlFqdEJRVUY1UWl4SlFVRkpMRmRCUVZjc01FSkJRVEJDTzBGQlFUaENMRWxCUVVrc1YwRkJWeXdyUWtGQkswSTdRVUZCTmtJc1NVRkJTU3hYUVVGWExEWkNRVUUyUWp0QlFVRnpReXhKUVVGSkxGZEJRVmNzYzBOQlFYTkRPMEZCUVcxRExFbEJRVWtzVjBGQlZ5eHRRMEZCYlVNN1FVRkJNa01zU1VGQlNTeFhRVUZYTERKRFFVRXlRenRCUVVGblF5eEpRVUZKTEZkQlFWY3NaME5CUVdkRE8wRkJRVEJDTEVsQlFVa3NWMEZCVnl3d1FrRkJNRUk3UVVGQlowTXNTVUZCU1N4WFFVRlhMR2REUVVGblF6dEJRVUUyUWl4SlFVRkpMRmRCUVZjc05rSkJRVFpDTzBGQlFYVkRMRWxCUVVrc1YwRkJWeXgxUTBGQmRVTTdRVUZCTWtNc1NVRkJTU3hYUVVGWExESkRRVUV5UXpzN08wRkRRWFkzUml4VFFVRlRMQ3REUVVFclF5eEhRVUZGTEVkQlFVVTdRMEZCUXl4SlFVRkpMRWxCUVVVc1JVRkJSU3huUTBGQlowTTdRMEZCVFN4UFFVRlBMRTFCUVVrc1MwRkJTeXhKUVVGRkxFbEJRVVU3UlVGQlF5eEhRVUZITzBkQlFVY3NaME5CUVdkRExFOUJRVTA3UTBGQlF6dEJRVUZET3pzN1FVTkROVThzU1VGQlZ5dzBRa0ZCTkVJc1YwRkJWeXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXcyUTBGQk5rTTdPenRCUTBGb1NTeEpRVUZYTERKQ1FVRXlRaXhYUVVGWExFOUJRVThzU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRExEUkRRVUUwUXpzN08wRkRRVGxJTEVsQlFWY3NaME5CUVdkRExGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zYVVSQlFXbEVPenM3UVVORWVFa3NUVUZCVFN3MFFrRkJNRUk3UVVGQmNVSXNTVUZCU1N4eFFrRkJiVUlzWTBGQll5eE5RVUZMTzBOQlFVTXNXVUZCV1N4SlFVRkZMREpDUVVFd1FqdEZRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkZMRXRCUVVzc1QwRkJTenREUVVGNVFqdEJRVUZET3pzN1FVTkJkRXdzVTBGQlV5d3dRa0ZCTUVJc1IwRkJSVHREUVVGRExFOUJRVTBzUjBGQlJ5eEZRVUZGTzBGQlFWRTdPenRCUTBGNVR5eGxRVUZsTERoQ1FVRTRRaXhIUVVGRk8wTkJRVU1zU1VGQlNTeEpRVUZGTEZkQlFWY3NSVUZCUXl4UFFVRk5MREJDUVVFd1FpeEZRVUZGTEZsQlFWa3NSVUZCUXl4RFFVRkRMRWRCUVVVc1NVRkJSU3hGUVVGRkxFOUJRVThzWTBGQll5eERRVUZETzBOQlFVVXNTVUZCUnp0RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVTTdRMEZCUXl4VFFVRlBMRWRCUVVVN1JVRkJReXhKUVVGSExHOUNRVUZ2UWl4RFFVRkRMRWRCUVVVN1JVRkJUeXhOUVVGTk8wTkJRVU03UTBGQlF5eEpRVUZKTEVsQlFVVXNTVUZCU1N4blFrRkJZeXhIUVVGRkxHTkJRVlVzUlVGQlJTeE5RVUZOTEVsQlFVa3NiVUpCUVdsQ0xFTkJRVU1zUjBGQlJTeEpRVUZGTEVWQlFVVXNiVUpCUVdsQ0xFdEJRVXNzUzBGQlJ5eHJRa0ZCYTBJc1JVRkJSU3huUWtGQlpTeEZRVUZGTEdOQlFXTTdRMEZCUlN4TFFVRkhMRTFCUVUwN1EwRkJSU3hKUVVGSkxFbEJRVVVzU1VGQlJTeFJRVUZSTEZGQlFWRXNSVUZCUlN4alFVRmpMRWxCUVVVc2MwSkJRWE5DTEVkQlFVVXNSVUZCUlN4blFrRkJaU3hMUVVGTExFZEJRVVVzU1VGQlJTeERRVUZETzBOQlFVVXNUMEZCVFR0RlFVRkRMRk5CUVZFN1JVRkJSU3hSUVVGUExFVkJRVVU3UlVGQlR5eFhRVUZWTEVWQlFVVXNWMEZCVXl4UlFVRlJPMFZCUVVVc1RVRkJUU3hWUVVGVE8wZEJRVU1zVFVGQlNTeEpRVUZGTEVOQlFVTXNSMEZCUlN4TlFVRk5MRmxCUVZrc1EwRkJRenRGUVVGRk8wTkJRVU03UVVGQlF6dEJRVUZETEdWQlFXVXNjMEpCUVhOQ0xFZEJRVVVzUjBGQlJTeEhRVUZGTzBOQlFVTXNVMEZCVHp0RlFVRkRMRWxCUVVrc1NVRkJSU3hOUVVGTkxFVkJRVVVzUzBGQlN6dEZRVUZGTEVsQlFVY3NSVUZCUlN4TlFVRkxMRTlCUVU4c1RVRkJUU3hKUVVGSkxHTkJRVmtzUTBGQlF5eERRVUZETzBWQlFVVXNTVUZCUnl4clFrRkJhMElzUlVGQlJTeFBRVUZOTEVOQlFVTXNSMEZCUlN4UFFVRlBMRVZCUVVVc1IwRkJSU3hGUVVGRk8wTkJRVXM3UVVGQlF6dEJRVUZETEZOQlFWTXNhMEpCUVd0Q0xFZEJRVVVzUjBGQlJUdERRVUZETEVsQlFVY3NUMEZCVHl4TFFVRkhMRmxCUVZVc1EwRkJReXhIUVVGRkxFOUJRVTBzUTBGQlF6dERRVUZGTEVsQlFVa3NTVUZCUlN4RlFVRkZPME5CUVU4c1QwRkJUeXhOUVVGSkxFdEJRVXNzUzBGQlJ5eE5RVUZKTzBGQlFVTTdPenRCUTBGMmIwTXNTVUZCU1N4eFFrRkJiVUlzVFVGQlN6dERRVUZETzBOQlFYbENPME5CUVc5Q0xGbEJRVmtzUjBGQlJUdEZRVUZETEV0QlFVc3NNa0pCUVhsQ0xFVkJRVVVzYlVKQlFXdENMRXRCUVVzc2MwSkJRVzlDTEVWQlFVVTdRMEZCV1R0RFFVRkRMRWxCUVVrc2IwSkJRVzFDTzBWQlFVTXNUMEZCVHl4TFFVRkxPME5CUVhkQ08wTkJRVU1zU1VGQlNTeGxRVUZqTzBWQlFVTXNUMEZCVHl4TFFVRkxPME5CUVcxQ08wTkJRVU1zVjBGQlZ5eEhRVUZGTzBWQlFVTXNTMEZCU3l3eVFrRkJlVUlzUlVGQlJTeHhRa0ZCYlVJc1MwRkJTeXd3UWtGQmVVSXNTMEZCU3l4elFrRkJiMElzUlVGQlJTeG5Ra0ZCWXl4TFFVRkxPME5CUVcxQ08wRkJRVU03T3p0QlEwRTFWQ3hKUVVGSkxITkNRVUZ2UWl4alFVRmpMRzFDUVVGclFqdERRVUZETzBOQlFXRTdRMEZCWlR0RFFVRTRRaXhaUVVGWkxFZEJRVVU3UlVGQlF5eE5RVUZOTzBkQlFVTXNiVUpCUVd0Q0xFVkJRVVU3UjBGQmEwSXNZMEZCWVN4RlFVRkZPMFZCUVZrc1EwRkJReXhIUVVGRkxFdEJRVXNzWlVGQllTeEZRVUZGTEdOQlFXRXNTMEZCU3l4blEwRkJPRUlzUlVGQlJTeGhRVUZoTEcxQ1FVRnJRaXhMUVVGTExHbENRVUZsTEVWQlFVVTdRMEZCWXp0RFFVRkRMRTFCUVUwc1RVRkJUU3hIUVVGRk8wVkJRVU1zUzBGQlN5eFhRVUZYTEVOQlFVTTdSVUZCUlN4SlFVRkpMRWxCUVVVc1JVRkJSU3hoUVVGaE8wVkJRV3RDTEUxQlFVa3NUVUZCU1N4TlFVRkpMRXRCUVVzc2EwTkJRV2RETEV0QlFVc3NaME5CUVRoQ0xFZEJRVVVzVFVGQlRTeExRVUZMTEV0QlFVczdSMEZCUXl4dFFrRkJhMEk3UjBGQlJTeE5RVUZMTzBWQlFYbENMRU5CUVVNN1EwRkJSVHREUVVGRExHZENRVUZuUWl4SFFVRkZMRWRCUVVVN1JVRkJReXhQUVVGTk8wZEJRVU1zWVVGQldUdEhRVUZGTEU5QlFVMDdSMEZCUlN4blFrRkJaU3hMUVVGTE8wZEJRV1VzYlVKQlFXdENMRXRCUVVzN1IwRkJhMElzWTBGQllTeExRVUZMTzBWQlFWazdRMEZCUXp0RFFVRkRMRTFCUVUwc1QwRkJUeXhIUVVGRkxFZEJRVVVzUjBGQlJUdEZRVUZETEV0QlFVc3NWMEZCVnl4RFFVRkRMRWRCUVVVc1RVRkJUU3hMUVVGTExFdEJRVXM3UjBGQlF5eFJRVUZQTzBsQlFVTXNSMEZCUnp0SlFVRkZMRzFDUVVGclFpeExRVUZMTzBsQlFXdENMR05CUVdFc1MwRkJTenRIUVVGWk8wZEJRVVVzYjBKQlFXMUNMRVZCUVVVc1YwRkJVeXhKUVVGRkxFdEJRVXNzU1VGQlJTeERRVUZETEVkQlFVY3NRMEZCUXp0SFFVRkZMRTFCUVVzN1JVRkJZU3hEUVVGRE8wTkJRVU03UTBGQlF5eE5RVUZOTEV0QlFVc3NSMEZCUlR0RlFVRkRMRTFCUVUwc2IwSkJRVzlDTzBkQlFVTXNZMEZCWVN4TFFVRkxPMGRCUVdFc1UwRkJVVHRGUVVGRExFTkJRVU03UTBGQlF6dEJRVUZET3pzN1FVTkJlRzlETEZOQlFWTXNjME5CUVhORExFZEJRVVU3UTBGQlF5eEpRVUZKTEVsQlFVVXNTVUZCU1N4SlFVRkpMRVZCUVVVc1kwRkJZeXhIUVVGRkxFbEJRVVVzU1VGQlNTeEpRVUZGTzBOQlFVVXNTMEZCU1N4SlFVRkpMRXRCUVVzc1JVRkJSU3hUUVVGUkxFVkJRVVVzU1VGQlNTeEZRVUZGTEUxQlFVMHNTMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hSUVVGUExFTkJRVU03UTBGQlJTeEpRVUZKTEVsQlFVVXNRMEZCUXp0RFFVRkZMRXRCUVVrc1NVRkJTU3hMUVVGTExFVkJRVVVzWjBKQlFXVTdSVUZCUXl4SlFVRkpMRWxCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU03UlVGQlJTeEpRVUZITEUxQlFVa3NTMEZCU3l4SFFVRkZPMFZCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU03UTBGQlF6dERRVUZETEU5QlFVODdRVUZCUXpzN08wRkRRM0JRTEVsQlFWY3NhVU5CUVdsRExGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zYTBSQlFXdEVPenM3UVVORUszQkNMR1ZCUVdVc05rSkJRVFpDTEVkQlFVVTdRMEZCUXl4SlFVRkhMRVZCUVVNc1VVRkJUeXhIUVVGRkxGTkJRVkVzVFVGQlJ5eEhRVUZGTEVsQlFVVXNiMEpCUVc5Q0xFVkJRVVVzWVVGQllTeFZRVUZWTEZGQlFWRXNUMEZCVFN4RlFVRkZMRXRCUVVzc1RVRkJUVHREUVVGRkxFbEJRVWNzUjBGQlJ5eFZRVUZSTEVWQlFVVXNTMEZCU3l4UFFVRk5PME5CUVU4c1NVRkJTU3hKUVVGRkxFVkJRVVVzWlVGQllTeGhRVUZYTEUxQlFVMHNjMEpCUVhOQ0xFTkJRVU1zU1VGQlJTeHRRMEZCYlVNc1EwRkJRenREUVVGRkxFMUJRVTBzSzBKQlFTdENPMFZCUVVNc1UwRkJVU3hGUVVGRkxFdEJRVXM3UlVGQlRTeHRRa0ZCYTBJc1JVRkJSVHRGUVVGclFpeGpRVUZoTEVWQlFVVTdRMEZCV1N4RFFVRkRPME5CUVVVc1NVRkJTU3hKUVVGRkxFMUJRVTBzWjBOQlFXZERPMFZCUVVNc1YwRkJWU3hGUVVGRkxFOUJRVThzVjBGQlV6dEZRVUZaTEZOQlFWRXNSVUZCUlN4TFFVRkxPMFZCUVUwc1kwRkJZU3hGUVVGRk8wTkJRVmtzUTBGQlF6dERRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5PMFZCUVVNc2JVSkJRV3RDTEVWQlFVVTdSVUZCYTBJc1kwRkJZU3hGUVVGRk8wTkJRVmtzUTBGQlF6dERRVUZGTEVsQlFVa3NTVUZCUlN4RlFVRkZMR0ZCUVdFc1ZVRkJWU3hSUVVGUk8wTkJRVTBzVVVGQlR5eEZRVUZGTEZOQlFVOHNiMEpCUVd0Q0xFVkJRVVVzVjBGQlV5eEZRVUZGTEV0QlFVc3NWVUZCVVN4cFJFRkJhVVFzUjBGQlJTeERRVUZETEVsQlFVVXNOa05CUVRaRExFZEJRVVVzUTBGQlF5eExRVUZITEVsQlFVVXNTMEZCU3p0QlFVRkRPMEZCUVVNc1pVRkJaU3h6UWtGQmMwSXNSMEZCUlR0RFFVRkRMRWxCUVVjc1JVRkJReXhSUVVGUExFZEJRVVVzVTBGQlVTeE5RVUZITEVkQlFVVXNTVUZCUlN4MVEwRkJkVU1zUTBGQlF6dERRVUZGTEU5QlFVOHNSVUZCUlN4WFFVRlRMRmRCUVZNc1RVRkJUU3hGUVVGRkxFMUJRVTBzVFVGQlRTeHpRa0ZCYzBJN1JVRkJReXhwUWtGQlowSXNRMEZCUXp0RlFVRkZMRk5CUVZFc1JVRkJSU3hMUVVGTE8wVkJRVTBzVTBGQlVTeEZRVUZGTEV0QlFVczdSVUZCVFN4VFFVRlJPMGRCUVVNc1RVRkJTenRIUVVGblFpeFJRVUZQTzBWQlFVTTdRMEZCUXl4SFFVRkZMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJUdEJRVUZETzBGQlFVTXNaVUZCWlN3MlFrRkJOa0lzUjBGQlJUdERRVUZETEVsQlFVY3NSVUZCUXl4UlFVRlBMRWRCUVVVc1UwRkJVU3hOUVVGSE8wTkJRVVVzU1VGQlJ5eEZRVUZGTEZGQlFWRXNVMEZCVHl4clFrRkJaMElzUlVGQlJTeFJRVUZSTEZOQlFVOHNhVUpCUVdkQ08wVkJRVU1zU1VGQlJ5eHZRa0ZCYjBJc1JVRkJSU3hoUVVGaExGVkJRVlVzVVVGQlVTeFBRVUZOTEVWQlFVVXNTMEZCU3l4TlFVRk5MRU5CUVVNc1JVRkJSU3hWUVVGUkxFVkJRVVVzUzBGQlN5eFBRVUZOTzBkQlFVTXNSVUZCUlN4UlFVRlJMRk5CUVU4c2EwSkJRV2RDTEUxQlFVMHNaVUZCWlN4RlFVRkZMRk5CUVZFN1NVRkJReXhOUVVGTE8wbEJRWGRDTEZOQlFWRXNRMEZCUXp0TFFVRkRMRkZCUVU4c1JVRkJSU3hSUVVGUk8wdEJRV0VzVTBGQlVTeERRVUZETzB0QlFVVXNUVUZCU3p0TFFVRnJRaXhSUVVGUE8wdEJRVmNzVVVGQlR6dE5RVUZETEUxQlFVczdUVUZCWjBNc1UwRkJVVHRMUVVFMlJEdExRVUZGTEdOQlFXRXNSVUZCUlN4UlFVRlJMRTFCUVUwN1NVRkJUU3hEUVVGRE8wZEJRVU1zUTBGQlF6dEhRVUZGTzBWQlFVMDdSVUZCUXl4TlFVRk5MRVZCUVVVc1RVRkJUU3hOUVVGTkxITkNRVUZ6UWp0SFFVRkRMR2xDUVVGblFpeEZRVUZGTEV0QlFVc3NaVUZCWVR0SFFVRlhMRk5CUVZFc1JVRkJSU3hMUVVGTE8wZEJRVTBzVTBGQlVTeEZRVUZGTzBkQlFWRXNVMEZCVVN4RlFVRkZPMFZCUVU4c1IwRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETzBWQlFVVTdRMEZCVFR0RFFVRkRMRWxCUVVjc1JVRkJSU3hSUVVGUkxGTkJRVThzZVVKQlFYZENPMFZCUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzVFVGQlRTd3dRa0ZCTUVJN1IwRkJReXhoUVVGWkxFVkJRVVVzVVVGQlVUdEhRVUZOTEdkQ1FVRmxMRVZCUVVVN1IwRkJaU3h0UWtGQmEwSXNSVUZCUlR0SFFVRnJRaXhqUVVGaExFVkJRVVU3UlVGQldTeERRVUZETEVOQlFVTTdSVUZCUlR0RFFVRk5PME5CUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzVFVGQlRTd3dRa0ZCTUVJN1JVRkJReXhIUVVGSExFVkJRVVVzZFVKQlFYRkNMRXRCUVVzc1NVRkJSU3hGUVVGRExGbEJRVmNzUlVGQlF5eFBRVUZOTEVWQlFVVXNTMEZCU3l4TlFVRkxMRVZCUVVNc1NVRkJSU3hEUVVGRE8wVkJRVVVzWVVGQldTdzBRMEZCTkVNc1EwRkJRenRGUVVGRkxHZENRVUZsTEVWQlFVVTdSVUZCWlN4dFFrRkJhMElzUlVGQlJUdEZRVUZyUWl4alFVRmhMRVZCUVVVN1EwRkJXU3hEUVVGRExFTkJRVU03UVVGQlF6dEJRVUZETEZOQlFWTXNaVUZCWlN4SFFVRkZPME5CUVVNc1QwRkJUVHRGUVVGRExHbENRVUZuUWl3clFrRkJLMElzUlVGQlJTeHRRa0ZCYlVJN1JVRkJSU3huUWtGQlpTeEZRVUZGTEU5QlFVODdSVUZCWlN4dFFrRkJhMElzUlVGQlJTeFBRVUZQTzBWQlFXdENMR05CUVdFc1JVRkJSU3hQUVVGUE8wTkJRVms3UVVGQlF6czdPMEZEUTJ3MVF5eE5RVUZOTEN0Q1FVRTJRanRCUVVFMFJDeGxRVUZsTEdGQlFXRXNSMEZCUlR0RFFVRkRMRWxCUVVrc1NVRkJSU3g1UWtGQmVVSXNRMEZCUXp0RFFVRkZMRTlCUVU4c1JVRkJSU3h2UWtGQmIwSXNZMEZCV1N4RFFVRkRMRWxCUVVVc2NVSkJRWEZDTEVOQlFVTXNTVUZCUlN4elFrRkJjMElzUTBGQlF6dEJRVUZETzBGQlFVTXNaVUZCWlN4eFFrRkJjVUlzUjBGQlJUdERRVUZETEVsQlFVa3NTVUZCUlN4WFFVRlhMRVZCUVVNc1QwRkJUU3hIUVVGSExFVkJRVVVzWjBKQlFXZENMRkZCUVU4c1EwRkJReXhIUVVGRkxFbEJRVVVzYjBKQlFXOUNMRk5CUVZFc1EwRkJReXhIUVVGRkxFbEJRVVVzUlVGQlJTeGhRVUZaTEVsQlFVVXNTVUZCU1N4dlFrRkJiMEk3UlVGQlF5eGpRVUZoTEVWQlFVVTdSVUZCWjBJc1owSkJRV1VzUlVGQlJTeFZRVUZWTzBWQlFXVXNiVUpCUVd0Q0xFZEJRVWNzVjBGQlZ5eHhRa0ZCYlVJc1JVRkJSU3hWUVVGVk8wVkJRV3RDTEdOQlFXRXNSMEZCUnl4WFFVRlhMR2RDUVVGakxFVkJRVVVzVlVGQlZUdERRVUZaTEVOQlFVTXNSMEZCUlN4SlFVRkZMRWRCUVVVc09FSkJRVEJDTEVkQlFVY3NSVUZCUlN4TlFVRk5MRmxCUVZrc1QwRkJUeXhIUVVGSExFdEJRVWtzU1VGQlJTeERRVUZETEVkQlFVVXNTVUZCUlN4RlFVRkZMRlZCUVZVc1QwRkJUU3hKUVVGRkxFTkJRVU1zUjBGQlJTeEhRVUZGTzBOQlFVVXNTVUZCUnp0RlFVRkRMRWxCUVVjN1IwRkJReXhOUVVGTkxHMUNRVUZ0UWl4RFFVRkRMRWRCUVVVc1NVRkJSU3hEUVVGRE8wVkJRVU1zVTBGQlR5eEhRVUZGTzBkQlFVTXNTVUZCUnl4dlFrRkJiMElzUTBGQlF5eEhRVUZGTzBkQlFVOHNUVUZCVFR0RlFVRkRPMFZCUVVNc1NVRkJSU3hwUTBGQmFVTXNSVUZCUlN4TFFVRkxPMFZCUVVVc1NVRkJTU3hKUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEZOQlFWRXNRMEZCUXp0RlFVRkZMRXRCUVVrc1JVRkJSU3h2UWtGQmIwSXNkMEpCUVhOQ0xFTkJRVU1zVFVGQlNTeEpRVUZGTEUxQlFVMHNPRUpCUVRoQ08wZEJRVU1zWTBGQllTeEZRVUZGTzBkQlFXZENMR2RDUVVGbExHRkJRV0VzUlVGQlJTeGhRVUZoTEdGQlFXRTdSMEZCUlN4blFrRkJaU3hGUVVGRk8wVkJRVzFDTEVOQlFVTXNUVUZCU3p0SFFVRkRMRWxCUVVrc1NVRkJSU3hIUVVGSExHTkJRVms3U1VGQlF5eHRRa0ZCYTBJc1JVRkJSVHRKUVVGclFpeGpRVUZoTEVWQlFVVTdSMEZCV1N4SFFVRkZMRWxCUVVVc1IwRkJSeXhWUVVGUkxFMUJRVTBzVTBGQlV5eEZRVUZGTEdkQ1FVRm5RaXhIUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETzBkQlFVVXNTVUZCUlN4TFFVRkxPMGRCUVVVc1NVRkJTU3hKUVVGRkxFVkJRVVVzVjBGQlV5dzBRa0ZCTUVJc1JVRkJSU3h4UWtGQmJVSXNSVUZCUlN4WFFVRlRMRk5CUVU4c1JVRkJSU3cyUWtGQk1rSXNTMEZCU3l4SFFVRkZMRXRCUVVjc1JVRkJSU3hwUWtGQmFVSXNWVUZCVVN4TFFVRkhPMGRCUVVVc1NVRkJSeXhIUVVGRk8wbEJRVU1zU1VGQlJ5eEZRVUZGTEhkQ1FVRnpRaXhMUVVGTExFZEJRVVVzVFVGQlRTeE5RVUZOTEhWRlFVRjFSVHRKUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTzB0QlFVTXNiVUpCUVd0Q0xFVkJRVVU3UzBGQmEwSXNZMEZCWVN4RlFVRkZPMGxCUVcxQ0xFTkJRVU1zUjBGQlJTeE5RVUZOTERoQ1FVRTRRaXhGUVVGRExFOUJRVTBzUlVGQlJTeHRRa0ZCYVVJc1EwRkJReXhGUVVGRExFTkJRVU03UjBGQlF6dEhRVUZETEVsQlFVY3NSVUZCUlN4WFFVRlRMR0ZCUVZrN1NVRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRUdExRVUZETEcxQ1FVRnJRaXhGUVVGRk8wdEJRV3RDTEdOQlFXRXNSVUZCUlN4MVFrRkJjVUlzUlVGQlJUdEpRVUZaTEVOQlFVTXNSMEZCUlN4TlFVRk5MRzlDUVVGdlFqdExRVUZETEc5Q1FVRnRRanRMUVVGRkxHTkJRV0U3UzBGQlJTeFJRVUZQTzBsQlFVTXNRMEZCUXp0SlFVRkZPMGRCUVUwN1IwRkJReXhKUVVGSExFZEJRVWNzVDBGQlR5eFpRVUZWTEVOQlFVTXNUVUZCU1N4TlFVRkpMRXRCUVVzc1MwRkJSeXhKUVVGSE8wbEJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMDdTMEZCUXl4dFFrRkJhMElzSzBOQlFTdERMRVZCUVVVc2JVSkJRV3RDTEVWQlFVVXNhVUpCUVdsQ08wdEJRVVVzWTBGQllTeEZRVUZGTzBsQlFWa3NRMEZCUXl4SFFVRkZMRTFCUVUwc2IwSkJRVzlDTzB0QlFVTXNiMEpCUVcxQ08wdEJRVVVzWTBGQllUdExRVUZGTEZGQlFVODdTVUZCUXl4RFFVRkRPMGxCUVVVN1IwRkJUVHRIUVVGRExFbEJRVWNzUlVGQlJTeFhRVUZUTEZGQlFVODdTVUZCUXl4TlFVRk5MRWRCUVVjc1VVRkJVU3hIUVVGRkxFMUJRVTBzUlVGQlJTeFBRVUZQTEVkQlFVVTdTMEZCUXl4TlFVRkxPMHRCUVU4c1VVRkJUeXhGUVVGRkxGVkJRVkU3UzBGQlJ5eFRRVUZSTEVWQlFVVTdTMEZCVVN4UFFVRk5MRVZCUVVVN1MwRkJUU3haUVVGWExFVkJRVVU3U1VGQlZTeEhRVUZGTEVOQlFVTTdTVUZCUlR0SFFVRk5PMGRCUVVNc1NVRkJSeXhOUVVGSkxFdEJRVXNzVFVGQlNTeEZRVUZGTEZkQlFWTXNWVUZCVVN4RlFVRkZMRmRCUVZNc05FSkJRVEpDTzBsQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJRenRKUVVGRkxFbEJRVWtzU1VGQlJTeE5RVUZOTEhsQ1FVRjVRanRMUVVGRExGRkJRVThzUlVGQlJUdExRVUZQTEdsQ1FVRm5RaXdyUWtGQkswSXNiMEpCUVc5Q0xFTkJRVU1zUTBGQlF5eEhRVUZITzB0QlFVVXNlVUpCUVhkQ0xFVkJRVVU3UzBGQlRTeG5Ra0ZCWlN4RlFVRkZPMHRCUVdVc2JVSkJRV3RDTEVWQlFVVTdTMEZCYTBJc1kwRkJZU3hGUVVGRk8wbEJRVmtzUTBGQlF5eEhRVUZGTEVsQlFVVXNSVUZCUlN4UlFVRlJMRmRCUVZNc1NVRkJSU3hMUVVGTExFbEJRVVVzUzBGQlN5eEpRVUZKTzBsQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhIUVVGRkxFMUJRVTBzT0VKQlFUaENMRVZCUVVNc1QwRkJUU3hGUVVGRkxHRkJRVmtzUTBGQlF6dEpRVUZGTEVsQlFVa3NTVUZCUlN4TlFVRk5MRFJDUVVFMFFqdExRVUZETEc5Q1FVRnRRanRMUVVGRkxHTkJRV0U3UzBGQlJTeFJRVUZQTzB0QlFVVXNXVUZCVnl4RlFVRkZPMHRCUVUwc2NVSkJRVzlDTzB0QlFVVXNaMEpCUVdVc1JVRkJSVHRMUVVGUk8wdEJRWE5DTEZOQlFWRTdTMEZCUlN4blFrRkJaVHRKUVVGRExFTkJRVU03U1VGQlJTeEpRVUZITEUxQlFVa3NZVUZCV1R0TFFVRkRMRWxCUVVVc1MwRkJTenRMUVVGRk8wbEJRVkU3U1VGQlF5eEpRVUZITEUxQlFVa3NaVUZCWXp0",
	"TFFVRkRMRTFCUVUwc2IwSkJRVzlDTzAxQlFVTXNiMEpCUVcxQ08wMUJRVVVzWTBGQllUdE5RVUZGTEZGQlFVODdTMEZCUXl4RFFVRkRPMHRCUVVVN1NVRkJUVHRKUVVGRExFbEJRVVU3UzBGQlF5eE5RVUZMTzB0QlFYZENMRWRCUVVjN1NVRkJRenRKUVVGRk8wZEJRVkU3UjBGQlF5eEpRVUZITEVWQlFVVXNWMEZCVXl4UlFVRlBPMGxCUVVNc1NVRkJSeXhGUVVGRkxFVkJRVVVzTWtKQlFYbENMRVZCUVVVc2QwSkJRWE5DTEVWQlFVVXNZMEZCWXl4cFFrRkJaU3hEUVVGRExFdEJRVWNzUlVGQlJTeFRRVUZQTEdsQ1FVRm5RaXhOUVVGTkxFMUJRVTBzTkVKQlFUUkNPMGxCUVVVc1RVRkJUU3hIUVVGSExGRkJRVkVzUjBGQlJTeE5RVUZOTEVWQlFVVXNUMEZCVHl4SFFVRkZPMHRCUVVNc2VVSkJRWGRDTEVWQlFVVTdTMEZCZDBJc2IwSkJRVzFDTEVWQlFVVTdTMEZCYlVJc1RVRkJTenRMUVVGUExGTkJRVkVzUlVGQlJUdEpRVUZQTEVkQlFVVXNRMEZCUXp0SlFVRkZPMGRCUVUwN1IwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEVkQlFVVXNTVUZCUlN4TFFVRkxPMFZCUVVNN1EwRkJReXhUUVVGUExFZEJRVVU3UlVGQlF5eE5RVUZOTEUxQlFVMHNSVUZCUlN4TFFVRkxPMGRCUVVNc1QwRkJUU3d5UWtGQk1rSXNRMEZCUXp0SFFVRkZMRTFCUVVzN1JVRkJXU3hEUVVGRExFZEJRVVU3UTBGQlF5eFZRVUZSTzBWQlFVTXNUVUZCU1N4TFFVRkxMRXRCUVVjc1RVRkJUU3hGUVVGRkxGRkJRVkVzUjBGQlJTeE5RVUZKTEV0QlFVc3NTMEZCUnl4TlFVRk5MRVZCUVVVc1VVRkJVU3hIUVVGRkxFdEJRVWNzVFVGQlRTeFpRVUZaTEVOQlFVTTdRMEZCUXp0QlFVRkRPMEZCUVVNc1pVRkJaU3h2UWtGQmIwSXNSMEZCUlR0RFFVRkRMRU5CUVVNc1JVRkJSU3hqUVVGakxFOUJRVThzV1VGQlZTeERRVUZETEVsQlFVVXNUVUZCVFN4RlFVRkZMR0ZCUVdFc1ZVRkJVU3hMUVVGTExFVkJRVUVzUlVGQlNTeFZRVUZSTEVOQlFVTXNTMEZCUnl4TlFVRk5MR2xEUVVGcFF6dEZRVUZETEcxQ1FVRnJRaXhGUVVGRkxFOUJRVTg3UlVGQmEwSXNZMEZCWVN4RlFVRkZMRTlCUVU4N1EwRkJXU3hEUVVGRExFZEJRVVVzVFVGQlRTd3dRa0ZCTUVJN1JVRkJReXh0UWtGQmEwSXNSVUZCUlN4UFFVRlBPMFZCUVd0Q0xHTkJRV0VzUlVGQlJTeFBRVUZQTzBOQlFWa3NRMEZCUXl4SFFVRkZMRTFCUVUwc1JVRkJSU3hqUVVGakxGRkJRVkVzUjBGQlJTeE5RVUZOTEVWQlFVVXNUMEZCVHl4UFFVRlBMRVZCUVVNc1kwRkJZU3hGUVVGRkxFOUJRVThzWVVGQldTeEhRVUZGTzBWQlFVTXNWMEZCVlN4RFFVRkRPMFZCUVVVc1RVRkJTenREUVVGTkxFZEJRVVVzUlVGQlJTeHJRa0ZCYTBJN1FVRkJRenRCUVVGRExHVkJRV1VzTkVKQlFUUkNMRWRCUVVVN1EwRkJReXhKUVVGSkxFZEJRVVVzU1VGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4alFVRmpMRWRCUVVVc1NVRkJSU3hKUVVGSkxFbEJRVVU3UTBGQlJTeEpRVUZITEVWQlFVVXNkMEpCUVhOQ0xFdEJRVXNzUjBGQlJTeExRVUZKTEVsQlFVa3NTMEZCU3l4RlFVRkZMR2RDUVVGbExFVkJRVVVzU1VGQlNTeEZRVUZGTEZGQlFVOHNSVUZCUlN4dFFrRkJiVUk3UTBGQlJTeFRRVUZQTzBWQlFVTXNTVUZCU1N4SlFVRkZMSE5EUVVGelF6dEhRVUZETEdkQ1FVRmxMRVZCUVVVN1IwRkJaU3hUUVVGUk8wVkJRVU1zUTBGQlF6dEZRVUZGTEVsQlFVY3NUVUZCU1N4TFFVRkxMRWRCUVVVc1QwRkJUeXhOUVVGSkxFdEJRVXNzUzBGQlJ5eE5RVUZOTEVWQlFVVXNUMEZCVHl4TFFVRkxPMGRCUVVNc1RVRkJTenRIUVVFd1FpeFhRVUZWTzBWQlFVTXNRMEZCUXl4SFFVRkZPMGRCUVVNc2MwSkJRWEZDTEU5QlFVOHNXVUZCV1N4RlFVRkZMRXRCUVVrc1RVRkJSeXhEUVVGRExFVkJRVVVzVVVGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8wZEJRVVVzVTBGQlVUdEZRVUZETzBWQlFVVXNSVUZCUlN4UFFVRlBMR0ZCUVdFc2VVSkJRWFZDTEUxQlFVa3NTMEZCU3l4TlFVRkpMRWxCUVVVc1JVRkJSU3h6UWtGQmMwSXNSMEZCUlN4TlFVRk5MRVZCUVVVc1QwRkJUeXhMUVVGTE8wZEJRVU1zYlVKQlFXdENMRVZCUVVVc1QwRkJUeXhoUVVGaE8wZEJRV3RDTEZsQlFWY3NSVUZCUlR0SFFVRlhMRTFCUVVzN1IwRkJkMElzVjBGQlZUdEZRVUZETEVOQlFVTTdSVUZCUnl4SlFVRkpMRWxCUVVVc1RVRkJUU3hwUWtGQmFVSXNSVUZCUlN4VFFVRlJMRVZCUVVVc1kwRkJZeXhUUVVGVE8wVkJRVVVzU1VGQlJ5eE5RVUZKTEZWQlFWTXNUMEZCVHl4TlFVRkpMRXRCUVVzc1MwRkJSeXhOUVVGTkxFVkJRVVVzVDBGQlR5eExRVUZMTzBkQlFVTXNUVUZCU3p0SFFVRXdRaXhYUVVGVk8wVkJRVU1zUTBGQlF5eEhRVUZGTzBWQlFWa3NTVUZCUnl4RlFVRkZMRXRCUVVzc1RVRkJTeXhOUVVGTkxFMUJRVTBzY1VSQlFYRkVPMFZCUVVVc1NVRkJSeXhGUVVGRkxGbEJRVlVzVjBGQlZUdEhRVUZETEVsQlFVa3NTVUZCUlN4TlFVRk5MRFpDUVVFMlFqdEpRVUZETEhGQ1FVRnZRaXh2UWtGQmIwSXNRMEZCUXl4RFFVRkRPMGxCUVVrc1VVRkJUeXhGUVVGRk8wbEJRVThzVTBGQlVTeEZRVUZGTEV0QlFVczdSMEZCU3l4RFFVRkRPMGRCUVVVc1RVRkJTU3hMUVVGTExFMUJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hSUVVGUExFdEJRVXNzU1VGQlNTeERRVUZETzBkQlFVYzdSVUZCVVR0RlFVRkRMRWxCUVVjc1JVRkJSU3haUVVGVkxGZEJRVlU3UjBGQlF5eE5RVUZOTERaQ1FVRTJRanRKUVVGRExIRkNRVUZ2UWl4dlFrRkJiMElzUTBGQlF5eERRVUZETzBsQlFVa3NVVUZCVHl4RlFVRkZPMGxCUVU4c1UwRkJVU3hGUVVGRkxFdEJRVXM3UjBGQlN5eERRVUZETzBkQlFVVTdSVUZCVVR0RlFVRkRMRWxCUVVjc1JVRkJSU3haUVVGVkxGVkJRVk03UjBGQlF5eE5RVUZOTERoQ1FVRTRRanRKUVVGRExFMUJRVXNzUlVGQlJTeExRVUZMTEUxQlFVMDdTVUZCU3l4blFrRkJaU3hGUVVGRkxFOUJRVTg3U1VGQlpTeFJRVUZQTEVWQlFVVXNTMEZCU3l4TlFVRk5PMGRCUVUwc1EwRkJRenRIUVVGRk8wVkJRVkU3UlVGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4TFFVRkxPMFZCUVUwc1NVRkJSeXhGUVVGRkxGTkJRVThzZVVKQlFYZENPMGRCUVVNc1NVRkJTU3hKUVVGRkxFVkJRVVVzVDBGQlR5eGhRVUZoTEZWQlFWVXNVVUZCVVN4UFFVRk5MRWxCUVVVc1JVRkJSU3hSUVVGUkxGRkJRVThzVFVGQlJ5eEZRVUZGTEZOQlFVOHNaMEpCUVdNc05rTkJRVFpETEVkQlFVVXNRMEZCUXl4SlFVRkZMRVZCUVVVc1YwRkJVeXhYUVVGVExIVkRRVUYxUXl4SFFVRkZMRU5CUVVNc1MwRkJSeXhwUkVGQmFVUXNSMEZCUlN4RFFVRkRMRU5CUVVNN1IwRkJSU3hKUVVGSExFVkJRVVVzVTBGQlR5eEhRVUZGTzBsQlFVTXNTVUZCU1N4SlFVRkZMRXRCUVVzc1NVRkJTVHRKUVVGRkxFVkJRVVVzUzBGQlN5eEhRVUZITEVOQlFVTTdTVUZCUlN4TFFVRkpMRWxCUVVrc1MwRkJTeXhIUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZGQlFVOHNRMEZCUXp0SFFVRkRPMGRCUVVNN1JVRkJVVHRGUVVGRExFbEJRVWNzUlVGQlJTeFRRVUZQTERSQ1FVRXdRaXhGUVVGRkxGTkJRVThzWjBOQlFTdENPMGRCUVVNc1NVRkJTU3hKUVVGRkxIVkNRVUYxUWl4RlFVRkZMRTlCUVU4c1lVRkJZU3hWUVVGVkxGRkJRVkVzVDBGQlRTeEZRVUZETEZGQlFVOHNSVUZCUlN4UFFVRk5MRU5CUVVNN1IwRkJSU3hKUVVGSExFZEJRVWNzVTBGQlV5eFRRVUZQTEVWQlFVVXNaMEpCUVdNc1JVRkJSU3hSUVVGUkxHTkJRVmtzUlVGQlJTeG5Ra0ZCWlR0SFFVRlRMRWxCUVVrc1NVRkJSU3hOUVVGTkxEQkNRVUV3UWp0SlFVRkRMR0ZCUVZrN1NVRkJSU3huUWtGQlpTeEZRVUZGTEU5QlFVODdTVUZCWlN4dFFrRkJhMElzUlVGQlJTeFBRVUZQTzBsQlFXdENMR05CUVdFc1JVRkJSU3hQUVVGUE8wZEJRVmtzUTBGQlF6dEhRVUZGTEUxQlFVMHNSVUZCUlN4UFFVRlBMRTFCUVUwc1EwRkJRenRIUVVGRk8wVkJRVkU3UlVGQlF5eEpRVUZITEVWQlFVVXNVMEZCVHl4eFFrRkJiVUlzUlVGQlJTeGpRVUZaTEVkQlFVVTdSMEZCUXl4TlFVRk5MRVZCUVVVc1QwRkJUeXhMUVVGTE8wbEJRVU1zVFVGQlN6dEpRVUY1UWl4WFFVRlZMRVZCUVVVN1IwRkJVeXhEUVVGRExFZEJRVVVzU1VGQlJTeExRVUZMTzBkQlFVVXNTVUZCU1N4SlFVRkZMRTFCUVUwc2RVSkJRWFZDTzBsQlFVTXNWVUZCVXl4RlFVRkZPMGxCUVZNc1owSkJRV1VzUlVGQlJTeFBRVUZQTzBsQlFXVXNiVUpCUVd0Q0xFVkJRVVVzVDBGQlR6dEpRVUZyUWl4alFVRmhMRVZCUVVVc1QwRkJUenRIUVVGWkxFTkJRVU03UjBGQlJTeEpRVUZITEUxQlFVMHNSVUZCUlN4UFFVRlBMRTFCUVUwN1NVRkJReXh0UWtGQmEwSXNSVUZCUlN4eFFrRkJiVUlzUlVGQlJTeFBRVUZQTzBsQlFXdENMR05CUVdFc1JVRkJSU3huUWtGQll5eEZRVUZGTEU5QlFVODdSMEZCV1N4RFFVRkRMRWRCUVVVc1JVRkJSU3hUUVVGUExHVkJRV01zVDBGQlR5eEZRVUZGTzBkQlFVc3NSVUZCUlN4alFVRlpMRXRCUVVzc1MwRkJSeXhGUVVGRkxHMUNRVUZ0UWl4TFFVRkxMRVZCUVVVc1UwRkJVenRGUVVGRE8wTkJRVU03UVVGQlF6dEJRVUZETEdWQlFXVXNjMEpCUVhOQ0xFZEJRVVU3UTBGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlR0RFFVRlZMRWxCUVVjN1JVRkJReXhUUVVGUE8wZEJRVU1zU1VGQlNTeEpRVUZGTEUxQlFVMHNVMEZCVXl4RFFVRkRPMGRCUVVVc1NVRkJSeXhGUVVGRkxGZEJRVk1zVVVGQlR6dEpRVUZETEUxQlFVMHNiMEpCUVc5Q08wdEJRVU1zWTBGQllTeEZRVUZGTzB0QlFXZENMRk5CUVZFN1RVRkJReXhSUVVGUE8wOUJRVU1zVFVGQlN6dFBRVUZQTEZGQlFVOHNSVUZCUlN4VlFVRlJPMDlCUVVjc1UwRkJVU3hGUVVGRk8wOUJRVkVzYlVKQlFXdENMRVZCUVVVN1QwRkJhMElzWTBGQllTeEZRVUZGTzA5QlFXRXNUMEZCVFN4RlFVRkZPMDlCUVUwc1dVRkJWeXhGUVVGRk8wMUJRVlU3VFVGQlJTeE5RVUZMTzB0QlFXRTdTVUZCUXl4RFFVRkRPMGxCUVVVN1IwRkJUVHRIUVVGRExFbEJRVWNzUlVGQlJTeFhRVUZUTERKQ1FVRXdRanRKUVVGRExFMUJRVTBzYjBKQlFXOUNPMHRCUVVNc1kwRkJZU3hGUVVGRk8wdEJRV2RDTEZOQlFWRTdUVUZCUXl4UlFVRlBPMDlCUVVNc1RVRkJTenRQUVVFd1FpeG5Ra0ZCWlN4RlFVRkZPMDlCUVcxQ0xHMUNRVUZyUWl4RlFVRkZPMDlCUVd0Q0xHTkJRV0VzUlVGQlJUdE5RVUZaTzAxQlFVVXNUVUZCU3p0TFFVRmhPMGxCUVVNc1EwRkJRenRKUVVGRk8wZEJRVTA3UjBGQlF5eEpRVUZITEVWQlFVVXNWMEZCVXl4UlFVRlBPMGxCUVVNc1NVRkJTU3hKUVVGRkxFVkJRVVU3U1VGQk1rSXNTVUZCUnl4RlFVRkZMRTFCUVVrc1MwRkJTeXhMUVVGSExFVkJRVVVzTWtKQlFYbENMRVZCUVVVc2QwSkJRWE5DTEVWQlFVVXNZMEZCWXl4cFFrRkJaU3hEUVVGRExFdEJRVWNzUlVGQlJTeFRRVUZQTEdsQ1FVRm5RaXhOUVVGTkxFMUJRVTBzTkVKQlFUUkNPMGxCUVVVc1NVRkJTU3hKUVVGRkxFMUJRVWtzUzBGQlN5eEpRVUZGTzB0QlFVTXNUVUZCU3p0TFFVRlBMRzFDUVVGclFpeEZRVUZGTzB0QlFXdENMR05CUVdFc1JVRkJSVHRMUVVGaExIbENRVUYzUWl4RlFVRkZPMHRCUVhkQ0xHOUNRVUZ0UWl4RlFVRkZPMHRCUVcxQ0xGTkJRVkVzUlVGQlJUdEpRVUZQTEVsQlFVVTdTMEZCUXl4TlFVRkxPMHRCUVhkQ0xHZENRVUZsTzB0QlFVVXNiVUpCUVd0Q0xFVkJRVVU3UzBGQmEwSXNZMEZCWVN4RlFVRkZPMGxCUVZrN1NVRkJSU3hOUVVGTkxHOUNRVUZ2UWp0TFFVRkRMR05CUVdFc1JVRkJSVHRMUVVGblFpeFRRVUZSTzAxQlFVTXNVVUZCVHp0TlFVRkZMRTFCUVVzN1MwRkJZVHRKUVVGRExFTkJRVU03U1VGQlJUdEhRVUZOTzBkQlFVTXNTVUZCUlR0SlFVRkRMRTlCUVUwc1MwRkJTenRKUVVGRkxHZENRVUZsTEVWQlFVVTdTVUZCWlN4dFFrRkJhMElzUlVGQlJUdEpRVUZyUWl4alFVRmhMRVZCUVVVN1IwRkJXVHRGUVVGRE8wTkJRVU1zVTBGQlR5eEhRVUZGTzBWQlFVTXNUVUZCVFN4TlFVRk5MRzlDUVVGdlFqdEhRVUZETEdOQlFXRXNSVUZCUlR0SFFVRm5RaXhUUVVGUk8wbEJRVU1zVDBGQlRTd3lRa0ZCTWtJc1EwRkJRenRKUVVGRkxFMUJRVXM3UjBGQldUdEZRVUZETEVOQlFVTXNSMEZCUlR0RFFVRkRPMEZCUVVNN1FVRkJReXhoUVVGaExHRkJRVmM3UVVGRGFHeFdMR0ZCUVdFc1lVRkJZVHRCUVVNeFFpeFhRVUZYTEc5Q1FVRnZRaXhKUVVGSkxDdENRVUVyUWl4WlFVRlpPenM3UVVOSU9VVXNUVUZCVFN3MFFrRkJNRUk3UVVGQk9GRXNVMEZCVXl4M1FrRkJkMElzUjBGQlJUdERRVUZETEU5QlFVMHNSMEZCUnl3d1FrRkJNRUlzUjBGQlJ5eEZRVUZGTzBGQlFVODdPenRCUTBGcVdTeFRRVUZUTEZOQlFWTXNSMEZCUlR0RFFVRkRMRTlCUVU4c1QwRkJUeXhMUVVGSExGbEJRVlVzUTBGQlF5eERRVUZETEV0QlFVY3NRMEZCUXl4TlFVRk5MRkZCUVZFc1EwRkJRenRCUVVGRE8wRkJRVU1zVTBGQlV5eHBRa0ZCYVVJc1IwRkJSVHREUVVGRExFOUJRVThzVDBGQlR5eExRVUZITEZsQlFWVXNSVUZCUlN4VFFVRlBPMEZCUVVNN096dEJRMEZwYWtNc1UwRkJVeXhyUWtGQmEwSXNSMEZCUlR0RFFVRkRMRWxCUVVrc1NVRkJSU3hGUVVGRkxITkNRVUZ4UWl4SlFVRkZMRWRCUVVjc1VVRkJUeXhKUVVGRkxFZEJRVWNzWlVGQll5eEpRVUZGTEVkQlFVY3NWMEZCVlN4SlFVRkZMRWRCUVVjc1RVRkJUVHREUVVGSExFOUJRVTA3UlVGQlF5eFJRVUZQTEdsQ1FVRnBRaXhEUVVGRExFbEJRVVVzU1VGQlJTeExRVUZMTzBWQlFVVXNaVUZCWXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZGTEVsQlFVVXNTMEZCU3p0RlFVRkZMRmRCUVZVc2FVSkJRV2xDTEVOQlFVTXNTVUZCUlN4SlFVRkZMRXRCUVVzN1JVRkJSU3hSUVVGUExHbENRVUZwUWl4RFFVRkRMRWxCUVVVc1NVRkJSU3hMUVVGTE8wTkJRVU03UVVGQlF6dEJRVUYxUlN4VFFVRlRMR3RDUVVGclFpeEhRVUZGTzBOQlFVTXNUMEZCVHl4clFrRkJhMElzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZCWVR0QlFVRkRMRk5CUVZNc2NVSkJRWEZDTEVkQlFVVTdRMEZCUXl4SlFVRkpMRWxCUVVVc1JVRkJSU3h2UWtGQmIwSTdRMEZCVFN4UFFVRlBMR2xDUVVGcFFpeERRVUZETEVsQlFVVXNTVUZCUlN4TFFVRkxPMEZCUVVNN1FVTkRhSEZFTEZkQlFWY3NUMEZCVHl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNOa05CUVRaRE8wRkJRM2hHTEZkQlFWY3NUMEZCVHl4SlFVRkpMRzFDUVVGdFFpeEZRVUZGTEVOQlFVTXNPRU5CUVRoRE8wRkJRMnhKTEVsQlFWY3NNRUpCUVRCQ0xGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zTWtOQlFUSkRPenM3UVVOR05VZ3NTVUZCVnl3MFFrRkJORUlzVjBGQlZ5eFBRVUZQTEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5dzJRMEZCTmtNN1FVRkRhRWtzU1VGQlZ5eDFRa0ZCZFVJc1YwRkJWeXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXgzUTBGQmQwTTdRVUZEZEVnc1NVRkJWeXhuUTBGQlowTXNWMEZCVnl4UFFVRlBMRWxCUVVrc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl4cFJFRkJhVVE3UVVGRGVFa3NTVUZCVnl3clFrRkJLMElzVjBGQlZ5eFBRVUZQTEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5eG5SRUZCWjBRN1FVRkRkRWtzU1VGQlZ5dzBRa0ZCTkVJc1YwRkJWeXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXcyUTBGQk5rTTdPenRCUTB4NFJpeFRRVUZUTEdWQlFXVXNSMEZCUlR0RFFVRkRMRTlCUVU4c1lVRkJZU3hSUVVGTkxFVkJRVVVzVlVGQlVTeFBRVUZQTEV0QlFVY3NWMEZCVXl4SlFVRkZMRXRCUVVjc1QwRkJTeXhQUVVGUExFTkJRVU1zU1VGQlJTeFRRVUZUTEVOQlFVTXNTVUZCUlN4UFFVRlBMRVZCUVVVc1YwRkJVeXhaUVVGVkxFVkJRVVVzVVVGQlVTeFRRVUZQTEVsQlFVVXNSVUZCUlN4VlFVRlJMR3RDUVVGclFpeERRVUZETEVsQlFVVXNUMEZCVHl4RFFVRkRPMEZCUVVNN1FVRkJkVmtzVTBGQlV5eHJRa0ZCYTBJc1IwRkJSVHREUVVGRExFbEJRVWM3UlVGQlF5eFBRVUZQTEV0QlFVc3NWVUZCVlN4RFFVRkRMRXRCUVVjc1QwRkJUeXhEUVVGRE8wTkJRVU1zVVVGQlRUdEZRVUZETEU5QlFVOHNUMEZCVHl4RFFVRkRPME5CUVVNN1FVRkJRenM3TzBGRFFYSjBRaXhOUVVGTkxIZENRVUZ6UWpzN08wRkRRWE5PTEUxQlFVMHNiVUpCUVdsQ08wTkJRVU1zYVVKQlFXZENPME5CUVVVc2EwSkJRV2xDTzBOQlFVVXNZVUZCV1R0RFFVRkZMR05CUVdFN1FVRkJRenRCUVVGRkxGTkJRVk1zY1VOQlFYRkRMRWRCUVVVc1IwRkJSVHREUVVGRExFbEJRVWtzU1VGQlJTeEZRVUZGTzBOQlFUQkNMRWxCUVVjc1IwRkJSeXhUUVVGUExIVkNRVUZ6UWl4UFFVRk5PMFZCUVVNc1VVRkJUeXhQUVVGUExFVkJRVVVzVDBGQlR5eFZRVUZSTEVWQlFVVTdSVUZCUlN4TlFVRkxPMFZCUVd0Q0xGRkJRVTg3UlVGQlVTeFRRVUZSTzBkQlFVTXNUVUZCU3p0SFFVRlhMRkZCUVU4N1NVRkJReXhOUVVGTE8wbEJRVmtzVVVGQlR6dEhRVUZETzBkQlFVVXNXVUZCVnp0RlFVRm5RanRGUVVGRkxGRkJRVTg3UlVGQlJTeGpRVUZoTEU5QlFVOHNSVUZCUlN4UFFVRlBMR2RDUVVGakxFVkJRVVU3UTBGQlF6dEJRVUZETzBGQlFVTXNVMEZCVXl4dFEwRkJiVU1zUjBGQlJTeEhRVUZGTzBOQlFVTXNTVUZCU1N4SlFVRkZMSEZEUVVGeFF5eEhRVUZGTEVWQlFVVTdRMEZCUlN4SlFVRkhMRTFCUVVrc1MwRkJTeXhIUVVGRk8wTkJRVThzU1VGQlNTeEpRVUZGTzBWQlFVTXNUVUZCU3p0RlFVRXdRaXhUUVVGUkxHVkJRV1VzUTBGQlF6dERRVUZETzBOQlFVVXNUMEZCVFR0RlFVRkRMRWRCUVVjN1JVRkJSU3hUUVVGUkxFTkJRVU03UlVGQlJTeFRRVUZSTzBkQlFVTXNUVUZCU3p0SFFVRlhMRkZCUVU4N1NVRkJReXhQUVVGTk8wbEJRVVVzVFVGQlN6dEhRVUZSTzBkQlFVVXNXVUZCVnp0RlFVRm5RanRGUVVGRkxGRkJRVTg3UTBGQlF6dEJRVUZET3pzN1FVTkRjRGxDTEVsQlFWY3NOa0pCUVRaQ0xGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zT0VOQlFUaERPenM3UVVOQmJFa3NTVUZCVnl3clFrRkJLMElzVjBGQlZ5eFBRVUZQTEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5eG5SRUZCWjBRN096dEJRMFIwU1N4TlFVRk5MRGhDUVVFMFFqdERRVUZETzBOQlFVVTdRMEZCUlR0RFFVRkZPME5CUVVVN1EwRkJSVHRCUVVGRE8wRkJRVVVzVFVGQlFTdzJRa0ZCTWtJc05FSkJRVFJDTERSQ1FVRTBRaXhUUVVGUE8wRkJRVWNzVFVGQlFTd3dRMEZCZDBNN1FVRkJhMGdzU1VGQlNTeDNRa0ZCYzBJc1kwRkJZeXhOUVVGTE8wTkJRVU1zV1VGQldTeEhRVUZGTzBWQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVVc1MwRkJTeXhQUVVGTE8wTkJRWFZDTzBGQlFVTTdPenRCUTBGMlZ5eFRRVUZUTERCQ1FVRXdRaXhIUVVGRk8wTkJRVU1zU1VGQlNTeEpRVUZGTzBOQlFVVXNTVUZCUnl4RlFVRkZMRk5CUVU4c1VVRkJUeXhQUVVGUExHdENRVUZyUWl4RFFVRkRPME5CUVVVc1NVRkJSeXhGUVVGRkxGTkJRVThzWVVGQlZ5eEZRVUZGTEUxQlFVMHNVVUZCVVN4RlFVRkZMRkZCUVZFc1MwRkJSeXhGUVVGRkxGTkJRVk1zVFVGQlRTeFJRVUZSTEVsQlFVY3NUVUZCVFN4TlFVRk5MRFJFUVVFMFJEdERRVUZGTEU5QlFVMDdSVUZCUXl4SFFVRkhPMFZCUVVVc1UwRkJVVHREUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEd0Q1FVRnJRaXhIUVVGRk8wTkJRVU1zU1VGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4UFFVRlBMRWRCUVVVc1RVRkJUU3hOUVVGTkxHdEVRVUZyUkR0RFFVRkZMRWxCUVVjc1JVRkJSU3hoUVVGWExFdEJRVXNzUzBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4UlFVRlJMRWRCUVVVc1RVRkJUU3hOUVVGTkxITkVRVUZ6UkR0RFFVRkZMRTlCUVUwN1JVRkJReXhOUVVGTExFVkJRVVU3UlVGQlN5eFJRVUZQTEVWQlFVVTdSVUZCVHl4clFrRkJhVUlzUlVGQlJTeGhRVUZYTEV0QlFVc3NTVUZCUlN4TFFVRkxMRWxCUVVVc1EwRkJRenRIUVVGRExFZEJRVWNzUlVGQlJUdEhRVUZUTEdOQlFXRTdSVUZCUXl4RFFVRkRPMFZCUVVVc1RVRkJTenRGUVVGVkxGTkJRVkVzUlVGQlJUdEZRVUZSTEZWQlFWTXNRMEZCUXl4RlFVRkZMRTlCUVU4N1JVRkJSU3hYUVVGVkxFVkJRVVU3UlVGQlZTeG5Ra0ZCWlN4RlFVRkZPMFZCUVdVc1dVRkJWeXhGUVVGRk8wVkJRVmNzVTBGQlVUdERRVUZETzBGQlFVTTdRVUZCUXl4TlFVRk5MRGhDUVVFMFFqdERRVUZETEUxQlFVczdRMEZCUlN4VFFVRlJPME5CUVRCQ0xFbEJRVWM3UVVGQlF6czdPMEZEUVhJd1FpeFRRVUZUTERSQ1FVRTBRaXhIUVVGRkxFbEJRVVVzUTBGQlF5eEhRVUZGTzBOQlFVTXNUMEZCVHl4TlFVRkpMRXRCUVVzc1NVRkJSU3hKUVVGRkxFOUJRVXNzUzBGQlN5eEpRVUZGTEUxQlFVMHNVVUZCVVN4RFFVRkRMRWxCUVVVc1JVRkJSU3hMUVVGSkxFMUJRVWNzTkVKQlFUUkNMRWRCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlJTeG5Ra0ZCWjBJc1EwRkJReXhKUVVGRkxFOUJRVThzV1VGQldTeFBRVUZQTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1VVRkJUeXhOUVVGSExFVkJRVVVzVDBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRkxFOUJRVXNzUTBGQlF5eEhRVUZGTERSQ1FVRTBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVVTdRVUZCUXp0QlFVRkRMRk5CUVZNc1owSkJRV2RDTEVkQlFVVTdRMEZCUXl4SlFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVVVzVDBGQlRTeERRVUZETzBOQlFVVXNTVUZCU1N4SlFVRkZMRTlCUVU4c1pVRkJaU3hEUVVGRE8wTkJRVVVzVDBGQlR5eE5RVUZKTEZGQlFVMHNUVUZCU1N4UFFVRlBMR0ZCUVZjc1QwRkJUeXhsUVVGbExFTkJRVU1zVFVGQlNUdEJRVUZKT3pzN1FVTkJhbVFzVFVGQlRTdzRRa0ZCTkVJN1EwRkJReXhOUVVGTE8wTkJRVVVzVVVGQlVTeEhRVUZGTzBWQlFVTXNTVUZCU1N4SlFVRkZMRWRCUVVVc1NVRkJSVHRIUVVGRExFZEJRVWM3UjBGQlJTeFRRVUZSTzBWQlFVTTdSVUZCUlN4UFFVRlBMRVZCUVVVc1UwRkJUeXhoUVVGWExFVkJRVVVzWVVGQldTeFBRVUZMTEVWQlFVVXNWVUZCVVN4RFFVRkRMRWxCUVVjN1EwRkJRenREUVVGRkxFbEJRVWM3UVVGQlF6czdPMEZEUVc1S0xFMUJRVTBzT0VKQlFUUkNPME5CUVVNc1RVRkJTenREUVVGRkxGRkJRVkVzUjBGQlJUdEZRVUZETEU5QlFVMDdSMEZCUXl4SFFVRkhPMGRCUVVVc1UwRkJVVHRGUVVGRE8wTkJRVU03UTBGQlJTeEpRVUZITzBGQlFVTTdPenRCUTBGNlF5eE5RVUZOTERoQ1FVRTBRanREUVVGRExFMUJRVXM3UTBGQlJTeFJRVUZSTEVkQlFVVTdSVUZCUXl4SlFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVVVzVFVGQlRTeE5RVUZOTEN0RFFVRXJRenRGUVVGRkxFOUJRVThzUlVGQlJTeFRRVUZQTEZsQlFWVTdSMEZCUXl4SFFVRkhPMGRCUVVVc1UwRkJVU3hsUVVGbExFVkJRVVVzVDBGQlR6dEhRVUZGTEZWQlFWTXNUVUZCVFN4UlFVRlJMRVZCUVVVc1VVRkJVU3hKUVVGRkxFVkJRVVVzVTBGQlV5eEpRVUZKTEdOQlFXTXNTVUZCUlN4RlFVRkZPMGRCUVZNc1UwRkJVVHRGUVVGRExFbEJRVVU3UjBGQlF5eEhRVUZITzBkQlFVVXNVMEZCVVR0RlFVRkRPME5CUVVNN1EwRkJSU3hKUVVGSE8wRkJRVU03UVVGQlJTeFRRVUZUTEdWQlFXVXNSMEZCUlR0RFFVRkRMRWxCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRWRCUVVVc1QwRkJUenREUVVGRkxFbEJRVWtzU1VGQlJTeEZRVUZGTzBOQlFVc3NUMEZCVFR0RlFVRkRMRWRCUVVjN1JVRkJSU3hOUVVGTE8wZEJRVU1zWlVGQll5eEZRVUZGTzBkQlFXTXNjVUpCUVc5Q0xFVkJRVVU3UjBGQmIwSXNaVUZCWXl4eFFrRkJjVUlzUlVGQlJTeGhRVUZoTzBkQlFVVXNUMEZCVFN4TlFVRk5MRkZCUVZFc1JVRkJSU3hMUVVGTExFbEJRVVVzUlVGQlJTeE5RVUZOTEVsQlFVa3NaVUZCWlN4SlFVRkZMRVZCUVVVN1JVRkJTenREUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEhGQ1FVRnhRaXhIUVVGRk8wTkJRVU1zU1VGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUXl4SFFVRkZMRTlCUVU4c1JVRkJSU3hUUVVGUkxFMUJRVWM3UlVGQlF5eEpRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVVc1QwRkJUU3hEUVVGRE8wVkJRVVVzU1VGQlJ5eGhRVUZaTEV0QlFVY3NZMEZCWVN4SFFVRkZMRTlCUVUwc1EwRkJReXhEUVVGRE8wVkJRVVVzU1VGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4WFFVRlhMRXRCUVVjc1QwRkJUeXhGUVVGRkxGVkJRVkVzVlVGQlV5eFBRVUZOTEVOQlFVTTdSVUZCUlN4SlFVRkpMRWxCUVVVc1JVRkJSU3hoUVVGWkxFbEJRVVVzUlVGQlJUdEZRVUZOTEU5QlFVOHNUMEZCVHl4RlFVRkZMREJDUVVGM1FpeFpRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVjc1EwRkJReXhOUVVGTkxGRkJRVkVzUlVGQlJTeFJRVUZSTEV0",
	"QlFVY3NUMEZCVHl4RlFVRkZMRmxCUVZVc1dVRkJWU3hQUVVGUExFVkJRVVVzWVVGQlZ5eFpRVUZWTEU5QlFVOHNSVUZCUlN4VlFVRlJMRmRCUVZNc1EwRkJReXhKUVVGRkxFVkJRVVVzVTBGQlV5eExRVUZKTEU5QlFVazdSMEZCUXl4SFFVRkhPMGRCUVVVc1UwRkJVU3hGUVVGRk8wZEJRWFZDTEZOQlFWRTdSMEZCUlN4VlFVRlRMRVZCUVVVN1IwRkJVeXhYUVVGVkxFVkJRVVU3UjBGQlZTeFJRVUZQTEVWQlFVVTdSMEZCVHl4UlFVRlBMRVZCUVVVN1JVRkJUU3hGUVVGRk8wTkJRVU1zUTBGQlF6dEJRVUZETzBGQlFVTXNVMEZCVXl4blFrRkJaMElzUjBGQlJUdERRVUZETEU5QlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeFJRVUZSTEVsQlFVVXNTVUZCUlR0RlFVRkRMRWRCUVVjN1JVRkJSU3hWUVVGVExFVkJRVVVzVTBGQlV5eFpRVUZWTEV0QlFVc3NTVUZCUlN4TFFVRkxMRWxCUVVVc1JVRkJReXhUUVVGUkxFVkJRVVVzVTBGQlV5eFJRVUZQTzBOQlFVTTdRVUZCUXpzN08wRkRRWEI1UXl4TlFVRk5MRGhDUVVFMFFqdERRVUZETEUxQlFVczdRMEZCUlN4UlFVRlJMRWRCUVVVN1JVRkJReXhKUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVVXNUVUZCVFN4TlFVRk5MQ3REUVVFclF6dEZRVUZGTEU5QlFVMDdSMEZCUXl4SFFVRkhPMGRCUVVVc1UwRkJVVHRGUVVGRE8wTkJRVU03UTBGQlJTeEpRVUZITzBGQlFVTTdPenRCUTBGMWJVSXNUVUZCVFN4aFFVRlhPMEZCUVhkQ0xFMUJRVUVzZVVKQlFYVkNPME5CUVVNN1EwRkJORUk3UTBGQk5FSTdRMEZCTkVJN1EwRkJORUk3UTBGQk5FSTdSVUZCUXl4TlFVRkxPMFZCUVVVc1VVRkJVU3hIUVVGRk8wZEJRVU1zU1VGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkZMRTFCUVUwc1RVRkJUU3dyUTBGQkswTTdSMEZCUlN4UFFVRk5PMGxCUVVNc1IwRkJSenRKUVVGRkxGTkJRVkU3UjBGQlF6dEZRVUZETzBWQlFVVXNTVUZCUnp0RFFVRkRPMEZCUVVNN1FVRkJSU3hUUVVGVExFOUJRVThzUjBGQlJUdERRVUZETEVsQlFVa3NTVUZCUlN4UFFVRlBMRXRCUVVjc1dVRkJWU3hMUVVGSExHRkJRVmtzU1VGQlJTeEZRVUZGTEZWQlFWRXNTMEZCU3p0RFFVRkZMRWxCUVVjc1QwRkJUeXhMUVVGSExGbEJRVlVzUzBGQlJ5eGhRVUZaTEV0QlFVY3NUMEZCVHl4TFFVRkhMRlZCUVZNc1RVRkJUU3hKUVVGSlFTeHpRa0ZCZDBJc1IwRkJSeXhYUVVGWExIZERRVUYzUXp0RFFVRkZMRWxCUVVrc1NVRkJSU3cwUWtGQk5FSXNRMEZCUXp0RFFVRkZMRXRCUVVrc1RVRkJTU3hMUVVGSExFMUJRVWtzUzBGQlJ5eE5RVUZKTEUxQlFVa3NORUpCUVRSQ0xFTkJRVU1zUjBGQlJTeE5RVUZOTEVsQlFVbEJMSE5DUVVGM1FpeEhRVUZITEZkQlFWY3NLMEpCUVN0Q0xFVkJRVVVzUlVGQlJUdERRVUZGTEVsQlFVazdRMEZCUlN4SlFVRkhPMFZCUVVNc1NVRkJSU3hyUWtGQmEwSTdSMEZCUXl4blFrRkJaVHRIUVVGRkxFOUJRVTA3UjBGQlZ5eFpRVUZYTzBkQlFYVkNMR1ZCUVdNN1IwRkJNa0lzVDBGQlRUdEZRVUZETEVOQlFVTTdRMEZCUXl4VFFVRlBMRWRCUVVVN1JVRkJReXhOUVVGTkxFbEJRVWxCTEhOQ1FVRjNRaXhoUVVGaExGRkJRVTBzUlVGQlJTeFZRVUZSTEU5QlFVOHNRMEZCUXl4RFFVRkRPME5CUVVNN1EwRkJReXhKUVVGSkxFbEJRVVVzTkVKQlFUUkNMRU5CUVVNN1EwRkJSU3hKUVVGSExFVkJRVVVzV1VGQlZTdzBRa0ZCTWtJc1RVRkJUU3hKUVVGSlFTeHpRa0ZCZDBJc1IwRkJSeXhYUVVGWExHOUNRVUZ2UWl4TFFVRkxMRlZCUVZVc1JVRkJSU3hQUVVGUExFVkJRVVVzWVVGQllTd3lRa0ZCTWtJc1JVRkJSVHREUVVGRkxFbEJRVWNzVDBGQlR5eExRVUZITEZsQlFWVXNTMEZCUnl4TFFVRkhMRVZCUVVVc1UwRkJUeXhoUVVGWExFVkJRVVVzWVVGQldTeEpRVUZITEUxQlFVMHNTVUZCU1VFc2MwSkJRWGRDTEVkQlFVY3NWMEZCVnl3clFrRkJLMElzUlVGQlJTeEZRVUZGTzBOQlFVVXNUMEZCVHl4alFVRmpMRU5CUVVNN1FVRkJRenRCUVVGRExFMUJRVTBzYlVKQlFXbENMRVZCUVVNc1QwRkJUVHRCUVVGRkxGTkJRVk1zTkVKQlFUUkNMRWRCUVVVN1EwRkJReXhQUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVY3NSVUZCUlN4VFFVRlBMRmxCUVZVc1EwRkJReXhMUVVGSExFMUJRVTBzVVVGQlVTeEZRVUZGTEZGQlFWRXNTVUZCUlN4RlFVRkZMRmRCUVZNc1EwRkJReXhGUVVGQkxFTkJRVWNzVFVGQlN5eE5RVUZITzBWQlFVTXNTVUZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NSMEZCUlN4UFFVRk5MRU5CUVVNN1JVRkJSU3hKUVVGSExFOUJRVThzVDBGQlR5eEZRVUZGTEUxQlFVc3NaVUZCWlN4SFFVRkZMRTlCUVUwc1EwRkJRenRGUVVGRkxFbEJRVWtzU1VGQlJTeEZRVUZGTEV0QlFVczdSVUZCWXl4UFFVRlBMRTFCUVUwc1VVRkJVU3hEUVVGRExFdEJRVWNzUlVGQlJTeE5RVUZMTEUxQlFVY3NVMEZCVXl4RFFVRkRMRTFCUVVrc1lVRkJXU3hMUVVGSExHTkJRV0VzUlVGQlJUdERRVUZETEVOQlFVTTdRVUZCUXp0QlFVRkRMRk5CUVZNc1kwRkJZeXhIUVVGRk8wTkJRVU1zVVVGQlR5eEZRVUZGTEUxQlFWUTdSVUZCWlN4TFFVRkpMRmRCUVZVc1QwRkJUVHRIUVVGRExFMUJRVXNzUlVGQlJUdEhRVUZMTEZGQlFVOHNSVUZCUlR0SFFVRlBMR3RDUVVGcFFpeEZRVUZGTzBkQlFXbENMRTFCUVVzN1IwRkJWU3hWUVVGVExFVkJRVVU3UjBGQlV5eFhRVUZWTEVWQlFVVTdSMEZCVlN4blFrRkJaU3hGUVVGRk8wZEJRV1VzV1VGQlZ5eEZRVUZGTzBWQlFWVTdSVUZCUlN4TFFVRkpMRzFDUVVGclFpeFBRVUZOTEVWQlFVTXNUVUZCU3l4clFrRkJhVUk3UlVGQlJTeExRVUZKTEZOQlFWRXNUMEZCVFN4RlFVRkRMRTFCUVVzc1VVRkJUenRGUVVGRkxFdEJRVWtzVjBGQlZTeFBRVUZOTEVWQlFVTXNUVUZCU3l4VlFVRlRPMFZCUVVVc1MwRkJTU3hUUVVGUkxFOUJRVTA3UjBGQlF5eE5RVUZMTzBkQlFWRXNVVUZCVHl4RlFVRkZPMFZCUVUwN1JVRkJSU3hMUVVGSkxGVkJRVk1zVDBGQlRUdEhRVUZETEUxQlFVczdSMEZCVXl4UlFVRlBMRVZCUVVVN1IwRkJUeXhQUVVGTkxFVkJRVVU3UjBGQlRTeFJRVUZQTEVWQlFVVTdSVUZCVFR0RlFVRkZMRk5CUVZFc1RVRkJUU3hKUVVGSlFTeHpRa0ZCZDBJc1IwRkJSeXhYUVVGWExEUkNRVUUwUWl4TFFVRkxMRlZCUVZVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJUdERRVUZETzBGQlFVTTdPenRCUTBGc2MwWXNaVUZCWlN4cFFrRkJhVUlzUjBGQlJUdERRVUZETEVsQlFVY3NSVUZCUlN4blEwRkJPRUlzUTBGQlF5eEhRVUZGTEU5QlFVOHNUVUZCVFN4elFrRkJjMElzUTBGQlF6dERRVUZGTEVWQlFVVXNZVUZCWVN4MVFrRkJkVUlzUTBGQlF5eERRVUZETzBOQlFVVXNTVUZCUnp0RlFVRkRMRTlCUVU4c1RVRkJUU3h6UWtGQmMwSXNRMEZCUXp0RFFVRkRMRlZCUVZFN1JVRkJReXhGUVVGRkxHRkJRV0VzZFVKQlFYVkNMRU5CUVVNc1EwRkJRenREUVVGRE8wRkJRVU03UVVGQlF5eGxRVUZsTEhOQ1FVRnpRaXhIUVVGRk8wTkJRVU1zU1VGQlNTeEpRVUZGTEVWQlFVVXNiMEpCUVd0Q0xFbEJRVWtzU1VGQlJTeEhRVUZGTEVsQlFVVXNSVUZCUlN4elFrRkJiMElzU1VGQlNTeEpRVUZGTzBOQlFVVXNVMEZCVHp0RlFVRkRMRWxCUVVrc1NVRkJSU3hOUVVGTkxIbENRVUY1UWp0SFFVRkRMRzlDUVVGdFFpeEZRVUZGTzBkQlFXMUNMSGxDUVVGM1FpeEZRVUZGTzBkQlFYZENMR3RDUVVGcFFqdEhRVUZGTEdOQlFXRXNSVUZCUlR0SFFVRmhMR2xDUVVGblFpeEZRVUZGTzBkQlFXZENMRzlDUVVGdFFqdEhRVUZGTEdGQlFWa3NSVUZCUlR0RlFVRlhMRU5CUVVNN1JVRkJSU3hKUVVGSExFVkJRVVVzVTBGQlR5eHBRa0ZCWjBJc1QwRkJUenRGUVVGRkxFbEJRVWNzUlVGQlJTeFRRVUZQTEZsQlFWY3NUMEZCVFN4RlFVRkRMRTFCUVVzc1JVRkJSU3hMUVVGSk8wVkJRVVVzU1VGQlNTeEpRVUZGTEVWQlFVVTdSVUZCVXl4SlFVRkhMRTFCUVVrc1RVRkJTeXhQUVVGTkxFVkJRVU1zVFVGQlN5eFRRVUZSTzBWQlFVVXNTVUZCU1N4SlFVRkZMRTFCUVUwc2RVSkJRWFZDTzBkQlFVTXNWVUZCVXp0SFFVRkZMR2RDUVVGbExFVkJRVVU3UjBGQlpTeHRRa0ZCYTBJc1JVRkJSU3haUVVGWk8wZEJRV3RDTEdOQlFXRXNSVUZCUlN4WlFVRlpPMFZCUVZrc1EwRkJRenRGUVVGRkxFbEJRVWNzUlVGQlJTeFpRVUZaTEZkQlFWY3NRMEZCUXl4SFFVRkZMRVZCUVVVc1UwRkJUeXhsUVVGakxFOUJRVTBzUlVGQlF5eE5RVUZMTEdOQlFXRTdSVUZCUlN4SlFVRkhMRVZCUVVVc1kwRkJXU3hMUVVGTExFZEJRVVVzVDBGQlRUdEhRVUZETEZWQlFWTXNSVUZCUlR0SFFVRlZMRTFCUVVzN1JVRkJUVHREUVVGRE8wRkJRVU03UVVGQlF5eGxRVUZsTEhsQ1FVRjVRaXhIUVVGRk8wTkJRVU1zU1VGQlNTeEpRVUZGTEVWQlFVVXNkMEpCUVhkQ0xFMUJRVTA3UTBGQlJTeEpRVUZITEUxQlFVa3NTMEZCU3l4SFFVRkZMRTlCUVUwc1JVRkJReXhOUVVGTExFVkJRVU03UTBGQlJTeFBRVUZMTEVWQlFVVXNiVUpCUVcxQ0xFOUJRVXNzUzBGQlN5eExRVUZITEhkQ1FVRjNRaXhGUVVGRkxHMUNRVUZ0UWl4SlFVRkhMRVZCUVVVc1owSkJRV2RDTEVsQlFVY3NSVUZCUlN4dFFrRkJiVUlzVFVGQlRUdERRVUZGTEVsQlFVY3NSVUZCUlN4dlFrRkJhMElzUTBGQlF5eExRVUZITEVOQlFVTXNSVUZCUlN4aFFVRmhMSE5DUVVGelFpeExRVUZITEVWQlFVVXNiVUpCUVcxQ0xGTkJRVThzUjBGQlJTeFBRVUZOTzBWQlFVTXNWVUZCVXl4NVFrRkJlVUlzUlVGQlJTeHJRa0ZCYTBJN1JVRkJSU3hOUVVGTE8wTkJRVlU3UTBGQlJTeFRRVUZQTzBWQlFVTXNTVUZCUnl4RlFVRkRMRkZCUVU4c1IwRkJSU3hSUVVGUExFMUJRVWNzVFVGQlRTeEZRVUZGTEdGQlFXRXNaVUZCWlR0RlFVRkZMRWxCUVVjc1JVRkJSU3hoUVVGaExGbEJRVmtzUjBGQlJTeE5RVUZKTEdsQ1FVRm5RaXhQUVVGUExFVkJRVVVzVDBGQlN6dEhRVUZETEZGQlFVOHNRMEZCUXp0SFFVRkZMRTFCUVVzN1IwRkJaMElzVlVGQlV5eERRVUZETzBWQlFVTXNTVUZCUlR0SFFVRkRMRkZCUVU4c1EwRkJRenRIUVVGRkxFMUJRVXM3UjBGQlowSXNWVUZCVXl4RlFVRkZMRTFCUVUwc1UwRkJUeXhaUVVGVkxFVkJRVVVzVFVGQlRTeFhRVUZUTEVOQlFVTTdSVUZCUXp0RlFVRkZMRWxCUVVjc1JVRkJSU3hOUVVGTExFOUJRVTA3UjBGQlF5eFZRVUZUTzBkQlFVc3NUVUZCU3p0RlFVRlZPMFZCUVVVc1NVRkJSeXhGUVVGRkxFMUJRVTBzVTBGQlR5eDVRa0ZCZDBJN1JVRkJVeXhKUVVGSk8wVkJRVVVzU1VGQlJ6dEhRVUZETEVsQlFVVXNhVUpCUVdsQ0xFOUJRVThzUlVGQlJTeExRVUZMTzBWQlFVTXNVMEZCVHl4SFFVRkZPMGRCUVVNc1NVRkJSeXhGUVVGRkxHRkJRV0VzZDBKQlFYVkNMRTFCUVUwN1IwRkJSU3hOUVVGTkxEWkNRVUUyUWp0SlFVRkRMRkZCUVU4c1JVRkJSVHRKUVVGUkxGRkJRVTg3UjBGQlpTeERRVUZETzBkQlFVVTdSVUZCVVR0RlFVRkRMRWxCUVVjc1JVRkJSU3hUUVVGUExHMUNRVUZyUWl4UFFVRk5MRVZCUVVNc1RVRkJTeXhWUVVGVE8wVkJRVVVzU1VGQlJ5eEZRVUZGTEZOQlFVOHNWMEZCVXl4RlFVRkZMRk5CUVU4c1lVRkJWeXhGUVVGRkxGTkJRVThzVTBGQlVTeFBRVUZOTEVWQlFVTXNUVUZCU3l4RlFVRkZMRXRCUVVrN1JVRkJSU3hKUVVGSExFVkJRVVVzVTBGQlR5eFZRVUZUTzBkQlFVTXNTVUZCUnl4WFFVRlZMRXRCUVVjc1JVRkJSU3hWUVVGUkxFTkJRVU1zUzBGQlJ5eE5RVUZOTEdsRFFVRnBRenRKUVVGRExHMUNRVUZyUWl4RlFVRkZMRmxCUVZrN1NVRkJhMElzWTBGQllTeEZRVUZGTEZsQlFWazdSMEZCV1N4RFFVRkRMRWRCUVVVc1JVRkJSU3hYUVVGVExFdEJRVXNzUjBGQlJUdEpRVUZETEVWQlFVVXNhVUpCUVdsQ0xFbEJRVWtzUlVGQlJTeE5RVUZOTzBsQlFVVXNTVUZCU1N4SlFVRkZMRVZCUVVVc2JVSkJRVzFDTEZGQlFVOHNUVUZCUnl4RFFVRkRMSGRDUVVGM1FpeEhRVUZGTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU03U1VGQlJTeEZRVUZGTEcxQ1FVRnRRaXhQUVVGUExFZEJRVVVzUlVGQlJTeHRRa0ZCYlVJc1VVRkJUeXhIUVVGSExFTkJRVU03UjBGQlF6dEhRVUZETzBWQlFWRTdSVUZCUXl4SlFVRkpMRWxCUVVVc1JVRkJSU3hyUWtGQlowSXNSVUZCUlN4UlFVRlJPMFZCUVU4c1NVRkJSeXhGUVVGRkxFMUJRVWtzUzBGQlN5eExRVUZITERCQ1FVRXdRaXhIUVVGRkxFVkJRVVVzWjBKQlFXZENMRWxCUVVjN1IwRkJReXhKUVVGSExFMUJRVWtzUzBGQlN5eEhRVUZGTzBsQlFVTXNTVUZCUnl4RlFVRkZMRzFDUVVGdFFpeEpRVUZKTEVOQlFVTXNSMEZCUlR0SlFVRlRMRVZCUVVVc2JVSkJRVzFDTEVsQlFVa3NRMEZCUXp0SFFVRkRPMGRCUVVNc1NVRkJSeXhGUVVGRkxHOUNRVUZyUWl4RFFVRkRMRWRCUVVVN1NVRkJReXhGUVVGRkxHMUNRVUZ0UWl4TFFVRkxMRU5CUVVNN1NVRkJSVHRIUVVGUk8wZEJRVU1zVDBGQlRUdEpRVUZETEZWQlFWTTdTVUZCUlN4TlFVRkxPMGRCUVZVN1JVRkJRenREUVVGRE8wRkJRVU03UVVGQlF5eFRRVUZUTEhkQ1FVRjNRaXhIUVVGRkxFZEJRVVU3UTBGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4clFrRkJaMElzUlVGQlJTeFJRVUZSTzBOQlFVOHNUMEZCVHl4TlFVRkpMRXRCUVVzc1MwRkJSeXd3UWtGQk1FSXNSMEZCUlN4RFFVRkRPMEZCUVVNN1FVRkJReXhUUVVGVExEQkNRVUV3UWl4SFFVRkZMRWRCUVVVN1EwRkJReXhQUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRkxMRTFCUVVjc1RVRkJTU3hMUVVGSExFVkJRVVVzVjBGQlZ5eEhRVUZITEVWQlFVVXNSVUZCUlN4RFFVRkRPMEZCUVVNN1FVRkJReXhUUVVGVExIbENRVUY1UWl4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRkxFVkJRVVVzVFVGQlRUdERRVUZGTEVsQlFVY3NUVUZCU1N4TFFVRkxMRWRCUVVVc1RVRkJUU3hOUVVGTkxHMUVRVUZ0UkR0RFFVRkZMRWxCUVVrc1NVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJTeEpRVUZGTEVWQlFVVTdRMEZCVHl4UFFVRkxMRVZCUVVVc1UwRkJUeXhKUVVGSE8wVkJRVU1zU1VGQlNTeEpRVUZGTEVWQlFVVTdSVUZCUnl4SlFVRkhMRTFCUVVrc1MwRkJTeXhMUVVGSExFVkJRVVVzYlVKQlFXbENMRXRCUVVzc1MwRkJSeXhGUVVGRkxHMUNRVUZwUWl4TFFVRkxMRXRCUVVjc1RVRkJTU3hMUVVGTExFdEJRVWNzUlVGQlJTeFhRVUZUTEV0QlFVc3NSMEZCUlR0RlFVRk5MRWxCUVVrc1NVRkJSU3hGUVVGRkxFMUJRVTA3UlVGQlJTeEpRVUZITEUxQlFVa3NTMEZCU3l4SFFVRkZMRTFCUVUwc1RVRkJUU3gzUkVGQmQwUTdSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhIUVVGRkxFMUJRVWtzUlVGQlJUdERRVUZOTzBOQlFVTXNUMEZCVHl4dFFrRkJiVUlzUTBGQlF6dEJRVUZET3pzN1FVTkJiSGRJTEZOQlFWTXNLMEpCUVN0Q0xFZEJRVVVzUjBGQlJTeEhRVUZGTzBOQlFVTXNTVUZCU1N4SlFVRkZMRVZCUVVVc1lVRkJZVHREUVVGVExFbEJRVWNzVFVGQlNTeExRVUZMTEVkQlFVVXNUVUZCVFN4TlFVRk5MR2RHUVVGblJqdERRVUZGTEU5QlFVMDdSVUZCUXl4SFFVRkhPMFZCUVVVc1kwRkJZVHRIUVVGRExFZEJRVWNzUlVGQlJUdEhRVUZoTEZWQlFWTTdTVUZCUXl4SFFVRkhPMGxCUVVVc1UwRkJVVHRMUVVGRExFZEJRVWNzUlVGQlJUdExRVUZSTEU5QlFVMHNkME5CUVhkRE8wMUJRVU1zVjBGQlZTeEZRVUZGTEZWQlFWVXNVVUZCVVR0TlFVRk5MR0ZCUVZrc1JVRkJSU3hWUVVGVkxGRkJRVkU3VFVGQlRTeFhRVUZWTEVWQlFVVXNVVUZCVVR0TFFVRkxMRU5CUVVNN1NVRkJRenRIUVVGRE8wVkJRVU03UTBGQlF6dEJRVUZET3pzN1FVTkRibVlzU1VGQlZ5eHRRa0ZCYlVJc1YwRkJWeXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXh2UTBGQmIwTTdPenRCUTBFNVJ5eEpRVUZYTERoQ1FVRTRRaXhYUVVGWExFOUJRVThzU1VGQlNTeHRRa0ZCYlVJc1JVRkJSU3hEUVVGRExDdERRVUVyUXpzN08wRkRRWEJKTEVsQlFWY3NNRUpCUVRCQ0xGZEJRVmNzVDBGQlR5eEpRVUZKTEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zTWtOQlFUSkRPenM3UVVORU5HdENMRWxCUVVrc2MwSkJRVzlDTEUxQlFVczdRMEZCUXp0RFFVRnRRanREUVVGM1FqdERRVUZoTzBOQlFWRTdRMEZCWjBJN1EwRkJaVHREUVVGcFFqdERRVUZ0UWp0RFFVRlpMR2xDUVVGbE8wTkJRVXNzV1VGQldTeEhRVUZGTzBWQlFVTXNTMEZCU3l4eFFrRkJiVUlzUlVGQlJTeHZRa0ZCYlVJc1MwRkJTeXd3UWtGQmQwSXNSVUZCUlN4NVFrRkJkMElzUzBGQlN5eHRRa0ZCYVVJc1JVRkJSU3h2UWtGQmEwSXNTVUZCU1N4SlFVRkZMRWRCUVVVc1MwRkJTeXhsUVVGaExFVkJRVVVzWTBGQllTeExRVUZMTEhGQ1FVRnRRaXhGUVVGRkxITkNRVUZ2UWl4SlFVRkpMRWxCUVVVc1IwRkJSU3hMUVVGTExHTkJRVmtzUlVGQlJTeGhRVUZaTEV0QlFVc3NWVUZCVVN4WFFVRlhMRVZCUVVNc1QwRkJUU3hGUVVGRkxFMUJRVXNzUTBGQlF5eEhRVUZGTEV0QlFVc3NhMEpCUVdkQ0xFdEJRVXNzVVVGQlVTeFBRVUZQTEdOQlFXTXNRMEZCUXl4SFFVRkZMRXRCUVVzc2FVSkJRV1VzUlVGQlJUdERRVUZqTzBOQlFVTXNTVUZCU1N4UlFVRlBPMFZCUVVNc1QwRkJUeXhMUVVGTExGRkJRVkU3UTBGQlN6dERRVUZETEUxQlFVMHNWVUZCVXp0RlFVRkRMRTFCUVUwc2EwSkJRV3RDTEV0QlFVc3NaVUZCWlN4SFFVRkZMRTFCUVUwc1dVRkJXU3hMUVVGTExFOUJRVTg3UTBGQlF6dERRVUZETEUxQlFVMHNaMEpCUVdVN1JVRkJReXhUUVVGUE8wZEJRVU1zU1VGQlNTeEpRVUZGTEUxQlFVMHNTMEZCU3l4eFFrRkJjVUk3UjBGQlJTeEpRVUZITEVWQlFVVXNVMEZCVHl4WFFVRlZPMGxCUVVNc1NVRkJTU3hKUVVGRkxFMUJRVTBzUzBGQlN5eHhRa0ZCY1VJc1JVRkJSU3hQUVVGUE8wbEJRVVVzU1VGQlJ5eE5RVUZKTEV0QlFVc3NSMEZCUlN4UFFVRlBPMGxCUVVVN1IwRkJVVHRIUVVGRExFbEJRVWtzU1VGQlJTeEZRVUZGTEZOQlFWRXNTVUZCUlN4TFFVRkxMRzlDUVVGdlFpeERRVUZETzBkQlFVVXNTVUZCUnl4TlFVRkpMRXRCUVVzc1IwRkJSU3hQUVVGUE8wZEJRVVVzU1VGQlJ5eEZRVUZGTEZOQlFVOHNlVUpCUVhkQ08wbEJRVU1zU1VGQlNTeEpRVUZGTEUxQlFVMHNTMEZCU3l4MVFrRkJkVUlzUTBGQlF6dEpRVUZGTEVsQlFVY3NUVUZCU1N4TFFVRkxMRWRCUVVVc1QwRkJUenRIUVVGRE8wVkJRVU03UTBGQlF6dERRVUZETEUxQlFVMHNjVUpCUVhGQ0xFZEJRVVU3UlVGQlF5eEpRVUZITEVWQlFVVXNVMEZCVHl4WFFVRlZPMGRCUVVNc1NVRkJSeXhEUVVGRExFdEJRVXNzYlVKQlFXMUNMRU5CUVVNc1IwRkJSVHRIUVVGUExFMUJRVTBzUzBGQlN5eGxRVUZsTEVOQlFVTTdSMEZCUlR0RlFVRk5PMFZCUVVNc1NVRkJSeXhGUVVGRkxGTkJRVThzVjBGQlV5eEZRVUZGTEZOQlFVOHNWMEZCVlR0SFFVRkRMRXRCUVVzc2QwSkJRWGRDTEV0QlFVc3NSVUZCUlN4SlFVRkpPMGRCUVVVN1JVRkJUVHRGUVVGRExFbEJRVWNzUlVGQlJTeFRRVUZQTEcxQ1FVRnJRanRIUVVGRExFdEJRVXNzZDBKQlFYZENMRXRCUVVzc1UwRkJVenRIUVVGRk8wVkJRVTA3UlVGQlF5eEpRVUZITEVWQlFVVXNVMEZCVHl4VlFVRlRPMGRCUVVNc1YwRkJWU3hMUVVGSExFVkJRVVVzVlVGQlVTeERRVUZETEV0QlFVY3NUVUZCVFN4cFEwRkJhVU03U1VGQlF5eHRRa0ZCYTBJc1MwRkJTeXhaUVVGWk8wbEJRV3RDTEdOQlFXRXNTMEZCU3l4WlFVRlpPMGRCUVZrc1EwRkJReXhIUVVGRkxFVkJRVVVzVjBGQlV5eExRVUZMTEV0QlFVY3NTMEZCU3l4elFrRkJjMElzUlVGQlJTeE5RVUZOTzBkQlFVVXNTVUZCU1N4SlFVRkZMRVZCUVVVc1YwRkJVeXhMUVVGTExFdEJRVWNzUlVGQlJTeFhRVUZUTEV0QlFVc3NTMEZCUnl4RlFVRkZMRmRCUVZNc1MwRkJTeXhwUWtGQlpTeExRVUZMTEVsQlFVVXNSVUZCUlN4UlFVRlBMRWxCUVVVc1JVRkJReXhQUVVGTkxFVkJRVVVzVFVGQlN6dEhRVUZGTEUxQlFVa3NTMEZCU3l4TlFVRkpMRVZCUVVVc1UwRkJUeXhKUVVGSExFMUJRVTBzTkVKQlFUUkNPMGxCUVVNc1UwRkJVVHRKUVVGRkxFOUJRVTBzTUVKQlFUQkNMRXRCUVVzc1VVRkJVU3hMUVVGTE8wZEJRVU1zUTBGQlF6dEhRVUZGTzBWQlFVMDdSVUZCUXl4SlFVRkhMRVZCUVVVc1UwRkJUeXhUUVVGUk8wZEJRVU1zVFVGQlRTdzBRa0ZCTkVJN1NVRkJReXhUUVVGUkxFTkJRVU03U1VGQlJTeFBRVUZOTERCQ1FVRXdRaXhMUVVGTExGRkJRVkVzUzBGQlN6dEhRVUZETEVOQlFVTXNSMEZCUlN4TFFVRkxMSGRDUVVGM1FpeExRVUZMTEU5QlFVODdSMEZCUlR0RlFVRk5PMFZCUVVNc1QwRkJUeXd3UWtGQk1FSXNRMEZCUXp0RFFVRkRPME5CUVVNc1RVRkJUU3hsUVVGbExFZEJRVVU3UlVGQlF5eExRVUZMTEcxQ1FVRnRRaXhMUVVGTExFTkJRVU1zUjBGQlNTeEZRVUZGTEdWQlFXRXNWMEZCVlVNc2NVSkJRVzFDTEVOQlFVTXNTMEZCU1N4TlFVRk5MRFJDUVVFMFFqdEhRVUZETEZOQlFWRXNRMEZCUXp0SFFVRkZMRTlCUVUwc01FSkJRVEJDTEV0QlFVc3NVVUZCVVN4TFFVRkxPMFZCUVVNc1EwRkJRenREUVVGRE8wTkJRVU1zY1VKQlFYRkNMRWRCUVVVN1JVRkJReXhGUVVGRkxIVkNRVUZ4UWl4TFFVRkxMRXRCUVVjc1MwRkJTeXh0UWtGQmJVSXNVVUZCVVN4SFFVRkhMRVZCUVVVc2JVSkJRVzFDTEZGQlFVOHNUVUZCUnl4RFFVRkRMRXRCUVVzc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVUZETzBOQlFVTXNhVUpCUVdkQ08wVkJRVU1zUzBGQlN5eHBRa0ZCWlR0RFFVRkpPME5CUVVNc2IwSkJRVzFDTzBWQlFVTXNUMEZCVHl4TFFVRkxMRzFDUVVGcFFpeExRVUZMTEdkQ1FVRm5RaXhMUVVGTExFZEJRVVVzUzBGQlN6dERRVUZqTzBOQlFVTXNUVUZCVFN4MVFrRkJjMEk3UlVGQlF5eEpRVUZKTEVsQlFVVXNUVUZCVFN4UlFVRlJMRXRCUVVzc1EwRkJReXhMUVVGTExHdENRVUZyUWl4RFFVRkRMRU5CUVVNc1RVRkJTeXhQUVVGSk8wZEJRVU1zVFVGQlN6dEhRVUZWTEU5QlFVMDdSVUZCUXl4RlFVRkZMRWRCUVVVc1MwRkJTeXhoUVVGaExFdEJRVXNzUTBGQlF5eERRVUZETEUxQlFVc3NUMEZCU1R0SFFVRkRMRTFCUVVzN1IwRkJWU3hQUVVGTk8wVkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdSVUZCUlN4SlFVRkhMRVZCUVVVc1UwRkJUeXhYUVVGVk8wZEJRVU1zU1VGQlJ5eEZRVUZGTEUxQlFVMHNUVUZCU3l4TlFVRk5MRTFCUVUwc09FUkJRVGhFTzBkQlFVVXNTVUZCUnl4TFFVRkxMR0ZCUVdFc1dVRkJXU3hIUVVGRkxFVkJRVVVzVFVGQlRTeE5RVUZOTEZOQlFVOHNlVUpCUVhkQ0xFOUJRVThzVFVGQlRTeExRVUZMTEhGQ1FVRnhRanRIUVVGRkxFbEJRVWM3U1VGQlF5eFBRVUZOTzB0QlFVTXNVMEZCVVN4cFFrRkJhVUlzVDBGQlR5eEZRVUZGTEUxQlFVMHNTMEZCU3p0TFFVRkZMRTFCUVVzN1NVRkJVenRIUVVGRExGTkJRVThzUjBGQlJUdEpRVUZETEVsQlFVY3NSVUZCUlN4aFFVRmhMSGRDUVVGMVFpeE5RVUZOTzBsQlFVVXNUMEZCVHl4TlFVRk5MRFpDUVVFMlFqdExRVUZETEZGQlFVOHNSVUZCUlR0TFFVRlJMRkZCUVU4N1NVRkJaU3hEUVVGRExFZEJRVVVzVFVGQlRTeExRVUZMTEhGQ1FVRnhRanRIUVVGRE8wVkJRVU03UlVGQlF5eEpRVUZITEV0QlFVc3NaVUZCWlN4SFFVRkZMRVZCUVVVc1RVRkJUU3hOUVVGTExFMUJRVTBzVFVGQlRTeHpSRUZCYzBRN1JVRkJSU3hKUVVGSkxFbEJRVVVzUlVGQlJTeE5RVUZOTzBWQlFVMHNTVUZCUnl4RlFVRkZMRk5CUVU4c1kwRkJZU3hOUVVGTkxIbENRVUY1UWl4RlFVRkZMRXRCUVVzN1JVRkJSU3hQUVVGUExFVkJRVVVzVTBGQlR5dzJRa0ZCTWtJc1RVRkJUU3hMUVVGTExHRkJRV0VzYTBKQlFXdENMRVZCUVVVc2FVSkJRV2xDTEVkQlFVVXNUVUZCVFN4TFFVRkxMSEZDUVVGeFFpeExRVUZITzBkQlFVTXNUVUZCU3p0SFFVRlZMRk5CUVZFN1JVRkJRenREUVVGRE8wTkJRVU1zYjBKQlFXOUNMRWRCUVVVN1JVRkJReXhKUVVGSExFVkJRVVVzVTBGQlR5eGpRVUZoTEUxQlFVMHNlVUpCUVhsQ0xFVkJRVVVzUzBGQlN6dEZRVUZGTEVsQlFVY3NSVUZCUlN4VFFVRlBMR1ZCUVdNc1QwRkJUeXhMUVVGTExIRkNRVUZ4UWl4RFFVRkRMRWRCUVVVc1JVRkJSVHREUVVGTk8wTkJRVU1zVFVGQlRTeDFRa0ZCZFVJc1IwRkJSVHRGUVVGRExFMUJRVTBzUzBGQlN5eGhRVUZoTEd0Q1FVRnJRaXhGUVVGRkxHbENRVUZwUWp0RlFVRkZMRWxCUVVrc1NVRkJSU3hMUVVGTExEQkNRVUV3UWp0RlFVRkZMRTlCUVVzc1RVRkJTU3hMUVVGTExFbEJRVWM3UjBGQlF5eEpRVUZKTEVsQlFVVXNUVUZCVFN4UlFVRlJMRXRCUVVzc1EwRkJReXhMUVVGTExHdENRVUZyUWl4RFFVRkRMRU5CUVVNc1RVRkJTeXhQUVVGSk8wbEJRVU1zVFVGQlN6dEpRVUZWTEU5QlFVMDdSMEZCUXl4RlFVRkZMRWRCUVVVc1MwRkJTeXhoUVVGaExFdEJRVXNzUTBGQlF5eERRVUZETEUxQlFVc3NUMEZCU1R0SlFVRkRMRTFCUVVzN1NVRkJWU3hQUVVGTk8wZEJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdSMEZCUlN4",
	"SlFVRkhMRVZCUVVVc1UwRkJUeXhYUVVGVk8wbEJRVU1zU1VGQlJ5eExRVUZMTEdWQlFXVXNSMEZCUlN4RlFVRkZMRTFCUVUwc1RVRkJTeXhOUVVGTkxFMUJRVTBzY1VSQlFYRkVPMGxCUVVVc1NVRkJSeXhGUVVGRkxFMUJRVTBzVFVGQlRTeFRRVUZQTERKQ1FVRXdRanRMUVVGRExFMUJRVTBzUzBGQlN5eGhRVUZoTEd0Q1FVRnJRaXhGUVVGRkxFMUJRVTBzVFVGQlRTeHBRa0ZCYVVJN1MwRkJSVHRKUVVGUk8wbEJRVU1zU1VGQlNTeEpRVUZGTEV0QlFVc3NiMEpCUVc5Q0xFVkJRVVVzVFVGQlRTeExRVUZMTzBsQlFVVXNTVUZCUnl4TlFVRkpMRXRCUVVzc1IwRkJSU3hQUVVGUE8wbEJRVVVzU1VGQlJ5eEZRVUZGTEUxQlFVMHNUVUZCVFN4VFFVRlBMRFpDUVVFeVFpeEZRVUZGTEUxQlFVMHNUVUZCVFN4alFVRlpMRVZCUVVVc1YwRkJWVHRKUVVGUE8wZEJRVkU3UjBGQlF5eEpRVUZITEVWQlFVVXNUVUZCVFN4TlFVRkxMRTFCUVUwc1RVRkJUU3c0UkVGQk9FUTdSMEZCUlN4SlFVRkhMRXRCUVVzc1lVRkJZU3haUVVGWkxFZEJRVVVzUlVGQlJTeE5RVUZOTEUxQlFVMHNVMEZCVHl4NVFrRkJkMEk3UjBGQlV5eEpRVUZKTzBkQlFVVXNTVUZCUnp0SlFVRkRMRWxCUVVVc2FVSkJRV2xDTEU5QlFVOHNSVUZCUlN4TlFVRk5MRXRCUVVzN1IwRkJReXhUUVVGUExFZEJRVVU3U1VGQlF5eEpRVUZITEVWQlFVVXNZVUZCWVN4M1FrRkJkVUlzVFVGQlRUdEpRVUZGTEUxQlFVMHNOa0pCUVRaQ08wdEJRVU1zVVVGQlR5eEZRVUZGTzB0QlFWRXNVVUZCVHp0SlFVRmxMRU5CUVVNN1NVRkJSVHRIUVVGUk8wZEJRVU1zU1VGQlJ5eEZRVUZGTEZOQlFVOHNWMEZCVlR0SlFVRkRMRWxCUVVjc1EwRkJReXhMUVVGTExHMUNRVUZ0UWl4RFFVRkRMRWRCUVVVN1NVRkJVeXh4UWtGQmJVSXNRMEZCUXl4SlFVRkZMRTFCUVUwc1MwRkJTeXhsUVVGbExFTkJRVU1zU1VGQlJTeEpRVUZGTzBsQlFVVTdSMEZCVVR0SFFVRkRMRWxCUVVrc1NVRkJSU3hOUVVGTkxFdEJRVXNzY1VKQlFYRkNMRU5CUVVNN1IwRkJSU3hKUVVGSExFMUJRVWtzUzBGQlN5eEhRVUZGTEU5QlFVODdSVUZCUXp0RlFVRkRMRWxCUVVjN1IwRkJReXhOUVVGTkxIZENRVUYzUWp0SlFVRkRMRmxCUVZjc1JVRkJSVHRKUVVGWExGTkJRVkU3UzBGQlF5eFZRVUZUTzB0QlFVVXNUVUZCU3p0TFFVRnJRaXhYUVVGVkxFVkJRVVU3U1VGQlV6dEhRVUZETEVOQlFVTTdSVUZCUXl4VFFVRlBMRWRCUVVVN1IwRkJReXhKUVVGSExFVkJRVVVzWVVGQllTeFRRVUZQTEVWQlFVVXNVMEZCVHl4elFrRkJjVUlzVFVGQlRUdEZRVUZETzBWQlFVTXNUMEZCVHl4TlFVRk5MRXRCUVVzc2RVSkJRWFZDTEVWQlFVVXNWMEZCVlN4RFFVRkRPME5CUVVNN1EwRkJReXcwUWtGQk1rSTdSVUZCUXl4SlFVRkpMRWxCUVVVc1MwRkJTeXh0UWtGQmJVSXNWMEZCVlN4TlFVRkhMRU5CUVVOQkxIRkNRVUZ0UWl4RFFVRkRMRU5CUVVNN1JVRkJSU3hKUVVGSExFMUJRVWtzU1VGQlJ5eFBRVUZQTEV0QlFVc3NiVUpCUVcxQ0xFOUJRVThzUjBGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0RFFVRkZPME5CUVVNc1RVRkJUU3gxUWtGQmRVSXNSMEZCUlN4SFFVRkZPMFZCUVVNc1UwRkJUenRIUVVGRExFbEJRVWtzU1VGQlJTeE5RVUZOTEV0QlFVc3NjVUpCUVhGQ08wZEJRVVVzU1VGQlJ5eEZRVUZGTEZOQlFVOHNWMEZCVlR0SlFVRkRMRWxCUVVrc1NVRkJSU3hOUVVGTkxFdEJRVXNzY1VKQlFYRkNMRVZCUVVVc1QwRkJUenRKUVVGRkxFbEJRVWNzVFVGQlNTeExRVUZMTEVkQlFVVXNUMEZCVHl4TFFVRkxMR05CUVdNc1EwRkJReXhMUVVGSExFdEJRVXNzYlVKQlFXMUNMRkZCUVZFc1EwRkJReXhIUVVGRk8wbEJRVVU3UjBGQlVUdEhRVUZETEVsQlFVa3NTVUZCUlN4RlFVRkZPMGRCUVZFc1NVRkJSeXhGUVVGRkxGTkJRVThzTUVKQlFYbENPMGxCUVVNc1NVRkJSeXhGUVVGRkxHTkJRVmtzUjBGQlJUdEpRVUZQTzBkQlFWRTdSMEZCUXl4SlFVRkhMRVZCUVVVc1UwRkJUeXcyUWtGQk1rSXNSVUZCUlN4alFVRlpMRWRCUVVVN1NVRkJReXhMUVVGTExHTkJRV01zUTBGQlF5eExRVUZITEV0QlFVc3NiVUpCUVcxQ0xGRkJRVkVzUTBGQlF6dEpRVUZGTzBkQlFVMDdSMEZCUXl4RlFVRkZMRk5CUVU4c2EwSkJRV2RDTEV0QlFVc3NZMEZCWXl4RFFVRkRMRXRCUVVjc1MwRkJTeXh0UWtGQmJVSXNVVUZCVVN4RFFVRkRPMGRCUVVjc1NVRkJTU3hKUVVGRkxFdEJRVXNzYjBKQlFXOUNMRU5CUVVNN1IwRkJSU3hKUVVGSExFMUJRVWtzUzBGQlN5eEhRVUZGTEU5QlFVODdSVUZCUXp0RFFVRkRPME5CUVVNc2JVSkJRVzFDTEVkQlFVVTdSVUZCUXl4SlFVRkpMRWxCUVVVc1JVRkJSU3hyUWtGQlowSXNSVUZCUlN4UlFVRlJPMFZCUVU4c1QwRkJUeXhOUVVGSkxFdEJRVXNzU1VGQlJTeERRVUZETEVsQlFVVXNTMEZCU3l3MFFrRkJORUlzUTBGQlF5eExRVUZITEV0QlFVc3NiVUpCUVcxQ0xFbEJRVWtzUTBGQlF5eEpRVUZGTEVOQlFVTXNTMEZCUnl4TFFVRkxMRzFDUVVGdFFpeEpRVUZKTEVOQlFVTXNSMEZCUlN4RFFVRkRPME5CUVVVN1EwRkJReXh6UWtGQmMwSXNSMEZCUlR0RlFVRkRMRXRCUVVzc2FVSkJRV2xDTEVsQlFVa3NRMEZCUXp0RlFVRkZMRWxCUVVrc1NVRkJSU3hMUVVGTExHMUNRVUZ0UWl4UlFVRlBMRTFCUVVjc1EwRkJReXhMUVVGTExHTkJRV01zUTBGQlF5eERRVUZETzBWQlFVVXNTMEZCU3l4dFFrRkJiVUlzVDBGQlR5eEhRVUZGTEV0QlFVc3NiVUpCUVcxQ0xGRkJRVThzUjBGQlJ5eERRVUZETzBOQlFVTTdRMEZCUXl3MFFrRkJORUlzUjBGQlJUdEZRVUZETEU5QlFVMHNRMEZCUXl4SFFVRkhMRXRCUVVzc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4TlFVRkxMRTFCUVVjc01rSkJRVEpDTEVkQlFVVXNRMEZCUXl4RFFVRkRPME5CUVVNN1EwRkJReXhqUVVGakxFZEJRVVU3UlVGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4clFrRkJaMElzUlVGQlJTeFJRVUZSTzBWQlFVOHNUMEZCVHl4TlFVRkpMRXRCUVVzc1MwRkJSeXhMUVVGTExEUkNRVUUwUWl4RFFVRkRPME5CUVVNN1FVRkJRenRCUVVGRkxGTkJRVk1zTWtKQlFUSkNMRWRCUVVVc1IwRkJSVHREUVVGRExFOUJRVThzVFVGQlNTeExRVUZITEVWQlFVVXNWMEZCVnl4SFFVRkhMRVZCUVVVc1JVRkJSVHRCUVVGRE8wRkJRVU1zVTBGQlUwRXNjVUpCUVcxQ0xFZEJRVVU3UTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4TlFVRkxMRTFCUVVjc1JVRkJSU3haUVVGVkxFdEJRVXNzUTBGQlF6dEJRVUZETzBGQlFVTXNVMEZCVXl3d1FrRkJNRUlzUjBGQlJUdERRVUZETEUxQlFVMHNUVUZCVFN4blEwRkJaME1zUzBGQlN5eFZRVUZWTEVOQlFVTXNSMEZCUnp0QlFVRkRPenM3UVVOQmJqbFBMRk5CUVZNc2VVSkJRWGxDTEVkQlFVVTdRMEZCUXl4SlFVRkhMRVZCUVVVc1UwRkJUeXhoUVVGWExFVkJRVVVzYTBKQlFXdENMRmRCUVZNc1IwRkJSVHREUVVGUExFbEJRVWtzU1VGQlJTeEZRVUZGTEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVU3UTBGQmNVSXNTVUZCUnl4RlFVRkZMRTFCUVVrc1MwRkJTeXhMUVVGSExFVkJRVVVzVjBGQlV5eEpRVUZITEU5QlFVOHNSVUZCUlN4clFrRkJhMElzVDBGQlRTeE5RVUZITEVWQlFVVXNlVUpCUVhWQ0xFTkJRVU1zU1VGQlJTeEpRVUZGTEV0QlFVczdRVUZCUXpzN08wRkRRVGhWTEdWQlFXVXNZMEZCWXl4SFFVRkZPME5CUVVNc1NVRkJTU3hKUVVGRkxIbENRVUY1UWl4RlFVRkZMRkZCUVZFN1EwRkJSU3hKUVVGSExFMUJRVWtzUzBGQlN5eEhRVUZGTEU5QlFVMHNSVUZCUXl4TlFVRkxMRkZCUVU4N1EwRkJSU3hKUVVGSkxFbEJRVVVzUlVGQlJTeGxRVUZoTEVsQlFVa3NiVUpCUVcxQ08wVkJRVU1zYlVKQlFXdENMRVZCUVVVN1JVRkJhMElzWTBGQllTeEZRVUZGTzBOQlFWa3NRMEZCUXl4SFFVRkZMRWxCUVVVc1NVRkJTU3hyUWtGQmEwSTdSVUZCUXl4dlFrRkJiVUlzUlVGQlJUdEZRVUZ0UWl4NVFrRkJkMElzUlVGQlJUdEZRVUYzUWl4clFrRkJhVUlzUlVGQlJUdEZRVUZwUWl4alFVRmhMRVZCUVVVN1JVRkJZU3huUWtGQlpTeGhRVUZoTEVWQlFVVXNZVUZCWVN4aFFVRmhPMFZCUVVVc2IwSkJRVzFDTEVWQlFVVTdSVUZCYlVJc1lVRkJXVHREUVVGRExFTkJRVU1zUjBGQlJTeEpRVUZGTEVWQlFVVTdRMEZCVXl4VFFVRlBPMFZCUVVNc1NVRkJTU3hKUVVGRk8wZEJRVU1zYlVKQlFXdENMRVZCUVVVN1IwRkJhMElzWTBGQllTeEZRVUZGTzBWQlFWa3NSMEZCUlN4SlFVRkZMRTFCUVUwc1JVRkJSU3haUVVGWkxGTkJRVk03UjBGQlF5eGhRVUZaTEVWQlFVVTdSMEZCVHl4elFrRkJjVUk3UjBGQlJTeFBRVUZOTzBkQlFVVXNaMEpCUVdVc1JVRkJSVHRIUVVGbExHMUNRVUZyUWl4RlFVRkZPMGRCUVd0Q0xHTkJRV0VzUlVGQlJUdEZRVUZaTEVOQlFVTXNRMEZCUXp0RlFVRkZMRWxCUVVjc1JVRkJSU3d3UWtGQmQwSXNRMEZCUXl4SFFVRkZMRTlCUVU4c1lVRkJZU3hEUVVGRE8wVkJRVVVzU1VGQlNTeEpRVUZGTzBkQlFVTXNXVUZCVnp0SFFVRkZMRkZCUVU4N1JVRkJRenRGUVVGRkxFbEJRVWNzUlVGQlJTeDNRa0ZCYzBJc1MwRkJTeXhMUVVGSExFVkJRVVVzVjBGQlV5eG5Ra0ZCWXl4RlFVRkZMR2xDUVVGcFFpeFZRVUZSTEV0QlFVY3NSMEZCUlN4UFFVRlBMR0ZCUVdFc1IwRkJSU3hEUVVGRE8wVkJRVVVzU1VGQlJ5eEZRVUZGTEZkQlFWTXNVVUZCVHl4UFFVRk5PMGRCUVVNc1VVRkJUenRKUVVGRExGTkJRVkVzUlVGQlJUdEpRVUZSTEUxQlFVczdTVUZCVHl4UlFVRlBMRVZCUVVVc1ZVRkJVVHRKUVVGSExHMUNRVUZyUWl4RlFVRkZPMGxCUVd0Q0xHTkJRV0VzUlVGQlJUdEpRVUZoTEU5QlFVMHNSVUZCUlR0SlFVRk5MRmxCUVZjc1JVRkJSVHRIUVVGVk8wZEJRVVVzVFVGQlN6dEZRVUZSTzBWQlFVVXNTVUZCUnl4RlFVRkZMRmRCUVZNc05rSkJRVEpDTEVWQlFVVXNWMEZCVXl4VlFVRlJMRVZCUVVVc0swSkJRVFpDTEV0QlFVc3NSMEZCUlN4UFFVRlBMR0ZCUVdFc1IwRkJSU3hEUVVGRE8wVkJRVVVzU1VGQlJ5eEZRVUZGTEZkQlFWTXNVVUZCVHl4UFFVRlBMRVZCUVVVc01rSkJRWGxDTEVWQlFVVXNkMEpCUVhOQ0xFVkJRVVVzWTBGQll5eHBRa0ZCWlN4RFFVRkRMRXRCUVVjc1JVRkJSU3hUUVVGUExHbENRVUZsTzBkQlFVTXNVVUZCVHp0SlFVRkRMSGxDUVVGM1FpeEZRVUZGTzBsQlFYZENMRzlDUVVGdFFpeEZRVUZGTzBsQlFXMUNMRTFCUVVzN1NVRkJUeXh0UWtGQmEwSXNSVUZCUlR0SlFVRnJRaXhqUVVGaExFVkJRVVU3U1VGQllTeFRRVUZSTEVWQlFVVTdSMEZCVHp0SFFVRkZMRTFCUVVzN1JVRkJVU3hKUVVGRkxHRkJRV0VzUjBGQlJTeERRVUZETzBWQlFVVXNTVUZCU1N4SlFVRkZMRVZCUVVVc1lVRkJZVHRGUVVGclFpeEZRVUZGTEZkQlFWY3NRMEZCUXl4SFFVRkZMRVZCUVVVc1lVRkJZU3h6UWtGQmIwSXNUVUZCU1N4RlFVRkZMR0ZCUVdFc2MwSkJRVzlDTEV0QlFVY3NUVUZCVFN4RlFVRkZMR0ZCUVdFc2EwSkJRV3RDTEVWQlFVVXNZVUZCWVN4cFFrRkJhVUlzUjBGQlJTeEpRVUZGTEV0QlFVczdRMEZCUXp0QlFVRkRPMEZCUVVNc1UwRkJVeXhoUVVGaExFZEJRVVVzUjBGQlJUdERRVUZETEU5QlFVMDdSVUZCUXl4eFFrRkJiMElzUlVGQlJUdEZRVUZ2UWl4aFFVRlpPMFZCUVVVc1RVRkJTenREUVVGUE8wRkJRVU03UVVGQlF5eEpRVUZKTEc5Q1FVRnJRaXhOUVVGTE8wTkJRVU03UTBGQmJVSTdRMEZCZDBJN1EwRkJhVUk3UTBGQllTeGhRVUZYTEVsQlFVa3NaMEpCUVdNN1EwRkJSVHREUVVGbE8wTkJRVzFDTzBOQlFWazdRMEZCWVN4WlFVRlpMRWRCUVVVN1JVRkJReXhMUVVGTExIRkNRVUZ0UWl4RlFVRkZMRzlDUVVGdFFpeExRVUZMTERCQ1FVRjNRaXhGUVVGRkxIbENRVUYzUWl4TFFVRkxMRzFDUVVGcFFpeEZRVUZGTEc5Q1FVRnJRaXhKUVVGSkxFbEJRVVVzUjBGQlJTeExRVUZMTEdWQlFXRXNSVUZCUlN4alFVRmhMRXRCUVVzc2FVSkJRV1VzUlVGQlJTeG5Ra0ZCWlN4TFFVRkxMSEZDUVVGdFFpeEZRVUZGTEhOQ1FVRnZRaXhKUVVGSkxFbEJRVVVzUjBGQlJTeExRVUZMTEdOQlFWa3NSVUZCUlR0RFFVRlhPME5CUVVNc1NVRkJTU3h6UWtGQmNVSTdSVUZCUXl4UFFVRlBMRXRCUVVzN1EwRkJXVHREUVVGRExFbEJRVWtzVTBGQlVUdEZRVUZETEU5QlFVOHNTMEZCU3l4WFFVRlhPME5CUVUwN1EwRkJReXhOUVVGTkxGbEJRVmtzUjBGQlJUdEZRVUZETEVsQlFVa3NTVUZCUlN4RlFVRkZMRTFCUVVzc1QwRkJTVHRIUVVGRExFMUJRVXM3UjBGQlR5eFJRVUZQTzBWQlFVTXNSVUZCUlR0RlFVRkZMRk5CUVU4N1IwRkJReXhKUVVGSkxFbEJRVVVzVFVGQlRTeFJRVUZSTEV0QlFVc3NRMEZCUXl4SFFVRkZMRXRCUVVzc1lVRkJZU3hMUVVGTExFTkJRVU1zUTBGQlF5eE5RVUZMTEU5QlFVazdTVUZCUXl4TlFVRkxPMGxCUVZVc1VVRkJUenRIUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBkQlFVVXNTVUZCUnl4RlFVRkZMRk5CUVU4c1VVRkJUeXhQUVVGUExFVkJRVVU3UjBGQlR5eEpRVUZITEVWQlFVVXNUMEZCVHl4TlFVRkxMRTFCUVUwc1RVRkJUU3h0UlVGQmJVVTdSMEZCUlN4TFFVRkxMR0ZCUVdFc1dVRkJXU3hIUVVGRkxFMUJRVTBzUzBGQlN5eFBRVUZQTEVWQlFVVXNUMEZCVHl4TFFVRkxPMFZCUVVNN1EwRkJRenREUVVGRExFMUJRVTBzUjBGQlJUdEZRVUZETEV0QlFVc3NWMEZCVnl4UFFVRlBMRmxCUVZVc1MwRkJTeXhsUVVGaExFZEJRVVVzUzBGQlN5eFhRVUZYTEUxQlFVMHNTVUZCU1N4dFFrRkJhVUlzUTBGQlF6dERRVUZGTzBOQlFVTXNiVUpCUVcxQ0xFZEJRVVU3UlVGQlF5eEpRVUZKTEVsQlFVVXNSVUZCUlN4clFrRkJaMElzUlVGQlJTeFJRVUZSTzBWQlFVOHNUMEZCVHl4TlFVRkpMRXRCUVVzc1NVRkJSU3hEUVVGRExFbEJRVVVzUzBGQlN5dzBRa0ZCTkVJc1EwRkJReXhMUVVGSExFdEJRVXNzYlVKQlFXMUNMRWxCUVVrc1EwRkJReXhKUVVGRkxFTkJRVU1zUzBGQlJ5eExRVUZMTEcxQ1FVRnRRaXhKUVVGSkxFTkJRVU1zUjBGQlJTeERRVUZETzBOQlFVVTdRMEZCUXl4TlFVRk5MRTlCUVU4c1IwRkJSVHRGUVVGRExFbEJRVWNzUlVGQlJTeFRRVUZQTEhsQ1FVRjNRanRGUVVGUExFbEJRVWs3UlVGQlJTeEpRVUZITzBkQlFVTXNTVUZCUlN4cFFrRkJhVUlzVDBGQlR5eERRVUZETzBWQlFVTXNVMEZCVHl4SFFVRkZPMGRCUVVNc1NVRkJSeXhGUVVGRkxHRkJRV0VzZDBKQlFYVkNMRTFCUVUwN1IwRkJSU3hOUVVGTkxEWkNRVUUyUWp0SlFVRkRMRkZCUVU4c1JVRkJSVHRKUVVGUkxGRkJRVTg3UjBGQlpTeERRVUZETzBkQlFVVTdSVUZCVFR0RlFVRkRMRWxCUVVjc1JVRkJSU3hUUVVGUExGZEJRVlU3UjBGQlF5eEpRVUZITEVOQlFVTXNTMEZCU3l4dFFrRkJiVUlzUTBGQlF5eEhRVUZGTzBkQlFVOHNTMEZCU3l4dFFrRkJiVUlzUzBGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4bFFVRmhMRmRCUVZNc2JVSkJRVzFDTEVOQlFVTXNTMEZCUnl4TFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRE8wZEJRVVU3UlVGQlRUdEZRVUZETEVsQlFVY3NSVUZCUlN4VFFVRlBMRmRCUVZNc1JVRkJSU3hUUVVGUExGZEJRVlU3UjBGQlF5eExRVUZMTEhkQ1FVRjNRaXhMUVVGTExFVkJRVVVzU1VGQlNUdEhRVUZGTzBWQlFVMDdSVUZCUXl4SlFVRkhMRVZCUVVVc1UwRkJUeXh0UWtGQmEwSTdSMEZCUXl4TFFVRkxMSGRDUVVGM1FpeExRVUZMTEZOQlFWTTdSMEZCUlR0RlFVRk5PMFZCUVVNc1NVRkJSeXhGUVVGRkxGTkJRVThzVTBGQlVUdEhRVUZETEV0QlFVc3NkMEpCUVhkQ0xFdEJRVXNzVDBGQlR5eEhRVUZGTEV0QlFVc3NUVUZCVFN4RFFVRkRMRU5CUVVNN1IwRkJSVHRGUVVGTk8wVkJRVU1zU1VGQlJ5eEZRVUZGTEZOQlFVOHNWVUZCVXp0SFFVRkRMRmRCUVZVc1MwRkJSeXhGUVVGRkxGVkJRVkVzUTBGQlF5eExRVUZITEUxQlFVMHNhVU5CUVdsRE8wbEJRVU1zYlVKQlFXdENMRXRCUVVzc1dVRkJXVHRKUVVGclFpeGpRVUZoTEV0QlFVc3NXVUZCV1R0SFFVRlpMRU5CUVVNc1IwRkJSU3hGUVVGRkxGZEJRVk1zUzBGQlN5eExRVUZITEV0QlFVc3NjMEpCUVhOQ0xFVkJRVVVzVFVGQlRUdEhRVUZGTEVsQlFVa3NTVUZCUlN4RlFVRkZMRmRCUVZNc1MwRkJTeXhMUVVGSExFVkJRVVVzVjBGQlV5eExRVUZMTEV0QlFVY3NSVUZCUlN4WFFVRlRMRXRCUVVzc2FVSkJRV1VzUzBGQlN5eEpRVUZGTEVWQlFVVTdSMEZCVHl4SlFVRkhMRTFCUVVrc1MwRkJTeXhMUVVGSExFMUJRVWtzUzBGQlN5eG5Ra0ZCWlR0SlFVRkRMRWxCUVVrc1NVRkJSU3hOUVVGSkxFdEJRVXNzU1VGQlJTeEZRVUZETEU5QlFVMHNSVUZCUlN4TlFVRkxMRWxCUVVVN1MwRkJReXhQUVVGTkxFVkJRVVU3UzBGQlRTeFJRVUZQTzBsQlFVTTdTVUZCUlN4TFFVRkxMRTFCUVUwc1EwRkJRenRIUVVGRE8wVkJRVU03UTBGQlF6dERRVUZETEhOQ1FVRnpRaXhIUVVGRk8wVkJRVU1zUzBGQlN5eHBRa0ZCYVVJc1NVRkJTU3hEUVVGRE8wVkJRVVVzU1VGQlNTeEpRVUZGTEV0QlFVc3NiVUpCUVcxQ0xGRkJRVThzVFVGQlJ5eERRVUZETEV0QlFVc3NZMEZCWXl4RFFVRkRMRU5CUVVNN1JVRkJSU3hMUVVGTExHMUNRVUZ0UWl4UFFVRlBMRWRCUVVVc1MwRkJTeXh0UWtGQmJVSXNVVUZCVHl4SFFVRkhMRU5CUVVNN1EwRkJRenREUVVGRExEUkNRVUUwUWl4SFFVRkZPMFZCUVVNc1QwRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFMUJRVXNzVFVGQlJ5eE5RVUZKTEV0QlFVY3NSVUZCUlN4WFFVRlhMRWRCUVVjc1JVRkJSU3hGUVVGRkxFTkJRVU03UTBGQlF6dERRVUZETEdOQlFXTXNSMEZCUlR0RlFVRkRMRWxCUVVrc1NVRkJSU3hGUVVGRkxHdENRVUZuUWl4RlFVRkZMRkZCUVZFN1JVRkJUeXhQUVVGUExFMUJRVWtzUzBGQlN5eExRVUZITEV0QlFVc3NORUpCUVRSQ0xFTkJRVU03UTBGQlF6dEJRVUZETzBGQlFVVXNVMEZCVXl4dFFrRkJiVUlzUjBGQlJUdERRVUZETEU5QlFVOHNSVUZCUlN4VFFVRlRMRTFCUVVzc1RVRkJSeXhGUVVGRkxGbEJRVlVzUzBGQlN5eERRVUZETzBGQlFVTTdPenRCUTBGc2FVc3NaVUZCWlN4eFFrRkJjVUlzUjBGQlJUdERRVUZETEVsQlFVa3NTVUZCUlN4RlFVRkZMR1ZCUVdFc1NVRkJTU3h0UWtGQmJVSTdSVUZCUXl4dFFrRkJhMElzUlVGQlJUdEZRVUZyUWl4alFVRmhMRVZCUVVVN1EwRkJXU3hEUVVGRExFZEJRVVVzU1VGQlJTeE5RVUZOTEdOQlFXTTdSVUZCUXl4SFFVRkhPMFZCUVVVc1lVRkJXVHREUVVGRExFTkJRVU03UTBGQlJTeFBRVUZQTEVWQlFVVXNVMEZCVHl4WFFVRlRPMFZCUVVNc1VVRkJUeXhGUVVGRk8wVkJRVThzVFVGQlRTeFZRVUZUTEVOQlFVTTdRMEZCUXl4SlFVRkZMRTFCUVUwc01FSkJRVEJDTzBWQlFVTXNSMEZCUnp0RlFVRkZMSEZDUVVGdlFpeEZRVUZGTzBWQlFXOUNMR0ZCUVZrN1JVRkJSU3hoUVVGWkxFVkJRVVU3UTBGQlZ5eERRVUZETzBGQlFVTTdRVUZCUXl4bFFVRmxMREJDUVVFd1FpeEhRVUZGTzBOQlFVTXNTVUZCU1N4SlFVRkZMRWxCUVVrc2IwSkJRVzlDTzBWQlFVTXNiMEpCUVcxQ0xFVkJRVVU3UlVGQmJVSXNlVUpCUVhkQ0xFVkJRVVU3UlVGQmQwSXNhMEpCUVdsQ0xFVkJRVVU3UlVGQmFVSXNZMEZCWVN4RlFVRkZPMFZCUVdFc1owSkJRV1VzWVVGQllTeEZRVUZGTEdGQlFXRXNZVUZCWVR0RlFVRkZMRzlDUVVGdFFpeEZRVUZGTEhOQ1FVRnZRaXhKUVVGSkxFbEJRVVU3UlVGQlJTeGhRVUZaTEVWQlFVVTdSVUZCV1N4UFFVRk5MRVZCUVVVN1EwRkJXU3hEUVVGRE8wTkJRVVVzU1VGQlJ6dEZRVUZETEU5QlFVOHNUVUZCVFN4cFFrRkJhVUk3UjBGQlF5eGpRVUZoTEVWQlFVVTdSMEZCWVN4cFFrRkJaMElzUlVGQlJUdEhRVUZOTEZWQlFWTXNSVUZCUlR0SFFVRlRMSEZDUVVGdlFpeEZRVUZGTzBkQlFXOUNMR0ZCUVZrc1JVRkJSVHRIUVVGWkxFMUJRVXNzUlVGQlJUdEhRVUZMTEdkQ1FVRmxMRVZCUVVVN1IwRkJaU3h0UWtGQmEwSXNSVUZCUlR0SFFVRnJRaXhqUVVGaExFVkJRVVU3UlVGQldTeERRVUZETEVkQlFVVTdSMEZCUXl4UlFVRlBMRTFCUVUwc1JVRkJSU3hqUVVGak8wZEJRVVVzWlVGQldTeEZRVUZGTEZGQlFWRTdSVUZCUXp0RFFVRkRMRk5CUVU4c1IwRkJSVHRGUVVGRExFMUJRVTBzVFVGQlRTeEZRVUZGTEZGQlFWRXNSMEZCUlR0RFFVRkRPMEZCUVVNN096dEJRME40TmtNc1NVRkJWeXh2UWtGQmIwSXNWMEZCVnl4UFFVRlBMRWxCUVVrc2JVSkJRVzFDTEVWQlFVVXNRMEZCUXl4eFEwRkJjVU03T3p0QlEwRm9TQ3hKUVVGWExEQkNRVUV3UWl4WFFVRlhMRTlCUVU4c1NVRkJTU3h0UWtGQmJVSXNSVUZCUlN4RFFVRkRMREpEUVVFeVF6czdPMEZEUVRWSUxFbEJRVmNzYVVOQlFXbERMRmRCUVZjc1QwRkJUeXhKUVVGSkxHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc2EwUkJRV3RFT3pzN1FVTkJNVWtzU1VGQlZ5eHZRMEZCYjBNc1YwRkJWeXhQUVVGUExFbEJRVWtzYlVKQlFXMUNMRVZCUVVVc1EwRkJReXh4UkVGQmNVUTdPenRCUTBSclZDeGxRVUZsTEhWQ1FVRjFRaXhIUVVGRk8wTkJRVU1zVDBGQlR5eE5RVUZOTERKQ1FVRXlRanRGUVVGRExHMUNRVUZyUWl4RlFVRkZPMFZCUVd0Q0xHTkJRV0VzUlVGQlJUdERRVUZaTEVOQlFVTXNSMEZCUlN4TlFVRk5MR3REUVVGclF6dEZRVUZETEdkQ1FVRmxMRVZCUVVVN1JVRkJaU3h0UWtGQmEwSXNSVUZCUlR0RFFVRnBRaXhEUVVGRExFZEJRVVVzUlVGQlJTeHJRa0ZCWjBJc1MwRkJTeXhOUVVGSkxFVkJRVVVzWTBGQll5eHJRa0ZCWjBJc1EwRkJReXhKUVVGSExFVkJRVVVzVTBGQlR5eFZRVUZSTEUxQlFVMHNkMEpCUVhkQ08wVkJRVU1zVVVGQlR6dEZRVUZITEcxQ1FVRnJRaXhGUVVGRk8wVkJRV3RDTEZGQlFVODdRMEZCVnl4RFFVRkRMRWRCUVVVc1RVRkJUU3d3UWtGQk1FSTdSVUZCUXl4UlFVRlBMSEZEUVVGeFF5eEZRVUZGTEcxQ1FVRnJRaXhGUVVGRk8wVkJRVVVzYlVKQlFXdENMRVZCUVVVN1EwRkJhVUlzUTBGQlF5eExRVUZITEVWQlFVVXNWMEZCVXl4TFFVRkxMRXRCUVVjc1RVRkJUU3h4UWtGQmNVSTdSVUZCUXl4UlFVRlBMRVZCUVVVN1JVRkJUeXhYUVVGVk8wVkJRVmNzVjBGQlZTeEZRVUZGTEdGQlFXRTdSVUZCVlN4VFFVRlJMRVZCUVVNc1VVRkJUeXhIUVVGRk8wTkJRVU1zUTBGQlF5eEhRVUZGTEVWQlFVTXNVVUZCVHl4SFFVRkZPMEZCUVVNN1FVRkJReXhsUVVGbExHRkJRV0VzUjBGQlJUdERRVUZETEVsQlFVY3NSVUZCUXl4UlFVRlBMRWRCUVVVc2JVSkJRV3RDTEUxQlFVY3NSVUZCUlN4UlFVRlBMRWxCUVVVc1JVRkJSU3hQUVVGUExGbEJRVlVzUTBGQlF6dERRVUZGTEVsQlFVY3NUVUZCVFN3eVFrRkJNa0k3UlVGQlF5eHRRa0ZCYTBJN1JVRkJSU3hqUVVGaExFVkJRVVVzVDBGQlR6dERRVUZaTEVOQlFVTXNSMEZCUlN4RlFVRkZMR3RDUVVGblFpeExRVUZMTEUxQlFVa3NSVUZCUlN4alFVRmpMR3RDUVVGblFpeERRVUZETEVsQlFVY3NSVUZCUlN4VFFVRlBMRkZCUVU4c1RVRkJUU3gzUWtGQmQwSTdSVUZCUXl4UFFVRk5MRWxCUVVVc1NVRkJSU3hMUVVGTE8wVkJRVVVzVVVGQlR5eEpRVUZGTEV0QlFVc3NTVUZCUlR0RlFVRkZMRzFDUVVGclFqdEZRVUZGTEZGQlFVOHNTVUZCUlN4WFFVRlRPMFZCUVZrc1QwRkJUU3hGUVVGRkxFOUJRVTg3UTBGQlN5eERRVUZETEVkQlFVVXNUVUZCVFN3d1FrRkJNRUk3UlVGQlF5eFJRVUZQTEVsQlFVVXNiVU5CUVcxRExFZEJRVVVzUTBGQlF5eEpRVUZGTEhGRFFVRnhReXhIUVVGRkxFTkJRVU03UlVGQlJTeHRRa0ZCYTBJN1JVRkJSU3hQUVVGTkxFVkJRVVVzVDBGQlR6dERRVUZMTEVOQlFVTTdUVUZCVFR0RlFVRkRMRWxCUVVrc1NVRkJSVHRIUVVGRExGRkJRVTg3UjBGQlJTeFBRVUZOTEVWQlFVVXNUMEZCVHp0RlFVRlZPMFZCUVVVc1RVRkJTU3hGUVVGRkxGVkJRVkVzUTBGQlF5eEpRVUZITEVWQlFVVXNWMEZCVXl4TFFVRkxMRXRCUVVjc1RVRkJUU3h4UWtGQmNVSTdSMEZCUXl4UlFVRlBMRVZCUVVVN1IwRkJUeXhYUVVGVk8wZEJRVmNzVjBGQlZTeEZRVUZGTEU5QlFVOHNZVUZCWVR0SFFVRlZMRk5CUVZFN1JVRkJReXhEUVVGRE8wTkJRVU03UTBGQlF5eFBRVUZOTEVWQlFVTXNVVUZCVHl4RlFVRkRPMEZCUVVNN096dEJRMEZ3YzBRc1UwRkJVeXcwUWtGQk1rSTdRMEZCUXl4SlFVRkpMRWRCUVVVc1IwRkJSU3hIUVVGRkxFbEJRVVVzUTBGQlF5eEhRVUZGTEVsQlFVVXNRMEZCUXl4SFFVRkZMRWxCUVVVc1IwRkJSU3hKUVVGRkxFMUJRVXNzUjBGQlJTeEhRVUZGTEZkQlFWRXNUVUZCUnp0RlFVRkRMRVZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVVVzUlVGQlJTeE5RVUZOTEVkQlFVVXNUVUZCU1N4RlFVRkZMRkZCUVUwc1JVRkJSU3hMUVVGTExFZEJRVVVzU1VGQlNTeEhRVUZGTEVsQlFVVXNTMEZCU3p0RFFVRkRMRWRCUVVVc1QwRkJTU3hOUVVGSE8wVkJRVU1zUlVGQlJTeFZRVUZSTEVWQlFVVXNXVUZCVlN4RlFVRkZMRlZCUVZFc1EwRkJReXhIUVVGRkxFVkJRVVVzVjBGQlV5eExRVUZMTEVsQlFVY3NSVUZCUlN4VlFVRlJMRkZCUVZFc1VVRkJVU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVc3NUMEZCU1R0SFFVRkRMRTFCUVVzc1EwRkJRenRIUVVG",
	"RkxFOUJRVTA3UlVGQlF5eEZRVUZGTEVsQlFVVXNSVUZCUlN4VFFVRlRMRXRCUVVzc1JVRkJRU3hEUVVGSExFMUJRVXNzVFVGQlJ6dEhRVUZETEVsQlFVa3NTVUZCUlR0SlFVRkRMRTlCUVUwN1NVRkJTU3hSUVVGUE8wbEJRVVVzVDBGQlRUdEhRVUZETzBkQlFVVXNSVUZCUlN4WFFVRlRMRWRCUVVVc1JVRkJSU3hYUVVGVExGRkJRVkVzUTBGQlF6dEZRVUZETEZOQlFVMHNRMEZCUXl4RFFVRkRPME5CUVVVc1IwRkJSU3hWUVVGUExFMUJRVWM3UlVGQlF5eEZRVUZGTEZWQlFWRXNRMEZCUXl4SFFVRkZMRVZCUVVVc1lVRkJWeXhMUVVGTExFdEJRVWNzVVVGQlVTeEZRVUZGTEZGQlFWRTdRMEZCUXl4SFFVRkZMR1ZCUVZrc1RVRkJSenRGUVVGRExFbEJRVWtzU1VGQlJTeFhRVUZYTzBkQlFVTXNWVUZCVXl4SFFVRkZMREJEUVVGNVF5d3lRa0ZCTUVJN1IwRkJSU3hQUVVGTk8wVkJRVU1zUTBGQlF6dEZRVUZGTEU5QlFVMDdSMEZCUXl4UlFVRlBMRU5CUVVNN1IwRkJSU3hUUVVGUkxFTkJRVU03UjBGQlJTeE5RVUZMTzBkQlFVVXNWVUZCVXl4RlFVRkZMRTlCUVU4c1kwRkJZeXhEUVVGRE8wZEJRVVVzVTBGQlVTeERRVUZETzBkQlFVVXNVMEZCVVN4RFFVRkRPMFZCUVVNN1EwRkJReXhIUVVGRkxHVkJRVmM3UlVGQlF6dEZRVUZGTzBWQlFVVTdSVUZCUlN4SFFVRkhPME5CUVVNc1EwRkJReXhEUVVGRExGRkJRVThzVFVGQlJ5eE5RVUZKTEV0QlFVc3NRMEZCUXl4SFFVRkZMR2xDUVVGaE8wVkJRVU1zU1VGQlJ5eE5RVUZKTEV0QlFVc3NSMEZCUlN4TlFVRk5MRTFCUVUwc2IwVkJRVzlGTzBWQlFVVXNTVUZCUnl4TlFVRkpMRTFCUVVzc1QwRkJUenRGUVVGRkxFbEJRVWtzU1VGQlJTeFBRVUZQTzBWQlFVVXNTMEZCU1N4SlFVRkpMRXRCUVVzc1IwRkJSU3hKUVVGSkxFTkJRVU03UlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVFN4TlFVRkhMRVZCUVVVc1RVRkJUU3hMUVVGSExFbEJRVVU3UjBGQlF5eFBRVUZOTzBkQlFVa3NVVUZCVHp0SlFVRkRMRTFCUVVzc1EwRkJRenRKUVVGRkxFOUJRVTBzUzBGQlN6dEhRVUZETzBkQlFVVXNUMEZCVFR0RlFVRkRMRWRCUVVVc1NVRkJSU3hSUVVGUkxGRkJRVkVzUlVGQlJTeE5RVUZOTEVkQlFVVXNUVUZCU1N4TFFVRkhMRmxCUVZNN1IwRkJReXhQUVVGTExFVkJRVVVzVjBGQlV5eEpRVUZITEUxQlFVMHNTVUZCU1N4VFFVRlJMRTFCUVVjN1NVRkJReXhKUVVGRk8wZEJRVU1zUTBGQlF6dEhRVUZGTEVsQlFVa3NTVUZCUlN4RlFVRkZMRTFCUVUwN1IwRkJSU3hQUVVGUExFbEJRVVVzUjBGQlJTeEZRVUZGTzBWQlFVMHNSVUZCUVN4RFFVRkhMRWRCUVVVN1EwRkJSVHREUVVGRkxFOUJRVTA3UlVGQlF5eE5RVUZOTEcxQ1FVRnRRaXhIUVVGRk8wZEJRVU1zU1VGQlJ5eE5RVUZKTEV0QlFVc3NSMEZCUlR0SlFVRkRMRWxCUVVjc1JVRkJSU3hMUVVGTExGVkJRVkVzUjBGQlJUdEpRVUZQTEUxQlFVMHNUVUZCVFN4blJVRkJaMFU3UjBGQlF6dEhRVUZETEVsQlFVa3NTVUZCUlN4WlFVRlpMRU5CUVVNN1IwRkJSU3hOUVVGTkxHMUNRVUZ0UWl4RlFVRkZMRWxCUVVrc1IwRkJSU3hKUVVGRk8wVkJRVU03UlVGQlJTeE5RVUZOTEZsQlFWa3NSMEZCUlR0SFFVRkRMRWxCUVVjc1RVRkJTU3hMUVVGTExFZEJRVVU3U1VGQlF5eEpRVUZITEVWQlFVVXNTMEZCU3l4VlFVRlJMRWRCUVVVN1NVRkJUeXhOUVVGTkxFMUJRVTBzZVVSQlFYbEVPMGRCUVVNN1IwRkJReXhKUVVGSkxFbEJRVVVzV1VGQldTeERRVUZETzBkQlFVVXNUVUZCVFN4dFFrRkJiVUlzUlVGQlJTeEpRVUZKTEVkQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVVc1NVRkJSVHRGUVVGRE8wVkJRVVVzWTBGQllUdEhRVUZETEVsQlFVY3NUVUZCU1N4TFFVRkxMRWRCUVVVc1RVRkJUU3hOUVVGTkxITkVRVUZ6UkR0SFFVRkZMRVZCUVVVc1RVRkJUU3hWUVVGUkxFTkJRVU1zUjBGQlJTeEZRVUZGTEUxQlFVMHNWMEZCVXl4TFFVRkxMRWRCUVVVc1JVRkJSU3hQUVVGUExGTkJRVThzUlVGQlJTeE5RVUZOTEZOQlFVOHNRMEZCUXl4SlFVRkhMRWxCUVVVc1MwRkJTeXhIUVVGRkxFbEJRVVU3UlVGQlNUdEZRVUZGTEUxQlFVMHNWVUZCVXp0SFFVRkRMRWxCUVVrc1NVRkJSVHRKUVVGRE8wbEJRVVU3U1VGQlJUdEhRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlBMRTFCUVVjc1RVRkJTU3hMUVVGTExFTkJRVU03UjBGQlJTeEpRVUZGTEV0QlFVc3NSMEZCUlN4SlFVRkZMRXRCUVVzc1IwRkJSU3hKUVVGRkxFdEJRVXNzUjBGQlJTeE5RVUZOTEZGQlFWRXNTVUZCU1N4RlFVRkZMRWxCUVVrc1QwRkJUU3hOUVVGSExFMUJRVTBzV1VGQldTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMFZCUVVNN1JVRkJSU3gzUWtGQmRVSTdSMEZCUXl4UFFVRlBMRWRCUVVjc1dVRkJWU3hEUVVGRExFdEJRVWNzUlVGQlJTeGhRVUZYTEV0QlFVc3NTVUZCUlN4RFFVRkRMRWxCUVVVc1RVRkJTU3hMUVVGTExFbEJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNWVUZCVVN4SlFVRkZMRVZCUVVVc1ZVRkJVVHRGUVVGRE8wVkJRVVVzVFVGQlN6dEZRVUZUTEUxQlFVMHNhVUpCUVdkQ08wZEJRVU1zVDBGQlRUdEpRVUZETEZGQlFVOHNUVUZCVFN4VFFVRlRPMGxCUVVVc1VVRkJUeXhOUVVGSkxFdEJRVXNzUzBGQlJ5eEZRVUZGTEZWQlFWRXNTVUZCUlN4clFrRkJaMEk3UjBGQlV6dEZRVUZETzBWQlFVVXNkVUpCUVhWQ0xFZEJRVVU3UjBGQlF5eEpRVUZITEUxQlFVa3NTMEZCU3l4SFFVRkZPMGxCUVVNc1NVRkJSeXhIUVVGRkxFMUJRVTBzVFVGQlRTeG5SVUZCWjBVN1NVRkJSVHRIUVVGTk8wZEJRVU1zU1VGQlJ5eEhRVUZGTzBsQlFVTXNSVUZCUlN4WFFVRlRMRTlCUVU4c1EwRkJReXhIUVVGRkxFMUJRVWtzUzBGQlN5eExRVUZITEVWQlFVVXNWVUZCVVN4TFFVRkhMRVZCUVVVc1lVRkJWeXhMUVVGTExFdEJRVWNzUlVGQlJTeFRRVUZUTEZGQlFVMHNSVUZCUlN4VlFVRlJMRkZCUVZFc1EwRkJReXhIUVVGRkxFbEJRVVVzUzBGQlN5eEhRVUZGTEVsQlFVVXNUMEZCVFN4TlFVRkpMRkZCUVUwc1NVRkJTU3hEUVVGRE8wbEJRVVU3UjBGQlRUdEhRVUZETEVWQlFVVXNWVUZCVVN4RFFVRkRPMGRCUVVVc1NVRkJTU3hKUVVGRkxFVkJRVVVzVjBGQlZTeE5RVUZITEVWQlFVVXNWVUZCVVN4RFFVRkRPMGRCUVVVc1RVRkJTU3hOUVVGSkxFVkJRVVVzVDBGQlR5eEhRVUZGTEVOQlFVTTdSVUZCUXp0RlFVRkZMRTFCUVUwc2EwSkJRV3RDTEVkQlFVVTdSMEZCUXl4SlFVRkhMRU5CUVVNc1MwRkJSeXhIUVVGSExFdEJRVXNzVlVGQlVTeEhRVUZGTzBkQlFVOHNTVUZCU1N4SlFVRkZMRmxCUVZrc1EwRkJRenRIUVVGRkxFbEJRVWNzVFVGQlNTeExRVUZMTEVkQlFVVTdTVUZCUXl4TlFVRk5MRzFDUVVGdFFpeEZRVUZGTEVsQlFVa3NSMEZCUlN4UFFVRlBMRU5CUVVNc1IwRkJSU3hKUVVGRkxFZEJRVVVzVFVGQlNTeFJRVUZOTEVsQlFVa3NRMEZCUXp0SlFVRkZPMGRCUVUwN1IwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJTeE5RVUZOTEcxQ1FVRnRRaXhGUVVGRkxFbEJRVWtzUjBGQlJTeFBRVUZQTEVOQlFVTTdSMEZCUlN4SlFVRkpMRWxCUVVVN1IwRkJSU3hKUVVGRkxFZEJRVVVzU1VGQlNTeERRVUZETzBkQlFVVXNTVUZCUnp0SlFVRkRMRTFCUVUwc1dVRkJXU3hGUVVGRkxFbEJRVWs3UjBGQlF5eFRRVUZQTEVkQlFVVTdTVUZCUXl4SlFVRkZMRXRCUVVzN1NVRkJSU3hKUVVGSE8wdEJRVU1zVFVGQlRTeFpRVUZaTEVWQlFVVXNTVUZCU1R0SlFVRkRMRkZCUVUwc1EwRkJRenRKUVVGRExFMUJRVTA3UjBGQlF6dEhRVUZETEVWQlFVVXNWVUZCVVN4RFFVRkRMRWRCUVVVc1JVRkJSU3hMUVVGTExFTkJRVU03UlVGQlF6dERRVUZETzBGQlFVTTdPenRCUlVGNk0wWXNVMEZCVXl3MFFrRkJORUlzUjBGQlJUdERRVUZETEVsQlFVazdRMEZCUlN4UFFVRk5PMFZCUVVNc1RVRkJUU3hWUVVGVE8wZEJRVU1zU1VGQlJ5eE5RVUZKTEV0QlFVc3NSMEZCUlR0SFFVRlBMRWxCUVVrc1NVRkJSVHRIUVVGRkxFbEJRVVVzUzBGQlN5eEhRVUZGTEUxQlFVMHNlVUpCUVhsQ0xFVkJRVU1zVDBGQlRTeEZRVUZGTEUxQlFVc3NRMEZCUXp0RlFVRkRPMFZCUVVVc1RVRkJUU3hSUVVGUE8wZEJRVU1zVFVGQlNTeExRVUZMTEUxQlFVa3NTVUZCUlN4TlFVRk5MSGRDUVVGM1FpeERRVUZETzBWQlFVVTdRMEZCUXp0QlFVRkRPenM3UVVORE9WUXNTVUZCVnl4cFEwRkJhVU1zVjBGQlZ5eFBRVUZQTEVsQlFVa3NiVUpCUVcxQ0xFVkJRVVVzUTBGQlF5eHJSRUZCYTBRN096dEJRMEZ0Y1VRc1pVRkJaU3hqUVVGakxFZEJRVVU3UTBGQlF5eEpRVUZITEVWQlFVTXNaVUZCWXl4SFFVRkZMRzFDUVVGclFpeE5RVUZITEc5Q1FVRnZRaXhIUVVGRkxFbEJRVVVzUlVGQlJTeHJRa0ZCYTBJc05FSkJRVEJDTEVsQlFVY3NTVUZCUlN4RlFVRkZMR3RDUVVGclFpeGhRVUZaTEVsQlFVVXNSVUZCUlN4clFrRkJhMElzY1VKQlFXOUNMRWxCUVVVc1JVRkJSU3hyUWtGQmEwSTdRMEZCWXl4RlFVRkZMR3RDUVVGclFpeHRRa0ZCYVVJN1EwRkJSU3hKUVVGSkxFbEJRVVVzV1VGQldTeEhRVUZGTEVsQlFVVTdSVUZCUXl4UlFVRlBMRXRCUVVzN1JVRkJSU3huUWtGQlpTeERRVUZETzBWQlFVVXNhMEpCUVdsQ0xFdEJRVXM3UlVGQlJTeHRRa0ZCYTBJc1JVRkJSVHRGUVVGclFpeHBRa0ZCWjBJc1EwRkJRenREUVVGRE8wTkJRVVVzU1VGQlJ6dEZRVUZETEVsQlFVa3NTVUZCUlN4clFrRkJhMElzUlVGQlJTeHBRa0ZCYVVJc1IwRkJSU3hKUVVGRkxFVkJRVVVzYTBKQlFXdENMRzFEUVVGclF5eEpRVUZGTERCQ1FVRXdRaXhIUVVGRkxFbEJRVVVzZDBKQlFYZENMRU5CUVVNc1IwRkJSU3hKUVVGRkxFZEJRVWNzUlVGQlJTeFJRVUZQTEVkQlFVVTdSVUZCUlN4SlFVRkhPMGRCUVVNc1NVRkJSeXhEUVVGRExFZEJRVVVzUjBGQlJTeEhRVUZGTEV0QlFVY3NUVUZCVFN4UlFVRlJMRmRCUVZjN1NVRkJReXhyUWtGQmEwSTdTMEZCUXl4NVFrRkJkMElzUlVGQlJUdExRVUZQTEcxQ1FVRnJRanRMUVVGRkxEUkNRVUV5UWp0TFFVRkZMR2xDUVVGblFpeEZRVUZGTzB0QlFVOHNVVUZCVHl4RlFVRkZPMHRCUVU4c1kwRkJZU3hGUVVGRkxFMUJRVTA3UzBGQllTeGxRVUZqTzB0QlFVVXNWMEZCVlR0TFFVRkZMRkZCUVU4c1JVRkJSVHRKUVVGTkxFTkJRVU03U1VGQlJTeEZRVUZGTEZsQlFWa3NRMEZCUXp0SlFVRkZMRVZCUVVVc2JVSkJRVzFDTEVOQlFVTTdTVUZCUlN4RlFVRkZMR3RDUVVGclFpeERRVUZETzBkQlFVTXNRMEZCUXp0SFFVRkZMRWxCUVVjc1JVRkJSU3hYUVVGVExGbEJRVmNzVFVGQlRTeEZRVUZGTzBkQlFVOHNTVUZCUnl4RlFVRkZMRmRCUVZNc1dVRkJWeXhOUVVGTkxFVkJRVVU3UjBGQlR5eEpRVUZITEVWQlFVVXNWMEZCVXl4WlFVRlhMRTFCUVUwc1JVRkJSVHRIUVVGUExFbEJRVWNzUlVGQlJTeFhRVUZUTEZsQlFWYzdTVUZCUXl4SlFVRkhMRzlDUVVGdlFpeEZRVUZGTEUxQlFVMHNSMEZCUlN4UlFVRlBMRVZCUVVVc01rSkJRWGxDTEV0QlFVc3NTMEZCUnl4RlFVRkZMR2REUVVFNFFpeExRVUZMTEUxQlFVa3NUVUZCVFN3clFrRkJLMEk3UzBGQlF5eDNRa0ZCZFVJc1JVRkJSVHRMUVVGMVFpeFRRVUZSTEVWQlFVVTdTMEZCTkVJc2JVSkJRV3RDTzB0QlFVVXNaMEpCUVdVc1QwRkJUeXhGUVVGRkxFOUJRVThzYjBKQlFXdENMRmRCUVZNc1JVRkJSU3hQUVVGUExHMUNRVUZwUWl4TFFVRkxPMGxCUVVNc1EwRkJReXhIUVVGRkxFVkJRVU1zVVVGQlR5eEhRVUZGTzBsQlFVVXNUVUZCVFN4RlFVRkZPMGRCUVUwN1IwRkJReXhKUVVGRkxFVkJRVVVzVFVGQlRTeFBRVUZOTEVWQlFVVXNiVUpCUVdsQ0xFZEJRVVVzUlVGQlJTeFRRVUZQTERCQ1FVRXdRaXhGUVVGRkxHbENRVUZwUWl4SlFVRkZMRTFCUVUwc05rSkJRVFpDTEVWQlFVTXNiVUpCUVd0Q0xFVkJRVVVzYTBKQlFXbENMRU5CUVVNc1NVRkJSU3hMUVVGTExFZEJRVVVzUlVGQlJTeHBRa0ZCWlN4RFFVRkRMRWRCUVVVc1NVRkJSU3hOUVVGTkxHTkJRV003U1VGQlF5eGpRVUZoTzBsQlFVVXNZMEZCWVR0SlFVRkZMR2RDUVVGbE8wbEJRVVVzWTBGQllUdExRVUZETEd0Q1FVRnBRaXhGUVVGRkxHdENRVUZyUWl3eVFrRkJlVUlzUzBGQlN5eEpRVUZGTEV0QlFVc3NTVUZCUlN4RFFVRkRPMDFCUVVNc1IwRkJSeXhGUVVGRkxHdENRVUZyUWp0TlFVRjFRaXhqUVVGaE8wdEJRVU1zUTBGQlF6dExRVUZGTEUxQlFVczdTMEZCVlN4VlFVRlRMRU5CUVVNc2IwSkJRVzlDTzAxQlFVTXNVMEZCVVN4RlFVRkZMRTFCUVUwN1RVRkJVU3hUUVVGUkxFVkJRVVVzVFVGQlRUdE5RVUZSTEdOQlFXRXNSVUZCUlN4TlFVRk5PMHRCUVZrc1IwRkJSU3hyUWtGQmEwSXNSVUZCUlN4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVGRkxGZEJRVlVzY1VKQlFYRkNMRVZCUVVVc2FVSkJRV2xDTzBsQlFVTTdTVUZCUlN4dFFrRkJhMEk3U1VGQlJTeE5RVUZMTzBsQlFVVXNiVUpCUVd0Q0xFVkJRVVU3U1VGQmEwSXNZMEZCWVR0SlFVRkZMSGRDUVVGMVFpeEZRVUZGTEhGQ1FVRnRRaXhEUVVGRExFbEJRVVVzUzBGQlN5eEpRVUZGTEVsQlFVa3NTMEZCU3l4RlFVRkZMRkZCUVZFc1MwRkJSeXhGUVVGRkxHOUNRVUZCTEU5QlFUWkRPMGxCUVVVc2IwSkJRVzFDTzBkQlFVTXNRMEZCUXp0RlFVRkRMRlZCUVZFN1IwRkJReXhOUVVGTkxFVkJRVVVzVVVGQlVUdEZRVUZETzBWQlFVTXNUMEZCVHl4RlFVRkZMRk5CUVU4c1YwRkJVeXhGUVVGRkxGTkJRVThzVFVGQlRTeDFRa0ZCZFVJN1IwRkJReXhSUVVGUExFVkJRVVU3UjBGQlR5eG5Ra0ZCWlR0SFFVRkZMRTFCUVVzN1IwRkJSU3h0UWtGQmEwSXNSVUZCUlR0SFFVRnJRaXhqUVVGaExFVkJRVVU3UjBGQllTeGxRVUZqTzBWQlFVTXNRMEZCUXp0RFFVRkRMRk5CUVU4c1IwRkJSVHRGUVVGRExFbEJRVWtzU1VGQlJTeEZRVUZGTzBWQlFXZENMRTFCUVVzc1EwRkJReXhGUVVGRkxHMUNRVUZwUWl4RlFVRkZMSEZDUVVGdFFpeExRVUZMTEV0QlFVY3NUVUZCVFN3eVFrRkJNa0k3UjBGQlF5eHRRa0ZCYTBJc1JVRkJSVHRIUVVGclFpeGpRVUZoTEVWQlFVVTdSVUZCWjBJc1EwRkJReXhIUVVGRkxFVkJRVVVzY1VKQlFXMUNMRTFCUVUwc0swSkJRU3RDTzBkQlFVTXNUMEZCVFN3eVFrRkJNa0lzUTBGQlF6dEhRVUZGTEdkQ1FVRmxPMGRCUVVVc2JVSkJRV3RDTEVWQlFVVTdSMEZCYTBJc1VVRkJUeXhGUVVGRk8wVkJRVTBzUTBGQlF5eEhRVUZGTEVOQlFVTXNTVUZCUnl4TlFVRkpMRTFCUVVrc1ZVRkJVU3hOUVVGTkxIZENRVUYzUWp0SFFVRkRMRTlCUVUwc01rSkJRVEpDTEVOQlFVTTdSMEZCUlN4dFFrRkJhMElzUlVGQlJUdEhRVUZyUWl4UlFVRlBPMFZCUVZFc1EwRkJReXhIUVVGRkxFMUJRVTBzTUVKQlFUQkNPMGRCUVVNc1VVRkJUeXh0UTBGQmJVTXNSVUZCUlN4dFFrRkJhMElzUTBGQlF6dEhRVUZGTEcxQ1FVRnJRaXhGUVVGRk8wVkJRV2xDTEVOQlFVTXNUVUZCU1N4RlFVRkZMRmRCUVZNc1MwRkJTeXhMUVVGSExFTkJRVU1zUlVGQlJTeHRRa0ZCYVVJc1RVRkJUU3h4UWtGQmNVSTdSMEZCUXl4UlFVRlBMRTFCUVUwc2MwSkJRWE5DTEVkQlFVVXNSVUZCUlN4cFFrRkJhVUk3UjBGQlJTeFhRVUZWTzBkQlFWY3NWMEZCVlR0SFFVRkZMRk5CUVZFN1NVRkJReXhUUVVGUkxFTkJRVU03U1VGQlJTeFJRVUZQTzBkQlFVTTdSVUZCUXl4RFFVRkRMRWxCUVVjc05rSkJRVFpDTzBOQlFVTTdRVUZCUXp0QlFVRkRMRk5CUVZNc01FSkJRVEJDTEVkQlFVVTdRMEZCUXl4SlFVRkhMRVZCUVVVc01rSkJRWGxDTEV0QlFVc3NSMEZCUlN4UFFVRk5MRU5CUVVNN1EwRkJSU3hKUVVGSkxFbEJRVVVzUlVGQlJUdERRVUZsTEU5QlFVOHNUMEZCVHl4TFFVRkhMRmxCUVZVc1EwRkJReXhEUVVGRExFdEJRVWNzVVVGQlVTeEpRVUZKTEVkQlFVVXNUVUZCVFN4TlFVRkpPMEZCUVZVN1FVRkJReXhsUVVGbExITkNRVUZ6UWl4SFFVRkZMRWRCUVVVN1EwRkJReXhKUVVGSExFVkJRVVVzWjBKQlFXVXNUMEZCVHl4RlFVRkZPME5CUVU4c1NVRkJSenRGUVVGRExFOUJRVThzVFVGQlRTdzJRa0ZCTmtJc1JVRkJReXh0UWtGQmEwSXNSVUZCUXl4RFFVRkRPME5CUVVNc1VVRkJUVHRGUVVGRE8wTkJRVTA3UVVGQlF6dEJRVUZETEZOQlFWTXNLMEpCUVRoQ08wTkJRVU1zU1VGQlNTeEpRVUZGTEUxQlFVMHNkVVZCUVhWRk8wTkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVc3NjMEpCUVhGQ08wRkJRVU03UVVGQlF5eGxRVUZsTEdOQlFXTXNSMEZCUlR0RFFVRkRMRWxCUVVrc1NVRkJSU3hGUVVGRkxHTkJRV0VzU1VGQlJTeEpRVUZKTEVsQlFVVXNSMEZCUlN4eFFrRkJiVUlzVDBGQlRTeE5RVUZITzBWQlFVTXNTVUZCU1N4SlFVRkZMRWxCUVVrc1NVRkJTU3hGUVVGRkxHdENRVUZyUWp0RlFVRkZMRXRCUVVrc1NVRkJTU3hMUVVGTExFVkJRVVVzUzBGQlN5eEhRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVjc1JVRkJSU3hQUVVGUExFTkJRVU03UlVGQlJTeFRRVUZQTzBkQlFVTXNTVUZCUnl4RlFVRkZMRTlCUVVzc1MwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVFN4TlFVRkhMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJUdEpRVUZETEVsQlFVa3NTVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlNTeE5RVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkJSU3hQUVVGUExFVkJRVVVzVFVGQlRTeEhRVUZGTzB0QlFVTXNUVUZCU3p0TFFVRjFRaXhWUVVGVE8wbEJRVU03UjBGQlF6dEhRVUZETEVsQlFVa3NTVUZCUlN4TlFVRk5MR2xDUVVGcFFqdEpRVUZETERaQ1FVRTBRaXhGUVVGRkxFOUJRVXM3U1VGQlJTeHZRa0ZCYlVJN1NVRkJSU3g1UWtGQmQwSTdTVUZCUlN4clFrRkJhVUk3U1VGQlJTeGpRVUZoTzBsQlFVVXNhVUpCUVdkQ0xFVkJRVVVzVTBGQlR5eFZRVUZSTEVWQlFVVXNUMEZCU3p0SlFVRkZMR2RDUVVGbExFVkJRVVU3U1VGQlpTeHZRa0ZCYlVJN1NVRkJSU3hoUVVGWk8wZEJRVU1zUTBGQlF6dEhRVUZGTEVsQlFVY3NSVUZCUlN4VFFVRlBMR2xDUVVGblFpeFBRVUZQTzBkQlFVVXNTMEZCU1N4SlFVRkpMRXRCUVVzc1JVRkJSU3hWUVVGVE8wbEJRVU1zU1VGQlNTeEpRVUZGTEVWQlFVVTdTVUZCYzBJc1QwRkJUeXhIUVVGSExHRkJRVmNzV1VGQlZTeEZRVUZGTEVsQlFVa3NSVUZCUlN4VFFVRlRMRXRCUVVjc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFRRVUZUTEV0QlFVY3NSVUZCUlN4SlFVRkpMRVZCUVVVc1YwRkJWU3hEUVVGRE8wZEJRVU03UjBGQlF5eEpRVUZITEVWQlFVVXNVVUZCVHp0SlFVRkRMRWxCUVVrc1NVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeFBRVUZQTEVOQlFVTTdTVUZCUlN4UFFVRlBMRVZCUVVVc1RVRkJUU3hIUVVGRk8wdEJRVU1zVFVGQlN6dExRVUYxUWl4VlFVRlRPMGxCUVVNN1IwRkJRenRGUVVGRE8wTkJRVU1zUjBGQlJTeEpRVUZGTEVkQlFVVXNOa0pCUVhsQ0xFZEJRVWNzUlVGQlJTeGhRVUZoTEZWQlFWVXNaMEpCUVdkQ0xFOUJRVThzUjBGQlJ5eExRVUZKTEVsQlFVVXNRMEZCUXl4SFFVRkZMRWxCUVVVc1EwRkJReXhIUVVGRkxFbEJRVVVzU1VGQlNTeEpRVUZGTEVkQlFVVXNTVUZCUlN4SlFVRkpMRWxCUVVVc1IwRkJSU3hKUVVGRkxFbEJRVWtzYlVKQlFXMUNPMFZCUVVNc2JVSkJRV3RDTEVWQlFVVTdSVUZCYTBJc1kwRkJZU3hGUVVGRk8wTkJRVmtzUTBGQlF5eEhRVUZGTEVsQlFVVXNSVUZCUlN3eVFrRkJlVUlzUzBGQlN5eEpRVUZGTEV0QlFVc3NTVUZCUlN3MFFrRkJORUk3UlVGQlF5eFZRVUZUTEVWQlFVVTdSVUZCZFVJc1QwRkJUU3hGUVVGRk8wTkJRV3RDTEVOQlFVTXNSMEZCUlN4SFFVRkZMRlZCUVZFc1QwRkJUU3hOUVVGSE8wVkJRVU1zU1VGQlNTeEpRVUZGTEVWQlFVVXNZMEZCWVN4SlFVRkZMRVZCUVVVc2EwSkJRV3RDTzBWQlFVOHNSMEZCUnl4WFFVRlRMRXRCUVVzc1MwRkJSeXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTzBWQlFVVXNTVUZCU1N4SlFVRkZMRTFCUVVrc1MwRkJTeXhKUVVGRkxFVkJRVVVzYjBKQlFXdENMRTFCUVUwc01FSkJRVEJDTzBkQlFVTXNVVUZCVHp0SFFVRkZMRzFDUVVGclFpeEZRVUZGTzBWQlFXbENMRU5CUVVNN1JVRkJSU3hGUVVGRkxHdENRVUZyUWl4VFFVRlBMRkZCUVZFc1QwRkJUeXhEUVVGRE8wVkJRVWtzU1VGQlNTeEpRVUZGTEUxQlFVMHNjVUpCUVhGQ08wZEJRVU1zYjBKQlFXMUNPMGRCUVVVc2VVSkJRWGRDTzBkQlFVVXNhMEpCUVdsQ08wZEJRVVVzWTBGQllTeEZRVUZGTzBkQlFXRXNZMEZCWVR0SFFVRkZMR05CUVdFc2NVSkJRWEZDTzBkQlFVVXNWVUZCVXp0SFFVRkZMRTFCUVVzc1JVRkJSVHRIUVVGTExHZENRVUZsTEVWQlFVVTdSMEZCWlN4dFFrRkJhMEk3UjBGQlJTeHZRa0ZCYlVJN1IwRkJSU3hqUVVGaExFVkJRVVU3UjBGQllTeGhRVUZaTzBWQlFVTXNRMEZCUXp0RlFVRkZMRTFCUVUwc1NVRkJTU3hIUVVGRkxFbEJRVVVzUlVGQlJUdEZRVUZSTEVsQlFVa3NTVUZCUlN4RlFVRkZMR2xDUVVGbExFbEJRVVVzUlVGQlJTeFRRVUZQTEN0Q1FVRXJRaXhGUVVGRkxGRkJRVThzUlVGQlJTeGpRVUZoTEVOQlFVTTdSVUZCUlN4UFFVRlBMRVZCUVVVc1YwRkJWeXhEUVVGRExFZEJRVVVzUlVGQlJTeHJRa0ZCYTBJc2JVSkJRV2xDTEVWQlFVVXNZMEZCWVN4RlFVRkZMR3RDUVVGclFpeHZRa0ZCYTBJc1JVRkJSU3h0UWtGQmEwSTdRMEZCUXp0RFFVRkZMRWxCUVVjN1JVRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRUdEZRVUZGTEVsQlFVa3NTVUZCUlN4TlFVRk5MRkZCUVZFc1JVRkJSU3haUVVGWk8wVkJRVVVzVTBGQlR6dEhRVUZETEVsQlFVY3NSVUZCUlN4VFFVRlBMRkZCUVU4c1QwRkJUVHRKUVVGRExFMUJRVXM3U1VGQlV5eFJRVUZQTEUxQlFVMHNZVUZCWVR0TFFVRkRMRkZCUVU4N1MwRkJSU3hSUVVGUExFVkJRVVVzYTBKQlFXdENPMHRCUVU4c1RVRkJTeXhGUVVGRk8wdEJRVXNzWlVGQll5eEZRVUZGTzBsQlFXbENMRU5CUVVNN1IwRkJRenRIUVVGRkxFbEJRVWNzUlVGQlJTeFRRVUZQTEZGQlFVOHNUVUZCVFN4TlFVRk5MREpEUVVFeVF5eEZRVUZGTEV0QlFVc3NSMEZCUnp0SFFVRkZMRWxCUVVjc1JVRkJSU3hqUVVGWkxFTkJRVU1zUjBGQlJUdEpRVUZETEVsQlFVa3NTVUZCUlN4TlFVRk5MSGRDUVVGM1FqdExRVUZETEdkQ1FVRmxMRVZCUVVVN1MwRkJaU3h0UWtGQmEwSXNSVUZCUlR0TFFVRnJRaXhqUVVGaExFVkJRVVU3U1VGQldTeERRVUZETzBsQlFVVXNSVUZCUlN4WFFVRlhMRU5CUVVNc1IwRkJSU3hGUVVGRkxHdENRVUZyUWl4dlFrRkJhMElzUlVGQlJUdEpRVUZyUWl4SlFVRkpMRWxCUVVVN1MwRkJReXhSUVVGUExFVkJRVVVzYTBKQlFXdENPMHRCUVU4c1YwRkJWU3hGUVVGRkxHRkJRV0U3U1VGQlV6dEpRVUZGTEUxQlFVMHNPRUpCUVRoQ0xFVkJRVVVzVlVGQlVTeExRVUZMTEVsQlFVVXNTVUZCUlR0TFFVRkRMRWRCUVVjN1MwRkJSU3hQUVVGTkxFVkJRVVU3U1VGQlN5eERRVUZETEVkQlFVVXNSVUZCUlN4clFrRkJhMElzYlVKQlFXbENMRVZCUVVVN1IwRkJXVHRIUVVGRExFVkJRVVVzWVVGQllTeHhRa0ZCYlVJc1RVRkJUU3hGUVVGRkxHdENRVUZyUWl4RlFVRkZMR0ZCUVdFc2FVSkJRV2xDTzBkQlFVVXNTVUZCU1N4SlFVRkZMRVZCUVVVN1IwRkJVU3hGUVVGRkxHTkJRVmtzUTBGQlF5eExRVUZITEUxQlFVa3NTMEZCU3l4TFFVRkhMRVZCUVVVc2EwSkJRV3RDTEZkQlFWTXNTMEZCU3l4TFFVRkhMRTFCUVUwc2NVSkJRWEZDTzBsQlFVTXNVVUZCVHl4RlFVRkZMR3RDUVVGclFqdEpRVUZQTEZkQlFWVTdTVUZCVXl4WFFVRlZMRVZCUVVVc1lVRkJZVHRKUVVGVkxGTkJRVkU3UjBGQlF5eERRVUZETEVkQlFVVXNSVUZCUlN4clFrRkJhMElzVTBGQlR5eExRVUZMTEV0QlFVY3NSVUZCUlN4alFVRlpMRU5CUVVNc1RVRkJTU3hGUVVGRkxHdENRVUZyUWl4VFFVRlBMRXRCUVVzN1IwRkJSeXhKUVVGSkxFbEJRVVVzVFVGQlRTeHRRa0ZCYlVJc1JVRkJReXh2UWtGQmJVSXNSVUZCUlN3eVFrRkJlVUlzUTBGQlF5eEZRVUZETEVOQlFVTTdSMEZCUlN4SlFVRkhMRVZCUVVVc2EwSkJRV3RDTEcxQ1FVRnBRaXhGUVVGRkxHTkJRV0VzUlVGQlJTeFRRVUZQTEhkQ1FVRjFRanRKUVVGRExFbEJRVVVzVFVGQlRTeFJRVUZSTzB0QlFVTXNUVUZCU3p0TFFVRlZMRlZCUVZNc1JVRkJSVHRKUVVGUkxFTkJRVU03U1VGQlJUdEhRVUZSTzBkQlFVTXNTVUZCUnl4RlFVRkZMRk5CUVU4c1YwRkJWU3hQUVVGTk8wbEJRVU1zVFVGQlN6dEpRVUZWTEcxQ1FVRnJRaXhGUVVGRk8wbEJRV3RDTEdOQlFXRXNSVUZCUlR0SFFVRlpPMGRCUVVVc1NVRkJSeXhGUVVGRkxGTkJRVThzVTBGQlVTeFBRVUZOTzBsQlFVTXNUVUZCU3p0SlFVRlRMRkZCUVU4c1RVRkJUU3gxUWtGQmRVSTdTMEZCUXl4UlFVRlBMRVZCUVVVc2EwSkJRV3RDTzB0QlFVOHNaMEpCUVdVc1JVRkJSVHRMUVVGbExFMUJRVXNzUlVGQlJUdExRVUZMTEcxQ1FVRnJRaXhGUVVGRk8wdEJRV3RDTEdOQlFXRXNSVUZCUlR0TFFVRmhMR1ZCUVdNc1JVRkJSVHRKUVVGcFFpeERRVUZETzBkQlFVTTdSMEZCUlN4SlFVRkhMRVZCUVVVc1UwRkJUeXhYUVVGVExFVkJRVVVzVTBG",
	"QlR5eFhRVUZWTzBsQlFVTXNTVUZCUlN4TlFVRk5MRkZCUVZFc1JVRkJReXhOUVVGTExFVkJRVVVzUzBGQlNTeERRVUZETzBsQlFVVTdSMEZCVVR0SFFVRkRMRWxCUVVjc1JVRkJSU3hUUVVGUExGVkJRVk1zVDBGQlRUdEpRVUZETEUxQlFVczdTVUZCVXl4UlFVRlBMRTFCUVUwc2RVSkJRWFZDTzB0QlFVTXNVVUZCVHl4RlFVRkZMR3RDUVVGclFqdExRVUZQTEdkQ1FVRmxMRVZCUVVVN1MwRkJaU3hOUVVGTExFVkJRVVU3UzBGQlN5eHRRa0ZCYTBJc1JVRkJSVHRMUVVGclFpeGpRVUZoTEVWQlFVVTdTMEZCWVN4bFFVRmpMRVZCUVVVN1NVRkJhVUlzUTBGQlF6dEhRVUZETzBkQlFVVXNTVUZCUnl4RlFVRkZMRk5CUVU4c1pVRkJZenRKUVVGRExFMUJRVTBzTUVKQlFUQkNPMHRCUVVNc2JVSkJRV3RDTEVWQlFVVTdTMEZCYTBJc1kwRkJZU3hGUVVGRk8wbEJRVmtzUTBGQlF6dEpRVUZGTEVsQlFVa3NTVUZCUlN4TlFVRk5MSGRDUVVGM1FqdExRVUZETEdkQ1FVRmxMRVZCUVVVN1MwRkJaU3h0UWtGQmEwSXNSVUZCUlR0TFFVRnJRaXhqUVVGaExFVkJRVVU3U1VGQldTeERRVUZETzBsQlFVVXNSVUZCUlN4WFFVRlhMRU5CUVVNc1IwRkJSU3hGUVVGRkxHdENRVUZyUWl4dlFrRkJhMElzUlVGQlJTeHRRa0ZCYTBJc1NVRkJSVHRMUVVGRExFZEJRVWM3UzBGQlJTeFRRVUZSTEV0QlFVczdTVUZCUXl4SFFVRkZMRVZCUVVVc2EwSkJRV3RDTEZOQlFVOHNTMEZCU3l4SFFVRkZMRVZCUVVVc2EwSkJRV3RDTEcxQ1FVRnBRaXhGUVVGRk8wbEJRV0U3UjBGQlVUdEhRVUZETEVWQlFVVXNVMEZCVXl4WFFVRlRMRXRCUVVzc1RVRkJTU3hGUVVGRkxHdENRVUZyUWl4VFFVRlBMRVZCUVVVc1UwRkJVeXhUUVVGUkxFbEJRVVVzVFVGQlRTeFJRVUZSTEVWQlFVVXNVVUZCVVR0RlFVRkRPME5CUVVNc1ZVRkJVVHRGUVVGRExFMUJRVTBzU1VGQlNTeEhRVUZGTEUxQlFVMHNSMEZCUnl4UlFVRlJPME5CUVVNN1FVRkJRenRCUVVGRExHTkJRV01zWVVGQlZ6dEJRVU51ZDFVc1kwRkJZeXhoUVVGaE8wRkJRek5DTEZkQlFWY3NiMEpCUVc5Q0xFbEJRVWtzWjBOQlFXZERMR0ZCUVdFN096dEJRMGgzVUN4TlFVRk5MSFZDUVVGeFFpeFBRVUZQTEVsQlFVa3NORU5CUVRSRE8wRkJRWGxOTEdWQlFXVXNXVUZCV1N4SFFVRkZMRWRCUVVVc1IwRkJSVHREUVVGRExHMUNRVUZ0UWl4SFFVRkZMRU5CUVVNc1EwRkJRenREUVVGRkxFbEJRVWtzU1VGQlJTeDFRa0ZCZFVJc1EwRkJReXhIUVVGRkxFbEJRVVVzZVVKQlFYbENMRU5CUVVNc1IwRkJSU3hKUVVGRkxEWkNRVUUyUWl4RFFVRkRPME5CUVVVc2EwSkJRV3RDTEVkQlFVVXNSVUZCUlN4WlFVRlpPME5CUVVVc1NVRkJTU3hKUVVGRkxGZEJRVmNzUjBGQlJTeEpRVUZGTEVOQlFVTTdRMEZCUlN4SlFVRkhPMFZCUVVNc1NVRkJSeXhOUVVGTkxHMUNRVUZ0UWl4RFFVRkRMRWRCUVVVc1NVRkJSU3hEUVVGRExFZEJRVVVzVFVGQlNTeExRVUZMTEVkQlFVVTdSMEZCUXl4SlFVRkpMRWxCUVVVc1RVRkJUVHRIUVVGRkxFbEJRVWNzUlVGQlJTeFhRVUZUTEZsQlFWY3NUVUZCVFN4TlFVRk5MRVZCUVVVc1RVRkJUVHRGUVVGRE8wVkJRVU1zVFVGQlRTeGxRVUZsTEVWQlFVVXNVMEZCVVR0SFFVRkRMRTFCUVVzN1IwRkJSU3hUUVVGUkxFVkJRVVU3UjBGQlRTeFRRVUZSTzBsQlFVTXNUMEZCVFR0SlFVRkZMR05CUVdFc1JVRkJSVHRKUVVGaExFMUJRVXM3UjBGQll6dEZRVUZETEVOQlFVTTdSVUZCUlN4SlFVRkpMRWxCUVVVc1JVRkJSU3hQUVVGUExHTkJRV01zUTBGQlF6dEZRVUZGTEZOQlFVODdSMEZCUXl4SlFVRkpMRWxCUVVVc1RVRkJUU3hsUVVGbExFZEJRVVVzUlVGQlJTeFhRVUZYTzBkQlFVVXNTVUZCUnl4RlFVRkZMRTFCUVVzN1IwRkJUU3hKUVVGSkxFbEJRVVVzUlVGQlJUdEhRVUZOTEVsQlFVY3NSVUZCUlN4VFFVRlBMSGxDUVVGM1FqdEpRVUZETEVsQlFVa3NTVUZCUlN4RlFVRkZMRkZCUVZFc1RVRkJTeXhOUVVGSExFVkJRVVVzVTBGQlR5eHhRa0ZCYlVJc1JVRkJSU3hYUVVGVExFVkJRVVVzV1VGQldUdEpRVUZGTEVsQlFVY3NUVUZCU1N4TFFVRkxMRWRCUVVVN1MwRkJReXhKUVVGSExFVkJRVVVzVjBGQlV5eFhRVUZUTEUxQlFVMHNaVUZCWlN4RlFVRkZMRk5CUVZFN1RVRkJReXhOUVVGTE8wMUJRVVVzVTBGQlVTeEZRVUZGTzAxQlFVMHNVMEZCVVR0UFFVRkRMRTFCUVVzN1QwRkJaMElzVVVGQlR6dE5RVUZETzB0QlFVTXNRMEZCUXl4SFFVRkZMRVZCUVVVc2FVSkJRV1VzUTBGQlF5eExRVUZITEVWQlFVVXNZMEZCV1N4WlFVRlhMRTlCUVU4N1MwRkJSU3hKUVVGSExFVkJRVVVzV1VGQlZTeERRVUZETEVkQlFVVXNUVUZCVFN4RlFVRkZPMHRCUVU4c1QwRkJUeXhGUVVGRk8wbEJRVTA3U1VGQlF6dEhRVUZSTzBkQlFVTXNTVUZCUnl4RlFVRkZMRk5CUVU4c01FSkJRWGxDTzBsQlFVTXNUVUZCVFN4bFFVRmxMRVZCUVVVc1UwRkJVVHRMUVVGRExFMUJRVXM3UzBGQlJTeFRRVUZSTEVWQlFVVTdTMEZCZFVJc1UwRkJVVHROUVVGRExFMUJRVXM3VFVGQll5eFZRVUZUTEVWQlFVVXNUVUZCVFR0TFFVRlJPMHRCUVVVc2IwSkJRVzFDTzAxQlFVTXNWVUZCVXl4RlFVRkZMRTFCUVUwN1RVRkJVeXhYUVVGVkxFVkJRVVVzVFVGQlRUdE5RVUZWTEZGQlFVOHNSVUZCUlN4TlFVRk5PMHRCUVUwN1NVRkJReXhEUVVGRE8wbEJRVVU3UjBGQlVUdEhRVUZETEVsQlFVY3NSVUZCUlN4VFFVRlBMR1ZCUVdNN1NVRkJReXhOUVVGTkxHVkJRV1VzUlVGQlJTeFJRVUZQTzB0QlFVTXNUVUZCU3p0TFFVRkZMRkZCUVU4c1JVRkJSVHRKUVVGUExFTkJRVU03U1VGQlJUdEhRVUZSTzBkQlFVTXNUVUZCVFN4bFFVRmxMRVZCUVVVc1UwRkJVVHRKUVVGRExFMUJRVXM3U1VGQlJTeFRRVUZSTEVWQlFVVTdTVUZCVFN4VFFVRlJPMHRCUVVNc1QwRkJUVHRMUVVGRkxFMUJRVXM3U1VGQmRVSTdSMEZCUXl4RFFVRkRPMFZCUVVNN1EwRkJReXhWUVVGUk8wVkJRVU1zU1VGQlJ5eEhRVUZGTEVsQlFVYzdSMEZCUXl4TlFVRk5MRmxCUVZrc1EwRkJRenRGUVVGRExGRkJRVTBzUTBGQlF6dERRVUZETzBOQlFVTXNUVUZCVFN4TlFVRk5MRlZCUVZVc1JVRkJSU3hQUVVGUExESkNRVUV5UWp0QlFVRkRPMEZCUVVNc1pVRkJaU3hsUVVGbExFZEJRVVVzUjBGQlJUdERRVUZETEVsQlFVY3NUVUZCU1N4TFFVRkxMRWRCUVVVc1QwRkJUeXhOUVVGTkxFVkJRVVVzUzBGQlN6dERRVUZGTEVsQlFVY3NSVUZCUlN4VFFVRlJMRTFCUVUwc1JVRkJSVHREUVVGUExFbEJRVWtzUjBGQlJTeEpRVUZGTEVsQlFVa3NVMEZCVXl4SFFVRkZMRTFCUVVrN1JVRkJReXhKUVVGRk8wTkJRVU1zUTBGQlF5eEhRVUZGTEdOQlFWVXNTVUZCU1N4RlFVRkZMRTFCUVUwN1EwRkJSU3hGUVVGRkxHbENRVUZwUWl4VFFVRlJMRTlCUVUwc1JVRkJReXhOUVVGTExFTkJRVU1zUlVGQlF5eERRVUZETzBOQlFVVXNTVUZCUnp0RlFVRkRMRTlCUVU4c1RVRkJUU3hSUVVGUkxFdEJRVXNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUlN4RFFVRkRMRU5CUVVNN1EwRkJReXhWUVVGUk8wVkJRVU1zUlVGQlJTeHZRa0ZCYjBJc1UwRkJVU3hMUVVGTE8wTkJRVU03UVVGQlF6dEJRVUZETEZOQlFWTXNiVUpCUVcxQ0xFZEJRVVVzUjBGQlJUdERRVUZETEVsQlFVY3NUVUZCU1N4UFFVRlBMRVZCUVVVc1QwRkJTeXhaUVVGVkxFVkJRVVVzU1VGQlNTeExRVUZMTEUxQlFVa3NTMEZCU1N4TlFVRk5MRlZCUVZVc2NVTkJRWEZETzBOQlFVVXNTVUZCUnl4UFFVRlBMRVZCUVVVc1ZVRkJVU3haUVVGVkxFVkJRVVVzVDBGQlR5eExRVUZMTEUxQlFVa3NTVUZCUnl4TlFVRk5MRlZCUVZVc2QwTkJRWGRETzBOQlFVVXNTVUZCUnl4UFFVRlBMRVZCUVVVc1YwRkJVeXhaUVVGVkxFVkJRVVVzVVVGQlVTeExRVUZMTEUxQlFVa3NTVUZCUnl4TlFVRk5MRlZCUVZVc2VVTkJRWGxETzBGQlFVTTdRVUZCUXl4VFFVRlRMR3RDUVVGclFpeEhRVUZGTEVkQlFVVTdRMEZCUXl4SlFVRkpMRWxCUVVVc1IwRkJSU3hKUVVGRkxFVkJRVVVzZVVKQlFYVkNMRWxCUVVrc1NVRkJSVHREUVVGRkxFbEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNSMEZCUlR0RlFVRkRMRWxCUVVrc1NVRkJSU3hGUVVGRkxGbEJRVmtzUjBGQlJ5eEhRVUZGTEVsQlFVVXNTVUZCUlN4SlFVRkZMRWxCUVVVc1JVRkJSU3hOUVVGTkxFbEJRVVVzUTBGQlF6dEZRVUZGTEUxQlFVMHNWVUZCVlN3eVFrRkJNa0lzUlVGQlJTdzJSRUZCTmtRN1EwRkJRenREUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEVkQlFVVXNSVUZCUlN3d1FrRkJkMElzUzBGQlN5eExRVUZITEU5QlFVOHNaVUZCWlN4SFFVRkZMSE5DUVVGeFFqdEZRVUZETEZsQlFWY3NRMEZCUXp0RlFVRkZMRTlCUVUwN1EwRkJReXhEUVVGRE8wRkJRVU03T3p0QlEwTTVLMFlzWlVGQlpTdzBRa0ZCTkVJc1IwRkJSU3hIUVVGRk8wTkJRVU1zVDBGQlR5eE5RVUZOTEZsQlFWa3NSMEZCUlR0RlFVRkRMRWRCUVVjc1QwRkJUeXhGUVVGRkxGZEJRVk1zV1VGQlZTeEZRVUZGTEZGQlFWRXNTMEZCU3l4TlFVRkpMRXRCUVVjc1JVRkJReXhUUVVGUkxFVkJRVVVzVVVGQlR5eEpRVUZGTEVOQlFVTTdSVUZCUlN4VFFVRlJMRVZCUVVVN1JVRkJVU3hqUVVGaExFVkJRVVU3UlVGQllTeFJRVUZQTEVWQlFVVTdRMEZCVVN4SFFVRkZPMFZCUVVNc1kwRkJZU3hGUVVGRk8wVkJRVThzWTBGQllTeERRVUZETzBOQlFVTXNRMEZCUXp0QlFVRkRPMEZCUVVNc05FSkJRVFJDTEdGQlFWYzdRVUZETlZjc05FSkJRVFJDTEdGQlFXRTdRVUZEZWtNc1YwRkJWeXh2UWtGQmIwSXNTVUZCU1N3NFEwRkJPRU1zTWtKQlFUSkNJbjA9Cn0pKCk7Cg=="
].join(""), "base64").toString("utf8");
const POST = us(workflowCode, { namespace: "eve6b697275" });
//#endregion
//#region .eve/builds/mtmvs4nd-4e318e93-4738-496b-802c-142bfc4c97e8/nitro/workflow/workflows-handler.mjs
var workflows_handler_default = async ({ req }) => {
	return await POST(req);
};
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
const findRoute = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/eve/v1/health",
		method: "GET",
		handler: toEventHandler(health_default$1)
	}, $1 = {
		route: "/eve/v1/health",
		method: "HEAD",
		handler: toEventHandler(health_default)
	}, $2 = {
		route: "/eve/v1/info",
		method: "GET",
		handler: toEventHandler(info_default)
	}, $3 = {
		route: "/eve/v1/session",
		method: "POST",
		handler: toEventHandler(session_default)
	}, $4 = {
		route: "/",
		method: "GET",
		handler: toEventHandler(GET__default)
	}, $5 = {
		route: "/",
		method: "HEAD",
		handler: toEventHandler(HEAD__default)
	}, $6 = {
		route: "/.well-known/workflow/v1/flow",
		handler: toEventHandler(workflows_handler_default)
	}, $7 = {
		route: "/eve/v1/connections/:name/callback/:token",
		method: "GET",
		handler: toEventHandler(_token_default$9)
	}, $8 = {
		route: "/eve/v1/connections/:name/callback/:token",
		method: "POST",
		handler: toEventHandler(_token_default$8)
	}, $9 = {
		route: "/eve/v1/connections/:name/callback/:attemptId/:token",
		method: "GET",
		handler: toEventHandler(_token_default$11)
	}, $10 = {
		route: "/eve/v1/connections/:name/callback/:attemptId/:token",
		method: "POST",
		handler: toEventHandler(_token_default$10)
	}, $11 = {
		route: "/eve/v1/activity/:token",
		method: "POST",
		handler: toEventHandler(_token_default$7)
	}, $12 = {
		route: "/eve/v1/callback/:token",
		method: "POST",
		handler: toEventHandler(_token_default$6)
	}, $13 = {
		route: "/eve/v1/task-input/:token",
		method: "POST",
		handler: toEventHandler(_token_default$5)
	}, $14 = {
		route: "/eve/v1/session/:sessionId",
		method: "POST",
		handler: toEventHandler(_sessionId_default)
	}, $15 = {
		route: "/eve/v1/session/:sessionId/cancel",
		method: "POST",
		handler: toEventHandler(cancel_default)
	}, $16 = {
		route: "/eve/v1/session/:sessionId/compact",
		method: "POST",
		handler: toEventHandler(compact_default)
	}, $17 = {
		route: "/eve/v1/session/:sessionId/clear",
		method: "POST",
		handler: toEventHandler(clear_default)
	}, $18 = {
		route: "/eve/v1/session/:sessionId/reset",
		method: "POST",
		handler: toEventHandler(reset_default)
	}, $19 = {
		route: "/eve/v1/session/:sessionId/stream",
		method: "GET",
		handler: toEventHandler(stream_default$1)
	}, $20 = {
		route: "/eve/v1/session/:parentSessionId/subagents/:callId/:childSessionId/stream",
		method: "GET",
		handler: toEventHandler(stream_default)
	}, $21 = {
		route: "/.well-known/workflow/v1/webhook/:token",
		method: "GET",
		handler: toEventHandler(_token_default$4)
	}, $22 = {
		route: "/.well-known/workflow/v1/webhook/:token",
		method: "POST",
		handler: toEventHandler(_token_default$3)
	}, $23 = {
		route: "/.well-known/workflow/v1/webhook/:token",
		method: "PUT",
		handler: toEventHandler(_token_default$2)
	}, $24 = {
		route: "/.well-known/workflow/v1/webhook/:token",
		method: "PATCH",
		handler: toEventHandler(_token_default$1)
	}, $25 = {
		route: "/.well-known/workflow/v1/webhook/:token",
		method: "DELETE",
		handler: toEventHandler(_token_default)
	};
	return (m, p) => {
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		if (p === "/eve/v1/health") {
			if (m === "GET") return { data: $0 };
			if (m === "HEAD") return { data: $1 };
		} else if (p === "/eve/v1/info") {
			if (m === "GET") return { data: $2 };
		} else if (p === "/eve/v1/session") {
			if (m === "POST") return { data: $3 };
		} else if (p === "/") {
			if (m === "GET") return { data: $4 };
			if (m === "HEAD") return { data: $5 };
		} else if (p === "/.well-known/workflow/v1/flow") return { data: $6 };
		let s = p.split("/"), l = s.length;
		if (l > 1) {
			if (s[1] === "eve") {
				if (l > 2) {
					if (s[2] === "v1") {
						if (l > 3) {
							if (s[3] === "connections") {
								if (l > 5) {
									if (s[5] === "callback") {
										if (l === 7 || l === 6) {
											if (m === "GET") {
												if (l > 6) return {
													data: $7,
													params: {
														"name": s[4],
														"token": s[6]
													}
												};
											}
											if (m === "POST") {
												if (l > 6) return {
													data: $8,
													params: {
														"name": s[4],
														"token": s[6]
													}
												};
											}
										}
										if (l === 8 || l === 7) {
											if (m === "GET") {
												if (l > 7) return {
													data: $9,
													params: {
														"name": s[4],
														"attemptId": s[6],
														"token": s[7]
													}
												};
											}
											if (m === "POST") {
												if (l > 7) return {
													data: $10,
													params: {
														"name": s[4],
														"attemptId": s[6],
														"token": s[7]
													}
												};
											}
										}
									}
								}
							} else if (s[3] === "activity") {
								if (l === 5 || l === 4) {
									if (m === "POST") {
										if (l > 4) return {
											data: $11,
											params: { "token": s[4] }
										};
									}
								}
							} else if (s[3] === "callback") {
								if (l === 5 || l === 4) {
									if (m === "POST") {
										if (l > 4) return {
											data: $12,
											params: { "token": s[4] }
										};
									}
								}
							} else if (s[3] === "task-input") {
								if (l === 5 || l === 4) {
									if (m === "POST") {
										if (l > 4) return {
											data: $13,
											params: { "token": s[4] }
										};
									}
								}
							} else if (s[3] === "session") {
								if (l === 5 || l === 4) {
									if (m === "POST") {
										if (l > 4) return {
											data: $14,
											params: { "sessionId": s[4] }
										};
									}
								} else if (s[5] === "cancel") {
									if (l === 6) {
										if (m === "POST") return {
											data: $15,
											params: { "sessionId": s[4] }
										};
									}
								} else if (s[5] === "compact") {
									if (l === 6) {
										if (m === "POST") return {
											data: $16,
											params: { "sessionId": s[4] }
										};
									}
								} else if (s[5] === "clear") {
									if (l === 6) {
										if (m === "POST") return {
											data: $17,
											params: { "sessionId": s[4] }
										};
									}
								} else if (s[5] === "reset") {
									if (l === 6) {
										if (m === "POST") return {
											data: $18,
											params: { "sessionId": s[4] }
										};
									}
								} else if (s[5] === "stream") {
									if (l === 6) {
										if (m === "GET") return {
											data: $19,
											params: { "sessionId": s[4] }
										};
									}
								} else if (s[5] === "subagents") {
									if (l > 8) {
										if (s[8] === "stream") {
											if (l === 9) {
												if (m === "GET") return {
													data: $20,
													params: {
														"parentSessionId": s[4],
														"callId": s[6],
														"childSessionId": s[7]
													}
												};
											}
										}
									}
								}
							}
						}
					}
				}
			} else if (s[1] === ".well-known") {
				if (l > 2) {
					if (s[2] === "workflow") {
						if (l > 3) {
							if (s[3] === "v1") {
								if (l > 4) {
									if (s[4] === "webhook") {
										if (l === 6 || l === 5) {
											if (m === "GET") {
												if (l > 5) return {
													data: $21,
													params: { "token": s[5] }
												};
											}
											if (m === "POST") {
												if (l > 5) return {
													data: $22,
													params: { "token": s[5] }
												};
											}
											if (m === "PUT") {
												if (l > 5) return {
													data: $23,
													params: { "token": s[5] }
												};
											}
											if (m === "PATCH") {
												if (l > 5) return {
													data: $24,
													params: { "token": s[5] }
												};
											}
											if (m === "DELETE") {
												if (l > 5) return {
													data: $25,
													params: { "token": s[5] }
												};
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	};
})();
const globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
const errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
const errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region .eve/builds/mtmvs4nd-4e318e93-4738-496b-802c-142bfc4c97e8/host/compiled-artifacts-workflow-world.mjs
applyLocalWorkflowWorldDeliveryTimeoutDefaults();
const workflowWorld = await xi({ dataDir: resolveLocalWorkflowWorldDataDirectory(process.cwd()) });
validateWorkflowWorld({
	packageName: void 0,
	world: workflowWorld
});
_i(workflowWorld);
await gi();
await workflowWorld.start?.();
function installWorkflowWorldPlugin() {}
//#endregion
//#region #nitro/virtual/plugins
const plugins = [
	installCompiledArtifactsPlugin,
	installWorkflowWorldPlugin,
	sandboxShutdownPlugin
];
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const hooks = new HookableCore();
	const captureError = (error, errorCtx) => {
		const promise = hooks.callHook("error", error, errorCtx)?.catch?.((hookError) => {
			console.error("Error while capturing another error", hookError);
		});
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
			if (promise && typeof errorCtx.event.req.waitUntil === "function") errorCtx.event.req.waitUntil(promise);
		}
	};
	const h3App = createH3App({ onError(error, event) {
		captureError(error, { event });
		return error_handler_default(error, event);
	} });
	h3App.config.onRequest = (event) => {
		return hooks.callHook("request", event)?.catch?.((error) => {
			captureError(error, {
				event,
				tags: ["request"]
			});
		});
	};
	h3App.config.onResponse = (res, event) => {
		return hooks.callHook("response", res, event)?.catch?.((error) => {
			captureError(error, {
				event,
				tags: ["response"]
			});
		});
	};
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks,
		captureError
	};
}
function initNitroPlugins(app) {
	for (const plugin of plugins) try {
		plugin(app);
	} catch (error) {
		app.captureError?.(error, { tags: ["plugin"] });
		throw error;
	}
	return app;
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
const APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	initNitroPlugins(instance);
	return instance;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
const tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
const _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
const port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };

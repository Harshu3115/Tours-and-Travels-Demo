(function () { const o = document.createElement("link").relList; if (o && o.supports && o.supports("modulepreload")) return; for (const m of document.querySelectorAll('link[rel="modulepreload"]')) c(m); new MutationObserver(m => { for (const h of m) if (h.type === "childList") for (const g of h.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && c(g) }).observe(document, { childList: !0, subtree: !0 }); function f(m) { const h = {}; return m.integrity && (h.integrity = m.integrity), m.referrerPolicy && (h.referrerPolicy = m.referrerPolicy), m.crossOrigin === "use-credentials" ? h.credentials = "include" : m.crossOrigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h } function c(m) { if (m.ep) return; m.ep = !0; const h = f(m); fetch(m.href, h) } })(); function Im(u) { return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u } var Ks = { exports: {} }, Gn = {};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm; function Wp() { if (Tm) return Gn; Tm = 1; var u = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment"); function f(c, m, h) { var g = null; if (h !== void 0 && (g = "" + h), m.key !== void 0 && (g = "" + m.key), "key" in m) { h = {}; for (var j in m) j !== "key" && (h[j] = m[j]) } else h = m; return m = h.ref, { $$typeof: u, type: c, key: g, ref: m !== void 0 ? m : null, props: h } } return Gn.Fragment = o, Gn.jsx = f, Gn.jsxs = f, Gn } var zm; function Ip() { return zm || (zm = 1, Ks.exports = Wp()), Ks.exports } var r = Ip(), Js = { exports: {} }, I = {};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm; function Pp() { if (Cm) return I; Cm = 1; var u = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), g = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), M = Symbol.iterator; function H(b) { return b === null || typeof b != "object" ? null : (b = M && b[M] || b["@@iterator"], typeof b == "function" ? b : null) } var L = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, k = Object.assign, X = {}; function q(b, U, G) { this.props = b, this.context = U, this.refs = X, this.updater = G || L } q.prototype.isReactComponent = {}, q.prototype.setState = function (b, U) { if (typeof b != "object" && typeof b != "function" && b != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, b, U, "setState") }, q.prototype.forceUpdate = function (b) { this.updater.enqueueForceUpdate(this, b, "forceUpdate") }; function B() { } B.prototype = q.prototype; function V(b, U, G) { this.props = b, this.context = U, this.refs = X, this.updater = G || L } var te = V.prototype = new B; te.constructor = V, k(te, q.prototype), te.isPureReactComponent = !0; var le = Array.isArray; function ve() { } var W = { H: null, A: null, T: null, S: null }, Me = Object.prototype.hasOwnProperty; function Ke(b, U, G) { var Z = G.ref; return { $$typeof: u, type: b, key: U, ref: Z !== void 0 ? Z : null, props: G } } function Ut(b, U) { return Ke(b.type, U, b.props) } function yt(b) { return typeof b == "object" && b !== null && b.$$typeof === u } function Je(b) { var U = { "=": "=0", ":": "=2" }; return "$" + b.replace(/[=:]/g, function (G) { return U[G] }) } var Bt = /\/+/g; function gt(b, U) { return typeof b == "object" && b !== null && b.key != null ? Je("" + b.key) : U.toString(36) } function Ue(b) { switch (b.status) { case "fulfilled": return b.value; case "rejected": throw b.reason; default: switch (typeof b.status == "string" ? b.then(ve, ve) : (b.status = "pending", b.then(function (U) { b.status === "pending" && (b.status = "fulfilled", b.value = U) }, function (U) { b.status === "pending" && (b.status = "rejected", b.reason = U) })), b.status) { case "fulfilled": return b.value; case "rejected": throw b.reason } }throw b } function D(b, U, G, Z, P) { var ne = typeof b; (ne === "undefined" || ne === "boolean") && (b = null); var pe = !1; if (b === null) pe = !0; else switch (ne) { case "bigint": case "string": case "number": pe = !0; break; case "object": switch (b.$$typeof) { case u: case o: pe = !0; break; case E: return pe = b._init, D(pe(b._payload), U, G, Z, P) } }if (pe) return P = P(b), pe = Z === "" ? "." + gt(b, 0) : Z, le(P) ? (G = "", pe != null && (G = pe.replace(Bt, "$&/") + "/"), D(P, U, G, "", function (Kl) { return Kl })) : P != null && (yt(P) && (P = Ut(P, G + (P.key == null || b && b.key === P.key ? "" : ("" + P.key).replace(Bt, "$&/") + "/") + pe)), U.push(P)), 1; pe = 0; var We = Z === "" ? "." : Z + ":"; if (le(b)) for (var De = 0; De < b.length; De++)Z = b[De], ne = We + gt(Z, De), pe += D(Z, U, G, ne, P); else if (De = H(b), typeof De == "function") for (b = De.call(b), De = 0; !(Z = b.next()).done;)Z = Z.value, ne = We + gt(Z, De++), pe += D(Z, U, G, ne, P); else if (ne === "object") { if (typeof b.then == "function") return D(Ue(b), U, G, Z, P); throw U = String(b), Error("Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead.") } return pe } function Y(b, U, G) { if (b == null) return b; var Z = [], P = 0; return D(b, Z, "", "", function (ne) { return U.call(G, ne, P++) }), Z } function F(b) { if (b._status === -1) { var U = b._result; U = U(), U.then(function (G) { (b._status === 0 || b._status === -1) && (b._status = 1, b._result = G) }, function (G) { (b._status === 0 || b._status === -1) && (b._status = 2, b._result = G) }), b._status === -1 && (b._status = 0, b._result = U) } if (b._status === 1) return b._result.default; throw b._result } var xe = typeof reportError == "function" ? reportError : function (b) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var U = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b), error: b }); if (!window.dispatchEvent(U)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", b); return } console.error(b) }, Ne = { map: Y, forEach: function (b, U, G) { Y(b, function () { U.apply(this, arguments) }, G) }, count: function (b) { var U = 0; return Y(b, function () { U++ }), U }, toArray: function (b) { return Y(b, function (U) { return U }) || [] }, only: function (b) { if (!yt(b)) throw Error("React.Children.only expected to receive a single React element child."); return b } }; return I.Activity = C, I.Children = Ne, I.Component = q, I.Fragment = f, I.Profiler = m, I.PureComponent = V, I.StrictMode = c, I.Suspense = v, I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, I.__COMPILER_RUNTIME = { __proto__: null, c: function (b) { return W.H.useMemoCache(b) } }, I.cache = function (b) { return function () { return b.apply(null, arguments) } }, I.cacheSignal = function () { return null }, I.cloneElement = function (b, U, G) { if (b == null) throw Error("The argument must be a React element, but you passed " + b + "."); var Z = k({}, b.props), P = b.key; if (U != null) for (ne in U.key !== void 0 && (P = "" + U.key), U) !Me.call(U, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && U.ref === void 0 || (Z[ne] = U[ne]); var ne = arguments.length - 2; if (ne === 1) Z.children = G; else if (1 < ne) { for (var pe = Array(ne), We = 0; We < ne; We++)pe[We] = arguments[We + 2]; Z.children = pe } return Ke(b.type, P, Z) }, I.createContext = function (b) { return b = { $$typeof: g, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null }, b.Provider = b, b.Consumer = { $$typeof: h, _context: b }, b }, I.createElement = function (b, U, G) { var Z, P = {}, ne = null; if (U != null) for (Z in U.key !== void 0 && (ne = "" + U.key), U) Me.call(U, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (P[Z] = U[Z]); var pe = arguments.length - 2; if (pe === 1) P.children = G; else if (1 < pe) { for (var We = Array(pe), De = 0; De < pe; De++)We[De] = arguments[De + 2]; P.children = We } if (b && b.defaultProps) for (Z in pe = b.defaultProps, pe) P[Z] === void 0 && (P[Z] = pe[Z]); return Ke(b, ne, P) }, I.createRef = function () { return { current: null } }, I.forwardRef = function (b) { return { $$typeof: j, render: b } }, I.isValidElement = yt, I.lazy = function (b) { return { $$typeof: E, _payload: { _status: -1, _result: b }, _init: F } }, I.memo = function (b, U) { return { $$typeof: p, type: b, compare: U === void 0 ? null : U } }, I.startTransition = function (b) { var U = W.T, G = {}; W.T = G; try { var Z = b(), P = W.S; P !== null && P(G, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ve, xe) } catch (ne) { xe(ne) } finally { U !== null && G.types !== null && (U.types = G.types), W.T = U } }, I.unstable_useCacheRefresh = function () { return W.H.useCacheRefresh() }, I.use = function (b) { return W.H.use(b) }, I.useActionState = function (b, U, G) { return W.H.useActionState(b, U, G) }, I.useCallback = function (b, U) { return W.H.useCallback(b, U) }, I.useContext = function (b) { return W.H.useContext(b) }, I.useDebugValue = function () { }, I.useDeferredValue = function (b, U) { return W.H.useDeferredValue(b, U) }, I.useEffect = function (b, U) { return W.H.useEffect(b, U) }, I.useEffectEvent = function (b) { return W.H.useEffectEvent(b) }, I.useId = function () { return W.H.useId() }, I.useImperativeHandle = function (b, U, G) { return W.H.useImperativeHandle(b, U, G) }, I.useInsertionEffect = function (b, U) { return W.H.useInsertionEffect(b, U) }, I.useLayoutEffect = function (b, U) { return W.H.useLayoutEffect(b, U) }, I.useMemo = function (b, U) { return W.H.useMemo(b, U) }, I.useOptimistic = function (b, U) { return W.H.useOptimistic(b, U) }, I.useReducer = function (b, U, G) { return W.H.useReducer(b, U, G) }, I.useRef = function (b) { return W.H.useRef(b) }, I.useState = function (b) { return W.H.useState(b) }, I.useSyncExternalStore = function (b, U, G) { return W.H.useSyncExternalStore(b, U, G) }, I.useTransition = function () { return W.H.useTransition() }, I.version = "19.2.8", I } var wm; function oc() { return wm || (wm = 1, Js.exports = Pp()), Js.exports } var S = oc(); const ey = Im(S); var Fs = { exports: {} }, Xn = {}, Ws = { exports: {} }, Is = {};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am; function ty() { return Am || (Am = 1, (function (u) { function o(D, Y) { var F = D.length; D.push(Y); e: for (; 0 < F;) { var xe = F - 1 >>> 1, Ne = D[xe]; if (0 < m(Ne, Y)) D[xe] = Y, D[F] = Ne, F = xe; else break e } } function f(D) { return D.length === 0 ? null : D[0] } function c(D) { if (D.length === 0) return null; var Y = D[0], F = D.pop(); if (F !== Y) { D[0] = F; e: for (var xe = 0, Ne = D.length, b = Ne >>> 1; xe < b;) { var U = 2 * (xe + 1) - 1, G = D[U], Z = U + 1, P = D[Z]; if (0 > m(G, F)) Z < Ne && 0 > m(P, G) ? (D[xe] = P, D[Z] = F, xe = Z) : (D[xe] = G, D[U] = F, xe = U); else if (Z < Ne && 0 > m(P, F)) D[xe] = P, D[Z] = F, xe = Z; else break e } } return Y } function m(D, Y) { var F = D.sortIndex - Y.sortIndex; return F !== 0 ? F : D.id - Y.id } if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") { var h = performance; u.unstable_now = function () { return h.now() } } else { var g = Date, j = g.now(); u.unstable_now = function () { return g.now() - j } } var v = [], p = [], E = 1, C = null, M = 3, H = !1, L = !1, k = !1, X = !1, q = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null; function te(D) { for (var Y = f(p); Y !== null;) { if (Y.callback === null) c(p); else if (Y.startTime <= D) c(p), Y.sortIndex = Y.expirationTime, o(v, Y); else break; Y = f(p) } } function le(D) { if (k = !1, te(D), !L) if (f(v) !== null) L = !0, ve || (ve = !0, Je()); else { var Y = f(p); Y !== null && Ue(le, Y.startTime - D) } } var ve = !1, W = -1, Me = 5, Ke = -1; function Ut() { return X ? !0 : !(u.unstable_now() - Ke < Me) } function yt() { if (X = !1, ve) { var D = u.unstable_now(); Ke = D; var Y = !0; try { e: { L = !1, k && (k = !1, B(W), W = -1), H = !0; var F = M; try { t: { for (te(D), C = f(v); C !== null && !(C.expirationTime > D && Ut());) { var xe = C.callback; if (typeof xe == "function") { C.callback = null, M = C.priorityLevel; var Ne = xe(C.expirationTime <= D); if (D = u.unstable_now(), typeof Ne == "function") { C.callback = Ne, te(D), Y = !0; break t } C === f(v) && c(v), te(D) } else c(v); C = f(v) } if (C !== null) Y = !0; else { var b = f(p); b !== null && Ue(le, b.startTime - D), Y = !1 } } break e } finally { C = null, M = F, H = !1 } Y = void 0 } } finally { Y ? Je() : ve = !1 } } } var Je; if (typeof V == "function") Je = function () { V(yt) }; else if (typeof MessageChannel < "u") { var Bt = new MessageChannel, gt = Bt.port2; Bt.port1.onmessage = yt, Je = function () { gt.postMessage(null) } } else Je = function () { q(yt, 0) }; function Ue(D, Y) { W = q(function () { D(u.unstable_now()) }, Y) } u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function (D) { D.callback = null }, u.unstable_forceFrameRate = function (D) { 0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Me = 0 < D ? Math.floor(1e3 / D) : 5 }, u.unstable_getCurrentPriorityLevel = function () { return M }, u.unstable_next = function (D) { switch (M) { case 1: case 2: case 3: var Y = 3; break; default: Y = M }var F = M; M = Y; try { return D() } finally { M = F } }, u.unstable_requestPaint = function () { X = !0 }, u.unstable_runWithPriority = function (D, Y) { switch (D) { case 1: case 2: case 3: case 4: case 5: break; default: D = 3 }var F = M; M = D; try { return Y() } finally { M = F } }, u.unstable_scheduleCallback = function (D, Y, F) { var xe = u.unstable_now(); switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? xe + F : xe) : F = xe, D) { case 1: var Ne = -1; break; case 2: Ne = 250; break; case 5: Ne = 1073741823; break; case 4: Ne = 1e4; break; default: Ne = 5e3 }return Ne = F + Ne, D = { id: E++, callback: Y, priorityLevel: D, startTime: F, expirationTime: Ne, sortIndex: -1 }, F > xe ? (D.sortIndex = F, o(p, D), f(v) === null && D === f(p) && (k ? (B(W), W = -1) : k = !0, Ue(le, F - xe))) : (D.sortIndex = Ne, o(v, D), L || H || (L = !0, ve || (ve = !0, Je()))), D }, u.unstable_shouldYield = Ut, u.unstable_wrapCallback = function (D) { var Y = M; return function () { var F = M; M = Y; try { return D.apply(this, arguments) } finally { M = F } } } })(Is)), Is } var Rm; function ay() { return Rm || (Rm = 1, Ws.exports = ty()), Ws.exports } var Ps = { exports: {} }, Fe = {};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm; function ly() { if (Mm) return Fe; Mm = 1; var u = oc(); function o(v) { var p = "https://react.dev/errors/" + v; if (1 < arguments.length) { p += "?args[]=" + encodeURIComponent(arguments[1]); for (var E = 2; E < arguments.length; E++)p += "&args[]=" + encodeURIComponent(arguments[E]) } return "Minified React error #" + v + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } function f() { } var c = { d: { f, r: function () { throw Error(o(522)) }, D: f, C: f, L: f, m: f, X: f, S: f, M: f }, p: 0, findDOMNode: null }, m = Symbol.for("react.portal"); function h(v, p, E) { var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: m, key: C == null ? null : "" + C, children: v, containerInfo: p, implementation: E } } var g = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function j(v, p) { if (v === "font") return ""; if (typeof p == "string") return p === "use-credentials" ? p : "" } return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, Fe.createPortal = function (v, p) { var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(o(299)); return h(v, p, null, E) }, Fe.flushSync = function (v) { var p = g.T, E = c.p; try { if (g.T = null, c.p = 2, v) return v() } finally { g.T = p, c.p = E, c.d.f() } }, Fe.preconnect = function (v, p) { typeof v == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, c.d.C(v, p)) }, Fe.prefetchDNS = function (v) { typeof v == "string" && c.d.D(v) }, Fe.preinit = function (v, p) { if (typeof v == "string" && p && typeof p.as == "string") { var E = p.as, C = j(E, p.crossOrigin), M = typeof p.integrity == "string" ? p.integrity : void 0, H = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0; E === "style" ? c.d.S(v, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: C, integrity: M, fetchPriority: H }) : E === "script" && c.d.X(v, { crossOrigin: C, integrity: M, fetchPriority: H, nonce: typeof p.nonce == "string" ? p.nonce : void 0 }) } }, Fe.preinitModule = function (v, p) { if (typeof v == "string") if (typeof p == "object" && p !== null) { if (p.as == null || p.as === "script") { var E = j(p.as, p.crossOrigin); c.d.M(v, { crossOrigin: E, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 }) } } else p == null && c.d.M(v) }, Fe.preload = function (v, p) { if (typeof v == "string" && typeof p == "object" && p !== null && typeof p.as == "string") { var E = p.as, C = j(E, p.crossOrigin); c.d.L(v, E, { crossOrigin: C, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0, type: typeof p.type == "string" ? p.type : void 0, fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0, referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0, imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0, imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0, media: typeof p.media == "string" ? p.media : void 0 }) } }, Fe.preloadModule = function (v, p) { if (typeof v == "string") if (p) { var E = j(p.as, p.crossOrigin); c.d.m(v, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: E, integrity: typeof p.integrity == "string" ? p.integrity : void 0 }) } else c.d.m(v) }, Fe.requestFormReset = function (v) { c.d.r(v) }, Fe.unstable_batchedUpdates = function (v, p) { return v(p) }, Fe.useFormState = function (v, p, E) { return g.H.useFormState(v, p, E) }, Fe.useFormStatus = function () { return g.H.useHostTransitionStatus() }, Fe.version = "19.2.8", Fe } var Dm; function ny() { if (Dm) return Ps.exports; Dm = 1; function u() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u) } catch (o) { console.error(o) } } return u(), Ps.exports = ly(), Ps.exports }/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m; function iy() {
  if (_m) return Xn; _m = 1; var u = ay(), o = oc(), f = ny(); function c(e) { var t = "https://react.dev/errors/" + e; if (1 < arguments.length) { t += "?args[]=" + encodeURIComponent(arguments[1]); for (var a = 2; a < arguments.length; a++)t += "&args[]=" + encodeURIComponent(arguments[a]) } return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } function m(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) } function h(e) { var t = e, a = e; if (e.alternate) for (; t.return;)t = t.return; else { e = t; do t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return; while (e) } return t.tag === 3 ? a : null } function g(e) { if (e.tag === 13) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null } function j(e) { if (e.tag === 31) { var t = e.memoizedState; if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated } return null } function v(e) { if (h(e) !== e) throw Error(c(188)) } function p(e) { var t = e.alternate; if (!t) { if (t = h(e), t === null) throw Error(c(188)); return t !== e ? null : e } for (var a = e, l = t; ;) { var n = a.return; if (n === null) break; var i = n.alternate; if (i === null) { if (l = n.return, l !== null) { a = l; continue } break } if (n.child === i.child) { for (i = n.child; i;) { if (i === a) return v(n), e; if (i === l) return v(n), t; i = i.sibling } throw Error(c(188)) } if (a.return !== l.return) a = n, l = i; else { for (var s = !1, d = n.child; d;) { if (d === a) { s = !0, a = n, l = i; break } if (d === l) { s = !0, l = n, a = i; break } d = d.sibling } if (!s) { for (d = i.child; d;) { if (d === a) { s = !0, a = i, l = n; break } if (d === l) { s = !0, l = i, a = n; break } d = d.sibling } if (!s) throw Error(c(189)) } } if (a.alternate !== l) throw Error(c(190)) } if (a.tag !== 3) throw Error(c(188)); return a.stateNode.current === a ? e : t } function E(e) { var t = e.tag; if (t === 5 || t === 26 || t === 27 || t === 6) return e; for (e = e.child; e !== null;) { if (t = E(e), t !== null) return t; e = e.sibling } return null } var C = Object.assign, M = Symbol.for("react.element"), H = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), V = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), Ke = Symbol.for("react.activity"), Ut = Symbol.for("react.memo_cache_sentinel"), yt = Symbol.iterator; function Je(e) { return e === null || typeof e != "object" ? null : (e = yt && e[yt] || e["@@iterator"], typeof e == "function" ? e : null) } var Bt = Symbol.for("react.client.reference"); function gt(e) { if (e == null) return null; if (typeof e == "function") return e.$$typeof === Bt ? null : e.displayName || e.name || null; if (typeof e == "string") return e; switch (e) { case k: return "Fragment"; case q: return "Profiler"; case X: return "StrictMode"; case le: return "Suspense"; case ve: return "SuspenseList"; case Ke: return "Activity" }if (typeof e == "object") switch (e.$$typeof) { case L: return "Portal"; case V: return e.displayName || "Context"; case B: return (e._context.displayName || "Context") + ".Consumer"; case te: var t = e.render; return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e; case W: return t = e.displayName || null, t !== null ? t : gt(e.type) || "Memo"; case Me: t = e._payload, e = e._init; try { return gt(e(t)) } catch { } }return null } var Ue = Array.isArray, D = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = { pending: !1, data: null, method: null, action: null }, xe = [], Ne = -1; function b(e) { return { current: e } } function U(e) { 0 > Ne || (e.current = xe[Ne], xe[Ne] = null, Ne--) } function G(e, t) { Ne++, xe[Ne] = e.current, e.current = t } var Z = b(null), P = b(null), ne = b(null), pe = b(null); function We(e, t) { switch (G(ne, t), G(P, e), G(Z, null), t.nodeType) { case 9: case 11: e = (e = t.documentElement) && (e = e.namespaceURI) ? Kd(e) : 0; break; default: if (e = t.tagName, t = t.namespaceURI) t = Kd(t), e = Jd(t, e); else switch (e) { case "svg": e = 1; break; case "math": e = 2; break; default: e = 0 } }U(Z), G(Z, e) } function De() { U(Z), U(P), U(ne) } function Kl(e) { e.memoizedState !== null && G(pe, e); var t = Z.current, a = Jd(t, e.type); t !== a && (G(P, e), G(Z, a)) } function Pn(e) { P.current === e && (U(Z), U(P)), pe.current === e && (U(pe), Ln._currentValue = F) } var Ru, jc; function Ha(e) {
    if (Ru === void 0) try { throw Error() } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/); Ru = t && t[1] || "", jc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
    } return `
`+ Ru + e + jc
  } var Mu = !1; function Du(e, t) {
    if (!e || Mu) return ""; Mu = !0; var a = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
      var l = { DetermineComponentFrameRoot: function () { try { if (t) { var O = function () { throw Error() }; if (Object.defineProperty(O.prototype, "props", { set: function () { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(O, []) } catch (A) { var w = A } Reflect.construct(e, [], O) } else { try { O.call() } catch (A) { w = A } e.call(O.prototype) } } else { try { throw Error() } catch (A) { w = A } (O = e()) && typeof O.catch == "function" && O.catch(function () { }) } } catch (A) { if (A && w && typeof A.stack == "string") return [A.stack, w.stack] } return [null, null] } }; l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot"; var n = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name"); n && n.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" }); var i = l.DetermineComponentFrameRoot(), s = i[0], d = i[1]; if (s && d) {
        var y = s.split(`
`), z = d.split(`
`); for (n = l = 0; l < y.length && !y[l].includes("DetermineComponentFrameRoot");)l++; for (; n < z.length && !z[n].includes("DetermineComponentFrameRoot");)n++; if (l === y.length || n === z.length) for (l = y.length - 1, n = z.length - 1; 1 <= l && 0 <= n && y[l] !== z[n];)n--; for (; 1 <= l && 0 <= n; l--, n--)if (y[l] !== z[n]) {
          if (l !== 1 || n !== 1) do if (l--, n--, 0 > n || y[l] !== z[n]) {
            var R = `
`+ y[l].replace(" at new ", " at "); return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R
          } while (1 <= l && 0 <= n); break
        }
      }
    } finally { Mu = !1, Error.prepareStackTrace = a } return (a = e ? e.displayName || e.name : "") ? Ha(a) : ""
  } function w0(e, t) { switch (e.tag) { case 26: case 27: case 5: return Ha(e.type); case 16: return Ha("Lazy"); case 13: return e.child !== t && t !== null ? Ha("Suspense Fallback") : Ha("Suspense"); case 19: return Ha("SuspenseList"); case 0: case 15: return Du(e.type, !1); case 11: return Du(e.type.render, !1); case 1: return Du(e.type, !0); case 31: return Ha("Activity"); default: return "" } } function Nc(e) {
    try { var t = "", a = null; do t += w0(e, a), a = e, e = e.return; while (e); return t } catch (l) {
      return `
Error generating stack: `+ l.message + `
`+ l.stack
    }
  } var _u = Object.prototype.hasOwnProperty, Ou = u.unstable_scheduleCallback, Uu = u.unstable_cancelCallback, A0 = u.unstable_shouldYield, R0 = u.unstable_requestPaint, ut = u.unstable_now, M0 = u.unstable_getCurrentPriorityLevel, Ec = u.unstable_ImmediatePriority, Tc = u.unstable_UserBlockingPriority, ei = u.unstable_NormalPriority, D0 = u.unstable_LowPriority, zc = u.unstable_IdlePriority, _0 = u.log, O0 = u.unstable_setDisableYieldValue, Jl = null, rt = null; function oa(e) { if (typeof _0 == "function" && O0(e), rt && typeof rt.setStrictMode == "function") try { rt.setStrictMode(Jl, e) } catch { } } var st = Math.clz32 ? Math.clz32 : H0, U0 = Math.log, B0 = Math.LN2; function H0(e) { return e >>>= 0, e === 0 ? 32 : 31 - (U0(e) / B0 | 0) | 0 } var ti = 256, ai = 262144, li = 4194304; function La(e) { var t = e & 42; if (t !== 0) return t; switch (e & -e) { case 1: return 1; case 2: return 2; case 4: return 4; case 8: return 8; case 16: return 16; case 32: return 32; case 64: return 64; case 128: return 128; case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: return e & 261888; case 262144: case 524288: case 1048576: case 2097152: return e & 3932160; case 4194304: case 8388608: case 16777216: case 33554432: return e & 62914560; case 67108864: return 67108864; case 134217728: return 134217728; case 268435456: return 268435456; case 536870912: return 536870912; case 1073741824: return 0; default: return e } } function ni(e, t, a) { var l = e.pendingLanes; if (l === 0) return 0; var n = 0, i = e.suspendedLanes, s = e.pingedLanes; e = e.warmLanes; var d = l & 134217727; return d !== 0 ? (l = d & ~i, l !== 0 ? n = La(l) : (s &= d, s !== 0 ? n = La(s) : a || (a = d & ~e, a !== 0 && (n = La(a))))) : (d = l & ~i, d !== 0 ? n = La(d) : s !== 0 ? n = La(s) : a || (a = l & ~e, a !== 0 && (n = La(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, a = t & -t, i >= a || i === 32 && (a & 4194048) !== 0) ? t : n } function Fl(e, t) { return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0 } function L0(e, t) { switch (e) { case 1: case 2: case 4: case 8: case 64: return t + 250; case 16: case 32: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return t + 5e3; case 4194304: case 8388608: case 16777216: case 33554432: return -1; case 67108864: case 134217728: case 268435456: case 536870912: case 1073741824: return -1; default: return -1 } } function Cc() { var e = li; return li <<= 1, (li & 62914560) === 0 && (li = 4194304), e } function Bu(e) { for (var t = [], a = 0; 31 > a; a++)t.push(e); return t } function Wl(e, t) { e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0) } function q0(e, t, a, l, n, i) { var s = e.pendingLanes; e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0; var d = e.entanglements, y = e.expirationTimes, z = e.hiddenUpdates; for (a = s & ~a; 0 < a;) { var R = 31 - st(a), O = 1 << R; d[R] = 0, y[R] = -1; var w = z[R]; if (w !== null) for (z[R] = null, R = 0; R < w.length; R++) { var A = w[R]; A !== null && (A.lane &= -536870913) } a &= ~O } l !== 0 && wc(e, l, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t)) } function wc(e, t, a) { e.pendingLanes |= t, e.suspendedLanes &= ~t; var l = 31 - st(t); e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930 } function Ac(e, t) { var a = e.entangledLanes |= t; for (e = e.entanglements; a;) { var l = 31 - st(a), n = 1 << l; n & t | e[l] & t && (e[l] |= t), a &= ~n } } function Rc(e, t) { var a = t & -t; return a = (a & 42) !== 0 ? 1 : Hu(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a } function Hu(e) { switch (e) { case 2: e = 1; break; case 8: e = 4; break; case 32: e = 16; break; case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: e = 128; break; case 268435456: e = 134217728; break; default: e = 0 }return e } function Lu(e) { return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2 } function Mc() { var e = Y.p; return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : vm(e.type)) } function Dc(e, t) { var a = Y.p; try { return Y.p = e, t() } finally { Y.p = a } } var fa = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + fa, Pe = "__reactProps$" + fa, ll = "__reactContainer$" + fa, qu = "__reactEvents$" + fa, k0 = "__reactListeners$" + fa, Y0 = "__reactHandles$" + fa, _c = "__reactResources$" + fa, Il = "__reactMarker$" + fa; function ku(e) { delete e[Xe], delete e[Pe], delete e[qu], delete e[k0], delete e[Y0] } function nl(e) { var t = e[Xe]; if (t) return t; for (var a = e.parentNode; a;) { if (t = a[ll] || a[Xe]) { if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (e = am(e); e !== null;) { if (a = e[Xe]) return a; e = am(e) } return t } e = a, a = e.parentNode } return null } function il(e) { if (e = e[Xe] || e[ll]) { var t = e.tag; if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e } return null } function Pl(e) { var t = e.tag; if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode; throw Error(c(33)) } function ul(e) { var t = e[_c]; return t || (t = e[_c] = { hoistableStyles: new Map, hoistableScripts: new Map }), t } function Ye(e) { e[Il] = !0 } var Oc = new Set, Uc = {}; function qa(e, t) { rl(e, t), rl(e + "Capture", t) } function rl(e, t) { for (Uc[e] = t, e = 0; e < t.length; e++)Oc.add(t[e]) } var G0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Bc = {}, Hc = {}; function X0(e) { return _u.call(Hc, e) ? !0 : _u.call(Bc, e) ? !1 : G0.test(e) ? Hc[e] = !0 : (Bc[e] = !0, !1) } function ii(e, t, a) { if (X0(t)) if (a === null) e.removeAttribute(t); else { switch (typeof a) { case "undefined": case "function": case "symbol": e.removeAttribute(t); return; case "boolean": var l = t.toLowerCase().slice(0, 5); if (l !== "data-" && l !== "aria-") { e.removeAttribute(t); return } }e.setAttribute(t, "" + a) } } function ui(e, t, a) { if (a === null) e.removeAttribute(t); else { switch (typeof a) { case "undefined": case "function": case "symbol": case "boolean": e.removeAttribute(t); return }e.setAttribute(t, "" + a) } } function Gt(e, t, a, l) { if (l === null) e.removeAttribute(a); else { switch (typeof l) { case "undefined": case "function": case "symbol": case "boolean": e.removeAttribute(a); return }e.setAttributeNS(t, a, "" + l) } } function vt(e) { switch (typeof e) { case "bigint": case "boolean": case "number": case "string": case "undefined": return e; case "object": return e; default: return "" } } function Lc(e) { var t = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio") } function V0(e, t, a) { var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t); if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") { var n = l.get, i = l.set; return Object.defineProperty(e, t, { configurable: !0, get: function () { return n.call(this) }, set: function (s) { a = "" + s, i.call(this, s) } }), Object.defineProperty(e, t, { enumerable: l.enumerable }), { getValue: function () { return a }, setValue: function (s) { a = "" + s }, stopTracking: function () { e._valueTracker = null, delete e[t] } } } } function Yu(e) { if (!e._valueTracker) { var t = Lc(e) ? "checked" : "value"; e._valueTracker = V0(e, t, "" + e[t]) } } function qc(e) { if (!e) return !1; var t = e._valueTracker; if (!t) return !0; var a = t.getValue(), l = ""; return e && (l = Lc(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1 } function ri(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null; try { return e.activeElement || e.body } catch { return e.body } } var Q0 = /[\n"\\]/g; function xt(e) { return e.replace(Q0, function (t) { return "\\" + t.charCodeAt(0).toString(16) + " " }) } function Gu(e, t, a, l, n, i, s, d) { e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + vt(t)) : e.value !== "" + vt(t) && (e.value = "" + vt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? Xu(e, s, vt(t)) : a != null ? Xu(e, s, vt(a)) : l != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + vt(d) : e.removeAttribute("name") } function kc(e, t, a, l, n, i, s, d) { if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || a != null) { if (!(i !== "submit" && i !== "reset" || t != null)) { Yu(e); return } a = a != null ? "" + vt(a) : "", t = t != null ? "" + vt(t) : a, d || t === e.value || (e.value = t), e.defaultValue = t } l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = d ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Yu(e) } function Xu(e, t, a) { t === "number" && ri(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a) } function sl(e, t, a, l) { if (e = e.options, t) { t = {}; for (var n = 0; n < a.length; n++)t["$" + a[n]] = !0; for (a = 0; a < e.length; a++)n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0) } else { for (a = "" + vt(a), t = null, n = 0; n < e.length; n++) { if (e[n].value === a) { e[n].selected = !0, l && (e[n].defaultSelected = !0); return } t !== null || e[n].disabled || (t = e[n]) } t !== null && (t.selected = !0) } } function Yc(e, t, a) { if (t != null && (t = "" + vt(t), t !== e.value && (e.value = t), a == null)) { e.defaultValue !== t && (e.defaultValue = t); return } e.defaultValue = a != null ? "" + vt(a) : "" } function Gc(e, t, a, l) { if (t == null) { if (l != null) { if (a != null) throw Error(c(92)); if (Ue(l)) { if (1 < l.length) throw Error(c(93)); l = l[0] } a = l } a == null && (a = ""), t = a } a = vt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Yu(e) } function cl(e, t) { if (t) { var a = e.firstChild; if (a && a === e.lastChild && a.nodeType === 3) { a.nodeValue = t; return } } e.textContent = t } var Z0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")); function Xc(e, t, a) { var l = t.indexOf("--") === 0; a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Z0.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px" } function Vc(e, t, a) { if (t != null && typeof t != "object") throw Error(c(62)); if (e = e.style, a != null) { for (var l in a) !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = ""); for (var n in t) l = t[n], t.hasOwnProperty(n) && a[n] !== l && Xc(e, n, l) } else for (var i in t) t.hasOwnProperty(i) && Xc(e, i, t[i]) } function Vu(e) { if (e.indexOf("-") === -1) return !1; switch (e) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return !1; default: return !0 } } var $0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), K0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i; function si(e) { return K0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e } function Xt() { } var Qu = null; function Zu(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e } var ol = null, fl = null; function Qc(e) { var t = il(e); if (t && (e = t.stateNode)) { var a = e[Pe] || null; e: switch (e = t.stateNode, t.type) { case "input": if (Gu(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) { for (a = e; a.parentNode;)a = a.parentNode; for (a = a.querySelectorAll('input[name="' + xt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) { var l = a[t]; if (l !== e && l.form === e.form) { var n = l[Pe] || null; if (!n) throw Error(c(90)); Gu(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name) } } for (t = 0; t < a.length; t++)l = a[t], l.form === e.form && qc(l) } break e; case "textarea": Yc(e, a.value, a.defaultValue); break e; case "select": t = a.value, t != null && sl(e, !!a.multiple, t, !1) } } } var $u = !1; function Zc(e, t, a) { if ($u) return e(t, a); $u = !0; try { var l = e(t); return l } finally { if ($u = !1, (ol !== null || fl !== null) && (Ji(), ol && (t = ol, e = fl, fl = ol = null, Qc(t), e))) for (t = 0; t < e.length; t++)Qc(e[t]) } } function en(e, t) { var a = e.stateNode; if (a === null) return null; var l = a[Pe] || null; if (l === null) return null; a = l[t]; e: switch (t) { case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l; break e; default: e = !1 }if (e) return null; if (a && typeof a != "function") throw Error(c(231, t, typeof a)); return a } var Vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = !1; if (Vt) try { var tn = {}; Object.defineProperty(tn, "passive", { get: function () { Ku = !0 } }), window.addEventListener("test", tn, tn), window.removeEventListener("test", tn, tn) } catch { Ku = !1 } var da = null, Ju = null, ci = null; function $c() { if (ci) return ci; var e, t = Ju, a = t.length, l, n = "value" in da ? da.value : da.textContent, i = n.length; for (e = 0; e < a && t[e] === n[e]; e++); var s = a - e; for (l = 1; l <= s && t[a - l] === n[i - l]; l++); return ci = n.slice(e, 1 < l ? 1 - l : void 0) } function oi(e) { var t = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0 } function fi() { return !0 } function Kc() { return !1 } function et(e) { function t(a, l, n, i, s) { this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = s, this.currentTarget = null; for (var d in e) e.hasOwnProperty(d) && (a = e[d], this[d] = a ? a(i) : i[d]); return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fi : Kc, this.isPropagationStopped = Kc, this } return C(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var a = this.nativeEvent; a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = fi) }, stopPropagation: function () { var a = this.nativeEvent; a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = fi) }, persist: function () { }, isPersistent: fi }), t } var ka = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 }, di = et(ka), an = C({}, ka, { view: 0, detail: 0 }), J0 = et(an), Fu, Wu, ln, mi = C({}, an, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Pu, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== ln && (ln && e.type === "mousemove" ? (Fu = e.screenX - ln.screenX, Wu = e.screenY - ln.screenY) : Wu = Fu = 0, ln = e), Fu) }, movementY: function (e) { return "movementY" in e ? e.movementY : Wu } }), Jc = et(mi), F0 = C({}, mi, { dataTransfer: 0 }), W0 = et(F0), I0 = C({}, an, { relatedTarget: 0 }), Iu = et(I0), P0 = C({}, ka, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), eh = et(P0), th = C({}, ka, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData } }), ah = et(th), lh = C({}, ka, { data: 0 }), Fc = et(lh), nh = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ih = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, uh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function rh(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : (e = uh[e]) ? !!t[e] : !1 } function Pu() { return rh } var sh = C({}, an, { key: function (e) { if (e.key) { var t = nh[e.key] || e.key; if (t !== "Unidentified") return t } return e.type === "keypress" ? (e = oi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ih[e.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Pu, charCode: function (e) { return e.type === "keypress" ? oi(e) : 0 }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 }, which: function (e) { return e.type === "keypress" ? oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0 } }), ch = et(sh), oh = C({}, mi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wc = et(oh), fh = C({}, an, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Pu }), dh = et(fh), mh = C({}, ka, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hh = et(mh), ph = C({}, mi, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0 }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }), yh = et(ph), gh = C({}, ka, { newState: 0, oldState: 0 }), vh = et(gh), xh = [9, 13, 27, 32], er = Vt && "CompositionEvent" in window, nn = null; Vt && "documentMode" in document && (nn = document.documentMode); var bh = Vt && "TextEvent" in window && !nn, Ic = Vt && (!er || nn && 8 < nn && 11 >= nn), Pc = " ", eo = !1; function to(e, t) { switch (e) { case "keyup": return xh.indexOf(t.keyCode) !== -1; case "keydown": return t.keyCode !== 229; case "keypress": case "mousedown": case "focusout": return !0; default: return !1 } } function ao(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null } var dl = !1; function Sh(e, t) { switch (e) { case "compositionend": return ao(t); case "keypress": return t.which !== 32 ? null : (eo = !0, Pc); case "textInput": return e = t.data, e === Pc && eo ? null : e; default: return null } } function jh(e, t) { if (dl) return e === "compositionend" || !er && to(e, t) ? (e = $c(), ci = Ju = da = null, dl = !1, e) : null; switch (e) { case "paste": return null; case "keypress": if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) { if (t.char && 1 < t.char.length) return t.char; if (t.which) return String.fromCharCode(t.which) } return null; case "compositionend": return Ic && t.locale !== "ko" ? null : t.data; default: return null } } var Nh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function lo(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!Nh[e.type] : t === "textarea" } function no(e, t, a, l) { ol ? fl ? fl.push(l) : fl = [l] : ol = l, t = au(t, "onChange"), 0 < t.length && (a = new di("onChange", "change", null, a, l), e.push({ event: a, listeners: t })) } var un = null, rn = null; function Eh(e) { Gd(e, 0) } function hi(e) { var t = Pl(e); if (qc(t)) return e } function io(e, t) { if (e === "change") return t } var uo = !1; if (Vt) { var tr; if (Vt) { var ar = "oninput" in document; if (!ar) { var ro = document.createElement("div"); ro.setAttribute("oninput", "return;"), ar = typeof ro.oninput == "function" } tr = ar } else tr = !1; uo = tr && (!document.documentMode || 9 < document.documentMode) } function so() { un && (un.detachEvent("onpropertychange", co), rn = un = null) } function co(e) { if (e.propertyName === "value" && hi(rn)) { var t = []; no(t, rn, e, Zu(e)), Zc(Eh, t) } } function Th(e, t, a) { e === "focusin" ? (so(), un = t, rn = a, un.attachEvent("onpropertychange", co)) : e === "focusout" && so() } function zh(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown") return hi(rn) } function Ch(e, t) { if (e === "click") return hi(t) } function wh(e, t) { if (e === "input" || e === "change") return hi(t) } function Ah(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t } var ct = typeof Object.is == "function" ? Object.is : Ah; function sn(e, t) { if (ct(e, t)) return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1; var a = Object.keys(e), l = Object.keys(t); if (a.length !== l.length) return !1; for (l = 0; l < a.length; l++) { var n = a[l]; if (!_u.call(t, n) || !ct(e[n], t[n])) return !1 } return !0 } function oo(e) { for (; e && e.firstChild;)e = e.firstChild; return e } function fo(e, t) { var a = oo(e); e = 0; for (var l; a;) { if (a.nodeType === 3) { if (l = e + a.textContent.length, e <= t && l >= t) return { node: a, offset: t - e }; e = l } e: { for (; a;) { if (a.nextSibling) { a = a.nextSibling; break e } a = a.parentNode } a = void 0 } a = oo(a) } } function mo(e, t) { return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1 } function ho(e) { e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window; for (var t = ri(e.document); t instanceof e.HTMLIFrameElement;) { try { var a = typeof t.contentWindow.location.href == "string" } catch { a = !1 } if (a) e = t.contentWindow; else break; t = ri(e.document) } return t } function lr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true") } var Rh = Vt && "documentMode" in document && 11 >= document.documentMode, ml = null, nr = null, cn = null, ir = !1; function po(e, t, a) { var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument; ir || ml == null || ml !== ri(l) || (l = ml, "selectionStart" in l && lr(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), cn && sn(cn, l) || (cn = l, l = au(nr, "onSelect"), 0 < l.length && (t = new di("onSelect", "select", null, t, a), e.push({ event: t, listeners: l }), t.target = ml))) } function Ya(e, t) { var a = {}; return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a } var hl = { animationend: Ya("Animation", "AnimationEnd"), animationiteration: Ya("Animation", "AnimationIteration"), animationstart: Ya("Animation", "AnimationStart"), transitionrun: Ya("Transition", "TransitionRun"), transitionstart: Ya("Transition", "TransitionStart"), transitioncancel: Ya("Transition", "TransitionCancel"), transitionend: Ya("Transition", "TransitionEnd") }, ur = {}, yo = {}; Vt && (yo = document.createElement("div").style, "AnimationEvent" in window || (delete hl.animationend.animation, delete hl.animationiteration.animation, delete hl.animationstart.animation), "TransitionEvent" in window || delete hl.transitionend.transition); function Ga(e) { if (ur[e]) return ur[e]; if (!hl[e]) return e; var t = hl[e], a; for (a in t) if (t.hasOwnProperty(a) && a in yo) return ur[e] = t[a]; return e } var go = Ga("animationend"), vo = Ga("animationiteration"), xo = Ga("animationstart"), Mh = Ga("transitionrun"), Dh = Ga("transitionstart"), _h = Ga("transitioncancel"), bo = Ga("transitionend"), So = new Map, rr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); rr.push("scrollEnd"); function At(e, t) { So.set(e, t), qa(t, [e]) } var pi = typeof reportError == "function" ? reportError : function (e) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var t = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e }); if (!window.dispatchEvent(t)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", e); return } console.error(e) }, bt = [], pl = 0, sr = 0; function yi() { for (var e = pl, t = sr = pl = 0; t < e;) { var a = bt[t]; bt[t++] = null; var l = bt[t]; bt[t++] = null; var n = bt[t]; bt[t++] = null; var i = bt[t]; if (bt[t++] = null, l !== null && n !== null) { var s = l.pending; s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n } i !== 0 && jo(a, n, i) } } function gi(e, t, a, l) { bt[pl++] = e, bt[pl++] = t, bt[pl++] = a, bt[pl++] = l, sr |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l) } function cr(e, t, a, l) { return gi(e, t, a, l), vi(e) } function Xa(e, t) { return gi(e, null, null, t), vi(e) } function jo(e, t, a) { e.lanes |= a; var l = e.alternate; l !== null && (l.lanes |= a); for (var n = !1, i = e.return; i !== null;)i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return; return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - st(a), e = i.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), i) : null } function vi(e) { if (50 < Mn) throw Mn = 0, vs = null, Error(c(185)); for (var t = e.return; t !== null;)e = t, t = e.return; return e.tag === 3 ? e.stateNode : null } var yl = {}; function Oh(e, t, a, l) { this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null } function ot(e, t, a, l) { return new Oh(e, t, a, l) } function or(e) { return e = e.prototype, !(!e || !e.isReactComponent) } function Qt(e, t) { var a = e.alternate; return a === null ? (a = ot(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a } function No(e, t) { e.flags &= 65011714; var a = e.alternate; return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e } function xi(e, t, a, l, n, i) { var s = 0; if (l = e, typeof e == "function") or(e) && (s = 1); else if (typeof e == "string") s = qp(e, a, Z.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5; else e: switch (e) { case Ke: return e = ot(31, a, t, n), e.elementType = Ke, e.lanes = i, e; case k: return Va(a.children, n, i, t); case X: s = 8, n |= 24; break; case q: return e = ot(12, a, t, n | 2), e.elementType = q, e.lanes = i, e; case le: return e = ot(13, a, t, n), e.elementType = le, e.lanes = i, e; case ve: return e = ot(19, a, t, n), e.elementType = ve, e.lanes = i, e; default: if (typeof e == "object" && e !== null) switch (e.$$typeof) { case V: s = 10; break e; case B: s = 9; break e; case te: s = 11; break e; case W: s = 14; break e; case Me: s = 16, l = null; break e }s = 29, a = Error(c(130, e === null ? "null" : typeof e, "")), l = null }return t = ot(s, a, t, n), t.elementType = e, t.type = l, t.lanes = i, t } function Va(e, t, a, l) { return e = ot(7, e, l, t), e.lanes = a, e } function fr(e, t, a) { return e = ot(6, e, null, t), e.lanes = a, e } function Eo(e) { var t = ot(18, null, null, 0); return t.stateNode = e, t } function dr(e, t, a) { return t = ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t } var To = new WeakMap; function St(e, t) { if (typeof e == "object" && e !== null) { var a = To.get(e); return a !== void 0 ? a : (t = { value: e, source: t, stack: Nc(t) }, To.set(e, t), t) } return { value: e, source: t, stack: Nc(t) } } var gl = [], vl = 0, bi = null, on = 0, jt = [], Nt = 0, ma = null, Ht = 1, Lt = ""; function Zt(e, t) { gl[vl++] = on, gl[vl++] = bi, bi = e, on = t } function zo(e, t, a) { jt[Nt++] = Ht, jt[Nt++] = Lt, jt[Nt++] = ma, ma = e; var l = Ht; e = Lt; var n = 32 - st(l) - 1; l &= ~(1 << n), a += 1; var i = 32 - st(t) + n; if (30 < i) { var s = n - n % 5; i = (l & (1 << s) - 1).toString(32), l >>= s, n -= s, Ht = 1 << 32 - st(t) + n | a << n | l, Lt = i + e } else Ht = 1 << i | a << n | l, Lt = e } function mr(e) { e.return !== null && (Zt(e, 1), zo(e, 1, 0)) } function hr(e) { for (; e === bi;)bi = gl[--vl], gl[vl] = null, on = gl[--vl], gl[vl] = null; for (; e === ma;)ma = jt[--Nt], jt[Nt] = null, Lt = jt[--Nt], jt[Nt] = null, Ht = jt[--Nt], jt[Nt] = null } function Co(e, t) { jt[Nt++] = Ht, jt[Nt++] = Lt, jt[Nt++] = ma, Ht = t.id, Lt = t.overflow, ma = e } var Ve = null, Te = null, ce = !1, ha = null, Et = !1, pr = Error(c(519)); function pa(e) { var t = Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw fn(St(t, e)), pr } function wo(e) { var t = e.stateNode, a = e.type, l = e.memoizedProps; switch (t[Xe] = e, t[Pe] = l, a) { case "dialog": ue("cancel", t), ue("close", t); break; case "iframe": case "object": case "embed": ue("load", t); break; case "video": case "audio": for (a = 0; a < _n.length; a++)ue(_n[a], t); break; case "source": ue("error", t); break; case "img": case "image": case "link": ue("error", t), ue("load", t); break; case "details": ue("toggle", t); break; case "input": ue("invalid", t), kc(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0); break; case "select": ue("invalid", t); break; case "textarea": ue("invalid", t), Gc(t, l.value, l.defaultValue, l.children) }a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Zd(t.textContent, a) ? (l.popover != null && (ue("beforetoggle", t), ue("toggle", t)), l.onScroll != null && ue("scroll", t), l.onScrollEnd != null && ue("scrollend", t), l.onClick != null && (t.onclick = Xt), t = !0) : t = !1, t || pa(e, !0) } function Ao(e) { for (Ve = e.return; Ve;)switch (Ve.tag) { case 5: case 31: case 13: Et = !1; return; case 27: case 3: Et = !0; return; default: Ve = Ve.return } } function xl(e) { if (e !== Ve) return !1; if (!ce) return Ao(e), ce = !0, !1; var t = e.tag, a; if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || _s(e.type, e.memoizedProps)), a = !a), a && Te && pa(e), Ao(e), t === 13) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317)); Te = tm(e) } else if (t === 31) { if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317)); Te = tm(e) } else t === 27 ? (t = Te, Aa(e.type) ? (e = Ls, Ls = null, Te = e) : Te = t) : Te = Ve ? zt(e.stateNode.nextSibling) : null; return !0 } function Qa() { Te = Ve = null, ce = !1 } function yr() { var e = ha; return e !== null && (nt === null ? nt = e : nt.push.apply(nt, e), ha = null), e } function fn(e) { ha === null ? ha = [e] : ha.push(e) } var gr = b(null), Za = null, $t = null; function ya(e, t, a) { G(gr, t._currentValue), t._currentValue = a } function Kt(e) { e._currentValue = gr.current, U(gr) } function vr(e, t, a) { for (; e !== null;) { var l = e.alternate; if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break; e = e.return } } function xr(e, t, a, l) { var n = e.child; for (n !== null && (n.return = e); n !== null;) { var i = n.dependencies; if (i !== null) { var s = n.child; i = i.firstContext; e: for (; i !== null;) { var d = i; i = n; for (var y = 0; y < t.length; y++)if (d.context === t[y]) { i.lanes |= a, d = i.alternate, d !== null && (d.lanes |= a), vr(i.return, a, e), l || (s = null); break e } i = d.next } } else if (n.tag === 18) { if (s = n.return, s === null) throw Error(c(341)); s.lanes |= a, i = s.alternate, i !== null && (i.lanes |= a), vr(s, a, e), s = null } else s = n.child; if (s !== null) s.return = n; else for (s = n; s !== null;) { if (s === e) { s = null; break } if (n = s.sibling, n !== null) { n.return = s.return, s = n; break } s = s.return } n = s } } function bl(e, t, a, l) { e = null; for (var n = t, i = !1; n !== null;) { if (!i) { if ((n.flags & 524288) !== 0) i = !0; else if ((n.flags & 262144) !== 0) break } if (n.tag === 10) { var s = n.alternate; if (s === null) throw Error(c(387)); if (s = s.memoizedProps, s !== null) { var d = n.type; ct(n.pendingProps.value, s.value) || (e !== null ? e.push(d) : e = [d]) } } else if (n === pe.current) { if (s = n.alternate, s === null) throw Error(c(387)); s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Ln) : e = [Ln]) } n = n.return } e !== null && xr(t, e, a, l), t.flags |= 262144 } function Si(e) { for (e = e.firstContext; e !== null;) { if (!ct(e.context._currentValue, e.memoizedValue)) return !0; e = e.next } return !1 } function $a(e) { Za = e, $t = null, e = e.dependencies, e !== null && (e.firstContext = null) } function Qe(e) { return Ro(Za, e) } function ji(e, t) { return Za === null && $a(e), Ro(e, t) } function Ro(e, t) { var a = t._currentValue; if (t = { context: t, memoizedValue: a, next: null }, $t === null) { if (e === null) throw Error(c(308)); $t = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288 } else $t = $t.next = t; return a } var Uh = typeof AbortController < "u" ? AbortController : function () { var e = [], t = this.signal = { aborted: !1, addEventListener: function (a, l) { e.push(l) } }; this.abort = function () { t.aborted = !0, e.forEach(function (a) { return a() }) } }, Bh = u.unstable_scheduleCallback, Hh = u.unstable_NormalPriority, Be = { $$typeof: V, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }; function br() { return { controller: new Uh, data: new Map, refCount: 0 } } function dn(e) { e.refCount--, e.refCount === 0 && Bh(Hh, function () { e.controller.abort() }) } var mn = null, Sr = 0, Sl = 0, jl = null; function Lh(e, t) { if (mn === null) { var a = mn = []; Sr = 0, Sl = Es(), jl = { status: "pending", value: void 0, then: function (l) { a.push(l) } } } return Sr++, t.then(Mo, Mo), t } function Mo() { if (--Sr === 0 && mn !== null) { jl !== null && (jl.status = "fulfilled"); var e = mn; mn = null, Sl = 0, jl = null; for (var t = 0; t < e.length; t++)(0, e[t])() } } function qh(e, t) { var a = [], l = { status: "pending", value: null, reason: null, then: function (n) { a.push(n) } }; return e.then(function () { l.status = "fulfilled", l.value = t; for (var n = 0; n < a.length; n++)(0, a[n])(t) }, function (n) { for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)(0, a[n])(void 0) }), l } var Do = D.S; D.S = function (e, t) { yd = ut(), typeof t == "object" && t !== null && typeof t.then == "function" && Lh(e, t), Do !== null && Do(e, t) }; var Ka = b(null); function jr() { var e = Ka.current; return e !== null ? e : Ee.pooledCache } function Ni(e, t) { t === null ? G(Ka, Ka.current) : G(Ka, t.pool) } function _o() { var e = jr(); return e === null ? null : { parent: Be._currentValue, pool: e } } var Nl = Error(c(460)), Nr = Error(c(474)), Ei = Error(c(542)), Ti = { then: function () { } }; function Oo(e) { return e = e.status, e === "fulfilled" || e === "rejected" } function Uo(e, t, a) { switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Xt, Xt), t = a), t.status) { case "fulfilled": return t.value; case "rejected": throw e = t.reason, Ho(e), e; default: if (typeof t.status == "string") t.then(Xt, Xt); else { if (e = Ee, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482)); e = t, e.status = "pending", e.then(function (l) { if (t.status === "pending") { var n = t; n.status = "fulfilled", n.value = l } }, function (l) { if (t.status === "pending") { var n = t; n.status = "rejected", n.reason = l } }) } switch (t.status) { case "fulfilled": return t.value; case "rejected": throw e = t.reason, Ho(e), e }throw Fa = t, Nl } } function Ja(e) { try { var t = e._init; return t(e._payload) } catch (a) { throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Fa = a, Nl) : a } } var Fa = null; function Bo() { if (Fa === null) throw Error(c(459)); var e = Fa; return Fa = null, e } function Ho(e) { if (e === Nl || e === Ei) throw Error(c(483)) } var El = null, hn = 0; function zi(e) { var t = hn; return hn += 1, El === null && (El = []), Uo(El, e, t) } function pn(e, t) { t = t.props.ref, e.ref = t !== void 0 ? t : null } function Ci(e, t) { throw t.$$typeof === M ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))) } function Lo(e) { function t(N, x) { if (e) { var T = N.deletions; T === null ? (N.deletions = [x], N.flags |= 16) : T.push(x) } } function a(N, x) { if (!e) return null; for (; x !== null;)t(N, x), x = x.sibling; return null } function l(N) { for (var x = new Map; N !== null;)N.key !== null ? x.set(N.key, N) : x.set(N.index, N), N = N.sibling; return x } function n(N, x) { return N = Qt(N, x), N.index = 0, N.sibling = null, N } function i(N, x, T) { return N.index = T, e ? (T = N.alternate, T !== null ? (T = T.index, T < x ? (N.flags |= 67108866, x) : T) : (N.flags |= 67108866, x)) : (N.flags |= 1048576, x) } function s(N) { return e && N.alternate === null && (N.flags |= 67108866), N } function d(N, x, T, _) { return x === null || x.tag !== 6 ? (x = fr(T, N.mode, _), x.return = N, x) : (x = n(x, T), x.return = N, x) } function y(N, x, T, _) { var K = T.type; return K === k ? R(N, x, T.props.children, _, T.key) : x !== null && (x.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Me && Ja(K) === x.type) ? (x = n(x, T.props), pn(x, T), x.return = N, x) : (x = xi(T.type, T.key, T.props, null, N.mode, _), pn(x, T), x.return = N, x) } function z(N, x, T, _) { return x === null || x.tag !== 4 || x.stateNode.containerInfo !== T.containerInfo || x.stateNode.implementation !== T.implementation ? (x = dr(T, N.mode, _), x.return = N, x) : (x = n(x, T.children || []), x.return = N, x) } function R(N, x, T, _, K) { return x === null || x.tag !== 7 ? (x = Va(T, N.mode, _, K), x.return = N, x) : (x = n(x, T), x.return = N, x) } function O(N, x, T) { if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return x = fr("" + x, N.mode, T), x.return = N, x; if (typeof x == "object" && x !== null) { switch (x.$$typeof) { case H: return T = xi(x.type, x.key, x.props, null, N.mode, T), pn(T, x), T.return = N, T; case L: return x = dr(x, N.mode, T), x.return = N, x; case Me: return x = Ja(x), O(N, x, T) }if (Ue(x) || Je(x)) return x = Va(x, N.mode, T, null), x.return = N, x; if (typeof x.then == "function") return O(N, zi(x), T); if (x.$$typeof === V) return O(N, ji(N, x), T); Ci(N, x) } return null } function w(N, x, T, _) { var K = x !== null ? x.key : null; if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return K !== null ? null : d(N, x, "" + T, _); if (typeof T == "object" && T !== null) { switch (T.$$typeof) { case H: return T.key === K ? y(N, x, T, _) : null; case L: return T.key === K ? z(N, x, T, _) : null; case Me: return T = Ja(T), w(N, x, T, _) }if (Ue(T) || Je(T)) return K !== null ? null : R(N, x, T, _, null); if (typeof T.then == "function") return w(N, x, zi(T), _); if (T.$$typeof === V) return w(N, x, ji(N, T), _); Ci(N, T) } return null } function A(N, x, T, _, K) { if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return N = N.get(T) || null, d(x, N, "" + _, K); if (typeof _ == "object" && _ !== null) { switch (_.$$typeof) { case H: return N = N.get(_.key === null ? T : _.key) || null, y(x, N, _, K); case L: return N = N.get(_.key === null ? T : _.key) || null, z(x, N, _, K); case Me: return _ = Ja(_), A(N, x, T, _, K) }if (Ue(_) || Je(_)) return N = N.get(T) || null, R(x, N, _, K, null); if (typeof _.then == "function") return A(N, x, T, zi(_), K); if (_.$$typeof === V) return A(N, x, T, ji(x, _), K); Ci(x, _) } return null } function Q(N, x, T, _) { for (var K = null, fe = null, $ = x, ae = x = 0, se = null; $ !== null && ae < T.length; ae++) { $.index > ae ? (se = $, $ = null) : se = $.sibling; var de = w(N, $, T[ae], _); if (de === null) { $ === null && ($ = se); break } e && $ && de.alternate === null && t(N, $), x = i(de, x, ae), fe === null ? K = de : fe.sibling = de, fe = de, $ = se } if (ae === T.length) return a(N, $), ce && Zt(N, ae), K; if ($ === null) { for (; ae < T.length; ae++)$ = O(N, T[ae], _), $ !== null && (x = i($, x, ae), fe === null ? K = $ : fe.sibling = $, fe = $); return ce && Zt(N, ae), K } for ($ = l($); ae < T.length; ae++)se = A($, N, ae, T[ae], _), se !== null && (e && se.alternate !== null && $.delete(se.key === null ? ae : se.key), x = i(se, x, ae), fe === null ? K = se : fe.sibling = se, fe = se); return e && $.forEach(function (Oa) { return t(N, Oa) }), ce && Zt(N, ae), K } function J(N, x, T, _) { if (T == null) throw Error(c(151)); for (var K = null, fe = null, $ = x, ae = x = 0, se = null, de = T.next(); $ !== null && !de.done; ae++, de = T.next()) { $.index > ae ? (se = $, $ = null) : se = $.sibling; var Oa = w(N, $, de.value, _); if (Oa === null) { $ === null && ($ = se); break } e && $ && Oa.alternate === null && t(N, $), x = i(Oa, x, ae), fe === null ? K = Oa : fe.sibling = Oa, fe = Oa, $ = se } if (de.done) return a(N, $), ce && Zt(N, ae), K; if ($ === null) { for (; !de.done; ae++, de = T.next())de = O(N, de.value, _), de !== null && (x = i(de, x, ae), fe === null ? K = de : fe.sibling = de, fe = de); return ce && Zt(N, ae), K } for ($ = l($); !de.done; ae++, de = T.next())de = A($, N, ae, de.value, _), de !== null && (e && de.alternate !== null && $.delete(de.key === null ? ae : de.key), x = i(de, x, ae), fe === null ? K = de : fe.sibling = de, fe = de); return e && $.forEach(function (Fp) { return t(N, Fp) }), ce && Zt(N, ae), K } function je(N, x, T, _) { if (typeof T == "object" && T !== null && T.type === k && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) { switch (T.$$typeof) { case H: e: { for (var K = T.key; x !== null;) { if (x.key === K) { if (K = T.type, K === k) { if (x.tag === 7) { a(N, x.sibling), _ = n(x, T.props.children), _.return = N, N = _; break e } } else if (x.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Me && Ja(K) === x.type) { a(N, x.sibling), _ = n(x, T.props), pn(_, T), _.return = N, N = _; break e } a(N, x); break } else t(N, x); x = x.sibling } T.type === k ? (_ = Va(T.props.children, N.mode, _, T.key), _.return = N, N = _) : (_ = xi(T.type, T.key, T.props, null, N.mode, _), pn(_, T), _.return = N, N = _) } return s(N); case L: e: { for (K = T.key; x !== null;) { if (x.key === K) if (x.tag === 4 && x.stateNode.containerInfo === T.containerInfo && x.stateNode.implementation === T.implementation) { a(N, x.sibling), _ = n(x, T.children || []), _.return = N, N = _; break e } else { a(N, x); break } else t(N, x); x = x.sibling } _ = dr(T, N.mode, _), _.return = N, N = _ } return s(N); case Me: return T = Ja(T), je(N, x, T, _) }if (Ue(T)) return Q(N, x, T, _); if (Je(T)) { if (K = Je(T), typeof K != "function") throw Error(c(150)); return T = K.call(T), J(N, x, T, _) } if (typeof T.then == "function") return je(N, x, zi(T), _); if (T.$$typeof === V) return je(N, x, ji(N, T), _); Ci(N, T) } return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, x !== null && x.tag === 6 ? (a(N, x.sibling), _ = n(x, T), _.return = N, N = _) : (a(N, x), _ = fr(T, N.mode, _), _.return = N, N = _), s(N)) : a(N, x) } return function (N, x, T, _) { try { hn = 0; var K = je(N, x, T, _); return El = null, K } catch ($) { if ($ === Nl || $ === Ei) throw $; var fe = ot(29, $, null, N.mode); return fe.lanes = _, fe.return = N, fe } finally { } } } var Wa = Lo(!0), qo = Lo(!1), ga = !1; function Er(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null } } function Tr(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null }) } function va(e) { return { lane: e, tag: 0, payload: null, callback: null, next: null } } function xa(e, t, a) { var l = e.updateQueue; if (l === null) return null; if (l = l.shared, (me & 2) !== 0) { var n = l.pending; return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = vi(e), jo(e, null, a), t } return gi(e, l, t, a), vi(e) } function yn(e, t, a) { if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) { var l = t.lanes; l &= e.pendingLanes, a |= l, t.lanes = a, Ac(e, a) } } function zr(e, t) { var a = e.updateQueue, l = e.alternate; if (l !== null && (l = l.updateQueue, a === l)) { var n = null, i = null; if (a = a.firstBaseUpdate, a !== null) { do { var s = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null }; i === null ? n = i = s : i = i.next = s, a = a.next } while (a !== null); i === null ? n = i = t : i = i.next = t } else n = i = t; a = { baseState: l.baseState, firstBaseUpdate: n, lastBaseUpdate: i, shared: l.shared, callbacks: l.callbacks }, e.updateQueue = a; return } e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t } var Cr = !1; function gn() { if (Cr) { var e = jl; if (e !== null) throw e } } function vn(e, t, a, l) { Cr = !1; var n = e.updateQueue; ga = !1; var i = n.firstBaseUpdate, s = n.lastBaseUpdate, d = n.shared.pending; if (d !== null) { n.shared.pending = null; var y = d, z = y.next; y.next = null, s === null ? i = z : s.next = z, s = y; var R = e.alternate; R !== null && (R = R.updateQueue, d = R.lastBaseUpdate, d !== s && (d === null ? R.firstBaseUpdate = z : d.next = z, R.lastBaseUpdate = y)) } if (i !== null) { var O = n.baseState; s = 0, R = z = y = null, d = i; do { var w = d.lane & -536870913, A = w !== d.lane; if (A ? (re & w) === w : (l & w) === w) { w !== 0 && w === Sl && (Cr = !0), R !== null && (R = R.next = { lane: 0, tag: d.tag, payload: d.payload, callback: null, next: null }); e: { var Q = e, J = d; w = t; var je = a; switch (J.tag) { case 1: if (Q = J.payload, typeof Q == "function") { O = Q.call(je, O, w); break e } O = Q; break e; case 3: Q.flags = Q.flags & -65537 | 128; case 0: if (Q = J.payload, w = typeof Q == "function" ? Q.call(je, O, w) : Q, w == null) break e; O = C({}, O, w); break e; case 2: ga = !0 } } w = d.callback, w !== null && (e.flags |= 64, A && (e.flags |= 8192), A = n.callbacks, A === null ? n.callbacks = [w] : A.push(w)) } else A = { lane: w, tag: d.tag, payload: d.payload, callback: d.callback, next: null }, R === null ? (z = R = A, y = O) : R = R.next = A, s |= w; if (d = d.next, d === null) { if (d = n.shared.pending, d === null) break; A = d, d = A.next, A.next = null, n.lastBaseUpdate = A, n.shared.pending = null } } while (!0); R === null && (y = O), n.baseState = y, n.firstBaseUpdate = z, n.lastBaseUpdate = R, i === null && (n.shared.lanes = 0), Ea |= s, e.lanes = s, e.memoizedState = O } } function ko(e, t) { if (typeof e != "function") throw Error(c(191, e)); e.call(t) } function Yo(e, t) { var a = e.callbacks; if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++)ko(a[e], t) } var Tl = b(null), wi = b(0); function Go(e, t) { e = la, G(wi, e), G(Tl, t), la = e | t.baseLanes } function wr() { G(wi, la), G(Tl, Tl.current) } function Ar() { la = wi.current, U(Tl), U(wi) } var ft = b(null), Tt = null; function ba(e) { var t = e.alternate; G(_e, _e.current & 1), G(ft, e), Tt === null && (t === null || Tl.current !== null || t.memoizedState !== null) && (Tt = e) } function Rr(e) { G(_e, _e.current), G(ft, e), Tt === null && (Tt = e) } function Xo(e) { e.tag === 22 ? (G(_e, _e.current), G(ft, e), Tt === null && (Tt = e)) : Sa() } function Sa() { G(_e, _e.current), G(ft, ft.current) } function dt(e) { U(ft), Tt === e && (Tt = null), U(_e) } var _e = b(0); function Ai(e) { for (var t = e; t !== null;) { if (t.tag === 13) { var a = t.memoizedState; if (a !== null && (a = a.dehydrated, a === null || Bs(a) || Hs(a))) return t } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) { if ((t.flags & 128) !== 0) return t } else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return null; t = t.return } t.sibling.return = t.return, t = t.sibling } return null } var Jt = 0, ee = null, be = null, He = null, Ri = !1, zl = !1, Ia = !1, Mi = 0, xn = 0, Cl = null, kh = 0; function Ae() { throw Error(c(321)) } function Mr(e, t) { if (t === null) return !1; for (var a = 0; a < t.length && a < e.length; a++)if (!ct(e[a], t[a])) return !1; return !0 } function Dr(e, t, a, l, n, i) { return Jt = i, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? Cf : $r, Ia = !1, i = a(l, n), Ia = !1, zl && (i = Qo(t, a, l, n)), Vo(e), i } function Vo(e) { D.H = jn; var t = be !== null && be.next !== null; if (Jt = 0, He = be = ee = null, Ri = !1, xn = 0, Cl = null, t) throw Error(c(300)); e === null || Le || (e = e.dependencies, e !== null && Si(e) && (Le = !0)) } function Qo(e, t, a, l) { ee = e; var n = 0; do { if (zl && (Cl = null), xn = 0, zl = !1, 25 <= n) throw Error(c(301)); if (n += 1, He = be = null, e.updateQueue != null) { var i = e.updateQueue; i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0) } D.H = wf, i = t(a, l) } while (zl); return i } function Yh() { var e = D.H, t = e.useState()[0]; return t = typeof t.then == "function" ? bn(t) : t, e = e.useState()[0], (be !== null ? be.memoizedState : null) !== e && (ee.flags |= 1024), t } function _r() { var e = Mi !== 0; return Mi = 0, e } function Or(e, t, a) { t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a } function Ur(e) { if (Ri) { for (e = e.memoizedState; e !== null;) { var t = e.queue; t !== null && (t.pending = null), e = e.next } Ri = !1 } Jt = 0, He = be = ee = null, zl = !1, xn = Mi = 0, Cl = null } function Ie() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return He === null ? ee.memoizedState = He = e : He = He.next = e, He } function Oe() { if (be === null) { var e = ee.alternate; e = e !== null ? e.memoizedState : null } else e = be.next; var t = He === null ? ee.memoizedState : He.next; if (t !== null) He = t, be = e; else { if (e === null) throw ee.alternate === null ? Error(c(467)) : Error(c(310)); be = e, e = { memoizedState: be.memoizedState, baseState: be.baseState, baseQueue: be.baseQueue, queue: be.queue, next: null }, He === null ? ee.memoizedState = He = e : He = He.next = e } return He } function Di() { return { lastEffect: null, events: null, stores: null, memoCache: null } } function bn(e) { var t = xn; return xn += 1, Cl === null && (Cl = []), e = Uo(Cl, e, t), t = ee, (He === null ? t.memoizedState : He.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? Cf : $r), e } function _i(e) { if (e !== null && typeof e == "object") { if (typeof e.then == "function") return bn(e); if (e.$$typeof === V) return Qe(e) } throw Error(c(438, String(e))) } function Br(e) { var t = null, a = ee.updateQueue; if (a !== null && (t = a.memoCache), t == null) { var l = ee.alternate; l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = { data: l.data.map(function (n) { return n.slice() }), index: 0 }))) } if (t == null && (t = { data: [], index: 0 }), a === null && (a = Di(), ee.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(e), l = 0; l < e; l++)a[l] = Ut; return t.index++, a } function Ft(e, t) { return typeof t == "function" ? t(e) : t } function Oi(e) { var t = Oe(); return Hr(t, be, e) } function Hr(e, t, a) { var l = e.queue; if (l === null) throw Error(c(311)); l.lastRenderedReducer = a; var n = e.baseQueue, i = l.pending; if (i !== null) { if (n !== null) { var s = n.next; n.next = i.next, i.next = s } t.baseQueue = n = i, l.pending = null } if (i = e.baseState, n === null) e.memoizedState = i; else { t = n.next; var d = s = null, y = null, z = t, R = !1; do { var O = z.lane & -536870913; if (O !== z.lane ? (re & O) === O : (Jt & O) === O) { var w = z.revertLane; if (w === 0) y !== null && (y = y.next = { lane: 0, revertLane: 0, gesture: null, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), O === Sl && (R = !0); else if ((Jt & w) === w) { z = z.next, w === Sl && (R = !0); continue } else O = { lane: 0, revertLane: z.revertLane, gesture: null, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }, y === null ? (d = y = O, s = i) : y = y.next = O, ee.lanes |= w, Ea |= w; O = z.action, Ia && a(i, O), i = z.hasEagerState ? z.eagerState : a(i, O) } else w = { lane: O, revertLane: z.revertLane, gesture: z.gesture, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }, y === null ? (d = y = w, s = i) : y = y.next = w, ee.lanes |= O, Ea |= O; z = z.next } while (z !== null && z !== t); if (y === null ? s = i : y.next = d, !ct(i, e.memoizedState) && (Le = !0, R && (a = jl, a !== null))) throw a; e.memoizedState = i, e.baseState = s, e.baseQueue = y, l.lastRenderedState = i } return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch] } function Lr(e) { var t = Oe(), a = t.queue; if (a === null) throw Error(c(311)); a.lastRenderedReducer = e; var l = a.dispatch, n = a.pending, i = t.memoizedState; if (n !== null) { a.pending = null; var s = n = n.next; do i = e(i, s.action), s = s.next; while (s !== n); ct(i, t.memoizedState) || (Le = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), a.lastRenderedState = i } return [i, l] } function Zo(e, t, a) { var l = ee, n = Oe(), i = ce; if (i) { if (a === void 0) throw Error(c(407)); a = a() } else a = t(); var s = !ct((be || n).memoizedState, a); if (s && (n.memoizedState = a, Le = !0), n = n.queue, Yr(Jo.bind(null, l, n, e), [e]), n.getSnapshot !== t || s || He !== null && He.memoizedState.tag & 1) { if (l.flags |= 2048, wl(9, { destroy: void 0 }, Ko.bind(null, l, n, a, t), null), Ee === null) throw Error(c(349)); i || (Jt & 127) !== 0 || $o(l, t, a) } return a } function $o(e, t, a) { e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ee.updateQueue, t === null ? (t = Di(), ee.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e)) } function Ko(e, t, a, l) { t.value = a, t.getSnapshot = l, Fo(t) && Wo(e) } function Jo(e, t, a) { return a(function () { Fo(t) && Wo(e) }) } function Fo(e) { var t = e.getSnapshot; e = e.value; try { var a = t(); return !ct(e, a) } catch { return !0 } } function Wo(e) { var t = Xa(e, 2); t !== null && it(t, e, 2) } function qr(e) { var t = Ie(); if (typeof e == "function") { var a = e; if (e = a(), Ia) { oa(!0); try { a() } finally { oa(!1) } } } return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: e }, t } function Io(e, t, a, l) { return e.baseState = a, Hr(e, be, typeof l == "function" ? l : Ft) } function Gh(e, t, a, l, n) { if (Hi(e)) throw Error(c(485)); if (e = t.action, e !== null) { var i = { payload: n, action: e, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (s) { i.listeners.push(s) } }; D.T !== null ? a(!0) : i.isTransition = !1, l(i), a = t.pending, a === null ? (i.next = t.pending = i, Po(t, i)) : (i.next = a.next, t.pending = a.next = i) } } function Po(e, t) { var a = t.action, l = t.payload, n = e.state; if (t.isTransition) { var i = D.T, s = {}; D.T = s; try { var d = a(n, l), y = D.S; y !== null && y(s, d), ef(e, t, d) } catch (z) { kr(e, t, z) } finally { i !== null && s.types !== null && (i.types = s.types), D.T = i } } else try { i = a(n, l), ef(e, t, i) } catch (z) { kr(e, t, z) } } function ef(e, t, a) { a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (l) { tf(e, t, l) }, function (l) { return kr(e, t, l) }) : tf(e, t, a) } function tf(e, t, a) { t.status = "fulfilled", t.value = a, af(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Po(e, a))) } function kr(e, t, a) { var l = e.pending; if (e.pending = null, l !== null) { l = l.next; do t.status = "rejected", t.reason = a, af(t), t = t.next; while (t !== l) } e.action = null } function af(e) { e = e.listeners; for (var t = 0; t < e.length; t++)(0, e[t])() } function lf(e, t) { return t } function nf(e, t) { if (ce) { var a = Ee.formState; if (a !== null) { e: { var l = ee; if (ce) { if (Te) { t: { for (var n = Te, i = Et; n.nodeType !== 8;) { if (!i) { n = null; break t } if (n = zt(n.nextSibling), n === null) { n = null; break t } } i = n.data, n = i === "F!" || i === "F" ? n : null } if (n) { Te = zt(n.nextSibling), l = n.data === "F!"; break e } } pa(l) } l = !1 } l && (t = a[0]) } } return a = Ie(), a.memoizedState = a.baseState = t, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: lf, lastRenderedState: t }, a.queue = l, a = Ef.bind(null, ee, l), l.dispatch = a, l = qr(!1), i = Zr.bind(null, ee, !1, l.queue), l = Ie(), n = { state: t, dispatch: null, action: e, pending: null }, l.queue = n, a = Gh.bind(null, ee, n, i, a), n.dispatch = a, l.memoizedState = e, [t, a, !1] } function uf(e) { var t = Oe(); return rf(t, be, e) } function rf(e, t, a) { if (t = Hr(e, t, lf)[0], e = Oi(Ft)[0], typeof t == "object" && t !== null && typeof t.then == "function") try { var l = bn(t) } catch (s) { throw s === Nl ? Ei : s } else l = t; t = Oe(); var n = t.queue, i = n.dispatch; return a !== t.memoizedState && (ee.flags |= 2048, wl(9, { destroy: void 0 }, Xh.bind(null, n, a), null)), [l, i, e] } function Xh(e, t) { e.action = t } function sf(e) { var t = Oe(), a = be; if (a !== null) return rf(t, a, e); Oe(), t = t.memoizedState, a = Oe(); var l = a.queue.dispatch; return a.memoizedState = e, [t, l, !1] } function wl(e, t, a, l) { return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = ee.updateQueue, t === null && (t = Di(), ee.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e } function cf() { return Oe().memoizedState } function Ui(e, t, a, l) { var n = Ie(); ee.flags |= e, n.memoizedState = wl(1 | t, { destroy: void 0 }, a, l === void 0 ? null : l) } function Bi(e, t, a, l) { var n = Oe(); l = l === void 0 ? null : l; var i = n.memoizedState.inst; be !== null && l !== null && Mr(l, be.memoizedState.deps) ? n.memoizedState = wl(t, i, a, l) : (ee.flags |= e, n.memoizedState = wl(1 | t, i, a, l)) } function of(e, t) { Ui(8390656, 8, e, t) } function Yr(e, t) { Bi(2048, 8, e, t) } function Vh(e) { ee.flags |= 4; var t = ee.updateQueue; if (t === null) t = Di(), ee.updateQueue = t, t.events = [e]; else { var a = t.events; a === null ? t.events = [e] : a.push(e) } } function ff(e) { var t = Oe().memoizedState; return Vh({ ref: t, nextImpl: e }), function () { if ((me & 2) !== 0) throw Error(c(440)); return t.impl.apply(void 0, arguments) } } function df(e, t) { return Bi(4, 2, e, t) } function mf(e, t) { return Bi(4, 4, e, t) } function hf(e, t) { if (typeof t == "function") { e = e(); var a = t(e); return function () { typeof a == "function" ? a() : t(null) } } if (t != null) return e = e(), t.current = e, function () { t.current = null } } function pf(e, t, a) { a = a != null ? a.concat([e]) : null, Bi(4, 4, hf.bind(null, t, e), a) } function Gr() { } function yf(e, t) { var a = Oe(); t = t === void 0 ? null : t; var l = a.memoizedState; return t !== null && Mr(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e) } function gf(e, t) { var a = Oe(); t = t === void 0 ? null : t; var l = a.memoizedState; if (t !== null && Mr(t, l[1])) return l[0]; if (l = e(), Ia) { oa(!0); try { e() } finally { oa(!1) } } return a.memoizedState = [l, t], l } function Xr(e, t, a) { return a === void 0 || (Jt & 1073741824) !== 0 && (re & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = vd(), ee.lanes |= e, Ea |= e, a) } function vf(e, t, a, l) { return ct(a, t) ? a : Tl.current !== null ? (e = Xr(e, a, l), ct(e, t) || (Le = !0), e) : (Jt & 42) === 0 || (Jt & 1073741824) !== 0 && (re & 261930) === 0 ? (Le = !0, e.memoizedState = a) : (e = vd(), ee.lanes |= e, Ea |= e, t) } function xf(e, t, a, l, n) { var i = Y.p; Y.p = i !== 0 && 8 > i ? i : 8; var s = D.T, d = {}; D.T = d, Zr(e, !1, t, a); try { var y = n(), z = D.S; if (z !== null && z(d, y), y !== null && typeof y == "object" && typeof y.then == "function") { var R = qh(y, l); Sn(e, t, R, pt(e)) } else Sn(e, t, l, pt(e)) } catch (O) { Sn(e, t, { then: function () { }, status: "rejected", reason: O }, pt()) } finally { Y.p = i, s !== null && d.types !== null && (s.types = d.types), D.T = s } } function Qh() { } function Vr(e, t, a, l) { if (e.tag !== 5) throw Error(c(476)); var n = bf(e).queue; xf(e, n, t, F, a === null ? Qh : function () { return Sf(e), a(l) }) } function bf(e) { var t = e.memoizedState; if (t !== null) return t; t = { memoizedState: F, baseState: F, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: F }, next: null }; var a = {}; return t.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: a }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t } function Sf(e) { var t = bf(e); t.next === null && (t = e.alternate.memoizedState), Sn(e, t.next.queue, {}, pt()) } function Qr() { return Qe(Ln) } function jf() { return Oe().memoizedState } function Nf() { return Oe().memoizedState } function Zh(e) { for (var t = e.return; t !== null;) { switch (t.tag) { case 24: case 3: var a = pt(); e = va(a); var l = xa(t, e, a); l !== null && (it(l, t, a), yn(l, t, a)), t = { cache: br() }, e.payload = t; return }t = t.return } } function $h(e, t, a) { var l = pt(); a = { lane: l, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }, Hi(e) ? Tf(t, a) : (a = cr(e, t, a, l), a !== null && (it(a, e, l), zf(a, t, l))) } function Ef(e, t, a) { var l = pt(); Sn(e, t, a, l) } function Sn(e, t, a, l) { var n = { lane: l, revertLane: 0, gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }; if (Hi(e)) Tf(t, n); else { var i = e.alternate; if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try { var s = t.lastRenderedState, d = i(s, a); if (n.hasEagerState = !0, n.eagerState = d, ct(d, s)) return gi(e, t, n, 0), Ee === null && yi(), !1 } catch { } finally { } if (a = cr(e, t, n, l), a !== null) return it(a, e, l), zf(a, t, l), !0 } return !1 } function Zr(e, t, a, l) { if (l = { lane: 2, revertLane: Es(), gesture: null, action: l, hasEagerState: !1, eagerState: null, next: null }, Hi(e)) { if (t) throw Error(c(479)) } else t = cr(e, a, l, 2), t !== null && it(t, e, 2) } function Hi(e) { var t = e.alternate; return e === ee || t !== null && t === ee } function Tf(e, t) { zl = Ri = !0; var a = e.pending; a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t } function zf(e, t, a) { if ((a & 4194048) !== 0) { var l = t.lanes; l &= e.pendingLanes, a |= l, t.lanes = a, Ac(e, a) } } var jn = { readContext: Qe, use: _i, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useLayoutEffect: Ae, useInsertionEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useSyncExternalStore: Ae, useId: Ae, useHostTransitionStatus: Ae, useFormState: Ae, useActionState: Ae, useOptimistic: Ae, useMemoCache: Ae, useCacheRefresh: Ae }; jn.useEffectEvent = Ae; var Cf = { readContext: Qe, use: _i, useCallback: function (e, t) { return Ie().memoizedState = [e, t === void 0 ? null : t], e }, useContext: Qe, useEffect: of, useImperativeHandle: function (e, t, a) { a = a != null ? a.concat([e]) : null, Ui(4194308, 4, hf.bind(null, t, e), a) }, useLayoutEffect: function (e, t) { return Ui(4194308, 4, e, t) }, useInsertionEffect: function (e, t) { Ui(4, 2, e, t) }, useMemo: function (e, t) { var a = Ie(); t = t === void 0 ? null : t; var l = e(); if (Ia) { oa(!0); try { e() } finally { oa(!1) } } return a.memoizedState = [l, t], l }, useReducer: function (e, t, a) { var l = Ie(); if (a !== void 0) { var n = a(t); if (Ia) { oa(!0); try { a(t) } finally { oa(!1) } } } else n = t; return l.memoizedState = l.baseState = n, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, l.queue = e, e = e.dispatch = $h.bind(null, ee, e), [l.memoizedState, e] }, useRef: function (e) { var t = Ie(); return e = { current: e }, t.memoizedState = e }, useState: function (e) { e = qr(e); var t = e.queue, a = Ef.bind(null, ee, t); return t.dispatch = a, [e.memoizedState, a] }, useDebugValue: Gr, useDeferredValue: function (e, t) { var a = Ie(); return Xr(a, e, t) }, useTransition: function () { var e = qr(!1); return e = xf.bind(null, ee, e.queue, !0, !1), Ie().memoizedState = e, [!1, e] }, useSyncExternalStore: function (e, t, a) { var l = ee, n = Ie(); if (ce) { if (a === void 0) throw Error(c(407)); a = a() } else { if (a = t(), Ee === null) throw Error(c(349)); (re & 127) !== 0 || $o(l, t, a) } n.memoizedState = a; var i = { value: a, getSnapshot: t }; return n.queue = i, of(Jo.bind(null, l, i, e), [e]), l.flags |= 2048, wl(9, { destroy: void 0 }, Ko.bind(null, l, i, a, t), null), a }, useId: function () { var e = Ie(), t = Ee.identifierPrefix; if (ce) { var a = Lt, l = Ht; a = (l & ~(1 << 32 - st(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Mi++, 0 < a && (t += "H" + a.toString(32)), t += "_" } else a = kh++, t = "_" + t + "r_" + a.toString(32) + "_"; return e.memoizedState = t }, useHostTransitionStatus: Qr, useFormState: nf, useActionState: nf, useOptimistic: function (e) { var t = Ie(); t.memoizedState = t.baseState = e; var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return t.queue = a, t = Zr.bind(null, ee, !0, a), a.dispatch = t, [e, t] }, useMemoCache: Br, useCacheRefresh: function () { return Ie().memoizedState = Zh.bind(null, ee) }, useEffectEvent: function (e) { var t = Ie(), a = { impl: e }; return t.memoizedState = a, function () { if ((me & 2) !== 0) throw Error(c(440)); return a.impl.apply(void 0, arguments) } } }, $r = { readContext: Qe, use: _i, useCallback: yf, useContext: Qe, useEffect: Yr, useImperativeHandle: pf, useInsertionEffect: df, useLayoutEffect: mf, useMemo: gf, useReducer: Oi, useRef: cf, useState: function () { return Oi(Ft) }, useDebugValue: Gr, useDeferredValue: function (e, t) { var a = Oe(); return vf(a, be.memoizedState, e, t) }, useTransition: function () { var e = Oi(Ft)[0], t = Oe().memoizedState; return [typeof e == "boolean" ? e : bn(e), t] }, useSyncExternalStore: Zo, useId: jf, useHostTransitionStatus: Qr, useFormState: uf, useActionState: uf, useOptimistic: function (e, t) { var a = Oe(); return Io(a, be, e, t) }, useMemoCache: Br, useCacheRefresh: Nf }; $r.useEffectEvent = ff; var wf = { readContext: Qe, use: _i, useCallback: yf, useContext: Qe, useEffect: Yr, useImperativeHandle: pf, useInsertionEffect: df, useLayoutEffect: mf, useMemo: gf, useReducer: Lr, useRef: cf, useState: function () { return Lr(Ft) }, useDebugValue: Gr, useDeferredValue: function (e, t) { var a = Oe(); return be === null ? Xr(a, e, t) : vf(a, be.memoizedState, e, t) }, useTransition: function () { var e = Lr(Ft)[0], t = Oe().memoizedState; return [typeof e == "boolean" ? e : bn(e), t] }, useSyncExternalStore: Zo, useId: jf, useHostTransitionStatus: Qr, useFormState: sf, useActionState: sf, useOptimistic: function (e, t) { var a = Oe(); return be !== null ? Io(a, be, e, t) : (a.baseState = e, [e, a.queue.dispatch]) }, useMemoCache: Br, useCacheRefresh: Nf }; wf.useEffectEvent = ff; function Kr(e, t, a, l) { t = e.memoizedState, a = a(l, t), a = a == null ? t : C({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a) } var Jr = { enqueueSetState: function (e, t, a) { e = e._reactInternals; var l = pt(), n = va(l); n.payload = t, a != null && (n.callback = a), t = xa(e, n, l), t !== null && (it(t, e, l), yn(t, e, l)) }, enqueueReplaceState: function (e, t, a) { e = e._reactInternals; var l = pt(), n = va(l); n.tag = 1, n.payload = t, a != null && (n.callback = a), t = xa(e, n, l), t !== null && (it(t, e, l), yn(t, e, l)) }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var a = pt(), l = va(a); l.tag = 2, t != null && (l.callback = t), t = xa(e, l, a), t !== null && (it(t, e, a), yn(t, e, a)) } }; function Af(e, t, a, l, n, i, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, s) : t.prototype && t.prototype.isPureReactComponent ? !sn(a, l) || !sn(n, i) : !0 } function Rf(e, t, a, l) { e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Jr.enqueueReplaceState(t, t.state, null) } function Pa(e, t) { var a = t; if ("ref" in t) { a = {}; for (var l in t) l !== "ref" && (a[l] = t[l]) } if (e = e.defaultProps) { a === t && (a = C({}, a)); for (var n in e) a[n] === void 0 && (a[n] = e[n]) } return a } function Mf(e) { pi(e) } function Df(e) { console.error(e) } function _f(e) { pi(e) } function Li(e, t) { try { var a = e.onUncaughtError; a(t.value, { componentStack: t.stack }) } catch (l) { setTimeout(function () { throw l }) } } function Of(e, t, a) { try { var l = e.onCaughtError; l(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null }) } catch (n) { setTimeout(function () { throw n }) } } function Fr(e, t, a) { return a = va(a), a.tag = 3, a.payload = { element: null }, a.callback = function () { Li(e, t) }, a } function Uf(e) { return e = va(e), e.tag = 3, e } function Bf(e, t, a, l) { var n = a.type.getDerivedStateFromError; if (typeof n == "function") { var i = l.value; e.payload = function () { return n(i) }, e.callback = function () { Of(t, a, l) } } var s = a.stateNode; s !== null && typeof s.componentDidCatch == "function" && (e.callback = function () { Of(t, a, l), typeof n != "function" && (Ta === null ? Ta = new Set([this]) : Ta.add(this)); var d = l.stack; this.componentDidCatch(l.value, { componentStack: d !== null ? d : "" }) }) } function Kh(e, t, a, l, n) { if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") { if (t = a.alternate, t !== null && bl(t, a, n, !0), a = ft.current, a !== null) { switch (a.tag) { case 31: case 13: return Tt === null ? Fi() : a.alternate === null && Re === 0 && (Re = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Ti ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([l]) : t.add(l), Ss(e, l, n)), !1; case 22: return a.flags |= 65536, l === Ti ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([l]) : a.add(l)), Ss(e, l, n)), !1 }throw Error(c(435, a.tag)) } return Ss(e, l, n), Fi(), !1 } if (ce) return t = ft.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== pr && (e = Error(c(422), { cause: l }), fn(St(e, a)))) : (l !== pr && (t = Error(c(423), { cause: l }), fn(St(t, a))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = St(l, a), n = Fr(e.stateNode, l, n), zr(e, n), Re !== 4 && (Re = 2)), !1; var i = Error(c(520), { cause: l }); if (i = St(i, a), Rn === null ? Rn = [i] : Rn.push(i), Re !== 4 && (Re = 2), t === null) return !0; l = St(l, a), a = t; do { switch (a.tag) { case 3: return a.flags |= 65536, e = n & -n, a.lanes |= e, e = Fr(a.stateNode, l, e), zr(a, e), !1; case 1: if (t = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ta === null || !Ta.has(i)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = Uf(n), Bf(n, e, a, l), zr(a, n), !1 }a = a.return } while (a !== null); return !1 } var Wr = Error(c(461)), Le = !1; function Ze(e, t, a, l) { t.child = e === null ? qo(t, null, a, l) : Wa(t, e.child, a, l) } function Hf(e, t, a, l, n) { a = a.render; var i = t.ref; if ("ref" in l) { var s = {}; for (var d in l) d !== "ref" && (s[d] = l[d]) } else s = l; return $a(t), l = Dr(e, t, a, s, i, n), d = _r(), e !== null && !Le ? (Or(e, t, n), Wt(e, t, n)) : (ce && d && mr(t), t.flags |= 1, Ze(e, t, l, n), t.child) } function Lf(e, t, a, l, n) { if (e === null) { var i = a.type; return typeof i == "function" && !or(i) && i.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = i, qf(e, t, i, l, n)) : (e = xi(a.type, null, l, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e) } if (i = e.child, !is(e, n)) { var s = i.memoizedProps; if (a = a.compare, a = a !== null ? a : sn, a(s, l) && e.ref === t.ref) return Wt(e, t, n) } return t.flags |= 1, e = Qt(i, l), e.ref = t.ref, e.return = t, t.child = e } function qf(e, t, a, l, n) { if (e !== null) { var i = e.memoizedProps; if (sn(i, l) && e.ref === t.ref) if (Le = !1, t.pendingProps = l = i, is(e, n)) (e.flags & 131072) !== 0 && (Le = !0); else return t.lanes = e.lanes, Wt(e, t, n) } return Ir(e, t, a, l, n) } function kf(e, t, a, l) { var n = l.children, i = e !== null ? e.memoizedState : null; if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.mode === "hidden") { if ((t.flags & 128) !== 0) { if (i = i !== null ? i.baseLanes | a : a, e !== null) { for (l = t.child = e.child, n = 0; l !== null;)n = n | l.lanes | l.childLanes, l = l.sibling; l = n & ~i } else l = 0, t.child = null; return Yf(e, t, i, a, l) } if ((a & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ni(t, i !== null ? i.cachePool : null), i !== null ? Go(t, i) : wr(), Xo(t); else return l = t.lanes = 536870912, Yf(e, t, i !== null ? i.baseLanes | a : a, a, l) } else i !== null ? (Ni(t, i.cachePool), Go(t, i), Sa(), t.memoizedState = null) : (e !== null && Ni(t, null), wr(), Sa()); return Ze(e, t, n, a), t.child } function Nn(e, t) { return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling } function Yf(e, t, a, l, n) { var i = jr(); return i = i === null ? null : { parent: Be._currentValue, pool: i }, t.memoizedState = { baseLanes: a, cachePool: i }, e !== null && Ni(t, null), wr(), Xo(t), e !== null && bl(e, t, l, !0), t.childLanes = n, null } function qi(e, t) { return t = Yi({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t } function Gf(e, t, a) { return Wa(t, e.child, null, a), e = qi(t, t.pendingProps), e.flags |= 2, dt(t), t.memoizedState = null, e } function Jh(e, t, a) { var l = t.pendingProps, n = (t.flags & 128) !== 0; if (t.flags &= -129, e === null) { if (ce) { if (l.mode === "hidden") return e = qi(t, l), t.lanes = 536870912, Nn(null, e); if (Rr(t), (e = Te) ? (e = em(e, Et), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: ma !== null ? { id: Ht, overflow: Lt } : null, retryLane: 536870912, hydrationErrors: null }, a = Eo(e), a.return = t, t.child = a, Ve = t, Te = null)) : e = null, e === null) throw pa(t); return t.lanes = 536870912, null } return qi(t, l) } var i = e.memoizedState; if (i !== null) { var s = i.dehydrated; if (Rr(t), n) if (t.flags & 256) t.flags &= -257, t = Gf(e, t, a); else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null; else throw Error(c(558)); else if (Le || bl(e, t, a, !1), n = (a & e.childLanes) !== 0, Le || n) { if (l = Ee, l !== null && (s = Rc(l, a), s !== 0 && s !== i.retryLane)) throw i.retryLane = s, Xa(e, s), it(l, e, s), Wr; Fi(), t = Gf(e, t, a) } else e = i.treeContext, Te = zt(s.nextSibling), Ve = t, ce = !0, ha = null, Et = !1, e !== null && Co(t, e), t = qi(t, l), t.flags |= 4096; return t } return e = Qt(e.child, { mode: l.mode, children: l.children }), e.ref = t.ref, t.child = e, e.return = t, e } function ki(e, t) { var a = t.ref; if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816); else { if (typeof a != "function" && typeof a != "object") throw Error(c(284)); (e === null || e.ref !== a) && (t.flags |= 4194816) } } function Ir(e, t, a, l, n) { return $a(t), a = Dr(e, t, a, l, void 0, n), l = _r(), e !== null && !Le ? (Or(e, t, n), Wt(e, t, n)) : (ce && l && mr(t), t.flags |= 1, Ze(e, t, a, n), t.child) } function Xf(e, t, a, l, n, i) { return $a(t), t.updateQueue = null, a = Qo(t, l, a, n), Vo(e), l = _r(), e !== null && !Le ? (Or(e, t, i), Wt(e, t, i)) : (ce && l && mr(t), t.flags |= 1, Ze(e, t, a, i), t.child) } function Vf(e, t, a, l, n) { if ($a(t), t.stateNode === null) { var i = yl, s = a.contextType; typeof s == "object" && s !== null && (i = Qe(s)), i = new a(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Jr, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, Er(t), s = a.contextType, i.context = typeof s == "object" && s !== null ? Qe(s) : yl, i.state = t.memoizedState, s = a.getDerivedStateFromProps, typeof s == "function" && (Kr(t, a, s, l), i.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Jr.enqueueReplaceState(i, i.state, null), vn(t, l, i, n), gn(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !0 } else if (e === null) { i = t.stateNode; var d = t.memoizedProps, y = Pa(a, d); i.props = y; var z = i.context, R = a.contextType; s = yl, typeof R == "object" && R !== null && (s = Qe(R)); var O = a.getDerivedStateFromProps; R = typeof O == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, R || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || z !== s) && Rf(t, i, l, s), ga = !1; var w = t.memoizedState; i.state = w, vn(t, l, i, n), gn(), z = t.memoizedState, d || w !== z || ga ? (typeof O == "function" && (Kr(t, a, O, l), z = t.memoizedState), (y = ga || Af(t, a, y, l, w, z, s)) ? (R || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = z), i.props = l, i.state = z, i.context = s, l = y) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = !1) } else { i = t.stateNode, Tr(e, t), s = t.memoizedProps, R = Pa(a, s), i.props = R, O = t.pendingProps, w = i.context, z = a.contextType, y = yl, typeof z == "object" && z !== null && (y = Qe(z)), d = a.getDerivedStateFromProps, (z = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== O || w !== y) && Rf(t, i, l, y), ga = !1, w = t.memoizedState, i.state = w, vn(t, l, i, n), gn(); var A = t.memoizedState; s !== O || w !== A || ga || e !== null && e.dependencies !== null && Si(e.dependencies) ? (typeof d == "function" && (Kr(t, a, d, l), A = t.memoizedState), (R = ga || Af(t, a, R, l, w, A, y) || e !== null && e.dependencies !== null && Si(e.dependencies)) ? (z || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, A, y), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(l, A, y)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = A), i.props = l, i.state = A, i.context = y, l = R) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), l = !1) } return i = l, ki(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = Wa(t, e.child, null, n), t.child = Wa(t, null, a, n)) : Ze(e, t, a, n), t.memoizedState = i.state, e = t.child) : e = Wt(e, t, n), e } function Qf(e, t, a, l) { return Qa(), t.flags |= 256, Ze(e, t, a, l), t.child } var Pr = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }; function es(e) { return { baseLanes: e, cachePool: _o() } } function ts(e, t, a) { return e = e !== null ? e.childLanes & ~a : 0, t && (e |= ht), e } function Zf(e, t, a) { var l = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, s; if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (_e.current & 2) !== 0), s && (n = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) { if (ce) { if (n ? ba(t) : Sa(), (e = Te) ? (e = em(e, Et), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: ma !== null ? { id: Ht, overflow: Lt } : null, retryLane: 536870912, hydrationErrors: null }, a = Eo(e), a.return = t, t.child = a, Ve = t, Te = null)) : e = null, e === null) throw pa(t); return Hs(e) ? t.lanes = 32 : t.lanes = 536870912, null } var d = l.children; return l = l.fallback, n ? (Sa(), n = t.mode, d = Yi({ mode: "hidden", children: d }, n), l = Va(l, n, a, null), d.return = t, l.return = t, d.sibling = l, t.child = d, l = t.child, l.memoizedState = es(a), l.childLanes = ts(e, s, a), t.memoizedState = Pr, Nn(null, l)) : (ba(t), as(t, d)) } var y = e.memoizedState; if (y !== null && (d = y.dehydrated, d !== null)) { if (i) t.flags & 256 ? (ba(t), t.flags &= -257, t = ls(e, t, a)) : t.memoizedState !== null ? (Sa(), t.child = e.child, t.flags |= 128, t = null) : (Sa(), d = l.fallback, n = t.mode, l = Yi({ mode: "visible", children: l.children }, n), d = Va(d, n, a, null), d.flags |= 2, l.return = t, d.return = t, l.sibling = d, t.child = l, Wa(t, e.child, null, a), l = t.child, l.memoizedState = es(a), l.childLanes = ts(e, s, a), t.memoizedState = Pr, t = Nn(null, l)); else if (ba(t), Hs(d)) { if (s = d.nextSibling && d.nextSibling.dataset, s) var z = s.dgst; s = z, l = Error(c(419)), l.stack = "", l.digest = s, fn({ value: l, source: null, stack: null }), t = ls(e, t, a) } else if (Le || bl(e, t, a, !1), s = (a & e.childLanes) !== 0, Le || s) { if (s = Ee, s !== null && (l = Rc(s, a), l !== 0 && l !== y.retryLane)) throw y.retryLane = l, Xa(e, l), it(s, e, l), Wr; Bs(d) || Fi(), t = ls(e, t, a) } else Bs(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = y.treeContext, Te = zt(d.nextSibling), Ve = t, ce = !0, ha = null, Et = !1, e !== null && Co(t, e), t = as(t, l.children), t.flags |= 4096); return t } return n ? (Sa(), d = l.fallback, n = t.mode, y = e.child, z = y.sibling, l = Qt(y, { mode: "hidden", children: l.children }), l.subtreeFlags = y.subtreeFlags & 65011712, z !== null ? d = Qt(z, d) : (d = Va(d, n, a, null), d.flags |= 2), d.return = t, l.return = t, l.sibling = d, t.child = l, Nn(null, l), l = t.child, d = e.child.memoizedState, d === null ? d = es(a) : (n = d.cachePool, n !== null ? (y = Be._currentValue, n = n.parent !== y ? { parent: y, pool: y } : n) : n = _o(), d = { baseLanes: d.baseLanes | a, cachePool: n }), l.memoizedState = d, l.childLanes = ts(e, s, a), t.memoizedState = Pr, Nn(e.child, l)) : (ba(t), a = e.child, e = a.sibling, a = Qt(a, { mode: "visible", children: l.children }), a.return = t, a.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = a, t.memoizedState = null, a) } function as(e, t) { return t = Yi({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t } function Yi(e, t) { return e = ot(22, e, null, t), e.lanes = 0, e } function ls(e, t, a) { return Wa(t, e.child, null, a), e = as(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e } function $f(e, t, a) { e.lanes |= t; var l = e.alternate; l !== null && (l.lanes |= t), vr(e.return, t, a) } function ns(e, t, a, l, n, i) { var s = e.memoizedState; s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: a, tailMode: n, treeForkCount: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = a, s.tailMode = n, s.treeForkCount = i) } function Kf(e, t, a) { var l = t.pendingProps, n = l.revealOrder, i = l.tail; l = l.children; var s = _e.current, d = (s & 2) !== 0; if (d ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, G(_e, s), Ze(e, t, l, a), l = ce ? on : 0, !d && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) { if (e.tag === 13) e.memoizedState !== null && $f(e, a, t); else if (e.tag === 19) $f(e, a, t); else if (e.child !== null) { e.child.return = e, e = e.child; continue } if (e === t) break e; for (; e.sibling === null;) { if (e.return === null || e.return === t) break e; e = e.return } e.sibling.return = e.return, e = e.sibling } switch (n) { case "forwards": for (a = t.child, n = null; a !== null;)e = a.alternate, e !== null && Ai(e) === null && (n = a), a = a.sibling; a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), ns(t, !1, n, a, i, l); break; case "backwards": case "unstable_legacy-backwards": for (a = null, n = t.child, t.child = null; n !== null;) { if (e = n.alternate, e !== null && Ai(e) === null) { t.child = n; break } e = n.sibling, n.sibling = a, a = n, n = e } ns(t, !0, a, null, i, l); break; case "together": ns(t, !1, null, null, void 0, l); break; default: t.memoizedState = null }return t.child } function Wt(e, t, a) { if (e !== null && (t.dependencies = e.dependencies), Ea |= t.lanes, (a & t.childLanes) === 0) if (e !== null) { if (bl(e, t, a, !1), (a & t.childLanes) === 0) return null } else return null; if (e !== null && t.child !== e.child) throw Error(c(153)); if (t.child !== null) { for (e = t.child, a = Qt(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;)e = e.sibling, a = a.sibling = Qt(e, e.pendingProps), a.return = t; a.sibling = null } return t.child } function is(e, t) { return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Si(e))) } function Fh(e, t, a) { switch (t.tag) { case 3: We(t, t.stateNode.containerInfo), ya(t, Be, e.memoizedState.cache), Qa(); break; case 27: case 5: Kl(t); break; case 4: We(t, t.stateNode.containerInfo); break; case 10: ya(t, t.type, t.memoizedProps.value); break; case 31: if (t.memoizedState !== null) return t.flags |= 128, Rr(t), null; break; case 13: var l = t.memoizedState; if (l !== null) return l.dehydrated !== null ? (ba(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Zf(e, t, a) : (ba(t), e = Wt(e, t, a), e !== null ? e.sibling : null); ba(t); break; case 19: var n = (e.flags & 128) !== 0; if (l = (a & t.childLanes) !== 0, l || (bl(e, t, a, !1), l = (a & t.childLanes) !== 0), n) { if (l) return Kf(e, t, a); t.flags |= 128 } if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), G(_e, _e.current), l) break; return null; case 22: return t.lanes = 0, kf(e, t, a, t.pendingProps); case 24: ya(t, Be, e.memoizedState.cache) }return Wt(e, t, a) } function Jf(e, t, a) { if (e !== null) if (e.memoizedProps !== t.pendingProps) Le = !0; else { if (!is(e, a) && (t.flags & 128) === 0) return Le = !1, Fh(e, t, a); Le = (e.flags & 131072) !== 0 } else Le = !1, ce && (t.flags & 1048576) !== 0 && zo(t, on, t.index); switch (t.lanes = 0, t.tag) { case 16: e: { var l = t.pendingProps; if (e = Ja(t.elementType), t.type = e, typeof e == "function") or(e) ? (l = Pa(e, l), t.tag = 1, t = Vf(null, t, e, l, a)) : (t.tag = 0, t = Ir(null, t, e, l, a)); else { if (e != null) { var n = e.$$typeof; if (n === te) { t.tag = 11, t = Hf(null, t, e, l, a); break e } else if (n === W) { t.tag = 14, t = Lf(null, t, e, l, a); break e } } throw t = gt(e) || e, Error(c(306, t, "")) } } return t; case 0: return Ir(e, t, t.type, t.pendingProps, a); case 1: return l = t.type, n = Pa(l, t.pendingProps), Vf(e, t, l, n, a); case 3: e: { if (We(t, t.stateNode.containerInfo), e === null) throw Error(c(387)); l = t.pendingProps; var i = t.memoizedState; n = i.element, Tr(e, t), vn(t, l, null, a); var s = t.memoizedState; if (l = s.cache, ya(t, Be, l), l !== i.cache && xr(t, [Be], a, !0), gn(), l = s.element, i.isDehydrated) if (i = { element: l, isDehydrated: !1, cache: s.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) { t = Qf(e, t, l, a); break e } else if (l !== n) { n = St(Error(c(424)), t), fn(n), t = Qf(e, t, l, a); break e } else { switch (e = t.stateNode.containerInfo, e.nodeType) { case 9: e = e.body; break; default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e }for (Te = zt(e.firstChild), Ve = t, ce = !0, ha = null, Et = !0, a = qo(t, null, l, a), t.child = a; a;)a.flags = a.flags & -3 | 4096, a = a.sibling } else { if (Qa(), l === n) { t = Wt(e, t, a); break e } Ze(e, t, l, a) } t = t.child } return t; case 26: return ki(e, t), e === null ? (a = um(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : ce || (a = t.type, e = t.pendingProps, l = lu(ne.current).createElement(a), l[Xe] = t, l[Pe] = e, $e(l, a, e), Ye(l), t.stateNode = l) : t.memoizedState = um(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null; case 27: return Kl(t), e === null && ce && (l = t.stateNode = lm(t.type, t.pendingProps, ne.current), Ve = t, Et = !0, n = Te, Aa(t.type) ? (Ls = n, Te = zt(l.firstChild)) : Te = n), Ze(e, t, t.pendingProps.children, a), ki(e, t), e === null && (t.flags |= 4194304), t.child; case 5: return e === null && ce && ((n = l = Te) && (l = zp(l, t.type, t.pendingProps, Et), l !== null ? (t.stateNode = l, Ve = t, Te = zt(l.firstChild), Et = !1, n = !0) : n = !1), n || pa(t)), Kl(t), n = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = i.children, _s(n, i) ? l = null : s !== null && _s(n, s) && (t.flags |= 32), t.memoizedState !== null && (n = Dr(e, t, Yh, null, null, a), Ln._currentValue = n), ki(e, t), Ze(e, t, l, a), t.child; case 6: return e === null && ce && ((e = a = Te) && (a = Cp(a, t.pendingProps, Et), a !== null ? (t.stateNode = a, Ve = t, Te = null, e = !0) : e = !1), e || pa(t)), null; case 13: return Zf(e, t, a); case 4: return We(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = Wa(t, null, l, a) : Ze(e, t, l, a), t.child; case 11: return Hf(e, t, t.type, t.pendingProps, a); case 7: return Ze(e, t, t.pendingProps, a), t.child; case 8: return Ze(e, t, t.pendingProps.children, a), t.child; case 12: return Ze(e, t, t.pendingProps.children, a), t.child; case 10: return l = t.pendingProps, ya(t, t.type, l.value), Ze(e, t, l.children, a), t.child; case 9: return n = t.type._context, l = t.pendingProps.children, $a(t), n = Qe(n), l = l(n), t.flags |= 1, Ze(e, t, l, a), t.child; case 14: return Lf(e, t, t.type, t.pendingProps, a); case 15: return qf(e, t, t.type, t.pendingProps, a); case 19: return Kf(e, t, a); case 31: return Jh(e, t, a); case 22: return kf(e, t, a, t.pendingProps); case 24: return $a(t), l = Qe(Be), e === null ? (n = jr(), n === null && (n = Ee, i = br(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), t.memoizedState = { parent: l, cache: n }, Er(t), ya(t, Be, n)) : ((e.lanes & a) !== 0 && (Tr(e, t), vn(t, null, null, a), gn()), n = e.memoizedState, i = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ya(t, Be, l)) : (l = i.cache, ya(t, Be, l), l !== n.cache && xr(t, [Be], a, !0))), Ze(e, t, t.pendingProps.children, a), t.child; case 29: throw t.pendingProps }throw Error(c(156, t.tag)) } function It(e) { e.flags |= 4 } function us(e, t, a, l, n) { if ((t = (e.mode & 32) !== 0) && (t = !1), t) { if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192; else if (jd()) e.flags |= 8192; else throw Fa = Ti, Nr } else e.flags &= -16777217 } function Ff(e, t) { if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217; else if (e.flags |= 16777216, !fm(t)) if (jd()) e.flags |= 8192; else throw Fa = Ti, Nr } function Gi(e, t) { t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Cc() : 536870912, e.lanes |= t, Dl |= t) } function En(e, t) { if (!ce) switch (e.tailMode) { case "hidden": t = e.tail; for (var a = null; t !== null;)t.alternate !== null && (a = t), t = t.sibling; a === null ? e.tail = null : a.sibling = null; break; case "collapsed": a = e.tail; for (var l = null; a !== null;)a.alternate !== null && (l = a), a = a.sibling; l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null } } function ze(e) { var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0; if (t) for (var n = e.child; n !== null;)a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling; else for (n = e.child; n !== null;)a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling; return e.subtreeFlags |= l, e.childLanes = a, t } function Wh(e, t, a) { var l = t.pendingProps; switch (hr(t), t.tag) { case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return ze(t), null; case 1: return ze(t), null; case 3: return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Kt(Be), De(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (xl(t) ? It(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, yr())), ze(t), null; case 26: var n = t.type, i = t.memoizedState; return e === null ? (It(t), i !== null ? (ze(t), Ff(t, i)) : (ze(t), us(t, n, null, l, a))) : i ? i !== e.memoizedState ? (It(t), ze(t), Ff(t, i)) : (ze(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && It(t), ze(t), us(t, n, e, l, a)), null; case 27: if (Pn(t), a = ne.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && It(t); else { if (!l) { if (t.stateNode === null) throw Error(c(166)); return ze(t), null } e = Z.current, xl(t) ? wo(t) : (e = lm(n, l, a), t.stateNode = e, It(t)) } return ze(t), null; case 5: if (Pn(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && It(t); else { if (!l) { if (t.stateNode === null) throw Error(c(166)); return ze(t), null } if (i = Z.current, xl(t)) wo(t); else { var s = lu(ne.current); switch (i) { case 1: i = s.createElementNS("http://www.w3.org/2000/svg", n); break; case 2: i = s.createElementNS("http://www.w3.org/1998/Math/MathML", n); break; default: switch (n) { case "svg": i = s.createElementNS("http://www.w3.org/2000/svg", n); break; case "math": i = s.createElementNS("http://www.w3.org/1998/Math/MathML", n); break; case "script": i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild); break; case "select": i = typeof l.is == "string" ? s.createElement("select", { is: l.is }) : s.createElement("select"), l.multiple ? i.multiple = !0 : l.size && (i.size = l.size); break; default: i = typeof l.is == "string" ? s.createElement(n, { is: l.is }) : s.createElement(n) } }i[Xe] = t, i[Pe] = l; e: for (s = t.child; s !== null;) { if (s.tag === 5 || s.tag === 6) i.appendChild(s.stateNode); else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) { s.child.return = s, s = s.child; continue } if (s === t) break e; for (; s.sibling === null;) { if (s.return === null || s.return === t) break e; s = s.return } s.sibling.return = s.return, s = s.sibling } t.stateNode = i; e: switch ($e(i, n, l), n) { case "button": case "input": case "select": case "textarea": l = !!l.autoFocus; break e; case "img": l = !0; break e; default: l = !1 }l && It(t) } } return ze(t), us(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null; case 6: if (e && t.stateNode != null) e.memoizedProps !== l && It(t); else { if (typeof l != "string" && t.stateNode === null) throw Error(c(166)); if (e = ne.current, xl(t)) { if (e = t.stateNode, a = t.memoizedProps, l = null, n = Ve, n !== null) switch (n.tag) { case 27: case 5: l = n.memoizedProps }e[Xe] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Zd(e.nodeValue, a)), e || pa(t, !0) } else e = lu(e).createTextNode(l), e[Xe] = t, t.stateNode = e } return ze(t), null; case 31: if (a = t.memoizedState, e === null || e.memoizedState !== null) { if (l = xl(t), a !== null) { if (e === null) { if (!l) throw Error(c(318)); if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557)); e[Xe] = t } else Qa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4; ze(t), e = !1 } else a = yr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0; if (!e) return t.flags & 256 ? (dt(t), t) : (dt(t), null); if ((t.flags & 128) !== 0) throw Error(c(558)) } return ze(t), null; case 13: if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) { if (n = xl(t), l !== null && l.dehydrated !== null) { if (e === null) { if (!n) throw Error(c(318)); if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317)); n[Xe] = t } else Qa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4; ze(t), n = !1 } else n = yr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0; if (!n) return t.flags & 256 ? (dt(t), t) : (dt(t), null) } return dt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Gi(t, t.updateQueue), ze(t), null); case 4: return De(), e === null && ws(t.stateNode.containerInfo), ze(t), null; case 10: return Kt(t.type), ze(t), null; case 19: if (U(_e), l = t.memoizedState, l === null) return ze(t), null; if (n = (t.flags & 128) !== 0, i = l.rendering, i === null) if (n) En(l, !1); else { if (Re !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null;) { if (i = Ai(e), i !== null) { for (t.flags |= 128, En(l, !1), e = i.updateQueue, t.updateQueue = e, Gi(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;)No(a, e), a = a.sibling; return G(_e, _e.current & 1 | 2), ce && Zt(t, l.treeForkCount), t.child } e = e.sibling } l.tail !== null && ut() > $i && (t.flags |= 128, n = !0, En(l, !1), t.lanes = 4194304) } else { if (!n) if (e = Ai(i), e !== null) { if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Gi(t, e), En(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ce) return ze(t), null } else 2 * ut() - l.renderingStartTime > $i && a !== 536870912 && (t.flags |= 128, n = !0, En(l, !1), t.lanes = 4194304); l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i) } return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = ut(), e.sibling = null, a = _e.current, G(_e, n ? a & 1 | 2 : a & 1), ce && Zt(t, l.treeForkCount), e) : (ze(t), null); case 22: case 23: return dt(t), Ar(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), a = t.updateQueue, a !== null && Gi(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && U(Ka), null; case 24: return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Kt(Be), ze(t), null; case 25: return null; case 30: return null }throw Error(c(156, t.tag)) } function Ih(e, t) { switch (hr(t), t.tag) { case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 3: return Kt(Be), De(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null; case 26: case 27: case 5: return Pn(t), null; case 31: if (t.memoizedState !== null) { if (dt(t), t.alternate === null) throw Error(c(340)); Qa() } return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 13: if (dt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) { if (t.alternate === null) throw Error(c(340)); Qa() } return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 19: return U(_e), null; case 4: return De(), null; case 10: return Kt(t.type), null; case 22: case 23: return dt(t), Ar(), e !== null && U(Ka), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null; case 24: return Kt(Be), null; case 25: return null; default: return null } } function Wf(e, t) { switch (hr(t), t.tag) { case 3: Kt(Be), De(); break; case 26: case 27: case 5: Pn(t); break; case 4: De(); break; case 31: t.memoizedState !== null && dt(t); break; case 13: dt(t); break; case 19: U(_e); break; case 10: Kt(t.type); break; case 22: case 23: dt(t), Ar(), e !== null && U(Ka); break; case 24: Kt(Be) } } function Tn(e, t) { try { var a = t.updateQueue, l = a !== null ? a.lastEffect : null; if (l !== null) { var n = l.next; a = n; do { if ((a.tag & e) === e) { l = void 0; var i = a.create, s = a.inst; l = i(), s.destroy = l } a = a.next } while (a !== n) } } catch (d) { ge(t, t.return, d) } } function ja(e, t, a) { try { var l = t.updateQueue, n = l !== null ? l.lastEffect : null; if (n !== null) { var i = n.next; l = i; do { if ((l.tag & e) === e) { var s = l.inst, d = s.destroy; if (d !== void 0) { s.destroy = void 0, n = t; var y = a, z = d; try { z() } catch (R) { ge(n, y, R) } } } l = l.next } while (l !== i) } } catch (R) { ge(t, t.return, R) } } function If(e) { var t = e.updateQueue; if (t !== null) { var a = e.stateNode; try { Yo(t, a) } catch (l) { ge(e, e.return, l) } } } function Pf(e, t, a) { a.props = Pa(e.type, e.memoizedProps), a.state = e.memoizedState; try { a.componentWillUnmount() } catch (l) { ge(e, t, l) } } function zn(e, t) { try { var a = e.ref; if (a !== null) { switch (e.tag) { case 26: case 27: case 5: var l = e.stateNode; break; case 30: l = e.stateNode; break; default: l = e.stateNode }typeof a == "function" ? e.refCleanup = a(l) : a.current = l } } catch (n) { ge(e, t, n) } } function qt(e, t) { var a = e.ref, l = e.refCleanup; if (a !== null) if (typeof l == "function") try { l() } catch (n) { ge(e, t, n) } finally { e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null) } else if (typeof a == "function") try { a(null) } catch (n) { ge(e, t, n) } else a.current = null } function ed(e) { var t = e.type, a = e.memoizedProps, l = e.stateNode; try { e: switch (t) { case "button": case "input": case "select": case "textarea": a.autoFocus && l.focus(); break e; case "img": a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet) } } catch (n) { ge(e, e.return, n) } } function rs(e, t, a) { try { var l = e.stateNode; bp(l, e.type, a, t), l[Pe] = t } catch (n) { ge(e, e.return, n) } } function td(e) { return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Aa(e.type) || e.tag === 4 } function ss(e) { e: for (; ;) { for (; e.sibling === null;) { if (e.return === null || td(e.return)) return null; e = e.return } for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) { if (e.tag === 27 && Aa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e; e.child.return = e, e = e.child } if (!(e.flags & 2)) return e.stateNode } } function cs(e, t, a) { var l = e.tag; if (l === 5 || l === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Xt)); else if (l !== 4 && (l === 27 && Aa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for (cs(e, t, a), e = e.sibling; e !== null;)cs(e, t, a), e = e.sibling } function Xi(e, t, a) { var l = e.tag; if (l === 5 || l === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e); else if (l !== 4 && (l === 27 && Aa(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (Xi(e, t, a), e = e.sibling; e !== null;)Xi(e, t, a), e = e.sibling } function ad(e) { var t = e.stateNode, a = e.memoizedProps; try { for (var l = e.type, n = t.attributes; n.length;)t.removeAttributeNode(n[0]); $e(t, l, a), t[Xe] = e, t[Pe] = a } catch (i) { ge(e, e.return, i) } } var Pt = !1, qe = !1, os = !1, ld = typeof WeakSet == "function" ? WeakSet : Set, Ge = null; function Ph(e, t) { if (e = e.containerInfo, Ms = ou, e = ho(e), lr(e)) { if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd }; else e: { a = (a = e.ownerDocument) && a.defaultView || window; var l = a.getSelection && a.getSelection(); if (l && l.rangeCount !== 0) { a = l.anchorNode; var n = l.anchorOffset, i = l.focusNode; l = l.focusOffset; try { a.nodeType, i.nodeType } catch { a = null; break e } var s = 0, d = -1, y = -1, z = 0, R = 0, O = e, w = null; t: for (; ;) { for (var A; O !== a || n !== 0 && O.nodeType !== 3 || (d = s + n), O !== i || l !== 0 && O.nodeType !== 3 || (y = s + l), O.nodeType === 3 && (s += O.nodeValue.length), (A = O.firstChild) !== null;)w = O, O = A; for (; ;) { if (O === e) break t; if (w === a && ++z === n && (d = s), w === i && ++R === l && (y = s), (A = O.nextSibling) !== null) break; O = w, w = O.parentNode } O = A } a = d === -1 || y === -1 ? null : { start: d, end: y } } else a = null } a = a || { start: 0, end: 0 } } else a = null; for (Ds = { focusedElem: e, selectionRange: a }, ou = !1, Ge = t; Ge !== null;)if (t = Ge, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ge = e; else for (; Ge !== null;) { switch (t = Ge, i = t.alternate, e = t.flags, t.tag) { case 0: if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (a = 0; a < e.length; a++)n = e[a], n.ref.impl = n.nextImpl; break; case 11: case 15: break; case 1: if ((e & 1024) !== 0 && i !== null) { e = void 0, a = t, n = i.memoizedProps, i = i.memoizedState, l = a.stateNode; try { var Q = Pa(a.type, n); e = l.getSnapshotBeforeUpdate(Q, i), l.__reactInternalSnapshotBeforeUpdate = e } catch (J) { ge(a, a.return, J) } } break; case 3: if ((e & 1024) !== 0) { if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) Us(e); else if (a === 1) switch (e.nodeName) { case "HEAD": case "HTML": case "BODY": Us(e); break; default: e.textContent = "" } } break; case 5: case 26: case 27: case 6: case 4: case 17: break; default: if ((e & 1024) !== 0) throw Error(c(163)) }if (e = t.sibling, e !== null) { e.return = t.return, Ge = e; break } Ge = t.return } } function nd(e, t, a) { var l = a.flags; switch (a.tag) { case 0: case 11: case 15: ta(e, a), l & 4 && Tn(5, a); break; case 1: if (ta(e, a), l & 4) if (e = a.stateNode, t === null) try { e.componentDidMount() } catch (s) { ge(a, a.return, s) } else { var n = Pa(a.type, t.memoizedProps); t = t.memoizedState; try { e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate) } catch (s) { ge(a, a.return, s) } } l & 64 && If(a), l & 512 && zn(a, a.return); break; case 3: if (ta(e, a), l & 64 && (e = a.updateQueue, e !== null)) { if (t = null, a.child !== null) switch (a.child.tag) { case 27: case 5: t = a.child.stateNode; break; case 1: t = a.child.stateNode }try { Yo(e, t) } catch (s) { ge(a, a.return, s) } } break; case 27: t === null && l & 4 && ad(a); case 26: case 5: ta(e, a), t === null && l & 4 && ed(a), l & 512 && zn(a, a.return); break; case 12: ta(e, a); break; case 31: ta(e, a), l & 4 && rd(e, a); break; case 13: ta(e, a), l & 4 && sd(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = sp.bind(null, a), wp(e, a)))); break; case 22: if (l = a.memoizedState !== null || Pt, !l) { t = t !== null && t.memoizedState !== null || qe, n = Pt; var i = qe; Pt = l, (qe = t) && !i ? aa(e, a, (a.subtreeFlags & 8772) !== 0) : ta(e, a), Pt = n, qe = i } break; case 30: break; default: ta(e, a) } } function id(e) { var t = e.alternate; t !== null && (e.alternate = null, id(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ku(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null } var Ce = null, tt = !1; function ea(e, t, a) { for (a = a.child; a !== null;)ud(e, t, a), a = a.sibling } function ud(e, t, a) { if (rt && typeof rt.onCommitFiberUnmount == "function") try { rt.onCommitFiberUnmount(Jl, a) } catch { } switch (a.tag) { case 26: qe || qt(a, t), ea(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a)); break; case 27: qe || qt(a, t); var l = Ce, n = tt; Aa(a.type) && (Ce = a.stateNode, tt = !1), ea(e, t, a), Un(a.stateNode), Ce = l, tt = n; break; case 5: qe || qt(a, t); case 6: if (l = Ce, n = tt, Ce = null, ea(e, t, a), Ce = l, tt = n, Ce !== null) if (tt) try { (Ce.nodeType === 9 ? Ce.body : Ce.nodeName === "HTML" ? Ce.ownerDocument.body : Ce).removeChild(a.stateNode) } catch (i) { ge(a, t, i) } else try { Ce.removeChild(a.stateNode) } catch (i) { ge(a, t, i) } break; case 18: Ce !== null && (tt ? (e = Ce, Id(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), kl(e)) : Id(Ce, a.stateNode)); break; case 4: l = Ce, n = tt, Ce = a.stateNode.containerInfo, tt = !0, ea(e, t, a), Ce = l, tt = n; break; case 0: case 11: case 14: case 15: ja(2, a, t), qe || ja(4, a, t), ea(e, t, a); break; case 1: qe || (qt(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Pf(a, t, l)), ea(e, t, a); break; case 21: ea(e, t, a); break; case 22: qe = (l = qe) || a.memoizedState !== null, ea(e, t, a), qe = l; break; default: ea(e, t, a) } } function rd(e, t) { if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) { e = e.dehydrated; try { kl(e) } catch (a) { ge(t, t.return, a) } } } function sd(e, t) { if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try { kl(e) } catch (a) { ge(t, t.return, a) } } function ep(e) { switch (e.tag) { case 31: case 13: case 19: var t = e.stateNode; return t === null && (t = e.stateNode = new ld), t; case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ld), t; default: throw Error(c(435, e.tag)) } } function Vi(e, t) { var a = ep(e); t.forEach(function (l) { if (!a.has(l)) { a.add(l); var n = cp.bind(null, e, l); l.then(n, n) } }) } function at(e, t) { var a = t.deletions; if (a !== null) for (var l = 0; l < a.length; l++) { var n = a[l], i = e, s = t, d = s; e: for (; d !== null;) { switch (d.tag) { case 27: if (Aa(d.type)) { Ce = d.stateNode, tt = !1; break e } break; case 5: Ce = d.stateNode, tt = !1; break e; case 3: case 4: Ce = d.stateNode.containerInfo, tt = !0; break e }d = d.return } if (Ce === null) throw Error(c(160)); ud(i, s, n), Ce = null, tt = !1, i = n.alternate, i !== null && (i.return = null), n.return = null } if (t.subtreeFlags & 13886) for (t = t.child; t !== null;)cd(t, e), t = t.sibling } var Rt = null; function cd(e, t) { var a = e.alternate, l = e.flags; switch (e.tag) { case 0: case 11: case 14: case 15: at(t, e), lt(e), l & 4 && (ja(3, e, e.return), Tn(3, e), ja(5, e, e.return)); break; case 1: at(t, e), lt(e), l & 512 && (qe || a === null || qt(a, a.return)), l & 64 && Pt && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l)))); break; case 26: var n = Rt; if (at(t, e), lt(e), l & 512 && (qe || a === null || qt(a, a.return)), l & 4) { var i = a !== null ? a.memoizedState : null; if (l = e.memoizedState, a === null) if (l === null) if (e.stateNode === null) { e: { l = e.type, a = e.memoizedProps, n = n.ownerDocument || n; t: switch (l) { case "title": i = n.getElementsByTagName("title")[0], (!i || i[Il] || i[Xe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(l), n.head.insertBefore(i, n.querySelector("head > title"))), $e(i, l, a), i[Xe] = e, Ye(i), l = i; break e; case "link": var s = cm("link", "href", n).get(l + (a.href || "")); if (s) { for (var d = 0; d < s.length; d++)if (i = s[d], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) { s.splice(d, 1); break t } } i = n.createElement(l), $e(i, l, a), n.head.appendChild(i); break; case "meta": if (s = cm("meta", "content", n).get(l + (a.content || ""))) { for (d = 0; d < s.length; d++)if (i = s[d], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) { s.splice(d, 1); break t } } i = n.createElement(l), $e(i, l, a), n.head.appendChild(i); break; default: throw Error(c(468, l)) }i[Xe] = e, Ye(i), l = i } e.stateNode = l } else om(n, e.type, e.stateNode); else e.stateNode = sm(n, l, e.memoizedProps); else i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? om(n, e.type, e.stateNode) : sm(n, l, e.memoizedProps)) : l === null && e.stateNode !== null && rs(e, e.memoizedProps, a.memoizedProps) } break; case 27: at(t, e), lt(e), l & 512 && (qe || a === null || qt(a, a.return)), a !== null && l & 4 && rs(e, e.memoizedProps, a.memoizedProps); break; case 5: if (at(t, e), lt(e), l & 512 && (qe || a === null || qt(a, a.return)), e.flags & 32) { n = e.stateNode; try { cl(n, "") } catch (Q) { ge(e, e.return, Q) } } l & 4 && e.stateNode != null && (n = e.memoizedProps, rs(e, n, a !== null ? a.memoizedProps : n)), l & 1024 && (os = !0); break; case 6: if (at(t, e), lt(e), l & 4) { if (e.stateNode === null) throw Error(c(162)); l = e.memoizedProps, a = e.stateNode; try { a.nodeValue = l } catch (Q) { ge(e, e.return, Q) } } break; case 3: if (uu = null, n = Rt, Rt = nu(t.containerInfo), at(t, e), Rt = n, lt(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try { kl(t.containerInfo) } catch (Q) { ge(e, e.return, Q) } os && (os = !1, od(e)); break; case 4: l = Rt, Rt = nu(e.stateNode.containerInfo), at(t, e), lt(e), Rt = l; break; case 12: at(t, e), lt(e); break; case 31: at(t, e), lt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Vi(e, l))); break; case 13: at(t, e), lt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Zi = ut()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Vi(e, l))); break; case 22: n = e.memoizedState !== null; var y = a !== null && a.memoizedState !== null, z = Pt, R = qe; if (Pt = z || n, qe = R || y, at(t, e), qe = R, Pt = z, lt(e), l & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || y || Pt || qe || el(e)), a = null, t = e; ;) { if (t.tag === 5 || t.tag === 26) { if (a === null) { y = a = t; try { if (i = y.stateNode, n) s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none"; else { d = y.stateNode; var O = y.memoizedProps.style, w = O != null && O.hasOwnProperty("display") ? O.display : null; d.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim() } } catch (Q) { ge(y, y.return, Q) } } } else if (t.tag === 6) { if (a === null) { y = t; try { y.stateNode.nodeValue = n ? "" : y.memoizedProps } catch (Q) { ge(y, y.return, Q) } } } else if (t.tag === 18) { if (a === null) { y = t; try { var A = y.stateNode; n ? Pd(A, !0) : Pd(y.stateNode, !1) } catch (Q) { ge(y, y.return, Q) } } } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break e; for (; t.sibling === null;) { if (t.return === null || t.return === e) break e; a === t && (a = null), t = t.return } a === t && (a = null), t.sibling.return = t.return, t = t.sibling } l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Vi(e, a)))); break; case 19: at(t, e), lt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Vi(e, l))); break; case 30: break; case 21: break; default: at(t, e), lt(e) } } function lt(e) { var t = e.flags; if (t & 2) { try { for (var a, l = e.return; l !== null;) { if (td(l)) { a = l; break } l = l.return } if (a == null) throw Error(c(160)); switch (a.tag) { case 27: var n = a.stateNode, i = ss(e); Xi(e, i, n); break; case 5: var s = a.stateNode; a.flags & 32 && (cl(s, ""), a.flags &= -33); var d = ss(e); Xi(e, d, s); break; case 3: case 4: var y = a.stateNode.containerInfo, z = ss(e); cs(e, z, y); break; default: throw Error(c(161)) } } catch (R) { ge(e, e.return, R) } e.flags &= -3 } t & 4096 && (e.flags &= -4097) } function od(e) { if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) { var t = e; od(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling } } function ta(e, t) { if (t.subtreeFlags & 8772) for (t = t.child; t !== null;)nd(e, t.alternate, t), t = t.sibling } function el(e) { for (e = e.child; e !== null;) { var t = e; switch (t.tag) { case 0: case 11: case 14: case 15: ja(4, t, t.return), el(t); break; case 1: qt(t, t.return); var a = t.stateNode; typeof a.componentWillUnmount == "function" && Pf(t, t.return, a), el(t); break; case 27: Un(t.stateNode); case 26: case 5: qt(t, t.return), el(t); break; case 22: t.memoizedState === null && el(t); break; case 30: el(t); break; default: el(t) }e = e.sibling } } function aa(e, t, a) { for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) { var l = t.alternate, n = e, i = t, s = i.flags; switch (i.tag) { case 0: case 11: case 15: aa(n, i, a), Tn(4, i); break; case 1: if (aa(n, i, a), l = i, n = l.stateNode, typeof n.componentDidMount == "function") try { n.componentDidMount() } catch (z) { ge(l, l.return, z) } if (l = i, n = l.updateQueue, n !== null) { var d = l.stateNode; try { var y = n.shared.hiddenCallbacks; if (y !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)ko(y[n], d) } catch (z) { ge(l, l.return, z) } } a && s & 64 && If(i), zn(i, i.return); break; case 27: ad(i); case 26: case 5: aa(n, i, a), a && l === null && s & 4 && ed(i), zn(i, i.return); break; case 12: aa(n, i, a); break; case 31: aa(n, i, a), a && s & 4 && rd(n, i); break; case 13: aa(n, i, a), a && s & 4 && sd(n, i); break; case 22: i.memoizedState === null && aa(n, i, a), zn(i, i.return); break; case 30: break; default: aa(n, i, a) }t = t.sibling } } function fs(e, t) { var a = null; e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && dn(a)) } function ds(e, t) { e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && dn(e)) } function Mt(e, t, a, l) { if (t.subtreeFlags & 10256) for (t = t.child; t !== null;)fd(e, t, a, l), t = t.sibling } function fd(e, t, a, l) { var n = t.flags; switch (t.tag) { case 0: case 11: case 15: Mt(e, t, a, l), n & 2048 && Tn(9, t); break; case 1: Mt(e, t, a, l); break; case 3: Mt(e, t, a, l), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && dn(e))); break; case 12: if (n & 2048) { Mt(e, t, a, l), e = t.stateNode; try { var i = t.memoizedProps, s = i.id, d = i.onPostCommit; typeof d == "function" && d(s, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0) } catch (y) { ge(t, t.return, y) } } else Mt(e, t, a, l); break; case 31: Mt(e, t, a, l); break; case 13: Mt(e, t, a, l); break; case 23: break; case 22: i = t.stateNode, s = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Mt(e, t, a, l) : Cn(e, t) : i._visibility & 2 ? Mt(e, t, a, l) : (i._visibility |= 2, Al(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && fs(s, t); break; case 24: Mt(e, t, a, l), n & 2048 && ds(t.alternate, t); break; default: Mt(e, t, a, l) } } function Al(e, t, a, l, n) { for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) { var i = e, s = t, d = a, y = l, z = s.flags; switch (s.tag) { case 0: case 11: case 15: Al(i, s, d, y, n), Tn(8, s); break; case 23: break; case 22: var R = s.stateNode; s.memoizedState !== null ? R._visibility & 2 ? Al(i, s, d, y, n) : Cn(i, s) : (R._visibility |= 2, Al(i, s, d, y, n)), n && z & 2048 && fs(s.alternate, s); break; case 24: Al(i, s, d, y, n), n && z & 2048 && ds(s.alternate, s); break; default: Al(i, s, d, y, n) }t = t.sibling } } function Cn(e, t) { if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) { var a = e, l = t, n = l.flags; switch (l.tag) { case 22: Cn(a, l), n & 2048 && fs(l.alternate, l); break; case 24: Cn(a, l), n & 2048 && ds(l.alternate, l); break; default: Cn(a, l) }t = t.sibling } } var wn = 8192; function Rl(e, t, a) { if (e.subtreeFlags & wn) for (e = e.child; e !== null;)dd(e, t, a), e = e.sibling } function dd(e, t, a) { switch (e.tag) { case 26: Rl(e, t, a), e.flags & wn && e.memoizedState !== null && kp(a, Rt, e.memoizedState, e.memoizedProps); break; case 5: Rl(e, t, a); break; case 3: case 4: var l = Rt; Rt = nu(e.stateNode.containerInfo), Rl(e, t, a), Rt = l; break; case 22: e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = wn, wn = 16777216, Rl(e, t, a), wn = l) : Rl(e, t, a)); break; default: Rl(e, t, a) } } function md(e) { var t = e.alternate; if (t !== null && (e = t.child, e !== null)) { t.child = null; do t = e.sibling, e.sibling = null, e = t; while (e !== null) } } function An(e) { var t = e.deletions; if ((e.flags & 16) !== 0) { if (t !== null) for (var a = 0; a < t.length; a++) { var l = t[a]; Ge = l, pd(l, e) } md(e) } if (e.subtreeFlags & 10256) for (e = e.child; e !== null;)hd(e), e = e.sibling } function hd(e) { switch (e.tag) { case 0: case 11: case 15: An(e), e.flags & 2048 && ja(9, e, e.return); break; case 3: An(e); break; case 12: An(e); break; case 22: var t = e.stateNode; e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Qi(e)) : An(e); break; default: An(e) } } function Qi(e) { var t = e.deletions; if ((e.flags & 16) !== 0) { if (t !== null) for (var a = 0; a < t.length; a++) { var l = t[a]; Ge = l, pd(l, e) } md(e) } for (e = e.child; e !== null;) { switch (t = e, t.tag) { case 0: case 11: case 15: ja(8, t, t.return), Qi(t); break; case 22: a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Qi(t)); break; default: Qi(t) }e = e.sibling } } function pd(e, t) { for (; Ge !== null;) { var a = Ge; switch (a.tag) { case 0: case 11: case 15: ja(8, a, t); break; case 23: case 22: if (a.memoizedState !== null && a.memoizedState.cachePool !== null) { var l = a.memoizedState.cachePool.pool; l != null && l.refCount++ } break; case 24: dn(a.memoizedState.cache) }if (l = a.child, l !== null) l.return = a, Ge = l; else e: for (a = e; Ge !== null;) { l = Ge; var n = l.sibling, i = l.return; if (id(l), l === a) { Ge = null; break e } if (n !== null) { n.return = i, Ge = n; break e } Ge = i } } } var tp = { getCacheForType: function (e) { var t = Qe(Be), a = t.data.get(e); return a === void 0 && (a = e(), t.data.set(e, a)), a }, cacheSignal: function () { return Qe(Be).controller.signal } }, ap = typeof WeakMap == "function" ? WeakMap : Map, me = 0, Ee = null, ie = null, re = 0, ye = 0, mt = null, Na = !1, Ml = !1, ms = !1, la = 0, Re = 0, Ea = 0, tl = 0, hs = 0, ht = 0, Dl = 0, Rn = null, nt = null, ps = !1, Zi = 0, yd = 0, $i = 1 / 0, Ki = null, Ta = null, ke = 0, za = null, _l = null, na = 0, ys = 0, gs = null, gd = null, Mn = 0, vs = null; function pt() { return (me & 2) !== 0 && re !== 0 ? re & -re : D.T !== null ? Es() : Mc() } function vd() { if (ht === 0) if ((re & 536870912) === 0 || ce) { var e = ai; ai <<= 1, (ai & 3932160) === 0 && (ai = 262144), ht = e } else ht = 536870912; return e = ft.current, e !== null && (e.flags |= 32), ht } function it(e, t, a) { (e === Ee && (ye === 2 || ye === 9) || e.cancelPendingCommit !== null) && (Ol(e, 0), Ca(e, re, ht, !1)), Wl(e, a), ((me & 2) === 0 || e !== Ee) && (e === Ee && ((me & 2) === 0 && (tl |= a), Re === 4 && Ca(e, re, ht, !1)), kt(e)) } function xd(e, t, a) { if ((me & 6) !== 0) throw Error(c(327)); var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Fl(e, t), n = l ? ip(e, t) : bs(e, t, !0), i = l; do { if (n === 0) { Ml && !l && Ca(e, t, 0, !1); break } else { if (a = e.current.alternate, i && !lp(a)) { n = bs(e, t, !1), i = !1; continue } if (n === 2) { if (i = t, e.errorRecoveryDisabledLanes & i) var s = 0; else s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0; if (s !== 0) { t = s; e: { var d = e; n = Rn; var y = d.current.memoizedState.isDehydrated; if (y && (Ol(d, s).flags |= 256), s = bs(d, s, !1), s !== 2) { if (ms && !y) { d.errorRecoveryDisabledLanes |= i, tl |= i, n = 4; break e } i = nt, nt = n, i !== null && (nt === null ? nt = i : nt.push.apply(nt, i)) } n = s } if (i = !1, n !== 2) continue } } if (n === 1) { Ol(e, 0), Ca(e, t, 0, !0); break } e: { switch (l = e, i = n, i) { case 0: case 1: throw Error(c(345)); case 4: if ((t & 4194048) !== t) break; case 6: Ca(l, t, ht, !Na); break e; case 2: nt = null; break; case 3: case 5: break; default: throw Error(c(329)) }if ((t & 62914560) === t && (n = Zi + 300 - ut(), 10 < n)) { if (Ca(l, t, ht, !Na), ni(l, 0, !0) !== 0) break e; na = t, l.timeoutHandle = Fd(bd.bind(null, l, a, nt, Ki, ps, t, ht, tl, Dl, Na, i, "Throttled", -0, 0), n); break e } bd(l, a, nt, Ki, ps, t, ht, tl, Dl, Na, i, null, -0, 0) } } break } while (!0); kt(e) } function bd(e, t, a, l, n, i, s, d, y, z, R, O, w, A) { if (e.timeoutHandle = -1, O = t.subtreeFlags, O & 8192 || (O & 16785408) === 16785408) { O = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: Xt }, dd(t, i, O); var Q = (i & 62914560) === i ? Zi - ut() : (i & 4194048) === i ? yd - ut() : 0; if (Q = Yp(O, Q), Q !== null) { na = i, e.cancelPendingCommit = Q(wd.bind(null, e, t, i, a, l, n, s, d, y, R, O, null, w, A)), Ca(e, i, s, !z); return } } wd(e, t, i, a, l, n, s, d, y) } function lp(e) { for (var t = e; ;) { var a = t.tag; if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) { var n = a[l], i = n.getSnapshot; n = n.value; try { if (!ct(i(), n)) return !1 } catch { return !1 } } if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a; else { if (t === e) break; for (; t.sibling === null;) { if (t.return === null || t.return === e) return !0; t = t.return } t.sibling.return = t.return, t = t.sibling } } return !0 } function Ca(e, t, a, l) { t &= ~hs, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes; for (var n = t; 0 < n;) { var i = 31 - st(n), s = 1 << i; l[i] = -1, n &= ~s } a !== 0 && wc(e, a, t) } function Ji() { return (me & 6) === 0 ? (Dn(0), !1) : !0 } function xs() { if (ie !== null) { if (ye === 0) var e = ie.return; else e = ie, $t = Za = null, Ur(e), El = null, hn = 0, e = ie; for (; e !== null;)Wf(e.alternate, e), e = e.return; ie = null } } function Ol(e, t) { var a = e.timeoutHandle; a !== -1 && (e.timeoutHandle = -1, Np(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), na = 0, xs(), Ee = e, ie = a = Qt(e.current, null), re = t, ye = 0, mt = null, Na = !1, Ml = Fl(e, t), ms = !1, Dl = ht = hs = tl = Ea = Re = 0, nt = Rn = null, ps = !1, (t & 8) !== 0 && (t |= t & 32); var l = e.entangledLanes; if (l !== 0) for (e = e.entanglements, l &= t; 0 < l;) { var n = 31 - st(l), i = 1 << n; t |= e[n], l &= ~i } return la = t, yi(), a } function Sd(e, t) { ee = null, D.H = jn, t === Nl || t === Ei ? (t = Bo(), ye = 3) : t === Nr ? (t = Bo(), ye = 4) : ye = t === Wr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, mt = t, ie === null && (Re = 1, Li(e, St(t, e.current))) } function jd() { var e = ft.current; return e === null ? !0 : (re & 4194048) === re ? Tt === null : (re & 62914560) === re || (re & 536870912) !== 0 ? e === Tt : !1 } function Nd() { var e = D.H; return D.H = jn, e === null ? jn : e } function Ed() { var e = D.A; return D.A = tp, e } function Fi() { Re = 4, Na || (re & 4194048) !== re && ft.current !== null || (Ml = !0), (Ea & 134217727) === 0 && (tl & 134217727) === 0 || Ee === null || Ca(Ee, re, ht, !1) } function bs(e, t, a) { var l = me; me |= 2; var n = Nd(), i = Ed(); (Ee !== e || re !== t) && (Ki = null, Ol(e, t)), t = !1; var s = Re; e: do try { if (ye !== 0 && ie !== null) { var d = ie, y = mt; switch (ye) { case 8: xs(), s = 6; break e; case 3: case 2: case 9: case 6: ft.current === null && (t = !0); var z = ye; if (ye = 0, mt = null, Ul(e, d, y, z), a && Ml) { s = 0; break e } break; default: z = ye, ye = 0, mt = null, Ul(e, d, y, z) } } np(), s = Re; break } catch (R) { Sd(e, R) } while (!0); return t && e.shellSuspendCounter++, $t = Za = null, me = l, D.H = n, D.A = i, ie === null && (Ee = null, re = 0, yi()), s } function np() { for (; ie !== null;)Td(ie) } function ip(e, t) { var a = me; me |= 2; var l = Nd(), n = Ed(); Ee !== e || re !== t ? (Ki = null, $i = ut() + 500, Ol(e, t)) : Ml = Fl(e, t); e: do try { if (ye !== 0 && ie !== null) { t = ie; var i = mt; t: switch (ye) { case 1: ye = 0, mt = null, Ul(e, t, i, 1); break; case 2: case 9: if (Oo(i)) { ye = 0, mt = null, zd(t); break } t = function () { ye !== 2 && ye !== 9 || Ee !== e || (ye = 7), kt(e) }, i.then(t, t); break e; case 3: ye = 7; break e; case 4: ye = 5; break e; case 7: Oo(i) ? (ye = 0, mt = null, zd(t)) : (ye = 0, mt = null, Ul(e, t, i, 7)); break; case 5: var s = null; switch (ie.tag) { case 26: s = ie.memoizedState; case 5: case 27: var d = ie; if (s ? fm(s) : d.stateNode.complete) { ye = 0, mt = null; var y = d.sibling; if (y !== null) ie = y; else { var z = d.return; z !== null ? (ie = z, Wi(z)) : ie = null } break t } }ye = 0, mt = null, Ul(e, t, i, 5); break; case 6: ye = 0, mt = null, Ul(e, t, i, 6); break; case 8: xs(), Re = 6; break e; default: throw Error(c(462)) } } up(); break } catch (R) { Sd(e, R) } while (!0); return $t = Za = null, D.H = l, D.A = n, me = a, ie !== null ? 0 : (Ee = null, re = 0, yi(), Re) } function up() { for (; ie !== null && !A0();)Td(ie) } function Td(e) { var t = Jf(e.alternate, e, la); e.memoizedProps = e.pendingProps, t === null ? Wi(e) : ie = t } function zd(e) { var t = e, a = t.alternate; switch (t.tag) { case 15: case 0: t = Xf(a, t, t.pendingProps, t.type, void 0, re); break; case 11: t = Xf(a, t, t.pendingProps, t.type.render, t.ref, re); break; case 5: Ur(t); default: Wf(a, t), t = ie = No(t, la), t = Jf(a, t, la) }e.memoizedProps = e.pendingProps, t === null ? Wi(e) : ie = t } function Ul(e, t, a, l) { $t = Za = null, Ur(t), El = null, hn = 0; var n = t.return; try { if (Kh(e, n, t, a, re)) { Re = 1, Li(e, St(a, e.current)), ie = null; return } } catch (i) { if (n !== null) throw ie = n, i; Re = 1, Li(e, St(a, e.current)), ie = null; return } t.flags & 32768 ? (ce || l === 1 ? e = !0 : Ml || (re & 536870912) !== 0 ? e = !1 : (Na = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = ft.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Cd(t, e)) : Wi(t) } function Wi(e) { var t = e; do { if ((t.flags & 32768) !== 0) { Cd(t, Na); return } e = t.return; var a = Wh(t.alternate, t, la); if (a !== null) { ie = a; return } if (t = t.sibling, t !== null) { ie = t; return } ie = t = e } while (t !== null); Re === 0 && (Re = 5) } function Cd(e, t) { do { var a = Ih(e.alternate, e); if (a !== null) { a.flags &= 32767, ie = a; return } if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) { ie = e; return } ie = e = a } while (e !== null); Re = 6, ie = null } function wd(e, t, a, l, n, i, s, d, y) { e.cancelPendingCommit = null; do Ii(); while (ke !== 0); if ((me & 6) !== 0) throw Error(c(327)); if (t !== null) { if (t === e.current) throw Error(c(177)); if (i = t.lanes | t.childLanes, i |= sr, q0(e, a, i, s, d, y), e === Ee && (ie = Ee = null, re = 0), _l = t, za = e, na = a, ys = i, gs = n, gd = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, op(ei, function () { return _d(), null })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) { l = D.T, D.T = null, n = Y.p, Y.p = 2, s = me, me |= 4; try { Ph(e, t, a) } finally { me = s, Y.p = n, D.T = l } } ke = 1, Ad(), Rd(), Md() } } function Ad() { if (ke === 1) { ke = 0; var e = za, t = _l, a = (t.flags & 13878) !== 0; if ((t.subtreeFlags & 13878) !== 0 || a) { a = D.T, D.T = null; var l = Y.p; Y.p = 2; var n = me; me |= 4; try { cd(t, e); var i = Ds, s = ho(e.containerInfo), d = i.focusedElem, y = i.selectionRange; if (s !== d && d && d.ownerDocument && mo(d.ownerDocument.documentElement, d)) { if (y !== null && lr(d)) { var z = y.start, R = y.end; if (R === void 0 && (R = z), "selectionStart" in d) d.selectionStart = z, d.selectionEnd = Math.min(R, d.value.length); else { var O = d.ownerDocument || document, w = O && O.defaultView || window; if (w.getSelection) { var A = w.getSelection(), Q = d.textContent.length, J = Math.min(y.start, Q), je = y.end === void 0 ? J : Math.min(y.end, Q); !A.extend && J > je && (s = je, je = J, J = s); var N = fo(d, J), x = fo(d, je); if (N && x && (A.rangeCount !== 1 || A.anchorNode !== N.node || A.anchorOffset !== N.offset || A.focusNode !== x.node || A.focusOffset !== x.offset)) { var T = O.createRange(); T.setStart(N.node, N.offset), A.removeAllRanges(), J > je ? (A.addRange(T), A.extend(x.node, x.offset)) : (T.setEnd(x.node, x.offset), A.addRange(T)) } } } } for (O = [], A = d; A = A.parentNode;)A.nodeType === 1 && O.push({ element: A, left: A.scrollLeft, top: A.scrollTop }); for (typeof d.focus == "function" && d.focus(), d = 0; d < O.length; d++) { var _ = O[d]; _.element.scrollLeft = _.left, _.element.scrollTop = _.top } } ou = !!Ms, Ds = Ms = null } finally { me = n, Y.p = l, D.T = a } } e.current = t, ke = 2 } } function Rd() { if (ke === 2) { ke = 0; var e = za, t = _l, a = (t.flags & 8772) !== 0; if ((t.subtreeFlags & 8772) !== 0 || a) { a = D.T, D.T = null; var l = Y.p; Y.p = 2; var n = me; me |= 4; try { nd(e, t.alternate, t) } finally { me = n, Y.p = l, D.T = a } } ke = 3 } } function Md() { if (ke === 4 || ke === 3) { ke = 0, R0(); var e = za, t = _l, a = na, l = gd; (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ke = 5 : (ke = 0, _l = za = null, Dd(e, e.pendingLanes)); var n = e.pendingLanes; if (n === 0 && (Ta = null), Lu(a), t = t.stateNode, rt && typeof rt.onCommitFiberRoot == "function") try { rt.onCommitFiberRoot(Jl, t, void 0, (t.current.flags & 128) === 128) } catch { } if (l !== null) { t = D.T, n = Y.p, Y.p = 2, D.T = null; try { for (var i = e.onRecoverableError, s = 0; s < l.length; s++) { var d = l[s]; i(d.value, { componentStack: d.stack }) } } finally { D.T = t, Y.p = n } } (na & 3) !== 0 && Ii(), kt(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === vs ? Mn++ : (Mn = 0, vs = e) : Mn = 0, Dn(0) } } function Dd(e, t) { (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, dn(t))) } function Ii() { return Ad(), Rd(), Md(), _d() } function _d() { if (ke !== 5) return !1; var e = za, t = ys; ys = 0; var a = Lu(na), l = D.T, n = Y.p; try { Y.p = 32 > a ? 32 : a, D.T = null, a = gs, gs = null; var i = za, s = na; if (ke = 0, _l = za = null, na = 0, (me & 6) !== 0) throw Error(c(331)); var d = me; if (me |= 4, hd(i.current), fd(i, i.current, s, a), me = d, Dn(0, !1), rt && typeof rt.onPostCommitFiberRoot == "function") try { rt.onPostCommitFiberRoot(Jl, i) } catch { } return !0 } finally { Y.p = n, D.T = l, Dd(e, t) } } function Od(e, t, a) { t = St(a, t), t = Fr(e.stateNode, t, 2), e = xa(e, t, 2), e !== null && (Wl(e, 2), kt(e)) } function ge(e, t, a) { if (e.tag === 3) Od(e, e, a); else for (; t !== null;) { if (t.tag === 3) { Od(t, e, a); break } else if (t.tag === 1) { var l = t.stateNode; if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ta === null || !Ta.has(l))) { e = St(a, e), a = Uf(2), l = xa(t, a, 2), l !== null && (Bf(a, l, t, e), Wl(l, 2), kt(l)); break } } t = t.return } } function Ss(e, t, a) { var l = e.pingCache; if (l === null) { l = e.pingCache = new ap; var n = new Set; l.set(t, n) } else n = l.get(t), n === void 0 && (n = new Set, l.set(t, n)); n.has(a) || (ms = !0, n.add(a), e = rp.bind(null, e, t, a), t.then(e, e)) } function rp(e, t, a) { var l = e.pingCache; l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ee === e && (re & a) === a && (Re === 4 || Re === 3 && (re & 62914560) === re && 300 > ut() - Zi ? (me & 2) === 0 && Ol(e, 0) : hs |= a, Dl === re && (Dl = 0)), kt(e) } function Ud(e, t) { t === 0 && (t = Cc()), e = Xa(e, t), e !== null && (Wl(e, t), kt(e)) } function sp(e) { var t = e.memoizedState, a = 0; t !== null && (a = t.retryLane), Ud(e, a) } function cp(e, t) { var a = 0; switch (e.tag) { case 31: case 13: var l = e.stateNode, n = e.memoizedState; n !== null && (a = n.retryLane); break; case 19: l = e.stateNode; break; case 22: l = e.stateNode._retryCache; break; default: throw Error(c(314)) }l !== null && l.delete(t), Ud(e, a) } function op(e, t) { return Ou(e, t) } var Pi = null, Bl = null, js = !1, eu = !1, Ns = !1, wa = 0; function kt(e) { e !== Bl && e.next === null && (Bl === null ? Pi = Bl = e : Bl = Bl.next = e), eu = !0, js || (js = !0, dp()) } function Dn(e, t) { if (!Ns && eu) { Ns = !0; do for (var a = !1, l = Pi; l !== null;) { if (e !== 0) { var n = l.pendingLanes; if (n === 0) var i = 0; else { var s = l.suspendedLanes, d = l.pingedLanes; i = (1 << 31 - st(42 | e) + 1) - 1, i &= n & ~(s & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0 } i !== 0 && (a = !0, qd(l, i)) } else i = re, i = ni(l, l === Ee ? i : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (i & 3) === 0 || Fl(l, i) || (a = !0, qd(l, i)); l = l.next } while (a); Ns = !1 } } function fp() { Bd() } function Bd() { eu = js = !1; var e = 0; wa !== 0 && jp() && (e = wa); for (var t = ut(), a = null, l = Pi; l !== null;) { var n = l.next, i = Hd(l, t); i === 0 ? (l.next = null, a === null ? Pi = n : a.next = n, n === null && (Bl = a)) : (a = l, (e !== 0 || (i & 3) !== 0) && (eu = !0)), l = n } ke !== 0 && ke !== 5 || Dn(e), wa !== 0 && (wa = 0) } function Hd(e, t) { for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;) { var s = 31 - st(i), d = 1 << s, y = n[s]; y === -1 ? ((d & a) === 0 || (d & l) !== 0) && (n[s] = L0(d, t)) : y <= t && (e.expiredLanes |= d), i &= ~d } if (t = Ee, a = re, a = ni(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, a === 0 || e === t && (ye === 2 || ye === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Uu(l), e.callbackNode = null, e.callbackPriority = 0; if ((a & 3) === 0 || Fl(e, a)) { if (t = a & -a, t === e.callbackPriority) return t; switch (l !== null && Uu(l), Lu(a)) { case 2: case 8: a = Tc; break; case 32: a = ei; break; case 268435456: a = zc; break; default: a = ei }return l = Ld.bind(null, e), a = Ou(a, l), e.callbackPriority = t, e.callbackNode = a, t } return l !== null && l !== null && Uu(l), e.callbackPriority = 2, e.callbackNode = null, 2 } function Ld(e, t) { if (ke !== 0 && ke !== 5) return e.callbackNode = null, e.callbackPriority = 0, null; var a = e.callbackNode; if (Ii() && e.callbackNode !== a) return null; var l = re; return l = ni(e, e === Ee ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (xd(e, l, t), Hd(e, ut()), e.callbackNode != null && e.callbackNode === a ? Ld.bind(null, e) : null) } function qd(e, t) { if (Ii()) return null; xd(e, t, !0) } function dp() { Ep(function () { (me & 6) !== 0 ? Ou(Ec, fp) : Bd() }) } function Es() { if (wa === 0) { var e = Sl; e === 0 && (e = ti, ti <<= 1, (ti & 261888) === 0 && (ti = 256)), wa = e } return wa } function kd(e) { return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : si("" + e) } function Yd(e, t) { var a = t.ownerDocument.createElement("input"); return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e } function mp(e, t, a, l, n) { if (t === "submit" && a && a.stateNode === n) { var i = kd((n[Pe] || null).action), s = l.submitter; s && (t = (t = s[Pe] || null) ? kd(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null)); var d = new di("action", "action", null, l, n); e.push({ event: d, listeners: [{ instance: null, listener: function () { if (l.defaultPrevented) { if (wa !== 0) { var y = s ? Yd(n, s) : new FormData(n); Vr(a, { pending: !0, data: y, method: n.method, action: i }, null, y) } } else typeof i == "function" && (d.preventDefault(), y = s ? Yd(n, s) : new FormData(n), Vr(a, { pending: !0, data: y, method: n.method, action: i }, i, y)) }, currentTarget: n }] }) } } for (var Ts = 0; Ts < rr.length; Ts++) { var zs = rr[Ts], hp = zs.toLowerCase(), pp = zs[0].toUpperCase() + zs.slice(1); At(hp, "on" + pp) } At(go, "onAnimationEnd"), At(vo, "onAnimationIteration"), At(xo, "onAnimationStart"), At("dblclick", "onDoubleClick"), At("focusin", "onFocus"), At("focusout", "onBlur"), At(Mh, "onTransitionRun"), At(Dh, "onTransitionStart"), At(_h, "onTransitionCancel"), At(bo, "onTransitionEnd"), rl("onMouseEnter", ["mouseout", "mouseover"]), rl("onMouseLeave", ["mouseout", "mouseover"]), rl("onPointerEnter", ["pointerout", "pointerover"]), rl("onPointerLeave", ["pointerout", "pointerover"]), qa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), qa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), qa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), qa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), qa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), qa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var _n = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yp = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_n)); function Gd(e, t) { t = (t & 4) !== 0; for (var a = 0; a < e.length; a++) { var l = e[a], n = l.event; l = l.listeners; e: { var i = void 0; if (t) for (var s = l.length - 1; 0 <= s; s--) { var d = l[s], y = d.instance, z = d.currentTarget; if (d = d.listener, y !== i && n.isPropagationStopped()) break e; i = d, n.currentTarget = z; try { i(n) } catch (R) { pi(R) } n.currentTarget = null, i = y } else for (s = 0; s < l.length; s++) { if (d = l[s], y = d.instance, z = d.currentTarget, d = d.listener, y !== i && n.isPropagationStopped()) break e; i = d, n.currentTarget = z; try { i(n) } catch (R) { pi(R) } n.currentTarget = null, i = y } } } } function ue(e, t) { var a = t[qu]; a === void 0 && (a = t[qu] = new Set); var l = e + "__bubble"; a.has(l) || (Xd(t, e, 2, !1), a.add(l)) } function Cs(e, t, a) { var l = 0; t && (l |= 4), Xd(a, e, l, t) } var tu = "_reactListening" + Math.random().toString(36).slice(2); function ws(e) { if (!e[tu]) { e[tu] = !0, Oc.forEach(function (a) { a !== "selectionchange" && (yp.has(a) || Cs(a, !1, e), Cs(a, !0, e)) }); var t = e.nodeType === 9 ? e : e.ownerDocument; t === null || t[tu] || (t[tu] = !0, Cs("selectionchange", !1, t)) } } function Xd(e, t, a, l) { switch (vm(t)) { case 2: var n = Vp; break; case 8: n = Qp; break; default: n = Xs }a = n.bind(null, t, a, e), n = void 0, !Ku || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, { capture: !0, passive: n }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, { passive: n }) : e.addEventListener(t, a, !1) } function As(e, t, a, l, n) { var i = l; if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (; ;) { if (l === null) return; var s = l.tag; if (s === 3 || s === 4) { var d = l.stateNode.containerInfo; if (d === n) break; if (s === 4) for (s = l.return; s !== null;) { var y = s.tag; if ((y === 3 || y === 4) && s.stateNode.containerInfo === n) return; s = s.return } for (; d !== null;) { if (s = nl(d), s === null) return; if (y = s.tag, y === 5 || y === 6 || y === 26 || y === 27) { l = i = s; continue e } d = d.parentNode } } l = l.return } Zc(function () { var z = i, R = Zu(a), O = []; e: { var w = So.get(e); if (w !== void 0) { var A = di, Q = e; switch (e) { case "keypress": if (oi(a) === 0) break e; case "keydown": case "keyup": A = ch; break; case "focusin": Q = "focus", A = Iu; break; case "focusout": Q = "blur", A = Iu; break; case "beforeblur": case "afterblur": A = Iu; break; case "click": if (a.button === 2) break e; case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": A = Jc; break; case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": A = W0; break; case "touchcancel": case "touchend": case "touchmove": case "touchstart": A = dh; break; case go: case vo: case xo: A = eh; break; case bo: A = hh; break; case "scroll": case "scrollend": A = J0; break; case "wheel": A = yh; break; case "copy": case "cut": case "paste": A = ah; break; case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": A = Wc; break; case "toggle": case "beforetoggle": A = vh }var J = (t & 4) !== 0, je = !J && (e === "scroll" || e === "scrollend"), N = J ? w !== null ? w + "Capture" : null : w; J = []; for (var x = z, T; x !== null;) { var _ = x; if (T = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || T === null || N === null || (_ = en(x, N), _ != null && J.push(On(x, _, T))), je) break; x = x.return } 0 < J.length && (w = new A(w, Q, null, a, R), O.push({ event: w, listeners: J })) } } if ((t & 7) === 0) { e: { if (w = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", w && a !== Qu && (Q = a.relatedTarget || a.fromElement) && (nl(Q) || Q[ll])) break e; if ((A || w) && (w = R.window === R ? R : (w = R.ownerDocument) ? w.defaultView || w.parentWindow : window, A ? (Q = a.relatedTarget || a.toElement, A = z, Q = Q ? nl(Q) : null, Q !== null && (je = h(Q), J = Q.tag, Q !== je || J !== 5 && J !== 27 && J !== 6) && (Q = null)) : (A = null, Q = z), A !== Q)) { if (J = Jc, _ = "onMouseLeave", N = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (J = Wc, _ = "onPointerLeave", N = "onPointerEnter", x = "pointer"), je = A == null ? w : Pl(A), T = Q == null ? w : Pl(Q), w = new J(_, x + "leave", A, a, R), w.target = je, w.relatedTarget = T, _ = null, nl(R) === z && (J = new J(N, x + "enter", Q, a, R), J.target = T, J.relatedTarget = je, _ = J), je = _, A && Q) t: { for (J = gp, N = A, x = Q, T = 0, _ = N; _; _ = J(_))T++; _ = 0; for (var K = x; K; K = J(K))_++; for (; 0 < T - _;)N = J(N), T--; for (; 0 < _ - T;)x = J(x), _--; for (; T--;) { if (N === x || x !== null && N === x.alternate) { J = N; break t } N = J(N), x = J(x) } J = null } else J = null; A !== null && Vd(O, w, A, J, !1), Q !== null && je !== null && Vd(O, je, Q, J, !0) } } e: { if (w = z ? Pl(z) : window, A = w.nodeName && w.nodeName.toLowerCase(), A === "select" || A === "input" && w.type === "file") var fe = io; else if (lo(w)) if (uo) fe = wh; else { fe = zh; var $ = Th } else A = w.nodeName, !A || A.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? z && Vu(z.elementType) && (fe = io) : fe = Ch; if (fe && (fe = fe(e, z))) { no(O, fe, a, R); break e } $ && $(e, w, z), e === "focusout" && z && w.type === "number" && z.memoizedProps.value != null && Xu(w, "number", w.value) } switch ($ = z ? Pl(z) : window, e) { case "focusin": (lo($) || $.contentEditable === "true") && (ml = $, nr = z, cn = null); break; case "focusout": cn = nr = ml = null; break; case "mousedown": ir = !0; break; case "contextmenu": case "mouseup": case "dragend": ir = !1, po(O, a, R); break; case "selectionchange": if (Rh) break; case "keydown": case "keyup": po(O, a, R) }var ae; if (er) e: { switch (e) { case "compositionstart": var se = "onCompositionStart"; break e; case "compositionend": se = "onCompositionEnd"; break e; case "compositionupdate": se = "onCompositionUpdate"; break e }se = void 0 } else dl ? to(e, a) && (se = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (se = "onCompositionStart"); se && (Ic && a.locale !== "ko" && (dl || se !== "onCompositionStart" ? se === "onCompositionEnd" && dl && (ae = $c()) : (da = R, Ju = "value" in da ? da.value : da.textContent, dl = !0)), $ = au(z, se), 0 < $.length && (se = new Fc(se, e, null, a, R), O.push({ event: se, listeners: $ }), ae ? se.data = ae : (ae = ao(a), ae !== null && (se.data = ae)))), (ae = bh ? Sh(e, a) : jh(e, a)) && (se = au(z, "onBeforeInput"), 0 < se.length && ($ = new Fc("onBeforeInput", "beforeinput", null, a, R), O.push({ event: $, listeners: se }), $.data = ae)), mp(O, e, z, a, R) } Gd(O, t) }) } function On(e, t, a) { return { instance: e, listener: t, currentTarget: a } } function au(e, t) { for (var a = t + "Capture", l = []; e !== null;) { var n = e, i = n.stateNode; if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = en(e, a), n != null && l.unshift(On(e, n, i)), n = en(e, t), n != null && l.push(On(e, n, i))), e.tag === 3) return l; e = e.return } return [] } function gp(e) { if (e === null) return null; do e = e.return; while (e && e.tag !== 5 && e.tag !== 27); return e || null } function Vd(e, t, a, l, n) { for (var i = t._reactName, s = []; a !== null && a !== l;) { var d = a, y = d.alternate, z = d.stateNode; if (d = d.tag, y !== null && y === l) break; d !== 5 && d !== 26 && d !== 27 || z === null || (y = z, n ? (z = en(a, i), z != null && s.unshift(On(a, z, y))) : n || (z = en(a, i), z != null && s.push(On(a, z, y)))), a = a.return } s.length !== 0 && e.push({ event: t, listeners: s }) } var vp = /\r\n?/g, xp = /\u0000|\uFFFD/g; function Qd(e) {
    return (typeof e == "string" ? e : "" + e).replace(vp, `
`).replace(xp, "")
  } function Zd(e, t) { return t = Qd(t), Qd(e) === t } function Se(e, t, a, l, n, i) { switch (a) { case "children": typeof l == "string" ? t === "body" || t === "textarea" && l === "" || cl(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && cl(e, "" + l); break; case "className": ui(e, "class", l); break; case "tabIndex": ui(e, "tabindex", l); break; case "dir": case "role": case "viewBox": case "width": case "height": ui(e, a, l); break; case "style": Vc(e, l, i); break; case "data": if (t !== "object") { ui(e, "data", l); break } case "src": case "href": if (l === "" && (t !== "a" || a !== "href")) { e.removeAttribute(a); break } if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") { e.removeAttribute(a); break } l = si("" + l), e.setAttribute(a, l); break; case "action": case "formAction": if (typeof l == "function") { e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"); break } else typeof i == "function" && (a === "formAction" ? (t !== "input" && Se(e, t, "name", n.name, n, null), Se(e, t, "formEncType", n.formEncType, n, null), Se(e, t, "formMethod", n.formMethod, n, null), Se(e, t, "formTarget", n.formTarget, n, null)) : (Se(e, t, "encType", n.encType, n, null), Se(e, t, "method", n.method, n, null), Se(e, t, "target", n.target, n, null))); if (l == null || typeof l == "symbol" || typeof l == "boolean") { e.removeAttribute(a); break } l = si("" + l), e.setAttribute(a, l); break; case "onClick": l != null && (e.onclick = Xt); break; case "onScroll": l != null && ue("scroll", e); break; case "onScrollEnd": l != null && ue("scrollend", e); break; case "dangerouslySetInnerHTML": if (l != null) { if (typeof l != "object" || !("__html" in l)) throw Error(c(61)); if (a = l.__html, a != null) { if (n.children != null) throw Error(c(60)); e.innerHTML = a } } break; case "multiple": e.multiple = l && typeof l != "function" && typeof l != "symbol"; break; case "muted": e.muted = l && typeof l != "function" && typeof l != "symbol"; break; case "suppressContentEditableWarning": case "suppressHydrationWarning": case "defaultValue": case "defaultChecked": case "innerHTML": case "ref": break; case "autoFocus": break; case "xlinkHref": if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") { e.removeAttribute("xlink:href"); break } a = si("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a); break; case "contentEditable": case "spellCheck": case "draggable": case "value": case "autoReverse": case "externalResourcesRequired": case "focusable": case "preserveAlpha": l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a); break; case "inert": case "allowFullScreen": case "async": case "autoPlay": case "controls": case "default": case "defer": case "disabled": case "disablePictureInPicture": case "disableRemotePlayback": case "formNoValidate": case "hidden": case "loop": case "noModule": case "noValidate": case "open": case "playsInline": case "readOnly": case "required": case "reversed": case "scoped": case "seamless": case "itemScope": l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a); break; case "capture": case "download": l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a); break; case "cols": case "rows": case "size": case "span": l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a); break; case "rowSpan": case "start": l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l); break; case "popover": ue("beforetoggle", e), ue("toggle", e), ii(e, "popover", l); break; case "xlinkActuate": Gt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l); break; case "xlinkArcrole": Gt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l); break; case "xlinkRole": Gt(e, "http://www.w3.org/1999/xlink", "xlink:role", l); break; case "xlinkShow": Gt(e, "http://www.w3.org/1999/xlink", "xlink:show", l); break; case "xlinkTitle": Gt(e, "http://www.w3.org/1999/xlink", "xlink:title", l); break; case "xlinkType": Gt(e, "http://www.w3.org/1999/xlink", "xlink:type", l); break; case "xmlBase": Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l); break; case "xmlLang": Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l); break; case "xmlSpace": Gt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l); break; case "is": ii(e, "is", l); break; case "innerText": case "textContent": break; default: (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = $0.get(a) || a, ii(e, a, l)) } } function Rs(e, t, a, l, n, i) { switch (a) { case "style": Vc(e, l, i); break; case "dangerouslySetInnerHTML": if (l != null) { if (typeof l != "object" || !("__html" in l)) throw Error(c(61)); if (a = l.__html, a != null) { if (n.children != null) throw Error(c(60)); e.innerHTML = a } } break; case "children": typeof l == "string" ? cl(e, l) : (typeof l == "number" || typeof l == "bigint") && cl(e, "" + l); break; case "onScroll": l != null && ue("scroll", e); break; case "onScrollEnd": l != null && ue("scrollend", e); break; case "onClick": l != null && (e.onclick = Xt); break; case "suppressContentEditableWarning": case "suppressHydrationWarning": case "innerHTML": case "ref": break; case "innerText": case "textContent": break; default: if (!Uc.hasOwnProperty(a)) e: { if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), i = e[Pe] || null, i = i != null ? i[a] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof l == "function")) { typeof i != "function" && i !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n); break e } a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : ii(e, a, l) } } } function $e(e, t, a) { switch (t) { case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break; case "img": ue("error", e), ue("load", e); var l = !1, n = !1, i; for (i in a) if (a.hasOwnProperty(i)) { var s = a[i]; if (s != null) switch (i) { case "src": l = !0; break; case "srcSet": n = !0; break; case "children": case "dangerouslySetInnerHTML": throw Error(c(137, t)); default: Se(e, t, i, s, a, null) } } n && Se(e, t, "srcSet", a.srcSet, a, null), l && Se(e, t, "src", a.src, a, null); return; case "input": ue("invalid", e); var d = i = s = n = null, y = null, z = null; for (l in a) if (a.hasOwnProperty(l)) { var R = a[l]; if (R != null) switch (l) { case "name": n = R; break; case "type": s = R; break; case "checked": y = R; break; case "defaultChecked": z = R; break; case "value": i = R; break; case "defaultValue": d = R; break; case "children": case "dangerouslySetInnerHTML": if (R != null) throw Error(c(137, t)); break; default: Se(e, t, l, R, a, null) } } kc(e, i, d, y, z, s, n, !1); return; case "select": ue("invalid", e), l = s = i = null; for (n in a) if (a.hasOwnProperty(n) && (d = a[n], d != null)) switch (n) { case "value": i = d; break; case "defaultValue": s = d; break; case "multiple": l = d; default: Se(e, t, n, d, a, null) }t = i, a = s, e.multiple = !!l, t != null ? sl(e, !!l, t, !1) : a != null && sl(e, !!l, a, !0); return; case "textarea": ue("invalid", e), i = n = l = null; for (s in a) if (a.hasOwnProperty(s) && (d = a[s], d != null)) switch (s) { case "value": l = d; break; case "defaultValue": n = d; break; case "children": i = d; break; case "dangerouslySetInnerHTML": if (d != null) throw Error(c(91)); break; default: Se(e, t, s, d, a, null) }Gc(e, l, n, i); return; case "option": for (y in a) if (a.hasOwnProperty(y) && (l = a[y], l != null)) switch (y) { case "selected": e.selected = l && typeof l != "function" && typeof l != "symbol"; break; default: Se(e, t, y, l, a, null) }return; case "dialog": ue("beforetoggle", e), ue("toggle", e), ue("cancel", e), ue("close", e); break; case "iframe": case "object": ue("load", e); break; case "video": case "audio": for (l = 0; l < _n.length; l++)ue(_n[l], e); break; case "image": ue("error", e), ue("load", e); break; case "details": ue("toggle", e); break; case "embed": case "source": case "link": ue("error", e), ue("load", e); case "area": case "base": case "br": case "col": case "hr": case "keygen": case "meta": case "param": case "track": case "wbr": case "menuitem": for (z in a) if (a.hasOwnProperty(z) && (l = a[z], l != null)) switch (z) { case "children": case "dangerouslySetInnerHTML": throw Error(c(137, t)); default: Se(e, t, z, l, a, null) }return; default: if (Vu(t)) { for (R in a) a.hasOwnProperty(R) && (l = a[R], l !== void 0 && Rs(e, t, R, l, a, void 0)); return } }for (d in a) a.hasOwnProperty(d) && (l = a[d], l != null && Se(e, t, d, l, a, null)) } function bp(e, t, a, l) { switch (t) { case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break; case "input": var n = null, i = null, s = null, d = null, y = null, z = null, R = null; for (A in a) { var O = a[A]; if (a.hasOwnProperty(A) && O != null) switch (A) { case "checked": break; case "value": break; case "defaultValue": y = O; default: l.hasOwnProperty(A) || Se(e, t, A, null, l, O) } } for (var w in l) { var A = l[w]; if (O = a[w], l.hasOwnProperty(w) && (A != null || O != null)) switch (w) { case "type": i = A; break; case "name": n = A; break; case "checked": z = A; break; case "defaultChecked": R = A; break; case "value": s = A; break; case "defaultValue": d = A; break; case "children": case "dangerouslySetInnerHTML": if (A != null) throw Error(c(137, t)); break; default: A !== O && Se(e, t, w, A, l, O) } } Gu(e, s, d, y, z, R, i, n); return; case "select": A = s = d = w = null; for (i in a) if (y = a[i], a.hasOwnProperty(i) && y != null) switch (i) { case "value": break; case "multiple": A = y; default: l.hasOwnProperty(i) || Se(e, t, i, null, l, y) }for (n in l) if (i = l[n], y = a[n], l.hasOwnProperty(n) && (i != null || y != null)) switch (n) { case "value": w = i; break; case "defaultValue": d = i; break; case "multiple": s = i; default: i !== y && Se(e, t, n, i, l, y) }t = d, a = s, l = A, w != null ? sl(e, !!a, w, !1) : !!l != !!a && (t != null ? sl(e, !!a, t, !0) : sl(e, !!a, a ? [] : "", !1)); return; case "textarea": A = w = null; for (d in a) if (n = a[d], a.hasOwnProperty(d) && n != null && !l.hasOwnProperty(d)) switch (d) { case "value": break; case "children": break; default: Se(e, t, d, null, l, n) }for (s in l) if (n = l[s], i = a[s], l.hasOwnProperty(s) && (n != null || i != null)) switch (s) { case "value": w = n; break; case "defaultValue": A = n; break; case "children": break; case "dangerouslySetInnerHTML": if (n != null) throw Error(c(91)); break; default: n !== i && Se(e, t, s, n, l, i) }Yc(e, w, A); return; case "option": for (var Q in a) if (w = a[Q], a.hasOwnProperty(Q) && w != null && !l.hasOwnProperty(Q)) switch (Q) { case "selected": e.selected = !1; break; default: Se(e, t, Q, null, l, w) }for (y in l) if (w = l[y], A = a[y], l.hasOwnProperty(y) && w !== A && (w != null || A != null)) switch (y) { case "selected": e.selected = w && typeof w != "function" && typeof w != "symbol"; break; default: Se(e, t, y, w, l, A) }return; case "img": case "link": case "area": case "base": case "br": case "col": case "embed": case "hr": case "keygen": case "meta": case "param": case "source": case "track": case "wbr": case "menuitem": for (var J in a) w = a[J], a.hasOwnProperty(J) && w != null && !l.hasOwnProperty(J) && Se(e, t, J, null, l, w); for (z in l) if (w = l[z], A = a[z], l.hasOwnProperty(z) && w !== A && (w != null || A != null)) switch (z) { case "children": case "dangerouslySetInnerHTML": if (w != null) throw Error(c(137, t)); break; default: Se(e, t, z, w, l, A) }return; default: if (Vu(t)) { for (var je in a) w = a[je], a.hasOwnProperty(je) && w !== void 0 && !l.hasOwnProperty(je) && Rs(e, t, je, void 0, l, w); for (R in l) w = l[R], A = a[R], !l.hasOwnProperty(R) || w === A || w === void 0 && A === void 0 || Rs(e, t, R, w, l, A); return } }for (var N in a) w = a[N], a.hasOwnProperty(N) && w != null && !l.hasOwnProperty(N) && Se(e, t, N, null, l, w); for (O in l) w = l[O], A = a[O], !l.hasOwnProperty(O) || w === A || w == null && A == null || Se(e, t, O, w, l, A) } function $d(e) { switch (e) { case "css": case "script": case "font": case "img": case "image": case "input": case "link": return !0; default: return !1 } } function Sp() { if (typeof performance.getEntriesByType == "function") { for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) { var n = a[l], i = n.transferSize, s = n.initiatorType, d = n.duration; if (i && d && $d(s)) { for (s = 0, d = n.responseEnd, l += 1; l < a.length; l++) { var y = a[l], z = y.startTime; if (z > d) break; var R = y.transferSize, O = y.initiatorType; R && $d(O) && (y = y.responseEnd, s += R * (y < d ? 1 : (d - z) / (y - z))) } if (--l, t += 8 * (i + s) / (n.duration / 1e3), e++, 10 < e) break } } if (0 < e) return t / e / 1e6 } return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5 } var Ms = null, Ds = null; function lu(e) { return e.nodeType === 9 ? e : e.ownerDocument } function Kd(e) { switch (e) { case "http://www.w3.org/2000/svg": return 1; case "http://www.w3.org/1998/Math/MathML": return 2; default: return 0 } } function Jd(e, t) { if (e === 0) switch (t) { case "svg": return 1; case "math": return 2; default: return 0 }return e === 1 && t === "foreignObject" ? 0 : e } function _s(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null } var Os = null; function jp() { var e = window.event; return e && e.type === "popstate" ? e === Os ? !1 : (Os = e, !0) : (Os = null, !1) } var Fd = typeof setTimeout == "function" ? setTimeout : void 0, Np = typeof clearTimeout == "function" ? clearTimeout : void 0, Wd = typeof Promise == "function" ? Promise : void 0, Ep = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wd < "u" ? function (e) { return Wd.resolve(null).then(e).catch(Tp) } : Fd; function Tp(e) { setTimeout(function () { throw e }) } function Aa(e) { return e === "head" } function Id(e, t) { var a = t, l = 0; do { var n = a.nextSibling; if (e.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$" || a === "/&") { if (l === 0) { e.removeChild(n), kl(t); return } l-- } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++; else if (a === "html") Un(e.ownerDocument.documentElement); else if (a === "head") { a = e.ownerDocument.head, Un(a); for (var i = a.firstChild; i;) { var s = i.nextSibling, d = i.nodeName; i[Il] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = s } } else a === "body" && Un(e.ownerDocument.body); a = n } while (a); kl(t) } function Pd(e, t) { var a = e; e = 0; do { var l = a.nextSibling; if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8) if (a = l.data, a === "/$") { if (e === 0) break; e-- } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++; a = l } while (a) } function Us(e) { var t = e.firstChild; for (t && t.nodeType === 10 && (t = t.nextSibling); t;) { var a = t; switch (t = t.nextSibling, a.nodeName) { case "HTML": case "HEAD": case "BODY": Us(a), ku(a); continue; case "SCRIPT": case "STYLE": continue; case "LINK": if (a.rel.toLowerCase() === "stylesheet") continue }e.removeChild(a) } } function zp(e, t, a, l) { for (; e.nodeType === 1;) { var n = a; if (e.nodeName.toLowerCase() !== t.toLowerCase()) { if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break } else if (l) { if (!e[Il]) switch (t) { case "meta": if (!e.hasAttribute("itemprop")) break; return e; case "link": if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break; if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break; return e; case "style": if (e.hasAttribute("data-precedence")) break; return e; case "script": if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break; return e; default: return e } } else if (t === "input" && e.type === "hidden") { var i = n.name == null ? null : "" + n.name; if (n.type === "hidden" && e.getAttribute("name") === i) return e } else return e; if (e = zt(e.nextSibling), e === null) break } return null } function Cp(e, t, a) { if (t === "") return null; for (; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = zt(e.nextSibling), e === null)) return null; return e } function em(e, t) { for (; e.nodeType !== 8;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = zt(e.nextSibling), e === null)) return null; return e } function Bs(e) { return e.data === "$?" || e.data === "$~" } function Hs(e) { return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading" } function wp(e, t) { var a = e.ownerDocument; if (e.data === "$~") e._reactRetry = t; else if (e.data !== "$?" || a.readyState !== "loading") t(); else { var l = function () { t(), a.removeEventListener("DOMContentLoaded", l) }; a.addEventListener("DOMContentLoaded", l), e._reactRetry = l } } function zt(e) { for (; e != null; e = e.nextSibling) { var t = e.nodeType; if (t === 1 || t === 3) break; if (t === 8) { if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break; if (t === "/$" || t === "/&") return null } } return e } var Ls = null; function tm(e) { e = e.nextSibling; for (var t = 0; e;) { if (e.nodeType === 8) { var a = e.data; if (a === "/$" || a === "/&") { if (t === 0) return zt(e.nextSibling); t-- } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++ } e = e.nextSibling } return null } function am(e) { e = e.previousSibling; for (var t = 0; e;) { if (e.nodeType === 8) { var a = e.data; if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") { if (t === 0) return e; t-- } else a !== "/$" && a !== "/&" || t++ } e = e.previousSibling } return null } function lm(e, t, a) { switch (t = lu(a), e) { case "html": if (e = t.documentElement, !e) throw Error(c(452)); return e; case "head": if (e = t.head, !e) throw Error(c(453)); return e; case "body": if (e = t.body, !e) throw Error(c(454)); return e; default: throw Error(c(451)) } } function Un(e) { for (var t = e.attributes; t.length;)e.removeAttributeNode(t[0]); ku(e) } var Ct = new Map, nm = new Set; function nu(e) { return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument } var ia = Y.d; Y.d = { f: Ap, r: Rp, D: Mp, C: Dp, L: _p, m: Op, X: Bp, S: Up, M: Hp }; function Ap() { var e = ia.f(), t = Ji(); return e || t } function Rp(e) { var t = il(e); t !== null && t.tag === 5 && t.type === "form" ? Sf(t) : ia.r(e) } var Hl = typeof document > "u" ? null : document; function im(e, t, a) { var l = Hl; if (l && typeof t == "string" && t) { var n = xt(t); n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), nm.has(n) || (nm.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), $e(t, "link", e), Ye(t), l.head.appendChild(t))) } } function Mp(e) { ia.D(e), im("dns-prefetch", e, null) } function Dp(e, t) { ia.C(e, t), im("preconnect", e, t) } function _p(e, t, a) { ia.L(e, t, a); var l = Hl; if (l && e && t) { var n = 'link[rel="preload"][as="' + xt(t) + '"]'; t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + xt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + xt(a.imageSizes) + '"]')) : n += '[href="' + xt(e) + '"]'; var i = n; switch (t) { case "style": i = Ll(e); break; case "script": i = ql(e) }Ct.has(i) || (e = C({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : e, as: t }, a), Ct.set(i, e), l.querySelector(n) !== null || t === "style" && l.querySelector(Bn(i)) || t === "script" && l.querySelector(Hn(i)) || (t = l.createElement("link"), $e(t, "link", e), Ye(t), l.head.appendChild(t))) } } function Op(e, t) { ia.m(e, t); var a = Hl; if (a && e) { var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + xt(l) + '"][href="' + xt(e) + '"]', i = n; switch (l) { case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": i = ql(e) }if (!Ct.has(i) && (e = C({ rel: "modulepreload", href: e }, t), Ct.set(i, e), a.querySelector(n) === null)) { switch (l) { case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": if (a.querySelector(Hn(i))) return }l = a.createElement("link"), $e(l, "link", e), Ye(l), a.head.appendChild(l) } } } function Up(e, t, a) { ia.S(e, t, a); var l = Hl; if (l && e) { var n = ul(l).hoistableStyles, i = Ll(e); t = t || "default"; var s = n.get(i); if (!s) { var d = { loading: 0, preload: null }; if (s = l.querySelector(Bn(i))) d.loading = 5; else { e = C({ rel: "stylesheet", href: e, "data-precedence": t }, a), (a = Ct.get(i)) && qs(e, a); var y = s = l.createElement("link"); Ye(y), $e(y, "link", e), y._p = new Promise(function (z, R) { y.onload = z, y.onerror = R }), y.addEventListener("load", function () { d.loading |= 1 }), y.addEventListener("error", function () { d.loading |= 2 }), d.loading |= 4, iu(s, t, l) } s = { type: "stylesheet", instance: s, count: 1, state: d }, n.set(i, s) } } } function Bp(e, t) { ia.X(e, t); var a = Hl; if (a && e) { var l = ul(a).hoistableScripts, n = ql(e), i = l.get(n); i || (i = a.querySelector(Hn(n)), i || (e = C({ src: e, async: !0 }, t), (t = Ct.get(n)) && ks(e, t), i = a.createElement("script"), Ye(i), $e(i, "link", e), a.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, l.set(n, i)) } } function Hp(e, t) { ia.M(e, t); var a = Hl; if (a && e) { var l = ul(a).hoistableScripts, n = ql(e), i = l.get(n); i || (i = a.querySelector(Hn(n)), i || (e = C({ src: e, async: !0, type: "module" }, t), (t = Ct.get(n)) && ks(e, t), i = a.createElement("script"), Ye(i), $e(i, "link", e), a.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, l.set(n, i)) } } function um(e, t, a, l) { var n = (n = ne.current) ? nu(n) : null; if (!n) throw Error(c(446)); switch (e) { case "meta": case "title": return null; case "style": return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ll(a.href), a = ul(n).hoistableStyles, l = a.get(t), l || (l = { type: "style", instance: null, count: 0, state: null }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null }; case "link": if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") { e = Ll(a.href); var i = ul(n).hoistableStyles, s = i.get(e); if (s || (n = n.ownerDocument || n, s = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, s), (i = n.querySelector(Bn(e))) && !i._p && (s.instance = i, s.state.loading = 5), Ct.has(e) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, Ct.set(e, a), i || Lp(n, e, a, s.state))), t && l === null) throw Error(c(528, "")); return s } if (t && l !== null) throw Error(c(529, "")); return null; case "script": return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ql(a), a = ul(n).hoistableScripts, l = a.get(t), l || (l = { type: "script", instance: null, count: 0, state: null }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null }; default: throw Error(c(444, e)) } } function Ll(e) { return 'href="' + xt(e) + '"' } function Bn(e) { return 'link[rel="stylesheet"][' + e + "]" } function rm(e) { return C({}, e, { "data-precedence": e.precedence, precedence: null }) } function Lp(e, t, a, l) { e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function () { return l.loading |= 1 }), t.addEventListener("error", function () { return l.loading |= 2 }), $e(t, "link", a), Ye(t), e.head.appendChild(t)) } function ql(e) { return '[src="' + xt(e) + '"]' } function Hn(e) { return "script[async]" + e } function sm(e, t, a) { if (t.count++, t.instance === null) switch (t.type) { case "style": var l = e.querySelector('style[data-href~="' + xt(a.href) + '"]'); if (l) return t.instance = l, Ye(l), l; var n = C({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null }); return l = (e.ownerDocument || e).createElement("style"), Ye(l), $e(l, "style", n), iu(l, a.precedence, e), t.instance = l; case "stylesheet": n = Ll(a.href); var i = e.querySelector(Bn(n)); if (i) return t.state.loading |= 4, t.instance = i, Ye(i), i; l = rm(a), (n = Ct.get(n)) && qs(l, n), i = (e.ownerDocument || e).createElement("link"), Ye(i); var s = i; return s._p = new Promise(function (d, y) { s.onload = d, s.onerror = y }), $e(i, "link", l), t.state.loading |= 4, iu(i, a.precedence, e), t.instance = i; case "script": return i = ql(a.src), (n = e.querySelector(Hn(i))) ? (t.instance = n, Ye(n), n) : (l = a, (n = Ct.get(i)) && (l = C({}, a), ks(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ye(n), $e(n, "link", l), e.head.appendChild(n), t.instance = n); case "void": return null; default: throw Error(c(443, t.type)) } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, iu(l, a.precedence, e)); return t.instance } function iu(e, t, a) { for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, i = n, s = 0; s < l.length; s++) { var d = l[s]; if (d.dataset.precedence === t) i = d; else if (i !== n) break } i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild)) } function qs(e, t) { e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title) } function ks(e, t) { e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity) } var uu = null; function cm(e, t, a) { if (uu === null) { var l = new Map, n = uu = new Map; n.set(a, l) } else n = uu, l = n.get(a), l || (l = new Map, n.set(a, l)); if (l.has(e)) return l; for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) { var i = a[n]; if (!(i[Il] || i[Xe] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") { var s = i.getAttribute(t) || ""; s = e + s; var d = l.get(s); d ? d.push(i) : l.set(s, [i]) } } return l } function om(e, t, a) { e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null) } function qp(e, t, a) { if (a === 1 || t.itemProp != null) return !1; switch (e) { case "meta": case "title": return !0; case "style": if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break; return !0; case "link": if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break; switch (t.rel) { case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null; default: return !0 }case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0 }return !1 } function fm(e) { return !(e.type === "stylesheet" && (e.state.loading & 3) === 0) } function kp(e, t, a, l) { if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) { if (a.instance === null) { var n = Ll(l.href), i = t.querySelector(Bn(n)); if (i) { t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ru.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = i, Ye(i); return } i = t.ownerDocument || t, l = rm(l), (n = Ct.get(n)) && qs(l, n), i = i.createElement("link"), Ye(i); var s = i; s._p = new Promise(function (d, y) { s.onload = d, s.onerror = y }), $e(i, "link", l), a.instance = i } e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = ru.bind(e), t.addEventListener("load", a), t.addEventListener("error", a)) } } var Ys = 0; function Yp(e, t) { return e.stylesheets && e.count === 0 && cu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (a) { var l = setTimeout(function () { if (e.stylesheets && cu(e, e.stylesheets), e.unsuspend) { var i = e.unsuspend; e.unsuspend = null, i() } }, 6e4 + t); 0 < e.imgBytes && Ys === 0 && (Ys = 62500 * Sp()); var n = setTimeout(function () { if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && cu(e, e.stylesheets), e.unsuspend)) { var i = e.unsuspend; e.unsuspend = null, i() } }, (e.imgBytes > Ys ? 50 : 800) + t); return e.unsuspend = a, function () { e.unsuspend = null, clearTimeout(l), clearTimeout(n) } } : null } function ru() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) { if (this.stylesheets) cu(this, this.stylesheets); else if (this.unsuspend) { var e = this.unsuspend; this.unsuspend = null, e() } } } var su = null; function cu(e, t) { e.stylesheets = null, e.unsuspend !== null && (e.count++, su = new Map, t.forEach(Gp, e), su = null, ru.call(e)) } function Gp(e, t) { if (!(t.state.loading & 4)) { var a = su.get(e); if (a) var l = a.get(null); else { a = new Map, su.set(e, a); for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) { var s = n[i]; (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (a.set(s.dataset.precedence, s), l = s) } l && a.set(null, l) } n = t.instance, s = n.getAttribute("data-precedence"), i = a.get(s) || l, i === l && a.set(null, n), a.set(s, n), this.count++, l = ru.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4 } } var Ln = { $$typeof: V, Provider: null, Consumer: null, _currentValue: F, _currentValue2: F, _threadCount: 0 }; function Xp(e, t, a, l, n, i, s, d, y) { this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Bu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bu(0), this.hiddenUpdates = Bu(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = new Map } function dm(e, t, a, l, n, i, s, d, y, z, R, O) { return e = new Xp(e, t, a, s, y, z, R, O, d), t = 1, i === !0 && (t |= 24), i = ot(3, null, null, t), e.current = i, i.stateNode = e, t = br(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: l, isDehydrated: a, cache: t }, Er(i), e } function mm(e) { return e ? (e = yl, e) : yl } function hm(e, t, a, l, n, i) { n = mm(n), l.context === null ? l.context = n : l.pendingContext = n, l = va(t), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = xa(e, l, t), a !== null && (it(a, e, t), yn(a, e, t)) } function pm(e, t) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) { var a = e.retryLane; e.retryLane = a !== 0 && a < t ? a : t } } function Gs(e, t) { pm(e, t), (e = e.alternate) && pm(e, t) } function ym(e) { if (e.tag === 13 || e.tag === 31) { var t = Xa(e, 67108864); t !== null && it(t, e, 67108864), Gs(e, 67108864) } } function gm(e) { if (e.tag === 13 || e.tag === 31) { var t = pt(); t = Hu(t); var a = Xa(e, t); a !== null && it(a, e, t), Gs(e, t) } } var ou = !0; function Vp(e, t, a, l) { var n = D.T; D.T = null; var i = Y.p; try { Y.p = 2, Xs(e, t, a, l) } finally { Y.p = i, D.T = n } } function Qp(e, t, a, l) { var n = D.T; D.T = null; var i = Y.p; try { Y.p = 8, Xs(e, t, a, l) } finally { Y.p = i, D.T = n } } function Xs(e, t, a, l) { if (ou) { var n = Vs(l); if (n === null) As(e, t, l, fu, a), xm(e, l); else if ($p(n, e, t, a, l)) l.stopPropagation(); else if (xm(e, l), t & 4 && -1 < Zp.indexOf(e)) { for (; n !== null;) { var i = il(n); if (i !== null) switch (i.tag) { case 3: if (i = i.stateNode, i.current.memoizedState.isDehydrated) { var s = La(i.pendingLanes); if (s !== 0) { var d = i; for (d.pendingLanes |= 2, d.entangledLanes |= 2; s;) { var y = 1 << 31 - st(s); d.entanglements[1] |= y, s &= ~y } kt(i), (me & 6) === 0 && ($i = ut() + 500, Dn(0)) } } break; case 31: case 13: d = Xa(i, 2), d !== null && it(d, i, 2), Ji(), Gs(i, 2) }if (i = Vs(l), i === null && As(e, t, l, fu, a), i === n) break; n = i } n !== null && l.stopPropagation() } else As(e, t, l, null, a) } } function Vs(e) { return e = Zu(e), Qs(e) } var fu = null; function Qs(e) { if (fu = null, e = nl(e), e !== null) { var t = h(e); if (t === null) e = null; else { var a = t.tag; if (a === 13) { if (e = g(t), e !== null) return e; e = null } else if (a === 31) { if (e = j(t), e !== null) return e; e = null } else if (a === 3) { if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null; e = null } else t !== e && (e = null) } } return fu = e, null } function vm(e) { switch (e) { case "beforetoggle": case "cancel": case "click": case "close": case "contextmenu": case "copy": case "cut": case "auxclick": case "dblclick": case "dragend": case "dragstart": case "drop": case "focusin": case "focusout": case "input": case "invalid": case "keydown": case "keypress": case "keyup": case "mousedown": case "mouseup": case "paste": case "pause": case "play": case "pointercancel": case "pointerdown": case "pointerup": case "ratechange": case "reset": case "resize": case "seeked": case "submit": case "toggle": case "touchcancel": case "touchend": case "touchstart": case "volumechange": case "change": case "selectionchange": case "textInput": case "compositionstart": case "compositionend": case "compositionupdate": case "beforeblur": case "afterblur": case "beforeinput": case "blur": case "fullscreenchange": case "focus": case "hashchange": case "popstate": case "select": case "selectstart": return 2; case "drag": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "mousemove": case "mouseout": case "mouseover": case "pointermove": case "pointerout": case "pointerover": case "scroll": case "touchmove": case "wheel": case "mouseenter": case "mouseleave": case "pointerenter": case "pointerleave": return 8; case "message": switch (M0()) { case Ec: return 2; case Tc: return 8; case ei: case D0: return 32; case zc: return 268435456; default: return 32 }default: return 32 } } var Zs = !1, Ra = null, Ma = null, Da = null, qn = new Map, kn = new Map, _a = [], Zp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "); function xm(e, t) { switch (e) { case "focusin": case "focusout": Ra = null; break; case "dragenter": case "dragleave": Ma = null; break; case "mouseover": case "mouseout": Da = null; break; case "pointerover": case "pointerout": qn.delete(t.pointerId); break; case "gotpointercapture": case "lostpointercapture": kn.delete(t.pointerId) } } function Yn(e, t, a, l, n, i) { return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: a, eventSystemFlags: l, nativeEvent: i, targetContainers: [n] }, t !== null && (t = il(t), t !== null && ym(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e) } function $p(e, t, a, l, n) { switch (t) { case "focusin": return Ra = Yn(Ra, e, t, a, l, n), !0; case "dragenter": return Ma = Yn(Ma, e, t, a, l, n), !0; case "mouseover": return Da = Yn(Da, e, t, a, l, n), !0; case "pointerover": var i = n.pointerId; return qn.set(i, Yn(qn.get(i) || null, e, t, a, l, n)), !0; case "gotpointercapture": return i = n.pointerId, kn.set(i, Yn(kn.get(i) || null, e, t, a, l, n)), !0 }return !1 } function bm(e) { var t = nl(e.target); if (t !== null) { var a = h(t); if (a !== null) { if (t = a.tag, t === 13) { if (t = g(a), t !== null) { e.blockedOn = t, Dc(e.priority, function () { gm(a) }); return } } else if (t === 31) { if (t = j(a), t !== null) { e.blockedOn = t, Dc(e.priority, function () { gm(a) }); return } } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) { e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null; return } } } e.blockedOn = null } function du(e) { if (e.blockedOn !== null) return !1; for (var t = e.targetContainers; 0 < t.length;) { var a = Vs(e.nativeEvent); if (a === null) { a = e.nativeEvent; var l = new a.constructor(a.type, a); Qu = l, a.target.dispatchEvent(l), Qu = null } else return t = il(a), t !== null && ym(t), e.blockedOn = a, !1; t.shift() } return !0 } function Sm(e, t, a) { du(e) && a.delete(t) } function Kp() { Zs = !1, Ra !== null && du(Ra) && (Ra = null), Ma !== null && du(Ma) && (Ma = null), Da !== null && du(Da) && (Da = null), qn.forEach(Sm), kn.forEach(Sm) } function mu(e, t) { e.blockedOn === t && (e.blockedOn = null, Zs || (Zs = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Kp))) } var hu = null; function jm(e) { hu !== e && (hu = e, u.unstable_scheduleCallback(u.unstable_NormalPriority, function () { hu === e && (hu = null); for (var t = 0; t < e.length; t += 3) { var a = e[t], l = e[t + 1], n = e[t + 2]; if (typeof l != "function") { if (Qs(l || a) === null) continue; break } var i = il(a); i !== null && (e.splice(t, 3), t -= 3, Vr(i, { pending: !0, data: n, method: a.method, action: l }, l, n)) } })) } function kl(e) { function t(y) { return mu(y, e) } Ra !== null && mu(Ra, e), Ma !== null && mu(Ma, e), Da !== null && mu(Da, e), qn.forEach(t), kn.forEach(t); for (var a = 0; a < _a.length; a++) { var l = _a[a]; l.blockedOn === e && (l.blockedOn = null) } for (; 0 < _a.length && (a = _a[0], a.blockedOn === null);)bm(a), a.blockedOn === null && _a.shift(); if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (l = 0; l < a.length; l += 3) { var n = a[l], i = a[l + 1], s = n[Pe] || null; if (typeof i == "function") s || jm(a); else if (s) { var d = null; if (i && i.hasAttribute("formAction")) { if (n = i, s = i[Pe] || null) d = s.formAction; else if (Qs(n) !== null) continue } else d = s.action; typeof d == "function" ? a[l + 1] = d : (a.splice(l, 3), l -= 3), jm(a) } } } function Nm() { function e(i) { i.canIntercept && i.info === "react-transition" && i.intercept({ handler: function () { return new Promise(function (s) { return n = s }) }, focusReset: "manual", scroll: "manual" }) } function t() { n !== null && (n(), n = null), l || setTimeout(a, 20) } function a() { if (!l && !navigation.transition) { var i = navigation.currentEntry; i && i.url != null && navigation.navigate(i.url, { state: i.getState(), info: "react-transition", history: "replace" }) } } if (typeof navigation == "object") { var l = !1, n = null; return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function () { l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null) } } } function $s(e) { this._internalRoot = e } pu.prototype.render = $s.prototype.render = function (e) { var t = this._internalRoot; if (t === null) throw Error(c(409)); var a = t.current, l = pt(); hm(a, l, e, t, null, null) }, pu.prototype.unmount = $s.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) { this._internalRoot = null; var t = e.containerInfo; hm(e.current, 2, null, e, null, null), Ji(), t[ll] = null } }; function pu(e) { this._internalRoot = e } pu.prototype.unstable_scheduleHydration = function (e) { if (e) { var t = Mc(); e = { blockedOn: null, target: e, priority: t }; for (var a = 0; a < _a.length && t !== 0 && t < _a[a].priority; a++); _a.splice(a, 0, e), a === 0 && bm(e) } }; var Em = o.version; if (Em !== "19.2.8") throw Error(c(527, Em, "19.2.8")); Y.findDOMNode = function (e) { var t = e._reactInternals; if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e))); return e = p(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e }; var Jp = { bundleType: 0, version: "19.2.8", rendererPackageName: "react-dom", currentDispatcherRef: D, reconcilerVersion: "19.2.8" }; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var yu = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!yu.isDisabled && yu.supportsFiber) try { Jl = yu.inject(Jp), rt = yu } catch { } } return Xn.createRoot = function (e, t) { if (!m(e)) throw Error(c(299)); var a = !1, l = "", n = Mf, i = Df, s = _f; return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = dm(e, 1, !1, null, null, a, l, null, n, i, s, Nm), e[ll] = t.current, ws(e), new $s(t) }, Xn.hydrateRoot = function (e, t, a) { if (!m(e)) throw Error(c(299)); var l = !1, n = "", i = Mf, s = Df, d = _f, y = null; return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (s = a.onCaughtError), a.onRecoverableError !== void 0 && (d = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = dm(e, 1, !0, t, a ?? null, l, n, y, i, s, d, Nm), t.context = mm(null), a = t.current, l = pt(), l = Hu(l), n = va(l), n.callback = null, xa(a, n, l), a = l, t.current.lanes = a, Wl(t, a), kt(t), e[ll] = t.current, ws(e), new pu(t) }, Xn.version = "19.2.8", Xn
} var Om; function uy() { if (Om) return Fs.exports; Om = 1; function u() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u) } catch (o) { console.error(o) } } return u(), Fs.exports = iy(), Fs.exports } var ry = uy(); const sy = Im(ry);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fc = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, Pm = /^[\\/]{2}/; function cy(u, o) { return o + u.replace(/\\/g, "/") } var Um = "popstate"; function Bm(u) { return typeof u == "object" && u != null && "pathname" in u && "search" in u && "hash" in u && "state" in u && "key" in u } function oy(u = {}) { function o(c, m) { var p; let h = (p = m.state) == null ? void 0 : p.masked, { pathname: g, search: j, hash: v } = h || c.location; return uc("", { pathname: g, search: j, hash: v }, m.state && m.state.usr || null, m.state && m.state.key || "default", h ? { pathname: c.location.pathname, search: c.location.search, hash: c.location.hash } : void 0) } function f(c, m) { return typeof m == "string" ? m : Qn(m) } return dy(o, f, null, u) } function we(u, o) { if (u === !1 || u === null || typeof u > "u") throw new Error(o) } function Yt(u, o) { if (!u) { typeof console < "u" && console.warn(o); try { throw new Error(o) } catch { } } } function fy() { return Math.random().toString(36).substring(2, 10) } function Hm(u, o) { return { usr: u.state, key: u.key, idx: o, masked: u.mask ? { pathname: u.pathname, search: u.search, hash: u.hash } : void 0 } } function uc(u, o, f = null, c, m) { return { pathname: typeof u == "string" ? u : u.pathname, search: "", hash: "", ...typeof o == "string" ? Vl(o) : o, state: f, key: o && o.key || c || fy(), mask: m } } function Qn({ pathname: u = "/", search: o = "", hash: f = "" }) { return o && o !== "?" && (u += o.charAt(0) === "?" ? o : "?" + o), f && f !== "#" && (u += f.charAt(0) === "#" ? f : "#" + f), u } function Vl(u) { let o = {}; if (u) { let f = u.indexOf("#"); f >= 0 && (o.hash = u.substring(f), u = u.substring(0, f)); let c = u.indexOf("?"); c >= 0 && (o.search = u.substring(c), u = u.substring(0, c)), u && (o.pathname = u) } return o } function dy(u, o, f, c = {}) { let { window: m = document.defaultView, v5Compat: h = !1 } = c, g = m.history, j = "POP", v = null, p = E(); p == null && (p = 0, g.replaceState({ ...g.state, idx: p }, "")); function E() { return (g.state || { idx: null }).idx } function C() { j = "POP"; let X = E(), q = X == null ? null : X - p; p = X, v && v({ action: j, location: k.location, delta: q }) } function M(X, q) { j = "PUSH"; let B = Bm(X) ? X : uc(k.location, X, q); p = E() + 1; let V = Hm(B, p), te = k.createHref(B.mask || B); try { g.pushState(V, "", te) } catch (le) { if (le instanceof DOMException && le.name === "DataCloneError") throw le; m.location.assign(te) } h && v && v({ action: j, location: k.location, delta: 1 }) } function H(X, q) { j = "REPLACE"; let B = Bm(X) ? X : uc(k.location, X, q); p = E(); let V = Hm(B, p), te = k.createHref(B.mask || B); g.replaceState(V, "", te), h && v && v({ action: j, location: k.location, delta: 0 }) } function L(X) { return my(m, X) } let k = { get action() { return j }, get location() { return u(m, g) }, listen(X) { if (v) throw new Error("A history only accepts one active listener"); return m.addEventListener(Um, C), v = X, () => { m.removeEventListener(Um, C), v = null } }, createHref(X) { return o(m, X) }, createURL: L, encodeLocation(X) { let q = L(X); return { pathname: q.pathname, search: q.search, hash: q.hash } }, push: M, replace: H, go(X) { return g.go(X) } }; return k } function my(u, o, f = !1) { let c = "http://localhost"; u && (c = u.location.origin !== "null" ? u.location.origin : u.location.href), we(c, "No window.location.(origin|href) available to create URL"); let m = typeof o == "string" ? o : Qn(o); return m = m.replace(/ $/, "%20"), !f && Pm.test(m) && (m = c + m), new URL(m, c) } function e0(u, o, f = "/") { return hy(u, o, f, !1) } function hy(u, o, f, c, m) { let h = typeof o == "string" ? Vl(o) : o, g = ra(h.pathname || "/", f); if (g == null) return null; let j = py(u), v = null, p = zy(g); for (let E = 0; v == null && E < j.length; ++E)v = Ty(j[E], p, c); return v } function py(u) { let o = t0(u); return yy(o), o } function t0(u, o = [], f = [], c = "", m = !1) { let h = (g, j, v = m, p) => { let E = { relativePath: p === void 0 ? g.path || "" : p, caseSensitive: g.caseSensitive === !0, childrenIndex: j, route: g }; if (E.relativePath.startsWith("/")) { if (!E.relativePath.startsWith(c) && v) return; we(E.relativePath.startsWith(c), `Absolute route path "${E.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), E.relativePath = E.relativePath.slice(c.length) } let C = Ot([c, E.relativePath]), M = f.concat(E); g.children && g.children.length > 0 && (we(g.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${C}".`), t0(g.children, o, M, C, v)), !(g.path == null && !g.index) && o.push({ path: C, score: Ny(C, g.index), routesMeta: M.map((H, L) => { let [k, X] = n0(H.relativePath, H.caseSensitive, L === M.length - 1); return { ...H, matcher: k, compiledParams: X } }) }) }; return u.forEach((g, j) => { var v; if (g.path === "" || !((v = g.path) != null && v.includes("?"))) h(g, j); else for (let p of a0(g.path)) h(g, j, !0, p) }), o } function a0(u) { let o = u.split("/"); if (o.length === 0) return []; let [f, ...c] = o, m = f.endsWith("?"), h = f.replace(/\?$/, ""); if (c.length === 0) return m ? [h, ""] : [h]; let g = a0(c.join("/")), j = []; return j.push(...g.map(v => v === "" ? h : [h, v].join("/"))), m && j.push(...g), j.map(v => u.startsWith("/") && v === "" ? "/" : v) } function yy(u) { u.sort((o, f) => o.score !== f.score ? f.score - o.score : Ey(o.routesMeta.map(c => c.childrenIndex), f.routesMeta.map(c => c.childrenIndex))) } var gy = /^:[\w-]+$/, vy = 3, xy = 2, by = 1, Sy = 10, jy = -2, Lm = u => u === "*"; function Ny(u, o) { let f = u.split("/"), c = f.length; return f.some(Lm) && (c += jy), o && (c += xy), f.filter(m => !Lm(m)).reduce((m, h) => m + (gy.test(h) ? vy : h === "" ? by : Sy), c) } function Ey(u, o) { return u.length === o.length && u.slice(0, -1).every((c, m) => c === o[m]) ? u[u.length - 1] - o[o.length - 1] : 0 } function Ty(u, o, f = !1) { let { routesMeta: c } = u, m = {}, h = "/", g = []; for (let j = 0; j < c.length; ++j) { let v = c[j], p = j === c.length - 1, E = h === "/" ? o : o.slice(h.length) || "/", C = { path: v.relativePath, caseSensitive: v.caseSensitive, end: p }, M = v.matcher && v.compiledParams ? l0(C, E, v.matcher, v.compiledParams) : ju(C, E), H = v.route; if (!M && p && f && !c[c.length - 1].route.index && (M = ju({ path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 }, E)), !M) return null; Object.assign(m, M.params), g.push({ params: m, pathname: Ot([h, M.pathname]), pathnameBase: Ay(Ot([h, M.pathnameBase])), route: H }), M.pathnameBase !== "/" && (h = Ot([h, M.pathnameBase])) } return g } function ju(u, o) { typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 }); let [f, c] = n0(u.path, u.caseSensitive, u.end); return l0(u, o, f, c) } function l0(u, o, f, c) { let m = o.match(f); if (!m) return null; let h = m[0], g = h.replace(/(.)\/+$/, "$1"), j = m.slice(1); return { params: c.reduce((p, { paramName: E, isOptional: C }, M) => { if (E === "*") { let L = j[M] || ""; g = h.slice(0, h.length - L.length).replace(/(.)\/+$/, "$1") } const H = j[M]; return C && !H ? p[E] = void 0 : p[E] = (H || "").replace(/%2F/g, "/"), p }, {}), pathname: h, pathnameBase: g, pattern: u } } function n0(u, o = !1, f = !0) { Yt(u === "*" || !u.endsWith("*") || u.endsWith("/*"), `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`); let c = [], m = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (g, j, v, p, E) => { if (c.push({ paramName: j, isOptional: v != null }), v) { let C = E.charAt(p + g.length); return C && C !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?" } return "/([^\\/]+)" }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2"); return u.endsWith("*") ? (c.push({ paramName: "*" }), m += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : f ? m += "\\/*$" : u !== "" && u !== "/" && (m += "(?:(?=\\/|$))"), [new RegExp(m, o ? void 0 : "i"), c] } function zy(u) { try { return u.split("/").map(o => decodeURIComponent(o).replace(/\//g, "%2F")).join("/") } catch (o) { return Yt(!1, `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`), u } } function ra(u, o) { if (o === "/") return u; if (!u.toLowerCase().startsWith(o.toLowerCase())) return null; let f = o.endsWith("/") ? o.length - 1 : o.length, c = u.charAt(f); return c && c !== "/" ? null : u.slice(f) || "/" } function Cy(u, o = "/") { let { pathname: f, search: c = "", hash: m = "" } = typeof u == "string" ? Vl(u) : u, h; return f ? (f = u0(f), f.startsWith("/") ? h = qm(f.substring(1), "/") : h = qm(f, o)) : h = o, { pathname: h, search: Ry(c), hash: My(m) } } function qm(u, o) { let f = Nu(o).split("/"); return u.split("/").forEach(m => { m === ".." ? f.length > 1 && f.pop() : m !== "." && f.push(m) }), f.length > 1 ? f.join("/") : "/" } function ec(u, o, f, c) { return `Cannot include a '${u}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.` } function wy(u) { return u.filter((o, f) => f === 0 || o.route.path && o.route.path.length > 0) } function i0(u) { let o = wy(u); return o.map((f, c) => c === o.length - 1 ? f.pathname : f.pathnameBase) } function dc(u, o, f, c = !1) { let m; typeof u == "string" ? m = Vl(u) : (m = { ...u }, we(!m.pathname || !m.pathname.includes("?"), ec("?", "pathname", "search", m)), we(!m.pathname || !m.pathname.includes("#"), ec("#", "pathname", "hash", m)), we(!m.search || !m.search.includes("#"), ec("#", "search", "hash", m))); let h = u === "" || m.pathname === "", g = h ? "/" : m.pathname, j; if (g == null) j = f; else { let C = o.length - 1; if (!c && g.startsWith("..")) { let M = g.split("/"); for (; M[0] === "..";)M.shift(), C -= 1; m.pathname = M.join("/") } j = C >= 0 ? o[C] : "/" } let v = Cy(m, j), p = g && g !== "/" && g.endsWith("/"), E = (h || g === ".") && f.endsWith("/"); return !v.pathname.endsWith("/") && (p || E) && (v.pathname += "/"), v } var u0 = u => u.replace(/[\\/]{2,}/g, "/"), Ot = u => u0(u.join("/")), Nu = u => u.replace(/\/+$/, ""), Ay = u => Nu(u).replace(/^\/*/, "/"), Ry = u => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, My = u => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, Dy = class { constructor(u, o, f, c = !1) { this.status = u, this.statusText = o || "", this.internal = c, f instanceof Error ? (this.data = f.toString(), this.error = f) : this.data = f } }; function _y(u) { return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u } function Oy(u) { let o = u.map(f => f.route.path).filter(Boolean); return Ot(o) || "/" } var r0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"; function s0(u, o) { let f = u; if (typeof f != "string" || !fc.test(f)) return { absoluteURL: void 0, isExternal: !1, to: f }; let c = f, m = !1; if (r0) try { let h = new URL(window.location.href), g = Pm.test(f) ? new URL(cy(f, h.protocol)) : new URL(f), j = ra(g.pathname, o); g.origin === h.origin && j != null ? f = j + g.search + g.hash : m = !0 } catch { Yt(!1, `<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`) } return { absoluteURL: c, isExternal: m, to: f } } Object.getOwnPropertyNames(Object.prototype).sort().join("\0"); var c0 = ["POST", "PUT", "PATCH", "DELETE"]; new Set(c0); var Uy = ["GET", ...c0]; new Set(Uy); var By = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"]; function Hy(u) { try { return By.includes(new URL(u).protocol) } catch { return !1 } } var Ql = S.createContext(null); Ql.displayName = "DataRouter"; var Eu = S.createContext(null); Eu.displayName = "DataRouterState"; var o0 = S.createContext(!1); function Ly() { return S.useContext(o0) } var f0 = S.createContext({ isTransitioning: !1 }); f0.displayName = "ViewTransition"; var qy = S.createContext(new Map); qy.displayName = "Fetchers"; var ky = S.createContext(null); ky.displayName = "Await"; var wt = S.createContext(null); wt.displayName = "Navigation"; var Zn = S.createContext(null); Zn.displayName = "Location"; var sa = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }); sa.displayName = "Route"; var mc = S.createContext(null); mc.displayName = "RouteError"; var d0 = "REACT_ROUTER_ERROR", Yy = "REDIRECT", Gy = "ROUTE_ERROR_RESPONSE"; function Xy(u) { if (u.startsWith(`${d0}:${Yy}:{`)) try { let o = JSON.parse(u.slice(28)); if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string" && typeof o.location == "string" && typeof o.reloadDocument == "boolean" && typeof o.replace == "boolean") return o } catch { } } function Vy(u) { if (u.startsWith(`${d0}:${Gy}:{`)) try { let o = JSON.parse(u.slice(40)); if (typeof o == "object" && o && typeof o.status == "number" && typeof o.statusText == "string") return new Dy(o.status, o.statusText, o.data) } catch { } } function Qy(u, { relative: o } = {}) { we($n(), "useHref() may be used only in the context of a <Router> component."); let { basename: f, navigator: c } = S.useContext(wt), { hash: m, pathname: h, search: g } = Kn(u, { relative: o }), j = h; return f !== "/" && (j = h === "/" ? f : Ot([f, h])), c.createHref({ pathname: j, search: g, hash: m }) } function $n() { return S.useContext(Zn) != null } function ca() { return we($n(), "useLocation() may be used only in the context of a <Router> component."), S.useContext(Zn).location } var m0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered."; function h0(u) { S.useContext(wt).static || S.useLayoutEffect(u) } function Zy() { let { isDataRoute: u } = S.useContext(sa); return u ? i1() : $y() } function $y() { we($n(), "useNavigate() may be used only in the context of a <Router> component."); let u = S.useContext(Ql), { basename: o, navigator: f } = S.useContext(wt), { matches: c } = S.useContext(sa), { pathname: m } = ca(), h = JSON.stringify(i0(c)), g = S.useRef(!1); return h0(() => { g.current = !0 }), S.useCallback((v, p = {}) => { if (Yt(g.current, m0), !g.current) return; if (typeof v == "number") { f.go(v); return } let E = dc(v, JSON.parse(h), m, p.relative === "path"); u == null && o !== "/" && (E.pathname = E.pathname === "/" ? o : Ot([o, E.pathname])), (p.replace ? f.replace : f.push)(E, p.state, p) }, [o, f, h, m, u]) } S.createContext(null); function Kn(u, { relative: o } = {}) { let { matches: f } = S.useContext(sa), { pathname: c } = ca(), m = JSON.stringify(i0(f)); return S.useMemo(() => dc(u, JSON.parse(m), c, o === "path"), [u, m, c, o]) } function Ky(u, o) { return p0(u, o) } function p0(u, o, f) {
  var X; we($n(), "useRoutes() may be used only in the context of a <Router> component."); let { navigator: c } = S.useContext(wt), { matches: m } = S.useContext(sa), h = m[m.length - 1], g = h ? h.params : {}, j = h ? h.pathname : "/", v = h ? h.pathnameBase : "/", p = h && h.route; {
    let q = p && p.path || ""; g0(j, !p || q.endsWith("*") || q.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${j}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q === "/" ? "*" : `${q}/*`}">.`)
  } let E = ca(), C; if (o) { let q = typeof o == "string" ? Vl(o) : o; we(v === "/" || ((X = q.pathname) == null ? void 0 : X.startsWith(v)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${q.pathname}" was given in the \`location\` prop.`), C = q } else C = E; let M = C.pathname || "/", H = M; if (v !== "/") { let q = v.replace(/^\//, "").split("/"); H = "/" + M.replace(/^\//, "").split("/").slice(q.length).join("/") } let L = f && f.state.matches.length ? f.state.matches.map(q => Object.assign(q, { route: f.manifest[q.route.id] || q.route })) : e0(u, { pathname: H }); Yt(p || L != null, `No routes matched location "${C.pathname}${C.search}${C.hash}" `), Yt(L == null || L[L.length - 1].route.element !== void 0 || L[L.length - 1].route.Component !== void 0 || L[L.length - 1].route.lazy !== void 0, `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`); let k = Py(L && L.map(q => Object.assign({}, q, { params: Object.assign({}, g, q.params), pathname: Ot([v, c.encodeLocation ? c.encodeLocation(q.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : q.pathname]), pathnameBase: q.pathnameBase === "/" ? v : Ot([v, c.encodeLocation ? c.encodeLocation(q.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : q.pathnameBase]) })), m, f); return o && k ? S.createElement(Zn.Provider, { value: { location: { pathname: "/", search: "", hash: "", state: null, key: "default", mask: void 0, ...C }, navigationType: "POP" } }, k) : k
} function Jy() { let u = n1(), o = _y(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), f = u instanceof Error ? u.stack : null, c = "rgba(200,200,200, 0.5)", m = { padding: "0.5rem", backgroundColor: c }, h = { padding: "2px 4px", backgroundColor: c }, g = null; return console.error("Error handled by React Router default ErrorBoundary:", u), g = S.createElement(S.Fragment, null, S.createElement("p", null, "💿 Hey developer 👋"), S.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", S.createElement("code", { style: h }, "ErrorBoundary"), " or", " ", S.createElement("code", { style: h }, "errorElement"), " prop on your route.")), S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", { style: { fontStyle: "italic" } }, o), f ? S.createElement("pre", { style: m }, f) : null, g) } var Fy = S.createElement(Jy, null), y0 = class extends S.Component { constructor(u) { super(u), this.state = { location: u.location, revalidation: u.revalidation, error: u.error } } static getDerivedStateFromError(u) { return { error: u } } static getDerivedStateFromProps(u, o) { return o.location !== u.location || o.revalidation !== "idle" && u.revalidation === "idle" ? { error: u.error, location: u.location, revalidation: u.revalidation } : { error: u.error !== void 0 ? u.error : o.error, location: o.location, revalidation: u.revalidation || o.revalidation } } componentDidCatch(u, o) { this.props.onError ? this.props.onError(u, o) : console.error("React Router caught the following error during render", u) } render() { let u = this.state.error; if (this.context && typeof u == "object" && u && "digest" in u && typeof u.digest == "string") { const f = Vy(u.digest); f && (u = f) } let o = u !== void 0 ? S.createElement(sa.Provider, { value: this.props.routeContext }, S.createElement(mc.Provider, { value: u, children: this.props.component })) : this.props.children; return this.context ? S.createElement(Wy, { error: u }, o) : o } }; y0.contextType = o0; var tc = new WeakMap; function Wy({ children: u, error: o }) { let { basename: f } = S.useContext(wt); if (typeof o == "object" && o && "digest" in o && typeof o.digest == "string") { let c = Xy(o.digest); if (c) { let m = tc.get(o); if (m) throw m; let h = s0(c.location, f), g = h.absoluteURL || h.to; if (Hy(g)) throw new Error("Invalid redirect location"); if (r0 && !tc.get(o)) if (h.isExternal || c.reloadDocument) window.location.href = g; else { const j = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(h.to, { replace: c.replace })); throw tc.set(o, j), j } return S.createElement("meta", { httpEquiv: "refresh", content: `0;url=${g}` }) } } return u } function Iy({ routeContext: u, match: o, children: f }) { let c = S.useContext(Ql); return c && c.static && c.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = o.route.id), S.createElement(sa.Provider, { value: u }, f) } function Py(u, o = [], f) { let c = f == null ? void 0 : f.state; if (u == null) { if (!c) return null; if (c.errors) u = c.matches; else if (o.length === 0 && !c.initialized && c.matches.length > 0) u = c.matches; else return null } let m = u, h = c == null ? void 0 : c.errors; if (h != null) { let E = m.findIndex(C => C.route.id && (h == null ? void 0 : h[C.route.id]) !== void 0); we(E >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`), m = m.slice(0, Math.min(m.length, E + 1)) } let g = !1, j = -1; if (f && c) { g = c.renderFallback; for (let E = 0; E < m.length; E++) { let C = m[E]; if ((C.route.HydrateFallback || C.route.hydrateFallbackElement) && (j = E), C.route.id) { let { loaderData: M, errors: H } = c, L = C.route.loader && !M.hasOwnProperty(C.route.id) && (!H || H[C.route.id] === void 0); if (C.route.lazy || L) { f.isStatic && (g = !0), j >= 0 ? m = m.slice(0, j + 1) : m = [m[0]]; break } } } } let v = f == null ? void 0 : f.onError, p = c && v ? (E, C) => { var M, H; v(E, { location: c.location, params: ((H = (M = c.matches) == null ? void 0 : M[0]) == null ? void 0 : H.params) ?? {}, pattern: Oy(c.matches), errorInfo: C }) } : void 0; return m.reduceRight((E, C, M) => { let H, L = !1, k = null, X = null; c && (H = h && C.route.id ? h[C.route.id] : void 0, k = C.route.errorElement || Fy, g && (j < 0 && M === 0 ? (g0("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), L = !0, X = null) : j === M && (L = !0, X = C.route.hydrateFallbackElement || null))); let q = o.concat(m.slice(0, M + 1)), B = () => { let V; return H ? V = k : L ? V = X : C.route.Component ? V = S.createElement(C.route.Component, null) : C.route.element ? V = C.route.element : V = E, S.createElement(Iy, { match: C, routeContext: { outlet: E, matches: q, isDataRoute: c != null }, children: V }) }; return c && (C.route.ErrorBoundary || C.route.errorElement || M === 0) ? S.createElement(y0, { location: c.location, revalidation: c.revalidation, component: k, error: H, children: B(), routeContext: { outlet: null, matches: q, isDataRoute: !0 }, onError: p }) : B() }, null) } function hc(u) { return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.` } function e1(u) { let o = S.useContext(Ql); return we(o, hc(u)), o } function t1(u) { let o = S.useContext(Eu); return we(o, hc(u)), o } function a1(u) { let o = S.useContext(sa); return we(o, hc(u)), o } function pc(u) { let o = a1(u), f = o.matches[o.matches.length - 1]; return we(f.route.id, `${u} can only be used on routes that contain a unique "id"`), f.route.id } function l1() { return pc("useRouteId") } function n1() { var c; let u = S.useContext(mc), o = t1("useRouteError"), f = pc("useRouteError"); return u !== void 0 ? u : (c = o.errors) == null ? void 0 : c[f] } function i1() { let { router: u } = e1("useNavigate"), o = pc("useNavigate"), f = S.useRef(!1); return h0(() => { f.current = !0 }), S.useCallback(async (m, h = {}) => { Yt(f.current, m0), f.current && (typeof m == "number" ? await u.navigate(m) : await u.navigate(m, { fromRouteId: o, ...h })) }, [u, o]) } var km = {}; function g0(u, o, f) { !o && !km[u] && (km[u] = !0, Yt(!1, f)) } S.memo(u1); function u1({ routes: u, manifest: o, future: f, state: c, isStatic: m, onError: h }) { return p0(u, void 0, { manifest: o, state: c, isStatic: m, onError: h }) } function Yl(u) { we(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") } function r1({ basename: u = "/", children: o = null, location: f, navigationType: c = "POP", navigator: m, static: h = !1, useTransitions: g }) { we(!$n(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."); let j = u.replace(/^\/*/, "/"), v = S.useMemo(() => ({ basename: j, navigator: m, static: h, useTransitions: g, future: {} }), [j, m, h, g]); typeof f == "string" && (f = Vl(f)); let { pathname: p = "/", search: E = "", hash: C = "", state: M = null, key: H = "default", mask: L } = f, k = S.useMemo(() => { let X = ra(p, j); return X == null ? null : { location: { pathname: X, search: E, hash: C, state: M, key: H, mask: L }, navigationType: c } }, [j, p, E, C, M, H, c, L]); return Yt(k != null, `<Router basename="${j}"> is not able to match the URL "${p}${E}${C}" because it does not start with the basename, so the <Router> won't render anything.`), k == null ? null : S.createElement(wt.Provider, { value: v }, S.createElement(Zn.Provider, { children: o, value: k })) } function s1({ children: u, location: o }) { return Ky(rc(u), o) } function rc(u, o = []) { let f = []; return S.Children.forEach(u, (c, m) => { if (!S.isValidElement(c)) return; let h = [...o, m]; if (c.type === S.Fragment) { f.push.apply(f, rc(c.props.children, h)); return } we(c.type === Yl, `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), we(!c.props.index || !c.props.children, "An index route cannot have child routes."); let g = { id: c.props.id || h.join("-"), caseSensitive: c.props.caseSensitive, element: c.props.element, Component: c.props.Component, index: c.props.index, path: c.props.path, middleware: c.props.middleware, loader: c.props.loader, action: c.props.action, hydrateFallbackElement: c.props.hydrateFallbackElement, HydrateFallback: c.props.HydrateFallback, errorElement: c.props.errorElement, ErrorBoundary: c.props.ErrorBoundary, hasErrorBoundary: c.props.hasErrorBoundary === !0 || c.props.ErrorBoundary != null || c.props.errorElement != null, shouldRevalidate: c.props.shouldRevalidate, handle: c.props.handle, lazy: c.props.lazy }; c.props.children && (g.children = rc(c.props.children, h)), f.push(g) }), f } var bu = "get", Su = "application/x-www-form-urlencoded"; function Tu(u) { return typeof HTMLElement < "u" && u instanceof HTMLElement } function c1(u) { return Tu(u) && u.tagName.toLowerCase() === "button" } function o1(u) { return Tu(u) && u.tagName.toLowerCase() === "form" } function f1(u) { return Tu(u) && u.tagName.toLowerCase() === "input" } function d1(u) { return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey) } function m1(u, o) { return u.button === 0 && (!o || o === "_self") && !d1(u) } var gu = null; function h1() { if (gu === null) try { new FormData(document.createElement("form"), 0), gu = !1 } catch { gu = !0 } return gu } var p1 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]); function ac(u) { return u != null && !p1.has(u) ? (Yt(!1, `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Su}"`), null) : u } function y1(u, o) { let f, c, m, h, g; if (o1(u)) { let j = u.getAttribute("action"); c = j ? ra(j, o) : null, f = u.getAttribute("method") || bu, m = ac(u.getAttribute("enctype")) || Su, h = new FormData(u) } else if (c1(u) || f1(u) && (u.type === "submit" || u.type === "image")) { let j = u.form; if (j == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>'); let v = u.getAttribute("formaction") || j.getAttribute("action"); if (c = v ? ra(v, o) : null, f = u.getAttribute("formmethod") || j.getAttribute("method") || bu, m = ac(u.getAttribute("formenctype")) || ac(j.getAttribute("enctype")) || Su, h = new FormData(j, u), !h1()) { let { name: p, type: E, value: C } = u; if (E === "image") { let M = p ? `${p}.` : ""; h.append(`${M}x`, "0"), h.append(`${M}y`, "0") } else p && h.append(p, C) } } else { if (Tu(u)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">'); f = bu, c = null, m = Su, g = u } return h && m === "text/plain" && (g = h, h = void 0), { action: c, method: f.toLowerCase(), encType: m, formData: h, body: g } } Object.getOwnPropertyNames(Object.prototype).sort().join("\0"); function yc(u, o) { if (u === !1 || u === null || typeof u > "u") throw new Error(o) } function v0(u, o, f, c) { let m = typeof u == "string" ? new URL(u, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : u; return f ? m.pathname.endsWith("/") ? m.pathname = `${m.pathname}_.${c}` : m.pathname = `${m.pathname}.${c}` : m.pathname === "/" ? m.pathname = `_root.${c}` : o && ra(m.pathname, o) === "/" ? m.pathname = `${Nu(o)}/_root.${c}` : m.pathname = `${Nu(m.pathname)}.${c}`, m } async function g1(u, o) { if (u.id in o) return o[u.id]; try { let f = await import(u.module); return o[u.id] = f, f } catch (f) { return console.error(`Error loading route module \`${u.module}\`, reloading page...`), console.error(f), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => { }) } } function v1(u) { return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string" } async function x1(u, o, f) { let c = await Promise.all(u.map(async m => { let h = o.routes[m.route.id]; if (h) { let g = await g1(h, f); return g.links ? g.links() : [] } return [] })); return N1(c.flat(1).filter(v1).filter(m => m.rel === "stylesheet" || m.rel === "preload").map(m => m.rel === "stylesheet" ? { ...m, rel: "prefetch", as: "style" } : { ...m, rel: "prefetch" })) } function Ym(u, o, f, c, m, h) { let g = (v, p) => f[p] ? v.route.id !== f[p].route.id : !0, j = (v, p) => { var E; return f[p].pathname !== v.pathname || ((E = f[p].route.path) == null ? void 0 : E.endsWith("*")) && f[p].params["*"] !== v.params["*"] }; return h === "assets" ? o.filter((v, p) => g(v, p) || j(v, p)) : h === "data" ? o.filter((v, p) => { var C; let E = c.routes[v.route.id]; if (!E || !E.hasLoader) return !1; if (g(v, p) || j(v, p)) return !0; if (v.route.shouldRevalidate) { let M = v.route.shouldRevalidate({ currentUrl: new URL(m.pathname + m.search + m.hash, window.origin), currentParams: ((C = f[0]) == null ? void 0 : C.params) || {}, nextUrl: new URL(u, window.origin), nextParams: v.params, defaultShouldRevalidate: !0 }); if (typeof M == "boolean") return M } return !0 }) : [] } function b1(u, o, { includeHydrateFallback: f } = {}) { return S1(u.map(c => { let m = o.routes[c.route.id]; if (!m) return []; let h = [m.module]; return m.clientActionModule && (h = h.concat(m.clientActionModule)), m.clientLoaderModule && (h = h.concat(m.clientLoaderModule)), f && m.hydrateFallbackModule && (h = h.concat(m.hydrateFallbackModule)), m.imports && (h = h.concat(m.imports)), h }).flat(1)) } function S1(u) { return [...new Set(u)] } function j1(u) { let o = {}, f = Object.keys(u).sort(); for (let c of f) o[c] = u[c]; return o } function N1(u, o) { let f = new Set; return new Set(o), u.reduce((c, m) => { let h = JSON.stringify(j1(m)); return f.has(h) || (f.add(h), c.push({ key: h, link: m })), c }, []) } function gc() { let u = S.useContext(Ql); return yc(u, "You must render this element inside a <DataRouterContext.Provider> element"), u } function E1() { let u = S.useContext(Eu); return yc(u, "You must render this element inside a <DataRouterStateContext.Provider> element"), u } var vc = S.createContext(void 0); vc.displayName = "FrameworkContext"; function zu() { let u = S.useContext(vc); return yc(u, "You must render this element inside a <HydratedRouter> element"), u } function T1(u, o) { let f = S.useContext(vc), [c, m] = S.useState(!1), [h, g] = S.useState(!1), { onFocus: j, onBlur: v, onMouseEnter: p, onMouseLeave: E, onTouchStart: C } = o, M = S.useRef(null); S.useEffect(() => { if (u === "render" && g(!0), u === "viewport") { let k = q => { q.forEach(B => { g(B.isIntersecting) }) }, X = new IntersectionObserver(k, { threshold: .5 }); return M.current && X.observe(M.current), () => { X.disconnect() } } }, [u]), S.useEffect(() => { if (c) { let k = setTimeout(() => { g(!0) }, 100); return () => { clearTimeout(k) } } }, [c]); let H = () => { m(!0) }, L = () => { m(!1), g(!1) }; return f ? u !== "intent" ? [h, M, {}] : [h, M, { onFocus: Vn(j, H), onBlur: Vn(v, L), onMouseEnter: Vn(p, H), onMouseLeave: Vn(E, L), onTouchStart: Vn(C, H) }] : [!1, M, {}] } function Vn(u, o) { return f => { u && u(f), f.defaultPrevented || o(f) } } function z1({ page: u, ...o }) { let f = Ly(), { nonce: c } = zu(), { router: m } = gc(), h = S.useMemo(() => e0(m.routes, u, m.basename), [m.routes, u, m.basename]); return h ? (o.nonce == null && c && (o = { ...o, nonce: c }), f ? S.createElement(w1, { page: u, matches: h, ...o }) : S.createElement(A1, { page: u, matches: h, ...o })) : null } function C1(u) { let { manifest: o, routeModules: f } = zu(), [c, m] = S.useState([]); return S.useEffect(() => { let h = !1; return x1(u, o, f).then(g => { h || m(g) }), () => { h = !0 } }, [u, o, f]), c } function w1({ page: u, matches: o, ...f }) { let c = ca(), { future: m } = zu(), { basename: h } = gc(), g = S.useMemo(() => { if (u === c.pathname + c.search + c.hash) return []; let j = v0(u, h, m.v8_trailingSlashAwareDataRequests, "rsc"), v = !1, p = []; for (let E of o) typeof E.route.shouldRevalidate == "function" ? v = !0 : p.push(E.route.id); return v && p.length > 0 && j.searchParams.set("_routes", p.join(",")), [j.pathname + j.search] }, [h, m.v8_trailingSlashAwareDataRequests, u, c, o]); return S.createElement(S.Fragment, null, g.map(j => S.createElement("link", { key: j, rel: "prefetch", as: "fetch", href: j, ...f }))) } function A1({ page: u, matches: o, ...f }) { let c = ca(), { future: m, manifest: h, routeModules: g } = zu(), { basename: j } = gc(), { loaderData: v, matches: p } = E1(), E = S.useMemo(() => Ym(u, o, p, h, c, "data"), [u, o, p, h, c]), C = S.useMemo(() => Ym(u, o, p, h, c, "assets"), [u, o, p, h, c]), M = S.useMemo(() => { if (u === c.pathname + c.search + c.hash) return []; let k = new Set, X = !1; if (o.forEach(B => { var te; let V = h.routes[B.route.id]; !V || !V.hasLoader || (!E.some(le => le.route.id === B.route.id) && B.route.id in v && ((te = g[B.route.id]) != null && te.shouldRevalidate) || V.hasClientLoader ? X = !0 : k.add(B.route.id)) }), k.size === 0) return []; let q = v0(u, j, m.v8_trailingSlashAwareDataRequests, "data"); return X && k.size > 0 && q.searchParams.set("_routes", o.filter(B => k.has(B.route.id)).map(B => B.route.id).join(",")), [q.pathname + q.search] }, [j, m.v8_trailingSlashAwareDataRequests, v, c, h, E, o, u, g]), H = S.useMemo(() => b1(C, h), [C, h]), L = C1(C); return S.createElement(S.Fragment, null, M.map(k => S.createElement("link", { key: k, rel: "prefetch", as: "fetch", href: k, ...f })), H.map(k => S.createElement("link", { key: k, rel: "modulepreload", href: k, ...f })), L.map(({ key: k, link: X }) => S.createElement("link", { key: k, nonce: f.nonce, ...X, crossOrigin: X.crossOrigin ?? f.crossOrigin }))) } function R1(...u) { return o => { u.forEach(f => { typeof f == "function" ? f(o) : f != null && (f.current = o) }) } } var M1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"; try { M1 && (window.__reactRouterVersion = "7.18.2") } catch { } function D1({ basename: u, children: o, useTransitions: f, window: c }) { let m = S.useRef(); m.current == null && (m.current = oy({ window: c, v5Compat: !0 })); let h = m.current, [g, j] = S.useState({ action: h.action, location: h.location }), v = S.useCallback(p => { f === !1 ? j(p) : S.startTransition(() => j(p)) }, [f]); return S.useLayoutEffect(() => h.listen(v), [h, v]), S.createElement(r1, { basename: u, children: o, location: g.location, navigationType: g.action, navigator: h, useTransitions: f }) } var Gl = S.forwardRef(function ({ onClick: o, discover: f = "render", prefetch: c = "none", relative: m, reloadDocument: h, replace: g, mask: j, state: v, target: p, to: E, preventScrollReset: C, viewTransition: M, defaultShouldRevalidate: H, ...L }, k) { let { basename: X, navigator: q, useTransitions: B } = S.useContext(wt), V = typeof E == "string" && fc.test(E), te = s0(E, X); E = te.to; let le = Qy(E, { relative: m }), ve = ca(), W = null; if (j) { let Ue = dc(j, [], ve.mask ? ve.mask.pathname : "/", !0); X !== "/" && (Ue.pathname = Ue.pathname === "/" ? X : Ot([X, Ue.pathname])), W = q.createHref(Ue) } let [Me, Ke, Ut] = T1(c, L), yt = U1(E, { replace: g, mask: j, state: v, target: p, preventScrollReset: C, relative: m, viewTransition: M, defaultShouldRevalidate: H, useTransitions: B }); function Je(Ue) { o && o(Ue), Ue.defaultPrevented || yt(Ue) } let Bt = !(te.isExternal || h), gt = S.createElement("a", { ...L, ...Ut, href: (Bt ? W : void 0) || te.absoluteURL || le, onClick: Bt ? Je : o, ref: R1(k, Ke), target: p, "data-discover": !V && f === "render" ? "true" : void 0 }); return Me && !V ? S.createElement(S.Fragment, null, gt, S.createElement(z1, { page: le })) : gt }); Gl.displayName = "Link"; var sc = S.forwardRef(function ({ "aria-current": o = "page", caseSensitive: f = !1, className: c = "", end: m = !1, style: h, to: g, viewTransition: j, children: v, ...p }, E) { let C = Kn(g, { relative: p.relative }), M = ca(), H = S.useContext(Eu), { navigator: L, basename: k } = S.useContext(wt), X = H != null && k1(C) && j === !0, q = L.encodeLocation ? L.encodeLocation(C).pathname : C.pathname, B = M.pathname, V = H && H.navigation && H.navigation.location ? H.navigation.location.pathname : null; f || (B = B.toLowerCase(), V = V ? V.toLowerCase() : null, q = q.toLowerCase()), V && k && (V = ra(V, k) || V); const te = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length; let le = B === q || !m && B.startsWith(q) && B.charAt(te) === "/", ve = V != null && (V === q || !m && V.startsWith(q) && V.charAt(q.length) === "/"), W = { isActive: le, isPending: ve, isTransitioning: X }, Me = le ? o : void 0, Ke; typeof c == "function" ? Ke = c(W) : Ke = [c, le ? "active" : null, ve ? "pending" : null, X ? "transitioning" : null].filter(Boolean).join(" "); let Ut = typeof h == "function" ? h(W) : h; return S.createElement(Gl, { ...p, "aria-current": Me, className: Ke, ref: E, style: Ut, to: g, viewTransition: j }, typeof v == "function" ? v(W) : v) }); sc.displayName = "NavLink"; var _1 = S.forwardRef(({ discover: u = "render", fetcherKey: o, navigate: f, reloadDocument: c, replace: m, state: h, method: g = bu, action: j, onSubmit: v, relative: p, preventScrollReset: E, viewTransition: C, defaultShouldRevalidate: M, ...H }, L) => { let { useTransitions: k } = S.useContext(wt), X = L1(), q = q1(j, { relative: p }), B = g.toLowerCase() === "get" ? "get" : "post", V = typeof j == "string" && fc.test(j), te = le => { if (v && v(le), le.defaultPrevented) return; le.preventDefault(); let ve = le.nativeEvent.submitter, W = (ve == null ? void 0 : ve.getAttribute("formmethod")) || g, Me = () => X(ve || le.currentTarget, { fetcherKey: o, method: W, navigate: f, replace: m, state: h, relative: p, preventScrollReset: E, viewTransition: C, defaultShouldRevalidate: M }); k && f !== !1 ? S.startTransition(() => Me()) : Me() }; return S.createElement("form", { ref: L, method: B, action: q, onSubmit: c ? v : te, ...H, "data-discover": !V && u === "render" ? "true" : void 0 }) }); _1.displayName = "Form"; function O1(u) { return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.` } function x0(u) { let o = S.useContext(Ql); return we(o, O1(u)), o } function U1(u, { target: o, replace: f, mask: c, state: m, preventScrollReset: h, relative: g, viewTransition: j, defaultShouldRevalidate: v, useTransitions: p } = {}) { let E = Zy(), C = ca(), M = Kn(u, { relative: g }); return S.useCallback(H => { if (m1(H, o)) { H.preventDefault(); let L = f !== void 0 ? f : Qn(C) === Qn(M), k = () => E(u, { replace: L, mask: c, state: m, preventScrollReset: h, relative: g, viewTransition: j, defaultShouldRevalidate: v }); p ? S.startTransition(() => k()) : k() } }, [C, E, M, f, c, m, o, u, h, g, j, v, p]) } var B1 = 0, H1 = () => `__${String(++B1)}__`; function L1() { let { router: u } = x0("useSubmit"), { basename: o } = S.useContext(wt), f = l1(), c = u.fetch, m = u.navigate; return S.useCallback(async (h, g = {}) => { let { action: j, method: v, encType: p, formData: E, body: C } = y1(h, o); if (g.navigate === !1) { let M = g.fetcherKey || H1(); await c(M, f, g.action || j, { defaultShouldRevalidate: g.defaultShouldRevalidate, preventScrollReset: g.preventScrollReset, formData: E, body: C, formMethod: g.method || v, formEncType: g.encType || p, flushSync: g.flushSync }) } else await m(g.action || j, { defaultShouldRevalidate: g.defaultShouldRevalidate, preventScrollReset: g.preventScrollReset, formData: E, body: C, formMethod: g.method || v, formEncType: g.encType || p, replace: g.replace, state: g.state, fromRouteId: f, flushSync: g.flushSync, viewTransition: g.viewTransition }) }, [c, m, o, f]) } function q1(u, { relative: o } = {}) { let { basename: f } = S.useContext(wt), c = S.useContext(sa); we(c, "useFormAction must be used inside a RouteContext"); let [m] = c.matches.slice(-1), h = { ...Kn(u || ".", { relative: o }) }, g = ca(); if (u == null) { h.search = g.search; let j = new URLSearchParams(h.search), v = j.getAll("index"); if (v.some(E => E === "")) { j.delete("index"), v.filter(C => C).forEach(C => j.append("index", C)); let E = j.toString(); h.search = E ? `?${E}` : "" } } return (!u || u === ".") && m.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), f !== "/" && (h.pathname = h.pathname === "/" ? f : Ot([f, h.pathname])), Qn(h) } function k1(u, { relative: o } = {}) { let f = S.useContext(f0); we(f != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"); let { basename: c } = x0("useViewTransitionState"), m = Kn(u, { relative: o }); if (!f.isTransitioning) return !1; let h = ra(f.currentLocation.pathname, c) || f.currentLocation.pathname, g = ra(f.nextLocation.pathname, c) || f.nextLocation.pathname; return ju(m.pathname, g) != null || ju(m.pathname, h) != null }/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1 = u => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), b0 = (...u) => u.filter((o, f, c) => !!o && o.trim() !== "" && c.indexOf(o) === f).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G1 = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1 = S.forwardRef(({ color: u = "currentColor", size: o = 24, strokeWidth: f = 2, absoluteStrokeWidth: c, className: m = "", children: h, iconNode: g, ...j }, v) => S.createElement("svg", { ref: v, ...G1, width: o, height: o, stroke: u, strokeWidth: c ? Number(f) * 24 / Number(o) : f, className: b0("lucide", m), ...j }, [...g.map(([p, E]) => S.createElement(p, E)), ...Array.isArray(h) ? h : [h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he = (u, o) => { const f = S.forwardRef(({ className: c, ...m }, h) => S.createElement(X1, { ref: h, iconNode: o, className: b0(`lucide-${Y1(u)}`, c), ...m })); return f.displayName = `${u}`, f };/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua = he("ArrowRight", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1 = he("ArrowUp", [["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }], ["path", { d: "M12 19V5", key: "x0mq9r" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1 = he("Award", [["path", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", key: "1yiouv" }], ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1 = he("BriefcaseBusiness", [["path", { d: "M12 12h.01", key: "1mp3jc" }], ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2", key: "1ksdt3" }], ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0", key: "12hx5q" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1 = he("Briefcase", [["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn = he("CalendarCheck", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }], ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1 = he("CarFront", [["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }], ["path", { d: "M7 14h.01", key: "1qa3f1" }], ["path", { d: "M17 14h.01", key: "7oqj8z" }], ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }], ["path", { d: "M5 18v2", key: "ppbyun" }], ["path", { d: "M19 18v2", key: "gy7782" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al = he("Car", [["path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2", key: "5owen" }], ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }], ["path", { d: "M9 17h6", key: "r8uit2" }], ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1 = he("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1 = he("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn = he("CircleCheck", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0 = he("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1 = he("Globe", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu = he("Headphones", [["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3", key: "1xhozi" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1 = he("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1 = he("Luggage", [["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2", key: "1m57jg" }], ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" }], ["path", { d: "M10 20h4", key: "ni2waw" }], ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }], ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0 = he("Mail", [["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }], ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua = he("MapPin", [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg = he("Menu", [["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }], ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }], ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc = he("MessageCircle", [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg = he("PartyPopper", [["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }], ["path", { d: "M4 3h.01", key: "1vcuye" }], ["path", { d: "M22 8h.01", key: "1mrtc2" }], ["path", { d: "M15 2h.01", key: "1cjtqr" }], ["path", { d: "M22 20h.01", key: "1mrys2" }], ["path", { d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10", key: "hbicv8" }], ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17", key: "1i94pl" }], ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7", key: "1cofks" }], ["path", { d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z", key: "4kbmks" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag = he("PhoneCall", [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", key: "foiqr5" }], ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }], ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu = he("Phone", [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z", key: "foiqr5" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0 = he("Plane", [["path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z", key: "1v9wt8" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc = he("Route", [["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }], ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }], ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba = he("ShieldCheck", [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl = he("Sparkles", [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", key: "4pj2yx" }], ["path", { d: "M20 3v4", key: "1olli1" }], ["path", { d: "M22 5h-4", key: "1gvqau" }], ["path", { d: "M4 17v2", key: "vumght" }], ["path", { d: "M5 18H3", key: "zchphs" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg = he("Timer", [["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }], ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }], ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng = he("UsersRound", [["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }], ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }], ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn = he("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0 = he("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]), cc = [{ label: "Home", href: "/" }, { label: "Services", href: "/service" }, { label: "Vehicles", href: "/vehicles" }, { label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }], oe = { name: "Gitam Tours & Travels", phone: "+91XXXXXXXXXX", whatsapp: "+91XXXXXXXXXX", email: "info@gitamtravel.com", address: "Pune, Maharashtra, India" }; function $l({ onBook: u }) {
  const [o, f] = S.useState(!1), [c, m] = S.useState(!1); return S.useEffect(() => { const h = () => { m(window.scrollY > 24) }; return h(), window.addEventListener("scroll", h, { passive: !0 }), () => { window.removeEventListener("scroll", h) } }, []), r.jsxs("header", {
    className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${c ? "bg-white/95 shadow-md backdrop-blur-xl" : "bg-ink/60 backdrop-blur-md"}`, children: [r.jsxs("nav", {
      className: "mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [r.jsxs(Gl, { to: "/", className: "flex min-w-0 items-center gap-3", onClick: () => f(!1), children: [r.jsx("span", { className: "grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-sunset text-sm font-black text-white shadow-glow", children: "GT" }), r.jsxs("span", { className: "min-w-0", children: [r.jsx("span", { className: `block truncate font-display text-xl font-semibold transition-colors duration-300 ${c ? "text-ink" : "text-white"}`, children: oe.name }), r.jsx("span", { className: "hidden text-xs uppercase tracking-[0.26em] text-champagne/70 sm:block", children: "Premium Travel" })] })] }), r.jsx("div", {
        className: "hidden items-center gap-7 lg:flex", children: cc.map(h => r.jsx(sc, {
          to: h.href, className: ({ isActive: g }) => `relative py-2 text-sm font-medium transition-colors duration-300
     after:absolute after:bottom-0 after:left-0
     after:h-[3px] after:rounded-full
     after:bg-gold
     after:transition-all after:duration-300
     ${g ? "text-gold after:w-full" : c ? "text-ink/75 hover:text-gold after:w-0 hover:after:w-full" : "text-white/80 hover:text-gold after:w-0 hover:after:w-full"}`, children: h.label
        }, h.href))
      }), r.jsx("div", { className: "hidden items-center gap-3 lg:flex", children: r.jsx("button", { onClick: () => u(), className: "btn-primary text-white shadow-none hover:shadow-none", children: "Book Now" }) }), r.jsx("button", { onClick: () => f(h => !h), className: `grid size-11 place-items-center duration-300 lg:hidden ${c ? "text-gray-900" : "text-white"}`, "aria-label": "Toggle navigation", children: o ? r.jsx(E0, { size: 22, strokeWidth: 2.5, className: c ? "text-gray-900" : "text-white" }) : r.jsx(eg, { size: 22, strokeWidth: 2.5, className: c ? "text-gray-900" : "text-white" }) })]
    }), r.jsx("div", { className: `overflow-hidden border-t transition-all duration-300 lg:hidden ${o ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} ${c ? "border-gray-200 bg-white" : "border-white/10 bg-ink"}`, children: r.jsxs("div", { className: "space-y-2 px-4 py-5", children: [cc.map(h => r.jsx(sc, { to: h.href, onClick: () => f(!1), className: ({ isActive: g }) => `block rounded-2xl border-l-4 px-4 py-3.5 text-base font-medium transition-all duration-200 ${g ? c ? "border-gold bg-gold/10 text-gold" : "border-gold bg-white/10 text-gold" : c ? "border-transparent text-ink hover:bg-gold/10 hover:text-gold" : "border-transparent text-white hover:bg-white/10 hover:text-gold"}`, children: h.label }, h.href)), r.jsx("button", { onClick: () => { f(!1), u() }, className: "btn-primary mt-3 w-full", children: "Book Now" })] }) })]
  })
} function ig() {
  const u = ["Airport Transfer", "Outstation Trips", "Local Travel", "Corporate Travel", "Family Trips"]; return r.jsxs("footer", {
    className: "bg-ink pb-10 pt-14 text-white", children: [r.jsxs("div", {
      className: "mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8", children: [r.jsxs("div", { children: [r.jsx(Gl, { to: "/", className: "font-display text-2xl font-semibold transition-colors hover:text-gold", children: oe.name }), r.jsx("p", { className: "mt-4 leading-7 text-white/65", children: "Premium car rental and travel services for safe, clean and comfortable journeys." })] }), r.jsxs("div", {
        children: [r.jsx("h4", { className: "font-semibold text-gold", children: "Quick Links" }), r.jsx("div", {
          className: "mt-4 space-y-3", children: cc.map(o => r.jsx(Gl, {
            to: o.href, className: `
                  block
                  text-white/68
                  transition-colors
                  duration-200
                  hover:text-gold
                `, children: o.label
          }, o.href))
        })]
      }), r.jsxs("div", {
        children: [r.jsx("h4", { className: "font-semibold text-gold", children: "Our Services" }), r.jsx("div", {
          className: "mt-4 space-y-3", children: u.map(o => r.jsx(Gl, {
            to: "/services", className: `
                  block
                  text-white/68
                  transition-colors
                  duration-200
                  hover:text-gold
                `, children: o
          }, o))
        })]
      }), r.jsxs("div", { children: [r.jsx("h4", { className: "font-semibold text-gold", children: "Contact" }), r.jsxs("div", { className: "mt-4 space-y-3 text-white/68", children: [r.jsx("a", { href: `tel:${oe.phone}`, className: "block transition-colors hover:text-gold", children: oe.phone }), r.jsx("a", { href: `https://wa.me/${oe.whatsapp}`, target: "_blank", rel: "noopener noreferrer", className: "block transition-colors hover:text-gold", children: oe.whatsapp }), r.jsx("a", { href: `mailto:${oe.email}`, className: "block break-words transition-colors hover:text-gold", children: oe.email }), r.jsx("p", { children: oe.address })] })] })]
    }), r.jsx("div", {
      className: `
          mx-auto
          mt-10
          max-w-7xl
          border-t
          border-white/10
          px-4
          pt-6
          text-sm
          text-white/50
          sm:px-6
          lg:px-8
        `, children: "© 2026 Gitam Tours & Travels. All Rights Reserved."
    })]
  })
} const Xl = [{ id: "swift-dzire", name: "Swift Dzire", category: "4 Seater", seats: 4, image: "/images/s-1.png", description: "Comfortable & economical rides for city travel and outstation journeys.", features: ["AC", "Comfortable interiors", "Best for city & outstation travel", "Economical"] }, { id: "ertiga", name: "Maruti Ertiga", category: "7 Seater", seats: 7, image: "/images/ertiga.png", description: "Spacious family travel with comfort for group journeys.", features: ["AC", "Spacious interiors", "Family friendly", "Perfect for group travel"] }, { id: "innova-crysta", name: "Toyota Innova Crysta", category: "11 Seater", seats: 11, image: "/images/s-2.png", description: "Premium comfort for family trips, corporate travel and long journeys.", features: ["AC", "Premium interiors", "Large luggage space", "Best for family & group travel"] }], Gm = { "4 Seater": Xl, "7 Seater": Xl.filter(u => u.seats >= 7), "11 Seater": Xl.filter(u => u.seats >= 11) }, ug = ["06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM"], rg = ["1 Day", "2 Days", "3 Days", "4 Days", "5 Days", "Custom"], sg = (u, o) => {
  const f = u.duration === "Custom" ? `${u.customDays} Days` : u.duration; return ["New Booking Request", "", `Passenger: ${u.passengerName}`, `Mobile: ${u.mobileNumber}`, "", `Pickup: ${u.pickupLocation}`, `Drop: ${u.dropLocation}`, "", `Date: ${u.pickupDate}`, `Time: ${u.pickupTime}`, "", `Vehicle Category: ${u.vehicleCategory}`, `Vehicle: ${(o == null ? void 0 : o.name) || ""}`, "", `Duration: ${f}`, `Number of passengers: ${u.passengers}`].join(`
`)
}, Xm = u => { const o = `https://wa.me/${oe.whatsapp}?text=${encodeURIComponent(u)}`; window.open(o, "_blank", "noopener,noreferrer") }, cg = async (u, o) => { if (!oe.formspreeEndpoint) return { skipped: !0 }; const f = await fetch(oe.formspreeEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ subject: "New Booking Request - Gitam Tours & Travels", booking: u, selectedVehicle: o == null ? void 0 : o.name, agencyEmail: oe.email }) }); if (!f.ok) throw new Error("Email service failed"); return f.json() }, T0 = () => new Date().toISOString().split("T")[0], Vm = u => !String(u || "").trim(), lc = u => { const o = {}, f = u.pickupLocation.trim().toLowerCase(), c = u.dropLocation.trim().toLowerCase(); return Vm(u.pickupLocation) && (o.pickupLocation = "Pickup location is required."), Vm(u.dropLocation) && (o.dropLocation = "Drop location is required."), f && c && f === c && (o.dropLocation = "Pickup and drop locations must be different."), u.pickupDate || (o.pickupDate = "Pickup date is required."), u.pickupDate && u.pickupDate < T0() && (o.pickupDate = "Please select today or a future date."), u.pickupTime || (o.pickupTime = "Pickup time is required."), u.vehicleCategory || (o.vehicleCategory = "Vehicle category is required."), u.vehicleId || (o.vehicleId = "Please select a vehicle."), u.duration || (o.duration = "Duration is required."), u.duration === "Custom" && (!u.customDays || Number(u.customDays) < 1) && (o.customDays = "Enter a valid number of days."), /^[A-Za-z ]{2,}$/.test(u.passengerName.trim()) || (o.passengerName = "Please enter a valid passenger name."), /^[6-9]\d{9}$/.test(u.mobileNumber.trim()) || (o.mobileNumber = "Please enter a valid 10-digit mobile number."), (!u.passengers || Number(u.passengers) < 1) && (o.passengers = "Enter passenger count."), o }, Qm = u => { const o = {}; return /^[A-Za-z ]{2,}$/.test(u.name.trim()) || (o.name = "Please enter a valid name."), /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u.email.trim()) || (o.email = "Please enter a valid email."), /^[A-Za-z ]{2,}$/.test(u.name.trim()) || (o.subject = "Please enter a valid subject."), /^[6-9]\d{9}$/.test(u.phone.trim()) || (o.phone = "Please enter a valid 10-digit mobile number."), u.message.trim().length < 8 && (o.message = "Please enter a message."), o }, vu = { pickupLocation: "", dropLocation: "", pickupDate: "", pickupTime: "", vehicleCategory: "", vehicleId: "", duration: "", customDays: "", passengerName: "", mobileNumber: "", passengers: "" }; function Dt({ message: u }) { return u ? r.jsx("p", { className: "mt-1.5 text-xs font-medium text-red-600", children: u }) : null } function _t(u, o, f) { return u[f] ? "border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-100" : o[f] ? "border-emerald-300 bg-emerald-50/40 focus:border-emerald-500 focus:ring-emerald-100" : "border-slate-200 bg-white focus:border-gold focus:ring-gold/10" } function og({ isOpen: u, onClose: o, preselectedVehicle: f }) { const [c, m] = S.useState(vu), [h, g] = S.useState({}), [j, v] = S.useState({}), [p, E] = S.useState("idle"), C = S.useMemo(() => c.vehicleCategory ? Gm[c.vehicleCategory] || [] : [], [c.vehicleCategory]), M = Xl.find(B => B.id === c.vehicleId); S.useEffect(() => { if (u) return document.body.style.overflow = "hidden", () => { document.body.style.overflow = "" } }, [u]), S.useEffect(() => { u && (m(vu), g({}), v({}), E("idle")) }, [u]), S.useEffect(() => { if (!c.vehicleCategory) { c.vehicleId && m(V => ({ ...V, vehicleId: "" })); return } !C.some(V => V.id === c.vehicleId) && c.vehicleId && m(V => ({ ...V, vehicleId: "" })) }, [c.vehicleCategory, c.vehicleId, C]); const H = (B, V) => { let te = V; B === "passengerName" && (te = V.replace(/[^A-Za-z ]/g, "")), B === "mobileNumber" && (te = V.replace(/\D/g, "").slice(0, 10)), B === "passengers" && (te = V.replace(/\D/g, ""), te !== "" && Number(te) > 11 && (te = "11")), B === "customDays" && (te = V.replace(/\D/g, "")); const le = { ...c, [B]: te }; B === "vehicleCategory" && (le.vehicleId = ""), B === "duration" && te !== "Custom" && (le.customDays = ""), m(le), (j[B] || h[B]) && g(lc(le)) }, L = B => { const V = { ...j, [B]: !0 }; v(V), g(lc(c)) }, k = async B => { B.preventDefault(); const V = lc(c); if (g(V), v(Object.keys(c).reduce((le, ve) => ({ ...le, [ve]: !0 }), {})), Object.keys(V).length) return; E("loading"); const te = sg(c, M); try { await cg(c, M), window.setTimeout(() => { Xm(te) }, 250), E("success") } catch { window.setTimeout(() => { Xm(te) }, 250), E("success") } }, X = () => { m(vu), g({}), v({}), E("idle") }, q = () => { m(vu), g({}), v({}), E("idle"), o() }; return u ? r.jsx("div", { className: "fixed inset-0 z-[80] flex items-end justify-center bg-ink/72 px-0 backdrop-blur-sm sm:items-center sm:px-4", children: r.jsxs("div", { className: "modal-panel max-h-[94vh] w-full overflow-hidden bg-white shadow-premium sm:max-w-3xl", children: [r.jsxs("div", { className: "sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white/95 px-5 py-5 backdrop-blur sm:px-7", children: [r.jsxs("div", { children: [r.jsx("h2", { className: "font-display text-3xl font-semibold text-ink", children: "Book Your Ride" }), r.jsx("p", { className: "mt-1 text-sm text-slate-500", children: "Fill in your trip details and we'll get back to you shortly." })] }), r.jsx("button", { onClick: q, className: "grid size-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200", "aria-label": "Close booking form", children: r.jsx(E0, { size: 20 }) })] }), p === "success" ? r.jsxs("div", { className: "px-5 py-10 text-center sm:px-10", children: [r.jsx("div", { className: "mx-auto grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600", children: r.jsx(Fn, { size: 34 }) }), r.jsx("h3", { className: "mt-5 font-display text-3xl font-semibold text-ink", children: "Booking Request Sent Successfully!" }), r.jsx("p", { className: "mx-auto mt-3 max-w-md text-slate-600", children: "Thank you for choosing Gitam Tours & Travels. Our team will contact you shortly." }), r.jsxs("div", { className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row", children: [r.jsx("button", { onClick: q, className: "btn-secondary border-slate-200 text-ink", children: "Close" }), r.jsx("button", { onClick: X, className: "btn-primary", children: "Book Another Ride" })] })] }) : r.jsxs("form", { onSubmit: k, noValidate: !0, className: "max-h-[calc(94vh-88px)] overflow-y-auto px-5 py-6 sm:px-7", children: [r.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [r.jsxs("label", { className: "form-label", children: ["Pickup Location", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsx("input", { type: "text", className: `form-input ${_t(h, j, "pickupLocation")}`, placeholder: "Enter pickup location", value: c.pickupLocation, onBlur: () => L("pickupLocation"), onChange: B => H("pickupLocation", B.target.value) }), r.jsx(Dt, { message: h.pickupLocation })] }), r.jsxs("label", { className: "form-label", children: ["Drop Location", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsx("input", { type: "text", className: `form-input ${_t(h, j, "dropLocation")}`, placeholder: "Enter drop location", value: c.dropLocation, onBlur: () => L("dropLocation"), onChange: B => H("dropLocation", B.target.value) }), r.jsx(Dt, { message: h.dropLocation })] }), r.jsxs("label", { className: "form-label", children: ["Pickup Date", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsx("input", { type: "date", min: T0(), className: `form-input ${_t(h, j, "pickupDate")}`, value: c.pickupDate, onBlur: () => L("pickupDate"), onChange: B => H("pickupDate", B.target.value) }), r.jsx(Dt, { message: h.pickupDate })] }), r.jsxs("label", { className: "form-label", children: ["Pickup Time", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsxs("select", { className: `form-input ${_t(h, j, "pickupTime")}`, value: c.pickupTime, onBlur: () => L("pickupTime"), onChange: B => H("pickupTime", B.target.value), children: [r.jsx("option", { value: "", children: "Select Pickup Time" }), ug.map(B => r.jsx("option", { value: B, children: B }, B))] }), r.jsx(Dt, { message: h.pickupTime })] }), r.jsxs("label", { className: "form-label", children: ["Vehicle Category", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsxs("select", { className: `form-input ${_t(h, j, "vehicleCategory")}`, value: c.vehicleCategory, onBlur: () => L("vehicleCategory"), onChange: B => H("vehicleCategory", B.target.value), children: [r.jsx("option", { value: "", children: "Select Vehicle Category" }), Object.keys(Gm).map(B => r.jsx("option", { value: B, children: B }, B))] }), r.jsx(Dt, { message: h.vehicleCategory })] }), r.jsxs("label", { className: "form-label", children: ["Vehicle Selection", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsxs("select", { className: `form-input ${_t(h, j, "vehicleId")}`, value: c.vehicleId, disabled: !c.vehicleCategory, onBlur: () => L("vehicleId"), onChange: B => H("vehicleId", B.target.value), children: [r.jsx("option", { value: "", children: c.vehicleCategory ? "Select Vehicle" : "Select Category First" }), C.map(B => r.jsx("option", { value: B.id, children: B.name }, B.id))] }), r.jsx(Dt, { message: h.vehicleId })] }), r.jsxs("label", { className: "form-label", children: ["Duration", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsxs("select", { className: `form-input ${_t(h, j, "duration")}`, value: c.duration, onBlur: () => L("duration"), onChange: B => H("duration", B.target.value), children: [r.jsx("option", { value: "", children: "Select Duration" }), rg.map(B => r.jsx("option", { value: B, children: B }, B))] }), r.jsx(Dt, { message: h.duration })] }), c.duration === "Custom" && r.jsxs("label", { className: "form-label", children: ["Number of Days", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsx("input", { type: "number", min: "1", className: `form-input ${_t(h, j, "customDays")}`, placeholder: "Enter number of days", value: c.customDays, onBlur: () => L("customDays"), onChange: B => H("customDays", B.target.value) }), r.jsx(Dt, { message: h.customDays })] }), r.jsxs("label", { className: "form-label", children: ["Passenger Name", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsx("input", { type: "text", className: `form-input ${_t(h, j, "passengerName")}`, placeholder: "Enter passenger name", value: c.passengerName, onBlur: () => L("passengerName"), onChange: B => H("passengerName", B.target.value) }), r.jsx(Dt, { message: h.passengerName })] }), r.jsxs("label", { className: "form-label", children: ["Mobile Number", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsx("input", { type: "tel", inputMode: "numeric", maxLength: 10, className: `form-input ${_t(h, j, "mobileNumber")}`, placeholder: "Enter 10-digit mobile number", value: c.mobileNumber, onBlur: () => L("mobileNumber"), onChange: B => H("mobileNumber", B.target.value) }), r.jsx(Dt, { message: h.mobileNumber })] }), r.jsxs("label", { className: "form-label", children: ["Number of Passengers", r.jsx("span", { className: "ml-1 text-red-500", children: "*" }), r.jsx("input", { type: "number", min: "1", max: "11", className: `form-input ${_t(h, j, "passengers")}`, placeholder: "Enter number of passengers", value: c.passengers, onBlur: () => L("passengers"), onChange: B => H("passengers", B.target.value) }), r.jsx(Dt, { message: h.passengers })] })] }), r.jsx("button", { type: "submit", disabled: p === "loading", className: "btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70", children: p === "loading" ? r.jsxs(r.Fragment, { children: [r.jsx(I1, { className: "animate-spin", size: 18 }), "Processing Booking..."] }) : "Book Now" })] })] }) }) : null } function In({ eyebrow: u, title: o, subtitle: f, align: c = "center" }) { return r.jsxs("div", { className: `mx-auto max-w-3xl ${c === "left" ? "text-left" : "text-center"}`, children: [u && r.jsxs("span", { className: "badge-pill", children: [r.jsx("span", { className: "size-1.5 rounded-full bg-ocean" }), u] }), r.jsx("h2", { className: "mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl", children: o }), f && r.jsx("p", { className: "mt-4 text-base leading-7 text-slate-600", children: f })] }) } const fg = [["10+", "Years of Experience", "bg-champagne/70"], ["500+", "Happy Customers", "bg-ocean/10"], ["1000+", "Successful Trips", "bg-jade/10"]], dg = [{ icon: Ba, text: "Safe rides", color: "text-gold" }, { icon: lg, text: "On-time trips", color: "text-sunny" }, { icon: K1, text: "Clean cars", color: "text-ocean" }]; function mg({ value: u, isVisible: o, duration: f = 1800 }) { const [c, m] = S.useState(0); return S.useEffect(() => { if (!o) return; const h = parseInt(u.replace(/\D/g, ""), 10); let g = null, j; const v = p => { g || (g = p); const E = Math.min((p - g) / f, 1), C = 1 - Math.pow(1 - E, 3); m(Math.floor(C * h)), E < 1 ? j = requestAnimationFrame(v) : m(h) }; return j = requestAnimationFrame(v), () => { cancelAnimationFrame(j) } }, [o, u, f]), r.jsxs(r.Fragment, { children: [c, u.includes("+") && "+"] }) } function hg() { const u = S.useRef(null), [o, f] = S.useState(!1); return S.useEffect(() => { const c = new IntersectionObserver(([m]) => { m.isIntersecting && (f(!0), c.disconnect()) }, { threshold: .15 }); return u.current && c.observe(u.current), () => { c.disconnect() } }, []), r.jsx("section", { ref: u, id: "about", className: "section overflow-hidden bg-white", children: r.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8", children: [r.jsxs("div", { className: `transform transition-all duration-1000 ease-out ${o ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`, children: [r.jsx(In, { eyebrow: "About Gitam", title: "Your Journey, Our Responsibility", align: "left" }), r.jsx("p", { className: "mt-6 text-lg leading-8 text-slate-600", children: "Gitam Tours & Travels provides reliable, comfortable and affordable transportation solutions for city rides, airport transfers, family trips, corporate travel and outstation journeys. Our focus is on safety, punctuality, clean vehicles and a smooth travel experience from the first call to the final drop." }), r.jsx("div", { className: "mt-8 grid grid-cols-3 gap-3", children: fg.map(([c, m, h], g) => r.jsxs("div", { className: `transform rounded-2xl border border-slate-100 ${h} p-4 transition-all duration-700 ${o ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`, style: { transitionDelay: `${400 + g * 150}ms` }, children: [r.jsx("p", { className: "font-display text-2xl font-semibold text-ink sm:text-3xl", children: r.jsx(mg, { value: c, isVisible: o, duration: 1800 }) }), r.jsx("p", { className: "mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 sm:text-xs", children: m })] }, m)) })] }), r.jsx("div", { className: `relative transform transition-all duration-1000 ease-out ${o ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`, style: { transitionDelay: "200ms" }, children: r.jsxs("div", { className: "group relative overflow-hidden rounded-[2rem] bg-ink shadow-premium", children: [r.jsx("img", { src: "/images/s-3.png", alt: "Premium road journey", className: `h-[420px] w-full object-cover opacity-80 transition-transform duration-[1400ms] ease-out ${o ? "scale-100" : "scale-110"} group-hover:scale-105`, loading: "lazy" }), r.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" }), r.jsx("div", { className: "absolute inset-x-5 bottom-5 grid gap-3 rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur-xl sm:grid-cols-3", children: dg.map(({ icon: c, text: m, color: h }, g) => r.jsxs("div", { className: `flex transform items-center gap-2 transition-all duration-700 ${o ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`, style: { transitionDelay: `${700 + g * 150}ms` }, children: [r.jsx(c, { className: `shrink-0 ${h}`, size: 20 }), r.jsx("span", { className: "text-sm font-medium", children: m })] }, m)) })] }) })] }) }) } const Zm = { name: "", email: "", phone: "", subject: "", message: "" }; function z0() {
  const u = S.useRef(null), [o, f] = S.useState(!1), [c, m] = S.useState(Zm), [h, g] = S.useState({}), [j, v] = S.useState(!1); S.useEffect(() => { const M = new IntersectionObserver(([H]) => { H.isIntersecting && (f(!0), M.disconnect()) }, { threshold: .15 }); return u.current && M.observe(u.current), () => { M.disconnect() } }, []); const p = M => { M.preventDefault(); const H = Qm(c); g(H), !Object.keys(H).length && (v(!0), m(Zm)) }, E = (M, H) => { const L = M === "phone" ? H.replace(/\D/g, "").slice(0, 10) : H, k = { ...c, [M]: L }; m(k), h[M] && g(Qm(k)) }, C = [[wu, "Phone", oe.phone, `tel:${oe.phone}`], [xc, "WhatsApp", oe.whatsapp, `https://wa.me/${oe.whatsapp}`], [j0, "Email", oe.email, `mailto:${oe.email}`], [ua, "Location", oe.address, "#contact"]]; return r.jsx("section", {
    ref: u, id: "contact", className: "section overflow-hidden bg-white", children: r.jsxs("div", {
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [r.jsx("div", { className: `transform transition-all duration-1000 ease-out ${o ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`, children: r.jsx(In, { eyebrow: "Contact Us", title: "Let's Plan Your Travel", subtitle: "Call, message, or send your trip details and the team will help you choose the right vehicle." }) }), r.jsxs("div", {
        className: "mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]", children: [r.jsx("div", {
          className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-1", children: C.map(([M, H, L, k], X) => r.jsxs("a", {
            href: k, className: `
                    premium-card
                    group
                    flex
                    items-center
                    gap-4
                    p-5
                    transform
                    transition-all
                    duration-700
                    ease-out
                    hover:-translate-y-1
                    ${o ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
                  `, style: { transitionDelay: `${200 + X * 150}ms` }, children: [r.jsx("span", {
              className: `
                      grid
                      size-12
                      shrink-0
                      place-items-center
                      rounded-2xl
                      bg-ink
                      text-gold
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-gold
                      group-hover:text-ink
                    `, children: r.jsx(M, { size: 22, strokeWidth: 2 })
            }), r.jsxs("span", {
              children: [r.jsx("span", {
                className: `
                        block
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wide
                        text-slate-500
                      `, children: H
              }), r.jsx("span", {
                className: `
                        mt-1
                        block
                        break-words
                        text-base
                        font-semibold
                        text-ink
                        transition-colors
                        duration-300
                        group-hover:text-gold
                      `, children: L
              })]
            })]
          }, H))
        }), r.jsxs("form", {
          onSubmit: p, className: `
              premium-card
              transform
              p-5
              
              transition-all
              duration-1000
              ease-out
              sm:p-7
              ${o ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}
            `, style: { transitionDelay: "300ms" }, children: [r.jsxs("div", {
            className: "grid gap-4  sm:grid-cols-2", children: [["name", "email", "phone", "subject"].map((M, H) => r.jsxs("label", {
              className: `
                      form-label
                      capitalize
                      transform
                      transition-all
                      duration-700
                      ${o ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                    `, style: { transitionDelay: `${500 + H * 100}ms` }, children: [M === "phone" ? "Phone" : M, r.jsx("input", { className: `form-input rounded-md ${h[M] ? "border-red-400 bg-red-50" : "border-slate-200 bg-white"}`, value: c[M], onChange: L => E(M, L.target.value), placeholder: M === "phone" ? "Enter mobile number" : `Enter ${M}` }), h[M] && r.jsx("p", { className: "mt-1.5 text-xs font-medium text-red-600", children: h[M] })]
            }, M)), r.jsxs("label", {
              className: `
                  form-label
                  transform
                  transition-all
                  duration-700
                  sm:col-span-2
                  ${o ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                `, style: { transitionDelay: "800ms" }, children: ["Message", r.jsx("textarea", { rows: "5", className: `form-input rounded-md resize-none ${h.message ? "border-red-400 bg-red-50" : "border-slate-200 bg-white"}`, value: c.message, onChange: M => E("message", M.target.value), placeholder: "Tell us about your trip" }), h.message && r.jsx("p", { className: "mt-1.5 text-xs font-medium text-red-600", children: h.message })]
            })]
          }), j && r.jsx("p", {
            className: `
                  mt-4
                  rounded-2xl
                  bg-emerald-50
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-emerald-700
                `, children: "Message ready. Our team will connect shortly."
          }), r.jsx("button", {
            type: "submit", className: `
                btn-primary
                mt-5
                w-full
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                active:translate-y-0
                sm:w-auto
              `, children: "Send Message"
          })]
        })]
      })]
    })
  })
} function pg({ onBook: u }) {
  const o = S.useRef(null), [f, c] = S.useState(!1); return S.useEffect(() => { const m = new IntersectionObserver(([h]) => { h.isIntersecting && (c(!0), m.disconnect()) }, { threshold: .2 }); return o.current && m.observe(o.current), () => { m.disconnect() } }, []), r.jsxs("section", {
    ref: o, className: "relative overflow-hidden bg-ink py-20 text-white", children: [r.jsx("img", {
      src: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80", alt: "Luxury car on open road", className: `
          absolute
          inset-0
          h-full
          w-full
          object-cover
          blur-[3px]
          transition-all
          duration-[1800ms]
          ease-out
          ${f ? "scale-100 opacity-100" : "scale-110 opacity-0"}
        `, loading: "lazy"
    }), r.jsx("div", { className: "absolute inset-0 bg-black/0 backdrop-blur-[4px]" }), r.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/10 via-black/55 to-black/10" }), r.jsxs("div", {
      className: `
          relative
          z-10
          mx-auto
          max-w-5xl
          px-4
          text-center
          transition-all
          duration-1000
          ease-out
          sm:px-6
          lg:px-8
          ${f ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
        `, children: [r.jsx("p", {
        className: `
            text-sm
            font-semibold
            uppercase
            tracking-[0.28em]
            text-gold
            transition-all
            duration-700
            ${f ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `, children: "Next Journey"
      }), r.jsx("h2", {
        className: `
            mt-4
            font-display
            text-4xl
            font-semibold
            transition-all
            duration-1000
            sm:text-5xl
            ${f ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `, style: { transitionDelay: "150ms" }, children: "Ready For Your Next Journey?"
      }), r.jsx("p", {
        className: `
            mx-auto
            mt-4
            max-w-2xl
            text-lg
            leading-8
            text-white/80
            transition-all
            duration-1000
            ${f ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `, style: { transitionDelay: "300ms" }, children: "Book your comfortable ride with Gitam Tours & Travels today."
      }), r.jsxs("div", {
        className: `
            mt-8
            flex
            flex-col
            justify-center
            gap-3
            transition-all
            duration-1000
            sm:flex-row
            ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `, style: { transitionDelay: "450ms" }, children: [r.jsx("button", {
          onClick: () => u(), className: `
              btn-primary
              transition-all
              duration-300
              text-white
              hover:-translate-y-1
              hover:shadow-xl
              active:translate-y-0
            `, children: "Book Your Ride"
        }), r.jsxs("a", {
          href: `tel:${oe.phone}`, className: `
              btn-secondary
              transition-all
              rounded-xl 
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              active:translate-y-0
            `, children: [r.jsx(ag, { size: 18, className: "transition-transform duration-300 group-hover:rotate-6" }), "Call Now"]
        })]
      })]
    })]
  })
} const yg = [{ icon: Ba, title: "24/7 Car Rental Support", text: "Get assistance whenever you need it." }, { icon: Jn, title: "Car Reservation Anytime", text: "Book your preferred vehicle whenever you need it." }, { icon: ua, title: "Lots Of Pickup Locations", text: "Convenient pickup options for your journey." }], gg = [{ icon: N0, title: "Airport Transfer", text: "Reliable airport pickup and drop services." }, { icon: bc, title: "Outstation Trips", text: "Comfortable long-distance travel for families and groups." }, { icon: al, title: "Local City Travel", text: "Convenient transportation for daily city travel." }, { icon: Z1, title: "Corporate Travel", text: "Professional transportation for business meetings and corporate requirements." }, { icon: Wn, title: "Family Trips", text: "Comfortable vehicles for family vacations and group journeys." }, { icon: tg, title: "Wedding & Events", text: "Transportation support for weddings, functions and special events." }], vg = [{ icon: Ba, title: "Safe & Reliable", text: "Professional and dependable travel services." }, { icon: Zl, title: "Clean & Comfortable Vehicles", text: "Well-maintained vehicles for a comfortable journey." }, { icon: Wn, title: "Experienced Drivers", text: "Professional drivers focused on safe travel." }, { icon: Jn, title: "Transparent Booking", text: "Simple and convenient booking process." }], $m = [{ bg: "bg-gold/12", text: "text-gold", hoverBg: "group-hover:bg-gold" }, { bg: "bg-ocean/12", text: "text-ocean", hoverBg: "group-hover:bg-ocean" }, { bg: "bg-jade/12", text: "text-jade", hoverBg: "group-hover:bg-jade" }]; function xg() {
  const u = S.useRef(null), [o, f] = S.useState(!1); return S.useEffect(() => { const c = new IntersectionObserver(([m]) => { m.isIntersecting && (f(!0), c.disconnect()) }, { threshold: .15 }); return u.current && c.observe(u.current), () => { c.disconnect() } }, []), r.jsx("section", {
    ref: u, className: "overflow-hidden bg-mist py-14", children: r.jsx("div", {
      className: "mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8", children: yg.map(({ icon: c, title: m, text: h }, g) => {
        const j = $m[g % $m.length]; return r.jsxs("article", {
          className: `
                premium-card group p-6
                transform
                transition-all
                duration-700
                ease-out
                ${o ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
              `, style: { transitionDelay: `${g * 180}ms` }, children: [r.jsx("div", {
            className: `
                  grid size-12 place-items-center
                  rounded-2xl
                  ${j.bg} ${j.text} ${j.hoverBg}
                  transition-all
                  duration-300
                  group-hover:text-white
                  group-hover:scale-110
                  group-hover:rotate-3
                `, children: r.jsx(c, { size: 23, strokeWidth: 2 })
          }), r.jsx("h3", {
            className: `
                  mt-5
                  text-xl
                  font-semibold
                  text-ink
                `, children: m
          }), r.jsx("p", {
            className: `
                  mt-2
                  leading-7
                  text-slate-600
                `, children: h
          })]
        }, m)
      })
    })
  })
} function Au() { const [u, o] = S.useState(!1); return S.useEffect(() => { const f = () => o(window.scrollY > 520); return window.addEventListener("scroll", f, { passive: !0 }), f(), () => window.removeEventListener("scroll", f) }, []), r.jsxs("div", { className: "fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6", children: [u && r.jsx("button", { onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }), "aria-label": "Back to top", className: "float-btn bg-gold text-ink", children: r.jsx(V1, { size: 21 }) }), r.jsx("a", { href: `https://wa.me/${oe.whatsapp}`, "aria-label": "Open WhatsApp", className: "float-btn animate-pulseSoft bg-jade text-white", children: r.jsx(xc, { size: 22 }) }), r.jsx("a", { href: `tel:${oe.phone}`, "aria-label": "Call Gitam Tours and Travels", className: "float-btn bg-ink text-gold", children: r.jsx(wu, { size: 22 }) })] }) } function Sc({ onBook: u }) {
  const [o, f] = S.useState(0), [c, m] = S.useState(!1), h = S.useMemo(() => Xl, []); S.useEffect(() => { if (c) return; const j = window.setInterval(() => { f(v => (v + 1) % h.length) }, 5e3); return () => window.clearInterval(j) }, [c, h.length]); const g = j => { f(v => (v + j + h.length) % h.length) }; return r.jsxs("section", {
    id: "home", className: "relative min-h-[680px] overflow-hidden bg-ink sm:min-h-[760px]", onMouseEnter: () => m(!0), onMouseLeave: () => m(!1), children: [h.map((j, v) => r.jsxs("div", { className: `absolute inset-0 pt-20 transition-opacity duration-1000 ease-in-out ${o === v ? "z-10 opacity-100" : "z-0 opacity-0"}`, children: [r.jsx("img", { src: j.image, alt: `${j.name} rental car`, className: `h-full w-full object-cover transition-transform duration-[5000ms] ease-out ${o === v ? "scale-100" : "scale-110"}` }), r.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,rgba(11,18,32,0.88)_0%,rgba(11,18,32,0.6)_46%,rgba(11,18,32,0.22)_100%)]" }), r.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(0deg,rgba(11,18,32,0.86)_0%,rgba(11,18,32,0)_42%)]" })] }, j.id)), r.jsx("div", { className: "hero-glow pointer-events-none absolute -top-10 right-[8%] z-10 h-72 w-72 rounded-full blob-coral" }), r.jsx("div", { className: "hero-glow-delay pointer-events-none absolute bottom-0 right-[22%] z-10 h-56 w-56 rounded-full blob-sunny" }), r.jsx("div", { className: "hero-glow pointer-events-none absolute bottom-10 right-[2%] z-10 h-64 w-64 rounded-full blob-ocean" }), r.jsx("div", {
      className: "relative z-20 mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8", children: r.jsxs("div", {
        className: "max-w-2xl text-white", children: [r.jsxs("p", {
          className: `
                animate-heroFadeUp
                inline-flex items-center gap-2 rounded-full
                border border-gold/30 bg-gold/10 px-4 py-1.5
                text-sm font-semibold uppercase
                tracking-[0.3em] text-gold backdrop-blur
              `, children: [r.jsx("span", { className: "size-1.5 rounded-full bg-sunny" }), "Chauffeur comfort, made simple"]
        }), r.jsx("h1", {
          className: `
                animate-heroTitle
                mt-5 font-display text-5xl
                font-semibold leading-tight text-white
                sm:text-6xl lg:text-7xl
              `, children: h[o].name
        }), r.jsx("p", {
          className: `
                animate-heroDescription
                mt-5 max-w-xl text-lg 
                leading-8 text-white/82
              `, children: h[o].description
        }), r.jsxs("div", {
          className: `
                animate-heroButtons
                mt-8 flex flex-col gap-3
                sm:flex-row
              `, children: [r.jsx("button", { onClick: () => u(h[o].id), className: "btn-primary", children: "Book Your Ride" }), r.jsx("a", { href: "#vehicles", className: "btn-secondary", children: "Explore Fleet" })]
        })]
      }, h[o].id)
    }), r.jsxs("div", { className: "absolute bottom-8 left-4 right-4 z-30 mx-auto flex max-w-7xl items-center justify-between", children: [r.jsx("div", { className: "flex gap-2", children: h.map((j, v) => r.jsx("button", { "aria-label": `Go to ${j.name}`, onClick: () => f(v), className: `h-2.5 rounded-full transition-all duration-500 ${o === v ? "w-9 bg-gold" : "w-2.5 bg-white/45 hover:bg-white/70"}` }, j.id)) }), r.jsxs("div", { className: "flex gap-2", children: [r.jsx("button", { "aria-label": "Previous vehicle", onClick: () => g(-1), className: "slider-arrow transition-transform duration-300 hover:-translate-x-1", children: r.jsx(J1, { size: 22 }) }), r.jsx("button", { "aria-label": "Next vehicle", onClick: () => g(1), className: "slider-arrow transition-transform duration-300 hover:translate-x-1", children: r.jsx(F1, { size: 22 }) })] })] })]
  })
} const Km = ["bg-gold", "bg-ocean", "bg-jade", "bg-sunny"]; function bg() {
  const u = S.useRef(null), [o, f] = S.useState(!1); return S.useEffect(() => { const c = new IntersectionObserver(([m]) => { m.isIntersecting && (f(!0), c.disconnect()) }, { threshold: .15 }); return u.current && c.observe(u.current), () => { c.disconnect() } }, []), r.jsx("section", {
    ref: u, id: "services", className: "section overflow-hidden bg-white", children: r.jsxs("div", {
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [r.jsx("div", { className: `transform transition-all duration-1000 ease-out ${o ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`, children: r.jsx(In, { eyebrow: "Our Services", title: "Travel Services Built Around Your Plans", subtitle: "From airport pickup to wedding transport, choose a polished service experience with dependable cars and clear communication." }) }), r.jsx("div", {
        className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: gg.map(({ icon: c, title: m, text: h }, g) => {
          const j = Km[g % Km.length]; return r.jsxs("article", {
            className: `
                  premium-card group
                  transform p-6
                  transition-all
                  duration-700
                  ease-out
                  ${o ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
                `, style: { transitionDelay: `${g * 180}ms` }, children: [r.jsxs("div", {
              className: "flex items-start justify-between gap-4", children: [r.jsx("div", {
                className: `
                      grid size-12
                      place-items-center
                      rounded-2xl
                      bg-ink
                      text-white
                      transition-all
                      duration-300
                      group-hover:scale-110
                      ${j}
                    `, children: r.jsx(c, { size: 23, strokeWidth: 2 })
              }), r.jsxs("a", {
                href: "#contact", className: `
                      relative
                      text-sm
                      font-semibold
                      text-gold
                      transition-colors
                      duration-300
                      hover:text-ink
                    `, children: ["Enquire", r.jsx("span", {
                  className: `
                        absolute
                        -bottom-1
                        left-0
                        h-[2px]
                        w-0
                        rounded-full
                        bg-gold
                        transition-all
                        duration-300
                        group-hover:w-full
                      `})]
              })]
            }), r.jsx("h3", {
              className: `
                    mt-6
                    text-xl
                    font-semibold
                    text-ink
                    transition-colors
                    duration-300
                    group-hover:text-gold
                  `, children: m
            }), r.jsx("p", {
              className: `
                    mt-2
                    leading-7
                    text-slate-600
                  `, children: h
            })]
          }, m)
        })
      })]
    })
  })
} function Sg({ vehicle: u, onBook: o }) {
  const [f, c] = S.useState(!1); return r.jsxs("article", {
    className: `
        premium-card
        group
        flex
        h-full
        flex-col
        overflow-hidden
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:shadow-premium
      `, children: [r.jsxs("div", {
      className: "relative h-60 shrink-0 overflow-hidden bg-slate-100", children: [r.jsx("img", {
        src: u.image, alt: `${u.name} for rent`, onLoad: () => c(!0), className: `
            h-full
            w-full
            object-cover
            transition-all
            duration-1000
            ease-out
            group-hover:scale-105
            ${f ? "scale-100 opacity-100" : "scale-110 opacity-0"}
          `, loading: "lazy"
      }), r.jsx("div", {
        className: `
            absolute
            inset-0
            bg-gradient-to-t
            from-ink/40
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          `}), r.jsx("span", {
          className: `
            absolute
            left-4
            top-4
            rounded-full
            bg-ink
            px-3
            py-1
            text-xs
            font-semibold
            text-gold
            shadow-lg
            transition-all
            duration-300
            group-hover:scale-105
            group-hover:bg-gold
            group-hover:text-ink
          `, children: u.category
        })]
    }), r.jsxs("div", {
      className: "flex flex-1 flex-col p-6", children: [r.jsx("h3", {
        className: `
            font-display
            text-2xl
            font-semibold
            text-ink
            transition-colors
            duration-300
            group-hover:text-gold
          `, children: u.name
      }), r.jsx("p", {
        className: `
            mt-2
            min-h-[58px]
            leading-7
            text-slate-600
          `, children: u.description
      }), r.jsx("div", {
        className: "mt-5 min-h-[132px]", children: r.jsx("div", {
          className: "flex flex-wrap content-start gap-2", children: u.features.map((m, h) => r.jsxs("span", {
            className: `
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-slate-600
                    opacity-100
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-gold/40
                    hover:bg-gold/10
                    hover:text-ink
                  `, style: { transitionDelay: `${h * 50}ms` }, children: [r.jsx(Fn, {
              size: 14, className: `
                      shrink-0
                      text-jade
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    `}), m]
          }, m))
        })
      }), r.jsx("button", {
        onClick: () => o(u.id), className: `
            btn-primary
            mt-auto
            w-full
            transition-all
            text-white
            duration-300
            hover:-translate-y-0.5
            hover:shadow-lg
            active:translate-y-0
          `, children: "Book Now"
      })]
    })]
  })
} function C0({ onBook: u }) { const o = S.useRef(null), [f, c] = S.useState(!1); return S.useEffect(() => { const m = new IntersectionObserver(([h]) => { h.isIntersecting && (c(!0), m.disconnect()) }, { threshold: .15 }); return o.current && m.observe(o.current), () => { m.disconnect() } }, []), r.jsx("section", { ref: o, id: "vehicles", className: "section overflow-hidden bg-mist", children: r.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [r.jsx("div", { className: `transform transition-all duration-1000 ease-out ${f ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`, children: r.jsx(In, { eyebrow: "Our Vehicles", title: "Choose the perfect vehicle for your journey.", subtitle: "A focused fleet for city travel, family plans, corporate movement and comfortable long-distance trips." }) }), r.jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-3", children: Xl.map((m, h) => r.jsx("div", { className: `transform transition-all duration-800 ease-out ${f ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`, style: { transitionDelay: `${250 + h * 200}ms` }, children: r.jsx(Sg, { vehicle: m, onBook: u }) }, m.id)) })] }) }) } const Jm = [{ chip: "bg-champagne", text: "text-gold", hoverBg: "group-hover:bg-gold" }, { chip: "bg-ocean/15", text: "text-ocean", hoverBg: "group-hover:bg-ocean" }, { chip: "bg-jade/15", text: "text-jade", hoverBg: "group-hover:bg-jade" }, { chip: "bg-sunny/20", text: "text-[#B8790A]", hoverBg: "group-hover:bg-sunny" }]; function jg() {
  const u = S.useRef(null), [o, f] = S.useState(!1); return S.useEffect(() => { const c = new IntersectionObserver(([m]) => { m.isIntersecting && (f(!0), c.disconnect()) }, { threshold: .15 }); return u.current && c.observe(u.current), () => { c.disconnect() } }, []), r.jsx("section", {
    ref: u, className: "section overflow-hidden bg-white", children: r.jsxs("div", {
      className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [r.jsx("div", { className: `transform transition-all duration-1000 ease-out ${o ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`, children: r.jsx(In, { eyebrow: "Why Choose Us", title: "Why Choose Gitam Tours & Travels?" }) }), r.jsx("div", {
        className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: vg.map(({ icon: c, title: m, text: h }, g) => {
          const j = Jm[g % Jm.length]; return r.jsxs("article", {
            className: `
                  group
                  transform
                  rounded-3xl
                  border
                  border-slate-100
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-700
                  ease-out
                  hover:-translate-y-2
                  hover:shadow-premium
                  ${o ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
                `, style: { transitionDelay: `${g * 180}ms` }, children: [r.jsx("div", {
              className: `
                    grid
                    size-11
                    place-items-center
                    rounded-2xl
                    ${j.chip} ${j.text} ${j.hoverBg}
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-white
                  `, children: r.jsx(c, { size: 22, strokeWidth: 2 })
            }), r.jsx("h3", {
              className: `
                    mt-5
                    text-lg
                    font-semibold
                    text-ink
                    transition-colors
                    duration-300
                    group-hover:text-gold
                  `, children: m
            }), r.jsx("p", {
              className: `
                    mt-2
                    text-sm
                    leading-6
                    text-slate-600
                  `, children: h
            })]
          }, m)
        })
      })]
    })
  })
} function Ng({ onBook: u }) { return r.jsxs("div", { className: "min-h-screen overflow-x-hidden bg-white text-slate-700", children: [r.jsx($l, { onBook: u }), r.jsxs("main", { children: [r.jsx(Sc, { onBook: u }), r.jsx(hg, {}), r.jsx(xg, {}), r.jsx(bg, {}), r.jsx(C0, { onBook: u }), r.jsx(jg, {}), r.jsx(pg, { onBook: u }), r.jsx(z0, {})] }), r.jsx(Au, {})] }) } const Eg = [{ value: "500+", label: "Happy Clients" }, { value: "1000+", label: "Successful Trips" }, { value: "24/7", label: "Travel Support" }], Tg = [{ icon: Ba, text: "Safe & verified travel experience" }, { icon: Zl, text: "Clean, air-conditioned vehicles" }, { icon: Jn, text: "Easy advance booking support" }], zg = [{ icon: Cu, title: "24/7 Car Rental Support", desc: "Get quick assistance for bookings, trip planning, route guidance and travel changes whenever you need it." }, { icon: al, title: "Well-Maintained Fleet", desc: "Travel in clean, comfortable and air-conditioned vehicles suitable for local, airport and outstation trips." }, { icon: ua, title: "Convenient Pickup Locations", desc: "Flexible pickup and drop options across Pune, Mumbai, Nashik and nearby travel destinations." }]; function Cg({ value: u, isVisible: o, duration: f = 1800 }) { const [c, m] = S.useState(0); return S.useEffect(() => { if (!o) return; if (u === "24/7") { m(24); return } const h = parseInt(u.replace(/\D/g, ""), 10); let g = null, j; const v = p => { g || (g = p); const E = Math.min((p - g) / f, 1), C = 1 - Math.pow(1 - E, 3); m(Math.floor(C * h)), E < 1 ? j = requestAnimationFrame(v) : m(h) }; return j = requestAnimationFrame(v), () => { cancelAnimationFrame(j) } }, [o, u, f]), u === "24/7" ? r.jsx(r.Fragment, { children: "24/7" }) : r.jsxs(r.Fragment, { children: [c, u.includes("+") && "+"] }) } function wg({ onBook: u }) {
  const o = S.useRef(null), [f, c] = S.useState(!1); return S.useEffect(() => { const m = new IntersectionObserver(([h]) => { h.isIntersecting && (c(!0), m.disconnect()) }, { threshold: .15 }); return o.current && m.observe(o.current), () => { m.disconnect() } }, []), r.jsxs(r.Fragment, {
    children: [r.jsx($l, { onBook: u }), r.jsx(Sc, { onBook: u }), r.jsxs("section", {
      ref: o, id: "about", className: "relative overflow-hidden px-4 py-20 sm:px-6 lg:py-24", style: { background: "radial-gradient(circle at top left, rgba(255,107,71,0.14), transparent 34%), radial-gradient(circle at bottom right, rgba(11,18,32,0.12), transparent 32%), #F8FAFC" }, children: [r.jsx("div", {
        className: `\r
            absolute\r
            left-0\r
            top-16\r
            h-48\r
            w-48\r
            rounded-full\r
            bg-champagne/60\r
            blur-3xl\r
            animate-pulse\r
          `}), r.jsx("div", {
          className: `\r
            absolute\r
            bottom-8\r
            right-0\r
            h-64\r
            w-64\r
            rounded-full\r
            bg-ocean/10\r
            blur-3xl\r
            animate-pulse\r
          `}), r.jsxs("div", {
            className: "relative mx-auto max-w-7xl", children: [r.jsxs("div", {
              className: "mb-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16", children: [r.jsxs("div", {
                className: `
                transform
                transition-all
                duration-1000
                ease-out
                ${f ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
              `, children: [r.jsxs("div", {
                  className: `
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-gold/20
                  bg-white
                  px-4
                  py-2
                  shadow-sm
                  transition-all
                  duration-700
                  ${f ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}
                `, children: [r.jsx(Zl, { size: 15, style: { color: "#F59E0B" } }), r.jsx("p", {
                    className: `\r
                    text-xs\r
                    font-semibold\r
                    uppercase\r
                    tracking-widest\r
                    sm:text-sm\r
                  `, style: { color: "#F59E0B" }, children: "About Us"
                  })]
                }), r.jsx("h2", {
                  className: `
                  mt-5
                  max-w-xl
                  transform
                  text-3xl
                  font-bold
                  leading-tight
                  transition-all
                  duration-1000
                  sm:text-4xl
                  lg:text-5xl
                  ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                `, style: { color: "#0F3460", fontFamily: "Poppins, sans-serif", transitionDelay: "150ms" }, children: "Your Journey, Our Responsibility"
                }), r.jsx("p", {
                  className: `
                  mt-5
                  max-w-2xl
                  transform
                  text-base
                  leading-relaxed
                  text-slate-600
                  transition-all
                  duration-1000
                  sm:text-lg
                  ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                `, style: { transitionDelay: "300ms" }, children: "Gitam Tours and Travels provides reliable, comfortable and affordable car rental services for local city travel, airport transfers, outstation tours, family trips and corporate requirements."
                }), r.jsx("p", {
                  className: `
                  mt-4
                  max-w-2xl
                  transform
                  text-base
                  leading-relaxed
                  text-slate-600
                  transition-all
                  duration-1000
                  ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                `, style: { transitionDelay: "450ms" }, children: "With professional drivers, clean vehicles and punctual service, we focus on making every journey safe, smooth and stress-free. Whether you are planning a short pickup or a multi-day tour, our team helps you choose the right vehicle for your travel needs."
                }), r.jsx("div", {
                  className: "mt-7 space-y-3", children: Tg.map(({ icon: m, text: h }, g) => r.jsxs("div", {
                    className: `
                        group
                        flex
                        transform
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white
                        bg-white/85
                        p-3
                        text-sm
                        font-medium
                        text-slate-700
                        shadow-sm
                        backdrop-blur
                        transition-all
                        duration-700
                        hover:-translate-y-1
                        hover:shadow-lg
                        ${f ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}
                      `, style: { transitionDelay: `${600 + g * 150}ms` }, children: [r.jsx("span", {
                      className: `\r
                          flex\r
                          h-10\r
                          w-10\r
                          shrink-0\r
                          items-center\r
                          justify-center\r
                          rounded-full\r
                          transition-all\r
                          duration-300\r
                          group-hover:scale-110\r
                          group-hover:rotate-3\r
                        `, style: { backgroundColor: "#FFE4D6" }, children: r.jsx(m, { size: 17, style: { color: "#F59E0B" } })
                    }), h]
                  }, h))
                }), r.jsx("div", {
                  className: "mt-8 grid grid-cols-3 gap-3 sm:gap-4", children: Eg.map(({ value: m, label: h }, g) => r.jsxs("div", {
                    className: `
                        group
                        transform
                        rounded-2xl
                        border
                        border-white
                        bg-white/90
                        p-4
                        text-center
                        shadow-sm
                        backdrop-blur
                        transition-all
                        duration-700
                        hover:-translate-y-2
                        hover:shadow-xl
                        ${f ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
                      `, style: { transitionDelay: `${1050 + g * 150}ms` }, children: [r.jsx("div", {
                      className: `\r
                          text-2xl\r
                          font-bold\r
                          sm:text-3xl\r
                        `, style: { color: "#0F3460", fontFamily: "Poppins, sans-serif" }, children: r.jsx(Cg, { value: m, isVisible: f, duration: 1800 })
                    }), r.jsx("div", {
                      className: `\r
                          mt-1\r
                          text-[11px]\r
                          leading-snug\r
                          text-slate-500\r
                          sm:text-xs\r
                        `, children: h
                    })]
                  }, h))
                })]
              }), r.jsxs("div", {
                className: `
                relative
                transform
                transition-all
                duration-1200
                ease-out
                ${f ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
              `, style: { transitionDelay: "250ms" }, children: [r.jsx("div", {
                  className: `
                  absolute
                  -inset-3
                  rounded-[2rem]
                  bg-gradient-to-br
                  from-champagne
                  via-white
                  to-mist
                  blur-sm
                  transition-all
                  duration-1000
                  ${f ? "scale-100 opacity-100" : "scale-90 opacity-0"}
                `}), r.jsxs("div", {
                    className: "group relative overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/70", children: [r.jsx("img", {
                      src: "/images/showcase%20c-1.png", alt: "Gitam Tours and Travels premium car rental service", className: `
                    h-[340px]
                    w-full
                    object-cover
                    transition-all
                    duration-[1600ms]
                    ease-out
                    sm:h-[460px]
                    ${f ? "scale-100 opacity-100" : "scale-110 opacity-0"}
                    group-hover:scale-105
                  `, loading: "lazy"
                    }), r.jsx("div", { className: "absolute inset-0", style: { background: "linear-gradient(to top, rgba(11,18,32,0.72), rgba(11,18,32,0.08) 58%, rgba(255,107,71,0.12))" } }), r.jsx("div", {
                      className: `
                    absolute
                    bottom-4
                    left-4
                    right-4
                    transform
                    rounded-2xl
                    border
                    border-white/80
                    bg-white/95
                    p-4
                    shadow-xl
                    backdrop-blur
                    transition-all
                    duration-1000
                    ${f ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
                  `, style: { transitionDelay: "850ms" }, children: r.jsxs("div", {
                        className: "flex items-center gap-3", children: [r.jsx("div", {
                          className: `\r
                        flex\r
                        h-12\r
                        w-12\r
                        shrink-0\r
                        items-center\r
                        justify-center\r
                        rounded-xl\r
                        shadow-lg\r
                        transition-transform\r
                        duration-300\r
                        hover:scale-110\r
                      `, style: { background: "linear-gradient(135deg, #0F3460, #1a4a7a)" }, children: r.jsx(Q1, { size: 22, style: { color: "#F59E0B" } })
                        }), r.jsxs("div", {
                          children: [r.jsx("h3", {
                            className: `\r
                          text-sm\r
                          font-bold\r
                          sm:text-base\r
                        `, style: { color: "#0F3460" }, children: "Trusted Travel Partner"
                          }), r.jsx("p", { className: "mt-0.5 text-xs text-slate-500 sm:text-sm", children: "Local, airport and outstation car rental service." })]
                        })]
                      })
                    })]
                  }), r.jsxs("div", {
                    className: `
                  absolute
                  -left-5
                  -top-5
                  hidden
                  h-28
                  w-28
                  transform
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  text-white
                  shadow-xl
                  ring-4
                  ring-white/70
                  transition-all
                  duration-1000
                  sm:flex
                  ${f ? "translate-x-0 translate-y-0 rotate-0 opacity-100" : "-translate-x-10 -translate-y-10 -rotate-12 opacity-0"}
                `, style: { background: "linear-gradient(135deg, #F59E0B, #D97706)", transitionDelay: "500ms" }, children: [r.jsx(bc, { size: 24 }), r.jsx("span", { className: "mt-1 text-xl font-bold", children: "10+" }), r.jsx("span", { className: "px-2 text-center text-[11px] leading-tight", children: "Years Experience" })]
                  }), r.jsxs("div", {
                    className: `
                  absolute
                  -bottom-5
                  -right-5
                  hidden
                  h-28
                  w-28
                  transform
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  text-white
                  shadow-xl
                  ring-4
                  ring-white/70
                  transition-all
                  duration-1000
                  sm:flex
                  ${f ? "translate-x-0 translate-y-0 rotate-0 opacity-100" : "translate-x-10 translate-y-10 rotate-12 opacity-0"}
                `, style: { background: "linear-gradient(135deg, #0F3460, #0a2444)", transitionDelay: "700ms" }, children: [r.jsx(Wn, { size: 24 }), r.jsx("span", { className: "mt-1 text-xl font-bold", children: "500+" }), r.jsx("span", { className: "px-2 text-center text-[11px] leading-tight", children: "Happy Clients" })]
                  })]
              })]
            }), r.jsx("div", {
              className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: zg.map(({ icon: m, title: h, desc: g }, j) => r.jsxs("div", {
                className: `
                    group
                    relative
                    transform
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white
                    bg-white
                    p-7
                    shadow-sm
                    transition-all
                    duration-700
                    hover:-translate-y-2
                    hover:shadow-2xl
                    ${f ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
                  `, style: { transitionDelay: `${1300 + j * 180}ms` }, children: [r.jsx("div", {
                  className: `\r
                      absolute\r
                      inset-0\r
                      opacity-0\r
                      transition-opacity\r
                      duration-500\r
                      group-hover:opacity-100\r
                    `, style: { background: "linear-gradient(135deg, rgba(11,18,32,0.04), rgba(255,107,71,0.08))" }
                }), r.jsx("div", {
                  className: `\r
                      relative\r
                      mb-5\r
                      flex\r
                      h-12\r
                      w-12\r
                      items-center\r
                      justify-center\r
                      rounded-2xl\r
                      shadow-sm\r
                      transition-all\r
                      duration-300\r
                      group-hover:scale-110\r
                      group-hover:rotate-3\r
                    `, style: { background: "linear-gradient(135deg, #EFF6FF, #FFE4D6)" }, children: r.jsx(m, { size: 22, style: { color: "#0F3460" } })
                }), r.jsx("h3", {
                  className: `\r
                      relative\r
                      mb-2\r
                      text-lg\r
                      font-bold\r
                      transition-colors\r
                      duration-300\r
                      group-hover:text-gold\r
                    `, style: { color: "#0F3460", fontFamily: "Poppins, sans-serif" }, children: h
                }), r.jsx("p", { className: "relative text-sm leading-relaxed text-slate-500", children: g })]
              }, h))
            })]
          })]
    }), r.jsx(Au, {})]
  })
} const Ag = [{ icon: ua, title: "Local Car Rental", desc: "Comfortable, air-conditioned vehicles for city travel, daily commutes, sightseeing and local errands.", points: ["City rides", "Hourly rental", "Clean AC vehicles"] }, { icon: W1, title: "Outstation Tours", desc: "Reliable cars and experienced drivers for intercity travel, long-distance routes and multi-day tours.", points: ["One-way trips", "Round trips", "Multi-day journeys"] }, { icon: N0, title: "Airport Transfer", desc: "Punctual airport pickup and drop service for early morning, late night and scheduled flights.", points: ["On-time pickup", "Flight-friendly planning", "Doorstep drop"] }, { icon: Wn, title: "Family Trips", desc: "Spacious and comfortable vehicles for vacations, weekend getaways and family travel plans.", points: ["Family friendly", "Extra luggage comfort", "Smooth rides"] }, { icon: $1, title: "Corporate Travel", desc: "Professional transportation for executives, meetings, events, conferences and business transfers.", points: ["Professional drivers", "Reliable timing", "Comfortable travel"] }, { icon: ng, title: "Group Travel", desc: "Perfect vehicle options for groups, pilgrimages, functions, school trips and team outings.", points: ["7 and 11 seater options", "Group comfort", "Route planning"] }], Fm = [{ name: "Pune", image: "/images/pune.png" }, { name: "Mumbai", image: "/images/mumbai.png" }, { name: "Lonavala", image: "/images/lonavala.png" }, { name: "Mahabaleshwar", image: "/images/mahabaleshwar.png" }, { name: "Shirdi", image: "/images/shirdi.png" }, { name: "Nashik", image: "/images/nashik.png" }, { name: "Chhatrpati ShambhajiNagar", image: "/images/Chh.sambhajiNagar.png" }, { name: "Kolhapur", image: "/images/kolhapur.png" }, { name: "Satara", image: "/images/satara.png" }, { name: "Sangli", image: "/images/sangli.png" }, { name: "Alibaug", image: "/images/alibaug.png" }, { name: "Matheran", image: "/images/matheran.png" }, { name: "Panchgani", image: "/images/panchgani.png" }, { name: "Khandala", image: "/images/khandala.png" }, { name: "Goa", image: "/images/goa.png" }], Rg = [{ icon: Ba, title: "Safe Travel", text: "Verified drivers and dependable travel support." }, { icon: al, title: "Clean Vehicles", text: "Well-maintained AC fleet for every ride." }, { icon: Jn, title: "Easy Booking", text: "Simple booking for planned or urgent travel." }, { icon: Cu, title: "24/7 Support", text: "Assistance whenever your journey needs it." }]; function nc(u = .15) { const o = S.useRef(null), [f, c] = S.useState(!1); return S.useEffect(() => { const m = o.current; if (!m) return; const h = new IntersectionObserver(([g]) => { g.isIntersecting && (c(!0), h.disconnect()) }, { threshold: u }); return h.observe(m), () => { h.disconnect() } }, [u]), [o, f] } function Wm({ destination: u }) {
  return r.jsx("div", {
    className: `\r
        w-[280px]\r
        shrink-0\r
        px-2\r
        sm:w-[320px]\r
        lg:w-[380px]\r
      `, children: r.jsxs("div", {
      className: `\r
          group\r
          relative\r
          h-48\r
          overflow-hidden\r
          rounded-2xl\r
          border\r
          border-transparent\r
          bg-white\r
          shadow-md\r
          transition-all\r
          duration-500\r
          hover:border-[#FF6B47]/40\r
          hover:shadow-[0_15px_40px_rgba(11,18,32,0.18)]\r
          sm:h-52\r
        `, children: [r.jsx("img", {
        src: u.image, alt: `${u.name} destination`, className: `\r
            h-full\r
            w-full\r
            object-cover\r
            transition-transform\r
            duration-1000\r
            ease-out\r
            group-hover:scale-105\r
          `, loading: "lazy"
      }), r.jsx("div", {
        className: `\r
            absolute\r
            inset-0\r
            bg-gradient-to-t\r
            from-[#0B1220]/95\r
            via-[#0B1220]/25\r
            to-transparent\r
          `}), r.jsx("div", {
          className: `\r
            absolute\r
            right-4\r
            top-4\r
            rounded-md\r
            border\r
            border-white/20\r
            bg-black/20\r
            px-3\r
            py-1\r
            text-[10px]\r
            font-semibold\r
            uppercase\r
            tracking-wider\r
            text-white\r
            backdrop-blur-md\r
            transition-all\r
            duration-300\r
            group-hover:border-[#FF6B47]/50\r
            group-hover:bg-[#FF6B47]\r
            group-hover:text-[#0B1220]\r
          `, children: "Destination"
        }), r.jsxs("div", {
          className: "absolute bottom-0 left-0 right-0 p-5", children: [r.jsxs("div", {
            className: "flex items-center gap-2", children: [r.jsx(ua, {
              size: 18, className: `\r
                shrink-0\r
                text-[#FF6B47]\r
                transition-transform\r
                duration-300\r
                group-hover:scale-110\r
              `}), r.jsx("h3", { className: "text-lg font-bold text-white", children: u.name })]
          }), r.jsx("p", { className: "mt-1 text-xs text-white/70", children: "Explore with Gitam Tours & Travels" })]
        })]
    })
  })
} function Mg({ onBook: u }) {
  const [o, f] = S.useState(!1), [c, m] = nc(.12), [h, g] = nc(.15), [j, v] = nc(.2); return r.jsxs(r.Fragment, {
    children: [r.jsx($l, { onBook: u }), r.jsxs("main", {
      className: "overflow-hidden bg-white", children: [r.jsxs("section", {
        className: `\r
    group\r
    relative\r
    min-h-[620px]\r
    overflow-hidden\r
    px-4\r
    pb-20\r
    pt-32\r
    sm:min-h-[680px]\r
    sm:px-6\r
    lg:min-h-[720px]\r
  `, children: [r.jsxs("div", {
          className: "absolute inset-0 overflow-hidden", children: [r.jsx("img", {
            src: "/images/swift.png", alt: "Gitam Tours and Travels", className: `\r
        hero-bg-image\r
        h-full\r
        w-full\r
        object-cover\r
      `}), r.jsx("div", {
              className: `\r
        absolute\r
        inset-0\r
        bg-[linear-gradient(90deg,rgba(10,20,35,0.94)_0%,rgba(11,18,32,0.72)_45%,rgba(11,18,32,0.30)_100%)]\r
      `}), r.jsx("div", {
                className: `\r
        absolute\r
        inset-0\r
        bg-[linear-gradient(0deg,rgba(8,18,32,0.90)_0%,rgba(8,18,32,0.15)_55%,transparent_100%)]\r
      `}), r.jsx("div", {
                  className: `\r
        hero-glow\r
        absolute\r
        -right-32\r
        -top-32\r
        h-[450px]\r
        w-[450px]\r
        rounded-full\r
        bg-[#FF6B47]/20\r
        blur-[100px]\r
      `}), r.jsx("div", {
                    className: `\r
        hero-glow-delay\r
        absolute\r
        -bottom-40\r
        -left-40\r
        h-[400px]\r
        w-[400px]\r
        rounded-full\r
        bg-[#0B1220]/40\r
        blur-[100px]\r
      `})]
        }), r.jsx("div", {
          className: `\r
      relative\r
      z-10\r
      mx-auto\r
      flex\r
      min-h-[520px]\r
      max-w-7xl\r
      items-center\r
      justify-center\r
      px-2\r
      sm:px-4\r
    `, children: r.jsxs("div", {
            className: "max-w-4xl text-center text-white", children: [r.jsxs("div", {
              className: `\r
          hero-badge\r
          inline-flex\r
          items-center\r
          gap-2\r
          rounded-full\r
          border\r
          border-white/20\r
          bg-white/10\r
          px-5\r
          py-2.5\r
          text-white\r
          shadow-lg\r
          backdrop-blur-md\r
        `, children: [r.jsx(Zl, { size: 17, className: "animate-pulse text-[#FF6B47]" }), r.jsx("span", {
                className: `\r
            text-xs\r
            font-semibold\r
            uppercase\r
            tracking-[0.18em]\r
            sm:text-sm\r
          `, children: "Premium Travel Services"
              })]
            }), r.jsxs("h1", {
              className: `\r
          hero-title\r
          mt-7\r
          text-4xl\r
          font-bold\r
          leading-[1.08]\r
          tracking-tight\r
          text-white\r
          sm:text-5xl\r
          md:text-6xl\r
          lg:text-7xl\r
        `, style: { fontFamily: "Poppins, sans-serif" }, children: ["Services Designed", r.jsx("br", {}), r.jsx("span", { className: "text-[#FF6B47]", children: "For Every Journey" })]
            }), r.jsx("p", {
              className: `\r
          hero-description\r
          mx-auto\r
          mt-6\r
          max-w-2xl\r
          text-sm\r
          leading-7\r
          text-white/75\r
          sm:text-base\r
          sm:leading-8\r
          lg:text-lg\r
        `, children: "From quick city rides to long outstation tours, Gitam Tours and Travels gives you clean vehicles, professional drivers and dependable travel support."
            }), r.jsxs("div", {
              className: `\r
          hero-buttons\r
          mt-9\r
          flex\r
          flex-col\r
          items-center\r
          justify-center\r
          gap-3\r
          sm:flex-row\r
        `, children: [r.jsxs("button", {
                onClick: () => u && u(), className: `\r
            hero-button\r
            group/btn\r
            inline-flex\r
            w-full\r
            items-center\r
            justify-center\r
            gap-2\r
            rounded-xl\r
            bg-[#FF6B47]\r
            px-7\r
            py-3.5\r
            text-sm\r
            font-bold\r
            text-[#0B1220]\r
            transition-all\r
            duration-300\r
            hover:-translate-y-1\r
            hover:bg-[#FFB627]\r
            sm:w-auto\r
          `, children: ["Book Your Ride", r.jsx(Ua, {
                  size: 18, className: `\r
              transition-transform\r
              duration-300\r
              group-hover/btn:translate-x-1\r
            `})]
              }), r.jsxs("a", {
                href: "#services-list", className: `\r
            hero-button\r
            inline-flex\r
            w-full\r
            items-center\r
            justify-center\r
            gap-2\r
            rounded-xl\r
            border\r
            border-white/25\r
            bg-white/10\r
            px-7\r
            py-3.5\r
            text-sm\r
            font-bold\r
            text-white\r
            backdrop-blur-md\r
            transition-all\r
            duration-300\r
            hover:-translate-y-1\r
            hover:border-[#FF6B47]\r
            hover:bg-white/20\r
            sm:w-auto\r
          `, children: ["Explore Services", r.jsx(Ua, { size: 17, className: "transition-transform duration-300 group-hover:translate-x-1" })]
              })]
            }), r.jsxs("div", {
              className: `\r
          hero-trust\r
          mx-auto\r
          mt-10\r
          flex\r
          max-w-xl\r
          flex-wrap\r
          items-center\r
          justify-center\r
          gap-x-6\r
          gap-y-3\r
          text-xs\r
          text-white/65\r
          sm:text-sm\r
        `, children: [r.jsxs("div", { className: "flex items-center gap-2", children: [r.jsx(Ba, { size: 16, className: "text-[#FF6B47]" }), "Safe Travel"] }), r.jsxs("div", { className: "flex items-center gap-2", children: [r.jsx(al, { size: 16, className: "text-[#FF6B47]" }), "Clean Vehicles"] }), r.jsxs("div", { className: "flex items-center gap-2", children: [r.jsx(Cu, { size: 16, className: "text-[#FF6B47]" }), "24/7 Support"] })]
            })]
          })
        })]
      }), r.jsx("section", {
        ref: c, id: "services-list", className: "relative overflow-hidden px-4 py-20 sm:px-6", style: { background: "radial-gradient(circle at top left, rgba(255,107,71,0.12), transparent 32%), radial-gradient(circle at bottom right, rgba(11,18,32,0.10), transparent 34%), #F8FAFC" }, children: r.jsxs("div", {
          className: "mx-auto max-w-7xl", children: [r.jsxs("div", {
            className: `
                mb-14
                transform
                text-center
                transition-all
                duration-1000
                ease-out
                ${m ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
              `, children: [r.jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-widest", style: { color: "#FF6B47" }, children: "What We Offer" }), r.jsx("h2", { className: "text-3xl font-bold sm:text-4xl", style: { color: "#0B1220", fontFamily: "Poppins, sans-serif" }, children: "Our Travel Services" }), r.jsx("p", { className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500", children: "Choose the right service for your route, group size and travel purpose." })]
          }), r.jsx("div", {
            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: Ag.map(({ icon: p, title: E, desc: C, points: M }, H) => r.jsxs("div", {
              className: `
                      group
                      relative
                      transform
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white
                      bg-white
                      p-7
                      shadow-sm
                      transition-all
                      duration-700
                      ease-out
                      hover:-translate-y-2
                      hover:shadow-2xl
                      ${m ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
                    `, style: { transitionDelay: `${200 + H * 150}ms` }, children: [r.jsx("div", {
                className: `\r
                        absolute\r
                        inset-0\r
                        opacity-0\r
                        transition-opacity\r
                        duration-500\r
                        group-hover:opacity-100\r
                      `, style: { background: "linear-gradient(135deg, rgba(11,18,32,0.04), rgba(255,107,71,0.09))" }
              }), r.jsxs("div", {
                className: "relative mb-6 flex items-start justify-between gap-4", children: [r.jsx("div", {
                  className: `\r
                          flex\r
                          h-14\r
                          w-14\r
                          items-center\r
                          justify-center\r
                          rounded-2xl\r
                          shadow-sm\r
                          transition-all\r
                          duration-500\r
                          group-hover:rotate-3\r
                          group-hover:scale-110\r
                        `, style: { backgroundColor: H % 2 === 0 ? "#EEF6FF" : "#FFE4D6" }, children: r.jsx(p, {
                    size: 25, className: `\r
                            transition-transform\r
                            duration-500\r
                            group-hover:scale-110\r
                          `, style: { color: "#0B1220" }
                  })
                }), r.jsx("span", {
                  className: `\r
                          rounded-full\r
                          px-3\r
                          py-1\r
                          text-[11px]\r
                          font-bold\r
                          uppercase\r
                          tracking-wide\r
                          transition-all\r
                          duration-300\r
                          group-hover:scale-105\r
                        `, style: { backgroundColor: "#FFE4D6", color: "#FF6B47" }, children: "Service"
                })]
              }), r.jsx("h3", {
                className: `\r
                        relative\r
                        mb-3\r
                        text-xl\r
                        font-bold\r
                        transition-colors\r
                        duration-300\r
                        group-hover:text-[#FF6B47]\r
                      `, style: { color: "#0B1220", fontFamily: "Poppins, sans-serif" }, children: E
              }), r.jsx("p", { className: "relative mb-5 text-sm leading-relaxed text-slate-500", children: C }), r.jsx("div", {
                className: "relative space-y-2", children: M.map((L, k) => r.jsxs("div", {
                  className: `\r
                              flex\r
                              items-center\r
                              gap-2\r
                              text-sm\r
                              text-slate-600\r
                              transition-all\r
                              duration-300\r
                              hover:translate-x-1\r
                            `, style: { transitionDelay: `${k * 50}ms` }, children: [r.jsx(Fn, { size: 16, style: { color: "#FF6B47" } }), L]
                }, L))
              })]
            }, E))
          })]
        })
      }), r.jsx("section", {
        ref: h, className: "overflow-hidden bg-white px-4 py-20 sm:px-6", children: r.jsx("div", {
          className: "mx-auto max-w-7xl", children: r.jsxs("div", {
            className: "grid items-center gap-10 lg:grid-cols-2", children: [r.jsxs("div", {
              className: `
                  transform
                  transition-all
                  duration-1000
                  ease-out
                  ${g ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
                `, children: [r.jsx("p", { className: "mb-2 text-sm font-semibold uppercase tracking-widest", style: { color: "#FF6B47" }, children: "Why Our Services" }), r.jsx("h2", { className: "text-3xl font-bold leading-tight sm:text-4xl", style: { color: "#0B1220", fontFamily: "Poppins, sans-serif" }, children: "Comfortable Travel With Trusted Service Quality" }), r.jsx("p", { className: "mt-4 leading-7 text-slate-500", children: "Every service is planned around safety, punctuality and passenger comfort. Whether it is a local transfer or a long route, our team keeps your journey simple and reliable." })]
            }), r.jsx("div", {
              className: "grid gap-4 sm:grid-cols-2", children: Rg.map(({ icon: p, title: E, text: C }, M) => r.jsxs("div", {
                className: `
                        group
                        transform
                        rounded-2xl
                        border
                        border-slate-100
                        bg-slate-50
                        p-5
                        transition-all
                        duration-700
                        hover:-translate-y-2
                        hover:bg-white
                        hover:shadow-xl
                        ${g ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
                      `, style: { transitionDelay: `${250 + M * 150}ms` }, children: [r.jsx("div", {
                  className: `\r
                          mb-4\r
                          flex\r
                          h-11\r
                          w-11\r
                          items-center\r
                          justify-center\r
                          rounded-xl\r
                          transition-all\r
                          duration-300\r
                          group-hover:scale-110\r
                          group-hover:rotate-3\r
                        `, style: { backgroundColor: "#FFE4D6" }, children: r.jsx(p, { size: 21, style: { color: "#FF6B47" } })
                }), r.jsx("h3", {
                  className: `\r
                          mb-1\r
                          font-bold\r
                          transition-colors\r
                          duration-300\r
                          group-hover:text-[#FF6B47]\r
                        `, style: { color: "#0B1220" }, children: E
                }), r.jsx("p", { className: "text-sm leading-6 text-slate-500", children: C })]
              }, E))
            })]
          })
        })
      }), r.jsxs("section", {
        id: "destinations", className: "overflow-hidden bg-white py-16 sm:py-20", children: [r.jsxs("div", { className: "mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6", children: [r.jsx("p", { className: "mb-2 text-xs font-bold uppercase tracking-[3px] text-[#FF6B47]", children: "Popular Destinations" }), r.jsx("h2", { className: "text-3xl font-bold text-[#0B1220] sm:text-4xl", style: { fontFamily: "Poppins, sans-serif" }, children: "Where Can We Take You?" }), r.jsx("p", { className: "mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500", children: "Explore popular destinations across Maharashtra with Gitam Tours and Travels." })] }), r.jsx("div", {
          className: "relative w-full overflow-hidden", onMouseEnter: () => f(!0), onMouseLeave: () => f(!1), children: r.jsxs("div", {
            className: `
        destination-track
        flex
        w-max
        ${o ? "destination-paused" : ""}
      `, children: [Fm.map((p, E) => r.jsx(Wm, { destination: p }, `first-${p.name}-${E}`)), Fm.map((p, E) => r.jsx(Wm, { destination: p }, `second-${p.name}-${E}`))]
          })
        })]
      }), r.jsx("section", {
        ref: j, className: "bg-white px-4 pb-20 sm:px-6", children: r.jsxs("div", {
          className: `
              mx-auto
              max-w-7xl
              transform
              overflow-hidden
              rounded-3xl
              px-6
              py-12
              text-center
              shadow-2xl
              transition-all
              duration-1000
              ease-out
              sm:px-10
              ${v ? "translate-y-0 scale-100 opacity-100" : "translate-y-16 scale-95 opacity-0"}
            `, style: { background: "linear-gradient(135deg, #0B1220, #0a2444)" }, children: [r.jsx(bc, {
            className: `
                mx-auto
                mb-4
                transition-all
                duration-700
                ${v ? "rotate-0 scale-100 opacity-100" : "rotate-[-25deg] scale-50 opacity-0"}
              `, size: 34, style: { color: "#FF6B47" }
          }), r.jsx("h2", {
            className: `\r
                text-3xl\r
                font-bold\r
                text-white\r
                sm:text-4xl\r
              `, style: { fontFamily: "Poppins, sans-serif" }, children: "Ready To Plan Your Next Trip?"
          }), r.jsx("p", { className: "mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base", children: "Book a clean, comfortable vehicle with Gitam Tours and Travels today." }), r.jsxs("button", {
            onClick: () => u && u(), className: `\r
                mt-7\r
                inline-flex\r
                items-center\r
                justify-center\r
                gap-2\r
                rounded-xl\r
                px-8\r
                py-3\r
                text-sm\r
                font-bold\r
                text-white\r
                shadow-lg\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
                hover:scale-105\r
                hover:shadow-2xl\r
                active:scale-95\r
              `, style: { backgroundColor: "#FF6B47" }, children: ["Book Now", r.jsx(Ua, { size: 17, className: "transition-transform duration-300" })]
          })]
        })
      })]
    })]
  })
} const Dg = [{ icon: Ba, title: "Safe & Reliable", text: "Professional drivers and dependable vehicles for local and outstation travel." }, { icon: al, title: "Clean AC Vehicles", text: "Well-maintained cars with comfortable interiors for a smooth journey." }, { icon: P1, title: "Travel Friendly", text: "Spacious options for families, luggage, business trips and group tours." }, { icon: Cu, title: "24/7 Support", text: "Quick booking assistance whenever you need a ride." }], _g = ["Local city travel", "Airport pickup & drop", "Outstation tours", "Corporate travel", "Family trips", "Wedding & event travel"]; function ic(u = .15) { const o = S.useRef(null), [f, c] = S.useState(!1); return S.useEffect(() => { const m = o.current; if (!m) return; const h = new IntersectionObserver(([g]) => { g.isIntersecting && (c(!0), h.disconnect()) }, { threshold: u }); return h.observe(m), () => { h.disconnect() } }, [u]), [o, f] } function Og({ onBook: u }) {
  const [o, f] = ic(.15), [c, m] = ic(.15), [h, g] = ic(.2); return r.jsxs(r.Fragment, {
    children: [r.jsx($l, { onBook: u }), r.jsxs("main", {
      className: "overflow-hidden bg-white", children: [r.jsx(Sc, { onBook: u }), r.jsxs("section", {
        ref: o, className: "relative overflow-hidden px-4 py-20 sm:px-6 lg:py-24", style: { background: "radial-gradient(circle at top left, rgba(255,107,71,0.16), transparent 34%), radial-gradient(circle at bottom right, rgba(11,18,32,0.10), transparent 34%), #EEF6FF" }, children: [r.jsx("div", {
          className: `
              pointer-events-none
              absolute
              -left-32
              top-20
              h-64
              w-64
              rounded-full
              bg-gold/10
              blur-3xl
              transition-all
              duration-[1500ms]
              ${f ? "scale-100 opacity-100" : "scale-50 opacity-0"}
            `}), r.jsx("div", {
            className: `
              pointer-events-none
              absolute
              -bottom-32
              right-0
              h-72
              w-72
              rounded-full
              bg-ink/5
              blur-3xl
              transition-all
              duration-[1500ms]
              ${f ? "scale-100 opacity-100" : "scale-50 opacity-0"}
            `}), r.jsx("div", {
              className: "relative mx-auto max-w-7xl", children: r.jsxs("div", {
                className: "grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]", children: [r.jsxs("div", {
                  className: `
                  transform
                  transition-all
                  duration-1000
                  ease-out
                  ${f ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
                `, children: [r.jsxs("div", {
                    className: `
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gold/20
                    bg-white
                    px-4
                    py-2
                    shadow-sm
                    transition-all
                    duration-700
                    ${f ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"}
                  `, children: [r.jsx(Zl, { size: 16, className: "text-gold" }), r.jsx("span", { className: "text-xs font-bold uppercase tracking-[0.22em] text-gold", children: "Premium Fleet" })]
                  }), r.jsx("h1", {
                    className: `
                    mt-5
                    max-w-2xl
                    transform
                    font-display
                    text-4xl
                    font-semibold
                    leading-tight
                    text-ink
                    transition-all
                    duration-1000
                    delay-100
                    sm:text-5xl
                    ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                  `, children: "Choose The Perfect Vehicle For Your Journey"
                  }), r.jsx("p", {
                    className: `
                    mt-5
                    max-w-2xl
                    transform
                    text-base
                    leading-8
                    text-slate-600
                    transition-all
                    duration-1000
                    delay-200
                    sm:text-lg
                    ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                  `, children: "Gitam Tours & Travels offers clean, comfortable and air-conditioned vehicles for city rides, family trips, airport transfers, corporate travel and long outstation journeys."
                  }), r.jsx("div", {
                    className: "mt-7 grid gap-3 sm:grid-cols-2", children: _g.map((j, v) => r.jsxs("div", {
                      className: `
                          group
                          flex
                          transform
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-white
                          bg-white/85
                          p-3
                          shadow-sm
                          backdrop-blur
                          transition-all
                          duration-700
                          hover:border-gold/30
                          hover:bg-white
                          hover:shadow-md
                          ${f ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
                        `, style: { transitionDelay: `${350 + v * 100}ms` }, children: [r.jsx("span", {
                        className: `\r
                            grid\r
                            size-9\r
                            shrink-0\r
                            place-items-center\r
                            rounded-full\r
                            bg-gold/10\r
                            transition-all\r
                            duration-300\r
                            group-hover:scale-110\r
                            group-hover:bg-gold/20\r
                          `, children: r.jsx(Fn, { size: 17, className: "text-jade" })
                      }), r.jsx("span", { className: "text-sm font-semibold text-slate-700", children: j })]
                    }, j))
                  }), r.jsx("div", {
                    className: `
                    mt-8
                    flex
                    transform
                    flex-col
                    gap-3
                    transition-all
                    duration-1000
                    ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                  `, style: { transitionDelay: "900ms" }, children: r.jsxs("div", {
                      className: "flex flex-col gap-3 sm:flex-row", children: [r.jsxs("button", {
                        onClick: () => u && u(), className: `\r
                        btn-primary\r
                        transition-transform\r
                        duration-300\r
                        hover:-translate-y-1\r
                      `, children: ["Book Your Ride", r.jsx(Ua, { size: 17, className: "transition-transform duration-300 group-hover:translate-x-1" })]
                      }), r.jsx("a", {
                        href: "#vehicles", className: `\r
                        btn-secondary\r
                        border-ink/10\r
                        bg-ink\r
                        text-white\r
                        transition-all\r
                        duration-300\r
                        hover:-translate-y-1\r
                        hover:bg-ink/90\r
                      `, children: "View Vehicles"
                      })]
                    })
                  })]
                }), r.jsxs("div", {
                  className: `
                  relative
                  transform
                  transition-all
                  duration-1000
                  ease-out
                  ${f ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}
                `, style: { transitionDelay: "250ms" }, children: [r.jsx("div", {
                    className: `
                    absolute
                    -inset-3
                    rounded-[2rem]
                    bg-gradient-to-br
                    from-gold/30
                    via-white
                    to-ink/10
                    blur-sm
                    transition-all
                    duration-[1500ms]
                    ${f ? "scale-100 opacity-100" : "scale-90 opacity-0"}
                  `}), r.jsxs("div", {
                      className: `\r
                    group\r
                    relative\r
                    overflow-hidden\r
                    rounded-[2rem]\r
                    bg-ink\r
                    shadow-premium\r
                  `, children: [r.jsx("img", {
                        src: "/images/showcase%20c-3.png", alt: "Gitam Tours and Travels vehicle fleet", className: `
                      h-[340px]
                      w-full
                      object-cover
                      opacity-90
                      transition-transform
                      duration-[1600ms]
                      ease-out
                      sm:h-[460px]
                      ${f ? "scale-100" : "scale-110"}
                      group-hover:scale-105
                    `, loading: "lazy"
                      }), r.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" }), r.jsx("div", {
                        className: `
                      absolute
                      bottom-5
                      left-5
                      right-5
                      transform
                      rounded-3xl
                      border
                      border-white/20
                      bg-white/15
                      p-5
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-1000
                      ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                    `, style: { transitionDelay: "700ms" }, children: r.jsxs("div", {
                          className: "flex items-center gap-4", children: [r.jsx("div", {
                            className: `\r
                          grid\r
                          size-14\r
                          shrink-0\r
                          place-items-center\r
                          rounded-2xl\r
                          bg-gold\r
                          text-ink\r
                          shadow-glow\r
                          transition-transform\r
                          duration-500\r
                          hover:rotate-6\r
                          hover:scale-110\r
                        `, children: r.jsx(al, { size: 26 })
                          }), r.jsxs("div", { children: [r.jsx("h2", { className: "font-display text-2xl font-semibold", children: "Swift, Ertiga & Innova" }), r.jsx("p", { className: "mt-1 text-sm leading-6 text-white/75", children: "Flexible fleet options for 4, 7 and 11 seater travel needs." })] })]
                        })
                      })]
                    }), r.jsx("div", {
                      className: `
                    absolute
                    -top-5
                    left-5
                    hidden
                    transform
                    rounded-2xl
                    bg-white
                    px-5
                    py-4
                    shadow-premium
                    transition-all
                    duration-1000
                    sm:block
                    ${f ? "translate-y-0 scale-100 opacity-100" : "-translate-y-8 scale-90 opacity-0"}
                  `, style: { transitionDelay: "850ms" }, children: r.jsxs("div", { className: "flex items-center gap-3", children: [r.jsx(Wn, { size: 22, className: "text-gold" }), r.jsxs("div", { children: [r.jsx("p", { className: "text-xl font-bold text-ink", children: "3" }), r.jsx("p", { className: "text-xs font-semibold text-slate-500", children: "Vehicle Options" })] })] })
                    }), r.jsx("div", {
                      className: `
                    absolute
                    -bottom-5
                    right-5
                    hidden
                    transform
                    rounded-2xl
                    bg-gold
                    px-5
                    py-4
                    text-ink
                    shadow-glow
                    transition-all
                    duration-1000
                    sm:block
                    ${f ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-90 opacity-0"}
                  `, style: { transitionDelay: "1000ms" }, children: r.jsxs("div", { className: "flex items-center gap-3", children: [r.jsx(S0, { size: 22 }), r.jsxs("div", { children: [r.jsx("p", { className: "text-xl font-bold", children: "24/7" }), r.jsx("p", { className: "text-xs font-semibold", children: "Booking Support" })] })] })
                    })]
                })]
              })
            })]
      }), r.jsx("section", { id: "vehicles", className: "relative overflow-hidden", children: r.jsx(C0, { onBook: u }) }), r.jsx("section", {
        ref: c, className: "overflow-hidden bg-white px-4 py-20 sm:px-6", children: r.jsxs("div", {
          className: "mx-auto max-w-7xl", children: [r.jsxs("div", {
            className: `
                mx-auto
                mb-12
                max-w-3xl
                transform
                text-center
                transition-all
                duration-1000
                ease-out
                ${m ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
              `, children: [r.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.22em] text-gold", children: "Fleet Quality" }), r.jsx("h2", { className: "mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl", children: "Why Travel With Our Vehicles?" }), r.jsx("p", { className: "mt-4 text-base leading-7 text-slate-600", children: "Every vehicle is selected for comfort, cleanliness and dependable travel performance." })]
          }), r.jsx("div", {
            className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: Dg.map(({ icon: j, title: v, text: p }, E) => r.jsxs("div", {
              className: `
                      premium-card
                      group
                      transform
                      p-6
                      text-center
                      transition-all
                      duration-700
                      ease-out
                      hover:-translate-y-1
                      ${m ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}
                    `, style: { transitionDelay: `${200 + E * 150}ms` }, children: [r.jsx("div", {
                className: `\r
                        mx-auto\r
                        grid\r
                        size-14\r
                        place-items-center\r
                        rounded-2xl\r
                        bg-gold/10\r
                        text-gold\r
                        transition-all\r
                        duration-500\r
                        group-hover:rotate-3\r
                        group-hover:scale-110\r
                        group-hover:bg-gold\r
                        group-hover:text-ink\r
                      `, children: r.jsx(j, { size: 25 })
              }), r.jsx("h3", { className: "mt-5 text-lg font-semibold text-ink", children: v }), r.jsx("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: p })]
            }, v))
          })]
        })
      }), r.jsx("section", {
        ref: h, className: "bg-white px-4 pb-20 sm:px-6", children: r.jsxs("div", {
          className: `
              mx-auto
              max-w-7xl
              transform
              overflow-hidden
              rounded-[2rem]
              bg-ink
              px-6
              py-12
              text-center
              shadow-premium
              transition-all
              duration-1000
              ease-out
              sm:px-10
              ${g ? "translate-y-0 scale-100 opacity-100" : "translate-y-16 scale-95 opacity-0"}
            `, children: [r.jsx("div", { className: "pointer-events-none absolute" }), r.jsx(al, {
            className: `
                mx-auto
                mb-4
                text-gold
                transition-all
                duration-700
                ${g ? "rotate-0 scale-100 opacity-100" : "rotate-[-25deg] scale-50 opacity-0"}
              `, size: 38
          }), r.jsx("h2", { className: "font-display text-3xl font-semibold text-white sm:text-4xl", children: "Need Help Choosing A Vehicle?" }), r.jsx("p", { className: "mx-auto mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base", children: "Tell us your pickup location, destination, passenger count and duration. Our team will suggest the most comfortable option." }), r.jsxs("button", {
            onClick: () => u && u(), className: `\r
                btn-primary\r
                mt-7\r
                transition-all\r
                duration-300\r
                hover:-translate-y-1\r
                hover:scale-105\r
              `, children: ["Book Now", r.jsx(Ua, { size: 17 })]
          })]
        })
      })]
    }), r.jsx(Au, {})]
  })
} const Ug = [{ icon: wu, title: "Call Us", value: oe.phone, href: `tel:${oe.phone}`, description: "Speak directly with our travel team" }, { icon: xc, title: "WhatsApp", value: oe.whatsapp, href: `https://wa.me/${oe.whatsapp}`, description: "Chat with us for quick booking" }, { icon: j0, title: "Email", value: oe.email, href: `mailto:${oe.email}`, description: "Send us your travel requirements" }, { icon: ua, title: "Location", value: oe.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(oe.address)}`, description: "Find our location on Google Maps" }], Bg = ["Quick booking confirmation", "Pickup and drop guidance", "Vehicle selection support", "Local and outstation trip help"], Hg = [{ icon: S0, title: "Fast Response", text: "Get quick assistance for ride bookings and trip details." }, { icon: Ba, title: "Trusted Support", text: "Clear communication from booking to final drop." }, { icon: Jn, title: "Easy Scheduling", text: "Plan one-day, multi-day, local and outstation trips." }]; function xu(u = .15) { const o = S.useRef(null), [f, c] = S.useState(!1); return S.useEffect(() => { const m = o.current; if (!m) return; const h = new IntersectionObserver(([g]) => { g.isIntersecting && (c(!0), h.disconnect()) }, { threshold: u }); return h.observe(m), () => { h.disconnect() } }, [u]), [o, f] } function Lg({ onBook: u }) {
  const [o, f] = xu(.15), [c, m] = xu(.15), [h, g] = xu(.12), [j, v] = xu(.15); return r.jsxs(r.Fragment, {
    children: [r.jsx($l, { onBook: u }), r.jsxs("main", {
      className: "overflow-hidden bg-white", children: [r.jsxs("section", {
        className: `\r
            relative\r
            overflow-hidden\r
            px-4\r
            pb-20\r
            pt-32\r
            sm:px-6\r
          `, style: { background: "linear-gradient(135deg, rgba(28, 29, 31, 0.27), rgba(24,32,45,0.92)), url(/images/contactusSlide.png)", backgroundSize: "cover", backgroundPosition: "center" }, children: [r.jsx("div", {
          className: `\r
              absolute\r
              inset-0\r
              bg-[radial-gradient(circle_at_top_right,rgba(255,107,71,0.32),transparent_34%)]\r
            `}), r.jsxs("div", {
            className: "relative mx-auto max-w-7xl text-center", children: [r.jsxs("div", {
              className: `\r
                inline-flex\r
                animate-[fadeDown_0.8s_ease-out]\r
                items-center\r
                gap-2\r
                rounded-full\r
                border\r
                border-white/15\r
                bg-white/10\r
                px-4\r
                py-2\r
                text-white\r
                backdrop-blur\r
              `, children: [r.jsx(Zl, { size: 16, className: "text-gold" }), r.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm", children: "Contact Gitam Tours" })]
            }), r.jsx("h1", {
              className: `\r
                mt-6\r
                animate-[fadeUp_1s_ease-out]\r
                font-display\r
                text-4xl\r
                font-semibold\r
                leading-tight\r
                text-white\r
                sm:text-5xl\r
                lg:text-6xl\r
              `, children: "Let’s Plan Your Comfortable Ride"
            }), r.jsx("p", {
              className: `\r
                mx-auto\r
                mt-5\r
                max-w-2xl\r
                animate-[fadeUp_1s_ease-out_0.2s_both]\r
                text-sm\r
                leading-7\r
                text-white/75\r
                sm:text-base\r
              `, children: "Call, WhatsApp or send your trip details. Our team will help you choose the right vehicle for your pickup, route and travel duration."
            }), r.jsxs("div", {
              className: `\r
                mt-8\r
                flex\r
                animate-[fadeUp_1s_ease-out_0.4s_both]\r
                flex-col\r
                items-center\r
                justify-center\r
                gap-3\r
                sm:flex-row\r
              `, children: [r.jsxs("button", {
                onClick: () => u && u(), className: `\r
                  btn-primary\r
                  transition-all\r
                  duration-300\r
                  \r
                  hover:-translate-y-1\r
                  hover:scale-[1.02]\r
                `, children: ["Book Your Ride", r.jsx(Ua, { size: 17 })]
              }), r.jsxs("a", {
                href: `tel:${oe.phone}`, className: `\r
                  btn-secondary\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-1\r
                `, children: [r.jsx(wu, { size: 17 }), "Call Now"]
              })]
            })]
          })]
      }), r.jsx("section", {
        ref: o, className: `\r
            relative\r
            overflow-hidden\r
            px-4\r
            py-20\r
            sm:px-6\r
          `, style: { background: "radial-gradient(circle at top left, rgba(255,107,71,0.15), transparent 34%), radial-gradient(circle at bottom right, rgba(11,18,32,0.10), transparent 34%), #EEF6FF" }, children: r.jsxs("div", {
          className: "mx-auto max-w-7xl", children: [r.jsxs("div", {
            className: `
                mx-auto
                mb-12
                max-w-3xl
                transform
                text-center
                transition-all
                duration-1000
                ease-out
                ${f ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
              `, children: [r.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.22em] text-gold", children: "Get In Touch" }), r.jsx("h2", { className: "mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl", children: "We’re Ready To Help With Your Journey" }), r.jsx("p", { className: "mt-4 text-base leading-7 text-slate-600", children: "Choose your preferred way to contact Gitam Tours & Travels." })]
          }), r.jsx("div", {
            className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: Ug.map(({ icon: p, title: E, value: C, href: M, description: H }, L) => r.jsxs("a", {
              href: M, target: E === "WhatsApp" || E === "Location" ? "_blank" : void 0, rel: E === "WhatsApp" || E === "Location" ? "noopener noreferrer" : void 0, className: `
                      premium-card
                      group
                      transform
                      p-6
                      transition-all
                      duration-700
                      ease-out
                      hover:-translate-y-1
                      hover:shadow-premium
                      ${f ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"}
                    `, style: { transitionDelay: `${200 + L * 130}ms` }, children: [r.jsx("div", {
                className: `\r
                        grid\r
                        size-14\r
                        place-items-center\r
                        rounded-2xl\r
                        bg-gold/10\r
                        text-gold\r
                        transition-all\r
                        duration-500\r
                        group-hover:rotate-3\r
                        group-hover:scale-110\r
                        group-hover:bg-gold\r
                        group-hover:text-ink\r
                      `, children: r.jsx(p, { size: 24 })
              }), r.jsx("h3", { className: "mt-5 text-lg font-semibold text-ink", children: E }), r.jsx("p", {
                className: `\r
                        mt-2\r
                        break-words\r
                        text-sm\r
                        font-semibold\r
                        leading-6\r
                        text-slate-700\r
                      `, children: C
              }), r.jsx("p", { className: "mt-2 text-xs leading-5 text-slate-500", children: H }), r.jsxs("div", {
                className: `\r
                        mt-4\r
                        flex\r
                        items-center\r
                        gap-1\r
                        text-xs\r
                        font-bold\r
                        uppercase\r
                        tracking-wide\r
                        text-gold\r
                        transition-transform\r
                        duration-300\r
                        group-hover:translate-x-1\r
                      `, children: [E === "Call Us" && "Call Now", E === "WhatsApp" && "Chat Now", E === "Email" && "Send Email", E === "Location" && "Open Map", r.jsx(Ua, { size: 13 })]
              })]
            }, E))
          }), r.jsxs("div", {
            ref: c, className: "mt-16 grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr]", children: [r.jsxs("div", {
              className: `
                  transform
                  transition-all
                  duration-1000
                  ease-out
                  ${m ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}
                `, children: [r.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.22em] text-gold", children: "Find Us" }), r.jsx("h2", { className: "mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl", children: "Visit Gitam Tours & Travels" }), r.jsx("p", { className: "mt-4 text-base leading-8 text-slate-600", children: "Find our location easily using Google Maps. Get directions for your pickup, booking discussion or travel enquiry." }), r.jsx("div", {
                className: "mt-7 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm", children: r.jsxs("div", {
                  className: "flex items-start gap-4", children: [r.jsx("div", {
                    className: `\r
                        grid\r
                        size-12\r
                        shrink-0\r
                        place-items-center\r
                        rounded-2xl\r
                        bg-gold/10\r
                        text-gold\r
                      `, children: r.jsx(ua, { size: 22 })
                  }), r.jsxs("div", { children: [r.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-slate-500", children: "Our Location" }), r.jsx("p", { className: "mt-1 text-sm font-semibold leading-6 text-ink", children: oe.address })] })]
                })
              }), r.jsx("div", {
                className: "mt-6 space-y-3", children: Bg.map((p, E) => r.jsxs("div", {
                  className: `
                          flex
                          transform
                          items-center
                          gap-3
                          rounded-2xl
                          border
                          border-white
                          bg-white/85
                          p-3
                          shadow-sm
                          backdrop-blur
                          transition-all
                          duration-700
                          ${m ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}
                        `, style: { transitionDelay: `${300 + E * 120}ms` }, children: [r.jsx("span", {
                    className: `\r
                            grid\r
                            size-9\r
                            shrink-0\r
                            place-items-center\r
                            rounded-full\r
                            bg-gold/10\r
                          `, children: r.jsx(Fn, { size: 17, className: "text-jade" })
                  }), r.jsx("span", { className: "text-sm font-semibold text-slate-700", children: p })]
                }, p))
              })]
            }), r.jsxs("div", {
              className: `
                  relative
                  min-h-[380px]
                  transform
                  overflow-hidden
                  rounded-[2rem]
                  bg-slate-200
                  shadow-premium
                  transition-all
                  duration-1000
                  ease-out
                  sm:min-h-[450px]
                  ${m ? "translate-x-0 scale-100 opacity-100" : "translate-x-16 scale-95 opacity-0"}
                `, children: [r.jsx("iframe", { title: "Gitam Tours and Travels Location", src: `https://www.google.com/maps?q=${encodeURIComponent(oe.address)}&output=embed`, className: "absolute inset-0 h-full w-full border-0", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }), r.jsx("div", {
                className: `\r
                    pointer-events-none\r
                    absolute\r
                    left-4\r
                    top-4\r
                    rounded-2xl\r
                    border\r
                    border-white/50\r
                    bg-white/95\r
                    px-4\r
                    py-3\r
                    shadow-lg\r
                    backdrop-blur\r
                  `, children: r.jsxs("div", {
                  className: "flex items-center gap-3", children: [r.jsx("div", {
                    className: `\r
                        grid\r
                        size-10\r
                        place-items-center\r
                        rounded-xl\r
                        bg-ink\r
                        text-gold\r
                      `, children: r.jsx(ua, { size: 19 })
                  }), r.jsxs("div", { children: [r.jsx("p", { className: "text-xs font-bold uppercase tracking-wide text-slate-500", children: "Gitam Tours" }), r.jsx("p", { className: "text-sm font-semibold text-ink", children: "Our Location" })] })]
                })
              }), r.jsxs("a", {
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(oe.address)}`, target: "_blank", rel: "noopener noreferrer", className: `\r
                    absolute\r
                    bottom-4\r
                    right-4\r
                    flex\r
                    items-center\r
                    gap-2\r
                    rounded-xl\r
                    bg-ink\r
                    px-4\r
                    py-3\r
                    text-xs\r
                    font-bold\r
                    text-white\r
                    shadow-xl\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-1\r
                    hover:bg-gold\r
                    hover:text-ink\r
                  `, children: [r.jsx(ua, { size: 15 }), "Open in Google Maps", r.jsx(Ua, { size: 14 })]
              })]
            })]
          })]
        })
      }), r.jsx("section", {
        ref: h, className: "overflow-hidden bg-white", children: r.jsx("div", {
          className: `
              transform
              transition-all
              duration-1000
              ease-out
              ${g ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
            `, children: r.jsx(z0, {})
        })
      }), r.jsx("section", {
        ref: j, className: "bg-white px-4 py-20 sm:px-6", children: r.jsxs("div", {
          className: "mx-auto max-w-7xl", children: [r.jsxs("div", {
            className: `
                mx-auto
                mb-12
                max-w-3xl
                transform
                text-center
                transition-all
                duration-1000
                ${v ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
              `, children: [r.jsx("p", { className: "text-sm font-semibold uppercase tracking-[0.22em] text-gold", children: "Why Contact Us" }), r.jsx("h2", { className: "mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl", children: "Simple, Fast & Reliable Travel Support" })]
          }), r.jsx("div", {
            className: "grid gap-5 sm:grid-cols-3", children: Hg.map(({ icon: p, title: E, text: C }, M) => r.jsxs("div", {
              className: `
                      premium-card
                      group
                      transform
                      p-6
                      text-center
                      transition-all
                      duration-700
                      hover:-translate-y-1
                      ${v ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
                    `, style: { transitionDelay: `${200 + M * 150}ms` }, children: [r.jsx("div", {
                className: `\r
                        mx-auto\r
                        grid\r
                        size-14\r
                        place-items-center\r
                        rounded-2xl\r
                        bg-gold/10\r
                        text-gold\r
                        transition-all\r
                        duration-500\r
                        group-hover:rotate-3\r
                        group-hover:scale-110\r
                        group-hover:bg-gold\r
                        group-hover:text-ink\r
                      `, children: r.jsx(p, { size: 25 })
              }), r.jsx("h3", { className: "mt-5 text-lg font-semibold text-ink", children: E }), r.jsx("p", { className: "mt-2 text-sm leading-6 text-slate-600", children: C })]
            }, E))
          })]
        })
      })]
    }), r.jsx(Au, {}), r.jsx("style", {
      children: `
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `})]
  })
} function qg() { const [u, o] = S.useState(!1), [f, c] = S.useState(null), m = (g = null) => { c(g), o(!0) }, h = () => { o(!1), c(null) }; return r.jsxs(r.Fragment, { children: [r.jsx($l, { onBook: m }), r.jsxs(s1, { children: [r.jsx(Yl, { path: "/", element: r.jsx(Ng, { onBook: m }) }), r.jsx(Yl, { path: "/about", element: r.jsx(wg, { onBook: m }) }), r.jsx(Yl, { path: "/service", element: r.jsx(Mg, { onBook: m }) }), r.jsx(Yl, { path: "/vehicles", element: r.jsx(Og, { onBook: m }) }), r.jsx(Yl, { path: "/contact", element: r.jsx(Lg, { onBook: m }) })] }), r.jsx(ig, {}), r.jsx(og, { isOpen: u, onClose: h, preselectedVehicle: f })] }) } sy.createRoot(document.getElementById("root")).render(r.jsx(ey.StrictMode, { children: r.jsx(D1, { children: r.jsx(qg, {}) }) }));

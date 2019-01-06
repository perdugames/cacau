/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./tests/executetests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/cacau-1.1.0.js":
/*!******************************!*\
  !*** ./build/cacau-1.1.0.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (t) {\n  var e = {};function n(r) {\n    if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n  }n.m = t, n.c = e, n.d = function (t, e, r) {\n    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });\n  }, n.r = function (t) {\n    \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: \"Module\" }), Object.defineProperty(t, \"__esModule\", { value: !0 });\n  }, n.t = function (t, e) {\n    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && \"object\" == (typeof t === \"undefined\" ? \"undefined\" : _typeof(t)) && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, \"default\", { enumerable: !0, value: t }), 2 & e && \"string\" != typeof t) for (var o in t) {\n      n.d(r, o, function (e) {\n        return t[e];\n      }.bind(null, o));\n    }return r;\n  }, n.n = function (t) {\n    var e = t && t.__esModule ? function () {\n      return t.default;\n    } : function () {\n      return t;\n    };return n.d(e, \"a\", e), e;\n  }, n.o = function (t, e) {\n    return Object.prototype.hasOwnProperty.call(t, e);\n  }, n.p = \"\", n(n.s = 0);\n}([function (t, e, n) {\n  \"use strict\";\n  (function (e) {\n    var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n      return typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n    } : function (t) {\n      return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n    };var o = new (function (t) {\n      return t && t.__esModule ? t : { default: t };\n    }(n(2)).default)();var u = function u(t) {\n      for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {\n        n[r - 1] = arguments[r];\n      }var o = [],\n          u = [],\n          i = performance.now(),\n          l = !0,\n          f = !1,\n          E = void 0;try {\n        for (var d, s = n[Symbol.iterator](); !(l = (d = s.next()).done); l = !0) {\n          var _ = d.value;!0 === _.result ? o.push(_) : u.push(_);\n        }\n      } catch (t) {\n        f = !0, E = t;\n      } finally {\n        try {\n          !l && s.return && s.return();\n        } finally {\n          if (f) throw E;\n        }\n      }var p = performance.now() - i,\n          y = o.length,\n          T = u.length,\n          C = { fileName: t, duration: p, passing: o, failing: u, lenPassing: y, lenFailing: T },\n          N = T > 0 ? a(C) : c(C);console.log(\"%c\" + N.text, N.color);\n    },\n        i = function i(t, e) {\n      e(function (e) {\n        return u(t, E(t, e));\n      });\n    },\n        a = function a(t) {\n      return { text: l(t) + f(t), color: \"color:#B03A2E;\" };\n    },\n        l = function l(t) {\n      return \"Failing in \" + t.fileName + \":\\n\\nPassing: \" + t.lenPassing + \" (\" + t.duration.toFixed(2) + \"ms)\\nFailing: \" + t.lenFailing + \"\\n\\n\";\n    },\n        f = function f(t) {\n      for (var e = \"\", n = 0; n < t.lenFailing; n++) {\n        e += n + \") \" + t.failing[n].name + \" (\" + t.failing[n].duration.toFixed(2) + \"ms)\\n       CheckError: \" + t.failing[n].actual + \" \" + t.failing[n].checkType + \" \" + t.failing[n].expected + \"\\n\\n       ✓ Actual: \" + t.failing[n].actual + \"\\n       ✓ Expected: \" + t.failing[n].expected + \"\\n\\n\";\n      }return e += \"\\n\";\n    },\n        c = function c(t) {\n      return { text: \"✓ Passing \" + t.fileName + \"\\n\", color: \"color:#27AE60;\" };\n    },\n        E = function E(t, e, n) {\n      var r = performance.now(),\n          o = void 0;try {\n        return d(n) ? e(n()) : e(), { name: t, duration: o = performance.now() - r, result: !0 };\n      } catch (e) {\n        if (o = performance.now() - r, \"AssertionError\" === e.name) return s(t, o, e);throw e;\n      }\n    },\n        d = function d(t) {\n      return \"function\" == typeof t;\n    },\n        s = function s(t, e, n) {\n      return { name: t, duration: e, result: n.result, actual: n.actual, expected: n.expected, checkType: n.operator };\n    },\n        _ = function _() {\n      return p.apply(void 0, arguments);\n    },\n        p = function p() {\n      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {\n        e[n] = arguments[n];\n      }var r = {},\n          o = !0,\n          u = !1,\n          i = void 0;try {\n        for (var a, l = e[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) {\n          var f = a.value;y(f, r);\n        }\n      } catch (t) {\n        u = !0, i = t;\n      } finally {\n        try {\n          !o && l.return && l.return();\n        } finally {\n          if (u) throw i;\n        }\n      }return r;\n    },\n        y = function t(e, n) {\n      for (var r = Object.keys(e), o = void 0, u = void 0, i = 0; i < r.length; i++) {\n        u = e[o = r[i]], T(n[o]) ? n[o] = n[o] : n[o] = {}, T(u) ? t(u, n[o]) : n[o] = u;\n      }\n    },\n        T = function T(t) {\n      return \"object\" === (void 0 === t ? \"undefined\" : r(t)) && null !== t;\n    };e.TEST = u, e.TEST_ASYNC = i, e.TEST_F = E, e.CREATE_MOCK = _, e.CHECK_TRUE = o.isTrue, e.CHECK_NOT_TRUE = o.isNotTrue, e.CHECK_FALSE = o.isFalse, e.CHECK_NOT_FALSE = o.isNotFalse, e.CHECK_UNDEFINED = o.isUndefined, e.CHECK_NOT_UNDEFINED = o.isNotUndefined, e.CHECK_NULL = o.isNull, e.CHECK_NOT_NULL = o.isNotNull, e.CHECK_ACTUAL_EQUAL_EXPECTED = o.actualEqualExpected, e.CHECK_ACTUAL_DIFFERENT_EXPECTED = o.actualNotEqualExpected, e.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT = o.actualDeepEqualExpected, e.cacau = { TEST: u, TEST_ASYNC: i, TEST_F: E, CREATE_MOCK: _, CHECK_TRUE: o.isTrue, CHECK_NOT_TRUE: o.isNotTrue, CHECK_FALSE: o.isFalse, CHECK_NOT_FALSE: o.isNotFalse, CHECK_UNDEFINED: o.isUndefined, CHECK_NOT_UNDEFINED: o.isNotUndefined, CHECK_NULL: o.isNull, CHECK_NOT_NULL: o.isNotNull, CHECK_ACTUAL_EQUAL_EXPECTED: o.actualEqualExpected, CHECK_ACTUAL_DIFFERENT_EXPECTED: o.actualNotEqualExpected, CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT: o.actualDeepEqualExpected }, t.exports = e;\n  }).call(this, n(1));\n}, function (t, e) {\n  var n;n = function () {\n    return this;\n  }();try {\n    n = n || Function(\"return this\")() || (0, eval)(\"this\");\n  } catch (t) {\n    \"object\" == (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) && (n = window);\n  }t.exports = n;\n}, function (t, e, n) {\n  \"use strict\";\n  Object.defineProperty(e, \"__esModule\", { value: !0 });var r = i(n(3)),\n      o = i(n(5)),\n      u = i(n(6));function i(t) {\n    return t && t.__esModule ? t : { default: t };\n  }function a() {}a.prototype.isTrue = function (t) {\n    new r.default(t, !0, u.default.IS_TRUE, o.default.EQUAL);\n  }, a.prototype.isNotTrue = function (t) {\n    new r.default(t, !1, u.default.IS_NOT_TRUE, o.default.NOT_EQUAL);\n  }, a.prototype.isFalse = function (t) {\n    new r.default(t, !1, u.default.IS_FALSE, o.default.EQUAL);\n  }, a.prototype.isNotFalse = function (t) {\n    new r.default(t, !0, u.default.IS_NOT_FALSE, o.default.NOT_EQUAL);\n  }, a.prototype.isUndefined = function (t) {\n    new r.default(t, void 0, u.default.IS_UNDEFINED, o.default.EQUAL);\n  }, a.prototype.isNotUndefined = function (t) {\n    new r.default(t, !0, u.default.IS_NOT_UNDEFINED, o.default.NOT_EQUAL);\n  }, a.prototype.isNull = function (t) {\n    new r.default(t, null, u.default.IS_NULL, o.default.EQUAL);\n  }, a.prototype.isNotNull = function (t) {\n    new r.default(t, !0, u.default.IS_NOT_NULL, o.default.NOT_EQUAL);\n  }, a.prototype.actualEqualExpected = function (t, e) {\n    new r.default(t, e, u.default.ACTUAL_EQUAL_EXPECTED, o.default.EQUAL);\n  }, a.prototype.actualNotEqualExpected = function (t, e) {\n    new r.default(t, e, u.default.ACTUAL_NOT_EQUAL_EXPECTED, o.default.NOT_EQUAL);\n  }, a.prototype.actualDeepEqualExpected = function (t, e) {\n    new r.default(t, e, u.default.ACTUAL_DEEP_EQUAL_EXPECTED, o.default.EQUAL);\n  }, e.default = a;\n}, function (t, e, n) {\n  \"use strict\";\n  Object.defineProperty(e, \"__esModule\", { value: !0 });var r = function (t) {\n    return t && t.__esModule ? t : { default: t };\n  }(n(4));function o(t, e, n, r) {\n    this.assert(t, e, n, r);\n  }o.prototype.assert = function (t, e, n, o) {\n    var u = n(t, e),\n        i = { actual: t, expected: e, result: u, operator: o },\n        a = \"actual: \" + t + \" \" + o + \" expected: \" + e;if (!u) throw new r.default(a, i);\n  }, e.default = o;\n}, function (t, e, n) {\n  \"use strict\";\n  Object.defineProperty(e, \"__esModule\", { value: !0 });var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n    return typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n  } : function (t) {\n    return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n  };function o(t, e, n) {\n    if (this.message = t || \"AssertionError message not specified\", u(e = e || {}, this), n = n || o, Error.captureStackTrace) Error.captureStackTrace(this, n);else try {\n      throw new Error();\n    } catch (t) {\n      this.stack = t.stack;\n    }\n  }o.prototype = Object.create(Error.prototype), o.prototype.constructor = o, o.prototype.name = \"AssertionError\";var u = function t(e, n) {\n    for (var r = Object.keys(e), o = void 0, u = void 0, a = 0; a < r.length; a++) {\n      u = e[o = r[a]], n[o] = i(n[o]) ? n[o] : {}, i(u) ? t(u, n[o]) : n[o] = u;\n    }\n  },\n      i = function i(t) {\n    return \"object\" === (void 0 === t ? \"undefined\" : r(t)) && null !== t;\n  };e.default = o;\n}, function (t, e, n) {\n  \"use strict\";\n  Object.defineProperty(e, \"__esModule\", { value: !0 });e.default = { EQUAL: \"===\", NOT_EQUAL: \"!==\" };\n}, function (t, e, n) {\n  \"use strict\";\n  Object.defineProperty(e, \"__esModule\", { value: !0 });var r = function (t) {\n    return t && t.__esModule ? t : { default: t };\n  }(n(7));var o = { IS_TRUE: function IS_TRUE(t) {\n      return !0 === t;\n    }, IS_NOT_TRUE: function IS_NOT_TRUE(t) {\n      return !0 !== t;\n    }, IS_FALSE: function IS_FALSE(t) {\n      return !1 === t;\n    }, IS_NOT_FALSE: function IS_NOT_FALSE(t) {\n      return !1 !== t;\n    }, IS_UNDEFINED: function IS_UNDEFINED(t) {\n      return void 0 === t;\n    }, IS_NOT_UNDEFINED: function IS_NOT_UNDEFINED(t) {\n      return void 0 !== t;\n    }, IS_NULL: function IS_NULL(t) {\n      return null === t;\n    }, IS_NOT_NULL: function IS_NOT_NULL(t) {\n      return null !== t;\n    }, ACTUAL_EQUAL_EXPECTED: function ACTUAL_EQUAL_EXPECTED(t, e) {\n      return t === e;\n    }, ACTUAL_NOT_EQUAL_EXPECTED: function ACTUAL_NOT_EQUAL_EXPECTED(t, e) {\n      return t !== e;\n    }, ACTUAL_DEEP_EQUAL_EXPECTED: function ACTUAL_DEEP_EQUAL_EXPECTED(t, e) {\n      return r.default.deepEquals(t, e);\n    } };e.default = o;\n}, function (t, e, n) {\n  \"use strict\";\n  Object.defineProperty(e, \"__esModule\", { value: !0 });var r = { deepEquals: function (t) {\n      return t && t.__esModule ? t : { default: t };\n    }(n(8)).default };e.default = r;\n}, function (t, e, n) {\n  \"use strict\";\n  Object.defineProperty(e, \"__esModule\", { value: !0 });var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n    return typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n  } : function (t) {\n    return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n  },\n      o = function t(e, n) {\n    var o = void 0,\n        l = void 0,\n        f = void 0,\n        c = void 0;if (i(e) || i(n)) return !1;if ((void 0 === e ? \"undefined\" : r(e)) !== (void 0 === n ? \"undefined\" : r(n))) return !1;if (\"function\" == typeof e) return e.toString() === n.toString();if (a(e) ? (o = Object.keys(e), l = Object.keys(n), f = o.length, c = l.length) : (f = 0, c = 0), f !== c) return !1;if (0 === f) return !(e !== n && !u(e, n));for (var E = 0; E < f; E++) {\n      var d = o[E];if (e[d] !== n[d]) {\n        if (t(e[d], n[d])) continue;return !1;\n      }\n    }return !0;\n  },\n      u = function u(t, e) {\n    var n = Array.isArray(t) && Array.isArray(e),\n        r = a(t) && a(e);return !(!n && (Array.isArray(t) || Array.isArray(e))) && !(!n && !r);\n  },\n      i = function i(t) {\n    return void 0 === t || null === t;\n  },\n      a = function a(t) {\n    return \"object\" === (void 0 === t ? \"undefined\" : r(t)) && null !== t;\n  };e.default = function (t, e) {\n    return a(t) || a(e) ? !(!a(t) || !a(e)) && o(t, e) : t === e;\n  };\n}]);\n\n//# sourceURL=webpack:///./build/cacau-1.1.0.js?");

/***/ }),

/***/ "./lib/array_iterator.js":
/*!*******************************!*\
  !*** ./lib/array_iterator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction ArrayIterator() {\n    this.itens = [];\n    this.currentIndex = 0;\n}\n\nArrayIterator.prototype.addPush = function (item) {\n    this.itens.push(item);\n};\n\nArrayIterator.prototype.addUnshift = function (item) {\n    this.itens.unshift(item);\n};\n\nArrayIterator.prototype.first = function () {\n    this.currentIndex = 0;\n};\n\nArrayIterator.prototype.next = function () {\n    this.currentIndex++;\n};\n\nArrayIterator.prototype.isDone = function () {\n    return this.currentIndex >= this.itens.length;\n};\n\nArrayIterator.prototype.isLast = function () {\n    return this.currentIndex === this.itens.length - 1;\n};\n\nArrayIterator.prototype.getCurrent = function () {\n    if (this.isDone()) throw new Error('IteratorOutOfBounds');\n    return this.itens[this.currentIndex];\n};\n\nexports.default = ArrayIterator;\n\n//# sourceURL=webpack:///./lib/array_iterator.js?");

/***/ }),

/***/ "./lib/context.js":
/*!************************!*\
  !*** ./lib/context.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _timer = __webpack_require__(/*! ./timer */ \"./lib/timer.js\");\n\nvar _timer2 = _interopRequireDefault(_timer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Context() {\n    this._timer = new _timer2.default();\n}\n\nContext.prototype.timeout = function (ms) {\n    this._timer.limit = ms;\n    this._timer.start();\n};\n\nexports.default = Context;\n\n//# sourceURL=webpack:///./lib/context.js?");

/***/ }),

/***/ "./lib/hook.js":
/*!*********************!*\
  !*** ./lib/hook.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _runnable = __webpack_require__(/*! ./runnable */ \"./lib/runnable.js\");\n\nvar _runnable2 = _interopRequireDefault(_runnable);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Hook() {\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n    }\n\n    _runnable2.default.call.apply(_runnable2.default, [this].concat(args));\n    this.posHookFunction = undefined;\n}\n\n(0, _utils.inherits)(Hook, _runnable2.default);\n\nHook.prototype.run = function (suite, posHookFunction) {\n    try {\n        this.parent = suite;\n        this.posHookFunction = posHookFunction;\n        suite.inheritTimeoutLimit(this);\n\n        if (this.fn.length >= 1) {\n            this.fn.call(this.context, this.done.bind(this));\n        } else {\n            this.fn.call(this.context);\n            if (this.limitWasExtrapolated()) this.eventBus.emit('runEnd', this);\n            posHookFunction();\n        }\n    } catch (error) {\n        this.error = error;\n        this.eventBus.emit('runEnd', this);\n    }\n};\n\nHook.prototype.done = function () {\n    try {\n        if (this.limitWasExtrapolated()) this.eventBus.emit('runEnd', this);\n        this.posHookFunction();\n    } catch (error) {\n        this.error = error;\n        this.eventBus.emit('runEnd', this);\n    }\n};\n\nexports.default = Hook;\n\n//# sourceURL=webpack:///./lib/hook.js?");

/***/ }),

/***/ "./lib/interfaces/common.js":
/*!**********************************!*\
  !*** ./lib/interfaces/common.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction Common(suites, runner) {\n    this.suites = suites;\n    this.runner = runner;\n}\n\nCommon.prototype.beforeAll = function () {\n    var _suites$;\n\n    (_suites$ = this.suites[0]).createBeforeAll.apply(_suites$, arguments);\n};\n\nCommon.prototype.afterAll = function () {\n    var _suites$2;\n\n    (_suites$2 = this.suites[0]).createAfterAll.apply(_suites$2, arguments);\n};\n\nCommon.prototype.beforeEach = function () {\n    var _suites$3;\n\n    (_suites$3 = this.suites[0]).createBeforeEach.apply(_suites$3, arguments);\n};\n\nCommon.prototype.afterEach = function () {\n    var _suites$4;\n\n    (_suites$4 = this.suites[0]).createAfterEach.apply(_suites$4, arguments);\n};\n\nCommon.prototype.createSuite = function (name, fn) {\n    var suite = this.runner.createSuite(name, fn);\n    this.suites[0].addChild(suite);\n    this.suites.unshift(suite);\n    fn.call(suite.context);\n    this.suites.shift();\n    return suite;\n};\n\nCommon.prototype.createTest = function (name, fn) {\n    var test = this.runner.createTest(name, fn);\n    this.suites[0].addChild(test);\n    return test;\n};\n\nCommon.prototype.createOnlyTest = function (name, fn) {\n    var test = this.runner.createTest(name, fn);\n    this.suites[0].addOnlyChild(test);\n    return test;\n};\n\nexports.default = Common;\n\n//# sourceURL=webpack:///./lib/interfaces/common.js?");

/***/ }),

/***/ "./lib/interfaces/new_tdd.js":
/*!***********************************!*\
  !*** ./lib/interfaces/new_tdd.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _common = __webpack_require__(/*! ./common */ \"./lib/interfaces/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/*\n    // New-TDD Interface Example:\n    \n    suite('suite1', function() {\n\n        test('test1', function() {\n\n        });\n\n        suite('suite2', function() {\n\n            test('test1', function() {\n\n            });\n\n        });\n\n    });\n*/\nfunction createNewTddInterface(rootSuite, context, runner) {\n    var suites = [rootSuite];\n    var common = new _common2.default(suites, runner);\n\n    context.beforeAll = function () {\n        common.beforeAll.apply(common, arguments);\n    };\n\n    context.afterAll = function () {\n        common.afterAll.apply(common, arguments);\n    };\n\n    context.beforeEach = function () {\n        common.beforeEach.apply(common, arguments);\n    };\n\n    context.afterEach = function () {\n        common.afterEach.apply(common, arguments);\n    };\n\n    context.suite = function (name, fn) {\n        return common.createSuite(name, fn);\n    };\n\n    context.test = function (name, fn) {\n        return common.createTest(name, fn);\n    };\n\n    context.test.only = function (name, fn) {\n        return common.createOnlyTest(name, fn);\n    };\n}\n\nexports.default = createNewTddInterface;\n\n//# sourceURL=webpack:///./lib/interfaces/new_tdd.js?");

/***/ }),

/***/ "./lib/runnable.js":
/*!*************************!*\
  !*** ./lib/runnable.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _context = __webpack_require__(/*! ./context */ \"./lib/context.js\");\n\nvar _context2 = _interopRequireDefault(_context);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Runnable() {\n    this.name = typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string' ? arguments.length <= 0 ? undefined : arguments[0] : 'Anonymous';\n    this.fn = typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string' ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 0 ? undefined : arguments[0];\n    this.parent = undefined;\n    this.context = new _context2.default();\n    this.error = undefined;\n}\n\nRunnable.prototype.limitWasExtrapolated = function () {\n    var timer = this.context._timer;\n    var result = timer.isExtrapolated();\n    if (result) this.error = new Error('TimeoutError: Time(' + timer.limit + ') extrapolated!');\n    return result;\n};\n\nexports.default = Runnable;\n\n//# sourceURL=webpack:///./lib/runnable.js?");

/***/ }),

/***/ "./lib/runner.js":
/*!***********************!*\
  !*** ./lib/runner.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _suite = __webpack_require__(/*! ./suite */ \"./lib/suite.js\");\n\nvar _suite2 = _interopRequireDefault(_suite);\n\nvar _test = __webpack_require__(/*! ./test */ \"./lib/test.js\");\n\nvar _test2 = _interopRequireDefault(_test);\n\nvar _eventbus = __webpack_require__(/*! @perdugames/eventbus */ \"./node_modules/@perdugames/eventbus/build/eventbus-1.0.2.js\");\n\nvar _eventbus2 = _interopRequireDefault(_eventbus);\n\nvar _runner_listeners = __webpack_require__(/*! ./runner_listeners */ \"./lib/runner_listeners.js\");\n\nvar _runner_listeners2 = _interopRequireDefault(_runner_listeners);\n\nvar _runnable = __webpack_require__(/*! ./runnable */ \"./lib/runnable.js\");\n\nvar _runnable2 = _interopRequireDefault(_runnable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Runner() {\n    this.eventBus = new _eventbus2.default();\n    _suite2.default.prototype.eventBus = this.eventBus;\n    _runnable2.default.prototype.eventBus = this.eventBus;\n    this.rootSuite = this.createSuite('root', function () {});\n    this.callbackRunProgress = undefined;\n    this.result = {};\n    (0, _runner_listeners2.default)(this);\n}\n\nRunner.prototype.createSuite = function (name, fn) {\n    this.eventBus.emit('addSuite');\n    return new _suite2.default(name, fn);\n};\n\nRunner.prototype.createTest = function (name, fn) {\n    this.eventBus.emit('addTest');\n    return new _test2.default(name, fn);\n};\n\nRunner.prototype.getRunProgress = function () {\n    if (this.result.tests === 0) return 0;\n\n    return Math.round(this.result.completedTests / (this.result.tests / 100));\n};\n\nRunner.prototype.run = function (callbackRunProgress) {\n    this.callbackRunProgress = callbackRunProgress;\n    this.eventBus.emit('runStart');\n    this.rootSuite.run();\n};\n\nexports.default = Runner;\n\n//# sourceURL=webpack:///./lib/runner.js?");

/***/ }),

/***/ "./lib/runner_listeners.js":
/*!*********************************!*\
  !*** ./lib/runner_listeners.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\n\nfunction createRunnerListeners(runner) {\n    /*\n        suites - count of suites run.\n        tests - count of tests run.\n        passing - count of passing tests.\n        failing - count of failed tests.\n        errors = [{\n            suiteName: ,\n            testName: ,\n            testFunction: ,\n            duration: ,\n            objError:\n        }, ...]\n        runStart - time of the beginning of the test run.\n        runEnd - time of the end of the test run.\n        runDuration - time of the duration the test run.\n        completedTests - Number of tests that have been completed.\n    */\n    var result = {\n        runStart: 0,\n        suites: 0,\n        tests: 0,\n        passing: 0,\n        failing: 0,\n        errors: [],\n        runEnd: 0,\n        runDuration: 0,\n        completedTests: 0\n    };\n\n    runner.result = result;\n\n    runner.eventBus.once('runStart', function () {\n        result.runStart = (0, _utils.timestamp)();\n    });\n\n    runner.eventBus.on('addSuite', function () {\n        result.suites++;\n    });\n\n    runner.eventBus.on('addTest', function () {\n        result.tests++;\n    });\n\n    runner.eventBus.on('pass', function () {\n        result.passing++;\n    });\n\n    runner.eventBus.on('fail', function () {\n        result.failing++;\n    });\n\n    runner.eventBus.on('testEnd', function (test) {\n        if (test.error) {\n            result.errors.push({\n                name: test.name,\n                fn: test.fn,\n                parent: test.parent,\n                error: test.error\n            });\n            runner.eventBus.emit('fail');\n        } else {\n            runner.eventBus.emit('pass');\n        }\n\n        result.completedTests++;\n\n        if (runner.getRunProgress() === 100) runner.eventBus.emit('runEnd');else runner.callbackRunProgress();\n    });\n\n    runner.eventBus.on('suiteEnd', function (suite) {\n        if (suite.afterAll) suite.afterAll.run(suite, function () {\n            if (suite.name !== 'root') suite.parent.childNext();\n        });else if (suite.name !== 'root') suite.parent.childNext();\n    });\n\n    runner.eventBus.once('only', function (count) {\n        result.tests = count.tests;\n        result.suites = count.suites;\n    });\n\n    runner.eventBus.once('runEnd', function (obj) {\n        result.completedTests = result.tests;\n        if (obj) result.errors.push({\n            name: obj.name,\n            fn: obj.fn,\n            parent: obj.parent,\n            error: obj.error\n        });\n        result.runEnd = (0, _utils.timestamp)();\n        result.runDuration = result.runEnd - result.runStart;\n        runner.callbackRunProgress();\n    });\n}\n\nexports.default = createRunnerListeners;\n\n//# sourceURL=webpack:///./lib/runner_listeners.js?");

/***/ }),

/***/ "./lib/suite.js":
/*!**********************!*\
  !*** ./lib/suite.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _array_iterator = __webpack_require__(/*! ./array_iterator */ \"./lib/array_iterator.js\");\n\nvar _array_iterator2 = _interopRequireDefault(_array_iterator);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\n\nvar _context = __webpack_require__(/*! ./context */ \"./lib/context.js\");\n\nvar _context2 = _interopRequireDefault(_context);\n\nvar _hook = __webpack_require__(/*! ./hook */ \"./lib/hook.js\");\n\nvar _hook2 = _interopRequireDefault(_hook);\n\nvar _runnable = __webpack_require__(/*! ./runnable */ \"./lib/runnable.js\");\n\nvar _runnable2 = _interopRequireDefault(_runnable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Suite() {\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n    }\n\n    _runnable2.default.call.apply(_runnable2.default, [this].concat(args));\n    this.beforeAll = undefined;\n    this.afterAll = undefined;\n    this.beforeEach = undefined;\n    this.afterEach = undefined;\n    this.parentsBeforeEach = new _array_iterator2.default();\n    this.parentsAfterEach = new _array_iterator2.default();\n    this.children = new _array_iterator2.default();\n    this.childrenOnlys = new _array_iterator2.default();\n}\n\n(0, _utils.inherits)(Suite, _runnable2.default);\n\nSuite.prototype.addChild = function (child) {\n    child.parent = this;\n    this.children.addPush(child);\n};\n\nSuite.prototype.addOnlyChild = function (child) {\n    child.parent = this;\n    this.childrenOnlys.addPush(child);\n};\n\nSuite.prototype.createBeforeAll = function () {\n    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n    }\n\n    this.beforeAll = new (Function.prototype.bind.apply(_hook2.default, [null].concat(args)))();\n};\n\nSuite.prototype.createAfterAll = function () {\n    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n        args[_key3] = arguments[_key3];\n    }\n\n    this.afterAll = new (Function.prototype.bind.apply(_hook2.default, [null].concat(args)))();\n};\n\nSuite.prototype.createBeforeEach = function () {\n    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n        args[_key4] = arguments[_key4];\n    }\n\n    this.beforeEach = new (Function.prototype.bind.apply(_hook2.default, [null].concat(args)))();\n};\n\nSuite.prototype.createAfterEach = function () {\n    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n        args[_key5] = arguments[_key5];\n    }\n\n    this.afterEach = new (Function.prototype.bind.apply(_hook2.default, [null].concat(args)))();\n};\n\nSuite.prototype.run = function () {\n    this.getBeforeEachRecursive(this, this.parentsBeforeEach);\n    this.getAfterEachRecursive(this, this.parentsAfterEach);\n    if (this.beforeAll) this.beforeAll.run(this, this.init.bind(this));else this.init();\n};\n\nSuite.prototype.init = function () {\n    if (this.childrenOnlys.itens.length) {\n        this.children = this.childrenOnlys;\n        var count = { tests: 0, suites: 1 };\n        this.countOnlys(this.childrenOnlys, count);\n        this.eventBus.emit('only', count);\n    }\n\n    if (this.children.itens.length <= 0) this.eventBus.emit('suiteEnd', this);else this.childRun(this.children.getCurrent());\n};\n\nSuite.prototype.countOnlys = function (childrenOnlys, count) {\n    for (childrenOnlys.first(); !childrenOnlys.isDone(); childrenOnlys.next()) {\n        var child = childrenOnlys.getCurrent();\n        if (child.constructor.name === 'Test') {\n            count.tests++;\n        } else if (child.constructor.name === 'Suite') {\n            count.suites++;\n            this.countOnlys(child.childrenOnlys, count);\n        }\n    }\n    childrenOnlys.first();\n};\n\nSuite.prototype.childRun = function (child) {\n    this.inheritTimeoutLimit(child);\n    if (child.constructor.name === 'Test') {\n        var e = child.fn.bind(child.context);\n        child.fn = e;\n    } else {\n        (0, _utils.assignDeepEnumerablesToOut)(this.context, child.context);\n    }\n    child.run();\n};\n\nSuite.prototype.inheritTimeoutLimit = function (child) {\n    if (this.context._timer.limit > 0 && child.context._timer.limit === -1) child.context.timeout(this.context._timer.limit);\n};\n\nSuite.prototype.childNext = function () {\n    this.children.next();\n    if (this.children.isDone()) this.eventBus.emit('suiteEnd', this);else this.childRun(this.children.getCurrent());\n};\n\nSuite.prototype.getBeforeEachRecursive = function (suite, parents) {\n    if (suite.beforeEach) parents.addUnshift(suite.beforeEach);\n\n    if (suite.name !== 'root') this.getBeforeEachRecursive(suite.parent, parents);\n};\n\nSuite.prototype.getAfterEachRecursive = function (suite, parents) {\n    if (suite.afterEach) parents.addPush(suite.afterEach);\n\n    if (suite.parent) this.getAfterEachRecursive(suite.parent, parents);\n};\n\nSuite.prototype.executeSuitesFunctionEach = function (context, parentsEach, posHookFunction) {\n    var _this = this;\n\n    if (parentsEach.isDone()) return posHookFunction();\n\n    if (parentsEach.isLast()) parentsEach.getCurrent().run(context, posHookFunction);else parentsEach.getCurrent().run(context, function () {\n        parentsEach.next();\n        _this.executeSuitesFunctionEach(context, parentsEach, posHookFunction);\n    });\n};\n\nexports.default = Suite;\n\n//# sourceURL=webpack:///./lib/suite.js?");

/***/ }),

/***/ "./lib/test.js":
/*!*********************!*\
  !*** ./lib/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _runnable = __webpack_require__(/*! ./runnable */ \"./lib/runnable.js\");\n\nvar _runnable2 = _interopRequireDefault(_runnable);\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Test() {\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n    }\n\n    _runnable2.default.call.apply(_runnable2.default, [this].concat(args));\n}\n\n(0, _utils.inherits)(Test, _runnable2.default);\n\nTest.prototype.run = function () {\n    var _this = this;\n\n    this.tryFn(function () {\n        _this.parent.parentsBeforeEach.first();\n        _this.parent.executeSuitesFunctionEach(_this.parent, _this.parent.parentsBeforeEach, function () {\n            _this.tryFn(function () {\n                if (_this.fn.length >= 1) {\n                    _this.fn(_this.done.bind(_this));\n                } else {\n                    _this.fn();\n                    _this.afterRun();\n                }\n            });\n        });\n    });\n};\n\nTest.prototype.done = function () {\n    var _arguments = arguments,\n        _this2 = this;\n\n    this.tryFn(function () {\n        if (_arguments[0] instanceof Error) _this2.error = _arguments[0];else if (typeof _arguments[0] === 'function') _arguments[0]();\n        _this2.afterRun();\n    });\n};\n\nTest.prototype.tryFn = function (fn) {\n    try {\n        fn();\n    } catch (error) {\n        this.error = error;\n        this.afterRun();\n    }\n};\n\nTest.prototype.afterRun = function () {\n    var _this3 = this;\n\n    this.parent.parentsAfterEach.first();\n    this.parent.executeSuitesFunctionEach(this.parent, this.parent.parentsAfterEach, function () {\n        _this3.parent.childNext();\n        _this3.limitWasExtrapolated();\n        _this3.eventBus.emit('testEnd', _this3);\n    });\n};\n\nexports.default = Test;\n\n//# sourceURL=webpack:///./lib/test.js?");

/***/ }),

/***/ "./lib/timer.js":
/*!**********************!*\
  !*** ./lib/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./lib/utils.js\");\n\nfunction Timer() {\n    this.limit = -1;\n    this.startMs = 0;\n    this.endMs = 0;\n    this.durationMs = 0;\n}\n\nTimer.prototype.start = function () {\n    this.startMs = (0, _utils.timestamp)();\n};\n\nTimer.prototype.end = function () {\n    this.endMs = (0, _utils.timestamp)();\n    this.durationMs = this.endMs - this.startMs;\n    return this.durationMs;\n};\n\nTimer.prototype.isExtrapolated = function () {\n    if (this.limit === -1 || this.limit === 0) return false;\n    this.end();\n    return this.durationMs > this.limit;\n};\n\nexports.default = Timer;\n\n//# sourceURL=webpack:///./lib/timer.js?");

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar assignDeepEnumerablesToOut = function assignDeepEnumerablesToOut(obj, out) {\n    var props = Object.keys(obj);\n    var key = void 0,\n        v = void 0,\n        o = void 0;\n    for (var i = 0; i < props.length; i++) {\n        key = props[i];\n        if (key !== '_ctx' && key !== '_timer') {\n            v = obj[key];\n            out[key] = isObject(out[key]) ? out[key] : {};\n            isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;\n        }\n    }\n};\n\nvar isObject = function isObject(val) {\n    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;\n};\n\nvar timestamp = function timestamp() {\n    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();\n};\n\nvar inherits = function inherits(child, mother) {\n    var copyMother = Object.create(mother.prototype);\n    child.prototype = copyMother;\n    child.prototype.constructor = child;\n};\n\nexports.assignDeepEnumerablesToOut = assignDeepEnumerablesToOut;\nexports.isObject = isObject;\nexports.timestamp = timestamp;\nexports.inherits = inherits;\n\n//# sourceURL=webpack:///./lib/utils.js?");

/***/ }),

/***/ "./node_modules/@perdugames/eventbus/build/eventbus-1.0.2.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@perdugames/eventbus/build/eventbus-1.0.2.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r,i=n(1),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r,i=n(2),o=(r=i)&&r.__esModule?r:{default:r};function s(){this.events=Object.create(null)}s.prototype.getListenerCountOfEvent=function(e){return this.events[e].length},s.prototype.once=function(e,t){return void 0===this.events[e]&&(this.events[e]=[]),void 0!==this.events.addListener&&this.emit(\"addListener\",e),this.events[e].push(new o.default(t,!0)),this},s.prototype.on=function(e,t){return void 0===this.events[e]&&(this.events[e]=[]),void 0!==this.events.addListener&&this.emit(\"addListener\",e),this.events[e].push(new o.default(t)),this},s.prototype.off=function(e,t){var n=this.events[e].findIndex(function(e){return e.fn===t});return n>-1&&this.events[e].splice(n,1),void 0!==this.events.removeListener&&this.emit(\"removeListener\",e),this.events[e].length||(this.events[e]=void 0),this},s.prototype.emit=function(e){var t=this.events[e];if(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var o=0;o<t.length;o++){var s=t[o].fn;t[o].isOnce&&t.splice(o,1),s.apply(void 0,r)}}return this},s.prototype.getAllEventsName=function(){return Object.keys(this.events)},s.prototype.getAllListenersOfEvent=function(e){return this.events[e]},s.prototype.removeAllListenersOfEvent=function(e){var t=this.getAllListenersOfEvent(e);return t&&(this.off(e,t[0].fn),this.removeAllListenersOfEvent(e)),this},t.default=s},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.fn=e,this.isOnce=t}}]).default});\n\n//# sourceURL=webpack:///./node_modules/@perdugames/eventbus/build/eventbus-1.0.2.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./tests/executetests.js":
/*!*******************************!*\
  !*** ./tests/executetests.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./unit/only_test */ \"./tests/unit/only_test.js\");\n\n//# sourceURL=webpack:///./tests/executetests.js?");

/***/ }),

/***/ "./tests/unit/only_test.js":
/*!*********************************!*\
  !*** ./tests/unit/only_test.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar _runner = __webpack_require__(/*! LIB/runner */ \"./lib/runner.js\");\n\nvar _runner2 = _interopRequireDefault(_runner);\n\nvar _new_tdd = __webpack_require__(/*! LIB/interfaces/new_tdd */ \"./lib/interfaces/new_tdd.js\");\n\nvar _new_tdd2 = _interopRequireDefault(_new_tdd);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! BUILD/cacau-1.1.0.js */ \"./build/cacau-1.1.0.js\");\n\nTEST_ASYNC('TestOnlyTestCheckResultFailingEqualZero', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n    (0, _new_tdd2.default)(rootSuite, global, runner);\n\n    suite('Suite 1', function () {\n\n        test.only('Test 1', function () {\n            CHECK_TRUE(false);\n        });\n\n        test('Test 2', function () {\n            CHECK_TRUE(false);\n        });\n    });\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST_ASYNC('TestOnlyTestCheckResultFailingEqualTwo', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n    (0, _new_tdd2.default)(rootSuite, global, runner);\n\n    suite('Suite 1', function () {\n\n        test.only('Test 1', function () {\n            CHECK_TRUE(false);\n        });\n\n        test('Test 2', function () {\n            CHECK_TRUE(false);\n        });\n\n        test.only('Test 3', function () {\n            CHECK_TRUE(false);\n        });\n    });\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 2);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./tests/unit/only_test.js?");

/***/ })

/******/ });
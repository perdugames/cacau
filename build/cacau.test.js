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

/***/ "./assert/algorithms/algorithms.js":
/*!*****************************************!*\
  !*** ./assert/algorithms/algorithms.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _deep_equals = __webpack_require__(/*! ./deep_equals */ \"./assert/algorithms/deep_equals.js\");\n\nvar _deep_equals2 = _interopRequireDefault(_deep_equals);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Algorithms = {\n    deepEquals: _deep_equals2.default\n};\n\nexports.default = Algorithms;\n\n//# sourceURL=webpack:///./assert/algorithms/algorithms.js?");

/***/ }),

/***/ "./assert/algorithms/deep_equals.js":
/*!******************************************!*\
  !*** ./assert/algorithms/deep_equals.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar deepEquals = function deepEquals(object1, object2) {\n    if (!isObject(object1) && !isObject(object2)) return object1 === object2;\n\n    if (!isObject(object1) || !isObject(object2)) return false;\n\n    return object1EqualsObject2(object1, object2);\n};\n\n// Modified by perdugames, based on @MaiaraLange https://pt.stackoverflow.com/a/291536/81474\nvar object1EqualsObject2 = function object1EqualsObject2(object1, object2) {\n    var prop1 = void 0,\n        prop2 = void 0,\n        lenProp1 = void 0,\n        lenProp2 = void 0;\n\n    if (isNullOrUndefined(object1) || isNullOrUndefined(object2)) return false;\n\n    if ((typeof object1 === 'undefined' ? 'undefined' : _typeof(object1)) !== (typeof object2 === 'undefined' ? 'undefined' : _typeof(object2))) return false;\n\n    if (typeof object1 === 'function') return object1.toString() !== object2.toString() ? false : true;\n\n    if (isObject(object1)) {\n        prop1 = Object.keys(object1);\n        prop2 = Object.keys(object2);\n        lenProp1 = prop1.length;\n        lenProp2 = prop2.length;\n    } else {\n        lenProp1 = 0;\n        lenProp2 = 0;\n    }\n\n    if (lenProp1 !== lenProp2) return false;\n\n    if (lenProp1 === 0) {\n        if (object1 === object2 || areEmptyAndTypeEquals(object1, object2)) return true;else return false;\n    }\n\n    for (var i = 0; i < lenProp1; i++) {\n        var prop = prop1[i];\n\n        if (object1[prop] !== object2[prop]) if (object1EqualsObject2(object1[prop], object2[prop])) continue;else return false;\n    }\n    return true;\n};\n\nvar areEmptyAndTypeEquals = function areEmptyAndTypeEquals(obj1, obj2) {\n    var areArrays = Array.isArray(obj1) && Array.isArray(obj2);\n    var areObjects = isObject(obj1) && isObject(obj2);\n\n    if (!areArrays && (Array.isArray(obj1) || Array.isArray(obj2))) return false;\n\n    return areArrays || areObjects ? true : false;\n};\n\nvar isNullOrUndefined = function isNullOrUndefined(val) {\n    return typeof val === 'undefined' || val === null;\n};\n\nvar isObject = function isObject(val) {\n    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;\n};\n\nexports.default = deepEquals;\n\n//# sourceURL=webpack:///./assert/algorithms/deep_equals.js?");

/***/ }),

/***/ "./assert/assert.js":
/*!**************************!*\
  !*** ./assert/assert.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _assertion = __webpack_require__(/*! ./assertion */ \"./assert/assertion.js\");\n\nvar _assertion2 = _interopRequireDefault(_assertion);\n\nvar _operators = __webpack_require__(/*! ./operators */ \"./assert/operators.js\");\n\nvar _operators2 = _interopRequireDefault(_operators);\n\nvar _expressions = __webpack_require__(/*! ./expressions */ \"./assert/expressions.js\");\n\nvar _expressions2 = _interopRequireDefault(_expressions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Assert() {}\n\nAssert.prototype.isTrue = function (actual) {\n    new _assertion2.default(actual, true, _expressions2.default.IS_TRUE, _operators2.default.EQUAL);\n};\n\nAssert.prototype.isNotTrue = function (actual) {\n    new _assertion2.default(actual, !true, _expressions2.default.IS_NOT_TRUE, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.isFalse = function (actual) {\n    new _assertion2.default(actual, false, _expressions2.default.IS_FALSE, _operators2.default.EQUAL);\n};\n\nAssert.prototype.isNotFalse = function (actual) {\n    new _assertion2.default(actual, !false, _expressions2.default.IS_NOT_FALSE, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.isUndefined = function (actual) {\n    new _assertion2.default(actual, undefined, _expressions2.default.IS_UNDEFINED, _operators2.default.EQUAL);\n};\n\nAssert.prototype.isNotUndefined = function (actual) {\n    new _assertion2.default(actual, !undefined, _expressions2.default.IS_NOT_UNDEFINED, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.isNull = function (actual) {\n    new _assertion2.default(actual, null, _expressions2.default.IS_NULL, _operators2.default.EQUAL);\n};\n\nAssert.prototype.isNotNull = function (actual) {\n    new _assertion2.default(actual, !null, _expressions2.default.IS_NOT_NULL, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.actualEqualExpected = function (actual, expected) {\n    new _assertion2.default(actual, expected, _expressions2.default.ACTUAL_EQUAL_EXPECTED, _operators2.default.EQUAL);\n};\n\nAssert.prototype.actualNotEqualExpected = function (actual, expected) {\n    new _assertion2.default(actual, expected, _expressions2.default.ACTUAL_NOT_EQUAL_EXPECTED, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.actualDeepEqualExpected = function (actual, expected) {\n    new _assertion2.default(actual, expected, _expressions2.default.ACTUAL_DEEP_EQUAL_EXPECTED, _operators2.default.EQUAL);\n};\n\nexports.default = Assert;\n\n//# sourceURL=webpack:///./assert/assert.js?");

/***/ }),

/***/ "./assert/assertion.js":
/*!*****************************!*\
  !*** ./assert/assertion.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _assertion_error = __webpack_require__(/*! ./assertion_error */ \"./assert/assertion_error.js\");\n\nvar _assertion_error2 = _interopRequireDefault(_assertion_error);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Assertion(actual, expected, expression, operator) {\n    this.assert(actual, expected, expression, operator);\n}\n\nAssertion.prototype.assert = function (actual, expected, expression, operator) {\n    var result = expression(actual, expected);\n\n    var props = {\n        actual: actual,\n        expected: expected,\n        result: result,\n        operator: operator\n    };\n\n    var message = 'actual: ' + actual + ' ' + operator + ' expected: ' + expected;\n\n    if (!result) throw new _assertion_error2.default(message, props);\n};\n\nexports.default = Assertion;\n\n//# sourceURL=webpack:///./assert/assertion.js?");

/***/ }),

/***/ "./assert/assertion_error.js":
/*!***********************************!*\
  !*** ./assert/assertion_error.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction AssertionError(message, props, startStackConstructor) {\n    this.message = message || 'AssertionError message not specified';\n    props = props || {};\n\n    assignDeepEnumerablesToOut(props, this);\n\n    startStackConstructor = startStackConstructor || AssertionError;\n    if (Error.captureStackTrace) Error.captureStackTrace(this, startStackConstructor);else try {\n        throw new Error();\n    } catch (e) {\n        this.stack = e.stack;\n    }\n}\n\nAssertionError.prototype = Object.create(Error.prototype);\n\nAssertionError.prototype.constructor = AssertionError;\n\nAssertionError.prototype.name = 'AssertionError';\n\nvar assignDeepEnumerablesToOut = function assignDeepEnumerablesToOut(obj, out) {\n    var props = Object.keys(obj);\n    var key = void 0,\n        v = void 0,\n        o = void 0;\n    for (var i = 0; i < props.length; i++) {\n        key = props[i];\n        v = obj[key];\n        out[key] = isObject(out[key]) ? out[key] : {};\n        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;\n    }\n};\n\nvar isObject = function isObject(val) {\n    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;\n};\n\nexports.default = AssertionError;\n\n//# sourceURL=webpack:///./assert/assertion_error.js?");

/***/ }),

/***/ "./assert/expressions.js":
/*!*******************************!*\
  !*** ./assert/expressions.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _algorithms = __webpack_require__(/*! ./algorithms/algorithms */ \"./assert/algorithms/algorithms.js\");\n\nvar _algorithms2 = _interopRequireDefault(_algorithms);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Expressions = {\n\n    IS_TRUE: function IS_TRUE(actual) {\n        return actual === true;\n    },\n\n    IS_NOT_TRUE: function IS_NOT_TRUE(actual) {\n        return actual !== true;\n    },\n\n    IS_FALSE: function IS_FALSE(actual) {\n        return actual === false;\n    },\n\n    IS_NOT_FALSE: function IS_NOT_FALSE(actual) {\n        return actual !== false;\n    },\n\n    IS_UNDEFINED: function IS_UNDEFINED(actual) {\n        return actual === undefined;\n    },\n\n    IS_NOT_UNDEFINED: function IS_NOT_UNDEFINED(actual) {\n        return actual !== undefined;\n    },\n\n    IS_NULL: function IS_NULL(actual) {\n        return actual === null;\n    },\n\n    IS_NOT_NULL: function IS_NOT_NULL(actual) {\n        return actual !== null;\n    },\n\n    ACTUAL_EQUAL_EXPECTED: function ACTUAL_EQUAL_EXPECTED(actual, expected) {\n        return actual === expected;\n    },\n\n    ACTUAL_NOT_EQUAL_EXPECTED: function ACTUAL_NOT_EQUAL_EXPECTED(actual, expected) {\n        return actual !== expected;\n    },\n\n    ACTUAL_DEEP_EQUAL_EXPECTED: function ACTUAL_DEEP_EQUAL_EXPECTED(actual, expected) {\n        return _algorithms2.default.deepEquals(actual, expected);\n    }\n\n};\n\nexports.default = Expressions;\n\n//# sourceURL=webpack:///./assert/expressions.js?");

/***/ }),

/***/ "./assert/operators.js":
/*!*****************************!*\
  !*** ./assert/operators.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar Operators = {\n    EQUAL: '===',\n    NOT_EQUAL: '!=='\n};\n\nexports.default = Operators;\n\n//# sourceURL=webpack:///./assert/operators.js?");

/***/ }),

/***/ "./build/cacau.js":
/*!************************!*\
  !*** ./build/cacau.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (e, t) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(undefined, function () {\n  return function (e) {\n    var t = {};function n(r) {\n      if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n    }return n.m = e, n.c = t, n.d = function (e, t, r) {\n      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });\n    }, n.r = function (e) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: \"Module\" }), Object.defineProperty(e, \"__esModule\", { value: !0 });\n    }, n.t = function (e, t) {\n      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && \"object\" == (typeof e === \"undefined\" ? \"undefined\" : _typeof(e)) && e && e.__esModule) return e;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, \"default\", { enumerable: !0, value: e }), 2 & t && \"string\" != typeof e) for (var o in e) {\n        n.d(r, o, function (t) {\n          return e[t];\n        }.bind(null, o));\n      }return r;\n    }, n.n = function (e) {\n      var t = e && e.__esModule ? function () {\n        return e.default;\n      } : function () {\n        return e;\n      };return n.d(t, \"a\", t), t;\n    }, n.o = function (e, t) {\n      return Object.prototype.hasOwnProperty.call(e, t);\n    }, n.p = \"\", n(n.s = 0);\n  }([function (e, t, n) {\n    \"use strict\";\n    Object.defineProperty(t, \"__esModule\", { value: !0 });var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n      return typeof e === \"undefined\" ? \"undefined\" : _typeof(e);\n    } : function (e) {\n      return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e === \"undefined\" ? \"undefined\" : _typeof(e);\n    };var o = new (function (e) {\n      return e && e.__esModule ? e : { default: e };\n    }(n(1)).default)();var u = function u(e) {\n      for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {\n        n[r - 1] = arguments[r];\n      }var o = [],\n          u = [],\n          i = performance.now(),\n          a = !0,\n          l = !1,\n          d = void 0;try {\n        for (var s, p = n[Symbol.iterator](); !(a = (s = p.next()).done); a = !0) {\n          var E = s.value;!0 === E.result ? o.push(E) : u.push(E);\n        }\n      } catch (e) {\n        l = !0, d = e;\n      } finally {\n        try {\n          !a && p.return && p.return();\n        } finally {\n          if (l) throw d;\n        }\n      }var y = performance.now() - i,\n          _ = o.length,\n          v = u.length,\n          T = { fileName: e, duration: y, passing: o, failing: u, lenPassing: _, lenFailing: v },\n          A = v > 0 ? f(T) : c(T);console.log(\"%c\" + A.text, A.color);\n    },\n        i = function i(e, t) {\n      t(function (t) {\n        u(e, d(e, t));\n      });\n    },\n        f = function f(e) {\n      return { text: a(e) + l(e), color: \"color:#B03A2E;\" };\n    },\n        a = function a(e) {\n      return \"Failing in \" + e.fileName + \":\\n\\nPassing: \" + e.lenPassing + \" (\" + e.duration.toFixed(2) + \"ms)\\nFailing: \" + e.lenFailing + \"\\n\\n\";\n    },\n        l = function l(e) {\n      for (var t = \"\", n = 0; n < e.lenFailing; n++) {\n        t += n + \") \" + e.failing[n].name + \" (\" + e.failing[n].duration.toFixed(2) + \"ms)\\n       CheckError: \" + e.failing[n].actual + \" \" + e.failing[n].checkType + \" \" + e.failing[n].expected + \"\\n\\n       ✓ Actual: \" + e.failing[n].actual + \"\\n       ✓ Expected: \" + e.failing[n].expected + \"\\n\\n\";\n      }return t += \"\\n\";\n    },\n        c = function c(e) {\n      return { text: \"✓ Passing \" + e.fileName + \"\\n\", color: \"color:#27AE60;\" };\n    },\n        d = function d(e, t, n) {\n      var r = performance.now(),\n          o = void 0;try {\n        return s(n) ? t(n()) : t(), { name: e, duration: (o = performance.now()) - r, result: !0 };\n      } catch (t) {\n        return o = performance.now(), p(e, o - r, t);\n      }\n    },\n        s = function s(e) {\n      return \"function\" == typeof e;\n    },\n        p = function p(e, t, n) {\n      return { name: e, duration: t, result: n.result, actual: n.actual, expected: n.expected, checkType: n.operator };\n    },\n        E = function E() {\n      return y.apply(void 0, arguments);\n    },\n        y = function y() {\n      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {\n        t[n] = arguments[n];\n      }var r = {},\n          o = !0,\n          u = !1,\n          i = void 0;try {\n        for (var f, a = t[Symbol.iterator](); !(o = (f = a.next()).done); o = !0) {\n          var l = f.value;_(l, r);\n        }\n      } catch (e) {\n        u = !0, i = e;\n      } finally {\n        try {\n          !o && a.return && a.return();\n        } finally {\n          if (u) throw i;\n        }\n      }return r;\n    },\n        _ = function e(t, n) {\n      for (var r = Object.keys(t), o = void 0, u = void 0, i = 0; i < r.length; i++) {\n        u = t[o = r[i]], v(n[o]) ? n[o] = n[o] : n[o] = {}, v(u) ? e(u, n[o]) : n[o] = u;\n      }\n    },\n        v = function v(e) {\n      return \"object\" === (void 0 === e ? \"undefined\" : r(e)) && null !== e;\n    };t.default = { TEST: u, TEST_ASYNC: i, TEST_F: d, CREATE_MOCK: E, CHECK_TRUE: o.isTrue, CHECK_NOT_TRUE: o.isNotTrue, CHECK_FALSE: o.isFalse, CHECK_NOT_FALSE: o.isNotFalse, CHECK_UNDEFINED: o.isUndefined, CHECK_NOT_UNDEFINED: o.isNotUndefined, CHECK_NULL: o.isNull, CHECK_NOT_NULL: o.isNotNull, CHECK_ACTUAL_EQUAL_EXPECTED: o.actualEqualExpected, CHECK_ACTUAL_DIFFERENT_EXPECTED: o.actualNotEqualExpected, CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT: o.actualDeepEqualExpected };\n  }, function (e, t, n) {\n    \"use strict\";\n    Object.defineProperty(t, \"__esModule\", { value: !0 });var r = i(n(2)),\n        o = i(n(4)),\n        u = i(n(5));function i(e) {\n      return e && e.__esModule ? e : { default: e };\n    }function f() {}f.prototype.isTrue = function (e) {\n      new r.default(e, !0, u.default.IS_TRUE, o.default.EQUAL);\n    }, f.prototype.isNotTrue = function (e) {\n      new r.default(e, !1, u.default.IS_NOT_TRUE, o.default.NOT_EQUAL);\n    }, f.prototype.isFalse = function (e) {\n      new r.default(e, !1, u.default.IS_FALSE, o.default.EQUAL);\n    }, f.prototype.isNotFalse = function (e) {\n      new r.default(e, !0, u.default.IS_NOT_FALSE, o.default.NOT_EQUAL);\n    }, f.prototype.isUndefined = function (e) {\n      new r.default(e, void 0, u.default.IS_UNDEFINED, o.default.EQUAL);\n    }, f.prototype.isNotUndefined = function (e) {\n      new r.default(e, !0, u.default.IS_NOT_UNDEFINED, o.default.NOT_EQUAL);\n    }, f.prototype.isNull = function (e) {\n      new r.default(e, null, u.default.IS_NULL, o.default.EQUAL);\n    }, f.prototype.isNotNull = function (e) {\n      new r.default(e, !0, u.default.IS_NOT_NULL, o.default.NOT_EQUAL);\n    }, f.prototype.actualEqualExpected = function (e, t) {\n      new r.default(e, t, u.default.ACTUAL_EQUAL_EXPECTED, o.default.EQUAL);\n    }, f.prototype.actualNotEqualExpected = function (e, t) {\n      new r.default(e, t, u.default.ACTUAL_NOT_EQUAL_EXPECTED, o.default.NOT_EQUAL);\n    }, f.prototype.actualDeepEqualExpected = function (e, t) {\n      new r.default(e, t, u.default.ACTUAL_DEEP_EQUAL_EXPECTED, o.default.EQUAL);\n    }, t.default = f;\n  }, function (e, t, n) {\n    \"use strict\";\n    Object.defineProperty(t, \"__esModule\", { value: !0 });var r = function (e) {\n      return e && e.__esModule ? e : { default: e };\n    }(n(3));function o(e, t, n, r) {\n      this.assert(e, t, n, r);\n    }o.prototype.assert = function (e, t, n, o) {\n      var u = n(e, t),\n          i = { actual: e, expected: t, result: u, operator: o },\n          f = \"actual: \" + e + \" \" + o + \" expected: \" + t;if (!u) throw new r.default(f, i);\n    }, t.default = o;\n  }, function (e, t, n) {\n    \"use strict\";\n    Object.defineProperty(t, \"__esModule\", { value: !0 });var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n      return typeof e === \"undefined\" ? \"undefined\" : _typeof(e);\n    } : function (e) {\n      return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e === \"undefined\" ? \"undefined\" : _typeof(e);\n    };function o(e, t, n) {\n      if (this.message = e || \"AssertionError message not specified\", u(t = t || {}, this), n = n || o, Error.captureStackTrace) Error.captureStackTrace(this, n);else try {\n        throw new Error();\n      } catch (e) {\n        this.stack = e.stack;\n      }\n    }o.prototype = Object.create(Error.prototype), o.prototype.constructor = o, o.prototype.name = \"AssertionError\";var u = function e(t, n) {\n      for (var r = Object.keys(t), o = void 0, u = void 0, f = 0; f < r.length; f++) {\n        u = t[o = r[f]], n[o] = i(n[o]) ? n[o] : {}, i(u) ? e(u, n[o]) : n[o] = u;\n      }\n    },\n        i = function i(e) {\n      return \"object\" === (void 0 === e ? \"undefined\" : r(e)) && null !== e;\n    };t.default = o;\n  }, function (e, t, n) {\n    \"use strict\";\n    Object.defineProperty(t, \"__esModule\", { value: !0 });t.default = { EQUAL: \"===\", NOT_EQUAL: \"!==\" };\n  }, function (e, t, n) {\n    \"use strict\";\n    Object.defineProperty(t, \"__esModule\", { value: !0 });var r = function (e) {\n      return e && e.__esModule ? e : { default: e };\n    }(n(6));var o = { IS_TRUE: function IS_TRUE(e) {\n        return !0 === e;\n      }, IS_NOT_TRUE: function IS_NOT_TRUE(e) {\n        return !0 !== e;\n      }, IS_FALSE: function IS_FALSE(e) {\n        return !1 === e;\n      }, IS_NOT_FALSE: function IS_NOT_FALSE(e) {\n        return !1 !== e;\n      }, IS_UNDEFINED: function IS_UNDEFINED(e) {\n        return void 0 === e;\n      }, IS_NOT_UNDEFINED: function IS_NOT_UNDEFINED(e) {\n        return void 0 !== e;\n      }, IS_NULL: function IS_NULL(e) {\n        return null === e;\n      }, IS_NOT_NULL: function IS_NOT_NULL(e) {\n        return null !== e;\n      }, ACTUAL_EQUAL_EXPECTED: function ACTUAL_EQUAL_EXPECTED(e, t) {\n        return e === t;\n      }, ACTUAL_NOT_EQUAL_EXPECTED: function ACTUAL_NOT_EQUAL_EXPECTED(e, t) {\n        return e !== t;\n      }, ACTUAL_DEEP_EQUAL_EXPECTED: function ACTUAL_DEEP_EQUAL_EXPECTED(e, t) {\n        return r.default.deepEquals(e, t);\n      } };t.default = o;\n  }, function (e, t, n) {\n    \"use strict\";\n    Object.defineProperty(t, \"__esModule\", { value: !0 });var r = { deepEquals: function (e) {\n        return e && e.__esModule ? e : { default: e };\n      }(n(7)).default };t.default = r;\n  }, function (e, t, n) {\n    \"use strict\";\n    Object.defineProperty(t, \"__esModule\", { value: !0 });var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n      return typeof e === \"undefined\" ? \"undefined\" : _typeof(e);\n    } : function (e) {\n      return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e === \"undefined\" ? \"undefined\" : _typeof(e);\n    },\n        o = function e(t, n) {\n      var o = void 0,\n          a = void 0,\n          l = void 0,\n          c = void 0;if (i(t) || i(n)) return !1;if ((void 0 === t ? \"undefined\" : r(t)) !== (void 0 === n ? \"undefined\" : r(n))) return !1;if (\"function\" == typeof t) return t.toString() === n.toString();if (f(t) ? (o = Object.keys(t), a = Object.keys(n), l = o.length, c = a.length) : (l = 0, c = 0), l !== c) return !1;if (0 === l) return !(t !== n && !u(t, n));for (var d = 0; d < l; d++) {\n        var s = o[d];if (t[s] !== n[s]) {\n          if (e(t[s], n[s])) continue;return !1;\n        }\n      }return !0;\n    },\n        u = function u(e, t) {\n      var n = Array.isArray(e) && Array.isArray(t),\n          r = f(e) && f(t);return !(!n && (Array.isArray(e) || Array.isArray(t))) && !(!n && !r);\n    },\n        i = function i(e) {\n      return void 0 === e || null === e;\n    },\n        f = function f(e) {\n      return \"object\" === (void 0 === e ? \"undefined\" : r(e)) && null !== e;\n    };t.default = function (e, t) {\n      return f(e) || f(t) ? !(!f(e) || !f(t)) && o(e, t) : e === t;\n    };\n  }]).default;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./build/cacau.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif (!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif (!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./tests/executetests.js":
/*!*******************************!*\
  !*** ./tests/executetests.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./unit/fix_returnobjectimutable_test */ \"./tests/unit/fix_returnobjectimutable_test.js\");\n\n__webpack_require__(/*! ./unit/fix_undefinedandnull_test */ \"./tests/unit/fix_undefinedandnull_test.js\");\n\n__webpack_require__(/*! ./unit/test_async_test */ \"./tests/unit/test_async_test.js\");\n\n__webpack_require__(/*! ./unit/checks_test */ \"./tests/unit/checks_test.js\");\n\n__webpack_require__(/*! ./unit/assert_test */ \"./tests/unit/assert_test.js\");\n\n//# sourceURL=webpack:///./tests/executetests.js?");

/***/ }),

/***/ "./tests/unit/assert_test.js":
/*!***********************************!*\
  !*** ./tests/unit/assert_test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\nvar _assert = __webpack_require__(/*! CACAU/assert/assert */ \"./assert/assert.js\");\n\nvar _assert2 = _interopRequireDefault(_assert);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar errorCapture = function errorCapture(fn) {\n    try {\n        fn();\n    } catch (e) {\n        return e;\n    }\n};\n\n(0, _cacau.TEST)('assert.js', (0, _cacau.TEST_F)('TestAssertIsTrueCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = true;\n    var result = assert.isTrue(actual);\n\n    return (0, _cacau.CHECK_UNDEFINED)(result);\n}), (0, _cacau.TEST_F)('TestAssertIsTrueCheckErrorObject', function () {\n    var assert = new _assert2.default();\n\n    var expected = {\n        actual: false,\n        expected: true,\n        result: false,\n        operator: '==='\n    };\n\n    var assertError = errorCapture(function () {\n        return assert.isTrue(false);\n    });\n\n    var actual = {\n        actual: assertError.actual,\n        expected: assertError.expected,\n        result: assertError.result,\n        operator: assertError.operator\n    };\n\n    return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(actual, expected);\n}), (0, _cacau.TEST_F)('TestAssertIsNotTrueCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = !true;\n    var result = assert.isNotTrue(actual);\n\n    return (0, _cacau.CHECK_UNDEFINED)(result);\n}), (0, _cacau.TEST_F)('TestAssertActualDeepEqualExpectedCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = { x: 0, y: 1 };\n    var expected = { x: 0, y: 1 };\n    var result = assert.actualDeepEqualExpected(actual, expected);\n\n    return (0, _cacau.CHECK_UNDEFINED)(result);\n}));\n\n/* IDEAL */\n/*\n\nimport 'cacau.js';\n\nTEST_SUITE('Assertion.js',\n\n    FIXTURE_START(() => {\n        const valueTrue = true;\n    }),\n    \n    FIXTURE_END(() => {\n        const valueTrue = true;\n    }),\n    \n    TEST('Assert 1', () => {\n        const valueTrue = true;\n        return CHECK_TRUE(valueTrue);\n    }),\n    \n    TEST('Assert 2', () => {\n        const valueTrue = true;\n        return CHECK_TRUE(valueTrue);\n    }),\n    \n    // ...\n);\n*/\n// SUITE E TEST SÃO DO MESMO TIPO, ENTÃO SUITES PODEM CONTER OUTRAS SUITES DE TEST, PORÉM TEST É FINAL\n\n//# sourceURL=webpack:///./tests/unit/assert_test.js?");

/***/ }),

/***/ "./tests/unit/checks_test.js":
/*!***********************************!*\
  !*** ./tests/unit/checks_test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\n(0, _cacau.TEST)('CHECKS', (0, _cacau.TEST_F)('CHECK_TRUE', function () {\n    var valueTrue = true;\n    return (0, _cacau.CHECK_TRUE)(valueTrue);\n}),\n\n//    TEST_F('CHECK_TRUE_FAILING', () => {\n//        const valueTrue = false;\n//        return CHECK_TRUE(valueTrue);\n//    }),\n\n(0, _cacau.TEST_F)('CHECK_FALSE', function () {\n    var valueFalse = false;\n    return (0, _cacau.CHECK_FALSE)(valueFalse);\n}), (0, _cacau.TEST_F)('CHECK_UNDEFINED', function () {\n    var valueUndefined = undefined;\n    return (0, _cacau.CHECK_UNDEFINED)(valueUndefined);\n}), (0, _cacau.TEST_F)('CHECK_NULL', function () {\n    var valueNull = null;\n    return (0, _cacau.CHECK_NULL)(valueNull);\n}), (0, _cacau.TEST_F)('CHECK_NOT_TRUE', function () {\n    var valueTrue = !true;\n    return (0, _cacau.CHECK_NOT_TRUE)(valueTrue);\n}), (0, _cacau.TEST_F)('CHECK_FALSE', function () {\n    var valueFalse = !false;\n    return (0, _cacau.CHECK_NOT_FALSE)(valueFalse);\n}), (0, _cacau.TEST_F)('CHECK_NOT_UNDEFINED', function () {\n    var valueUndefined = !undefined;\n    return (0, _cacau.CHECK_NOT_UNDEFINED)(valueUndefined);\n}), (0, _cacau.TEST_F)('CHECK_NOT_NULL', function () {\n    var valueNull = !null;\n    return (0, _cacau.CHECK_NOT_NULL)(valueNull);\n}));\n\n//# sourceURL=webpack:///./tests/unit/checks_test.js?");

/***/ }),

/***/ "./tests/unit/fix_returnobjectimutable_test.js":
/*!*****************************************************!*\
  !*** ./tests/unit/fix_returnobjectimutable_test.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\nvar FIXTURE = function FIXTURE() {\n    function Duckling(name) {\n        this.name = name;\n    }\n    return { duckling: new Duckling(\"Julio\") };\n};\n\n(0, _cacau.TEST)('objectReturnFixIsImutable', (0, _cacau.TEST_F)('testChangeName', function (FIX) {\n    var expectedDucklingName = 'Matias';\n\n    FIX.duckling.name = 'Matias';\n    var ducklingName = FIX.duckling.name;\n\n    return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(ducklingName, expectedDucklingName);\n}, FIXTURE), (0, _cacau.TEST_F)('testNotChangeName', function (FIX) {\n    var expectedDucklingName = 'Julio';\n    var ducklingName = FIX.duckling.name;\n\n    return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(ducklingName, expectedDucklingName);\n}, FIXTURE));\n\n//# sourceURL=webpack:///./tests/unit/fix_returnobjectimutable_test.js?");

/***/ }),

/***/ "./tests/unit/fix_undefinedandnull_test.js":
/*!*************************************************!*\
  !*** ./tests/unit/fix_undefinedandnull_test.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\n(0, _cacau.TEST)('fixBeingUndefinedAndNull', (0, _cacau.TEST_F)('testFixUndefined', function (FIX) {\n\n    return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(FIX, undefined);\n}, undefined), (0, _cacau.TEST_F)('testNotPassingFixArgument', function () {\n\n    return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(1, 1);\n}), (0, _cacau.TEST_F)('testFixNull', function (FIX) {\n\n    return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(FIX, undefined);\n}, null));\n\n//# sourceURL=webpack:///./tests/unit/fix_undefinedandnull_test.js?");

/***/ }),

/***/ "./tests/unit/test_async_test.js":
/*!***************************************!*\
  !*** ./tests/unit/test_async_test.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\nvar imageDownload = function imageDownload(path, successCallback) {\n    var img = new Image();\n    img.addEventListener(\"load\", successCallback, false);\n    img.src = path;\n    return img;\n};\n\n(0, _cacau.TEST_ASYNC)(\"TestAsyncFunctionTest\", function (done) {\n    var spyCountSuccess = 0;\n    var expectedCountSuccess = spyCountSuccess + 1;\n\n    var successCallback = function successCallback() {\n        spyCountSuccess++;\n\n        var actualCountSuccess = spyCountSuccess;\n\n        done(function () {\n            return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(actualCountSuccess, expectedCountSuccess);\n        });\n    };\n\n    var pathImage = 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png'; // or '../images/img_cacau.png';\n    var img = imageDownload(pathImage, successCallback);\n});\n\n//# sourceURL=webpack:///./tests/unit/test_async_test.js?");

/***/ })

/******/ });
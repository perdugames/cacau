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

/***/ "./build/cacau.js":
/*!************************!*\
  !*** ./build/cacau.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (n, r) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = r() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(undefined, function () {\n  return function (n) {\n    var r = {};function e(t) {\n      if (r[t]) return r[t].exports;var o = r[t] = { i: t, l: !1, exports: {} };return n[t].call(o.exports, o, o.exports, e), o.l = !0, o.exports;\n    }return e.m = n, e.c = r, e.d = function (n, r, t) {\n      e.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: t });\n    }, e.r = function (n) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: \"Module\" }), Object.defineProperty(n, \"__esModule\", { value: !0 });\n    }, e.t = function (n, r) {\n      if (1 & r && (n = e(n)), 8 & r) return n;if (4 & r && \"object\" == (typeof n === \"undefined\" ? \"undefined\" : _typeof(n)) && n && n.__esModule) return n;var t = Object.create(null);if (e.r(t), Object.defineProperty(t, \"default\", { enumerable: !0, value: n }), 2 & r && \"string\" != typeof n) for (var o in n) {\n        e.d(t, o, function (r) {\n          return n[r];\n        }.bind(null, o));\n      }return t;\n    }, e.n = function (n) {\n      var r = n && n.__esModule ? function () {\n        return n.default;\n      } : function () {\n        return n;\n      };return e.d(r, \"a\", r), r;\n    }, e.o = function (n, r) {\n      return Object.prototype.hasOwnProperty.call(n, r);\n    }, e.p = \"\", e(e.s = 0);\n  }([function (n, r, e) {\n    \"use strict\";\n    Object.defineProperty(r, \"__esModule\", { value: !0 });var t = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (n) {\n      return typeof n === \"undefined\" ? \"undefined\" : _typeof(n);\n    } : function (n) {\n      return n && \"function\" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? \"symbol\" : typeof n === \"undefined\" ? \"undefined\" : _typeof(n);\n    };var o = function o(n) {\n      for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {\n        e[t - 1] = arguments[t];\n      }var o = [],\n          i = [],\n          f = performance.now(),\n          a = !0,\n          l = !1,\n          d = void 0;try {\n        for (var y, p = e[Symbol.iterator](); !(a = (y = p.next()).done); a = !0) {\n          var s = y.value;!0 === s.result ? o.push(s) : i.push(s);\n        }\n      } catch (n) {\n        l = !0, d = n;\n      } finally {\n        try {\n          !a && p.return && p.return();\n        } finally {\n          if (l) throw d;\n        }\n      }var v = performance.now() - f,\n          E = o.length,\n          g = i.length,\n          C = { fileName: n, duration: v, passing: o, failing: i, lenPassing: E, lenFailing: g },\n          _ = g > 0 ? u(C) : c(C);console.log(\"%c\" + _.text, _.color);\n    },\n        i = function i(n, r) {\n      var e = performance.now();r(function (r) {\n        var t = [],\n            o = [],\n            i = performance.now() - e,\n            f = y(n, i, r);!0 === f.result ? t.push(f) : o.push(f);var a = t.length,\n            l = o.length,\n            d = { fileName: n, duration: i, passing: t, failing: o, lenPassing: a, lenFailing: l },\n            p = l > 0 ? u(d) : c(d);console.log(\"%c\" + p.text, p.color);\n      });\n    },\n        u = function u(n) {\n      return { text: f(n) + a(n), color: \"color:#B03A2E;\" };\n    },\n        f = function f(n) {\n      return \"Failing in \" + n.fileName + \":\\n\\nPassing: \" + n.lenPassing + \" (\" + n.duration.toFixed(2) + \"ms)\\nFailing: \" + n.lenFailing + \"\\n\\n\";\n    },\n        a = function a(n) {\n      for (var r = \"\", e = 0; e < n.lenFailing; e++) {\n        r += e + \") \" + n.failing[e].name + \" (\" + n.failing[e].duration.toFixed(2) + \"ms)\\n       CheckError: \" + n.failing[e].actual + \" \" + n.failing[e].checkType + \" \" + n.failing[e].expected + \"\\n\\n       ✓ Actual: \" + n.failing[e].actual + \"\\n       ✓ Expected: \" + n.failing[e].expected + \"\\n\\n\";\n      }return r += \"\\n\";\n    },\n        c = function c(n) {\n      return { text: \"✓ Passing \" + n.fileName + \"\\n\", color: \"color:#27AE60;\" };\n    },\n        l = function l(n, r, e) {\n      var t = performance.now(),\n          o = d(e) ? r(e()) : r(),\n          i = performance.now();return y(n, i - t, o);\n    },\n        d = function d(n) {\n      return \"function\" == typeof n;\n    },\n        y = function y(n, r, e) {\n      return { name: n, duration: r, result: e.result, actual: e.actual, expected: e.expected, checkType: e.checkType };\n    },\n        p = function p() {\n      return s.apply(void 0, arguments);\n    },\n        s = function s() {\n      for (var n = arguments.length, r = Array(n), e = 0; e < n; e++) {\n        r[e] = arguments[e];\n      }var t = {},\n          o = !0,\n          i = !1,\n          u = void 0;try {\n        for (var f, a = r[Symbol.iterator](); !(o = (f = a.next()).done); o = !0) {\n          var c = f.value;v(c, t);\n        }\n      } catch (n) {\n        i = !0, u = n;\n      } finally {\n        try {\n          !o && a.return && a.return();\n        } finally {\n          if (i) throw u;\n        }\n      }return t;\n    },\n        v = function n(r, e) {\n      for (var t = Object.keys(r), o = void 0, i = void 0, u = 0; u < t.length; u++) {\n        i = r[o = t[u]], U(e[o]) ? e[o] = e[o] : e[o] = {}, U(i) ? n(i, e[o]) : e[o] = i;\n      }\n    },\n        E = \"===\",\n        g = \"!==\",\n        C = function C(n) {\n      return P(!0 === n, n, !0, E);\n    },\n        _ = function _(n) {\n      return P(!0 !== n, n, !1, g);\n    },\n        m = function m(n) {\n      return P(!1 === n, n, !1, E);\n    },\n        T = function T(n) {\n      return P(!1 !== n, n, !0, g);\n    },\n        b = function b(n) {\n      return P(void 0 === n, n, void 0, E);\n    },\n        A = function A(n) {\n      return P(void 0 !== n, n, !0, g);\n    },\n        h = function h(n) {\n      return P(null === n, n, null, E);\n    },\n        x = function x(n) {\n      return P(null !== n, n, !0, g);\n    },\n        S = function S(n, r) {\n      return P(n === r, n, r, E);\n    },\n        O = function O(n, r) {\n      if (j(n, r)) return P(!1, n, r, E);var e = K(n, r);return P(e, n, r, E);\n    },\n        N = function N(n, r) {\n      return P(n !== r, n, r, g);\n    },\n        F = function F(n, r) {\n      if (j(n, r)) return P(!1, n, r, g);var e = K(n, r);return P(e, n, r, g);\n    },\n        j = function j(n, r) {\n      return !U(n) || !U(r);\n    },\n        P = function P(n, r, e, t) {\n      return { result: n, actual: U(r) ? JSON.stringify(r) : r, expected: U(e) ? JSON.stringify(e) : e, checkType: t };\n    },\n        K = function n(r, e) {\n      var o = void 0,\n          i = void 0,\n          u = void 0,\n          f = void 0;if (L(r) || L(e)) return !1;if ((void 0 === r ? \"undefined\" : t(r)) !== (void 0 === e ? \"undefined\" : t(e))) return !1;if (\"function\" == typeof r) return r.toString() === e.toString();if (U(r) ? (o = Object.keys(r), i = Object.keys(e), u = o.length, f = i.length) : (u = 0, f = 0), u !== f) return !1;if (0 === u) return !(r !== e && !H(r, e));for (var a = 0; a < u; a++) {\n        var c = o[a];if (r[c] !== e[c]) {\n          if (n(r[c], e[c])) continue;return !1;\n        }\n      }return !0;\n    },\n        H = function H(n, r) {\n      var e = Array.isArray(n) && Array.isArray(r),\n          t = U(n) && U(r);return !(!e && (Array.isArray(n) || Array.isArray(r))) && !(!e && !t);\n    },\n        L = function L(n) {\n      return void 0 === n || null === n;\n    },\n        U = function U(n) {\n      return \"object\" === (void 0 === n ? \"undefined\" : t(n)) && null !== n;\n    };r.default = { TEST: o, TEST_ASYNC: i, TEST_F: l, CREATE_MOCK: p, CHECK_TRUE: C, CHECK_NOT_TRUE: _, CHECK_FALSE: m, CHECK_NOT_FALSE: T, CHECK_UNDEFINED: b, CHECK_NOT_UNDEFINED: A, CHECK_NULL: h, CHECK_NOT_NULL: x, CHECK_ACTUAL_EQUAL_EXPECTED: S, CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT: O, CHECK_ACTUAL_DIFFERENT_EXPECTED: N, CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT: F };\n  }]).default;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./build/cacau.js?");

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
eval("\n\n__webpack_require__(/*! ./unit/fix_returnobjectimutable_test */ \"./tests/unit/fix_returnobjectimutable_test.js\");\n\n__webpack_require__(/*! ./unit/fix_undefinedandnull_test */ \"./tests/unit/fix_undefinedandnull_test.js\");\n\n__webpack_require__(/*! ./unit/test_async_test */ \"./tests/unit/test_async_test.js\");\n\n__webpack_require__(/*! ./unit/checks_test */ \"./tests/unit/checks_test.js\");\n\n//# sourceURL=webpack:///./tests/executetests.js?");

/***/ }),

/***/ "./tests/unit/checks_test.js":
/*!***********************************!*\
  !*** ./tests/unit/checks_test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\n(0, _cacau.TEST)('CHECKS', (0, _cacau.TEST_F)('CHECK_TRUE', function () {\n    var valueTrue = true;\n    return (0, _cacau.CHECK_TRUE)(valueTrue);\n}), (0, _cacau.TEST_F)('CHECK_FALSE', function () {\n    var valueFalse = false;\n    return (0, _cacau.CHECK_FALSE)(valueFalse);\n}), (0, _cacau.TEST_F)('CHECK_UNDEFINED', function () {\n    var valueUndefined = undefined;\n    return (0, _cacau.CHECK_UNDEFINED)(valueUndefined);\n}), (0, _cacau.TEST_F)('CHECK_NULL', function () {\n    var valueNull = null;\n    return (0, _cacau.CHECK_NULL)(valueNull);\n}), (0, _cacau.TEST_F)('CHECK_NOT_TRUE', function () {\n    var valueTrue = !true;\n    return (0, _cacau.CHECK_NOT_TRUE)(valueTrue);\n}), (0, _cacau.TEST_F)('CHECK_FALSE', function () {\n    var valueFalse = !false;\n    return (0, _cacau.CHECK_NOT_FALSE)(valueFalse);\n}), (0, _cacau.TEST_F)('CHECK_NOT_UNDEFINED', function () {\n    var valueUndefined = !undefined;\n    return (0, _cacau.CHECK_NOT_UNDEFINED)(valueUndefined);\n}), (0, _cacau.TEST_F)('CHECK_NOT_NULL', function () {\n    var valueNull = !null;\n    return (0, _cacau.CHECK_NOT_NULL)(valueNull);\n}));\n\n//# sourceURL=webpack:///./tests/unit/checks_test.js?");

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
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\nvar imageDownload = function imageDownload(path, successCallback) {\n    var img = new Image();\n    img.addEventListener(\"load\", successCallback, false);\n    img.src = path;\n    return img;\n};\n\n(0, _cacau.TEST_ASYNC)(\"TestAsyncFunctionTest\", function (done) {\n    var spyCountSuccess = 0;\n    var expectedCountSuccess = spyCountSuccess + 1;\n\n    var successCallback = function successCallback() {\n        spyCountSuccess++;\n\n        var actualCountSuccess = spyCountSuccess;\n\n        var result = (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(actualCountSuccess, expectedCountSuccess);\n        done(result);\n    };\n\n    var pathImage = 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png'; // or '../images/img_cacau.png';\n    var img = imageDownload(pathImage, successCallback);\n});\n\n//# sourceURL=webpack:///./tests/unit/test_async_test.js?");

/***/ })

/******/ });
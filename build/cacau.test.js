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
eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (n, e) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(undefined, function () {\n  return function (n) {\n    var e = {};function r(t) {\n      if (e[t]) return e[t].exports;var o = e[t] = { i: t, l: !1, exports: {} };return n[t].call(o.exports, o, o.exports, r), o.l = !0, o.exports;\n    }return r.m = n, r.c = e, r.d = function (n, e, t) {\n      r.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });\n    }, r.r = function (n) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: \"Module\" }), Object.defineProperty(n, \"__esModule\", { value: !0 });\n    }, r.t = function (n, e) {\n      if (1 & e && (n = r(n)), 8 & e) return n;if (4 & e && \"object\" == (typeof n === \"undefined\" ? \"undefined\" : _typeof(n)) && n && n.__esModule) return n;var t = Object.create(null);if (r.r(t), Object.defineProperty(t, \"default\", { enumerable: !0, value: n }), 2 & e && \"string\" != typeof n) for (var o in n) {\n        r.d(t, o, function (e) {\n          return n[e];\n        }.bind(null, o));\n      }return t;\n    }, r.n = function (n) {\n      var e = n && n.__esModule ? function () {\n        return n.default;\n      } : function () {\n        return n;\n      };return r.d(e, \"a\", e), e;\n    }, r.o = function (n, e) {\n      return Object.prototype.hasOwnProperty.call(n, e);\n    }, r.p = \"\", r(r.s = 0);\n  }([function (n, e, r) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var t = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (n) {\n      return typeof n === \"undefined\" ? \"undefined\" : _typeof(n);\n    } : function (n) {\n      return n && \"function\" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? \"symbol\" : typeof n === \"undefined\" ? \"undefined\" : _typeof(n);\n    };var o = function o(n) {\n      for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++) {\n        r[t - 1] = arguments[t];\n      }var o = [],\n          i = [],\n          a = performance.now(),\n          f = !0,\n          l = !1,\n          y = void 0;try {\n        for (var d, p = r[Symbol.iterator](); !(f = (d = p.next()).done); f = !0) {\n          var s = d.value;!0 === s.result ? o.push(s) : i.push(s);\n        }\n      } catch (n) {\n        l = !0, y = n;\n      } finally {\n        try {\n          !f && p.return && p.return();\n        } finally {\n          if (l) throw y;\n        }\n      }var v = performance.now() - a,\n          g = o.length,\n          E = i.length,\n          m = { fileName: n, duration: v, passing: o, failing: i, lenPassing: g, lenFailing: E },\n          b = E > 0 ? u(m) : c(m);console.log(\"%c\" + b.text, b.color);\n    },\n        i = function i(n, e) {\n      var r = performance.now();e(function (e) {\n        var t = [],\n            o = [],\n            i = performance.now() - r,\n            a = d(n, i, e);!0 === a.result ? t.push(a) : o.push(a);var f = t.length,\n            l = o.length,\n            y = { fileName: n, duration: i, passing: t, failing: o, lenPassing: f, lenFailing: l },\n            p = l > 0 ? u(y) : c(y);console.log(\"%c\" + p.text, p.color);\n      });\n    },\n        u = function u(n) {\n      return { text: a(n) + f(n), color: \"color:#B03A2E;\" };\n    },\n        a = function a(n) {\n      return \"Failing in \" + n.fileName + \":\\n\\nPassing: \" + n.lenPassing + \" (\" + n.duration.toFixed(2) + \"ms)\\nFailing: \" + n.lenFailing + \"\\n\\n\";\n    },\n        f = function f(n) {\n      for (var e = \"\", r = 0; r < n.lenFailing; r++) {\n        e += r + \") \" + n.failing[r].name + \" (\" + n.failing[r].duration.toFixed(2) + \"ms)\\n       CheckError: \" + n.failing[r].actual + \" \" + n.failing[r].checkType + \" \" + n.failing[r].expected + \"\\n\\n       ✓ Actual: \" + n.failing[r].actual + \"\\n       ✓ Expected: \" + n.failing[r].expected + \"\\n\\n\";\n      }return e += \"\\n\";\n    },\n        c = function c(n) {\n      return { text: \"✓ Passing \" + n.fileName + \"\\n\", color: \"color:#27AE60;\" };\n    },\n        l = function l(n, e, r) {\n      var t = performance.now(),\n          o = y(r) ? e(r()) : e(),\n          i = performance.now();return d(n, i - t, o);\n    },\n        y = function y(n) {\n      return \"function\" == typeof n;\n    },\n        d = function d(n, e, r) {\n      return { name: n, duration: e, result: r.result, actual: r.actual, expected: r.expected, checkType: r.checkType };\n    },\n        p = function p() {\n      return s.apply(void 0, arguments);\n    },\n        s = function s() {\n      for (var n = arguments.length, e = Array(n), r = 0; r < n; r++) {\n        e[r] = arguments[r];\n      }var t = {},\n          o = !0,\n          i = !1,\n          u = void 0;try {\n        for (var a, f = e[Symbol.iterator](); !(o = (a = f.next()).done); o = !0) {\n          var c = a.value;v(c, t);\n        }\n      } catch (n) {\n        i = !0, u = n;\n      } finally {\n        try {\n          !o && f.return && f.return();\n        } finally {\n          if (i) throw u;\n        }\n      }return t;\n    },\n        v = function n(e, r) {\n      for (var t = Object.keys(e), o = void 0, i = void 0, u = 0; u < t.length; u++) {\n        i = e[o = t[u]], O(r[o]) ? r[o] = r[o] : r[o] = {}, O(i) ? n(i, r[o]) : r[o] = i;\n      }\n    },\n        g = \"===\",\n        E = \"!==\",\n        m = function m(n, e) {\n      return h(n === e, n, e, g);\n    },\n        b = function b(n, e) {\n      if (_(n, e)) return h(!1, n, e, g);var r = x(n, e);return h(r, n, e, g);\n    },\n        A = function A(n, e) {\n      return h(n !== e, n, e, E);\n    },\n        T = function T(n, e) {\n      if (_(n, e)) return h(!1, n, e, E);var r = x(n, e);return h(r, n, e, E);\n    },\n        _ = function _(n, e) {\n      return !O(n) || !O(e);\n    },\n        h = function h(n, e, r, t) {\n      return { result: n, actual: O(e) ? JSON.stringify(e) : e, expected: O(r) ? JSON.stringify(r) : r, checkType: t };\n    },\n        x = function n(e, r) {\n      var o = void 0,\n          i = void 0,\n          u = void 0,\n          a = void 0;if (S(e) || S(r)) return !1;if ((void 0 === e ? \"undefined\" : t(e)) !== (void 0 === r ? \"undefined\" : t(r))) return !1;if (\"function\" == typeof e) return e.toString() === r.toString();if (O(e) ? (o = Object.keys(e), i = Object.keys(r), u = o.length, a = i.length) : (u = 0, a = 0), u !== a) return !1;if (0 === u) return !(e !== r && !C(e, r));for (var f = 0; f < u; f++) {\n        var c = o[f];if (e[c] !== r[c]) {\n          if (n(e[c], r[c])) continue;return !1;\n        }\n      }return !0;\n    },\n        C = function C(n, e) {\n      var r = Array.isArray(n) && Array.isArray(e),\n          t = O(n) && O(e);return !(!r && (Array.isArray(n) || Array.isArray(e))) && !(!r && !t);\n    },\n        S = function S(n) {\n      return void 0 === n || null === n;\n    },\n        O = function O(n) {\n      return \"object\" === (void 0 === n ? \"undefined\" : t(n)) && null !== n;\n    };e.default = { TEST: o, TEST_ASYNC: i, TEST_F: l, CREATE_MOCK: p, CHECK_ACTUAL_EQUAL_EXPECTED: m, CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT: b, CHECK_ACTUAL_DIFFERENT_EXPECTED: A, CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT: T };\n  }]).default;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./build/cacau.js?");

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
eval("\n\n__webpack_require__(/*! ./unit/fix_returnobjectimutable_test.js */ \"./tests/unit/fix_returnobjectimutable_test.js\");\n\n__webpack_require__(/*! ./unit/fix_undefinedandnull_test.js */ \"./tests/unit/fix_undefinedandnull_test.js\");\n\n__webpack_require__(/*! ./unit/test_async_test.js */ \"./tests/unit/test_async_test.js\");\n\n//# sourceURL=webpack:///./tests/executetests.js?");

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
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\nvar imageDownload = function imageDownload(path, successCallback) {\n    var img = new Image();\n    img.addEventListener(\"load\", successCallback, false);\n    img.src = path;\n    return img;\n};\n\n(0, _cacau.TEST_ASYNC)(\"TestAsyncFunctionTest\", function (done) {\n    var spyCountSuccess = 0;\n    var expectedCountSuccess = spyCountSuccess + 1;\n\n    var successCallback = function successCallback() {\n        spyCountSuccess++;\n\n        var actualCountSuccess = spyCountSuccess;\n\n        var result = (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(actualCountSuccess, expectedCountSuccess);\n        done(result);\n    };\n\n    var pathImage = 'https://i.imgur.com/Wutekcp.jpg'; // or '../images/img_cacau.png';\n    var img = imageDownload(pathImage, successCallback);\n});\n\n//# sourceURL=webpack:///./tests/unit/test_async_test.js?");

/***/ })

/******/ });
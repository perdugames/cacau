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
eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n!function (t, e) {\n  \"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(undefined, function () {\n  return function (t) {\n    var e = {};function n(r) {\n      if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n    }return n.m = t, n.c = e, n.d = function (t, e, r) {\n      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });\n    }, n.r = function (t) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: \"Module\" }), Object.defineProperty(t, \"__esModule\", { value: !0 });\n    }, n.t = function (t, e) {\n      if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && \"object\" == (typeof t === \"undefined\" ? \"undefined\" : _typeof(t)) && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, \"default\", { enumerable: !0, value: t }), 2 & e && \"string\" != typeof t) for (var o in t) {\n        n.d(r, o, function (e) {\n          return t[e];\n        }.bind(null, o));\n      }return r;\n    }, n.n = function (t) {\n      var e = t && t.__esModule ? function () {\n        return t.default;\n      } : function () {\n        return t;\n      };return n.d(e, \"a\", e), e;\n    }, n.o = function (t, e) {\n      return Object.prototype.hasOwnProperty.call(t, e);\n    }, n.p = \"\", n(n.s = 0);\n  }([function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n      return typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n    } : function (t) {\n      return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n    },\n        o = i(n(1)),\n        u = i(n(8));function i(t) {\n      return t && t.__esModule ? t : { default: t };\n    }var f = new o.default(),\n        a = new u.default();var l = function l(t) {\n      for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {\n        n[r - 1] = arguments[r];\n      }var o = [],\n          u = [],\n          i = performance.now(),\n          f = !0,\n          a = !1,\n          l = void 0;try {\n        for (var c, s = n[Symbol.iterator](); !(f = (c = s.next()).done); f = !0) {\n          var p = c.value;!0 === p.result ? o.push(p) : u.push(p);\n        }\n      } catch (t) {\n        a = !0, l = t;\n      } finally {\n        try {\n          !f && s.return && s.return();\n        } finally {\n          if (a) throw l;\n        }\n      }var y = performance.now() - i,\n          _ = o.length,\n          v = u.length,\n          T = { fileName: t, duration: y, passing: o, failing: u, lenPassing: _, lenFailing: v },\n          A = v > 0 ? d(T) : E(T);console.log(\"%c\" + A.text, A.color);\n    },\n        c = function c(t, e) {\n      e(function (e) {\n        return l(t, y(t, e));\n      });\n    },\n        d = function d(t) {\n      return { text: s(t) + p(t), color: \"color:#B03A2E;\" };\n    },\n        s = function s(t) {\n      return \"Failing in \" + t.fileName + \":\\n\\nPassing: \" + t.lenPassing + \" (\" + t.duration.toFixed(2) + \"ms)\\nFailing: \" + t.lenFailing + \"\\n\\n\";\n    },\n        p = function p(t) {\n      for (var e = \"\", n = 0; n < t.lenFailing; n++) {\n        e += n + \") \" + t.failing[n].name + \" (\" + t.failing[n].duration.toFixed(2) + \"ms)\\n       CheckError: \" + t.failing[n].actual + \" \" + t.failing[n].checkType + \" \" + t.failing[n].expected + \"\\n\\n       ✓ Actual: \" + t.failing[n].actual + \"\\n       ✓ Expected: \" + t.failing[n].expected + \"\\n\\n\";\n      }return e += \"\\n\";\n    },\n        E = function E(t) {\n      return { text: \"✓ Passing \" + t.fileName + \"\\n\", color: \"color:#27AE60;\" };\n    },\n        y = function y(t, e, n) {\n      var r = performance.now(),\n          o = void 0;try {\n        return _(n) ? e(n()) : e(), { name: t, duration: o = performance.now() - r, result: !0 };\n      } catch (e) {\n        if (o = performance.now() - r, \"AssertionError\" === e.name) return v(t, o, e);throw e;\n      }\n    },\n        _ = function _(t) {\n      return \"function\" == typeof t;\n    },\n        v = function v(t, e, n) {\n      return { name: t, duration: e, result: n.result, actual: n.actual, expected: n.expected, checkType: n.operator };\n    },\n        T = function T() {\n      return A.apply(void 0, arguments);\n    },\n        A = function A() {\n      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {\n        e[n] = arguments[n];\n      }var r = {},\n          o = !0,\n          u = !1,\n          i = void 0;try {\n        for (var f, a = e[Symbol.iterator](); !(o = (f = a.next()).done); o = !0) {\n          var l = f.value;b(l, r);\n        }\n      } catch (t) {\n        u = !0, i = t;\n      } finally {\n        try {\n          !o && a.return && a.return();\n        } finally {\n          if (u) throw i;\n        }\n      }return r;\n    },\n        b = function t(e, n) {\n      for (var r = Object.keys(e), o = void 0, u = void 0, i = 0; i < r.length; i++) {\n        u = e[o = r[i]], N(n[o]) ? n[o] = n[o] : n[o] = {}, N(u) ? t(u, n[o]) : n[o] = u;\n      }\n    },\n        N = function N(t) {\n      return \"object\" === (void 0 === t ? \"undefined\" : r(t)) && null !== t;\n    };e.default = { cacau: a, TEST: l, TEST_ASYNC: c, TEST_F: y, CREATE_MOCK: T, CHECK_TRUE: f.isTrue, CHECK_NOT_TRUE: f.isNotTrue, CHECK_FALSE: f.isFalse, CHECK_NOT_FALSE: f.isNotFalse, CHECK_UNDEFINED: f.isUndefined, CHECK_NOT_UNDEFINED: f.isNotUndefined, CHECK_NULL: f.isNull, CHECK_NOT_NULL: f.isNotNull, CHECK_ACTUAL_EQUAL_EXPECTED: f.actualEqualExpected, CHECK_ACTUAL_DIFFERENT_EXPECTED: f.actualNotEqualExpected, CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT: f.actualDeepEqualExpected };\n  }, function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var r = i(n(2)),\n        o = i(n(4)),\n        u = i(n(5));function i(t) {\n      return t && t.__esModule ? t : { default: t };\n    }function f() {}f.prototype.isTrue = function (t) {\n      new r.default(t, !0, u.default.IS_TRUE, o.default.EQUAL);\n    }, f.prototype.isNotTrue = function (t) {\n      new r.default(t, !1, u.default.IS_NOT_TRUE, o.default.NOT_EQUAL);\n    }, f.prototype.isFalse = function (t) {\n      new r.default(t, !1, u.default.IS_FALSE, o.default.EQUAL);\n    }, f.prototype.isNotFalse = function (t) {\n      new r.default(t, !0, u.default.IS_NOT_FALSE, o.default.NOT_EQUAL);\n    }, f.prototype.isUndefined = function (t) {\n      new r.default(t, void 0, u.default.IS_UNDEFINED, o.default.EQUAL);\n    }, f.prototype.isNotUndefined = function (t) {\n      new r.default(t, !0, u.default.IS_NOT_UNDEFINED, o.default.NOT_EQUAL);\n    }, f.prototype.isNull = function (t) {\n      new r.default(t, null, u.default.IS_NULL, o.default.EQUAL);\n    }, f.prototype.isNotNull = function (t) {\n      new r.default(t, !0, u.default.IS_NOT_NULL, o.default.NOT_EQUAL);\n    }, f.prototype.actualEqualExpected = function (t, e) {\n      new r.default(t, e, u.default.ACTUAL_EQUAL_EXPECTED, o.default.EQUAL);\n    }, f.prototype.actualNotEqualExpected = function (t, e) {\n      new r.default(t, e, u.default.ACTUAL_NOT_EQUAL_EXPECTED, o.default.NOT_EQUAL);\n    }, f.prototype.actualDeepEqualExpected = function (t, e) {\n      new r.default(t, e, u.default.ACTUAL_DEEP_EQUAL_EXPECTED, o.default.EQUAL);\n    }, e.default = f;\n  }, function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var r = function (t) {\n      return t && t.__esModule ? t : { default: t };\n    }(n(3));function o(t, e, n, r) {\n      this.assert(t, e, n, r);\n    }o.prototype.assert = function (t, e, n, o) {\n      var u = n(t, e),\n          i = { actual: t, expected: e, result: u, operator: o },\n          f = \"actual: \" + t + \" \" + o + \" expected: \" + e;if (!u) throw new r.default(f, i);\n    }, e.default = o;\n  }, function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n      return typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n    } : function (t) {\n      return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n    };function o(t, e, n) {\n      if (this.message = t || \"AssertionError message not specified\", u(e = e || {}, this), n = n || o, Error.captureStackTrace) Error.captureStackTrace(this, n);else try {\n        throw new Error();\n      } catch (t) {\n        this.stack = t.stack;\n      }\n    }o.prototype = Object.create(Error.prototype), o.prototype.constructor = o, o.prototype.name = \"AssertionError\";var u = function t(e, n) {\n      for (var r = Object.keys(e), o = void 0, u = void 0, f = 0; f < r.length; f++) {\n        u = e[o = r[f]], n[o] = i(n[o]) ? n[o] : {}, i(u) ? t(u, n[o]) : n[o] = u;\n      }\n    },\n        i = function i(t) {\n      return \"object\" === (void 0 === t ? \"undefined\" : r(t)) && null !== t;\n    };e.default = o;\n  }, function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });e.default = { EQUAL: \"===\", NOT_EQUAL: \"!==\" };\n  }, function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var r = function (t) {\n      return t && t.__esModule ? t : { default: t };\n    }(n(6));var o = { IS_TRUE: function IS_TRUE(t) {\n        return !0 === t;\n      }, IS_NOT_TRUE: function IS_NOT_TRUE(t) {\n        return !0 !== t;\n      }, IS_FALSE: function IS_FALSE(t) {\n        return !1 === t;\n      }, IS_NOT_FALSE: function IS_NOT_FALSE(t) {\n        return !1 !== t;\n      }, IS_UNDEFINED: function IS_UNDEFINED(t) {\n        return void 0 === t;\n      }, IS_NOT_UNDEFINED: function IS_NOT_UNDEFINED(t) {\n        return void 0 !== t;\n      }, IS_NULL: function IS_NULL(t) {\n        return null === t;\n      }, IS_NOT_NULL: function IS_NOT_NULL(t) {\n        return null !== t;\n      }, ACTUAL_EQUAL_EXPECTED: function ACTUAL_EQUAL_EXPECTED(t, e) {\n        return t === e;\n      }, ACTUAL_NOT_EQUAL_EXPECTED: function ACTUAL_NOT_EQUAL_EXPECTED(t, e) {\n        return t !== e;\n      }, ACTUAL_DEEP_EQUAL_EXPECTED: function ACTUAL_DEEP_EQUAL_EXPECTED(t, e) {\n        return r.default.deepEquals(t, e);\n      } };e.default = o;\n  }, function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var r = { deepEquals: function (t) {\n        return t && t.__esModule ? t : { default: t };\n      }(n(7)).default };e.default = r;\n  }, function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n      return typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n    } : function (t) {\n      return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : typeof t === \"undefined\" ? \"undefined\" : _typeof(t);\n    },\n        o = function t(e, n) {\n      var o = void 0,\n          a = void 0,\n          l = void 0,\n          c = void 0;if (i(e) || i(n)) return !1;if ((void 0 === e ? \"undefined\" : r(e)) !== (void 0 === n ? \"undefined\" : r(n))) return !1;if (\"function\" == typeof e) return e.toString() === n.toString();if (f(e) ? (o = Object.keys(e), a = Object.keys(n), l = o.length, c = a.length) : (l = 0, c = 0), l !== c) return !1;if (0 === l) return !(e !== n && !u(e, n));for (var d = 0; d < l; d++) {\n        var s = o[d];if (e[s] !== n[s]) {\n          if (t(e[s], n[s])) continue;return !1;\n        }\n      }return !0;\n    },\n        u = function u(t, e) {\n      var n = Array.isArray(t) && Array.isArray(e),\n          r = f(t) && f(e);return !(!n && (Array.isArray(t) || Array.isArray(e))) && !(!n && !r);\n    },\n        i = function i(t) {\n      return void 0 === t || null === t;\n    },\n        f = function f(t) {\n      return \"object\" === (void 0 === t ? \"undefined\" : r(t)) && null !== t;\n    };e.default = function (t, e) {\n      return f(t) || f(e) ? !(!f(t) || !f(e)) && o(t, e) : t === e;\n    };\n  }, function (t, e, n) {\n    \"use strict\";\n    Object.defineProperty(e, \"__esModule\", { value: !0 });var r = function (t) {\n      return t && t.__esModule ? t : { default: t };\n    }(n(9));function o() {\n      this.tests = [];\n    }o.prototype.addTest = function (t, e) {\n      var n = new r.default(e);return this.tests.push(n), n;\n    }, o.prototype.run = function () {\n      for (var t = 0; t < this.tests.length; t++) {\n        var e = this.tests[t].run();if (void 0 !== e) return e;\n      }\n    }, e.default = o;\n  }, function (t, e, n) {\n    \"use strict\";\n    function r(t) {\n      this.testFunction = t;\n    }Object.defineProperty(e, \"__esModule\", { value: !0 }), r.prototype.run = function () {\n      try {\n        this.testFunction();\n      } catch (t) {\n        return t;\n      }\n    }, e.default = r;\n  }]).default;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./build/cacau.js?");

/***/ }),

/***/ "./lib/assert/algorithms/algorithms.js":
/*!*********************************************!*\
  !*** ./lib/assert/algorithms/algorithms.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _deep_equals = __webpack_require__(/*! ./deep_equals */ \"./lib/assert/algorithms/deep_equals.js\");\n\nvar _deep_equals2 = _interopRequireDefault(_deep_equals);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Algorithms = {\n    deepEquals: _deep_equals2.default\n};\n\nexports.default = Algorithms;\n\n//# sourceURL=webpack:///./lib/assert/algorithms/algorithms.js?");

/***/ }),

/***/ "./lib/assert/algorithms/deep_equals.js":
/*!**********************************************!*\
  !*** ./lib/assert/algorithms/deep_equals.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar deepEquals = function deepEquals(object1, object2) {\n    if (!isObject(object1) && !isObject(object2)) return object1 === object2;\n\n    if (!isObject(object1) || !isObject(object2)) return false;\n\n    return object1EqualsObject2(object1, object2);\n};\n\n// Modified by perdugames, based on @MaiaraLange https://pt.stackoverflow.com/a/291536/81474\nvar object1EqualsObject2 = function object1EqualsObject2(object1, object2) {\n    var prop1 = void 0,\n        prop2 = void 0,\n        lenProp1 = void 0,\n        lenProp2 = void 0;\n\n    if (isNullOrUndefined(object1) || isNullOrUndefined(object2)) return false;\n\n    if ((typeof object1 === 'undefined' ? 'undefined' : _typeof(object1)) !== (typeof object2 === 'undefined' ? 'undefined' : _typeof(object2))) return false;\n\n    if (typeof object1 === 'function') return object1.toString() !== object2.toString() ? false : true;\n\n    if (isObject(object1)) {\n        prop1 = Object.keys(object1);\n        prop2 = Object.keys(object2);\n        lenProp1 = prop1.length;\n        lenProp2 = prop2.length;\n    } else {\n        lenProp1 = 0;\n        lenProp2 = 0;\n    }\n\n    if (lenProp1 !== lenProp2) return false;\n\n    if (lenProp1 === 0) {\n        if (object1 === object2 || areEmptyAndTypeEquals(object1, object2)) return true;else return false;\n    }\n\n    for (var i = 0; i < lenProp1; i++) {\n        var prop = prop1[i];\n\n        if (object1[prop] !== object2[prop]) if (object1EqualsObject2(object1[prop], object2[prop])) continue;else return false;\n    }\n    return true;\n};\n\nvar areEmptyAndTypeEquals = function areEmptyAndTypeEquals(obj1, obj2) {\n    var areArrays = Array.isArray(obj1) && Array.isArray(obj2);\n    var areObjects = isObject(obj1) && isObject(obj2);\n\n    if (!areArrays && (Array.isArray(obj1) || Array.isArray(obj2))) return false;\n\n    return areArrays || areObjects ? true : false;\n};\n\nvar isNullOrUndefined = function isNullOrUndefined(val) {\n    return typeof val === 'undefined' || val === null;\n};\n\nvar isObject = function isObject(val) {\n    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;\n};\n\nexports.default = deepEquals;\n\n//# sourceURL=webpack:///./lib/assert/algorithms/deep_equals.js?");

/***/ }),

/***/ "./lib/assert/assert.js":
/*!******************************!*\
  !*** ./lib/assert/assert.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _assertion = __webpack_require__(/*! ./assertion */ \"./lib/assert/assertion.js\");\n\nvar _assertion2 = _interopRequireDefault(_assertion);\n\nvar _operators = __webpack_require__(/*! ./operators */ \"./lib/assert/operators.js\");\n\nvar _operators2 = _interopRequireDefault(_operators);\n\nvar _expressions = __webpack_require__(/*! ./expressions */ \"./lib/assert/expressions.js\");\n\nvar _expressions2 = _interopRequireDefault(_expressions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Assert() {}\n\nAssert.prototype.isTrue = function (actual) {\n    new _assertion2.default(actual, true, _expressions2.default.IS_TRUE, _operators2.default.EQUAL);\n};\n\nAssert.prototype.isNotTrue = function (actual) {\n    new _assertion2.default(actual, !true, _expressions2.default.IS_NOT_TRUE, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.isFalse = function (actual) {\n    new _assertion2.default(actual, false, _expressions2.default.IS_FALSE, _operators2.default.EQUAL);\n};\n\nAssert.prototype.isNotFalse = function (actual) {\n    new _assertion2.default(actual, !false, _expressions2.default.IS_NOT_FALSE, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.isUndefined = function (actual) {\n    new _assertion2.default(actual, undefined, _expressions2.default.IS_UNDEFINED, _operators2.default.EQUAL);\n};\n\nAssert.prototype.isNotUndefined = function (actual) {\n    new _assertion2.default(actual, !undefined, _expressions2.default.IS_NOT_UNDEFINED, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.isNull = function (actual) {\n    new _assertion2.default(actual, null, _expressions2.default.IS_NULL, _operators2.default.EQUAL);\n};\n\nAssert.prototype.isNotNull = function (actual) {\n    new _assertion2.default(actual, !null, _expressions2.default.IS_NOT_NULL, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.actualEqualExpected = function (actual, expected) {\n    new _assertion2.default(actual, expected, _expressions2.default.ACTUAL_EQUAL_EXPECTED, _operators2.default.EQUAL);\n};\n\nAssert.prototype.actualNotEqualExpected = function (actual, expected) {\n    new _assertion2.default(actual, expected, _expressions2.default.ACTUAL_NOT_EQUAL_EXPECTED, _operators2.default.NOT_EQUAL);\n};\n\nAssert.prototype.actualDeepEqualExpected = function (actual, expected) {\n    new _assertion2.default(actual, expected, _expressions2.default.ACTUAL_DEEP_EQUAL_EXPECTED, _operators2.default.EQUAL);\n};\n\nexports.default = Assert;\n\n//# sourceURL=webpack:///./lib/assert/assert.js?");

/***/ }),

/***/ "./lib/assert/assertion.js":
/*!*********************************!*\
  !*** ./lib/assert/assertion.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _assertion_error = __webpack_require__(/*! ./assertion_error */ \"./lib/assert/assertion_error.js\");\n\nvar _assertion_error2 = _interopRequireDefault(_assertion_error);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Assertion(actual, expected, expression, operator) {\n    this.assert(actual, expected, expression, operator);\n}\n\nAssertion.prototype.assert = function (actual, expected, expression, operator) {\n    var result = expression(actual, expected);\n\n    var props = {\n        actual: actual,\n        expected: expected,\n        result: result,\n        operator: operator\n    };\n\n    var message = 'actual: ' + actual + ' ' + operator + ' expected: ' + expected;\n\n    if (!result) throw new _assertion_error2.default(message, props);\n};\n\nexports.default = Assertion;\n\n//# sourceURL=webpack:///./lib/assert/assertion.js?");

/***/ }),

/***/ "./lib/assert/assertion_error.js":
/*!***************************************!*\
  !*** ./lib/assert/assertion_error.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction AssertionError(message, props, startStackConstructor) {\n    this.message = message || 'AssertionError message not specified';\n    props = props || {};\n\n    assignDeepEnumerablesToOut(props, this);\n\n    startStackConstructor = startStackConstructor || AssertionError;\n    if (Error.captureStackTrace) Error.captureStackTrace(this, startStackConstructor);else try {\n        throw new Error();\n    } catch (e) {\n        this.stack = e.stack;\n    }\n}\n\nAssertionError.prototype = Object.create(Error.prototype);\n\nAssertionError.prototype.constructor = AssertionError;\n\nAssertionError.prototype.name = 'AssertionError';\n\nvar assignDeepEnumerablesToOut = function assignDeepEnumerablesToOut(obj, out) {\n    var props = Object.keys(obj);\n    var key = void 0,\n        v = void 0,\n        o = void 0;\n    for (var i = 0; i < props.length; i++) {\n        key = props[i];\n        v = obj[key];\n        out[key] = isObject(out[key]) ? out[key] : {};\n        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;\n    }\n};\n\nvar isObject = function isObject(val) {\n    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;\n};\n\nexports.default = AssertionError;\n\n//# sourceURL=webpack:///./lib/assert/assertion_error.js?");

/***/ }),

/***/ "./lib/assert/expressions.js":
/*!***********************************!*\
  !*** ./lib/assert/expressions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _algorithms = __webpack_require__(/*! ./algorithms/algorithms */ \"./lib/assert/algorithms/algorithms.js\");\n\nvar _algorithms2 = _interopRequireDefault(_algorithms);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Expressions = {\n\n    IS_TRUE: function IS_TRUE(actual) {\n        return actual === true;\n    },\n\n    IS_NOT_TRUE: function IS_NOT_TRUE(actual) {\n        return actual !== true;\n    },\n\n    IS_FALSE: function IS_FALSE(actual) {\n        return actual === false;\n    },\n\n    IS_NOT_FALSE: function IS_NOT_FALSE(actual) {\n        return actual !== false;\n    },\n\n    IS_UNDEFINED: function IS_UNDEFINED(actual) {\n        return actual === undefined;\n    },\n\n    IS_NOT_UNDEFINED: function IS_NOT_UNDEFINED(actual) {\n        return actual !== undefined;\n    },\n\n    IS_NULL: function IS_NULL(actual) {\n        return actual === null;\n    },\n\n    IS_NOT_NULL: function IS_NOT_NULL(actual) {\n        return actual !== null;\n    },\n\n    ACTUAL_EQUAL_EXPECTED: function ACTUAL_EQUAL_EXPECTED(actual, expected) {\n        return actual === expected;\n    },\n\n    ACTUAL_NOT_EQUAL_EXPECTED: function ACTUAL_NOT_EQUAL_EXPECTED(actual, expected) {\n        return actual !== expected;\n    },\n\n    ACTUAL_DEEP_EQUAL_EXPECTED: function ACTUAL_DEEP_EQUAL_EXPECTED(actual, expected) {\n        return _algorithms2.default.deepEquals(actual, expected);\n    }\n\n};\n\nexports.default = Expressions;\n\n//# sourceURL=webpack:///./lib/assert/expressions.js?");

/***/ }),

/***/ "./lib/assert/operators.js":
/*!*********************************!*\
  !*** ./lib/assert/operators.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar Operators = {\n    EQUAL: '===',\n    NOT_EQUAL: '!=='\n};\n\nexports.default = Operators;\n\n//# sourceURL=webpack:///./lib/assert/operators.js?");

/***/ }),

/***/ "./lib/runner.js":
/*!***********************!*\
  !*** ./lib/runner.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _suite = __webpack_require__(/*! ./suite */ \"./lib/suite.js\");\n\nvar _suite2 = _interopRequireDefault(_suite);\n\nvar _test = __webpack_require__(/*! ./test */ \"./lib/test.js\");\n\nvar _test2 = _interopRequireDefault(_test);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Runner() {\n    this.rootSuite = this.createSuite('root');\n}\n\nRunner.prototype.createSuite = function (name) {\n    return new _suite2.default(name);\n};\n\nRunner.prototype.createTest = function (name, testFunction) {\n    return new _test2.default(name, testFunction);\n};\n\nRunner.prototype.run = function () {\n    return this.rootSuite.run();\n};\n\nexports.default = Runner;\n\n//# sourceURL=webpack:///./lib/runner.js?");

/***/ }),

/***/ "./lib/suite.js":
/*!**********************!*\
  !*** ./lib/suite.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction Suite(name, parent) {\n    this.name = name;\n    this.parent = parent;\n    this.children = [];\n    this.varsFixture = {};\n    this.beforeAll = undefined;\n    this.afterAll = undefined;\n    this.beforeEach = undefined;\n    this.afterEach = undefined;\n}\n\nSuite.prototype.addChild = function (child) {\n    child.parent = this;\n    this.children.push(child);\n};\n\nSuite.prototype.run = function () {\n    var errors = [];\n\n    if (this.beforeAll) this.beforeAll(this.varsFixture);\n\n    for (var i = 0; i < this.children.length; i++) {\n        var child = this.children[i];\n\n        if (child.constructor.name === 'Test') {\n            var e = child.testFunction.bind(this.varsFixture);\n            child.testFunction = e;\n        } else {\n            assignDeepEnumerablesToOut(this.varsFixture, child.varsFixture);\n        }\n\n        var resultError = child.run();\n        if (resultError) Array.isArray(resultError) ? errors = errors.concat(resultError) : errors.push(resultError);\n    }\n\n    if (this.afterAll) this.afterAll(this.varsFixture);\n\n    return errors;\n};\n\nvar assignDeepEnumerablesToOut = function assignDeepEnumerablesToOut(obj, out) {\n    var props = Object.keys(obj);\n    var key = void 0,\n        v = void 0,\n        o = void 0;\n    for (var i = 0; i < props.length; i++) {\n        key = props[i];\n        v = obj[key];\n        out[key] = isObject(out[key]) ? out[key] : {};\n        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;\n    }\n};\n\nvar isObject = function isObject(val) {\n    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;\n};\n\nexports.default = Suite;\n\n//# sourceURL=webpack:///./lib/suite.js?");

/***/ }),

/***/ "./lib/test.js":
/*!*********************!*\
  !*** ./lib/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction Test(name, testFunction, parent) {\n    this.name = name;\n    this.testFunction = testFunction;\n    this.parent = parent;\n}\n\nTest.prototype.run = function () {\n    try {\n        var parentsBeforeEach = [];\n        getBeforeEachRecursive(this.parent, parentsBeforeEach);\n        executeSuitesFunctionEach(parentsBeforeEach, this.parent.varsFixture);\n\n        this.testFunction();\n\n        var parentsAfterEach = [];\n        getAfterEachRecursive(this.parent, parentsAfterEach);\n        executeSuitesFunctionEach(parentsAfterEach, this.parent.varsFixture);\n    } catch (error) {\n        return error;\n    }\n};\n\nvar getBeforeEachRecursive = function getBeforeEachRecursive(suite, parents) {\n    if (suite.beforeEach) parents.unshift(suite.beforeEach);\n\n    if (suite.name !== 'root') getBeforeEachRecursive(suite.parent, parents);\n};\n\nvar getAfterEachRecursive = function getAfterEachRecursive(suite, parents) {\n    if (suite.afterEach) parents.unshift(suite.afterEach);\n\n    if (suite.name !== 'root') getAfterEachRecursive(suite.parent, parents);\n};\n\nvar executeSuitesFunctionEach = function executeSuitesFunctionEach(parents, varsFixture) {\n    for (var i = 0; i < parents.length; i++) {\n        parents[i](varsFixture);\n    }\n};\n\nexports.default = Test;\n\n//# sourceURL=webpack:///./lib/test.js?");

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
eval("\n\n__webpack_require__(/*! ./unit/fix_returnobjectimutable_test */ \"./tests/unit/fix_returnobjectimutable_test.js\");\n\n__webpack_require__(/*! ./unit/fix_undefinedandnull_test */ \"./tests/unit/fix_undefinedandnull_test.js\");\n\n__webpack_require__(/*! ./unit/test_async_test */ \"./tests/unit/test_async_test.js\");\n\n__webpack_require__(/*! ./unit/checks_test */ \"./tests/unit/checks_test.js\");\n\n__webpack_require__(/*! ./unit/assert_test */ \"./tests/unit/assert_test.js\");\n\n__webpack_require__(/*! ./unit/runner_test */ \"./tests/unit/runner_test.js\");\n\n//# sourceURL=webpack:///./tests/executetests.js?");

/***/ }),

/***/ "./tests/unit/assert_test.js":
/*!***********************************!*\
  !*** ./tests/unit/assert_test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\nvar _assert = __webpack_require__(/*! LIB/assert/assert */ \"./lib/assert/assert.js\");\n\nvar _assert2 = _interopRequireDefault(_assert);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar errorCapture = function errorCapture(fn) {\n    try {\n        fn();\n    } catch (e) {\n        return e;\n    }\n};\n\n(0, _cacau.TEST)('assert.js', (0, _cacau.TEST_F)('TestAssertIsTrueCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = true;\n    var result = assert.isTrue(actual);\n\n    return (0, _cacau.CHECK_UNDEFINED)(result);\n}), (0, _cacau.TEST_F)('TestAssertIsTrueCheckErrorObject', function () {\n    var assert = new _assert2.default();\n\n    var expected = {\n        actual: false,\n        expected: true,\n        result: false,\n        operator: '==='\n    };\n\n    var assertError = errorCapture(function () {\n        return assert.isTrue(false);\n    });\n\n    var actual = {\n        actual: assertError.actual,\n        expected: assertError.expected,\n        result: assertError.result,\n        operator: assertError.operator\n    };\n\n    return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(actual, expected);\n}), (0, _cacau.TEST_F)('TestAssertIsNotTrueCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = !true;\n    var result = assert.isNotTrue(actual);\n\n    return (0, _cacau.CHECK_UNDEFINED)(result);\n}), (0, _cacau.TEST_F)('TestAssertActualDeepEqualExpectedCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = { x: 0, y: 1 };\n    var expected = { x: 0, y: 1 };\n    var result = assert.actualDeepEqualExpected(actual, expected);\n\n    return (0, _cacau.CHECK_UNDEFINED)(result);\n}));\n\n//# sourceURL=webpack:///./tests/unit/assert_test.js?");

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

/***/ "./tests/unit/runner_test.js":
/*!***********************************!*\
  !*** ./tests/unit/runner_test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\nvar _runner = __webpack_require__(/*! LIB/runner */ \"./lib/runner.js\");\n\nvar _runner2 = _interopRequireDefault(_runner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//const runner = new Runner();\n//const suite = runner.addSuite();\n//\n//suite.fixture({\n//    x: \"oi\",\n//    y: 2,\n//    beforeAll: function() { this.y++; },\n//    afterAll: function() { this.y--; },\n//    beforeEach: function() { this.x = 'não'; },\n//    afterEach: function() { this.x = 'oi'; }\n//});\n//\n//suite.values(function() {\n//    \n//});\n//\n//suite.beforeAll(function() {\n//        \n//});\n//\n//suite.afterAll(function() {\n//        \n//});\n//\n//suite.beforeEach(function() {\n//        \n//});\n//\n//suite.afterEach(function() {\n//        \n//});\n//\n//suite.test('Test 1', function() {\n//        \n//});\n//\n//suite.test('Test 2', function() {\n//        \n//});\n\n(0, _cacau.TEST)('runner_test.js', (0, _cacau.TEST_F)('TestCreateTestCheckResultRun', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var test = runner.createTest('Test 1', function () {\n        return (0, _cacau.CHECK_TRUE)(true);\n    });\n    rootSuite.addChild(test);\n\n    var result = runner.run();\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(result, []);\n}), (0, _cacau.TEST_F)('TestCreateSuiteRecursiveCheckResultRun', function () {\n\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    var test1 = runner.createTest('Suite 1 - Test 1', function () {\n        return (0, _cacau.CHECK_TRUE)(true);\n    });\n    suite1.addChild(test1);\n\n    var suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');\n    suite1.addChild(suite1Suite2);\n\n    var suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function () {\n        return (0, _cacau.CHECK_TRUE)(true);\n    });\n    suite1Suite2.addChild(suite2Test1);\n\n    var result = runner.run();\n    //console.log(result);\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(result, []);\n}), (0, _cacau.TEST_F)('TestCreateSuiteCheckParentTest', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    var test1 = runner.createTest('Test 1', function () {\n        return (0, _cacau.CHECK_TRUE)(true);\n    });\n    suite1.addChild(test1);\n\n    var testParent = test1.parent;\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(testParent, suite1);\n}), (0, _cacau.TEST_F)('TestCreateSuiteCheckBeforeAllAlterVarsFixture', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: false };\n    suite1.beforeAll = function (varsFixture) {\n        varsFixture.x = true;\n    };\n\n    var test1 = runner.createTest('Test 1', function () {\n        (0, _cacau.CHECK_TRUE)(this.x);\n    });\n    suite1.addChild(test1);\n\n    var result = runner.run();\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(result, []);\n}), (0, _cacau.TEST_F)('TestCreateSuiteRecursiveCheckBeforeAllAlterVarsFixture', function () {\n\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: false };\n    suite1.beforeAll = function (varsFixture) {\n        varsFixture.x = true;\n    };\n    var test1 = runner.createTest('Test 1', function () {\n        (0, _cacau.CHECK_TRUE)(this.x);\n    });\n    suite1.addChild(test1);\n\n    var suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');\n    suite1.addChild(suite1Suite2);\n    suite1Suite2.varsFixture = { y: 9 };\n    var suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function () {\n        (0, _cacau.CHECK_TRUE)(this.x);\n    });\n    suite1Suite2.addChild(suite2Test1);\n\n    var result = runner.run();\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(result, []);\n}), (0, _cacau.TEST_F)('TestCreateSuiteCheckAfterAllAlterVarsFixture', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: true };\n    suite1.afterAll = function (varsFixture) {\n        varsFixture.x = false;\n    };\n\n    var test1 = runner.createTest('Test 1', function () {\n        (0, _cacau.CHECK_TRUE)(this.x);\n    });\n    suite1.addChild(test1);\n\n    runner.run();\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(suite1.varsFixture.x, false);\n}), (0, _cacau.TEST_F)('TestCreateSuiteCheckBeforeEarchAlterVarsFixture', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: 0 };\n    suite1.beforeEach = function (varsFixture) {\n        varsFixture.x = 0;\n    };\n\n    var test1 = runner.createTest('Test 1', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite1.addChild(test1);\n\n    var test2 = runner.createTest('Test 2', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite1.addChild(test2);\n\n    var result = runner.run();\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(result, []);\n}), (0, _cacau.TEST_F)('TestCreateSuiteCheckBeforeEarchRecursiveAlterVarsFixture', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: 0 };\n    suite1.beforeEach = function (varsFixture) {\n        varsFixture.x = 0;\n    };\n    var test1 = runner.createTest('Test 1', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite1.addChild(test1);\n    var test2 = runner.createTest('Test 2', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite1.addChild(test2);\n\n    var suite2 = runner.createSuite('Suite 2');\n    suite1.addChild(suite2);\n\n    suite2.varsFixture = { y: 0 };\n    suite2.beforeEach = function (varsFixture) {\n        varsFixture.x++;\n    };\n    var suite2Test1 = runner.createTest('Test 1', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 2);\n    });\n    suite2.addChild(suite2Test1);\n\n    var result = runner.run();\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(result, []);\n}), (0, _cacau.TEST_F)('TestCreateSuiteCheckAfterEarchAlterVarsFixture', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: 0 };\n    suite1.afterEach = function (varsFixture) {\n        varsFixture.x = 0;\n    };\n\n    var test1 = runner.createTest('Test 1', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite1.addChild(test1);\n\n    var test2 = runner.createTest('Test 2', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite1.addChild(test2);\n\n    var result = runner.run();\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(result, []);\n}), (0, _cacau.TEST_F)('TestCreateSuiteCheckAfterEarchRecursiveAlterVarsFixture', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: 0 };\n    suite1.afterEach = function (varsFixture) {\n        varsFixture.x = 0;\n    };\n    var test1 = runner.createTest('Test 1', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite1.addChild(test1);\n    var test2 = runner.createTest('Test 2', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite1.addChild(test2);\n\n    var suite2 = runner.createSuite('Suite 2');\n    suite1.addChild(suite2);\n\n    suite2.varsFixture = { y: 0 };\n    suite2.afterEach = function (varsFixture) {\n        varsFixture.x++;\n    };\n    var suite2Test1 = runner.createTest('Test 1', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 1);\n    });\n    suite2.addChild(suite2Test1);\n\n    var suite2Test2 = runner.createTest('Test 2', function () {\n        this.x++;\n        (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(this.x, 2);\n    });\n    suite2.addChild(suite2Test2);\n\n    var result = runner.run();\n\n    (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT)(result, []);\n}));\n\n//# sourceURL=webpack:///./tests/unit/runner_test.js?");

/***/ }),

/***/ "./tests/unit/test_async_test.js":
/*!***************************************!*\
  !*** ./tests/unit/test_async_test.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _cacau = __webpack_require__(/*! BUILD/cacau.js */ \"./build/cacau.js\");\n\nvar _runner = __webpack_require__(/*! LIB/runner */ \"./lib/runner.js\");\n\nvar _runner2 = _interopRequireDefault(_runner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar imageDownload = function imageDownload(path, successCallback) {\n    var img = new Image();\n    img.addEventListener(\"load\", successCallback, false);\n    img.src = path;\n    return img;\n};\n\n(0, _cacau.TEST_ASYNC)(\"TestAsyncFunctionTest\", function (done) {\n    var spyCountSuccess = 0;\n    var expectedCountSuccess = spyCountSuccess + 1;\n\n    var successCallback = function successCallback() {\n        spyCountSuccess++;\n\n        var actualCountSuccess = spyCountSuccess;\n\n        done(function () {\n            return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(actualCountSuccess, expectedCountSuccess);\n        });\n    };\n\n    var pathImage = 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png'; // or '../images/img_cacau.png';\n    var img = imageDownload(pathImage, successCallback);\n});\n\n(0, _cacau.TEST_ASYNC)(\"TestRunnerAsyncTest\", function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    var test1 = runner.createAsyncTest('Suite 1 - Test 1', function (runnerDone) {\n        var spyCountSuccess = 0;\n        var expectedCountSuccess = spyCountSuccess + 1;\n\n        var successCallback = function successCallback() {\n            spyCountSuccess++;\n\n            var actualCountSuccess = spyCountSuccess;\n\n            done(function () {\n                return CHECK_TRUE(runnerDone(function () {\n                    return (0, _cacau.CHECK_ACTUAL_EQUAL_EXPECTED)(actualCountSuccess, expectedCountSuccess);\n                }));\n            });\n        };\n\n        var pathImage = 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png'; // or '../images/img_cacau.png';\n        var img = imageDownload(pathImage, successCallback);\n    });\n\n    suite1.addChild(test1);\n\n    runner.run();\n});\n\n//# sourceURL=webpack:///./tests/unit/test_async_test.js?");

/***/ })

/******/ });
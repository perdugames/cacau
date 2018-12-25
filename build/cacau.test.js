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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction ArrayIterator() {\n    this.itens = [];\n    this.currentIndex = 0;\n}\n\nArrayIterator.prototype.add = function (item) {\n    this.itens.push(item);\n};\n\nArrayIterator.prototype.first = function () {\n    this.currentIndex = 0;\n};\n\nArrayIterator.prototype.next = function () {\n    this.currentIndex++;\n};\n\nArrayIterator.prototype.isDone = function () {\n    return this.currentIndex >= this.itens.length;\n};\n\nArrayIterator.prototype.getCurrent = function () {\n    if (this.isDone()) throw new Error('IteratorOutOfBounds');\n    return this.itens[this.currentIndex];\n};\n\nexports.default = ArrayIterator;\n\n//# sourceURL=webpack:///./lib/array_iterator.js?");

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

/***/ "./lib/async_test.js":
/*!***************************!*\
  !*** ./lib/async_test.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction AsyncTest(name, testFunction, parent) {\n    this.name = name;\n    this.testFunction = testFunction;\n    this.parent = parent;\n    this.error = undefined;\n}\n\nAsyncTest.prototype.run = function (suiteEnd) {\n    try {\n        this.parent.executeSuitesFunctionEach(this.parent.parentsBeforeEach);\n        this.testFunction(this.done.bind(this));\n        this.parent.executeSuitesFunctionEach(this.parent.parentsAfterEach);\n    } catch (error) {\n        //console.log('run emit');\n        this.error = error;\n        this.eventBus.emit('testEnd', this);\n    }\n};\n\nAsyncTest.prototype.done = function () {\n    try {\n        //console.log('done emit');\n        if (arguments[0] instanceof Error) this.error = arguments[0];else if (typeof arguments[0] === 'function') arguments[0]();\n\n        this.parent.childNext();\n        this.eventBus.emit('testEnd', this);\n    } catch (error) {\n        //console.log('catch done emit');\n        this.error = error;\n        this.eventBus.emit('testEnd', this);\n    }\n};\n\nexports.default = AsyncTest;\n\n//# sourceURL=webpack:///./lib/async_test.js?");

/***/ }),

/***/ "./lib/runner.js":
/*!***********************!*\
  !*** ./lib/runner.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _suite = __webpack_require__(/*! ./suite */ \"./lib/suite.js\");\n\nvar _suite2 = _interopRequireDefault(_suite);\n\nvar _test = __webpack_require__(/*! ./test */ \"./lib/test.js\");\n\nvar _test2 = _interopRequireDefault(_test);\n\nvar _async_test = __webpack_require__(/*! ./async_test */ \"./lib/async_test.js\");\n\nvar _async_test2 = _interopRequireDefault(_async_test);\n\nvar _eventbus = __webpack_require__(/*! @perdugames/eventbus */ \"./node_modules/@perdugames/eventbus/build/eventbus-1.0.2.js\");\n\nvar _eventbus2 = _interopRequireDefault(_eventbus);\n\nvar _runner_result = __webpack_require__(/*! ./runner_result */ \"./lib/runner_result.js\");\n\nvar _runner_result2 = _interopRequireDefault(_runner_result);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Runner() {\n    this.eventBus = new _eventbus2.default();\n    _suite2.default.prototype.eventBus = this.eventBus;\n    _test2.default.prototype.eventBus = this.eventBus;\n    _async_test2.default.prototype.eventBus = this.eventBus;\n    this.rootSuite = this.createSuite('root');\n    this.callbackRunProgress = undefined;\n    this.result = {};\n    (0, _runner_result2.default)(this);\n}\n\nRunner.prototype.createSuite = function (name) {\n    this.eventBus.emit('addSuite');\n    return new _suite2.default(name);\n};\n\nRunner.prototype.createTest = function (name, testFunction) {\n    this.eventBus.emit('addTest');\n    return new _test2.default(name, testFunction);\n};\n\nRunner.prototype.createAsyncTest = function (name, testFunction) {\n    this.eventBus.emit('addTest');\n    return new _async_test2.default(name, testFunction);\n};\n\nRunner.prototype.getRunProgress = function () {\n    if (this.result.tests === 0) return 0;\n\n    return Math.round(this.result.completedTests / (this.result.tests / 100));\n};\n\nRunner.prototype.run = function (callbackRunProgress) {\n    this.callbackRunProgress = callbackRunProgress;\n    this.eventBus.emit('runStart');\n    this.rootSuite.run();\n};\n\nexports.default = Runner;\n\n//# sourceURL=webpack:///./lib/runner.js?");

/***/ }),

/***/ "./lib/runner_result.js":
/*!******************************!*\
  !*** ./lib/runner_result.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction createRunnerResultCollector(runner) {\n    /*\n        suites - count of suites run.\n        tests - count of tests run.\n        passing - count of passing tests.\n        failing - count of failed tests.\n        errors = [{\n            suiteName: ,\n            testName: ,\n            testFunction: ,\n            duration: ,\n            objError:\n        }, ...]\n        runStart - time of the beginning of the test run.\n        runEnd - time of the end of the test run.\n        runDuration - time of the duration the test run.\n        completedTests - Number of tests that have been completed.\n    */\n    var result = {\n        runStart: 0,\n        suites: 0,\n        tests: 0,\n        passing: 0,\n        failing: 0,\n        errors: [],\n        runEnd: 0,\n        runDuration: 0,\n        completedTests: 0\n    };\n\n    runner.result = result;\n\n    runner.eventBus.once('runStart', function () {\n        result.runStart = timestamp();\n    });\n\n    runner.eventBus.on('addSuite', function () {\n        result.suites++;\n    });\n\n    runner.eventBus.on('addTest', function () {\n        result.tests++;\n    });\n\n    runner.eventBus.on('pass', function () {\n        result.passing++;\n    });\n\n    runner.eventBus.on('fail', function () {\n        result.failing++;\n    });\n\n    runner.eventBus.on('testEnd', function (test) {\n        if (test.error) {\n            result.errors.push({\n                name: test.name,\n                testFunction: test.testFunction,\n                parent: test.parent,\n                error: test.error\n            });\n            runner.eventBus.emit('fail');\n        } else {\n            runner.eventBus.emit('pass');\n        }\n\n        result.completedTests++;\n\n        if (runner.getRunProgress() === 100) runner.eventBus.emit('runEnd');\n\n        runner.callbackRunProgress();\n    });\n\n    runner.eventBus.on('suiteEnd', function (suite) {\n        if (suite.afterAll) suite.afterAll(suite.varsFixture);\n    });\n\n    runner.eventBus.once('runEnd', function () {\n        result.runEnd = timestamp();\n        result.runDuration = result.runEnd - result.runStart;\n    });\n}\n\nfunction timestamp() {\n    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();\n}\n\nexports.default = createRunnerResultCollector;\n\n//# sourceURL=webpack:///./lib/runner_result.js?");

/***/ }),

/***/ "./lib/suite.js":
/*!**********************!*\
  !*** ./lib/suite.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _array_iterator = __webpack_require__(/*! ./array_iterator.js */ \"./lib/array_iterator.js\");\n\nvar _array_iterator2 = _interopRequireDefault(_array_iterator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Suite(name, parent) {\n    this.name = name;\n    this.parent = parent;\n    this.varsFixture = {};\n    this.beforeAll = undefined;\n    this.afterAll = undefined;\n    this.beforeEach = undefined;\n    this.afterEach = undefined;\n    this.parentsBeforeEach = [];\n    this.parentsAfterEach = [];\n    this.children = new _array_iterator2.default();\n}\n\nSuite.prototype.addChild = function (child) {\n    child.parent = this;\n    this.children.add(child);\n};\n\nSuite.prototype.run = function () {\n    this.getBeforeEachRecursive(this);\n    this.getAfterEachRecursive(this);\n\n    if (this.beforeAll) this.beforeAll(this.varsFixture);\n\n    if (this.children.itens.length <= 0) this.eventBus.emit('suiteEnd', this);else this.childRun(this.children.getCurrent());\n\n    //    for(this.children.first(); !this.children.isDone(); this.children.next())\n    //        this.childRun(this.children.getCurrent());\n};\n\nSuite.prototype.childRun = function (child) {\n    if (child.constructor.name === 'Test' || child.constructor.name === 'AsyncTest') {\n        var e = child.testFunction.bind(this.varsFixture);\n        child.testFunction = e;\n    } else {\n        assignDeepEnumerablesToOut(this.varsFixture, child.varsFixture);\n    }\n    child.run();\n};\n\nSuite.prototype.childNext = function () {\n    this.children.next();\n    if (!this.children.isDone()) this.childRun(this.children.getCurrent());else this.eventBus.emit('suiteEnd', this);\n};\n\nSuite.prototype.getBeforeEachRecursive = function (suite) {\n    if (suite.beforeEach) suite.parentsBeforeEach.unshift(suite.beforeEach);\n\n    if (suite.name !== 'root') this.getBeforeEachRecursive(suite.parent);\n};\n\nSuite.prototype.getAfterEachRecursive = function (suite) {\n    if (suite.afterEach) suite.parentsAfterEach.unshift(suite.afterEach);\n\n    if (suite.name !== 'root') this.getAfterEachRecursive(suite.parent);\n};\n\nSuite.prototype.executeSuitesFunctionEach = function (parentsEach) {\n    for (var i = 0; i < parentsEach.length; i++) {\n        parentsEach[i](this.varsFixture);\n    }\n};\n\nvar assignDeepEnumerablesToOut = function assignDeepEnumerablesToOut(obj, out) {\n    var props = Object.keys(obj);\n    var key = void 0,\n        v = void 0,\n        o = void 0;\n    for (var i = 0; i < props.length; i++) {\n        key = props[i];\n        v = obj[key];\n        out[key] = isObject(out[key]) ? out[key] : {};\n        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;\n    }\n};\n\nvar isObject = function isObject(val) {\n    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null;\n};\n\nexports.default = Suite;\n\n//# sourceURL=webpack:///./lib/suite.js?");

/***/ }),

/***/ "./lib/test.js":
/*!*********************!*\
  !*** ./lib/test.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction Test(name, testFunction, parent) {\n    this.name = name;\n    this.testFunction = testFunction;\n    this.parent = parent;\n    this.error = undefined;\n}\n\nTest.prototype.run = function () {\n    try {\n        this.parent.executeSuitesFunctionEach(this.parent.parentsBeforeEach);\n        this.testFunction();\n        this.parent.executeSuitesFunctionEach(this.parent.parentsAfterEach);\n        this.parent.childNext();\n        this.eventBus.emit('testEnd', this);\n    } catch (error) {\n        this.error = error;\n        this.eventBus.emit('testEnd', this);\n    }\n};\n\nexports.default = Test;\n\n//# sourceURL=webpack:///./lib/test.js?");

/***/ }),

/***/ "./node_modules/@perdugames/eventbus/build/eventbus-1.0.2.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@perdugames/eventbus/build/eventbus-1.0.2.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r,i=n(1),o=(r=i)&&r.__esModule?r:{default:r};t.default=o.default},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var r,i=n(2),o=(r=i)&&r.__esModule?r:{default:r};function s(){this.events=Object.create(null)}s.prototype.getListenerCountOfEvent=function(e){return this.events[e].length},s.prototype.once=function(e,t){return void 0===this.events[e]&&(this.events[e]=[]),void 0!==this.events.addListener&&this.emit(\"addListener\",e),this.events[e].push(new o.default(t,!0)),this},s.prototype.on=function(e,t){return void 0===this.events[e]&&(this.events[e]=[]),void 0!==this.events.addListener&&this.emit(\"addListener\",e),this.events[e].push(new o.default(t)),this},s.prototype.off=function(e,t){var n=this.events[e].findIndex(function(e){return e.fn===t});return n>-1&&this.events[e].splice(n,1),void 0!==this.events.removeListener&&this.emit(\"removeListener\",e),this.events[e].length||(this.events[e]=void 0),this},s.prototype.emit=function(e){var t=this.events[e];if(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];for(var o=0;o<t.length;o++){var s=t[o].fn;t[o].isOnce&&t.splice(o,1),s.apply(void 0,r)}}return this},s.prototype.getAllEventsName=function(){return Object.keys(this.events)},s.prototype.getAllListenersOfEvent=function(e){return this.events[e]},s.prototype.removeAllListenersOfEvent=function(e){var t=this.getAllListenersOfEvent(e);return t&&(this.off(e,t[0].fn),this.removeAllListenersOfEvent(e)),this},t.default=s},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.fn=e,this.isOnce=t}}]).default});\n\n//# sourceURL=webpack:///./node_modules/@perdugames/eventbus/build/eventbus-1.0.2.js?");

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
eval("\n\nvar _assert = __webpack_require__(/*! LIB/assert/assert */ \"./lib/assert/assert.js\");\n\nvar _assert2 = _interopRequireDefault(_assert);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! BUILD/cacau-1.1.0.js */ \"./build/cacau-1.1.0.js\");\n\nvar errorCapture = function errorCapture(fn) {\n    try {\n        fn();\n    } catch (e) {\n        return e;\n    }\n};\n\nTEST('assert.js', TEST_F('TestAssertIsTrueCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = true;\n    var result = assert.isTrue(actual);\n\n    return CHECK_UNDEFINED(result);\n}), TEST_F('TestAssertIsTrueCheckErrorObject', function () {\n    var assert = new _assert2.default();\n\n    var expected = {\n        actual: false,\n        expected: true,\n        result: false,\n        operator: '==='\n    };\n\n    var assertError = errorCapture(function () {\n        return assert.isTrue(false);\n    });\n\n    var actual = {\n        actual: assertError.actual,\n        expected: assertError.expected,\n        result: assertError.result,\n        operator: assertError.operator\n    };\n\n    return CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(actual, expected);\n}), TEST_F('TestAssertIsNotTrueCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = !true;\n    var result = assert.isNotTrue(actual);\n\n    return CHECK_UNDEFINED(result);\n}), TEST_F('TestAssertActualDeepEqualExpectedCheckResult', function () {\n    var assert = new _assert2.default();\n\n    var actual = { x: 0, y: 1 };\n    var expected = { x: 0, y: 1 };\n    var result = assert.actualDeepEqualExpected(actual, expected);\n\n    return CHECK_UNDEFINED(result);\n}));\n\n//# sourceURL=webpack:///./tests/unit/assert_test.js?");

/***/ }),

/***/ "./tests/unit/checks_test.js":
/*!***********************************!*\
  !*** ./tests/unit/checks_test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! BUILD/cacau-1.1.0.js */ \"./build/cacau-1.1.0.js\");\n\nTEST('CHECKS', TEST_F('CHECK_TRUE', function () {\n    var valueTrue = true;\n    return CHECK_TRUE(valueTrue);\n}),\n\n//    TEST_F('CHECK_TRUE_FAILING', () => {\n//        const valueTrue = false;\n//        return CHECK_TRUE(valueTrue);\n//    }),\n\nTEST_F('CHECK_FALSE', function () {\n    var valueFalse = false;\n    return CHECK_FALSE(valueFalse);\n}), TEST_F('CHECK_UNDEFINED', function () {\n    var valueUndefined = undefined;\n    return CHECK_UNDEFINED(valueUndefined);\n}), TEST_F('CHECK_NULL', function () {\n    var valueNull = null;\n    return CHECK_NULL(valueNull);\n}), TEST_F('CHECK_NOT_TRUE', function () {\n    var valueTrue = !true;\n    return CHECK_NOT_TRUE(valueTrue);\n}), TEST_F('CHECK_FALSE', function () {\n    var valueFalse = !false;\n    return CHECK_NOT_FALSE(valueFalse);\n}), TEST_F('CHECK_NOT_UNDEFINED', function () {\n    var valueUndefined = !undefined;\n    return CHECK_NOT_UNDEFINED(valueUndefined);\n}), TEST_F('CHECK_NOT_NULL', function () {\n    var valueNull = !null;\n    return CHECK_NOT_NULL(valueNull);\n}));\n\n//# sourceURL=webpack:///./tests/unit/checks_test.js?");

/***/ }),

/***/ "./tests/unit/fix_returnobjectimutable_test.js":
/*!*****************************************************!*\
  !*** ./tests/unit/fix_returnobjectimutable_test.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! BUILD/cacau-1.1.0.js */ \"./build/cacau-1.1.0.js\");\n\nvar FIXTURE = function FIXTURE() {\n    function Duckling(name) {\n        this.name = name;\n    }\n    return { duckling: new Duckling(\"Julio\") };\n};\n\nTEST('objectReturnFixIsImutable', TEST_F('testChangeName', function (FIX) {\n    var expectedDucklingName = 'Matias';\n\n    FIX.duckling.name = 'Matias';\n    var ducklingName = FIX.duckling.name;\n\n    return CHECK_ACTUAL_EQUAL_EXPECTED(ducklingName, expectedDucklingName);\n}, FIXTURE), TEST_F('testNotChangeName', function (FIX) {\n    var expectedDucklingName = 'Julio';\n    var ducklingName = FIX.duckling.name;\n\n    return CHECK_ACTUAL_EQUAL_EXPECTED(ducklingName, expectedDucklingName);\n}, FIXTURE));\n\n//# sourceURL=webpack:///./tests/unit/fix_returnobjectimutable_test.js?");

/***/ }),

/***/ "./tests/unit/fix_undefinedandnull_test.js":
/*!*************************************************!*\
  !*** ./tests/unit/fix_undefinedandnull_test.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! BUILD/cacau-1.1.0.js */ \"./build/cacau-1.1.0.js\");\n\nTEST('fixBeingUndefinedAndNull', TEST_F('testFixUndefined', function (FIX) {\n\n    return CHECK_ACTUAL_EQUAL_EXPECTED(FIX, undefined);\n}, undefined), TEST_F('testNotPassingFixArgument', function () {\n\n    return CHECK_ACTUAL_EQUAL_EXPECTED(1, 1);\n}), TEST_F('testFixNull', function (FIX) {\n\n    return CHECK_ACTUAL_EQUAL_EXPECTED(FIX, undefined);\n}, null));\n\n//# sourceURL=webpack:///./tests/unit/fix_undefinedandnull_test.js?");

/***/ }),

/***/ "./tests/unit/runner_test.js":
/*!***********************************!*\
  !*** ./tests/unit/runner_test.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _runner = __webpack_require__(/*! LIB/runner */ \"./lib/runner.js\");\n\nvar _runner2 = _interopRequireDefault(_runner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! BUILD/cacau-1.1.0.js */ \"./build/cacau-1.1.0.js\");\n\n//const runner = new Runner();\n//const suite = runner.addSuite();\n//\n//suite.fixture({\n//    x: \"oi\",\n//    y: 2,\n//    beforeAll: function() { this.y++; },\n//    afterAll: function() { this.y--; },\n//    beforeEach: function() { this.x = 'não'; },\n//    afterEach: function() { this.x = 'oi'; }\n//});\n//\n//suite.values(function() {\n//    \n//});\n//\n//suite.beforeAll(function() {\n//        \n//});\n//\n//suite.afterAll(function() {\n//        \n//});\n//\n//suite.beforeEach(function() {\n//        \n//});\n//\n//suite.afterEach(function() {\n//        \n//});\n//\n//suite.test('Test 1', function() {\n//        \n//});\n//\n//suite.asyncTest('Test 2', function() {\n//        \n//});\n\nTEST_ASYNC('TestCreateTestCheckResultRunFailingEqualZero', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var test = runner.createTest('Test 1', function () {\n        CHECK_TRUE(true);\n    });\n    rootSuite.addChild(test);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST('runner_test.js', TEST_F('TestGetRunProgressCheckReturnEqualZero', function () {\n    var runner = new _runner2.default();\n    CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(runner.getRunProgress(), 0);\n}), TEST_F('TestCreateSuiteRecursiveCheckResultRun', function () {\n\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    var test1 = runner.createTest('Suite 1 - Test 1', function () {\n        return CHECK_TRUE(true);\n    });\n    suite1.addChild(test1);\n\n    var suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');\n    suite1.addChild(suite1Suite2);\n\n    var suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function () {\n        return CHECK_TRUE(true);\n    });\n    suite1Suite2.addChild(suite2Test1);\n\n    runner.run(function () {\n        return CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(runner.result.failing, 0);\n    });\n}), TEST_F('TestCreateSuiteCheckParentTest', function () {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    var test1 = runner.createTest('Test 1', function () {\n        return CHECK_TRUE(true);\n    });\n    suite1.addChild(test1);\n\n    var testParent = test1.parent;\n\n    CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(testParent, suite1);\n}));\n\nTEST_ASYNC('TestGetRunProgressCheckReturnEqual100', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var test = runner.createAsyncTest('Test 1', function (testDone) {\n        testDone();\n    });\n    rootSuite.addChild(test);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        return done(function () {\n            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(runner.getRunProgress(), 100);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST_ASYNC('TestAsyncCreateAsyncTestCheckResultRunFailingEqualZero', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var test = runner.createAsyncTest('Test 1', function (testDone) {\n        testDone();\n    });\n    rootSuite.addChild(test);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST_ASYNC('TestAsyncCreateAsyncWithDoneArgErrorCheckResultErrors', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n    var error = new Error();\n\n    var test = runner.createAsyncTest('Test 1', function (testDone) {\n        testDone(error);\n    });\n    rootSuite.addChild(test);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST_ASYNC('TestAsyncCreateAsyncWithDoneArgFunctionCheckResultErrors', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n    var error = function error() {\n        CHECK_TRUE(false);\n    };\n\n    var test = runner.createAsyncTest('Test 1', function (testDone) {\n        testDone(error);\n    });\n    rootSuite.addChild(test);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST_ASYNC('TestCreateSuiteRecursiveCheckResultFailingEqualZero', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n    var test1 = runner.createAsyncTest('Suite 1 - Test 1', function (testDone) {\n        testDone();\n    });\n    suite1.addChild(test1);\n\n    var suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');\n    suite1.addChild(suite1Suite2);\n    var suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function () {\n        CHECK_TRUE(true);\n    });\n    suite1Suite2.addChild(suite2Test1);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST_ASYNC('TestCreateSuiteCheckBeforeAllAlterVarsFixture', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: false };\n    suite1.beforeAll = function (varsFixture) {\n        varsFixture.x = true;\n    };\n\n    var test1 = runner.createTest('Test 1', function () {\n        CHECK_TRUE(this.x);\n    });\n    suite1.addChild(test1);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST_ASYNC('TestCreateSuiteRecursiveCheckBeforeAllAlterVarsFixture', function (done) {\n\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: false };\n    suite1.beforeAll = function (varsFixture) {\n        varsFixture.x = true;\n    };\n    var test1 = runner.createTest('Test 1', function () {\n        CHECK_TRUE(this.x);\n    });\n    suite1.addChild(test1);\n\n    var suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');\n    suite1.addChild(suite1Suite2);\n    suite1Suite2.varsFixture = { y: 9 };\n    var suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function () {\n        CHECK_TRUE(this.x);\n    });\n    suite1Suite2.addChild(suite2Test1);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n\nTEST_ASYNC('TestCreateSuiteCheckAfterAllAlterVarsFixture', function (done) {\n    var runner = new _runner2.default();\n    var rootSuite = runner.rootSuite;\n\n    var suite1 = runner.createSuite('Suite 1');\n    rootSuite.addChild(suite1);\n\n    suite1.varsFixture = { x: true };\n    suite1.afterAll = function (varsFixture) {\n        varsFixture.x = false;\n    };\n    var test1 = runner.createTest('Test 1', function () {\n        CHECK_TRUE(this.x);\n    });\n    suite1.addChild(test1);\n\n    var callbackRunProgress = function callbackRunProgress() {\n        if (runner.getRunProgress() === 100) done(function () {\n            return CHECK_FALSE(suite1.varsFixture.x);\n        });\n    };\n    runner.run(callbackRunProgress);\n});\n//     \n//    TEST_F('TestCreateSuiteCheckBeforeEarchAlterVarsFixture', () => {\n//        const runner = new Runner();\n//        const rootSuite = runner.rootSuite;\n//\n//        const suite1 = runner.createSuite('Suite 1');\n//        rootSuite.addChild(suite1);\n//        \n//        suite1.varsFixture = { x: 0 };\n//        suite1.beforeEach = function(varsFixture) {\n//            varsFixture.x = 0;\n//        }\n//        \n//        const test1 = runner.createTest('Test 1', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite1.addChild(test1);\n//    \n//        const test2 = runner.createTest('Test 2', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite1.addChild(test2);\n//\n//        const result = runner.run();\n//\n//        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(result, []);\n//    }),\n//     \n//    TEST_F('TestCreateSuiteCheckBeforeEarchRecursiveAlterVarsFixture', () => {\n//        const runner = new Runner();\n//        const rootSuite = runner.rootSuite;\n//        \n//        const suite1 = runner.createSuite('Suite 1');\n//        rootSuite.addChild(suite1);\n//        \n//        suite1.varsFixture = { x: 0 };\n//        suite1.beforeEach = function(varsFixture) {\n//            varsFixture.x = 0;\n//        }\n//        const test1 = runner.createTest('Test 1', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite1.addChild(test1);\n//        const test2 = runner.createTest('Test 2', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite1.addChild(test2);\n//    \n//    \n//        const suite2 = runner.createSuite('Suite 2');\n//        suite1.addChild(suite2);\n//    \n//        suite2.varsFixture = { y: 0 };\n//        suite2.beforeEach = function(varsFixture) {\n//            varsFixture.x++;\n//        }\n//        const suite2Test1 = runner.createTest('Test 1', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 2);\n//        });\n//        suite2.addChild(suite2Test1);\n//    \n//    \n//        const result = runner.run();\n//\n//        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(result, []);\n//    }),\n//     \n//    TEST_F('TestCreateSuiteCheckAfterEarchAlterVarsFixture', () => {\n//        const runner = new Runner();\n//        const rootSuite = runner.rootSuite;\n//\n//        const suite1 = runner.createSuite('Suite 1');\n//        rootSuite.addChild(suite1);\n//        \n//        suite1.varsFixture = { x: 0 };\n//        suite1.afterEach = function(varsFixture) {\n//            varsFixture.x = 0;\n//        }\n//        \n//        const test1 = runner.createTest('Test 1', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite1.addChild(test1);\n//    \n//        const test2 = runner.createTest('Test 2', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite1.addChild(test2);\n//\n//        const result = runner.run();\n//\n//        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(result, []);\n//    }),\n//     \n//    TEST_F('TestCreateSuiteCheckAfterEarchRecursiveAlterVarsFixture', () => {\n//        const runner = new Runner();\n//        const rootSuite = runner.rootSuite;\n//        \n//        const suite1 = runner.createSuite('Suite 1');\n//        rootSuite.addChild(suite1);\n//        \n//        suite1.varsFixture = { x: 0 };\n//        suite1.afterEach = function(varsFixture) {\n//            varsFixture.x = 0;\n//        }\n//        const test1 = runner.createTest('Test 1', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite1.addChild(test1);\n//        const test2 = runner.createTest('Test 2', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite1.addChild(test2);\n//    \n//    \n//        const suite2 = runner.createSuite('Suite 2');\n//        suite1.addChild(suite2);\n//    \n//        suite2.varsFixture = { y: 0 };\n//        suite2.afterEach = function(varsFixture) {\n//            varsFixture.x++;\n//        }\n//        const suite2Test1 = runner.createTest('Test 1', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);\n//        });\n//        suite2.addChild(suite2Test1);\n//    \n//        const suite2Test2 = runner.createTest('Test 2', function() {\n//            this.x++;\n//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 2);\n//        });\n//        suite2.addChild(suite2Test2);\n//    \n//    \n//        const result = runner.run();\n//\n//        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(result, []);\n//    }),\n//    \n//);\n\n//# sourceURL=webpack:///./tests/unit/runner_test.js?");

/***/ }),

/***/ "./tests/unit/test_async_test.js":
/*!***************************************!*\
  !*** ./tests/unit/test_async_test.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _runner = __webpack_require__(/*! LIB/runner */ \"./lib/runner.js\");\n\nvar _runner2 = _interopRequireDefault(_runner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! BUILD/cacau-1.1.0.js */ \"./build/cacau-1.1.0.js\");\n\nvar imageDownload = function imageDownload(path, successCallback) {\n    var img = new Image();\n    img.addEventListener(\"load\", successCallback, false);\n    img.src = path;\n    return img;\n};\n\nTEST_ASYNC(\"TestAsyncFunctionTest\", function (done) {\n    var spyCountSuccess = 0;\n    var expectedCountSuccess = spyCountSuccess + 1;\n\n    var successCallback = function successCallback() {\n        spyCountSuccess++;\n\n        var actualCountSuccess = spyCountSuccess;\n\n        done(function () {\n            return CHECK_ACTUAL_EQUAL_EXPECTED(actualCountSuccess, expectedCountSuccess);\n        });\n    };\n\n    var pathImage = '../images/img_cacau.png'; // or 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png';\n    var img = imageDownload(pathImage, successCallback);\n});\n\n//TEST_ASYNC(\"TestRunnerAsyncTest\", (done) => {\n//    const runner = new Runner();\n//    const rootSuite = runner.rootSuite;\n//    const suite1 = runner.createSuite('Suite 1');\n//    rootSuite.addChild(suite1);\n//\n//    const test1 = runner.createTest('Suite 1 - Test 1', function(runnerDone) {\n//        \n//        const successCallback = () => runnerDone();\n//        \n//        const pathImage = 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png';\n//        const img = imageDownload(pathImage, successCallback);\n//        \n//    });                            \n//    suite1.addChild(test1);\n//\n//    const result = () => done( () => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0) );\n//    \n//    runner.run(result);\n//    \n//});\n\n//# sourceURL=webpack:///./tests/unit/test_async_test.js?");

/***/ })

/******/ });
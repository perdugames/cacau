(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cacau"] = factory();
	else
		root["cacau"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./cacau.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cacau.js":
/*!******************!*\
  !*** ./cacau.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* --------------------------------------------------------------- */
/* ------------------- Cacau Test API ---------------------------- */
/* --------------------------------------------------------------- */
function createCacau() {
    return {
        TEST: TEST,
        TEST_ASYNC: TEST_ASYNC,
        TEST_F: TEST_F,
        CREATE_MOCK: CREATE_MOCK,
        CHECK_TRUE: CHECK_TRUE,
        CHECK_FALSE: CHECK_FALSE,
        CHECK_UNDEFINED: CHECK_UNDEFINED,
        CHECK_NULL: CHECK_NULL,
        CHECK_ACTUAL_EQUAL_EXPECTED: CHECK_ACTUAL_EQUAL_EXPECTED,
        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT: CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT,
        CHECK_ACTUAL_DIFFERENT_EXPECTED: CHECK_ACTUAL_DIFFERENT_EXPECTED,
        CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT: CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT
    };
}

var TEST = function TEST(fileName) {
    for (var _len = arguments.length, testFunctions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        testFunctions[_key - 1] = arguments[_key];
    }

    var passing = [];
    var failing = [];

    var tStart = performance.now();

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = testFunctions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _test = _step.value;

            _test.result === true ? passing.push(_test) : failing.push(_test);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var tEnd = performance.now();
    var duration = tEnd - tStart;

    var lenPassing = passing.length;
    var lenFailing = failing.length;

    var test = {
        fileName: fileName,
        duration: duration,
        passing: passing,
        failing: failing,
        lenPassing: lenPassing,
        lenFailing: lenFailing
    };

    var result = lenFailing > 0 ? createFailingText(test) : createPassingText(test);

    console.log('%c' + result.text, result.color);
};

var TEST_ASYNC = function TEST_ASYNC(name, f) {
    var tStart = performance.now();
    f(function (check) {
        var passing = [];
        var failing = [];
        var tEnd = performance.now();
        var duration = tEnd - tStart;

        var details = createTestDetails(name, duration, check);

        details.result === true ? passing.push(details) : failing.push(details);

        var lenPassing = passing.length;
        var lenFailing = failing.length;

        var test = {
            fileName: name,
            duration: duration,
            passing: passing,
            failing: failing,
            lenPassing: lenPassing,
            lenFailing: lenFailing
        };

        var result = lenFailing > 0 ? createFailingText(test) : createPassingText(test);

        console.log('%c' + result.text, result.color);
    });
};

var createFailingText = function createFailingText(test) {
    return {
        text: createFailingIntroText(test) + createFailingTestsText(test),
        color: 'color:#B03A2E;'
    };
};

var createFailingIntroText = function createFailingIntroText(test) {
    var text = 'Failing in ' + test.fileName + ':\n\n' + 'Passing: ' + test.lenPassing + ' (' + test.duration.toFixed(2) + 'ms)\n' + 'Failing: ' + test.lenFailing + '\n\n';
    return text;
};

var createFailingTestsText = function createFailingTestsText(test) {
    var text = '';

    for (var i = 0; i < test.lenFailing; i++) {
        text += i + ') ' + test.failing[i].name + ' (' + test.failing[i].duration.toFixed(2) + 'ms)' + '\n' + '       CheckError: ' + test.failing[i].actual + ' ' + test.failing[i].checkType + ' ' + test.failing[i].expected + '\n\n' + '       ✓ Actual: ' + test.failing[i].actual + '\n' + '       ✓ Expected: ' + test.failing[i].expected + '\n' + '\n';
    }
    text += '\n';

    return text;
};

var createPassingText = function createPassingText(test) {
    return {
        text: '✓ Passing ' + test.fileName + '\n',
        color: 'color:#27AE60;'
    };
};

var TEST_F = function TEST_F(name, f, fixture) {
    var tStart = performance.now();
    var check = isFunction(fixture) ? f(fixture()) : f();
    var tEnd = performance.now();
    var duration = tEnd - tStart;

    var details = createTestDetails(name, duration, check);

    return details;
};

var isFunction = function isFunction(val) {
    return typeof val === 'function';
};

var createTestDetails = function createTestDetails(name, duration, check) {
    return {
        name: name,
        duration: duration,
        result: check.result,
        actual: check.actual,
        expected: check.expected,
        checkType: check.checkType
    };
};

var CREATE_MOCK = function CREATE_MOCK() {
    return composeObject.apply(undefined, arguments);
};

var composeObject = function composeObject() {
    for (var _len2 = arguments.length, objs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        objs[_key2] = arguments[_key2];
    }

    var composedObject = {};

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = objs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var obj = _step2.value;

            assignDeepEnumerablesToOut(obj, composedObject);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return composedObject;
};

// Modified by perdugames, based on @tfmontague https://stackoverflow.com/a/25921504/8211088
var assignDeepEnumerablesToOut = function assignDeepEnumerablesToOut(obj, out) {
    var props = Object.keys(obj);
    var key = void 0,
        v = void 0,
        o = void 0;
    for (var i = 0; i < props.length; i++) {
        key = props[i];
        v = obj[key];
        isObject(out[key]) ? out[key] = out[key] : out[key] = {};
        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;
    }
};

var CheckTypes = {
    EQUAL: '===',
    NOT_EQUAL: '!=='
};

var CHECK_TRUE = function CHECK_TRUE(value) {
    var result = value === true;
    var check = createCheck(result, value, true, CheckTypes.EQUAL);
    return check;
};

var CHECK_FALSE = function CHECK_FALSE(value) {
    var result = value === false;
    var check = createCheck(result, value, false, CheckTypes.EQUAL);
    return check;
};

var CHECK_UNDEFINED = function CHECK_UNDEFINED(value) {
    var result = value === undefined;
    var check = createCheck(result, value, undefined, CheckTypes.EQUAL);
    return check;
};

var CHECK_NULL = function CHECK_NULL(value) {
    var result = value === null;
    var check = createCheck(result, value, null, CheckTypes.EQUAL);
    return check;
};

var CHECK_ACTUAL_EQUAL_EXPECTED = function CHECK_ACTUAL_EQUAL_EXPECTED(actual, expected) {
    var result = actual === expected;
    var check = createCheck(result, actual, expected, CheckTypes.EQUAL);
    return check;
};

var CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT = function CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(actual, expected) {
    if (areNotObject(actual, expected)) return createCheck(false, actual, expected, CheckTypes.EQUAL);

    var result = object1EqualsObject2(actual, expected);
    var check = createCheck(result, actual, expected, CheckTypes.EQUAL);
    return check;
};

var CHECK_ACTUAL_DIFFERENT_EXPECTED = function CHECK_ACTUAL_DIFFERENT_EXPECTED(actual, expected) {
    var result = actual !== expected;
    var check = createCheck(result, actual, expected, CheckTypes.NOT_EQUAL);
    return check;
};

var CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT = function CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT(actual, expected) {
    if (areNotObject(actual, expected)) return createCheck(false, actual, expected, CheckTypes.NOT_EQUAL);

    var result = object1EqualsObject2(actual, expected);
    var check = createCheck(result, actual, expected, CheckTypes.NOT_EQUAL);
    return check;
};

var areNotObject = function areNotObject(actual, expected) {
    return !isObject(actual) || !isObject(expected);
};

var createCheck = function createCheck(result, actual, expected, checkType) {
    return {
        result: result,
        actual: isObject(actual) ? JSON.stringify(actual) : actual,
        expected: isObject(expected) ? JSON.stringify(expected) : expected,
        checkType: checkType
    };
};

// Modified by perdugames, based on @MaiaraLange https://pt.stackoverflow.com/a/291536/81474
var object1EqualsObject2 = function object1EqualsObject2(object1, object2) {
    var prop1 = void 0,
        prop2 = void 0,
        lenProp1 = void 0,
        lenProp2 = void 0;

    if (isNullOrUndefined(object1) || isNullOrUndefined(object2)) return false;

    if ((typeof object1 === 'undefined' ? 'undefined' : _typeof(object1)) !== (typeof object2 === 'undefined' ? 'undefined' : _typeof(object2))) return false;

    if (typeof object1 === "function") return object1.toString() !== object2.toString() ? false : true;

    if (isObject(object1)) {
        prop1 = Object.keys(object1);
        prop2 = Object.keys(object2);
        lenProp1 = prop1.length;
        lenProp2 = prop2.length;
    } else {
        lenProp1 = 0;
        lenProp2 = 0;
    }

    if (lenProp1 !== lenProp2) return false;

    if (lenProp1 === 0) {
        if (object1 === object2 || areEmptyAndTypeEquals(object1, object2)) return true;else return false;
    }

    for (var i = 0; i < lenProp1; i++) {
        var prop = prop1[i];

        if (object1[prop] !== object2[prop]) if (object1EqualsObject2(object1[prop], object2[prop])) continue;else return false;
    }
    return true;
};

var areEmptyAndTypeEquals = function areEmptyAndTypeEquals(obj1, obj2) {
    var areArrays = Array.isArray(obj1) && Array.isArray(obj2);
    var areObjects = isObject(obj1) && isObject(obj2);

    if (!areArrays && (Array.isArray(obj1) || Array.isArray(obj2))) return false;

    return areArrays || areObjects ? true : false;
};

var isNullOrUndefined = function isNullOrUndefined(val) {
    return typeof val === "undefined" || val === null;
};

var isObject = function isObject(val) {
    return (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === "object" && val !== null;
};

exports.default = createCacau();

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=cacau.dev.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.cacau=t():e.cacau=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var o=new(function(e){return e&&e.__esModule?e:{default:e}}(n(1)).default);var u=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=[],u=[],i=performance.now(),a=!0,l=!1,d=void 0;try{for(var s,p=n[Symbol.iterator]();!(a=(s=p.next()).done);a=!0){var E=s.value;!0===E.result?o.push(E):u.push(E)}}catch(e){l=!0,d=e}finally{try{!a&&p.return&&p.return()}finally{if(l)throw d}}var y=performance.now()-i,_=o.length,v=u.length,T={fileName:e,duration:y,passing:o,failing:u,lenPassing:_,lenFailing:v},A=v>0?f(T):c(T);console.log("%c"+A.text,A.color)},i=function(e,t){t(function(t){u(e,d(e,t))})},f=function(e){return{text:a(e)+l(e),color:"color:#B03A2E;"}},a=function(e){return"Failing in "+e.fileName+":\n\nPassing: "+e.lenPassing+" ("+e.duration.toFixed(2)+"ms)\nFailing: "+e.lenFailing+"\n\n"},l=function(e){for(var t="",n=0;n<e.lenFailing;n++)t+=n+") "+e.failing[n].name+" ("+e.failing[n].duration.toFixed(2)+"ms)\n       CheckError: "+e.failing[n].actual+" "+e.failing[n].checkType+" "+e.failing[n].expected+"\n\n       ✓ Actual: "+e.failing[n].actual+"\n       ✓ Expected: "+e.failing[n].expected+"\n\n";return t+="\n"},c=function(e){return{text:"✓ Passing "+e.fileName+"\n",color:"color:#27AE60;"}},d=function(e,t,n){var r=performance.now(),o=void 0;try{return s(n)?t(n()):t(),{name:e,duration:(o=performance.now())-r,result:!0}}catch(t){return o=performance.now(),p(e,o-r,t)}},s=function(e){return"function"==typeof e},p=function(e,t,n){return{name:e,duration:t,result:n.result,actual:n.actual,expected:n.expected,checkType:n.operator}},E=function(){return y.apply(void 0,arguments)},y=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r={},o=!0,u=!1,i=void 0;try{for(var f,a=t[Symbol.iterator]();!(o=(f=a.next()).done);o=!0){var l=f.value;_(l,r)}}catch(e){u=!0,i=e}finally{try{!o&&a.return&&a.return()}finally{if(u)throw i}}return r},_=function e(t,n){for(var r=Object.keys(t),o=void 0,u=void 0,i=0;i<r.length;i++)u=t[o=r[i]],v(n[o])?n[o]=n[o]:n[o]={},v(u)?e(u,n[o]):n[o]=u},v=function(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e};t.default={TEST:u,TEST_ASYNC:i,TEST_F:d,CREATE_MOCK:E,CHECK_TRUE:o.isTrue,CHECK_NOT_TRUE:o.isNotTrue,CHECK_FALSE:o.isFalse,CHECK_NOT_FALSE:o.isNotFalse,CHECK_UNDEFINED:o.isUndefined,CHECK_NOT_UNDEFINED:o.isNotUndefined,CHECK_NULL:o.isNull,CHECK_NOT_NULL:o.isNotNull,CHECK_ACTUAL_EQUAL_EXPECTED:o.actualEqualExpected,CHECK_ACTUAL_DIFFERENT_EXPECTED:o.actualNotEqualExpected,CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT:o.actualDeepEqualExpected}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(2)),o=i(n(4)),u=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}function f(){}f.prototype.isTrue=function(e){new r.default(e,!0,u.default.IS_TRUE,o.default.EQUAL)},f.prototype.isNotTrue=function(e){new r.default(e,!1,u.default.IS_NOT_TRUE,o.default.NOT_EQUAL)},f.prototype.isFalse=function(e){new r.default(e,!1,u.default.IS_FALSE,o.default.EQUAL)},f.prototype.isNotFalse=function(e){new r.default(e,!0,u.default.IS_NOT_FALSE,o.default.NOT_EQUAL)},f.prototype.isUndefined=function(e){new r.default(e,void 0,u.default.IS_UNDEFINED,o.default.EQUAL)},f.prototype.isNotUndefined=function(e){new r.default(e,!0,u.default.IS_NOT_UNDEFINED,o.default.NOT_EQUAL)},f.prototype.isNull=function(e){new r.default(e,null,u.default.IS_NULL,o.default.EQUAL)},f.prototype.isNotNull=function(e){new r.default(e,!0,u.default.IS_NOT_NULL,o.default.NOT_EQUAL)},f.prototype.actualEqualExpected=function(e,t){new r.default(e,t,u.default.ACTUAL_EQUAL_EXPECTED,o.default.EQUAL)},f.prototype.actualNotEqualExpected=function(e,t){new r.default(e,t,u.default.ACTUAL_NOT_EQUAL_EXPECTED,o.default.NOT_EQUAL)},f.prototype.actualDeepEqualExpected=function(e,t){new r.default(e,t,u.default.ACTUAL_DEEP_EQUAL_EXPECTED,o.default.EQUAL)},t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3));function o(e,t,n,r){this.assert(e,t,n,r)}o.prototype.assert=function(e,t,n,o){var u=n(e,t),i={actual:e,expected:t,result:u,operator:o},f="actual: "+e+" "+o+" expected: "+t;if(!u)throw new r.default(f,i)},t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t,n){if(this.message=e||"AssertionError message not specified",u(t=t||{},this),n=n||o,Error.captureStackTrace)Error.captureStackTrace(this,n);else try{throw new Error}catch(e){this.stack=e.stack}}o.prototype=Object.create(Error.prototype),o.prototype.constructor=o,o.prototype.name="AssertionError";var u=function e(t,n){for(var r=Object.keys(t),o=void 0,u=void 0,f=0;f<r.length;f++)u=t[o=r[f]],n[o]=i(n[o])?n[o]:{},i(u)?e(u,n[o]):n[o]=u},i=function(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={EQUAL:"===",NOT_EQUAL:"!=="}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(6));var o={IS_TRUE:function(e){return!0===e},IS_NOT_TRUE:function(e){return!0!==e},IS_FALSE:function(e){return!1===e},IS_NOT_FALSE:function(e){return!1!==e},IS_UNDEFINED:function(e){return void 0===e},IS_NOT_UNDEFINED:function(e){return void 0!==e},IS_NULL:function(e){return null===e},IS_NOT_NULL:function(e){return null!==e},ACTUAL_EQUAL_EXPECTED:function(e,t){return e===t},ACTUAL_NOT_EQUAL_EXPECTED:function(e,t){return e!==t},ACTUAL_DEEP_EQUAL_EXPECTED:function(e,t){return r.default.deepEquals(e,t)}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={deepEquals:function(e){return e&&e.__esModule?e:{default:e}}(n(7)).default};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function e(t,n){var o=void 0,a=void 0,l=void 0,c=void 0;if(i(t)||i(n))return!1;if((void 0===t?"undefined":r(t))!==(void 0===n?"undefined":r(n)))return!1;if("function"==typeof t)return t.toString()===n.toString();if(f(t)?(o=Object.keys(t),a=Object.keys(n),l=o.length,c=a.length):(l=0,c=0),l!==c)return!1;if(0===l)return!(t!==n&&!u(t,n));for(var d=0;d<l;d++){var s=o[d];if(t[s]!==n[s]){if(e(t[s],n[s]))continue;return!1}}return!0},u=function(e,t){var n=Array.isArray(e)&&Array.isArray(t),r=f(e)&&f(t);return!(!n&&(Array.isArray(e)||Array.isArray(t)))&&!(!n&&!r)},i=function(e){return void 0===e||null===e},f=function(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e};t.default=function(e,t){return f(e)||f(t)?!(!f(e)||!f(t))&&o(e,t):e===t}}]).default});
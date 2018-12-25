/* --------------------------------------------------------------- */
/* ------------------- Cacau Test API ---------------------------- */
/* --------------------------------------------------------------- */
import Assert from './lib/assert/assert';

const assert = new Assert();

function createCacau() {
    return {
        TEST: TEST,
        TEST_ASYNC: TEST_ASYNC,
        TEST_F: TEST_F,
        CREATE_MOCK: CREATE_MOCK,
        CHECK_TRUE: assert.isTrue,
        CHECK_NOT_TRUE: assert.isNotTrue,
        CHECK_FALSE: assert.isFalse,
        CHECK_NOT_FALSE: assert.isNotFalse,
        CHECK_UNDEFINED: assert.isUndefined,
        CHECK_NOT_UNDEFINED: assert.isNotUndefined,
        CHECK_NULL: assert.isNull,
        CHECK_NOT_NULL: assert.isNotNull,
        CHECK_ACTUAL_EQUAL_EXPECTED: assert.actualEqualExpected,
        CHECK_ACTUAL_DIFFERENT_EXPECTED: assert.actualNotEqualExpected,
        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT: assert.actualDeepEqualExpected
    };
}

const TEST = (fileName, ...testFunctions) => {
    const passing = [];
    const failing = [];
    
    const tStart = performance.now();
    
    for(let test of testFunctions)
        test.result === true ? passing.push(test) : failing.push(test);
    
    const tEnd = performance.now();
    const duration = tEnd - tStart;
    
    const lenPassing = passing.length;
    const lenFailing = failing.length;
    
    const test = {
        fileName: fileName,
        duration: duration,
        passing: passing,
        failing: failing,
        lenPassing: lenPassing, 
        lenFailing: lenFailing
    };
    
    const result = lenFailing > 0 ? createFailingText(test) : createPassingText(test);
    
    console.log('%c'+result.text, result.color);  
};

const TEST_ASYNC = (name, f) => {
    f( (checkFunction) => TEST(name, TEST_F(name, checkFunction))/*done*/ );
};

const createFailingText = (test) => ({
    text: createFailingIntroText(test) + createFailingTestsText(test),
    color: 'color:#B03A2E;' 
});

const createFailingIntroText = (test) => {
    let text = 'Failing in ' + test.fileName + ':\n\n'
             + 'Passing: ' + test.lenPassing + ' (' + test.duration.toFixed(2) + 'ms)\n'
             + 'Failing: ' + test.lenFailing + '\n\n';
    return text;  
};

const createFailingTestsText = (test) => {
    let text = '';
    
    for (let i = 0; i < test.lenFailing; i++) {
       text += (i + ') ' + test.failing[i].name 
                + ' (' + test.failing[i].duration.toFixed(2) + 'ms)' + '\n'
                + '       CheckError: '
                + test.failing[i].actual + ' ' + test.failing[i].checkType + ' ' + test.failing[i].expected + '\n\n'
                + '       ✓ Actual: '
                + test.failing[i].actual + '\n'
                + '       ✓ Expected: '
                + test.failing[i].expected + '\n' + '\n'
               );
    }
    text += '\n';
    
    return text;
};

const createPassingText = (test) => ({
    text: '✓ Passing '+test.fileName+'\n', 
    color: 'color:#27AE60;' 
});

const TEST_F = (name, f, fixture) => {
    const tStart = performance.now();
    let tEnd, duration;
    
    try {
        isFunction(fixture) ? f(fixture()) : f();
        
        tEnd = performance.now();
        duration = tEnd - tStart;
        
        return {name: name, duration: duration, result: true};
        
    } catch(error) {
        tEnd = performance.now();
        duration = tEnd - tStart;
        
        if(error.name === 'AssertionError')
            return createTestDetails(name, duration, error);
        
        throw error;
    }
};

const isFunction = (val) => (typeof val === 'function');

const createTestDetails = (name, duration, assertError) => ({
    name: name,
    duration: duration,
    result: assertError.result,
    actual: assertError.actual,
    expected: assertError.expected,
    checkType: assertError.operator   
});

const CREATE_MOCK = (...objs) => composeObject(...objs);

const composeObject = (...objs) => {
    let composedObject = {};
    
    for (let obj of objs)       
        assignDeepEnumerablesToOut(obj, composedObject);

    return composedObject;
};

// Modified by perdugames, based on @tfmontague https://stackoverflow.com/a/25921504/8211088
const assignDeepEnumerablesToOut = (obj, out) => {
    const props = Object.keys(obj);
    let key, v, o;
    for(let i = 0; i < props.length; i++) {
        key = props[i];
        v = obj[key];
        isObject(out[key]) ? out[key] = out[key] : out[key] = {};
        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;
    }  
};

const isObject = (val) => {
    return (typeof val === 'object' && val !== null);
};

global.TEST = TEST;
global.TEST_ASYNC = TEST_ASYNC;
global.TEST_F = TEST_F;
global.CREATE_MOCK = CREATE_MOCK;
global.CHECK_TRUE = assert.isTrue;
global.CHECK_NOT_TRUE = assert.isNotTrue;
global.CHECK_FALSE = assert.isFalse;
global.CHECK_NOT_FALSE = assert.isNotFalse;
global.CHECK_UNDEFINED = assert.isUndefined;
global.CHECK_NOT_UNDEFINED = assert.isNotUndefined;
global.CHECK_NULL = assert.isNull;
global.CHECK_NOT_NULL = assert.isNotNull;
global.CHECK_ACTUAL_EQUAL_EXPECTED = assert.actualEqualExpected;
global.CHECK_ACTUAL_DIFFERENT_EXPECTED = assert.actualNotEqualExpected;
global.CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT = assert.actualDeepEqualExpected;

global.cacau = createCacau();

module.exports = global;
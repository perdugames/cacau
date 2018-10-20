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
        CHECK_NOT_TRUE: CHECK_NOT_TRUE,
        CHECK_FALSE: CHECK_FALSE,
        CHECK_NOT_FALSE: CHECK_NOT_FALSE,
        CHECK_UNDEFINED: CHECK_UNDEFINED,
        CHECK_NOT_UNDEFINED: CHECK_NOT_UNDEFINED,
        CHECK_NULL: CHECK_NULL,
        CHECK_NOT_NULL: CHECK_NOT_NULL,
        CHECK_ACTUAL_EQUAL_EXPECTED: CHECK_ACTUAL_EQUAL_EXPECTED,
        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT: CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT,
        CHECK_ACTUAL_DIFFERENT_EXPECTED: CHECK_ACTUAL_DIFFERENT_EXPECTED,
        CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT: CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT
    };
}

const TEST = (fileName, ...testFunctions) => {
    const passing = [];
    const failing = [];
    
    const tStart = performance.now();
    
    for (let test of testFunctions)
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
    const tStart = performance.now();
    f((check) => {
        const passing = [];
        const failing = [];
        const tEnd = performance.now();
        const duration = tEnd - tStart;

        const details = createTestDetails(name, duration, check);

        details.result === true ? passing.push(details) : failing.push(details);
        
        const lenPassing = passing.length;
        const lenFailing = failing.length;
        
        const test = {
            fileName: name,
            duration: duration,
            passing: passing,
            failing: failing,
            lenPassing: lenPassing, 
            lenFailing: lenFailing
        };
    
        const result = lenFailing > 0 ? createFailingText(test) : createPassingText(test);
    
        console.log('%c'+result.text, result.color);  
    });
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
    const check = isFunction(fixture) ? f(fixture()) : f();
    const tEnd = performance.now();
    const duration = tEnd - tStart;
    
    const details = createTestDetails(name, duration, check);
    
    return details;
};

const isFunction = (val) => (typeof val === 'function');

const createTestDetails = (name, duration, check) => ({
    name: name,
    duration: duration,
    result: check.result,
    actual: check.actual,
    expected: check.expected,
    checkType: check.checkType   
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
    for (let i = 0; i < props.length; i++) {
        key = props[i];
        v = obj[key];
        isObject(out[key]) ? out[key] = out[key] : out[key] = {};
        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;
    }  
};

const CheckTypes = {
    EQUAL: '===',
    NOT_EQUAL: '!=='
};

const CHECK_TRUE = (value) => {
    const result = (value === true);
    const check = createCheck(result, value, true, CheckTypes.EQUAL);
    return check;
};

const CHECK_NOT_TRUE = (value) => {
    const result = (value !== true);
    const check = createCheck(result, value, !true, CheckTypes.NOT_EQUAL);
    return check;
};

const CHECK_FALSE = (value) => {
    const result = (value === false);
    const check = createCheck(result, value, false, CheckTypes.EQUAL);
    return check;
};

const CHECK_NOT_FALSE = (value) => {
    const result = (value !== false);
    const check = createCheck(result, value, !false, CheckTypes.NOT_EQUAL);
    return check;
};

const CHECK_UNDEFINED = (value) => {
    const result = (value === undefined);
    const check = createCheck(result, value, undefined, CheckTypes.EQUAL);
    return check;
};

const CHECK_NOT_UNDEFINED = (value) => {
    const result = (value !== undefined);
    const check = createCheck(result, value, !undefined, CheckTypes.NOT_EQUAL);
    return check;
};

const CHECK_NULL = (value) => {
    const result = (value === null);
    const check = createCheck(result, value, null, CheckTypes.EQUAL);
    return check;
};

const CHECK_NOT_NULL = (value) => {
    const result = (value !== null);
    const check = createCheck(result, value, !null, CheckTypes.NOT_EQUAL);
    return check;
};

const CHECK_ACTUAL_EQUAL_EXPECTED = (actual, expected) => {
    const result = (actual === expected);
    const check = createCheck(result, actual, expected, CheckTypes.EQUAL);
    return check;
};

const CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT = (actual, expected) => {
    if (areNotObject(actual, expected))
        return createCheck(false, actual, expected, CheckTypes.EQUAL);
    
    const result = object1EqualsObject2(actual, expected);
    const check = createCheck(result, actual, expected, CheckTypes.EQUAL);
    return check;
};

const CHECK_ACTUAL_DIFFERENT_EXPECTED = (actual, expected) => {
    const result = (actual !== expected);
    const check = createCheck(result, actual, expected, CheckTypes.NOT_EQUAL);
    return check;
};

const CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT = (actual, expected) => {
    if (areNotObject(actual, expected))
        return createCheck(false, actual, expected, CheckTypes.NOT_EQUAL);
    
    const result = object1EqualsObject2(actual, expected);
    const check = createCheck(result, actual, expected, CheckTypes.NOT_EQUAL);
    return check;
};

const areNotObject = (actual, expected) => {
    return !isObject(actual) || !isObject(expected);
};

const createCheck = (result, actual, expected, checkType) => ({
    result: result, 
    actual: (isObject(actual) ? JSON.stringify(actual) : actual), 
    expected: (isObject(expected) ? JSON.stringify(expected) : expected),
    checkType: checkType
});

// Modified by perdugames, based on @MaiaraLange https://pt.stackoverflow.com/a/291536/81474
const object1EqualsObject2 = (object1, object2) => {
    let prop1, prop2, lenProp1, lenProp2;
    
    if (isNullOrUndefined(object1) || isNullOrUndefined(object2))
        return false;

    if (typeof object1 !== typeof object2)
        return false;
    
    if (typeof object1 === "function")
        return (object1.toString() !== object2.toString() ? false : true);

    if (isObject(object1)) {
        prop1 = Object.keys(object1);
        prop2 = Object.keys(object2);
        lenProp1 = prop1.length;
        lenProp2 = prop2.length;
    } else {
        lenProp1 = 0;
        lenProp2 = 0;
    }

    if(lenProp1 !== lenProp2)
        return false;
    
    if(lenProp1 === 0) { 
        if(object1 === object2 || areEmptyAndTypeEquals(object1, object2))
            return true;
        else
            return false;
    }

    for(let i = 0; i < lenProp1; i++) {
        const prop = prop1[i];

        if(object1[prop] !== object2[prop])
            if(object1EqualsObject2(object1[prop], object2[prop]))
                continue;
            else
                return false;
        
    }
    return true;
};

const areEmptyAndTypeEquals = (obj1, obj2) => {
    const areArrays = Array.isArray(obj1) && Array.isArray(obj2);
    const areObjects = isObject(obj1) && isObject(obj2);
    
    if(!areArrays && (Array.isArray(obj1) || Array.isArray(obj2)))
       return false;
    
    return (areArrays || areObjects ? true : false);
};

const isNullOrUndefined = (val) => {
    return (typeof val === "undefined" || val === null);
};

const isObject = (val) => {
    return (typeof val === "object" && val !== null);
};

export default createCacau();
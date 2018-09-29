/* --------------------------------------------------------------- */
/* ------------------- Test API ---------------------------------- */
/* --------------------------------------------------------------- */

const TEST = (fileName, ...testFunctions) => {
    const passing = [];
    const failing = [];
    let resultStg = 'Running unit tests in '+fileName+':\n\n';
    
    const tStart = performance.now();
    
    for (let f of testFunctions) {
        const testDetails = f;
        testDetails.resultTest==='passed'?passing.push(testDetails):failing.push(testDetails);
    }
    
    const tEnd = performance.now();
    const duration = tEnd - tStart;
    
    const lenPassing = passing.length;
    const lenFailing = failing.length;
    resultStg += 'Passing: '+lenPassing+' ('+duration.toFixed(2)+'ms)\n';
    resultStg += 'Failing: '+lenFailing+'\n\n';
    
    let colorStg = '';
    if (lenFailing > 0) {
        const stgFailingTest = createStringFailingTest(failing, lenFailing);
        resultStg += stgFailingTest+'\n';
        colorStg = 'color:#B03A2E;';
    } else {
        resultStg = '✓ Passing '+fileName+'\n';
        colorStg = 'color:#27AE60;';
    }
    
    console.log('%c'+resultStg, colorStg);
    
};

const createStringFailingTest = (failing, lenFailing) => {
    let stgFailingTest = '';
        for(let i = 0; i < lenFailing; i++){
           stgFailingTest += (i + ') ' + failing[i].nameTest 
                              + ' (' + failing[i].durationTest.toFixed(2) + 'ms)' + '\n'
                              + '       CheckError: ' + failing[i].actual + ' ' + failing[i].checkType + ' ' + failing[i].expected + '\n\n'
                              + '       ✓ Actual: ' + failing[i].actual + '\n'
                              + '       ✓ Expected: ' + failing[i].expected + '\n' + '\n'
                             );
        }
    return stgFailingTest;    
};

const TEST_F = (nameTest, f) => {
    const tStart = performance.now();
    const checkInfo = f();
    const tEnd = performance.now();
    const durationTest = tEnd - tStart;
    const testDetails = { 
        nameTest: nameTest, 
        durationTest: durationTest,
        resultTest: checkInfo.result,
        actual: checkInfo.actual,
        expected: checkInfo.expected,
        checkType: checkInfo.checkType
    }; 
    return testDetails;
};

const CREATE_MOCK = (...objs) => composeObject(...objs);

const composeObject = (...objs) => {
    let composedObject = {};
    
    for (let obj of objs) {        
        assignDeepEnumerablesToOut(obj, composedObject);    
    }

    return composedObject;
};

// By @tfmontague https://stackoverflow.com/a/25921504/8211088
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

const CHECK_ACTUAL_EQUAL_EXPECTED = (actual, expected) => {
    const checkDetails = createCheckResult(actual, expected, '===');
    (actual === expected) ? checkDetails.result = 'passed' : checkDetails.result = 'failed';
    return checkDetails;
};

const CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT = (actual, expected) => {
    if (!isObject(actual) || !isObject(expected)) {
        return { result: 'failed', actual: actual, expected: expected, checkType: '===' };
    }
    const checkDetails = createCheckResult(actual, expected, '===');
    object1EqualsObject2(actual, expected) ? checkDetails.result = 'passed' : checkDetails.result = 'failed';
    return checkDetails;
};

const CHECK_ACTUAL_DIFFERENT_EXPECTED = (actual, expected) => {
    const checkDetails = createCheckResult(actual, expected, '!==');
    (actual !== expected) ? checkDetails.result = 'passed' : checkDetails.result = 'failed';
    return checkDetails;
};

const CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT = (actual, expected) => {
    if (!isObject(actual) || !isObject(expected)) {
        return { result: 'failed', actual: actual, expected: expected, checkType: '===' };
    }
    const checkDetails = createCheckResult(actual, expected, '!==');
    !object1EqualsObject2(actual, expected) ? checkDetails.result = 'passed' : checkDetails.result = 'failed';
    return checkDetails;
};


const createCheckResult = (actual, expected, checkType) => ({
    result: '', 
    actual: (typeof actual === 'object' ? JSON.stringify(actual) : actual), 
    expected: (typeof expected === 'object' ? JSON.stringify(expected) : expected),
    checkType: checkType
});

// by Maiara Lange https://pt.stackoverflow.com/a/291536/81474
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

export {
    TEST,
    TEST_F,
    CREATE_MOCK,
    CHECK_ACTUAL_EQUAL_EXPECTED,
    CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT,
    CHECK_ACTUAL_DIFFERENT_EXPECTED,
    CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT,
    composeObject,
    object1EqualsObject2
};

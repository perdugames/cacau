import {
    TEST, 
    TEST_F, 
    CHECK_TRUE,
    CHECK_UNDEFINED,
    CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT
} from 'BUILD/cacau.js';

import Assert from 'LIB/assert/assert';

const errorCapture = (fn) => {
    try {
        fn();
    } catch(e) {
        return e;
    }
}

TEST('assert.js',
    
    TEST_F('TestAssertIsTrueCheckResult', () => {
        const assert = new Assert();

        const actual = true;
        const result = assert.isTrue(actual);

        return CHECK_UNDEFINED(result);
    }),
     
    TEST_F('TestAssertIsTrueCheckErrorObject', () => {
        const assert = new Assert();

        const expected = {
            actual: false,
            expected: true,
            result: false,
            operator: '==='
        };

        const assertError = errorCapture(() => assert.isTrue(false));

        const actual = {
            actual: assertError.actual,
            expected: assertError.expected,
            result: assertError.result,
            operator: assertError.operator
        };

        return CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(actual, expected);
    }),
    
    TEST_F('TestAssertIsNotTrueCheckResult', () => {
        const assert = new Assert();

        const actual = !true;
        const result = assert.isNotTrue(actual);

        return CHECK_UNDEFINED(result);
    }),
     
    TEST_F('TestAssertActualDeepEqualExpectedCheckResult', () => {
        const assert = new Assert();

        const actual = {x: 0, y: 1};
        const expected = {x: 0, y: 1};
        const result = assert.actualDeepEqualExpected(actual, expected);
    
        return CHECK_UNDEFINED(result);
    }),
     
);
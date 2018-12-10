import Algorithms from './algorithms/algorithms';

const Expressions = {
    
    IS_TRUE: (actual) => actual === true,
    
    IS_NOT_TRUE: (actual) => actual !== true,
    
    IS_FALSE: (actual) => actual === false,
    
    IS_NOT_FALSE: (actual) => actual !== false,
    
    IS_UNDEFINED: (actual) => actual === undefined,
    
    IS_NOT_UNDEFINED: (actual) => actual !== undefined,
    
    IS_NULL: (actual) => actual === null,
    
    IS_NOT_NULL: (actual) => actual !== null,
    
    ACTUAL_EQUAL_EXPECTED: (actual, expected) => actual === expected,
    
    ACTUAL_NOT_EQUAL_EXPECTED: (actual, expected) => actual !== expected,
    
    ACTUAL_DEEP_EQUAL_EXPECTED: (actual, expected) => Algorithms.deepEquals(actual, expected)
    
};

export default Expressions;
import Algorithms from './algorithms/algorithms';

const Expressions = {
    
    IS_TRUE: (actual) => actual === true,
    
    IS_NOT_TRUE: (actual) => actual !== true,
    
    IS_FALSE: (actual) => value === false,
    
    IS_NOT_FALSE: (actual) => value !== false,
    
    IS_UNDEFINED: (actual) => value === undefined,
    
    IS_NOT_UNDEFINED: (actual) => value !== undefined,
    
    IS_NULL: (actual) => value === null,
    
    IS_NOT_NULL: (actual) => value !== null,
    
    ACTUAL_EQUAL_EXPECTED: (actual, expected) => actual === expected,
    
    ACTUAL_NOT_EQUAL_EXPECTED: (actual, expected) => actual !== expected,
    
    ACTUAL_DEEP_EQUAL_EXPECTED: (actual, expected) => Algorithms.deepEquals(actual, expected)
    
};

export default Expressions;
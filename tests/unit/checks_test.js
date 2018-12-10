import {
    TEST, 
    TEST_F, 
    CHECK_TRUE, 
    CHECK_NOT_TRUE, 
    CHECK_FALSE,
    CHECK_NOT_FALSE,
    CHECK_UNDEFINED,
    CHECK_NOT_UNDEFINED,
    CHECK_NULL,
    CHECK_NOT_NULL
} from 'BUILD/cacau.js';


TEST('CHECKS',
    TEST_F('CHECK_TRUE', () => {
        const valueTrue = true;
        return CHECK_TRUE(valueTrue);
    }),
     
//    TEST_F('CHECK_TRUE_FAILING', () => {
//        const valueTrue = false;
//        return CHECK_TRUE(valueTrue);
//    }),

    TEST_F('CHECK_FALSE', () => {
        const valueFalse = false;
        return CHECK_FALSE(valueFalse);
    }),
    
    TEST_F('CHECK_UNDEFINED', () => {
        const valueUndefined = undefined;
        return CHECK_UNDEFINED(valueUndefined);
    }),
     
    TEST_F('CHECK_NULL', () => {
        const valueNull = null;
        return CHECK_NULL(valueNull);
    }),
     
    TEST_F('CHECK_NOT_TRUE', () => {
        const valueTrue = !true;
        return CHECK_NOT_TRUE(valueTrue);
    }),
    
    TEST_F('CHECK_FALSE', () => {
        const valueFalse = !false;
        return CHECK_NOT_FALSE(valueFalse);
    }),
     
    TEST_F('CHECK_NOT_UNDEFINED', () => {
        const valueUndefined = !undefined;
        return CHECK_NOT_UNDEFINED(valueUndefined);
    }),
     
    TEST_F('CHECK_NOT_NULL', () => {
        const valueNull = !null;
        return CHECK_NOT_NULL(valueNull);
    })
);
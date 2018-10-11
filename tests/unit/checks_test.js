import {TEST, TEST_F, CHECK_TRUE, CHECK_FALSE, CHECK_UNDEFINED, CHECK_NULL} from 'BUILD/cacau.js';


TEST('CHECKS',
    TEST_F('CHECK_TRUE', () => {
        const valueTrue = true;
        return CHECK_TRUE(valueTrue);
    }),

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
    })

);
require('BUILD/cacau-1.1.0.js');

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
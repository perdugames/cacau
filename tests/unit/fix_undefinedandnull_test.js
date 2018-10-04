import {TEST, TEST_F, CHECK_ACTUAL_EQUAL_EXPECTED} from 'BUILD/cacau.js';


TEST('fixBeingUndefinedAndNull',
    TEST_F('testFixUndefined', (FIX) => {
        
        return CHECK_ACTUAL_EQUAL_EXPECTED(FIX, undefined);
    
    }, undefined),

    TEST_F('testNotPassingFixArgument', () => {
    
        return CHECK_ACTUAL_EQUAL_EXPECTED(1, 1);
    
    }),
    
    TEST_F('testFixNull', (FIX) => {
    
        return CHECK_ACTUAL_EQUAL_EXPECTED(FIX, undefined);
    
    }, null)

);
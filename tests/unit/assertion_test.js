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


TEST('Assertion.js',
    TEST_F('Assert', () => {
        const assertion = new Assertion();
        return CHECK_TRUE(valueTrue);
    })
);

/* IDEAL */
/*

import 'cacau.js';
\
TEST_SUITE('Assertion.js',

    FIXTURE_START(() => {
        const valueTrue = true;
    }),
    
    FIXTURE_END(() => {
        const valueTrue = true;
    }),
    
    TEST('Assert 1', () => {
        const valueTrue = true;
        return CHECK_TRUE(valueTrue);
    }),
    
    TEST('Assert 2', () => {
        const valueTrue = true;
        return CHECK_TRUE(valueTrue);
    }),
    
    // ...
);
*/
// SUITE E TEST SÃO DO MESMO TIPO, ENTÃO SUITES PODEM CONTER OUTRAS SUITES DE TEST, PORÉM TEST É FINAL
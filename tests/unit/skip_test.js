require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestSkipTestCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.skip('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSkipTestRecursiveCheckResultFailingEqualTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.skip('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test('Test 1', function() {
                CHECK_TRUE(false);
            });
        
            test.skip('Test 2', function() {
                CHECK_TRUE(false);
            });
            
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 2));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSkipTestRecursiveTestAfterSuiteCheckResultFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.skip('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test('Test 1', function() {
                CHECK_TRUE(false);
            });
        
            test.skip('Test 2', function() {
                CHECK_TRUE(false);
            });
            
        });
        
        test('Test 3', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSkipTestRecursiveSuiteAfterSuiteCheckResultFailingEqualTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.skip('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test('Test 1', function() {
                CHECK_TRUE(false);
            });
        
            test.skip('Test 2', function() {
                CHECK_TRUE(false);
            });
            
        });
        
        suite('Suite 3', function() {
            test.skip('Test 1', function() {
                CHECK_TRUE(false);
            });
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 2));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSkipSuiteCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.skip('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    test('Test 3', function() {
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSkipSuiteRecursiveCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.skip('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite.skip('Suite 2', function() {
            
            test.skip('Test 1', function() {
                CHECK_TRUE(false);
            });

            test('Test 2', function() {
                CHECK_TRUE(false);
            });
            
        });
        
    });
    
    test('Test 3', function() {
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSkipSuiteRecursiveCheckResultFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.skip('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test.skip('Test 1', function() {
                CHECK_TRUE(false);
            });

            test('Test 2', function() {
                CHECK_TRUE(false);
            });
            
        });
        
    });
    
    test('Test 3', function() {
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3));
    };
    runner.run(callbackRunProgress);
});
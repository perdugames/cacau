require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestTestOnlyPrecedesTestSkipCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test.skip('Test 2', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestOnlyPrecedesTestSkipRecursiveCheckResultFailingEqualTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test.skip('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test.only('Test 1', function() {
                CHECK_TRUE(false);
            });

            test.skip('Test 2', function() {
                CHECK_TRUE(false);
            });
            
            test('Test 3', function() {
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

TEST_ASYNC('TestTestSkipPrecedesSuiteOnlyCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.only('Suite 1', function() {
        
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
    
    test.skip('Test 4', function() {
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestSkipPrecedesSuiteOnlyRecursiveCheckResultFailingEqualTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.only('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test.skip('Test 2', function() {
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

TEST_ASYNC('TestTestOnlyPrecedesTestSkipSuiteTwoTestsCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test.skip('Test 2', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    test('Test 3', function() {
        CHECK_TRUE(false);
    });
    
    test.skip('Test 4', function() {
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestOnlyPrecedesSuiteSkipCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.skip('Suite 1', function() {
        
        test.only('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    test('Test 3', function() {
        CHECK_TRUE(false);
    });
    
    test.skip('Test 4', function() {
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestOnlyPrecedesSuiteSkipRecursiveCheckResultFailingEqualTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.skip('Suite 1', function() {
        
        test.only('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test.only('Test 1', function() {
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
    
    test.skip('Test 4', function() {
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 2));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSuiteOnlyPrecedesSuiteSkipCheckResultFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.skip('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    suite.only('suite 2', function() {
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });

        test('Test 3', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 4', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSuiteOnlyPrecedesSkipSuiteRecursiveCheckResultFailingEqualOne', (done) => {
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
        
        suite.only('suite 2', function() {
        
            test('Test 3', function() {
                CHECK_TRUE(false);
            });

        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSuiteOnlyPrecedesSuiteSkipRecursiveCheckResultFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.only('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite.skip('suite 2', function() {
        
            test('Test 3', function() {
                CHECK_TRUE(false);
            });

        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSuiteOnlyPrecedesSuiteSkipWithTestSkipRecursiveCheckResultFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.only('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite.skip('suite 2', function() {
        
            test.skip('Test 3', function() {
                CHECK_TRUE(false);
            });

        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestSuiteOnlyPrecedesSuiteSkipRecursiveThreeDeepCheckResultFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('suite 2', function() {
        
            test('Test 3', function() {
                CHECK_TRUE(false);
            });
            
            suite('suite 3', function() {
        
                test.skip('Test 4', function() {
                    CHECK_TRUE(false);
                });

            });

        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});
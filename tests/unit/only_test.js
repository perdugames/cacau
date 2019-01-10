require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestNotOnlyTestCheckResultFailingEqualTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 2));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlyTestCheckResultFailingEqualOne', (done) => {
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
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlyTestCheckResultFailingEqualTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function(testDone) {
            testDone( () => CHECK_TRUE(false) );
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        test.only('Test 3', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 2));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlyTestRecursiveCheckResultFailingEqualFour', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function(testDone) {
            testDone( () => CHECK_TRUE(false) );
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test.only('Test 1', function(testDone) {
                testDone( () => CHECK_TRUE(false) );
            });
            
            test('Test 2', function() {
                CHECK_TRUE(false);
            });
            
            test.only('Test 3', function() {
                CHECK_TRUE(false);
            });
            
        });
        
        test.only('Test 3', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 4));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlyTestRecursiveAndTwoSuitesInRootSuiteCheckResultFailingEqualFive', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Suite 1 - Test 1', function(testDone) {
            testDone( () => CHECK_TRUE(false) );
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test.only('Suite 2 - Test 1', function(testDone) {
                testDone( () => CHECK_TRUE(false) );
            });
            
            test('Test 2', function() {
                CHECK_TRUE(true);
            });
            
            test.only('Test 3', function() {
                CHECK_TRUE(false);
            });
            
        });
        
        test.only('Test 3', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    suite('Suite 3', function() {
        
        test.only('Suite 3 - Test 1', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 5));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlyTestRecursiveAndTwoSuitesInRootSuiteCheckResultSuitesTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Suite 1 - Test 1', function(testDone) {
            testDone( () => CHECK_TRUE(false) );
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test.only('Suite 2 - Test 1', function(testDone) {
                testDone( () => CHECK_TRUE(false) );
            });
            
            test('Test 2', function() {
                CHECK_TRUE(true);
            });
            
            test.only('Test 3', function() {
                CHECK_TRUE(false);
            });
            
        });
        
        test.only('Test 3', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    suite('Suite 3', function() {
        test('Suite 3 - Test 1', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.suites, 2));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlySuiteCheckResultFailingEqualTwo', (done) => {
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
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 2));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlySuiteRecursiveCheckResultFailingEqualFour', (done) => {
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
        
        suite('Suite 2', function() {
            
            test('Test 1', function() {
                CHECK_TRUE(false);
            });
            
        });
        
        test('Test 3', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    suite('Suite 3', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 4));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlySuiteRecursiveWithTestAfterSuiteCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);
    
    suite('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test('Test 1', function() {
                CHECK_TRUE(false);
            });
            
        });
        
        test.only('Test 3', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlySuiteRecursiveWithTwoSuiteInRootSuiteCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);
    
    suite('Suite 1', function() {
        
        test('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test('Test 2', function() {
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test('Test 1', function() {
                CHECK_TRUE(false);
            });
            
        });
        
        test('Test 3', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    suite('Suite 3', function() {
        
        test.only('Test 1', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});
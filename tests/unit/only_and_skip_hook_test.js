require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestTestOnlyPrecedesTestWithBeforeAllSkipCheckResultFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {  
        let x = 0;
        
        beforeAll(function() {
            x++;
        });
        
        test.only('Test 1', function() {
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
        });
        
        test.skip('Test 2', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestOnlyPrecedesTestWithBeforeEachSkipCheckResultFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {  
        let x = 0;
        
        beforeEach(function() {
            x = 0;
        });
        
        test.only('Test 1', function() {
            x++;
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
        });
        
        test.skip('Test 2', function() {
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestOnlyPrecedesTestRecursiveWithBeforeEachSkipCheckResultFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {  
        let x = 0;
        
        beforeEach(function() {
            x = 0;
        });
        
        test.only('Test 1', function() {
            x++;
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
        });
        
        test.skip('Test 2', function() {
            CHECK_TRUE(false);
        });
        
         suite('Suite 2', function() {
             
             beforeEach(function() {
                x++;
            });
             
             test.only('Test 1', function() {
                x++;
                CHECK_ACTUAL_EQUAL_EXPECTED(x, 2);
            });

            test('Test 2', function() {
                CHECK_TRUE(false);
            });
             
         });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestOnlyPrecedesTestWithAfterEachSkipCheckResultFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {  
        let x = 1;
        
        afterEach(function() {
            x = 0;
        });
        
        test.skip('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test.only('Test 2', function() {
            x++;
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 2);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestOnlyPrecedesTestRecursiveWithAfterEachSkipCheckResultFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {  
        let x = 1;
        
        afterEach(function() {
            x = 0;
        });
        
        test.skip('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test.only('Test 2', function() {
            x++;
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 2);
        });
        
        suite('Suite 2', function() {
             
            afterEach(function() {
                x++;
            });
            
            test.only('Test 1', function() {
                x++;
                CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
            });
             
            test.only('Test 2', function() {
                x++;
                CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
            });

            test('Test 3', function() {
                CHECK_TRUE(false);
            });
             
         });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTestOnlyPrecedesTestWithAfterAllSkipCheckXEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);
    let x = 1;
    
    suite('Suite 1', function() {  
        
        afterAll(function() {
            x = 0;
        });
        
        test.skip('Test 1', function() {
            CHECK_TRUE(false);
        });
        
        test.only('Test 2', function() {
            x++;
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 2);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(x, 0));
    };
    runner.run(callbackRunProgress);
});
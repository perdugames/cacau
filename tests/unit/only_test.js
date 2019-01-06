require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestOnlyTestCheckResultFailingEqualZero', (done) => {
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
        
        test.only('Test 1', function() {
            CHECK_TRUE(false);
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
require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestBeforeAllCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        let x = false;
        
        beforeAll(function() {
            x = true;
        });
        
        test('Teste 1', function() {
            CHECK_TRUE(x);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAsyncBeforeAllCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        let x = false;
        
        beforeAll(function(hookDone) {
            x = true;
            hookDone();
        });
        
        test('Teste 1', function() {
            CHECK_TRUE(x);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestBeforeAllRecursiveCheckRunnerResultFailing', (done) => {
        const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        let x = false;
        
        beforeAll(function() {
            x = true;
        });
        
        test('Teste 1', function() {
            CHECK_TRUE(x);
        });
        
        suite('Suite 2', function() {
            let y = 9;
            
            beforeAll(function(hookDone) {
                x = false;
                hookDone();
            });
            
            test('Teste 1', function() {
                CHECK_FALSE(x);
            });
            
            test('Teste 2', function() {
                y++;
                CHECK_ACTUAL_EQUAL_EXPECTED(y, 10);
            });
            
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});
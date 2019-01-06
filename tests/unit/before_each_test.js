require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestBeforeEarchCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        let x = 0;
        
        beforeEach(function() {
            x = 0;
        });
        
        test('Teste 1', function() {
            x++;
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
        });
        
        test('Teste 2', function(testDone) {
            x++;
            testDone(() => CHECK_ACTUAL_EQUAL_EXPECTED(x, 1));
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestBeforeEarchRecursiveCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        let x = 0;
        
        beforeEach(function() {
            x = 0;
        });
        
        test('Teste 1', function() {
            x++;
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
        });
        
        test('Teste 2', function(testDone) {
            x++;
            testDone(() => CHECK_ACTUAL_EQUAL_EXPECTED(x, 1));
        });
        
        suite('Suite 2', function() {
            
            beforeEach(function(hookDone) {
                x++;
                hookDone();
            });

            test('Teste 1', function() {
                x++;
                CHECK_ACTUAL_EQUAL_EXPECTED(x, 2);
            });
            
            test('Teste 2', function() {
                x++;
                CHECK_ACTUAL_EQUAL_EXPECTED(x, 2);
            });
            
        });
        
        test('Teste 3', function(testDone) {
            x++;
            testDone(() => CHECK_ACTUAL_EQUAL_EXPECTED(x, 1));
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});
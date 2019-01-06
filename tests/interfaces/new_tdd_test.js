require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestNewTddInterfaceCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('suite1', function() {
        let x = 0;
        beforeAll('beforeAll', function() {
            x++;
        });
        
        afterAll('afterAll', function() {
            x = undefined
        });
        
        beforeEach('beforeEach', function() {
            x++;
        });
        
        afterEach('afterEach', function(hookDone) {
            x = 0;
            hookDone();
        });
        
        test('test1', function() {
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 2);
        });

        suite('suite2', function() {
            
            test('test1', function(testDone) {
                x++;
                testDone( () => CHECK_ACTUAL_EQUAL_EXPECTED(x, 2) );
            });

        });

        test('test3', function() {
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
        });

    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
    
});
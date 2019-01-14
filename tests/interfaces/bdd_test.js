require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createBddInterface from 'LIB/interfaces/bdd';

TEST_ASYNC('TestBddInterfaceCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createBddInterface(rootSuite, global, runner);

    describe('suite1', function() {
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
        
        it('test1', function() {
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 2);
        });

        describe('suite2', function() {
            
            it('test1', function(testDone) {
                x++;
                testDone( () => CHECK_ACTUAL_EQUAL_EXPECTED(x, 2) );
            });

        });

        it('test3', function() {
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
        });

    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
    
});
require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestTimeoutTestCheckResultRunFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test('Teste 1', function() {
            this.timeout(1);
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteCheckResultRunFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        this.timeout(1);
        
        test('Teste 1', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteThreeTestsCheckResultRunFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        this.timeout(1);
        
        test('Teste 1', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        test('Teste 2', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        test('Teste 3', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteRecursiveCheckResultRunFailingEqualFive', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        this.timeout(1);
        
        test('Teste 1', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        test('Teste 2', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        suite('Suite 2', function() {
            
            test('Teste 1', function() {
                let i = 0;
                while(i < 10000000) { i++; }
                CHECK_TRUE(true);
            });

            test('Teste 2', function() {
                let i = 0;
                while(i < 10000000) { i++; }
                CHECK_TRUE(true);
            });
            
        });
        
        test('Teste 3', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 5)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteRecursiveTestReconfigureTimeoutCheckResultRunFailingEqualFour', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        this.timeout(1);
        
        test('Teste 1', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        test('Teste 2', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        suite('Suite 2', function() {
            
            test('Teste 1', function() {
                let i = 0;
                while(i < 10000000) { i++; }
                CHECK_TRUE(true);
            });

            test('Teste 2', function() {
                this.timeout(50000);
                let i = 0;
                while(i < 10000000) { i++; }
                CHECK_TRUE(true);
            });
            
        });
        
        test('Teste 3', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 4)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteRecursiveSuiteReconfigureTimeoutCheckResultRunFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        this.timeout(1);
        
        test('Teste 1', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        test('Teste 2', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        suite('Suite 2', function() {
            this.timeout(40000);
            
            test('Teste 1', function() {
                let i = 0;
                while(i < 10000000) { i++; }
                CHECK_TRUE(true);
            });

            test('Teste 2', function() {
                let i = 0;
                while(i < 10000000) { i++; }
                CHECK_TRUE(true);
            });
            
        });
        
        test('Teste 3', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteRecursiveSuiteAndTestReconfigureTimeoutCheckResultRunFailingEqualFour', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        this.timeout(1);
        
        test('Teste 1', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        test('Teste 2', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
        suite('Suite 2', function() {
            this.timeout(40000);
            
            test('Teste 1', function() {
                this.timeout(1);
                let i = 0;
                while(i < 10000000) { i++; }
                CHECK_TRUE(true);
            });

            test('Teste 2', function(testDone) {
                let i = 0;
                while(i < 10000000) { i++; }
                testDone( () => CHECK_TRUE(true) );
            });
            
            test('Teste 3', function() {
                this.timeout(0);
                let i = 0;
                while(i < 10000000) { i++; }
                CHECK_TRUE(true);
            });
            
        });
        
        test('Teste 3', function() {
            let i = 0;
            while(i < 10000000) { i++; }
            CHECK_TRUE(true);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 4)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutHookCheckResultErrorsLength', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        let x = false;
        
        beforeAll(function() {
            this.timeout(1);
            let i = 0;
            while(i < 10000000) { i++; }
            x = true;
        });
        
        test('Teste 1', function() {
            CHECK_TRUE(x);
        });
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.errors.length, 1)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutAsyncHookCheckResultErrorsLength', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        let x = false;
        
        beforeAll(function(hookDone) {
            this.timeout(1);
            let i = 0;
            while(i < 10000000) { i++; }
            x = true;
            hookDone();
        });
        
        test('Teste 1', function() {
            CHECK_TRUE(x);
        });
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.errors.length, 1)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutHookRecursiveCheckResultErrorsLength', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        this.timeout(1000000);
        let x = false;
        
        afterEach(function(hookDone) {
            this.timeout(5000);
            let i = 0;
            while(i < 10000000) { i++; }
            x = true;
            hookDone();
        });
        
        test('Teste 1', function() {
            CHECK_FALSE(x);
        });
        
        suite('Suite 2', function() {
            
            beforeEach('HookSuite2', function(hookDone) {
                this.timeout(1);
                let i = 0;
                while(i < 10000000) { i++; }
                x = true;
                hookDone();
            });

            test('Teste 1', function() {
                CHECK_TRUE(x);
            });
            
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.errors.length, 1)); 
    };
    runner.run(callbackRunProgress);
});

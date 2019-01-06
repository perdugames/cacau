require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestAfterAllCheckSuite1contextX', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);
    
    let spyX = undefined;
    
    suite('Suite 1', function() {
        let x = true;
        
        afterAll(function() {
            x = false;
            spyX = x;
        });
        
        test('Teste 1', function() {
            CHECK_TRUE(x);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_FALSE(spyX));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAsyncAfterAllCheckSuite1contextX', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);
    
    let spyX = undefined;
    
    suite('Suite 1', function() {
        let x = true;
        
        afterAll(function(hookDone) {
            x = false;
            spyX = x;
            hookDone();
        });
        
        test('Teste 1', function() {
            CHECK_TRUE(x);
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_FALSE(spyX));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAfterAllCheckOrderAfterAll', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);
    
    let spyX = undefined;
    
    suite('Suite 1', function() {
        let x = true;
        
        afterAll(function(hookDone) {
            x = false;
            spyX = x;
            hookDone();
        });
        
        test('Teste 1', function() {
            CHECK_TRUE(x);
        });
        
        suite('Suite 2', function() {
            
            afterAll(function(hookDone) {
                x = 5;
                spyX = x;
                hookDone();
            });
            
            test('Teste 1', function() {
                CHECK_TRUE(x);
            });
            
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_FALSE(spyX));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAfterAllRecursiveCheckOrderAfterAll', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);
    
    let spyX = undefined;
    
    suite('Suite 1', function() {
        let x = 0;
        
        afterAll(function(hookDone) {
            x++;
            spyX = x;
            hookDone();
        });
        
        test('Teste 1', function() {
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 0);
        });
        
        suite('Suite 2', function() {
            
            afterAll(function(hookDone) {
                x++;
                spyX = x;
                hookDone();
            });
            
            test('Teste 1', function() {
                CHECK_ACTUAL_EQUAL_EXPECTED(x, 0);
            });
            
        });
        
        test('Teste 2', function() {
            CHECK_ACTUAL_EQUAL_EXPECTED(x, 1);
        });
        
        suite('Suite 3', function() {
            
            afterAll(function() {
                x++;
                spyX = x;
            });
            
        });
        
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(spyX, 3));
    };
    runner.run(callbackRunProgress);
});
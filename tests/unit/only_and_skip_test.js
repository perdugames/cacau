require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';

TEST_ASYNC('TestOnlyAndSkipTestCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function() {
            console.log(1)
            CHECK_TRUE(false);
        });
        
        test.skip('Test 2', function() {
            console.log(2)
            CHECK_TRUE(false);
        });
        
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlyAndSkipTestRecursiveCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function() {
            console.log(1)
            CHECK_TRUE(false);
        });
        
        test.skip('Test 2', function() {
            console.log(2)
            CHECK_TRUE(false);
        });
        
        suite('Suite 2', function() {
            
            test.only('Test 1', function() {
                console.log(3)
                CHECK_TRUE(false);
            });

            test.skip('Test 2', function() {
                console.log(4)
                CHECK_TRUE(false);
            });
            
            test('Test 3', function() {
                console.log(5)
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

TEST_ASYNC('TestOnlyAndSkipSuiteCheckResultFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite.only('Suite 1', function() {
        
        test('Test 1', function() {
            console.log(1)
            CHECK_TRUE(false);
        });
        
        test.skip('Test 2', function() {
            console.log(2)
            CHECK_TRUE(false);
        });
        
    });
    
    test('Test 3', function() {
        console.log(3)
        CHECK_TRUE(false);
    });
    
    test.skip('Test 4', function() {
        console.log(4)
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestOnlyAndSkipSuiteCheckResultFailingEqualTwo', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    createNewTddInterface(rootSuite, global, runner);

    suite('Suite 1', function() {
        
        test.only('Test 1', function() { //!this.hasOnlyRecursive(child.parent.children) irá percorrer recursivamente até chegar aq da suite root por conta da verificação do Test 3 do contador.
            console.log(1)
            CHECK_TRUE(false);
        });
        
        test.skip('Test 2', function() {
            console.log(2)
            CHECK_TRUE(false);
        });
        
    });
    
    test('Test 3', function() {
        console.log(3)
        CHECK_TRUE(false);
    });
    
    test.skip('Test 4', function() {
        console.log(4)
        CHECK_TRUE(false);
    });
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
          done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 2));
    };
    runner.run(callbackRunProgress);
});
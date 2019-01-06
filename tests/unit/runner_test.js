require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';

TEST_ASYNC('TestCreateTestCheckResultRunFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const test = runner.createTest('Test 1', function() { CHECK_TRUE(true); });
    rootSuite.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0)); 
    };
    runner.run(callbackRunProgress);
    
}); 

TEST('runner_test.js',
     
    TEST_F('TestGetRunProgressCheckReturnEqualZero', () => {
        const runner = new Runner();
        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(runner.getRunProgress(), 0); 
    }),
     
    TEST_F('TestCreateSuiteRecursiveCheckResultRun', () => {
        const runner = new Runner();
        const rootSuite = runner.rootSuite;

        const suite1 = runner.createSuite('Suite 1');
        rootSuite.addChild(suite1);

        const test1 = runner.createTest('Suite 1 - Test 1', () => CHECK_TRUE(true));
        suite1.addChild(test1);

        const suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');
        suite1.addChild(suite1Suite2);

        const suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', () => CHECK_TRUE(true));
        suite1Suite2.addChild(suite2Test1);

       runner.run(() => CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(runner.result.failing, 0));
    }),

    TEST_F('TestCreateSuiteCheckParentTest', () => {
        const runner = new Runner();
        const rootSuite = runner.rootSuite;

        const suite1 = runner.createSuite('Suite 1');
        rootSuite.addChild(suite1);

        const test1 = runner.createTest('Test 1', () => CHECK_TRUE(true));
        suite1.addChild(test1);

        const testParent = test1.parent;

        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(testParent, suite1);
    })
); 

TEST_ASYNC('TestGetRunProgressCheckReturnEqual100', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const test = runner.createTest('Test 1', function(testDone) { testDone(); });
    rootSuite.addChild(test);

    const callbackRunProgress = () => done( () => {
        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(runner.getRunProgress(), 100); 
    });
    runner.run(callbackRunProgress);
    
});

TEST_ASYNC('TestAsyncCreateTestCheckResultRunFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const test = runner.createTest('Test 1', function(testDone) { testDone(); });
    rootSuite.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
    
});

TEST_ASYNC('TestAsyncCreateTestWithDoneArgErrorCheckResultErrors', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const error = new Error();

    const test = runner.createTest('Test 1', function(testDone) { testDone(error); });
    rootSuite.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
    
});

TEST_ASYNC('TestAsyncCreateTestWithDoneArgFunctionCheckResultErrors', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const error = () => {
        CHECK_TRUE(false);
    }

    const test = runner.createTest('Test 1', function(testDone) { testDone(error); });
    rootSuite.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
    
});

TEST_ASYNC('TestCreateSuiteRecursiveCheckResultFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    const test1 = runner.createTest('Suite 1 - Test 1', function(testDone) { 
        testDone();
    });
    suite1.addChild(test1);

    const suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');
    suite1.addChild(suite1Suite2);
    const suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function() { 
        CHECK_TRUE(true);
    });
    suite1Suite2.addChild(suite2Test1);
    
    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});
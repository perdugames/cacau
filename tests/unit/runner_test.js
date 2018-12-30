require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';

//suite.fixture({
//    x: "oi",
//    y: 2,
//    beforeAll: function() { this.y++; },
//    afterAll: function() { this.y--; },
//    beforeEach: function() { this.x = 'não'; },
//    afterEach: function() { this.x = 'oi'; },
//    timeout: 2000
//});

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

    const test = runner.createAsyncTest('Test 1', function(testDone) { testDone(); });
    rootSuite.addChild(test);

    const callbackRunProgress = () => done( () => {
        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(runner.getRunProgress(), 100); 
    });
    runner.run(callbackRunProgress);
    
});

TEST_ASYNC('TestAsyncCreateAsyncTestCheckResultRunFailingEqualZero', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const test = runner.createAsyncTest('Test 1', function(testDone) { testDone(); });
    rootSuite.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
    
});

TEST_ASYNC('TestAsyncCreateAsyncWithDoneArgErrorCheckResultErrors', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const error = new Error();

    const test = runner.createAsyncTest('Test 1', function(testDone) { testDone(error); });
    rootSuite.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1));
    };
    runner.run(callbackRunProgress);
    
});

TEST_ASYNC('TestAsyncCreateAsyncWithDoneArgFunctionCheckResultErrors', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const error = () => {
        CHECK_TRUE(false);
    }

    const test = runner.createAsyncTest('Test 1', function(testDone) { testDone(error); });
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
    const test1 = runner.createAsyncTest('Suite 1 - Test 1', function(testDone) { 
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

TEST_ASYNC('TestBeforeAllCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: false });
    suite1.beforeAll = runner.createHook(function(varsFixture) {
        varsFixture.x = true;
    });

    const test1 = runner.createTest('Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1.addChild(test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAsyncBeforeAllCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: false });
    suite1.beforeAll = runner.createAsyncHook(function(hookDone) {
        this.x = true;
        hookDone();
    });

    const test1 = runner.createTest('Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1.addChild(test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestBeforeAllRecursiveCheckRunnerResultFailing', (done) => {

    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: false });
    suite1.beforeAll = runner.createHook(function(varsFixture) {
        varsFixture.x = true;
    });
    const test1 = runner.createTest('Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1.addChild(test1);

    const suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');
    suite1.addChild(suite1Suite2);
    suite1Suite2.addVarsFixture({ y: 9 });
    suite1Suite2.beforeAll = runner.createAsyncHook(function(hookDone, varsFixture) {
        varsFixture.x = false;
        hookDone();
    });
    const suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function() {
        CHECK_FALSE(this.x);
    });
    suite1Suite2.addChild(suite2Test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAfterAllCheckSuite1ScopeX', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: true });
    suite1.afterAll = runner.createHook(function(varsFixture) {
        varsFixture.x = false;
    });
    const test1 = runner.createTest('Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1.addChild(test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_FALSE(suite1.scope.x));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAsyncAfterAllCheckSuite1ScopeX', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: true });
    suite1.afterAll = runner.createAsyncHook(function(hookDone) {
        this.x = false;
        hookDone();
    });
    const test1 = runner.createTest('Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1.addChild(test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_FALSE(suite1.scope.x));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAfterAllCheckOrderAfterAll', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({ x: true });
    suite1.afterAll = runner.createHook(function(varsFixture) {
        varsFixture.x = false;
    });
    const test1 = runner.createTest('Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1.addChild(test1);
    
    const suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');
    suite1.addChild(suite1Suite2);
    suite1Suite2.addVarsFixture({ y: 9 });
    suite1Suite2.afterAll = runner.createHook(function(varsFixture) {
        varsFixture.x = false;
    });
    const suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1Suite2.addChild(suite2Test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_FALSE(suite1.scope.x));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAfterAllRecursiveCheckOrderAfterAll', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    let spyX = 0;
    
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.afterAll = runner.createHook(function(varsFixture) {
        spyX = 2;
//        console.log(this.name);
    });
    const test1 = runner.createTest('Suite 1 - Test 1', function() {
        CHECK_ACTUAL_EQUAL_EXPECTED(spyX, 0);
    });
    suite1.addChild(test1);
    
    const suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');
    suite1.addChild(suite1Suite2);
    suite1Suite2.afterAll = runner.createAsyncHook(function(hookDone, varsFixture) {
        spyX = 1;
        hookDone();
//        console.log(this.name);
    });
    const suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function() {
        CHECK_ACTUAL_EQUAL_EXPECTED(spyX, 0);
    });
    suite1Suite2.addChild(suite2Test1);
    
    const test2 = runner.createTest('Suite 1 - Test 2', function() {
        CHECK_ACTUAL_EQUAL_EXPECTED(spyX, 1);
    });
    suite1.addChild(test2);
    
    
    const suite2 = runner.createSuite('Suite 2');
    rootSuite.addChild(suite2);
    suite2.afterAll = runner.createHook(function(varsFixture) {
        spyX = 3;
//        console.log(this.name);
    });

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(spyX, 3));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestBeforeEarchCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: 0 });
    suite1.beforeEach = runner.createHook(function(varsFixture) {
//        console.log(varsFixture);
        varsFixture.x = 0;
    });
    
    const test1 = runner.createTest('Test 1', function() {
//        console.log(this);
        this.x++;
        CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 1);
    });
    suite1.addChild(test1);
    
    const test2 = runner.createAsyncTest('Test 2', function(testDone) {
//        console.log(this);
        this.x++;
        testDone(() => CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 1));
    });
    suite1.addChild(test2);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestBeforeEarchRecursiveCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: 0 });
    suite1.beforeEach = runner.createHook(function(varsFixture) {
//        console.log(varsFixture);
        varsFixture.x = 0;
    });
    const test1 = runner.createTest('Test 1', function() {
//        console.log(this.x);
        this.x++;
        CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 1);
    });
    suite1.addChild(test1);
    const test2 = runner.createTest('Test 2', function() {
//        console.log(this.x);
        this.x++;
        CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 1);
    });
    suite1.addChild(test2);

    const suite2 = runner.createSuite('Suite 2');
    suite1.addChild(suite2);
   
    suite2.addVarsFixture({ y: 0 });
    suite2.beforeEach = runner.createAsyncHook(function(hookDone, varsFixture) {
        varsFixture.x++;
        hookDone();
    });
    const suite2Test1 = runner.createTest('Test 1', function() {
//        console.log(this);
        this.x++;
        CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 2);
    });
    suite2.addChild(suite2Test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
            done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAfterEarchCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: 0 });
    suite1.afterEach = runner.createHook(function(varsFixture) {
        varsFixture.x = 0;
    });

    const test1 = runner.createAsyncTest('Test 1', function(testDone) {
        this.x++;
        testDone(() => CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 1));
    });
    suite1.addChild(test1);

    const test2 = runner.createTest('Test 2', function() {
        this.x++;
        CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 1);
    });
    suite1.addChild(test2);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestAfterEarchRecursiveCheckRunnerResultFailing', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.addVarsFixture({ x: 0 });
    suite1.afterEach = runner.createHook(function(varsFixture) {
//        console.log(varsFixture.x);
        varsFixture.x++;
    });
    const test1 = runner.createTest('Test 1', function() {
//        console.log(this.x);
        this.x++;
        CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 1);
    });
    suite1.addChild(test1);
    const test2 = runner.createTest('Test 2', function() {
//        console.log(this.x);
        this.x++;
        CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 3);
    });
    suite1.addChild(test2);

    const suite2 = runner.createSuite('Suite 2');
    suite1.addChild(suite2);

    suite2.addVarsFixture({ y: 0 });
    suite2.afterEach = runner.createAsyncHook(function(hookDone, varsFixture) {
        varsFixture.x = 0;
        hookDone();
    });

    const suite2Test1 = runner.createTest('Test 1', function() {
        this.x++;
        CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 5);
    });
    suite2.addChild(suite2Test1);

    const suite2Test2 = runner.createAsyncTest('Test 2', function(testDone) {
        this.x++;
        testDone(() => CHECK_ACTUAL_EQUAL_EXPECTED(this.x, 2));
    });
    suite2.addChild(suite2Test2);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutTestCheckResultRunFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});

    const test = runner.createTest('Test 1', function() {
        this.timeout(1);
        
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1)); 
    };
    runner.run(callbackRunProgress);
}); 

TEST_ASYNC('TestTimeoutSuiteCheckResultRunFailingEqualOne', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.scope.timeout(1);

    const test = runner.createTest('Test 1', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 1)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteThreeTestsCheckResultRunFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.scope.timeout(1);

    const test1 = runner.createTest('Test 1', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test1);
    
    const test2 = runner.createTest('Test 2', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test2);
    
    const test3 = runner.createTest('Test 3', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test3);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteRecursiveCheckResultRunFailingEqualFive', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.scope.timeout(1);

    const test1 = runner.createTest('Test 1', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test1);
    
    const test2 = runner.createAsyncTest('Test 2', function(testDone) {
        let i = 0;
        while(i < 10000000) { i++; }
        testDone(() => CHECK_TRUE(true));
    });
    suite1.addChild(test2);
    
    const suite2 = runner.createSuite('Suite 2');
    suite1.addChild(suite2);

    const test3 = runner.createTest('Test 3', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite2.addChild(test3);
    const test4 = runner.createAsyncTest('Test 4', function(testDone) {
        let i = 0;
        while(i < 10000000) { i++; }
        testDone(() => CHECK_TRUE(true));
    });
    suite2.addChild(test4);
    
    const test5 = runner.createTest('Test 5', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test5);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 5)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteRecursiveTestReconfigureTimeoutCheckResultRunFailingEqualFour', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.scope.timeout(1);

    const test1 = runner.createTest('Test 1', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test1);
    
    const test2 = runner.createAsyncTest('Test 2', function(testDone) {
        let i = 0;
        while(i < 10000000) { i++; }
        testDone(() => CHECK_TRUE(true));
    });
    suite1.addChild(test2);
    
    const suite2 = runner.createSuite('Suite 2');
    suite1.addChild(suite2);

    const test3 = runner.createTest('Test 3', function() {
        this.timeout(50000);
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite2.addChild(test3);
    const test4 = runner.createAsyncTest('Test 4', function(testDone) {
        let i = 0;
        while(i < 10000000) { i++; }
        testDone(() => CHECK_TRUE(true));
    });
    suite2.addChild(test4);
    
    const test5 = runner.createTest('Test 5', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test5);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 4)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteRecursiveSuiteReconfigureTimeoutCheckResultRunFailingEqualThree', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.scope.timeout(1);

    const test1 = runner.createTest('Test 1', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test1);
    
    const test2 = runner.createAsyncTest('Test 2', function(testDone) {
        let i = 0;
        while(i < 10000000) { i++; }
        testDone(() => CHECK_TRUE(true));
    });
    suite1.addChild(test2);
    
    const suite2 = runner.createSuite('Suite 2');
    suite1.addChild(suite2);
    suite2.scope.timeout(40000);
    
    const test3 = runner.createTest('Test 3', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite2.addChild(test3);
    const test4 = runner.createAsyncTest('Test 4', function(testDone) {
        let i = 0;
        while(i < 10000000) { i++; }
        testDone(() => CHECK_TRUE(true));
    });
    suite2.addChild(test4);
    
    const test5 = runner.createTest('Test 5', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test5);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 3)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutSuiteRecursiveSuiteAndTestReconfigureTimeoutCheckResultRunFailingEqualFour', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.scope.timeout(1);

    const test1 = runner.createTest('Test 1', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test1);
    
    const test2 = runner.createAsyncTest('Test 2', function(testDone) {
        let i = 0;
        while(i < 10000000) { i++; }
        testDone(() => CHECK_TRUE(true));
    });
    suite1.addChild(test2);
    
    const suite2 = runner.createSuite('Suite 2');
    suite1.addChild(suite2);
    suite2.scope.timeout(40000);
    
    const test3 = runner.createTest('Test 3', function() {
        this.timeout(0);
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite2.addChild(test3);
    const test4 = runner.createAsyncTest('Test 4', function(testDone) {
        let i = 0;
        while(i < 10000000) { i++; }
        testDone(() => CHECK_TRUE(true));
    });
    suite2.addChild(test4);
    
    const test5 = runner.createTest('Test 5', function() {
        let i = 0;
        while(i < 10000000) { i++; }
        CHECK_TRUE(true);
    });
    suite1.addChild(test5);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 4)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutHookCheckResultErrorsLength', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.beforeAll = runner.createHook('HookSuite1', function(varsFixture) {
        this.timeout(1);  
        let i = 0;
        while(i < 10000000) { i++; }
        varsFixture.x = true;
    });
    const test = runner.createTest('Test 1', function() {
        CHECK_TRUE(true);
    });
    suite1.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.errors.length, 1)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutAsyncHookCheckResultErrorsLength', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.beforeAll = runner.createAsyncHook('HookSuite1', function(hookDone, varsFixture) {
        this.timeout(1);  
        let i = 0;
        while(i < 10000000) { i++; }
        varsFixture.x = true;
        hookDone();
    });
    const test = runner.createTest('Test 1', function() {
        CHECK_TRUE(true);
    });
    suite1.addChild(test);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.errors.length, 1)); 
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestTimeoutHookRecursiveCheckResultErrorsLength', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);
    suite1.addVarsFixture({x: 8});
    suite1.scope.timeout(1);
    suite1.afterEach = runner.createAsyncHook('HookSuite1', function(hookDone, varsFixture) {
        this.timeout(5000);  
        let i = 0;
        while(i < 10000000) { i++; }
        varsFixture.x = true;
        hookDone();
    });
    const test = runner.createTest('Test 1', function() {
        CHECK_TRUE(true);
    });
    suite1.addChild(test);
    
    const suite2 = runner.createSuite('Suite 2');
    suite1.addChild(suite2);
    suite2.addVarsFixture({x: 9});
    suite2.beforeEach = runner.createAsyncHook('HookSuite1', function(hookDone, varsFixture) {
//        this.timeout(1);  
        let i = 0;
        while(i < 10000000) { i++; }
        varsFixture.x = true;
        hookDone();
    });
    const test2 = runner.createTest('Test 2', function() {
        CHECK_TRUE(true);
    });
    suite2.addChild(test2);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.errors.length, 1)); 
    };
    runner.run(callbackRunProgress);
}); 




require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';

//const runner = new Runner();
//const suite = runner.addSuite();
//
//suite.fixture({
//    x: "oi",
//    y: 2,
//    beforeAll: function() { this.y++; },
//    afterAll: function() { this.y--; },
//    beforeEach: function() { this.x = 'não'; },
//    afterEach: function() { this.x = 'oi'; }
//});
//
//suite.values(function() {
//    
//});
//
//suite.beforeAll(function() {
//        
//});
//
//suite.afterAll(function() {
//        
//});
//
//suite.beforeEach(function() {
//        
//});
//
//suite.afterEach(function() {
//        
//});
//
//suite.test('Test 1', function() {
//        
//});
//
//suite.asyncTest('Test 2', function() {
//        
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

TEST_ASYNC('TestCreateSuiteCheckBeforeAllAlterVarsFixture', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.varsFixture = { x: false };
    suite1.beforeAll = function(varsFixture) {
        varsFixture.x = true;
    }

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

TEST_ASYNC('TestCreateSuiteRecursiveCheckBeforeAllAlterVarsFixture', (done) => {

    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.varsFixture = { x: false };
    suite1.beforeAll = function(varsFixture) {
        varsFixture.x = true;
    }
    const test1 = runner.createTest('Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1.addChild(test1);

    const suite1Suite2 = runner.createSuite('Suite 1 - Suite 2');
    suite1.addChild(suite1Suite2);
    suite1Suite2.varsFixture = { y: 9 };
    const suite2Test1 = runner.createTest('Suite 1 - Suite 2 - Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1Suite2.addChild(suite2Test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_ACTUAL_EQUAL_EXPECTED(runner.result.failing, 0));
    };
    runner.run(callbackRunProgress);
});

TEST_ASYNC('TestCreateSuiteCheckAfterAllAlterVarsFixture', (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;
    
    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    suite1.varsFixture = { x: true };
    suite1.afterAll = function(varsFixture) {
        varsFixture.x = false;
    }
    const test1 = runner.createTest('Test 1', function() {
        CHECK_TRUE(this.x);
    });
    suite1.addChild(test1);

    const callbackRunProgress = () => {
        if(runner.getRunProgress() === 100)
           done(() => CHECK_FALSE(suite1.varsFixture.x));
    };
    runner.run(callbackRunProgress);
});
//     
//    TEST_F('TestCreateSuiteCheckBeforeEarchAlterVarsFixture', () => {
//        const runner = new Runner();
//        const rootSuite = runner.rootSuite;
//
//        const suite1 = runner.createSuite('Suite 1');
//        rootSuite.addChild(suite1);
//        
//        suite1.varsFixture = { x: 0 };
//        suite1.beforeEach = function(varsFixture) {
//            varsFixture.x = 0;
//        }
//        
//        const test1 = runner.createTest('Test 1', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite1.addChild(test1);
//    
//        const test2 = runner.createTest('Test 2', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite1.addChild(test2);
//
//        const result = runner.run();
//
//        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(result, []);
//    }),
//     
//    TEST_F('TestCreateSuiteCheckBeforeEarchRecursiveAlterVarsFixture', () => {
//        const runner = new Runner();
//        const rootSuite = runner.rootSuite;
//        
//        const suite1 = runner.createSuite('Suite 1');
//        rootSuite.addChild(suite1);
//        
//        suite1.varsFixture = { x: 0 };
//        suite1.beforeEach = function(varsFixture) {
//            varsFixture.x = 0;
//        }
//        const test1 = runner.createTest('Test 1', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite1.addChild(test1);
//        const test2 = runner.createTest('Test 2', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite1.addChild(test2);
//    
//    
//        const suite2 = runner.createSuite('Suite 2');
//        suite1.addChild(suite2);
//    
//        suite2.varsFixture = { y: 0 };
//        suite2.beforeEach = function(varsFixture) {
//            varsFixture.x++;
//        }
//        const suite2Test1 = runner.createTest('Test 1', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 2);
//        });
//        suite2.addChild(suite2Test1);
//    
//    
//        const result = runner.run();
//
//        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(result, []);
//    }),
//     
//    TEST_F('TestCreateSuiteCheckAfterEarchAlterVarsFixture', () => {
//        const runner = new Runner();
//        const rootSuite = runner.rootSuite;
//
//        const suite1 = runner.createSuite('Suite 1');
//        rootSuite.addChild(suite1);
//        
//        suite1.varsFixture = { x: 0 };
//        suite1.afterEach = function(varsFixture) {
//            varsFixture.x = 0;
//        }
//        
//        const test1 = runner.createTest('Test 1', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite1.addChild(test1);
//    
//        const test2 = runner.createTest('Test 2', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite1.addChild(test2);
//
//        const result = runner.run();
//
//        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(result, []);
//    }),
//     
//    TEST_F('TestCreateSuiteCheckAfterEarchRecursiveAlterVarsFixture', () => {
//        const runner = new Runner();
//        const rootSuite = runner.rootSuite;
//        
//        const suite1 = runner.createSuite('Suite 1');
//        rootSuite.addChild(suite1);
//        
//        suite1.varsFixture = { x: 0 };
//        suite1.afterEach = function(varsFixture) {
//            varsFixture.x = 0;
//        }
//        const test1 = runner.createTest('Test 1', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite1.addChild(test1);
//        const test2 = runner.createTest('Test 2', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite1.addChild(test2);
//    
//    
//        const suite2 = runner.createSuite('Suite 2');
//        suite1.addChild(suite2);
//    
//        suite2.varsFixture = { y: 0 };
//        suite2.afterEach = function(varsFixture) {
//            varsFixture.x++;
//        }
//        const suite2Test1 = runner.createTest('Test 1', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 1);
//        });
//        suite2.addChild(suite2Test1);
//    
//        const suite2Test2 = runner.createTest('Test 2', function() {
//            this.x++;
//            CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(this.x, 2);
//        });
//        suite2.addChild(suite2Test2);
//    
//    
//        const result = runner.run();
//
//        CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(result, []);
//    }),
//    
//);
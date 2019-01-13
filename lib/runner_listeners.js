import {timestamp} from './utils';

function createRunnerListeners(runner) {
    /*
        suitesOnlys - count of suites only.
        testsOnlys - count of tests only.
        suitesSkips - count of suites skip.
        testsSkips - count of tests skip.
        suitesTotal - count of suites total.
        testsTotal - count of tests total.
        suites - count of suites run.
        tests - count of tests run.
        passing - count of passing tests.
        failing - count of failed tests.
        errors = [{
            suiteName: ,
            testName: ,
            testFunction: ,
            duration: ,
            objError:
        }, ...]
        runStart - time of the beginning of the test run.
        runEnd - time of the end of the test run.
        runDuration - time of the duration the test run.
        completedTests - Number of tests that have been completed.
    */
    const result = {
        suitesOnlys: 0, 
        testsOnlys: 0,
        suitesSkips: 0,
        testsSkips: 0,
        suitesTotal: 0,
        testsTotal: 0,
        suites: 0,
        tests: 0,
        passing: 0,
        failing: 0,
        errors: [],
        runStart: 0,
        runEnd: 0,
        runDuration: 0,
        completedTests: 0
    };
    
    runner.result = result;

    runner.eventBus.once('runStart', function() {
        if(result.suitesOnlys || result.testsOnlys || result.suitesSkips || result.testsSkips) {
            const count = {tests: 0, suites: 0};
            runner.rootSuite.countTestsAndSuitesRecursive(runner.rootSuite.children, count);
            result.suites = count.suites;
            result.tests = count.tests;
        }
        result.runStart = timestamp();
    });
    
    runner.eventBus.on('addSuite', function(options) {
        result.suitesTotal++;
        if(options.isOnly) {
            result.suitesOnlys++;
        }else if(options.isSkip) {
            result.suitesSkips++;
        }else{
            result.suites++;
        }
    });

    runner.eventBus.on('addTest', function(options) {
        result.testsTotal++;
        if(options.isOnly) {
            result.testsOnlys++;
        }else if(options.isSkip) {
            result.testsSkips++;
        }else{
            result.tests++;
        }
    });

    runner.eventBus.on('pass', function() {
        result.passing++;
    });

    runner.eventBus.on('fail', function() {
        result.failing++;
    });

    runner.eventBus.on('testEnd', function(test) {
        if(runner.abort)
            runner.eventBus.emit('runAbort');
        
        if(test.error) {
            result.errors.push({
                name: test.name,
                fn: test.fn,
                parent: test.parent,
                error: test.error
            });
            runner.eventBus.emit('fail', test);
        }else{
            runner.eventBus.emit('pass', test);
        }

        result.completedTests++;
        
        if(runner.getRunProgress() === 100)
            runner.eventBus.emit('runEnd');
        else
            runner.callbackRunProgress();
    });
    
    runner.eventBus.on('suiteEnd', function(suite) {
        if(suite.afterAll)
            suite.afterAll.run(suite, () => {
                if(suite.name !== 'root')
                    suite.parent.childNext();
            });
        else
            if(suite.name !== 'root')
                suite.parent.childNext(); 
    });
    
    runner.eventBus.once('runAbort', function(obj) {
        if(obj)
            result.errors.push({
                name: obj.name,
                fn: obj.fn,
                parent: obj.parent,
                error: obj.error
            });
        runner.abort = true;
        runner.eventBus.emit('runEnd');
    });
    
    runner.eventBus.once('runEnd', function() {
        result.runEnd = timestamp();
        result.runDuration = result.runEnd - result.runStart;
        runner.callbackRunProgress();
        runner.eventBus.emit('end');
    });
    
}

export default createRunnerListeners;
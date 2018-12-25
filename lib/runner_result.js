function createRunnerResultCollector(runner) {
    /*
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
        runStart: 0,
        suites: 0, 
        tests: 0,
        passing: 0,
        failing: 0,
        errors: [],
        runEnd: 0,
        runDuration: 0,
        completedTests: 0
    };
    
    runner.result = result;

    runner.eventBus.once('runStart', function() {
        result.runStart = timestamp();
    });
    
    runner.eventBus.on('addSuite', function() {
        result.suites++;
    });

    runner.eventBus.on('addTest', function() {
        result.tests++;
    });

    runner.eventBus.on('pass', function() {
        result.passing++;
    });

    runner.eventBus.on('fail', function() {
        result.failing++;
    });

    runner.eventBus.on('testEnd', function(test) {
         if(test.error) {
            result.errors.push({
                name: test.name,
                testFunction: test.testFunction,
                parent: test.parent,
                error: test.error
            });
             runner.eventBus.emit('fail');
         }else{
             runner.eventBus.emit('pass');
         }
        
        result.completedTests++;
        
        if(runner.getRunProgress() === 100)
            runner.eventBus.emit('runEnd');
        
        runner.callbackRunProgress();
    });

    runner.eventBus.once('runEnd', function() {
        result.runEnd = timestamp();
        result.runDuration = result.runEnd - result.runStart;
    });
    
}

function timestamp () {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

export default createRunnerResultCollector;
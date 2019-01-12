import Common from './common';
/*
    // New-TDD Interface Example:
    
    suite('suite1', function() {

        test('test1', function() {

        });

        suite('suite2', function() {

            test('test1', function() {

            });

        });

    });
*/
function createNewTddInterface(rootSuite, context, runner) {
    const suites = [rootSuite];
    const common = new Common(suites, runner);
    
    context.beforeAll = function(...args) {
        common.beforeAll(...args);
    }
    
    context.afterAll = function(...args) {
        common.afterAll(...args);
    }
    
    context.beforeEach = function(...args) {
        common.beforeEach(...args);
    }
    
    context.afterEach = function(...args) {
        common.afterEach(...args);
    }

    context.suite = function(name, fn) {
        return common.createSuite(name, fn);
    }
    
    context.suite.only = function(name, fn) {
        return common.createSuite(name, fn, {isOnly: true});
    }
    
    context.suite.skip = function(name, fn) {
        return common.createSuite(name, fn, {isSkip: true});
    }

    context.test = function(name, fn) {
        return common.createTest(name, fn);
    }
    
    context.test.only = function(name, fn) {
        return common.createTest(name, fn, {isOnly: true});
    }
    
    context.test.skip = function(name, fn) {
        return common.createTest(name, fn, {isSkip: true});
    }

}

export default createNewTddInterface;
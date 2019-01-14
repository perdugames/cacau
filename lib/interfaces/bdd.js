import Common from './common';

function createBddInterface(rootSuite, context, runner) {
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

    context.describe = function(name, fn) {
        return common.createSuite(name, fn);
    }
    
    context.describe.only = function(name, fn) {
        return common.createSuite(name, fn, {isOnly: true});
    }
    
    context.describe.skip = function(name, fn) {
        return common.createSuite(name, fn, {isSkip: true});
    }

    context.it = function(name, fn) {
        return common.createTest(name, fn);
    }
    
    context.it.only = function(name, fn) {
        return common.createTest(name, fn, {isOnly: true});
    }
    
    context.it.skip = function(name, fn) {
        return common.createTest(name, fn, {isSkip: true});
    }

}

export default createBddInterface;
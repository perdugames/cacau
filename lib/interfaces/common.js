function Common(suites, runner) {
    this.suites = suites;
    this.runner = runner;
}

Common.prototype.beforeAll = function(...args) {
    this.suites[0].createBeforeAll(...args);
}

Common.prototype.afterAll = function(...args) {
    this.suites[0].createAfterAll(...args);
}

Common.prototype.beforeEach = function(...args) {
    this.suites[0].createBeforeEach(...args);
}

Common.prototype.afterEach = function(...args) {
    this.suites[0].createAfterEach(...args);
}

Common.prototype.createSuite = function(name, fn, options={isOnly: false, isSkip: false}) {
    const suite = this.runner.createSuite(name, fn, options);
    if(this.suites[0].isOnly)
        suite.isOnly = true;
    if(this.suites[0].isSkip)
        suite.isSkip = true;
    this.suites[0].addChild(suite);

    if(options.isOnly)
        suite.isOnly = true;
    if(options.isSkip)
        suite.isSkip = true;
    
    this.suites.unshift(suite);
    fn.call(suite.context);
    this.suites.shift();
    return suite;
}

Common.prototype.createTest = function(name, fn, options={isOnly: false, isSkip: false}) {
    const test = this.runner.createTest(name, fn, options);
    if(this.suites[0].isOnly)
        test.isOnly = true;
    if(this.suites[0].isSkip)
        test.isSkip = true;
    this.suites[0].addChild(test);

    if(options.isOnly)
        test.isOnly = true;
    if(options.isSkip)
        test.isSkip = true;
    
    return test;
}

export default Common;
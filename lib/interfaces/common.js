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

Common.prototype.createSuite = function(name, fn) {
    const suite = this._createSuite(name, fn);
    this.suites.unshift(suite);
    fn.call(suite.context);
    this.suites.shift();
    return suite;
}

Common.prototype.createOnlySuite = function(name, fn) {
    const suite = this._createSuite(name, fn);    
    suite.isOnly = true;
    this.suites.unshift(suite);
    fn.call(suite.context);
    this.suites.shift();
    return suite;
}

Common.prototype.createTest = function(name, fn) {
    return this._createTest(name, fn);
}

Common.prototype.createOnlyTest = function(name, fn) {
    const test = this._createTest(name, fn);    
    test.isOnly = true;
    return test;
}

Common.prototype._createSuite = function(name, fn) {
    const suite = this.runner.createSuite(name, fn);
    if(this.suites[0].isOnly)
        suite.isOnly = true;
    this.suites[0].addChild(suite);
    return suite;
}

Common.prototype._createTest = function(name, fn) {
    const test = this.runner.createTest(name, fn);
    if(this.suites[0].isOnly)
        test.isOnly = true;
    this.suites[0].addChild(test);
    return test;
}

export default Common;
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
    const suite = this.runner.createSuite(name, fn);
    this.suites[0].addChild(suite);
    this.suites.unshift(suite);
    fn.call(suite.context);
    this.suites.shift();
    return suite;
}

Common.prototype.createTest = function(name, fn) {
    const test = this.runner.createTest(name, fn);
    this.suites[0].addChild(test);
    return test;
}

Common.prototype.createOnlyTest = function(name, fn) {
    const test = this.runner.createTest(name, fn);
    this.suites[0].addOnlyChild(test);
    return test;
}

export default Common;
import Suite from './suite';
import Test from './test';

function Runner() {
    this.rootSuite = this.createSuite('root');
}

Runner.prototype.createSuite = function(name) {
    return new Suite(name);
}

Runner.prototype.createTest = function(name, testFunction) {
    return new Test(name, testFunction);
}

Runner.prototype.run = function() {
    return this.rootSuite.run();
}

export default Runner;

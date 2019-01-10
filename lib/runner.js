import Suite from './suite';
import Test from './test';
import EventBus from '@perdugames/eventbus';
import createRunnerListeners from './runner_listeners';
import Runnable from './runnable';

function Runner() {
    this.eventBus = new EventBus();
    Suite.prototype.eventBus = this.eventBus;
    Runnable.prototype.eventBus = this.eventBus;
    this.rootSuite = this.createSuite('root', function() {});
    this.callbackRunProgress = undefined;
    this.result = {};
    createRunnerListeners(this);
}

Runner.prototype.createSuite = function(name, fn) {
    this.eventBus.emit('addSuite');
    return new Suite(name, fn);
}

Runner.prototype.createTest = function(name, fn) {
    this.eventBus.emit('addTest');
    return new Test(name, fn);
}

Runner.prototype.getRunProgress = function() {
    if(this.result.tests === 0)
        return 0;
    
    return Math.round(this.result.completedTests / (this.result.tests / 100));
}

Runner.prototype.run = function(callbackRunProgress) {
    this.callbackRunProgress = callbackRunProgress;
    this.eventBus.emit('runStart');
//    console.log(this.rootSuite)
    if(this.rootSuite.hasOnlyRecursive(this.rootSuite.children)) {
        const count = {tests: 0, suites: 0};
        this.rootSuite.countOnlysRecursive(this.rootSuite.children, count);
        this.eventBus.emit('only', count);
//        console.log(count)
    }
    
    this.rootSuite.run();
}

export default Runner;

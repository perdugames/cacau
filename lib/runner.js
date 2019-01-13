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

Runner.prototype.createSuite = function(name, fn, options={isOnly: false, isSkip: false}) {
    this.eventBus.emit('addSuite', options);
    return new Suite(name, fn);
}

Runner.prototype.createTest = function(name, fn, options={isOnly: false, isSkip: false}) {
    this.eventBus.emit('addTest', options);
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
    this.rootSuite.run();
}

export default Runner;

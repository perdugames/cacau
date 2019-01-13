import Suite from './suite';
import Test from './test';
import EventBus from '@perdugames/eventbus';
import createRunnerListeners from './runner_listeners';
import Runnable from './runnable';

function Runner() {
    this.eventBus = new EventBus();
    Runnable.prototype.eventBus = this.eventBus;
    this.rootSuite = this.createSuite('root', function() {});
    this.callbackRunProgress = undefined;
    this.abort = false;
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
    if(this.abort)
        return 100;
       
    if(this.result.tests === 0)
        return 0;
    
    return Math.round(this.result.completedTests / (this.result.tests / 100));
}

Runner.prototype.on = function(eventName, fn) {
    this.eventBus.on(eventName, fn);
}

Runner.prototype.once = function(eventName, fn) {
    this.eventBus.once(eventName, fn);
}

Runner.prototype.run = function(callbackRunProgress=function() {}) {
    this.callbackRunProgress = callbackRunProgress;
    this.eventBus.emit('runStart');
    this.rootSuite.run();
}

export default Runner;

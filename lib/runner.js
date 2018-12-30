import Suite from './suite';
import Test from './test';
import AsyncTest from './async_test';
import EventBus from '@perdugames/eventbus';
import createRunnerResultCollector from './runner_result';
import Hook from './hook';
import AsyncHook from './async_hook';

function Runner() {
    this.eventBus = new EventBus();
    Suite.prototype.eventBus = this.eventBus;
    Test.prototype.eventBus = this.eventBus;
    AsyncTest.prototype.eventBus = this.eventBus;
    Hook.prototype.eventBus = this.eventBus;
    AsyncHook.prototype.eventBus = this.eventBus;
    this.rootSuite = this.createSuite('root');
    this.callbackRunProgress = undefined;
    this.result = {};
    createRunnerResultCollector(this);
}

Runner.prototype.createSuite = function(name) {
    this.eventBus.emit('addSuite');
    return new Suite(name);
}

Runner.prototype.createHook = function(...args) {
    return new Hook(...args);
}

Runner.prototype.createAsyncHook = function(...args) {
    return new AsyncHook(...args);
}

Runner.prototype.createTest = function(name, testFunction) {
    this.eventBus.emit('addTest');
    return new Test(name, testFunction);
}

Runner.prototype.createAsyncTest = function(name, testFunction) {
    this.eventBus.emit('addTest');
    return new AsyncTest(name, testFunction);
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

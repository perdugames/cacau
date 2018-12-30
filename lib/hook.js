import Scope from './scope';

function Hook(...args) {
    this.name = (typeof args[0] === 'string')? args[0] : 'Anonymous';
    this.fn = (typeof args[0] === 'string')? args[1] : args[0];
    this.parent = undefined;
    this.scope = new Scope();
    this.error = undefined;
}

Hook.prototype.run = function(suite, posHookFunction) {
    try {
        this.parent = suite;
        suite.inheritTimeoutLimit(this);
        suite.scope._ctx = this.scope;
        this.fn.call(suite.scope, suite.scope);
        const timer = this.scope._timer;
        if(timer.isExtrapolated()) {
            this.error = new Error('TimeoutError: Time(' + timer.limit + ') extrapolated!')
            this.eventBus.emit('runEnd', this);
        } 
        posHookFunction();
    } catch(error) {
        this.error = error;
        this.eventBus.emit('runEnd', this);
    } 
}

export default Hook;
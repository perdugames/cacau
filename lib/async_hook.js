import Scope from './scope';

function AsyncHook(...args) {
    this.name = (typeof args[0] === 'string')? args[0] : 'Anonymous';
    this.fn = (typeof args[0] === 'string')? args[1] : args[0];
    this.parent = undefined;
    this.scope = new Scope();
    this.error = undefined;
    this.posHookFunction = undefined;
}

AsyncHook.prototype.run = function(suite, posHookFunction) {
    try {
        this.parent = suite;
        this.posHookFunction = posHookFunction;
        suite.inheritTimeoutLimit(this);
        suite.scope._ctx = this.scope;
        this.fn.call(suite.scope, this.done.bind(this), suite.scope);
    } catch(error) {
        this.error = error;
        this.eventBus.emit('runEnd', this);
    } 
}

AsyncHook.prototype.done = function() {
    try {
        const timer = this.scope._timer;
        if(timer.isExtrapolated()) {
            this.error = new Error('TimeoutError: Time(' + timer.limit + ') extrapolated!')
            this.eventBus.emit('runEnd', this);
        }
        this.posHookFunction();
    } catch(error) {
        throw error;
    }
}

export default AsyncHook;
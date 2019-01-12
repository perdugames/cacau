import Runnable from './runnable';
import {inherits} from './utils';

function Test(...args) {
    Runnable.call(this, ...args);
    this.isOnly = false;
    this.isSkip = false;
}

inherits(Test, Runnable);

Test.prototype.run = function() {
    this.tryFn(() => {
        this.parent.parentsBeforeEach.first();
        this.parent.executeSuitesFunctionEach(this.parent, this.parent.parentsBeforeEach, () => {
            this.tryFn(() => {
                if(this.fn.length >= 1) {
                    this.fn(this.done.bind(this));
                }else{
                    this.fn();
                    this.afterRun();
                }
            });
        });
    });
}

Test.prototype.done = function() {
    this.tryFn(() => {
        if(arguments[0] instanceof Error)
            this.error = arguments[0];
        else if(typeof arguments[0] === 'function')
            arguments[0]();
        this.afterRun();
    });
}

Test.prototype.tryFn = function(fn) {
    try {
        fn();
    } catch(error) {
        this.error = error;
        this.afterRun();
    }
}

Test.prototype.afterRun = function() {
    this.parent.parentsAfterEach.first();
    this.parent.executeSuitesFunctionEach(this.parent, this.parent.parentsAfterEach, () => {
        this.parent.childNext();
        this.limitWasExtrapolated();
        this.eventBus.emit('testEnd', this);
    });
}

export default Test;
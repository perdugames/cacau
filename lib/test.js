import Runnable from './runnable';
import {inherits} from './utils';

function Test(...args) {
   Runnable.call(this, ...args);
}

inherits(Test, Runnable);

Test.prototype.run = function() {
    try {
        this.parent.executeSuitesFunctionEach(this.parent, this.parent.parentsBeforeEach, () => {
            if(this.fn.length >= 1) {
                this.fn(this.done.bind(this));
            }else{
                this.fn();
                this.afterRun();
            }
        });
    } catch(error) {
        //console.log('run emit');
        this.error = error;
        this.eventBus.emit('testEnd', this);
    }
}

Test.prototype.afterRun = function() {
    this.parent.executeSuitesFunctionEach(this.parent, this.parent.parentsAfterEach, () => {
        this.parent.childNext();
        this.limitWasExtrapolated();
        this.eventBus.emit('testEnd', this);
    });
}

Test.prototype.done = function() {
    try {
        //console.log('done emit');
        if(arguments[0] instanceof Error)
            this.error = arguments[0];
        else if(typeof arguments[0] === 'function')
            arguments[0]();
        this.afterRun();
    } catch(error) {
        //console.log('catch done emit');
        this.error = error;
        this.eventBus.emit('testEnd', this);
    }
}

export default Test;
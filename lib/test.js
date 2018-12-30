import Scope from './scope';

function Test(name, testFunction, parent) {
    this.name = name;
    this.testFunction = testFunction;
    this.parent = parent;
    this.error = undefined;
    this.scope = new Scope();
}

Test.prototype.run = function() {
    try {
        this.parent.executeSuitesFunctionEach(this.parent, this.parent.parentsBeforeEach, () => {
            this.testFunction();
            this.parent.executeSuitesFunctionEach(this.parent, this.parent.parentsAfterEach, () => {
                this.parent.childNext();
                const timer = this.scope._timer;
                if(timer.isExtrapolated())
                    this.error = new Error('TimeoutError: Time(' + timer.limit + ') extrapolated!');
                this.eventBus.emit('testEnd', this);
            });
        });
    } catch(error) {
        this.error = error;
        this.eventBus.emit('testEnd', this);
    }
}

export default Test;
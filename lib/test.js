function Test(name, testFunction, parent) {
    this.name = name;
    this.testFunction = testFunction;
    this.parent = parent;
    this.error = undefined;
}

Test.prototype.run = function() {
    try {
        this.parent.executeSuitesFunctionEach(this.parent.parentsBeforeEach);
        this.testFunction();
        this.parent.executeSuitesFunctionEach(this.parent.parentsAfterEach);
    } catch(error) {
        this.error = error;
        this.eventBus.emit('testEnd', this);
    }
}

export default Test;
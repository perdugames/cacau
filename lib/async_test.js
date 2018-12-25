function AsyncTest(name, testFunction, parent) {
    this.name = name;
    this.testFunction = testFunction;
    this.parent = parent;
    this.error = undefined;
}

AsyncTest.prototype.run = function(suiteEnd) {
    try {
        this.parent.executeSuitesFunctionEach(this.parent.parentsBeforeEach);
        this.testFunction(this.done.bind(this));
        this.parent.executeSuitesFunctionEach(this.parent.parentsAfterEach);
    } catch(error) {
        //console.log('run emit');
        this.error = error;
        this.eventBus.emit('testEnd', this);
    }
}

AsyncTest.prototype.done = function() {
    try {
        //console.log('done emit');
        if(arguments[0] instanceof Error)
            this.error = arguments[0];
        else if(typeof arguments[0] === 'function')
            arguments[0]();
        
        this.parent.childNext();
        this.eventBus.emit('testEnd', this);
    } catch(error) {
        //console.log('catch done emit');
        this.error = error;
        this.eventBus.emit('testEnd', this);
    }
}

export default AsyncTest;


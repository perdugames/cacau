function Test(name, testFunction, parent) {
    this.name = name;
    this.testFunction = testFunction;
    this.parent = parent;
}

Test.prototype.run = function() {
    try {
        const parentsBeforeEach = [];
        getBeforeEachRecursive(this.parent, parentsBeforeEach);
        executeSuitesFunctionEach(parentsBeforeEach, this.parent.varsFixture);
        
        this.testFunction();
        
        const parentsAfterEach = [];
        getAfterEachRecursive(this.parent, parentsAfterEach);
        executeSuitesFunctionEach(parentsAfterEach, this.parent.varsFixture);
        
    } catch(error) {
        return error;
    }
}

const getBeforeEachRecursive = (suite, parents) => {
    if(suite.beforeEach)
        parents.unshift(suite.beforeEach);
        
    if(suite.name !== 'root')
        getBeforeEachRecursive(suite.parent, parents);
};

const getAfterEachRecursive = (suite, parents) => {
    if(suite.afterEach)
        parents.unshift(suite.afterEach);
        
    if(suite.name !== 'root')
        getAfterEachRecursive(suite.parent, parents);
};

const executeSuitesFunctionEach = (parents, varsFixture) => {
    for(let i = 0; i < parents.length; i++)
        parents[i](varsFixture);
}

export default Test;
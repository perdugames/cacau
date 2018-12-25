function Suite(name, parent) {
    this.name = name;
    this.parent = parent;
    this.children = [];
    this.varsFixture = {};
    this.beforeAll = undefined;
    this.afterAll = undefined;
    this.beforeEach = undefined;
    this.afterEach = undefined;
    this.parentsBeforeEach = [];
    this.parentsAfterEach = [];
}

Suite.prototype.addChild = function(child) {
    child.parent = this;
    this.children.push(child);
}

Suite.prototype.run = function() {
    let errors = [];
    
    this.getBeforeEachRecursive(this);
    this.getAfterEachRecursive(this);
    
    if(this.beforeAll)
        this.beforeAll(this.varsFixture);

    for(let i = 0; i < this.children.length; i++) {
        const child = this.children[i];
        
        if(child.constructor.name === 'Test' || child.constructor.name === 'AsyncTest') {
            const e = child.testFunction.bind(this.varsFixture);
            child.testFunction = e;
        }else{
            assignDeepEnumerablesToOut(this.varsFixture, child.varsFixture);
        }
        
        const resultError = child.run();
        if(resultError)
            Array.isArray(resultError) ? errors = errors.concat(resultError) : errors.push(resultError);
    }
    
     if(this.afterAll)
        this.afterAll(this.varsFixture);

    return errors;
}

Suite.prototype.getBeforeEachRecursive = function(suite) {
    if(suite.beforeEach)
        suite.parentsBeforeEach.unshift(suite.beforeEach);
        
    if(suite.name !== 'root')
        this.getBeforeEachRecursive(suite.parent);
}

Suite.prototype.getAfterEachRecursive = function(suite) {
    if(suite.afterEach)
        suite.parentsAfterEach.unshift(suite.afterEach);
        
    if(suite.name !== 'root')
        this.getAfterEachRecursive(suite.parent);
};

Suite.prototype.executeSuitesFunctionEach = function(parentsEach) {
    for(let i = 0; i < parentsAfterEach.length; i++)
        parentsEach[i](this.varsFixture);
}

const assignDeepEnumerablesToOut = (obj, out) => {
    const props = Object.keys(obj);
    let key, v, o;
    for(let i = 0; i < props.length; i++) {
        key = props[i];
        v = obj[key];
        out[key] = isObject(out[key]) ? out[key] : {};
        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;
    }  
};

const isObject = (val) => {
    return (typeof val === 'object' && val !== null);
};


export default Suite;
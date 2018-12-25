import ArrayIterator from './array_iterator.js';

function Suite(name, parent) {
    this.name = name;
    this.parent = parent;
    this.varsFixture = {};
    this.beforeAll = undefined;
    this.afterAll = undefined;
    this.beforeEach = undefined;
    this.afterEach = undefined;
    this.parentsBeforeEach = [];
    this.parentsAfterEach = [];
    this.children = new ArrayIterator();
}

Suite.prototype.addChild = function(child) {
    child.parent = this;
    this.children.add(child);
}

Suite.prototype.run = function() {    
    this.getBeforeEachRecursive(this);
    this.getAfterEachRecursive(this);
    
    if(this.beforeAll)
        this.beforeAll(this.varsFixture);
    
    if(this.children.itens.length <= 0)
        this.eventBus.emit('suiteEnd', this);
    else
        this.childRun(this.children.getCurrent());

//    for(this.children.first(); !this.children.isDone(); this.children.next())
//        this.childRun(this.children.getCurrent());
}

Suite.prototype.childRun = function(child) {
    if(child.constructor.name === 'Test' || child.constructor.name === 'AsyncTest') {
        const e = child.testFunction.bind(this.varsFixture);
        child.testFunction = e;
    }else{
        assignDeepEnumerablesToOut(this.varsFixture, child.varsFixture);
    }
    child.run();
}

Suite.prototype.childNext = function() {
    this.children.next();
    if(!this.children.isDone())
        this.childRun(this.children.getCurrent());
    else
        this.eventBus.emit('suiteEnd', this);
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
    for(let i = 0; i < parentsEach.length; i++)
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
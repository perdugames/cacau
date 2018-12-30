import ArrayIterator from './array_iterator';
import {assignDeepEnumerablesToOut} from './utils';
import Scope from './scope';

function Suite(name, parent) {
    this.name = name;
    this.parent = parent;
    this.scope = new Scope();
    this.beforeAll = undefined;
    this.afterAll = undefined;
    this.beforeEach = undefined;
    this.afterEach = undefined;
    this.parentsBeforeEach = new ArrayIterator();
    this.parentsAfterEach = new ArrayIterator();
    this.children = new ArrayIterator();
}

Suite.prototype.addChild = function(child) {
    child.parent = this;
    this.children.addPush(child);
}

Suite.prototype.run = function() {
    this.getBeforeEachRecursive(this, this.parentsBeforeEach);
    this.getAfterEachRecursive(this, this.parentsAfterEach);

    if(this.beforeAll)
        this.beforeAll.run(this, this.init.bind(this));
    else
        this.init();
}

Suite.prototype.init = function() {
    if(this.children.itens.length <= 0)
        this.eventBus.emit('suiteEnd', this);
    else
        this.childRun(this.children.getCurrent());
}

Suite.prototype.addVarsFixture = function(obj) {
    assignDeepEnumerablesToOut(obj, this.scope);
}

Suite.prototype.childRun = function(child) {
    this.inheritTimeoutLimit(child);
    if(child.constructor.name === 'Test' || child.constructor.name === 'AsyncTest') {
        this.scope._ctx = child.scope;
        const e = child.testFunction.bind(this.scope);
        child.testFunction = e;
    }else{
        assignDeepEnumerablesToOut(this.scope, child.scope);
    }   
    child.run();
}

Suite.prototype.inheritTimeoutLimit = function(child) {
    if(this.scope._timer.limit !== 0 && child.scope._timer.limit === -1)
        child.scope.timeout(this.scope._timer.limit);
}

Suite.prototype.childNext = function() {
    this.children.next();
    if(this.children.isDone()) {
        this.eventBus.emit('suiteEnd', this);
    }else{
        this.childRun(this.children.getCurrent());
    }
}

Suite.prototype.getBeforeEachRecursive = function(suite, parents) {
    if(suite.beforeEach)
        parents.addUnshift(suite.beforeEach);
        
    if(suite.name !== 'root')
        this.getBeforeEachRecursive(suite.parent, parents);
}

Suite.prototype.getAfterEachRecursive = function(suite, parents) {
    if(suite.afterEach)
        parents.addPush(suite.afterEach);
        
    if(suite.parent)
        this.getAfterEachRecursive(suite.parent, parents);
};

Suite.prototype.executeSuitesFunctionEach = function(scope, parentsEach, posHookFunction) {
    if(parentsEach.isDone())
        return posHookFunction();
    
    if(parentsEach.isLast())
        parentsEach.getCurrent().run(scope, posHookFunction);
    else
        parentsEach.getCurrent().run(scope, () => {
            parentsEach.next();
            this.executeSuitesFunctionEach(scope, parentsEach, posHookFunction);
        });  
}

export default Suite;
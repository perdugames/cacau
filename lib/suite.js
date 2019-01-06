import ArrayIterator from './array_iterator';
import {assignDeepEnumerablesToOut} from './utils';
import Context from './context';
import Hook from './hook';
import Runnable from './runnable';
import {inherits} from './utils';

function Suite(...args) {
    Runnable.call(this, ...args);
    this.beforeAll = undefined;
    this.afterAll = undefined;
    this.beforeEach = undefined;
    this.afterEach = undefined;
    this.parentsBeforeEach = new ArrayIterator();
    this.parentsAfterEach = new ArrayIterator();
    this.children = new ArrayIterator();
    this.childrenOnlys = new ArrayIterator();
}

inherits(Suite, Runnable);

Suite.prototype.addChild = function(child) {
    child.parent = this;
    this.children.addPush(child);
}

Suite.prototype.addOnlyChild = function(child) {
    child.parent = this;
    this.childrenOnlys.addPush(child);
}

Suite.prototype.createBeforeAll = function(...args) {
    this.beforeAll = new Hook(...args);
}

Suite.prototype.createAfterAll = function(...args) {
    this.afterAll = new Hook(...args);
}

Suite.prototype.createBeforeEach = function(...args) {
    this.beforeEach = new Hook(...args);
}

Suite.prototype.createAfterEach = function(...args) {
    this.afterEach = new Hook(...args);
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
    if(this.childrenOnlys.itens.length) {
        this.children = this.childrenOnlys;
        const count = {tests: 0, suites: 1};
        this.countOnlys(this.childrenOnlys, count);
        this.eventBus.emit('only', count);
    }

    if(this.children.itens.length <= 0)
        this.eventBus.emit('suiteEnd', this);
    else
        this.childRun(this.children.getCurrent());
}

Suite.prototype.countOnlys = function(childrenOnlys, count) {
    for(childrenOnlys.first(); !childrenOnlys.isDone(); childrenOnlys.next()) {
        const child = childrenOnlys.getCurrent();
        if(child.constructor.name === 'Test') {
            count.tests++;
        }else if(child.constructor.name === 'Suite') {
            count.suites++;
            this.countOnlys(child.childrenOnlys, count);
        }
            
    }
    childrenOnlys.first();
}

Suite.prototype.childRun = function(child) {
    this.inheritTimeoutLimit(child);
    if(child.constructor.name === 'Test') {
        const e = child.fn.bind(child.context);
        child.fn = e;
    }else{
        assignDeepEnumerablesToOut(this.context, child.context);
    }   
    child.run();
}

Suite.prototype.inheritTimeoutLimit = function(child) {
    if(this.context._timer.limit > 0 && child.context._timer.limit === -1)
        child.context.timeout(this.context._timer.limit);
}

Suite.prototype.childNext = function() {
    this.children.next();
    if(this.children.isDone())
        this.eventBus.emit('suiteEnd', this);
    else
        this.childRun(this.children.getCurrent());
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

Suite.prototype.executeSuitesFunctionEach = function(context, parentsEach, posHookFunction) {
    if(parentsEach.isDone())
        return posHookFunction();
    
    if(parentsEach.isLast())
        parentsEach.getCurrent().run(context, posHookFunction);
    else
        parentsEach.getCurrent().run(context, () => {
            parentsEach.next();
            this.executeSuitesFunctionEach(context, parentsEach, posHookFunction);
        });  
}

export default Suite;
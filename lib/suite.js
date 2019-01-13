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
    this.isOnly = false;
    this.isSkip = false;
}

inherits(Suite, Runnable);

Suite.prototype.addChild = function(child) {
    child.parent = this;
    this.children.addPush(child);
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
    this.fillChildrenOnlys(this.children);
    if(!this.childrenOnlys.isEmpty())
        this.children = this.childrenOnlys;
    this.removeChildrenSkip(this.children);
    if(this.children.isEmpty())
        this.eventBus.emit('suiteEnd', this);
    else
        this.childRun(this.children.getCurrent());
}

Suite.prototype.countTestsAndSuitesRecursive = function(children, count) {
    children.itensForEach((child) => {
        if(this.testPrecedenceOnlySkipRules(child)) {
            count.tests++;
        }else if(this.suitePrecedenceOnlySkipRules(child)) {
            count.suites++;
        }
        if(child.type() === 'Suite')
            this.countTestsAndSuitesRecursive(child.children, count);
    });
}

Suite.prototype.testPrecedenceOnlySkipRules = function(child) {
    if(child.type() === 'Test')
         return child.isOnly && !child.isSkip ||
            (!child.isSkip && !this.parentHasOnlyRecursive(child)) ||
            (child.isOnly && child.parent.isSkip);
}
    
Suite.prototype.suitePrecedenceOnlySkipRules = function(child) {
    if(child.type() === 'Suite')
        return child.isOnly || 
            !child.isSkip && !this.parentHasOnlyRecursive(child) ||
            this.hasOnlyRecursive(child.children);
}

Suite.prototype.fillChildrenOnlys = function(children) {
    children.itensForEach((child) => {
        if(child.type() === 'Test') {
            if(child.isOnly)
                this.childrenOnlys.addPush(child);
        }else if(child.type() === 'Suite') {
            if(this.hasOnlyRecursive(child.children) || child.isOnly)
                this.childrenOnlys.addPush(child);
        }
    })
}

Suite.prototype.removeChildrenSkip = function(children) {
    children.itensForEach((child) => {
        if(child.type() === 'Test') {
            if(child.isSkip && !this.hasOnlyRecursive(children))
                this.children.removeItem(child);
        }else if(child.type() === 'Suite') {
            if(child.isSkip && !this.hasOnlyRecursive(child.children)) {
                this.children.removeItem(child);
            }
        }
    })
}

Suite.prototype.parentHasOnlyRecursive = function(child) {
    if(child.name === 'root')
        return false;
    
    if(child.parent.isOnly || this.hasOnlyRecursive(child.parent.children))
        return true;
    
    return this.parentHasOnlyRecursive(child.parent);
}

Suite.prototype.hasOnlyRecursive = function(children) {
    for(let i = 0; i < children.itens.length; i++)
        if(this.hasOnly(children.itens[i]))
            return true;
}

Suite.prototype.hasOnly = function(child) {
    return !!(child.isOnly ||
        (child.childrenOnly ? child.childrenOnly.isEmpty() : false) ||
        (child.hasOnlyRecursive ? child.hasOnlyRecursive(child.children) : false));
}

Suite.prototype.childRun = function(child) {
    this.inheritTimeoutLimit(child);
    if(child.type() === 'Test') {
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
function AssertionError(message, props, startStackConstructor) {
    this.message = message || 'AssertionError message not specified';
    props = props || {};
    
    assignDeepEnumerablesToOut(props, this);
    
    startStackConstructor = startStackConstructor || AssertionError;
    if(Error.captureStackTrace)
        Error.captureStackTrace(this, startStackConstructor);
    else
        try {
            throw new Error();
        } catch(e) {
            this.stack = e.stack;
        }
}

AssertionError.prototype = Object.create(Error.prototype);

AssertionError.prototype.constructor = AssertionError;

AssertionError.prototype.name = 'AssertionError';

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

export default AssertionError;
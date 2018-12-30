const assignDeepEnumerablesToOut = (obj, out) => {
    const props = Object.keys(obj);
    let key, v, o;
    for(let i = 0; i < props.length; i++) {
        key = props[i];
        if(key !== '_ctx' && key !== '_timer') {
            v = obj[key];
            out[key] = isObject(out[key]) ? out[key] : {};
            isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;
        }
    }  
};

const isObject = (val) => (typeof val === 'object' && val !== null);

const timestamp = () => window.performance && window.performance.now ? window.performance.now() : new Date().getTime();

export {
    assignDeepEnumerablesToOut, 
    isObject,
    timestamp
}
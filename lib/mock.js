const createMock = (...objs) => composeObject(...objs);

const composeObject = (...objs) => {
    let composedObject = {};
    
    for (let obj of objs)       
        assignDeepEnumerablesToOut(obj, composedObject);

    return composedObject;
};

// Modified by perdugames, based on @tfmontague https://stackoverflow.com/a/25921504/8211088
const assignDeepEnumerablesToOut = (obj, out) => {
    const props = Object.keys(obj);
    let key, v, o;
    for(let i = 0; i < props.length; i++) {
        key = props[i];
        v = obj[key];
        isObject(out[key]) ? out[key] = out[key] : out[key] = {};
        isObject(v) ? assignDeepEnumerablesToOut(v, out[key]) : out[key] = v;
    }  
};

const isObject = (val) => {
    return (typeof val === 'object' && val !== null);
};

export default createMock;
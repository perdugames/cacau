const deepEquals = (object1, object2) => {
    if(!isObject(object1) && !isObject(object2))
        return (object1 === object2);
    
    if(!isObject(object1) || !isObject(object2))
        return false;
    
    return object1EqualsObject2(object1, object2);
};
    
// Modified by perdugames, based on @MaiaraLange https://pt.stackoverflow.com/a/291536/81474
const object1EqualsObject2 = (object1, object2) => {
    let prop1, prop2, lenProp1, lenProp2;
    
    if (isNullOrUndefined(object1) || isNullOrUndefined(object2))
        return false;

    if (typeof object1 !== typeof object2)
        return false;
    
    if (typeof object1 === 'function')
        return (object1.toString() !== object2.toString() ? false : true);

    if (isObject(object1)) {
        prop1 = Object.keys(object1);
        prop2 = Object.keys(object2);
        lenProp1 = prop1.length;
        lenProp2 = prop2.length;
    } else {
        lenProp1 = 0;
        lenProp2 = 0;
    }

    if(lenProp1 !== lenProp2)
        return false;
    
    if(lenProp1 === 0) { 
        if(object1 === object2 || areEmptyAndTypeEquals(object1, object2))
            return true;
        else
            return false;
    }

    for(let i = 0; i < lenProp1; i++) {
        const prop = prop1[i];

        if(object1[prop] !== object2[prop])
            if(object1EqualsObject2(object1[prop], object2[prop]))
                continue;
            else
                return false;
        
    }
    return true;
};

const areEmptyAndTypeEquals = (obj1, obj2) => {
    const areArrays = Array.isArray(obj1) && Array.isArray(obj2);
    const areObjects = isObject(obj1) && isObject(obj2);
    
    if(!areArrays && (Array.isArray(obj1) || Array.isArray(obj2)))
       return false;
    
    return (areArrays || areObjects ? true : false);
};

const isNullOrUndefined = (val) => {
    return (typeof val === 'undefined' || val === null);
};

const isObject = (val) => {
    return (typeof val === 'object' && val !== null);
};

export default deepEquals;
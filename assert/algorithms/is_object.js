const isObject = (val) => {
    return (typeof val === 'object' && val !== null);
};

export default isObject;
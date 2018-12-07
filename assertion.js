function Assertion() {
    this.result = result;
    this.actual = (isObject(actual) ? JSON.stringify(actual) : actual);
    this.expected = (isObject(expected) ? JSON.stringify(expected) : expected);
    this.operator = operator;
}

Assertion.prototype.assert = function(result, actual, expected, CheckTypes.NOT_EQUAL) {
    
}
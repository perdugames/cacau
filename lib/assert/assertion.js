import AssertionError from './assertion_error';

function Assertion(actual, expected, expression, operator) {
    this.assert(actual, expected, expression, operator);
}

Assertion.prototype.assert = function(actual, expected, expression, operator) {
    const result = expression(actual, expected);

    const props = {
        actual: actual,
        expected: expected,
        result: result,
        operator: operator
    };
    
    const message = 'actual(' + actual + ') ' + operator + ' expected(' + expected + ')';
    
    if(!result)
        throw new AssertionError(message, props);

}

export default Assertion;
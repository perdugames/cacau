import Assertion from './assertion';
import Operators from './operators';
import Expressions from './expressions';

function Assert() {}

Assert.prototype.isTrue = function(actual) {
    new Assertion(actual, true, Expressions.IS_TRUE, Operators.EQUAL);
}

Assert.prototype.isNotTrue = function(actual) {
    new Assertion(actual, !true, Expressions.IS_NOT_TRUE, Operators.NOT_EQUAL);
}

Assert.prototype.isFalse = function(actual) {
    new Assertion(actual, false, Expressions.IS_FALSE, Operators.EQUAL);
}

Assert.prototype.isNotFalse = function(actual) {
    new Assertion(actual, !false, Expressions.IS_NOT_FALSE, Operators.NOT_EQUAL);
}

Assert.prototype.isUndefined = function(actual) {
    new Assertion(actual, undefined, Expressions.IS_UNDEFINED, Operators.EQUAL);
}

Assert.prototype.isNotUndefined = function(actual) {
    new Assertion(actual, !undefined, Expressions.IS_NOT_UNDEFINED, Operators.NOT_EQUAL);
}

Assert.prototype.isNull = function(actual) {
    new Assertion(actual, null, Expressions.IS_NULL, Operators.EQUAL);
}

Assert.prototype.isNotNull = function(actual) {
    new Assertion(actual, !null, Expressions.IS_NOT_NULL, Operators.NOT_EQUAL);
}

Assert.prototype.actualEqualExpected = function(actual, expected) {
    new Assertion(actual, expected, Expressions.ACTUAL_EQUAL_EXPECTED, Operators.EQUAL);
}

Assert.prototype.actualNotEqualExpected = function(actual, expected) {
    new Assertion(actual, expected, Expressions.ACTUAL_NOT_EQUAL_EXPECTED, Operators.NOT_EQUAL);
}

Assert.prototype.actualDeepEqualExpected = function(actual, expected) {
    new Assertion(actual, expected, Expressions.ACTUAL_DEEP_EQUAL_EXPECTED, Operators.EQUAL);
}

export default Assert;
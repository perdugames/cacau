/* --------------------------------------------------------------- */
/* ------------------- Cacau Test API ---------------------------- */
/* --------------------------------------------------------------- */
import Assert from './lib/assert/assert';
import createMock from './lib/mock';
import Cacau from './lib/cacau';

const assert = new Assert();

global.isTrue = assert.isTrue;
global.isNotTrue = assert.isNotTrue;
global.isFalse = assert.isFalse;
global.isNotFalse = assert.isNotFalse;
global.isUndefined = assert.isUndefined;
global.isNotUndefined = assert.isNotUndefined;
global.isNull = assert.isNull;
global.isNotNull = assert.isNotNull;
global.actualEqualExpected = assert.actualEqualExpected;
global.actualNotEqualExpected = assert.actualNotEqualExpected;
global.actualDeepEqualExpected = assert.actualDeepEqualExpected;
global.mock = createMock;
global.cacau = new Cacau();

module.exports = global;
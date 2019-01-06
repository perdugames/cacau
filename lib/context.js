import Timer from './timer';

function Context() {
    this._timer = new Timer();
}

Context.prototype.timeout = function(ms) {
    this._timer.limit = ms;
    this._timer.start();
}

export default Context;
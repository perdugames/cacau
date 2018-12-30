import Timer from './timer';

function Scope() {
    this._timer = new Timer();
    this._ctx = this;
}

Scope.prototype.timeout = function(ms) {
    this._ctx._timer.limit = ms;
    this._ctx._timer.start();
}

export default Scope;
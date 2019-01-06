import Context from './context';

function Runnable(...args) {
    this.name = (typeof args[0] === 'string')? args[0] : 'Anonymous';
    this.fn = (typeof args[0] === 'string')? args[1] : args[0];
    this.parent = undefined;
    this.context = new Context();
    this.error = undefined;
}

Runnable.prototype.limitWasExtrapolated = function() {
    const timer = this.context._timer;
    const result = timer.isExtrapolated();
    if(result)
        this.error = new Error('TimeoutError: Time(' + timer.limit + ') extrapolated!');
    return result;
}

export default Runnable;
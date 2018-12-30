import {timestamp} from './utils';

function Timer() {
    this.limit = -1;
    this.startMs = 0;
    this.endMs = 0;
    this.durationMs = 0;
}

Timer.prototype.start = function() {
    this.startMs = timestamp();
}

Timer.prototype.end = function() {
    this.endMs = timestamp();
    this.durationMs = this.endMs - this.startMs;
    return this.durationMs;
}

Timer.prototype.isExtrapolated = function() {
    if(this.limit === -1)
        return false;
    this.end();
    return this.durationMs > this.limit;
}

export default Timer;
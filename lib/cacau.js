import Runner from './runner';
import Interfaces from './interfaces/interfaces';
import Reporters from './reporters/reporters';

function Cacau() {
    this.runner = new Runner();
    this.rootSuite = this.runner.rootSuite;
}

Cacau.prototype.ui = function(interfaceName) {
    Interfaces[interfaceName](this.rootSuite, global, this.runner);
    return this;
}

Cacau.prototype.reporter = function(reporterName) {
    return new Reporters[reporterName](this.runner);
}

Cacau.prototype.run = function() {
    this.runner.run();
}

export default Cacau;
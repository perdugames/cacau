import {consoleLogColor} from '../utils';

function Base(runner) {
    this.runner = runner;
    this.result = runner.result;
    const failing = this.failing = [];
    const passing = this.passing = [];
    
    runner.eventBus.on('pass', function(test) {
        passing.push(test);
    });

    runner.eventBus.on('fail', function(test) {
        failing.push(test);
    });
}

Base.prototype.epilogue = function() {
    const result = this.result;
    consoleLogColor('green', result.passing + ' passing');
    consoleLogColor('red', result.failing + ' failing');
    consoleLogColor('grey', 'Duration: (' + result.runDuration.toFixed(2) + 'ms)');    
    this.createTestFailure('red', result.errors);
}

Base.prototype.createTestFailure = function(colorName, failures, preText={
    message: 'Message: ', 
    actual: 'Actual: ', 
    expected: 'Expected: '
}) {
    failures.reverse();
    failures.forEach(function(failure, index) {
        let stgFailures = index + ') ' + failure.parent.name + ' - ' + failure.name + '\n\n'
                + preText.message + failure.error.message + '\n\n'
                + preText.actual + failure.error.actual + '\n'
                + preText.expected + failure.error.expected + '\n\n'
                + failure.error.stack + '\n';
        consoleLogColor('red', stgFailures);
    });
}

export default Base;
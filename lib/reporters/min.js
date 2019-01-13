import {inherits, consoleLogColor} from '../utils';
import Base from './base';

function Min(runner) {
    Base.call(this, runner);
    runner.once('end', () => {
        consoleLogColor('yellow', 'Cacau run:');
        this.epilogue();
    });
}

inherits(Min, Base);

export default Min;
require('BUILD/cacau-1.1.0.js');

import Runner from 'LIB/runner';
import createNewTddInterface from 'LIB/interfaces/new_tdd';
import Min from 'LIB/reporters/min';

const runner = new Runner();
const rootSuite = runner.rootSuite;
createNewTddInterface(rootSuite, global, runner);
const reporterMin = new Min(runner);

suite('Suite 1', function() {
    
    let x = false;
    
    beforeEach(function() {
        x = true;
    });

    test('Test 1', function() {
        CHECK_TRUE(x);
    });

    test('Test 2', function() {
        x = false;
        CHECK_TRUE(x);
    });
    
    test('Test 3', function() {
        x = false;
        CHECK_TRUE(x);
    });

});

runner.run();



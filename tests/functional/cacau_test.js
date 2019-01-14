import 'BUILD/cacau.js';
//require('BUILD/cacau');

cacau.ui('NewTdd').reporter('Min');

suite('Suite 1', function() {
    this.timeout(1);
    let x = false;
    
    beforeAll(function() {
//        this.timeout(1);
//        let i = 0;
//        while(i < 10000000) { i++; }
        x = true; 
    });
    test('Test 1', function(done) {
        done( () => isTrue(x) );
    });

    test('Test 2', function() {
       isTrue(false);
    });

});

cacau.run();
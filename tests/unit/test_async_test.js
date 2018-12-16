import {TEST_ASYNC, CHECK_ACTUAL_EQUAL_EXPECTED} from 'BUILD/cacau.js';

import Runner from 'LIB/runner';

const imageDownload = (path, successCallback) => {
    let img = new Image();
    img.addEventListener("load", successCallback, false);
    img.src = path;
    return img;
};

TEST_ASYNC("TestAsyncFunctionTest", (done) => {
    let spyCountSuccess = 0;
    const expectedCountSuccess = spyCountSuccess + 1;

    const successCallback = () => {
        spyCountSuccess++;

        const actualCountSuccess = spyCountSuccess;

        done( () => CHECK_ACTUAL_EQUAL_EXPECTED(actualCountSuccess, expectedCountSuccess) );
    };

    const pathImage = 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png'; // or '../images/img_cacau.png';
    const img = imageDownload(pathImage, successCallback);

});

TEST_ASYNC("TestRunnerAsyncTest", (done) => {
    const runner = new Runner();
    const rootSuite = runner.rootSuite;

    const suite1 = runner.createSuite('Suite 1');
    rootSuite.addChild(suite1);

    const test1 = runner.createAsyncTest('Suite 1 - Test 1', function(runnerDone) {
        let spyCountSuccess = 0;
        const expectedCountSuccess = spyCountSuccess + 1;
        
        const successCallback = () => {
            spyCountSuccess++;

            const actualCountSuccess = spyCountSuccess;
            
            done( () => CHECK_TRUE( runnerDone( () => CHECK_ACTUAL_EQUAL_EXPECTED(actualCountSuccess, expectedCountSuccess) ) ) );
        };

        const pathImage = 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png'; // or '../images/img_cacau.png';
        const img = imageDownload(pathImage, successCallback);
        
    });
                                         
    suite1.addChild(test1);

    runner.run();
    
});
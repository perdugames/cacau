require('BUILD/cacau-1.1.0.js');

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

    const pathImage =  '../images/img_cacau.png'; // or 'https://raw.githubusercontent.com/perdugames/cacau/master/images/img_cacau.png';
    const img = imageDownload(pathImage, successCallback);

});
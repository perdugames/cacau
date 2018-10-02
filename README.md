# Cacau

<p align="center">
  <img width="300" height="480" src="./images/img_cacau.png">
</p>

## Test API in JavaScript(Client).

### In Webpack/module:
To call the test files, you create a file, I called it **runtests.js**, you can give the name you want, as below:

#### runtests.js
```javascript
// UNITS
import './object1EqualsObject2_test';
import './composeobject_test';
```
And call import the "runtests.js" into your main file, as below:

#### index.js
```javascript
import './runtests.js';
// ...
```
Updating(F5) your browser will be able to see in the console the tests that have passed and those that have failed.

### In Browser/HTML:
```javascript
// ...
<script src="../../build/cacau.js"></script>
    <script>
        cacau.TEST('cacaurunPassing.html',
                   
            cacau.TEST_F('testCacauBrowser1', () => {
                return cacau.CHECK_ACTUAL_EQUAL_EXPECTED(1, 1);
            }),
      
            cacau.TEST_F('testCacauBrowser2', () => {
                return cacau.CHECK_ACTUAL_EQUAL_EXPECTED(0, 0);
            }),
            
            
        );
        cacau.TEST('cacaurunFailing.html',
                   
            cacau.TEST_F('testCacauBrowser1', () => {
                return cacau.CHECK_ACTUAL_EQUAL_EXPECTED(1, 1);
            }),
      
            cacau.TEST_F('testCacauBrowser2', () => {
                return cacau.CHECK_ACTUAL_EQUAL_EXPECTED(5, 1);
            }),
                   
            cacau.TEST_F('testCacauBrowser3', () => {
                return cacau.CHECK_ACTUAL_EQUAL_EXPECTED(0, 0);
            }),
            
        );
    </script>
// ...
```
See the example files in the example directory of this repository for more details. 
Then you can use Cacau also in the CommonJS/AMD/ES2015 module, as in the Browser by calling in a script HTML tag.

An example test that has passed and failed:

![cacau](./images/img_example_passing_and_failing.png)

## API

function **TEST(fileName, function)**

function **TEST_F(fileName, function)**

function **CREATE_MOCK(object)**

function **CHECK_ACTUAL_EQUAL_EXPECTED(actual, expected)**

function **CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(actual, expected)**

function **CHECK_ACTUAL_DIFFERENT_EXPECTED(actual, expected)**

function **CHECK_ACTUAL_DIFFERENT_EXPECTED_OBJECT(actual, expected)**

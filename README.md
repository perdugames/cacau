# testapi
## Test API in JavaScript(Client).

To use you can check the files **object1EqualsObject2_test.js** and **composeobject_test.js** where I test these two functions of TestAPI itself.

To call the files, you create a file, I called it **runtests.js**, you can give the name you want, as below:

#### runtests.js
```javascript
// UNITS
import './testapi/object1EqualsObject2_test';
import './testapi/composeobject_test';
```
And call import the "runtests.js" into your main file, as below:

#### main.js
```javascript
import './runtests.js';
// ...
```
Updating(F5) your browser will be able to see in the console the tests that have passed and those that have failed.

An example test that has passed:

![testapi](img_example_passed.png)


An example test that has failed:


![testapi](img_example_failed.png)


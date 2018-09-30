import {TEST, TEST_F, CHECK_ACTUAL_EQUAL_EXPECTED} from 'TESTS/cacau';
import {object1EqualsObject2} from 'TESTS/cacau';


 TEST('/cacau.js:object1EqualsObject2()',
      
    TEST_F('testObject1EqualsObject2', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 } };
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0 } };
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, true);
     
    }),
     
    TEST_F('testObject1EqualsObject2NotEquals', () => {
        const obj1 = { x: 0, y: 2, other: { x: 0, y: 0 } };
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 1 } };
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObject1Null', () => {
        const obj1 = null;
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0 } };
     
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObject2Undefined', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 } };
        const obj2 = undefined;
     
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithTypeofDifferent', () => {
        const obj1 = { x: 0, y: 0, z: 0, other: { x: 0 } };
        const obj2 = { x: '0', y: 0, z: 0, other: { x: 0 } };

        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2FunctionsEquals', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 }, f (x) { return this.x; } };
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0 }, f (x) { return this.x; } };
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, true);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObject1BeingString', () => {
        const obj1 = 'test string';
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0 } }; 
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithDifferentStringInsideObjects', () => {
        const obj1 = { x: 0, y: 'test string1', other: { x: 0, y: 0 } };
        const obj2 = { x: 0, y: 'test string2', other: { x: 0, y: 0 } }; 
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObjectsOfSizesDifferent', () => {
        const obj1 = { x: 0, y: 3, z: 0, f: 0 };
        const obj2 = { x: 0, y: 3, z: 0 };
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObject1Empty', () => {
        const obj1 = {};
        const obj2 = { x: 0, y: 0, z: 0, other: { x:0 } };
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObject2Empty', () => {
        const obj1 = { x: 0, y: 0, z: 0, other: { x:0 } };
        const obj2 = {};
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObjectsEmpty', () => {
        const obj1 = { x: 0, y: [], z: {} };
        const obj2 = { x: 0, y: [], z: {} };
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, true);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObjectsEmptyOfTypesDifferent', () => {
        const obj1 = { x: 0, y: {}, z: {}, other: { x: [] } };
        const obj2 = { x: 0, y: [], z: {}, other: { x: {} } };

        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithKeysDifferent', () => {
        const obj1 = { Comp1: { x: 0, y: 0 } };
        const obj2 = { Comp2: { img: 'image', width: 0, height: 0 } };
     
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObject1NotObject', () => {
        const obj1 = 0;
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0 } };
     
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithObject2NotObject', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 } };
        const obj2 = 0;
     
        const result = object1EqualsObject2(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, false);
     
    }),
      
    TEST_F('testObject1EqualsObject2WithArgumentsInOrderDifferent', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 } };
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0 } };
     
        const result = object1EqualsObject2(obj2, obj1);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED(result, true);
     
    }),
        
);

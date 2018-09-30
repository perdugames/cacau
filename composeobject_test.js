import {TEST, TEST_F, CHECK_ACTUAL_EQUAL_EXPECTED, CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT} from 'TESTS/cacau';
import {composeObject} from 'TESTS/cacau';


 TEST('/cacau.js:composeObject()',
      
    TEST_F('testComposeObject', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 } };
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0, z: 0 } };
     
        const myClone = composeObject(obj1, obj2);
          
        return CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(myClone, { x: 0, y: 0, other: { x: 0, y: 0, z: 0 } });
     
    }),
      
    TEST_F('testComposeObjectLastArgumentOverlap', () => {
        const obj1 = { x: 0, y: 5, other: { x: 0, y: 0 } };
        const obj2 = { x: 0, y: 0, other: { z: 0 } };
     
        const myClone = composeObject(obj1, obj2);
        
        return CHECK_ACTUAL_EQUAL_EXPECTED(myClone.y, 0);
     
    }),
     
    TEST_F('testComposeObjectReturnCloneImmutability', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 } };
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0, z: 0 } };
    
        const myClone1 = composeObject(obj1, obj2);
        const myClone2 = composeObject(obj1, obj2);
     
        myClone1.other.y = 3;
     
        return CHECK_ACTUAL_EQUAL_EXPECTED(myClone2.other.y, 0);
     
    }),
                                
    TEST_F('testComposeObjectNotImportingWithArgumentsOrder', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 } };
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0, z: 0 } };
     
        const myClone1 = composeObject(obj1, obj2);
        const myClone2 = composeObject(obj2, obj1);
        
        return CHECK_ACTUAL_EQUAL_EXPECTED_OBJECT(myClone1, myClone2);
     
    }),
    
    TEST_F('testComposeObjectWithFunctionThis', () => {
        const obj1 = { x: 0, y: 0, other: { x: 0, y: 0 }, getSumXY() { return this.x+this.y; } };
        const obj2 = { x: 0, y: 0, other: { x: 0, y: 0, z: 0 }, getReduceOneX() { return this.x-1; } };
     
        const myClone1 = composeObject(obj1, obj2);
        const myClone2 = composeObject(obj1, obj2);
     
        myClone1.x = 10;
        
        return CHECK_ACTUAL_EQUAL_EXPECTED(myClone2.getSumXY(), 0);
     
    }),
    
);

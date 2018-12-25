require('BUILD/cacau-1.1.0.js');

const FIXTURE = () => {
    function Duckling(name) {
        this.name = name;
    }
    return {duckling: new Duckling("Julio")};
};

TEST('objectReturnFixIsImutable',
    TEST_F('testChangeName', (FIX) => {
        const expectedDucklingName = 'Matias';
    
        FIX.duckling.name = 'Matias';
        const ducklingName = FIX.duckling.name;
    
        return CHECK_ACTUAL_EQUAL_EXPECTED(ducklingName, expectedDucklingName);
    }, FIXTURE),

    TEST_F('testNotChangeName', (FIX) => {
        const expectedDucklingName = 'Julio';
        const ducklingName = FIX.duckling.name;
    
        return CHECK_ACTUAL_EQUAL_EXPECTED(ducklingName, expectedDucklingName);
    
    }, FIXTURE)

);
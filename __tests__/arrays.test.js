import arrayTest from "../__JS__/arrays"


describe('TESTING AN ARRAY', () => { 
    const result = arrayTest();
    test('should render the array correctly', () => { 
        expect(result).toContain("cake")
     })
 })
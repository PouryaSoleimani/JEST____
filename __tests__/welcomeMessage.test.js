import welcomeMessage from "../__JS__/welcomeMessage";

describe('SHOULD RETURN THE WELCOME MESSAGE INCLUDING THE NAME', () => { 
    const name = "POURYA"
    const result = welcomeMessage("POURYA");

    test('should return the correct sentence ', () => { 
        expect(result).toContain(name)
     })
})
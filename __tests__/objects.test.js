import objects from "../__JS__/objects";


describe('OBJECT TESTING', () => { 
    it("should return an object with specific properties", () => {
        const obj = objects();
        expect(obj).toHaveProperty('id');
        expect(obj).toHaveProperty('name');
        expect(obj).toHaveProperty('age');
        expect(obj).toHaveProperty('occupation');
        expect(obj).toHaveProperty('married');
        expect(obj).toHaveProperty('hobbies');
        expect(obj).toHaveProperty('address');
        expect(obj).toHaveProperty('skills');
        expect(obj).toHaveProperty('experience');
        expect(obj).toHaveProperty('education');
        expect(obj).toHaveProperty('languages');
        expect(obj).toHaveProperty('certifications');
        expect(obj).toHaveProperty('projects');
    });
})
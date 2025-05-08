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
    it("should have the correct types for properties", () => {
        const obj = objects();
        expect(typeof obj.id).toBe('number');
        expect(typeof obj.name).toBe('string');
        expect(typeof obj.age).toBe('number');
        expect(typeof obj.occupation).toBe('string');
        expect(typeof obj.married).toBe('boolean');
        expect(Array.isArray(obj.hobbies)).toBe(true);
        expect(typeof obj.address).toBe('object');
        expect(typeof obj.skills).toBe('object');
        expect(typeof obj.experience).toBe('object');
        expect(typeof obj.education).toBe('object');
        expect(Array.isArray(obj.languages)).toBe(true);
        expect(Array.isArray(obj.certifications)).toBe(true);
        expect(Array.isArray(obj.projects)).toBe(true);
        expect(typeof obj.occupation).toBe('string');
        expect(typeof obj.married).toBe('boolean');
        expect(typeof obj.address).toBe('object');
        expect(typeof obj.skills).toBe('object');
        expect(typeof obj.experience).toBe('object');
        expect(typeof obj.education).toBe('object');
        expect(Array.isArray(obj.languages)).toBe(true);
        expect(Array.isArray(obj.certifications)).toBe(true);
        expect(Array.isArray(obj.projects)).toBe(true);
        expect(typeof obj.occupation).toBe('string');
        expect(typeof obj.married).toBe('boolean');
        expect(typeof obj.address).toBe('object');
        expect(typeof obj.skills).toBe('object');
        expect(typeof obj.experience).toBe('object');
        expect(typeof obj.education).toBe('object');
    });
})
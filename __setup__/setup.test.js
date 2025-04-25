const animals = ["cat", "dog", "mouse", "rabbit", "elephant"]

describe("animals", () => {
    test("Should Return an Array", () => { expect(animals).toBeInstanceOf(Array) })
    // test("Should Return an Array", () => { expect(animals).toHaveLength(5) });
    test("Should add a new animal", () => { animals.push("giraffe"); expect(animals).toHaveLength(6); });
    test("check if the item is added", () => { expect(animals[animals.length - 1]).toBe("giraffe") })
    test("check if the item is added", () => { expect(animals).toContain("giraffe") })
})
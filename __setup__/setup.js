const animals = ["cat", "dog", "mouse", "rabbit", "elephant"]



describe("animals", () => {
    test("Should Return an Array", () => { expect(animals).toBeInstanceOf(Array) })
    test("Should Return an Array", () => { expect(animals).toHaveLength(5) });
    test("Should add a new animal", () => { expect(animals.push("giraffe")).toHaveLength(6) });
})
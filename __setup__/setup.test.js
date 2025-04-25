let animals = ["cat", "dog", "mouse", "rabbit", "elephant"]

// beforeAll()
// beforeEach(() => {
//     console.log("BEFORE EACH ______________________")
//     animals = ["cat", "dog", "mouse", "rabbit", "elephant"]
// })

afterEach(() => {
    console.log("AFTER EACH ______________________")
})
// afterAll()

describe("animals", () => {
    beforeEach(() => { animals = ["cat", "dog", "mouse", "rabbit", "elephant"] })
    test("Should Return an Array", () => { expect(animals).toBeInstanceOf(Array) })
    test("Should Return an Array", () => { expect(animals).toHaveLength(5) });
    test("Should add a new animal", () => { animals.push("giraffe"); expect(animals).toHaveLength(6); });
})

describe("CHANGING THE ARRAT", () => {
    beforeEach(() => { animals = ["cat", "dog", "mouse", "rabbit", "elephant", "giraffe"] })
    test("check if the item is added", () => { expect(animals[animals.length - 1]).toBe("giraffe") })
    test("check if the item is added", () => { expect(animals).toContain("giraffe") })
})
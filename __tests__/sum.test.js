import sum from "../js/sum";

// test("should add two numbers", () => {
//   expect(typeof sum).toBe("function")
//   const result = sum(1, 2);
//   expect(result).toBe(3);
// });

describe("sum", () => {
  test("should add two numbers", () => {
    expect(typeof sum).toBe("function")
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
})
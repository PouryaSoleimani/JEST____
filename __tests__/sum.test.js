import sum from "../js/sum";

// test("should add two numbers", () => {
//   expect(typeof sum).toBe("function")
//   const result = sum(1, 2);
//   expect(result).toBe(3);
// });


// ^ WE USE DESCRIBE WHEN WE WANT TO TEST MULTIPLE TESTS
describe("sum", () => {
  test("should be a function", () => {
    expect(typeof sum).toBe("function");
  });
  test("should add two numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  })
})
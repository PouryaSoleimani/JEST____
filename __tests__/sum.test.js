import sum from "../js/sum";

// test("should add two numbers", () => {
//   expect(typeof sum).toBe("function")
//   const result = sum(1, 2);
//   expect(result).toBe(3);
// });


//  WE USE DESCRIBE WHEN WE WANT TO TEST MULTIPLE TESTS
describe("sum", () => {
  test("should be a function", () => {
    expect(typeof sum).toBe("function");
  });
  test("should add two numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  })
})


//  COMPARING TO OBJECTS
test('COMPARING TWO OBJECTS', () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  expect(obj1).toStrictEqual(obj2);
})

// TRUTHY AND FALSY VALUES
describe("TRUTHY AND FALSY VALUES", () => {
  const n = null;
  test("should be falsy", () => {
    expect(n).toBeFalsy();
  })
  // toBeGreaterThan()
  // toBeLessThan()
  // toBeGreaterThanOrEqual()
  // toBeLessThanOrEqual()  

  test("should be greater than", () => {
    expect(10).toBeGreaterThan(5);
  })
  test("should be less than", () => {
    expect(10).toBeLessThan(15);
  })
  test("should be greater than or equal", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  })
  test("should be less than or equal", () => {
    expect(10).toBeLessThanOrEqual(10);
  })
})
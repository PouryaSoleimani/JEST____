import sum from "../__js__/sum";

// test("should add two numbers", () => {
//   expect(typeof sum).toBe("function")
//   const result = sum(1, 2);
//   expect(result).toBe(3);
// });


//  WE USE DESCRIBE WHEN WE WANT TO TEST MULTIPLE TESTS ===============================================================================================================================================
describe("sum", () => {
  test("should be a function", () => {
    expect(typeof sum).toBe("function");
  });
  test("should add two numbers", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  })
})


//  COMPARING TO OBJECTS ===============================================================================================================================================
test('COMPARING TWO OBJECTS', () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  expect(obj1).toStrictEqual(obj2);
})

// TRUTHY AND FALSY VALUES ===============================================================================================================================================
describe("TRUTHY AND FALSY VALUES", () => {
  const n = null;
  test("should be falsy", () => {
    expect(n).toBeFalsy();
  })

  // NUMBERS ============================================================================================================================================================+++
  // toBeGreaterThan()
  // toBeLessThan()
  // toBeGreaterThanOrEqual()
  // toBeLessThanOrEqual()  
  //toBeCloseTo()
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

// STRINGS ===============================================================================================================================================
describe("STRINGS", () => {
  const str = "hello";
  test("should be hello", () => {
    expect(str).toBe("hello");
  })
  const str2 = "hello";
  const str3 = "hellofromjest"
  test("should be hello", () => {
    expect(str2).toBe("hello");
  })
  test("should contain hello", () => {
    expect(str2).toContain("hello");
  })
  test("should start with hello", () => {
    expect(str3).toMatch(/^hello/);
  })
  test("should end with hello", () => {
    expect(str3).toMatch(/jest$/);
  })
})

// ARRAYS ===============================================================================================================================================
describe("ARRAYS", () => {
  const arr = [1, 2, 3];
  test("should be [1, 2, 3]", () => {
    expect(arr).toStrictEqual([1, 2, 3]);
  })
})

test("SHOULD SEARCH AN ARRAY FOR A WORD", () => {
  const shoppingList = ["milk", "ice-cream", "coca", "eggs", "bread"]
  expect(typeof shoppingList).toBe("object");
  expect(shoppingList).toContain("eggs")
})

// ERROS ===============================================================================================================================================
function compileAndroidCode() {
  throw new Error("WRONG JDK !")
}
describe("THROWING AN ERROR", () => {
  test("ARROW THROWING", () => {
    expect(() => { compileAndroidCode() }).toThrow(new Error("WRONG JDK !"))
  })
})
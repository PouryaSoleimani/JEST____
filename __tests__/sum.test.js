import sum from "../js/sum";    


test("should add two numbers", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
    
import minus from "./minus";

test("MINUS OF TWO NUMBERS", () => {
    expect(typeof (minus)).toBe("function");
    expect(minus(20, 10)).toBe(10);
});
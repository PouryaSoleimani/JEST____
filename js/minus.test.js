import minus from "./minus";

test("MINUS TWO NUMBERS", () => {
    expect(typeof (minus)).toBe("function");
    expect(minus(200, 100)).toBe(100);
});
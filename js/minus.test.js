import minus from "./minus";

test("MINUS OF TWO NUMBERS", () => {
    expect(typeof (minus)).toBe("function");
    expect(minus(100, 60)).toBe(40);
});
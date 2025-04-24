import minus from "./minus";

test('MINUS TWO NUMBERS', () => {
    expect(typeof (minus)).toBe("function");
    expect(minus(30, 20)).toBe(10);
});
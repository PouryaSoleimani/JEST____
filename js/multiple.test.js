import multiple from "./multiple";

test("MULTIPLE TWO NUMBERS", () => {
    expect(typeof (multiple)).toBe("function");
    expect(multiple(2, 3)).toBe(6);
}); 
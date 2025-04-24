import multipleNumber from "./multiple";

test("MULTIPLE TWO NUMBERS", () => {
    expect(typeof (multipleNumber)).toBe("function");
    expect(multipleNumber(2, 2)).toBe(4);
});

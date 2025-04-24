import sum from "./sum";

test("JUST SUM TWO NUMBERS", () => {
    expect(typeof (sum)).toBe("function");
    expect(sum(10, 20)).toBe(30);
});
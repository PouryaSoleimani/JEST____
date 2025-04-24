import sum from "./sum";

test("SUM OF TWO NUMBERS ", () => {
    expect(typeof (sum)).toBe("function");
    expect(sum(30, 50)).toBe(80);
});
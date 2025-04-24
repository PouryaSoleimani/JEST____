import sum from "./sum";

test("SUM OF TWO NUMBES", () => {
    expect(typeof (sum)).toBe("function");
    expect(sum(30, 30)).toBe(60);
});
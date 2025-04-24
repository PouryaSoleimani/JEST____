import sum from "./sum";

test("SUMMING UP TWO NUMBERS", () => {
    expect(typeof (sum)).toBe("function");
    expect(sum(100, 200)).toBe(300);
});
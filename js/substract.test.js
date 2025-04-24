import subtract from "./substract";

test("JUST MINUS TWO NUMBERS", () => {
    expect(typeof subtract).toBe("function");
    expect(subtract(5, 4)).toBe(1);
});

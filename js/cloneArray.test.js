import cloneArray from "./cloneArray";

test("CLONING AND RETURNING THE SAME ARRAY", () => {
    expect(typeof (cloneArray)).toBe("function");
    const array = [1, 2, 3];
    expect(cloneArray(array)).toStrictEqual(array);
    expect(cloneArray(array)).not.toBe(array);
});
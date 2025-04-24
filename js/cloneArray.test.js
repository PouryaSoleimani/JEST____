import cloneArray from "./cloneArray";

test('CLONING AN ARRAY', () => {
    expect(typeof (cloneArray)).toBe("function");
    const array = [1, 2, 3, 4];
    expect(cloneArray(array)).not.toBe(array);
    expect(cloneArray(array)).toStrictEqual(array);
});
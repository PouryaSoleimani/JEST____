import sum from "./sum";

test('properly adds two numbers', () => {
    expect(typeof sum).toBe('function');
    expect(sum(1, 2)).toBe(3);
});
import fetchData from "./callback";

test('LOGGING TEST', () => {
    function Logger(sentence) {
        console.info(sentence);
    }
    expect(typeof(fetchData)).toBe("function")
    expect(fetchData(Logger)).toBeEnabled
});
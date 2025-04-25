import fetchData from "./async";


describe("fetchData", () => {
    test("should return a promise", () => {
        const SingleTodo = fetchData(1)
        expect(SingleTodo).resolves.toBe(Object)
    });
});


import fetchData from "./async";

// FETCHING DATA FROM API ===============================================================================================================================================
describe("fetchData", () => {
    test("should return an object", () => {
        const SingleTodo = fetchData(1)
        expect(SingleTodo).resolves.toBe(Object)
    });
});



import myAsyncFunction from "./async";

test("TESTING THE ASYNC FUNCTION", async () => {
    const data = await myAsyncFunction();
    expect(data).toBe("Promise resolved");
});
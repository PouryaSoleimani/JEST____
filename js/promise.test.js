import fetchPromise from "./promise";

//  TEST FOR RESOLVE
test("THE DATA IS HELLO FROM PROMISE", () => {
    return expect(fetchPromise()).resolves.toBe("HELLO FROM PROMISE");
});


// TEST FOR REJECT
test("THE DATA IS NOT HELLO FROM PROMISE", () => {
    return expect(fetchPromise()).rejects.toThrow("ERROR");
});
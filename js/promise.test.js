import fetchPromise from "./promise";

//  TEST FOR RESOLVE
test("THE DATA IS HELLO FROM RESOLVE", () => {
    return expect(fetchPromise()).resolves.toBe("HELLO FROM RESOLVE");
});


// TEST FOR REJECT
// test("THE DATA IS NOT HELLO FROM REJECT", () => {
//     return expect(fetchPromise()).rejects.toThrow("ERROR");
// });
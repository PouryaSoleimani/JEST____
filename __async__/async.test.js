import fetchData from "./async";

// FETCHING DATA FROM API ===============================================================================================================================================
describe("fetchData", () => {
test("Should Return an Object" , () => {
  expect(fetchData(1)).resolves.toBeInstanceOf(Object)
})
});



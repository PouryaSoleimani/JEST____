import {login} from "./login";
import {getUser} from "./login";


describe("GET USER",() => {
    test("Should Return an Object",() => {
        const result=getUser()
        expect(result).toBeInstanceOf(Object)
        expect(result).toMatchObject({id: 1,name: "pourya"})
        expect(result).toHaveProperty("id")
        expect(result).toHaveProperty("name")
    })
})
describe("LOGIN",() => {

})

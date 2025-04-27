export function getUser() {
    return {id: 1,name: "pourya"}
}

export function login(password) {
    if(password!=="1234") {
        throw new Error("PASSWORD IS INCORRECT")
    }
    return {jwt: "1203215823wq"}

}

login("1234")
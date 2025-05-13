// ^ GET USER
export function getUserById(id) {
console.info("READING DATA FROM DB");
const users = [
	{ id: 1, name: 'John', email: 'john@gmail.com', purchaseCount: 6 },
	{ id: 2, name: 'Jane', email: 'jane@gmail.com', purchaseCount: 3 },
	{ id: 3, name: 'Bob', email: 'bob@gmail.com', purchaseCount: 8 },
	{ id: 4, name: 'Alice', email: 'alice@gmail.com', purchaseCount: 1 },
	{ id: 5, name: 'Mike', email: 'mike@gmail.com', purchaseCount: 4 },
	{ id: 6, name: 'Sarah', email: 'sarah@gmail.com', purchaseCount: 2 },
]
return users.find(user => user.id === id)
}

//^ SEND EMAIL
export function sendEmail (name , message){
	return `Email sent to ${name} with message: ${message}`
}
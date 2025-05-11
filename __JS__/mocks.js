export function getUserById(id) {
console.info("READING DATA FROM DB");
const users = [
	{ id: 1, name: 'John', email: 'john@gmail.com' },
	{ id: 2, name: 'Jane', email: 'jane@gmail.com' },
	{ id: 3, name: 'Bob', email: 'bob@gmail.com' }
]
return users.find(user => user.id === id)
}
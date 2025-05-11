
// ^ GET USER
export function getUserByID(id) {
console.info("READING FROM DATABASE")
const users = [
	{ id: 1, name: 'John Doe', email: 'john@example.com' },
	{ id: 2, name: 'Jane Doe', email: 'jane@example.com' }
]
return users.find(user => user.id === id)
}

// ^ SEND EMAIL
export function sendEmail(name, message) {
console.info(`Sending email to ${name} with message: ${message}`)
}

export function sendWelcomeEmail(name, email) {
console.info(`Sending welcome email to ${name} at ${email}`)
const message = 'Welcome to our platform!'
sendEmail(name, message)
}
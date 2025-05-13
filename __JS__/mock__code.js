import { getUserById } from './mock__service'
import { sendEmail } from './mock__service'

export function calculateDiscount(id) {
	const user = getUserById(id)
	let discount = 0
	if (user.purchaseCount > 3) {
		discount = 10
		sendEmail(user.name, `You have a discount of ${discount}%`)
		return discount
	} else {
		return 0
	}
}

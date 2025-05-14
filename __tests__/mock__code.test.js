 
import { jest, it, expect, describe } from '@jest/globals'
import { calculateDiscount } from '../__JS__/mock__code'

// ^ MOCKING THE FUNCTIONS
jest.mock('../__JS__/mock__service', () => ({
	getUserById: jest.fn(),
	sendEmail: jest.fn()
}))

jest.mock('../__JS__/mock__code', () => ({
	calculateDiscount: jest.fn()
}))

describe('calculateDiscount', () => {
	it('should return 0% discount when purchase count is less than 3', () => {
		expect(calculateDiscount(2)).toBe(0)
	})
	it('should return 10% discount when purchase count is 3 or more', () => {
		expect(calculateDiscount(3)).toBe(10)
	})
	it('SHOULD RETURN 0% DISCOUNT', () => {
		expect(calculateDiscount(2)).toBe(0)
	})

	it('SHOULD SEND AN EMAIL', () => {
		const getUserById = jest.fn()
		const sendEmail = jest.fn()
		getUserById.mockReturnValue()
		calculateDiscount(3)
		expect(sendEmail).not.toHaveBeenCalled()
	})
})

/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { it,expect,describe } from '@jest/globals'
import jest from 'jest-mock';
import { calculateDiscount } from '../__JS__/mock__code';
import { getUserById, sendEmail } from '../__JS__/mock__service';
import { get } from 'http';

// ^ MOCKING THE FUNCTIONS
jest.mock('../__JS__/mock__service', () => ({
	sendEmail: jest.fn(),
	getUserById: jest.fn().mockReturnValue({
		id: 1,
		name: 'John',
		email: 'john@gmail.com',
		purchaseCount: 6
	})
}))


describe('calculateDiscount', () => {
	it('SHOULD RETURN 10% DISCOUNT', () => {
	sendEmail: jest.fn(),
    getUserById: jest.fn().mockReturnValue({
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      purchaseCount: 6
    })
    expect(calculateDiscount(1)).toBe(10)
	})
})


it('SHOULD SEND AN EMAIL TO THE USER', () => {})
it('SHOULD NOT SEND AN EMAIL TO THE USER', () => {})


  
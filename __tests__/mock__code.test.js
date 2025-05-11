/* eslint-disable @typescript-eslint/no-unused-vars */
import { it,expect,describe,beforeEach } from '@jest/globals'
import jest from 'jest-mock';
import { calculateDiscount } from '../__JS__/mock__code';
import { getUserById, sendEmail } from "./../__JS__/mock__service";



// ^ MOCKING THE FUNCTIONS
jest.mock('../__JS__/mock__service', () => ({
	sendEmail: jest.fn(),
	getUserById: jest.fn().mockReturnValue({
		id: 1,
		name: 'John',
		email: 'john@gmail.com',
		purchaseCount: 6
	})
}));


describe('calculateDiscount', () => {
beforeEach(() => {
  jest.clearAllMocks();
  sendEmail.mockClear();
  getUserById.mockReturnValue({ id: 1, name: 'John', email: 'john@gmail.com', purchaseCount: 6 });
});

})
it('should return 10% discount when purchase count is 3 or more', () => {
		expect(calculateDiscount(3)).toBe(10)
	})
	it('SHOULD RETURN 0% DISCOUNT', () => {
		expect(calculateDiscount(2)).toBe(0)
	})

	it('SHOULD SEND THE EMAIL', () => {
    getUserById.mockReturnValue({
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      purchaseCount: 6
    });
    expect(sendEmail).toHaveBeenCalledWith('john@gmail.com', expect.any(String));
            calculateDiscount(1);
            expect(sendEmail).toHaveBeenCalledWith()
	})

})


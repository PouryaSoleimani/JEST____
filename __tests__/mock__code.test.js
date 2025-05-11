/* eslint-disable @typescript-eslint/no-unused-vars */
import { it } from '@jest/globals'
import jest from 'jest-mock';
import { calculateDiscount } from '../__JS__/mock__code';
import { getUserById, sendEmail } from '../__JS__/mock__service';

// ^ MOCKING THE FUNCTIONS
jest.mock('../__JS__/mock__service', () => ({
    sendEmail: jest.fn(),
    getUserById: jest.fn().mockReturnValue({
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        purchaseCount: 2,
    })
}));




// ^ TESTS
it('SHOULD CALCULATE THE DISCOUNT', () => {})
it('SHOULD SEND AN EMAIL TO THE USER', () => {})
it('SHOULD NOT SEND AN EMAIL TO THE USER', () => {})


  
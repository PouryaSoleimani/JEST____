/* eslint-disable @typescript-eslint/no-unused-vars */
import { it } from '@jest/globals'
import jest from 'jest-mock';
import { calculateDiscount } from '../__JS__/mock__code';
import { getUserById, sendEmail } from '../__JS__/mock__service';

// ^ MOCKING THE FUNCTIONS
jest.mock('../__JS__/mock__service', () => ({
    getUserById: jest.fn(),
    sendEmail: jest.fn(),
}));

it("SHOULD CALCULATE THE DISCOUNT" ,() => {
        sendEmail.mockClear();
        getUserById.mockReturnValue({
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            purchaseCount: 5,
        });
    })

    it("SHOULD SEND AN EMAIL TO THE USER" ,() => {

    })
    it("SHOULD NOT SEND AN EMAIL TO THE USER" ,() => {
        
    })


 
import { PaymentInputsValidation } from "../src/Business/validation/PaymentInputsValidation";
import { RegisterPaymentDTO } from "../src/Model/types";


const PaymentInputsValidationMock = new PaymentInputsValidation()

const inputsMock:RegisterPaymentDTO = {
    client_id: 'client',
    buyer_name: 'Will',
    buyer_email: 'Will@bayer.com',
    buyer_CPF: '839.672.910-73',
    type :'credcard',
    card_name:'Will Bayers', 
    card_number:5489702075716423, 
    card_expiration:'19/04/2023', 
    card_CVV:935
}

describe('test class PaymentInputsValidation', () => {
    describe('test register inputs',()=> {
        test('test missing client_id',()=> {
            const inputs = inputsMock
            inputs.client_id = ''
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.client_id = 'client'
                expect(error.message).toEqual('Missing client Id')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing buyer name',()=> {
            const inputs = inputsMock
            inputs.buyer_name = ''
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_name = 'Will'
                expect(error.message).toEqual('Missing buyer name')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing buyer email',()=> {
            const inputs = inputsMock
            inputs.buyer_email = ''
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_email = 'Will@bayer.com'
                expect(error.message).toEqual('Missing buyer email')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test inválid email',()=> {
            const inputs = inputsMock
            inputs.buyer_email = 'Willbayer.com'
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_email = 'Will@bayer.com'
                expect(error.message).toEqual('Inválid email')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing buyer CPF',()=> {
            const inputs = inputsMock
            inputs.buyer_CPF = ''
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_CPF = '839.672.910-73'
                expect(error.message).toEqual('Missing buyer CPF')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing payment type',()=> {
            const inputs = inputsMock
            inputs.type = ''
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.type = 'credcard'
                expect(error.message).toEqual('Inválid payment type')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test payment type invalid',()=> {
            const inputs = inputsMock
            inputs.type = 'PayPal'
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.type = 'credcard'
                expect(error.message).toEqual('Inválid payment type')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing credcard name',()=> {
            const inputs = inputsMock
            inputs.card_name = ''
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_name = 'Will Bayers'
                expect(error.message).toEqual('Missing credcard name')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing credcard number',()=> {
            const inputs = inputsMock
            inputs.card_number = undefined
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_number = 5489702075716423
                expect(error.message).toEqual('Missing credcard number')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test credcard number length invalid',()=> {
            const inputs = inputsMock
            inputs.card_number = 123
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_number = 5489702075716423
                expect(error.message).toEqual('Credcard number inválid')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing credcard expiration date',()=> {
            const inputs = inputsMock
            inputs.card_expiration = ''
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_expiration = '04/2023'
                expect(error.message).toEqual('Missing credcard expiration')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing credcard CVV',()=> {
            const inputs = inputsMock
            inputs.card_CVV = undefined
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_CVV = 935
                expect(error.message).toEqual('Missing card CVV')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test inválid CVV',()=> {
            const inputs = inputsMock
            inputs.card_CVV = 2
            try {
                PaymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_CVV = 935
                expect(error.message).toEqual('Inválid card CVV')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
    })
    
})
import { PaymentInputsValidation } from "../src/Business/validation/PaymentInputsValidation";
import { PaymentBusiness } from "../src/Business/PaymentBusiness"
import { IdGeneratorMock } from "./Mock/idGeneratorMock"
import { PaymentDataMock } from "./Mock/PaymentDataMock"
import { PaymentInputsValidationMock } from "./Mock/PaymentInputsValidationMock"

const paymentInputsValidationMock = new PaymentInputsValidation()

const inputsMock = {
    clientId: 'client' as any,
    buyer_name: 'Will' as any,
    buyer_email: 'Will@bayer.com' as any,
    buyer_CPF: '839.672.910-73' as any,
    amount: 250 as any,
    type : 'credidcard' as any,
    card_name: 'Will Bayers' as any, 
    card_number: 5489702075716423 as any, 
    card_expiration: '19/04/2023' as any, 
    card_CVV: 935 as any
}

describe('test class PaymentInputsValidation', () => {
    describe('test register method',()=> {
        test('test missing client_id',()=> {
            const inputs = inputsMock
            inputs.clientId = ''
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.clientId = 'client'
                expect(error.message).toEqual('Inválid client Id')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test inválid client_id',()=> {
            const inputs = inputsMock
            inputs.clientId = 5236
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.clientId = 'client'
                expect(error.message).toEqual('Inválid client Id')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing buyer name',()=> {
            const inputs = inputsMock
            inputs.buyer_name = ''
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_name = 'Will'
                expect(error.message).toEqual('Inválid buyer name')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test inválid buyer name',()=> {
            const inputs = inputsMock
            inputs.buyer_name = false
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_name = 'Will'
                expect(error.message).toEqual('Inválid buyer name')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing buyer email',()=> {
            const inputs = inputsMock
            inputs.buyer_email = ''
            try {
                paymentInputsValidationMock.Register(inputs)
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
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_email = 'Will@bayer.com'
                expect(error.message).toEqual('Inválid email')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing buyer CPF',() => {
            const inputs = inputsMock
            inputs.buyer_CPF = ''
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_CPF = '839.672.910-73'
                expect(error.message).toEqual('Missing buyer CPF')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test invalid buyer CPF', () => {
            const inputs = inputsMock
            inputs.buyer_CPF = '839_672:910+73'
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_CPF = '839.672.910-73'
                expect(error.message).toEqual('Inválid buyer CPF')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test inválid2 buyer CPF',()=> {
            const inputs = inputsMock
            inputs.buyer_CPF = {id:'asd'}
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.buyer_CPF = '839.672.910-73'
                expect(error.message).toEqual('Inválid buyer CPF')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test inválid amount',()=> {
            const inputs = inputsMock
            inputs.amount = undefined
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.amount = 250
                expect(error.message).toEqual('Inválid amount')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing payment type',()=> {
            const inputs = inputsMock
            inputs.type = ''
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.type = 'creditcard'
                expect(error.message).toEqual('Invalid payment type, acceptable CREDITCARD, BOLETO')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test payment type invalid',()=> {
            const inputs = inputsMock
            inputs.type = 'PayPal'
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.type = 'creditcard'
                expect(error.message).toEqual('Invalid payment type, acceptable CREDITCARD, BOLETO')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing credcard name',()=> {
            const inputs = inputsMock
            inputs.card_name = ''
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_name = 'Will Bayers'
                expect(error.message).toEqual('Missing credcard name')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test inválid credcard name',()=> {
            const inputs = inputsMock
            inputs.card_name = []
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_name = 'Will Bayers'
                expect(error.message).toEqual('Missing credcard name')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test invalid credcard number',()=> {
            const inputs = inputsMock
            inputs.card_number = []
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_number = 5489702075716423
                expect(error.message).toEqual('Credcard number inválid')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing credcard number',()=> {
            const inputs = inputsMock
            inputs.card_number = ''
            try {
                paymentInputsValidationMock.Register(inputs)
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
                paymentInputsValidationMock.Register(inputs)
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
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_expiration = '04/2023'
                expect(error.message).toEqual('Missing credcard expiration')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test iválid credcard expiration date',()=> {
            const inputs = inputsMock
            inputs.card_expiration = '12/2020'
            try {
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_expiration = '04/2023'
                expect(error.message).toEqual('Inválid credcard expiration')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test missing credcard CVV',()=> {
            const inputs = inputsMock
            inputs.card_CVV = undefined
            try {
                paymentInputsValidationMock.Register(inputs)
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
                paymentInputsValidationMock.Register(inputs)
            } catch (error:any) {
                inputs.card_CVV = 935
                expect(error.message).toEqual('Inválid card CVV')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test corrent inputs',()=> {
            const inputs = inputsMock
            try {
                const insert =  jest.fn(
                    (inputs) => paymentInputsValidationMock.Register(inputs)
                )
                const result = insert(inputs)
                expect(insert).toBeCalled()
                expect(insert).toBeCalledWith(inputs)
                expect(result).toBeUndefined()
                expect(insert).toHaveReturned()
            } catch (error:any) {
                console.log(error.statusCode,error.message)
            } finally {
                expect.assertions(4)
            }
        })
    })
    describe('test status method', () => {
        test('test missing payment_id', () => {
            const input = {payment_id: '', payment_Type: 'boleto'}
            try {
                paymentInputsValidationMock.Status(input)
            } catch (error:any) {
                expect(error.message).toEqual('Inválid payment ID')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
    })
})

const PaymentBusinessMock = new PaymentBusiness(
    new PaymentInputsValidationMock() as unknown as PaymentInputsValidation,
    new PaymentDataMock(),
    new IdGeneratorMock()
)
describe('test class PaymentBusiness', () => {
    describe('test register method', () => {
        test('test client not found', async () => {
            const inputs = inputsMock
            try {
                await PaymentBusinessMock.register(inputs)
            } catch (error:any) {
                expect(error.message).toEqual('Client not Found')
                expect(error.statusCode).toStrictEqual(404)
            } finally {
                expect.assertions(2)
            }
        })
    })
})


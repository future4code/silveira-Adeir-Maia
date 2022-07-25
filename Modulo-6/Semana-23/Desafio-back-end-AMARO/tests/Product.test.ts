import { InputsValidation } from "../src/Business/DataValidation/InputsValidation";


const inputsValidationMock = new InputsValidation()

const inputs = {
            name: 'name' as any,
            tags: ['abc','def','ghi'] as any
        }

describe('test class InputsValidation', () => {
    describe('test resgister method', () => {
        test('test missing  product name', () => {
            inputs.name = ''
            try {
                inputsValidationMock.register(inputs)
            } catch (error:any) {
                inputs.name = 'name'
                expect(error.message).toEqual('O nome do produto é inválido!')
                expect(error.statusCode).toStrictEqual(422)
            }
        })
        test('test tags format inválid', () => {
            inputs.tags = undefined
            try {
                inputsValidationMock.register(inputs)
            } catch (error:any) {
                inputs.name = ['abc','def','ghi']
                expect(error.message).toEqual('Tags inválidas')
                expect(error.statusCode).toStrictEqual(422)
            }
        })
        test('test tags format inválid 1', () => {
            inputs.tags = {tag:'abc'}
            try {
                inputsValidationMock.register(inputs)
            } catch (error:any) {
                inputs.name = ['abc','def','ghi']
                expect(error.message).toEqual('Tags inválidas')
                expect(error.statusCode).toStrictEqual(422)
            }
        })
        test('test tags format inválid 3', () => {
            inputs.tags = ['name',123,'outher']
            try {
                inputsValidationMock.register(inputs)
            } catch (error:any) {
                inputs.name = ['abc','def','ghi']
                expect(error.message).toEqual('A tag 123 é inválida')
                expect(error.statusCode).toStrictEqual(422)
            }
        })
    })
})
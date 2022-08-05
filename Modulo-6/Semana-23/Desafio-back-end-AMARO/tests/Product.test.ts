import { InputsValidation } from "../src/Business/DataValidation/InputsValidation";
import { ProductBusiness } from "../src/Business/ProductBusiness";
import { IdGeneratorMock } from "./Mock/IdGeneratorMock";
import { inputsValidationMock } from "./Mock/InputsValidationMock";
import { ProductDataMock } from "./Mock/ProductDataBaseMock";
import { product1, product3, product4 } from "./Mock/ProductsMock";


const inputsValidationMocks = new InputsValidation()

const inputs = {
            id: 'id' as  any,
            name: 'name' as any,
            tags: ['abc','def','ghi'] as any
        }

describe('test class InputsValidation', () => {
    describe('test resgister method', () => {
        test('test missing  product name', () => {
            inputs.name = ''
            try {
                inputsValidationMocks.register(inputs)
            } catch (error:any) {
                inputs.name = 'name'
                expect(error.message).toEqual('O nome do produto é inválido!')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test tags format inválid', () => {
            inputs.tags = undefined
            try {
                inputsValidationMocks.register(inputs)
            } catch (error:any) {
                inputs.tags = ['abc','def','ghi']
                expect(error.message).toEqual('Tags inválidas')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test tags format inválid 1', () => {
            inputs.tags = {tag:'abc'}
            try {
                inputsValidationMocks.register(inputs)
            } catch (error:any) {
                inputs.tags = ['abc','def','ghi']
                expect(error.message).toEqual('Tags inválidas')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test tags format inválid 3', () => {
            inputs.tags = ['name',123,'outher']
            try {
                inputsValidationMocks.register(inputs)
            } catch (error:any) {
                inputs.tags = ['abc','def','ghi']
                expect(error.message).toEqual('A tag 123 é inválida')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test data valid ', ()=> {
            try {
                const insert =  jest.fn(
                    (input) => inputsValidationMocks.register(input)
                )
                const result = insert(inputs)
                expect(insert).toBeCalled()
                expect(insert).toBeCalledWith(inputs)
                expect(result).toBeUndefined()
                expect(insert).toHaveReturned()
            } catch (error:any) {
                console.log(error.message)
            } finally {
                expect.assertions(4)
            }
        })
    })
    describe('test search method', () => {
        test('test missing all search terms', () => {
            inputs.id = undefined,
            inputs.name = undefined
            inputs.tags = undefined
            try {
                inputsValidationMocks.search(inputs)
            } catch (error:any) {
                inputs.id = 'id',
                inputs.name = 'name'
                inputs.tags = ['abc','def','ghi']
                expect(error.message).toEqual('Não foi passado um termo para busca')
                expect(error.statusCode).toStrictEqual(422)
            } finally {
                expect.assertions(2)
            }
        })
        test('test data valid ', ()=> {
            try {
                const insert =  jest.fn(
                    (input) => inputsValidationMocks.search(input)
                )
                const result = insert(inputs)
                expect(insert).toBeCalled()
                expect(insert).toBeCalledWith(inputs)
                expect(result).toBeUndefined()
                expect(insert).toHaveReturned()
            } catch (error:any) {
                console.log(error.message)
            } finally {
                expect.assertions(4)
            }
        })
    })
})

const productBusinessMock = new ProductBusiness(
    new inputsValidationMock() as unknown as InputsValidation,
    new ProductDataMock(),
    new IdGeneratorMock()

)

describe('test class ProductBusiness' , () => {
    describe('test register method', ()=> {
        test('test product already register', async () => {
            inputs.name = 'name2'
            try {
                await productBusinessMock.register(inputs)
            } catch (error:any) {
                inputs.name = 'name'
                expect(error.message).toEqual('Produto já registrado!')
                expect(error.statusCode).toStrictEqual(409)
            } finally {
                expect.assertions(2)
            }
        })
        test('test new product', async () => {
            
            try {
                await productBusinessMock.register(inputs)
            } catch (error:any) {
                expect(error.message).toEqual("Cannot read properties of undefined (reading 'id')")
            } finally {
                expect.assertions(1)
            }
        })
    })
    describe('test searc method', () => {
        test('search by id', async () => {
            const input = {id: 'id1',name:undefined as any, tags: undefined as any}
            const result = await productBusinessMock.search(input)
            expect(result).toEqual(product1)
        })
        test('search by name', async () => {
            const input = {id: '',name:'name' as any, tags: undefined as any}
            const result = await productBusinessMock.search(input)
            expect(result).toEqual([product3])
        })
        test('search by tags', async () => {
            const input = {id: '',name:undefined as any, tags: ['tag'] as any}
            const result = await productBusinessMock.search(input)
            expect(result).toEqual([product4])
        })
    })
})
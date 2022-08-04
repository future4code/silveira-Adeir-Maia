import { ParticipationBusiness } from "../src/Business/ParticipationBusiness"
import { ParticipationDataMock } from "./Mock/ParticipationDataMock"

const ParticipationBusinessMock = new ParticipationBusiness(new ParticipationDataMock())

const inputs = {
    fristName: 'Adeir' as any,
    lastName: 'Moreira' as any,
    participation: 20 as any
}

describe('test ParticipationBusiness class', () => {
    describe('test insert method',() => {
        test('test missing frist name', async () => {
            inputs.fristName = ''
            try {
                await ParticipationBusinessMock.insert(inputs)
            } catch (error:any) {
                inputs.fristName = 'Adeir'
                expect(error.message).toEqual('Não foi passado um nome ou sobrenome')
            } finally {
                expect.assertions(1)
            }
        })
        test('test missing last name', async () => {
            inputs.lastName = ''
            try {
                await ParticipationBusinessMock.insert(inputs)
            } catch (error:any) {
                inputs.lastName = 'Moreira'
                expect(error.message).toEqual('Não foi passado um nome ou sobrenome')
            } finally {
                expect.assertions(1)
            }
        })
        test('test missing participation', async () => {
            inputs.participation = undefined
            try {
                await ParticipationBusinessMock.insert(inputs)
            } catch (error:any) {
                inputs.participation = 20
                expect(error.message).toEqual('Não foi passada uma participação')
            } finally {
                expect.assertions(1)
            }
        })
        test('test corrent inputs', async () => {
            try {
                const insert = jest.fn((inputs:any) => {
                ParticipationBusinessMock.insert(inputs)
                })
                const result = insert(inputs)
                expect(insert).toBeCalled()
                expect(insert).toBeCalledWith(inputs)
                expect(result).toBeUndefined()
                expect(insert).toHaveReturned()
            } catch (error:any) {
            } finally {
                expect.assertions(4);
            }
        })
    })
    describe('test select method', () => {
        test('test response', async () => {
            const result = await ParticipationBusinessMock.select()
            expect(result).toEqual([inputs])
        })
    })
    describe('test update method', () => {
        test('test missing frist name', async () => {
            inputs.fristName = ''
            try {
                await ParticipationBusinessMock.update(inputs)
            } catch (error:any) {
                inputs.fristName = 'Adeir'
                expect(error.message).toEqual('Não foi passado um nome ou sobrenome')
            } finally {
                expect.assertions(1)
            }
        })
        test('test missing last name', async () => {
            inputs.lastName = ''
            try {
                await ParticipationBusinessMock.update(inputs)
            } catch (error:any) {
                inputs.lastName = 'Moreira'
                expect(error.message).toEqual('Não foi passado um nome ou sobrenome')
            } finally {
                expect.assertions(1)
            }
        })
        test('test missing participation', async () => {
            inputs.participation = undefined
            try {
                await ParticipationBusinessMock.update(inputs)
            } catch (error:any) {
                inputs.participation = 20
                expect(error.message).toEqual('Não foi passada uma participação')
            } finally {
                expect.assertions(1)
            }
        })
        test('test corrent inputs', async () => {
            try {
                const insert = jest.fn((inputs:any) => {
                ParticipationBusinessMock.update(inputs)
                })
                const result = insert(inputs)
                expect(insert).toBeCalled()
                expect(insert).toBeCalledWith(inputs)
                expect(result).toBeUndefined()
                expect(insert).toHaveReturned()
            } catch (error:any) {
            } finally {
                expect.assertions(4);
            }
        })
    })
    describe('test delete method', () => {
        test('test missing frist name', async () => {
            inputs.fristName = ''
            try {
                await ParticipationBusinessMock.update(inputs)
            } catch (error:any) {
                inputs.fristName = 'Adeir'
                expect(error.message).toEqual('Não foi passado um nome ou sobrenome')
            } finally {
                expect.assertions(1)
            }
        })
        test('test missing last name', async () => {
            inputs.lastName = ''
            try {
                await ParticipationBusinessMock.update(inputs)
            } catch (error:any) {
                inputs.lastName = 'Moreira'
                expect(error.message).toEqual('Não foi passado um nome ou sobrenome')
            } finally {
                expect.assertions(1)
            }
        })
        test('test corrent inputs', async () => {
            try {
                const insert = jest.fn((inputs:any) => {
                ParticipationBusinessMock.update(inputs)
                })
                const result = insert(inputs)
                expect(insert).toBeCalled()
                expect(insert).toBeCalledWith(inputs)
                expect(result).toBeUndefined()
                expect(insert).toHaveReturned()
            } catch (error:any) {
            } finally {
                expect.assertions(4);
            }
        })
    })
})
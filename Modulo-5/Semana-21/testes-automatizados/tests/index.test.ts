import { cassino1, cassino2, Purchase, User, users, verifyAge } from "../src";

describe("testando o usuário", ()=> {
    test("testar o saldo maior que a compra", ()=> {
        const user:User = {
            name:'astrodev',
            balance:100
        }

        const result = Purchase(user,40)

        expect(result).toEqual({
            name:'astrodev',
            balance: 60
        })
    })

    test("testar o saldo igual a compra", () => {
        const user:User = {
            name:'astrodev',
            balance:100
        }

        const result = Purchase(user,100)

        expect(result).toEqual({
            name:'astrodev',
            balance: 0
        })
    })

    test("testar o saldo maior a compra", () => {
        const user:User = {
            name:'astrodev',
            balance:100
        }

        const result = Purchase(user,150)

        expect(result).not.toBeDefined()
    })
})

describe("testando o cassino", () => {
    test("teste cassino1", () => {
        const result = verifyAge(cassino1,users)
        console.log(result)

        expect(result).toEqual({
            brazilians: {allowed:['Eduardo Cunha','Flávio Bolsonaro'],unallowed:['Felipe Neto']},
            americans: {allowed:['Danny Ocean','Rusty Ryan'],unallowed:['Linis Caldwell']}
        })
    })

    test("teste cassino2", () => {
        const result = verifyAge(cassino2,users)
        console.log(result)

        expect(result).toEqual({
            brazilians: {allowed:['Eduardo Cunha','Flávio Bolsonaro'],unallowed:['Felipe Neto']},
            americans: {allowed:['Danny Ocean','Rusty Ryan','Linis Caldwell'],unallowed:[]}
        })
    })
    test('Brasizileiro', ()=> {
        const result = verifyAge(cassino2,[users[3]])
        console.log(result.brazilians.allowed)
        expect(result.brazilians.allowed).toEqual(["Eduardo Cunha"]);
    })
})
import { performAtack, validateCharacter } from "../src"
import { Character } from "../src/types/Types"

describe("Character Test", ()=> {
    test("testar o nome vazio", ()=> {
        const caracter:Character = {
            name : '',
            life : 50,
            strength : 50,
            defense : 50
        } 
        const result = validateCharacter(caracter)
        expect(result).toBe(false)
    })

    test("testar life 0" , () => {
        const caracter:Character = {
            name : 'Light Yagami',
            life : 0,
            strength : 50,
            defense : 50
        }
        const result = validateCharacter(caracter)
        expect(result).toBe(false)
    })

    test("testar strengh 0" , () => {
        const caracter:Character = {
            name : 'Light Yagami',
            life : 200,
            strength : 0,
            defense : 300
        }
        const result = validateCharacter(caracter)
        expect(result).toBe(false)
    })

    test("testar defense 0" , () => {
        const caracter:Character = {
            name : 'Light Yagami',
            life : 800,
            strength : 500,
            defense : 0
        }
        const result = validateCharacter(caracter)
        expect(result).toBe(false)
    })

    test("testar defense -0" , () => {
        const caracter:Character = {
            name : 'Light Yagami',
            life : 800,
            strength : 500,
            defense : -50
        }
        const result = validateCharacter(caracter)
        expect(result).toBe(false)
    })

    test("testar parametro certos" , () => {
        const caracter:Character = {
            name : 'Light Yagami',
            life : 800,
            strength : 500,
            defense : 400
        }
        const result = validateCharacter(caracter)
        expect(result).toBe(true)
    })
})

describe("Testar ataque", () => {
    const mock = jest.fn(()=> {
        const caracter:Character = {
            name : 'L Lawliet',
            life : 500,
            strength : 900,
            defense : 600
        }
        return caracter
    })
    

    const validatorMocktrue = jest.fn(() => {
        return true
    });

    const validatorMockfalse = jest.fn(() => {
        return false
    });

    test("ataque", ()=> {
        const validatorMocktrue = jest.fn(() => {
            return true
        });

        const atacker:Character = {
            name : 'Light Yagami',
            life : 800,
            strength : 750,
            defense : 400
        }

        const defender:Character = {
            name : 'L Lawliet',
            life : 500,
            strength : 900,
            defense : 600
        }

        performAtack(atacker,defender, validatorMocktrue as any)

        expect(defender.life).toEqual(350)
        expect(validatorMocktrue).toHaveBeenCalled();
        expect(validatorMocktrue).toHaveBeenCalledTimes(2);
        expect(validatorMocktrue).toHaveReturnedTimes(2);
    })

    test("ataque", ()=> {
        expect.assertions(4)

        const validatorMocktrue = jest.fn(() => {
            return false
        });

        const atacker:Character = {
            name : '',
            life : 800,
            strength : 750,
            defense : 400
        }

        const defender:Character = {
            name : 'L Lawliet',
            life : 500,
            strength : 900,
            defense : 600
        }

        try {
            performAtack(atacker,defender, validatorMocktrue as any)
        } catch (error) {
            expect(error.message).toBe('Atacante ou defensor invalido');
            expect(validatorMocktrue).toHaveBeenCalled();
            expect(validatorMocktrue).toHaveBeenCalledTimes(1);
            expect(validatorMocktrue).toHaveReturnedTimes(1);
        }
    })
})
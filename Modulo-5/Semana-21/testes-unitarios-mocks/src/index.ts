import { Character } from "./types/Types"

export const validateCharacter = (input:Character) => {
    if(!input.name || !input.life || !input.defense || !input.strength){
        return false
    }
    if(input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false
    }
    return true
}

export const performAtack = (atacker:Character,defender:Character,validator:(input:Character) => boolean) => {
    if(!validator(atacker) || ! validator(defender)) {
        throw new Error('Atacante ou defensor invalido')
    }
    if(atacker.strength > defender.defense) {
        defender.life -= atacker.strength - defender.defense
    }
}
import { CustonError } from "../../Model/CustonError/CustonError";
import { RegisterInputsDTO } from "../../Model/types";


export class InputsValidation {
    register = (inputs:RegisterInputsDTO) => {
        this.name(inputs.name)
        this.tag(inputs.tags)
    }

    private name = (name:string):void => {
        if(!name || typeof(name) !== 'string') {
        throw new CustonError(422,'O nome do produto é inválido!')
        }
    }
    
    private tag = (tags:string[]):void => {
        if(typeof(tags) !== 'object' || !tags.length) {
            throw new CustonError(422,'Tags inválidas')
        }
        
        tags.map(tag => {
            if(typeof(tag) !== 'string') {
                throw new CustonError(422,`A tag ${tag} é inválida`)
            }
        })
    }
}
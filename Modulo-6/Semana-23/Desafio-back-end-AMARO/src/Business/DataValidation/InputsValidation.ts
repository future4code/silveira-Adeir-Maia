import { CustonError } from "../../Model/CustonError/CustonError";
import { RegisterInputsDTO, SearchInputsDTO } from "../../Model/types";


export class InputsValidation {
    register = (inputs:RegisterInputsDTO) => {
        this.name(inputs.name)
        this.tag(inputs.tags)
    }

    search = (inputs:SearchInputsDTO) => {
        this.searchTerm(inputs)
        inputs.id && this.id(inputs.id)
        inputs.name &&  this.name(inputs.name)
        inputs.tags && this.tag(inputs.tags)
    }

    
    private id = (id:string):void => {
        if(!id || typeof(id) !== 'string') {
            throw new CustonError(422,'Id inválido')
        }
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

    private searchTerm = (inputs:SearchInputsDTO):void => {
        if(!inputs.id && !inputs.name && !inputs.tags){
            throw new CustonError(422,'Não foi passado um termo para busca')
        }
    }
}
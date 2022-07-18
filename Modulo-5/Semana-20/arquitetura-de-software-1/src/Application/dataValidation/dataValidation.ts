import CustomError from "../../Model/CustonError";
import { User, USER_ROLE } from "../../Model/User";

export default class dataValidation {
    create = (inputs:User) => {
        if(!inputs.name || !inputs.email || !inputs.password || !inputs.role){
            throw new CustomError(422,'Um ou mais paramentros não foi passado!')
        }
        if(!this.checkEmailFormat(inputs.email)) {
            throw new CustomError(422,'Email inválido!')
        }
        if(inputs.password.length < 6) {
            throw new CustomError(422,'A senha de ter ao menos 6 caracteres!')
        }
        if(!(inputs.role in USER_ROLE)) {
            throw new CustomError(422,"O Usuário deve ser do tipo 'ADMIN' ou 'NORMAL'.")
        }
    }

    login = (email:string,password:string) => {
        if(!email || !password) {
            throw new CustomError(422,'O email ou a senha não foram passados')
        }
    }

    token = (token:string) => {
        if(!token || token.length < 216 || token.length > 217){
            throw new CustomError(422,'Token inválido')
        }
    }

    
    delete = (token:string,id:string) => {
        if(!token || token.length < 216 || token.length > 217){
            throw new CustomError(422,'Token inválido')
        }
        if(!id) {
            throw new CustomError(422,'O id não foi passado.')
        }
    }
    private checkEmailFormat = (email:string):boolean => {
        const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
        return emailValid.test(email)
    }
}
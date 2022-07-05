import CustomError from "../../Model/CustonError";
import { loginInputDTO, UserInputDTO } from "../../Model/Types";

export default class DataValidation {
    signup = (inputs:UserInputDTO) => {
        if(!inputs.name || !inputs.email || !inputs.password) {
            throw new CustomError(422,'Um ou mais paramentros não foi passado!')
        }
        if(!this.checkEmailFormat(inputs.email)) {
            throw new CustomError(422,'Email inválido!')
        }
        if(inputs.password.length < 6) {
            throw new CustomError(422,'A senha de ter ao menos 6 caracteres!')
        }
    }

    login = (inputs:loginInputDTO) => {
        if(!inputs.email || !inputs.password) {
            throw new CustomError(422,'Um ou mais paramentros não foi passado!')
        }
    }

    private checkEmailFormat = (email:string):boolean => {
        const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
        return emailValid.test(email)
    }
}
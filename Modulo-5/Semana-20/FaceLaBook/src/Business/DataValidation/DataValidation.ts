import CustomError from "../../Model/CustonError";
import { FollowInputDTO, GetByIdInputDTO, LoginInputDTO, PostInputDTO, POST_TYPE, UserInputDTO } from "../../Model/Types";

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

    login = (inputs:LoginInputDTO) => {
        if(!inputs.email || !inputs.password) {
            throw new CustomError(422,'Um ou mais paramentros não foi passado!')
        }
    }

    postCreate = (inputs:PostInputDTO) => {
        if(!inputs.photo || !inputs.description || !inputs.type){
            throw new CustomError(422,'Um ou mais paramentros não foi passado!')
        }
        if(!(inputs.type in POST_TYPE)) {
            throw new CustomError(422,"O tipo do post de ser 'NORMAL' ou 'EVENTO'.")
        }
        if(!inputs.token){
            throw new CustomError(401,'Token inválido')
        }
    }

    getPostById = (inputs:GetByIdInputDTO) => {
        if(!inputs.id){
            throw new CustomError(422,"O Id não foi passado")
        }
        if(!inputs.token){
            throw new CustomError(401,'Token inválido')
        }
    }

    follow = (inputs:FollowInputDTO) => {
        if(!inputs.friend_id){
            throw new CustomError(422,"O Id não foi passado")
        }
        if(!inputs.token){
            throw new CustomError(401,'Token inválido')
        }
    }

    unFollow = (inputs:FollowInputDTO) => {
        if(!inputs.friend_id){
            throw new CustomError(422,"O Id não foi passado")
        }
        if(!inputs.token){
            throw new CustomError(401,'Token inválido')
        }
    }

    feed = (token:string) => {
        if(!token){
            throw new CustomError(401,'Token inválido')
        }
    }

    private checkEmailFormat = (email:string):boolean => {
        const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
        return emailValid.test(email)
    }

    // DateReverted  = (result:Post):Post => {
    //     const dateReverted = new Date(result.getCriationDate()).toISOString().slice(0, 10).split("-").reverse().join("/");
    //     result.setCriationDate(dateReverted)
    //     return result
    // }
}
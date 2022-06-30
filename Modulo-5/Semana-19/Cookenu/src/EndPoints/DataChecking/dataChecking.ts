import UserDataBase from "../../Data/UserDataBase"
import { User, USER_ROLE } from "../../Model/Entities/User"
import { Checking } from "../../Model/Types"

export default class DataChecking {
    signUp = async (nome:string,email:string,password:string,role:string):Promise<Checking | undefined> => {
        if(!nome || !email || !password || !role) {
            const response = {
                statusCode : 422,
                message: 'Um ou mais parametros não foi passado.'
            }
            return response
        }
        if(!checkEmailFormat(email)) {
            const response = {
                statusCode : 422,
                message: 'O email informado é inválido.'
            }
            return response
        }
        if(password.length <6) {
            const response = {
                statusCode : 422,
                message: 'Senha deve ter no mínimo 6 caracteres.'
            }
            return response
        }
        if(!(role in USER_ROLE)) {
            const response = {
                statusCode : 422,
                message: 'O Usuário deve ser do tipo "ADMIN" ou "NORMAL."'
            }
            return response
        }
        if(await alreadtExistCheck(email)){
            const response = {
                statusCode : 409,
                message: 'Já existe um usuário cadastrado com esse email."'
            }
            return response
        }
    }

    Login = (nome:string,email:string): Checking | undefined => {
        if(!nome || !email) {
            const response = {
                statusCode : 422,
                message: 'O Email ou a senha não foram passados'
            }
            return response
        }
    }

    Profile = (token:string):Checking | undefined => {
        if(!token || token.length !== 216){
            const response = {
                statusCode : 422,
                message: 'Token inválido'
            }
            return response
        }
    }

    CreateRecipe = (token:string,title:string,description:string):Checking | undefined => {
        if(!title || !description) {
            const response = {
                statusCode : 422,
                message: 'O Email ou a senha não foram passados'
            }
            return response
        }
        if(!token || token.length !== 216){
            const response = {
                statusCode : 422,
                message: 'Token inválido'
            }
            return response
        }
    }
    
}

const checkEmailFormat = (email:string):boolean => {
    const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
    return emailValid.test(email)
}

const alreadtExistCheck =  async (email:string):Promise< User | undefined> => {
    const userDB = new UserDataBase()
    return await userDB.getByEmail(email)
}
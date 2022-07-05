import userDataBase from "../Data/UserDataBase";
import CustomError from "../Model/CustonError";
import { User, UserEntitie, USER_ROLE } from "../Model/User";
import Authentication from "../Services/Authentication";
import { HashManager } from "../Services/HashManager";
import IdGenerator from "../Services/IDGenerator";
import dataValidation from "./dataValidation/dataValidation";

export default class UserApplication {
    create = async (inputs:User) => {
        const {name,email,password,role} = inputs
        try {
            new dataValidation().create(inputs)

            const id = new IdGenerator().generator()

            const hashPassword = new HashManager().hash(password)

            const user:UserEntitie = {id,name,email,password:hashPassword,role}

            await new userDataBase().insert(user)

            return  new Authentication().generateToken({id,role})
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }

    login = async (email:string,password:string) => {
        try {
            new dataValidation().login(email,password)

            const user = await new userDataBase().seletByEmail(email)
            if(!user) {
                throw new CustomError(404,'Não há nenhum usuário cadastrado com o email informado.')
            }
            const hash = new HashManager()
            if(user.email !== email || ( user && !hash.compare(password,user.password))){
                throw new CustomError(401,'Email ou senha incorretos!')
            }

            return new Authentication().generateToken({id:user.id,role:user.role})
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }

    all = (token:string) => {
        try {
            new dataValidation().token(token)

            new Authentication().getTokenData(token)

            return new userDataBase().allUser()
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    }

    delete = async (token:string,id:any) => {
        try {
            new dataValidation().delete(token,id)

            const tokenData = new Authentication().getTokenData(token)

            if(tokenData.role !== USER_ROLE.ADMIN) {
                throw new CustomError(401,'Apenas usuários com privilégios de ADMINISTRADOR podem deletar usuários')
            }

            await new userDataBase().delete(id)
        } catch (error:any) {
            throw new CustomError(error.statusCode,error.message)
        }
    } 
}
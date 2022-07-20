import CustomError from "../Model/CustonError";
import { User } from "../Model/User";
import { UserByDataBase } from "../Model/UserByDataBase";
import BaseDataBase from "./BaseDataBase";

export default class UserData extends BaseDataBase {
    protected TABLE_NAME = 'FaceLabook_Users'

    insert = async (user:User) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(user)
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    selectByEmail = async (email:string) => {
        try {
            const result =  await BaseDataBase.connection(this.TABLE_NAME).select('*').where({email})
            const UserByDataBase:UserByDataBase = {id: result[0].id, name:result[0].name, email: result[0].email, password: result[0].password}
            return UserByDataBase
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    selectById = async (id:string) => {
        try {
            const result =  await BaseDataBase.connection(this.TABLE_NAME).select('*').where({id})
            const UserByDataBase:UserByDataBase = result && {id: result[0].id, name:result[0].name, email: result[0].email, password: result[0].password}
            return UserByDataBase
        } catch (error:any) {
            if(!error.sqlMessage) {
                throw new CustomError(404,'O perfil a ser seguido não foi encontrado!')
            }
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }
}
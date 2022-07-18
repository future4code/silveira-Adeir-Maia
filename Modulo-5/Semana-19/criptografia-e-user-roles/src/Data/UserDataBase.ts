import  { UserType } from "../Model/types";
import User from "../Model/class";
import BaseDataBase from "./BaseDataBase";

export default class UserDataBase extends BaseDataBase{
    singUp = async (user:User):Promise<void> => {
        try {
            await BaseDataBase.connection('User')
            .insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        })
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    getByEmail = async (email:string):Promise<UserType[] | []> => {
        try {
            const result =  await BaseDataBase.connection('User')
            .select('*')
            .where({email})
            return result
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    getBYId = async (id:string):Promise<UserType[] | []> => {
        try {
            const result =  await BaseDataBase.connection('User')
            .select('*')
            .where({id})
            return result
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }
}
import User, { UserType } from "../Model/types";
import BaseDataBase from "./BaseDataBase";

export default class UserDataBase extends BaseDataBase{
    create = async (user:User):Promise<void> => {
        try {
            await BaseDataBase.connection('User')
            .insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    };

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
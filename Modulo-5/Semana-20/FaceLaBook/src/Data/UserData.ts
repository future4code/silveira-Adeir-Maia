import CustomError from "../Model/CustonError";
import { User } from "../Model/User";
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
            const result=  await BaseDataBase.connection(this.TABLE_NAME).select('*').where({email})
            
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }
}
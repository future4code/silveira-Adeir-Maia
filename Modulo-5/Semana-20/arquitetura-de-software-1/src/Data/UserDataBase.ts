import CustomError from "../Model/CustonError";
import { User, UserEntitie } from "../Model/User";
import BaseDataBase from "./BaseDataBase";

export default class userDataBase extends BaseDataBase{
    insert = async (user:UserEntitie):Promise<void> => {
        try {
            await BaseDataBase.connection('User_Arq').insert(user)
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    seletByEmail = async (email:string):Promise<UserEntitie> => {
        try {
            const result =  await BaseDataBase.connection('User_Arq')
            .select('*')
            .where({email})

            return result[0]
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    allUser = ():Promise<UserEntitie[]> => {
        try {
            return  BaseDataBase.connection('User_Arq').select('*')
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    delete =  async (id:string) => {
        try {
            await BaseDataBase.connection('User_Arq').delete().where({id})
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }
}
import {User} from "../Model/Entities/User"
import BaseDataBase from "./BaseDataBase"

export default class UserDataBase  extends BaseDataBase{
    create = async (user:User):Promise<void> => {
        try {
            await BaseDataBase.connection('Coockenu_User').insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role : user.getRole()
            })
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    getByEmail = async (email:string):Promise<User> => {
        try {
            const result = await BaseDataBase.connection('Coockenu_User')
            .select('*')
            .where({email})
            return result[0] && User.toUserModel(result[0])
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    getById = async (id:string):Promise<User> => {
        try {
            const result = await BaseDataBase.connection('Coockenu_User')
            .select('id','name','email','role')
            .where({id})
            return result[0] && User.toUserModel(result[0])
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }
}
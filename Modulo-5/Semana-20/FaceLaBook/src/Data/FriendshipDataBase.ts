import CustomError from "../Model/CustonError"
import { FriendshipData } from "../Model/Types"
import BaseDataBase from "./BaseDataBase"


export default class FriendshipDataBase extends BaseDataBase{
    protected TABLE_NAME = 'FaceLabook_Friendship_Follows'

    insert = async (friendshipData:FriendshipData):Promise<void> => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(friendshipData)
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    select = async (friendship: FriendshipData):Promise<FriendshipData> => {
        try {
            const result = await BaseDataBase.connection(this.TABLE_NAME).select('*').where({user_id:friendship.user_id, friend_id: friendship.friend_id})
            const UserByDataBase:FriendshipData = result && {id: result[0].id, user_id:result[0].user_id, friend_id: result[0].friend_id}
            return UserByDataBase
        } catch (error:any) {
            if(!error.sqlMessage) {
                throw new CustomError(404,'Você não é amigo desse usuário')
            }
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    unFollow = async (friendship: FriendshipData):Promise<void> => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME)
            .delete()
            .where({user_id:friendship.user_id,friend_id:friendship.friend_id})
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }
}
import Follow from "../Model/Entities/Followrs"
import BaseDataBase from "./BaseDataBase"

export default class FollowrsDataBase extends BaseDataBase{
    follow = async (followData:Follow):Promise<void> => {
        try {
            await BaseDataBase.connection('Coockenu_Follows')
            .insert({
                id: followData.getId(),
                user_id: followData.getUser_Id(),
                follow_id: followData.getFollow_Id()
            })
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }

    unFollow = async (user_id:string,follow_id:string):Promise<void> => {
        try {
            await BaseDataBase.connection('Coockenu_Follows')
            .delete()
            .where({user_id,follow_id})
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new Error('Erro no banco de dados')
        }
    }
} 
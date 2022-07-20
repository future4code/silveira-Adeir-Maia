import CustomError from "../Model/CustonError";
import { Post } from "../Model/Post";
import { postByDatabase } from "../Model/Types";
import BaseDataBase from "./BaseDataBase";

export default class PostDataBase extends BaseDataBase{
    protected TABLE_NAME = 'FaceLabook_Posts'

    insert = async (post:Post) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(post)
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    select = async (id:string) => {
        try {
            const result = await BaseDataBase.connection(this.TABLE_NAME).select('*').where({id})
            const post:postByDatabase = {
                id: result[0].id,
                photo: result[0].photo,
                description: result[0].description,
                creation_date: result[0].creation_date,
                type: result[0].type,
                user_id: result[0].user_id
            } 
            return post
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }

    feed = async (id:string) => {
        try {
            const result = await BaseDataBase.connection('FaceLabook_Friendship_Follows')
            .select(
                'FaceLabook_Posts.id as id',
                'FaceLabook_Posts.photo as photo','FaceLabook_Posts.description as description',
                'FaceLabook_Posts.creation_date as criatedAt','FaceLabook_Posts.user_id as userID',   
                'FaceLabook_Users.name as name'
            )
            .join('FaceLabook_Users','FaceLabook_Users.id','=','FaceLabook_Friendship_Follows.friend_id')
            .join('FaceLabook_Posts','FaceLabook_Posts.user_id','=','FaceLabook_Friendship_Follows.friend_id')
            .where("FaceLabook_Friendship_Follows.user_id",id)

            return result
        } catch (error:any) {
            console.log({data:{message:error.sqlMessage}})
            throw new CustomError(500,'Erro no banco de dados')
        }
    }
}
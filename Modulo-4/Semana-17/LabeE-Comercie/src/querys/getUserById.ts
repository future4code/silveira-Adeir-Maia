import { connection } from "../connection";
import { User } from "../type";


export default async function  queryGetUserById(user_id:string):Promise<User[] | []> {
    return await connection("labecommerce_users").select("*").where({id:user_id})
}
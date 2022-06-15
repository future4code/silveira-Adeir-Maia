import { connection } from "../connection";

export default async function createUser(id:string, name:string,email:string,password:string):Promise<any> {
    return await connection.into("labecommerce_users").insert({id,name,email,password})
}
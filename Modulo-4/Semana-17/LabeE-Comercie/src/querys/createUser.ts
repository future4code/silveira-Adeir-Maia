import { connection } from "../connection";
import idGenerator from "../idGenerator";

export default async function queryCreateUser(name:string,email:string,password:string):Promise<number[]> {
    const id = idGenerator()
    return await connection.into("labecommerce_users").insert({id, name, email, password})
}
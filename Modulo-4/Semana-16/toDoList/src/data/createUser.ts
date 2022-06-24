import { connection } from "../connection";

export const createUser = (name:string,nickName:string,email:string) => {
    return connection.insert({name,nickName,email}).into("to_Do_List")
}
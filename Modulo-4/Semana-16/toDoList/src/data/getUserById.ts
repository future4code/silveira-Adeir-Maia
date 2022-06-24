import { connection } from "../connection";

export default function getUserById(id:string) {
    return connection("to_Do_List").select("id","nickName").where({id})
}
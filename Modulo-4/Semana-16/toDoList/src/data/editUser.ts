import { connection } from "../connection";

export default function editUser(name:string,nickName:string,id:number) {
    return connection("to_Do_List").update({name,nickName}).where({id})
}
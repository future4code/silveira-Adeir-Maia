import { connection } from "../connection";

export default function getAllUsers() {
    return connection("to_Do_List").select("id","nickName")
}
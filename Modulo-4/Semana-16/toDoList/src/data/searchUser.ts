import { connection } from "../connection";

export default function searchUser(query: string ) {
    return connection.raw(`
    SELECT to_Do_List.name, to_Do_List.nickName FROM to_Do_List WHERE name LIKE "%${query}%" OR nickName LIKE "%${query}%"
    `)
}
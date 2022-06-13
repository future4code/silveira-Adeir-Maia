import { connection } from "../connection";

export default function getTaskById(id:number) {
    return connection.raw(`
    SELECT Tasks.id as TaskId, Tasks.title as title, Tasks.description as description,
    Tasks.limitDate as limitDate, Tasks.status as status,
    to_Do_List.id as creatorUserId, to_Do_List.nickName as creatorUserNickname
    FROM to_Do_List JOIN Tasks ON to_Do_List.id = Tasks.creatorUserId  WHERE Tasks.id = ${id}
    `)
}
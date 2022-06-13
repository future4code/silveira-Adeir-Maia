import { connection } from "../connection";

export async function createTask(title:string,description:string,limitDate:string,creatorUserId:string) {
    const revetedData = limitDate.split('/').reverse().join('-')
    return connection.insert({title, description, limitDate:revetedData, creatorUserId,id:Date.now()}).into("Tasks")
}
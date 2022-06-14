import { connection } from "../connection"

export default async function selectUsersOrdened(orderBy:string):Promise<any> {
    console.log(orderBy)
    const result = await connection("aula49_exercicio").select('*')
    .orderBy(orderBy)
    return result
}
import { connection } from "../connection"

export default async function selectAllUsers(name:string,orderBy:string):Promise<any> {
    console.log(orderBy)
    const result = await connection("aula49_exercicio").select('*')
    .where('name', 'LIKE', `%${name}%`).orderBy(orderBy)

    return result
}
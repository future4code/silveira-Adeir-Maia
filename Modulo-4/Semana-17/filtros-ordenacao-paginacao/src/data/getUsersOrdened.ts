import { connection } from "../connection"

export default async function selectUsersOrdenedAscOrDesc(orderBy:string,orderType:string):Promise<any> {
    const result = await connection("aula49_exercicio").select('*')
    .orderBy(orderBy,orderType.toLocaleUpperCase())
    return result
}
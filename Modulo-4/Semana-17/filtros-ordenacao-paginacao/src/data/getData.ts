import { connection } from "../connection";

export default async function selectData (name:string,orderBy:string,orderType:string,offset:number) {
    const result = await connection("aula49_exercicio")
    .where('name', 'LIKE', `%${name}%`)
    .orderBy(orderBy,orderType.toLocaleUpperCase())
    .limit(5)
    .offset(offset)

    return result
}
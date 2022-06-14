import { connection } from "../connection"

export default async function selectUsersByPage(offset:number):Promise<any> {
    const result = await connection("aula49_exercicio").limit(5).offset(offset)
    
    return result
}


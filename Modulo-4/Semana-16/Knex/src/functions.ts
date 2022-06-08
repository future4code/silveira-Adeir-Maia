import { connection } from "./conect";

export const getActorByName = (name:string) => {
    const response = connection.raw(`
     SELECT * from Actor WHERE name = "${name}";`)
    return response
}

export const getActorByGender = (gender:any) => {
    const response = connection.raw(`
    SELECT COUNT(*) as Contagem FROM Actor WHERE gender = "${gender}"
    `)
    return response
}

export const averageWage = (gender:any) => {
    const response = connection("Actor").avg("salary as média salárial").where({gender})
    return response
}

export const upadateSalary = (salary:string,id:string) => {
    return connection("Actor").update({salary}).where({id})
}

export const deleteActor = (id:string) => connection("Actor").where({id}).delete()
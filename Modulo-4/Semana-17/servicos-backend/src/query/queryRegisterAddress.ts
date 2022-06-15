import { connection } from "../connection";
import idGenerator from "../idGenerator";
import { address } from "../types";

export default async function queryRegisterAddress (address:address,Numero:number,Complemento:string) {
    const id = idGenerator()
    const {CEP, Logradouro, Bairro, Cidade, Estado} = address
    return connection.into("Address").insert({
        id, CEP, Logradouro, Numero, Complemento, Bairro, Cidade, Estado
    })
}
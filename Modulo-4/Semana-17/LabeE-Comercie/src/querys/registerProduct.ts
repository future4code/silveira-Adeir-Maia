import { connection } from "../connection"
import idGenerator from "../idGenerator"

export default async function queryRegisterProduct(name:string,price:string,image_url:string):Promise<number[]> {
    return await connection.into("labecommerce_products").insert({id:idGenerator(),name,price,image_url})
}
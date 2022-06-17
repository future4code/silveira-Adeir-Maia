import { connection } from "../connection";
import { Product } from "../type";

export default async function queryGetProductById(product_id:string):Promise<Product[] | []> {
    return await connection("labecommerce_products").select("*").where({id:product_id})
}
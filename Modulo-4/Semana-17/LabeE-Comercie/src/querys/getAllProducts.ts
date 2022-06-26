import { connection } from "../connection";
import { Product } from "../type";

export default async function queryGetAllProducts(search:string, colum:string, orderBy:string):Promise<Product[]> {
    // return await connection("labecommerce_products")
    // .select("id","name as nome", "price as preço","image_url as imagem")
    // .where('name', 'LIKE', `%${search}%`)
    // .orderBy(`${colum}`, `${orderBy}`)
    return await connection.raw(`
    SELECT * FROM labecommerce_products WHERE labecommerce_products.name LIKE "%${search}%" ORDER BY ${colum} ${orderBy};
    `)
}
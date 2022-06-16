import { connection } from "../connection";

export default async function queryGetAllProducts() {
    return await connection("labecommerce_products").select("name as nome", "price as preço","image_url as imagem")
}
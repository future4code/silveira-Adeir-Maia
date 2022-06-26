import { connection } from "../connection";

export default async function  queryGetUserPuchase(user_id:string) {
    return await connection("labecommerce_purchases")
    .join("labecommerce_products", "labecommerce_products.id", "=","labecommerce_purchases.product_id")
    .select(
        "labecommerce_products.name as product_name","labecommerce_purchases.quantity as quantity",
        "labecommerce_products.price as product_price", "labecommerce_purchases.total_price as total_price",
    )
    .where({user_id})
}
import { connection } from "../connection";
import queryGetProductById from "./getProductById";
import queryGetUserById from "./getUserById";

export default async function queryRegisterPurchase(user_id:string,product_id:string,quantity:number) {
    const id = Date.now() + Math.random().toString()
    const user = await queryGetUserById(user_id)
    if(user.length === 0) {
        return "Usuário não enctrado!"
    }
    const product = await queryGetProductById(product_id)
    if(product.length === 0) {
        return "Produto não enctrado!"
    }
    const total_price = quantity * product[0].price
    return await connection.into("labecommerce_purchases").insert({id,user_id,product_id,quantity,total_price})
}
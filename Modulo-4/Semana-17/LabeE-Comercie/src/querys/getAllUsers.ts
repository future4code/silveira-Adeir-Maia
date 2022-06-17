import { connection } from "../connection";
import { User, UserPurchase, UserWithYourPurchases } from "../type";
import queryGetUserPuchase from "./getUserPurchase";

export default async function queryGetAllUsers() {
    const users =  await connection("labecommerce_users")
    .select("labecommerce_users.name as name", "password as password", "email","labecommerce_users.id",)

    const getPurcharses =  async (users:User[]):Promise<UserPurchase[][]> => {
        const array = users.map(user => {
        return queryGetUserPuchase(user.id)
        })
        return  Promise.all(array)
    } 
    
    const userPurchases = await getPurcharses(users)

    const userWithYourPurchases = [] 
        for (let index = 0; index < users.length; index++) {
            const user:UserWithYourPurchases = {
                name: users[index].name,
                password: users[index].password,
                email: users[index].email,
                id: users[index].id,
                purchases: userPurchases[index] ? userPurchases[index] : []
            }
            userWithYourPurchases.push(user)
        }
    return userWithYourPurchases
}
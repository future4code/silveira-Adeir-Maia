import { connection } from "../connection";

export default async function queryGetAllUsers() {
    return await connection("labecommerce_users").select("name as nome", "email","id")
}
import { Request, Response } from "express";
import { idCheck } from "../dataCheck/dataCheck";
import queryGetUserById from "../querys/getUserById";
import queryGetUserPuchase from "../querys/getUserPurchase";
import { UserPurchase } from "../type";

export default async function getUserPurchase(req:Request,res:Response):Promise<void> {
    let ErrorCode = 200
    const user_id = req.params.user_id as string
    try {
        const dataChecked = idCheck(user_id)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        const user = queryGetUserById(user_id)
        if((await user).length === 0){
            ErrorCode = 404
            throw new Error ("Usuário não encontrado")
        }
        const result:UserPurchase[] = await queryGetUserPuchase(user_id)
        res.status(ErrorCode).send({data:{response:result}})
    } catch (error:any) {
        res.status(ErrorCode).send({error:error.message})
    }
}
import { Request, Response } from "express";
import { purchaseDataCheck } from "../dataCheck/dataCheck";
import queryRegisterPurchase from "../querys/registerPurchase";

export default async function registerPurchase(req:Request,res:Response):Promise<void> {
    let ErrorCode = 200
    const {user_id,product_id,quantity} = req.body
    try {
        const dataChecked = purchaseDataCheck(user_id,product_id,+quantity)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        const result = await queryRegisterPurchase(user_id,product_id,+quantity)
        if(typeof(result) === "string") {
            ErrorCode = 404
            throw new Error (result)
        }
        res.status(ErrorCode).send({data:{message:"Compra registrada com sucesso!"}})
    } catch (error:any) {
        res.status(ErrorCode).send({error:error.message})
    }
}
import { Request,Response } from "express";
import { dataCheck, productDataCheck } from "../dataCheck/dataCheck";
import queryRegisterProduct from "../querys/registerProduct";

export default async function registerProduct(req:Request,res:Response) {
    let ErrorCode = 200
    const {name, price, image_url} = req.body
    try {
        const dataChecked = productDataCheck(name,price,image_url)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        await queryRegisterProduct(name,price,image_url)
        res.status(ErrorCode).send({data:{message:"Produto cadastrado com sucesso!"}})
    } catch (error:any) {
        res.status(ErrorCode).send({error:error.message})
    }
}
import { Request, Response } from "express";
import queryGetAllProducts from "../querys/getallProducts";

export default async function getallProducts(req:Request,res:Response) {
    let ErrorCode = 200
    try {
        const result = await queryGetAllProducts()
        res.status(ErrorCode).send({data:{response:result}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
import { Request, Response } from "express";
import { querysCheck } from "../dataCheck/dataCheck";
import queryGetAllProducts from "../querys/getAllProducts";

export default async function getallProducts(req:Request,res:Response):Promise<void> {
    let ErrorCode = 200
    const search = req.query.search as string || ""
    const colum = req.query.colum as string || "''"
    const orderBy = req.query.orderBy as string || ""
    try {
        const dataChecked = (colum !== "''" || orderBy !== "") && querysCheck(colum,orderBy)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        const result = await queryGetAllProducts(search, colum, orderBy)
        res.status(ErrorCode).send({data:{response:result[0]}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
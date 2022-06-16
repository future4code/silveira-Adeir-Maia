import { Request, Response } from "express";
import { dataCheck } from "../dataCheck/dataCheck";
import queryCreateUser from "../querys/createUser";

export default async function createUser(req:Request,res:Response):Promise<void> {
    let ErrorCode = 200
    const {name,email,password} = req.body
    try {
        const dataChecked = dataCheck(name,email,password)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        await queryCreateUser(name,email,password)
        res.status(ErrorCode).send({data:{message:"Usuário criado com sucesso"}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
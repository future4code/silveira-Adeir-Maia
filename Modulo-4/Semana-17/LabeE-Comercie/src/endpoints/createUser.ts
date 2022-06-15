import { Request, Response } from "express";
import createUser from "../querys/createUser";

export default async function RegisterProductEndPoint(req:Request,res:Response):Promise<void> {
    const ErrorCode = 200
    const {id,name,email,password} = req.body
    try {
        await createUser(id,name,email,password)
        res.status(ErrorCode).send({data:{message:"Usuário criado com sucesso"}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
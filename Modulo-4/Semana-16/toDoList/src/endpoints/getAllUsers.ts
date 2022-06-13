import { Request,Response } from "express";
import getAllUsers from "../data/getAllUsers";


export default async function getAllUsersEndPoint(req:Request,res:Response) {
    let ErrorCode = 200
    try {
        const response = await getAllUsers()
        if(response.length === 0) {
            ErrorCode = 404
            throw new Error ("Não há nenhum usuário cadastrado")
        }
        res.status(ErrorCode).send({data:{response:{users:response}}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
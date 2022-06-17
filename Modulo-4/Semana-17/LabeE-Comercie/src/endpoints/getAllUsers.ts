import { Request, Response } from "express";
import queryGetAllUsers from "../querys/getAllUsers";

export default async function getAllUsers(req:Request,res:Response):Promise<void> {
    let ErrorCode = 200
    try {

        const result = await queryGetAllUsers()
        res.status(ErrorCode).send({data:{response:result}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
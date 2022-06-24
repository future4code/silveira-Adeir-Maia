import {Request, Response } from "express";
import { createUser } from "../data/createUser";
import { dataCkeck } from "../data checking/data checking";

export default async function createUserEndPoint (req:Request,res:Response)  {
    const {name,nickName,email} = req.body
    let ErrorCode = 200
    try {
        const dataChecked = dataCkeck(name,nickName,email)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        await createUser(name,nickName,email)
        res.status(ErrorCode).send({data:{message:"Usuário criado com sucesso!"}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
import {Request, Response } from "express";
import { idCheck } from "../data checking/data checking";
import getUserById from "../data/getUserById";

export default async function getUserByIdEndPoint (req:Request,res:Response) {
    const id = req.params.id
    let ErrorCode = 200
    try {
        const dataChecked = idCheck(+id)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        const response = await getUserById(id)
        if(response.length === 0) {
            ErrorCode = 404
            throw new Error ("Usuário não encontrado")
        }
        res.status(ErrorCode).send({data:{response:response[0]}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {SQL:{message:error.sqlMessage}})
    }
}
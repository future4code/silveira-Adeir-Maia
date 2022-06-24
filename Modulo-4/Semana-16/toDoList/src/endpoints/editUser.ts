import {Request, Response } from "express";
import { dataCkeck } from "../data checking/data checking";
import editUser from "../data/editUser";

export default async function editUserEndPoint(req:Request,res:Response) {
    const {name,nickName} = req.body
    const id = +req.params.id
    let ErrorCode = 200
    const dataChecked = dataCkeck(name,nickName,undefined,id)
    try {
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        await editUser(name,nickName,id)
        res.status(ErrorCode).send({data:{message:"Usuário modificado com sucesso"}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}})
    }
}
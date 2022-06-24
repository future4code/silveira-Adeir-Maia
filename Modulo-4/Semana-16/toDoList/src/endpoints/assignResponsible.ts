import { Request,Response } from "express";
import { taskAndResponsibleUserIdCheck } from "../data checking/data checking";
import assignResponsible from "../data/responsibleUserId";
export default async function assignResponsibleEndPoint(req:Request,res:Response) {
    let ErrorCode = 200
    const {task_id,responsible_user_id} = req.body
    try {
        const dataChecked = taskAndResponsibleUserIdCheck(task_id,responsible_user_id)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        await assignResponsible(+task_id,+responsible_user_id)
        res.status(201).send({data:{message:"Usuário atribuído!"}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
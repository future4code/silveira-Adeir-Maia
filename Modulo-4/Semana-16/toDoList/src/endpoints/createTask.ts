import {Request, Response } from "express";
import { taskDataCheck } from "../data checking/data checking";
import { createTask } from "../data/createTask";

export default async function createTaskEndPoint (req:Request,res:Response) {
    const {title,description,limitDate,creatorUserId} = req.body
    let ErrorCode = 200
    const dataTaskChecked = taskDataCheck(title,description,limitDate,creatorUserId)
    try {
        if(typeof(dataTaskChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataTaskChecked)
        }
        await createTask(title,description,limitDate,creatorUserId)
        res.status(201).send({data:{message:"Tarefa criada com sucesso!"}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {data:{message:error.sqlMessage}})
    }
}
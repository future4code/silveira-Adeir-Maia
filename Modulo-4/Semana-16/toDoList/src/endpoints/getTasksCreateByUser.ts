import {Request, Response } from "express";
import { changeDateFormat, idCheck } from "../data checking/data checking";
import getTasksCreateByUser from "../data/getTasksCreateByUser";

export default async function getTasksCreateByUserEndPoint(req:Request,res:Response) {
    let ErrorCode = 200
    const id = req.query.creatorUserId
    try {
        const dataChecked = idCheck(id)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        const result = id && await getTasksCreateByUser(+id)
        res.status(ErrorCode).send({data:{response:changeDateFormat(result[0])}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {SQL:{message:error.sqlMessage}})
    }
}
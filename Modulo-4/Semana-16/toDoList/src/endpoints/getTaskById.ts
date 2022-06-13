import { Request,Response } from "express";
import { changeDateFormat, idCheck } from "../data checking/data checking";
import getTaskById from "../data/getTaskById";

export default async function getTaskByIdEndPoint(req:Request,res:Response) {
    let ErrorCode =200
    const id = req.params.id
    try {
        const dataChecked = idCheck(id)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        const response = await getTaskById(+id)
        res.status(ErrorCode).send({data:{response:changeDateFormat(response[0])}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {SQL:{message:error.sqlMessage}})
    }
}
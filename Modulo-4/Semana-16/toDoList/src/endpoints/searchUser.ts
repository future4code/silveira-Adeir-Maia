import { Request,Response } from "express";
import { queryCheck } from "../data checking/data checking";
import searchUser from "../data/searchUser";

export default async function searchUserEndPoint(req:Request,res:Response) {
    let ErrorCode = 200
    const search = req.query.search
    try {
        const dataChecked = queryCheck(search)
        if(typeof(dataChecked) === "string") {
            ErrorCode = 422
            throw new Error (dataChecked)
        }
        const result = await searchUser(search?.toString() as string)
        res.status(ErrorCode).send({data:{response:result[0]}})
    } catch (error:any) {
        res.status(ErrorCode).send({data:{message:error.message}} || {SQL:{message:error.sqlMessage}})
    }
}
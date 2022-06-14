import { Request , Response } from "express";
import selectData from "../data/getData";

export const getData = async(req: Request,res: Response): Promise<void> =>{
    const name = req.query.name as string || ''
    const orderBy = req.query.orderBy as string || "id"
    const orderType = req.query.orderType as string || "ASC"
    const page = Number(req.query.page) || 1
    const offSet = 5 * (page - 1)
    try {
        const users = await selectData(name,orderBy,orderType,offSet)
        if(!users.length){
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)
        
    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
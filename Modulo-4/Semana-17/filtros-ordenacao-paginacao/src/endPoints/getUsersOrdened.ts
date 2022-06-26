import { Request,Response } from "express"
import selectUsersOrdenedAscOrDesc from "../data/getUsersOrdened"

export const getUsersOrdened = async(req: Request,res: Response): Promise<void> =>{
    const orderBy = req.query.orderBy as string || "name"
    const orderType = req.query.orderType as string || "ASC"
    try {
       const users = await selectUsersOrdenedAscOrDesc(orderBy,orderType)
 
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
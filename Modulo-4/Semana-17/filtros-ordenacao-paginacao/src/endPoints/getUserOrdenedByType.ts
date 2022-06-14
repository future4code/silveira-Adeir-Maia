import { Request,Response } from "express"
import selectUsersOrdened from "../data/getUsersOrdenedByType"

export const getUsersOrdenedByType = async(req: Request,res: Response): Promise<void> =>{
    const orderBy = req.query.orderBy as string
    try {
        const users = await selectUsersOrdened(orderBy)
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
import { Request,Response } from "express"
import selectAllUsers from "../data/getAllUsers"

export const getUsers = async(req: Request,res: Response): Promise<void> =>{
    const name = req.query.name as string
    const orderBy = req.query.orderBy as string
    try {
        const users = await selectAllUsers(name,orderBy)
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
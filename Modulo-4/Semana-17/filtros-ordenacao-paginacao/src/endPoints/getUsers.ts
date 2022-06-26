import { Request,Response } from "express"
import selectUsersByPage from "../data/getUsers"

export const getUsersByPage = async(req: Request,res: Response): Promise<void> =>{
    const page = Number(req.query.page)
    const offSet = 5 * (page - 1)

    try {
        const users = await selectUsersByPage(offSet)
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
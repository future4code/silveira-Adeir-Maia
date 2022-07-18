import { Request, Response } from "express"
import FollowrsDataBase from "../Data/FollowersDataBase"
import Follow from "../Model/Entities/Followrs"
import Authentication from "../Services/Authentication"
import IdGenerator from "../Services/IDGenerator"
import DataChecking from "./DataChecking/dataChecking"

export default class FollowersEntitie {
    follow = async(req:Request,res:Response):Promise<void> => {
        let statusCode = 201
        const token = req.headers.authorization as string
        const {follow_Id} = req.body
        try {
            const dataChecking = new DataChecking()
            const checking = dataChecking.follow(token,follow_Id)
            if(checking) {
                statusCode = checking.statusCode
                throw new Error(checking.message)
            }
            const id = new IdGenerator().generator()
            const user = new Authentication().getTokenData(token)
            await new FollowrsDataBase().follow(new Follow(id,user.id,follow_Id))
            res.status(statusCode).send('Seguido com sucesso')
        } catch (error:any) {
            if(error.message.includes('jwt')) {
                statusCode = 401
                error.message = 'Token expirado'
            }
            res.status(statusCode).send(error.message)
        }
    }

    unFollow = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 201
        const token = req.headers.authorization as string
        const {follow_Id} = req.body
        try {
            const dataChecking = new DataChecking()
            const checking = dataChecking.follow(token,follow_Id)
            if(checking) {
                statusCode = checking.statusCode
                throw new Error(checking.message)
            }
            const user = new Authentication().getTokenData(token)
            await new FollowrsDataBase().unFollow(user.id,follow_Id)
            res.status(statusCode).send('Você deixou de seguit esse usário.')
        } catch (error:any) {
            if(error.message.includes('jwt')) {
                statusCode = 401
                error.message = 'Token expirado'
            }
            res.status(statusCode).send(error.message)
        }
    }
}
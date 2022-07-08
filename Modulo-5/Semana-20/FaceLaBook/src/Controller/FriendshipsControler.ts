import { Request,Response } from "express"
import FriendshipsBusiness from "../Business/FriendshipsBusiness"
import { FollowInputDTO } from "../Model/Types"

export default  class FriendshipsController {
    private FriendshipsBusiness = new FriendshipsBusiness()

    follow = async (req:Request,res:Response) => {
        const token = req.headers.authorization as string
        const {id} = req.body
        try {
            const inputs:FollowInputDTO = {token,friend_id:id}

            await this.FriendshipsBusiness.follow(inputs)

            res.status(201).send()
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }

    unFollow = async (req:Request,res:Response) => {
        const token = req.headers.authorization as string
        const {id} = req.body
        try {
            const inputs:FollowInputDTO = {token,friend_id:id}

            await this.FriendshipsBusiness.unFollow(inputs)

            res.status(200).send()
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }
}
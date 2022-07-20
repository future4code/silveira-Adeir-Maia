import { Request, Response } from "express"
import PostBusiness from "../Business/PostBusiness"
import { GetByIdInputDTO, PostInputDTO } from "../Model/Types"

export default class PostController {
    private postController = new PostBusiness()

    create = async (req:Request,res:Response) => {
        const {photo,description,type} = req.body
        const token = req.headers.authorization as string
        try {
            const inputs:PostInputDTO = {photo,description,type,token} 

            await this.postController.create(inputs)

            res.status(201).send()
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }

    getById = async (req:Request,res:Response) => {
        const id = req.params.id
        const token = req.headers.authorization as string
        try {
            const inputs:GetByIdInputDTO = {token,id}

            const post = await this.postController.getById(inputs)

            res.status(200).send({post})
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }

    feed = async (req:Request,res:Response) => {
        const token = req.headers.authorization as string
        try {
            const feed = await this.postController.feed(token)

            res.status(200).send({feed})
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }
}
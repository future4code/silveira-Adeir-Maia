import { Request, Response } from "express";
import UserApplication from "../Application/UserApplication";

export default class UserPresentation {
    singUp = async (req:Request,res:Response) => {
        const {name,email,password,role} = req.body
        try {
            const inputs = {name,email,password,role}
            
            const token = await new UserApplication().create(inputs)

            res.status(200).send({ token })
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }

    login = async (req:Request,res:Response) => {
        const {email,password} = req.body
        try {
            res.status(200).send({token: await new UserApplication().login(email,password)})
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }

    all = async (req:Request,res:Response) => {
        const token = req.headers.authorization as string
        try {
            res.status(200).send(await new UserApplication().all(token))
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }

    delete = async (req:Request,res:Response) => {
        const token = req.headers.authorization as string
        const id = req.params.id
        try {
            await new UserApplication().delete(token,id)
            res.send(200).send()
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }
}
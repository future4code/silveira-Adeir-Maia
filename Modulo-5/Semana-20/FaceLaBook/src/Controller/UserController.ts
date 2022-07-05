import { Request, Response } from "express"
import { loginInputDTO, UserInputDTO } from "../Model/Types"
import UserBusiness from "../Business/UserBusiness"

export default class UserController {
    private userBusiness = new UserBusiness()

    signup = async (req:Request,res:Response) => {
        const  {name,email,password} = req.body
        try {
            const inputs:UserInputDTO = {name,email,password}

            const token = await this.userBusiness.signup(inputs)

            res.status(201).send({token})
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }

    login = async (req:Request,res:Response) => {
        const {email,password} = req.body
        try {
            const input:loginInputDTO = {email,password}

            const token = await this.userBusiness.login(input)

            res.status(200).send({token})
        } catch (error:any) {
            res.status(error.statusCode).send({error:error.message})
        }
    }
}
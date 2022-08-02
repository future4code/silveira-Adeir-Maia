import { Request, Response } from "express"
import { participationDTO } from "../Model/types"
import participationBusiness from "../Business/ParticipationBusiness"

export class ParticipationController {

    insert = async (req:Request,res:Response):Promise<void> => {
        const {name, participation} = req.body
        try {
            const inputs:participationDTO = {name,participation}
            await participationBusiness.insert(inputs)
            res.statusMessage = 'Registro efetudado com sucesso'
            res.status(201).send()
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }

    select = async (req:Request,res:Response):Promise<void> => {
        try {
            const result = await participationBusiness.select()
            console.log(res.status)
            res.status(200).send(result)
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }

    update = async (req:Request,res:Response):Promise<void> => {
        const {name, participation} = req.body
        try {
            const inputs:participationDTO = {name,participation}
            await participationBusiness.update(inputs)
            res.statusMessage = 'Alteracao efetudada com sucesso'
            res.status(200).send()
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }

    delete = async (req:Request,res:Response):Promise<void> => {
        const name = req.body.name as string
        try {
            await participationBusiness.delete(name)
            res.statusMessage = 'Exclusao efetudada com sucesso'
            res.status(200).send()
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}

export default new ParticipationController()
import { Request, Response } from "express";
import { RegisterInputsDTO } from "../Model/types";
import productBusiness from "../Business/ProductBusiness";


export class ProductController {
    resgister = async (req:Request,res:Response):Promise<void> => {
        const {name, tags} = req.body
        try {
            const inputs:RegisterInputsDTO = {name,tags}

            await productBusiness.register(inputs)

            res.statusMessage = 'Produto Registrado com sucesso!'
            
            res.status(201).send()
        } catch (error:any) {
            res.status(error.statusCode || 400).send({message: error.message })
        }
    }
}

export default new ProductController()
import { Response, Request } from "express";
import queryRegisterAddress from "../query/queryRegisterAddress";
import getAddress from "../services/getAddress";

export default async function registerAddress(req:Request,res:Response):Promise<void> {
    const ErrorCode = 200
    const CEP = Number(req.query.cep)
    const Numero = Number(req.query.numero)
    const Complemento = req.query.complemento as string || ""
    try {
        const anddress = await getAddress(CEP)
        await queryRegisterAddress(anddress,Numero,Complemento)
        res.status(ErrorCode).send({message:"Endereço cadastrado com sucesso!"})
    } catch (error:any) {
        res.status(ErrorCode).send({error:error.message})
    }
}
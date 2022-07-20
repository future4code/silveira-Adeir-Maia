import { Request, Response } from "express";
import { RegisterPaymentDTO } from "../Model/types";
import paymentBusiness from "../Business/PaymentBusiness";


export class PaymentController  {
    public register = async (req:Request,res:Response):Promise<void> => {

        const {
            client_id, buyer_name, buyer_email, buyer_CPF,amount, type, 
            card_name, card_number, card_expiration, card_CVV} = req.body

        try {
            const inputs:RegisterPaymentDTO = {
                client_id,
                buyer_name,
                buyer_email,
                buyer_CPF,
                amount,
                type,
                card_name,
                card_number,
                card_expiration,
                card_CVV
            }

            const result = await paymentBusiness.register(inputs)

            res.statusMessage = 'Payment successfully registered'

            res.status(201).send(result)
        } catch (error:any) {
            const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }


    public status = async (req:Request,res:Response):Promise<void> => {
        const {transaction_id} = req.body
        try {


            res.status(200).send()
        } catch (error:any) {
        const { statusCode, message } = error
            res.status(statusCode || 400).send({ message })
        }
    }
}

export default new PaymentController()
import { PaymentData } from "../Data/PaymentData";
import { CustomError } from "../Model/CustonError";
import { buyerDataDTO, buyerDB, ClientDB, RegisterPaymentDTO } from "../Model/types";
import IdGenerator from "../Services/IDGenerator";
import { PaymentInputsValidation } from "./validation/PaymentInputsValidation";


export class PaymentBusiness {
    constructor (
        private paymenetInputsValidation : PaymentInputsValidation,
        private paymentDataBase : PaymentData,
        private idGenerator: IdGenerator
        ) {}
        
    register = async (inputs:RegisterPaymentDTO) => {
        const {
            client_id, buyer_name, buyer_email, buyer_CPF, amount, type, 
            card_name, card_number, card_expiration, card_CVV} = inputs
        try {
            this.paymenetInputsValidation.Register(inputs)

            const client = await this.paymentDataBase.getClientById(inputs.client_id) as ClientDB
            if(!client.name && !client.id) {
                throw new CustomError(404,'Client not Found')
            }

            const buyerData:buyerDataDTO = {buyer_name,buyer_email,buyer_CPF}
            const buyer = await this.paymentDataBase.getBuyer(buyerData) as buyerDB
            if(!buyer.id || !buyer.buyer_name || !buyer.buyer_email || !buyer.buyer_CPF) {
                const newBuyer:buyerDB = {id:this.idGenerator.ID(), buyer_name, buyer_email, buyer_CPF}
                this.paymentDataBase.register_buyer(newBuyer)
            }

            
            return buyer
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}

export default new PaymentBusiness(
    new PaymentInputsValidation(),
    new PaymentData(),
    new IdGenerator()
)
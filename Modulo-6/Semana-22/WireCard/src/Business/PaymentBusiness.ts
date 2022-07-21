import { PaymentData } from "../Data/PaymentData";
import { CustomError } from "../Model/CustonError";
import { 
    buyerDataDTO, buyerDB, creditCardDataDTO, ClientDB, 
    PAYMENTTYPES, RegisterPaymentDTO, creditCardDB, paymentCreditCard, paymentBoleto 
} from "../Model/types";
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
            clientId, buyer_name, buyer_email, buyer_CPF, amount, type, 
            card_name, card_number, card_expiration, card_CVV} = inputs

        try {
            this.paymenetInputsValidation.Register(inputs)

            const client = await this.paymentDataBase.getClientById(inputs.clientId) as ClientDB
            if(!client.name && !client.id) {
                throw new CustomError(404,'Client not Found')
            }

            const buyerData:buyerDataDTO = {buyer_name,buyer_email,buyer_CPF}
            const buyer = await this.paymentDataBase.getBuyer(buyerData) as buyerDB
            if(!buyer.id || !buyer.buyer_name || !buyer.buyer_email || !buyer.buyer_CPF) {
                const id = this.idGenerator.ID()
                const newBuyer:buyerDB = {id, buyer_name, buyer_email, buyer_CPF}
                await this.paymentDataBase.register_buyer(newBuyer)
                buyer.id = id,
                buyer.buyer_name = buyer_name
                buyer.buyer_email = buyer_email,
                buyer.buyer_CPF = buyer_CPF
            }
            
            type.toLocaleUpperCase() === PAYMENTTYPES.CREDITCARD && this.paymentCreditCard(inputs,buyer.id)
            
            type.toLocaleUpperCase() === PAYMENTTYPES.BOLETO && this.paymentBoleto(inputs,buyer.id)
            
        } catch (error:any) {
            console.log(error)
            throw new CustomError(error.statusCode, error.message)
        }
    }

    private paymentBoleto = async (inputs:RegisterPaymentDTO,buyerId:string):Promise<void> => {
        const {
            clientId, buyer_name, buyer_email, buyer_CPF, amount, type, 
            card_name, card_number, card_expiration, card_CVV} = inputs
        const newPayment:paymentBoleto = {
            id: this.idGenerator.ID(),
            amount,
            type: type.toUpperCase(),
            clientId,
            buyerId
        }
        try {
            await this.paymentDataBase.registerPaymentBoleto(newPayment)
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.message)
        }
        
    }
    
    private paymentCreditCard = async (inputs:RegisterPaymentDTO,buyerId:string):Promise<void> => {
        const {
            clientId, buyer_name, buyer_email, buyer_CPF, amount, type, 
            card_name, card_number, card_expiration, card_CVV} = inputs

        const creditCardData:creditCardDataDTO = {card_name, card_number,card_expiration,card_CVV}
        const creditcard = await this.paymentDataBase.getCreditCard(creditCardData) as creditCardDB
        if(!creditcard.id || !creditcard.card_name || !creditcard.card_number || !creditcard.card_expiration || !creditcard.card_CVV) {
            const id = this.idGenerator.ID()
            const newCreditCard:creditCardDB = {id,card_name,card_number,card_expiration,card_CVV}
            await this.paymentDataBase.registerCreditCard(newCreditCard)
            creditcard.id = id,
            creditcard.card_name = card_name,
            creditcard.card_number = card_number,
            creditcard.card_expiration = card_expiration,
            creditcard.card_CVV = card_CVV
        } 
        const newPayment:paymentCreditCard = {
            id:this.idGenerator.ID(),
            amount,
            type:type.toUpperCase(),
            buyerId,
            clientId,
            creditCard:creditcard.id
        }
        try {
            await this.paymentDataBase.registerPaymentCreditCard(newPayment)
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.message)
        }
        
    }
    
    status = async (payment_id:string) => {
        
        try {
            this.paymenetInputsValidation.Status(payment_id)
            // return this.paymentDataBase.statusPaymentCreditCard(payment_id)
            return this.paymentDataBase.statusPaymentCreditCard(payment_id)
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.message)
        }
    }

}

export default new PaymentBusiness(
    new PaymentInputsValidation(),
    new PaymentData(),
    new IdGenerator()
)
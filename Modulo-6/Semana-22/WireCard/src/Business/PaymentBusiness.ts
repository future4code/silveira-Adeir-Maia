import { PaymentData } from "../Data/PaymentData";
import { CustomError } from "../Model/CustonError";
import { 
    buyerDataDTO, buyerDB, creditCardDataDTO, ClientDB, 
    PAYMENTTYPES, RegisterPaymentDTO, creditCardDB, paymentCreditCard, paymentBoleto, statusDTO, boletoDTO, creditCardStatusDTO 
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
            
            if(type.toLocaleUpperCase() === PAYMENTTYPES.CREDITCARD) {
                return this.paymentCreditCard(inputs,buyer.id)
            } else {
                return this.paymentBoleto(inputs,buyer.id)
            }
            
        } catch (error:any) {
            console.log(error)
            throw new CustomError(error.statusCode, error.message)
        }
    }

    private paymentBoleto = async (inputs:RegisterPaymentDTO,buyerId:string):Promise<boletoDTO> => {
        const {
            clientId, buyer_name, buyer_email, buyer_CPF, amount, type, 
            card_name, card_number, card_expiration, card_CVV} = inputs
        const newPayment:paymentBoleto = {
            id: this.idGenerator.ID(),
            amount,
            type: type.toUpperCase(),
            status: this.boletostatusDraw(),
            number: this.boletoNumberGenerator(),
            clientId,
            buyerId
        }
        try {
            await this.paymentDataBase.registerPaymentBoleto(newPayment)

            const boleto:boletoDTO = {payment_id:newPayment.id, number_Boleto: newPayment.number}
            return boleto
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.message)
        }
        
    }
    
    private paymentCreditCard = async (inputs:RegisterPaymentDTO,buyerId:string):Promise<creditCardStatusDTO> => {
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
            status: this.creditCardStatusDraw(),
            buyerId,
            clientId,
            creditCard:creditcard.id,
        }
        try {
            await this.paymentDataBase.registerPaymentCreditCard(newPayment)

            const creditCardStatus:creditCardStatusDTO = {payment_id:newPayment.id ,payment_Status: newPayment.status}
            return creditCardStatus
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.message)
        }
        
    }
    
    status = async (inputs:statusDTO) => {
        try {
            this.paymenetInputsValidation.Status(inputs)
            
            if(inputs.payment_Type.toUpperCase() === PAYMENTTYPES.BOLETO){
                return this.paymentDataBase.statusPaymentBoleto(inputs.payment_id)
            } else {
                return this.paymentDataBase.statusPaymentCreditCard(inputs.payment_id)
            }      
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.message)
        }
    }

    private boletoNumberGenerator = () => {
        const CHARACTERS = "0123456789"
            let number = ""
            for(let i = 0; i <= 47; i++) {
                const index = Math.floor(this.numberDraw(CHARACTERS.length - 1))
                number += CHARACTERS[index]
            }
            return number
    }

    private boletostatusDraw = () => {
        const status = ['CONCLUED','PENDENT','EXPIRED']
        return status[this.numberDraw(3)]
    }

    private creditCardStatusDraw = () => {
        const status = ['CONCLUED','PENDENT','REFUSED','REVERSED']
        return status[this.numberDraw(4)]
    }

    private numberDraw = (length:number) => {
        return Math.floor(Math.random() * length)
    }

}

export default new PaymentBusiness(
    new PaymentInputsValidation(),
    new PaymentData(),
    new IdGenerator()
)
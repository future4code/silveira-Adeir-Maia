import BaseDataBase from "../../src/Data/BaseDataBase"
import { CustomError } from "../../src/Model/CustonError"
import { ClientDB, buyerDataDTO, buyerDB, creditCardDataDTO, creditCardDB, paymentBoleto, paymentCreditCard, PaymentBoletoDB, PaymentCreditCardDB } from "../../src/Model/types"
import { buyerDBMock } from "./buyerDBMock"
import { clientDBMock } from "./clientDBMock"
import { creditCardDBMock } from "./creditCardDBMock"
import { paymentBoletoDBMock } from "./paymentBoletoDBMock"
import { paymentCreditCardDBMock } from "./PaymentCreditCardMock"



export class PaymentDataMock extends BaseDataBase {
    
    getClientById = async (id:string):Promise<ClientDB | {}> => {
        if(id === clientDBMock.id) {
            return clientDBMock
        } else {
            return {}
        }
    }

    getBuyer = async (buyer:buyerDataDTO):Promise<buyerDB | {}> => {
        return buyerDBMock
    }

    register_buyer = async (buyer:buyerDB):Promise<void> => {
    }

    getCreditCard = async (creditCard:creditCardDataDTO):Promise<creditCardDB | {}> => {
        return creditCardDBMock
    }

    registerCreditCard = async (creditCard:creditCardDB):Promise<void> => {}

    registerPaymentBoleto = async (payment:paymentBoleto):Promise<void> => {}

    registerPaymentCreditCard = async (payment:paymentCreditCard):Promise<void> => {}

    statusPaymentBoleto = async (id:string):Promise<PaymentBoletoDB | {}> => {
        try {
            return paymentBoletoDBMock
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }

    statusPaymentCreditCard = async (id:string):Promise<PaymentCreditCardDB | {}> => {
        try{
            return paymentCreditCardDBMock
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }
    }
}

export default new PaymentDataMock()
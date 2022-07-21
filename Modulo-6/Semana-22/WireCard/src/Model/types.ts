export type AuthenticationData = {
    id: string
}

export interface RegisterPaymentDTO {
    clientId: string, 
    buyer_name: string, 
    buyer_email:string, 
    buyer_CPF:string,
    amount:number,
    type: string,         
    card_name?:string, 
    card_number?:number, 
    card_expiration?:string, 
    card_CVV?:number
}

export interface ClientDB {
    id:string,
    name:string
}

export type buyerDataDTO = {
    buyer_name:string,
    buyer_email:string,
    buyer_CPF:string
}

export type creditCardDataDTO = {
    card_name?:string, 
    card_number?:number, 
    card_expiration?:string, 
    card_CVV?:number
}

export type creditCardDB = creditCardDataDTO & {id:string}

export type buyerDB = buyerDataDTO & {id:string}

export type paymentBoleto = {
    id:string,
    amount:number,
    type:string,
    clientId:string
    buyerId:string,
}

export type paymentCreditCard =  paymentBoleto & {creditCard:string}

export enum PAYMENTTYPES {
    BOLETO = 'BOLETO',
    CREDITCARD = 'CREDITCARD'
}


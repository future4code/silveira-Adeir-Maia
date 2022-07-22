
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

export type statusDTO = {
    payment_id: string, 
    payment_Type: string
}

export type creditCardDB = creditCardDataDTO & {id:string}

export type buyerDB = buyerDataDTO & {id:string}

export type boletoDTO = {
    payment_id: string,
    number_Boleto:string
}

export type creditCardStatusDTO = {
    payment_id:string
    payment_Status:string
}

export interface paymentBoleto  {
    id:string
    amount:number
    type:string
    number:string,
    status:string
    clientId:string
    buyerId:string
}

export interface paymentCreditCard extends Omit<paymentBoleto,'number'> {creditCard:string}

export enum PAYMENTTYPES {
    BOLETO = 'BOLETO',
    CREDITCARD = 'CREDITCARD'
}


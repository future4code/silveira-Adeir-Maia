
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

export interface PaymentCreditCardDB {
    ClientId: string,
    Client_name: string,
    Buyer_Id: string,
    Buyer_name: string,
    Buyer_email: string,
    Buyer_CPF: string,
    CreditCard_id: string,
    CreditCard_name: string,
    Creditcard_number: number,
    creditCard_expiration: string,
    Creditcard_CVV: number,
    PaymentId: string,
    Amount: number,
    Status: string
}

export interface PaymentBoletoDB extends Omit<PaymentCreditCardDB, 
'CreditCard_id' | 'CreditCard_name' | 'Creditcard_number' | 'creditCard_expiration' | 'Creditcard_CVV'> 
{Boleto_number: string}

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


export type AuthenticationData = {
    id: string
}

export interface RegisterPaymentDTO {
    client_id: string, 
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

export type buyerDB = buyerDataDTO & {id:string}

export enum PAYMENTTYPES {
    BOLETO = 'BOLETO',
    CREDCARD = 'CREDCARD'
}


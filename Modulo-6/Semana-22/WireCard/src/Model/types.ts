export type AuthenticationData = {
    id: string
}

export interface RegisterPaymentDTO {
    client_id: string, 
    buyer_name: string, 
    buyer_email:string, 
    buyer_CPF:string,
    type: string,         
    card_name?:string, 
    card_number?:number, 
    card_expiration?:string, 
    card_CVV?:number
}

export enum PAYMENTTYPES {
    TICKET = 'TICKET',
    CREDCARD = 'CREDCARD'
}


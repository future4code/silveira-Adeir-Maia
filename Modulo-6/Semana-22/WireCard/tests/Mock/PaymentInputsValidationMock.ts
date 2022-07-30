import { CustomError } from "../../src/Model/CustonError"
import { RegisterPaymentDTO, statusDTO, PAYMENTTYPES } from "../../src/Model/types"


export class PaymentInputsValidationMock {
    Register = (inputs:RegisterPaymentDTO) => {
        this.clientId(inputs.clientId)
        this.buyer_name(inputs.buyer_name)
        this.buyer_email(inputs.buyer_email)
        this.buyer_CPF(inputs.buyer_CPF)
        this.amount(inputs.amount)
        this.payment_type(inputs.type.toUpperCase())
        this.CredCard(
            inputs.type.toUpperCase(), inputs.card_name, inputs.card_number, inputs.card_expiration, inputs.card_CVV
        )
    }

    Status = (inputs:statusDTO) => {
        this.payment_id(inputs.payment_id)
        this.payment_type(inputs.payment_Type.toUpperCase())
    }

    private clientId = (clientId:string) => {}
    
    private buyer_name = (buyer_name: string,) => {}

    private buyer_email = (buyer_email:string) => {}

    private buyer_CPF = (buyer_CPF:string) => {}

    private amount = (amount:number) => {}

    private payment_type = (payment_type:string) => {}

    private CredCard = (
        payment_type:string,
        card_name:string | undefined, 
        card_number:number | undefined, 
        card_expiration:string | undefined, 
        card_CVV:number | undefined) => {}

    private payment_id = (payment_id:string) => {
    }

    private checkCPFFormat = (cpf:string) => {}

    private checkEmailFormat = (email:string) => {}

    private expiration_dateCheck = (card_expiration:string) => {
        
    }
}
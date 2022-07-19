import { CustomError } from "../../Model/CustonError"
import { PAYMENTTYPES, RegisterPaymentDTO } from "../../Model/types"

export class PaymentInputsValidation {
    Register = (inputs:RegisterPaymentDTO) => {
        this.client_id(inputs.client_id)
        this.buyer_name(inputs.buyer_name)
        this.buyer_email(inputs.buyer_email)
        this.buyer_CPF(inputs.buyer_CPF)
        this.payment_type(inputs.type.toUpperCase())
        this.CredCard(
            inputs.type.toUpperCase(), inputs.card_name, inputs.card_number, inputs.card_expiration, inputs.card_CVV
        )
    }

    Status = () => {

    }

    private client_id = (client_id:string) => {
        if(!client_id) {
            throw new CustomError(422, 'Missing client Id')
        }
    }
    
    private buyer_name = (buyer_name: string,) => {
        if(!buyer_name) {
            throw new CustomError(422, 'Missing buyer name')
        }
    }

    private buyer_email = (buyer_email:string) => {
        if(!buyer_email) {
            throw new CustomError(422, 'Missing buyer email')
        }

        if(!this.checkEmailFormat(buyer_email)) {
            throw new CustomError(422, 'Inválid email')
        }
    }



    private buyer_CPF = (buyer_CPF:string) => {
        if(!buyer_CPF) {
            throw new CustomError(422, 'Missing buyer CPF')
        }
    }

    private payment_type = (payment_type:string) => {
        if(!(payment_type in PAYMENTTYPES)) {
            throw new CustomError(422, 'Inválid payment type')
        }
    }

    private CredCard = (
        payment_type:string,
        card_name:string | undefined, 
        card_number:number | undefined, 
        card_expiration:string | undefined, 
        card_CVV:number | undefined) => {
        if(payment_type === PAYMENTTYPES.CREDCARD) {
            if(!card_name) {
                throw new CustomError(422, 'Missing credcard name')
            }
            if(!card_number) {
                throw new CustomError(422, 'Missing credcard number')
            }
            if(typeof(card_number) !== 'number' || card_number.toString().length !== 16) {
                throw new CustomError(422, 'Credcard number inválid')
            }
            if(!card_expiration) {
                throw new CustomError(422, 'Missing credcard expiration')
            }

            if(!card_CVV) {
                throw new CustomError(422, 'Missing card CVV')
            }
            if(typeof(card_number) !== 'number' || card_CVV.toString().length !== 3) {
                throw new CustomError(422, 'Inválid card CVV')
            }
        }
    }

    private checkEmailFormat = (email:string):boolean => {
        const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
        return emailValid.test(email)
    }

}
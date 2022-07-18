import { CustomError } from "../Model/CustonError";
import { RegisterPaymentDTO } from "../Model/types";


export class PaymentBusiness {
    register = (inputs:RegisterPaymentDTO) => {
        try {
            
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}
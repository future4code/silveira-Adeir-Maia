import { CustomError } from "../Model/CustonError"
import { buyerDataDTO, buyerDB, ClientDB } from "../Model/types"
import BaseDataBase from "./BaseDataBase"


export class PaymentData extends BaseDataBase {
    register_buyer = async (buyer:buyerDB):Promise<void> => {
        try {
            await BaseDataBase.connection('Wirecard_buyer').insert(buyer)
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    }

    getClientById = async (id:string):Promise<ClientDB | {}> => {
        try {
            const resultDB = await BaseDataBase.connection('Wirecard_client_id').select('*').where({id})
            if(resultDB.length == 0) {
                return {}
            }
            const result: ClientDB = {id: resultDB[0].id, name: resultDB[0].name}
            return result
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        } 
    }

    getBuyer = async (buyer:buyerDataDTO):Promise<buyerDB | {}> => {
        try {
            const resultDB = await BaseDataBase.connection('Wirecard_buyer').select('').where(buyer)
            if(resultDB.length == 0) {
                return {}
            }
            const result: buyerDB = {
                id: resultDB[0].id, 
                buyer_name: resultDB[0].buyer_name,
                buyer_email: resultDB[0].buyer_email,
                buyer_CPF: resultDB[0].buyer_CPF
            }
            return result
        } catch (error:any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message);
        }
    }


}

export default new PaymentData()
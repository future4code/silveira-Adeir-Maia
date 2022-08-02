import { participationDTO } from "../Model/types";
import BaseDataBase from "./BaseDataBase";

export class ParticipationData extends BaseDataBase {
    insert = async (inputs:participationDTO):Promise<void> => {
        console.log(inputs)
        try {
            await BaseDataBase.connection('cubo_itau_participation').insert(inputs)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    select = async ():Promise<participationDTO[]> => {
        try {
            return BaseDataBase.connection('cubo_itau_participation').select('*')
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    update = async (inputs:participationDTO):Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_itau_participation')
            .update({participation: inputs.participation})
            .where({name:inputs.name})
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    delete = async (name:string):Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_itau_participation').where({name}).delete()
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        } 
    }
}
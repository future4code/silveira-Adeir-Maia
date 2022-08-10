import { deleteDTO, participationDTO, updateDTO } from "../Model/types";
import BaseDataBase from "./BaseDataBase";

export class ParticipationData extends BaseDataBase {
    insert = async (inputs:participationDTO):Promise<void> => {
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

    update = async (inputs:updateDTO):Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_itau_participation')
            .update({participation: inputs.participation})
            .where({fristName: inputs.fristName, lastName: inputs.lastName})
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    delete = async (inputs:deleteDTO):Promise<void> => {
        try {
            await BaseDataBase.connection('cubo_itau_participation')
            .where({fristName: inputs.fristName, lastName: inputs.lastName})
            .delete()
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        } 
    }
}
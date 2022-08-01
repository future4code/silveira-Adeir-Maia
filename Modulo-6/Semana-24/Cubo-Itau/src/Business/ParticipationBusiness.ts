import { ParticipationData } from "../Data/ParticipationData";
import { participationDTO } from "../Model/types";


export class ParticipationBusiness {
    constructor(private participationData: ParticipationData){}

    insert = async (inputs:participationDTO):Promise<void> => {
        if(!inputs.name) throw new Error('Não foi passado um nome e sobrenome')
        if(!inputs.participation) throw new Error('Não foi passada uma participação')

        await this.participationData.insert(inputs)
    }

    
    select = async ():Promise<participationDTO[]> => {
        return this.participationData.select()
    }
    
    update = async (inputs:participationDTO):Promise<void> => {
        await this.participationData.update(inputs)
    }

    delete = async (name:string):Promise<void> => {
        await this.participationData.delete(name)
    }
}

export default new ParticipationBusiness(
    new ParticipationData()
)
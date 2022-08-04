import { participationDTO, updateDTO, deleteDTO } from "../../src/Model/types"
import { peopleMock } from "./ParticipationMock"


export class ParticipationDataMock  {
    insert = async (inputs:participationDTO):Promise<void> => {}

    select = async ():Promise<participationDTO[]> => [peopleMock]

    update = async (inputs:updateDTO):Promise<void> => {}

    delete = async (inputs:deleteDTO):Promise<void> => {}
}
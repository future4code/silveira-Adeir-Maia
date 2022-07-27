import { RegisterInputsDTO, SearchInputsDTO } from "../../src/Model/types"



export class inputsValidationMock {
    register = (inputs:RegisterInputsDTO) => {}

    search = (inputs:SearchInputsDTO) => {}

    
    private id = (id:string):void => {}

    private name = (name:string):void => {}
    
    private tag = (tags:string[]):void => {}

    private searchTerm = (inputs:SearchInputsDTO):void => {}
}
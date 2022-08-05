export type AuthenticationData = {
    id: string
}

export interface RegisterInputsDTO {
    name:string,
    tags: string[]
}

export interface SearchInputsDTO extends RegisterInputsDTO {
    id:string
} 

export interface ProductDB {
    // [index:string]:string
    id:string,
    name:string
}

export interface TagDB extends ProductDB {}

export interface LinkDB {
    id_product:string,
    id_tag:string
}
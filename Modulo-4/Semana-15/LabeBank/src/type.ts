import fs from 'fs'

export type Extract = {
    name?:string,
    cpf?:string,
    data?: string,
    value:number,
    description : string
    
}

export type Client = {
    name: string,
    cpf: string,
    birthdate: string,
    balance:number,
    extract: Extract[] 
}

export const clients:Client[] = []
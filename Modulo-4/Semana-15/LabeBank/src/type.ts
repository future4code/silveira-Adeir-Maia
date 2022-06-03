import fs from 'fs'

export type Extract = {
    value:number,
    data: string | number,
    description : string
}

export type Client = {
    name: string,
    cpf: string,
    birthdate: string | number,
    balance:number,
    extract: Extract[] | []
}

export const clients:Client[] = []
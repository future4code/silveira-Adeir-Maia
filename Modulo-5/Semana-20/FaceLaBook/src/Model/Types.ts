export interface UserInputDTO {
    name:string,
    email:string,
    password: string
}

export interface loginInputDTO {
    email:string,
    password: string
}

export type AuthenticationData = {
    id:string
}
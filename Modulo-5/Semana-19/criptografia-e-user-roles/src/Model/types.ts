export type AuthenticationData = {
    id: string
    role:USER_ROLE
}

export type UserType = {
    id:string,
    email:string,
    password:string
    role: USER_ROLE
}

export enum USER_ROLE {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}


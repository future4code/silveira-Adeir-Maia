export interface UserInputDTO {
    name:string,
    email:string,
    password: string
}

export interface LoginInputDTO {
    email:string,
    password: string
}

export interface PostInputDTO {
    photo:string,
    description:string,
    type:POST_TYPE,
    token: string
}

export interface GetByIdInputDTO {
    token:string,
    id:string
}

export interface FollowInputDTO {
    token:string,
    friend_id:string
}

export interface FriendshipData {
    id?:string,
    user_id: string,
    friend_id:string
}

export enum POST_TYPE {
    NORMAL = 'NORMAL',
    EVENTO = 'EVENTO'
}

export type AuthenticationData = {
    id:string
}

export type postByDatabase = {
    id: string,
    photo: string,
    description: string,
    creation_date: string,
    type: POST_TYPE,
    user_id: string
}

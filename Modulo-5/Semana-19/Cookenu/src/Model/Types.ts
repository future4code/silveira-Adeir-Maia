import { USER_ROLE } from "./Entities/User"

export type AuthenticationData = {
    id: string
    role:USER_ROLE
}

export type Checking = {
    statusCode: number,
    message: string
}


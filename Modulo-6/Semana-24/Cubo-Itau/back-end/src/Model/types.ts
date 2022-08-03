export type AuthenticationData = {
    id: string
}

export interface participationDTO {
    fristName: string,
    lastName: string,
    participation: number
}

export interface updateDTO {
    fristName: string,
    lastName: string
    participation: number
}

export interface deleteDTO {
    fristName: string,
    lastName: string
}
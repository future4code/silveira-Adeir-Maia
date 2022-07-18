export enum USER_ROLE {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

export type User = {
    name:string,
    email:string,
    password:string,
    role:string
}

export type UserEntitie = User & {id:string}

// export class UserEntitie {
//     constructor(private id:string, private email:string,private name:string,private password:string,  private role: USER_ROLE) {}
//     getId = () => this.id
//     getEmail = () => this.email
//     getName = () => this.name
//     getPassword = () => this.password
//     getRole = () => this.role

//     static toUserModel(data:any): UserEntitie {
//         return new UserEntitie(data.id,data.email,data.name,data.password,data.role)
//     }
// }
export  enum USER_ROLE {
    ADMIN = 'ADMIN_USER',
    NORMAL = 'NORMAL_USER'
}

export class User {
    constructor(private id:string, private name:string, private email:string, private password:string, private role: USER_ROLE){}
    getId = () => this.id
    getName = () => this.name
    getEmail = () => this.email
    getPassword = () => this.password
    getRole = () => this.role
    static toUserModel(data:any): User {
    return new User(data.id,data.name,data.email,data.password,data.role)
}
}
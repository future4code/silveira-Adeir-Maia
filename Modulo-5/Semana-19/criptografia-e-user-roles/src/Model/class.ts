import { USER_ROLE } from "./types"

export default class User {
    constructor (public id:string, private email:string, private password:string, private role: USER_ROLE) {}
    getId = () => this.id
    getEmail = () => this.email
    getPassword = () => this.password
    getRole = () => this.role
}
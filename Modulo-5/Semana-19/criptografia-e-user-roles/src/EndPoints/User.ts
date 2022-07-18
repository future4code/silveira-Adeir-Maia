import { Request, Response } from "express";
import UserDataBase from "../Data/UserDataBase";
import User from "../Model/class";
import { AuthenticationData, USER_ROLE } from "../Model/types";
import Authentication from "../Services/Authentication";
import { HashManager } from "../Services/HashManager";
import IdGenerator from "../Services/IDGenerator";
export default class UserEntity {

    SingUP = async (req:Request,res:Response):Promise<void> => {
        const idGenerator = new IdGenerator()
        const hash = new HashManager()
        let statuscode = 201
        const {email,password,role} = req.body
        const id = idGenerator.ID()
        const hashPassword = hash.hash(password)
        const user = new User(id,email,hashPassword,role)
        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
            }
            if(!(role in USER_ROLE)) {
                throw new Error("role deve ser 'ADMIN' ou 'NORMAL'");
            }
            const userDB = new UserDataBase()
            await userDB.singUp(user)
            const token = new Authentication()
            const payload:AuthenticationData = {id,role}
            res.status(statuscode).send({token:token.generateToken(payload)})
            } catch (error:any) {
                res.status(400).send({ message: error.message || error.sqlMessage })
            }
    }

    login = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 200
        const hash = new HashManager()
        const userDB = new UserDataBase() 
        const {email,password} = req.body
        try {
            if (email.indexOf("@") === -1 || !email ) { 
                statusCode = 401 
                throw new Error ('email inválido')
            }
            const user = await userDB.getByEmail(email)
            if(email !== user[0].email || !hash.compare(password,user[0].password)) {
                statusCode = 401
                throw new Error ('Credenciais incorretas!')
            }
            const token = new Authentication()
            const payload:AuthenticationData = {id:user[0].id,role:user[0].role}
            const token1 = token.generateToken(payload)
            console.log(token.getTokenData(token1))
            res.status(statusCode).send({token:token.generateToken(payload)})
        } catch (error:any) {
            res.status(statusCode).send({ message: error.message || error.sqlMessage })
        }
    }

    getById = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 200
        const token = req.headers.authorization as string
        try {
            const userDB = new UserDataBase() 
            const authentication = new Authentication() 
            const id = authentication.getTokenData(token)
            const user = await userDB.getBYId(id.id)
            if(user[0].id !== id.id){
                statusCode = 401
                throw new Error ('Token Inválido')
            }
            if(user[0].role !== USER_ROLE.ADMIN) {
                statusCode = 403
                throw new Error ('Apenas usuários normais podem ver os seus perfis')
            }
            res.status(statusCode).send(user[0])
        } catch (error:any) {
            res.status(statusCode).send({ message: error.message || error.sqlMessage })
        }
    }
} 


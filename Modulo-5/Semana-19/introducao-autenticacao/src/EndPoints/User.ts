import { Request, Response } from "express";
import UserDataBase from "../Data/UserDataBase";
import User from "../Model/types";
import Authentication from "../Services/Authentication";
import IdGenerator from "../Services/IDGenerator";

export default class UserEntity extends IdGenerator{
    public create = async (req:Request,res:Response):Promise<void> => {
        let statuscode = 201
        const {email,password} = req.body
        const id = this.ID()
        const user = new User(id,email,password)
        try {
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
            }
            const userDB = new UserDataBase()
            await userDB.create(user)
            const token = new Authentication()
            res.status(statuscode).send({token:token.generateToken({id})})
        } catch (error:any) {
            res.status(400).send({ message: error.message || error.sqlMessage })
        }
    }

    public getByEmail = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 200
        const {email} = req.body
        try {
            const userDB = new UserDataBase()
            res.status(statusCode).send(await userDB.getByEmail(email))
        } catch (error:any) {
            res.status(400).send({ message: error.message || error.sqlMessage })
        }
    }

    public login = async (req:Request,res:Response):Promise<void> => {
        let statusCode = 200
        const userDB = new UserDataBase() 
        const {email,password} = req.body
        try {
            if (email.indexOf("@") === -1 || !email ) { 
                statusCode = 401 
                throw new Error ('email inválido')
            }
            const user = await userDB.getByEmail(email)
            if(email !== user[0].email || password !== user[0].password) {
                statusCode = 401
                throw new Error ('Credenciais incorretas!')
            }
            const token = new Authentication()
            res.status(statusCode).send({token:token.generateToken({id:user[0].id})})
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
            const user = await userDB.getBYId(id)
            if(user[0].id !== id){
                statusCode = 401
                throw new Error ('Token Inválido')
            }
            res.status(statusCode).send(user[0])
        } catch (error:any) {
            res.status(statusCode).send({ message: error.message || error.sqlMessage })
        }
    }
}
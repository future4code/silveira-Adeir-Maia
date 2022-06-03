import express,{Express,Request,Response} from 'express'
import cors from 'cors'
import { Client , Extract, clients } from './type'
import { checkAge, checkIfCPFalreadyExists, checkCPFFormat } from './functions'


const app:Express = express()
app.use(express.json())
app.use(cors())

app.get("/Client", (req:Request,res:Response)=> {
    let ErrorCode = 200
    try {
        if(clients.length !== 0) {
            res.status(ErrorCode).send(clients)
        } else {
            ErrorCode = 404
            throw new Error (`Não há nenhum cliente cadastrado`)
        }
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.get("/Client/:cpf",(req:Request,res:Response) => {
    let ErrorCode = 200
    const cpf = req.params.cpf
    try {
        if(typeof (cpf) !== 'string' || !cpf || cpf.length !== 11) {
            ErrorCode = 422
            throw new Error (`O paramentro 'cpf' está ausente ou não é do tipo string ou não tem 11 digitos`)
        }
            const client = clients.find(a => a.cpf === cpf)
        if(client) {
            res.status(200).send({cliete:client})
        }else {
            ErrorCode = 404
            throw new Error (`Não há nenhum cliente com esse CPF`)
        }
    } catch(error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.post("/Client",(req:Request,res:Response)=> {
    let ErrorCode = 201
    const { name, cpf, birthdate} = req.body
    try{
        if(checkAge(birthdate)) {
            ErrorCode = 422
            throw new Error ("É preciso ter 18 ou mais para criar uma conta")
        }
        if(typeof (name) !== 'string' || !name) {
            ErrorCode = 422
            throw new Error (`O paramentro 'name' está ausente ou não é do tipo string`)
        }
        if(!checkCPFFormat(cpf)) {
            ErrorCode = 412
            throw new Error (`O paramentro 'cpf não corresponde ao formato 000.000.000-00`)
        }
        if(checkIfCPFalreadyExists(cpf,clients) !== undefined) {
            ErrorCode = 412 
            throw new Error ("Já existe uma conta cadastrada com esse CPF")
        }
        if(typeof (birthdate) !== 'string' || !birthdate) {
            ErrorCode = 422
            throw new Error (`O paramentro 'data de nacimento' está ausente ou não é do tipo string`)
        }
        const client:Client = {name,cpf,birthdate,balance:0,extract:[]}
        clients.push(client)
        res.status(200).send({message:'Conta cadastrada com sucesso!'})
    }catch(error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

const server = app.listen(3005, ()=> console.log(`O servidor está rodando em http://localhost:3005`))



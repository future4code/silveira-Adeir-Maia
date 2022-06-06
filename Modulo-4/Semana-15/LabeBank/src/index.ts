import express,{Express,Request,Response} from 'express'
import cors from 'cors'
import { Client , Extract, clients } from './type'
import { checkAge, checkIfAccountAlreadyExist, checkCPFFormat, getFullDate, checkData, ckecktransferData } from './functions'


const app:Express = express()
app.use(express.json())
app.use(cors())

app.get("/AllClients", (req:Request,res:Response)=> {
    let ErrorCode = 200
    try {
        if(clients.length !== 0) {
            res.status(ErrorCode).send(clients)
        } else {
            ErrorCode = 404
            throw new Error (`Não há nenhum cliente cadastrado.`)
        }
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.get("/Client/balance",(req:Request,res:Response)=> {
    let ErrorCode = 200
    const {name,cpf} = req.body
    try {
        if(typeof (name) !== 'string' || !name) {
            ErrorCode = 422
            throw new Error (`O paramentro 'name' está ausente ou não é do tipo string.`)
        }
        if(!checkCPFFormat(cpf)) {
            ErrorCode = 412
            throw new Error (`O paramentro 'cpf' não corresponde ao formato 000.000.000-00.`)
        }
        const client = clients.find(a => a.cpf === cpf && a.name === name.toUpperCase())
        if (client) {
            const balance = {
                cliente:client.name,
                saldo:client.balance
            }
            res.status(200).send(balance)
        } else {
            ErrorCode = 404
            throw new Error (`Não há nenhum cliente com esse CPF ou com esse Nome.`)
        }

    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.get("/Client/:cpf",(req:Request,res:Response) => {
    let ErrorCode = 200
    const cpf = req.params.cpf
    try {
        if(!checkCPFFormat(cpf)) {
            ErrorCode = 412
            throw new Error (`O paramentro 'cpf não corresponde ao formato 000.000.000-00.`)
        }
        const client = clients.find(a => a.cpf === cpf)
        if (client) {
            res.status(200).send({cliete:client})
        } else {
            ErrorCode = 404
            throw new Error (`Não há nenhum cliente com esse CPF.`)
        }
    } catch(error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.post("/Client",(req:Request,res:Response)=> {
    let ErrorCode = 201
    const { name, cpf, birthdate} = req.body
    try{
        if(typeof (birthdate) !== 'string' || !birthdate) {
            ErrorCode = 422
            throw new Error (`O paramentro 'data de nacimento' está ausente ou não é do tipo string.`)
        }
        if(checkAge(birthdate)) {
            ErrorCode = 422
            throw new Error ("É preciso ter 18 anos ou mais para criar uma conta.")
        }
        if(typeof (name) !== 'string' || !name) {
            ErrorCode = 422
            throw new Error (`O paramentro 'name' está ausente ou não é do tipo string.`)
        }
        if(!checkCPFFormat(cpf)) {
            ErrorCode = 412
            throw new Error (`O paramentro 'cpf não corresponde ao formato 000.000.000-00.`)
        }
        if(checkIfAccountAlreadyExist(cpf, name, clients) !== undefined) {
            ErrorCode = 412 
            throw new Error ("Já existe uma conta cadastrada com esse CPF.")
        }
        const client:Client = { name: name.toUpperCase(), cpf, birthdate, balance:0, extract:[]}
        clients.push(client)
        res.status(ErrorCode).send({message:'Conta cadastrada com sucesso!'})
    }catch(error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.put("/Client/deposit",(req:Request,res:Response)=> {
    let ErrorCode = 200
    const {name,cpf,deposityValue} = req.body
    try {
        if(typeof (name) !== 'string' || !name) {
            ErrorCode = 422
            throw new Error (`O paramentro 'name' está ausente ou não é do tipo string.`)
        }
        if(!checkCPFFormat(cpf)) {
            ErrorCode = 412
            throw new Error (`O paramentro 'cpf' não corresponde ao formato 000.000.000-00.`)
        }
        if(!deposityValue || typeof(deposityValue) !== 'number' || deposityValue < 1){
            ErrorCode = 412
            throw new Error (`Valor do depósito é inválido ou não foi passado.`)
        }
        const client:Client | undefined = clients.find(a => a.cpf === cpf && a.name === name.toUpperCase())
        if (client) {
            const transaction:Extract = {
                value: deposityValue,
                data: getFullDate(),
                description :'Depósito em Dinheiro.',
            }
            client.extract.push(transaction)
            client.balance += deposityValue
            res.status(ErrorCode).send({message:"Depósito realizado com sucesso"})
        } else {
            ErrorCode = 404
            throw new Error (`Não há nenhuma conta cadastrada com o NOME ou CPF informado.`)
        }
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.post("/Client/payment",(req:Request,res:Response)=> {
    let ErrorCode = 200
    let errorMessage: string | Client = checkData(req.body,clients)
    try {
        if(typeof(errorMessage) === 'string') {
            ErrorCode = 422
            throw new Error (errorMessage as string)
        }
    res.status(ErrorCode).send({message:'Pagamento processado com sucesso!'})
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.post("/Client/transfer",(req:Request,res:Response)=> {
    let ErrorCode = 200
    let errorMessage: string | boolean = ckecktransferData(req.body,clients)
    try {
        if(typeof(errorMessage) === 'string') {
            ErrorCode = 422
            throw new Error (errorMessage as string)
        }
    res.status(ErrorCode).send({message:'Transferencia processada com sucesso!'})
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

const server = app.listen(3005, ()=> console.log(`O servidor está rodando em http://localhost:3005`))



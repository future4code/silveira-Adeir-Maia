import express,{Express,Request,Response} from 'express'
import cors from 'cors'
import { users, Users, TYPE } from './data'
let usersInThisArquive = users

const app:Express = express()
app.use(express.json())
app.use(cors())

app.get("/users/:type",(req:Request,res:Response) => {
    let ErrorCode:number = 200
    const type:string | undefined = req.params.type.toUpperCase()
    try {
        if((type !== TYPE.ADMIM && type !== TYPE.NORMAL) || !type) {
            ErrorCode = 412
            throw new Error('Type inválido')
        }
        const usersFiltrados:Users[] = users.filter(user => user.type === type)
        res.status(ErrorCode).send(usersFiltrados)
    } catch(error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.get("/users",(req:Request,res:Response) => {
    let ErrorCode:number = 200
    const search = req.query.search
    try {
        if(!search) {
            ErrorCode = 412
            throw new Error('Um nome para a busca não foi passado!')
        }
        const user = users.find(user => user.name === search)
        if(!user){
            ErrorCode = 404
            res.status(ErrorCode).send(`Não foi encontrado nenhum usário com o nome ${search}`)
        } else {
            res.status(ErrorCode).send(user)
        }
    } catch(error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.put("/user/create",(req:Request,res:Response)=> {
    let ErrorCode:number = 201
    const {name,email,type,age} = req.body
    const id = users[users.length - 1].id + 1 
    try {
        if(!name || !email || !type || !age) {
            ErrorCode = 412
            throw new Error('Um ou mais paramentros não foi passado')
        }
        if(typeof(name) !== 'string') {
            ErrorCode = 422
            throw new Error('O parametro name não é do tipo string')
        }
        if(typeof(email) !== 'string') {
            ErrorCode = 422
            throw new Error('O parametro email não é do tipo string')
        }
        if(typeof(type) !== 'string') {
            ErrorCode = 422
            throw new Error('O parametro type não é do tipo string')
        }
        if(typeof(age) !== 'number') {
            ErrorCode = 422
            throw new Error('O parametro age não é do tipo number')
        }
        const user = {id,name,email,type,age}
        const usersAtualized = users
        usersAtualized.push(user)
        res.status(201).send(usersAtualized)
        usersInThisArquive = usersAtualized
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.put("/user",(req:Request,res:Response)=> {
    let ErrorCode = 200
    const {name} = req.body
    try {
        if(!name) {
            ErrorCode = 412
            throw new Error('O ID não foi passado')
        }
        if(typeof(name) !== 'string') {
            ErrorCode = 422
            throw new Error('O ID passado não é do tipo number')
        }
        const usersAtualized = usersInThisArquive[usersInThisArquive.length - 1]
        usersAtualized.name = `${name}-ALTERADO`
        usersInThisArquive.pop()
        usersInThisArquive.push(usersAtualized)
        res.status(ErrorCode).send(`Alteração realizada com sucesso`)
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.patch("/user",(req:Request,res:Response)=> {
    let ErrorCode = 200
    const {name} = req.body
    try{
        if(!name) {
            ErrorCode = 412
            throw new Error('O ID não foi passado')
        }
        if(typeof(name) !== 'string') {
            ErrorCode = 422
            throw new Error('O ID passado não é do tipo number')
        }
        const usersAtualized = usersInThisArquive[usersInThisArquive.length - 1]
        usersAtualized.name = `${name}-REALTERADO`
        usersInThisArquive.pop()
        usersInThisArquive.push(usersAtualized)
        res.status(ErrorCode).send(`Realteração realizada com sucesso`)
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
})

app.delete("/user",(req:Request,res:Response)=> {
    let ErrorCode = 200
    let id = Number(req.query.id)
    try {
        if(!id) {
            ErrorCode = 412
            throw new Error('O ID não foi passado')
        }
        if(isNaN(id)){
            ErrorCode = 422
            throw new Error('O ID passado não é do tipo number')
        }
        let usersAtualized = usersInThisArquive.filter(user=> user.id !== id)
        usersInThisArquive = usersAtualized
        res.status(ErrorCode).send(usersInThisArquive)
    } catch (error:any) {
        res.status(ErrorCode).send({message:error.message})
    }
    
})

const server = app.listen(3005, () => console.log('O servidor está rodando na http://localhost:3005'))
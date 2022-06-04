import express,{Request,Response} from 'express'
import cors from 'cors'
import { Afazeres } from './types'
import { tarefas } from './aFazeres'


const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping",(req:Request,res:Response) => res.send("Pong! 🏓"))

app.get("/allTarefas",(req:Request,res:Response) => res.send(tarefas))

app. get("/userTarefa/:id",(req:Request,res:Response)=> {
    const userId = +req.params.id
    const selectedUser:Afazeres[] = []
    const others:Afazeres[] = []
    tarefas.forEach(tarefa => tarefa.UserId === userId ? selectedUser.push(tarefa): others.push(tarefa))
    
    res.status(200).send({todos:{selectedUser,others}})
})

app.post("/create/tarefa",(req:Request,res:Response) => {
    const tarefasArray = tarefas
    const id = tarefasArray.length + 1 
    const UserId = tarefasArray[tarefasArray.length-1].UserId + 1
    const body = req.body
    const {title,completed} = body
    const tarefa = {UserId,id,title,completed}
    tarefasArray.push(tarefa)
    res.status(200).send(tarefasArray)
})

app.put("/change/:id",(req:Request,res:Response) => {
    const id:number = +req.params.id
    const tarefasatualizada = tarefas.map(tarefa => tarefa.id === id ? {...tarefa, completed: tarefa.completed ? false : true} : tarefa)
    res.status(200).send(tarefasatualizada)
})

app.delete("/delete/:id",(req:Request,res:Response) => {
    const id:number = +req.params.id
    const tarefasatualizada = tarefas.filter(tarefa => tarefa.id !== id)
    res.status(200).send(tarefasatualizada)
})

app.listen(3005, ()=> console.log('Servidor está rodando na porta http://localhost:3005"'))
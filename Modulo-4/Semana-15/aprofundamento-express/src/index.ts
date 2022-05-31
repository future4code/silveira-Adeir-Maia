import express,{Request,Response} from 'express'
import cors from 'cors'
import { Afazeres } from './types'
import { tarefas } from './aFazeres'


const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping",(req:Request,res:Response) => res.send("Pong! 🏓"))

app.get("/allTarefas",(req:Request,res:Response) => res.send(tarefas))

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

app.put("/change/tarefa",(req:Request,res:Response) => {

})

app.listen(3005, ()=> console.log('Servidor está rodando na porta http://localhost:3005"'))
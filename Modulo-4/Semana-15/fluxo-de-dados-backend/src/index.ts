import express,{Request,Response} from 'express'
import cors from 'cors'
import { videoGames } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test",(req:Request,res:Response) => res.send("Está funcionando"))

app.post('/AddConsole',(req:Request,res:Response) => {
    const {name,price} = req.body
    let errorStatus = 200
    try{
            if (!name) {
                errorStatus = 411
                throw new Error('O nome do produto está ausente')
            }
            if (typeof(name) !== 'string'){
                errorStatus = 422
                throw new Error('O nome é inválido')
            }
            if (typeof(price) !== 'number' && price) {
                errorStatus = 422
                throw new Error('O preço é inválido')
            }
            if (!price && price !== 0) {
                errorStatus = 411
                throw new Error('O preço do produto está ausente')
            }
            if (+price <= 0) {
                errorStatus = 422
                throw new Error('O preço não pode menor ou igual a 0')
            }

        let id = new Date().getTime().toString()
        const consoles = videoGames
        const console = {id,name,price}
        consoles.push(console)
        res.status(200).send(consoles)
    } catch (error:any) {
        res.status(errorStatus).send({message:error.message})
    }
    
})

app.get("/AllConsoles",(req:Request,res:Response) => {
    res.status(200).send(videoGames)
})

app.put("/changePrice/",(req:Request,res:Response) => {
    let errorStatus = 200
    try {
        const preco = req.body.price
        const id = req.query.id
        if(!id) {
            errorStatus = 411
            throw new Error('O id do produto está ausente')
        }
        if (!preco && preco !== 0) {
            errorStatus = 411
            throw new Error('O preço do produto está ausente')
        }
        if (typeof(preco) !== 'number' && preco) {
            errorStatus = 422
            throw new Error('O preço é inválido')
        }
        if (+preco <= 0) {
            errorStatus = 422
            throw new Error('O preço não pode menor ou igual a 0')
        }
        const produto = videoGames.find(produto => produto.id === id)
        if(produto) {
        const produtosAtualizados = videoGames.map(produto => 
        produto.id === id ? {...produto, price: +preco } : produto
        )
        res.status(200).send(produtosAtualizados)
        } else {
            errorStatus = 404
            throw new Error('Produto inexistente')
        }
        
    } catch (error:any) {
        res.status(errorStatus).send({message:error.message})
    }
})

app.delete("/delete",(req:Request,res:Response)=> {
    let errorStatus = 200
    try {
        if(!req.query.id) {
            errorStatus = 411
            throw new Error('O id do produto está ausente')
        }
        const produto = videoGames.find(produto => produto.id === req.query.id)
        if(produto) {
            res.status(200).send(videoGames.filter(console => console.id !== req.query.id))
        } else {
            errorStatus = 404
            throw new Error('Produto inexistente')
        }
    } catch (error:any) {
        res.status(errorStatus).send({message:error.message})
    }
})

app.listen(3005, ()=> console.log('Servidor está rodando na porta http://localhost:3005'))
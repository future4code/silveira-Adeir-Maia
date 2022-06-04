import express,{Request,Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3005,()=> console.log("O servidor esta rodando na porta http://localhost:3005"))

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

const colegas:User[] = [
    {
        id: 1,
        name: 'Adeir',
        phone:'31 9 9146 - 7427',
        email:'adeir.maia@hotmail.com',
        website:'adeirmoreira.com.br'
    },
    {
        id: 2,
        name: 'Eduardo',
        phone:'31 9 9146 - 9074',
        email:'eduardo.maia@hotmail.com',
        website:'eduardomoreira.com.br'
    },
    {
        id: 3,
        name: 'Eric',
        phone:'31 9 1538 - 9074',
        email:'Eric.papa@hotmail.com',
        website:'ericvictor.com.br'
    },
    {
        id: 4,
        name: 'Ariane',
        phone:'31 9 1538 - 1707',
        email:'aririterere@hotmail.com',
        website:'arianeterere.com.br'
    },
    {
        id: 5,
        name: 'Mariana',
        phone:'31 9 5268 - 1707',
        email:'maritronix@hotmail.com',
        website:'marianatronix.com.br'
    },
    {
        id: 6,
        name: 'Davi',
        phone:'31 9 2581 - 1707',
        email:'daviaraujo@hotmail.com',
        website:'daviaraujo.com.br'
    },
]

type Post = {
    userId:number,
    id:number,
    title:string,
    body:string
}

//É melhor criar em um array separado para facilicar a busca e separação dos posts
const posts:Post[] = [
    {
        userId:1,
        id:1,
        title:'Galão',
        body:'terminar aqui rápido porque hoje tem jogo do Galão'
    },
    {
        userId:1,
        id:2,
        title:'bigodes e quadrado',
        body:'põe um bigode na linha 14 e um quadrado depois da vírgula no useEffect'
    },
    {
        userId:2,
        id:1,
        title:'Inferno',
        body:'Infernoooo. Por que isso não funciona'
    },
    {
        userId:2,
        id:2,
        title:'Susurro',
        body:'...pspspspspsps...pspspspspspsps...'
    },
    {
        userId:3,
        id:1,
        title:'valorant',
        body:'Ovo jogar um valorant depois eu vejo isso aê'
    },
    {
        userId:3,
        id:2,
        title:'pão',
        body:'vo comprar pão...'
    },
    {
        userId:4,
        id:1,
        title:'bicicletinha',
        body:'minha Nossa Senhora da Bicicletinha'
    },
    {
        userId:4,
        id:2,
        title:'ajuda',
        body:'Adeir me ajuda,... eduardo ta me ouvindo?...'
    },
    {
        userId:5,
        id:1,
        title:'boy',
        body:'Isso não é ideia não boy...'
    },
    {
        userId:6,
        id:1,
        title:'arô',
        body:'arooô... aroooô'
    },
    {
        userId:6,
        id:2,
        title:'mutar',
        body:'vo mutar esse eric...'
    },
]

app.get('/',(req:Request, res: Response) => {
    res.send('Bem vindo ao express')
})

app.get('/allColegas',(req:Request, res:Response) => {
    res.status(200).send(colegas)
})

app.get('/allPosts',(req:Request, res:Response) => {
    res.status(200).send(posts)
})

app.get('/post/:userId',(req:Request, res:Response) => {
    const id = +req.params.userId
    res.status(200).send(posts.filter(post => post.userId === id))
})

app.delete('/delete/user/:userId',(req:Request, res:Response) => {
    const id = +req.params.userId
    const newColegas = colegas.filter(item => item.id !== id)
    res.status(200).send(newColegas)
})

app.delete('/delete/post/:userId/:postId',(req:Request, res:Response) => {
    const id = +req.params.userId
    const postId = +req.params.postId
    const newPosts = posts.filter(post => (((post.userId === id) || (post.userId !== id) ) && post.id !== postId))
    res.status(200).send(newPosts)
})

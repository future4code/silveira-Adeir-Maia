let Produtos:pratos[] = [] 
let Venda:notaFiscal[] = []

type notaFiscal = {
    nome:string,
    custo:number,
    preco:number
}
type pratos = {
    nome:string,
    custo:number,
    preco:number,
    ingredientes:string[]
}

const Hamburger:pratos = {
    nome:'Hamburger',
    preco:20,
    custo: 10,
    ingredientes:['pão','hamburger','ovo','bacon','presunto','alface','tomate']
}
const Pizza:pratos = {
    nome:'Pizza',
    preco:50,
    custo: 20,
    ingredientes:['massa','queijo','ovo','bacon','presunto','azeitona','frango Desfiado']
}
const Açai:pratos = {
    nome:'Açai',
    preco:10,
    custo: 5,
    ingredientes:['açai','leite condensado','leite em pó','banana','granola']
}

const cadastrar = (Prato:pratos) => Produtos.push(Prato)
const saberPreço = (nome:string) => Produtos.forEach(prato => {
    let preco
    if (prato.nome === nome) {
        preco = prato.preco
    }
    return preco
}
    
    )
const vender = (nome:string):void => Produtos.forEach(prato => prato.nome === nome && Venda.push({nome:prato.nome,custo:prato.custo,preco:prato.preco}))
const lucro = () => Venda.reduce((a,b) => a += b.preco - b.custo, 0)



cadastrar(Hamburger)
cadastrar(Pizza)
cadastrar(Açai)

console.log(Produtos)
console.log(saberPreço('Pizza'))
console.log(Venda)
vender('Hamburger')
vender('Açai')
console.log(lucro)
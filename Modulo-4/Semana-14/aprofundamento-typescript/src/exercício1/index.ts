//1.a
let minhaString: string = 'Galão da Massa'
//minhaString = 123
//R: O tipo 'number' não pode ser atribuído ao tipo 'string'.

//1.b
const meuNúmero: number | string = 123
//R Usa-se o operador Union Type para dizer que uma variável pode asumir mais de um tipo

//1.c.d
enum CoresArcoÍris {
    VERMELHA = 'vermelha',
    LARANJA = 'laranha', 
    AMARELO = 'amarelo', 
    VERDE = 'verde', 
    AZUL = 'azul', 
    AZULESCURO ='azul-escuro', 
    VIOLETA = 'violeta'
}

type person = {
    nome:string
    idade:number
    corFavorita: CoresArcoÍris
}

const Ariane:person = {
    nome:'Ariane',
    idade: 28,
    corFavorita: CoresArcoÍris.LARANJA
}

const Eduardo:person = {
    nome:'Eduardo',
    idade: 30,
    corFavorita: CoresArcoÍris.AZULESCURO
}

const Davi:person = {
    nome:'Davi',
    idade:22,
    corFavorita: CoresArcoÍris.AMARELO
}

//2.a
console.log(Ariane)
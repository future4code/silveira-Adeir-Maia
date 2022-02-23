/*
EXERCÍCIOS DE INTERPRETAÇÃO

1.a
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

2.a
{
    nome: "Juca", 
    idade: 3, 
    raca: "SRD"
}
{
    nome: "Juba", 
    idade: 3, 
    raca: "SRD"
}
{
    nome: "Jubo", 
    idade: 3, 
    raca: "SRD"
}

2.b
Cria uma cópia do array ou objeto, pode ser usado na hora de passar parametros a uma função, ou na hora de guardar em uma variável, ao adicionar um propriedade ou elemento
de array etc.

3.a
false
undefined

3.b
A função recebe um objeto e a chave de uma propriedade e retorna o valor dessa propriedade. Primeiro foi passado a chave 'backender' e foi retornado seu valor que é false
O segundo foi imprimido undefined porque foi passado uma chave que não existe no objeto.

EXERCÍCIOS DE ESCRITA 

1.a */
let time = {
    nome: 'Clube Atlético Mineiro',
    apelidos: ['Galo', 'Galão da Massa', 'Campeão do Gelo']
}
let imprimir = objeto => console.log(`Eu sou o ${objeto.nome} mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
imprimir(time)

//1.b
let time1 = {
    ...time, apelidos: ['Super CAMpeão do brasil', 'Galo Mineiro', 'Atlético']
}
imprimir(time1)

//2.a
let pessoa1 = {
    nome: 'Loiane Groner',
    idade: 30,
    profissão: 'Escritora'
}
let pessoa2 = {
    nome: 'Gustava Guanabara',
    idade: 40,
    profissão: 'Professor de Técnologia'
}

//2.b
let array = pessoa => {
    let array = []
    array[0] = pessoa.nome
    array.push(pessoa.nome.length)
    array.splice(2, 0, pessoa.idade)
    array[3] = pessoa.profissão
    array.push(pessoa.profissão.length)
    console.log(array)
}

array(pessoa1)
array(pessoa2)

//3.a
var carrinho = []

//3.b
let fruta1 = { nome: 'goiaba', disponibilidade: true }
let fruta2 = { nome: 'maçâ', disponibilidade: true }
let fruta3 = { nome: 'pera', disponibilidade: true }

//3.c
let impressão = parametro => carrinho.push(parametro)
impressão(fruta1)
impressão(fruta2)
impressão(fruta3)
//3.d
console.log(carrinho)

//DESAFIO

//1
const perguntar = () => {
    let usuario = {
        nome: prompt('Qual é o seu nome?'),
        idade: +prompt('Qual é a sua idade?'),
        profissão: prompt('Qual é a sua profissão?')
    }
    console.log(usuario)
    console.log(typeof usuario)
}
perguntar()

//2
let filme = {
    nome: 'Hope',
    lançamento: 2013,
    diretor: 'Lee Joon- ik',
    atores: ['Lee Re', 'Sol Kyung - gu', 'Uhm Ji - won'],
    visto: true
}
let filme1 = {
    nome: '7 Minutos depois da meia noite',
    lançamento: 2016,
    diretor: 'Juan Antonio Bayona',
    atores: ['Liam Neeson', 'Felicity Jones', 'Lewis MacDougall'],
    visto: true
}
let escreva = (argumento1, argumento2) => {
    console.log(`O primeiro filme foi lançado antes do segundo? ${argumento1.lançamento < argumento2.lançamento}
O primeiro filme foi lançado no mesmo ano do segundo? ${argumento1.lançamento === argumento2.lançamento}`)
}
escreva(filme, filme1)

//3
let inverteDisponibilidade = argumento => {
    argumento.disponibilidade = false
    return argumento
}

console.log(inverteDisponibilidade(fruta1), inverteDisponibilidade(fruta1), inverteDisponibilidade(fruta1))
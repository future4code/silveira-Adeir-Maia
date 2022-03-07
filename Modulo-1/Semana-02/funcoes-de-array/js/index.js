/*EXERCÍCIOS DE INTERPRETAÇÃO 
1
o valor do 1° elemento, o 1° index e o array inteiro
o valor do 2° elemento, o 2° index e o array inteiro
o valor do 3° elemento, o 3° index e o array inteiro

2
Um array em que cada elemento é o valor da propriedade nome

3
Um array com os dois primeiros elementos do array original pois o valor da propiedade apelido deles é diferente de 'Chijo'

EXERCÍCIOS DE ESCRITA 
1 */
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//1.a
const nomesDosPets = pets.map(elemento => elemento.nome)
console.log(nomesDosPets)

//1.b
const salsichas = pets.filter(elemento => elemento.raca === 'Salsicha')
console.log(salsichas)

//1.c
const cupomDesconto = pets.filter(elemento => elemento.raca === 'Poodle').map(elemento => `Você ganhou um cupom de desconto de 10% para tosar o/a ${elemento.nome}!`)
console.log(cupomDesconto)

//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//2.a
const nomesDosProdutos = produtos.map(elemento => elemento.nome)
console.log(nomesDosProdutos)

//2.b
const precoDesconto = produtos.map(elemento => {
    const nome = elemento.nome, preco = +(elemento.preco * 0.95).toFixed(2)
    return { nome, preco }
})
console.log(precoDesconto)

//2.c
const bebidas = produtos.filter(elemento => elemento.categoria === 'Bebidas')
console.log(bebidas)

//2.d
const temYpê = produtos.filter(elemento => elemento.nome.includes('Ypê'))
console.log(temYpê)

//2.e
const compreYpê = produtos.filter(elemento => elemento.nome.includes('Ypê')).map(elemento => `Compre ${elemento.nome} por ${elemento.preco}!`)
console.log(compreYpê)

//DESAFIO
//1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//1.a
const nomesEmOrdem = pokemons.map(elemento => elemento.nome).sort((a, b) => {
    if (a === b) return 0
    return a < b ? -1 : 1
})
console.log(nomesEmOrdem)

//1.b
const tipoSemRepetição = pokemons.map(elemento => elemento.tipo).reduce((acumulador, elementoAtual) => {
    if (!acumulador.includes(elementoAtual)) acumulador.push(elementoAtual)
    return acumulador
}, [])
console.log(tipoSemRepetição)
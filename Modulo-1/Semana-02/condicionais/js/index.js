/* EXERCÍCIOS DE INTERPRETAÇÃO
1.a
O código pede ao usuário para digital um numero e depois testa se o resto da divisão desse número é 2. Se o resto for dois
escreve console 'Passou no teste.', so o resto não for 2 escreve 'Não passou no teste.'

1.b
Para os número pares

1.c 
Para os impares

2.a
Serve para atribuir um valor a variável preço de acordo com a respectiva fruta.

2.b
O preço da fruta Maçâ é R$ 2.25

2.c
O preço da fruta Pera é R$ 5. Como não tem um BREAK ele vai executar a linha de baixo e vai atribuir 5 a variável preço.

3.a
Verificando se o valor da variável número é maior que 10 

3.b
Esse número passou no teste
Essa mensagem é secreta!!!
ReferenceError: mensagem is not defined

3.c
Em uma condicional, o bloco de código dentro das chaves é executando apenas se uma condição passada for verdadeira. No caso do 
exercício é o número ser maior que 0. Se for digitado qualquer número menor que 0, o bloco não será executado. Como a criação da variável mensagem 
está no bloco de código, se ele não for executado a variável mensagem não existirá. Qunado mandamos o console.log() exibir a variável mensagem,
ele retornará um erro dizendo que ela não foi definida.

EXERCÍCIOS DE ESCRETA  

1 */
let idade = +prompt('Qual é a sua idade?')
if (idade > 18) console.log('Voce pode dirigir')
else console.log('Você não pode dirigir')

//2
let turno = prompt('Em que turno você estuda? M(Matutino) V(Vespertino) N(Noturno)')
if (turno.toUpperCase() === 'M') console.log('Bom Dia!')
else if (turno.toUpperCase() === 'V') console.log('Boa Tarde!')
else if (turno.toUpperCase() === 'N') console.log('Boa Noite!')
else console.log('Por favor informe seu turno digitando M V ou N')

//3
switch (turno.toUpperCase()) {
    case 'M':
        console.log('Bom Dia!')
        break
    case 'V':
        console.log('Bom Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Por favor informe seu turno digitando M V ou N')
        break
}

//4
let filme = prompt('Qual é o gênero do filme?'), precoDoingresso = +prompt('Qual o preco do ingresso?')
if (filme.toLowerCase() === 'fantasia' && precoDoingresso < 15) console.log('Bom filme!')
else console.log('Escolha outro filme :(')

//DESAFIO
//1
if (filme.toLowerCase() === 'fantasia' && precoDoingresso < 15) {
    console.log('Bom filme!')
    console.log(`Aproveite o seu/sua ${prompt('Você comprou algum lanchinho? (pipoca, chocolate, doces, etc)')}`)
} else console.log('Escolha outro filme :(')

//2
let nome = prompt('Qual e seu nome?'), tipo = prompt('Qual o tipo do ingresso? IN(Internacional) NA(Nacional)')
let etapa = prompt('Qual etapa ? SF(Semi-Final) DT(Decisão do terceiro lugar) FI(Final)')
let categoria = +prompt('Qual a categoria do ingresso? 1,2,3 ou 4'), quantidade = +prompt('Quantos ingressos?')

if (tipo.toUpperCase() === 'IN') tipo = 'Internacional'
else if (tipo.toUpperCase() === 'NA') tipo = 'Nacional'

if (etapa.toUpperCase() === 'SF') etapa = 'Semi-Final'
else if (etapa.toUpperCase() === 'DT') etapa = 'Disputa do terceiro lugar'
else if (etapa.toUpperCase() === 'FI') etapa = 'Final'

const preçoSF1 = 1320, preçoSF2 = 880, preçoSF3 = 550, preçoSF4 = 220
const preçoDT1 = 666, preçoDT2 = 440, preçoDT3 = 330, preçoDT4 = 170
const preçoFI1 = 1980, preçoFI2 = 1320, preçoFI3 = 880, preçoFI4 = 330

let preço = (tipo, etapa, categoria, quantidade) => {
    var valorTotal
    var valorDoIngresso
    let dolar = 5

    if (etapa === 'Semi-Final') {
        switch (categoria) {
            case 1:
                valorTotal = quantidade * preçoSF1
                valorDoIngresso = preçoSF1
                break
            case 2:
                valorTotal = quantidade * preçoSF2
                valorDoIngresso = preçoSF2
                break
            case 3:
                valorTotal = quantidade * preçoSF3
                valorDoIngresso = preçoSF3
                break
            case 4:
                valorTotal = quantidade * preçoSF4
                valorDoIngresso = preçoSF4
                break
        }
    }
    if (etapa === 'Disputa do terceiro lugar') {
        switch (categoria) {
            case 1:
                valorTotal = quantidade * preçoDT1
                valorDoIngresso = preçoDT1
                break
            case 2:
                valorTotal = quantidade * preçoDT2
                valorDoIngresso = preçoDT2
                break
            case 3:
                valorTotal = quantidade * preçoDT3
                valorDoIngresso = preçoDT3
                break
            case 4:
                valorTotal = quantidade * preçoDT4
                valorDoIngresso = preçoDT4
                break
        }
    }
    if (etapa === 'Final') {
        switch (categoria) {
            case 1:
                valorTotal = quantidade * preçoFI1
                valorDoIngresso = preçoFI1
                break
            case 2:
                valorTotal = quantidade * preçoFI2
                valorDoIngresso = preçoFI2
                break
            case 3:
                valorTotal = quantidade * preçoFI3
                valorDoIngresso = preçoFI3
                break
            case 4:
                valorTotal = quantidade * preçoFI4
                valorDoIngresso = preçoFI4
                break
        }
    }
    if (tipo === 'Internacional') {
        valorTotal = valorTotal / dolar
        valorDoIngresso = valorDoIngresso / dolar
    }
    return { valorTotal, valorDoIngresso }
}

let objetoRetornadoPelafuncao = preço(tipo, etapa, categoria, quantidade)

let moeda = tipo => {
    if (tipo === 'Internacional') return 'U'
    else if (tipo === 'Nacional') return 'R'

}

console.log(`---Dados da Compra---
Nome do cliente: ${nome}
Tipo de jogo: ${tipo}
Etapa do jogo: ${etapa}
Categoria: ${categoria}
Quantidade de ingresso: ${quantidade} ingressos
---Valores---
Valor dos ingresso ${moeda(tipo)}$ ${objetoRetornadoPelafuncao.valorDoIngresso}
valor total ${moeda(tipo)}$ ${objetoRetornadoPelafuncao.valorTotal}`)
/*
EXERCÍCIOS DE INTEPRETAÇÃO
Questão 1
R: 1° 10  depois 2° 10,5

Questão 2
R: 20,10,10

Questão 3
R: Não devemos ser programadores contadores - aqueles que suas variáveis são n1,n2,n3,n4...
e nem programadores alfabeto - aqueles que suas variáveis são a,b,c,d...
é uma boa prática dar às nossas variáveis nomes relacionados com o que ela recebe ou faz, pois o nosso código deve ser o mais legivel
possivel e de facil compreenção a qualquer um que venha a le-lo.
Pessando nisso, sugiro que a variável p seja renomeada para horasDeTrabalho e também a variável t seja renomeada para pagamentoDia. Ambos
os nomes estão relaciondos com o valor que a variável recebe e respeitam o padrão camelCase.
*/


//EXECÍCIO DE ESCRITA 
//1.a
let nome = undefined

//1.b
let idade = undefined

//1.c
console.log(typeof nome)
console.log(typeof idade)

//1.d
// O tipo das 2 variáveis undefined porque undefined é indefinido, é usado quando queremos declarar uma variável mas não vamos atribuir
// um valor a ela por enquanto.

//1.e
nome = window.prompt('Qual é o seu nome?')
idade = window.prompt('Qual é a sua idade?')//Number(window.prompt('Qual é a sua idade?'))
console.log(typeof nome)
console.log(typeof idade)

//1.f
//Agora que eu atribui um valor as duas variávies, elas mudaram de tipo, ambas passaram a ser do tipo String, mas há algo estranho, porque
// a variavel idade também passou a ser do tipo string? ela não deveria ser do tipo number? já que eu digitei um número? Isso se deve
// ao fato de que, por padrão, a resposta capturada pelo método prompt é uma string independentemete do que foi digitado pelo usuário.
// para que a variável idade passe a ser um Number devemos colocar Number na frente do metédo prompt e ele mesmo dentro de parenteses
// Assim Number(window.prompt('Qual é a sua idade?'))
//1.g
console.log(`Olá ${nome}, você tem ${idade} anos de idade!`)

//2.a
const primeiraPergunta = window.prompt('Você é de Minas Gerais? SIM/NÂO')
const segundaPergunta = window.prompt('Vocês gosta de futebol? SIM/NÃO')
const terceiraPergunta = window.prompt('Você torce para o melhor time de Minas, o time que tem o incrível Hulk, o Homem Arana e o Keno Maravilha? SIM/NÃO')

//2.b
console.log(`Essas foram suas respostas:
Você é de Minas Gerais? ${primeiraPergunta}
Vocês gosta de futebol? ${segundaPergunta}
Você torce para o melhor time de Minas, o time que tem o incrível Hulk, o Homem Arana e o Keno Maravilha? ${terceiraPergunta}`)

//3.a
let a = 10
let b = 25

let c = undefined
c = a
a = b
b = c

// [a,b] = [b,a]

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//DESAFIO 

const primeiroNumero = Number(window.prompt('Por favor digite um numero'))
const segundoNumero = Number(window.prompt('Por favor digite um numero'))
const soma = primeiroNumero + segundoNumero
const multiplicação = primeiroNumero * segundoNumero
console.log(`A soma de ${primeiroNumero} + ${segundoNumero} é igual a ${soma},
A multiplicação de ${primeiroNumero} * ${segundoNumero} é igual a ${multiplicação}`)
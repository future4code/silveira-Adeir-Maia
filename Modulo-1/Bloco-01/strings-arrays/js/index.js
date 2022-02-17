/*EXERCÍCIO DE INTERPRETAÇÃO

1
a.undefined
b.null
c.11
d.3
e.[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.9

2
SUBI NUM ÔNIBUS EM MIRROCOS 27

EXERCÍCIO DE ESCRITA DE CÓDIGO 

1*/
const nomeUsuario = prompt('Qual é o seu nome?'), emailUsuario = prompt('Qual é o seu e-mail?')//Separadas por vírgula, é possivel declarar várias variaveis de uma vez
console.log(`o e-mail ${emailUsuario} foi cadrastrado com sucesso, seja bem-vindo ${nomeUsuario}!`)

// 2
const comidas = ['Pudim', 'Salpicão', 'Churrasco', 'Sorvete', 'Bolo de Cenoura']
console.log(`${comidas}
${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)
comidas[1] = prompt('Qual a sua comida preferida?')
console.log(comidas)

//3
const listaDeTarefas = []
listaDeTarefas[0] = prompt('Escreva uma tarefa que você precisa realizar hoje')
listaDeTarefas.push(prompt('Escreva outra tarefa para que você não esqueca'))
listaDeTarefas.splice(2, 0, prompt('Escreva uma terceira tarefa que você não pode esquercer de realizar'))//splice() pode ser usado para adicionar em vez remover elemetos do array
console.log(listaDeTarefas)                                                                               //1° Parametro = indica posição 2° indica quantos elementos serão removidos 
listaDeTarefas.splice(+prompt('Qual das tarefas você já realizou? 1,2 ou 3') - 1, 1)                      //3° o elemento que será adicionado ao array
console.log(listaDeTarefas)

//DESAFIO
//1
let array = [prompt('Por favor digite uma frase:')]
let palavra
let resto
let array2 = []
do {
    if (array[0].indexOf(' ') === -1) {
        array2.push(array[0].slice(0, array[0].length))
        array.pop()
    } else {
        palavra = array[0].slice(0, array[0].indexOf(' '))
        resto = array[0].slice(array[0].indexOf(' ') + 1, array[0].length)
        array2.push(palavra)
        array[0] = resto
    }
} while (array.length !== 0)
console.log(array2)

//2
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(`O indice de Abacaxi é ${frutas.indexOf("Abacaxi")}, e o comprimento do array é ${frutas.length}`)


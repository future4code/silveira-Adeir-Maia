/*EXERCÍCIO DE INTERPRETAÇÃO
1
O código incrementa em 1 o valor da variável valor 5 vezes depois exibe no console seu valor resultante.

2.a
Os números maiores que 18

2.b
É. use isso:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) console.log(numero, lista.indexOf(numero))

3.a
*
**
***
****

EXERCÍCIO DE ESCRITA DE CÓDIGO
1.a */
const pet = +prompt('Quantos animais de estimação você tem?')
if (pet <= 0) console.log('Que pena! Você pode adotar um pet!')

//1.b
const nomeDosPets = []
let contador = 1
if (pet > 0) {
    while (contador <= pet) {
        nomeDosPets.push(prompt(`Qual é o nome do seu ${contador}° pet?`))
        contador++
    }
}

//1.c
console.log(nomeDosPets)

//2.a
const arrayOriginal = [89, 34, 233, 21, 144]
for (let numero of arrayOriginal) console.log(numero)

//2.b
for (let numero of arrayOriginal) console.log(numero / 10)

//2.c
let fibonacciPares = []
for (let numero of arrayOriginal) if (numero % 2 === 0) fibonacciPares.push(numero)
console.log(fibonacciPares)

//2.d
let imprimiIndex = array => {
    let frase = []
    for (let numero of array) frase.push(`O elemento do índex ${array.indexOf(numero)} é: ${numero}`)
    console.log(frase)
}
imprimiIndex(arrayOriginal)

//2.e
let maior = arrayOriginal[0], menor = arrayOriginal[0]
let funcao = array => {
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) maior = array[i]
        if (array[i] < menor) menor = array[i]
    }
}
funcao(arrayOriginal)
console.log(`O maior é ${maior}, e o menor é ${menor}`)

//DESAFIO
//1.a
const numeroEscolhidoPeloJogador1 = +prompt('1° jogador Escolha um número')
console.log('Vamos jogar!')

//1.b.c
let jogoDaAdivinhação = numero => {
    let chute = +prompt('2° jogador Chute um número'), contador = 1
    while (chute !== numero) {
        console.log(`o número chutado foi: ${chute}`)
        contador++

        let maiorOumenor = chute => {
            if (chute < numero) return 'MAIOR'
            if (chute > numero) return 'MENOR'
        }

        console.log(`ERRROUUUU . O número escolhido é ${maiorOumenor(chute)}`)

        chute = +prompt('2° jogador Chute outro número')
    }

    if (chute === numero) {
        console.log(`o número chutado foi: ${chute}`)
        console.log('****ACERTOU***')
        console.log(`O número de tentativas: ${contador}`)
    }
}
jogoDaAdivinhação(numeroEscolhidoPeloJogador1)


window.alert('Parabêns por ter acertado! Agora você vai jogar contra a maquina, ela irá escolher um número entre 1 e 100! Boa Sorte!')
//2.a

const numeroEscolhidoPelaMaquina = Math.floor(Math.random() * 100 + 1)
jogoDaAdivinhação(numeroEscolhidoPelaMaquina)
//Math.floor retorna a parta inteira de um numero e Math.random gera algum numero aleátorio entre 0 e 1.
//Foi bem fácil, bastou jogar no google 'como gerar números aleatórios no javacript' apareceu a resposta logo no primeiro link.

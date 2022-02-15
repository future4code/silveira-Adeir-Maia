/*
EXERCÍCISO DE INTERPRETAÇÃO

1
a.False -> O operador && retorna True apenas se dois argumentos forem True. O segundo argumento e False
b.False -> 2 operadores && sem parenteses, a sentença começará a ser lida da esquerda para a direta portanto temos True && False && True.
o argumento false do meio torna toda a sentença falsa 
c.True -> O opedaoror ! inverte o boleano da variável resultado, a seguigir, os parenteses indicam que os argumentos 2 e 3 devem ser comparados 
entre si, dentro dos parenteses temos o operador || que retorna false apenas se os dois argumentos forem falsos, portanto, temos
!false && (True && false) ---> True && True ---> True
d. boolean -> true e false são boleanos 

2 e 3 
VAMOS SUPER O MEU COLEGA TENHA DIGITADO 10 E DEPOIS 5
O que será impresso é 105, pois, por padrão, o método prompt captura uma string, o operador + entre strings irá apenas concatena-las
Para somar o valor das duas variáveis em preciso transforma-las de string para Number, Assim: 
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
com esse código meu amigo conseguirá somar os 2 números.

EXERCÍCIOS DE ESCRITA */
//1.a
const suaIdade = Number(prompt('Qual a sua idade?'))
//1.b
const idadeDoAmigo = Number(prompt('Qual a idade do seu melhor amigo?'))
//1.c
let igualdade = suaIdade > idadeDoAmigo
console.log(`Sua idade é maior do que a do seu melhor amigo? (${igualdade})`)
//1.d
let diferença = (suaIdade, idadeDoAmigo) => {
    if (suaIdade > idadeDoAmigo) {
        return `Você é mais velho que seu amigo ${suaIdade - idadeDoAmigo} anos.`
    } else if (idadeDoAmigo > suaIdade) {
        return `Seu amigo é mais velho que você ${idadeDoAmigo - suaIdade} anos.`
    } else {
        return `Vocês tem a mesma idade!`
    }
}
console.log(diferença(suaIdade, idadeDoAmigo))

//2.a
const par = Number(prompt('Por favor digite um número par'))
//2.b
console.log(par % 2)
//2.c
//Todos os números pares divididos por 2 tem resto 0. Podemos usar essa informação numa condicional para determinar seu um número é par ou não.
//2.d
const impar = Number(prompt('Por favor digite um número impar'))
console.log(impar % 2)
//Todos os números impares dividos por 2 tem resto 1. Podemos usar essa informação numa condicional para determinar seu um número é par ou não.
//Assim:
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'par'
    } else if (numero % 2 === 1) {
        return 'impar'
    } else {
        return 'você não digitou um número!'
    }
}
console.log(`${par} é ${parOuImpar(par)}`)
console.log(`${impar} é ${parOuImpar(impar)}`)

//3.
const usuarioIdade = Number(prompt('Quantos anos você tem?'))
//3.a
const emMeses = usuarioIdade * 12
console.log(`Você tem ${emMeses} meses de vida.`)
//3.b
const emDias = emMeses * 30
console.log(`Você tem ${emDias} dias de vida.`)
//3.c
const emHoras = emDias * 24
console.log(`Você tem ${emHoras} horas de vida.`)

//4
const numero1 = +prompt('Por favor digite um número')
const numero2 = +prompt('Por favor digite outro número')
console.log(`O primeiro numero é maior que o segundo? ${numero1 > numero2}
O primeiro numero é igual ao segundo? ${numero1 === numero2}
O primeiro numero é divisível pelo segundo? ${(numero1 % numero2) === 0}
O segundo numero é divisível pelo primeiro? ${(numero2 % numero1) === 0}`)

//DESAFIO

//D1
let fahrenheit = (celsius) => {
    return celsius * 1, 8 + 32
}
let celsius = (fahrenheit) => {
    return (fahrenheit - 32) / 1.8
}
let kelvin = (celsius) => {
    return celsius + 273.15
}
let celsiusK = (kelvin) => {
    return kelvin - 273.15
}

//D1.a 
let apoio = celsius(77)
console.log(celsiusK(apoio))

//D1.b
console.log(fahrenheit(80))

//D1.c
console.log(fahrenheit(30))
console.log(kelvin(30))


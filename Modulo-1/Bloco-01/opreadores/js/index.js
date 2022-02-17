/*
EXERCÍCISO DE INTERPRETAÇÃO

1
a.False -> O operador && retorna True apenas se os dois argumentos forem True. O segundo argumento é False
b.False -> 2 operadores && sem parenteses, a sentença começará a ser lida da esquerda para a direta portanto temos True && False && True.
o argumento false do meio torna toda a sentença falsa 
c.True -> O opedaoror ! inverte o boleano da variável resultado, a seguigir, os parenteses indicam que os argumentos 2 e 3 devem ser comparados 
entre si, dentro dos parenteses temos o operador || que retorna false apenas se os dois argumentos forem falsos, portanto, temos
!false && (True || false) ---> True && True ---> True
d. boolean -> true e false são boleanos 

2 e 3 
VAMOS SUPOR QUE O MEU COLEGA TENHA DIGITADO 10 E DEPOIS 5
O que será impresso é 105, pois, por padrão, o método prompt captura uma string, o operador + entre strings irá apenas concatená-las
Para somar o valor das duas variáveis é preciso transforma-las de string para Number, Assim: 
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
        return `Você é mais velho que seu amigo ${suaIdade - idadeDoAmigo} ano/s.`
    } else if (idadeDoAmigo > suaIdade) {
        return `Seu amigo é mais velho que você ${idadeDoAmigo - suaIdade} ano/s`
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
console.log(`O primeiro número que você digitou é ${numero1} e o segundo é ${numero2}
O primeiro numero é maior que o segundo? ${numero1 > numero2}
O primeiro numero é igual ao segundo? ${numero1 === numero2}
O primeiro numero é divisível pelo segundo? ${(numero1 % numero2) === 0}
O segundo numero é divisível pelo primeiro? ${(numero2 % numero1) === 0}`)

//DESAFIO

//D1
//Função que converte °C em °F
let fahrenheit = celsius => celsius * 1.8 + 32 //Quando a função tem apenas um parametro, podemos descartar os parenteses no paramentro

//Função que converte °F em °C
let celsius = fahrenheit => (fahrenheit - 32) / 1.8 //Quando a função tem apenas uma linha, podemos descartar as chaves e o return

//Função que converte °C em °K
let kelvin = celsius => celsius + 273.15 //Quando a função tem apenas um parametro, podemos descartar os parenteses no paramentro

//Função que converte °k em °C
let celsiusK = kelvin => kelvin - 273.15 //Quando a função tem apenas uma linha, podemos descartar as chaves e o return

//D1.a 
console.log(`${kelvin(celsius(77))}°K`)//Aqui eu convertei 77°F em °C e depois para °K. Primeiro eu converti 77°K em °C usando a função celsius(77)
// depois e eu usei o retorno dessa função como paramentro para chamar função kelvin() para converter de °C para °K

//D1.b
console.log(`${fahrenheit(80)}°F`)//Aqui eu converti 80°C em 178°F diretamente

//D1.c
console.log(`${fahrenheit(30)}°F`)//Aqui eu converti 30°C em 86°F diretamente
console.log(`${kelvin(30)}°K`)//Aqui eu converti 30°C em 303.15°K diretamente
//D1.d
const celsiusUsuario = +prompt('Por favor digite um valor de tempetura em °C que você deseja converter para Kelvin °K')
console.log(`${fahrenheit(celsiusUsuario)}°F`)
console.log(`${kelvin(celsiusUsuario)}°K`)

//D2
const consumo = +prompt('Qual é o consumo de energia em quilowatt-hora da sua residencia?')
console.log(`Os ${consumo}kW/h de consumo de sua residencia custão R$${consumo * 0.05} reais`)
//D2.a
console.log(`Uma residencia que tem um consumo de 280kW/h paga R$${280 * 0.05} reais pela energia consumida.`)
console.log(`Com um desconto de 15%, essa mesma residencia que consome 280kW/h pagará R$${(280 * 0.05) * 0.85} reais de energia elétrica.`)

//D3.a
console.log(`20lb equivalem a ${20 / 2.2046}Kg.`)
//D3.b
console.log(`10.5oz equivalem a ${10.5 / 35.274}Kg.`)
//D3.c
console.log(`100mi equivalem a ${100 * 1609}m.`)
//D3.d
console.log(`50ft equivalem a ${50 / 3.281}m.`)
//D3.e
console.log(`103.56gal equivalem a ${103.56 * 3, 785}L.`)
//D3.f
console.log(`450 xic equivalem a ${(450 * 6) / 25}L.`)
//D.g
let xicara = +prompt('Digite o número de xicaras que você quer converter para Litros')
console.log(`${xicara} xicaras equivalem a ${(xicara * 6) / 25}L.`)
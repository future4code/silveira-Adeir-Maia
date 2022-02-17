/*EXERCÍCIO DE INTERPRETAÇÃO

1.a
10
50

1.b
A função funcionaria do mesmo jeito, entretanto nada apareceria no console, pois o comando de imprimir foi removido.

2.a
A função recebe como parametro o texto digitado pelo usuário, o passa para letras minusculas e depois verica se nele há a palavra 
cenoura e retorna true se existe ou false se não existir. Essa função é util para pesquisas em bancos de dados quando não se quer que
os resultados da pesquisa sejam sensíveis ao Caps Lock

2.b.i 
true

2.b.ii
true

2.b.iii
false

EXERCÍCIOS DE ESCRITA 

1.a */
let sobreMim = () => 'Eu sou Adeir, tenho 27 anos, sou de Minas Gerais eu sou aluno da Labenu.'
console.log(sobreMim())

//1.b
let pessoa = (nome, idade, cidade, endereço, numero, profissão) => `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, na ${endereço}, N° ${numero} e sou ${profissão}.`
console.log(pessoa('Adeir', 27, 'Santa Luzia', '21 de Abril, Esplanada', 84, 'Desenvolvedor Web'))

//2.a
let numero1 = +prompt('Por favor digite um numero:'), numero2 = +prompt('Por digite outro numero:'), soma = (n1, n2) => n1 + n2
console.log(`A soma de ${numero1} com ${numero2} é ${soma(numero1, numero2)}`)

//2.b
let maior = (n1, n2) => n1 > n2
console.log(`O primeiro número que você digitou é maior que o segundo? ${maior(numero1, numero2)}`)

//2.c
let numeropar = +prompt('Digite um número para sabermos se ele par ou não:'), par = (n) => n % 2 === 0
console.log(`O número que você digitou é par : ${par(numeropar)}`)

//2.d
let frase = prompt('Por favor digite uma frase:'), imprimir = (sting) => console.log(sting.length, sting.toUpperCase())
imprimir(frase)

//3
let multiplicação = (n1, n2) => n1 * n2, divisão = (n1, n2) => n1 / n2, diferença = (n1, n2) => n1 - n2
console.log(`Se lembra dos numero que você digitou mais cedo? Não? você digitou ${numero1} e ${numero2}
A soma entre eles é ${soma(numero1, numero2)}, mas isso eu já te mostrei ne
que tal a diferença entre eles: ${diferença(numero1, numero2)}
e a divisão ${divisão(numero1, numero2)}
talves a multiplicação? ${multiplicação(numero1, numero2)}`)

//DESAFIO
//1.a
let cosolelog = (parametro) => console.log(parametro), pitadoras = (cateto1, cateto2) => cateto1 ** 2 + cateto2 ** 2
cosolelog(prompt('O que você digitar aqui aparecerá no console do seu navegador, aperte F12 e vá na aba console para ver!'))

//1.b
cosolelog(soma(numero1, numero2))

//2
cosolelog(pitadoras(+prompt('Digite o valor do primeiro cateto:'), +prompt('digite o valor do segundo cateto:')))
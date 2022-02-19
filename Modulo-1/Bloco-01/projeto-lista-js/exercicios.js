// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = +prompt('Qual a altura do retangulo?'), lagura = +prompt('Qual a largura do retangulo?')
  console.log(altura * lagura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoatual = +prompt('Em que ano estamos?'), ano = +prompt('Em que ano voce nasceu?')
  console.log(anoatual - ano)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / altura ** 2
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt('Qual seu nome?'), idade = prompt('Qual sua idade?'), email = prompt('Qual é seu email?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = []
  cores[0] = prompt('Digite o nome de uma cor'), cores.push(prompt('Digite o nome de outra cor'))
  cores.splice(2, 0, prompt('Digite o nome de mais uma cor')), console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]
  // sixtaxe da ES6
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let ano = +prompt('Em quem ano estamos?'), nascimento = +prompt('Em que ano você nasceu?')
  let identidade = +prompt("Em que ano você tirou sua carteira de indentidade?")
  let idade = ano - nascimento, carteiraID = ano - identidade
  let jovem = idade <= 20 && carteiraID >= 5, adulto = idade > 20 && idade <= 30 && carteiraID >= 10
  let idoso = idade > 50 && carteiraID > 15

  console.log(jovem || adulto || idoso)

  //As condicionais usadas nos -ifs- podem ser guardadas em variáveis e usadas diretamente no console.log() numa condicional maior.
  /*if (idade <= 20 && carteiraID >= 5) {
    console.log(true)
  } else if ((idade > 20 && idade <= 30 && carteiraID >= 10)) {
    console.log(true)
  } else if ((idade > 50 && carteiraID > 15)) {
    console.log(true)
  } else {
    console.log(false)
  }*/
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let multiplo4n100 = ano => ano % 4 === 0 && ano % 100 !== 0
  //let nãoMultiplo100 = ano => ano % 100 !== 0
  let multiplo100e400 = ano => ano % 4 == 0 && ano % 100 === 0 && ano % 400 === 0
  /*if ((multiplo4(ano) && nãoMultiplo100(ano)) || (multiplo100e400(ano))) {
    return true
  } else {
    return false
  }*/
  return (multiplo100e400(ano) || multiplo4n100(ano))
  // As duas funções retornam boleanos que e podem ser chamadas diretamente no cosole.log() em uma condicional.
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt('Vocêm tem 18 anos?'), medio = prompt('Você tem ensino médio completo?')
  let disponibiliade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  /*if (idade.toLowerCase().includes('sim') && medio.toLowerCase().includes('sim') && disponibiliade.toLowerCase().includes('sim')) {
    console.log(true)
  } else {
    console.log(false)
  }*/
  console.log(idade.toLowerCase().includes('sim') && medio.toLowerCase().includes('sim') && disponibiliade.toLowerCase().includes('sim'))
  // As 3 variáveis são boleanos e podem ser chamadas diretamete no console.log() numa condicional.
}
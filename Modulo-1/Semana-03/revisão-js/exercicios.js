// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvetido = []
    for (let elemento of array) arrayInvetido.unshift(elemento)
    return arrayInvetido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    if (array.length < 2) {
        return array
    }
    //Se o array não tiver elemento ou tiver apenas 1, não há o que ordenar

    const maiorElemento = maior(array)
    //Precisarmos encotrar o maior elemento do array 

    const contador = new Array(maiorElemento + 1)
    //Um array com o tamanho do maior elemento +1 em que todos os valores são vazios

    array.forEach(elemento => {
        if (!contador[elemento]/*Se o valor do contador[elemento] não existir, ou seja vazio*/) {
            contador[elemento] = 0
        }
        contador[elemento]++ // contador [vazio,vazio,vazio,1,vazio,vazio,1,vazio...]
    });
    //Vamos contar quantas vezes um elemento aparece no array original ao mesmo tempo que ordenaremos os elementos a medida que forem aparecendo,
    //para isso, no nosso array de valores vazios(contador), vamos atribur valor nos indices dos elementos do array original, de modo que,
    //no contador, indice = elemento, valor = vezes que o elemento apareceu. Ao final, nosso array contador será uma ordenação do array original,
    //pois nós usamdos os elementos do array original como indice.

    let indiceOrdenado = 0
    contador.forEach((elemento, indice) => {
        while (elemento > 0) {
            array[indiceOrdenado++] = indice//reatribui ao array original no indice 0,depois incrementa a variável... indice 1, incrementa... dice 2, incr...
            elemento--
        }
    })
    //Vamos reatribuir o valores do array original. Atribuiremos como valor os indeces do array contador, pois indice de array é sempre ordenado.
    //Usaremos apenas os indices que tem valor atribuido e ignoraremos os que tem valores vazios.
    //Essa estrutura serve apenas para valores inteiros, pois não existe indice de array não inteiro.
    return array

    function maior(array) { // função que retorna o maior elemento do array
        let maximo = array[0]
        for (let elemento of array) {
            if (elemento > maximo) {
                maximo = elemento
            }
        }
        return maximo
    }

    //Disponivel no livro Estruturas de Dados e Algoritimos com JavaScript, 2° edição, cap 13, pag 348-350.
    //autora: Loiane Groner 
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
    for (let elemento of array) {
        if (elemento % 2 == 0) arrayPares.push(elemento)
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter(e => e % 2 == 0).map(e => e ** 2)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) maior = array[i]
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = num1, menorNumero = num2, maiorDivisivelPorMenor = true, diferenca = 0
    if (num2 > num1) maiorNumero = num2, menorNumero = num1
    if (maiorNumero % menorNumero !== 0) maiorDivisivelPorMenor = false
    diferenca = maiorNumero - menorNumero
    return { maiorNumero, maiorDivisivelPorMenor, diferenca }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = [], numero = 0
    do {
        if (numero % 2 == 0) {
            pares.push(numero)
        }
        numero++
    } while (!(pares.length == n))
    return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoB === ladoC)) {
        return 'Equilátero'
    }
    if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
        return 'Isósceles'
    }
    if ((ladoA !== ladoB) && (ladoB !== ladoC)) {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordenado = array.sort((a, b) => a - b)
    let segundoMaior = ordenado[ordenado.length - 2]
    let segundoMenor = ordenado[1]
    let retorno = [segundoMaior, segundoMenor]
    return retorno
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonimo = { ...pessoa }
    anonimo.nome = "ANÔNIMO"
    return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter(e => (e.idade > 14 && e.idade < 60) && e.altura >= 1.5)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(e => e.idade <= 14 || e.idade >= 60 || e.altura < 1.5)
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let cliente of contas) {
        if (cliente.compras.length !== 0) {
            let debito = cliente.compras.reduce((a, e) => a += e)
            cliente.saldoTotal = cliente.saldoTotal - debito
            cliente.compras = []
        }
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let ordenacao = consultas.sort((a, b) => {
        if (a.nome === b.nome) return 0
        return a.nome < b.nome ? -1 : 1
    })
    return ordenacao
    // A função sort()compara aos pares, nome a nome. e ordena os elementos o array consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let ordenacao = consultas.sort((a, b) => {
        let diaA = a.dataDaConsulta.slice(0, 2), mesA = a.dataDaConsulta.slice(3, 5), anoA = a.dataDaConsulta.slice(6, 10)
        let diaB = b.dataDaConsulta.slice(0, 2), mesB = b.dataDaConsulta.slice(3, 5), anoB = b.dataDaConsulta.slice(6, 10)
        return new Date(`${anoA}/${mesA}/${diaA}`) - new Date(`${anoB}/${mesB}/${diaB}`)
        //o objeto Date funciona como a data no formato Ano/Mes/Dia0
    })
    return ordenacao
}
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
    const maxValue = findMaxValue(array)
    const counts = new Array(maxValue + 1)
    array.forEach(element => {
        if (!counts[element]) {
            counts[element] = 0
        }
        counts[element]++
    });
    let sortedIndex = 0
    counts.forEach((countsElement, countsIndex) => {//countsElement é quantas vezes o elemento apararece
        while (countsElement > 0) {//countsindex é o valor do array original, eles estão ordenados nesse array
            array[sortedIndex++] = countsIndex
            countsElement--
        }
    })
    return array
    function findMaxValue(array) {
        let max = array[0]
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
        return max
    }
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
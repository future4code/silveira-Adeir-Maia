//2.a 
// A função recebe um array e retorna um objeto.
function obterEstatisticas(numeros:number[]):{} {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//2.b
/*
numerosOrdenados = array de números
soma, num, soma = number
estatísicas = objeto
maior,menor,media = number
*/

//2.c

type amostra = {
    numeros: number[],
    obterEstatísticas :Function
}

const amostradeNúmeros:amostra = {
    numeros:[21,14,72,33,41,25,7,30,22,58],
    obterEstatísticas:obterEstatisticas
}

console.log(amostradeNúmeros.obterEstatísticas(amostradeNúmeros.numeros))
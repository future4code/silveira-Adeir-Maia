var numero = window.document.querySelector('input#numero')
var ad = window.document.getElementById('ad')
var res = window.document.querySelector('p.res')
var array = []
var maior = 0
var menor = 100
var soma = 0
var media = 0


function naLista(n, l) {//A Função naLista revebeu o n=numero.value e l=array
    if (l.indexOf(n) != -1) {//Verifia se n já existe no array. Se NÃO existir seu indice será -1 e retornará "false"
        return true
    } else {
        return false
    }
}

function pui(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
function adicionar() {
    if (numero.value.length == 0) {
        alert('Digite um numero para adicionar')
    } else if (numero.value < 0 || numero.value > 100) {
        alert('O número deve estar entre 0 e 100!')
    } else if (naLista(numero.value, array)) {//Uma função na condicional. Se o retorno da função dor true executará "if" se o retorno for false executará "else"
        alert('O número já foi adicionado!')
    } else {
        array.push(numero.value)
        let item = document.createElement('option')
        item.text = `O número ${numero.value} foi adicionado!`
        ad.appendChild(item)

    }

    if (numero.value > maior) {
        maior = Number(numero.value)
    } if (numero.value < menor) {
        menor = Number(numero.value)
    }
    soma = Number(numero.value) + soma
    media = soma / array.length
    res.innerHTML = ` `

    numero.value = ''
    numero.focus()

}



function finalizar() {
    if (array.length == 0) {
        alert('Adicione um número!')
    } else {

        /*let maior2 = array[0]
        let menor2 = array[0]
        let soma2 = 0

        for (let indice in array) {
            soma2 += array[indice]
            if (array[indice] > maior2) {
                maior2 = array[indice]
            }
            if (array[indice] < menor2) {
                menor2 = array[indice]
            }
        }*/

        res.innerHTML += `Ao todo foram adcionados ${array.length} números<br>`
        res.innerHTML += `O maior número adicionado foi ${maior}<br>`
        res.innerHTML += `O menor número adicionado foi ${menor}<br>`
        res.innerHTML += `A soma do valores é ${soma}<br>`
        res.innerHTML += `A média do valores é ${media}<br>`
    }

}
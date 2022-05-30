//2.a
const operacao = process.argv[2]
const number1 = +process.argv[3]
const number2 = +process.argv[4]

if (process.argv[2] && process.argv[3] && process.argv[4]) {

    switch (operacao) {
        case 'soma':
            console.log(`Resultado: ${number1 + number2}`)
            break
        case 'sub':
            console.log(`Resultado: ${number1 - number2}`)
            break
        case 'multi':
            console.log(`Resultado: ${number1 * number2}`)
            break
        case 'div':
            console.log(`Resultado: ${number1 / number2}`)
            break
        default:
            console.log(`O que você quer fazer com esses números?`)
            break
    }

} else {
    console.log(`não recebi os 3 parametros`)
}
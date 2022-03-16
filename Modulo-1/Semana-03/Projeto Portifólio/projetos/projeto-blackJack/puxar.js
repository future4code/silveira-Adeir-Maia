// export default puxar

function puxar(/*maoDoJogador,*/cartasEmJogo) {

    const baralho = ['A♦️', 'A♥️', 'A♣️', 'A♠️', 'K♦️', 'K♥️', 'K♣️', 'K♠️', 'J♦️', 'J♥️', 'J♣️', 'J♠️', 'Q♦️', 'Q♥️', 'Q♣️', 'Q♠️', '2♦️', '2♥️', '2♣️', '2♠️',
        '3♦️', '3♥️', '3♣️', '3♠️', '4♦️', '4♥️', '4♣️', '4♠️', '5♦️', '5♥️', '5♣️', '5♠️', '6♦️', '6♥️', '6♣️', '6♠️', '7♦️', '7♥️', '7♣️', '7♠️', '8♦️', '8♥️', '8♣️', '8♠️',
        '9♦️', '9♥️', '9♣️', '9♠️', '10♦️', '10♥️', '10♣️', '10♠️']

    let cartaArray = baralho.splice(Math.floor(Math.random() * 51), 1), carta = cartaArray[0].slice(0, cartaArray[0].length), valor
    //let carta = 'A♦️', valor = 11
    if (carta.includes('K') || carta.includes('J') || carta.includes('Q')) valor = 10
    else if (carta.includes('A')) valor = 11
    else {
        if (carta.includes('10')) valor = 10
        else valor = +carta.slice(0, 1)
    }

    if (cartasEmJogo.map(e => e.carta).includes(carta)) ({ carta, valor } = puxar(cartasEmJogo))
    //Desestruturação de objeto retornado pela função recursiva -> carta = puxar(cartasEmJogo).carta, valor = puxar(cartasEmJogo).valor
    //if (cartasEmJogo !== undefined) if (cartasEmJogo.map(e => e.carta).includes(carta)) ({ carta, valor } = puxar(maoDoJogador, cartasEmJogo))

    return { carta, valor }
}
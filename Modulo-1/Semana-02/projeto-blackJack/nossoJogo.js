/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

import comprarCarta from "./naoMexer.js";

console.log('Boas vindas ao jogo de Blackjack!')

if (confirm('Vamos jogar?')) {
   console.log('Todos os jogadores compram 2 cartas')

   const maoJogador = [comprarCarta(), comprarCarta()]
   const maoComputador = [comprarCarta(), comprarCarta()]

   const pontosJ = maoJogador.reduce((a, e) => a += e.valor, 0)
   const pontosC = maoComputador.reduce((a, e) => a += e.valor, 0)
   //a === acumulador, e === elemento. Callbeck recebe acumlador com valor 0 e elemento, cada elemento.valor é adicionado ao acumulador que depois é retornado.

   console.log(`Mão do Jogador: ${maoJogador[0].texto} ${maoJogador[1].texto} - ${pontosJ}`)
   console.log(`Mão do Computador: ${maoComputador[0].texto} ${maoComputador[1].texto} - ${pontosC}`)

   if ((pontosJ > pontosC) && pontosJ < 22) console.log(`Parabens! Você venceu!`)
   else if ((pontosC > pontosJ) && pontosC < 22) console.log(`Que pena! Você perdeu!`)
   else if (pontosJ === pontosC || (pontosJ > 21 && pontosC > 21)) console.log(`Deu Empate!`)
}

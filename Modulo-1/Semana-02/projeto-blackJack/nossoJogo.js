import puxar from "./puxar.js";

console.log('Boas vindas ao jogo de Blackjack!')

if (confirm('Vamos jogar?')) {
   console.log('Todos os jogadores compram 2 cartas')

   let maoJogador = [], maoComputador = []
   maoJogador = [puxar(maoJogador), puxar(maoJogador)]
   maoComputador = [puxar(maoComputador), puxar(maoComputador)]

   const pontosJ = maoJogador.reduce((a, e) => a += e.valor, 0)
   const pontosC = maoComputador.reduce((a, e) => a += e.valor, 0)
   //a === acumulador, e === elemento. Callbeck recebe acumlador com valor 0 e elemento, cada elemento.valor é adicionado ao acumulador que depois é retornado.

   console.log(`Mão do Jogador: ${maoJogador[0].carta} ${maoJogador[1].carta} - ${pontosJ}`)
   console.log(`Mão do Computador: ${maoComputador[0].carta} ${maoComputador[1].carta} - ${pontosC}`)

   if ((pontosJ > pontosC) && pontosJ < 22) console.log(`Parabens! Você venceu!`)
   else if ((pontosC > pontosJ) && pontosC < 22) console.log(`Que pena! Você perdeu!`)
   else if (pontosJ === pontosC || (pontosJ > 21 && pontosC > 21)) console.log(`Deu Empate!`)
}


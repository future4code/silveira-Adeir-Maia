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

let jogar = true

while (jogar === true) {
   let vitoria = 0, derrota = 0, empate = 0

   while (jogar === true && confirm(`Boas vindas ao jogo de Blackjack!
Vamos jogar?`)) {
      alert('Todos os jogadores compram 2 cartas')

      let maoJogador = []
      do {
         maoJogador = [comprarCarta(), comprarCarta()]
      } while (maoJogador[0].texto.includes('A') && maoJogador[1].texto.includes('A'))
      //Enquanto os naipes das duas cartas forem "A" o jogador devolve-as para o baralho e compra 2 novas cartas 

      let maoComputador = []
      do {
         maoComputador = [comprarCarta(), comprarCarta()]
      } while (maoJogador[0].texto.includes('A') && maoJogador[1].texto.includes('A'))
      //Enquanto os naipes das duas cartas forem "A" o computador devolve-as para o baralho e compra 2 novas cartas 

      const pontosJ = () => maoJogador.reduce((a, e) => a += e.valor, 0)
      const pontosC = () => maoComputador.reduce((a, e) => a += e.valor, 0)
      //a === acumulador, e === elemento. Callbeck recebe acumlador com valor 0 e o elemento, cada elemento.valor é adicionado ao acumulador que depois é retornado.

      const cartasJ = () => maoJogador.map(e => e.texto)
      const cartasC = () => maoComputador.map(e => e.texto)
      // Retorna um array em que cada elemento é o texto de cada carta 


      while (confirm(`Suas cartas são ${cartasJ()} e o computador mostrou a carta ${cartasC()[0]}
Quer comprar outra carta?`) && pontosJ() < 21) {
         maoJogador.push(comprarCarta())
      }
      //Equanto o jogador clicar em ok e sua pontuação for menor do que 21, ele pode comprar cartas

      while (((pontosC() < pontosJ()) && pontosJ() < 22)) {
         maoComputador.push(comprarCarta())
      }
      //Equanto a pontuação do computador for menor que a do usuário e a pontuação deste não tiver estourado, o computador pode comprar cartas

      const pontosFinalJ = pontosJ()
      const pontosFinalC = pontosC()

      const placar = () => {
         return (`
Suas cartas ${cartasJ()} - ${pontosFinalJ}
Cartas do computador ${cartasC()} - ${pontosFinalC}
Vitorias ${vitoria}  - Derrotas ${derrota} - Empates ${empate}`)
      }
      // retorna o placas final do jogo 
      if (((pontosFinalJ > pontosFinalC) && pontosFinalJ < 22) || (pontosFinalC > 21 && pontosFinalJ < 22)) {
         vitoria++
         alert('Parabens! Você venceu! ' + String.fromCodePoint(0x1F604) + placar())
      }
      //Se a pontuação do jogador for maior que a do computador e ambas forem menores que 22 OU a pontuaçõ do computador estourar, o jogador vence!
      else if (((pontosFinalC > pontosFinalJ) && pontosFinalC < 22) || (pontosFinalJ > 21 && pontosFinalC < 22)) {
         derrota++
         alert('Que pena! Você perdeu! ' + String.fromCodePoint(0x1F625) + placar())
      }
      //Se a pontuação do computador for maior que a do jogador e ambas forem menores que 22 OU a pontuação do jogador estourar, o computador vence!
      else if ((pontosFinalJ === pontosFinalC) || (pontosFinalJ > 21 && pontosFinalC > 21)) {
         empate++
         alert('Deu Empate! ' + String.fromCodePoint(0x1F610) + placar())
      }
      //Se a pontução de ambos forem iguais OU ambas estourarem, da empate.
      else alert(`Algo deu errado na sua lójica !${placar()}`)
      // Um espaço que usei para capturar os casos em que minha lójica tinha buracos.

      jogar = confirm('Quer jogar mais uma?')
   }

   jogar = false
} 

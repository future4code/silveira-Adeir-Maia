// import puxar from "./puxar.js";

let jogar = true

while (jogar === true) {
   let vitoria = 0, derrota = 0, empate = 0

   while (jogar === true && confirm(`Boas vindas ao jogo de Blackjack!
Vamos jogar?`)) {
      alert('Todos os jogadores compram 2 cartas')

      let maoJogador = []
      do {
         maoJogador = [puxar(maoJogador)], maoJogador.push(puxar(maoJogador))
      } while (maoJogador[0].carta.includes('A') && maoJogador[1].carta.includes('A'))
      //Enquanto os naipes das duas cartas forem "A" o jogador devolve-as para o baralho e compra 2 novas cartas 

      let cartasEmJogo = [...maoJogador]
      let maoComputador = []
      do {
         maoComputador = [puxar(cartasEmJogo)], maoComputador.push(puxar(cartasEmJogo.concat(maoComputador)))
      } while (maoComputador[0].carta.includes('A') && maoComputador[1].carta.includes('A'))
      //Enquanto os naipes das duas cartas forem "A" o computador devolve-as para o baralho e compra 2 novas cartas 

      cartasEmJogo = cartasEmJogo.concat(maoComputador)

      const pontosJ = () => maoJogador.reduce((a, e) => a += e.valor, 0)
      const pontosC = () => maoComputador.reduce((a, e) => a += e.valor, 0)
      //a === acumulador, e === elemento. Callbeck recebe acumlador com valor 0 e o elemento, cada elemento.valor é adicionado ao acumulador que depois é retornado.

      const cartasJ = () => maoJogador.map(e => e.carta)
      const cartasC = () => maoComputador.map(e => e.carta)
      // Retorna um array em que cada elemento é o texto de cada carta 


      while (pontosJ() < 21 && confirm(`Suas cartas são ${cartasJ()} e o computador mostrou a carta ${cartasC()[0]}
Quer comprar outra carta?`)) {
         let indexCartaComprada = maoJogador.length
         maoJogador.push(puxar(/*maoJogador,*/cartasEmJogo))
         cartasEmJogo.push(maoJogador[indexCartaComprada])
      }
      //Equanto o jogador clicar em ok e sua pontuação for menor do que 21, ele pode comprar cartas

      //cartasEmJogo = maoJogador.concat(maoComputador)

      while (((pontosC() < pontosJ()) && pontosJ() < 22)) {
         let indexCartaComprada = maoComputador.length
         maoComputador.push(puxar(/*maoComputador,*/cartasEmJogo))
         cartasEmJogo.push(maoComputador[indexCartaComprada])
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
      if (((pontosFinalJ > pontosFinalC) && pontosFinalJ < 22) || (pontosFinalC > 21 && pontosFinalJ < 22)) vitoria++, alert('Parabens! Você venceu! ' + String.fromCodePoint(0x1F604) + placar())
      //Se a pontuação do jogador for maior que a do computador e ambas forem menores que 22 OU a pontuaçõ do computador estourar, o jogador vence!

      else if (((pontosFinalC > pontosFinalJ) && pontosFinalC < 22) || (pontosFinalJ > 21 && pontosFinalC < 22)) derrota++, alert('Que pena! Você perdeu! ' + String.fromCodePoint(0x1F625) + placar())
      //Se a pontuação do computador for maior que a do jogador e ambas forem menores que 22 OU a pontuação do jogador estourar, o computador vence!

      else if ((pontosFinalJ === pontosFinalC) || (pontosFinalJ > 21 && pontosFinalC > 21)) empate++, alert('Deu Empate! ' + String.fromCodePoint(0x1F610) + placar())
      //Se a pontução de ambos forem iguais OU ambas estourarem, da empate.

      else alert(`Algo deu errado na sua lójica !${placar()}`)
      // Um espaço que usei para capturar os casos em que minha lójica tinha buracos.

      jogar = confirm('Quer jogar mais uma?')
   }

   jogar = false
} 

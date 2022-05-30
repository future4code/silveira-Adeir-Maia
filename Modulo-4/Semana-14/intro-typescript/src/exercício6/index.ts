function operacoes(numero1: number, numero2: number): void {
    console.log(`A soma de ${numero1} e ${numero2} é ${numero1 + numero2}`)
    console.log(`A soma de ${numero1} e ${numero2} é ${numero1 - numero2}`)
    console.log(`A soma de ${numero1} e ${numero2} é ${numero1 * numero2}`)
    console.log(`O maior número entre ${numero1} e ${numero2} é ${numero1 > numero2 ? numero1 : numero2}`)
}

operacoes(25, 20)

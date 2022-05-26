enum cristo {
    AC = 'AC',
    DC = 'DC'
}

const PeriodoHistorico = (ano:number,cristo:cristo):string => {
    if(cristo === 'AC') {
        if( ano > 4000 ){
            return 'Pre-Historia '
        } else {
            return 'Idade Antiga'
        }
    } else {
        if(ano < 476) {
            return 'Idade Antiga'
        } else if (ano >= 476 && ano < 1453) {
            return 'Idade Média'
        } else if (ano>= 1453 && ano < 1789){
            return 'Idade Moderna'
        } else {
            return 'Idade Contemporânia'
        }
    }
}

console.log(PeriodoHistorico(20000,cristo.AC))
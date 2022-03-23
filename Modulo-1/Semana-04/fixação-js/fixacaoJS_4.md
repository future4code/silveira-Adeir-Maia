```let ocorrencias = arrayDeNumeros.reduce((a, e) => {
        if (e === numeroEscolhido) a++
        return a
    }, 0)
    if (ocorrencias === 0) {
        return `Número não encontrado`
    }
    return `O número ${numeroEscolhido} aparece ${ocorrencias}x`
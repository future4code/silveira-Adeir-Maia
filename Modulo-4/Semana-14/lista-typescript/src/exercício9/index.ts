const anagramas = (string:string):number => {
    const length = string.length
    let anagramas = 1
    for(let a  = length; a > 0 ; a--) {
        anagramas = anagramas * a
    }
    return anagramas
}
// A palavra não pode ter letras repetidas
console.log(anagramas(process.argv[2]))
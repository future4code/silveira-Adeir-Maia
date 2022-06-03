type filme = {
    Nome:string,
    Lançamento:string,
    Gênero:string,
    Metacritic?:number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror",
    FANTASIA='fantasia'
}

const catalogar = (nome:string,lançamento:string,gênero:string,pontuação?:number):filme => {
    return {Nome:nome,Lançamento:lançamento,Gênero:gênero,Metacritic:pontuação}
}

console.log(catalogar( 'Animais Fantásticos: Os Segredos de Dumbledore','14 de abril de 2022',GENERO.FANTASIA))
console.log(catalogar( 'O Homem do Norte','22 de abril de 2022',GENERO.ACAO,82))

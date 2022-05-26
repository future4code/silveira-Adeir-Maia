type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
console.log(pokemon1)

//4.b
//R: Mudararia a configuração "rootDir": no arquivo tsconfig.json para "./", e rodaria o comando tsc && node exercício4.js
//4:c
//R: Mudararia a configuração "rootDir": no arquivo tsconfig.json para "./src", e rodaria o comando tsc && node exercício4.js
//4:d 
//R: o comando tsc sem parâmetros converte todos os arquivos com a extensão .ts que encontrar.

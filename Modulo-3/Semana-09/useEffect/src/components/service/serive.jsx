import axios from "axios";

const getAllPokemons = (setPokeList) => {
    axios
        .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(response => {
            setPokeList(response.data.results);
        })
        .catch(err => {
            console.log(err);
        });
};

const getPokemonByName = (pokeName, setPokemon) => {
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
            setPokemon(response.data);
        })
        .catch(err => {
            console.log(err);
        });
};

export { getAllPokemons, getPokemonByName }


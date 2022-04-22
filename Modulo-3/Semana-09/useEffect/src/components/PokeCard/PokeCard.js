import React, { useEffect, useState } from "react";
import { getPokemonByName } from "../service/serive";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => getPokemonByName(props.pokemon, setPokemon), [pokemon, props.pokemon])

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  )
}
export default PokeCard
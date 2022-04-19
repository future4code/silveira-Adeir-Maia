import React, { useEffect, useState } from "react";
import "./styles.css";
import PokeCard from "./components/PokeCard/PokeCard";
import { getAllPokemons } from "./components/service/serive";

const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  useEffect(() => getAllPokemons(setPokeList), [])

  const changePokeName = event => setPokeName(event.target.value);

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
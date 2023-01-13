import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function PokemonDetails () {

    const [pokemon, setPokemon] = useState(null)
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
          .then((res) => res.json())
          .then((data) => {
            setPokemon(data);
            
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      if (!pokemon) {
        return <>loading...</>;
      }
    console.log(pokemon)
      return (
        <div>
            <p>height: {pokemon.height}</p>
            <p>weight: {pokemon.weight}</p>
            Abilities:
          <ul>
            {pokemon?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
          Type(s):
          <ul>
            {pokemon?.types.map((type) => (
              <li key={type.type.name}>
                <span key={type.type.name}>{type.type.name}</span>
              </li>
            ))}
          </ul>
          Stats:
          <ul>
            {pokemon?.stats.map((stat) => (
              <li key={stat.stat.name}>
                <span key={stat.stat.name}>{stat.stat.name}</span>
              </li>
            ))}
          </ul>
            <p>height: {pokemon.height}</p>
        </div>
      )
}

export { PokemonDetails }
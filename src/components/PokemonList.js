import { PokemonCard } from "./PokemonCard";
import './PokemonList.css'
export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((item) => (
        <PokemonCard key={item.name} pokemon={item} />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''), // Creara un arreglo de 10 posiciones con el valor ''
}
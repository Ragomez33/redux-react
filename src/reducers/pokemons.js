import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "../actions/types"

const initialSate = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_FAVORITE:
      const newPokemonList = [...state.pokemons];
      const currentPokemon = newPokemonList.findIndex((pokemon) => pokemon.id === action.payload.pokemonId);
      if (currentPokemon > 0) {
        return state;
      }
      newPokemonList[currentPokemon] = {
        ...newPokemonList[currentPokemon],
        favorite: !newPokemonList[currentPokemon]?.favorite
      };
      return { ...state, pokemons: newPokemonList }
    default:
      return state;
  }
}
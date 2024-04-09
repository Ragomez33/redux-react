import { SET_POKEMONS } from "./types";
import { getPokemonDetails } from '../api';

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

// Action creator en redux thunk
export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
        pokemons.map(async pokemon => await getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed))
} 
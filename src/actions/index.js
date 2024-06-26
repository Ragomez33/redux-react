import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "./types";
import { getPokemonDetails } from '../api';

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})
// Action creator en redux thunk
export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
        pokemons?.map(async pokemon => await getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed))
} 

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
})

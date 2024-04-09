import { SET_LOADING, SET_POKEMONS } from "../actions/types"

const initialSate = {
  pokemons: [],
  loading: false
}

export const pokemonsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}
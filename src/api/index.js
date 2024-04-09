import axios from 'axios';

export const getPokemons = async () => {
  let res;
  try {
    res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
  } catch (error) {
    console.error(error);
    throw error.message
  }
  return res.data.results;
}


export const getPokemonDetails = async (pokemon) => {
  let res;
  try {
    res = await axios.get(pokemon.url)
  } catch (error) {
    console.error(error);
    throw error.message
  }
  return res.data;
}
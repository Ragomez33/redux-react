import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { Col, Spin } from "antd";
import { Searcher } from './components/Searcher';
import { PokemonList } from './components/PokemonList';
import { getPokemons, getPokemonDetails } from './api';
import Logo from './statics/logo.svg';
import './App.css';
import { setPokemons, setLoading } from './actions';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemons();

      const pokemonWithDetails = await Promise.all(pokemonsRes?.map((pokemon) => getPokemonDetails(pokemon)))

      dispatch(setPokemons(pokemonWithDetails));
      dispatch(setLoading(false));
    };

    fetchPokemons();
  }, [dispatch]);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={Logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col style={{
          marginTop: '3rem'
        }}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}

    </div>
  );
}

// // es una función recibe nuestro estado y retorna un objeto cuyas propiedades 
// // van a ser enviadas a las props del componente que se está conectado a redux.
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

// // es una función que recibe el dispatcher de redux y retorna un objeto que será
// // mapeo a las propiedades con los action creatrors
// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsAction(value))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

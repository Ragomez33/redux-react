import { Card } from 'antd';
import { Meta } from 'antd/es/list/Item';
import { StarButton } from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

const stringUppercase = (string) => {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1);
}
export const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const description = pokemon?.types.map((item) => stringUppercase(item.type.name)).join(', ');
  const abilities = pokemon?.abilities.map((item) => stringUppercase(item.ability.name)).join(', ');

  const onClickFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
  }
  return (
    <Card
      title={stringUppercase(pokemon.name)}
      cover={<img src={pokemon.sprites.front_default} alt="Ditto" />}
      extra={
        <StarButton isFavorite={pokemon.favorite} onClick={onClickFavorite} />
      }
    >
      <Meta
        title='Abilities'
        description={abilities}
      />
      <Meta
        title='Type'
        description={description}
      />
    </Card>
  )
};
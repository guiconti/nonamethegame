import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Row from '../shared/Row';
import ItemContainer from '../../containers/game/ItemContainer';
import './styles/gameInventory.scss';

const GameInventory = ({ inventory, categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className='inventory'>
      <Row justifyContent='space-between'>
        {categories.map(category => (
          <a
            key={category}
            className={clsx('inventory__category', {
              'inventory__category--active': category === selectedCategory,
            })}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </a>
        ))}
      </Row>
      <Row className='inventory__items'>
        {inventory &&
          Object.keys(inventory[selectedCategory.toLowerCase()]).map(itemId => (
            <ItemContainer
              key='itemId'
              itemId={itemId}
              amount={inventory[selectedCategory.toLowerCase()][itemId].amount}
            />
          ))}
      </Row>
    </div>
  );
};

GameInventory.propTypes = {
  inventory: PropTypes.object,
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string,
  onSelectCategory: PropTypes.func,
};

export default GameInventory;

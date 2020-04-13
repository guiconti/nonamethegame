import React from 'react';
import PropTypes from 'prop-types';
import './styles/item.scss';

const Item = ({ name, amount, ...rest }) => {
  return (
    <div className='game-item' { ...rest }>
      <div className='game-item__content'>
        {amount}x {name.substring(0, 1)}
        <span className='game-item__tooltip'>{name}</span>
      </div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
};

export default Item;

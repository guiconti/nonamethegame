import React from 'react';
import PropTypes from 'prop-types';
import './styles/item.scss';

const Item = ({ name, amount }) => {
  return (
    <div className='game-item'>
      <div className='game-item__content'>{amount}x {name}</div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
};

export default Item;

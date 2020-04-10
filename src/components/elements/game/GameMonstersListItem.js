import React from 'react';
import PropTypes from 'prop-types';
import './styles/gameMonstersListItem.scss';

const GameMonstersListItem = ({ monster }) => {
  return (
    <div className='monster-list-item'>{ monster.name }</div>
  );
};

GameMonstersListItem.propTypes = {
  monster: PropTypes.object,
};

export default GameMonstersListItem;

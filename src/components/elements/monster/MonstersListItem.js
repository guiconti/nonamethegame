import React from 'react';
import PropTypes from 'prop-types';
import Column from '../shared/Column';
import Item from '../shared/Item';
import HealthBar from './HealthBar';
import './styles/monstersListItem.scss';

const MonstersListItem = ({ monster }) => {
  return (
    <Column className='monster-list-item'>
      <Item> {monster.name} </Item>
      <Item>
        <HealthBar
          className='monster-list-item__health-bar'
          health={monster.health}
          currentHealth={monster.currentHealth}
        />
      </Item>
    </Column>
  );
};

MonstersListItem.propTypes = {
  monster: PropTypes.object,
};

export default MonstersListItem;

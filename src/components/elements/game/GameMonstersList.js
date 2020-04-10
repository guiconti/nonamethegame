import React from 'react';
import PropTypes from 'prop-types';
import Column from '../shared/Column';
import Item from '../shared/Item';
import GameMonstersListItem from './GameMonstersListItem';
import './styles/gameMonstersList.scss';

const GameMonstersList = ({ monsters }) => {
  return (
    <div className='monsters-list'>
      <Column className="monsters-list__column">
        <Item>
          <div className='monsters-list__title'>Monsters</div>
        </Item>
        <Item className="monsters-list__flex-item">
          <Column className='monsters-list__column monsters-list__monsters'>
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
            <GameMonstersListItem />
          </Column>
        </Item>
      </Column>
    </div>
  );
};

GameMonstersList.propTypes = {
  monsters: PropTypes.array,
};

export default GameMonstersList;

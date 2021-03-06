import React from 'react';
import Container from '../elements/shared/Container';
import Row from '../elements/shared/Row';
import Column from '../elements/shared/Column';
import Item from '../elements/shared/Item';
import GameContainer from '../containers/game/GameContainer';
import GameSummaryInfoContainer from '../containers/game/GameSummaryInfoContainer';
import AddPointsContainer from '../containers/game/AddPointsContainer';
import GameMapContainer from '../containers/game/GameMapContainer';
import GameMonstersList from '../containers/game/GameMonstersListContainer';
import GameInventoryContainer from '../containers/game/GameInventoryContainer';
import BattleLogContainer from '../containers/game/BattleLogContainer';
import GameEquipmentContainer from '../containers/game/GameEquipmentContainer';
import './styles/game.scss';

const Game = () => {
  return (
    <Container>
      <GameContainer />
      <Row>
        <Item xs={12} sm={6}>
          <Row alignItems="center">
            <Item xs={8}>
              <GameSummaryInfoContainer />
            </Item>
            <Item xs={2}>
              <AddPointsContainer />
            </Item>
          </Row>
        </Item>
        <Item xs={12} sm={6}>
          <GameInventoryContainer />
        </Item>
        <Item xs={12}>
          <Row justifyContent='flex-start' alignItems='flex-start'>
            <Item className='game__battle-log'>
              <BattleLogContainer />
            </Item>
            <Item>
              <Column justifyContent='flex-start' alignItems='flex-end'>
                <Item className='game__map-container'>
                  <GameMapContainer />
                </Item>
                <Item>
                  <GameMonstersList />
                </Item>
              </Column>
            </Item>
            <Item>
              <GameEquipmentContainer />
            </Item>
          </Row>
        </Item>
      </Row>
    </Container>
  );
};

export default Game;

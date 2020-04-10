import React from 'react';
import Container from '../elements/shared/Container';
import Row from '../elements/shared/Row';
import Column from '../elements/shared/Column';
import Item from '../elements/shared/Item';
import GameContainer from '../containers/game/GameContainer';
import GameSummaryInfoContainer from '../containers/game/GameSummaryInfoContainer';
import GameMapContainer from '../containers/game/GameMapContainer';
import GameMonstersList from '../containers/game/GameMonstersListContainer';
import './styles/game.scss';

const Game = () => {
  return (
    <Container>
      <GameContainer />
      <Row>
        <Item xs={12}>
          <GameSummaryInfoContainer />
        </Item>
        <Item xs={12}>
          <Column justifyContent="flex-start" alignItems="flex-end">
            <Item>
              <GameMapContainer />
            </Item>
            <Item>
              <GameMonstersList />
            </Item>
          </Column>
        </Item>
      </Row>
    </Container>
  );
};

export default Game;

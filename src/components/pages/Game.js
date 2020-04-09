import React from 'react';
import GameSummaryInfoContainer from '../containers/game/GameSummaryInfoContainer';
import GameMapContainer from '../containers/game/GameMapContainer';
import GameContainer from '../containers/game/GameContainer';
import Container from '../elements/shared/Container';
import { Grid } from '@material-ui/core';
import './styles/game.scss';

const Game = () => {
  return (
    <Container>
      <GameSummaryInfoContainer />
      <Grid item xs={12} align="end" className="game__map">
        <GameMapContainer />
      </Grid>
      <GameContainer />
    </Container>
  );
};

export default Game;

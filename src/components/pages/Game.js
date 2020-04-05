import React from 'react';
import GameSummaryInfoContainer from '../containers/game/GameSummaryInfoContainer';
import GameMapContainer from '../containers/game/GameMapContainer';
import { Grid } from '@material-ui/core';
import './styles/game.scss';

const Game = () => {
  return (
    <Grid container justify="center">
      <GameSummaryInfoContainer />
      <Grid xs={12} align="end" className="game__map">
        <GameMapContainer />
      </Grid>
    </Grid>
  );
};

export default Game;

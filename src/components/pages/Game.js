import React from 'react';
import GameSummaryInfoContainer from '../containers/game/GameSummaryInfoContainer';
import GameMapContainer from '../containers/game/GameMapContainer';

const Game = () => {
  return (
    <div>
      <GameSummaryInfoContainer />
      <GameMapContainer />
    </div>
  );
};

export default Game;

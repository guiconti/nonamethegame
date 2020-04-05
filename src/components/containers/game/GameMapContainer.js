import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameMap } from '../../../actions/gameActions';
import { getGameMap } from '../../../reducers/selectors';
import GameMap from '../../elements/game/GameMap';
import { SIZE, TILE_COLORS } from '../../../constants/map';

const GameMapContainer = () => {
  const dispatch = useDispatch();
  const [isMapDraw, setIsMapDraw] = useState(false);
  const gameMap = useSelector(getGameMap);
  
  const setup = (p5, parentRef) => {
    p5.createCanvas(SIZE, SIZE).parent(parentRef);
    p5.frameRate(1);
    p5.noStroke();
  };

  const draw = p5 => {
    if (!isMapDraw && gameMap.length > 0) {
      let sizeOfSquare = p5.width / gameMap.length;
      p5.scale();
      p5.background(0);
      p5.noStroke();
      for (let i = 0; i < gameMap.length; i++) {
        for (let j = 0; j < gameMap[i].length; j++) {
          p5.fill(TILE_COLORS[gameMap[i][j]]);
          p5.square(j * sizeOfSquare, i * sizeOfSquare, sizeOfSquare);
        }
      }
      setIsMapDraw(true);
    }
  };

  useEffect(() => {
    dispatch(fetchGameMap());
  }, []);

  return (
    <GameMap gameMap={gameMap} setup={setup} draw={draw} />
  );
};

export default GameMapContainer;

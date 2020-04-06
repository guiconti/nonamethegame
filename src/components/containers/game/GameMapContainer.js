import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameMap, startDrawingMap, stopDrawingMap } from '../../../actions/gameActions';
import { getGameMap, getAdventurerPosition, getDrawMap } from '../../../reducers/selectors';
import GameMap from '../../elements/game/GameMap';
import { SIZE, TILE_COLORS, ADVENTURER_TILE_NAME } from '../../../constants/map';

const GameMapContainer = () => {
  const dispatch = useDispatch();
  const gameMap = useSelector(getGameMap);
  const drawMap = useSelector(getDrawMap);
  const adventurerPosition = useSelector(getAdventurerPosition);

  const setup = (p5, parentRef) => {
    p5.createCanvas(SIZE, SIZE).parent(parentRef);
    p5.frameRate(5);
    p5.noStroke();
  };

  const draw = (p5) => {
    if (drawMap && gameMap.length > 0) {
      let sizeOfSquare = p5.width / gameMap.length;
      p5.background(0);
      p5.noStroke();
      for (let i = 0; i < gameMap.length; i++) {
        for (let j = 0; j < gameMap[i].length; j++) {
          if (adventurerPosition.x === j && adventurerPosition.y === i) {
            p5.fill(TILE_COLORS[ADVENTURER_TILE_NAME]);
          } else {
            p5.fill(TILE_COLORS[gameMap[i][j]]);
          }
          p5.square(j * sizeOfSquare, i * sizeOfSquare, sizeOfSquare);
        }
      }
      dispatch(stopDrawingMap());
    }
  };

  useEffect(() => {
    dispatch(fetchGameMap());
    dispatch(startDrawingMap());
  }, []);

  return <GameMap gameMap={gameMap} setup={setup} draw={draw} />;
};

export default GameMapContainer;

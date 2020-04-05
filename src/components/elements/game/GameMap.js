import React from 'react';
import PropTypes from 'prop-types';
import Sketch from 'react-p5';

const GameMap = ({ setup, draw }) => {
  return (
    <Sketch
      setup={setup}
      draw={draw}
    />
  );
}

GameMap.propTypes = {
  setup: PropTypes.func.isRequired,
  draw: PropTypes.func.isRequired,
};

export default GameMap;
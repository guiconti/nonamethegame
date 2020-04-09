import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../shared/ProgressBar';
import './styles/manaBar.scss';

const ManaBar = ({ mana, currentMana }) => {
  return (
    <ProgressBar className="mana-bar" totalAmount={mana} currentAmount={currentMana} />
  );
};

ManaBar.propTypes = {
  mana: PropTypes.number,
  currentMana: PropTypes.number,
};

export default ManaBar;

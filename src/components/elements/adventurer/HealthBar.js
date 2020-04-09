import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../shared/ProgressBar';
import './styles/healthBar.scss';

const HealthBar = ({ health, currentHealth }) => {
  return (
    <ProgressBar className="health-bar" totalAmount={health} currentAmount={currentHealth} />
  );
};

HealthBar.propTypes = {
  health: PropTypes.number,
  currentHealth: PropTypes.number,
};

export default HealthBar;

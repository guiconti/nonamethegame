import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ProgressBar from '../shared/ProgressBar';
import './styles/healthBar.scss';

const HealthBar = ({ className, health, currentHealth }) => {
  return (
    <ProgressBar
      className={clsx('health-bar', className)}
      totalAmount={health}
      currentAmount={currentHealth}
    />
  );
};

HealthBar.propTypes = {
  className: PropTypes.string,
  health: PropTypes.number,
  currentHealth: PropTypes.number,
};

export default HealthBar;

import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../shared/ProgressBar';
import './styles/expBar.scss';

const ExpBar = ({ experienceToNextLevel, experience }) => {
  return (
    <ProgressBar className="exp-bar" totalAmount={experienceToNextLevel} currentAmount={experience} />
  );
};

ExpBar.propTypes = {
  experienceToNextLevel: PropTypes.number,
  experience: PropTypes.number,
};

export default ExpBar;

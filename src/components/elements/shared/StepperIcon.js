import React from 'react';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';
import clsx from 'clsx';
import './styles/stepperIcon.scss';

function StepperIcon({ active, completed }) {
  return (
    <div className={clsx('stepper-icon', { 'stepper-icon--active': active })}>
      {completed ? (
        <Check className="stepper-icon--completed" />
      ) : (
        <div className="stepper-icon__circle" />
      )}
    </div>
  );
}

StepperIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

export default StepperIcon;

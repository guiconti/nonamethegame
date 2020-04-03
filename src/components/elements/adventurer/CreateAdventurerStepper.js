import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, StepConnector } from '@material-ui/core';
import StepperIcon from '../shared/StepperIcon';
import './styles/createAdventurerStepper.scss';

const StepperConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  active: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  completed: {
    '& $line': {
      borderColor: '#784af4'
    }
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);

const CreateAdventurerStepper = ({ activeStep, steps }) => {
  return (
    <Stepper alternativeLabel activeStep={activeStep} connector={<StepperConnector />}>
      {steps && steps.map(label => (
        <Step key={label}>
          <StepLabel StepIconComponent={StepperIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

CreateAdventurerStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export default CreateAdventurerStepper;

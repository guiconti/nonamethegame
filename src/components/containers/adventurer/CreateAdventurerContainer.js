import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import CreateAdventurerStepper from '../../elements/adventurer/CreateAdventurerStepper';
import CreateAdventurerBiography from '../../elements/adventurer/CreateAdventurerBiography';
import CreateAdventurerAttributes from '../../elements/adventurer/CreateAdventurerAttributes';
import CreateAdventurerTraits from '../../elements/adventurer/CreateAdventurerTraits';
import CreateAdventurerActions from '../../elements/adventurer/CreateAdventurerActions';
import { exitAdventurerCreation } from '../../../actions/adventurerActions';
import {
  CREATION_STEPS,
  NEW_ADVENTURER_ATTRIBUTES,
  STARTING_POINTS,
  CLASSES,
  GENDERS,
  RACES
} from '../../../constants/adventurer';

const CreateAdventurerContainer = () => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedGender, setSelectedGener] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const [pointsLeft, setPointsLeft] = useState(STARTING_POINTS);
  const [attributes, setAttributes] = useState(NEW_ADVENTURER_ATTRIBUTES);

  const handleNext = () => {
    setActiveStep(previousActiveStep => previousActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      dispatch(exitAdventurerCreation());
    } else {
      setActiveStep(previousActiveStep => previousActiveStep - 1);
    }
  };

  const reduceAttribute = attribute => {
    if (attributes[attribute] > 1) {
      setAttributes(previousAttributes => {
        previousAttributes[attribute]--;
        return previousAttributes;
      });
      setPointsLeft(previousPointsLeft => previousPointsLeft + 1);
    }
  };

  const increaseAttribute = attribute => {
    if (pointsLeft > 0) {
      setAttributes(previousAttributes => {
        previousAttributes[attribute]++;
        return previousAttributes;
      });
      setPointsLeft(previousPointsLeft => previousPointsLeft - 1);
    }
  };

  const stepsComponents = [
    <CreateAdventurerBiography
      key={0}
      name={name}
      onChangeName={setName}
      classes={CLASSES}
      selectedClass={selectedClass}
      onSelectClass={setSelectedClass}
      genders={GENDERS}
      selectedGender={selectedGender}
      onSelectGender={setSelectedGener}
      races={RACES}
      selectedRace={selectedRace}
      onSelectRace={setSelectedRace}
    />,
    <CreateAdventurerAttributes
      key={1}
      pointsLeft={pointsLeft}
      attributes={attributes}
      reduceAttribute={reduceAttribute}
      increaseAttribute={increaseAttribute}
    />,
    <CreateAdventurerTraits key={2} />
  ];

  return (
    <>
      <CreateAdventurerStepper activeStep={activeStep} steps={CREATION_STEPS} />
      <Grid container justify="center" spacing={4}>
        {stepsComponents[activeStep]}
        <CreateAdventurerActions
          handleNext={handleNext}
          handleBack={handleBack}
          isLastStep={activeStep >= CREATION_STEPS.length - 1}
        />
      </Grid>
    </>
  );
};

export default CreateAdventurerContainer;

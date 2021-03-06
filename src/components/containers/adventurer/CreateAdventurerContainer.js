import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import CreateAdventurerStepper from '../../elements/adventurer/CreateAdventurerStepper';
import CreateAdventurerBiography from '../../elements/adventurer/CreateAdventurerBiography';
import CreateAdventurerAttributes from '../../elements/adventurer/CreateAdventurerAttributes';
import CreateAdventurerTraits from '../../elements/adventurer/CreateAdventurerTraits';
import CreateAdventurerActions from '../../elements/adventurer/CreateAdventurerActions';
import ConfirmAdventurerCreation from '../../elements/adventurer/ConfirmAdventurerCreation';
import { exitAdventurerCreation, fetchCreateAdventurer } from '../../../actions/adventurerActions';
import { getAdventurerCreationLoading } from '../../../reducers/selectors';
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
  const loading = useSelector(getAdventurerCreationLoading);
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedGender, setSelectedGener] = useState('');
  const [showAdventurerCreation, setShowAdventurerCreation] = useState(false);
  const [pointsLeft, setPointsLeft] = useState(STARTING_POINTS);
  const [attributes, setAttributes] = useState(JSON.parse(JSON.stringify(NEW_ADVENTURER_ATTRIBUTES)));

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

  const handleFinish = () => {
    setShowAdventurerCreation(true);
  }

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

  const closeAdventurerCreation = () => {
    if (!loading) {
      setShowAdventurerCreation(false);
    }
  }

  const createAdventurer = () => {
    if (!loading) {
      const payload = {
        name,
        selectedClass,
        selectedRace,
        selectedGender,
        attributes,
      };
      dispatch(fetchCreateAdventurer(payload));
    }
  }

  const stepsComponents = [
    <CreateAdventurerBiography
      key={0}
      name={name}
      onChangeName={setName}
      classes={CLASSES}
      selectedClass={selectedClass}
      onSelectClass={setSelectedClass}
      races={RACES}
      selectedRace={selectedRace}
      onSelectRace={setSelectedRace}
      genders={GENDERS}
      selectedGender={selectedGender}
      onSelectGender={setSelectedGener}
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
          handleFinish={handleFinish}
          isLastStep={activeStep >= CREATION_STEPS.length - 1}
        />
      </Grid>
      <ConfirmAdventurerCreation
        showAdventurerCreation={showAdventurerCreation}
        handleClose={closeAdventurerCreation}
        handleConfirm={createAdventurer}
        handleCancel={closeAdventurerCreation}
        name={name}
        selectedClass={selectedClass}
        selectedRace={selectedRace}
        selectedGender={selectedGender}
        attributes={attributes}
        loading={loading}
      />
    </>
  );
};

export default CreateAdventurerContainer;

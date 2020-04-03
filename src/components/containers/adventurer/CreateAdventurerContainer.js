import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CreateAdventurerStepper from '../../elements/adventurer/CreateAdventurerStepper';
import CreateAdventurerBiography from '../../elements/adventurer/CreateAdventurerBiography';
import CreateAdventurerAttributes from '../../elements/adventurer/CreateAdventurerAttributes';
import CreateAdventurerTraits from '../../elements/adventurer/CreateAdventurerTraits';
import CreateAdventurerActions from '../../elements/adventurer/CreateAdventurerActions';
import { exitAdventurerCreation } from '../../../actions/adventurerActions';

import { Grid } from '@material-ui/core';

const NewAdventurerContainer = () => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedGender, setSelectedGener] = useState('');
  const [selectedRace, setSelectedRace] = useState('');
  const steps = ['Biography', 'Attributes', 'Traits'];
  const classes = ['Swordsman', 'Mage', 'Thief'];
  const genders = ['Male', 'Female'];
  const races = ['Human', 'Lizard', 'Undead', 'Dwarf', 'Elf'];

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

  const stepsComponents = [
    <CreateAdventurerBiography
      key={0}
      name={name}
      onChangeName={setName}
      classes={classes}
      selectedClass={selectedClass}
      onSelectClass={setSelectedClass}
      genders={genders}
      selectedGender={selectedGender}
      onSelectGender={setSelectedGener}
      races={races}
      selectedRace={selectedRace}
      onSelectRace={setSelectedRace}
    />,
    <CreateAdventurerAttributes key={1} />,
    <CreateAdventurerTraits key={2} />
  ];

  return (
    <>
      <CreateAdventurerStepper activeStep={activeStep} steps={steps} />
      <Grid container justify="center" style={{ flexGrow: 1 }}>
        <Grid item xs={12} align="center">
          {stepsComponents[activeStep]}
        </Grid>
        <CreateAdventurerActions
          handleNext={handleNext}
          handleBack={handleBack}
          isLastStep={activeStep >= steps.length - 1}
        />
      </Grid>
    </>
  );
};

export default NewAdventurerContainer;

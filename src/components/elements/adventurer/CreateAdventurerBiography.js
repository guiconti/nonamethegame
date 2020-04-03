import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import './styles/createAdventurerBiography.scss';

const CreateAdventurerBiography = ({
  name,
  onChangeName,
  classes,
  selectedClass,
  onSelectClass,
  genders,
  selectedGender,
  onSelectGender,
  races,
  selectedRace,
  onSelectRace
}) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      component={Paper}
      elevation={2}
      className="create-adventurer-biography"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} align="start">
          <TextField
            className="create-adventurer__text-field"
            variant="outlined"
            margin="normal"
            required
            id="adventurerName"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={e => onChangeName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} align="start">
          <FormControl variant="outlined" className="create-adventurer__select">
            <InputLabel>Class</InputLabel>
            <Select
              value={selectedClass}
              onChange={e => onSelectClass(e.target.value)}
              label="Class"
            >
              {classes &&
                classes.map(currentClass => (
                  <MenuItem key={currentClass} value={currentClass}>
                    {currentClass}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="start">
          <FormControl variant="outlined" className="create-adventurer__select">
            <InputLabel>Race</InputLabel>
            <Select value={selectedRace} onChange={e => onSelectRace(e.target.value)} label="Race">
              {races &&
                races.map(currentRace => (
                  <MenuItem key={currentRace} value={currentRace}>
                    {currentRace}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="start">
          <FormControl component="fieldset" className="create-adventurer__radio-group">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={selectedGender}
              onChange={e => onSelectGender(e.target.value)}
            >
              {genders &&
                genders.map(currentGender => (
                  <FormControlLabel
                    key={currentGender}
                    value={currentGender}
                    control={<Radio />}
                    label={currentGender}
                  />
                ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
};

CreateAdventurerBiography.propTypes = {
  name: PropTypes.string,
  onChangeName: PropTypes.func.isRequired,
  classes: PropTypes.array.isRequired,
  selectedClass: PropTypes.string,
  onSelectClass: PropTypes.func.isRequired,
  genders: PropTypes.array.isRequired,
  selectedGender: PropTypes.string,
  onSelectGender: PropTypes.func.isRequired,
  races: PropTypes.array.isRequired,
  selectedRace: PropTypes.string,
  onSelectRace: PropTypes.func.isRequired
};

export default CreateAdventurerBiography;

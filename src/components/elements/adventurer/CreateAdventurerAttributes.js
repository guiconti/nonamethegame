import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './styles/createAdventurerAttributes.scss';

const CreateAdventurerAttributes = ({
  pointsLeft,
  attributes,
  reduceAttribute,
  increaseAttribute
}) => {
  return (
    <div className="create-adventurer-attributes">
    <Grid
      item
      xs={12}
      component={Paper}
      elevation={2}
      className="create-adventurer-attributes__paper"
      width={1}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} align="center">
          <Typography>Points left: {pointsLeft}</Typography>
        </Grid>
        {attributes &&
          Object.keys(attributes).map(currentAttribute => (
            <Grid key={currentAttribute} item xs={12}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <Typography className="create-adventurer-attributes__attribute-text" variant="body2">
                    {currentAttribute}: {attributes[currentAttribute]}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <IconButton
                    color="error"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => reduceAttribute(currentAttribute)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => increaseAttribute(currentAttribute)}
                  >
                    <AddIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
    </div>
  );
};

CreateAdventurerAttributes.propTypes = {
  pointsLeft: PropTypes.number.isRequired,
  attributes: PropTypes.object.isRequired,
  reduceAttribute: PropTypes.func.isRequired,
  increaseAttribute: PropTypes.func.isRequired
};

export default CreateAdventurerAttributes;

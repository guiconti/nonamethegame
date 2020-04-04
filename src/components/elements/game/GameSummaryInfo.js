import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import './styles/gameSummaryInfo.scss';

const GameSummaryInfo = ({
  name,
  level,
  experience,
  health,
  currentHealth,
  mana,
  currentMana,
  _class
}) => {
  return (
    <Grid container justify="center">
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className="game-summary-info__text">{name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="game-summary-info__text">Level: {level}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className="game-summary-info__text">{_class}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="game-summary-info__text">Experience: {experience}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className="game-summary-info__text">
              HP: {currentHealth}/{health}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="game-summary-info__text">
              Mana: {currentMana}/{mana}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

GameSummaryInfo.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired,
  health: PropTypes.number.isRequired,
  currentHealth: PropTypes.number.isRequired,
  mana: PropTypes.number.isRequired,
  currentMana: PropTypes.number.isRequired,
  _class: PropTypes.string.isRequired
};

export default GameSummaryInfo;

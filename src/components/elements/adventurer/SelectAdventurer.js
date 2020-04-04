import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import './styles/selectAdventurer.scss';

const SelectAdventurer = ({ _id, name, level, _class, race, selectAdventurer }) => {
  return (
    <Grid item align="center" xs={12} sm={6} md={3}>
      <Card className="select-adventurer__card">
        <CardContent className="select-adventurer__card-content">
          <Grid container>
            <Grid item xs={12} align="center">
              <Typography className="select_adventurer__name" variant="subtitle1">
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12} align="center" variant="subtitle2">
              Level {level}
            </Grid>
            <Grid item xs={12} align="center" variant="subtitle2">
              {_class} {race}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className="select-adventurer__card-actions">
          <Button fullWidth size="small" color="primary" onClick={() => selectAdventurer(_id)}>
            Select
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

SelectAdventurer.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  _class: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  selectAdventurer: PropTypes.func.isRequired,
};

export default SelectAdventurer;

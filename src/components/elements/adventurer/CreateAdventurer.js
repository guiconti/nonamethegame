import React from 'react';
import PropTypes from 'prop-types';
import Title from '../shared/Title';
import Avatar from '../shared/Avatar';
import { Grid, Card, CardContent } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import './styles/createAdventurer.scss';

const CreateAdventurer = ({ createAdventurer }) => {
  return (
    <Grid item align="center" xs={12} sm={6} md={3}>
      <Card className="create-adventurer__card" onClick={createAdventurer}>
        <CardContent className="create-adventurer__card-content">
          <Title>
            New adventurer!
          </Title>
          <Avatar large outlined className="create-adventurer__avatar">
            <Add fontSize="inherit" />
          </Avatar>
        </CardContent>
      </Card>
    </Grid>
  );
};

CreateAdventurer.propTypes = {
  createAdventurer: PropTypes.func.isRequired
};

export default CreateAdventurer;

import React from 'react';
import PropTypes from 'prop-types';
import Column from '../shared/Column';
import Item from '../shared/Item';
import Title from '../shared/Title';
import Avatar from '../shared/Avatar';
import Card from '../shared/Card';
import { Add } from '@material-ui/icons';
import './styles/createAdventurer.scss';

const CreateAdventurer = ({ createAdventurer }) => {
  return (
    <Card className="create-adventurer__card" onClick={createAdventurer}>
      <Column justifyContent="space-between" alignItems="center">
        <Item xs={4}>
          <Title className="create-adventurer__title">New adventurer!</Title>
        </Item>
        <Item xs={8}>
          <Avatar large outlined className="create-adventurer__avatar">
            <Add fontSize="inherit" />
          </Avatar>
        </Item>
      </Column>
    </Card>
  );
};

CreateAdventurer.propTypes = {
  createAdventurer: PropTypes.func.isRequired,
};

export default CreateAdventurer;

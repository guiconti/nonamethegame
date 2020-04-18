import React from 'react';
import Column from '../shared/Column';
import Item from '../shared/Item';
import Avatar from '../shared/Avatar';
import { Add } from '@material-ui/icons';
import './styles/addPointsButton.scss';

const AddPointsButton = ({ ...rest }) => {
  return (
    <Column>
      <Item>
        <Avatar className="add-points-button__avatar" outlined {...rest}>
          <Add />
        </Avatar>
      </Item>
      <Item style={{textAlign: 'center'}}>Add points</Item>
    </Column>
  );
};

export default AddPointsButton;

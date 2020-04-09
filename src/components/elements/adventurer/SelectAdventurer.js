import React from 'react';
import PropTypes from 'prop-types';
import Card from '../shared/Card';
import Column from '../shared/Column';
import Item from '../shared/Item';
import Button from '../shared/Button';
import './styles/selectAdventurer.scss';

const SelectAdventurer = ({ _id, name, level, _class, race, selectAdventurer }) => {
  return (
    <Card className="select-adventurer__card">
      <Column justifyContent="space-between">
        <Item xs={3}>
          {name}
        </Item>
        <Item xs={3}>Level {level}</Item>
        <Item xs={3}>
          {_class} {race}
        </Item>
        <Item xs={2} justifySelf="end" className="select-adventurer__button">
          <Button fullWidth tile onClick={() => selectAdventurer(_id)}>
            Select
          </Button>
        </Item>
      </Column>
    </Card>
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

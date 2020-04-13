import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../shared/Button';
import DialogTitle from '../shared/DialogTitle';
import DialogBody from '../shared/DialogBody';
import Column from '../shared/Column';
import Item from '../shared/Item';
import DialogActions from '../shared/DialogActions';
import './styles/itemDetails.scss';

const ItemDetails = ({ show, handleClose, fullScreen, name, description, value, weight }) => {
  return (
    <div
      className={clsx('item-details', { 'item-details--open': show })}
      onClick={e => {
        if (e.target == e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        className={clsx(
          'dialog__content',
          { 'dialog__content--open': show },
          { 'dialog__content--full-screen': fullScreen }
        )}
      >
        <div className='dialog__card'>
          <DialogTitle>{name}</DialogTitle>
          <DialogBody>
            <Column justifyContent='center' alignItems='flex-start'>
              <Item>
                {description}
              </Item>
              <Item>
                Value: {value}
              </Item>
              <Item>
                Weight: {weight}
              </Item>
            </Column>
          </DialogBody>
          <DialogActions>
            <Button text onClick={handleClose}>
              Close
            </Button>
          </DialogActions>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  show: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  value: PropTypes.number,
  weight: PropTypes.number,
};

export default ItemDetails;

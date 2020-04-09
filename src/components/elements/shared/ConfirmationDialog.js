import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from './Button';
import DialogTitle from './DialogTitle';
import DialogBody from './DialogBody';
import DialogActions from './DialogActions';
import './styles/confirmationDialog.scss';

const ConfirmationDialog = ({
  children,
  show,
  handleClose,
  fullScreen,
  title,
  confirmText,
  cancelText,
  handleConfirm,
  handleCancel,
  loading,
}) => {
  return (
    <div
      className={clsx('dialog', { 'dialog--open': show })}
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className={clsx('dialog__content', { 'dialog__content--open': show }, { 'dialog__content--full-screen': fullScreen })}>
        <div className="dialog__card">
          <DialogTitle>{title}</DialogTitle>
          <DialogBody>{children}</DialogBody>
          <DialogActions>
            <Button text disabled={loading} loading={loading} onClick={handleCancel}>
              {cancelText}
            </Button>
            <Button text disabled={loading} loading={loading} onClick={handleConfirm}>
              {confirmText}
            </Button>
          </DialogActions>
        </div>
      </div>
    </div>
  );
};

ConfirmationDialog.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default ConfirmationDialog;

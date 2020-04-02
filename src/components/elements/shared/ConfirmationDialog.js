import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
// import './styles/header.scss';

const ConfirmationDialog = ({
  children,
  show,
  handleClose,
  fullScreen,
  title,
  confirmText,
  cancelText,
  handleConfirm,
  handleCancel
}) => {
  return (
    <Dialog onClose={handleClose} open={show} fullScreen={fullScreen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          {cancelText}
        </Button>
        <Button onClick={handleConfirm} color="primary">
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
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
  handleCancel: PropTypes.func.isRequired
};

export default ConfirmationDialog;

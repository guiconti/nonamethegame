import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress
} from '@material-ui/core';

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
  loading
}) => {
  return (
    <Dialog onClose={handleClose} open={show} fullScreen={fullScreen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button color="primary" disabled={loading} onClick={handleCancel}>
          {cancelText}
        </Button>
        <Button color="primary" disabled={loading} onClick={handleConfirm}>
          {loading ? <CircularProgress /> : confirmText}
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
  handleCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

export default ConfirmationDialog;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/dialogActions.scss';

const DialogActions = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('dialog-actions', className)} {...rest}>
      {children}
    </div>
  );
};

DialogActions.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default DialogActions;

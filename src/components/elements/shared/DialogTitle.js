import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/dialogTitle.scss';

const DialogTitle = ({ children, className, ...rest }) => {
  return (
    <h4 className={clsx('dialog-title', className)} {...rest}>
      {children}
    </h4>
  );
};

DialogTitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DialogTitle;

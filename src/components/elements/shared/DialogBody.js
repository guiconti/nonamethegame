import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/dialogBody.scss';

const DialogBody = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('dialog-body', className)} {...rest}>
      {children}
    </div>
  );
};

DialogBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default DialogBody;

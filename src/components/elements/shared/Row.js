import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/row.scss';

const Row = ({
  children,
  className,
  justifyContent,
  alignContent,
  alignItems,
  ...rest
}) => {
  return (
    <div
      className={clsx('row', className)}
      style={{
        'justify-content': justifyContent,
        'align-content': alignContent,
        'align-items': alignItems,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
};

export default Row;

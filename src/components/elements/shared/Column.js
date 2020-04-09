import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/column.scss';

const Column = ({
  children,
  className,
  justifyContent,
  alignContent,
  alignItems,
  ...rest
}) => {
  return (
    <div
      className={clsx('column', className)}
      style={{
        justifyContent,
        alignContent,
        alignItems,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
};

export default Column;

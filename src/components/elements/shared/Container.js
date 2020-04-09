import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/container.scss';

const Container = ({ children, className, noPadding, ...rest }) => {
  return (
    <div 
      className={clsx('container', { 'container--no-padding': noPadding }, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  noPadding: PropTypes.bool,
};

export default Container;

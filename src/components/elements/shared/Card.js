import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/card.scss';

const Card = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('card', className)} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Card;

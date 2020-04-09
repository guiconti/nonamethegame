import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/progressBar.scss';

const ProgressBar = ({ className, totalAmount, currentAmount, ...rest }) => {
  return (
    <div className={clsx('progress-bar', className)} {...rest}>
      <div
        className="progress-bar__filled"
        style={{
          width: `${(currentAmount / totalAmount) * 100}%`,
        }}
      ></div>
      <div className="progress-bar__text">
        {currentAmount}/{totalAmount}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  totalAmount: PropTypes.number,
  currentAmount: PropTypes.number
};

export default ProgressBar;

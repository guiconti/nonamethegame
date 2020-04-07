import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/loadingIcon.scss';

const LoadingIcon = ({ className, outlined, text, large, small, ...rest }) => {
  return (
    <svg
      className={clsx(
        'loading-icon',
        className,
        { 'loading-icon--large': large },
        { 'loading-icon--small': small }
      )}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        className={clsx(
          'loading-icon__circle',
          { 'loading-icon__circle--outlined': outlined || text }
        )}
        cx={50}
        cy={50}
        r={35}
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(304.129 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};

LoadingIcon.propTypes = {
  className: PropTypes.string,
  outlined: PropTypes.bool,
  text: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool
};

export default LoadingIcon;

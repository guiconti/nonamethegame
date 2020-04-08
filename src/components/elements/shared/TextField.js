import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './styles/textField.scss';

const TextField = ({ className, fullWidth, outlined, required, label, ...rest }) => {
  return (
    <div className={clsx('text-field', className)}>
      <input
        required
        className={clsx(
          'text-field__input',
          { 'text-field__input--full-width': fullWidth },
          { 'text-field__input--outlined': outlined }
        )}
        {...rest}
      />
      <span
        className={clsx('text-field__floating-label', {
          'text-field__floating-label--outlined': outlined,
        })}
      >
        {label + (required ? ' *' : '')}
      </span>
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  outlined: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
};

export default TextField;

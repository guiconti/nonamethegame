import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from './IconButton';
import {
  CloseOutlined,
  ErrorOutlineOutlined,
  ReportProblemOutlined,
  CheckOutlined,
} from '@material-ui/icons';
import './styles/alert.scss';

const iconTypes = {
  success: CheckOutlined,
  error: ErrorOutlineOutlined,
  warning: ReportProblemOutlined,
};

const Alert = ({ children, className, outlined, type, onClose, ...rest }) => {
  const TypeIcon = iconTypes[type] ? iconTypes[type] : iconTypes['success'];
  return (
    <div
      className={clsx(
        'alert',
        { 'alert--outlined': outlined },
        { 'alert--success': type === 'success' },
        { 'alert--error': type === 'error' },
        { 'alert--warning': type === 'warning' },
        className
      )}
      {...rest}
    >
      <TypeIcon
        className={clsx(
          'alert__type-icon',
          { 'alert__type-icon--success': type === 'success' },
          { 'alert__type-icon--error': type === 'error' },
          { 'alert__type-icon--warning': type === 'warning' }
        )}
      />
      <div className="alert__message">{children}</div>
      <IconButton className="alert__close-button" onClick={onClose}>
        <CloseOutlined fontSize="inherit" />
      </IconButton>
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  outlined: PropTypes.bool,
  type: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Alert;

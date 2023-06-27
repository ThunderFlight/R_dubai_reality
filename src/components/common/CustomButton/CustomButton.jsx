import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './CustomButton.module.scss';

export const CustomButton = ({ children, className }) => {
  return <button className={clsx(styles.button, className)}>{children}</button>;
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

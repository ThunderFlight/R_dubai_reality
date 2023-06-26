import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './CustomArrow.module.scss';

export const CustomArrow = ({ className }) => {
  return <div className={clsx(styles.arrow, className)} />;
};

CustomArrow.propTypes = {
  className: PropTypes.string,
};

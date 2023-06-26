import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Icon = ({ name, className, onClick }) => {
  switch (name) {
    case 'close':
      return (
        <svg
          viewBox='0 0 30 30'
          className={clsx(className)}
          onClick={onClick}>
          <path
            d='M4.39324 25.6077L25.6064 4.39453'
            stroke='#FCD54C'
            strokeWidth='3'
            strokeLinecap='round'
          />
          <path
            d='M4.39324 4.39226L25.6064 25.6055'
            stroke='#FCD54C'
            strokeWidth='3'
            strokeLinecap='round'
          />
        </svg>
      );
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

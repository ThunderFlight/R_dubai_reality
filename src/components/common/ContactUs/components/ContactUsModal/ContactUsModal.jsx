import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import { Icon } from '../../../Icon';
import styles from '../../ContactUs.module.scss';

export const ContactUsModal = ({ valueInput, setIsShowModal, setValueInput }) => {
  const closeModal = () => {
    setIsShowModal(false);
    setValueInput('');
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        <span className={styles.modal__wrapper_descr}>Thank you for subscribe</span>
        <span className={styles.modal__wrapper_email}>{valueInput}</span>
        <Icon
          name='close'
          onClick={closeModal}
          className={clsx(styles.modal__wrapper_closeIcon)}
        />
      </div>
    </div>
  );
};

ContactUsModal.propTypes = {
  valueInput: PropTypes.string,
  setIsShowModal: PropTypes.func,
  setValueInput: PropTypes.func,
};

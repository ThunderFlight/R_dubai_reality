import { useState } from 'react';
import styles from './ContactUs.module.scss';
import { ContactUsModal } from './components/ContactUsModal';

export const ContactUs = () => {
  const [valueInput, setValueInput] = useState('');

  const [isShowModal, setIsShowModal] = useState(false);

  const onChangeValue = (e) => {
    setValueInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsShowModal(true);
  };

  return (
    <section className={styles.contactUs}>
      <span className={styles.contactUs__subtitle}>Do you have any questions?</span>
      <h2 className={styles.contactUs__title}>Contact us</h2>
      <form
        className={styles.contactUs__form}
        onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Enter your mail'
          required
          value={valueInput}
          onChange={onChangeValue}
          className={styles.contactUs__form_input}
        />
        <button
          type='submit'
          className={styles.contactUs__form_btn}>
          Send
        </button>
      </form>
      {isShowModal && (
        <ContactUsModal
          valueInput={valueInput}
          setIsShowModal={setIsShowModal}
          setValueInput={setValueInput}
        />
      )}
    </section>
  );
};

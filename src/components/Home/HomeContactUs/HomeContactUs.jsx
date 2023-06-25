import { useState } from 'react';
import styles from './HomeContactUs.module.scss';

export const HomeContactUs = () => {
  const [val, setVal] = useState('');
  const [active, setActive] = useState(false);
  const [validate, setValidate] = useState(false);
  const [disp, setDisp] = useState('none');

  const valOfInp = (e) => {
    e.preventDefault;
    setVal(e.target.value);
    if (val !== '') {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (val !== '') {
      setDisp('block');
    }
  };

  const close = () => {
    setDisp('none');
    setVal('');
  };
  return (
    <section className={styles.contactUs}>
      <div className={styles.contactUs__wrapper}>
        <span className={styles.contactUs__wrapper_question}>Do you have any questions?</span>
        <h2 className={styles.contactUs__wrapper_title}>Contact us</h2>
      </div>

      <form
        className={styles.contactUs__addMassage}
        onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Enter your mail'
          className={styles.contactUs__addMassage_input}
          onChange={valOfInp}
          value={val}
        />
        <button
          type='submit'
          className={styles.contactUs__addMassage_button}
          disabled={validate}>
          Send
        </button>
      </form>

      <div
        className={styles.modalWindow}
        style={{ display: disp }}>
        <div className={styles.modalWindow__wrapper}>
          <div className={styles.modalWindow__wrapper_centerBlock}>
            <h2 className={styles.modalWindow__wrapper_centerBlock_thanks}>Thanks for sub</h2>
            <p className={styles.modalWindow__wrapper_centerBlock_email}>{val}</p>
            <button
              className={styles.modalWindow__wrapper_centerBlock_cross}
              onClick={close}></button>
          </div>
        </div>
      </div>
    </section>
  );
};

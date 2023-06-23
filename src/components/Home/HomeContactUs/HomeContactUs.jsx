import styles from './HomeContactUs.module.scss';

export const HomeContactUs = () => {
  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.contactUs}>
      <div className={styles.bg}>
        <div className={styles.contactUs__text}>
          <span className={styles.contactUs__text_question}>Do you have any questions?</span>
          <h2 className={styles.contactUs__text_title}>Contact us</h2>
        </div>

        <form className={styles.contactUs__addMassage}>
          <input
            type='text'
            placeholder='Enter your mail'
            className={styles.contactUs__addMassage_input}
          />
          <button
            className={styles.contactUs__addMassage_button}
            onClick={prevent}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

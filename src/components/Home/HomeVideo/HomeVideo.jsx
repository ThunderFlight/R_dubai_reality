import videoBg from '../../../images/homeVideoBg.jpg';
import styles from './HomeVideo.module.scss';
export const HomeVideo = () => {
  return (
    <section className={styles.video}>
      <img
        className={styles.video__img}
        src={videoBg}
        alt='view'
      />
      <button className={styles.video__button}></button>
    </section>
  );
};

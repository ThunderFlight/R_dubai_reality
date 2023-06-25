import play from '../../../images/homeVideoPlayButton.svg';
import styles from './HomeVideo.module.scss';
export const HomeVideo = () => {
  return (
    <section
      className={styles.video}
      alt='view'>
      <button className={styles.video__button}>
        <img
          className={styles.video__button_img}
          src={play}
          alt='play'
        />
      </button>
    </section>
  );
};

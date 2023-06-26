import { CustomArrow } from '../../common';
import styles from './HomeUsefulArticles.module.scss';

export const HomeUsefulArticles = () => {
  return (
    <section className={styles.usefulArticles}>
      <div className={styles.usefulArticles__wrapperTitle}>
        <h2>Useful articles</h2>
        <a>
          View all articles <CustomArrow className={styles.customArrowGray} />
        </a>
      </div>
      <div className={styles.usefulArticles__wrapperImage}>
        <div className={styles.usefulArticles__wrapperImage_exterior}>
          <h2>Discover Architecture</h2>
        </div>

        <div className={styles.usefulArticles__wrapperImage_border}>
          <p className={styles.usefulArticles__wrapperImage_border_date}>jule 03,2022</p>
          <h3 className={styles.usefulArticles__wrapperImage_border_title}>
            Discover Architecture
          </h3>
          <p className={styles.usefulArticles__wrapperImage_border_about}>
            Projects for many large domestic and foreign corporations, enterprises in many elds such
          </p>
          <a className={styles.usefulArticles__wrapperImage_border_link}>
            Learn more <CustomArrow className={styles.customArrowYellow} />
          </a>
        </div>

        <div className={styles.usefulArticles__wrapperImage_interior}>
          <h2>Discover Architecture</h2>
        </div>
      </div>
    </section>
  );
};

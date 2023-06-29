import exterior from '../../../images/homeUsefulArticlesExterior.jpg';
import interior from '../../../images/homeUsefulArticlesInterior.jpg';
import interiorSecond from '../../../images/homeUsefulArticlesInteriorSecond.jpg';
import { CustomArrow } from '../../common';
import styles from './HomeUsefulArticles.module.scss';

export const HomeUsefulArticles = () => {
  return (
    <section className={styles.usefulArticles}>
      <div className={styles.usefulArticles__titleUseful}>
        <h2>Useful articles</h2>
        <span>
          View all articles
          <CustomArrow className={styles.usefulArticles__titleUseful_grayArrow} />
        </span>
      </div>
      <div className={styles.usefulArticles__divImagesBlock}>
        <div className={styles.usefulArticles__allImgWrapper}>
          <img
            src={interiorSecond}
            alt='interiorSecond'
            className={styles.usefulArticles__allImgWrapper_img}
          />

          <div className={styles.usefulArticles__BorderMenuWrap}>
            <p className={styles.usefulArticles__BorderMenuWrap_date}>Jule 03, 2022</p>
            <h2 className={styles.usefulArticles__BorderMenuWrap_title}>Discover Architecture</h2>
            <p className={styles.usefulArticles__BorderMenuWrap_about}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such
            </p>
            <label className={styles.usefulArticles__BorderMenuWrap_link}>
              Learn more
              <CustomArrow className={styles.usefulArticles__BorderMenuWrap_yellowArrow} />
            </label>
          </div>
        </div>

        <div className={styles.usefulArticles__allImgWrapper}>
          <img
            src={exterior}
            alt='exterior'
            className={styles.usefulArticles__allImgWrapper_img}
          />

          <div className={styles.usefulArticles__BorderMenuWrap}>
            <p className={styles.usefulArticles__BorderMenuWrap_date}>Jule 03, 2022</p>
            <h2 className={styles.usefulArticles__BorderMenuWrap_title}>Discover Architecture</h2>
            <p className={styles.usefulArticles__BorderMenuWrap_about}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such
            </p>
            <label className={styles.usefulArticles__BorderMenuWrap_link}>
              Learn more
              <CustomArrow className={styles.usefulArticles__BorderMenuWrap_yellowArrow} />
            </label>
          </div>
        </div>

        <div className={styles.usefulArticles__allImgWrapper}>
          <img
            src={interior}
            alt='interior'
            className={styles.usefulArticles__allImgWrapper_img}
          />

          <div className={styles.usefulArticles__BorderMenuWrap}>
            <p className={styles.usefulArticles__BorderMenuWrap_date}>Jule 03, 2022</p>
            <h2 className={styles.usefulArticles__BorderMenuWrap_title}>Discover Architecture</h2>
            <p className={styles.usefulArticles__BorderMenuWrap_about}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such
            </p>
            <label className={styles.usefulArticles__BorderMenuWrap_link}>
              Learn more
              <CustomArrow className={styles.usefulArticles__BorderMenuWrap_yellowArrow} />
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

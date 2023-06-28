import HomeLatestPic01 from '../../../images/HomeLatest01.jpg';
import HomeLatestPic02 from '../../../images/HomeLatest02.jpg';
import HomeLatestPic03 from '../../../images/HomeLatest03.jpg';
import { Container } from '../../common/';
import styles from './HomeLatest.module.scss';

export const HomeLatest = () => {
  return (
    <section className={styles.latest}>
      <Container className={styles.container}>
        <h2 className={styles.latest__title}>Latest projects</h2>
        <div className={styles.latest__nav}>
          <ul className={styles.latest__list}>
            <li className={styles.latest__list_item}>
              <a
                href='#'
                className={styles.latest__list_link}>
                All
              </a>
            </li>
            <li className={styles.latest__list_item}>
              <a
                href='#'
                className={styles.latest__list_link}>
                Building
              </a>
            </li>
            <li className={styles.latest__list_item}>
              <a
                href='#'
                className={styles.latest__list_link}>
                Interior
              </a>
            </li>
          </ul>
          <a
            href='#'
            className={styles.latest__nav_allProject}>
            View all projects
          </a>
        </div>
      </Container>
      <div className={styles.slider}>
        <ul className={styles.slider__list}>
          <li className={styles.slider__list_item}>
            <img
              src={HomeLatestPic01}
              alt='Latest'
              className={styles.slider__list_img}
            />
            <h2 className={styles.slider__list_title}>Villas</h2>
          </li>
          <li className={styles.slider__list_item}>
            <img
              src={HomeLatestPic03}
              alt='Latest'
              className={styles.slider__list_img}
            />
            <h2 className={styles.slider__list_title}>Dubai</h2>
          </li>
          <li className={styles.slider__list_item}>
            <img
              src={HomeLatestPic02}
              alt='Latest'
              className={styles.slider__list_img}
            />
            <h2 className={styles.slider__list_title}>Houses</h2>
          </li>
          <li className={styles.slider__list_item}>
            <img
              src={HomeLatestPic03}
              alt='Latest'
              className={styles.slider__list_img}
            />
            <h2 className={styles.slider__list_title}>Villas</h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

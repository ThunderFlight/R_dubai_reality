import styles from './HomeUsefulArticles.module.scss';

export const HomeUsefulArticles = () => {
  return (
    <section className={styles.usefulArticles}>
      <div className={styles.usefulArticles__wrapperTitle}>
        <h2>Useful articles</h2>
        <a>
          View all articles <span className={styles.usefulArticles__arrow}></span>
        </a>
      </div>
      <div className={styles.usefulArticles__wrapperImage}>
        <div className={styles.usefulArticles__wrapperImage_exterior}>
          <h1>Discover Architecture</h1>
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
            Learn more <span></span>
          </a>
        </div>

        <div className={styles.usefulArticles__wrapperImage_interior}></div>
      </div>
    </section>
  );
};

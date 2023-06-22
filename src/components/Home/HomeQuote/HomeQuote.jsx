import { Container } from '../../common/Container/Container';
import styles from './HomeQuote.module.scss';
export const HomeQuote = () => {
  return (
    <section className={styles.HomeQuote}>
      <Container className={styles.container}>
        <p className={styles.HomeQuote__text}>
          “Don’t limit yourself. Many people limit themselves to what they think they can do. You
          can go as far as your mind lets you. What you believe, remember, you can achieve.”{' '}
          <span>— Mary Kay Ash</span>
        </p>
      </Container>
    </section>
  );
};

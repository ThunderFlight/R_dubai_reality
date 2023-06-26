import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link
      to='/'
      className={styles.logo}>
      <span className={styles.logo__title}>DubaiRealty</span>
      <span className={styles.logo__subtitle}>Real Estate</span>
    </Link>
  );
};

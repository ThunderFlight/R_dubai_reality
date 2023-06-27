import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton, Logo } from '../common/';
import styles from './TheNavigation.module.scss';

export const TheNavigation = () => {
  const [languages, setLanguages] = useState([
    { id: 'en', title: 'EN', isActive: true },
    { id: 'ru', title: 'RU', isActive: false },
  ]);

  const changeActiveLang = (id) => {
    const updatedLanguages = languages.map((language) => {
      if (language.id === id) {
        return { ...language, isActive: true };
      } else {
        return { ...language, isActive: false };
      }
    });

    setLanguages(updatedLanguages);
  };

  return (
    <header className={styles.navigation}>
      <div className={styles.navigation__left}>
        <Logo />
        <nav className={styles.navigation__menu}>
          <ul className={styles.navigation__menu_list}>
            <li className={styles.navigation__menu_item}>
              <Link
                to='/buy'
                className={styles.navigation__menu_link}>
                buy
              </Link>
            </li>
            <li className={styles.navigation__menu_item}>
              <Link
                to='/blog'
                className={styles.navigation__menu_link}>
                blog
              </Link>
            </li>
            <li className={styles.navigation__menu_item}>
              <Link
                to='/about'
                className={styles.navigation__menu_link}>
                about
              </Link>
            </li>
            <li className={styles.navigation__menu_item}>
              <Link
                to='/contact'
                className={styles.navigation__menu_link}>
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.navigation__right}>
        <CustomButton className={styles.navigation__btn}>Book a consultation</CustomButton>
        <div className={styles.navigation__wrapperLang}>
          {[] &&
            languages.map((lang) => (
              <span
                key={lang.id}
                className={clsx(
                  styles.navigation__wrapperLang_title,
                  lang.isActive ? styles.active : null,
                )}
                onClick={() => changeActiveLang(lang.id)}>
                {lang.title}
              </span>
            ))}
        </div>
        <a
          href='tel:+380971234567'
          className={styles.navigation__phone}>
          +38 (097) 123-45-67
        </a>
      </div>
    </header>
  );
};

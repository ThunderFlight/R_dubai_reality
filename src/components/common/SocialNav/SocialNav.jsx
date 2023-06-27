import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import styles from './SocialNav.module.scss';

const socialIcons = [
  { iconName: 'facebook', id: '01' },
  { iconName: 'twitter', id: '02' },
  { iconName: 'youtube', id: '03' },
  { iconName: 'instagram', id: '04' },
  { iconName: 'linkedin', id: '05' },
];

export const SocialNav = ({ className }) => {
  return (
    <ul className={clsx(styles.social, className)}>
      {[] &&
        socialIcons.map((icon) => (
          <li
            key={icon.id}
            className={styles.social__item}>
            <a
              href='#'
              className={styles.social__link}>
              <Icon
                name={icon.iconName}
                className={styles.social__link_icon}
              />
            </a>
          </li>
        ))}
    </ul>
  );
};

SocialNav.propTypes = {
  className: PropTypes.string,
};

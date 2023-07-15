import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { firstScreenSlider } from '../../../../data';
import { CustomArrow, SocialNav } from '../../common';
import styles from './HomeFirstScreen.module.scss';

export const HomeFirstScreen = () => {
  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 320 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <section className={styles.firstScreen}>
      <Carousel
        arrows={false}
        responsive={responsive}
        autoPlay
        infinite={true}
        itemClass={styles.item}>
        {[] &&
          firstScreenSlider.map((slider) => (
            <img
              key={slider.id}
              src={slider.image}
              alt={slider.title}
              className={styles.firstScreen__img}
            />
          ))}
      </Carousel>
      <div className={styles.firstScreen__wrapper}>
        <h4 className={styles.firstScreen__wrapper_subtitle}>Lorem ipsum</h4>
        <h4 className={styles.firstScreen__wrapper_title}>
          Welcome home <span>to</span> luxury
        </h4>
        <a
          href='#'
          className={styles.firstScreen__wrapper_link}>
          Book a consultation
          <CustomArrow className={styles.firstScreen__wrapper_linkIcon} />
        </a>
      </div>
      <SocialNav className={styles.firstScreen__social} />
    </section>
  );
};

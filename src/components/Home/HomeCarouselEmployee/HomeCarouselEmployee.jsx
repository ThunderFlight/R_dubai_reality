import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import paul from '../../../images/HomeCarouselEmployeePaul.jpg';
import robert from '../../../images/HomeCarouselEmployeeRobert.jpg';
import { Quotes } from '../../common/Quotes/Quotes';
import styles from './HomeCarouselEmployee.module.scss';

export const HomeCarouselEmployee = () => {
  return (
    <section className={styles.carouselEmployee}>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.carouselEmployee__swiper}
        style={{ paddingTop: '60px', overflow: 'hidden' }}>
        <SwiperSlide className={styles.carouselEmployee__swiperElement}>
          <div className={styles.carouselEmployee__avatarWrapper}>
            <img
              src={robert}
              alt='robert'
              className={styles.carouselEmployee__avatarWrapper_avatar}
            />
            <Quotes className={styles.carouselEmployee__avatarWrapper_quote} />
          </div>
          <div className={styles.carouselEmployee__descOfEmployee}>
            <h1 className={styles.carouselEmployee__descOfEmployee_name}>Robert</h1>
            <p className={styles.carouselEmployee__descOfEmployee_ownerOf}>
              Owner in <a href='#'>Apple Inc</a>
            </p>
            <p className={styles.carouselEmployee__descOfEmployee_about}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such as nance, banking, F&B, education, communication.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselEmployee__swiperElement}>
          <div className={styles.carouselEmployee__avatarWrapper}>
            <img
              src={paul}
              alt='paul'
              className={styles.carouselEmployee__avatarWrapper_avatar}
            />
            <Quotes className={styles.carouselEmployee__avatarWrapper_quote} />
          </div>
          <div className={styles.carouselEmployee__descOfEmployee}>
            <h1 className={styles.carouselEmployee__descOfEmployee_name}>Paul</h1>
            <p className={styles.carouselEmployee__descOfEmployee_ownerOf}>
              Owner in <a href='#'>Paul.com</a>
            </p>
            <p className={styles.carouselEmployee__descOfEmployee_about}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such as nance, banking, F&B, education, communication.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselEmployee__swiperElement}>
          <div className={styles.carouselEmployee__avatarWrapper}>
            <img
              src={robert}
              alt='robert'
              className={styles.carouselEmployee__avatarWrapper_avatar}
            />
            <Quotes className={styles.carouselEmployee__avatarWrapper_quote} />
          </div>
          <div className={styles.carouselEmployee__descOfEmployee}>
            <h1 className={styles.carouselEmployee__descOfEmployee_name}>Robert</h1>
            <p className={styles.carouselEmployee__descOfEmployee_ownerOf}>
              Owner in <a href='#'>Apple Inc</a>
            </p>
            <p className={styles.carouselEmployee__descOfEmployee_about}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such as nance, banking, F&B, education, communication.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselEmployee__swiperElement}>
          <div className={styles.carouselEmployee__avatarWrapper}>
            <img
              src={paul}
              alt='paul'
              className={styles.carouselEmployee__avatarWrapper_avatar}
            />
            <Quotes className={styles.carouselEmployee__avatarWrapper_quote} />
          </div>
          <div className={styles.carouselEmployee__descOfEmployee}>
            <h1 className={styles.carouselEmployee__descOfEmployee_name}>Paul</h1>
            <p className={styles.carouselEmployee__descOfEmployee_ownerOf}>
              Owner in <a href='#'>Paul.com</a>
            </p>
            <p className={styles.carouselEmployee__descOfEmployee_about}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such as nance, banking, F&B, education, communication.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

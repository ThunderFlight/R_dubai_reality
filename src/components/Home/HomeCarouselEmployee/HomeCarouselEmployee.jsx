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
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          2560: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
        style={{ paddingTop: '60px' }}>
        <SwiperSlide className={styles.carouselEmployee__slideWrapper}>
          <div className={styles.carouselEmployee__avatarWrapper}>
            <img
              src={robert}
              alt='robert'
              className={styles.carouselEmployee__avatarWrapper_avatar}
            />
            <Quotes className={styles.carouselEmployee__avatarWrapper_quotes} />
          </div>

          <div className={styles.carouselEmployee__aboutWrapper}>
            <h2 className={styles.carouselEmployee__aboutWrapper_name}>Robert</h2>
            <p className={styles.carouselEmployee__aboutWrapper_ownerOf}>
              Owner in <a>Apple Inc.</a>
            </p>
            <p className={styles.carouselEmployee__aboutWrapper_autobiography}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such as nance, banking, F&B, education, communication.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselEmployee__slideWrapper}>
          <div className={styles.carouselEmployee__avatarWrapper}>
            <img
              src={paul}
              alt='paul'
              className={styles.carouselEmployee__avatarWrapper_avatar}
            />
            <Quotes className={styles.carouselEmployee__avatarWrapper_quotes} />
          </div>

          <div className={styles.carouselEmployee__aboutWrapper}>
            <h2 className={styles.carouselEmployee__aboutWrapper_name}>Paul</h2>
            <p className={styles.carouselEmployee__aboutWrapper_ownerOf}>
              Owner in <a>Paul.com</a>
            </p>
            <p className={styles.carouselEmployee__aboutWrapper_autobiography}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such as nance, banking, F&B, education, communication.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselEmployee__slideWrapper}>
          <div className={styles.carouselEmployee__avatarWrapper}>
            <img
              src={robert}
              alt='robert'
              className={styles.carouselEmployee__avatarWrapper_avatar}
            />
            <Quotes className={styles.carouselEmployee__avatarWrapper_quotes} />
          </div>

          <div className={styles.carouselEmployee__aboutWrapper}>
            <h2 className={styles.carouselEmployee__aboutWrapper_name}>Robert</h2>
            <p className={styles.carouselEmployee__aboutWrapper_ownerOf}>
              Owner in <a>Apple Inc.</a>
            </p>
            <p className={styles.carouselEmployee__aboutWrapper_autobiography}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such as nance, banking, F&B, education, communication.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.carouselEmployee__slideWrapper}>
          <div className={styles.carouselEmployee__avatarWrapper}>
            <img
              src={paul}
              alt='paul'
              className={styles.carouselEmployee__avatarWrapper_avatar}
            />
            <Quotes className={styles.carouselEmployee__avatarWrapper_quotes} />
          </div>

          <div className={styles.carouselEmployee__aboutWrapper}>
            <h2 className={styles.carouselEmployee__aboutWrapper_name}>Paul</h2>
            <p className={styles.carouselEmployee__aboutWrapper_ownerOf}>
              Owner in <a>Paul.com</a>
            </p>
            <p className={styles.carouselEmployee__aboutWrapper_autobiography}>
              Projects for many large domestic and foreign corporations, enterprises in many elds
              such as nance, banking, F&B, education, communication.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

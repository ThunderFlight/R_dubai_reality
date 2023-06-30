import React from 'react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import paul from '../../../images/HomeCarouselEmployeePaul.jpg';
import quotes from '../../../images/HomeCarouselEmployeeQuotes.svg';
import robert from '../../../images/HomeCarouselEmployeeRobert.jpg';
import { Quotes } from '../../common/Quotes/Quotes';
import styles from './HomeCarouselEmployee.module.scss';

export const HomeCarouselEmployee = () => {
  return (
    <section className={styles.carouselEmployee}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <div className={styles.carouselEmployee__employeeCard}>
            <div className={styles.carouselEmployee__wrapperAvatar}>
              <img
                src={robert}
                alt='robert'
                className={styles.carouselEmployee__wrapperAvatar_avatar}
              />
              <Quotes className={styles.carouselEmployee__wrapperAvatar_quotes} />
            </div>

            <div className={styles.carouselEmployee__employeeDesk}>
              <h2 className={styles.carouselEmployee__employeeDesk_name}>Paul</h2>
              <p className={styles.carouselEmployee__employeeDesk_owner}>
                Owner in <a>Paul.com</a>
              </p>
              <p className={styles.carouselEmployee__employeeDesk_about}>
                Projects for many large domestic and foreign corporations, enterprises in many elds
                such as nance, banking, F&B, education, communication.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselEmployee__employeeCard}>
            <img
              src={paul}
              alt='paul'
              className={styles.carouselEmployee__employeeCard_avatar}
            />
            <img
              src={quotes}
              alt='Quotes'
              className={styles.carouselEmployee__employeeCard_quotes}
            />
            <div className={styles.carouselEmployee__employeeDesk}>
              <h2 className={styles.carouselEmployee__employeeDesk_name}>Paul</h2>
              <p className={styles.carouselEmployee__employeeDesk_owner}>
                Owner in <a>Paul.com</a>
              </p>
              <p className={styles.carouselEmployee__employeeDesk_about}>
                Projects for many large domestic and foreign corporations, enterprises in many elds
                such as nance, banking, F&B, education, communication.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselEmployee__employeeCard}>
            <img
              src={robert}
              alt='robert'
              className={styles.carouselEmployee__employeeCard_avatar}
            />
            <img
              src={quotes}
              alt='Quotes'
              className={styles.carouselEmployee__employeeCard_quotes}
            />
            <div className={styles.carouselEmployee__employeeDesk}>
              <h2 className={styles.carouselEmployee__employeeDesk_name}>Paul</h2>
              <p className={styles.carouselEmployee__employeeDesk_owner}>
                Owner in <a>Paul.com</a>
              </p>
              <p className={styles.carouselEmployee__employeeDesk_about}>
                Projects for many large domestic and foreign corporations, enterprises in many elds
                such as nance, banking, F&B, education, communication.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carouselEmployee__employeeCard}>
            <img
              src={paul}
              alt='paul'
              className={styles.carouselEmployee__employeeCard_avatar}
            />
            <img
              src={quotes}
              alt='Quotes'
              className={styles.carouselEmployee__employeeCard_quotes}
            />
            <div className={styles.carouselEmployee__employeeDesk}>
              <h2 className={styles.carouselEmployee__employeeDesk_name}>Paul</h2>
              <p className={styles.carouselEmployee__employeeDesk_owner}>
                Owner in <a>Paul.com</a>
              </p>
              <p className={styles.carouselEmployee__employeeDesk_about}>
                Projects for many large domestic and foreign corporations, enterprises in many elds
                such as nance, banking, F&B, education, communication.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { projects } from '../../constants';
import SectionTitle from '../SectionTitle';
import Button from '../Button';
import arrow from '../../assets/img/arrow.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Cases.module.scss';

const Cases = () => {
  return (
    <div className={styles.cases}>
      <div className={styles.wrapper}>
        <SectionTitle title="Кейсы" />

        <Swiper
          className={styles.cards}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}>
          {projects &&
            Object.values(projects).map((project, idx) => (
              <SwiperSlide key={idx} className={styles.card}>
                <div className={styles.cardWrapper}>
                  <p className={styles.projectId}>{project.id}</p>
                  <p className={styles.projectText}>{project.name}</p>
                  {project.code ? (
                    <Link to={project.code}>
                      <Button title={'Подробнее'} target="_blank" />
                    </Link>
                  ) : (
                    <Link to={project.demo}>
                      <Button title={'Подробнее'} target="_blank" />
                    </Link>
                  )}
                  <p className={styles.projectDate}>{project.date}</p>
                  <img className={styles.arrow} src={arrow} alt="arrow" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cases;

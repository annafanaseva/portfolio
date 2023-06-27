import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Cases from '../../components/Cases';
import Skills from '../../components/Skills';
import SideNav from '../../components/SideNav';
import Footer from '../../components/Footer';

import orangeBlur from '../../assets/img/orangeBlur.png';
import greenBlur from '../../assets/img/greenBlur.png';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.background}>
        <img src={orangeBlur} className={styles.orangeBlur} alt="orangeBlur" />
        <img src={greenBlur} className={styles.greenBlur} alt="greenBlur" />
      </div>
      <SideNav />
      <Header />
      <Hero />
      <Skills />
      <Cases />
      <Footer />
    </div>
  );
};

export default HomePage;

import React from 'react';
import { FullPage, Slide } from 'react-full-page';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Cases from '../../components/Cases';
import Skills from '../../components/Skills';
import SideNav from '../../components/SideNav';
import Footer from '../../components/Footer';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <SideNav />
      <FullPage controls={false} duration={1000}>
        <Slide className={styles.fullPage}>
          <Header />
          <Hero />
        </Slide>

        <Slide className={styles.fullPage}>
          <Skills />
        </Slide>

        <Slide className={styles.fullPage}>
          <Cases />
          <Footer />
        </Slide>
      </FullPage>
    </>
  );
};

export default HomePage;

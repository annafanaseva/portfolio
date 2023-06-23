import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Cases from '../../components/Cases';
import Skills from '../../components/Skills';
import SideNav from '../../components/SideNav';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <>
      <SideNav />
      <Header />
      <Hero />
      <Skills />
      <Cases />
      <Footer />
    </>
  );
};

export default HomePage;

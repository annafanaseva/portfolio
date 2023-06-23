import mainText from '../../assets/img/main-text.png';
// import Oval from '../Oval';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <div className={styles.img}></div>

        <div className={styles.textWrapper}>
          <h1 className={styles.title}>
            GIVE ME A CHALLENGE <br /> TO CODE
          </h1>

          <img src={mainText} alt="Frontend Developer" />

          <div className={styles.line} />

          <p>Афанасьева Анна</p>
          <p>22 года</p>
          <p>Москва</p>
        </div>
      </div>

      {/* <Oval /> */}

      {/* <div className={styles.quote}>
        <span className={styles.quoteText}>
          No one comes to your <span className={styles.accent}>website</span> to be
          <span className={styles.accent}> entertained.</span> They have questions they think you
          can answer. <span className={styles.accent}>Content</span> answers questions.
        </span>

        <span className={styles.author}>Jay Baer</span>
      </div> */}

      {/* <Oval /> */}
    </div>
  );
};

export default Hero;

import mainText from '../../assets/img/main-text.png';
import asteriskIcon from '../../assets/img/asterisk.svg';
import locationIcon from '../../assets/img/location.svg';
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

          <div className={styles.textWrapperName}>
            <span className={styles.text}>Афанасьева Анна</span>
            <img src={asteriskIcon} className={styles.icon} alt="asterisk" />
            <span className={styles.text}> 22</span>
          </div>

          <div className={styles.textWrapperLocation}>
            <img src={locationIcon} className={styles.icon} alt="location" />
            <span className={styles.text}> Москва</span>
          </div>
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

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <span className={styles.logoPrimary}>
            ANN AFANASEVA
            <span className={styles.logoAccent}> | FRONTEND DEVELOPER</span>
          </span>
        </div>

        <ul className={styles.links}>
          {/* <li>
            <Link className={styles.link} to="/">
              БЛОГ
            </Link>
          </li> */}

          <li>
            <Link className={styles.link} to="cases">
              КЕЙСЫ
            </Link>
          </li>

          <li>
            <Link className={styles.link} to="skills">
              НАВЫКИ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

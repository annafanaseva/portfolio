import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <p className={styles.logoAccent}>ANN AFANASEVA</p>
        <div className={styles.oval} />
      </div>

      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/">
            Блог
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/">
            Портфолио
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/">
            Кейсы
          </Link>
        </li>

        <li>
          <Link className={styles.link} to="/">
            Навыки
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

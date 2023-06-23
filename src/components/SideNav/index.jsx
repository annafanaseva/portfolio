import { Link } from 'react-router-dom';

import styles from './SideNav.module.scss';
import tgIcon from '../../assets/img/tg.svg';
import mailIcon from '../../assets/img/mail.svg';
import ghIcon from '../../assets/img/gh.svg';

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <Link to="https://t.me/ann_afanaseva" target="_blank" className={styles.sideNavLink}>
        <img src={tgIcon} alt="Telegram" />
      </Link>
      <Link to="mailto:ann.afanaseva777@gmail.com" target="_blank" className={styles.sideNavLink}>
        <img src={mailIcon} alt="Gmail" />
      </Link>
      <Link
        to="https://github.com/annafanaseva?tab=repositories"
        target="_blank"
        className={styles.sideNavLink}
      >
        <img src={ghIcon} alt="GitHub" />
      </Link>
    </div>
  );
};

export default SideNav;

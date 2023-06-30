import { skills } from '../../constants';
import SectionTitle from '../SectionTitle';

import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.wrapper}>
        <SectionTitle title="ОБО МНЕ" />

        <div className={styles.about}>
          <p className={styles.aboutText}>
            Привет, меня зовут Аня! В 2019 году я начала заниматься программированием и созданием
            сайтов. Я имею 3 года опыта работы в качестве фронтенд-разработчика и способна создавать
            интересные и интуитивно понятные веб-сайты. Я обладаю опытом работы с HTML, CSS,
            jаvascript и другими технологиями веб-разработки. Я также работала с различными
            фреймворками, такими как React и Vue.js. Я могу эффективно работать в команде с другими
            разработчиками, дизайнерами и менеджерами проектов. Я способна принимать быстрые решения
            и управлять временем для успешного завершения проектов в срок. Как я работаю? Здесь
            можно увидеть мои проекты.
          </p>
        </div>

        <div className={styles.skills}>
          {skills &&
            Object.values(skills).map((skill, idx) => (
              <div key={idx} className={styles.skill}>
                <img src={skill.icon} alt="skill icon" />
                <p className={styles.skillText}>{skill.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

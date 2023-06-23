import { skills } from '../../constants';
import SectionTitle from '../SectionTitle';

import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <SectionTitle title="Навыки" />

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
  );
};

export default Skills;

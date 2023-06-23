import styles from './SectionTitle.module.scss';

const SectionTitle = (props) => {
  const { title } = props;
  return <div className={styles.title}>{title}</div>;
};

export default SectionTitle;

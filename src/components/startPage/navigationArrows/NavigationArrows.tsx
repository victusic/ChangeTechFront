import styles from './navigationArrows.module.scss';

export const NavigationArrows: React.FC = () => {
  
  return (
    <div className={styles.navigationArrowsPlate}>
      <p className={styles.navigationArrowsEl}>❮</p>
      <p className={styles.navigationArrowsEl}>❯</p>
    </div>
  );
};

import styles from './Cycles.module.css';

export function Cycles() {
  return (
    <div className={styles.formCycles}>
      Ciclos:{' '}
      <div className={styles.cycles}>
        <span className={`${styles.cycle} ${styles.workTime}`}></span>
        <span className={`${styles.cycle} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycle} ${styles.workTime}`}></span>
        <span className={`${styles.cycle} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycle} ${styles.workTime}`}></span>
        <span className={`${styles.cycle} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cycle} ${styles.workTime}`}></span>
        <span className={`${styles.cycle} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}

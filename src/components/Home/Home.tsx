import styles from './Home.module.css';

import { HomeForm } from '../HomeForm/HomeForm';
import { Countdown } from '../Countdown/Countdown';

export function Home() {
  return (
    <div className={styles.homeContainer}>
      <Countdown />
      <HomeForm />
    </div>
  );
}

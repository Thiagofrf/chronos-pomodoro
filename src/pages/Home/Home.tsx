import styles from './Home.module.css';

import { HomeForm } from '../../components/HomeForm/HomeForm';
import { Countdown } from '../../components/Countdown/Countdown';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <div className={styles.homeContainer}>
        <Countdown />
        <HomeForm />
      </div>
    </MainTemplate>
  );
}

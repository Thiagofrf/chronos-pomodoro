import { useEffect } from 'react';
import { HomeForm } from '../../components/HomeForm/HomeForm';
import { Countdown } from '../../components/Countdown/Countdown';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

import styles from './Home.module.css';
export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro';
  }, []);
  return (
    <MainTemplate>
      <div className={styles.homeContainer}>
        <Countdown />
        <HomeForm />
      </div>
    </MainTemplate>
  );
}

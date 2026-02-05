import { RouterLink } from '../RouterLink/RouterLink';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro'>
        Entenda a técnica pomodoro 🍅
      </RouterLink>
      <RouterLink href='https://github.com/Thiagofrf' target='_blank'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </RouterLink>
    </footer>
  );
}

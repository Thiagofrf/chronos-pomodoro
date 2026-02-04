import styles from './Footer.module.css';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro'>Entenda a técnica pomodoro 🍅</Link>
      <Link to='https://github.com/Thiagofrf' target='_blank'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </Link>
    </footer>
  );
}

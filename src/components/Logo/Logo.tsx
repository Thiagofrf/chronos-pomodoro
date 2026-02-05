import { Timer } from 'lucide-react';
import { RouterLink } from '../RouterLink/RouterLink';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoButton} href='/'>
        <Timer size={64} />
        Chronos
      </RouterLink>
    </div>
  );
}

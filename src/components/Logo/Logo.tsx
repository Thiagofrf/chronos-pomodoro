import { Timer } from 'lucide-react';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoButton} href='#'>
        <Timer size={64} />
        Chronos
      </a>
    </div>
  );
}

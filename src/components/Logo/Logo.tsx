import { Timer } from 'lucide-react';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <button className={styles.logoButton}>
        <Timer size={64} />
        Chronos
      </button>
    </div>
  );
}

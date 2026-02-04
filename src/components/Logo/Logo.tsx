import { Timer } from 'lucide-react';
import styles from './Logo.module.css';
import { Link } from 'react-router';

export function Logo() {
  return (
    <div className={styles.logo}>
      <Link className={styles.logoButton} to='/'>
        <Timer size={64} />
        Chronos
      </Link>
    </div>
  );
}

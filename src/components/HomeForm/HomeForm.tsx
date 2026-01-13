import styles from './HomeForm.module.css';

import { CirclePlay } from 'lucide-react';
import { Input } from '../Input/Input';

export function HomeForm() {
  return (
    <form className={styles.homeForm} action=''>
      <Input
        id='taskInput'
        type='text'
        placeholder='Ex.: Estudar para a prova'
        labelText='Task:'
      />
      <p className={styles.formHelper}>
        Nesse ciclo <b>descanse</b> por <b>5 min.</b>
      </p>
      <div className={styles.formCicles}>
        Ciclos:{' '}
        <div className={styles.cicles}>
          <span className={styles.cicle}></span>
          <span className={styles.cicle}></span>
          <span className={styles.cicle}></span>
        </div>
      </div>

      <button className={styles.startButton} type='submit'>
        <CirclePlay size={32} />
      </button>
    </form>
  );
}

import styles from './HomeForm.module.css';

import { CirclePlay } from 'lucide-react';
import { Input } from '../Input/Input';
import { Cycles } from '../Cycles/Cycles';

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
      <Cycles />

      <button className={styles.startButton} type='submit'>
        <CirclePlay size={32} />
      </button>
    </form>
  );
}

import styles from './HomeForm.module.css';

import { CirclePlay, StopCircleIcon } from 'lucide-react';
import { Input } from '../Input/Input';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefaultButton/DefaultButton';

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
      <DefaultButton type='submit'>
        <CirclePlay size={32} />
      </DefaultButton>
      <DefaultButton type='submit' status='stop'>
        <StopCircleIcon size={32} />
      </DefaultButton>
    </form>
  );
}

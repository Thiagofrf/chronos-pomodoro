import { useState } from 'react';
import { CirclePlay, StopCircleIcon } from 'lucide-react';
import { Input } from '../Input/Input';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefaultButton/DefaultButton';

import styles from './HomeForm.module.css';

export function HomeForm() {
  const [taskName, setTaskName] = useState('');

  const handleCreateTaskForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.homeForm} action='' onSubmit={handleCreateTaskForm}>
      <Input
        id='taskInput'
        type='text'
        placeholder='Ex.: Estudar para a prova'
        labelText='Task:'
        value={taskName}
        onChange={e => setTaskName(e.target.value)}
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

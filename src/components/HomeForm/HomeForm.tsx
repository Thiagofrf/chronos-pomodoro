import { useRef } from 'react';
import { CirclePlay, StopCircleIcon } from 'lucide-react';
import { Input } from '../Input/Input';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefaultButton/DefaultButton';

import styles from './HomeForm.module.css';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function HomeForm() {
  const { setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const handleCreateTaskForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: 1,
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  return (
    <form className={styles.homeForm} action='' onSubmit={handleCreateTaskForm}>
      <Input
        id='taskInput'
        type='text'
        placeholder='Ex.: Estudar para a prova'
        labelText='Task:'
        value={taskNameInput.current?.value}
        ref={taskNameInput}
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

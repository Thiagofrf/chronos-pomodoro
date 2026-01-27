import { useRef } from 'react';
import { CirclePlay, StopCircleIcon } from 'lucide-react';
import { Input } from '../Input/Input';
import { Cycles } from '../Cycles/Cycles';
import { DefaultButton } from '../DefaultButton/DefaultButton';

import styles from './HomeForm.module.css';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getCycleType } from '../../utils/getCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function HomeForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getCycleType(nextCycle);

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
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
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
      {state.currentCycle > 0 && <Cycles />}
      <DefaultButton type='submit'>
        <CirclePlay size={32} />
      </DefaultButton>
      <DefaultButton type='submit' status='stop'>
        <StopCircleIcon size={32} />
      </DefaultButton>
    </form>
  );
}

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
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips/Tips';
import { showMessage } from '../../adapters/showMessage';

export function HomeForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getCycleType(nextCycle);

  const handleCreateTaskForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    showMessage.dissmiss();

    if (!taskNameInput.current) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warning('Digite o nome da tarefa');
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

    dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });

    showMessage.success(`Tarefa iniciada!`);
  };

  function handleInterruptTask() {
    showMessage.dissmiss();
    dispatch({ type: TaskActionsTypes.INTERRUPT_TASK });

    showMessage.error('Tarefa interrompida.');
  }

  return (
    <form className={styles.homeForm} action='' onSubmit={handleCreateTaskForm}>
      <Input
        id='taskInput'
        type='text'
        placeholder='Ex.: Estudar para a prova'
        labelText='Task:'
        ref={taskNameInput}
        disabled={!!state.activeTask}
      />

      <Tips />

      {state.currentCycle > 0 && <Cycles />}
      {!state.activeTask ? (
        <DefaultButton
          type='submit'
          aria-label='Iniciar nova tarefa'
          title='Iniciar nova tarefa'
          key={'submitButton'}
        >
          <CirclePlay size={32} />
        </DefaultButton>
      ) : (
        <DefaultButton
          type='button'
          status='stop'
          onClick={handleInterruptTask}
          key={'stopButton'}
        >
          <StopCircleIcon size={32} />
        </DefaultButton>
      )}
    </form>
  );
}

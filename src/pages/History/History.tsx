import { TrashIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton/DefaultButton';
import { Heading } from '../../components/Heading/Heading';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

import styles from './History.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks } from '../../utils/sortTasks';

export function History() {
  const { state } = useTaskContext();

  const sortedTasks = sortTasks({ tasks: state.tasks });

  return (
    <MainTemplate>
      <Heading>
        <span>History</span>
        <span className={styles.buttonContainer}>
          <DefaultButton
            status='stop'
            aria-label='Apagar histórico'
            title='Apagar histórico'
          >
            <TrashIcon />
          </DefaultButton>
        </span>
      </Heading>

      <div className={styles.responsiveTable}>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Data</th>
              <th>Status</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map(task => {
              const taskTypeMap = {
                workTime: 'Foco',
                shortBreakTime: 'Descanso curto',
                longBreakTime: 'Descanso longo',
              };

              return (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.duration}</td>
                  <td>{formatDate(task.startDate)}</td>
                  <td>{getTaskStatus(task, state.activeTask)}</td>
                  <td>{taskTypeMap[task.type]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </MainTemplate>
  );
}

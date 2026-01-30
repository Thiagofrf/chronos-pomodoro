import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getCycleType } from '../../utils/getCycleType';
import { getNextCycle } from '../../utils/getNextCycle';

import styles from './Tips.module.css';

export function Tips() {
  const { state } = useTaskContext();

  const activeTaskTips = {
    workTime: (
      <span>
        <b>Foque</b> por <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        <b>Descanse</b> por <b>{state.config.shortBreakTime}min.</b>
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Descanso longo</b> de <b>{state.config.longBreakTime}min.</b>
      </span>
    ),
  };

  const noActiveTaskTips = {
    workTime: (
      <span>
        O próximo ciclo é de <b>{state.config.workTime} min.</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        O próximo descanso é de <b>{state.config.shortBreakTime} min.</b>
      </span>
    ),
    longBreakTime: (
      <span>
        O próximo descanso será longo: <b>{state.config.longBreakTime} min.</b>
      </span>
    ),
  };

  return (
    <p className={styles.formHelper}>
      {state.activeTask && activeTaskTips[state.activeTask.type]}
      {!state.activeTask &&
        noActiveTaskTips[getCycleType(getNextCycle(state.currentCycle))]}
    </p>
  );
}

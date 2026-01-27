import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getCycleType } from '../../utils/getCycleType';
import { getNextCycle } from '../../utils/getNextCycle';

import styles from './Cycles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleIterations = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };

  return (
    <div className={styles.formCycles}>
      Ciclos:{' '}
      <div className={styles.cycles}>
        {cycleIterations.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getCycleType(nextCycle);
          return (
            <span
              className={`${styles.cycle} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              key={`${nextCycleType}_${nextCycle}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

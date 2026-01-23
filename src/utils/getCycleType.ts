import { TaskModel } from '../models/TaskModel';

export function getCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle === 8) return 'longBreakTime';
  if (currentCycle % 2 === 0) return 'shortBreakTime';

  return 'workTime';
}

import { TaskStateModel } from '../../models/TaskStateModel';
import { TaskActionModel, TaskActionsTypes } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionsTypes.START_TASK: {
      return state;
    }
    case TaskActionsTypes.INTERRUPT_TASK: {
      return state;
    }
    case TaskActionsTypes.RESET_STATE: {
      return state;
    }
  }

  return state;
}

import { TaskModel } from '../../models/TaskModel';
import { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNTDOWN = 'COUNTDOWN',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS',
  COMPLETE_TASK = 'COMPLETE_TASK',
}

export type TaskActionModel =
  | {
      type: TaskActionsTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionsTypes.COUNTDOWN;
      payload: { secondsRemaining: number; formattedSecondsRemaining?: string };
    }
  | {
      type: TaskActionsTypes.CHANGE_SETTINGS;
      payload: TaskStateModel['config'];
    }
  | {
      type: TaskActionsTypes.INTERRUPT_TASK;
    }
  | {
      type: TaskActionsTypes.COMPLETE_TASK;
    }
  | {
      type: TaskActionsTypes.RESET_STATE;
    };

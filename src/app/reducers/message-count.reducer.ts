import { Action } from '@ngrx/store';

export const messageCountActions = {
  MESSAGE_COUNT_INCREMENT: 'MESSAGE_COUNT_INCREMENT',
  MESSAGE_COUNT_RESET: 'MESSAGE_COUNT_RESET'
};

export function messageCountReducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case messageCountActions.MESSAGE_COUNT_INCREMENT:
      return state + 1;
    case messageCountActions.MESSAGE_COUNT_RESET:
      return 0;
    default:
      return state;
  }
}

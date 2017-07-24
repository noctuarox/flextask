import { Action } from '@ngrx/store';
import { AmbassadorModel } from '../models/ambassador.model';
import * as moment from 'moment';

export const ambassadorActions = {
  AMBASSADOR_DELETE: 'AMBASSADOR_DELETE',
  AMBASSADOR_ADD: 'AMBASSADOR_ADD',
  AMBASSADOR_UPDATE: 'AMBASSADOR_UPDATE',
};

const INITIAL_STATE: AmbassadorModel[] = [
  {
    id: '1',
    name: 'Franklin Elliott',
    birthDate: moment('101090', 'ddmmyy'),
    location: 'USA',
    costPerPost: {
      amount: 42,
      currency: 'USD'
    },
    social: {
      facebook: 'fb://url'
    }
  },
  {
    id: '2',
    name: 'Branklin Glliott',
    birthDate: moment('101090', 'ddmmyy'),
    location: 'GER',
    costPerPost: {
      amount: 123,
      currency: 'EUR'
    },
    social: {
      twitter: 'tw://url'
    }
  }
];

export function ambassadorReducer(state: AmbassadorModel[] = INITIAL_STATE, action: Action): AmbassadorModel[] {
  switch (action.type) {
    case ambassadorActions.AMBASSADOR_ADD:
      return [...state, {
        id: String(Math.random()),
        name: 'Unknown',
        birthDate: moment(),
        location: 'CZE',
        costPerPost: {
          amount: 0,
          currency: 'EUR'
        },
        social: {}
      }];
    case ambassadorActions.AMBASSADOR_UPDATE:
      return state.map(ambassador => ambassador.id === action.payload.id ? action.payload : ambassador);
    case ambassadorActions.AMBASSADOR_DELETE:
      return state.filter(ambassador => ambassador.id !== action.payload);
    default:
      return state;
  }
}

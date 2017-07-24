import { AmbassadorModel } from './ambassador.model';

export interface AppStateModel {
  ambassadors: AmbassadorModel[];
  messageCount: number;
}

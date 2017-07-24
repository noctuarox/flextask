import { Moment } from 'moment';

export interface AmbassadorModel {
  id: string;
  name: string;
  birthDate: Moment;
  location: string;
  costPerPost: Cost;
  social: SocialList;
}

interface Cost {
  amount: number;
  currency: string;
}

export interface SocialList {
  [network: string]: string;
}

export const ambassadors: AmbassadorModel[] = [

];
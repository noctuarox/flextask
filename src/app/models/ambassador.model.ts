import { Moment } from 'moment';

export interface AmbassadorModel {
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

interface SocialList {
  [network: string]: string;
}

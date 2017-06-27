import { Component, OnInit } from '@angular/core';
import { AmbassadorModel } from '../models/ambassador.model';
import * as moment from 'moment';

@Component({
  selector: 'app-ambassador-card',
  templateUrl: './ambassador-card.component.html',
  styleUrls: ['./ambassador-card.component.scss']
})
export class AmbassadorCardComponent implements OnInit {

  isAmbassadorAvailable = true;
  ambassadorName = 'Franklin Eliott';
  ambassadorAge = 28;
  ambassadorLocation = 'USA';
  ambassadorPrice = 250;
  ambassadorCurrency = 'USD';

  ambassadorModel: AmbassadorModel[] = [
    {
      name: 'Franklin Elliott',
      birthDate: moment('101090', 'ddmmyy'),
      location: 'USA',
      costPerPost: {
        amount: 42,
        currency: 'USD'
      },
      social: {
        network: ''
      }
    }
  ];

  constructor() {
  }

  ngOnInit() {
    //age: moment().diff(moment(), 'years'),
  }

}

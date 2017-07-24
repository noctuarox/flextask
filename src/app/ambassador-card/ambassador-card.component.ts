import { Component, Input, OnInit } from '@angular/core';
import { AmbassadorModel } from '../models/ambassador.model';
import * as moment from 'moment';

@Component({
  selector: 'app-ambassador-card',
  templateUrl: './ambassador-card.component.html',
  styleUrls: ['./ambassador-card.component.scss']
})
export class AmbassadorCardComponent implements OnInit {

  @Input() ambassador: AmbassadorModel[];

  isAmbassadorAvailable = true;
  ambassadorAge = 28;
  ambassadorLocation = 'USA';
  ambassadorPrice = 250;
  ambassadorCurrency = 'USD';

  ambassadorModel: AmbassadorModel[] = [
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
        network: ''
      }
    }
  ];

  constructor() {

  }

  ngOnInit() {
    //console.log(moment('19901010', 'YYYYMMDD').diff(moment(), 'years'));
    console.info(this.ambassador, 'ambassadors');
  }

}

import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Moment } from 'moment';
import { AmbassadorModel, SocialList } from '../models/ambassador.model';
import 'rxjs/Rx';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  isModalShown: boolean;
  ambassadorForm: FormGroup;
  age: number;

  constructor(private fb: FormBuilder) {
    this.ambassadorForm = this.fb.group({
      id: '1',
      name: '',
      birthDate: '',
      location: '',
      costPerPost: this.fb.group({
        amount: '',
        currency: ''
      }),
      social: this.fb.array([
        this.fb.group({network: 'facebook', url: 'facebook_url'}),
        this.fb.group({network: 'twitter', url: 'twitter_url'}),
      ]),
    });
  }

  modalClick(): void {
    this.isModalShown = !this.isModalShown;
  }

  ambassadorFormAddSocial(): void {
    (<FormArray>this.ambassadorForm.get('social')).push(
      this.fb.group({network: '', url: ''})
    );
  }

  ambassadorFormOnSubmit(): void {
    this.age = moment(this.ambassadorForm.value.birthDate, 'YYYY-MM-DD').diff(moment(), 'years');

    const ambassador: AmbassadorModel = {
      ...this.ambassadorForm.value,
      birthDate: moment(this.ambassadorForm.value.birthDate, 'YYYY-MM-DD'),
      costPerPost: {
        ...this.ambassadorForm.value.costPerPost,
        amount: Number(this.ambassadorForm.value.costPerPost.amount)
      },
      social: this.ambassadorForm.value.social.reduce(
        (acc: SocialList, item: { network: string, url: string }) => ({...acc, [item.network]: item.url}),
        {}
      )
      //    => {
      // {[this.ambassadorForm.value.social.network]: this.ambassadorForm.value.social.url}
      //   }
      // );
    };
    this.isModalShown = !this.isModalShown;

    console.info(ambassador);
  }

  get socialControlIndices(): number[] {
    return (<FormArray>this.ambassadorForm.get('social')).controls.map((group, index) => index);
  }
}

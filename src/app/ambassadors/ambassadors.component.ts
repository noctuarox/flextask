import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppStateModel } from '../models/app-state.model';
import { Store } from '@ngrx/store';
import { AmbassadorModel } from '../models/ambassador.model';

@Component({
  selector: 'app-ambassadors',
  templateUrl: './ambassadors.component.html',
  styleUrls: ['./ambassadors.component.scss']
})
export class AmbassadorsComponent {
  detailShown = false;
  ambassadors: AmbassadorModel[];

  constructor(private route: ActivatedRoute, private store: Store<AppStateModel>) {
    this.route.params.subscribe(
      (params: {id: string}) => {
        this.detailShown = params.id !== undefined;
      }
    );

    this.store.select('ambassadors').subscribe(
      (ambassadors: AmbassadorModel[]) => {
        this.ambassadors = ambassadors;
      }
    );
  }
}

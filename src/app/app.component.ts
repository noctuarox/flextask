import { Component } from '@angular/core';
import { AppStateModel } from './models/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { messageCountActions } from './reducers/message-count.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private store: Store<AppStateModel>) {
    Observable.interval(2000).subscribe(() => {
      this.store.dispatch({type: messageCountActions.MESSAGE_COUNT_INCREMENT});
    });
  }
}

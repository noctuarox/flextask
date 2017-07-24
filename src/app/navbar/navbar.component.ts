import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../models/app-state.model';
import { messageCountActions } from '../reducers/message-count.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  messageCount: number;

  constructor(private store: Store<AppStateModel>) {
    this.store.select('messageCount').subscribe(
      (state: number) => {
        this.messageCount = state;
      }
    );
  }

  clearMessages(): void {
    this.store.dispatch({type: messageCountActions.MESSAGE_COUNT_RESET});
  }
}

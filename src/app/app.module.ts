import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { AmbassadorCardComponent } from './ambassador-card/ambassador-card.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProductsComponent } from './products/products.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Action, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ambassadorReducer } from './reducers/ambassador.reducer';
import { messageCountReducer } from './reducers/message-count.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AmbassadorsComponent,
    AmbassadorCardComponent,
    CampaignsComponent,
    PaymentsComponent,
    ProductsComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.provideStore({
      ambassadors: ambassadorReducer,
      messageCount: messageCountReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

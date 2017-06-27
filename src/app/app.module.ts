import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { AmbassadorCardComponent } from './ambassador-card/ambassador-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AmbassadorsComponent,
    AmbassadorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

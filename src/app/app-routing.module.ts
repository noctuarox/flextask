import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsComponent } from './payments/payments.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'ambassadors', component: AmbassadorsComponent},
  { path: 'campaigns', component: CampaignsComponent},
  { path: 'payments', component: PaymentsComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'ambassadors/:id', component: AmbassadorsComponent},
  { path: '', redirectTo: 'ambassadors', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

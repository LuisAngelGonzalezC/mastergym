import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexCostumersComponent } from './costumers/index-costumers/index-costumers.component';
import { AddCostumersComponent } from './costumers/add-costumers/add-costumers.component';
import { IndexPricesComponent } from './prices/index-prices/index-prices.component';
import { AddSuscriptionsComponent } from './suscriptions/add-suscriptions/add-suscriptions.component';
import { IndexSuscriptionsComponent } from './suscriptions/index-suscriptions/index-suscriptions.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'suscriptions/index',
    pathMatch: 'full'
  },
  {
    path: 'costumers/index',
    component: IndexCostumersComponent
  },
  {
    path: 'costumers/add',
    component: AddCostumersComponent
  },
  {
    path: 'costumers/edit/:id',
    component: AddCostumersComponent
  },
  {
    path: 'prices/index',
    component: IndexPricesComponent
  },
  {
    path: 'suscriptions/add',
    component: AddSuscriptionsComponent
  },
  {
    path: 'suscriptions/index',
    component: IndexSuscriptionsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

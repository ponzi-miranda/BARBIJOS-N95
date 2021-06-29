import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDeliveryPage } from './pages/new-delivery/new-delivery.page';
import { MainPage } from './pages/main/main.page';
import { DeliveriesListPage } from './pages/deliveries-list/deliveries-list.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: MainPage
  },
  {
    path: 'new-delivery',
    component: NewDeliveryPage
  },
  {
    path: 'deliveries-list',
    component: DeliveriesListPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

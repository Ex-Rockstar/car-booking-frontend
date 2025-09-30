import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ActiveRides } from './active-rides/active-rides';
import { CompletedRides } from './completed-rides/completed-rides';
import { Customers } from './customers/customers';
import { Revenue } from './revenue/revenue';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'active-rides',
    component: ActiveRides
  },
  {
    path: 'completed-rides',
    component: CompletedRides
  },
  {
    path: 'customers',
    component: Customers
  },
  {
    path: 'revenue',
    component: Revenue
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

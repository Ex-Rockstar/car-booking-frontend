import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvailabilityStatusComponent } from './availability-status/availability-status.component';
import { EarningsComponent } from './earnings/earnings.component';
import { ProfileComponent } from './profile/profile.component';
import { RideRequestsComponent } from './ride-requests/ride-requests.component';
import { RideTrackingComponent } from './ride-tracking/ride-tracking.component';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';
import { DriverGuard } from '../../core/guards/driver-guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [DriverGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'availability', component: AvailabilityStatusComponent },
      { path: 'earnings', component: EarningsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'ride-requests', component: RideRequestsComponent },
      { path: 'ride-tracking/:id', component: RideTrackingComponent },
      { path: 'vehicle-info', component: VehicleInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
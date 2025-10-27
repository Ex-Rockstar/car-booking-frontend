import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DriverRoutingModule } from './driver-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvailabilityStatusComponent } from './availability-status/availability-status.component';
import { EarningsComponent } from './earnings/earnings.component';
import { ProfileComponent } from './profile/profile.component';
import { RideRequestsComponent } from './ride-requests/ride-requests.component';
import { RideTrackingComponent } from './ride-tracking/ride-tracking.component';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AvailabilityStatusComponent,
    EarningsComponent,
    ProfileComponent,
    RideRequestsComponent,
    RideTrackingComponent,
    VehicleInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DriverRoutingModule
  ]
})
export class DriverModule { }
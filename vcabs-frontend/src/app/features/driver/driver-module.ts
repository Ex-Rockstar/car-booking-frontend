import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverRoutingModule } from './driver-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { RideRequests } from './ride-requests/ride-requests';
import { RideTracking } from './ride-tracking/ride-tracking';
import { Earnings } from './earnings/earnings';
import { Profile } from './profile/profile';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

  imports: [CommonModule, 
    DriverRoutingModule, 
    ReactiveFormsModule,Dashboard,
    RideRequests,
    RideTracking,
    Earnings,
    Profile,],
})
export class DriverModule {}

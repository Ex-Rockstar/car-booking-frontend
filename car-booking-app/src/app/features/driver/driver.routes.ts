
import { Routes } from '@angular/router';


import {TripRequestComponent} from './pages/trip-request/trip-request/trip-request.component';
import {NavigationComponent} from './pages/navigation/navigation/navigation.component';
import {EarningsComponent} from './pages/earnings/earnings/earnings.component';
import {ProfileComponent} from './pages/profile/profile/profile.component'; 

export const DRIVER_ROUTES: Routes = [
  { path: 'trips', component: TripRequestComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'earnings', component: EarningsComponent },
  { path: 'profile', component: ProfileComponent },
];

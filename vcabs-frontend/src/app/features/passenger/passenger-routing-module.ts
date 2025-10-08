import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'trip-booking',
    loadComponent: () => import('./trip-booking/trip-booking.component').then(m => m.TripBookingComponent)
  },
  {
    path: 'intercity-booking',
    loadComponent: () => import('./intercity-booking/intercity-booking.component').then(m => m.IntercityBookingComponent)
  },
  {
    path: 'rental-booking',
    loadComponent: () => import('./rental-booking/rental-booking.component').then(m => m.RentalBookingComponent)
  },
  {
    path: 'reserve-booking',
    loadComponent: () => import('./reserve-booking/reserve-booking.component').then(m => m.ReserveBookingComponent)
  },
  {
    path: 'booking-details/:id',
    loadComponent: () => import('./booking-details/booking-detail.component').then(m => m.BookingDetailsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerRoutingModule { }

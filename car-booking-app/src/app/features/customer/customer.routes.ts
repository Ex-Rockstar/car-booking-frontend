import { Routes } from '@angular/router';
import { RideBookingComponent } from './pages/ride-booking/ride-booking.component';
import { TripTrackingComponent } from './pages/trip-tracking/trip-tracking.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { TripHistoryComponent } from './pages/trip-history/trip-history.component';
import { customerGuard } from '../../core/guards/customer.guard';

export const customerRoutes: Routes = [
  { path: 'ride-booking', component: RideBookingComponent, canActivate: [customerGuard] },
  { path: 'trip-tracking', component: TripTrackingComponent, canActivate: [customerGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [customerGuard] },
  { path: 'trip-history', component: TripHistoryComponent, canActivate: [customerGuard] },
];

import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { DRIVER_ROUTES } from './features/driver/driver.routes';
import { adminRoutes } from './features/admin/admin.routes';

import { customerRoutes } from './features/customer/customer.routes';

export const APP_ROUTES: Routes = [
  {
    path: 'driver',
    children: DRIVER_ROUTES,  // all driver pages
  },
  {
    path: 'admin', children: adminRoutes 
  },
  { path: 'customer', children: customerRoutes 

  },

 { 
    path: '', redirectTo: '/customer/ride-booking', pathMatch: 'full' 
},
{ 
    path: '**', redirectTo: '/'
 }
];

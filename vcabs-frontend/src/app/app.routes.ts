import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth', 
        loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule)

    },
    {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
    },
    {
  path: 'driver',
  loadChildren: () => import('./features/driver/driver-module').then(m => m.DriverRoutingModule)
}


];

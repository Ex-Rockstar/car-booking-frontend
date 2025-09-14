import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { UserManagementComponent } from './pages/user-management/user-management/user-management.component';
import { TripOversightComponent } from './pages/trip-oversight/trip-oversight/trip-oversight.component';
import { ReportsComponent } from './pages/reports/reports/reports.component';
import { adminGuard } from '../../core/guards/admin.guard';

export const adminRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [adminGuard] },
  { path: 'user-management', component: UserManagementComponent,   canActivate: [adminGuard] },
  { path: 'trip-oversight', component: TripOversightComponent , canActivate: [adminGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [adminGuard] },
];

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Replace this with your actual role check logic
  // if (authService.isLoggedIn() && authService.getUserRole() === 'admin') {
  //   return true;
  // }

  // Redirect non-admins to home/login
  router.navigate(['/']);
  return false;
};

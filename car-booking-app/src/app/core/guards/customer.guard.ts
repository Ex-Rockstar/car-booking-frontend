import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const customerGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Only allow logged-in customers
  // if (authService.isLoggedIn() && authService.getUserRole() === 'customer') {
  //   return true;
  // }

  // 🚫 Redirect non-customers
  router.navigate(['/']);
  return false;
};

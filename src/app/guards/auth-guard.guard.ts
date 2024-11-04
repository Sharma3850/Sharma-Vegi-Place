import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

const isAuthenticated = (): boolean => {
  const user = localStorage.getItem('session');
  console.log("User session value:", user);
  return user === 'true'; 
};

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  const router = inject(Router);

  if (isAuthenticated()) {
    console.log("Access granted");
    return true;
  } else {
    console.log("Unauthorized access - redirecting to login");
    router.navigate(['']); 
    return false;
  }
};

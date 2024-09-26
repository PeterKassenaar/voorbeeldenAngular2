// canActivateViaAuthGuard.ts
// Een voorbeeld Guard die authentication service aanroept om user wel/geen toegang te verlenen.
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Observable} from "rxjs";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = this.authService.isLoggedIn();
    console.log('Is logged in? ', isLoggedIn);

    if (!isLoggedIn) {
      // user is not logged in. Redirect him to login page
      this.router.navigate(['login']);
    }

    // Must return boolean by canActivate according to its interface, so will return isLoggedIn.
    return isLoggedIn;
  }
}

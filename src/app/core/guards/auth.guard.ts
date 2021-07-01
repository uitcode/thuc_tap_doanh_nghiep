import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handle(state.root.queryParams, state.url);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handle();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handle();
  }

  protected handle(queryParams?: any, url?: string) {
    let size = Object.keys(queryParams).length;
    return this.authService.isAuthenticated.pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          let role = this.authService.getCurrentRole();
          if (role === 'admin' || role === 'constructor' || role === 'supplier') {
            return true;
          } else {
            this.router.navigateByUrl('/choose-role');
            return false;
          }
        }
        if (size > 0) {
          let queryParamsText = '';
          for (const field in queryParams) {
            queryParamsText += `${field}=${queryParams[field]}&`;
          }
          this.router.navigateByUrl(`/login?${queryParamsText.slice(0, -1)}`);
          return false;
        } else {
          this.router.navigateByUrl('/login');
          return false;
        }
      })
    );
  }
}

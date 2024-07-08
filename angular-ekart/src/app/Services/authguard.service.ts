import {inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  authService : AuthService = inject(AuthService);
  router: Router = inject(Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      //return true;

      if (this.authService.isAuthenticated()) {
        return  true;
      } else {
        this.router.navigate(['/login'])
        return false;
      }

    }

}

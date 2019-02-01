import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,
  private _router: Router) { }

  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._authService.loggedIn()) {
      console.log("inside gurad")
      if (route.data.roles == null || route.data.roles == localStorage.getItem("UserRole") ){
        return true
      }
      else{
        return false
      } 
    }
    else{
      this._router.navigate(['/login'])
      return false
    }
  }
}


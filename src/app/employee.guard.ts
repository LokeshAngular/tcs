import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem("empEmail") == null && localStorage.getItem("empPassword") == null) {
      alert("please Provide credentials");
      this.router.navigate(["/login/login.module"])
      return false
    } else {
      return true
    }
  }
}



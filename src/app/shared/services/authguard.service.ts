import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private authService:AuthService,private route:Router) { }
  canActivate(){
    if(this.authService.isAuthentificated()){
      return true;
    }
    else
    {
      this.route.navigate(['../login']);
      return false;

    }
  }
}

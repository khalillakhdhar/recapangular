import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private isAuth:boolean=false;
  constructor() { }
  login(){
    this.isAuth=true;
  }
  logout(){
    this.isAuth=false;
  }
  isAuthentificated(){
    return this.isAuth;
  }
}

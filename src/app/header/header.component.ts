import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route:Router,private authService:AuthService) { }
  logout(){
    localStorage.removeItem('connectedUser');
    localStorage.removeItem('incomes')
    this.route.navigate(['../login']);
    this.authService.logout();
  }

}

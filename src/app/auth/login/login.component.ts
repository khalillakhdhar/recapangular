import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email!: string;
  mdp!: string;
//user:any;
constructor(private userService:UserService,private router:Router,private authService:AuthService){
}
login(){
  let id=this.userService.authUser(this.email,this.mdp);
  if(id!=-1){
    console.log("utilisateur connecté",this.userService.getUserById(id));
    localStorage.setItem('connectedUser',id.toString());
    this.authService.login();
    

    this.router.navigate(['/income']);
  }
  else{
    alert("email ou mot de passe incorrect");
  }
}
}

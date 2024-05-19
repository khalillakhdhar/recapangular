import { Component } from '@angular/core';
import { User } from '../../shared/classes/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
user={} as User;
// injecter le service user dans le constructeur
constructor(private userService:UserService){

}
inscription()
{
  this.userService.addUser(this.user);
  console.log("utilisateur",this.userService.getUsers()); // verifier si l'utilisateur est bien ajouté
  this.user={} as User; // vider les champs
}


}

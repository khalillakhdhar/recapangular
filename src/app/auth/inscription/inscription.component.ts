import { Component } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
user={} as User;
}

import { Component } from '@angular/core';
import { Achat } from '../../shared/classes/achat';
import { AchatService } from '../../shared/services/achat.service';

@Component({
  selector: 'app-add-achat',
  templateUrl: './add-achat.component.html',
  styleUrl: './add-achat.component.css'
})
export class AddAchatComponent {
achat={} as Achat;
  constructor(private achatService:AchatService){
}
addAchat(){
  this.achatService.addAchat(this.achat).subscribe(
    (response) => {
      console.log("response",response);
    },
    (error) => {
      console.log("error",error);
    }
  
  );
  this.achat={} as Achat;
  //window.location.reload();
}
}

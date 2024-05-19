import { Component } from '@angular/core';
import { AchatService } from '../../shared/services/achat.service';

@Component({
  selector: 'app-list-achat',
  templateUrl: './list-achat.component.html',
  styleUrl: './list-achat.component.css'
})
export class ListAchatComponent {
  achats:any;
  somme:number=0;
  constructor(private achatService:AchatService) {
    this.getAchats()
    //console.log("achats",this.achats);
   // this.calculer();
  }
  getAchats(){
    this.achatService.getAchats().subscribe(
      (response) => {
        this.achats=response;
        console.log("achats",this.achats);
        for(let achat of this.achats){
          this.somme+=(achat.montant*achat.quantite);
          
        }
        console.log("somme",this.somme);
      }
    );

  }
  deleteAchat(id:number){
    if(confirm("Voulez-vous vraiment supprimer cet achat?"))
      {
    this.achatService.deleteAchat(id);
    this.getAchats();
      }
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
url="https://647f3d36c246f166da90635e.mockapi.io/achat" // fake backend api
  constructor(private http:HttpClient) { }
  addAchat(achat:any){
    return this.http.post(this.url,achat);
  }
  getAchats(){
    return this.http.get(this.url);
  }
  deleteAchat(id:number){
    return this.http.delete(this.url+"/"+id);
  }
  calculeAchats(){
    let total=0;
    this.getAchats().subscribe((data:any)=>{
      data.forEach((a:any)=>{
        total+=a.montant*a.quantite;
      })
    })
    return total;
  }
}

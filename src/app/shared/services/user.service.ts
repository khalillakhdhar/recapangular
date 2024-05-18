import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users=JSON.parse(localStorage.getItem('users') ||'') || [];
  constructor() { }
  addUser(user:any){
    this.users.push(user);
    localStorage.setItem('users',JSON.stringify(this.users));
  }
  getUsers(){
    return this.users;
  }
  getUserById(id:number){
return this.users[id];
  }
  deleteUser(id:number){
    this.users.splice(id,1);
    localStorage.setItem('users',JSON.stringify(this.users));
  }
  authUser(email:string,mdp:string):number{
    let user=this.users.find((u:any)=>u.email==email && u.mdp==mdp);
    if(user){
      localStorage.setItem('connectedUser',this.users.indexOf(user));
      return this.users.indexOf(user);

    }
    return -1;
  }
}

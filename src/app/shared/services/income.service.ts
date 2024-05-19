import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

incomes: any =  [];


  constructor() { 
// verifier si incomes existe dans le local storage
    if(!localStorage.getItem('incomes')){
      localStorage.setItem('incomes',JSON.stringify([]));
    }
        
    this.incomes=this.getIncomes();
    console.log("incomes",this.incomes);
  }
  addIncome(income:any){
    this.incomes.push(income);
    localStorage.setItem('incomes',JSON.stringify(this.incomes));
  }
  getIncomes(){
    return JSON.parse(localStorage.getItem('incomes') ||'') || [];
  }
  deleteIncome(id:number){
    this.incomes.splice(id,1);
    localStorage.setItem('incomes',JSON.stringify(this.incomes));
  }
  calculeIncomes(){
    let total=0;
    this.incomes.forEach((i:any)=>{
      total+=i.montant;
    })
    return total;
  }
}

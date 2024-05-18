import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {
incomes=JSON.parse(localStorage.getItem('incomes') ||'') || [];
  constructor() { }
  addIncome(income:any){
    this.incomes.push(income);
    localStorage.setItem('incomes',JSON.stringify(this.incomes));
  }
  getIncomes(){
    return this.incomes;
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

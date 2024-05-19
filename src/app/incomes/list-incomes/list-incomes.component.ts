import { Component } from '@angular/core';
import { IncomeService } from '../../shared/services/income.service';

@Component({
  selector: 'app-list-incomes',
  templateUrl: './list-incomes.component.html',
  styleUrl: './list-incomes.component.css'
})
export class ListIncomesComponent {
  incomes:any;
  somme:number=0;
  constructor(private incomeService:IncomeService) { 
this.incomes=this.getIncomes();
console.log("incomes",this.incomes);
this.calculer();

  }

  getIncomes(){
    this.calculer();
    return this.incomeService.getIncomes();

  }
  deleteIncome(id:number){
    if(confirm("Voulez-vous vraiment supprimer cet income?"))
      {
    this.incomeService.deleteIncome(id);
    this.incomes=this.getIncomes();
      }
  }
  calculer()
  {
    this.somme= this.incomeService.calculeIncomes();
  }
}

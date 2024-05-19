import { Component } from '@angular/core';
import { Income } from '../shared/classes/income';
import { IncomeService } from '../shared/services/income.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrl: './incomes.component.css'
})
export class IncomesComponent {
income={} as Income;
constructor(private incomeService:IncomeService){
}
addIncome(){
  this.incomeService.addIncome(this.income);
  console.log("income",this.incomeService.getIncomes());
  this.income={} as Income;
}
}

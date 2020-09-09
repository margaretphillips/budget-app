import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../services/income.service';
import { Income } from '../../models/Income';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
incomes: Income[];
totalIncome:number;

  constructor(private incomeService: IncomeService) { }

  ngOnInit() {
    this.incomeService.getIncomes().subscribe(incomes =>{
      this.incomes = incomes;
      this.getIncomesTotal();
    }
  );
  }

  getIncomesTotal(){
    this.totalIncome = this.incomes.reduce((total,income)=>{
      return total + income.amount;
    },0);
  }

}

import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-expenses-fluid',
  templateUrl: './expenses-fluid.component.html',
  styleUrls: ['./expenses-fluid.component.css']
})
export class ExpensesFluidComponent implements OnInit {
  totalAmtDue:number;
  expenses=[
        {
             name:"Mortgage",
             amount:370,
             due:'1st',
             status:'Open'
        },
        {
          name:"Electric",
          amount:200,
          due:'1st',
          status:'Open'
        },
        {
        name:"Internet",
        amount:90,
        due:'1st',
        status:'Open'
        },
        {
        name:"Car Insurance",
        amount:70,
        due:'1st',
        status:'Open'
        }
    ]
  constructor() { }

  ngOnInit() {
    this.totalAmtDue=this.expenses[0].amount+this.expenses[1].amount+this.expenses[2].amount+this.expenses[3].amount;
 
  }

}

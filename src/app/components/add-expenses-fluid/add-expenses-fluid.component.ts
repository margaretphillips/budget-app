import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-add-expenses-fluid',
  templateUrl: './add-expenses-fluid.component.html',
  styleUrls: ['./add-expenses-fluid.component.css']
})
export class AddExpensesFluidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

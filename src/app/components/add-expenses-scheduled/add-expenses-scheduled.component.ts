import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-add-expenses-scheduled',
  templateUrl: './add-expenses-scheduled.component.html',
  styleUrls: ['./add-expenses-scheduled.component.css']
})
export class AddExpensesScheduledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

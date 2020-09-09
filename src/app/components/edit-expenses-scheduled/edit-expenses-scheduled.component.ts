import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-edit-expenses-scheduled',
  templateUrl: './edit-expenses-scheduled.component.html',
  styleUrls: ['./edit-expenses-scheduled.component.css']
})
export class EditExpensesScheduledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

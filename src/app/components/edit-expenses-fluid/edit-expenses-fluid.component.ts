import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/Expense';

@Component({
  selector: 'app-edit-expenses-fluid',
  templateUrl: './edit-expenses-fluid.component.html',
  styleUrls: ['./edit-expenses-fluid.component.css']
})
export class EditExpensesFluidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

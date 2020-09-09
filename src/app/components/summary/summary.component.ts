import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  income:number;
  expense:number;
  final:number;
  billable:number;
  invoiced:number;
  credit:number;
  paypal:number;
  netspend:number;
  merrill:number;
  nutrition:number;
  cash:number;

  constructor() { 

    this.billable=1400;
    this.invoiced=500;
    this.credit=359;
    this.paypal=59;
    this.netspend=1800;
    this.merrill=0;
    this.nutrition=0;
    this.cash=0;
    this.income = this.paypal+this.netspend+this.merrill+this.nutrition+this.cash;
    this.expense = 1300;
    this.final = this.income-this.expense;
  }

  ngOnInit() {
  }

}

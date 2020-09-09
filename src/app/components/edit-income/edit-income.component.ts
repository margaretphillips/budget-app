import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { IncomeService } from '../../services/income.service';
import { Income } from '../../models/Income';

@Component({
  selector: 'app-edit-income',
  templateUrl: './edit-income.component.html',
  styleUrls: ['./edit-income.component.css']
})
export class EditIncomeComponent implements OnInit {
  income:Income={
    name:'',
    amount:0,
    due:'',
    status:''
  }
  constructor(public router:Router, 
    public incomeService:IncomeService) { }

  ngOnInit() {
  }

  onSubmit({value,valid}:{value:Income, valid:boolean}){
    if(!valid){
      //this.flashMessageService.show("Please fill in all fields",{cssClass:"alert-danger", timeout:4000});
      this.router.navigate(['edit-income']);
    }else{
      this.incomeService.updateIncome(value);
      //this.flashMessageService.show("New Income Added",{cssClass:"alert-success", timeout:4000});
      this.router.navigate(['/']);
    }
  }

}

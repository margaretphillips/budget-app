import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

//AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SummaryComponent } from './components/summary/summary.component';
import { ExpensesScheduledComponent } from './components/expenses-scheduled/expenses-scheduled.component';
import { ExpensesFluidComponent } from './components/expenses-fluid/expenses-fluid.component';
import { IncomeComponent } from './components/income/income.component';
import { MainSectionComponent } from './components/main-section/main-section.component';

//services
import { IncomeService } from './services/income.service';
import { ExpenseService } from './services/expense.service';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { EditIncomeComponent } from './components/edit-income/edit-income.component';
import { AddExpensesFluidComponent } from './components/add-expenses-fluid/add-expenses-fluid.component';
import { AddExpensesScheduledComponent } from './components/add-expenses-scheduled/add-expenses-scheduled.component';
import { EditExpensesScheduledComponent } from './components/edit-expenses-scheduled/edit-expenses-scheduled.component';
import { EditExpensesFluidComponent } from './components/edit-expenses-fluid/edit-expenses-fluid.component';


const appRoutes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'add-income', component: AddIncomeComponent },
  { path: 'edit-income', component: EditIncomeComponent },
  { path: 'expenses-scheduled', component: ExpensesScheduledComponent },
  { path: 'add-expenses-scheduled', component: AddExpensesScheduledComponent },
  { path: 'edit-expenses-scheduled', component: EditExpensesScheduledComponent },
  { path: 'add-expenses-fluid', component: AddExpensesFluidComponent },
  { path: 'edit-expenses-fluid', component: EditExpensesFluidComponent },
  { path: 'expenses-fluid', component: ExpensesFluidComponent }
];

export const firebaseConfig = {
  //removed for git
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SummaryComponent,
    ExpensesScheduledComponent,
    ExpensesFluidComponent,
    IncomeComponent,
    MainSectionComponent,
    AddIncomeComponent,
    EditIncomeComponent,
    AddExpensesFluidComponent,
    AddExpensesScheduledComponent,
    EditExpensesScheduledComponent,
    EditExpensesFluidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFirestore,
    IncomeService,
    ExpenseService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

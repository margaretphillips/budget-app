import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Income } from '../models/Income';

@Injectable()
export class IncomeService {
incomesCollection: AngularFirestoreCollection<Income>;
incomesDoc: AngularFirestoreCollection<Income>;
incomes: Observable<Income[]>;
income: Observable<Income>;

  constructor(private afs: AngularFirestore) { 
    this.incomesCollection = this.afs.collection("incomes");
  }

 

  getIncomes(): Observable<Income[]>{
    this.incomes = this.incomesCollection.snapshotChanges()
    .map(changes=>{
      return changes.map(action=>{
        const data = action.payload.doc.data() as Income;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.incomes;
  }

  newIncome(income:Income){
    //this.incomes.push(income);
    return true;
  }

  updateIncome(income:Income){
    //this.incomes.push(income);
    return true;
  }


}

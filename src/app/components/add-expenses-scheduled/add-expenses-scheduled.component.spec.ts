import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensesScheduledComponent } from './add-expenses-scheduled.component';

describe('AddExpensesScheduledComponent', () => {
  let component: AddExpensesScheduledComponent;
  let fixture: ComponentFixture<AddExpensesScheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpensesScheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpensesScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

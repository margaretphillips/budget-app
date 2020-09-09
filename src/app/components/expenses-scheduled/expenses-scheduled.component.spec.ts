import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesScheduledComponent } from './expenses-scheduled.component';

describe('ExpensesScheduledComponent', () => {
  let component: ExpensesScheduledComponent;
  let fixture: ComponentFixture<ExpensesScheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesScheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

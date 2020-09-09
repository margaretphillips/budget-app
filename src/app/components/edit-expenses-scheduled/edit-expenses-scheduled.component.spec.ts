import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpensesScheduledComponent } from './edit-expenses-scheduled.component';

describe('EditExpensesScheduledComponent', () => {
  let component: EditExpensesScheduledComponent;
  let fixture: ComponentFixture<EditExpensesScheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExpensesScheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpensesScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

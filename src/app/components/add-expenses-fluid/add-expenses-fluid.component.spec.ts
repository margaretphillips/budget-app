import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensesFluidComponent } from './add-expenses-fluid.component';

describe('AddExpensesFluidComponent', () => {
  let component: AddExpensesFluidComponent;
  let fixture: ComponentFixture<AddExpensesFluidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpensesFluidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpensesFluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

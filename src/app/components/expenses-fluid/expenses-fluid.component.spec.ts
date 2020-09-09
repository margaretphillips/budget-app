import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesFluidComponent } from './expenses-fluid.component';

describe('ExpensesFluidComponent', () => {
  let component: ExpensesFluidComponent;
  let fixture: ComponentFixture<ExpensesFluidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesFluidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesFluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

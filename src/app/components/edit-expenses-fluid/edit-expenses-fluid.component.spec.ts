import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpensesFluidComponent } from './edit-expenses-fluid.component';

describe('EditExpensesFluidComponent', () => {
  let component: EditExpensesFluidComponent;
  let fixture: ComponentFixture<EditExpensesFluidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExpensesFluidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExpensesFluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIncomeExpenseComponent } from './modal-income-expense.component';

describe('ModalIncomeExpenseComponent', () => {
  let component: ModalIncomeExpenseComponent;
  let fixture: ComponentFixture<ModalIncomeExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIncomeExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIncomeExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

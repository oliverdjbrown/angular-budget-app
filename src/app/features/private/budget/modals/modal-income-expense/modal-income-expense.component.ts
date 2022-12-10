import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { TypeTransaction } from 'src/app/core/enum/type-transaction';
import { Category } from 'src/app/core/interfaces/category.interface';
import { BudgetStorageService } from '../../services/budget-storage.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'modal-income-expense',
  templateUrl: './modal-income-expense.component.html',
  styleUrls: ['./modal-income-expense.component.scss'],
})
export class ModalIncomeExpenseComponent implements OnInit {
  @Input() selectedTransaction!: TypeTransaction;
  @Input() selectedCategory!: Category;
  categories$!: Observable<Category[]>;
  typeTransaction = TypeTransaction;

  form = this.fb.group({
    amount: [null, Validators.required],
    categoryId: [0, Validators.required],
    note: [''],
  });

  constructor(
    private categoryService: CategoryService,
    private budgetStorageService: BudgetStorageService,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.form.get('categoryId')?.setValue(this.selectedCategory?.id);

    this.categories$ = this.categoryService.categories$.pipe(
      map((cat: Category[]) =>
        cat.filter(
          (type: Category) => type.typeTransaction === this.selectedTransaction
        )
      )
    );
  }

  saveTransaction(): void {
    const { amount, categoryId, note } = this.form.value;
    const date = new Date().toLocaleString();
    this.budgetStorageService.addTransaction({
      id: this.budgetStorageService.generateTransactionId(),
      categoryId: Number(categoryId),
      icon: this.selectedCategory?.icon,
      amount:
        this.selectedTransaction === this.typeTransaction.incomes
          ? amount
          : -Math.abs(amount),
      note,
      date,
      typeTransaction: this.selectedTransaction,
    });
    this.activeModal.close();
  }
}

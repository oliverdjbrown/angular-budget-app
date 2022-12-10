import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable } from 'rxjs';
import { TypeTransaction } from 'src/app/core/enum/type-transaction';
import { Category } from 'src/app/core/interfaces/category.interface';
import { ModalIncomeExpenseComponent } from '../../modals/modal-income-expense/modal-income-expense.component';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  categories$!: Observable<Category[]>;
  typeTransaction = TypeTransaction;

  constructor(
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.categories$.pipe(
      map((cat: Category[]) =>
        cat.filter(
          (type: Category) => type.typeTransaction === TypeTransaction.expense
        )
      )
    );
  }

  openModal(
    typeTransaction: TypeTransaction,
    selectedCategory?: Category
  ): void {
    const modal = this.modalService.open(ModalIncomeExpenseComponent);
    modal.componentInstance.selectedCategory = selectedCategory;
    modal.componentInstance.selectedTransaction = typeTransaction;
  }
}

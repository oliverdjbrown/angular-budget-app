import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './components/budget/budget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalIncomeExpenseComponent } from './modals/modal-income-expense/modal-income-expense.component';
import { ModalTransactionComponent } from './modals/modal-transaction/modal-transaction.component';
import { TransactionTypePipe } from './pipes/transaction-type.pipe';
import { CategoryPipe } from './pipes/category.pipe';

const components = [
    BudgetComponent,
    ModalIncomeExpenseComponent,
    ModalTransactionComponent,
    TransactionTypePipe,
    CategoryPipe
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    SharedModule,
    BudgetRoutingModule,    
  ]
})
export class BudgetModule { }

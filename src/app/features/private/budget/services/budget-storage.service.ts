import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { TRANSACTION } from 'src/app/core/interfaces/transaction.interface';
import { budgetMock } from 'src/app/mocks/budgetStorage.mock';

@Injectable({
  providedIn: 'root',
})
export class BudgetStorageService {
  private budgetStorage = new BehaviorSubject<TRANSACTION[]>(budgetMock);
  public budgetStorage$ = this.budgetStorage.asObservable();

  constructor(private toastr: ToastrService) {}

  addTransaction(transaction: TRANSACTION): void {
    const newTransaction = [...this.budgetStorage.value, transaction];
    this.budgetStorage.next(newTransaction);
    this.showToast(transaction);
  }

  generateTransactionId(): number {
    return this.budgetStorage.value.length + 1;
  }

  showToast(transaction: TRANSACTION): void {
    this.toastr.success(
      `transacción realizada por un monto de ${transaction.amount.toLocaleString()} en fecha ${
        transaction.date
      } con la nota de ${transaction.note || 'sin comentario'}`,
      'Transacción realizada'
    );
  }
}

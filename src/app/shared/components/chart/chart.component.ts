import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { TypeTransaction } from 'src/app/core/enum/type-transaction';
import { TRANSACTION } from 'src/app/core/interfaces/transaction.interface';
import { BudgetStorageService } from 'src/app/features/private/budget/services/budget-storage.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  series = [];
  labels = ['Ingresos', 'Gastos'];

  constructor(private budgetStorageService: BudgetStorageService) {}

  ngOnInit(): void {
    this.budgetStorageService.budgetStorage$
      .pipe(
        map((transactions: TRANSACTION[]) => [
          transactions
            .filter(
              (v: TRANSACTION) => v.typeTransaction === TypeTransaction.incomes
            )
            .map((v: TRANSACTION) => v.amount)
            .reduce((acc, curr) => acc + curr, 0),
          transactions
            .filter(
              (v: TRANSACTION) => v.typeTransaction === TypeTransaction.expense
            )
            .map((v: TRANSACTION) => Math.abs(v.amount))
            .reduce((acc, curr) => acc + curr, 0),
        ])
      )
      .subscribe((series) => {
        this.series = series;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable} from 'rxjs';
import { TRANSACTION } from 'src/app/core/interfaces/transaction.interface';
import { ModalTransactionComponent } from 'src/app/features/private/budget/modals/modal-transaction/modal-transaction.component';
import { BudgetStorageService } from 'src/app/features/private/budget/services/budget-storage.service';

@Component({
  selector: 'balance-status',
  templateUrl: './balance-status.component.html',
  styleUrls: ['./balance-status.component.scss'],
})
export class BalanceStatusComponent implements OnInit {
  balance$!: Observable<number>;
  color: string = 'success';

  constructor(
    private budgetStorageService: BudgetStorageService,
    private modalService: NgbModal
    ) {}

  ngOnInit(): void {    
    this.balance$ = this.budgetStorageService.budgetStorage$.pipe(
      map((val: TRANSACTION[]) =>
        val.reduce((acc, curr) => acc + curr.amount, 0)
      )
    );
  }

  openModal(): void {
    this.modalService.open(ModalTransactionComponent, { size: 'xl' });
  }
}

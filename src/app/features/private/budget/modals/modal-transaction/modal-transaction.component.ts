import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { TRANSACTION } from 'src/app/core/interfaces/transaction.interface';
import { BudgetStorageService } from '../../services/budget-storage.service';

@Component({
  selector: 'app-modal-transaction',
  templateUrl: './modal-transaction.component.html',
  styleUrls: ['./modal-transaction.component.scss']
})
export class ModalTransactionComponent implements OnInit {
  transactions$!: Observable<TRANSACTION[]>;
  
  constructor(
    private budgetStorageService: BudgetStorageService,
    public activeModal: NgbActiveModal
    ) { }
    
  ngOnInit(): void {
    this.transactions$ = this.budgetStorageService.budgetStorage$;
  }
}

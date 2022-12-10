import { Pipe, PipeTransform } from '@angular/core';
import { TypeTransaction } from 'src/app/core/enum/type-transaction';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(transactionType: TypeTransaction): unknown {
    const transactions = {
      1: 'Ingresos',
      2: 'Gastos'
    }    
    return transactions[transactionType];
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { TRANSACTION } from 'src/app/core/interfaces/transaction.interface';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  transform(items: TRANSACTION[], attr: string): any {
    return items.reduce((acc, curr)=> acc + curr[attr], 0);     
  }

}

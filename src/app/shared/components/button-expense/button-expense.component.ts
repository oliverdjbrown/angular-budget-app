import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'button-expense',
  templateUrl: './button-expense.component.html',
  styleUrls: ['./button-expense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonExpenseComponent {
  @Input() color: string = 'primary';
  @Input() class: string = '';
  @Input() text: string = '';
}

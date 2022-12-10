import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent {
  @Input() color: string = 'primary';
  @Input() class: string = '';  
}

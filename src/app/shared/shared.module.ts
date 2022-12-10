import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { ButtonExpenseComponent } from './components/button-expense/button-expense.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgModule } from '@angular/core';
import { BalanceStatusComponent } from './components/balance-status/balance-status.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumPipe } from './pipes/sum.pipe';
import { NgxPrintElementModule } from 'ngx-print-element';

const components = [
  IconComponent,
  ButtonExpenseComponent,
  TopbarComponent,
  BalanceStatusComponent,
  ButtonActionComponent
];

const libraries = [  
  ReactiveFormsModule,
  FormsModule,
  NgxPrintElementModule
]

const pipes = [
  SumPipe
]

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, ...libraries],
  exports: [...components, ...libraries, ...pipes],
})
export class SharedModule {}

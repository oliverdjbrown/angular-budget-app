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
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartComponent } from './components/chart/chart.component';

const components = [
  IconComponent,
  ButtonExpenseComponent,
  TopbarComponent,
  BalanceStatusComponent,
  ButtonActionComponent,
  ChartComponent
];

const libraries = [  
  ReactiveFormsModule,
  FormsModule,
  NgxPrintElementModule,
  NgApexchartsModule
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

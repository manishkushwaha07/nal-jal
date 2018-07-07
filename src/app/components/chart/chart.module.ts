import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ReadPieChartComponent } from './read-pie-chart/read-pie-chart.component';
import { DcbBarChartComponent } from './dcb-bar-chart/dcb-bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [ReadPieChartComponent, DcbBarChartComponent],
  exports: [ReadPieChartComponent,DcbBarChartComponent]
  
})
export class ChartModule { }

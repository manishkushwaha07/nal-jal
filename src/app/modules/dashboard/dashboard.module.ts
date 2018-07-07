import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardWaterWorksReadViewComponent } from './dashboard-water-works-read-view/dashboard-water-works-read-view.component';
import { ReadModule } from '../../components/read/read.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReadModule
  ],
  declarations: [DashboardComponent,
  DashboardHomeComponent,
  DashboardWaterWorksReadViewComponent]
})
export class DashboardModule { }

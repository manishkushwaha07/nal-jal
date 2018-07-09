import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardWaterWorksReadViewComponent } from './dashboard-water-works-read-view/dashboard-water-works-read-view.component';
import { ReadModule } from '../../components/read/read.module';
import { DashboardWaterWorksBillViewComponent } from './dashboard-water-works-bill-view/dashboard-water-works-bill-view.component';
import { BillModule } from '../../components/bill/bill.module';
import { DashboardMenuService } from 'src/app/modules/dashboard/dashboard-menu.service';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReadModule,
    BillModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardWaterWorksReadViewComponent,
    DashboardWaterWorksBillViewComponent
  ],
  providers: [
    DashboardMenuService
  ],
})
export class DashboardModule { }

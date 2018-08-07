import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardReportsComponent } from './dashboard-reports.component';
import { DashboardReportsHomeComponent } from './dashboard-reports-home/dashboard-reports-home.component';
import { DashboardReportsMenuService } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-menu.service';
import { DashboardReportsRoutingModule } from 'app/modules/dashboard/dashboard-reports/dashboard-reports.routing';
import { DashboardReportsWaterWorksReadViewComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-water-works-read-view/dashboard-reports-water-works-read-view.component';
import { DashboardReportsWaterWorksBillViewComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-water-works-bill-view/dashboard-reports-water-works-bill-view.component';
import { DashboardReportsWaterWorksZeroReadViewComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-water-works-zero-read-view/dashboard-reports-water-works-zero-read-view.component';
import { DashboardReportsWaterWorksAssessedReadViewComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-water-works-assessed-read-view/dashboard-reports-water-works-assessed-read-view.component';
import { BillComponentModule } from '../../../components/bill/bill-component.module';
import { ReadComponentModule } from '../../../components/read/read-component.module';


@NgModule({
  imports: [
    CommonModule,
    DashboardReportsRoutingModule,
    BillComponentModule,
    ReadComponentModule
  ],
  declarations: [
    DashboardReportsComponent,
    DashboardReportsHomeComponent,
    DashboardReportsWaterWorksReadViewComponent,
    DashboardReportsWaterWorksBillViewComponent,
    DashboardReportsWaterWorksZeroReadViewComponent,
    DashboardReportsWaterWorksAssessedReadViewComponent,
  ],
  providers: [
    DashboardReportsMenuService
  ],
})
export class DashboardReportsModule { }

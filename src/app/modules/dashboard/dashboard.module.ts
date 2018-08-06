import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardWaterWorksReadViewComponent } from './dashboard-water-works-read-view/dashboard-water-works-read-view.component';
import { ReadModule } from '../../components/read/read.module';
import { DashboardWaterWorksBillViewComponent } from './dashboard-water-works-bill-view/dashboard-water-works-bill-view.component';
import { BillModule } from '../../components/bill/bill.module';
import { DashboardMenuService } from 'app/modules/dashboard/dashboard-menu.service';
import { DashboardWaterWorksAssessedReadViewComponent } from './dashboard-water-works-assessed-read-view/dashboard-water-works-assessed-read-view.component';
import { DashboardWaterWorksZeroReadViewComponent } from './dashboard-water-works-zero-read-view/dashboard-water-works-zero-read-view.component';
import { FooterComponentModule } from 'app/components/footer/footer-component.module';
import { NavbarComponentModule } from 'app/components/navbar/navbar-component.module';
import { DashboardNestedFormComponent } from './dashboard-nested-form/dashboard-nested-form.component';
import { NestedFormSampleComponentModule } from 'app/components/nested-form-sample/nested-form-sample-component.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReadModule,
    BillModule,
    FooterComponentModule,
    NavbarComponentModule,
    NestedFormSampleComponentModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    DashboardWaterWorksReadViewComponent,
    DashboardWaterWorksBillViewComponent,
    DashboardWaterWorksAssessedReadViewComponent,
    DashboardWaterWorksZeroReadViewComponent,
    DashboardNestedFormComponent
  ],
  providers: [
    DashboardMenuService
  ],
})
export class DashboardModule { }

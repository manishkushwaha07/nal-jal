import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardReportsComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports.component';
import { DashboardReportsHomeComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-home/dashboard-reports-home.component';
import { DashboardReportsWaterWorksBillViewComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-water-works-bill-view/dashboard-reports-water-works-bill-view.component';
import { DashboardReportsWaterWorksReadViewComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-water-works-read-view/dashboard-reports-water-works-read-view.component';
import { DashboardReportsWaterWorksZeroReadViewComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-water-works-zero-read-view/dashboard-reports-water-works-zero-read-view.component';
import { DashboardReportsWaterWorksAssessedReadViewComponent } from 'app/modules/dashboard/dashboard-reports/dashboard-reports-water-works-assessed-read-view/dashboard-reports-water-works-assessed-read-view.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardReportsComponent,
    children: [
      { path: 'home', component: DashboardReportsHomeComponent },
      { path: 'water-works/bill/view', component: DashboardReportsWaterWorksBillViewComponent },
      { path: 'water-works/read/view', component: DashboardReportsWaterWorksReadViewComponent },
      { path: 'water-works/zero/read/view', component: DashboardReportsWaterWorksZeroReadViewComponent },
      { path: 'water-works/assessed/read/view', component: DashboardReportsWaterWorksAssessedReadViewComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardReportsRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardWaterWorksReadViewComponent } from './dashboard-water-works-read-view/dashboard-water-works-read-view.component';
import { DashboardWaterWorksZeroReadViewComponent } from './dashboard-water-works-zero-read-view/dashboard-water-works-zero-read-view.component';
import { DashboardWaterWorksAssessedReadViewComponent } from './dashboard-water-works-assessed-read-view/dashboard-water-works-assessed-read-view.component';
import { CanActivateAuthGuard } from 'app/guards/can-activate.authguard';
import { DashboardWaterWorksBillViewComponent } from 'app/modules/dashboard/dashboard-water-works-bill-view/dashboard-water-works-bill-view.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [CanActivateAuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [CanActivateAuthGuard],
        children: [
          {
            path: 'home',
            component: DashboardHomeComponent
          },
          {
            path: 'water-works/read/view',
            component: DashboardWaterWorksReadViewComponent
          },
          {
            path: 'water-works/bill/view',
            component: DashboardWaterWorksBillViewComponent
          },
          {
            path: 'water-works/assessed/read/view',
            component: DashboardWaterWorksAssessedReadViewComponent
          },
          {
            path: 'water-works/zero/read/view',
            component: DashboardWaterWorksZeroReadViewComponent
          },
          {
            path: '', 
            redirectTo: 'home', 
            pathMatch: 'full'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
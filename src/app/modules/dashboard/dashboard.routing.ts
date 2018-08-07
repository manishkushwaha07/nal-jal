import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAuthGuard } from 'app/guards/can-activate.authguard';
import { DashboardComponent } from 'app/modules/dashboard/dashboard.component';
import { DashboardHomeComponent } from 'app/modules/dashboard/dashboard-home/dashboard-home.component';

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
            path: 'reports',
            loadChildren:'app/modules/dashboard/dashboard-reports/dashboard-reports.module#DashboardReportsModule'
          },
          {
            path: 'tutorial',
            loadChildren:'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial.module#DashboardTutorialModule'
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
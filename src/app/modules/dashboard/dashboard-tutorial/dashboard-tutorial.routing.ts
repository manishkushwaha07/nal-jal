import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTutorialComponent } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial.component';
import { DashboardTutorialHomeComponent } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-home/dashboard-tutorial-home.component';
import { DashboardTutorialNestedFormComponent } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-nested-form/dashboard-tutorial-nested-form.component';
import { DashboardTutorialDownloadsComponent } from './dashboard-tutorial-downloads/dashboard-tutorial-downloads.component';
import { DashboardTutorialMultiselectDropdownComponent } from './dashboard-tutorial-multiselect-dropdown/dashboard-tutorial-multiselect-dropdown.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardTutorialComponent,
    children: [
      { path: 'home', component: DashboardTutorialHomeComponent },
      { path: 'nested-form', component: DashboardTutorialNestedFormComponent },
      { path: 'download-file', component: DashboardTutorialDownloadsComponent },
      { path: 'multiselect-dropdown', component: DashboardTutorialMultiselectDropdownComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardTutorialRoutingModule { }
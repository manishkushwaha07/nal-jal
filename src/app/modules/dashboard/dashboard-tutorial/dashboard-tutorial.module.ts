import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTutorialComponent } from './dashboard-tutorial.component';
import { DashboardTutorialHomeComponent } from './dashboard-tutorial-home/dashboard-tutorial-home.component';
import { DashboardTutorialNestedFormComponent } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-nested-form/dashboard-tutorial-nested-form.component';
import { DashboardTutorialRoutingModule } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial.routing';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';
import { TutorialComponentModule } from 'app/components/tutorial/tutorial-component.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardTutorialRoutingModule,
    TutorialComponentModule
  ],
  declarations: [
    DashboardTutorialNestedFormComponent,
    DashboardTutorialComponent,
    DashboardTutorialHomeComponent
  ],
  providers: [
    DashboardTutorialMenuService
  ]
})
export class DashboardTutorialModule { }

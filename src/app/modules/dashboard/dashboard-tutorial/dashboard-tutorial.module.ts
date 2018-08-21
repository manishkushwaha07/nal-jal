import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTutorialComponent } from './dashboard-tutorial.component';
import { DashboardTutorialHomeComponent } from './dashboard-tutorial-home/dashboard-tutorial-home.component';
import { DashboardTutorialNestedFormComponent } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-nested-form/dashboard-tutorial-nested-form.component';
import { DashboardTutorialRoutingModule } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial.routing';
import { DashboardTutorialMenuService } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-menu.service';
import { TutorialComponentModule } from 'app/components/tutorial/tutorial-component.module';
import { DashboardTutorialDownloadsComponent } from './dashboard-tutorial-downloads/dashboard-tutorial-downloads.component';
import { LoaderComponentModule } from '../../../components/loader/loader-component.module';
import { ErrorsComponentModule } from '../../../components/errors/errors-component.module';
import { DirectiveModule } from 'app/directives/directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardTutorialMultiselectDropdownComponent } from 'app/modules/dashboard/dashboard-tutorial/dashboard-tutorial-multiselect-dropdown/dashboard-tutorial-multiselect-dropdown.component';
import { MultiselectDropdownComponentModule } from 'app/components/multiselect-dropdown/multiselect-dropdown-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    LoaderComponentModule,
    ErrorsComponentModule,
    TutorialComponentModule,
    DashboardTutorialRoutingModule,
    MultiselectDropdownComponentModule
  ],
  declarations: [
    DashboardTutorialNestedFormComponent,
    DashboardTutorialComponent,
    DashboardTutorialHomeComponent,
    DashboardTutorialDownloadsComponent,
    DashboardTutorialMultiselectDropdownComponent
  ],
  providers: [
    DashboardTutorialMenuService
  ]
})
export class DashboardTutorialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { FooterComponentModule } from 'app/components/footer/footer-component.module';
import { NavbarComponentModule } from 'app/components/navbar/navbar-component.module';
import { DashboardMenuService } from 'app/modules/dashboard/dashboard-menu.service';
import { DashboardRoutingModule } from 'app/modules/dashboard/dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    NavbarComponentModule,
    FooterComponentModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
  ],
  providers: [
    DashboardMenuService
  ],
})
export class DashboardModule { }

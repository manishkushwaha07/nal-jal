import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'app/modules/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { ChartModule } from '../../components/chart/chart.module';
// import { LoginModule } from 'app/components/login/login.module';
import { NavbarComponentModule } from '../../components/navbar/navbar-component.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    // LoginModule,
    ChartModule,
    NavbarComponentModule
  ],
  declarations: [HomeComponent],
})
export class HomeModule { }

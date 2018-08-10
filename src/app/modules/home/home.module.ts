import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'app/modules/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { LoginModule } from '../login/login.module';
import { ChartModule } from '../../components/chart/chart.module';
import { HeaderComponentModule } from '../../components/header/header-component.module';
import { NavbarComponentModule } from '../../components/navbar/navbar-component.module';
import { LoginComponent } from '../login/login.component';


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

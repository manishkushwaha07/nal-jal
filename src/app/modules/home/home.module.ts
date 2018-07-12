import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { LoginModule } from '../login/login.module';
import { ChartModule } from '../../components/chart/chart.module';
import { HeaderComponentModule } from '../../components/header/header-component.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginModule,
    ChartModule,
    HeaderComponentModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

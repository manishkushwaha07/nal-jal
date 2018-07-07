import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { LoginModule } from '../login/login.module';
import { ChartModule } from '../../components/chart/chart.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginModule,
    ChartModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

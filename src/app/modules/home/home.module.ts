import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { HomeRoutingModule } from './home.routing';
import { LoginModule } from '../login/login.module';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

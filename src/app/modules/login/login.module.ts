import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from 'src/app/modules/login/login.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

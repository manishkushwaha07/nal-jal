import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginServiceModule { }

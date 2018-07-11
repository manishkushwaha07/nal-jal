import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutService } from './logout.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LogoutService
  ]
})
export class LogoutServiceModule { }

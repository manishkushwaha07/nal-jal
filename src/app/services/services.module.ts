import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceModule } from 'src/app/services/login/login-service.module';

@NgModule({
  imports: [
    CommonModule,
    LoginServiceModule
  ],
  declarations: []
})
export class ServicesModule { }

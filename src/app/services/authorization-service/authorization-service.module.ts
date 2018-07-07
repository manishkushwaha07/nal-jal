import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from "src/app/services/authorization-service/authorization.service";
import { LoginServiceModule } from 'src/app/services/login/login-service.module';

@NgModule({
  imports: [
    CommonModule,
    LoginServiceModule
  ],
  providers: [
    AuthorizationService
  ]
})
export class AuthorizationServiceModule { }

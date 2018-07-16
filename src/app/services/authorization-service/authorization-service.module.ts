import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from "app/services/authorization-service/authorization.service";

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthorizationService
  ]
})
export class AuthorizationServiceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceModule } from 'src/app/services/login/login-service.module';
import { ReadServiceModule } from './read/read-service.module';
import { BillServiceModule } from './bill/bill-service.module';
import { PaginationServiceModule } from './pagination/pagination-service.module';
import { SessionTimerServiceModule } from 'src/app/services/session-timer/session-timer-service.module';
import { LogoutServiceModule } from 'src/app/services/logout/logout-service.module';
import { AuthorizationServiceModule } from 'src/app/services/authorization-service/authorization-service.module';
import { LocationServiceModule } from 'src/app/services/location/location-service.module';


@NgModule({
  imports: [
    CommonModule,
    LoginServiceModule,
    LogoutServiceModule,
    ReadServiceModule,
    BillServiceModule,
    LocationServiceModule,
    PaginationServiceModule,
    SessionTimerServiceModule,
    AuthorizationServiceModule
  ],
  declarations: []
})
export class ServicesModule { }

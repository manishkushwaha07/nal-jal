import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceModule } from 'app/services/login/login-service.module';
import { ReadServiceModule } from './read/read-service.module';
import { BillServiceModule } from './bill/bill-service.module';
import { PaginationServiceModule } from './pagination/pagination-service.module';
import { SessionTimerServiceModule } from 'app/services/session-timer/session-timer-service.module';
import { LogoutServiceModule } from 'app/services/logout/logout-service.module';
import { AuthorizationServiceModule } from 'app/services/authorization-service/authorization-service.module';
import { LocationServiceModule } from 'app/services/location/location-service.module';


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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginServiceModule } from 'src/app/services/login/login-service.module';
import { ReadServiceModule } from './read/read-service.module';
import { BillServiceModule } from './bill/bill-service.module';
import { PaginationServiceModule } from './pagination/pagination-service.module';


@NgModule({
  imports: [
    CommonModule,
    LoginServiceModule,
    ReadServiceModule,
    BillServiceModule,
    PaginationServiceModule
  ],
  declarations: []
})
export class ServicesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationService } from './pagination.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PaginationService
  ]
})
export class PaginationServiceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityService } from 'app/services/utility/utility.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UtilityService
  ]
})
export class UtilityServiceModule { }

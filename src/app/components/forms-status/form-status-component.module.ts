import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStatusComponent } from './form-status.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormStatusComponent
  ],
  exports:[
    FormStatusComponent
  ],
})
export class FormStatusComponentModule { }

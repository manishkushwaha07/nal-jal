import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorsComponent } from 'app/components/errors/show/show-errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShowErrorsComponent
  ],
  exports:[
    ShowErrorsComponent
  ]
})
export class ErrorsComponentModule { }

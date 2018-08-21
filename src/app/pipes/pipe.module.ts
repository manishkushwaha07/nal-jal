import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqualPipe } from './equal.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EqualPipe],
  exports:[EqualPipe]
})
export class PipeModule { }

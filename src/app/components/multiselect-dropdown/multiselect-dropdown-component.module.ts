import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectDropdownComponent } from './multiselect-dropdown.component';
import { PipeModule } from '../../pipes/pipe.module';
import { EqualPipe } from 'app/pipes/equal.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [MultiselectDropdownComponent],
  exports:[MultiselectDropdownComponent],
  providers: [
    EqualPipe,
    ],
})
export class MultiselectDropdownComponentModule { }

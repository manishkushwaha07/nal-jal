import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectDropdownComponent } from './multiselect-dropdown.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiselectDropdownComponent],
  exports:[MultiselectDropdownComponent]
})
export class MultiselectDropdownComponentModule { }

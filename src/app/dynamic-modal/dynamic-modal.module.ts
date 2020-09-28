import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModalComponent } from './dynamic-modal.component';
import { DynamicModalService } from './dynamic-modal.service';
import { DynamicModalDirective } from './dynamic-modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DynamicModalComponent, DynamicModalDirective],
  exports:[DynamicModalComponent],
  entryComponents:[DynamicModalComponent]
})
export class DynamicModalModule { }

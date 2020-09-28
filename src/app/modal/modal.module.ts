import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalService } from './modal.service';
export { ModalService } from './modal.service';
export { ModalConfig } from './modal-config';
export { ModalOptions} from './modal-option';
export { ModalRef } from './modal-ref';
export { ModalActiveRef} from './modal-active-ref';
export { ModalDismissReasons } from  './modal-dismiss-reasons';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent, ModalBackdropComponent],
  entryComponents: [ModalComponent, ModalBackdropComponent],
  providers: [ModalService]
})
export class ModalModule { }

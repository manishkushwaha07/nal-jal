import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionTimerComponent } from './session-timer.component';
import { LoginModalComponent } from 'app/modals/login-modal/login-modal.component';
import { ModalsModule } from '../../../modals/modals.module';

@NgModule({
  imports: [
    CommonModule,
    ModalsModule,
  ],
  declarations: [SessionTimerComponent],
  exports:[SessionTimerComponent],
  entryComponents:[LoginModalComponent]
})
export class SessionTimerModule { }

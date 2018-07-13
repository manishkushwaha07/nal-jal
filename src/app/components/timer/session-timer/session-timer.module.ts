import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionTimerComponent } from './session-timer.component';
// import { LoginModalModule } from 'app/modals/login-modal/login-modal.module';
// import { LoginModalComponent } from 'app/modals/login-modal/login-modal.component';

@NgModule({
  imports: [
    CommonModule,
    // LoginModalModule,
  ],
  declarations: [SessionTimerComponent],
  exports:[SessionTimerComponent],
  // entryComponents:[LoginModalComponent]
})
export class SessionTimerModule { }

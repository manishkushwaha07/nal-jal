import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionTimerModule } from 'app/components/timer/session-timer/session-timer.module';
import { HeaderComponentModule } from 'app/components/header/header-component.module';

@NgModule({
  imports: [
    CommonModule,
    SessionTimerModule,
    HeaderComponentModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarComponentModule { }

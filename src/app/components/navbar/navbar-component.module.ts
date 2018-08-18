import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SessionTimerModule } from 'app/components/timer/session-timer/session-timer.module';
import { HeaderComponentModule } from 'app/components/header/header-component.module';
import { LoginModule } from 'app/components/login/login.module';
import { LoginComponent } from 'app/components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SessionTimerModule,
    HeaderComponentModule,
    LoginModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  entryComponents:[LoginComponent]
})
export class NavbarComponentModule { }

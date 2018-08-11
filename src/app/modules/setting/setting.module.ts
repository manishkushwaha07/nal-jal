import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from 'app/modules/setting/setting.routing';
import { SessionTimerModule } from 'app/components/timer/session-timer/session-timer.module';
import { SettingMenuService } from 'app/modules/setting/setting-menu.service';
import { SettingHomeComponent } from './setting-home/setting-home.component';
import { FormsModule } from '@angular/forms';
import { UserServiceModule } from '../../services/user/user-service.module';
import { DirectiveModule } from 'app/directives/directive.module';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateProfileComponent } from 'app/modules/setting/update-profile/update-profile.component';
import { FooterComponentModule } from 'app/components/footer/footer-component.module';
import { NavbarComponentModule } from 'app/components/navbar/navbar-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectiveModule,
    //SessionTimerModule,
    NavbarComponentModule,
    FooterComponentModule,
    SettingRoutingModule
    //UserServiceModule
  ],
  declarations: [SettingComponent, UpdateProfileComponent, SettingHomeComponent, UpdatePasswordComponent],
  providers: [SettingMenuService]
})
export class SettingModule { }

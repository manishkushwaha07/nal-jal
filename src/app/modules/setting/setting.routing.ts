import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateAuthGuard } from "app/guards/can-activate.authguard";
import { GlobalConfiguration } from "app/config/global.config";
import { SettingComponent } from 'app/modules/setting/setting.component';
import { SettingHomeComponent } from 'app/modules/setting/setting-home/setting-home.component';
import { UpdateProfileComponent } from 'app/modules/setting/update-profile/update-profile.component';
import { UpdatePasswordComponent } from 'app/modules/setting/update-password/update-password.component';

const settingRoutes: Routes = [
  {
    path: '', component: SettingComponent, canActivate: [CanActivateAuthGuard], 
    // data: {
    //   expectedRoles : [GlobalConfiguration.ROLE_OAG,GlobalConfiguration.ROLE_OIC,GlobalConfiguration.ROLE_OPERATOR,GlobalConfiguration.ROLE_EE]
    // },
    children: [
      {
        path: '',
        canActivateChild: [CanActivateAuthGuard],
        children: [
          {
            path: 'home', component: SettingHomeComponent
          },
          {
            path: 'update/profile', component: UpdateProfileComponent
          },
          {
            path: 'update/password', component: UpdatePasswordComponent
          },
          {
            path: '', redirectTo: 'home', pathMatch: 'full'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(settingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingRoutingModule { }